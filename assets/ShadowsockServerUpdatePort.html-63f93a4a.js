import{_ as l,$ as r,a0 as d,a1 as o,a3 as a,a4 as s,a5 as u,a2 as t,w as n}from"./framework-b3a0f150.js";const h={},c=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),i=o("p",null,[o("br"),o("br"),o("br"),o("br"),o("br"),o("br")],-1),E=o("hr",null,null,-1),p=o("hr",null,null,-1),B=o("ul",null,[o("li",null,[o("strong",null,"随机毒鸡汤"),t("：生活有两大误区，一是活给别人看，二是看别人活。 "),o("br"),o("br"),o("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function _(f,A){const e=n("RouterLink");return r(),d("div",null,[c,o("ul",null,[o("li",null,[a(e,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[t("MyBatis")]),_:1})]),o("li",null,[a(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:s(()=>[t("Oh My ZSH")]),_:1})]),o("li",null,[a(e,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:s(()=>[t("JetBrains IDE 全破解")]),_:1})]),o("li",null,[a(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("PostgreSQL定时备份")]),_:1})]),o("li",null,[a(e,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[t("Markdown Mermaid画图实例")]),_:1})]),o("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[t("Docker笔记")]),_:1})]),o("li",null,[a(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:s(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),o("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[t("AQS源码解读")]),_:1})]),o("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("ShadowsockServer配置")]),_:1})]),o("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[t("分布式事务Seata")]),_:1})]),o("li",null,[a(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:s(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),o("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("PostgreSQL高可用")]),_:1})])]),i,E,p,B])}const w=l(h,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{w as default};
