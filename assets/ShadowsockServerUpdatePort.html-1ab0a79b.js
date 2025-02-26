import{_ as s,$ as l,a0 as n,a1 as t,a3 as a,a4 as r,a5 as u,a2 as e,w as E}from"./framework-b3a0f150.js";const d={},h=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),i=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),f=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：Connect Error (2002) Connection refused "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eb313b4f-44ba-4aca-815d-adaf1ea52763",alt:"",loading:"lazy"})])],-1);function A(B,_){const o=E("RouterLink");return l(),n("div",null,[h,t("ul",null,[t("li",null,[a(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:r(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[a(o,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:r(()=>[e("JetBrains IDE 全破解")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mq/kafka.html"},{default:r(()=>[e("kafka")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:r(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[a(o,{to:"/other/Spring%20RetryTemplate.html"},{default:r(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[a(o,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:r(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/gperftools.html"},{default:r(()=>[e("gperftools")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:r(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[a(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:r(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[a(o,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:r(()=>[e("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),t("li",null,[a(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:r(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[a(o,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[e("PostgreSQL高可用")]),_:1})])]),i,c,p,f])}const q=s(d,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
