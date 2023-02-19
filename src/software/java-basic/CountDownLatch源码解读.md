---
title: CountDownLatch源码解读
date: 2017-03-05
---

## 使用场景
一句话总结：一个或多个线程，等待其他多个线程执行完毕后才继续执行。

具体场景：
1. 某个线程等待其他多个线程执行完毕才能继续执行。就好比一个公交车，司机师傅需要等到所有人都上车后才能启动起步。
2. 发令枪：就是多个线程等待某个线程执行完毕才能继续执行。
3. 死锁检测：一个非常方便的使用场景是，你可以使用 n 个线程访问共享资源，在每次测试阶段的线程数目是不同的，并尝试产生死锁。（这个没有理解到）

## 实现原理

分析代码前，建议我们我们先自己根据对AQS的理解和对CountDownLatch的使用创建，
先尝试猜测一下其内部是如何实现的。

```java
你的猜测
...
...
```


下面开始正式讲CDL的代码实现。
同样的，不用质疑CDL内部肯定使用了AQS（没看代码前这一点是可以分析得出的）
我们直接看CDL内部是如何利用AQS的。

### Sync类
```java
private static final class Sync extends AbstractQueuedSynchronizer {
    private static final long serialVersionUID = 4982264981922014374L;

    Sync(int count) {
        setState(count);
    }

    int getCount() {
        return getState();
    }

    //1. 利用的是AQS的共享锁模式
    protected int tryAcquireShared(int acquires) {
        return (getState() == 0) ? 1 : -1;
    }

    protected boolean tryReleaseShared(int releases) {
        // Decrement count; signal when transition to zero
        for (;;) {
            int c = getState();
            if (c == 0)
                return false;
            int nextc = c-1;
            if (compareAndSetState(c, nextc))
                return nextc == 0;
        }
    }
}
```

### CountDownLatch类
```java
private final Sync sync;

public CountDownLatch(int count) {
    if (count < 0) throw new IllegalArgumentException("count < 0");
    this.sync = new Sync(count);
}

public void await() throws InterruptedException {
    sync.acquireSharedInterruptibly(1);
}

public void countDown() {
    sync.releaseShared(1);
}
```

### 总结
CDL利用的是AQS的共享锁，在实例化的时候，会把state设置为count的值。
await方法就是获得共享锁，但必须要等到state的值为0才能成功获得共享锁，否则进入同步队列等待
countDown方法就是在释放共享锁，释放逻辑就是对state的值减一，直到state的值为0才会成功释放

个人认为实现非常巧妙，在看代码前我推测出了肯定用了AQS的共享锁（这点是推测成功了），
但同时怀疑使用了AQS的条件队列（这点当时推测的时候不确定，因为不记得共享锁能不能使用条件队列了），
后来回顾了下AQS的条件队列，得知**只有独占锁才能使用条件队列**，于是又开始推测CDL的内部实现，可惜没能想出来😂
    
## 扩展
### CountDownLatch 相常见面试题：
1. 解释一下 CountDownLatch 概念？

2. CountDownLatch 和 CyclicBarrier 的不同之处？
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：这世上没谁离不开谁，就算是一条鱼离开水，也能烤着吃。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=2b56b72f-89a1-46c1-bcaa-25e83c36f42d)
