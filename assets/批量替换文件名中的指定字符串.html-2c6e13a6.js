import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as i,a2 as a,w as c}from"./framework-b3a0f150.js";const E={},d=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),h=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：仰望别人不是你弱，而是你矮。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16143144/pexels-photo-16143144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Serene view of the Summer Palace with its historical architecture reflecting in the lake at sunset.",loading:"lazy"})])],-1);function _(f,A){const t=c("RouterLink");return o(),r("div",null,[d,e("ul",null,[e("li",null,[s(t,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[s(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[a("常见问题")]),_:1})]),e("li",null,[s(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[s(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("乱七八糟的笔记")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("AQS源码解读")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[a("ES杂项")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("ReentrantLock源码解读")]),_:1})]),e("li",null,[s(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[s(t,{to:"/software/raft/sofajraft.html"},{default:n(()=>[a("sofajraft")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[a("分布式问题")]),_:1})]),e("li",null,[s(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[a("Mermaid示例")]),_:1})])]),u,p,h,B])}const k=l(E,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
