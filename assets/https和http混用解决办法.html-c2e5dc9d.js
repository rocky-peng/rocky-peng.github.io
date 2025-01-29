import{_ as l,$ as o,a0 as r,a1 as t,a3 as a,a4 as s,a5 as i,a2 as e,w as u}from"./framework-b3a0f150.js";const E={},p=i(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),d=t("hr",null,null,-1),h=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：时间是最好的老师，但遗憾的是，最后它把所有学生都弄死了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d69ee4c4-e52d-4be3-b563-5690f9dab1fb",alt:"",loading:"lazy"})])],-1);function A(_,m){const n=u("RouterLink");return o(),r("div",null,[p,t("ul",null,[t("li",null,[a(n,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[e("Notion笔记定时备份")]),_:1})]),t("li",null,[a(n,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[e("kafka")]),_:1})]),t("li",null,[a(n,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[e("分库分表")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[a(n,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:s(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[a(n,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:s(()=>[e("JVM异常处理")]),_:1})]),t("li",null,[a(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("CountDownLatch源码解读")]),_:1})]),t("li",null,[a(n,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[a(n,{to:"/intro.html"},{default:s(()=>[e("intro")]),_:1})]),t("li",null,[a(n,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[a(n,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:s(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),t("li",null,[a(n,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("PostgreSQL高可用")]),_:1})])]),c,d,h,B])}const k=l(E,[["render",A],["__file","https和http混用解决办法.html.vue"]]);export{k as default};
