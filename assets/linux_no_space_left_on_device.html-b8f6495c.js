import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as o,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const E={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),h=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),m={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},A=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),v=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：敌人造成的困难很容易忍受，朋友取得的成功，却让人很难忍受。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=608e725a-19ae-4d1b-a9b0-962e55575fd3",alt:"",loading:"lazy"})])],-1);function k(w,y){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[u,h,_,p,f,B,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",m,[t("MongoDB no space left on device with docker"),o(i)])]),A,e("ul",null,[e("li",null,[o(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("MAT工具")]),_:1})]),e("li",null,[o(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[o(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[o(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("提取Docker镜像中的文件")]),_:1})]),e("li",null,[o(l,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[t("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[o(l,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[t("kafka")]),_:1})]),e("li",null,[o(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:n(()=>[t("常用队列")]),_:1})]),e("li",null,[o(l,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("AQS源码解读")]),_:1})]),e("li",null,[o(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[o(l,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[t("杂记")]),_:1})])]),g,b,v,x])}const F=s(E,[["render",k],["__file","linux_no_space_left_on_device.html.vue"]]);export{F as default};
