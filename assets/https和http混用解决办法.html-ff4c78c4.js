import{_ as l,$ as o,a0 as i,a1 as t,a3 as s,a4 as a,a5 as r,a2 as e,w as u}from"./framework-b3a0f150.js";const p={},c=r(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),d=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),E=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我要努力变成你喜欢的样子，然后打死也不跟你在一起。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/5745029/pexels-photo-5745029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A narrow, atmospheric alley in Tokyo illuminated by traditional paper lanterns, capturing the essence of Japanese nightlife.",loading:"lazy"})])],-1);function _(A,B){const n=u("RouterLink");return o(),i("div",null,[c,t("ul",null,[t("li",null,[s(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[s(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[s(n,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[e("随记")]),_:1})]),t("li",null,[s(n,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[s(n,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[e("Hadoop 一")]),_:1})]),t("li",null,[s(n,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[e("istio基础知识")]),_:1})]),t("li",null,[s(n,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[s(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[s(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[s(n,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[s(n,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[e("Linux dev shm目录")]),_:1})]),t("li",null,[s(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:a(()=>[e("杂记")]),_:1})])]),d,h,E,m])}const b=l(p,[["render",_],["__file","https和http混用解决办法.html.vue"]]);export{b as default};
