import{_ as n,$ as o,a0 as r,a1 as a,a3 as s,a4 as l,a5 as i,a2 as e,w as d}from"./framework-16d560c6.js";const c={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),E=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),p=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：书店看到一本书，《解决你人生50%的问题》，然后我买了两本。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=72e44583-262b-4888-9e00-8d7bd18b175d",alt:"",loading:"lazy"})])],-1);function A(f,m){const t=d("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[s(t,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[s(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Redis笔记")]),_:1})]),a("li",null,[s(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("常见问题")]),_:1})]),a("li",null,[s(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[e("Btrace入门")]),_:1})]),a("li",null,[s(t,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[e("JVM参数设置")]),_:1})]),a("li",null,[s(t,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[e("istio基础知识")]),_:1})]),a("li",null,[s(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[e("Paxos算法")]),_:1})]),a("li",null,[s(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[e("Arthas使用记录")]),_:1})]),a("li",null,[s(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("JVM杂项")]),_:1})]),a("li",null,[s(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[e("Nginx的双向认证配置")]),_:1})]),a("li",null,[s(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:l(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),a("li",null,[s(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:l(()=>[e("MySQL数据迁移到PGSQL")]),_:1})])]),E,h,p,_])}const k=n(c,[["render",A],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
