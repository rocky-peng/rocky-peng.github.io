import{_ as a,$ as t,a0 as d,a1 as e,a3 as s,a4 as n,a5 as r,a2 as l,w as c}from"./framework-6347c55a.js";const o={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：成年人的世界只有两个字，——算了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/33793925/pexels-photo-33793925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"",loading:"lazy"})])],-1);function E(p,f){const i=c("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[s(i,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[l("Oh My ZSH")]),_:1})]),e("li",null,[s(i,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[l("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[s(i,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:n(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[l("ES杂项")]),_:1})]),e("li",null,[s(i,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[s(i,{to:"/intro.html"},{default:n(()=>[l("intro")]),_:1})]),e("li",null,[s(i,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[l("随机图片在线接口")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[l("杂记")]),_:1})]),e("li",null,[s(i,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:n(()=>[l("raft协议")]),_:1})]),e("li",null,[s(i,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[l("Hbase 总览")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[l("BBR加速")]),_:1})])]),v,m,h,b])}const _=a(o,[["render",E],["__file","Docker笔记.html.vue"]]);export{_ as default};
