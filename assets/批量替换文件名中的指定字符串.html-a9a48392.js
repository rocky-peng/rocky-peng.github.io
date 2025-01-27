import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as i,a2 as a,w as E}from"./framework-b3a0f150.js";const d={},c=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),h=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：不主动会失去，太主动不会珍惜，这就是人心。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d3df12ba-15a4-44a2-ba16-e7e2db1d3aed",alt:"",loading:"lazy"})])],-1);function B(A,f){const t=E("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[s(t,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:n(()=>[a("Btrace入门")]),_:1})]),e("li",null,[s(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[s(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[s(t,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[a("随记")]),_:1})]),e("li",null,[s(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[a("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[s(t,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[a("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[s(t,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[a("Hbase 总览")]),_:1})]),e("li",null,[s(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[a("K8S常用命令")]),_:1})]),e("li",null,[s(t,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:n(()=>[a("https和http混用解决办法")]),_:1})])]),u,p,h,_])}const b=l(d,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{b as default};
