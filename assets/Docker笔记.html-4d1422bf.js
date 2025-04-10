import{_ as s,$ as t,a0 as d,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as o}from"./framework-b3a0f150.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：别看平时他对你漠不关心，其实背后，说了你好多坏话。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/8777831/pexels-photo-8777831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A diverse group of friends, including a person in a wheelchair, enjoying quality time outdoors in Portugal.",loading:"lazy"})])],-1);function p(f,E){const i=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[l("MyBatis")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[l("NGINX")]),_:1})]),e("li",null,[n(i,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[n(i,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[l("K8S 无感发布")]),_:1})]),e("li",null,[n(i,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[l("提取Docker镜像中的文件")]),_:1})]),e("li",null,[n(i,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[n(i,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[l("MAC CMS")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[n(i,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[n(i,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("CountDownLatch源码解读")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[n(i,{to:"/software/raft/sofajraft.html"},{default:a(()=>[l("sofajraft")]),_:1})])]),v,m,h,b])}const _=s(c,[["render",p],["__file","Docker笔记.html.vue"]]);export{_ as default};
