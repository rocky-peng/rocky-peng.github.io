import{_ as r,$ as i,a0 as p,a1 as a,a2 as e,a3 as s,a4 as l,a5 as E,w as t}from"./framework-b6ede5bc.js";const c={},d=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),e(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),B=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),b=a("hr",null,null,-1),_=a("hr",null,null,-1),m=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：既然如今要在家上学，那以后，只能在学校睡觉了。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4b6fc1d7-2fbf-45ed-98a8-bc1fb39f3e2e",alt:"",loading:"lazy"})])],-1);function A(v,f){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[d,a("p",null,[e("编写一个shell脚本，暂时命名为："),a("a",u,[e("pg-localhost-backup.sh"),s(o)]),e("，内容如下：")]),h,a("ul",null,[a("li",null,[s(n,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:l(()=>[e("synchronized原理深度剖析")]),_:1})]),a("li",null,[s(n,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[e("微博关注关系如何实现")]),_:1})]),a("li",null,[s(n,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("弱引用示例")]),_:1})]),a("li",null,[s(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[e("Censys搜索引擎学习")]),_:1})]),a("li",null,[s(n,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("高可用通用方案")]),_:1})]),a("li",null,[s(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Docker笔记")]),_:1})]),a("li",null,[s(n,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:l(()=>[e("分布式事务Seata")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("分布式问题")]),_:1})]),a("li",null,[s(n,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:l(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),a("li",null,[s(n,{to:"/software/linux/Linux.html"},{default:l(()=>[e("Linux")]),_:1})]),a("li",null,[s(n,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),B,b,_,m])}const g=r(c,[["render",A],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
