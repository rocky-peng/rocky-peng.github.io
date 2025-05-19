import{_ as o,$ as c,a0 as r,a1 as n,a2 as s,a3 as a,a4 as t,a5 as l,w as p}from"./framework-349591b1.js";const u={},d=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.7.0_80&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.7</span>.0_80-b15<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">24.80</span>-b11, mixed mode<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jmap" tabindex="-1"><a class="header-anchor" href="#jmap" aria-hidden="true">#</a> jmap</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jmap
Usage:
    jmap <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>to connect to running process<span class="token punctuation">)</span>

where <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> is one of:
    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>               to print same info as Solaris pmap
    <span class="token parameter variable">-heap</span>                to print <span class="token function">java</span> heap summary
    -histo<span class="token punctuation">[</span>:live<span class="token punctuation">]</span>        to print histogram of <span class="token function">java</span> object heap<span class="token punctuation">;</span> <span class="token keyword">if</span> the <span class="token string">&quot;live&quot;</span>
                         suboption is specified, only count live objects
    <span class="token parameter variable">-permstat</span>            to print permanent generation statistics
    <span class="token parameter variable">-finalizerinfo</span>       to print information on objects awaiting finalization
    -dump:<span class="token operator">&lt;</span>dump-options<span class="token operator">&gt;</span> to dump <span class="token function">java</span> heap <span class="token keyword">in</span> hprof binary <span class="token function">format</span>
                         dump-options:
                           live         dump only live objects<span class="token punctuation">;</span> <span class="token keyword">if</span> not specified,
                                        all objects <span class="token keyword">in</span> the heap are dumped.
                           <span class="token assign-left variable">format</span><span class="token operator">=</span>b     binary <span class="token function">format</span>
                           <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>  dump heap to <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
                         Example: jmap -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>heap.bin <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
                         
    <span class="token parameter variable">-F</span>                   force. Use with -dump:<span class="token operator">&lt;</span>dump-options<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> or <span class="token parameter variable">-histo</span>
                         to force a heap dump or histogram when <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> does not
                         respond. The <span class="token string">&quot;live&quot;</span> suboption is not supported
                         <span class="token keyword">in</span> this mode.
    <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token parameter variable">-help</span>           to print this <span class="token builtin class-name">help</span> message
    -J<span class="token operator">&lt;</span>flag<span class="token operator">&gt;</span>             to pass <span class="token operator">&lt;</span>flag<span class="token operator">&gt;</span> directly to the runtime system 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="option-heap" tabindex="-1"><a class="header-anchor" href="#option-heap" aria-hidden="true">#</a> option: -heap</h4><p>可以查看采用的 垃圾收集器，java堆的配置信息，使用情况 ![][1]</p><h4 id="option-histo-live" tabindex="-1"><a class="header-anchor" href="#option-histo-live" aria-hidden="true">#</a> option: -histo[:live]</h4><p>按照类名分组，统计各个类的实例数，占用的内存大小 ![][2]</p><p>注意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jmap <span class="token parameter variable">-histo:live</span> pid      会触发FullGC,出现fullgc会伴随gc
jmap <span class="token parameter variable">-histo</span> pid           不会触发FullGC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：
使用的相关参数：-Xloggc:gc.log -XX:+PrintGC -XX:+PrintGCDetails -XX:+PrintGCDateStamps
如果使用jdk8，能得到如下的打印信息，重点是打印出了gc的原因。
如果使用jdk7，不能打印出gc的原因。但是，还有但是：

但是虽然使用jdk7不能再gc日志中打印这个gc的原因信息，但可以通过执行jstat -gccause pid 1s 1000在实时的查看gc信息。通过这个方式就能够查看到gc的原因。

我想也正是因为这个原因，阿里团队才开发了一个patch，让jdk7也能在gc日志中查看gc原因的信息（打上这个patch后能够通过加上参数：  -XX:+PrintGCReason来得到gc的原因信息，PrintGCReason这个参数名字应该是阿里团队自己定义的名字，因为在google上也找不到这个参数。）

2016-09-21T10:33:26.629-0800: 206.163: [GC (Allocation Failure) [PSYoungGen: 24688K-&gt;96K(24576K)] 25352K-&gt;759K(58368K), 0.0007975 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:34.250-0800: 213.784: [GC (Allocation Failure) [PSYoungGen: 24160K-&gt;160K(25088K)] 24823K-&gt;823K(58880K), 0.0029633 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:41.280-0800: 220.814: [GC (Heap Inspection Initiated GC) [PSYoungGen: 22618K-&gt;32K(24576K)] 23282K-&gt;703K(58368K), 0.0012917 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:41.282-0800: 220.815: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24576K)] [ParOldGen: 671K-&gt;664K(33280K)] 703K-&gt;664K(57856K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0045924 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:42.817-0800: 222.350: [GC (Heap Inspection Initiated GC) [PSYoungGen: 4911K-&gt;32K(24576K)] 5575K-&gt;696K(57856K), 0.0014201 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:42.818-0800: 222.352: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24576K)] [ParOldGen: 664K-&gt;664K(32768K)] 696K-&gt;664K(57344K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0040590 secs] [Times: user=0.00 sys=0.01, real=0.01 secs] 
2016-09-21T10:33:43.953-0800: 223.486: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K-&gt;32K(24064K)] 4587K-&gt;696K(56832K), 0.0011050 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:43.954-0800: 223.488: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24064K)] [ParOldGen: 664K-&gt;664K(32256K)] 696K-&gt;664K(56320K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0043866 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:45.155-0800: 224.688: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K-&gt;32K(24576K)] 4587K-&gt;696K(56832K), 0.0010624 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:45.156-0800: 224.689: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24576K)] [ParOldGen: 664K-&gt;664K(31744K)] 696K-&gt;664K(56320K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0043322 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:46.366-0800: 225.899: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K-&gt;32K(24064K)] 4587K-&gt;696K(55808K), 0.0010602 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:46.367-0800: 225.900: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24064K)] [ParOldGen: 664K-&gt;664K(31232K)] 696K-&gt;664K(55296K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0040713 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:47.541-0800: 227.074: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3923K-&gt;32K(24064K)] 4587K-&gt;696K(55296K), 0.0010704 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:47.542-0800: 227.076: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24064K)] [ParOldGen: 664K-&gt;664K(30720K)] 696K-&gt;664K(54784K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0045913 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:48.702-0800: 228.235: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K-&gt;32K(23552K)] 4498K-&gt;696K(54272K), 0.0011455 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:48.704-0800: 228.237: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(23552K)] [ParOldGen: 664K-&gt;664K(30208K)] 696K-&gt;664K(53760K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0045663 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:49.760-0800: 229.293: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K-&gt;32K(24064K)] 4498K-&gt;696K(54272K), 0.0007126 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:49.760-0800: 229.293: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(24064K)] [ParOldGen: 664K-&gt;664K(29696K)] 696K-&gt;664K(53760K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0058432 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:50.881-0800: 230.414: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3833K-&gt;32K(23040K)] 4498K-&gt;696K(52736K), 0.0013097 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:50.882-0800: 230.415: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(23040K)] [ParOldGen: 664K-&gt;664K(29184K)] 696K-&gt;664K(52224K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0050243 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:51.957-0800: 231.490: [GC (Heap Inspection Initiated GC) [PSYoungGen: 3353K-&gt;32K(23552K)] 4018K-&gt;696K(52736K), 0.0018058 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:33:51.959-0800: 231.492: [Full GC (Heap Inspection Initiated GC) [PSYoungGen: 32K-&gt;0K(23552K)] [ParOldGen: 664K-&gt;664K(28672K)] 696K-&gt;664K(52224K), [Metaspace: 3486K-&gt;3486K(1056768K)], 0.0039043 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] 
2016-09-21T10:33:59.212-0800: 238.745: [GC (Allocation Failure) [PSYoungGen: 22528K-&gt;196K(23040K)] 23192K-&gt;861K(51712K), 0.0015904 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2016-09-21T10:34:06.420-0800: 245.953: [GC (Allocation Failure) [PSYoungGen: 22724K-&gt;128K(23040K)] 23389K-&gt;792K(51712K), 0.0009436 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="option-dump" tabindex="-1"><a class="header-anchor" href="#option-dump" aria-hidden="true">#</a> option: -dump</h4><p>生成堆转储文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jmap <span class="token parameter variable">-dump:format</span><span class="token operator">=</span>b,file<span class="token operator">=</span>heap.bin
jmap -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>heap.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jstat" tabindex="-1"><a class="header-anchor" href="#jstat" aria-hidden="true">#</a> jstat</h2><p>用于监控各种运行时状态信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jstat option pid ms<span class="token operator">|</span>s count
示例：
jstat <span class="token parameter variable">-gc</span> <span class="token number">32757</span> <span class="token number">250</span> <span class="token number">20</span>
表示：查看java进程32757各个区域的垃圾回收信息，每隔250ms打印一次，共打印20次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> -gc</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@xxx ~<span class="token punctuation">]</span><span class="token comment"># jstat -gc 32757 250 5</span>
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       PC     PU    YGC     YGCT    FGC    FGCT     GCT
<span class="token number">11264.0</span> <span class="token number">11264.0</span> <span class="token number">3201.2</span>  <span class="token number">0.0</span>   <span class="token number">45056.0</span>  <span class="token number">27402.0</span>   <span class="token number">68608.0</span>    <span class="token number">33700.2</span>   <span class="token number">41472.0</span> <span class="token number">41347.6</span>     <span class="token number">14</span>    <span class="token number">0.453</span>   <span class="token number">0</span>      <span class="token number">0.000</span>    <span class="token number">0.453</span>
<span class="token number">11264.0</span> <span class="token number">11264.0</span> <span class="token number">3201.2</span>  <span class="token number">0.0</span>   <span class="token number">45056.0</span>  <span class="token number">27402.1</span>   <span class="token number">68608.0</span>    <span class="token number">33700.2</span>   <span class="token number">41472.0</span> <span class="token number">41347.6</span>     <span class="token number">14</span>    <span class="token number">0.453</span>   <span class="token number">0</span>      <span class="token number">0.000</span>    <span class="token number">0.453</span>
<span class="token number">11264.0</span> <span class="token number">11264.0</span> <span class="token number">3201.2</span>  <span class="token number">0.0</span>   <span class="token number">45056.0</span>  <span class="token number">27402.1</span>   <span class="token number">68608.0</span>    <span class="token number">33700.2</span>   <span class="token number">41472.0</span> <span class="token number">41347.6</span>     <span class="token number">14</span>    <span class="token number">0.453</span>   <span class="token number">0</span>      <span class="token number">0.000</span>    <span class="token number">0.453</span>
<span class="token number">11264.0</span> <span class="token number">11264.0</span> <span class="token number">3201.2</span>  <span class="token number">0.0</span>   <span class="token number">45056.0</span>  <span class="token number">27402.2</span>   <span class="token number">68608.0</span>    <span class="token number">33700.2</span>   <span class="token number">41472.0</span> <span class="token number">41347.6</span>     <span class="token number">14</span>    <span class="token number">0.453</span>   <span class="token number">0</span>      <span class="token number">0.000</span>    <span class="token number">0.453</span>
<span class="token number">11264.0</span> <span class="token number">11264.0</span> <span class="token number">3201.2</span>  <span class="token number">0.0</span>   <span class="token number">45056.0</span>  <span class="token number">27402.2</span>   <span class="token number">68608.0</span>    <span class="token number">33700.2</span>   <span class="token number">41472.0</span> <span class="token number">41347.6</span>     <span class="token number">14</span>    <span class="token number">0.453</span>   <span class="token number">0</span>      <span class="token number">0.000</span>    <span class="token number">0.453</span> 


这里显示的列名解释：
S开头的是Survivor区：
    SOC:Survivor <span class="token number">0</span> Capacity
    S1C:Survivor <span class="token number">1</span> Capactiy
    S0U:Survivor <span class="token number">0</span> Used
    S1U:Survivor <span class="token number">1</span> Used
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

可以结合jmap <span class="token parameter variable">-heap</span> <span class="token number">32757</span> 输出对照着看：

<span class="token punctuation">[</span>root@xxx ~<span class="token punctuation">]</span><span class="token comment"># jmap -heap 32757</span>
Attaching to process ID <span class="token number">32757</span>, please wait<span class="token punctuation">..</span>.
Debugger attached successfully.
Server compiler detected.
JVM version is <span class="token number">24.80</span>-b11

using thread-local object allocation.
Parallel GC with <span class="token number">8</span> thread<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

Heap Configuration:
   MinHeapFreeRatio <span class="token operator">=</span> <span class="token number">0</span>
   MaxHeapFreeRatio <span class="token operator">=</span> <span class="token number">100</span>
   MaxHeapSize      <span class="token operator">=</span> <span class="token number">209715200</span> <span class="token punctuation">(</span><span class="token number">200</span>.0MB<span class="token punctuation">)</span>
   NewSize          <span class="token operator">=</span> <span class="token number">1310720</span> <span class="token punctuation">(</span><span class="token number">1</span>.25MB<span class="token punctuation">)</span>
   MaxNewSize       <span class="token operator">=</span> <span class="token number">17592186044415</span> MB
   OldSize          <span class="token operator">=</span> <span class="token number">5439488</span> <span class="token punctuation">(</span><span class="token number">5</span>.1875MB<span class="token punctuation">)</span>
   NewRatio         <span class="token operator">=</span> <span class="token number">2</span>
   SurvivorRatio    <span class="token operator">=</span> <span class="token number">8</span>
   PermSize         <span class="token operator">=</span> <span class="token number">21757952</span> <span class="token punctuation">(</span><span class="token number">20</span>.75MB<span class="token punctuation">)</span>
   MaxPermSize      <span class="token operator">=</span> <span class="token number">85983232</span> <span class="token punctuation">(</span><span class="token number">82</span>.0MB<span class="token punctuation">)</span>
   G1HeapRegionSize <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0</span>.0MB<span class="token punctuation">)</span>

Heap Usage:
PS Young Generation
Eden Space:
   capacity <span class="token operator">=</span> <span class="token number">46137344</span> <span class="token punctuation">(</span><span class="token number">44</span>.0MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">28497008</span> <span class="token punctuation">(</span><span class="token number">27</span>.176864624023438MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">17640336</span> <span class="token punctuation">(</span><span class="token number">16</span>.823135375976562MB<span class="token punctuation">)</span>
   <span class="token number">61.765601418235086</span>% used
From Space:
   capacity <span class="token operator">=</span> <span class="token number">11534336</span> <span class="token punctuation">(</span><span class="token number">11</span>.0MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">3277992</span> <span class="token punctuation">(</span><span class="token number">3</span>.1261367797851562MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">8256344</span> <span class="token punctuation">(</span><span class="token number">7</span>.873863220214844MB<span class="token punctuation">)</span>
   <span class="token number">28.41942527077415</span>% used
To Space:
   capacity <span class="token operator">=</span> <span class="token number">11534336</span> <span class="token punctuation">(</span><span class="token number">11</span>.0MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0</span>.0MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">11534336</span> <span class="token punctuation">(</span><span class="token number">11</span>.0MB<span class="token punctuation">)</span>
   <span class="token number">0.0</span>% used
PS Old Generation
   capacity <span class="token operator">=</span> <span class="token number">70254592</span> <span class="token punctuation">(</span><span class="token number">67</span>.0MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">34508960</span> <span class="token punctuation">(</span><span class="token number">32</span>.910308837890625MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">35745632</span> <span class="token punctuation">(</span><span class="token number">34</span>.089691162109375MB<span class="token punctuation">)</span>
   <span class="token number">49.119863937150186</span>% used
PS Perm Generation
   capacity <span class="token operator">=</span> <span class="token number">42467328</span> <span class="token punctuation">(</span><span class="token number">40</span>.5MB<span class="token punctuation">)</span>
   used     <span class="token operator">=</span> <span class="token number">42339976</span> <span class="token punctuation">(</span><span class="token number">40</span>.37854766845703MB<span class="token punctuation">)</span>
   <span class="token function">free</span>     <span class="token operator">=</span> <span class="token number">127352</span> <span class="token punctuation">(</span><span class="token number">0</span>.12145233154296875MB<span class="token punctuation">)</span>
   <span class="token number">99.70011769989391</span>% used

<span class="token number">17207</span> interned Strings occupying <span class="token number">1786448</span> bytes. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gcutil" tabindex="-1"><a class="header-anchor" href="#gcutil" aria-hidden="true">#</a> -gcutil</h4><p>和-gc差不多，只是输出的是使用容量占比。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcutil</span> <span class="token number">32757</span> <span class="token number">250</span> <span class="token number">10</span>

<span class="token punctuation">[</span>root@qa-service ~<span class="token punctuation">]</span><span class="token comment"># jstat -gcutil 32757 250 5</span>
  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.00</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span>
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.00</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span>
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.00</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span>
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.00</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span>
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.00</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gccause" tabindex="-1"><a class="header-anchor" href="#gccause" aria-hidden="true">#</a> -gccause</h4><p>和-gcutil一样，只是多输出两列，来显示上次gc的原因</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qa-service ~<span class="token punctuation">]</span><span class="token comment"># jstat -gccause 32757 250 5</span>
  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT    LGCC                 GCC
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.45</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span> Allocation Failure   No GC
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.45</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span> Allocation Failure   No GC
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.45</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span> Allocation Failure   No GC
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.45</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span> Allocation Failure   No GC
 <span class="token number">28.42</span>   <span class="token number">0.00</span>  <span class="token number">78.45</span>  <span class="token number">49.12</span>  <span class="token number">99.80</span>     <span class="token number">14</span>    <span class="token number">0.453</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.453</span> Allocation Failure   No GC 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="printcompilation" tabindex="-1"><a class="header-anchor" href="#printcompilation" aria-hidden="true">#</a> -printcompilation</h4><p>输出已被JIT编译的方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qa-service ~<span class="token punctuation">]</span><span class="token comment"># jstat -printcompilation 32757 250 5</span>
Compiled  Size  Type Method
    <span class="token number">1074</span>    <span class="token number">191</span>    <span class="token number">1</span> redis/clients/util/RedisInputStream readLineBytes
    <span class="token number">1074</span>    <span class="token number">191</span>    <span class="token number">1</span> redis/clients/util/RedisInputStream readLineBytes 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项" aria-hidden="true">#</a> 其他选项</h4>`,29),m={href:"http://docs.oracle.com/javase/7/docs/technotes/tools/share/jstat.html#options",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="jinfo" tabindex="-1"><a class="header-anchor" href="#jinfo" aria-hidden="true">#</a> jinfo</h2><p>主要用来查看和调整jvm参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qa-service ~<span class="token punctuation">]</span><span class="token comment"># jinfo</span>
Usage:
    jinfo <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>to connect to running process<span class="token punctuation">)</span>

where <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> is one of:
    <span class="token parameter variable">-flag</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>         to print the value of the named VM flag
    <span class="token parameter variable">-flag</span> <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>    to <span class="token builtin class-name">enable</span> or disable the named VM flag
    <span class="token parameter variable">-flag</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> to <span class="token builtin class-name">set</span> the named VM flag to the given value
    <span class="token parameter variable">-flags</span>               to print VM flags
    <span class="token parameter variable">-sysprops</span>            to print Java system properties
    <span class="token operator">&lt;</span>no option<span class="token operator">&gt;</span>          to print both of the above
    <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token parameter variable">-help</span>           to print this <span class="token builtin class-name">help</span> message          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jcmd" tabindex="-1"><a class="header-anchor" href="#jcmd" aria-hidden="true">#</a> jcmd</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jcmd pid <span class="token builtin class-name">help</span>

practise git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> ✗ jcmd <span class="token number">93526</span> <span class="token builtin class-name">help</span>           
<span class="token number">93526</span>:
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
<span class="token builtin class-name">help</span>

针对某个具体命令的说明信息可以使用：
jcmd <span class="token number">93526</span> <span class="token builtin class-name">help</span> VM.version 

打印vm版本信息：
jcmd <span class="token number">93526</span> VM.version 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,7),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),k=n("hr",null,null,-1),g=n("hr",null,null,-1),h=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：能不生气就不要生气，能不骂人就不要骂人，能动手就直接动手。 "),n("br"),n("br"),n("img",{src:"https://images.pexels.com/photos/3970339/pexels-photo-3970339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A welder at work indoors, creating bright sparks while welding metal pipes.",loading:"lazy"})])],-1);function K(G,f){const i=p("ExternalLinkIcon"),e=p("RouterLink");return c(),r("div",null,[d,n("p",null,[s("具体可以参考官网："),n("a",m,[s("http://docs.oracle.com/javase/7/docs/technotes/tools/share/jstat.html#options"),a(i)])]),b,n("ul",null,[n("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[s("Cordova+Umi项目搭建步骤")]),_:1})]),n("li",null,[a(e,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:t(()=>[s("JetBrains IDE 全破解")]),_:1})]),n("li",null,[a(e,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:t(()=>[s("JVM参数设置")]),_:1})]),n("li",null,[a(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:t(()=>[s("是时候使用MapStruct替代BeanUtils了")]),_:1})]),n("li",null,[a(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("Redis高可用")]),_:1})]),n("li",null,[a(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:t(()=>[s("高可用通用方案")]),_:1})]),n("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[s("Docker笔记")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[s("批量修改git历史记录中的用户名和邮箱")]),_:1})]),n("li",null,[a(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[s("CountDownLatch源码解读")]),_:1})]),n("li",null,[a(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:t(()=>[s("MyBatis xml特殊字符处理")]),_:1})]),n("li",null,[a(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[s("Hbase 总览")]),_:1})]),n("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:t(()=>[s("Linux")]),_:1})])]),v,k,g,h])}const E=o(u,[["render",K],["__file","JDK命令行工具.html.vue"]]);export{E as default};
