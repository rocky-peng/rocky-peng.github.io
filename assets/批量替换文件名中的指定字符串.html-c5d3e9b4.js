import{_ as n,$ as o,a0 as r,a1 as a,a3 as l,a4 as s,a5 as E,a2 as e,w as i}from"./framework-b3a0f150.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：人不能低下高贵的头，但捡钱时例外。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e36b6a93-5350-46ae-a312-7619429745d3",alt:"",loading:"lazy"})])],-1);function _(B,m){const t=i("RouterLink");return o(),r("div",null,[c,a("ul",null,[a("li",null,[l(t,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:s(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[e("MySQL常用命令")]),_:1})]),a("li",null,[l(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("常见问题")]),_:1})]),a("li",null,[l(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[e("来个JVM冷知识")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),a("li",null,[l(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:s(()=>[e("JVM异常处理")]),_:1})]),a("li",null,[l(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[e("Arthas使用记录")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[e("分布式事务Seata")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("ESRally性能测试步骤")]),_:1})]),a("li",null,[l(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:s(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),a("li",null,[l(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),u,p,h,A])}const k=n(d,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
