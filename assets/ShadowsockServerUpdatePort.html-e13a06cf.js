import{_ as a,$ as r,a0 as n,a1 as o,a3 as s,a4 as l,a5 as u,a2 as t,w as d}from"./framework-b3a0f150.js";const h={},i=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=o("p",null,[o("br"),o("br"),o("br"),o("br"),o("br"),o("br")],-1),p=o("hr",null,null,-1),E=o("hr",null,null,-1),_=o("ul",null,[o("li",null,[o("strong",null,"随机毒鸡汤"),t("：人家解衣服，那叫轻解罗裳，而你是给猪松绑。 "),o("br"),o("br"),o("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function f(B,m){const e=d("RouterLink");return r(),n("div",null,[i,o("ul",null,[o("li",null,[s(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[t("Notion笔记定时备份")]),_:1})]),o("li",null,[s(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[t("Oh My ZSH")]),_:1})]),o("li",null,[s(e,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[t("各种网关性能测试")]),_:1})]),o("li",null,[s(e,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:l(()=>[t("Docker进行资源隔离")]),_:1})]),o("li",null,[s(e,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[t("NGINX")]),_:1})]),o("li",null,[s(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[t("Spring框架源码关键点")]),_:1})]),o("li",null,[s(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[t("如何安装Google BBR")]),_:1})]),o("li",null,[s(e,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[t("Cornell Notes System")]),_:1})]),o("li",null,[s(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:l(()=>[t("InnoDB存储引擎")]),_:1})]),o("li",null,[s(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[t("Docker笔记")]),_:1})]),o("li",null,[s(e,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[t("ES杂项")]),_:1})]),o("li",null,[s(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[t("SpringCloud总体认识")]),_:1})])]),c,p,E,_])}const A=a(h,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{A as default};
