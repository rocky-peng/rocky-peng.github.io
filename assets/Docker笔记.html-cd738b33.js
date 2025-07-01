import{_ as s,$ as t,a0 as d,a1 as e,a3 as a,a4 as n,a5 as r,a2 as l,w as c}from"./framework-f719d9e2.js";const o={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),m=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：你虽然没有出过国，但是你每天都在倒时差。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(p,B){const i=c("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[a(i,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:n(()=>[l("记一次内存泄漏")]),_:1})]),e("li",null,[a(i,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[a(i,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[a(i,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[l("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[a(i,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[l("K8S 无感发布")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[a(i,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[l("Censys搜索引擎学习")]),_:1})]),e("li",null,[a(i,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[a(i,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[l("IO相关")]),_:1})]),e("li",null,[a(i,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:n(()=>[l("常用队列")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:n(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[a(i,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[l("Hbase 总览")]),_:1})])]),v,E,m,h])}const A=s(o,[["render",b],["__file","Docker笔记.html.vue"]]);export{A as default};
