import{_ as s,$ as E,a0 as d,a1 as e,a2 as t,a3 as o,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const c={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),u=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),_=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),p=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),A=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),B=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),f={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},m=r('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),D=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：逃避是解决不了问题的，不逃你也解决不了啊。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c002358a-2293-491b-b1e9-5a6dcfa9a5d7",alt:"",loading:"lazy"})])],-1);function k(v,w){const i=a("ExternalLinkIcon"),l=a("RouterLink");return E(),d("div",null,[h,u,_,p,A,B,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",f,[t("MongoDB no space left on device with docker"),o(i)])]),m,e("ul",null,[e("li",null,[o(l,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[o(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("常见问题")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[o(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[t("IO相关")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[t("kafka")]),_:1})]),e("li",null,[o(l,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[o(l,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[o(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[o(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),g,b,D,x])}const C=s(c,[["render",k],["__file","linux_no_space_left_on_device.html.vue"]]);export{C as default};
