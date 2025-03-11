import{_ as a,$ as t,a0 as d,a1 as e,a3 as n,a4 as s,a5 as r,a2 as l,w as o}from"./framework-b3a0f150.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：年轻时我以为钱就是一切，现在老了才知道，确实如此。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/8777831/pexels-photo-8777831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A diverse group of friends, including a person in a wheelchair, enjoying quality time outdoors in Portugal.",loading:"lazy"})])],-1);function b(B,p){const i=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[n(i,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[n(i,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[l("MySQL高可用")]),_:1})]),e("li",null,[n(i,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[l("如何安装Google BBR")]),_:1})]),e("li",null,[n(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[n(i,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[l("Redis高可用")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[n(i,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[n(i,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[n(i,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:s(()=>[l("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:s(()=>[l("表单重复提交解决方案")]),_:1})]),e("li",null,[n(i,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:s(()=>[l("随机图片在线接口")]),_:1})])]),v,m,h,E])}const g=a(c,[["render",b],["__file","Docker笔记.html.vue"]]);export{g as default};
