import{_ as s,$ as t,a0 as d,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as c}from"./framework-b3a0f150.js";const o={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),m=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：治疗脱发，最好的办法，剃光头。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9d70c3b9-d1ab-421b-b0d3-80a8f9846369",alt:"",loading:"lazy"})])],-1);function B(h,A){const i=c("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),e("li",null,[n(i,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[l("异地多活")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[l("gperftools")]),_:1})]),e("li",null,[n(i,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("JVM杂项")]),_:1})]),e("li",null,[n(i,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("CountDownLatch源码解读")]),_:1})]),e("li",null,[n(i,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[n(i,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[n(i,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[n(i,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[l("SpringCloud总体认识")]),_:1})])]),E,v,m,b])}const g=s(o,[["render",B],["__file","Docker笔记.html.vue"]]);export{g as default};
