import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as o,a4 as n,a5 as c,w as a}from"./framework-b6ede5bc.js";const h={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),_=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),p=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),f=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),E=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),g={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},B=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),w=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：如果吃亏是福的话，那我可能早就福如东海了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8266e818-94ed-4be3-9328-e8d2d43695ea",alt:"",loading:"lazy"})])],-1);function y(v,k){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[u,_,p,f,m,E,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",g,[t("MongoDB no space left on device with docker"),o(i)])]),B,e("ul",null,[e("li",null,[o(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[o(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("常见问题")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:n(()=>[t("Btrace入门")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[o(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[o(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[t("Hadoop 一")]),_:1})]),e("li",null,[o(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[t("istio基础知识")]),_:1})]),e("li",null,[o(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Docker笔记")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[t("分库分表")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[t("MySQL索引")]),_:1})]),e("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),A,b,w,x])}const L=s(h,[["render",y],["__file","linux_no_space_left_on_device.html.vue"]]);export{L as default};
