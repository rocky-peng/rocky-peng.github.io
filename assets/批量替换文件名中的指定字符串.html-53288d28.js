import{_ as n,$ as o,a0 as r,a1 as a,a3 as s,a4 as l,a5 as i,a2 as e,w as c}from"./framework-58787b1c.js";const d={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),_=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：你有时候看别人像个傻子，其实别人是面镜子。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9f2c218f-5753-4651-ac1c-03fcbb619c5c",alt:"",loading:"lazy"})])],-1);function f(m,B){const t=c("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[s(t,{to:"/software/unclassified/MyBatis.html"},{default:l(()=>[e("MyBatis")]),_:1})]),a("li",null,[s(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Redis笔记")]),_:1})]),a("li",null,[s(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[e("Btrace入门")]),_:1})]),a("li",null,[s(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[e("测试两台服务器间的网速")]),_:1})]),a("li",null,[s(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:l(()=>[e("Sublime Text 格式化JSON")]),_:1})]),a("li",null,[s(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),a("li",null,[s(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:l(()=>[e("IO相关")]),_:1})]),a("li",null,[s(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:l(()=>[e("分库分表")]),_:1})]),a("li",null,[s(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[s(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:l(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),a("li",null,[s(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[e("raft协议")]),_:1})]),a("li",null,[s(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("PostgreSQL高可用")]),_:1})])]),p,E,_,h])}const A=n(d,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{A as default};
