import{_ as l,$ as r,a0 as n,a1 as t,a3 as a,a4 as s,a5 as u,a2 as o,w as h}from"./framework-b3a0f150.js";const d={},i=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：我真的好怕别人怀疑我，因为他们都怀疑对了。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function _(f,B){const e=h("RouterLink");return r(),n("div",null,[i,t("ul",null,[t("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[o("Notion笔记定时备份")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[o("MAT工具")]),_:1})]),t("li",null,[a(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[o("MySQL高可用")]),_:1})]),t("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[o("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[o("MongoDB高可用")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[o("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[o("Docker笔记")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[o("MySQL三大日志")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:s(()=>[o("Markdown软件比对")]),_:1})]),t("li",null,[a(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[o("Nginx的双向认证配置")]),_:1})]),t("li",null,[a(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[o("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[a(e,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[o("https和http混用解决办法")]),_:1})])]),c,E,p,A])}const q=l(d,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
