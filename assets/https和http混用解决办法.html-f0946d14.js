import{_ as l,$ as o,a0 as r,a1 as t,a3 as a,a4 as s,a5 as i,a2 as e,w as u}from"./framework-b3a0f150.js";const c={},E=i(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),p=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),d=t("hr",null,null,-1),h=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：知道流星为什么飞那么快吗？因为它，根本不想知道你的愿望。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b06c6417-3b11-44be-a688-5920e328c634",alt:"",loading:"lazy"})])],-1);function A(_,m){const n=u("RouterLink");return o(),r("div",null,[E,t("ul",null,[t("li",null,[a(n,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:s(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[a(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[a(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[a(n,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[a(n,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[a(n,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:s(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[a(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:s(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(n,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[e("raft协议")]),_:1})]),t("li",null,[a(n,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:s(()=>[e("Linux dev shm目录")]),_:1})]),t("li",null,[a(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[e("K8S常用命令")]),_:1})])]),p,d,h,B])}const v=l(c,[["render",A],["__file","https和http混用解决办法.html.vue"]]);export{v as default};
