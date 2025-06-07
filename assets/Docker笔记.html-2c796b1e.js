import{_ as s,$ as t,a0 as d,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as o}from"./framework-eaf397e6.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),m=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：你站在女孩身边，打一个字，妞。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(B,A){const i=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MySQL高可用")]),_:1})]),e("li",null,[n(i,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[l("弱引用示例")]),_:1})]),e("li",null,[n(i,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[n(i,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[l("Censys搜索引擎学习")]),_:1})]),e("li",null,[n(i,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("数据同步方案")]),_:1})]),e("li",null,[n(i,{to:"/other/JDK8%20G1%20%E5%A0%86%E5%86%85%E5%AD%98%E5%B1%85%E7%84%B6%E4%B8%8D%E9%87%8A%E6%94%BE.html"},{default:a(()=>[l("JDK8 G1 堆内存居然不释放")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[l("Markdown软件比对")]),_:1})]),e("li",null,[n(i,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[n(i,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[l("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[n(i,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[l("WebSocket SpringBoot Demo")]),_:1})])]),E,v,m,h])}const g=s(c,[["render",b],["__file","Docker笔记.html.vue"]]);export{g as default};
