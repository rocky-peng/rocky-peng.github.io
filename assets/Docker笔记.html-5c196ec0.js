import{_ as n,$ as d,a0 as t,a1 as e,a3 as i,a4 as a,a5 as r,a2 as l,w as c}from"./framework-de22589b.js";const o={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
yum install -y docker

----

启动
systemctl start docker.service
或者
service docker start

----

设置自启动
systemctl enable docker.service

----


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建自己的镜像" tabindex="-1"><a class="header-anchor" href="#创建自己的镜像" aria-hidden="true">#</a> 创建自己的镜像</h2><p>Dockerfile:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM    sebp/elk
MAINTAINER rocky &quot;rocky.peng@qq.com&quot;
RUN apt-get update
RUN apt-get install htop
RUN apt-get update &amp;&amp; apt-get install git --assume-yes
RUN apt-get install zsh --assume-yes
RUN sh -c &quot;$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在dockerfile所在的目录执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t pqs/elk . 

-t : 指定镜像id和tag
. 表示dockerfile所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入导出镜像" tabindex="-1"><a class="header-anchor" href="#导入导出镜像" aria-hidden="true">#</a> 导入导出镜像</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>导出
docker save imageid -o 导出的文件名.tar

导入
docker load -i xxx.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：和玩不来的人一起玩，感觉特别像是在加班。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function E(f,p){const s=c("RouterLink");return d(),t("div",null,[u,e("ul",null,[e("li",null,[i(s,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[l("MAT工具")]),_:1})]),e("li",null,[i(s,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[l("synchronized原理深度剖析")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[l("NGINX")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[i(s,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("Redis高可用")]),_:1})]),e("li",null,[i(s,{to:"/other/JDK8%20G1%20%E5%A0%86%E5%86%85%E5%AD%98%E5%B1%85%E7%84%B6%E4%B8%8D%E9%87%8A%E6%94%BE.html"},{default:a(()=>[l("JDK8 G1 堆内存居然不释放")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[l("gperftools")]),_:1})]),e("li",null,[i(s,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[l("ShadowsockServer配置")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[i(s,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[l("Hbase 总览")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[l("BBR加速")]),_:1})])]),v,m,h,b])}const _=n(o,[["render",E],["__file","Docker笔记.html.vue"]]);export{_ as default};
