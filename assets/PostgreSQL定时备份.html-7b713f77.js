import{_ as r,$ as i,a0 as c,a1 as a,a2 as s,a3 as e,a4 as l,a5 as p,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),m=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),b=a("hr",null,null,-1),f=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：她化了妆，也没有你化成灰好看。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function k(v,A){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),c("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",E,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[e(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[s("Redis高可用")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:l(()=>[s("PasteImageIntoMarkdown插件开发")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[s("Javassist整理")]),_:1})]),a("li",null,[e(n,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[s("MyBatis xml特殊字符处理")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[s("ES杂项")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[s("前后端常用技术")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("分布式问题")]),_:1})]),a("li",null,[e(n,{to:"/software/raft/sofajraft.html"},{default:l(()=>[s("sofajraft")]),_:1})]),a("li",null,[e(n,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[s("Mermaid示例")]),_:1})]),a("li",null,[e(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("K8S常用命令")]),_:1})])]),m,b,f,_])}const g=r(d,[["render",k],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
