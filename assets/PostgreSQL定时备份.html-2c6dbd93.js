import{_ as r,$ as i,a0 as p,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),m=a("hr",null,null,-1),_=a("hr",null,null,-1),k=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：以前不离不弃的是夫妻，现在不离不弃的是手机。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function f(v,g){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",E,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),h,a("ul",null,[a("li",null,[e(n,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[s("Redis笔记")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[s("提取Docker镜像中的文件")]),_:1})]),a("li",null,[e(n,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[s("Hadoop 一")]),_:1})]),a("li",null,[e(n,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[s("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[e(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[s("Docker笔记")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/gperftools.html"},{default:l(()=>[s("gperftools")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:l(()=>[s("分布式事务Seata")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[s("Markdown软件比对")]),_:1})]),a("li",null,[e(n,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[s("Nginx的双向认证配置")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[s("ESRally性能测试步骤")]),_:1})]),a("li",null,[e(n,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[e(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[s("Hbase 总览")]),_:1})])]),b,m,_,k])}const B=r(d,[["render",f],["__file","PostgreSQL定时备份.html.vue"]]);export{B as default};
