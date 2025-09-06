import{_ as s,$ as t,a0 as d,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as o}from"./framework-6347c55a.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),m=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：麻烦学妹行李箱少装点，毕竟学长只是想认识你，不想把命搭楼梯上。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function B(b,A){const i=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[n(i,{to:"/other/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%88%B6%E4%BD%9CCookie%E3%80%81Local%E3%80%81Session%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E6%8F%92%E4%BB%B6.html"},{default:a(()=>[l("手把手教你制作Cookie、Local、Session数据导出插件")]),_:1})]),e("li",null,[n(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[l("随记")]),_:1})]),e("li",null,[n(i,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[l("IO相关")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[l("InnoDB存储引擎")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),e("li",null,[n(i,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[l("简易版配置中心&初探原理")]),_:1})]),e("li",null,[n(i,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[n(i,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[n(i,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:a(()=>[l("CentOS7下Docker端口映射后防火墙失效")]),_:1})])]),E,v,m,h])}const g=s(c,[["render",B],["__file","Docker笔记.html.vue"]]);export{g as default};
