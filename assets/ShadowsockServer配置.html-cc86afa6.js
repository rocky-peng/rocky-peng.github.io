import{_ as l,$ as n,a0 as r,a1 as e,a3 as a,a4 as o,a5 as d,a2 as s,w as i}from"./framework-16d560c6.js";const u={},E=d(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),A=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：今年圣诞推迟14天，因为圣诞老人过来要隔离。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=49e90bd3-40fc-4a38-8ae2-c92c14ae3693",alt:"",loading:"lazy"})])],-1);function m(B,_){const t=i("RouterLink");return n(),r("div",null,[E,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[s("MAT工具")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[s("Oh My ZSH")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[s("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[s("KVM 虚拟机安装")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[s("乱七八糟的笔记")]),_:1})]),e("li",null,[a(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[s("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:o(()=>[s("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[a(t,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:o(()=>[s("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[a(t,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[s("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[s("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[a(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[s("MySQL数据迁移到PGSQL")]),_:1})])]),c,h,A,v])}const p=l(u,[["render",m],["__file","ShadowsockServer配置.html.vue"]]);export{p as default};
