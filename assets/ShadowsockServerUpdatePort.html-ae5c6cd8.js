import{_ as s,$ as r,a0 as u,a1 as t,a3 as a,a4 as l,a5 as n,a2 as o,w as d}from"./framework-b3a0f150.js";const i={},E=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),f=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：生平最讨厌溜须拍马的人，和他们在一起，显得老子很不会做人。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=be10e6fd-130f-4582-8aba-6368dcc43c5e",alt:"",loading:"lazy"})])],-1);function B(_,A){const e=d("RouterLink");return r(),u("div",null,[E,t("ul",null,[t("li",null,[a(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:l(()=>[o("synchronized原理深度剖析")]),_:1})]),t("li",null,[a(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[o("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[a(e,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:l(()=>[o("JetBrains IDE 全破解")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:l(()=>[o("IO相关")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[o("如何安装Google BBR")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[o("kafka")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:l(()=>[o("分库分表")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[o("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[a(e,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:l(()=>[o("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[o("简易版配置中心&初探原理")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:l(()=>[o("MySQL三大日志")]),_:1})]),t("li",null,[a(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[o("SpringCloud总体认识")]),_:1})])]),h,c,p,f])}const q=s(i,[["render",B],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
