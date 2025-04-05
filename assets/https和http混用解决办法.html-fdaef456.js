import{_ as l,$ as o,a0 as i,a1 as t,a3 as s,a4 as n,a5 as r,a2 as a,w as p}from"./framework-b3a0f150.js";const u={},c=r(`<h1 id="https和http混用解决办法" tabindex="-1"><a class="header-anchor" href="#https和http混用解决办法" aria-hidden="true">#</a> https和http混用解决办法</h1><ol><li><p>通过certbot自动化脚本，自动生成证书，自动续期</p></li><li><p>使用Vercel，代理http请求</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  
  <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/backend/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xxxxxx:9088/backend/$1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),d=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),h=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：懒惰久了，稍微努力一下，就以为自己在拼命。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/5745029/pexels-photo-5745029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A narrow, atmospheric alley in Tokyo illuminated by traditional paper lanterns, capturing the essence of Japanese nightlife.",loading:"lazy"})])],-1);function A(m,_){const e=p("RouterLink");return o(),i("div",null,[c,t("ul",null,[t("li",null,[s(e,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[a("MAT工具")]),_:1})]),t("li",null,[s(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[a("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[s(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[s(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[s(e,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[s(e,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[a("NGINX")]),_:1})]),t("li",null,[s(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[a("Hadoop 一")]),_:1})]),t("li",null,[s(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:n(()=>[a("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[s(e,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[a("制作KVM ES镜像文件")]),_:1})]),t("li",null,[s(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[a("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[s(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[a("Mermaid示例")]),_:1})]),t("li",null,[s(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[a("随机图片在线接口")]),_:1})])]),d,E,h,B])}const v=l(u,[["render",A],["__file","https和http混用解决办法.html.vue"]]);export{v as default};
