import{_ as r,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as E,w as t}from"./framework-58787b1c.js";const c={},d=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},B=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),h=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),A=a("hr",null,null,-1),b=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：如果有一天你前女友结婚了，告诉我，我帮你吃回本。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=44ff16b5-4fe6-4f20-8ae8-421e0904d439",alt:"",loading:"lazy"})])],-1);function f(m,v){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[d,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",u,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),B,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[s("各种网关性能测试")]),_:1})]),a("li",null,[e(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[s("Spring框架源码关键点")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[s("JDK命令行工具")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:l(()=>[s("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[s("推荐几个适用小工具")]),_:1})]),a("li",null,[e(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[s("Arthas使用记录")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[s("多台centos服务器，文件互相备份")]),_:1})]),a("li",null,[e(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[e(n,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[s("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[s("Markdown软件比对")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[s("前后端常用技术")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:l(()=>[s("BBR加速")]),_:1})])]),h,A,b,_])}const g=r(c,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
