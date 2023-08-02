---
title: Spring Boot升级到2 6 x踩的坑
date: 2023-08-02
category: 
- spring boot 2.6.x
- 坑
tag:
- spring boot 2.6.x
- 坑
- 双斜杠
- 循环引用
- 循环依赖
---

## 一：循环依赖异常

比如某个ServiceA 内部引用了自身，目的是为了防止事务注解失效

```java
public class ServiceA {
	
	@Autowired
	private ServiceA serviceA;

	.......
}
```

这种做法在spring boot 2.6.0之前是没有问题的。

现在技术升级，把spring boot的版本从2.3.12.RELEASE升级到了2.6.0，然后出现了下面的提示：

> Relying upon circular references is discouraged and they are prohibited by default. Update your application to remove the dependency cycle between beans. As a last resort, it may be possible to break the cycle automatically by setting spring.main.allow-circular-references to tr
> 

采用的解决方案就是，不直接注入自身，转而注入ApplicationContext，然后在使用的地方通过getBean的方式获取实例对象

## 二：url中的双斜杠出现404

在升级前，如果某个接口地中中有两个双斜杠，是能正常执行的。比如

/api//xxx/xxx   

升级到2.6.x后会返回404，导致接口异常

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：你化成灰我都认得，但是化了妆就不一定了。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=ed2e909d-82dc-442e-a317-76bcc7039af0)
