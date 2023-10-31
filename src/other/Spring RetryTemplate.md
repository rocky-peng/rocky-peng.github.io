---
title: Spring RetryTemplate
date: 2023-10-31
category: 
- spring
tag:
- retry
---

使用spring的retry框架用两种方式，一种注解方式，一种代码方式，这里主要介绍代码编程方式。

初始化RetryTemplate主要有两个参数：

1. RetryPolicy 主要定义什么情况要进行重试以及重试次数，比如超时、满足某个表达式。
2. BackoffPolicy 主要定义两次重试之间的等待时间。backoff这个单词在计算机系统中有很多地方都有，代表的意思基本相同，基本都是重试直接的等待时间。**它的基本思想是在遇到错误时，不是立即重试，而是等待一段时间后再尝试。这种等待的时间通常是逐渐增加的，这就是所谓的“退避”**

## RetryPolicy

![Untitled](https://cdn.justdopay.com/notion/md5-19c6d975b35469503fc76e09db892242.png)

- SimpleRetryPolicy 默认最多重试3次
- TimeoutRetryPolicy 默认在1秒内失败都会重试
- ExpressionRetryPolicy 符合表达式就会重试
- CircuitBreakerRetryPolicy 增加了熔断的机制，如果不在熔断状态，则允许重试
- CompositeRetryPolicy 可以组合多个重试策略
- NeverRetryPolicy 不重试
- AlwaysRetryPolicy 一直重试

## BackoffPolicy

![Untitled](https://cdn.justdopay.com/notion/md5-614e14d24ffe43bce55b4322d1fb8d01.png)

- FixedBackOffPolicy 默认固定延迟1秒后执行下一次重试
- ExponentialBackOffPolicy 指数递增延迟执行重试，默认初始0.1秒，系数是2，那么下次延迟0.2秒，再下次就是延迟0.4秒，如此类推，最大30秒。
- ExponentialRandomBackOffPolicy 在上面那个策略上增加随机性
- UniformRandomBackOffPolicy 这个跟上面的区别就是，上面的延迟会不停递增，这个只会在固定的区间随机
- StatelessBackOffPolicy 这个说明是无状态的，所谓无状态就是对上次的退避无感知，从它下面的子类也能看出来

个人比较喜欢实用 ExponentialBackOffPolicy 

## 示例

![Untitled](https://cdn.justdopay.com/notion/md5-9311b7ee9c5e11088a191a3662ca7f51.png)

```jsx
private static final RetryTemplate RETRY_TEMPLATE;

static {
    //重试时间间隔，分别是300ms,600ms,1200ms,依次翻倍，一直到最大时间间隔为3000ms
    ExponentialBackOffPolicy backOffPolicy = new ExponentialBackOffPolicy();
    backOffPolicy.setInitialInterval(300);
    backOffPolicy.setMaxInterval(3000);

    RETRY_TEMPLATE = RetryTemplate.builder()
            //当抛这些异常的时候进行重试
            .retryOn(Arrays.asList(RemoteAccessException.class, TimeoutException.class, NullPointerException.class))
            //最大重试次数为4
            .maxAttempts(4)
            //自定义重试时间间隔
            .customBackoff(backOffPolicy)
            .build();
}

public Object httpRemoteCall(Object... params) {
    AtomicInteger retryCounter = new AtomicInteger(1);
    return RETRY_TEMPLATE.execute(ctx -> {
        log.info("第" + retryCounter.getAndIncrement() + "次执行远程调用");

        //在这里正常写远程调用的代码

        //正常返回远程调用的结果
        return new Object();
    });
}
```

## 扩展

[https://github.com/spring-projects/spring-retry](https://github.com/spring-projects/spring-retry)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：今天真是幸运的一天，终于实现了身价翻倍，因为猪价又翻了番。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=dongman&uuid=1f72630b-3bde-4c23-93bc-9b4501f85087)
