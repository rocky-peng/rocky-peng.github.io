import{_ as s,$ as t,a0 as d,a1 as e,a3 as i,a4 as n,a5 as r,a2 as l,w as c}from"./framework-b3a0f150.js";const u={},o=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),E=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我有很多好朋友，但这些好朋友，都有比我更好的朋友。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=6626b7f0-abed-45c6-8819-4b149abbbc32",alt:"",loading:"lazy"})])],-1);function b(B,f){const a=c("RouterLink");return t(),d("div",null,[o,e("ul",null,[e("li",null,[i(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[l("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[i(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[l("NGINX")]),_:1})]),e("li",null,[i(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[l("MongoDB高可用")]),_:1})]),e("li",null,[i(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[l("乱七八糟的笔记")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:n(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[l("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[l("制作KVM ES镜像文件")]),_:1})]),e("li",null,[i(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[i(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[i(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[l("分布式问题")]),_:1})])]),v,m,E,h])}const p=s(u,[["render",b],["__file","Docker笔记.html.vue"]]);export{p as default};
