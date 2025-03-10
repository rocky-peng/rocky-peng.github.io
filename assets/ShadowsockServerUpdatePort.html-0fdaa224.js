import{_ as l,$ as r,a0 as n,a1 as t,a3 as a,a4 as s,a5 as u,a2 as e,w as d}from"./framework-b3a0f150.js";const i={},h=u('<p>#!/usr/bin/env bash</p><p>sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF</p><p>#yum install python-setuptools &amp;&amp; easy_install pip</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p>#pip install shadowsocks</p><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><p>#sudo mkdir /etc/shadowsocks</p><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><p>echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:$2,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt; /etc/shadowsocks/shadowsocks.json</p><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><p>ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</p><p>EOF</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',14),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),E=t("hr",null,null,-1),p=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：你掏心掏肺，就要做好撕心裂肺的准备。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function _(f,m){const o=d("RouterLink");return r(),n("div",null,[h,t("ul",null,[t("li",null,[a(o,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:s(()=>[e("记一次内存泄漏")]),_:1})]),t("li",null,[a(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:s(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[e("来个JVM冷知识")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[e("Markdown Mermaid画图实例")]),_:1})]),t("li",null,[a(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[a(o,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("分布式问题")]),_:1})]),t("li",null,[a(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[e("杂记")]),_:1})])]),c,E,p,B])}const q=l(i,[["render",_],["__file","ShadowsockServerUpdatePort.html.vue"]]);export{q as default};
