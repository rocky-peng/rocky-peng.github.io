import{_ as l,$ as t,a0 as d,a1 as n,a3 as s,a4 as i,a5 as o,a2 as e,w as c}from"./framework-b3a0f150.js";const r={},u=o(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> NGINX</h1><h2 id="感性体验下负载均衡配置" tabindex="-1"><a class="header-anchor" href="#感性体验下负载均衡配置" aria-hidden="true">#</a> 感性体验下负载均衡配置</h2><ol><li>本地启动两个jetty</li></ol><p>要达到的效果：通过nginx开启80端口，在浏览通过localhost来访问jetttyA 和 jettyB 提供的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jettyA   localhsot:6000    首页输出:6000
jettyB   localhsot:7000    首页输出:7000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进入nginx配置文件目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629079994607.png" alt="" tabindex="0" loading="lazy"><figcaption>WeChatad950e5ad0c63b5869efc740570cfa47</figcaption></figure><ol start="3"><li>修改 nginx.conf</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在http节点下新增如下配置：

upstream lyzc <span class="token punctuation">{</span>
	  ip_hash<span class="token punctuation">;</span>
	  server localhost:6000<span class="token punctuation">;</span>
	  server localhost:7000<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 这个配置即为负载均衡的配置，但现在还没有使用。
 
 lyzc ：对集群的命名，可以为域名，名称自己确定
 ip_hash <span class="token builtin class-name">:</span>  负载均衡算法，可以不写（不写的情况默认为轮询算法）
 server <span class="token builtin class-name">:</span> 配置提供服务的机器节点信息，可以任意多个
 
 
 然后在server节点下，修改或添加location的配置如下：
 
 location / <span class="token punctuation">{</span>
		  proxy_pass http://lyzc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx

配置文件在  /etc/nginx目录

<span class="token builtin class-name">cd</span> /etc/nginx

<span class="token function">cp</span> nginx.conf  nginx.conf.bak

修改 nginx.conf 文件：参考其他配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.top/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.top/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),h=n("hr",null,null,-1),p=n("hr",null,null,-1),b=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),e("：大人只分利弊，小孩才分对错。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=3f13149f-6462-4ee6-862e-9ea0b8faba4e",alt:"",loading:"lazy"})])],-1);function m(E,g){const a=c("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[s(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:i(()=>[e("记一次内存泄漏")]),_:1})]),n("li",null,[s(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[e("MongoDB高可用")]),_:1})]),n("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),n("li",null,[s(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:i(()=>[e("Centos离线安装Docker")]),_:1})]),n("li",null,[s(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),n("li",null,[s(a,{to:"/other/JetBrains-License-Server.html"},{default:i(()=>[e("JetBrains-License-Server")]),_:1})]),n("li",null,[s(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:i(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),n("li",null,[s(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:i(()=>[e("前端axios下载csv文件乱码")]),_:1})]),n("li",null,[s(a,{to:"/software/raft/sofajraft.html"},{default:i(()=>[e("sofajraft")]),_:1})]),n("li",null,[s(a,{to:"/software/linux/Linux.html"},{default:i(()=>[e("Linux")]),_:1})]),n("li",null,[s(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[e("表单重复提交解决方案")]),_:1})]),n("li",null,[s(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[e("Hbase 总览")]),_:1})])]),v,h,p,b])}const B=l(r,[["render",m],["__file","NGINX.html.vue"]]);export{B as default};
