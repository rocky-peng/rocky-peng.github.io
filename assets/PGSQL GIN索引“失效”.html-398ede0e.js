import{_ as s,$ as n,a0 as a,a3 as e}from"./framework-24d1f903.js";const t={},p=e(`<h1 id="pgsql-gin索引-失效" tabindex="-1"><a class="header-anchor" href="#pgsql-gin索引-失效" aria-hidden="true">#</a> PGSQL GIN索引“失效”</h1><h2 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景" aria-hidden="true">#</a> 问题背景</h2><p>现在有一张标签表，主要有两个字段，member_id和tags。如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> user_tags
<span class="token punctuation">(</span>
    id   serial8 <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    member_id int8 <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token punctuation">,</span>
    tags jsonb
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> concurrently <span class="token keyword">on</span> user_tags <span class="token keyword">using</span> gin <span class="token punctuation">(</span>tags<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大致有5500多万行数据，每个member_id一行数据。tags字段就存储了这个member的所有标签。</p><p>大致结构如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;19&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;5006268&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;标签ID&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;标签值1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;标签值2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  	....
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有个需求需要查询哪些用户被打上了标签A且标签值为固定的某个值，大致的查询语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_tags <span class="token keyword">where</span>  tags @<span class="token operator">&gt;</span> <span class="token string">&#39;{&quot;50&quot;:[&quot;5006268&quot;]}&#39;</span><span class="token punctuation">;</span>

表示查询被打上了<span class="token number">50</span>这个标签，且标签值为<span class="token number">5006268</span>的那些用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个查询讲道理会走gin索引，同时实际情况也确实走了gin索引，查询基本是秒回。</p><p>然后系统有个定时任务，每天会更新这张表的数据，大致更新过程如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除临时表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> <span class="token string">&quot;user_tags_tmp&quot;</span><span class="token punctuation">;</span>

<span class="token comment">-- 复制现有的表结构</span>
<span class="token keyword">create</span> unlogged <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span>  user_tags_tmp <span class="token punctuation">(</span><span class="token operator">like</span>  user_tags including constraints including indexes including defaults<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--- 往user_tags_tmp表写数据（本案例中采用的是copy方法写入，每次大致写入5500多万行数据）</span>
<span class="token comment">-- copy user_tags_tmp FROM &#39;data.csv&#39; WITH (FORMAT csv, ESCAPE &#39;\\&quot;&#39;, QUOTE &#39;\\&quot;&#39;, NULL &#39;N/A&#39;)</span>

<span class="token keyword">set</span> statement_timeout<span class="token operator">=</span><span class="token number">15000</span><span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> user_tags_bak<span class="token punctuation">;</span>

<span class="token comment">-- 重命名现有的表</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> user_tags <span class="token keyword">rename</span> <span class="token keyword">to</span> user_tags_bak<span class="token punctuation">;</span>

<span class="token comment">-- 把新的表重命名为正式表</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> user_tags_tmp <span class="token keyword">rename</span> <span class="token keyword">to</span> user_tags<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终于有一天，上面的查询语句突然变得很慢，导致应用端超时看不到数据</p><p>通过执行explain analyse发现居然没有走索引，这个就有点懵了</p><p><strong>后面同事执行了一下 <code>analyse verbose user_tags;</code> 然后重新执行查询语句的explain analyse，发现开始走索引了，但还是没有恢复到之前的秒回状态。</strong></p><p>后面查资料，当对gin索引进行大量的插入、更新操作时，系统会将这些操作的变化暂时存储在一个叫做 &quot;pending list&quot; 的结构中。这个结构旨在将多次小的索引更新合并成较大的批量更新，以减少磁盘 I/O 的开销。</p><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：爱情可以来迟，但外卖不行，毕竟我还在长身体。 <br><br><img src="https://tuapi.eees.cc/api.php?category=dongman&amp;type=302&amp;uuid=97885b9a-931a-4c7b-982b-8acf0cb69df6" alt="" loading="lazy"></li></ul>`,20),o=[p];function l(i,c){return n(),a("div",null,o)}const d=s(t,[["render",l],["__file","PGSQL GIN索引“失效”.html.vue"]]);export{d as default};
