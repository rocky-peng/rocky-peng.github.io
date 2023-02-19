---
title: SpringCloud总体认识
date: 2019-01-18
---

spring cloud 是微服务分布式部署的一套解决方案。它涵盖了很多组件，比如配置中心、服务发现注册、负载均衡、阻断器、消息总线、数据监控等，这些组件都是为微服务分布式部署中几乎都会遇到的问题。

微服务：通俗的讲就是功能相关的的一个集合作为一个服务单独进行部署，那么很多个这样的集合就构成了微服务。用专业一点的俗语讲就是把满足	srp(single_responsibility_principle)原则的的服务。
![](https://cdn.justdopay.com/xiaoshujiang/1629079407248.png)

## Spring Cloud与Dubbo的区别
1. 微服务涵盖范围不同：dubbo专注于服务治理，只涵盖了微服务架构的某些方面。而spring cloud涵盖了微服务架构的方方面面。
2. 服务调用方式不同：spring cloud基于http协议进行调用，dubbo基于tcp协议调用，所以dubbo在代码上调用方和服务方依赖性强
![](https://cdn.justdopay.com/xiaoshujiang/1629079412706.png)

## Eureka（服务发现注册中心）
和zookeeper / consul 类似




## Hystrix（熔断器）
Hystrix 会在某个服务连续调用 N 次不响应的情况下，立即通知调用端调用失败，避免调用端持续等待而影响了整体服务。Hystrix 间隔时间会再次检查此服务，如果服务恢复将继续提供服务。
![](https://cdn.justdopay.com/xiaoshujiang/1629079417263.png)
熔断监控工具：
Hystrix Dashbord和Turbine。 turbine用于各个在微服务中收集熔断数据， hystrix dashbord则用于展示这些数据。显示效果如下：
![](https://cdn.justdopay.com/xiaoshujiang/1629079422541.png)

## Spring Cloud Config（配置中心）
配置的集中化管理，当配置在服务运行期间发生改变的时候可以通过refresh功能刷新配置。生产环境建议配置中心集群化部署已保证其高可用性。

## Spring Cloud Bus (通讯组件)
通过spring cloud bus可以连接各个微服务节点，当需要给多个或者所有服务节点发送某个信息的时候，即可通过spring cloud bus来完成。

比如：当某个配置发生改变后，需要通知对应的服务实例刷新配置，这个时候可以通过sprIng cloud bus来完成。其工作原理如下：
![](https://cdn.justdopay.com/xiaoshujiang/1629079429424.png)

## Spring Cloud Zuul （服务网关）
![](https://cdn.justdopay.com/xiaoshujiang/1629079435563.png)

请求转发，感觉有点类似nginx的角色

## Spring Cloud Sleuth （链路跟踪）
分布式链路跟踪需要 Sleuth+Zipkin 结合来实现。

## 参考文献
> [Spring Cloud（零）：微服务的那些事儿](https://windmt.com/2018/04/14/spring-cloud-0-microservices/)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：每次我刚找到生命的意义，他们就把意思改了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=e7323ccd-275b-42c8-8928-07ece2a9cd9b)
