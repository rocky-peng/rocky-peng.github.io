import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as n,a2 as o,w as d}from"./framework-b3a0f150.js";const h={},i=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),f=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：被忽视是因为，自己还没有优秀到，不容忽视的地步。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function _(A,B){const e=d("RouterLink");return r(),u("div",null,[i,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:s(()=>[o("KVM 虚拟机安装")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:s(()=>[o("JVM垃圾收集器")]),_:1})]),t("li",null,[a(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[o("Hadoop 一")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[o("线上FullGC频繁的排查")]),_:1})]),t("li",null,[a(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[o("Paxos算法")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[o("异地多活")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[o("AQS源码解读")]),_:1})]),t("li",null,[a(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:s(()=>[o("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:s(()=>[o("前后端常用技术")]),_:1})]),t("li",null,[a(e,{to:"/software/raft/sofajraft.html"},{default:s(()=>[o("sofajraft")]),_:1})]),t("li",null,[a(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[o("MySQL数据迁移到PGSQL")]),_:1})]),t("li",null,[a(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[o("WebSocket SpringBoot Demo")]),_:1})])]),E,c,p,f])}const q=l(h,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
