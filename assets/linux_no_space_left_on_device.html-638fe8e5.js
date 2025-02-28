import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as o,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const h={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),E=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),p=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),_=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),m=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),A={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.top/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),x=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：作为失败的典型，我实在太成功了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function k(v,F){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[u,E,p,_,f,m,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",A,[t("MongoDB no space left on device with docker"),o(i)])]),g,e("ul",null,[e("li",null,[o(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[o(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Docker笔记")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[o(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[t("JVM杂项")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),e("li",null,[o(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[t("Linux dev shm目录")]),_:1})]),e("li",null,[o(l,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:n(()=>[t("raft协议")]),_:1})]),e("li",null,[o(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:n(()=>[t("https和http混用解决办法")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("表单重复提交解决方案")]),_:1})])]),B,w,x,b])}const D=s(h,[["render",k],["__file","linux_no_space_left_on_device.html.vue"]]);export{D as default};
