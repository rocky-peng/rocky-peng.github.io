import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as i,a2 as a,w as c}from"./framework-58787b1c.js";const d={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),_=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：美食怎么会是罪恶，只有懒惰才是。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a29be80b-b379-41b1-a7ee-6bc1c779553f",alt:"",loading:"lazy"})])],-1);function f(B,k){const t=c("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[s(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("Git笔记")]),_:1})]),e("li",null,[s(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:n(()=>[a("KVM 虚拟机安装")]),_:1})]),e("li",null,[s(t,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[a("KVM方式集群部署ES")]),_:1})]),e("li",null,[s(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[a("Redis高可用")]),_:1})]),e("li",null,[s(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[s(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("Docker笔记")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[s(t,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:n(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[s(t,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[a("RocketMQ")]),_:1})])]),p,E,_,h])}const A=l(d,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{A as default};
