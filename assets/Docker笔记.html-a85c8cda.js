import{_ as n,$ as t,a0 as d,a1 as e,a3 as a,a4 as i,a5 as r,a2 as l,w as o}from"./framework-de22589b.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：想奋斗？手机能从你的手上拿下来，就算是拼搏了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(p,A){const s=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[a(s,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:i(()=>[l("记一次内存泄漏")]),_:1})]),e("li",null,[a(s,{to:"/other/Spring%20Cloud%20Gateway%E6%94%B6%E5%88%B0%E7%9A%84%E6%98%AFhttp%E8%AF%B7%E6%B1%82%EF%BC%8C%E4%BD%86schema%E5%8D%B4%E6%98%AFhttps.html"},{default:i(()=>[l("Spring Cloud Gateway收到的是http请求，但schema却是https")]),_:1})]),e("li",null,[a(s,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:i(()=>[l("随记")]),_:1})]),e("li",null,[a(s,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:i(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(s,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(s,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:i(()=>[l("线上FullGC频繁的排查")]),_:1})]),e("li",null,[a(s,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[l("Paxos算法")]),_:1})]),e("li",null,[a(s,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:i(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[a(s,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:i(()=>[l("分布式问题")]),_:1})]),e("li",null,[a(s,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:i(()=>[l("SpringCloud总体认识")]),_:1})]),e("li",null,[a(s,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:i(()=>[l("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[a(s,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:i(()=>[l("随机图片在线接口")]),_:1})])]),v,m,h,E])}const g=n(c,[["render",b],["__file","Docker笔记.html.vue"]]);export{g as default};
