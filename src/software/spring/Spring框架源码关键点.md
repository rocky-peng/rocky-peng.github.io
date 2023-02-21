---
title: Spring框架源码关键点
date: 2019-02-24
---

CommonAnnotationBeanPostProcessor

AutowiredAnnotationBeanPostProcessor




BeanDefinition

DefaultListableBeanFactory

GenericApplicationContext

AnnotationConfigApplicationContext

DefaultListableBeanFactory  is a key delegate of GenericApplicationContext container

通过  BeanPostProcessor  实现的aop，相关的还有 LoadTimeWeaver   



compatible   兼容的
complicated  复杂的

explicitly： 显式的
implicitly： 隐式的

CopyOnWriteArrayList

Spring’s DataBinder and the lower-level BeanWrapper both use PropertyEditorSupport implementations to parse and format property values.





BeanFactory:
	
	
	

单例的存放位置：
```

1. 非工厂bean创建的单例对象
org.springframework.beans.factory.support.DefaultSingletonBeanRegistry#singletonObjects

private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);

2. 由工厂bean创建的单例对象
org.springframework.beans.factory.support.FactoryBeanRegistrySupport#factoryBeanObjectCache

private final Map<String, Object> factoryBeanObjectCache = new ConcurrentHashMap<>(16);

3. 针对class="${custom.strategy.class}"的解析代码在
org.springframework.beans.factory.support.AbstractBeanFactory#evaluateBeanDefinitionString

4. 根据BeanDefinition创建bean的代码在
org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#createBean(java.lang.String, org.springframework.beans.factory.support.RootBeanDefinition, java.lang.Object[])


```


策略模式：做同一件事的不同方法




---

### getBean(String)的过程
![getBean(String)的过程](https://cdn.justdopay.com/xiaoshujiang/1629079451862.png)

bean的初始化过程：



1. 找到构造方法
	1. 可能是普通的构造方法
	2. 可能是工厂方法

2. 执行构造方法
	执行策略：cglib和simple，具体参考InstantiationStrategy接口的实现类。
	这一步仅仅创建了这么一个实例，但还没有进行DI等操作。

3. 执行 MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition

4. 对实例的字段进行赋值
	如果被赋值的对象是一个引用，会~~递归~~(不确定是否是单线程递归，如果单线程递归的话那循环引用怎么处理的？)进行创建
	
5. 初始化对象
	1. invokeAwareMethods
	2. applyBeanPostProcessorsBeforeInitialization 
		这个方法就是在应用BeanProcessors的 postProcessBeforeInitialization 方法
		这里面就包含了对 javax.annotation.PostConstruct 注解方法的执行
	3. invokeInitMethods
		1. InitializingBean#afterPropertiesSet
		2. 自定义的init-method
	4. applyBeanPostProcessorsAfterInitialization
		这个方法就是在应用BeanProcessors的 postProcessAfterInitialization 方法
		这里面就包含了对 javax.annotation.PreDestroy 注解方法的执行
		
		
5. doGetBean通过name的查找bean的过程（name不带地址符）
	1. 获取name对应的规范名称。（如果name本身就是规范名称，则直接返回，如果是别名，则返回别名对应的规范名称）
	2. 尝试从缓存中获取实例
	3. 



初始化过程个人觉得太复杂了，让你不容易理解。Spring也许是为了追求代码的重复利用，我去完成的话，我可能偏向代码的阅读性，当然也许经过很多版本的迭代后也会成为类似Spring这样的代码


好像针对任何一步输入都设置了回调方法能够进行对输入进行更改
比如：BeanPostProcessor的很多子接口和实现类

关于实例化和初始化的回调。
1. 实例化前 
postProcessBeforeInstantiation

2. 实例化后
postProcessAfterInstantiation

3. 初始化前
postProcessBeforeInitialization

4. 初始化后
postProcessAfterInitialization

5. 对属性值的修改
postProcessProperties

6. 对BeanDefinition对象进行操作
postProcessMergedBeanDefinition
----


### InitDestroyAnnotationBeanPostProcessor


### CommonAnnotationBeanPostProcessor
#### 支持解析的注解
1. Resource（来自JSR-250  javax.annotation.Resource）
2. PostConstruct （ javax.annotation.PostConstruct）
3. PreDestroy （ javax.annotation.PreDestroy）
4. WebServiceRef （javax.xml.ws.WebServiceRef）
5. EJB （javax.ejb.EJB）


### AutowiredAnnotationBeanPostProccessor
#### 默认支持解析的注解
AutowiredAnnotationBeanPostProccessor 类支持解析三个注解：
1. @Autowired
2. @Value
3. @Inject （来自JSR-330 javax.inject.Inject） 
使用@Inject注解的地方都能使用@Autowired注解替换
#### 查找指定注解元数据的过程
1. ReflectionUtils.doWithLocalFields 遍历指定类的所有field，在field上找
2. ReflectionUtils.doWithLocalMethods 遍历指定类的所有方法，在method上找
3. 获取指定的父类，循环上述过程

注意：如果字段或者方法上同时添加了@Value  @Autowired  @Inject注解，只会处理一个注解，处理哪个注解呢？ 这个加入的顺序了。代码如下：
```java
@Nullable
private MergedAnnotation<?> findAutowiredAnnotation(AccessibleObject ao) {
	MergedAnnotations annotations = MergedAnnotations.from(ao);

	for (Class<? extends Annotation> type : this.autowiredAnnotationTypes) {
		MergedAnnotation<?> annotation = annotations.get(type);
		if (annotation.isPresent()) {
			//找到一个目标注解就返回。  也就是说如果一个字段或者方法同时加了 Autowired Value Inject注解，Autowired的优先级最高。
			//具体哪个优先级最好，看加入的顺序了
			return annotation;
		}
	}
	return null;
}
```

### 疑问
#### 为什么Spring里很多地方要对ConcurrentHashMap对象进行加锁？


----

### Spring的DCL案例：
#### AutowiredAnnotationBeanPostProcessor#findAutowiringMetadata
```java
private InjectionMetadata findAutowiringMetadata(String beanName, Class<?> clazz, @Nullable PropertyValues pvs) {
	// Fall back to class name as cache key, for backwards compatibility with custom callers.
	String cacheKey = (StringUtils.hasLength(beanName) ? beanName : clazz.getName());
	// Quick check on the concurrent map first, with minimal locking.
	InjectionMetadata metadata = this.injectionMetadataCache.get(cacheKey);

	//存在一个 DCL
	if (InjectionMetadata.needsRefresh(metadata, clazz)) {
		synchronized (this.injectionMetadataCache) {
			metadata = this.injectionMetadataCache.get(cacheKey);
			if (InjectionMetadata.needsRefresh(metadata, clazz)) {
				if (metadata != null) {
					metadata.clear(pvs);
				}
				metadata = buildAutowiringMetadata(clazz);
				this.injectionMetadataCache.put(cacheKey, metadata);
			}
		}
	}
	return metadata;
}
```

#### AbstractBeanFactory#markBeanAsCreated
```java
protected void markBeanAsCreated(String beanName) {
	if (!this.alreadyCreated.contains(beanName)) {
		synchronized (this.mergedBeanDefinitions) {
			if (!this.alreadyCreated.contains(beanName)) {
				// Let the bean definition get re-merged now that we're actually creating
				// the bean... just in case some of its metadata changed in the meantime.
				clearMergedBeanDefinition(beanName);
				this.alreadyCreated.add(beanName);
			}
		}
	}
}
```

#### SmartInitializingSingleton
```java
public interface SmartInitializingSingleton {
    //在所有bean执行了getBean后才会执行这个方法
	void afterSingletonsInstantiated();
}
```

### 替换占位符的查找位置
1. 应用本身指定的配置信息
2. System.getProperties();
3. System.getenv();
代码如下：（在ConfigurableApplicationnContext中）
```java
/**
 * Name of the {@link Environment} bean in the factory.
 * <p>
 * Environment实例的名字
 *
 * @since 3.1
 */
String ENVIRONMENT_BEAN_NAME = "environment";

/**
 * Name of the System properties bean in the factory.
 *
 * @see java.lang.System#getProperties()
 */
String SYSTEM_PROPERTIES_BEAN_NAME = "systemProperties";

/**
 * Name of the System environment bean in the factory.
 *
 * @see java.lang.System#getenv()
 */
String SYSTEM_ENVIRONMENT_BEAN_NAME = "systemEnvironment";
```


### ApplicationContext事件的发布
发布一个事件后，不仅会在本容器中发布还会在父容器中发布。
代码在：AbstractApplicationContext#publishEvent(java.lang.Object, org.springframework.core.ResolvableType)
```java
// 发布一个事件后，不仅会在本容器中发布，还会在父容器中发布
// Publish event via parent context as well...
if (this.parent != null) {
	if (this.parent instanceof AbstractApplicationContext) {
		((AbstractApplicationContext) this.parent).publishEvent(event, eventType);
	} else {
		this.parent.publishEvent(event);
	}
}
```

### 一些内置组件的名字
#### AbstractApplicationContext中定义的
1. messageSource  
2. lifycycleProcessor
3. applicationEventMulticaster

#### ConfigurableApplicationContext中定义的
1. conversionService
2. loadTimeWeaver
3. environment


### Application启动流程
1. 初始化环境，也就是初始化配置文件。
	比如 xxx.properties  xxxx.yml
2. 初始化BeanDefinition


### MergedBeanDefinitionPostProcessor
```java
public interface MergedBeanDefinitionPostProcessor extends BeanPostProcessor {

	/**
	 * 
	 * 调用时机：实例化bean后，初始化bean前
	 */
	void postProcessMergedBeanDefinition(RootBeanDefinition beanDefinition, Class<?> beanType, String beanName);

	default void resetBeanDefinition(String beanName) {
	}

}
```

### InstantiationAwareBeanPostProcessor
```java
public interface InstantiationAwareBeanPostProcessor extends BeanPostProcessor {

	/**
	 * 实例化前调用的，返回null表示采用默认的实例化方法
	 */
	@Nullable
	default Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {
		return null;
	}

	/**
	 * 实例化后调用的
	 * 返回true: 表示应该执行populateBean
	 * 返回false：表示应该跳过执行populateBean
	 */
	default boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {
		return true;
	}

	/**
	* 执行postProcessAfterInstantiation后调用这个方法
	*/
	@Nullable
	default PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName)
			throws BeansException {

		return null;
	}

	/**
	* 已过期，由postProcessProperties方法替代
	*/
	@Deprecated
	@Nullable
	default PropertyValues postProcessPropertyValues(
			PropertyValues pvs, PropertyDescriptor[] pds, Object bean, String beanName) throws BeansException {

		return pvs;
	}

}
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：真是一代不如一代，毕竟我祖祖辈辈，都能脱单。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=92204ac9-3f02-4b50-b8e9-b77870d00699)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：人生就像一杯水，孤独 孤独 孤独，一辈子就完了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=1786edd4-d455-44d3-bd3b-94d9a9d11ec3)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：信就信，不信就不信，还TM整个微信。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=e79fd5ad-634d-45c2-9a79-b00ce7e29046)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：小时候写作文都是扶老人，现在想想，我当年胆子真大啊！
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=6509487d-c12c-492f-9d04-5b1c681364f3)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：人生最大的耻辱是什么？考试作弊了还不及格。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=71594f74-51ed-492e-ba94-755d57a9f374)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我要努力变成你喜欢的样子，然后打死也不跟你在一起。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=18ecf08b-04d0-49f0-b617-86e745a317d1)
