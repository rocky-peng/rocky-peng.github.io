import{_ as s,$ as d,a0 as r,a1 as e,a2 as l,a3 as t,a4 as n,a5 as c,w as i}from"./framework-b3a0f150.js";const u={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),l(" 问题")],-1),_=e("p",null,[l("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),p=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),E=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),m=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),B={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),x=e("hr",null,null,-1),w=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我们马上有贵的房子住了，房东说，下个月就给我们涨价。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=25b6d4c2-1d8d-4c4c-9616-68cb7270781b",alt:"",loading:"lazy"})])],-1);function v(C,k){const a=i("ExternalLinkIcon"),o=i("RouterLink");return d(),r("div",null,[h,_,p,E,f,m,e("p",null,[l("最后启用google搜索，搜索到有帮助的一个 "),e("a",B,[l("MongoDB no space left on device with docker"),t(a)])]),g,e("ul",null,[e("li",null,[t(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[t(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[l("分库分表")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[l("gperftools")]),_:1})]),e("li",null,[t(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[t(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[l("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(o,{to:"/software/raft/sofajraft.html"},{default:n(()=>[l("sofajraft")]),_:1})]),e("li",null,[t(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[l("Mermaid示例")]),_:1})]),e("li",null,[t(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[l("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[l("BBR加速")]),_:1})]),e("li",null,[t(o,{to:"/software/linux/Linux.html"},{default:n(()=>[l("Linux")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[l("杂记")]),_:1})])]),A,b,x,w])}const F=s(u,[["render",v],["__file","linux_no_space_left_on_device.html.vue"]]);export{F as default};
