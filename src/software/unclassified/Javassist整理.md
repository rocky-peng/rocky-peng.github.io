---
title: Javassist整理
date: 2017-01-03
---

1. ClassPool.get(classFullName) 执行成功的条件
    满足一条即可
    - classFullName对应的class是由ClassPool创建的
    - 执行的时候存在对应的class二进制文件
    
    因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。

2. CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。

3. 由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除
4. 
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我连名牌都不认识几个，有时候，别人在炫富我都不知道。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=41c970ec-a64a-4791-afae-66bfa291d5e3)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：可有可无的东西，一律可无。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=6f660c8e-1fd8-4335-a48e-aef2919b4fce)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：白天嘈杂得不愿意醒，夜晚安静得舍不得睡。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=d592c475-f944-4fe8-b719-b236ef6c06fe)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：没人能笑着走出男友的手机，如果能，他一定还有一部。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=2ffd3d7b-f319-40d2-a2a3-63cadb793fec)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：失败乃成功之母，没人会一直失败，只是多感受了一点母爱。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=bbadf9e8-d10a-42e9-a029-f7208af38e86)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：总有这样的人，该干活的时候职业不起来，玩的时候又放不开。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=2ebc7dd6-ce47-4e67-b82b-9810637f6413)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：为什么家长只关注成绩呢？那废话，他们能看得懂题吗？
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=c93248e4-15e9-46dc-ad08-5b3451bfb8c6)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：信就信，不信就不信，还TM整个微信。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=3e7509ba-5465-454d-87f1-1a9437314fab)
