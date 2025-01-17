import{_ as l,$ as o,a0 as i,a1 as t,a3 as s,a4 as a,a5 as r,a2 as e,w as u}from"./framework-b3a0f150.js";const c={},p=r(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),d=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),E=t("hr",null,null,-1),_=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：虽然你学的慢，但是你放弃的快呀。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d43ba52c-4460-43dc-96a4-f68dd5bd8898",alt:"",loading:"lazy"})])],-1);function B(m,f){const n=u("RouterLink");return o(),i("div",null,[p,t("ul",null,[t("li",null,[s(n,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[s(n,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("弱引用示例")]),_:1})]),t("li",null,[s(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[s(n,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[s(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[s(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[e("异地多活")]),_:1})]),t("li",null,[s(n,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[s(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("JVM杂项")]),_:1})]),t("li",null,[s(n,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[s(n,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[s(n,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[s(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("K8S常用命令")]),_:1})])]),d,h,E,_])}const b=l(c,[["render",B],["__file","https和http混用解决办法.html.vue"]]);export{b as default};
