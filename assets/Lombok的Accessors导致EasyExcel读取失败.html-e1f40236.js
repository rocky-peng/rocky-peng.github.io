import{_ as n,$ as s,a0 as a,a3 as t}from"./framework-24d1f903.js";const p={},e=t(`<h2 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XXXXStoreDTO</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@ExcelIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> aaaa<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ExcelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;*门店编码&quot;</span><span class="token punctuation">,</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> storeNo<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ExcelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;门店名称&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> storeName<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ExcelIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bbbb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">XXXXStoreDTO</span> <span class="token punctuation">&gt;</span></span> <span class="token function">getStore</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">openStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CampaignStoreDTO</span><span class="token punctuation">&gt;</span></span> allList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">EasyExcel</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> <span class="token class-name">XXXXStoreDTO</span> <span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PageReadListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">XXXXStoreDTO</span> <span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>dataList <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        allList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>dataList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">headRowNumber</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> allList<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

当<span class="token class-name">XXXXStoreDTO</span>类上没有添加<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>注解后不能正常读取数据，
没有细究原因，记录下坑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：美貌会消逝，但蠢是永恒的~ <br><br><img src="https://tuapi.eees.cc/api.php?category=biying&amp;type=302&amp;uuid=0c0d5d1b-32b2-4396-ad2e-e8446c621579" alt="" loading="lazy"></li></ul>`,6),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","Lombok的Accessors导致EasyExcel读取失败.html.vue"]]);export{r as default};
