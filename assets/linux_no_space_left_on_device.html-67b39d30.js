import{_ as s,$ as d,a0 as r,a1 as e,a2 as o,a3 as l,a4 as n,a5 as c,w as a}from"./framework-b7a22294.js";const h={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),o(" 问题")],-1),_=e("p",null,[o("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),E=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),B=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),f=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),m={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),b=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),o("：撞衫不可怕，可怕的是你穿着，比她丑多了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a2d9809d-fc46-4474-8cd6-4298847b6ad4",alt:"",loading:"lazy"})])],-1);function v(k,y){const i=a("ExternalLinkIcon"),t=a("RouterLink");return d(),r("div",null,[u,_,E,p,B,f,e("p",null,[o("最后启用google搜索，搜索到有帮助的一个 "),e("a",m,[o("MongoDB no space left on device with docker"),l(i)])]),g,e("ul",null,[e("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[o("MySQL杂项")]),_:1})]),e("li",null,[l(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[o("微博关注关系如何实现")]),_:1})]),e("li",null,[l(t,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[o("K8S 无感发布")]),_:1})]),e("li",null,[l(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[o("如何安装Google BBR")]),_:1})]),e("li",null,[l(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:n(()=>[o("常用队列")]),_:1})]),e("li",null,[l(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[o("Arthas使用记录")]),_:1})]),e("li",null,[l(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[o("ShadowsockServer配置")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:n(()=>[o("MySQL三大日志")]),_:1})]),e("li",null,[l(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[o("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[o("Markdown软件比对")]),_:1})]),e("li",null,[l(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[o("ReentrantLock源码解读")]),_:1})]),e("li",null,[l(t,{to:"/intro.html"},{default:n(()=>[o("intro")]),_:1})])]),A,w,b,x])}const L=s(h,[["render",v],["__file","linux_no_space_left_on_device.html.vue"]]);export{L as default};
