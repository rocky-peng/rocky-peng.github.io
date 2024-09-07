import{_ as s,$ as t,a0 as d,a1 as e,a3 as n,a4 as a,a5 as r,a2 as l,w as u}from"./framework-58787b1c.js";const c={},o=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),E=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：别人清空购物车靠买，我清空购物车靠删。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6b462d51-2293-4713-b519-e9e0ef8541c7",alt:"",loading:"lazy"})])],-1);function h(p,A){const i=u("RouterLink");return t(),d("div",null,[o,e("ul",null,[e("li",null,[n(i,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[l("MAT工具")]),_:1})]),e("li",null,[n(i,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[n(i,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:a(()=>[l("Spring框架源码关键点")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[l("KVM方式集群部署ES")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[l("乱七八糟的笔记")]),_:1})]),e("li",null,[n(i,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[n(i,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:a(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[n(i,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[l("kafka")]),_:1})]),e("li",null,[n(i,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[n(i,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[l("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[n(i,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[l("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[n(i,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[l("随机图片在线接口")]),_:1})])]),v,m,E,b])}const f=s(c,[["render",h],["__file","Docker笔记.html.vue"]]);export{f as default};
