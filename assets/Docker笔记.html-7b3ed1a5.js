import{_ as i,$ as t,a0 as d,a1 as e,a3 as n,a4 as s,a5 as r,a2 as l,w as o}from"./framework-de22589b.js";const c={},u=r(`<p>镜像与容器 === 类与对象</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),E=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：清明节，应该回你的学校扫扫墓，因为那里埋葬了你的青春。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16520012/pexels-photo-16520012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Large cargo vessel docked at Istanbul harbor under dramatic skies, showcasing global trade.",loading:"lazy"})])],-1);function b(B,_){const a=o("RouterLink");return t(),d("div",null,[u,e("ul",null,[e("li",null,[n(a,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[l("MyBatis")]),_:1})]),e("li",null,[n(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[n(a,{to:"/other/%E5%9C%A8%E6%B2%A1%E6%9C%89%20telnet%20%E5%92%8C%20nc%20%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%88%A4%E6%96%AD%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E9%80%9A%EF%BC%9F.html"},{default:s(()=>[l("在没有 telnet 和 nc 的世界里，如何优雅地判断端口是否通？")]),_:1})]),e("li",null,[n(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[l("弱引用示例")]),_:1})]),e("li",null,[n(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:s(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[n(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:s(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[n(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[n(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[l("数据同步方案")]),_:1})]),e("li",null,[n(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:s(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[n(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[n(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:s(()=>[l("Centos离线安装Docker")]),_:1})]),e("li",null,[n(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[l("CountDownLatch源码解读")]),_:1})])]),v,m,E,h])}const A=i(c,[["render",b],["__file","Docker笔记.html.vue"]]);export{A as default};
