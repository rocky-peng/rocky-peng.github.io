import{_ as n,$ as t,a0 as d,a1 as e,a3 as i,a4 as s,a5 as r,a2 as l,w as o}from"./framework-de22589b.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),h=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：最近感觉脑瓜子痒痒的，是不是要长脑子了啊！ "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function E(f,p){const a=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[i(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:s(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[i(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[l("Redis笔记")]),_:1})]),e("li",null,[i(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:s(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[i(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[i(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[l("ShadowsockServer配置")]),_:1})]),e("li",null,[i(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[l("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[i(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[l("ES杂项")]),_:1})]),e("li",null,[i(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:s(()=>[l("Java面试基础")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[l("分布式问题")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[l("BBR加速")]),_:1})]),e("li",null,[i(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[l("raft协议")]),_:1})])]),v,m,h,b])}const _=n(c,[["render",E],["__file","Docker笔记.html.vue"]]);export{_ as default};
