import{_ as l,$ as o,a0 as r,a1 as t,a3 as s,a4 as n,a5 as i,a2 as e,w as u}from"./framework-b3a0f150.js";const c={},d=i(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),p=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),E=t("hr",null,null,-1),_=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：熟练地运用，关我屁事和关你屁事，可以节省人生80%的时间。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=8b5ae296-4681-4904-be2a-5cc759f1e2a7",alt:"",loading:"lazy"})])],-1);function m(f,k){const a=u("RouterLink");return o(),r("div",null,[d,t("ul",null,[t("li",null,[s(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[s(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[s(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("数据同步方案")]),_:1})]),t("li",null,[s(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:n(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[s(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:n(()=>[e("异地多活")]),_:1})]),t("li",null,[s(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[s(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[e("SQL优化")]),_:1})]),t("li",null,[s(a,{to:"/intro.html"},{default:n(()=>[e("intro")]),_:1})]),t("li",null,[s(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[e("分布式问题")]),_:1})]),t("li",null,[s(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:n(()=>[e("raft协议")]),_:1})])]),p,h,E,_])}const v=l(c,[["render",m],["__file","https和http混用解决办法.html.vue"]]);export{v as default};
