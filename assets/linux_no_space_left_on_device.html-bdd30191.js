import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as o,a4 as n,a5 as c,w as a}from"./framework-6821ba0c.js";const h={},u=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),_=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),E=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),f=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),g={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=c('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),v=e("hr",null,null,-1),k=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我是个比较成熟的人，像赌气不吃东西这种事，都是吃饱后才做的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=95e0a2bc-0808-48e2-85f5-63ccb2808ac2",alt:"",loading:"lazy"})])],-1);function w(x,S){const i=a("ExternalLinkIcon"),l=a("RouterLink");return d(),r("div",null,[u,_,E,p,f,B,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",g,[t("MongoDB no space left on device with docker"),o(i)])]),m,e("ul",null,[e("li",null,[o(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:n(()=>[t("Btrace入门")]),_:1})]),e("li",null,[o(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(l,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("Redis高可用")]),_:1})]),e("li",null,[o(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[o(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:n(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:n(()=>[t("异地多活")]),_:1})]),e("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[o(l,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("Docker跨主机通信方案")]),_:1})]),e("li",null,[o(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[t("MySQL数据迁移到PGSQL")]),_:1})])]),A,b,v,k])}const F=s(h,[["render",w],["__file","linux_no_space_left_on_device.html.vue"]]);export{F as default};
