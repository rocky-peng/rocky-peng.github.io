import{_ as o,$ as i,a0 as c,a1 as a,a2 as e,a3 as s,a4 as l,a5 as p,w as t}from"./framework-16d560c6.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),e(" PostgreSQL定时备份")],-1),h={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),E=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),_=a("hr",null,null,-1),m=a("hr",null,null,-1),v=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：色令智昏绝对是个褒义词，你不光要受色令，还要有智可昏。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5d7a0dfc-3469-4f05-9be6-28c09881cbb0",alt:"",loading:"lazy"})])],-1);function f(k,g){const r=t("ExternalLinkIcon"),n=t("RouterLink");return i(),c("div",null,[u,a("p",null,[e("编写一个shell脚本，暂时命名为："),a("a",h,[e("pg-localhost-backup.sh"),s(r)]),e("，内容如下：")]),b,a("ul",null,[a("li",null,[s(n,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Redis笔记")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[s(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[e("Spring框架源码关键点")]),_:1})]),a("li",null,[s(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("JDK命令行工具")]),_:1})]),a("li",null,[s(n,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[s(n,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),a("li",null,[s(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("JVM杂项")]),_:1})]),a("li",null,[s(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("CountDownLatch源码解读")]),_:1})]),a("li",null,[s(n,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[e("Git Merge 、Rebase")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("ES杂项")]),_:1})]),a("li",null,[s(n,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[s(n,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("PostgreSQL高可用")]),_:1})])]),E,_,m,v])}const A=o(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
