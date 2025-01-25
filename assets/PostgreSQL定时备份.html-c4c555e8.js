import{_ as o,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const d={},E=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),B=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),b=a("hr",null,null,-1),_=a("hr",null,null,-1),m=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：人不能低下高贵的头，但捡钱时例外。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=313d464d-9328-4698-a434-9554ee7f741c",alt:"",loading:"lazy"})])],-1);function v(k,f){const r=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[E,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",u,[s("pg-localhost-backup.sh"),e(r)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[s("Git笔记")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("MySQL常用命令")]),_:1})]),a("li",null,[e(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("常见问题")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[s("测试两台服务器间的网速")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:l(()=>[s("数据同步方案")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:l(()=>[s("PasteImageIntoMarkdown插件开发")]),_:1})]),a("li",null,[e(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[s("Paxos算法")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[e(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[s("Arthas使用记录")]),_:1})]),a("li",null,[e(n,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[s("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[e(n,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:l(()=>[s("MySQL数据迁移到PGSQL")]),_:1})]),a("li",null,[e(n,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:l(()=>[s("https和http混用解决办法")]),_:1})])]),B,b,_,m])}const g=o(d,[["render",v],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
