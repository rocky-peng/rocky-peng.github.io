import{_ as n,$ as o,a0 as r,a1 as e,a3 as s,a4 as l,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const E={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),h=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：最烦别人问我工资多少，瞧不起我的方法有很多，为什么偏偏选这一种？ "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16143144/pexels-photo-16143144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Serene view of the Summer Palace with its historical architecture reflecting in the lake at sunset.",loading:"lazy"})])],-1);function f(B,m){const t=d("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[s(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[a("各种网关性能测试")]),_:1})]),e("li",null,[s(t,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[a("JVM参数设置")]),_:1})]),e("li",null,[s(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[a("PostgreSQL定时备份")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[s(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[a("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[a("kafka")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[s(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[a("Git Merge 、Rebase")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[a("Markdown软件比对")]),_:1})]),e("li",null,[s(t,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[a("GitHub Workflow突然报错")]),_:1})]),e("li",null,[s(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[a("K8S常用命令")]),_:1})]),e("li",null,[s(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[a("PostgreSQL高可用")]),_:1})])]),c,p,h,_])}const A=n(E,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{A as default};
