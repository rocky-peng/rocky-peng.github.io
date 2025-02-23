import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as e,w as E}from"./framework-b3a0f150.js";const h={},i=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),n=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：肺炎带走春节，坠机带走青春。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=38fca4b9-8458-434d-a058-5ee19eab4eba",alt:"",loading:"lazy"})])],-1);function A(_,f){const o=E("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[a(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[a(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[e("Hadoop 一")]),_:1})]),t("li",null,[a(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[e("istio基础知识")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("数据同步方案")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[e("制作KVM ES镜像文件")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[e("MySQL索引")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[e("杂记")]),_:1})]),t("li",null,[a(o,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[e("Hbase 总览")]),_:1})]),t("li",null,[a(o,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:s(()=>[e("随机图片在线接口")]),_:1})])]),n,c,p,B])}const q=l(h,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
