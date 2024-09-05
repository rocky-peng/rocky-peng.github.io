import{_ as l,$ as n,a0 as d,a1 as e,a3 as o,a4 as a,a5 as r,a2 as s,w as i}from"./framework-b6ede5bc.js";const u={},c=r(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),m=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：世间很多事随着时间流逝，终究会变好的，比如你的胖终会变成好胖。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=dc372982-1962-43b0-9ac3-5e9ec4890209",alt:"",loading:"lazy"})])],-1);function _(b,A){const t=i("RouterLink");return n(),d("div",null,[c,e("ul",null,[e("li",null,[o(t,{to:"/other/AAAAAAA.html"},{default:a(()=>[s("AAAAAAA")]),_:1})]),e("li",null,[o(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[s("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[s("测试两台服务器间的网速")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[s("KVM方式集群部署ES")]),_:1})]),e("li",null,[o(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[s("Hadoop 一")]),_:1})]),e("li",null,[o(t,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[s("Cornell Notes System")]),_:1})]),e("li",null,[o(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[o(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[s("RocketMQ")]),_:1})]),e("li",null,[o(t,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[s("GitHub Workflow突然报错")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[s("BBR加速")]),_:1})]),e("li",null,[o(t,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[s("Hbase 总览")]),_:1})]),e("li",null,[o(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[s("Linux dev shm目录")]),_:1})])]),h,E,m,v])}const f=l(u,[["render",_],["__file","ShadowsockServer配置.html.vue"]]);export{f as default};
