import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as l,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const h={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),_=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),p=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),E=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),m={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},A=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.top/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),v=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：除了生死都是擦伤，除了父母都是过客。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=109cf439-6aae-4b98-a9f9-9b2ba525e9e6",alt:"",loading:"lazy"})])],-1);function y(k,w){const i=a("ExternalLinkIcon"),o=a("RouterLink");return d(),r("div",null,[u,_,p,E,f,B,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",m,[t("MongoDB no space left on device with docker"),l(i)])]),A,e("ul",null,[e("li",null,[l(o,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Notion笔记定时备份")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[t("MyBatis")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:n(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("数据同步方案")]),_:1})]),e("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[t("分库分表")]),_:1})]),e("li",null,[l(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[l(o,{to:"/software/raft/sofajraft.html"},{default:n(()=>[t("sofajraft")]),_:1})]),e("li",null,[l(o,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[t("Hbase 总览")]),_:1})])]),g,b,v,x])}const D=s(h,[["render",y],["__file","linux_no_space_left_on_device.html.vue"]]);export{D as default};
