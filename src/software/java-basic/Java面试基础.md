---
title: Java面试基础
date: 2017-03-12
---

## 重点关注的
### 可达性分析原理：[三色标记](https://www.cnblogs.com/jmcui/p/14165601.html)

![enter description here](https://cdn.justdopay.com/xiaoshujiang/7779607-eecbd09f81b721f8.gif)

### 原子性、有序性、可见性、as-if-serial、happen-before、sync、volatile的关系
- [https://blog.csdn.net/qq_33173608/article/details/88202474](https://blog.csdn.net/qq_33173608/article/details/88202474)

![](https://cdn.justdopay.com/xiaoshujiang/1629078923957.png)

![](https://cdn.justdopay.com/xiaoshujiang/1629078929462.png)

### sync与volatile的区别
- sync可以保证原子、有序、可见性但不能阻止指令重排，volatile可以保证可见，也能阻止指令重排
    
### ConcurrentHashMap
### [ConcurrentHashMap 和 Hashtable 的区别](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.md#concurrenthashmap-%E5%92%8C-hashtable-%E7%9A%84%E5%8C%BA%E5%88%AB)

### [Java集合框架常见面试题](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.md)

![ConcurrentHashMap结构.jpg](https://cdn.justdopay.com/xiaoshujiang/1629078942754.png)

### [JDK1.8中的ConcurrentHashMap的死循环](https://blog.csdn.net/java3456/article/details/107129716/)

### 为啥1.8的ConcurrentHashMap需要通过sync和cas来实现同步而不直接采用cas呢？  
因为如果某个桶是红黑树的结构，这个时候可能需要对整棵树进行调整，所以它锁的是桶的首节点。[ConcurrentLinkedQueue就只是通过cas来完成的](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E6%80%BB%E7%BB%93.md#%E5%9B%9B-concurrentlinkedqueue)

### [HashMap的resize细节](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/HashMap.md#resize%E6%96%B9%E6%B3%95)

### [Explain](https://www.cnblogs.com/tufujie/p/9413852.html)

### [ES打分相关性](https://zhuanlan.zhihu.com/p/27951938)

### a b c建立联合索引顺序是abc，问a=? and c = ? 可以走索引吗？
	可以的，但是走索引的时候的比对条件是a，先找到满足a条件后通过using where过滤掉不满足c的数据。

### [BASE理论](https://www.cnblogs.com/stateis0/p/9062123.html)
### [CAP理论](https://www.cnblogs.com/chihirotan/p/11366394.html)

### JVM调优
- 阿里巴巴数据库连接池的fullgc
- 显示CPU 100%
    - 大概场景是一个同事写了一个循环函数，跳出循环的代码逻辑有点问题，导致无法退出循环，最终导致cpu 100%。
    - 具体场景出来：
    - top -Hp pid 找到cpu最高的线程id，是线程id; 
    - printf '%x' 线程id，得到线程id的16进制
    - jstack pid | grep -A 20  线程id的16进制，找到线程执行的具体代码，检查代码
- jvm内存大小的调优
- GC调优：垃圾收集器的调优

## 知识列表

### [String StringBuffer 和 StringBuilder 的区别是什么? String 为什么是不可变的?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#12-string-stringbuffer-%E5%92%8C-stringbuilder-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88-string-%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF%E4%B8%8D%E5%8F%AF%E5%8F%98%E7%9A%84)

### String为啥要设计为不可变
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629078961400.png)

### [接口和抽象类的区别是什么？](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#17-%E6%8E%A5%E5%8F%A3%E5%92%8C%E6%8A%BD%E8%B1%A1%E7%B1%BB%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)

### [== 与 equals(重要)](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#26--%E4%B8%8E-equals%E9%87%8D%E8%A6%81)

### [hashCode 与 equals (重要)](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#27-hashcode-%E4%B8%8E-equals-%E9%87%8D%E8%A6%81)

### [简述线程、程序、进程的基本概念。以及他们之间关系是什么?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#29-%E7%AE%80%E8%BF%B0%E7%BA%BF%E7%A8%8B%E7%A8%8B%E5%BA%8F%E8%BF%9B%E7%A8%8B%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E4%BB%A5%E5%8F%8A%E4%BB%96%E4%BB%AC%E4%B9%8B%E9%97%B4%E5%85%B3%E7%B3%BB%E6%98%AF%E4%BB%80%E4%B9%88)

### [线程有哪些基本状态?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#30-%E7%BA%BF%E7%A8%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E5%9F%BA%E6%9C%AC%E7%8A%B6%E6%80%81)

### [Java序列化中如果有些字段不想进行序列化，怎么办？](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#33-java%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%AD%E5%A6%82%E6%9E%9C%E6%9C%89%E4%BA%9B%E5%AD%97%E6%AE%B5%E4%B8%8D%E6%83%B3%E8%BF%9B%E8%A1%8C%E5%BA%8F%E5%88%97%E5%8C%96%E6%80%8E%E4%B9%88%E5%8A%9E)

### [Java 中 IO 流](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#35-java-%E4%B8%AD-io-%E6%B5%81)
- [Java 中 IO 流分为几种?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#java-%E4%B8%AD-io-%E6%B5%81%E5%88%86%E4%B8%BA%E5%87%A0%E7%A7%8D)

- [BIO,NIO,AIO 有什么区别?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#bionioaio-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)

- [5种IO模型](https://github.com/rocky-peng/xiaoshujiang/blob/master/IO.md)

- [select、poll、epoll之间的区别](https://www.cnblogs.com/aspirant/p/9166944.html)

### [深拷贝 vs 浅拷贝](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#38-%E6%B7%B1%E6%8B%B7%E8%B4%9D-vs-%E6%B5%85%E6%8B%B7%E8%B4%9D)

### [BigDecimal 的用处](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E7%96%91%E9%9A%BE%E7%82%B9.md#131-bigdecimal-%E7%9A%84%E7%94%A8%E5%A4%84)

### [BigDecimal 的使用注意事项](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E7%96%91%E9%9A%BE%E7%82%B9.md#134-bigdecimal-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

### [Arrays.asList注意事项](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Java%E7%96%91%E9%9A%BE%E7%82%B9.md#213-%E4%BD%BF%E7%94%A8%E6%97%B6%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%E6%80%BB%E7%BB%93)

### [get和post请求的区别](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#get%E5%92%8Cpost%E8%AF%B7%E6%B1%82%E7%9A%84%E5%8C%BA%E5%88%AB)

### [转发(Forward)和重定向(Redirect)的区别](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#%E8%BD%AC%E5%8F%91forward%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91redirect%E7%9A%84%E5%8C%BA%E5%88%AB)

### [Cookie和Session的的区别](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#cookie%E5%92%8Csession%E7%9A%84%E7%9A%84%E5%8C%BA%E5%88%AB)

### [说说List,Set,Map三者的区别？](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.md#%E8%AF%B4%E8%AF%B4listsetmap%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB)

### [说一说 ArrayList 的扩容机制吧](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/ArrayList-Grow.md)

### [HashMap的底层实现](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.md#hashmap%E7%9A%84%E5%BA%95%E5%B1%82%E5%AE%9E%E7%8E%B0)

### [HashMap 多线程操作导致rehash方法死循环问题,jdk1.8之前](https://blog.csdn.net/gupaoedu_tom/article/details/124449573)
  

### [集合框架底层数据结构总结](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.md#%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%BA%95%E5%B1%82%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%80%BB%E7%BB%93)

### [什么是线程和进程?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyBasicsCommonInterviewQuestionsSummary.md#1-%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B)

### [说说 sleep() 方法和 wait() 方法区别和共同点?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyBasicsCommonInterviewQuestionsSummary.md#9-%E8%AF%B4%E8%AF%B4-sleep-%E6%96%B9%E6%B3%95%E5%92%8C-wait-%E6%96%B9%E6%B3%95%E5%8C%BA%E5%88%AB%E5%92%8C%E5%85%B1%E5%90%8C%E7%82%B9)

### [谈谈你对sync的理解](https://blog.csdn.net/wilsonpeng3/article/details/102961874)

### [谈谈 synchronized和ReentrantLock 的区别](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyAdvancedCommonInterviewQuestions.md#15-%E8%B0%88%E8%B0%88-synchronized%E5%92%8Creentrantlock-%E7%9A%84%E5%8C%BA%E5%88%AB)
```java
两者都是可重入的

sync是基于jvm实现的，是隐式锁，而ReentrantLock是基于java api实现的，是显式锁。

性能方便sync做了很多优化措施，差不多

ReentrantLock 比 synchronized 更加灵活（主要是Lock接口里的几个方法展开说就可以了）

public interface Lock {

    void lock();

    void lockInterruptibly() throws InterruptedException;

    boolean tryLock();

    boolean tryLock(long time, TimeUnit unit) throws InterruptedException;

    void unlock();

    Condition newCondition();
}
```

### [volatile关键字](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyAdvancedCommonInterviewQuestions.md#2-volatile%E5%85%B3%E9%94%AE%E5%AD%97)

### [ThreadLocal](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyAdvancedCommonInterviewQuestions.md#31-threadlocal%E7%AE%80%E4%BB%8B)
- **一句话总结**：让线程可以绑定只有自己才能访问的数据

### [一篇文章彻底了解ThreadPoolExecutor](https://blog.csdn.net/wilsonpeng3/article/details/52561716)

### [JUC 包中的原子类是哪4类?](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyAdvancedCommonInterviewQuestions.md#52-juc-%E5%8C%85%E4%B8%AD%E7%9A%84%E5%8E%9F%E5%AD%90%E7%B1%BB%E6%98%AF%E5%93%AA4%E7%B1%BB)

### [也许是把AQS讲得最通俗易懂的一篇文章](https://github.com/rocky-peng/xiaoshujiang/blob/master/juc/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.md)

###  [AQS 组件总结](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyAdvancedCommonInterviewQuestions.md#63-aqs-%E7%BB%84%E4%BB%B6%E6%80%BB%E7%BB%93)

### [CopyOnWriteArrayList](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E6%80%BB%E7%BB%93.md#%E4%B8%89-copyonwritearraylist)

### [并发容器总结](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E6%80%BB%E7%BB%93.md)

### [跳表](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E6%80%BB%E7%BB%93.md#%E5%85%AD-concurrentskiplistmap)

### 每个栈帧中都拥有：局部变量表、操作数栈、动态链接、方法出口信息

### [类加载器](https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.md)

### [计算机网络常见面试题](https://github.com/Snailclimb/JavaGuide/blob/master/docs/network/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.md)

### [不了解布隆过滤器？一文给你整的明明白白！](https://github.com/Snailclimb/JavaGuide/blob/master/docs/dataStructures-algorithms/data-structure/bloom-filter.md)

### 为啥选用RocketMQ不用RabbitMQ
1. 吞吐量比RabbitMQ高（Kafka: 16-17w；RocketMQ:11-12w；RabbitMQ: 2-3W）
2. 支持顺序消息

3. JAVA语言开发，经受住双十一的考验的
4. 支持分布式部署，在可用性方便比RabbitMQ高。RabbitMQ是主从架构
5. 信息丢失方面可以通过0丢失（设置同步刷盘也能不丢失）

### RocketMQ是如何保证高可用的？
1. 从部署架构上说，可以部署多个brocker，把同一个topic的中队列分布在多个brocker上，这样可以减轻某个单台brocker的压力。同时多个brocker还可以各自做一个主从结构，这样如果某个brocker master挂了，其对应的slave也可以顶上来。
2. 然后除了brocker可以做集群，还可以nameserver也可以做集群。namaserver集群中各个nameserver是互相独立的，每个brocker会和每个namaserver保持连接，并定期发送心跳、topic等路由信息。另外生产者和消费者也会定期从nameserver中拉去brocker的路由信息。这样，即便某个nameserver挂了，其他的nameserver也能顶上来。在坏一点，如果所有nameserver都挂了，那么生产者和消息者还可以利用本地保留的路由副本和brocker保持通信。

3. 上面是从部署架构上说，从单台brocker方面而言，其刷盘的方式也可供我们选择。如果选择同步刷盘，还可以保证消息不会丢失。
4. 另外brocker的主从结构也提供了同步复制和异步复制两种方式可供选择，这从一定程度上也保证了可用性

### kafka如何保证消息不丢失
    

	
### [RockerMQ为啥采用nameserver作为注册中心而不是zk](https://github.com/Snailclimb/JavaGuide/blob/master/docs/system-design/data-communication/RocketMQ-Questions.md#2110-rocketmq-%E4%B8%8D%E4%BD%BF%E7%94%A8-zookeeper-%E4%BD%9C%E4%B8%BA%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BB%A5%E5%8F%8A%E8%87%AA%E5%88%B6%E7%9A%84-nameserver-%E4%BC%98%E7%BC%BA%E7%82%B9)

### [RocketMQ的存储机制](https://github.com/Snailclimb/JavaGuide/blob/master/docs/system-design/data-communication/RocketMQ.md#%E5%AD%98%E5%82%A8%E6%9C%BA%E5%88%B6)
- 把所有接受到的消息 **（不区分topic）** 都顺序的存在一个称为commitlog的文件中（物理不是一个文件）. 为啥不分topic: 为了批量顺序写消息，提高写入速度
- consumequeue文件中的目录采用定长设计（8字节物理偏移量，4字节消息大小，8字节tag的hashcode）。这里的物理偏移量不是相对于某个具体commitlog文件，而是性对于整个commitlog文件（就是把所有单个commitlog合在一起看）

- consumerqueue的存在路径是：$HOME/store/consumequeue/{topic}/{queueId}/{fileName}，也就是说当某个消息来了，rocketmq会先追加到commitlog中，然后根据这条消息要发往的topic和queueid信息再把这小消息的索引信息写到对应的consumequeue中
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629083802788.png)

### [Kafka的存储结构](https://github.com/Snailclimb/JavaGuide/blob/master/docs/system-design/data-communication/Kafka%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.md#%E8%AE%A8%E8%AE%BA%E4%BA%8Ckafka-%E4%B8%AD%E7%9A%84%E5%BA%95%E5%B1%82%E5%AD%98%E5%82%A8%E8%AE%BE%E8%AE%A1)
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629083785626.png)

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629083773704.png)

所以当要读取第n个消息的时候，只需要对index或者log文件的文件名进行二分查找，这样可以确定在哪个log文件中，然后在对应的index文件中在进行一次二分查找，就可以确定这条消息在log文件中的物理偏移量了
	
### [B数和B+数的区别](https://www.cnblogs.com/xueqiuqiu/articles/8779029.html)

- B数
    -  关键字集合分布在整颗树中；
    
    - 任何一个关键字出现且只出现在一个结点中；
    - 搜索有可能在非叶子结点结束；
    
    ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079002404.png)
- b+树相比于b树的查询优势：

    - b+树的中间节点不保存数据，所以磁盘页能容纳更多节点元素，更“矮胖”；
        
    - b+树查询必须查找到叶子节点，b树只要匹配到即可不用管元素位置，因此b+树查找更稳定（并不慢）；
    - 对于范围查找来说，b+树只需遍历叶子节点链表即可，b树却需要重复地中序遍历，如下两图：
    ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079028387.png)
    
### [Java栈数据结构](https://www.cnblogs.com/noKing/p/8167700.html)


### [限流算法](https://blog.csdn.net/weixin_41846320/article/details/95941361)
- https://www.jianshu.com/p/88ff90519ab1

- [nginx限流](https://baijiahao.baidu.com/s?id=1634400719648980722&wfr=spider&for=pc)

### [熔断器](https://baijiahao.baidu.com/s?id=1623004854011062838&wfr=spider&for=pc)

### [https的原理](https://blog.csdn.net/wilsonpeng3/article/details/109096679)

### [Spring Boot自动装配的原理](https://zhuanlan.zhihu.com/p/80384308)
1. SpringApplicationn.run(XXXX.class)
2. 读到XXXX.class上SpringBootApplication注解
3. 读到SpringBootApplication类上的EnableAutoConfiguration注解
4. 读到EnableAutoConfiguration类上的Import注解，和AutoConfigurationImportSelector类
5. AutoConfigurationImportSelector的有个方法会扫描类路径下的所有META-INF/spring.factories文件
6. 这个文件里可以配置多个第三方类，通过这种方式类触发第三方框架集成到Spring中，包括读取自己的配置文件

<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要轻易看不起谁，就算是杀马特，发量都比你多。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=402c97c7-cf7b-43c9-a2d0-8ec32a505317)
