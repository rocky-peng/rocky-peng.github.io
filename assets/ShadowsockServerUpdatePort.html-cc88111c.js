import{_ as s,$ as r,a0 as u,a1 as t,a3 as a,a4 as l,a5 as E,a2 as e,w as d}from"./framework-b3a0f150.js";const n={},i=E('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：在最美好的年华，没有遇到爱情，只遇到了疫情。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c9b9684e-dc4a-43fe-92a9-57a381b4aa55",alt:"",loading:"lazy"})])],-1);function B(_,f){const o=d("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[e("记一次内存泄漏")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[e("Btrace入门")]),_:1})]),t("li",null,[a(o,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[a(o,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[a(o,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:l(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),t("li",null,[a(o,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:l(()=>[e("SQL优化")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[a(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[e("K8S常用命令")]),_:1})])]),h,c,p,A])}const q=s(n,[["render",B],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
