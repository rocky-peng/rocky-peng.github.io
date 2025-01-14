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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.com/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.com/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),v=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),m=n("hr",null,null,-1),h=n("hr",null,null,-1),E=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),a("：确实已经成熟到，很多事情可以不去问了，但还没成熟到能忍住不去猜。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=835a4c51-ebf4-4e85-97cc-30a80e3519b5",alt:"",loading:"lazy"})])],-1);function p(b,B){const e=r("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[a("MySQL常用命令")]),_:1})]),n("li",null,[s(e,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:i(()=>[a("常见问题")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[a("MySQL杂项")]),_:1})]),n("li",null,[s(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:i(()=>[a("K8S 无感发布")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:i(()=>[a("KVM方式集群部署ES")]),_:1})]),n("li",null,[s(e,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:i(()=>[a("IO相关")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[a("index方法压力测试记录")]),_:1})]),n("li",null,[s(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),n("li",null,[s(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:i(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),n("li",null,[s(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:i(()=>[a("Nginx的双向认证配置")]),_:1})]),n("li",null,[s(e,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:i(()=>[a("ESRally性能测试步骤")]),_:1})]),n("li",null,[s(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[a("Mermaid示例")]),_:1})])]),v,m,h,E])}const f=l(o,[["render",p],["__file","NGINX.html.vue"]]);export{f as default};
