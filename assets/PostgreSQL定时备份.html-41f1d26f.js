import{_ as r,$ as i,a0 as p,a1 as a,a2 as e,a3 as s,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const d={},u=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),e(" PostgreSQL定时备份")],-1),E={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),m=a("hr",null,null,-1),B=a("hr",null,null,-1),v=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：待你长发及腰，记得拉屎要撩。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function _(A,f){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),p("div",null,[u,a("p",null,[e("编写一个shell脚本，暂时命名为："),a("a",E,[e("pg-localhost-backup.sh"),s(o)]),e("，内容如下：")]),h,a("ul",null,[a("li",null,[s(n,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("MAT工具")]),_:1})]),a("li",null,[s(n,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),a("li",null,[s(n,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[e("随记")]),_:1})]),a("li",null,[s(n,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[s(n,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[e("index方法压力测试记录")]),_:1})]),a("li",null,[s(n,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:l(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:l(()=>[e("异地多活")]),_:1})]),a("li",null,[s(n,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[s(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:l(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),a("li",null,[s(n,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[e("SpringCloud总体认识")]),_:1})])]),b,m,B,v])}const g=r(d,[["render",_],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
