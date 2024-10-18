import{_ as r,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-16d560c6.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),_=a("hr",null,null,-1),m=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：我真的好怕别人怀疑我，因为他们都怀疑对了。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=01f4fd87-0ddb-401b-8aea-fa30f5aea612",alt:"",loading:"lazy"})])],-1);function f(v,A){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",E,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/MyBatis.html"},{default:l(()=>[s("MyBatis")]),_:1})]),a("li",null,[e(n,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[s("Notion笔记定时备份")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("MySQL常用命令")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[s("来个JVM冷知识")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[s("index方法压力测试记录")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[s("MySQL索引")]),_:1})]),a("li",null,[e(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[s("CountDownLatch源码解读")]),_:1})]),a("li",null,[e(n,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[s("SpringCloud总体认识")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[s("表单重复提交解决方案")]),_:1})]),a("li",null,[e(n,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[s("Linux dev shm目录")]),_:1})]),a("li",null,[e(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[s("Hbase 总览")]),_:1})])]),b,_,m,B])}const g=r(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
