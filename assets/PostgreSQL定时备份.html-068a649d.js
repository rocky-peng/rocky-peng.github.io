import{_ as r,$ as i,a0 as c,a1 as a,a2 as s,a3 as e,a4 as l,a5 as p,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),m=a("hr",null,null,-1),_=a("hr",null,null,-1),v=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：答应我，待疫情结束见面时，谁也不许笑话谁胖好吗？ "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function f(k,g){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),c("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",E,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[s("Oh My ZSH")]),_:1})]),a("li",null,[e(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[s("MongoDB高可用")]),_:1})]),a("li",null,[e(n,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:l(()=>[s("Sublime Text 格式化JSON")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:l(()=>[s("常用队列")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[s("简易版配置中心&初探原理")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[s("JVM异常处理")]),_:1})]),a("li",null,[e(n,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[s("Java语言完成notion笔记备份")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[s("JVM杂项")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:l(()=>[s("Java面试基础")]),_:1})]),a("li",null,[e(n,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[s("Git历史记录修改用户名和邮箱")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[s("RocketMQ")]),_:1})]),a("li",null,[e(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[s("K8S常用命令")]),_:1})])]),b,m,_,v])}const A=r(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{A as default};
