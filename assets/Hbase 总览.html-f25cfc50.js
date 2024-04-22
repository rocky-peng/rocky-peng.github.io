import{_ as n,$ as s,a0 as a,a3 as t}from"./framework-e45e8004.js";const o={},p=t(`<p>hbase主要用来存储大数据量数据，底层存储采用的是hdfs来存储，是一种列式存储nosql数据库。</p><h2 id="逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构" aria-hidden="true">#</a> 逻辑存储结构</h2><p>假设现在要存储这样的数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;row_key1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;personal_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;131********&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;office_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;010-1111111&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;row_key11&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;personal_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;上海&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;132********&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;office_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;010-1111111&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;row_key2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ......
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑上看，大概这样子</p><figure><img src="https://cdn.justdopay.com/notion/md5-4850a486e6417b52672a80224d47d579.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>Region： 一定范围的row_key组成一个region</p><h2 id="物理存储结构" tabindex="-1"><a class="header-anchor" href="#物理存储结构" aria-hidden="true">#</a> 物理存储结构</h2><figure><img src="https://cdn.justdopay.com/notion/md5-35c66be820c7e94fbd119bc69c1ce4fa.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：感情就像成年人的牙齿，掉了就没了，再装也是假的。 <br><br><img src="https://api.btstu.cn/sjbz/?lx=dongman&amp;uuid=17d9658f-6b88-4690-af0b-d066eac32043" alt="" loading="lazy"></li></ul>`,13),e=[p];function i(c,l){return s(),a("div",null,e)}const u=n(o,[["render",i],["__file","Hbase 总览.html.vue"]]);export{u as default};
