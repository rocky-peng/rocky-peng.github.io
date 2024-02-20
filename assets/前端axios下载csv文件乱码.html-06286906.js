import{_ as n,$ as s,a0 as a,a3 as t}from"./framework-6dd3436e.js";const e={},p=t(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>现在有个后端下载csv文件的接口，在浏览器地址栏直接请求这个接口，下载的文件用office的excel打开不乱码（wps也能正常显示），但通过页面点击按钮来下载，保存的文件用office的excel打开就乱码（wps还是能正常显示）。</p><p>后端代码大概这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@param</span> <span class="token parameter">response</span>
 * <span class="token keyword">@param</span> <span class="token parameter">checkResultFileUrl</span> 这个文件要求是gkb编码
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
 */</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">downloadCheckResult</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> checkResultFileUrl<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attachment; filename=checkResult.csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ServletOutputStream</span> outputStream <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">InputStream</span> is <span class="token operator">=</span> fileStorageService<span class="token punctuation">.</span><span class="token function">getFileInputStream</span><span class="token punctuation">(</span>checkResultFileUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">readFully</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> is<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    outputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码大概这样：</p><figure><img src="https://cdn.justdopay.com/notion/md5-516bea5d2551055e6fbf71d2f7fa6a42.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>发起请求的时候不设置 responseType: &#39;blob&#39;,并且在downLoadFile函数中类似下面的修改</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>let resData <span class="token operator">=</span><span class="token char">&#39;\\ufeff&#39;</span> <span class="token operator">+</span> row<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>resData<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;text<span class="token operator">/</span>csv<span class="token punctuation">,</span>charset<span class="token operator">=</span><span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>&#39;
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功！！！ 关键点是在返回的data 上加上&#39;\\ufeff’</p><figure><img src="https://cdn.justdopay.com/notion/md5-e65d409adbe72c698846b8b4a1876c68.gif" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：路漫漫其修远兮，吾将上下而求人。 <br><br><img src="https://api.btstu.cn/sjbz/?lx=suiji&amp;uuid=b3b6db9c-5057-4e12-891c-e2fbf30cab84" alt="" loading="lazy"></li></ul>`,15),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","前端axios下载csv文件乱码.html.vue"]]);export{r as default};
