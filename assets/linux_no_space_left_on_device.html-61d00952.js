import{_ as s,$ as d,a0 as E,a1 as e,a2 as t,a3 as l,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const r={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),h=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),f=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),A=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),p=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),B={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),C=e("hr",null,null,-1),D=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你我本无缘，全靠我花钱。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0726f6b7-c2a5-4ad9-ae16-1ae09cf79f14",alt:"",loading:"lazy"})])],-1);function x(v,k){const i=a("ExternalLinkIcon"),o=a("RouterLink");return d(),E("div",null,[u,h,_,f,A,p,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",B,[t("MongoDB no space left on device with docker"),l(i)])]),m,e("ul",null,[e("li",null,[l(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Git笔记")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[l(o,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:n(()=>[t("JetBrains IDE 全破解")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),e("li",null,[l(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[l(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[t("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[l(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(o,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[l(o,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[l(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:n(()=>[t("Java面试基础")]),_:1})])]),g,b,C,D])}const F=s(r,[["render",x],["__file","linux_no_space_left_on_device.html.vue"]]);export{F as default};
