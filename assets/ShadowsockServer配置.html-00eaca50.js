import{_ as l,$ as d,a0 as r,a1 as e,a3 as a,a4 as o,a5 as n,a2 as s,w as i}from"./framework-827a3556.js";const c={},u=n(`<h1 id="临时用vpn的办法" tabindex="-1"><a class="header-anchor" href="#临时用vpn的办法" aria-hidden="true">#</a> 临时用vpn的办法：</h1><h1 id="腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" tabindex="-1"><a class="header-anchor" href="#腾讯云-竞价实例-中国香港-流量计费-100m-两三个小时才几毛钱" aria-hidden="true">#</a> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sshpass -p &quot;yourpassword&quot; ssh root@$1 &lt;&lt; EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h2><h1 id="vim-etc-shadowsocks-shadowsocks-json" tabindex="-1"><a class="header-anchor" href="#vim-etc-shadowsocks-shadowsocks-json" aria-hidden="true">#</a> vim /etc/shadowsocks/shadowsocks.json</h1><h1 id="ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" tabindex="-1"><a class="header-anchor" href="#ssserver-c-etc-shadowsocks-shadowsocks-json-d-restart" aria-hidden="true">#</a> ssserver -c /etc/shadowsocks/shadowsocks.json -d restart</h1><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：明知山有虎，那就不要去明知山！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9aeb8c50-f475-45cd-8d69-3564b46d6919",alt:"",loading:"lazy"})])],-1);function B(v,f){const t=i("RouterLink");return d(),r("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[s("Oh My ZSH")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[s("MAT工具")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[s("记一次内存泄漏")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[s("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[a(t,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[s("MySQL高可用")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:o(()=>[s("微博关注关系如何实现")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[s("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[s("Docker笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[s("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[s("Git Merge 、Rebase")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[s("Docker跨主机通信方案")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[s("表单重复提交解决方案")]),_:1})])]),h,E,A,m])}const b=l(c,[["render",B],["__file","ShadowsockServer配置.html.vue"]]);export{b as default};
