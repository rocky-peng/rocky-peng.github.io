import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as n,a2 as o,w as d}from"./framework-6821ba0c.js";const i={},h=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：只要努力的时间足够长，搞不好，你还可以失败的更彻底。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d47b4d93-1c4b-4e25-b2e7-1773327d09a9",alt:"",loading:"lazy"})])],-1);function f(_,m){const e=d("RouterLink");return r(),u("div",null,[h,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[o("各种网关性能测试")]),_:1})]),t("li",null,[a(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:s(()=>[o("Spring框架源码关键点")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[o("弱引用示例")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/gperftools.html"},{default:s(()=>[o("gperftools")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[o("制作KVM ES镜像文件")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[o("JVM杂项")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:s(()=>[o("Markdown软件比对")]),_:1})]),t("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[o("PostgreSQL高可用")]),_:1})]),t("li",null,[a(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[o("WebSocket SpringBoot Demo")]),_:1})]),t("li",null,[a(e,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:s(()=>[o("Linux dev shm目录")]),_:1})]),t("li",null,[a(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[o("K8S常用命令")]),_:1})])]),c,E,p,B])}const q=l(i,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
