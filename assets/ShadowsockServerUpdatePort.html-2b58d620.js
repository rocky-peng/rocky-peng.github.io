import{_ as l,$ as r,a0 as u,a1 as t,a3 as a,a4 as s,a5 as d,a2 as e,w as i}from"./framework-b3a0f150.js";const n={},h=d('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),p=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：曾经是梦想家，现在没了梦，只剩下想家。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=393ef26a-8657-4e20-963c-2bebb86c958f",alt:"",loading:"lazy"})])],-1);function f(_,m){const o=i("RouterLink");return r(),u("div",null,[h,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("Git笔记")]),_:1})]),t("li",null,[a(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("常见问题")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:s(()=>[e("KVM方式集群部署ES")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[e("分库分表")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:s(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[a(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[e("Paxos算法")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[e("制作KVM ES镜像文件")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[e("异地多活")]),_:1})]),t("li",null,[a(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[a(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[e("K8S常用命令")]),_:1})])]),E,c,p,B])}const q=l(n,[["render",f],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
