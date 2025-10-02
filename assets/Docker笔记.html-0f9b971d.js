import{_ as t,$ as s,a0 as d,a1 as e,a3 as a,a4 as n,a5 as r,a2 as l,w as o}from"./framework-4ae679b7.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我从来不会脑残地，在网上晒自己买的名牌，因为我买不起。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(p,B){const i=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[e("li",null,[a(i,{to:"/other/Spring%20Cloud%20Gateway%E6%94%B6%E5%88%B0%E7%9A%84%E6%98%AFhttp%E8%AF%B7%E6%B1%82%EF%BC%8C%E4%BD%86schema%E5%8D%B4%E6%98%AFhttps.html"},{default:n(()=>[l("Spring Cloud Gateway收到的是http请求，但schema却是https")]),_:1})]),e("li",null,[a(i,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:n(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[a(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(i,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(i,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[a(i,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:n(()=>[l("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[l("SQL优化")]),_:1})]),e("li",null,[a(i,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[l("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[a(i,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:n(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[a(i,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:n(()=>[l("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),e("li",null,[a(i,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[l("Docker跨主机通信方案")]),_:1})]),e("li",null,[a(i,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[l("PostgreSQL高可用")]),_:1})])]),v,m,h,E])}const g=t(c,[["render",b],["__file","Docker笔记.html.vue"]]);export{g as default};
