import{_ as s,$ as r,a0 as n,a1 as t,a3 as a,a4 as l,a5 as h,a2 as o,w as u}from"./framework-b3a0f150.js";const d={},E=h('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),i=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：公主才有公主病，你那是，野鸡情绪失控综合症。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function B(_,m){const e=u("RouterLink");return r(),n("div",null,[E,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[o("Notion笔记定时备份")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%9C%A8%E6%B2%A1%E6%9C%89%20telnet%20%E5%92%8C%20nc%20%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%88%A4%E6%96%AD%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E9%80%9A%EF%BC%9F.html"},{default:l(()=>[o("在没有 telnet 和 nc 的世界里，如何优雅地判断端口是否通？")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:l(()=>[o("synchronized原理深度剖析")]),_:1})]),t("li",null,[a(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[o("Hadoop 一")]),_:1})]),t("li",null,[a(e,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[o("Spring RetryTemplate")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[o("如何安装Google BBR")]),_:1})]),t("li",null,[a(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[o("Arthas使用记录")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[o("AQS源码解读")]),_:1})]),t("li",null,[a(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[o("Git Merge 、Rebase")]),_:1})]),t("li",null,[a(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[o("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[a(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[o("Nginx的双向认证配置")]),_:1})])]),i,c,p,A])}const q=s(d,[["render",B],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
