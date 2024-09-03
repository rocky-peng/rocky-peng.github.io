import{_ as n,$ as r,a0 as t,a1 as s,a2 as a,a4 as l,a3 as p,w as o}from"./framework-24d1f903.js";const i={},c=s("h1",{id:"postgresql定时备份",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),a(" PostgreSQL定时备份")],-1),d={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：失败的尽头是绝望，努力的终点是过劳。 <br><br><img src="https://tuapi.eees.cc/api.php?category=dongman&amp;type=302&amp;uuid=c4017542-9f8c-4c4e-8624-d59320b2d73c" alt="" loading="lazy"></li></ul>`,6);function v(k,u){const e=o("ExternalLinkIcon");return r(),t("div",null,[c,s("p",null,[a("编写一个shell脚本，暂时命名为："),s("a",d,[a("pg-localhost-backup.sh"),l(e)]),a("，内容如下：")]),b])}const m=n(i,[["render",v],["__file","PostgreSQL定时备份.html.vue"]]);export{m as default};
