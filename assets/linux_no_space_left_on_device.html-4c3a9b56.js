import{_ as E,$ as s,a0 as d,a1 as t,a2 as e,a3 as l,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const c={},h=t("h2",{id:"问题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),e(" 问题")],-1),u=t("p",null,[e("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),t("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),B=t("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),_=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),f=t("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),A=t("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),p={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=r('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.top/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),m=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),v=t("hr",null,null,-1),D=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：Connect Error (2002) Connection refused "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=70260025-a7fa-4130-96c8-5413dbeecf22",alt:"",loading:"lazy"})])],-1);function x(C,w){const i=a("ExternalLinkIcon"),o=a("RouterLink");return s(),d("div",null,[h,u,B,_,f,A,t("p",null,[e("最后启用google搜索，搜索到有帮助的一个 "),t("a",p,[e("MongoDB no space left on device with docker"),l(i)])]),g,t("ul",null,[t("li",null,[l(o,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[e("弱引用示例")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[e("IO相关")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[l(o,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[l(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:n(()=>[e("intro")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:n(()=>[e("raft协议")]),_:1})])]),m,b,v,D])}const j=E(c,[["render",x],["__file","linux_no_space_left_on_device.html.vue"]]);export{j as default};
