import{_ as s,$ as d,a0 as r,a1 as e,a2 as o,a3 as t,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const E={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),o(" 问题")],-1),u=e("p",null,[o("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),m={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.top/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),v=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),o("：‌女为悦己者容，男为悦己者穷。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function b(k,D){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[h,u,_,p,f,B,e("p",null,[o("最后启用google搜索，搜索到有帮助的一个 "),e("a",m,[o("MongoDB no space left on device with docker"),t(i)])]),g,e("ul",null,[e("li",null,[t(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[o("JVM垃圾收集器")]),_:1})]),e("li",null,[t(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[o("Docker进行资源隔离")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[o("来个JVM冷知识")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[o("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[o("Hadoop 一")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[o("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[o("InnoDB存储引擎")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[o("Javassist整理")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[o("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(l,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[o("JetBrains-License-Server")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[o("SQL优化")]),_:1})]),e("li",null,[t(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:n(()=>[o("https和http混用解决办法")]),_:1})])]),A,w,v,x])}const j=s(E,[["render",b],["__file","linux_no_space_left_on_device.html.vue"]]);export{j as default};
