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
- **随机毒鸡汤**：我有很多好朋友，但这些好朋友，都有比我更好的朋友。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=a92aa813-cf37-4d3d-a99b-49901a20be41)
