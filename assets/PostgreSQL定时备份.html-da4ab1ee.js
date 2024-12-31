import{_ as r,$ as i,a0 as p,a1 as a,a2 as e,a3 as s,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),e(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),_=a("hr",null,null,-1),m=a("hr",null,null,-1),v=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：我不说话，不是我高冷，而是怕显露我的傻逼气息。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a15007df-67b2-46e3-ba35-f7ebe3a11f87",alt:"",loading:"lazy"})])],-1);function f(B,k){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[e("编写一个shell脚本，暂时命名为："),a("a",E,[e("pg-localhost-backup.sh"),s(o)]),e("，内容如下：")]),h,a("ul",null,[a("li",null,[s(n,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[e("Btrace入门")]),_:1})]),a("li",null,[s(n,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[e("微博关注关系如何实现")]),_:1})]),a("li",null,[s(n,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[e("随记")]),_:1})]),a("li",null,[s(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("MongoDB高可用")]),_:1})]),a("li",null,[s(n,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[e("K8S 无感发布")]),_:1})]),a("li",null,[s(n,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),a("li",null,[s(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:l(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),a("li",null,[s(n,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[e("Git Merge 、Rebase")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("ES杂项")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("分布式问题")]),_:1})]),a("li",null,[s(n,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[e("Linux dev shm目录")]),_:1})])]),b,_,m,v])}const A=r(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
