import{_ as s,$ as d,a0 as r,a1 as e,a2 as l,a3 as o,a4 as n,a5 as E,w as a}from"./framework-16d560c6.js";const c={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),l(" 问题")],-1),h=e("p",null,[l("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),B=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),p=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),A={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=E('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),x=e("hr",null,null,-1),b=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：想赚钱就得怕钱，不能爱钱，因为怕什么来什么。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e52671c9-0953-4687-a5db-e464fd0216bc",alt:"",loading:"lazy"})])],-1);function w(k,D){const i=a("ExternalLinkIcon"),t=a("RouterLink");return d(),r("div",null,[u,h,_,B,f,p,e("p",null,[l("最后启用google搜索，搜索到有帮助的一个 "),e("a",A,[l("MongoDB no space left on device with docker"),o(i)])]),m,e("ul",null,[e("li",null,[o(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[o(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[l("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(t,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[l("Censys搜索引擎学习")]),_:1})]),e("li",null,[o(t,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[l("数据同步方案")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[l("gperftools")]),_:1})]),e("li",null,[o(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:n(()=>[l("JVM异常处理")]),_:1})]),e("li",null,[o(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[l("ShadowsockServer配置")]),_:1})]),e("li",null,[o(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[o(t,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[o(t,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:n(()=>[l("Java面试基础")]),_:1})])]),g,x,b,v])}const y=s(c,[["render",w],["__file","linux_no_space_left_on_device.html.vue"]]);export{y as default};
