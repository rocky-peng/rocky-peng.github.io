import{_ as i,$ as t,a0 as d,a1 as n,a3 as l,a4 as s,a5 as c,a2 as a,w as o}from"./framework-7a325de9.js";const r={},u=c(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> NGINX</h1><h2 id="感性体验下负载均衡配置" tabindex="-1"><a class="header-anchor" href="#感性体验下负载均衡配置" aria-hidden="true">#</a> 感性体验下负载均衡配置</h2><ol><li>本地启动两个jetty</li></ol><p>要达到的效果：通过nginx开启80端口，在浏览通过localhost来访问jetttyA 和 jettyB 提供的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jettyA   localhsot:6000    首页输出:6000
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.com/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.com/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),E=n("hr",null,null,-1),m=n("hr",null,null,-1),h=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),a("：你记得关于TA所有的事，但就是记不住，TA不喜欢你​​​​。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=81cd778c-7088-4edc-a920-93b3aaad577e",alt:"",loading:"lazy"})])],-1);function p(b,B){const e=o("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[l(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("Notion笔记定时备份")]),_:1})]),n("li",null,[l(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[a("MySQL常用命令")]),_:1})]),n("li",null,[l(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[a("乱七八糟的笔记")]),_:1})]),n("li",null,[l(e,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[a("Cornell Notes System")]),_:1})]),n("li",null,[l(e,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[a("常用队列")]),_:1})]),n("li",null,[l(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),n("li",null,[l(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:s(()=>[a("SQL优化")]),_:1})]),n("li",null,[l(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:s(()=>[a("Markdown软件比对")]),_:1})]),n("li",null,[l(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[a("Git历史记录修改用户名和邮箱")]),_:1})]),n("li",null,[l(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("Mermaid示例")]),_:1})]),n("li",null,[l(e,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[a("ESRally性能测试步骤")]),_:1})]),n("li",null,[l(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),v,E,m,h])}const A=i(r,[["render",p],["__file","NGINX.html.vue"]]);export{A as default};
