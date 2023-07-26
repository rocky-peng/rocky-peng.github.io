---
title: Nacos-Spring Gateway-Spring boot无感发布
date: 2023-07-26
category: 
- 无感发布
tag: 
- nacos
- 无感发布
- spring cloud gateway
- spring boot
---

## 问题一

在重启某个节点过程中，该节点已有的请求**要求能正常响应**

```yaml
server:
  # 开启优雅停机。关闭时如果有请求正在处理，会等待指定时间，以尽量把现有请求处理完。
  # 接收到关闭请求后，不会再接受新的请求
  shutdown: graceful
spring:
  lifecycle:
    timeout-per-shutdown-phase: 120s
```

在spring boot中增加了上面的配置后，进程在停机的时候，会尽量把现有的请求处理完成，同时不会在接受新的请求

## 问题二

加入上面的配置后，执行了关闭动作，假设已有6个请求还未处理，假设需要耗时6秒。在这6秒内我们知道进程不会再接受新的请求，但如何保证说gateway不会再转发请求到这个进程呢？ 

首先我们要尽快的从nacos中取消注册，但是我们会发现在这6秒内，nacos中仍然有这个服务的信息。方案如下（在服务提供者中添加）：

```java
import com.alibaba.cloud.nacos.registry.NacosAutoServiceRegistration;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.stereotype.Component;

/**
 * @author xxx
 * @date 2023/7/25 15:43
 * @desc 关闭监听器，在刚接受到关闭信号的时候就取消注册nacos，尽量避免新的流量尽量。
 * 之所以是尽量，是因为gateway或其他nacos消费者可能还有本地缓存。
 */
@Slf4j
@Component
public class ContextClosedListener implements ApplicationListener<ContextClosedEvent> {

    @Autowired
    private NacosAutoServiceRegistration nacosAutoServiceRegistration;

    @Override
    public void onApplicationEvent(ContextClosedEvent contextClosedEvent) {
        try {
            log.info("取消注册nacos start");
            nacosAutoServiceRegistration.stop();
            log.info("取消注册nacos finished");
        } catch (Exception e) {
            log.error("取消注册nacos异常:" + e.getMessage(), e);
        }
    }
}
```

## 问题三

虽然有问题的服务已经尽快从nacos中取消注册了，但gateway一般是有缓存服务信息的，那么如何让gateway尽快感知服务列表的变动呢？

默认情况下我们会发现gateway是有缓存路由信息的，这个问题可参考：[https://blog.csdn.net/asdfadafd/article/details/126114123](https://blog.csdn.net/asdfadafd/article/details/126114123)

直接上代码，在gateway中添加：

```java
import com.alibaba.cloud.nacos.NacosDiscoveryProperties;
import com.alibaba.cloud.nacos.NacosServiceManager;
import com.xxxx.utils.SpringContextHolder;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;
import org.springframework.cloud.loadbalancer.cache.LoadBalancerCacheManager;
import org.springframework.cloud.loadbalancer.config.LoadBalancerCacheAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(SpringContextHolder.class)
@AutoConfigureAfter(LoadBalancerCacheAutoConfiguration.class)
public class NacosConfig {

    @Bean
    public NacosSubscriber nacosSubscriber(NacosServiceManager nacosServiceManager,
                                           NacosDiscoveryProperties nacosDiscoveryProperties,
                                           RouteDefinitionLocator routeDefinitionLocator
    ) {
        LoadBalancerCacheManager loadBalancerCacheManager = SpringContextHolder.getBean(LoadBalancerCacheManager.class);
        return new NacosSubscriber(nacosServiceManager, nacosDiscoveryProperties, new NacosEventListener(loadBalancerCacheManager), routeDefinitionLocator);
    }
}

///////////////////////////////////////////////////////////

import cn.hutool.json.JSONUtil;
import com.alibaba.cloud.nacos.discovery.NacosServiceDiscovery;
import com.alibaba.nacos.api.common.Constants;
import com.alibaba.nacos.api.naming.listener.Event;
import com.alibaba.nacos.api.naming.listener.EventListener;
import com.alibaba.nacos.api.naming.listener.NamingEvent;
import com.alibaba.nacos.api.naming.pojo.Instance;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cloud.loadbalancer.core.CachingServiceInstanceListSupplier;

import java.util.List;

@Slf4j
@AllArgsConstructor
public class NacosEventListener implements EventListener {

    private CacheManager cacheManager;

    @Override
    public void onEvent(Event event) {
        if (event == null) {
            return;
        }

        if (!(event instanceof NamingEvent)) {
            return;
        }

        try {
            Cache cache = cacheManager.getCache(CachingServiceInstanceListSupplier.SERVICE_INSTANCE_CACHE_NAME);
            if (cache == null) {
                return;
            }

            NamingEvent namingEvent = ((NamingEvent) event);
            String serviceName = namingEvent.getServiceName();
            String[] split = serviceName.split(Constants.SERVICE_INFO_SPLITER);
            for (String serviceId : split) {
                log.info("收到更新服务消息：{}", JSONUtil.toJsonStr(event));
                List<Instance> instances = namingEvent.getInstances();
                cache.put(serviceId, NacosServiceDiscovery.hostToServiceInstanceList(instances, serviceId));
            }
        } catch (Exception e) {
            log.error("处理nacos事件异常，event: {}", JSONUtil.toJsonStr(event), e);
        }
    }
}

///////////////////////////////////////////////////////////

import cn.hutool.core.collection.CollUtil;
import com.alibaba.cloud.nacos.NacosDiscoveryProperties;
import com.alibaba.cloud.nacos.NacosServiceManager;
import com.alibaba.nacos.api.naming.NamingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.event.RefreshRoutesEvent;
import org.springframework.cloud.gateway.route.RouteDefinition;
import org.springframework.cloud.gateway.route.RouteDefinitionLocator;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@AllArgsConstructor
public class NacosSubscriber {

    private NacosServiceManager nacosServiceManager;

    private NacosDiscoveryProperties nacosDiscoveryProperties;

    private NacosEventListener nacosEventListener;

    /**
     * private GatewayProperties gatewayProperties;
     * 不用这个的原因是获取不到路由信息
     */
    private RouteDefinitionLocator routeDefinitionLocator;

    @PostConstruct
    @org.springframework.context.event.EventListener({RefreshRoutesEvent.class})
    public void subscribe() {
        Set<String> serviceNames = new HashSet<>();
        try {
            List<RouteDefinition> routeDefinitions = routeDefinitionLocator.getRouteDefinitions().collectList().block();
            for (RouteDefinition routeDefinition : routeDefinitions) {
                URI uri = routeDefinition.getUri();
                String scheme = uri.getScheme();
                if (!"lb".equalsIgnoreCase(scheme)) {
                    continue;
                }
                String host = uri.getHost();
                serviceNames.add(host);
            }
        } catch (Exception e) {
            log.error("获取路由信息异常：" + e.getMessage(), e);
        }

        if (CollUtil.isEmpty(serviceNames)) {
            return;
        }

        NamingService namingService = nacosServiceManager.getNamingService();
        for (String serviceName : serviceNames) {
            try {
                namingService.subscribe(serviceName, nacosDiscoveryProperties.getGroup(), null, nacosEventListener);
                log.info("订阅服务：{} 成功", serviceName);
            } catch (Exception e) {
                log.info("订阅服务：{} 异常", serviceName, e);
            }
        }
    }
}

///////////////////////////////////////////////////////////

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Lazy;

@Slf4j
@Lazy(false)
public class SpringContextHolder implements ApplicationContextAware, DisposableBean {

    private static ApplicationContext applicationContext = null;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {
        SpringContextHolder.applicationContext = applicationContext;
    }

    public static <T> T getBean(Class<T> requiredType) {
        return applicationContext.getBean(requiredType);
    }

    @Override
    public void destroy() {
        if (log.isDebugEnabled()) {
            log.debug("清除SpringContextHolder中的ApplicationContext:" + applicationContext);
        }
        applicationContext = null;
    }

}
```

## 问题四：

增加上面的代码和配置后，虽然服务的上下线能及时的被gateway感知到，但这个及时也是需要时间的。即便是1毫秒，甚至1纳秒。极端情况下，gateway在这1纳秒内仍然吧请求转发给了正在停机的服务节点，那么这个请求是会异常的。怎么办？

无法完全消灭这个时间差，只是是尽量缩短。万一出现后，只能在gateway中发起**重试**，吧请求转发到其他可用的节点上。

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：如果每个人都能理解你，那你得普通成什么样子。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=979695f3-a1c5-430a-808e-b21fdccecba7)
