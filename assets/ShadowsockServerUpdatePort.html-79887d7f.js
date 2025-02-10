import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as o,w as n}from"./framework-b3a0f150.js";const h={},i=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：脑子空 身体空 钱包空，离四大皆空不远了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=155fc98f-779b-4186-af5f-fbc57d0d84d1",alt:"",loading:"lazy"})])],-1);function f(_,B){const e=n("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[o("MyBatis")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[o("NGINX")]),_:1})]),t("li",null,[a(e,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:s(()=>[o("JetBrains IDE 全破解")]),_:1})]),t("li",null,[a(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[o("PostgreSQL定时备份")]),_:1})]),t("li",null,[a(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[o("MongoDB高可用")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[o("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[o("MySQL索引")]),_:1})]),t("li",null,[a(e,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[o("推荐几个适用小工具")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[o("CountDownLatch源码解读")]),_:1})]),t("li",null,[a(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[o("Hbase 总览")]),_:1})]),t("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[o("PostgreSQL高可用")]),_:1})])]),c,E,p,A])}const q=l(h,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
