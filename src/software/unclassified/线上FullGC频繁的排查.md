---
title: 线上FullGC频繁的排查
date: 2017-04-11
---


## 问题
前段时间发现线上的一个dubbo服务Full GC比较频繁，大约每两天就会执行一次Full GC。

## Full GC的原因
我们知道Full GC的触发条件大致情况有以下几种情况：
1. 程序执行了System.gc() //建议jvm执行fullgc，并不一定会执行
2. 执行了jmap -histo:live pid命令  //这个会立即触发fullgc
3. 在执行minor gc的时候进行的一系列检查
```
执行Minor GC的时候，JVM会检查老年代中最大连续可用空间是否大于了当前新生代所有对象的总大小。
如果大于，则直接执行Minor GC（这个时候执行是没有风险的）。
如果小于了，JVM会检查是否开启了空间分配担保机制，如果没有开启则直接改为执行Full GC。
如果开启了，则JVM会检查老年代中最大连续可用空间是否大于了历次晋升到老年代中的平均大小，如果小于则执行改为执行Full GC。
如果大于则会执行Minor GC，如果Minor GC执行失败则会执行Full GC
```
4. 使用了大对象    //大对象会直接进入老年代
5. 在程序中长期持有了对象的引用   //对象年龄达到指定阈值也会进入老年代

对于我们的情况，可以初步排除1，2两种情况，最有可能是4和5这两种情况。为了进一步排查原因，我们在线上开启了 -XX:+HeapDumpBeforeFullGC。

```
注意：
JVM在执行dump操作的时候是会发生stop the word事件的，也就是说此时所有的用户线程都会暂停运行。
为了在此期间也能对外正常提供服务，建议采用分布式部署，并采用合适的负载均衡算法
```
    
## JVM参数的设置：
线上这个dubbo服务是分布式部署，在其中一台机子上开启了 -XX:HeapDumpBeforeFullGC，总体JVM参数如下：
```shell
-Xmx2g 
-XX:+HeapDumpBeforeFullGC 
-XX:HeapDumpPath=. 
-Xloggc:gc.log 
-XX:+PrintGC 
-XX:+PrintGCDetails 
-XX:+PrintGCDateStamps 
-XX:+UseGCLogFileRotation 
-XX:NumberOfGCLogFiles=10 
-XX:GCLogFileSize=100m 
-XX:HeapDumpOnOutOfMemoryError 
```

## Dump文件分析
dump下来的文件大约1.8g，用jvisualvm查看，发现用char[]类型的数据占用了41%内存，同时另外一个com.alibaba.druid.stat.JdbcSqlStat类型的数据占用了35%的内存，也就是说整个堆中几乎全是这两类数据。如下图：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629081850286.png "WeChat92981e4701376907c2ad4e7e486c3f63")

查看char[]类型数据，发现几乎全是sql语句。

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629081858698.png "WeChat382ef1b95373e57e66207b2e7820c5a8")

接下来查看char[]的引用情况：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629081862832.png "WeChat39fa3f48d0437d7aad83ff890bfe4ee8")

```java
找到了JdbcSqlStat类，在代码中查看这个类的代码，关键代码如下：

构造函数只有这一个
public JdbcSqlStat(String sql){
    this.sql = sql;
    this.id = DruidDriver.createSqlStatId();
}

查看这个函数的调用情况，找到com.alibaba.druid.stat.JdbcDataSourceStat#createSqlStat方法：

public JdbcSqlStat createSqlStat(String sql) {
    lock.writeLock().lock();
    try {
        JdbcSqlStat sqlStat = sqlStatMap.get(sql);
        if (sqlStat == null) {
            sqlStat = new JdbcSqlStat(sql);
            sqlStat.setDbType(this.dbType);
            sqlStat.setName(this.name);
            sqlStatMap.put(sql, sqlStat);
        }

        return sqlStat;
    } finally {
        lock.writeLock().unlock();
    }
}

这里用了一个map来存放所有的sql语句。
```

其实到这里也就知道什么原因造成了这个问题，因为我们使用的数据源是阿里巴巴的druid，这个druid提供了一个sql语句监控功能，同时我们也开启了这个功能。只需要在配置文件中把这个功能关掉应该就能消除这个问题，事实也的确如此，关掉这个功能后到目前为止线上没再触发FullGC

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629081869818.png "WeChat8ee573e58131982e27be18723d0fd998")


## 其他
如果用mat工具查看，建议把 "Keep unreachable objects" 勾上，否则mat会把堆中不可达的对象去除掉，这样我们的分析也许会变得没有意义。如下图：Window-->References 。另外jvisualvm对ool的支持不是很好，如果需要oql建议使用mat。

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629081878591.png "WeChat48b628ddc00e59143957107d6021b736")



<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：只要跑的快，爱情就追不上你。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=70e1362f-6885-4b02-80d0-21ce374adde9)
