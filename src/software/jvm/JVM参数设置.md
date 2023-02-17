---
title: JVM参数设置
date: 2017-03-14
---

生产环境下 jvm 参数建议加上下面的这些参数：
```shell
jdk < 8:

-server
-Xms<heap size>[g|m|k] -Xmx<heap size>[g|m|k]
-XX:PermSize=<perm gen size>[g|m|k] -XX:MaxPermSize=<perm gen size>[g|m|k]
-Xmn<young size>[g|m|k]
-XX:SurvivorRatio=<ratio>
-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled
-XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=<percent>
-XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark
-XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:"<path to log>"
-XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M
-Dsun.net.inetaddr.ttl=<TTL in seconds>
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<path to dump>`date`.hprof

jdk >=8:

-server
-Xms<heap size>[g|m|k] -Xmx<heap size>[g|m|k]
-XX:MaxMetaspaceSize=<metaspace size>[g|m|k]
-Xmn<young size>[g|m|k]
-XX:SurvivorRatio=<ratio>
-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled
-XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=<percent>
-XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark
-XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:"<path to log>"
-XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M
-Dsun.net.inetaddr.ttl=<TTL in seconds>
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<path to dump>`date`.hprof

```
---

参数解释：

```shell
-Xms -Xmx:
都是设置堆的大小，单位可以有g,m,k. 
设置的是eden,from,to,old四个区域的总大小。
永久代的有单独的参数:  -XX:PermSize  -XX:MaxPermSize

-Xmn
设置新生代的大小，就是设置eden,from,to三块区域的总大小。
然后eden和from,to区域的分配可以通过设置-XX:SurvivorRatio参数


-XX:PermSize  -XX:MaxPermSize:
设置永久代的大小，在jdk8中不再适用。
jdk8中已经移除了 permanent generation,而采用了 metaspace 


-XX:SurvivorRatio:
这个值设置的是eden与survivor的比值。
如果-Xmn10m -XX:SurvivorRatio=8,那么 eden=8m,from=to=1m
如果-Xmn10m -XX:SurvivorRatio=3,那么 eden=6m,from=to=2m

Xss1024k:
等价于-XX:ThreadStackSize=1024k，设置线程栈的大小


-XX:+UseCMSInitiatingOccupancyOnly
由于CMS在默认情况下会使用一套启发式算法来触发gc行为。但在生产环境，建议禁用这套启发式算法（开启这个选项就能禁用）

-XX:+UseCMSCompactAtFullCollection
fullgc完毕后执行一次内存整理，以便腾出更大的连续可用空间

-XX:CMSFullGCsBeforeCompaction
在执行多次次fullgc后来一次整理操作，以避免每次

-XX:CMSInitiatingOccupancyFraction
数值从0到100，表示当老年代的使用率达到了这个数值后，就应该触发cms gc.建议在70左右。太小可能导致频繁的cms gc，太大可能会导致concurrent mode fail，进而采用serial old垃圾收集器，这就糟糕了。

-XX:+HeapDumpBeforeFullGC
在执行full gc前进行dump操作，这个参数可以在根据情况动态开启，方便分析问题。比如发下fullgc的次数比较频繁。

-XX:+ScavengeBeforeFullGC 
设置在进行full gc前，对青年代进行一个minor gc(青年代的gc就是minor gc),这样可以提高full gc的性能，因为不用再去检查青年代和老年代的引用关系。


-XX:+CMSScavengeBeforeRemark
设置在进行cms remark阶段前，对青年代进行一个minor gc(青年代的gc就是minor gc),这样可以提高cms gc的性能，因为不用再去检查青年代和老年代的引用关系。


-XX:+DisableExplicitGC
这个选项建议不要开启，因为它会使System.gc()调用完全失效。尤其在使用了off-heap(堆外内存)的情况下，开启这个选项可能会导致oom，或者消耗完堆外可用内存，造成死机或出现can not create a new native thread异常。

创建线程时，使用的是堆外内存。而可用于创建线程的内存大致计算方法是：总的物理内存-Xmx-MaxPermSize(MaxMetaspaceSize)。所以如果启用这个选项会导致jvm不对堆外内存进行回收，而最终消耗完堆外内存，导致各种异常出现。

-XX:+PrintGCDetails
是否打印这样的信息：[Times: user=0.01 sys=0.00, real=0.00 secs] 

-XX:+PrintGC
这个才是设置打印gc回收前后的对比信息，如下
(第二三行是执行了jmap -histo:live pid产生的日志信息)：
[GC (Allocation Failure)  26127K->1100K(114176K), 0.0017487 secs]
[GC (Heap Inspection Initiated GC)  20551K->633K(114176K), 0.0005990 secs]
[Full GC (Heap Inspection Initiated GC)  633K->574K(60416K), 0.0118358 secs]

-verbose:gc
等价于-XX:+PrintGC
如果命令行中同时设置了两个参数，则后者会覆盖前者的设置，同时都可以通过jinfo命令进行动态修改

-XX:+PrintGCTimeStamps
打印gc发送的时间（jvm启动时到gc时的秒数）

-XX:+PrintGCDateStamps
打印绝对时间，类似这样的 2017-01-19T15:48:54.263-0800

-Xloggc:../gc.log 
这个选项一定要设置，因为其他gc选项的参数都可以通过jinfo动态设置，唯独这个参数不可以。
也就是说只要设置了这个参数，就可以通过jinfo来动态开启或关闭是否打印gc日志信息
可以采用 相对路径和绝对路径

注意：其实如果要打印gc日志，在启动时也可以不添加-Xloggc参数，仍然可以通过jinfo命令来开启gc日志的打印，只不过打印日志的地方要么就是stdout 要么就是启动jvm时重定向的日志文件中。比如:

如果直接执行  java xxx.xxx ，则gc日志打印在当前命令行窗口
如果执行 nohup java xxx.xxx > /xxx.log, 则gc日志打印在了/xxx.log文件中。

如：
[root@qa-service app-home-service]#
[root@qa-service app-home-service]# tail -f wrapper.log
INFO   | jvm 1    | 2017/01/19 13:54:31 | 13:54:31,194 |-INFO in ch.qos.logback.classic.joran.action.ConfigurationAction - End of configuration.
INFO   | jvm 1    | 2017/01/19 13:54:31 | 13:54:31,195 |-INFO in ch.qos.logback.classic.joran.JoranConfigurator@bb5e82f - Registering current configuration as safe fallback point
INFO   | jvm 1    | 2017/01/19 13:54:31 |
INFO   | jvm 1    | 2017/01/19 13:54:31 | SLF4J: Actual binding is of type [ch.qos.logback.classic.util.ContextSelectorStaticBinder]
INFO   | jvm 1    | 2017/01/19 13:54:31 | [INFO] [] gerFactory - using logger: com.alibaba.dubbo.common.logger.log4j.Log4jLoggerAdapter
INFO   | jvm 1    | 2017/01/19 13:54:35 | [INFO] [com.alibaba.druid.pool.DruidDataSource.init(DruidDataSource.java:669)] DataSource - {dataSource-1} inited
INFO   | jvm 1    | 2017/01/19 13:54:35 | [INFO] [com.alibaba.druid.pool.DruidDataSource.init(DruidDataSource.java:669)] DataSource - {dataSource-2} inited
INFO   | jvm 1    | 2017/01/19 13:54:36 | [INFO] [org.I0Itec.zkclient.ZkEventThread.run(ZkEventThread.java:64)] ventThread - Starting ZkClient event thread.
INFO   | jvm 1    | 2017/01/19 13:54:36 | [INFO] [org.I0Itec.zkclient.ZkClient.processStateChanged(ZkClient.java:449)] t.ZkClient - zookeeper state changed (SyncConnected)
INFO   | jvm 1    | 2017/01/19 18:02:04 | [GC 94001K->37792K(246784K), 0.0039520 secs]
INFO   | jvm 1    | 2017/01/19 18:06:03 | 2017-01-19T18:06:03.932+0800: [GC [PSYoungGen: 14561K->192K(73216K)] 52034K->37784K(248320K), 0.0035700 secs] [Times: user=0.01 sys=0.00, real=0.00 secs]
INFO   | jvm 1    | 2017/01/19 18:06:03 | 2017-01-19T18:06:03.935+0800: [Full GC
INFO   | jvm 1    | 2017/01/19 18:06:04 |  [PSYoungGen: 192K->0K(73216K)] [ParOldGen: 37592K->24808K(175104K)] 37784K->24808K(248320K) [PSPermGen: 51564K->51359K(83968K)], 0.1735910 secs] [Times: user=0.46 sys=0.02, real=0.17 secs]                                                  
```


![引用自：http://www.oracle.com/technetwork/cn/community/developer-day/2-jvm-tuning-1866448-zhs.pdf](https://cdn.justdopay.com/xiaoshujiang/1629079237565.png)




```
minor gc: 就是针对青年代的gc
major gc: 针对老年代的gc
Full GC: 针对老年代和永久代进行回收,有的时候full gc等价于major gc
这个说法是有据可查的：http://www.oracle.com/technetwork/java/javase/memorymanagement-whitepaper-150215.pdf，page 7，bottom 。
同时也可以通过看gc日志来进行验证（当然这个方法不是很严谨），如下：

代码：
public static void main(String[] args) {
    ArrayList<Object> oss = new ArrayList<Object>();

    int j = 0;
    while (true) {
        System.out.println(j);
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {

        }
        ArrayList<Object> os = new ArrayList<Object>();
        for (int i = 0; i < 10000; i++) {
            os.add(new Object());
        }

        for (int i = 0; i < 100; i++) {
            oss.add(new byte[1024 * 10]);
        }

        if (oss.size() >= 500) {
            oss.clear();
        }
    }
}

jvm参数设置：-XX:+PrintGC -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+UseConcMarkSweepGC -Xmx20m -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=30 -Xmn10m -XX:SurvivorRatio=3

当执行jmap -histo:live pid命令触发Full GC后，在jdk7和jdk8中的不同输出

jdk8:
2016-09-27T17:37:41.927-0800: 54.476: [Full GC (Heap Inspection Initiated GC) 2016-09-27T17:37:41.927-0800: 54.476: [CMS: 2971K->2833K(10240K), 0.0043247 secs] 5558K->2833K(18432K), [Metaspace: 3151K->3151K(1056768K)], 0.0044026 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 

jdk7:
2016-09-27T17:35:02.466-0800: 1162.042: [Full GC2016-09-27T17:35:02.466-0800: 1162.042: [CMS: 2999K->1723K(10240K), 0.0091370 secs] 10340K->1723K(18432K), [CMS Perm : 2968K->2968K(21248K)], 0.0092450 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 

```

分别用jdk7,8跑程序，用jvisualvm（jdk8版本）查看：
用jdk7跑：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079247853.png)

用jdk8跑：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079254277.png)

可以看出，jdk8和jdk7在堆布局上相似，jdk中的permanent generation没有了，换成了metaspace。两者更详细的差异可以参考：http://blog.csdn.net/zhyhang/article/details/17246223


---

哪些情况下会触发Minor GC:
1. Eden满，或者新创建的对象大小>Eden所剩空间
2. 设置了 -XX:+ScavengeBeforeFullGC 参数，在Full GC前会触发 minor gc.
3. 设置了 -XX:+CMSScavengeBeforeRemark 参数。如果采用了cms收集器，在执行cms gc的remark阶段前会执行 minor gc

---
看了上面的major gc 与 full gc的区别，建议没必要去纠结这个东西。记住下面几点即可

Full GC
1. Full GC == Major GC指的是对老年代/永久代的stop the world的GC
2. Full GC的次数 = 老年代GC时 stop the world的次数
3. Full GC的时间 = 老年代GC时 stop the world的总时间
4. CMS 不等于Full GC，我们可以看到CMS分为多个阶段，只有stop the world的阶段被计算到了Full GC的次数和时间，而和业务线程并发的GC的次数和时间则不被认为是Full GC

---

哪些情况下会触发Full GC:
1. 执行 jmap -histo:live pid
2. 老年代满


注意：
1. 在gc日志如果没有看到 Full GC 字样，也并不代表没有发生 Full GC.就好比cms gc的情况。
2. cms gc执行一次，full gc的次数会加2,可以通过jstat命令查看full gc的次数

---

## JIT
#### -XX:CompileThreshold=10000
Number of method invocations/branches before compiling [-client: 1,500]
方法被JVM进行JIT编译的阈值。如果某个方法被调用了这么多次，会触发这个方法的jit编译



## 杂项
#### -XX:+OmitStackTraceInFastThrow
对于一些频繁抛出的异常，JDK为了性能会做一个优化，在JIT重新编译后会抛出没有堆栈的异常。
启用，则表明使用这个优化


## 其他参数
详见：http://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html

<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：别揪住没用的东西不放，尤其是当这个没用的东西，就是你自己的时候。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=4b6150d8-2f30-4b26-a728-72da44733cdf)
