import{_ as l,$ as o,a0 as i,a1 as t,a3 as e,a4 as a,a5 as r,a2 as n,w as u}from"./framework-b3a0f150.js";const p={},c=r(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),d=t("hr",null,null,-1),h=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),n("：长大这两个字，连偏旁部首都没有，一看就很孤独。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=73186885-e38c-4e89-907e-b8cc58bc2f28",alt:"",loading:"lazy"})])],-1);function B(_,m){const s=u("RouterLink");return o(),i("div",null,[c,t("ul",null,[t("li",null,[e(s,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[n("记一次内存泄漏")]),_:1})]),t("li",null,[e(s,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[n("数组转树形结构只需两步")]),_:1})]),t("li",null,[e(s,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[n("PostgreSQL定时备份")]),_:1})]),t("li",null,[e(s,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[n("Spring RetryTemplate")]),_:1})]),t("li",null,[e(s,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[n("istio基础知识")]),_:1})]),t("li",null,[e(s,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[n("分库分表")]),_:1})]),t("li",null,[e(s,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:a(()=>[n("Javassist整理")]),_:1})]),t("li",null,[e(s,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[n("SQL优化")]),_:1})]),t("li",null,[e(s,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[n("Markdown软件比对")]),_:1})]),t("li",null,[e(s,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[n("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[e(s,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[n("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[e(s,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:a(()=>[n("表单重复提交解决方案")]),_:1})])]),E,d,h,A])}const b=l(p,[["render",B],["__file","https和http混用解决办法.html.vue"]]);export{b as default};
