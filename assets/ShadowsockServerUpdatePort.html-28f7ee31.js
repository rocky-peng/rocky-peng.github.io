import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as e,w as n}from"./framework-b7a22294.js";const h={},i=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),B=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：你只会循规蹈矩，世界哪敢给你惊喜。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=19e6a357-0581-4f01-8a20-a18a02891e4c",alt:"",loading:"lazy"})])],-1);function _(f,m){const o=n("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(o,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:s(()=>[e("synchronized原理深度剖析")]),_:1})]),t("li",null,[a(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:s(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:s(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[a(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[e("异地多活")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[e("MySQL索引")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[a(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[a(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[e("前端axios下载csv文件乱码")]),_:1})])]),E,c,B,p])}const q=l(h,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
