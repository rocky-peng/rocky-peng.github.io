import{_ as n,$ as o,a0 as r,a1 as a,a3 as s,a4 as t,a5 as i,a2 as e,w as d}from"./framework-b7a22294.js";const E={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),c=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),_=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：像你这样的人，哪怕把土豪两个字贴在脸上，别人也会反过来读。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a0489e89-44f4-4972-944d-7930de99788b",alt:"",loading:"lazy"})])],-1);function B(A,f){const l=d("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[s(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:t(()=>[e("Oh My ZSH")]),_:1})]),a("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:t(()=>[e("MySQL常用命令")]),_:1})]),a("li",null,[s(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:t(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),a("li",null,[s(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[e("数组转树形结构只需两步")]),_:1})]),a("li",null,[s(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[e("MongoDB高可用")]),_:1})]),a("li",null,[s(l,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:t(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[s(l,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:t(()=>[e("线上FullGC频繁的排查")]),_:1})]),a("li",null,[s(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:t(()=>[e("制作KVM ES镜像文件")]),_:1})]),a("li",null,[s(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:t(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),a("li",null,[s(l,{to:"/intro.html"},{default:t(()=>[e("intro")]),_:1})]),a("li",null,[s(l,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[e("ESRally性能测试步骤")]),_:1})]),a("li",null,[s(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:t(()=>[e("杂记")]),_:1})])]),c,p,_,h])}const k=n(E,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
