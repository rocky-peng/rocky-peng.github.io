import{_ as o,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-16d560c6.js";const E={},d=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),v=a("hr",null,null,-1),_=a("hr",null,null,-1),f=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：希望你以后，有酒有肉有姑娘，姑娘丑的不像样。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=83fb0bea-d659-405b-95fe-8ae53ab13a5a",alt:"",loading:"lazy"})])],-1);function m(B,g){const r=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[d,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",u,[s("pg-localhost-backup.sh"),e(r)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[s("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[s("Git笔记")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:l(()=>[s("synchronized原理深度剖析")]),_:1})]),a("li",null,[e(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("常见问题")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[s("测试两台服务器间的网速")]),_:1})]),a("li",null,[e(n,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[s("Spring RetryTemplate")]),_:1})]),a("li",null,[e(n,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[s("高可用通用方案")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[s("批量修改git历史记录中的用户名和邮箱")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[s("简易版配置中心&初探原理")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[s("Javassist整理")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[s("JVM异常处理")]),_:1})])]),b,v,_,f])}const A=o(E,[["render",m],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
