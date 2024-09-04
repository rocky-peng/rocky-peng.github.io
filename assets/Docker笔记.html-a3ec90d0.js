import{_ as t,$ as r,a0 as c,a2 as n,a1 as e,a3 as i,a4 as a,a5 as u,w as s}from"./framework-3895bb24.js";const o={},v=u(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><br>`,12),m=e("li",null,"[不重启 JVM，如何替换掉已经加载的类？](../java-basic/不重启 JVM，如何替换掉已经加载的类？.md)",-1),b={href:"http://xn--6kqwmu3dpxdkvav36a9hed80d4gjml9c.md",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),E=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：我觉得失恋不可怕，眼瞎才可怕。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=86d0bcfb-cade-432d-bd10-c0ec7c64feef",alt:"",loading:"lazy"})])],-1);function g(f,x){const l=s("RouterLink"),d=s("ExternalLinkIcon");return r(),c("div",null,[v,n(" ## 系统推荐 "),e("ul",null,[e("li",null,[i(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[n("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[i(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[n("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[i(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[n("提取Docker镜像中的文件")]),_:1})]),m,e("li",null,[i(l,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[n("Markdown软件比对")]),_:1})]),e("li",null,[i(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[n("Java面试基础")]),_:1})]),e("li",null,[n("[免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序](../../other/免费 API 每日提供摸鱼日报，自动返回无水印图片，"),e("a",b,[n("适用于公众号和小程序.md"),i(d)]),n(")")]),e("li",null,[i(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:a(()=>[n("杂记")]),_:1})])]),h,p,E,_])}const B=t(o,[["render",g],["__file","Docker笔记.html.vue"]]);export{B as default};
