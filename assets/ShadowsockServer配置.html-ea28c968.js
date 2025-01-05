import{_ as l,$ as r,a0 as d,a1 as e,a3 as a,a4 as o,a5 as n,a2 as s,w as i}from"./framework-b3a0f150.js";const c={},u=n(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),B=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：蹦极很危险，绳子栓到腿上会肌肉拉伤，我一般都栓脖子上。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8db4dbb7-5fe4-42f6-bad3-de4860dd0351",alt:"",loading:"lazy"})])],-1);function m(b,_){const t=i("RouterLink");return r(),d("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[s("MyBatis")]),_:1})]),e("li",null,[a(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[s("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[s("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[s("Docker笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[s("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[s("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[s("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[a(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[s("Mermaid示例")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[s("Docker跨主机通信方案")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[s("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[a(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[s("BBR加速")]),_:1})])]),h,E,B,v])}const k=l(c,[["render",m],["__file","ShadowsockServer配置.html.vue"]]);export{k as default};
