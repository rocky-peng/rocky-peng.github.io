import{_ as a,$ as t,a0 as d,a1 as e,a3 as s,a4 as n,a5 as r,a2 as l,w as c}from"./framework-eaf397e6.js";const u={},o=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：人为什么叫人类，因为人活着就是累。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(p,_){const i=c("RouterLink");return t(),d("div",null,[o,e("ul",null,[e("li",null,[s(i,{to:"/other/%E5%85%8D%E8%B4%B9https%E8%AF%81%E4%B9%A6%E3%80%81%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F.html"},{default:n(()=>[l("免费https证书、自动续期")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[l("MySQL杂项")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[l("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[s(i,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[l("MongoDB高可用")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[s(i,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[l("Redis高可用")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[l("前后端常用技术")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[l("杂记")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[l("BBR加速")]),_:1})]),e("li",null,[s(i,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:n(()=>[l("https和http混用解决办法")]),_:1})])]),v,m,h,E])}const B=a(u,[["render",b],["__file","Docker笔记.html.vue"]]);export{B as default};
