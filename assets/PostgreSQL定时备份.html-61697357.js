import{_ as r,$ as i,a0 as p,a1 as a,a2 as e,a3 as s,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),e(" PostgreSQL定时备份")],-1),h={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),m=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),f=a("hr",null,null,-1),_=a("hr",null,null,-1),k=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：比了个耶以后，你就毕了个业。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=268e6eda-52fa-4b9f-982b-9f5f868019f7",alt:"",loading:"lazy"})])],-1);function v(E,g){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[e("编写一个shell脚本，暂时命名为："),a("a",h,[e("pg-localhost-backup.sh"),s(o)]),e("，内容如下：")]),b,a("ul",null,[a("li",null,[s(n,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:l(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),a("li",null,[s(n,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[e("ShadowsockServer")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[e("MySQL索引")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:l(()=>[e("异地多活")]),_:1})]),a("li",null,[s(n,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("ES杂项")]),_:1})]),a("li",null,[s(n,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[e("Nginx的双向认证配置")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[e("RocketMQ")]),_:1})]),a("li",null,[s(n,{to:"/software/raft/sofajraft.html"},{default:l(()=>[e("sofajraft")]),_:1})]),a("li",null,[s(n,{to:"/software/linux/Linux.html"},{default:l(()=>[e("Linux")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:l(()=>[e("杂记")]),_:1})]),a("li",null,[s(n,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),m,f,_,k])}const w=r(d,[["render",v],["__file","PostgreSQL定时备份.html.vue"]]);export{w as default};
