import{_ as r,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-16d560c6.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),h=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),f=a("hr",null,null,-1),_=a("hr",null,null,-1),m=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：你只会循规蹈矩，世界哪敢给你惊喜。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=f63d773e-d0f9-4c73-b761-b272380ffd7a",alt:"",loading:"lazy"})])],-1);function k(B,v){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",E,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),b,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/MyBatis.html"},{default:l(()=>[s("MyBatis")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[s("MAT工具")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("MySQL常用命令")]),_:1})]),a("li",null,[e(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("常见问题")]),_:1})]),a("li",null,[e(n,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[s("K8S 无感发布")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[s("批量修改git历史记录中的用户名和邮箱")]),_:1})]),a("li",null,[e(n,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:l(()=>[s("Centos离线安装Docker")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[s("JVM杂项")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[s("前后端常用技术")]),_:1})]),a("li",null,[e(n,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[s("GitHub Workflow突然报错")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[s("ESRally性能测试步骤")]),_:1})]),a("li",null,[e(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("K8S常用命令")]),_:1})])]),h,f,_,m])}const g=r(d,[["render",k],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
