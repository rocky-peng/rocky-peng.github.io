---
title: Thread & ExecutorService & ThreadPoolExecutor 总览
date: 2017-03-11
---

## ExecutorService

### 类方法

![](https://cdn.justdopay.com/xiaoshujiang/1629079158424.png)

1. shutdown
    允许已经提交的任务（尚未开始执行和已经开始执行的）继续执行
2. shutdownNow
    尚未开始执行的任务不再执行，同时尝试终止正在执行的任务（调用线程的Thread.interrupt方法）
3. 无论是shutdown 还是shutdownNow，两个的执行都会阻止新的任务提交

4. 一个ExecutorService一旦termination，表明没有正在执行的任务，没有等待执行的任务，也不会有新的任务可以被提交。

5. 如果一个ExecutorService不再使用，应该调用shutdown方法来回收资源。

6. submit方法（三个重载方法）
    ```java
    返回的Future对象可以用来取消任务和等待任务执行完成
	
	最终内部都调用了execute(runnable)方法来提交任务，
	如果传递进来的是callable对象，则会通过适配器模式转换为runnable对象，最后传递给execute方法。
    ```

7. invokeAny和invokeAll方法
    ```java
    用户批量执行任务，
    invokeAny：会阻塞当前线程，直到某个任务完成。并返回这个任务相关的Future对象
    invokeAll：会阻塞当前线程，直到所有任务完成。
    ```
8. 两阶段shutdown
    1. 先执行shutdown方法
    2. 调用awaitTermination方法
    3. 再调用shutdownNow方法
    
    ```java
    void shutdownAndAwaitTermination(ExecutorService pool) {
       pool.shutdown(); // Disable new tasks from being submitted
       try {
         // Wait a while for existing tasks to terminate
         if (!pool.awaitTermination(60, TimeUnit.SECONDS)) {
           pool.shutdownNow(); // Cancel currently executing tasks
           // Wait a while for tasks to respond to being cancelled
           if (!pool.awaitTermination(60, TimeUnit.SECONDS))
               System.err.println("Pool did not terminate");
         }
       } catch (InterruptedException ie) {
         // (Re-)Cancel if current thread also interrupted
         pool.shutdownNow();
         // Preserve interrupt status
         Thread.currentThread().interrupt();
       }
    }
    ```
9. isShutdown和isTerminated分别对应于两个状态：关闭状态，终结状态


## Thread
1. interrupt方法
    如果执行a.interrupt方法后，如果a线程（注意是a线程，不是调用线程）抛出了InterruptedException异常，那么a的中断状态会被清除。如果不是抛出InterruptedException异常，那么a的中断状态都会被设置（如果是线程a自己调用了a.interrupt方法，那么a不会抛出InterruptedException异常，所以a的中断状态会被设置）。一般情况下如果抛出了InterruptedException异常，则可以在catch块里自己调用下Thread.currentThread().interrupt()方法。
	```java
	while(!Thread.currentThread().isInterrupted()){
		try{
			Thread.sleep(1000);
		}catch(InterruptedException e){
		   //没有这行代码的话，可能永远不会退出循环
			Thread.currentThread().interrupt();
		}
	}	
	```

2. 如果线程a当前存在中断状态，然后a执行 LockSupport.park()方法，这个方法会立即返回。

2. interrupted方法
    执行a.interrupted方法会返回a线程的中断状态，同时会清除a线程的中断状态
3. isInterrupted方法
    执行a.interrupted方法会返回a线程的中断状态，不会清除a线程的中断状态
4. join方法
    线程b执行a.join方法后，线程b进入WAITING状态，将等待a线程执行完毕，然后b才会继续执行
5. sleep方法
    哪个线程执行的sleep方法就让哪个线程sleep。比如线程b执行a.sleep方法，那么进入sleep的线程并不是a线程，而是b线程。也就是说sleep方法是让执行sleep方法的线程sleep。
    Thread.sleep方法==Thread.currentThread().sleep方法
6. 线程状态
    在等待池中的线程(指的是sync的实现)的状态不一定是 WAITING 或 TIMED_WATING ，也可能是BLOCKED状态。
    当执行notifyAll方法后，会唤醒等待池中的所有线程，此时等待池中所有线程的状态为Runnable，然后这些线程会去竞争锁，没有得到锁的线程将进入BLOCKED状态。
7. CPU的cas指令并非是把数据的读取，修改，写入三个操作作为一个原子操作。只是在修改前回去比对实际的值和期望的值。某个线程在执行cas操作期间，其他线程仍然可以进行读取和写入。
8. 不是所有CPU都支持CAS，在某些平台，jvm中cas的实现仍然是锁机制
9. 某个线程执行了Unsafe.park方法后，该线程进入WAITING状态。
10. 线程状态
new,runable,waiting,timed-waiting,blocked,terminated

![](https://cdn.justdopay.com/xiaoshujiang/1629079169064.png)

记住：**只有sync关键字才会导致线程进入blocked状态**

11. 守护线程
	- main线程挂了，守护线程跟着挂
	- 某个某个线程是守护线程，那么执行路径中的try-finally，finally方法jvm不保证能执行
	
12. 非守护线程：main线程挂了，非守护线程可以继续执行

13. notify & wait 标准范式
```java
在Object类的源码中给出了这两个方法的是否范例。

等待方：
1. 获得锁
2. 在循环里判断条件是否满足，不满足则执行wait方法
3. 条件满足跳出循环，执行业务逻辑

sync(obj){
	while(!condition){
		obj.wait();
	}
	//do something
}

通知方：
1. 获得锁
2. 改变condition
3. 通知等待方

sync(obj){
	condition = true;
	obj.notify() // obj.notifyAll();
}
```

14. yield()/sleep()/wait()/notify()对锁的有何影响？
	- yield方法执行后只会让出cpu，但不会释放锁
	- sleep方法也不会释放锁
	- 执行wait方法前必须先获得锁，执行后将会释放锁。当wait方法返回后将会重新获得锁
	- 执行notify方法前必须先获得锁，执行后不会释放锁
	
15. sync的对象不要用String、Integer、Long等基础的对象，因为共享原因可能锁到别人用的值。

## ThreadPoolExecutor
```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler)
```

### core pool size  及 max pool size 
一个新的任务提交哪些情况下会创建新的线程：（可以结合下面代码中的注释）
	1. 当前池中的任务数小于corePoolSize
	2. 如果池中的任务数大于corePoolSize小于maxPoolSize，同时任务队列已经满的情况下，也会创建新的线程

可以动态改变这两个的值：setCorePoolSize  以及 setMaximumPoolSize

如果corePoolSize==maximumPoolSize，那么则创建了一个固定大小的线程池

```java
public void execute(Runnable command) {
    if (command == null)
        throw new NullPointerException();

    /*
     * Proceed in 3 steps:
     *
     * 1. If fewer than corePoolSize threads are running, try to
     * start a new thread with the given command as its first
     * task.  The call to addWorker atomically checks runState and
     * workerCount, and so prevents false alarms that would add
     * threads when it shouldn't, by returning false.
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
     */
    int c = ctl.get();
    if (workerCountOf(c) < corePoolSize) {
        if (addWorker(command, true))
            return;
        c = ctl.get();
    }
    if (isRunning(c) && workQueue.offer(command)) {
        int recheck = ctl.get();
        if (! isRunning(recheck) && remove(command))
            reject(command);
        else if (workerCountOf(recheck) == 0)
            addWorker(null, false);
    }
    else if (!addWorker(command, false))
        reject(command);
}
```

### keep alive time
   
如果正在运行中的线程大于了corePoolSize，并且如果有线程的空闲时间大于了keepAliveTime，那么这些线程会被kill掉直到剩下corePoolSize个线程。

可以动态设置：setKeepAliveTime方法

默认情况下keep-alive策略只会针对已创建线程数大于corePoolSize的情况下

可以通过执行allowCoreThreadTimeOut(boolean)让keep-alive策略应用在已创建线程数小于corePoolSize的情况下。

### BlockingQueue
1. 如果当前池中的线程数小于corePoolSize，那么会创建新的线程来执行当前提交的任务，而不是进入阻塞队列
2. 如果当前池中的线程数大于等于corePoolSize,会尝试先进入阻塞队列，如果进入失败（其实就是队列已满），则会在maxPoolSize条件下创建新的线程来执行当前提交的任务。
如果不满足maxPoolSize条件，那么就会执行 拒绝执行策略（默认的拒绝执行策略见下）

![](https://cdn.justdopay.com/xiaoshujiang/1629079190972.png)

#### SynchronousQueue

1. 是一个无缓冲的等待队列，生产入队的时候需要有线程等待消费出队，消费出队的时候必须有线程正要生产入队，否则线程阻塞。

2. 有两种模式
	1. 公平模式：使用FIFO队列来阻塞多余的生产者和消费者，从而体系整体的公平策略
	
	2. 非公平模式：使用LIFO队列来管理多余的生产者和消费者，如果生产者和消费者的处理速度有差距，则很容易出现饥渴的情况，即可能有某些生产者或者是消费者的数据永远都得不到处理。

直接传递给线程（Direct handoffs）

感觉可以理解为这个入队列会总是失败，就相当于没有这个队列一样。这样就能在maxPoolSize条件下尽可能快的创建（或选择空闲的线程）来执行新提交的任务。

如果提交的任务有互相的依赖性，可以考虑使用这种队列。
```java
public static ExecutorService newCachedThreadPool() {
	return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
								  60L, TimeUnit.SECONDS,
								  new SynchronousQueue<Runnable>());
}
```
这个线程池，如果有洪水般的任务进来，那么就会瞬间创建大量的线程，这是很危险的，所以一般建议不使用这个工厂方法，虽然当任务减少后，线程的个数也会在60秒后一一回收。
            
#### LinkedBlockingQueue
			
1. 基于带头结点的单向链表实现，不过头结点的指向是变动的，一旦new出来则不可扩容。

2. 采用了两个锁（一个用于入队，一个用于出队），所以入队出队两个操作互不影响。两个锁都是非公平锁。
3. 初始化时建议制定一个容量，否则是int的最大值。如果生产者速度比消费者快，可能会消耗大量内存。

        
#### ArrayBlockingQueue

1. 基于指定长度的数组实现，不可扩容。维护了两个int型变量，分别执行队首和队尾下标，实现循环数组的效果
2. 由于采用了一个锁，所以在入队操作和出队操作不能同时进行

3. 可以指定采用的锁是否为公平锁，默认情况下为非公平锁

#### PriorityBlockingQueue
1. 物理上基于数组来实现，逻辑上采用的是堆存储结构，可扩容。put方法采用offer方法实现，所以put方法不会阻塞。
2. 排序算法采用的是堆排序，遍历这个队列并不能得到有序输出，只有依次执行出队操作才能得到有序输出。

3. 使用一个锁来完成

	```java
	System.out.println(priorityBlockingQueue.offer(4));
	System.out.println(priorityBlockingQueue.offer(8));
	System.out.println(priorityBlockingQueue.offer(1));

	Iterator iterator = priorityBlockingQueue.iterator();
	while (iterator.hasNext()) {
		System.out.println(iterator.next());
	}
	//输出：1，8，4
	System.out.println();
	# 会发现并非按照1，4，8的顺序输出。但下面的就是就是按照 1，4，8的顺序输出

	while (true) {
		try {
			System.out.println(priorityBlockingQueue.take());
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	//输出：1，4，8
	# 但这个队列会保证队列的第一个元素永远是当前优先级最高的元素
	```
3. 要求要么元素实现了Comparable接口，要么这个队列有一个Comparator实例


### 拒绝执行策略
    
   ![](https://cdn.justdopay.com/xiaoshujiang/1629079201757.png)

#### ThreadPoolExecutor.AbortPolicy  
抛出RejectedExecutionException异常
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
	throw new RejectedExecutionException("Task " + r.toString() +
										 " rejected from " +
										 e.toString());
}
```
#### ThreadPoolExecutor.CallerRunsPolicy
在调用线程上执行（哪个线程提交的任务就哪个线程执行）
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
	if (!e.isShutdown()) {
		r.run();
	}
}
```
#### ThreadPoolExecutor.DiscardPolicy
直接放弃
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
}
```
#### ThreadPoolExecutor.DiscardOldestPolicy
放弃当前队列中第一个任务
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
	if (!e.isShutdown()) {
		e.getQueue().poll();
		e.execute(r);
	}
}
```

### Finalization

一个在程序中不再被引用的线程池如果同时没有剩余的线程，那么这个线程池会被自动的shutdown.

因此如果你想即便在忘记执行shutdown方法的时候仍能正常关闭线程池，那么建议设置一个有限的keepAliveTime（针对大于线程数大于corePoolSize的那些线程），同时也执行下 allowCoreThreadTimeOut(boolean) . 
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：回想这辈子，当过最大的官，也就是QQ群管理员了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=2077f4a9-9dfb-4ce9-a998-cb62fc16ef75)
