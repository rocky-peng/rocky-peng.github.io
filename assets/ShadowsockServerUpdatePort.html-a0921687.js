import{_ as r,$ as l,a0 as u,a1 as o,a3 as a,a4 as s,a5 as h,a2 as t,w as n}from"./framework-3895bb24.js";const d={},i=h('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=o("p",null,[o("br"),o("br"),o("br"),o("br"),o("br"),o("br")],-1),p=o("hr",null,null,-1),E=o("hr",null,null,-1),_=o("ul",null,[o("li",null,[o("strong",null,"随机毒鸡汤"),t("：单身狗冬天就不要出去了，要是摔倒了，会变成旺旺碎冰冰的。 "),o("br"),o("br"),o("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=3ad8f656-8f96-4369-95a3-d0b803010bc0",alt:"",loading:"lazy"})])],-1);function B(f,q){const e=n("RouterLink");return l(),u("div",null,[i,o("ul",null,[o("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Notion笔记定时备份")]),_:1})]),o("li",null,[a(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[t("如何安装Google BBR")]),_:1})]),o("li",null,[a(e,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("数据同步方案")]),_:1})]),o("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("ShadowsockServer配置")]),_:1})]),o("li",null,[a(e,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),o("li",null,[a(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),o("li",null,[a(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[t("BBR加速")]),_:1})]),o("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:s(()=>[t("Linux")]),_:1})])]),c,p,E,_])}const m=r(d,[["render",B],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{m as default};
