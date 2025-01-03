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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.com/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.com/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),p=n("hr",null,null,-1),h=n("hr",null,null,-1),m=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),a("：什么叫不自量力？不要自学量子力学。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e5cccffe-eb20-45c9-96fc-e16401c11ce4",alt:"",loading:"lazy"})])],-1);function E(b,g){const e=r("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[s(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:i(()=>[a("KVM 虚拟机安装")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[a("MySQL常用命令")]),_:1})]),n("li",null,[s(e,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:i(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),n("li",null,[s(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:i(()=>[a("Spring框架源码关键点")]),_:1})]),n("li",null,[s(e,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:i(()=>[a("随记")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:i(()=>[a("正则表达式匹配第几个符号问题")]),_:1})]),n("li",null,[s(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[a("istio基础知识")]),_:1})]),n("li",null,[s(e,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:i(()=>[a("常用队列")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/gperftools.html"},{default:i(()=>[a("gperftools")]),_:1})]),n("li",null,[s(e,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:i(()=>[a("JVM异常处理")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:i(()=>[a("前后端常用技术")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:i(()=>[a("BBR加速")]),_:1})])]),v,p,h,m])}const A=l(o,[["render",E],["__file","NGINX.html.vue"]]);export{A as default};
