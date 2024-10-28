import{_ as s,$ as d,a0 as t,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as c}from"./framework-16d560c6.js";const u={},o=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：都说在喜欢的人面前会变笨，难道我喜欢上作业了？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=8399c697-1c4e-4666-8090-1f74cba0e695",alt:"",loading:"lazy"})])],-1);function E(p,f){const i=c("RouterLink");return d(),t("div",null,[o,e("ul",null,[e("li",null,[n(i,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[l("MyBatis")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[l("NGINX")]),_:1})]),e("li",null,[n(i,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[n(i,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),e("li",null,[n(i,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[l("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[n(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[n(i,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[n(i,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[l("MAC CMS")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[l("异地多活")]),_:1})]),e("li",null,[n(i,{to:"/software/linux/Linux.html"},{default:a(()=>[l("Linux")]),_:1})]),e("li",null,[n(i,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[l("Linux dev shm目录")]),_:1})])]),v,m,h,b])}const g=s(u,[["render",E],["__file","Docker笔记.html.vue"]]);export{g as default};
