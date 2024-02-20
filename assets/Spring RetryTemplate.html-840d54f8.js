import{_ as t,$ as e,a0 as p,a1 as n,a2 as s,a4 as c,a3 as o,w as i}from"./framework-6dd3436e.js";const l={},u=o(`<p>使用spring的retry框架用两种方式，一种注解方式，一种代码方式，这里主要介绍代码编程方式。</p><p>初始化RetryTemplate主要有两个参数：</p><ol><li>RetryPolicy 主要定义什么情况要进行重试以及重试次数，比如超时、满足某个表达式。</li><li>BackoffPolicy 主要定义两次重试之间的等待时间。backoff这个单词在计算机系统中有很多地方都有，代表的意思基本相同，基本都是重试直接的等待时间。<strong>它的基本思想是在遇到错误时，不是立即重试，而是等待一段时间后再尝试。这种等待的时间通常是逐渐增加的，这就是所谓的“退避”</strong></li></ol><h2 id="retrypolicy" tabindex="-1"><a class="header-anchor" href="#retrypolicy" aria-hidden="true">#</a> RetryPolicy</h2><figure><img src="https://cdn.justdopay.com/notion/md5-19c6d975b35469503fc76e09db892242.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ul><li>SimpleRetryPolicy 默认最多重试3次</li><li>TimeoutRetryPolicy 默认在1秒内失败都会重试</li><li>ExpressionRetryPolicy 符合表达式就会重试</li><li>CircuitBreakerRetryPolicy 增加了熔断的机制，如果不在熔断状态，则允许重试</li><li>CompositeRetryPolicy 可以组合多个重试策略</li><li>NeverRetryPolicy 不重试</li><li>AlwaysRetryPolicy 一直重试</li></ul><h2 id="backoffpolicy" tabindex="-1"><a class="header-anchor" href="#backoffpolicy" aria-hidden="true">#</a> BackoffPolicy</h2><figure><img src="https://cdn.justdopay.com/notion/md5-614e14d24ffe43bce55b4322d1fb8d01.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ul><li>FixedBackOffPolicy 默认固定延迟1秒后执行下一次重试</li><li>ExponentialBackOffPolicy 指数递增延迟执行重试，默认初始0.1秒，系数是2，那么下次延迟0.2秒，再下次就是延迟0.4秒，如此类推，最大30秒。</li><li>ExponentialRandomBackOffPolicy 在上面那个策略上增加随机性</li><li>UniformRandomBackOffPolicy 这个跟上面的区别就是，上面的延迟会不停递增，这个只会在固定的区间随机</li><li>StatelessBackOffPolicy 这个说明是无状态的，所谓无状态就是对上次的退避无感知，从它下面的子类也能看出来</li></ul><p>个人比较喜欢实用 ExponentialBackOffPolicy</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><figure><img src="https://cdn.justdopay.com/notion/md5-9311b7ee9c5e11088a191a3662ca7f51.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">private</span> <span class="token keyword">static</span> final RetryTemplate <span class="token constant">RETRY_TEMPLATE</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token comment">//重试时间间隔，分别是300ms,600ms,1200ms,依次翻倍，一直到最大时间间隔为3000ms</span>
    ExponentialBackOffPolicy backOffPolicy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExponentialBackOffPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    backOffPolicy<span class="token punctuation">.</span><span class="token function">setInitialInterval</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    backOffPolicy<span class="token punctuation">.</span><span class="token function">setMaxInterval</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token constant">RETRY_TEMPLATE</span> <span class="token operator">=</span> RetryTemplate<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//当抛这些异常的时候进行重试</span>
            <span class="token punctuation">.</span><span class="token function">retryOn</span><span class="token punctuation">(</span>Arrays<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>RemoteAccessException<span class="token punctuation">.</span>class<span class="token punctuation">,</span> TimeoutException<span class="token punctuation">.</span>class<span class="token punctuation">,</span> NullPointerException<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">//最大重试次数为4</span>
            <span class="token punctuation">.</span><span class="token function">maxAttempts</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token comment">//自定义重试时间间隔</span>
            <span class="token punctuation">.</span><span class="token function">customBackoff</span><span class="token punctuation">(</span>backOffPolicy<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> Object <span class="token function">httpRemoteCall</span><span class="token punctuation">(</span><span class="token parameter">Object<span class="token operator">...</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    AtomicInteger retryCounter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">RETRY_TEMPLATE</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>ctx <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;第&quot;</span> <span class="token operator">+</span> retryCounter<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;次执行远程调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//在这里正常写远程调用的代码</span>

        <span class="token comment">//正常返回远程调用的结果</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>`,14),r={href:"https://github.com/spring-projects/spring-retry",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),k=n("hr",null,null,-1),m=n("hr",null,null,-1),f=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：今天真是幸运的一天，终于实现了身价翻倍，因为猪价又翻了番。 "),n("br"),n("br"),n("img",{src:"https://api.btstu.cn/sjbz/?lx=dongman&uuid=1f72630b-3bde-4c23-93bc-9b4501f85087",alt:"",loading:"lazy"})])],-1);function b(v,y){const a=i("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[s("https://github.com/spring-projects/spring-retry"),c(a)])]),d,k,m,f])}const h=t(l,[["render",b],["__file","Spring RetryTemplate.html.vue"]]);export{h as default};
