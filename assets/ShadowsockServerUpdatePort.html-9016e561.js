import{_ as s,$ as r,a0 as u,a1 as t,a3 as a,a4 as l,a5 as E,a2 as o,w as n}from"./framework-16d560c6.js";const d={},i=E('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：听成绩一定要用右耳听，因为左耳靠近心脏，可能会悴死。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=91173657-aac6-4662-b7f0-8cffa3bfda61",alt:"",loading:"lazy"})])],-1);function A(f,_){const e=n("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[o("Notion笔记定时备份")]),_:1})]),t("li",null,[a(e,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[o("常见问题")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[o("JVM参数设置")]),_:1})]),t("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[o("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:l(()=>[o("常用队列")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[o("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:l(()=>[o("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[a(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:l(()=>[o("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[o("JVM杂项")]),_:1})]),t("li",null,[a(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[o("SpringCloud总体认识")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[o("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[a(e,{to:"/intro.html"},{default:l(()=>[o("intro")]),_:1})])]),h,c,p,B])}const q=s(d,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
