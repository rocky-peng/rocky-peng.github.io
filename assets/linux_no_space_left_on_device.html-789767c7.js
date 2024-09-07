import{_ as s,$ as d,a0 as r,a1 as o,a2 as e,a3 as t,a4 as n,a5 as c,w as a}from"./framework-58787b1c.js";const h={},E=o("h2",{id:"问题",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),e(" 问题")],-1),u=o("p",null,[e("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),o("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=o("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=o("figure",null,[o("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),o("figcaption")],-1),f=o("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),A=o("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),B={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),m=o("p",null,[o("br"),o("br"),o("br"),o("br"),o("br"),o("br")],-1),v=o("hr",null,null,-1),b=o("hr",null,null,-1),w=o("ul",null,[o("li",null,[o("strong",null,"随机毒鸡汤"),e("：小时候做过的最蠢的事，可能是盼着长大吧。 "),o("br"),o("br"),o("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=22bd964d-da19-4aaf-9755-8945a1d959c5",alt:"",loading:"lazy"})])],-1);function x(D,k){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[E,u,_,p,f,A,o("p",null,[e("最后启用google搜索，搜索到有帮助的一个 "),o("a",B,[e("MongoDB no space left on device with docker"),t(i)])]),g,o("ul",null,[o("li",null,[t(l,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Notion笔记定时备份")]),_:1})]),o("li",null,[t(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),o("li",null,[t(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[e("JVM参数设置")]),_:1})]),o("li",null,[t(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[e("如何安装Google BBR")]),_:1})]),o("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[e("Hadoop 一")]),_:1})]),o("li",null,[t(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),o("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[e("MySQL索引")]),_:1})]),o("li",null,[t(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[e("Centos离线安装Docker")]),_:1})]),o("li",null,[t(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),o("li",null,[t(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("ShadowsockServer配置")]),_:1})]),o("li",null,[t(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:n(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),o("li",null,[t(l,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("表单重复提交解决方案")]),_:1})])]),m,v,b,w])}const C=s(h,[["render",x],["__file","linux_no_space_left_on_device.html.vue"]]);export{C as default};
