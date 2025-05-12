import{_ as i,$ as t,a0 as d,a1 as n,a3 as s,a4 as l,a5 as c,a2 as e,w as o}from"./framework-8c4427da.js";const r={},u=c(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> NGINX</h1><h2 id="感性体验下负载均衡配置" tabindex="-1"><a class="header-anchor" href="#感性体验下负载均衡配置" aria-hidden="true">#</a> 感性体验下负载均衡配置</h2><ol><li>本地启动两个jetty</li></ol><p>要达到的效果：通过nginx开启80端口，在浏览通过localhost来访问jetttyA 和 jettyB 提供的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jettyA   localhsot:6000    首页输出:6000
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.justdopay.top/xiaoshujiang/1629080026033.jpg" alt="" loading="lazy"><img src="https://cdn.justdopay.top/xiaoshujiang/1629080008840.jpg" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,15),E=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),v=n("hr",null,null,-1),h=n("hr",null,null,-1),m=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),e("：如果多年以后你未嫁我未娶，那么咱俩，也真够完犊子的了。 "),n("br"),n("br"),n("img",{src:"https://images.pexels.com/photos/11035538/pexels-photo-11035538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a person holding an NGINX sticker with a blurred background.",loading:"lazy"})])],-1);function p(b,B){const a=o("RouterLink");return t(),d("div",null,[u,n("ul",null,[n("li",null,[s(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("MAT工具")]),_:1})]),n("li",null,[s(a,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),n("li",null,[s(a,{to:"/other/%E5%9C%A8%E6%B2%A1%E6%9C%89%20telnet%20%E5%92%8C%20nc%20%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%88%A4%E6%96%AD%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E9%80%9A%EF%BC%9F.html"},{default:l(()=>[e("在没有 telnet 和 nc 的世界里，如何优雅地判断端口是否通？")]),_:1})]),n("li",null,[s(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("弱引用示例")]),_:1})]),n("li",null,[s(a,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[e("如何安装Google BBR")]),_:1})]),n("li",null,[s(a,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[e("MAC CMS")]),_:1})]),n("li",null,[s(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),n("li",null,[s(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("推荐几个适用小工具")]),_:1})]),n("li",null,[s(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),n("li",null,[s(a,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[e("JetBrains-License-Server")]),_:1})]),n("li",null,[s(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[e("RocketMQ")]),_:1})]),n("li",null,[s(a,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:l(()=>[e("随机图片在线接口")]),_:1})])]),E,v,h,m])}const g=i(r,[["render",p],["__file","NGINX.html.vue"]]);export{g as default};
