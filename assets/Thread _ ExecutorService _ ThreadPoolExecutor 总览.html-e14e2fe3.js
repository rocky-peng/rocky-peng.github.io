import{_ as n,$ as a,a0 as s,a3 as e}from"./framework-24d1f903.js";const t={},p=e(`<h2 id="executorservice" tabindex="-1"><a class="header-anchor" href="#executorservice" aria-hidden="true">#</a> ExecutorService</h2><h3 id="类方法" tabindex="-1"><a class="header-anchor" href="#类方法" aria-hidden="true">#</a> 类方法</h3><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079158424.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>shutdown 允许已经提交的任务（尚未开始执行和已经开始执行的）继续执行</p></li><li><p>shutdownNow 尚未开始执行的任务不再执行，同时尝试终止正在执行的任务（调用线程的Thread.interrupt方法）</p></li><li><p>无论是shutdown 还是shutdownNow，两个的执行都会阻止新的任务提交</p></li><li><p>一个ExecutorService一旦termination，表明没有正在执行的任务，没有等待执行的任务，也不会有新的任务可以被提交。</p></li><li><p>如果一个ExecutorService不再使用，应该调用shutdown方法来回收资源。</p></li><li><p>submit方法（三个重载方法）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>返回的<span class="token class-name">Future</span>对象可以用来取消任务和等待任务执行完成

最终内部都调用了<span class="token function">execute</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span>方法来提交任务，
如果传递进来的是callable对象，则会通过适配器模式转换为runnable对象，最后传递给execute方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>invokeAny和invokeAll方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>用户批量执行任务，
invokeAny：会阻塞当前线程，直到某个任务完成。并返回这个任务相关的<span class="token class-name">Future</span>对象
invokeAll：会阻塞当前线程，直到所有任务完成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>两阶段shutdown</p><ol><li>先执行shutdown方法</li><li>调用awaitTermination方法</li><li>再调用shutdownNow方法</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">shutdownAndAwaitTermination</span><span class="token punctuation">(</span><span class="token class-name">ExecutorService</span> pool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   pool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Disable new tasks from being submitted</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
     <span class="token comment">// Wait a while for existing tasks to terminate</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">awaitTermination</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       pool<span class="token punctuation">.</span><span class="token function">shutdownNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cancel currently executing tasks</span>
       <span class="token comment">// Wait a while for tasks to respond to being cancelled</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">awaitTermination</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pool did not terminate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ie<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// (Re-)Cancel if current thread also interrupted</span>
     pool<span class="token punctuation">.</span><span class="token function">shutdownNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// Preserve interrupt status</span>
     <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>isShutdown和isTerminated分别对应于两个状态：关闭状态，终结状态</p></li></ol><h2 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> Thread</h2><ol><li><p>interrupt方法 如果执行a.interrupt方法后，如果a线程（注意是a线程，不是调用线程）抛出了InterruptedException异常，那么a的中断状态会被清除。如果不是抛出InterruptedException异常，那么a的中断状态都会被设置（如果是线程a自己调用了a.interrupt方法，那么a不会抛出InterruptedException异常，所以a的中断状态会被设置）。一般情况下如果抛出了InterruptedException异常，则可以在catch块里自己调用下Thread.currentThread().interrupt()方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInterrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">try</span><span class="token punctuation">{</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	   <span class="token comment">//没有这行代码的话，可能永远不会退出循环</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果线程a当前存在中断状态，然后a执行 LockSupport.park()方法，这个方法会立即返回。</p></li><li><p>interrupted方法 执行a.interrupted方法会返回a线程的中断状态，同时会清除a线程的中断状态</p></li><li><p>isInterrupted方法 执行a.interrupted方法会返回a线程的中断状态，不会清除a线程的中断状态</p></li><li><p>join方法 线程b执行a.join方法后，线程b进入WAITING状态，将等待a线程执行完毕，然后b才会继续执行</p></li><li><p>sleep方法 哪个线程执行的sleep方法就让哪个线程sleep。比如线程b执行a.sleep方法，那么进入sleep的线程并不是a线程，而是b线程。也就是说sleep方法是让执行sleep方法的线程sleep。 Thread.sleep方法==Thread.currentThread().sleep方法</p></li><li><p>线程状态 在等待池中的线程(指的是sync的实现)的状态不一定是 WAITING 或 TIMED_WATING ，也可能是BLOCKED状态。 当执行notifyAll方法后，会唤醒等待池中的所有线程，此时等待池中所有线程的状态为Runnable，然后这些线程会去竞争锁，没有得到锁的线程将进入BLOCKED状态。</p></li><li><p>CPU的cas指令并非是把数据的读取，修改，写入三个操作作为一个原子操作。只是在修改前回去比对实际的值和期望的值。某个线程在执行cas操作期间，其他线程仍然可以进行读取和写入。</p></li><li><p>不是所有CPU都支持CAS，在某些平台，jvm中cas的实现仍然是锁机制</p></li><li><p>某个线程执行了Unsafe.park方法后，该线程进入WAITING状态。</p></li><li><p>线程状态 new,runable,waiting,timed-waiting,blocked,terminated</p></li></ol><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079169064.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>记住：<strong>只有sync关键字才会导致线程进入blocked状态</strong></p><ol start="11"><li><p>守护线程</p><ul><li>main线程挂了，守护线程跟着挂</li><li>某个某个线程是守护线程，那么执行路径中的try-finally，finally方法jvm不保证能执行</li></ul></li><li><p>非守护线程：main线程挂了，非守护线程可以继续执行</p></li><li><p>notify &amp; wait 标准范式</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>在<span class="token class-name">Object</span>类的源码中给出了这两个方法的是否范例。

等待方：
<span class="token number">1.</span> 获得锁
<span class="token number">2.</span> 在循环里判断条件是否满足，不满足则执行wait方法
<span class="token number">3.</span> 条件满足跳出循环，执行业务逻辑

<span class="token function">sync</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>condition<span class="token punctuation">)</span><span class="token punctuation">{</span>
		obj<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//do something</span>
<span class="token punctuation">}</span>

通知方：
<span class="token number">1.</span> 获得锁
<span class="token number">2.</span> 改变condition
<span class="token number">3.</span> 通知等待方

<span class="token function">sync</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	condition <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj.notifyAll();</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li><p>yield()/sleep()/wait()/notify()对锁的有何影响？</p><ul><li>yield方法执行后只会让出cpu，但不会释放锁</li><li>sleep方法也不会释放锁</li><li>执行wait方法前必须先获得锁，执行后将会释放锁。当wait方法返回后将会重新获得锁</li><li>执行notify方法前必须先获得锁，执行后不会释放锁</li></ul></li><li><p>sync的对象不要用String、Integer、Long等基础的对象，因为共享原因可能锁到别人用的值。</p></li></ol><h2 id="threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor" aria-hidden="true">#</a> ThreadPoolExecutor</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
                              <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
                              <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
                              <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
                              <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>
                              <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
                              <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="core-pool-size-及-max-pool-size" tabindex="-1"><a class="header-anchor" href="#core-pool-size-及-max-pool-size" aria-hidden="true">#</a> core pool size 及 max pool size</h3><p>一个新的任务提交哪些情况下会创建新的线程：（可以结合下面代码中的注释） 1. 当前池中的任务数小于corePoolSize 2. 如果池中的任务数大于corePoolSize小于maxPoolSize，同时任务队列已经满的情况下，也会创建新的线程</p><p>可以动态改变这两个的值：setCorePoolSize 以及 setMaximumPoolSize</p><p>如果corePoolSize==maximumPoolSize，那么则创建了一个固定大小的线程池</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
     * Proceed in 3 steps:
     *
     * 1. If fewer than corePoolSize threads are running, try to
     * start a new thread with the given command as its first
     * task.  The call to addWorker atomically checks runState and
     * workerCount, and so prevents false alarms that would add
     * threads when it shouldn&#39;t, by returning false.
     *
     * 2. If a task can be successfully queued, then we still need
     * to double-check whether we should have added a thread
     * (because existing ones died since last checking) or that
     * the pool shut down since entry into this method. So we
     * recheck state and if necessary roll back the enqueuing if
     * stopped, or start a new thread if there are none.
     *
     * 3. If we cannot queue task, then we try to add a new
     * thread.  If it fails, we know we are shut down or saturated
     * and so reject the task.
     */</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">workerCountOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&lt;</span> corePoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">addWorker</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRunning</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> workQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> recheck <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token function">isRunning</span><span class="token punctuation">(</span>recheck<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">remove</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">workerCountOf</span><span class="token punctuation">(</span>recheck<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">addWorker</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">addWorker</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keep-alive-time" tabindex="-1"><a class="header-anchor" href="#keep-alive-time" aria-hidden="true">#</a> keep alive time</h3><p>如果正在运行中的线程大于了corePoolSize，并且如果有线程的空闲时间大于了keepAliveTime，那么这些线程会被kill掉直到剩下corePoolSize个线程。</p><p>可以动态设置：setKeepAliveTime方法</p><p>默认情况下keep-alive策略只会针对已创建线程数大于corePoolSize的情况下</p><p>可以通过执行allowCoreThreadTimeOut(boolean)让keep-alive策略应用在已创建线程数小于corePoolSize的情况下。</p><h3 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h3><ol><li>如果当前池中的线程数小于corePoolSize，那么会创建新的线程来执行当前提交的任务，而不是进入阻塞队列</li><li>如果当前池中的线程数大于等于corePoolSize,会尝试先进入阻塞队列，如果进入失败（其实就是队列已满），则会在maxPoolSize条件下创建新的线程来执行当前提交的任务。 如果不满足maxPoolSize条件，那么就会执行 拒绝执行策略（默认的拒绝执行策略见下）</li></ol><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079190972.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="synchronousqueue" tabindex="-1"><a class="header-anchor" href="#synchronousqueue" aria-hidden="true">#</a> SynchronousQueue</h4><ol><li><p>是一个无缓冲的等待队列，生产入队的时候需要有线程等待消费出队，消费出队的时候必须有线程正要生产入队，否则线程阻塞。</p></li><li><p>有两种模式</p><ol><li><p>公平模式：使用FIFO队列来阻塞多余的生产者和消费者，从而体系整体的公平策略</p></li><li><p>非公平模式：使用LIFO队列来管理多余的生产者和消费者，如果生产者和消费者的处理速度有差距，则很容易出现饥渴的情况，即可能有某些生产者或者是消费者的数据永远都得不到处理。</p></li></ol></li></ol><p>直接传递给线程（Direct handoffs）</p><p>感觉可以理解为这个入队列会总是失败，就相当于没有这个队列一样。这样就能在maxPoolSize条件下尽可能快的创建（或选择空闲的线程）来执行新提交的任务。</p><p>如果提交的任务有互相的依赖性，可以考虑使用这种队列。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">,</span>
								  <span class="token number">60L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span>
								  <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个线程池，如果有洪水般的任务进来，那么就会瞬间创建大量的线程，这是很危险的，所以一般建议不使用这个工厂方法，虽然当任务减少后，线程的个数也会在60秒后一一回收。</p><h4 id="linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#linkedblockingqueue" aria-hidden="true">#</a> LinkedBlockingQueue</h4><ol><li><p>基于带头结点的单向链表实现，不过头结点的指向是变动的，一旦new出来则不可扩容。</p></li><li><p>采用了两个锁（一个用于入队，一个用于出队），所以入队出队两个操作互不影响。两个锁都是非公平锁。</p></li><li><p>初始化时建议制定一个容量，否则是int的最大值。如果生产者速度比消费者快，可能会消耗大量内存。</p></li></ol><h4 id="arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#arrayblockingqueue" aria-hidden="true">#</a> ArrayBlockingQueue</h4><ol><li><p>基于指定长度的数组实现，不可扩容。维护了两个int型变量，分别执行队首和队尾下标，实现循环数组的效果</p></li><li><p>由于采用了一个锁，所以在入队操作和出队操作不能同时进行</p></li><li><p>可以指定采用的锁是否为公平锁，默认情况下为非公平锁</p></li></ol><h4 id="priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#priorityblockingqueue" aria-hidden="true">#</a> PriorityBlockingQueue</h4><ol><li><p>物理上基于数组来实现，逻辑上采用的是堆存储结构，可扩容。put方法采用offer方法实现，所以put方法不会阻塞。</p></li><li><p>排序算法采用的是堆排序，遍历这个队列并不能得到有序输出，只有依次执行出队操作才能得到有序输出。</p></li><li><p>使用一个锁来完成</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Iterator</span> iterator <span class="token operator">=</span> priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：1，8，4</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
# 会发现并非按照<span class="token number">1</span>，<span class="token number">4</span>，<span class="token number">8</span>的顺序输出。但下面的就是就是按照 <span class="token number">1</span>，<span class="token number">4</span>，<span class="token number">8</span>的顺序输出

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：1，4，8</span>
# 但这个队列会保证队列的第一个元素永远是当前优先级最高的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>要求要么元素实现了Comparable接口，要么这个队列有一个Comparator实例</p></li></ol><h3 id="拒绝执行策略" tabindex="-1"><a class="header-anchor" href="#拒绝执行策略" aria-hidden="true">#</a> 拒绝执行策略</h3><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079201757.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="threadpoolexecutor-abortpolicy" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-abortpolicy" aria-hidden="true">#</a> ThreadPoolExecutor.AbortPolicy</h4><p>抛出RejectedExecutionException异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rejectedExecution</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RejectedExecutionException</span><span class="token punctuation">(</span><span class="token string">&quot;Task &quot;</span> <span class="token operator">+</span> r<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
										 <span class="token string">&quot; rejected from &quot;</span> <span class="token operator">+</span>
										 e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="threadpoolexecutor-callerrunspolicy" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-callerrunspolicy" aria-hidden="true">#</a> ThreadPoolExecutor.CallerRunsPolicy</h4><p>在调用线程上执行（哪个线程提交的任务就哪个线程执行）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rejectedExecution</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>e<span class="token punctuation">.</span><span class="token function">isShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		r<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="threadpoolexecutor-discardpolicy" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-discardpolicy" aria-hidden="true">#</a> ThreadPoolExecutor.DiscardPolicy</h4><p>直接放弃</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rejectedExecution</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="threadpoolexecutor-discardoldestpolicy" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-discardoldestpolicy" aria-hidden="true">#</a> ThreadPoolExecutor.DiscardOldestPolicy</h4><p>放弃当前队列中第一个任务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rejectedExecution</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>e<span class="token punctuation">.</span><span class="token function">isShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		e<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="finalization" tabindex="-1"><a class="header-anchor" href="#finalization" aria-hidden="true">#</a> Finalization</h3><p>一个在程序中不再被引用的线程池如果同时没有剩余的线程，那么这个线程池会被自动的shutdown.</p><p>因此如果你想即便在忘记执行shutdown方法的时候仍能正常关闭线程池，那么建议设置一个有限的keepAliveTime（针对大于线程数大于corePoolSize的那些线程），同时也执行下 allowCoreThreadTimeOut(boolean) .</p><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：世界是属于90后的，也是属于00后的，但最终还是属于脸皮厚的。 <br><br><img src="https://tuapi.eees.cc/api.php?category=dongman&amp;type=302&amp;uuid=2b8239c0-39a7-4e00-858b-0cff06700465" alt="" loading="lazy"></li></ul>`,60),o=[p];function c(i,l){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","Thread _ ExecutorService _ ThreadPoolExecutor 总览.html.vue"]]);export{r as default};
