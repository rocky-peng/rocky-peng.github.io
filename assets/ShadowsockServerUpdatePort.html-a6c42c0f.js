import{_ as s,$ as r,a0 as d,a1 as t,a3 as a,a4 as l,a5 as u,a2 as e,w as h}from"./framework-58787b1c.js";const n={},i=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),f=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：贫贱不能移的意思是，穷就好好在家待着，哪儿也别去。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=5411f84a-b779-463b-becd-a6a07e2a3ef8",alt:"",loading:"lazy"})])],-1);function _(m,w){const o=h("RouterLink");return r(),d("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[e("记一次内存泄漏")]),_:1})]),t("li",null,[a(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[e("NGINX")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[a(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[e("kafka")]),_:1})]),t("li",null,[a(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[e("ShadowsockServer")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[a(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:l(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[e("RocketMQ")]),_:1})])]),c,E,p,f])}const q=s(n,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
