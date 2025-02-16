import{_ as t,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const u={},c=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),h=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：就算是Believe，中间也藏着一个lie。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=30a6d4fb-c68f-449f-8fe9-065fc4712ea8",alt:"",loading:"lazy"})])],-1);function f(B,m){const l=d("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[a("Oh My ZSH")]),_:1})]),e("li",null,[s(l,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[s(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[a("随记")]),_:1})]),e("li",null,[s(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[a("MongoDB高可用")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[a("KVM方式集群部署ES")]),_:1})]),e("li",null,[s(l,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[a("Censys搜索引擎学习")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("乱七八糟的笔记")]),_:1})]),e("li",null,[s(l,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[a("MySQL索引")]),_:1})]),e("li",null,[s(l,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:n(()=>[a("SpringCloud总体认识")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[a("BBR加速")]),_:1})])]),p,E,h,_])}const A=t(u,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{A as default};
