---
title: AQS源码解读
date: 2017-03-04
---

## 谈谈你对AQS的理解
总的来说，个人认为AQS可以理解为一个排队系统，是一个CLH队列（clh的变体），是一个双向非循环队列。
这个队里有独占节点，也有共享节点，这两种节点在这个队列交叉排列。这些节点会争夺一个共享资源的使用权，
AQS则制定了一套模板方法来协调这些节点对资源的获取和释放。当把AQS的独占锁、共享锁的实现原理了解清楚后，
也能大致知道了sync关键字的背后的实现原理

AQS是很多同步器的基础，很多同步器都是在AQS的基础上实现的，比如ReentrantLock/Semaphore/CountDownLatch/CyclicBarrier/ReadWriteLock

代码层面上AQS里维护了一个int变量，用来表示同步状态也就是刚才说的共享资源，它采用CAS方式来对该状态进行修改。
如果修改成功，表示获得锁，如果修改不成功，则表示获取锁失败。

AQS是模板方法的一个经典应用，AQS基础上实现同步器一般只需要实现下面几个方法：
```
isHeldExclusively()//该线程是否正在独占资源。只有用到condition才需要去实现它。
tryAcquire(int)//独占方式。尝试获取资源，成功则返回true，失败则返回false。
tryRelease(int)//独占方式。尝试释放资源，成功则返回true，失败则返回false。
tryAcquireShared(int)//共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。
tryReleaseShared(int)//共享方式。尝试释放资源，成功则返回true，失败则返回false。
```

## 独占锁

### 获取独占锁
 排它锁加锁过程：
 尝试先加锁，如果不成功。把自己加入到同步队列中,然后循环做如下事情
 1. 判断前一个节点是不是头结点，如果是，则尝试获得锁。如果获得成功，那就出队列并跳出循环
 2. 如果不是头结点或者获取锁不成功，则判断自己是不是应该阻塞（判断逻辑：判断前一个节点的状态是不是signal，如果是则阻塞，如果不是则不阻塞）
 3. 如果应该阻塞，则阻塞自己，下次醒来的时候，进入下次循环。
 4. 如果不应该阻塞，则直接进入下次循环。
```java
public final void acquire(int arg) {
    if (!tryAcquire(arg) &&
            acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
        selfInterrupt();
}

//addWaiter完全可以用enq替代，它只是为了能够快速入队在调用enq前试了一次设置tail，这里就不贴代码了。文末有代码.

private Node enq(final Node node) {
    for (; ; ) {
        Node t = tail;
        if (t == null) { // Must initialize
            if (compareAndSetHead(new Node()))
                tail = head;
        } else {
            node.prev = t;
            if (compareAndSetTail(t, node)) {
                t.next = node;
                return t;
            }
        }
    }
}

final boolean acquireQueued(final Node node, int arg) {
    boolean failed = true;
    try {
        boolean interrupted = false;
        for (; ; ) {
            final Node p = node.predecessor();
            if (p == head && tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return interrupted;
            }
            if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                interrupted = true;
        }
    } finally {
        if (failed)
            cancelAcquire(node);
    }
}
```

### 释放独占锁
先尝试解锁，如果解锁成功，则unpark同步队列中第一个非cancelled节点
```java
public final boolean release(int arg) {
    if (tryRelease(arg)) {
        Node h = head;
        if (h != null && h.waitStatus != 0)
            unparkSuccessor(h);
        return true;
    }
    return false;
}

/**
 * 找到node节点后的第一个非cancelled节点，并unpark它。
 * 如果node节点后一个节点为null或者后一个节点状态为cancelled，
 * 则从队尾开始找，直到找到最开始的一个非cancelled节点，这个节点即为node后的第一个非cancelled节点
 */
private void unparkSuccessor(Node node) {

    int ws = node.waitStatus;

    if (ws < 0) {
        /**
         * 代码执行到这里，ws的值可能有以下几种可能：
         * cancelled（1）:
         *   比如获取锁失败的时候会执行cancelAcquire. 这个方法会先把自己的状态改为cancelled，然后执行这个方法
         * 0：
         *   不可能为0。根据代码调用情况可以推断出来。
         * signal（-1）:
         *   表示需要signal下一个节点，当然可能这个值
         * condition（-2）:
         *   不可能，因为在同步队列中
         * PROPAGATE（-3）:
         *   没搞明白这个的含义
         */

        //如果失败没有关系
        compareAndSetWaitStatus(node, ws, 0);
    }

    Node s = node.next;
    if (s == null || s.waitStatus > 0) {
        s = null;
        for (Node t = tail; t != null && t != node; t = t.prev)
            if (t.waitStatus <= 0)
                s = t;
    }
    if (s != null)
        LockSupport.unpark(s.thread);
}

```

## 共享锁
### 获取共享锁
先尝试获得共享锁，如果获取不成功，则把自己加入到同步队列中，然后循环做如下事情
1. 判断前一个节点是不是头结点，如果是，则尝试获取共享锁，如果获取成功，则出队列并根据剩余共享资源的个数unpark后头的节点
（如果还有共享资源，则判断后一个节点是不是共享节点，如果是，则unpark后一节点）。
2. 如果不是头结点或者获取共享锁不成功，则判断我的前一个节点的状态是不是signal。
3. 如果前一个节点的状态不是是signal,则执行下个循环
4. 如果前一个节点的状态是signal，则park自己。当自己醒来的时候，执行下个循环。

```java
public final void acquireShared(int arg) {
    if (tryAcquireShared(arg) < 0)
        doAcquireShared(arg);
}

private void doAcquireShared(int arg) {
    final Node node = addWaiter(Node.SHARED);
    boolean failed = true;
    try {
        boolean interrupted = false;
        for (; ; ) {
            final Node p = node.predecessor();
            if (p == head) {
                int r = tryAcquireShared(arg);
                if (r >= 0) {
                    setHeadAndPropagate(node, r);
                    p.next = null; // help GC
                    if (interrupted)
                        selfInterrupt();
                    failed = false;
                    return;
                }
            }
            if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                interrupted = true;
        }
    } finally {
        if (failed)
            cancelAcquire(node);
    }
}

private void setHeadAndPropagate(Node node, int propagate) {
    Node h = head; // Record old head for check below
    setHead(node);
    if (propagate > 0 || h == null || h.waitStatus < 0 ||
            (h = head) == null || h.waitStatus < 0) {

        Node s = node.next;
        if (s == null || s.isShared())
            doReleaseShared();
    }
}

doReleaseShared内部又调用了上面提到了unparkSuccessor方法，只是调用前加了一些判断。代码就在下面（不是文末）

```

### 释放共享锁
先尝试释放共享锁，如果成功，则unpark后一个节点
```java
public final boolean releaseShared(int arg) {
    if (tryReleaseShared(arg)) {
        doReleaseShared();
        return true;`
    }
    return false;
}

private void doReleaseShared() {
    for (; ; ) {
        Node h = head;
        if (h != null && h != tail) {
            int ws = h.waitStatus;
            if (ws == Node.SIGNAL) {
                if (!compareAndSetWaitStatus(h, Node.SIGNAL, 0))
                    continue;            // loop to recheck cases
                unparkSuccessor(h);
            } else if (ws == 0 &&
                    !compareAndSetWaitStatus(h, 0, Node.PROPAGATE))
                continue;                // loop on failed CAS
        }
        if (h == head)                   // loop if head changed
            break;
    }
}
```

## 加锁和释放总结
### 获取共享锁和独占锁过程的区别
两个过程大同小异，主要区别就是在获取锁后对后一个节点的处理上。
- 获取共享锁后，因为是共享，所以如果还有资源，则判断后一个节点是否是共享节点，如果是则unpark后一个节点。如果后一个节点是独占的，那当然不能unpark它。
（即使unpark了按理应该也不会有问题，只是没有必要）
- 获取独占锁后，因为是独占，所以完全不用考虑后一个节点是共享还是独占的。

### 释放共享锁和独占锁的区别
两个过程从上面可以看到几乎一模一样，只是在释放共享锁的时候多了一些判断。
（个人认为这个判断也可以不用，直接unpark后一个节点也没问题，代码中可能是为了代码优化考虑）
    

## ConditionObject(条件队列)
我们回顾一下我们平常使用Object.wait或者ConditionObject.await方法的时候，
执行这个方法后当前线程会释放掉锁，然后阻塞自己，然后从wait方法中返回继续下面的事，
返回的时候当前线程又获得了锁。

所以我们可以推断wait或者await方法内部做了哪些事：
1. 完全释放锁
2. 阻塞自己
3. 重新获得锁

然后我们继续回顾notify或者signal的用法，执行这个方法后，当前线程不会释放锁，但可以通知之前执行了wait方法的线程。

问题来了：怎么找到之前执行了wait方法的线程呢？ 于是条件队列诞生了。所以线程wait或者await方法内部除了做上面三件事，
还要做一件事，那就是把自己加入到条件队列中。那么总的步骤就有4步：
1. 把自己加入到条件队列中
2. 完全释放锁
3. 阻塞自己
4. 重新获得锁

条件队列是一个无头结点的单向队列，每次new一个ConditionObject实例就相当于创建了一个条件队列，
所以基于AQS创建的同步器能实现对等待者进行分组的功能。

**注意**：条件队列只能适用于独占锁

下面通过代码来验证下我们刚才的推论。

### await相关代码
```java
public final void await() throws InterruptedException {
    if (Thread.interrupted())
        throw new InterruptedException();

    // 1. 把自己加入到条件队列中
    //创建新节点，并加入到条件队列中
    Node node = addConditionWaiter();

    // 2. 完全释放锁
    //完全释放锁。记录之前加锁的次数
    int savedState = fullyRelease(node);

    //代码执行到这里，锁已经释放了，这个时候同步队列的线程又开始竞争锁了
    int interruptMode = 0;

    // 3. 阻塞自己
    //如果节点不在同步队列中，则一直park。第一次循环肯定不在，但后面其他线程执行了signal后就可能在同步队列中了，一旦在同步队列中就退出循环
    while (!isOnSyncQueue(node)) {
        LockSupport.park(this);

        if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
            break;
    }
    
    // 4. 重新获得锁
    //尝试去获得锁
    if (acquireQueued(node, savedState) && interruptMode != THROW_IE)
        interruptMode = REINTERRUPT;

    if (node.nextWaiter != null) // clean up if cancelled
        unlinkCancelledWaiters();

    if (interruptMode != 0)
        reportInterruptAfterWait(interruptMode);
}

private Node addConditionWaiter() {
    Node t = lastWaiter;
    // If lastWaiter is cancelled, clean out.
    if (t != null && t.waitStatus != Node.CONDITION) {
        unlinkCancelledWaiters();
        t = lastWaiter;
    }
    Node node = new Node(Thread.currentThread(), Node.CONDITION);
    if (t == null)
        firstWaiter = node;
    else
        t.nextWaiter = node;
    lastWaiter = node;
    return node;
}
```
### signal相关代码
最终的事情就是把条件队列中的节点转移到同步队列中
```java
public final void signalAll() {
    if (!isHeldExclusively())
        throw new IllegalMonitorStateException();
    Node first = firstWaiter;
    if (first != null)
        doSignalAll(first);
}

private void doSignalAll(Node first) {
    lastWaiter = firstWaiter = null;
    do {
        Node next = first.nextWaiter;
        first.nextWaiter = null;
        transferForSignal(first);
        first = next;
    } while (first != null);
}

final boolean transferForSignal(Node node) {
    if (!compareAndSetWaitStatus(node, Node.CONDITION, 0))
        return false;

    //把节点加入到同步队列中，返回前一个节点
    Node p = enq(node);
    int ws = p.waitStatus;

    if (ws > 0 || !compareAndSetWaitStatus(p, ws, Node.SIGNAL))
        LockSupport.unpark(node.thread);
    return true;
}
```


## 补充资料
### 可中断独占锁加锁过程
和不可中断加锁过程一模一样，唯一的不一样的地方就是当我再排队期间睡觉的过程中，如果有人打醒了我，我会哭的（直接抛出InterruptedException）。
而不可中断加锁中，别人打醒我，我不会哭，但我会记住的。

### 超时独占锁加锁过程
和不可中断独占锁加锁过程类似，只是对获得锁的实际有一个时间限制。表示必须在规定的时间内获取到锁。
这里对规定的时间有一个判断就是，如果规定的实际小于一个阈值，那么我加入队列后不睡觉，一直重复询问我前面有兄弟没有，他们的状态怎样那些事情。
如果大于了这个阈值，那我就睡觉。在我睡觉的过程中，如果有人打醒我，我就要哭（抛出InterruptedException）


### AQS的三个成员变量
    1. head
    2. tail
    3. state
 
### 获取state控制权限的六个方法

 x  | 排他模式 | 共享模式
-- | -- | -- 
不可中断 | acquire(int i) | acquireShared(int arg)
可中断 | acquireInterruptibly(int arg) |     acquireSharedInterruptibly(int arg)
超时获取（可中断） | tryAcquireNanos(int arg, long nanosTimeout) | tryAcquireSharedNanos(int arg, long nanosTimeout)

### 释放state控制权的两个方法（是否排他，不区分是否可中断）

 排他模式 | 共享模式
 -- | -- 
 release(int arg) | releaseShared(int arg)


### ReentrantLock的公平与不公平
公平：尝试加锁前，都先判断state的值，如果为0，然后再判断队列中有没有等待加锁的弟兄，
如果没有我才尝试去修改state的值。

不公平：管他三七二十一，不管state当前的值，先尝试修改一次。如果修改失败，
这个时候我才去判断state的值是否为0，如果为0的情况下，我不管队列中是否有弟兄在等待，我都尝试去修改state的值。**在入队前比公平锁多1到2次加锁机会**

### sync和AQS实现的数据结构类似
sync实现代码中：ObjectMonitor就有点类似AQS，ObjectWaiter就类似AQS中的Node。
#### ObjectMonitor的结构
![](https://cdn.justdopay.com/xiaoshujiang/1629078873133.png)

```
header  ---->>  Markword
recursions --->> AQS.state
owner --->> AQS.exclusiveOwnerThread
WaitSet --->> AQS clh队列中的 条件队列
EntryList --->> AQS clh队列中的 同步阻塞队列
```


#### ObjectWaiter的结构
类似AQS中的Node

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629078883472.png)


### sync和reentrantlock的区别
1. 两者都是可重入的（sync的重入次数保存在哪里的呢？）
2. sync是基于jvm实现的，是隐式锁，而ReentrantLock是基于java api实现的，是显式锁。
3. ReentrantLock 比 synchronized 更加灵活
    1. 可以试探性获得锁（tryLock）
    2. 等待可中断；(acquireInterruptibly)，sync是不可中断的，一旦执行就必须要一直等到获得锁
    3. 可实现公平锁，sync是非公平的
    4. 可实现选择性通知，也就是可以创建多个条件队列
    5. 性能上已经不是一个选择因素了。sync做了各种优化（偏向锁、自旋锁、锁粗化、锁消除等等）


## 代码补充
### addWaiter
```java
private Node addWaiter(Node mode) {
    Node node = new Node(Thread.currentThread(), mode);
    // Try the fast path of enq; backup to full enq on failure
    Node pred = tail;
    if (pred != null) {
        node.prev = pred;
        if (compareAndSetTail(pred, node)) {
            pred.next = node;
            return node;
        }
    }
    enq(node);
    return node;
}
```

### Node节点结构
```java
static final class Node {
    static final Node SHARED = new Node();

    static final Node EXCLUSIVE = null;

    /**

     * CANCELLED(1):  什么时候会处于这种状态
     *              1. 在获取锁的期间超时或者被中断，于是取消获得锁
     *              2. 释放锁不成功而被取消
     *              
     * 0        : None of the above
     * 
     * SIGNAL(-1)  : 表示当前节点的后一个节点是阻塞状态。所以当当前节点释放锁或者取消的时候需要unpark后一个节点。
     * 
     * CONDITION(-2): 表示当前节点在条件队列中。当这个节点从条件队列成功转移到同步队列的时候，会被设置为0
     * 
     * PROPAGATE(-3): 没搞明白
	 *
     * ws为CANCELLED的几种情况：
     * 1. 在竞争锁的期间超时或者被中断
     * 2. 释放锁不成功
     * <p>
     * 初始值为0
     */
    volatile int waitStatus;

    /**
     * 进条件队列的时候赋值，出队列的时候才会赋值为空
     */
    volatile Node prev;

    volatile Node next;

    volatile Thread thread;

    /**
     * 如果这个节点在条件队列中，代表下一个节点。
     * 如果在同步队列中，代表要获取排它锁（null）还是共享锁(Shared)
     */
    Node nextWaiter;
}
```

## AQS 组件总结
1. Semaphore(信号量)-允许多个线程同时访问： synchronized 和 ReentrantLock 都是一次只允许一个线程访问某个资源，Semaphore(信号量)可以指定多个线程同时访问某个资源。

2. CountDownLatch （倒计时器）： CountDownLatch 是一个同步工具类，用来协调多个线程之间的同步。这个工具通常用来控制线程等待，它可以让某一个线程等待直到倒计时结束，再开始执行。
3. CyclicBarrier(循环栅栏)： CyclicBarrier 和 CountDownLatch 非常类似，它也可以实现线程间的技术等待，但是它的功能比 CountDownLatch 更加复杂和强大。主要应用场景和 CountDownLatch 类似。CyclicBarrier 的字面意思是可循环使用（Cyclic）的屏障（Barrier）。它要做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。CyclicBarrier 默认的构造方法是 CyclicBarrier(int parties)，其参数表示屏障拦截的线程数量，每个线程调用 await()方法告诉 CyclicBarrier 我已经到达了屏障，然后当前线程被阻塞。
4. ReentrantLock

## 其他
### 什么时候使用内部类
有一对多关系的时候，比如就是就是这个AQS和ConditionObject。一个AQS实例可以new多个ConditionObject


<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：总有些人看不惯你，还格外关注你。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=04fbb6cf-503c-45a1-96d6-488b86f48f6e)
