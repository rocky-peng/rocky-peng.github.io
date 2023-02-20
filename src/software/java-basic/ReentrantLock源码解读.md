---
title: ReentrantLock源码解读
date: 2017-03-06
---

如果我们对AQS有过理解过，再来看RentrantLock的代码就相当容易了。
我们都知道ReentrantLock有公平和非公平之分，而AQS是没有这个公平或非公平的概念的。
下面我们通过源码来看看ReentrantLock的源码并分析其公平和非公平的实现。

ReentrantLock的代码很简单，其核心代码就是继承自AQS的三个内部类。

其类继承结构如下：
![](https://cdn.justdopay.com/xiaoshujiang/1629079078587.png)

下面先贴代码然后进行分析总结，代码中添加了注释

## Sync内部类
删除一些次要代码后：
```java
abstract static class Sync extends AbstractQueuedSynchronizer {
    private static final long serialVersionUID = -5179523762034025860L;

    abstract void lock();
    
    //非公平的
    final boolean nonfairTryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        if (c == 0) {

            //如果无锁状态，直接进行cas操作
            if (compareAndSetState(0, acquires)) {
                
                //成功后标记当前线程为锁的拥有者
                setExclusiveOwnerThread(current);
                return true;
            }
        }

        //如果有锁，则判断当前线程是否是锁拥有者，如果是则进行重入逻辑
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc < 0) // overflow
                throw new Error("Maximum lock count exceeded");
            setState(nextc);
            return true;
        }
        return false;
    }
    
    //实现AQS中的方法，实现释放锁的逻辑
    protected final boolean tryRelease(int releases) {
        int c = getState() - releases;
        if (Thread.currentThread() != getExclusiveOwnerThread())
            throw new IllegalMonitorStateException();
        boolean free = false;
        if (c == 0) {
            free = true;
            setExclusiveOwnerThread(null);
        }
        setState(c);
        return free;
    }
}
```

## NonfairSync
```java
static final class NonfairSync extends Sync {
    private static final long serialVersionUID = 7316153563782823691L;
    
    //实现父类Sync的方法
    final void lock() {
        //不管是有被占用，先进行一次cas操作
        if (compareAndSetState(0, 1))
            setExclusiveOwnerThread(Thread.currentThread());
        else
            acquire(1);
    }
    
    //实现AQS类中的方法
    protected final boolean tryAcquire(int acquires) {
        return nonfairTryAcquire(acquires);
    }
}
```

## FairSync
```java
static final class FairSync extends Sync {
    private static final long serialVersionUID = -3000897897090466540L;

    //这一点和NonfairSync有区别
    final void lock() {
        acquire(1);
    }
    
   
    protected final boolean tryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        if (c == 0) {
            //如果无锁状态，再判断队列是否有线程在等待锁，如果没有才进行cas操作
            if (!hasQueuedPredecessors() &&
                compareAndSetState(0, acquires)) {
                setExclusiveOwnerThread(current);
                return true;
            }
        }
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc < 0)
                throw new Error("Maximum lock count exceeded");
            setState(nextc);
            return true;
        }
        return false;
    }
}

```

## 补充代码
```java

public ReentrantLock() {
    sync = new NonfairSync();
}

public ReentrantLock(boolean fair) {
    sync = fair ? new FairSync() : new NonfairSync();
}
```


## 总结
1. ReentrantLock默认构造方法是非公平的
2. ReentrantLock是独占锁，它只使用了AQS的独占锁和条件队列功能，并没有使用共享锁。
3. 非公平锁比公平锁多了两次执行cas操作的可能。
    1. 想要获得锁的时候，不管队列情况如何先尝试进行cas操作。（公平锁没有这个cas操作）
    2. 如果第一次cas失败，在执行tryAcquire的时候，如果当前无锁，又会执行一次cas操作。
    （公平锁执行这次cas的操作的时候会先判断队列情况）
    
相对来说，非公平锁会有更好的性能，因为它的吞吐量比较大。当然，非公平锁让获取锁的时间变得更加不确定，可能会导致在阻塞队列中的线程长期处于饥饿状态。

## sync和reentrantlock的区别
1. 两者都是可重入的（sync的重入次数保存在哪里的呢？）
2. sync是基于jvm实现的，是隐式锁，而ReentrantLock是基于java api实现的，是显式锁。
3. ReentrantLock 比 synchronized 更加灵活
    1. 可以试探性获得锁（tryLock）
    2. 等待可中断；(acquireInterruptibly)
    3. 可实现公平锁，sync是非公平的
    4. 可实现选择性通知，也就是可以创建多个条件队列
    5. 性能上已经不是一个选择因素了。sync做了各种优化（偏向锁、自旋锁、锁粗化、锁消除等等）
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：“你妹”是个好姑娘，替“你妈”分担了很多。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=38910666-af62-4df2-85ce-b617655b08fc)
