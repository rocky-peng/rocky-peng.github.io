import{_ as s,$ as d,a0 as r,a1 as e,a2 as o,a3 as l,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const E={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),o(" 问题")],-1),f=e("p",null,[o("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),h=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),_=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),p=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),A=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),B={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),k=e("hr",null,null,-1),x=e("hr",null,null,-1),D=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),o("：你若不是可有可无，他又怎会忽冷忽热。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=6503b6ae-f344-4846-8b6e-983460f5462f",alt:"",loading:"lazy"})])],-1);function b(w,F){const i=a("ExternalLinkIcon"),t=a("RouterLink");return d(),r("div",null,[u,f,h,_,p,A,e("p",null,[o("最后启用google搜索，搜索到有帮助的一个 "),e("a",B,[o("MongoDB no space left on device with docker"),l(i)])]),m,e("ul",null,[e("li",null,[l(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[o("MAT工具")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:n(()=>[o("KVM 虚拟机安装")]),_:1})]),e("li",null,[l(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[o("Docker笔记")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[o("简易版配置中心&初探原理")]),_:1})]),e("li",null,[l(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[o("推荐几个适用小工具")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[o("gperftools")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[o("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[o("Centos离线安装Docker")]),_:1})]),e("li",null,[l(t,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:n(()=>[o("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[o("Markdown软件比对")]),_:1})]),e("li",null,[l(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[o("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[l(t,{to:"/software/raft/sofajraft.html"},{default:n(()=>[o("sofajraft")]),_:1})])]),g,k,x,D])}const y=s(E,[["render",b],["__file","linux_no_space_left_on_device.html.vue"]]);export{y as default};
