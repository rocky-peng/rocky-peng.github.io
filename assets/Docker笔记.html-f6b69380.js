import{_ as a,$ as d,a0 as t,a1 as e,a3 as n,a4 as s,a5 as r,a2 as l,w as o}from"./framework-b3a0f150.js";const u={},c=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：你不当厨子可惜了，甩锅甩的这么厉害。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/8777831/pexels-photo-8777831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A diverse group of friends, including a person in a wheelchair, enjoying quality time outdoors in Portugal.",loading:"lazy"})])],-1);function E(p,g){const i=o("RouterLink");return d(),t("div",null,[c,e("ul",null,[e("li",null,[n(i,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:s(()=>[l("JVM垃圾收集器")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[l("Redis笔记")]),_:1})]),e("li",null,[n(i,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[n(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[l("线上FullGC频繁的排查")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:s(()=>[l("Javassist整理")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:s(()=>[l("SQL优化")]),_:1})]),e("li",null,[n(i,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[l("Nginx的双向认证配置")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mq/RocketMQ.html"},{default:s(()=>[l("RocketMQ")]),_:1})]),e("li",null,[n(i,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[n(i,{to:"/intro.html"},{default:s(()=>[l("intro")]),_:1})]),e("li",null,[n(i,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[l("Mermaid示例")]),_:1})])]),v,m,h,b])}const _=a(u,[["render",E],["__file","Docker笔记.html.vue"]]);export{_ as default};
