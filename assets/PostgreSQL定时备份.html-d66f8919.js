import{_ as r,$ as i,a0 as c,a1 as a,a2 as s,a3 as e,a4 as l,a5 as p,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),h={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},E=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),m=a("hr",null,null,-1),_=a("hr",null,null,-1),k=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：每天叫醒我的不是闹钟，而是膀胱。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function f(v,g){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),c("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",h,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),E,a("ul",null,[a("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[s("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[e(n,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[s("随记")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[s("提取Docker镜像中的文件")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:l(()=>[s("PasteImageIntoMarkdown插件开发")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[s("AQS源码解读")]),_:1})]),a("li",null,[e(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[s("Arthas使用记录")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:l(()=>[s("异地多活")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[s("JVM杂项")]),_:1})]),a("li",null,[e(n,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[s("MyBatis xml特殊字符处理")]),_:1})]),a("li",null,[e(n,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[s("Git Merge 、Rebase")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[s("RocketMQ")]),_:1})]),a("li",null,[e(n,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[s("GitHub Workflow突然报错")]),_:1})])]),b,m,_,k])}const A=r(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
