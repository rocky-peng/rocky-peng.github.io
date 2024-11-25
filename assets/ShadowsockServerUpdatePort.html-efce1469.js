import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as n,a2 as e,w as h}from"./framework-6821ba0c.js";const i={},d=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：如果人脑和电脑实现对接，我脑子里的钱，就能转进银行账户了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b470ca2f-14b3-4b67-b5b8-5e84e3508bb7",alt:"",loading:"lazy"})])],-1);function f(_,B){const o=h("RouterLink");return r(),u("div",null,[d,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[a(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:s(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[a(o,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[e("IO相关")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[a(o,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[a(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[a(o,{to:"/software/raft/sofajraft.html"},{default:s(()=>[e("sofajraft")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("分布式问题")]),_:1})]),t("li",null,[a(o,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("PostgreSQL高可用")]),_:1})])]),E,c,p,A])}const q=l(i,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
