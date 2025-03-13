import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as n,a2 as e,w as h}from"./framework-b3a0f150.js";const i={},d=n('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),E=t("hr",null,null,-1),_=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：真正的勇士，敢于直面银行卡上的余额，敢于正视磅秤上的数字。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function f(B,m){const o=h("RouterLink");return r(),u("div",null,[d,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:s(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),t("li",null,[a(o,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:s(()=>[e("JetBrains IDE 全破解")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("数据同步方案")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[a(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[e("Paxos算法")]),_:1})]),t("li",null,[a(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[a(o,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:s(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("分布式问题")]),_:1})]),t("li",null,[a(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),c,p,E,_])}const q=l(i,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
