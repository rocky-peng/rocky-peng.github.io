import{_ as s,$ as d,a0 as r,a1 as e,a2 as l,a3 as t,a4 as a,a5 as c,w as n}from"./framework-b3a0f150.js";const u={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),l(" 问题")],-1),_=e("p",null,[l("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),E=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),f=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),p=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),m={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},A=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.top/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),w=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：丧的人，不是对世界失去了信心，而是对自己失去了信心。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function k(v,y){const i=n("ExternalLinkIcon"),o=n("RouterLink");return d(),r("div",null,[h,_,E,f,p,B,e("p",null,[l("最后启用google搜索，搜索到有帮助的一个 "),e("a",m,[l("MongoDB no space left on device with docker"),t(i)])]),A,e("ul",null,[e("li",null,[t(o,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[l("Btrace入门")]),_:1})]),e("li",null,[t(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[t(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[l("IO相关")]),_:1})]),e("li",null,[t(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(o,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[l("常用队列")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[l("异地多活")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:a(()=>[l("分布式事务Seata")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[t(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("Docker跨主机通信方案")]),_:1})]),e("li",null,[t(o,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[t(o,{to:"/software/raft/sofajraft.html"},{default:a(()=>[l("sofajraft")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("表单重复提交解决方案")]),_:1})])]),g,b,w,x])}const S=s(u,[["render",k],["__file","linux_no_space_left_on_device.html.vue"]]);export{S as default};
