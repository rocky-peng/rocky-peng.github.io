import{_ as s,$ as r,a0 as u,a1 as t,a3 as a,a4 as l,a5 as n,a2 as e,w as d}from"./framework-b3a0f150.js";const h={},i=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),_=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：试着去了解那些你讨厌的人，你会发现，真是越看越讨厌。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=3ced32ee-9a17-4cd8-9a32-c7365d2bfeb2",alt:"",loading:"lazy"})])],-1);function A(m,f){const o=d("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Git笔记")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[a(o,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[a(o,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[a(o,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[e("MAC CMS")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:l(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[a(o,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Docker笔记")]),_:1})]),t("li",null,[a(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:l(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[a(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:l(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[a(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[a(o,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[e("Hbase 总览")]),_:1})])]),c,E,p,_])}const q=s(h,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
