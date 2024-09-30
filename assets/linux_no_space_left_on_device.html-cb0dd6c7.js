import{_ as d,$ as s,a0 as E,a1 as e,a2 as l,a3 as t,a4 as n,a5 as r,w as i}from"./framework-326c7dc0.js";const c={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),l(" 问题")],-1),h=e("p",null,[l("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),B=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),_=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),A=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),p=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),f={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=r('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),F=e("hr",null,null,-1),b=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我不骂人，那是因为我，动手能力比较强。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c3c3c0c4-6de4-47ad-84c2-5443e28db4eb",alt:"",loading:"lazy"})])],-1);function C(w,k){const a=i("ExternalLinkIcon"),o=i("RouterLink");return s(),E("div",null,[u,h,B,_,A,p,e("p",null,[l("最后启用google搜索，搜索到有帮助的一个 "),e("a",f,[l("MongoDB no space left on device with docker"),t(a)])]),m,e("ul",null,[e("li",null,[t(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[l("常见问题")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[l("Redis笔记")]),_:1})]),e("li",null,[t(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(o,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[t(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[l("随记")]),_:1})]),e("li",null,[t(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[l("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[t(o,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[l("kafka")]),_:1})]),e("li",null,[t(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[l("istio基础知识")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[t(o,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[t(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})])]),g,F,b,x])}const D=d(c,[["render",C],["__file","linux_no_space_left_on_device.html.vue"]]);export{D as default};
