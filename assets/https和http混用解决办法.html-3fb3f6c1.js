import{_ as l,$ as o,a0 as r,a1 as t,a3 as a,a4 as s,a5 as i,a2 as e,w as u}from"./framework-b3a0f150.js";const p={},c=i(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),d=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),h=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：没有女朋友算什么，现在朋友都不好找。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/5745029/pexels-photo-5745029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A narrow, atmospheric alley in Tokyo illuminated by traditional paper lanterns, capturing the essence of Japanese nightlife.",loading:"lazy"})])],-1);function A(m,_){const n=u("RouterLink");return o(),r("div",null,[c,t("ul",null,[t("li",null,[a(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[a(n,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:s(()=>[e("JetBrains IDE 全破解")]),_:1})]),t("li",null,[a(n,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[a(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:s(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[a(n,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:s(()=>[e("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[a(n,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[e("分库分表")]),_:1})]),t("li",null,[a(n,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[a(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:s(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[a(n,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[a(n,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:s(()=>[e("Docker隐射的端口外网不能访问")]),_:1})])]),d,E,h,B])}const k=l(p,[["render",A],["__file","https和http混用解决办法.html.vue"]]);export{k as default};
