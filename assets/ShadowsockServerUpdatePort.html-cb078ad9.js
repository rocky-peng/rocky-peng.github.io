import{_ as l,$ as r,a0 as u,a1 as t,a3 as s,a4 as a,a5 as h,a2 as e,w as n}from"./framework-b3a0f150.js";const i={},d=h('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),B=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：当别人向你提出意见时，一定要认真记下来，对你有意见的都有谁。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=11263989-d474-444f-abe8-52db586fe2f4",alt:"",loading:"lazy"})])],-1);function A(_,f){const o=n("RouterLink");return r(),u("div",null,[d,t("ul",null,[t("li",null,[s(o,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[s(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[s(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[s(o,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[e("NGINX")]),_:1})]),t("li",null,[s(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[s(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[s(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[e("Arthas使用记录")]),_:1})]),t("li",null,[s(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[s(o,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[s(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[s(o,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[s(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),E,c,B,p])}const q=l(i,[["render",A],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
