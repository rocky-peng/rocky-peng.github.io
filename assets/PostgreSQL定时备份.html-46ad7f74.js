import{_ as n,$ as l,a0 as r,a1 as a,a2 as s,a3 as t,a4 as o,w as i}from"./framework-294a1fec.js";const c={},p=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),d={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},b=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br>`,3),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),m=a("hr",null,null,-1),k=a("hr",null,null,-1),v=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：念旧不是好习惯，尺度不稳成纠缠。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=58034df8-707e-4540-afc4-3516961ff68f",alt:"",loading:"lazy"})])],-1);function _(g,h){const e=i("ExternalLinkIcon");return l(),r("div",null,[p,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",d,[s("pg-localhost-backup.sh"),t(e)]),s("，内容如下：")]),b,s(" ## 系统推荐 - [MySQL杂项](../software/middleware/mysql/MySQL杂项.md) - [K8S 无感发布](K8S 无感发布.md) - [测试两台服务器间的网速](../software/unclassified/测试两台服务器间的网速.md) - [批量修改git历史记录中的用户名和邮箱](../software/unclassified/批量修改git历史记录中的用户名和邮箱.md) - [JVM异常处理](../software/jvm/JVM异常处理.md) - [Lombok的Accessors导致EasyExcel读取失败](Lombok的Accessors导致EasyExcel读取失败.md) - [RocketMQ](../software/middleware/mq/RocketMQ.md) - [Docker隐射的端口外网不能访问](Docker隐射的端口外网不能访问.md) "),u,m,k,v])}const w=n(c,[["render",_],["__file","PostgreSQL定时备份.html.vue"]]);export{w as default};
