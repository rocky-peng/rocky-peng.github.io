import{_ as r,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as t,a5 as c,w as l}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),h={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),_=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),v=a("hr",null,null,-1),m=a("hr",null,null,-1),E=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：我不主动，不是你不重要，而是我不知道我重不重要。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=82e83372-d5d4-4445-adb5-64645da4784a",alt:"",loading:"lazy"})])],-1);function k(f,g){const o=l("ExternalLinkIcon"),n=l("RouterLink");return i(),p("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",h,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),b,a("ul",null,[a("li",null,[e(n,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:t(()=>[s("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[s("JDK命令行工具")]),_:1})]),a("li",null,[e(n,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[s("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[e(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:t(()=>[s("Paxos算法")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:t(()=>[s("常用队列")]),_:1})]),a("li",null,[e(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[s("SQL优化")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:t(()=>[s("分布式事务Seata")]),_:1})]),a("li",null,[e(n,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:t(()=>[s("PostgreSQL JSON类型字段常用操作")]),_:1})]),a("li",null,[e(n,{to:"/intro.html"},{default:t(()=>[s("intro")]),_:1})]),a("li",null,[e(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[s("Hbase 总览")]),_:1})]),a("li",null,[e(n,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:t(()=>[s("raft协议")]),_:1})])]),_,v,m,E])}const A=r(d,[["render",k],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
