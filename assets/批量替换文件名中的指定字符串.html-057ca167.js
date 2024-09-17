import{_ as t,$ as o,a0 as r,a1 as a,a3 as l,a4 as s,a5 as i,a2 as e,w as E}from"./framework-7f25d394.js";const d={},c=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),B=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：现在想要出国玩的，只剩下这一国了——天国。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9e3c6e02-f2a5-4438-9733-4361c6f05d35",alt:"",loading:"lazy"})])],-1);function h(f,A){const n=E("RouterLink");return o(),r("div",null,[c,a("ul",null,[a("li",null,[l(n,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),a("li",null,[l(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[e("Docker进行资源隔离")]),_:1})]),a("li",null,[l(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:s(()=>[e("Spring框架源码关键点")]),_:1})]),a("li",null,[l(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:s(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[l(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[e("Markdown Mermaid画图实例")]),_:1})]),a("li",null,[l(n,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[e("IO相关")]),_:1})]),a("li",null,[l(n,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[e("Hadoop 一")]),_:1})]),a("li",null,[l(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[e("index方法压力测试记录")]),_:1})]),a("li",null,[l(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[e("Arthas使用记录")]),_:1})]),a("li",null,[l(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:s(()=>[e("SQL优化")]),_:1})]),a("li",null,[l(n,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:s(()=>[e("SpringCloud总体认识")]),_:1})]),a("li",null,[l(n,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[e("MySQL数据迁移到PGSQL")]),_:1})])]),u,p,B,_])}const k=t(d,[["render",h],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
