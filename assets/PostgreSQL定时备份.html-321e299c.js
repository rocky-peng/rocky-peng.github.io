import{_ as r,$ as i,a0 as E,a1 as a,a2 as s,a3 as e,a4 as l,a5 as c,w as t}from"./framework-b3a0f150.js";const p={},d=a("h1",{id:"postgresql定时备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#postgresql定时备份","aria-hidden":"true"},"#"),s(" PostgreSQL定时备份")],-1),u={href:"http://pg-localhost-backup.sh",target:"_blank",rel:"noopener noreferrer"},B=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">backdir</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token assign-left variable">currTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d-%H%M%S&#39;</span><span class="token variable">\`</span></span>

/www/server/pgsql/bin/pg_dump/pg_dump <span class="token parameter variable">-U</span> <span class="token variable">$username</span> <span class="token variable">$database</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">$backdir</span>/<span class="token variable">$username</span>-<span class="token variable">$database</span>-<span class="token variable">$currTime</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：该命令是备份单个数据库，并将备份输出的<strong>文本内容</strong>使用gzip进行压缩存储</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),b=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),_=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：比起忽冷忽热，还是孤独让人踏实。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e169da7a-f3e7-40f5-9beb-cf0fd38e5878",alt:"",loading:"lazy"})])],-1);function v(m,f){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),E("div",null,[d,a("p",null,[s("编写一个shell脚本，暂时命名为："),a("a",u,[s("pg-localhost-backup.sh"),e(o)]),s("，内容如下：")]),B,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[s("Btrace入门")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[s("来个JVM冷知识")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[s("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[e(n,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[s("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),a("li",null,[e(n,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[s("PGSQL GIN索引“失效”")]),_:1})]),a("li",null,[e(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[s("Redis高可用")]),_:1})]),a("li",null,[e(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[s("Paxos算法")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[s("index方法压力测试记录")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:l(()=>[s("制作KVM ES镜像文件")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[s("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[e(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[e(n,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:l(()=>[s("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),b,h,_,A])}const g=r(p,[["render",v],["__file","PostgreSQL定时备份.html.vue"]]);export{g as default};
