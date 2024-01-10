---
title: K8S 无感发布
date: 2024-01-10
tag:
- k8s
- 无感发布
category:
- k8s
---

## 背景

问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。

问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的

核心问题：

1. k8s如何知道pod可以对外提供服务了
2. pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown

## 配置

其实主要利用k8s pod的两个东西：

1. 就绪探针
2. preStop

如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。

- 就绪探针就配置 /actuator/health，或者自定义一个url
- preStop就配置/actuator/shutdown

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：夜长未必梦多，但想吃的是真的很多。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=b1dab17e-1b7e-4f98-9b76-f3961075e64f)
