import{_ as l,$ as r,a0 as d,a1 as e,a3 as t,a4 as o,a5 as n,a2 as s,w as i}from"./framework-b6ede5bc.js";const c={},u=n(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),m=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：在知识的海洋里，你竟然是一条淡水鱼。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2049392a-76e7-4dfe-8f36-c86471832c4d",alt:"",loading:"lazy"})])],-1);function f(_,b){const a=i("RouterLink");return r(),d("div",null,[u,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[s("MyBatis")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[s("MAT工具")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[s("Docker进行资源隔离")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[s("JVM参数设置")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[s("NGINX")]),_:1})]),e("li",null,[t(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[s("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[s("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[s("kafka")]),_:1})]),e("li",null,[t(a,{to:"/other/XXXXX.html"},{default:o(()=>[s("XXXXX")]),_:1})]),e("li",null,[t(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[t(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[s("raft协议")]),_:1})]),e("li",null,[t(a,{to:"/other/%E5%93%88%E5%93%88%E5%93%88%E5%93%88.html"},{default:o(()=>[s("哈哈哈哈")]),_:1})])]),h,v,m,E])}const k=l(c,[["render",f],["__file","ShadowsockServer配置.html.vue"]]);export{k as default};
