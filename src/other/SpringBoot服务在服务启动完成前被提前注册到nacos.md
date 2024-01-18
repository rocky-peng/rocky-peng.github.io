---
title: SpringBoot服务在服务启动完成前被提前注册到nacos
date: 2024-01-17
tag:
- nacos
---

springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常

![Untitled](https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png)

上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。

版本信息：

nacos版本：2021.0.5.0

springboot版本：2.6.13

gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。

看代码应该是这里触发了注册：

![Untitled](https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png)

提交bug给nacos，回复不是nacos的职责，所以不处理

当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中

[https://github.com/alibaba/nacos/issues/11061](https://github.com/alibaba/nacos/issues/11061)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：我一般说话都会给人留面子，万一我怼你了，没错我就是故意的。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=46682d6d-40ce-4533-93ea-8f98a1626a8f)
