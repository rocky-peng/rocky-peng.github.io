import{_ as s,$ as o,a0 as r,a1 as a,a3 as t,a4 as n,a5 as E,a2 as e,w as i}from"./framework-16d560c6.js";const d={},u=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),c=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),A=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：为什么放屁总是自己先闻到？因为机会，总是留给有准备的人。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a7c797cc-9e0b-4b84-b697-c623eef68b22",alt:"",loading:"lazy"})])],-1);function B(h,f){const l=i("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[t(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[e("MySQL常用命令")]),_:1})]),a("li",null,[t(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[e("Markdown Mermaid画图实例")]),_:1})]),a("li",null,[t(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("高可用通用方案")]),_:1})]),a("li",null,[t(l,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[e("index方法压力测试记录")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:n(()=>[e("异地多活")]),_:1})]),a("li",null,[t(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),a("li",null,[t(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[e("SQL优化")]),_:1})]),a("li",null,[t(l,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("Nginx的双向认证配置")]),_:1})]),a("li",null,[t(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:n(()=>[e("GitHub Workflow突然报错")]),_:1})]),a("li",null,[t(l,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[e("随机图片在线接口")]),_:1})])]),c,p,A,_])}const k=s(d,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
