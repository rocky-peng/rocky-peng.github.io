import{_ as l,$ as r,a0 as n,a1 as e,a3 as a,a4 as o,a5 as d,a2 as s,w as i}from"./framework-7f25d394.js";const u={},c=d(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：戴帽子不是为了凹造型，只是因为帽子下，藏了一颗几天没洗的头。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7bc512a7-1a8f-4f4e-bace-314e4584f6a5",alt:"",loading:"lazy"})])],-1);function v(A,_){const t=i("RouterLink");return r(),n("div",null,[c,e("ul",null,[e("li",null,[a(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[s("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[a(t,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[s("JDK命令行工具")]),_:1})]),e("li",null,[a(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[s("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[s("ShadowsockServer")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[s("乱七八糟的笔记")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[s("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[s("如何安装Google BBR")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[s("推荐几个适用小工具")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[s("前后端常用技术")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[s("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[a(t,{to:"/intro.html"},{default:o(()=>[s("intro")]),_:1})]),e("li",null,[a(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[s("K8S常用命令")]),_:1})])]),h,E,B,m])}const b=l(u,[["render",v],["__file","ShadowsockServer配置.html.vue"]]);export{b as default};
