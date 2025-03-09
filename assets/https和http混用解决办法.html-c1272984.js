import{_ as l,$ as o,a0 as i,a1 as t,a3 as a,a4 as s,a5 as r,a2 as n,w as p}from"./framework-b3a0f150.js";const u={},c=r(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),d=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),h=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),n("：忘记一个人其实很简单，不要见，不要贱。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/5745029/pexels-photo-5745029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A narrow, atmospheric alley in Tokyo illuminated by traditional paper lanterns, capturing the essence of Japanese nightlife.",loading:"lazy"})])],-1);function _(m,A){const e=p("RouterLink");return o(),i("div",null,[c,t("ul",null,[t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[n("MySQL常用命令")]),_:1})]),t("li",null,[a(e,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[n("Docker进行资源隔离")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:s(()=>[n("微博关注关系如何实现")]),_:1})]),t("li",null,[a(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[n("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[n("JDK命令行工具")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[n("如何安装Google BBR")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[n("index方法压力测试记录")]),_:1})]),t("li",null,[a(e,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:s(()=>[n("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[n("AQS源码解读")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[n("JVM杂项")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[n("杂记")]),_:1})]),t("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:s(()=>[n("Linux")]),_:1})])]),d,E,h,B])}const b=l(u,[["render",_],["__file","https和http混用解决办法.html.vue"]]);export{b as default};
