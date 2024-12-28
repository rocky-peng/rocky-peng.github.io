import{_ as n,$ as d,a0 as t,a1 as e,a3 as a,a4 as s,a5 as r,a2 as l,w as c}from"./framework-b3a0f150.js";const u={},o=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：分手后还能做朋友，一定是其中一方不死心，或者钱没还清。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d6b24fd0-ad73-4c1a-af75-d2a34594c21a",alt:"",loading:"lazy"})])],-1);function E(p,B){const i=c("RouterLink");return d(),t("div",null,[o,e("ul",null,[e("li",null,[a(i,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[l("Redis笔记")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[l("MySQL杂项")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:s(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[a(i,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:s(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(i,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(i,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[l("MAC CMS")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[l("MySQL索引")]),_:1})]),e("li",null,[a(i,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[a(i,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(i,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:s(()=>[l("Linux dev shm目录")]),_:1})])]),v,m,h,b])}const _=n(u,[["render",E],["__file","Docker笔记.html.vue"]]);export{_ as default};
