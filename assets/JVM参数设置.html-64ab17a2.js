import{_ as i,$ as r,a0 as c,a1 as n,a2 as a,a3 as s,a4 as t,a5 as l,w as o}from"./framework-3895bb24.js";const u={},d=l(`<p>生产环境下 jvm 参数建议加上下面的这些参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jdk <span class="token operator">&lt;</span> <span class="token number">8</span>:

<span class="token parameter variable">-server</span>
-Xms<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span> -Xmx<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
<span class="token parameter variable">-XX:PermSize</span><span class="token operator">=</span><span class="token operator">&lt;</span>perm gen size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span> <span class="token parameter variable">-XX:MaxPermSize</span><span class="token operator">=</span><span class="token operator">&lt;</span>perm gen size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
-Xmn<span class="token operator">&lt;</span>young size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
<span class="token parameter variable">-XX:SurvivorRatio</span><span class="token operator">=</span><span class="token operator">&lt;</span>ratio<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+UseConcMarkSweepGC</span> <span class="token parameter variable">-XX:+CMSParallelRemarkEnabled</span>
<span class="token parameter variable">-XX:+UseCMSInitiatingOccupancyOnly</span> <span class="token parameter variable">-XX:CMSInitiatingOccupancyFraction</span><span class="token operator">=</span><span class="token operator">&lt;</span>percent<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+ScavengeBeforeFullGC</span> <span class="token parameter variable">-XX:+CMSScavengeBeforeRemark</span>
<span class="token parameter variable">-XX:+PrintGCDateStamps</span> <span class="token parameter variable">-verbose:gc</span> <span class="token parameter variable">-XX:+PrintGCDetails</span> -Xloggc:<span class="token string">&quot;&lt;path to log&gt;&quot;</span>
<span class="token parameter variable">-XX:+UseGCLogFileRotation</span> <span class="token parameter variable">-XX:NumberOfGCLogFiles</span><span class="token operator">=</span><span class="token number">10</span> <span class="token parameter variable">-XX:GCLogFileSize</span><span class="token operator">=</span>100M
<span class="token parameter variable">-Dsun.net.inetaddr.ttl</span><span class="token operator">=</span><span class="token operator">&lt;</span>TTL <span class="token keyword">in</span> seconds<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+HeapDumpOnOutOfMemoryError</span> <span class="token parameter variable">-XX:HeapDumpPath</span><span class="token operator">=</span><span class="token operator">&lt;</span>path to dump<span class="token operator">&gt;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>.hprof

jdk <span class="token operator">&gt;=</span><span class="token number">8</span>:

<span class="token parameter variable">-server</span>
-Xms<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span> -Xmx<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
<span class="token parameter variable">-XX:MaxMetaspaceSize</span><span class="token operator">=</span><span class="token operator">&lt;</span>metaspace size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
-Xmn<span class="token operator">&lt;</span>young size<span class="token operator">&gt;</span><span class="token punctuation">[</span>g<span class="token operator">|</span>m<span class="token operator">|</span>k<span class="token punctuation">]</span>
<span class="token parameter variable">-XX:SurvivorRatio</span><span class="token operator">=</span><span class="token operator">&lt;</span>ratio<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+UseConcMarkSweepGC</span> <span class="token parameter variable">-XX:+CMSParallelRemarkEnabled</span>
<span class="token parameter variable">-XX:+UseCMSInitiatingOccupancyOnly</span> <span class="token parameter variable">-XX:CMSInitiatingOccupancyFraction</span><span class="token operator">=</span><span class="token operator">&lt;</span>percent<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+ScavengeBeforeFullGC</span> <span class="token parameter variable">-XX:+CMSScavengeBeforeRemark</span>
<span class="token parameter variable">-XX:+PrintGCDateStamps</span> <span class="token parameter variable">-verbose:gc</span> <span class="token parameter variable">-XX:+PrintGCDetails</span> -Xloggc:<span class="token string">&quot;&lt;path to log&gt;&quot;</span>
<span class="token parameter variable">-XX:+UseGCLogFileRotation</span> <span class="token parameter variable">-XX:NumberOfGCLogFiles</span><span class="token operator">=</span><span class="token number">10</span> <span class="token parameter variable">-XX:GCLogFileSize</span><span class="token operator">=</span>100M
<span class="token parameter variable">-Dsun.net.inetaddr.ttl</span><span class="token operator">=</span><span class="token operator">&lt;</span>TTL <span class="token keyword">in</span> seconds<span class="token operator">&gt;</span>
<span class="token parameter variable">-XX:+HeapDumpOnOutOfMemoryError</span> <span class="token parameter variable">-XX:HeapDumpPath</span><span class="token operator">=</span><span class="token operator">&lt;</span>path to dump<span class="token operator">&gt;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>.hprof

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>参数解释：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xms</span> -Xmx:
都是设置堆的大小，单位可以有g,m,k. 
设置的是eden,from,to,old四个区域的总大小。
永久代的有单独的参数:  <span class="token parameter variable">-XX:PermSize</span>  <span class="token parameter variable">-XX:MaxPermSize</span>

<span class="token parameter variable">-Xmn</span>
设置新生代的大小，就是设置eden,from,to三块区域的总大小。
然后eden和from,to区域的分配可以通过设置-XX:SurvivorRatio参数


<span class="token parameter variable">-XX:PermSize</span>  -XX:MaxPermSize:
设置永久代的大小，在jdk8中不再适用。
jdk8中已经移除了 permanent generation,而采用了 metaspace 


-XX:SurvivorRatio:
这个值设置的是eden与survivor的比值。
如果-Xmn10m <span class="token parameter variable">-XX:SurvivorRatio</span><span class="token operator">=</span><span class="token number">8</span>,那么 <span class="token assign-left variable">eden</span><span class="token operator">=</span>8m,from<span class="token operator">=</span>to<span class="token operator">=</span>1m
如果-Xmn10m <span class="token parameter variable">-XX:SurvivorRatio</span><span class="token operator">=</span><span class="token number">3</span>,那么 <span class="token assign-left variable">eden</span><span class="token operator">=</span>6m,from<span class="token operator">=</span>to<span class="token operator">=</span>2m

Xss1024k:
等价于-XX:ThreadStackSize<span class="token operator">=</span>1024k，设置线程栈的大小


<span class="token parameter variable">-XX:+UseCMSInitiatingOccupancyOnly</span>
由于CMS在默认情况下会使用一套启发式算法来触发gc行为。但在生产环境，建议禁用这套启发式算法（开启这个选项就能禁用）

<span class="token parameter variable">-XX:+UseCMSCompactAtFullCollection</span>
fullgc完毕后执行一次内存整理，以便腾出更大的连续可用空间

<span class="token parameter variable">-XX:CMSFullGCsBeforeCompaction</span>
在执行多次次fullgc后来一次整理操作，以避免每次

<span class="token parameter variable">-XX:CMSInitiatingOccupancyFraction</span>
数值从0到100，表示当老年代的使用率达到了这个数值后，就应该触发cms gc.建议在70左右。太小可能导致频繁的cms gc，太大可能会导致concurrent mode fail，进而采用serial old垃圾收集器，这就糟糕了。

<span class="token parameter variable">-XX:+HeapDumpBeforeFullGC</span>
在执行full gc前进行dump操作，这个参数可以在根据情况动态开启，方便分析问题。比如发下fullgc的次数比较频繁。

<span class="token parameter variable">-XX:+ScavengeBeforeFullGC</span> 
设置在进行full gc前，对青年代进行一个minor gc<span class="token punctuation">(</span>青年代的gc就是minor gc<span class="token punctuation">)</span>,这样可以提高full gc的性能，因为不用再去检查青年代和老年代的引用关系。


<span class="token parameter variable">-XX:+CMSScavengeBeforeRemark</span>
设置在进行cms remark阶段前，对青年代进行一个minor gc<span class="token punctuation">(</span>青年代的gc就是minor gc<span class="token punctuation">)</span>,这样可以提高cms gc的性能，因为不用再去检查青年代和老年代的引用关系。


<span class="token parameter variable">-XX:+DisableExplicitGC</span>
这个选项建议不要开启，因为它会使System.gc<span class="token punctuation">(</span><span class="token punctuation">)</span>调用完全失效。尤其在使用了off-heap<span class="token punctuation">(</span>堆外内存<span class="token punctuation">)</span>的情况下，开启这个选项可能会导致oom，或者消耗完堆外可用内存，造成死机或出现can not create a new native thread异常。

创建线程时，使用的是堆外内存。而可用于创建线程的内存大致计算方法是：总的物理内存-Xmx-MaxPermSize<span class="token punctuation">(</span>MaxMetaspaceSize<span class="token punctuation">)</span>。所以如果启用这个选项会导致jvm不对堆外内存进行回收，而最终消耗完堆外内存，导致各种异常出现。

<span class="token parameter variable">-XX:+PrintGCDetails</span>
是否打印这样的信息：<span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.01</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 

<span class="token parameter variable">-XX:+PrintGC</span>
这个才是设置打印gc回收前后的对比信息，如下
<span class="token punctuation">(</span>第二三行是执行了jmap <span class="token parameter variable">-histo:live</span> pid产生的日志信息<span class="token punctuation">)</span>：
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Allocation Failure<span class="token punctuation">)</span>  26127K-<span class="token operator">&gt;</span>1100K<span class="token punctuation">(</span>114176K<span class="token punctuation">)</span>, <span class="token number">0.0017487</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Heap Inspection Initiated GC<span class="token punctuation">)</span>  20551K-<span class="token operator">&gt;</span>633K<span class="token punctuation">(</span>114176K<span class="token punctuation">)</span>, <span class="token number">0.0005990</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Heap Inspection Initiated GC<span class="token punctuation">)</span>  633K-<span class="token operator">&gt;</span>574K<span class="token punctuation">(</span>60416K<span class="token punctuation">)</span>, <span class="token number">0.0118358</span> secs<span class="token punctuation">]</span>

<span class="token parameter variable">-verbose:gc</span>
等价于-XX:+PrintGC
如果命令行中同时设置了两个参数，则后者会覆盖前者的设置，同时都可以通过jinfo命令进行动态修改

<span class="token parameter variable">-XX:+PrintGCTimeStamps</span>
打印gc发送的时间（jvm启动时到gc时的秒数）

<span class="token parameter variable">-XX:+PrintGCDateStamps</span>
打印绝对时间，类似这样的 <span class="token number">2017</span>-01-19T15:48:54.263-0800

-Xloggc:<span class="token punctuation">..</span>/gc.log 
这个选项一定要设置，因为其他gc选项的参数都可以通过jinfo动态设置，唯独这个参数不可以。
也就是说只要设置了这个参数，就可以通过jinfo来动态开启或关闭是否打印gc日志信息
可以采用 相对路径和绝对路径

注意：其实如果要打印gc日志，在启动时也可以不添加-Xloggc参数，仍然可以通过jinfo命令来开启gc日志的打印，只不过打印日志的地方要么就是stdout 要么就是启动jvm时重定向的日志文件中。比如:

如果直接执行  <span class="token function">java</span> xxx.xxx ，则gc日志打印在当前命令行窗口
如果执行 <span class="token function">nohup</span> <span class="token function">java</span> xxx.xxx <span class="token operator">&gt;</span> /xxx.log, 则gc日志打印在了/xxx.log文件中。

如：
<span class="token punctuation">[</span>root@qa-service app-home-service<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@qa-service app-home-service<span class="token punctuation">]</span><span class="token comment"># tail -f wrapper.log</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:31 <span class="token operator">|</span> <span class="token number">13</span>:54:31,194 <span class="token operator">|</span>-INFO <span class="token keyword">in</span> ch.qos.logback.classic.joran.action.ConfigurationAction - End of configuration.
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:31 <span class="token operator">|</span> <span class="token number">13</span>:54:31,195 <span class="token operator">|</span>-INFO <span class="token keyword">in</span> ch.qos.logback.classic.joran.JoranConfigurator@bb5e82f - Registering current configuration as safe fallback point
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:31 <span class="token operator">|</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:31 <span class="token operator">|</span> SLF4J: Actual binding is of <span class="token builtin class-name">type</span> <span class="token punctuation">[</span>ch.qos.logback.classic.util.ContextSelectorStaticBinder<span class="token punctuation">]</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:31 <span class="token operator">|</span> <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> gerFactory - using logger: com.alibaba.dubbo.common.logger.log4j.Log4jLoggerAdapter
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:35 <span class="token operator">|</span> <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> <span class="token punctuation">[</span>com.alibaba.druid.pool.DruidDataSource.init<span class="token punctuation">(</span>DruidDataSource.java:669<span class="token punctuation">)</span><span class="token punctuation">]</span> DataSource - <span class="token punctuation">{</span>dataSource-1<span class="token punctuation">}</span> inited
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:35 <span class="token operator">|</span> <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> <span class="token punctuation">[</span>com.alibaba.druid.pool.DruidDataSource.init<span class="token punctuation">(</span>DruidDataSource.java:669<span class="token punctuation">)</span><span class="token punctuation">]</span> DataSource - <span class="token punctuation">{</span>dataSource-2<span class="token punctuation">}</span> inited
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:36 <span class="token operator">|</span> <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> <span class="token punctuation">[</span>org.I0Itec.zkclient.ZkEventThread.run<span class="token punctuation">(</span>ZkEventThread.java:64<span class="token punctuation">)</span><span class="token punctuation">]</span> ventThread - Starting ZkClient event thread.
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">13</span>:54:36 <span class="token operator">|</span> <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> <span class="token punctuation">[</span>org.I0Itec.zkclient.ZkClient.processStateChanged<span class="token punctuation">(</span>ZkClient.java:449<span class="token punctuation">)</span><span class="token punctuation">]</span> t.ZkClient - zookeeper state changed <span class="token punctuation">(</span>SyncConnected<span class="token punctuation">)</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">18</span>:02:04 <span class="token operator">|</span> <span class="token punctuation">[</span>GC 94001K-<span class="token operator">&gt;</span>37792K<span class="token punctuation">(</span>246784K<span class="token punctuation">)</span>, <span class="token number">0.0039520</span> secs<span class="token punctuation">]</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">18</span>:06:03 <span class="token operator">|</span> <span class="token number">2017</span>-01-19T18:06:03.932+0800: <span class="token punctuation">[</span>GC <span class="token punctuation">[</span>PSYoungGen: 14561K-<span class="token operator">&gt;</span>192K<span class="token punctuation">(</span>73216K<span class="token punctuation">)</span><span class="token punctuation">]</span> 52034K-<span class="token operator">&gt;</span>37784K<span class="token punctuation">(</span>248320K<span class="token punctuation">)</span>, <span class="token number">0.0035700</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.01</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span>
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">18</span>:06:03 <span class="token operator">|</span> <span class="token number">2017</span>-01-19T18:06:03.935+0800: <span class="token punctuation">[</span>Full GC
INFO   <span class="token operator">|</span> jvm <span class="token number">1</span>    <span class="token operator">|</span> <span class="token number">2017</span>/01/19 <span class="token number">18</span>:06:04 <span class="token operator">|</span>  <span class="token punctuation">[</span>PSYoungGen: 192K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>73216K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ParOldGen: 37592K-<span class="token operator">&gt;</span>24808K<span class="token punctuation">(</span>175104K<span class="token punctuation">)</span><span class="token punctuation">]</span> 37784K-<span class="token operator">&gt;</span>24808K<span class="token punctuation">(</span>248320K<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSPermGen: 51564K-<span class="token operator">&gt;</span>51359K<span class="token punctuation">(</span>83968K<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token number">0.1735910</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.46</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.02</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.17</span> secs<span class="token punctuation">]</span>                                                  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=n("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629079237565.png",alt:"引用自：http://www.oracle.com/technetwork/cn/community/developer-day/2-jvm-tuning-1866448-zhs.pdf",tabindex:"0",loading:"lazy"},null,-1),m={href:"http://www.oracle.com/technetwork/cn/community/developer-day/2-jvm-tuning-1866448-zhs.pdf",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>minor gc: 就是针对青年代的gc
major gc: 针对老年代的gc
Full GC: 针对老年代和永久代进行回收,有的时候full gc等价于major gc
这个说法是有据可查的：http://www.oracle.com/technetwork/java/javase/memorymanagement-whitepaper-150215.pdf，page 7，bottom 。
同时也可以通过看gc日志来进行验证（当然这个方法不是很严谨），如下：

代码：
public static void main(String[] args) {
    ArrayList&lt;Object&gt; oss = new ArrayList&lt;Object&gt;();

    int j = 0;
    while (true) {
        System.out.println(j);
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {

        }
        ArrayList&lt;Object&gt; os = new ArrayList&lt;Object&gt;();
        for (int i = 0; i &lt; 10000; i++) {
            os.add(new Object());
        }

        for (int i = 0; i &lt; 100; i++) {
            oss.add(new byte[1024 * 10]);
        }

        if (oss.size() &gt;= 500) {
            oss.clear();
        }
    }
}

jvm参数设置：-XX:+PrintGC -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+UseConcMarkSweepGC -Xmx20m -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=30 -Xmn10m -XX:SurvivorRatio=3

当执行jmap -histo:live pid命令触发Full GC后，在jdk7和jdk8中的不同输出

jdk8:
2016-09-27T17:37:41.927-0800: 54.476: [Full GC (Heap Inspection Initiated GC) 2016-09-27T17:37:41.927-0800: 54.476: [CMS: 2971K-&gt;2833K(10240K), 0.0043247 secs] 5558K-&gt;2833K(18432K), [Metaspace: 3151K-&gt;3151K(1056768K)], 0.0044026 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 

jdk7:
2016-09-27T17:35:02.466-0800: 1162.042: [Full GC2016-09-27T17:35:02.466-0800: 1162.042: [CMS: 2999K-&gt;1723K(10240K), 0.0091370 secs] 10340K-&gt;1723K(18432K), [CMS Perm : 2968K-&gt;2968K(21248K)], 0.0092450 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别用jdk7,8跑程序，用jvisualvm（jdk8版本）查看： 用jdk7跑：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079247853.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><p>用jdk8跑：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079254277.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure>`,5),b={href:"http://blog.csdn.net/zhyhang/article/details/17246223",target:"_blank",rel:"noopener noreferrer"},g=l('<hr><p>哪些情况下会触发Minor GC:</p><ol><li>Eden满，或者新创建的对象大小&gt;Eden所剩空间</li><li>设置了 -XX:+ScavengeBeforeFullGC 参数，在Full GC前会触发 minor gc.</li><li>设置了 -XX:+CMSScavengeBeforeRemark 参数。如果采用了cms收集器，在执行cms gc的remark阶段前会执行 minor gc</li></ol><hr><p>看了上面的major gc 与 full gc的区别，建议没必要去纠结这个东西。记住下面几点即可</p><p>Full GC</p><ol><li>Full GC == Major GC指的是对老年代/永久代的stop the world的GC</li><li>Full GC的次数 = 老年代GC时 stop the world的次数</li><li>Full GC的时间 = 老年代GC时 stop the world的总时间</li><li>CMS 不等于Full GC，我们可以看到CMS分为多个阶段，只有stop the world的阶段被计算到了Full GC的次数和时间，而和业务线程并发的GC的次数和时间则不被认为是Full GC</li></ol><hr><p>哪些情况下会触发Full GC:</p><ol><li>执行 jmap -histo:live pid</li><li>老年代满</li></ol><p>注意：</p><ol><li>在gc日志如果没有看到 Full GC 字样，也并不代表没有发生 Full GC.就好比cms gc的情况。</li><li>cms gc执行一次，full gc的次数会加2,可以通过jstat命令查看full gc的次数</li></ol><hr><h2 id="jit" tabindex="-1"><a class="header-anchor" href="#jit" aria-hidden="true">#</a> JIT</h2><h4 id="xx-compilethreshold-10000" tabindex="-1"><a class="header-anchor" href="#xx-compilethreshold-10000" aria-hidden="true">#</a> -XX:CompileThreshold=10000</h4><p>Number of method invocations/branches before compiling [-client: 1,500] 方法被JVM进行JIT编译的阈值。如果某个方法被调用了这么多次，会触发这个方法的jit编译</p><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><h4 id="xx-omitstacktraceinfastthrow" tabindex="-1"><a class="header-anchor" href="#xx-omitstacktraceinfastthrow" aria-hidden="true">#</a> -XX:+OmitStackTraceInFastThrow</h4><p>对于一些频繁抛出的异常，JDK为了性能会做一个优化，在JIT重新编译后会抛出没有堆栈的异常。 启用，则表明使用这个优化</p><h2 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h2>',20),h={href:"http://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html",target:"_blank",rel:"noopener noreferrer"},X=n("br",null,null,-1),f=n("h2",{id:"系统推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),C=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),j=n("hr",null,null,-1),S=n("hr",null,null,-1),x=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),a("：物极必反，但蠢，没有极点。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c3145017-2f44-4bca-9450-28431444944e",alt:"",loading:"lazy"})])],-1);function E(F,G){const p=o("ExternalLinkIcon"),e=o("RouterLink");return r(),c("div",null,[d,n("figure",null,[v,n("figcaption",null,[a("引用自："),n("a",m,[a("http://www.oracle.com/technetwork/cn/community/developer-day/2-jvm-tuning-1866448-zhs.pdf"),s(p)])])]),k,n("p",null,[a("可以看出，jdk8和jdk7在堆布局上相似，jdk中的permanent generation没有了，换成了metaspace。两者更详细的差异可以参考："),n("a",b,[a("http://blog.csdn.net/zhyhang/article/details/17246223"),s(p)])]),g,n("p",null,[a("详见："),n("a",h,[a("http://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html"),s(p)])]),X,f,n("ul",null,[n("li",null,[s(e,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[a("MAT工具")]),_:1})]),n("li",null,[s(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[a("Notion笔记定时备份")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:t(()=>[a("MySQL锁、事务、隔离级别")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:t(()=>[a("分库分表")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[a("gperftools")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:t(()=>[a("批量替换文件名中的指定字符串")]),_:1})]),n("li",null,[s(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:t(()=>[a("随机图片在线接口")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[a("BBR加速")]),_:1})])]),C,j,S,x])}const _=i(u,[["render",E],["__file","JVM参数设置.html.vue"]]);export{_ as default};
