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

在升级前，**代码中**如果某个接口地中中有两个双斜杠，是能正常执行的。比如代码中某个接口的url拼接起来是：/api//xxx/xxx     用api/xxx/xxx可以正常访问

升级到2.6.x后会不在代码中去掉双斜杠的情况下，用api/xxx/xxx访问就会404，导致接口异常

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：年轻的时候一定要敢于做梦，毕竟年龄一大，就很容易睡不着。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2ed7287b-425c-41ef-b320-a90c63ecc536)
