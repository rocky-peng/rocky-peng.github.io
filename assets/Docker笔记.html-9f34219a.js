import{_ as n,$ as d,a0 as t,a1 as e,a3 as a,a4 as s,a5 as r,a2 as l,w as c}from"./framework-de22589b.js";const o={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：世上只有骗子是真心的，因为他是真心地在骗你。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function E(p,B){const i=c("RouterLink");return d(),t("div",null,[u,e("ul",null,[e("li",null,[a(i,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[l("MAT工具")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:s(()=>[l("Oh My ZSH")]),_:1})]),e("li",null,[a(i,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[a(i,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:s(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[a(i,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[l("JDK命令行工具")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:s(()=>[l("KVM方式集群部署ES")]),_:1})]),e("li",null,[a(i,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(i,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[l("常用队列")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[l("MySQL三大日志")]),_:1})]),e("li",null,[a(i,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[l("分布式事务Seata")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[l("BBR加速")]),_:1})])]),v,m,h,b])}const g=n(o,[["render",E],["__file","Docker笔记.html.vue"]]);export{g as default};
