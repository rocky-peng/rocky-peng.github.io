import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as e,w as h}from"./framework-b3a0f150.js";const n={},i=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),E=t("hr",null,null,-1),f=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：表面孤獨的人不是真的孤獨，內心強大的人，才是真的孤獨。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b857277d-b346-4bf1-aa54-4911156e52ca",alt:"",loading:"lazy"})])],-1);function _(B,m){const o=h("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[e("来个JVM冷知识")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:s(()=>[e("Btrace入门")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[e("弱引用示例")]),_:1})]),t("li",null,[a(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[a(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:s(()=>[e("ShadowsockServer")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[e("MySQL索引")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/gperftools.html"},{default:s(()=>[e("gperftools")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:s(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[a(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[a(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),t("li",null,[a(o,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:s(()=>[e("随机图片在线接口")]),_:1})])]),c,p,E,f])}const w=l(n,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{w as default};
