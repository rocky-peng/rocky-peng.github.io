---
title: JDK命令行工具(版本：1.7.0_80)
date: 2017-03-13
---

```shell
java -version
java version "1.7.0_80"
Java(TM) SE Runtime Environment (build 1.7.0_80-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode) 
```

## jmap
```shell
jmap
Usage:
    jmap [option] <pid>
        (to connect to running process)

where <option> is one of:
    <none>               to print same info as Solaris pmap
    -heap                to print java heap summary
    -histo[:live]        to print histogram of java object heap; if the "live"
                         suboption is specified, only count live objects
    -permstat            to print permanent generation statistics
    -finalizerinfo       to print information on objects awaiting finalization
    -dump:<dump-options> to dump java heap in hprof binary format
                         dump-options:
                           live         dump only live objects; if not specified,
                                        all objects in the heap are dumped.
                           format=b     binary format
                           file=<file>  dump heap to <file>
                         Example: jmap -dump:live,format=b,file=heap.bin <pid>
                         
    -F                   force. Use with -dump:<dump-options> <pid> or -histo
                         to force a heap dump or histogram when <pid> does not
                         respond. The "live" suboption is not supported
                         in this mode.
    -h | -help           to print this help message
    -J<flag>             to pass <flag> directly to the runtime system 
```
#### option: -heap 

可以查看采用的 垃圾收集器，java堆的配置信息，使用情况
![][1]

#### option: -histo[:live]

按照类名分组，统计各个类的实例数，占用的内存大小
![][2]
    
注意

```shell
jmap -histo:live pid      会触发FullGC,出现fullgc会伴随gc
jmap -histo pid           不会触发FullGC
```

实例

```
注意：
使用的相关参数：-Xloggc:gc.log -XX:+PrintGC -XX:+PrintGCDetails -XX:+PrintGCDateStamps
如果使用jdk8，能得到如下的打印信息，重点是打印出了gc的原因。
如果使用jdk7，不能打印出gc的原因。但是，还有但是：

但是虽然使用jdk7不能再gc日志中打印这个gc的原因信息，但可以通过执行jstat -gccause pid 1s 1000在实时的查看gc信息。通过这个方式就能够查看到gc的原因。

我想也正是因为这个原因，阿里团队才开发了一个patch，让jdk7也能在gc日志中查看gc原因的信息（打上这个patch后能够通过加上参数：  -XX:+PrintGCReason来得到gc的原因信息，PrintGCReason这个参数名字应该是阿里团队自己定义的名字，因为在google上也找不到这个参数。）

2016-09-21T10:33:26.629-0800: 206.163: [GC (Allocation Failure) [PSYoungGen: 24688K->96K(24576K)] 25352K->759K(58368K), 0.0007975 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:34.250-0800: 213.784: [GC (Allocation Failure) [PSYoungGen: 24160K->160K(25088K)] 24823K->823K(58880K), 0.0029633 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:41.280-0800: 220.814: [GC (Heap Inspection Initiated GC) [PSYoungGen: 22618K->32K(24576K)] 23282K->703K(58368K), 0.0012917 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:41.282-0800: 220.815: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24576K)] [ParOldGen: 671K->664K(33280K)] 703K->664K(57856K), [Metaspace: 3486K->3486K(1056768K)], 0.0045924 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:42.817-0800: 222.350: [GC (Heap Inspection Initiated GC) [PSYoungGen: 4911K->32K(24576K)] 5575K->696K(57856K), 0.0014201 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:42.818-0800: 222.352: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24576K)] [ParOldGen: 664K->664K(32768K)] 696K->664K(57344K), [Metaspace: 3486K->3486K(1056768K)], 0.0040590 secs] [Times: user=0.00 sys=0.01, real=0.01 secs] 
2016-09-21T10:33:43.953-0800: 223.486: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K->32K(24064K)] 4587K->696K(56832K), 0.0011050 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:43.954-0800: 223.488: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24064K)] [ParOldGen: 664K->664K(32256K)] 696K->664K(56320K), [Metaspace: 3486K->3486K(1056768K)], 0.0043866 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:45.155-0800: 224.688: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K->32K(24576K)] 4587K->696K(56832K), 0.0010624 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:45.156-0800: 224.689: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24576K)] [ParOldGen: 664K->664K(31744K)] 696K->664K(56320K), [Metaspace: 3486K->3486K(1056768K)], 0.0043322 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:46.366-0800: 225.899: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K->32K(24064K)] 4587K->696K(55808K), 0.0010602 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:46.367-0800: 225.900: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24064K)] [ParOldGen: 664K->664K(31232K)] 696K->664K(55296K), [Metaspace: 3486K->3486K(1056768K)], 0.0040713 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:47.541-0800: 227.074: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K->32K(24064K)] 4587K->696K(55296K), 0.0010704 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:47.542-0800: 227.076: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24064K)] [ParOldGen: 664K->664K(30720K)] 696K->664K(54784K), [Metaspace: 3486K->3486K(1056768K)], 0.0045913 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:48.702-0800: 228.235: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K->32K(23552K)] 4498K->696K(54272K), 0.0011455 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:48.704-0800: 228.237: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(23552K)] [ParOldGen: 664K->664K(30208K)] 696K->664K(53760K), [Metaspace: 3486K->3486K(1056768K)], 0.0045663 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:49.760-0800: 229.293: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K->32K(24064K)] 4498K->696K(54272K), 0.0007126 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:49.760-0800: 229.293: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(24064K)] [ParOldGen: 664K->664K(29696K)] 696K->664K(53760K), [Metaspace: 3486K->3486K(1056768K)], 0.0058432 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:50.881-0800: 230.414: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K->32K(23040K)] 4498K->696K(52736K), 0.0013097 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:50.882-0800: 230.415: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(23040K)] [ParOldGen: 664K->664K(29184K)] 696K->664K(52224K), [Metaspace: 3486K->3486K(1056768K)], 0.0050243 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:51.957-0800: 231.490: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3353K->32K(23552K)] 4018K->696K(52736K), 0.0018058 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:51.959-0800: 231.492: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K->0K(23552K)] [ParOldGen: 664K->664K(28672K)] 696K->664K(52224K), [Metaspace: 3486K->3486K(1056768K)], 0.0039043 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:59.212-0800: 238.745: [GC (Allocation Failure) [PSYoungGen: 22528K->196K(23040K)] 23192K->861K(51712K), 0.0015904 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:34:06.420-0800: 245.953: [GC (Allocation Failure) [PSYoungGen: 22724K->128K(23040K)] 23389K->792K(51712K), 0.0009436 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
```
    
    
#### option: -dump
    
生成堆转储文件
    
```shell
jmap -dump:format=b,file=heap.bin
jmap -dump:live,format=b,file=heap.bin
```
    
## jstat

用于监控各种运行时状态信息

```shell
jstat option pid ms|s count
示例：
jstat -gc 32757 250 20
表示：查看java进程32757各个区域的垃圾回收信息，每隔250ms打印一次，共打印20次
```
#### -gc 
```shell
[root@xxx ~]# jstat -gc 32757 250 5
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       PC     PU    YGC     YGCT    FGC    FGCT     GCT
11264.0 11264.0 3201.2  0.0   45056.0  27402.0   68608.0    33700.2   41472.0 41347.6     14    0.453   0      0.000    0.453
11264.0 11264.0 3201.2  0.0   45056.0  27402.1   68608.0    33700.2   41472.0 41347.6     14    0.453   0      0.000    0.453
11264.0 11264.0 3201.2  0.0   45056.0  27402.1   68608.0    33700.2   41472.0 41347.6     14    0.453   0      0.000    0.453
11264.0 11264.0 3201.2  0.0   45056.0  27402.2   68608.0    33700.2   41472.0 41347.6     14    0.453   0      0.000    0.453
11264.0 11264.0 3201.2  0.0   45056.0  27402.2   68608.0    33700.2   41472.0 41347.6     14    0.453   0      0.000    0.453 


这里显示的列名解释：
S开头的是Survivor区：
    SOC:Survivor 0 Capacity
    S1C:Survivor 1 Capactiy
    S0U:Survivor 0 Used
    S1U:Survivor 1 Used
E开头的是Eden区：
    EC:Eden Capacity
    EU:Eden Used
O开头的是Old区：
    OC:Old Capactity
    OU:Old Used
P开头的是Permanent区域，就是永久代（jdk8木有啦）
    PC:Perm Capacity
    PU:Perm Used

以上列的单位都是kb

YGC:Young GC,青年代的gc次数
YCGT:Young GC Time,gc时间
后面的列就不用解释了。

可以结合jmap -heap 32757 输出对照着看：

[root@xxx ~]# jmap -heap 32757
Attaching to process ID 32757, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 24.80-b11

using thread-local object allocation.
Parallel GC with 8 thread(s)

Heap Configuration:
   MinHeapFreeRatio = 0
   MaxHeapFreeRatio = 100
   MaxHeapSize      = 209715200 (200.0MB)
   NewSize          = 1310720 (1.25MB)
   MaxNewSize       = 17592186044415 MB
   OldSize          = 5439488 (5.1875MB)
   NewRatio         = 2
   SurvivorRatio    = 8
   PermSize         = 21757952 (20.75MB)
   MaxPermSize      = 85983232 (82.0MB)
   G1HeapRegionSize = 0 (0.0MB)

Heap Usage:
PS Young Generation
Eden Space:
   capacity = 46137344 (44.0MB)
   used     = 28497008 (27.176864624023438MB)
   free     = 17640336 (16.823135375976562MB)
   61.765601418235086% used
From Space:
   capacity = 11534336 (11.0MB)
   used     = 3277992 (3.1261367797851562MB)
   free     = 8256344 (7.873863220214844MB)
   28.41942527077415% used
To Space:
   capacity = 11534336 (11.0MB)
   used     = 0 (0.0MB)
   free     = 11534336 (11.0MB)
   0.0% used
PS Old Generation
   capacity = 70254592 (67.0MB)
   used     = 34508960 (32.910308837890625MB)
   free     = 35745632 (34.089691162109375MB)
   49.119863937150186% used
PS Perm Generation
   capacity = 42467328 (40.5MB)
   used     = 42339976 (40.37854766845703MB)
   free     = 127352 (0.12145233154296875MB)
   99.70011769989391% used

17207 interned Strings occupying 1786448 bytes. 
```



#### -gcutil
和-gc差不多，只是输出的是使用容量占比。
```shell
jstat -gcutil 32757 250 10

[root@qa-service ~]# jstat -gcutil 32757 250 5
  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT
 28.42   0.00  78.00  49.12  99.80     14    0.453     0    0.000    0.453
 28.42   0.00  78.00  49.12  99.80     14    0.453     0    0.000    0.453
 28.42   0.00  78.00  49.12  99.80     14    0.453     0    0.000    0.453
 28.42   0.00  78.00  49.12  99.80     14    0.453     0    0.000    0.453
 28.42   0.00  78.00  49.12  99.80     14    0.453     0    0.000    0.453  
```
#### -gccause 
和-gcutil一样，只是多输出两列，来显示上次gc的原因
```shell
[root@qa-service ~]# jstat -gccause 32757 250 5
  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT    LGCC                 GCC
 28.42   0.00  78.45  49.12  99.80     14    0.453     0    0.000    0.453 Allocation Failure   No GC
 28.42   0.00  78.45  49.12  99.80     14    0.453     0    0.000    0.453 Allocation Failure   No GC
 28.42   0.00  78.45  49.12  99.80     14    0.453     0    0.000    0.453 Allocation Failure   No GC
 28.42   0.00  78.45  49.12  99.80     14    0.453     0    0.000    0.453 Allocation Failure   No GC
 28.42   0.00  78.45  49.12  99.80     14    0.453     0    0.000    0.453 Allocation Failure   No GC 
```
#### -printcompilation
输出已被JIT编译的方法
```shell
[root@qa-service ~]# jstat -printcompilation 32757 250 5
Compiled  Size  Type Method
    1074    191    1 redis/clients/util/RedisInputStream readLineBytes
    1074    191    1 redis/clients/util/RedisInputStream readLineBytes 
```
#### 其他选项
具体可以参考官网：http://docs.oracle.com/javase/7/docs/technotes/tools/share/jstat.html#options


## jinfo
主要用来查看和调整jvm参数。
```shell
[root@qa-service ~]# jinfo
Usage:
    jinfo [option] <pid>
        (to connect to running process)

where <option> is one of:
    -flag <name>         to print the value of the named VM flag
    -flag [+|-]<name>    to enable or disable the named VM flag
    -flag <name>=<value> to set the named VM flag to the given value
    -flags               to print VM flags
    -sysprops            to print Java system properties
    <no option>          to print both of the above
    -h | -help           to print this help message          
```


## jcmd
```shell
jcmd pid help

practise git:(master) ✗ jcmd 93526 help           
93526:
The following commands are available:
JFR.stop
JFR.start
JFR.dump
JFR.check
VM.native_memory
VM.check_commercial_features
VM.unlock_commercial_features
ManagementAgent.stop
ManagementAgent.start_local
ManagementAgent.start
GC.rotate_log
Thread.print
GC.class_stats
GC.class_histogram
GC.heap_dump
GC.run_finalization
GC.run
VM.uptime
VM.flags
VM.system_properties
VM.command_line
VM.version
help

针对某个具体命令的说明信息可以使用：
jcmd 93526 help VM.version 

打印vm版本信息：
jcmd 93526 VM.version 
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：美妙的歌声可以超越众人，劣质的歌声可以超度众人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=2103115e-1f52-4d4e-908d-d684659ad382)
