---
title: JVM异常处理
date: 2017-03-15
---

1. top -p pid 
看到某个进程占用的物理内存，以及创建的线程数，也可以通过Shift+f命令对指定列进行排序，从而找到异常线程的pid。然后可以通过jstack pid | grep 命令找到这个线程在做的事，从而进行排查。

2. ps axu | grep -E 'pid|USER'
通过这个方式也能看到某个进程占用的物理内存，结果和top命令是匹配的。

3. -Xms300m -Xmx300m
同时设置了这两个参数并不代表jvm一启动就会向os申请300m的内存（是指不会立即占用300m内存）。同理，-XX:MaxPermSize=300m -XX: PermSize=300m也是一样的，也不会立即占用300m内存。
具体当前jvm instance占用了多少内存（这里值堆内内存），可以通过jmap -heap pid查看。

4. jmap -heap pid
这个命令能查看当前jvm各个堆区域使用情况，把各个区域使用空间累加便得到当前jvm程序占用了多少内存。注意是堆内内存，这个命令是不能看到jvm对堆外内存的使用情况的。比如：
```shell
jmap -heap 3273
Attaching to process ID 3273, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 24.80-b11

using thread-local object allocation.
Parallel GC with 2 thread(s)

Heap Configuration:
   MinHeapFreeRatio = 0
   MaxHeapFreeRatio = 100
   MaxHeapSize      = 314572800 (300.0MB)
   NewSize          = 209715200 (200.0MB)
   MaxNewSize       = 209715200 (200.0MB)
   OldSize          = 5439488 (5.1875MB)
   NewRatio         = 2
   SurvivorRatio    = 8
   PermSize         = 104857600 (100.0MB)
   MaxPermSize      = 104857600 (100.0MB)
   G1HeapRegionSize = 0 (0.0MB)

Heap Usage:
PS Young Generation
Eden Space:
   capacity = 167772160 (160.0MB)
   used     = 165346688 (157.6868896484375MB)
   free     = 2425472 (2.3131103515625MB)
   98.55430603027344% used
From Space:
   capacity = 20971520 (20.0MB)
   used     = 0 (0.0MB)
   free     = 20971520 (20.0MB)
   0.0% used
To Space:
   capacity = 20971520 (20.0MB)
   used     = 0 (0.0MB)
   free     = 20971520 (20.0MB)
   0.0% used
PS Old Generation
   capacity = 104857600 (100.0MB)
   used     = 64028920 (61.06273651123047MB)
   free     = 40828680 (38.93726348876953MB)
   61.06273651123047% used
PS Perm Generation
   capacity = 104857600 (100.0MB)
   used     = 6504792 (6.203453063964844MB)
   free     = 98352808 (93.79654693603516MB)
   6.203453063964844% used

3795 interned Strings occupying 301744 bytes.  
```

也就是说如果想知道当前jvm使用的堆内内存，只需要简单的把Heap Usage模块的相关信息累加即可，都可以不关心各个区域的配置信息。

当然也可以通过jstat -gc pid 500ms 1000来实时查看堆中各个区域的使用情况。这个方式和上面那中方法结果是一致的。

5. 查看jvm实例堆外内存的使用情况
很可惜我还没找到相关的工具可以直接查看这个信息的，但可以通过上面几个信息来得到堆外内存的使用情况。大致算法就是：堆内内存占用+堆外内存占用=总的jvm内存占用。
总的jvm内存占用：通过上面的1或2可以知道
堆内内存占用：jmap -heap pid
就可以计算出堆外内存占用情况。
   
2022/9/7补充： 应该可以开启 -XX:NativeMemoryTracking=detail 参数，然后通过 jcmd pid VM.native_memory detail | less 来查看

6. 堆外内存使用异常
如果发现堆外内存使用异常，先检查是否开启了-XX:+DisableExplicitGC.(开启这个会影响到jvm对堆外内存的回收，所以在频繁使用了堆外内存的情况下，建议不要开启这个选项)。
如果没有开启，那一般就是程序光申请了却没有显式的释放。这个是否如果不清楚程序哪里使用了堆外内存，可以通过btrace脚本进行跟踪来获取调用堆栈，定位代码。
jdk提供用于堆外内存分配的api最底层的应该是Unsafe#allocateMemory方法，但这个方法是native，btrace对native方法的跟踪好像有点问题。所以可以试试拦截上一层的方法，
比如：java.nio.ByteBuffer#allocateDirect方法，示例如下: 至于如何使用btrace，入门可以参考：http://blog.csdn.net/wilsonpeng3/article/details/52576253 关于btrace的另外一些问题，就不再是本话题的讨论内容了。
```java
import com.sun.btrace.annotations.*;
import static com.sun.btrace.BTraceUtils.*;
import java.lang.reflect.Field;

@BTrace public class HelloBtrace {

  @OnMethod(
    clazz="java.nio.ByteBuffer",
    method="allocateDirect"
  )
  public static void onF1() {
    jstack();
    println("Hello BTrace");
  }
}                  
```





<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你说人命贱吧，可是一进医院就贵得不行。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=d3f7c4ee-38b8-465a-939d-3941ce22fc14)
