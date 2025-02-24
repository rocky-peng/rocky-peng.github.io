import{_ as s,$ as d,a0 as r,a1 as e,a2 as o,a3 as l,a4 as n,a5 as c,w as i}from"./framework-b3a0f150.js";const u={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),o(" 问题")],-1),E=e("p",null,[o("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),m=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),g={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},B=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),y=e("hr",null,null,-1),S=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),o("：没有人能使你放弃，因为你只要努力一下，就会自己放弃了！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=83808881-4db9-4083-b1ba-c3ef4b37d78b",alt:"",loading:"lazy"})])],-1);function w(v,x){const a=i("ExternalLinkIcon"),t=i("RouterLink");return d(),r("div",null,[h,E,_,p,f,m,e("p",null,[o("最后启用google搜索，搜索到有帮助的一个 "),e("a",g,[o("MongoDB no space left on device with docker"),l(a)])]),B,e("ul",null,[e("li",null,[l(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[o("MySQL杂项")]),_:1})]),e("li",null,[l(t,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[o("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[o("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[l(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[o("Spring框架源码关键点")]),_:1})]),e("li",null,[l(t,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[o("Cornell Notes System")]),_:1})]),e("li",null,[l(t,{to:"/other/Spring%20RetryTemplate.html"},{default:n(()=>[o("Spring RetryTemplate")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[o("InnoDB存储引擎")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[o("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(t,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[o("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[o("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[o("杂记")]),_:1})])]),A,b,y,S])}const C=s(u,[["render",w],["__file","linux_no_space_left_on_device.html.vue"]]);export{C as default};
