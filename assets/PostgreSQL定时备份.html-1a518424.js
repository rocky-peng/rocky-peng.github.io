import{_ as o,$ as i,a0 as E,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-3367138f.js";const p={},d=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),B=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),b=a("hr",null,null,-1),_=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：不要试图跟混蛋讲道理，如果他肯跟你讲道理，又怎么会是混蛋。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=3170d199-eefd-4c08-9709-6bcf77dc8c86",alt:"",loading:"lazy"})])],-1);function m(f,v){const r=t("ExternalLinkIcon"),n=t("RouterLink");return i(),E("div",null,[d,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",u,[s("pg-localhost-backup.sh"),e(r)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[s("Oh My ZSH")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[s("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[e(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[s("Paxos算法")]),_:1})]),a("li",null,[e(n,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:l(()=>[s("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[s("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:l(()=>[s("SQL优化")]),_:1})]),a("li",null,[e(n,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[s("Nginx的双向认证配置")]),_:1})]),a("li",null,[e(n,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:l(()=>[s("MySQL数据迁移到PGSQL")]),_:1})]),a("li",null,[e(n,{to:"/intro.html"},{default:l(()=>[s("intro")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("分布式问题")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[s("ESRally性能测试步骤")]),_:1})]),a("li",null,[e(n,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:l(()=>[s("Docker隐射的端口外网不能访问")]),_:1})])]),B,b,_,A])}const g=o(p,[["render",m],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
