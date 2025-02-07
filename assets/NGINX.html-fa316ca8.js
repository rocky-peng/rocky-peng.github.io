import{_ as l,$ as t,a0 as d,a1 as n,a3 as s,a4 as i,a5 as c,a2 as a,w as r}from"./framework-b3a0f150.js";const o={},u=c(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> NGINX</h1><h2 id="感性体验下负载均衡配置" tabindex="-1"><a class="header-anchor" href="#感性体验下负载均衡配置" aria-hidden="true">#</a> 感性体验下负载均衡配置</h2><ol><li>本地启动两个jetty</li></ol><p>要达到的效果：通过nginx开启80端口，在浏览通过localhost来访问jetttyA 和 jettyB 提供的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jettyA   localhsot:6000    首页输出:6000
jettyB   localhsot:7000    首页输出:7000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进入nginx配置文件目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079994607.png" alt="" tabindex="0" loading="lazy"><figcaption>WeChatad950e5ad0c63b5869efc740570cfa47</figcaption></figure><ol start="3"><li>修改 nginx.conf</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在http节点下新增如下配置：

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.com/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.com/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),m=n("hr",null,null,-1),h=n("hr",null,null,-1),p=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),a("：老说找不到理想中的另一半，问问自己，成为理想中的自己了吗？ "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=32b30c89-d11e-4bb9-8f46-8aff67dd864a",alt:"",loading:"lazy"})])],-1);function b(E,g){const e=r("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[s(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[a("Redis笔记")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[a("Btrace入门")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[a("测试两台服务器间的网速")]),_:1})]),n("li",null,[s(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[a("批量修改git历史记录中的用户名和邮箱")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:i(()=>[a("InnoDB存储引擎")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:i(()=>[a("MySQL索引")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[a("Javassist整理")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:i(()=>[a("SQL优化")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:i(()=>[a("分布式事务Seata")]),_:1})]),n("li",null,[s(e,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[a("Java面试基础")]),_:1})]),n("li",null,[s(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[a("Mermaid示例")]),_:1})])]),v,m,h,p])}const _=l(o,[["render",b],["__file","NGINX.html.vue"]]);export{_ as default};
