import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as o,w as h}from"./framework-b6ede5bc.js";const n={},c=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),i=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),_=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：经过多年的打拼，虽然没有什么收获，但你有债呀！ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7b672d3a-057a-47a8-af6d-9d330189ce6e",alt:"",loading:"lazy"})])],-1);function A(f,m){const e=h("RouterLink");return r(),u("div",null,[c,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[o("MAT工具")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[o("MySQL杂项")]),_:1})]),t("li",null,[a(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[o("来个JVM冷知识")]),_:1})]),t("li",null,[a(e,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[o("Cornell Notes System")]),_:1})]),t("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:s(()=>[o("ShadowsockServer")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[o("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[a(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[o("Paxos算法")]),_:1})]),t("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[o("Docker笔记")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[o("JVM杂项")]),_:1})]),t("li",null,[a(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:s(()=>[o("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:s(()=>[o("Java面试基础")]),_:1})]),t("li",null,[a(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[o("K8S常用命令")]),_:1})])]),i,E,p,_])}const B=l(n,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{B as default};
