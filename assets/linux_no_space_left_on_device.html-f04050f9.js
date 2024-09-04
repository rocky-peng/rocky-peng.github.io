import{_ as E,$ as s,a0 as d,a1 as e,a2 as t,a3 as l,a4 as a,a5 as r,w as n}from"./framework-3895bb24.js";const c={},h=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),t(" 问题")],-1),B=e("p",null,[t("发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下 "),e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081485386.png",alt:"",loading:"lazy"})],-1),u=e("p",null,"按照提示以为是磁盘空间满了，于是执行 df -h查看：",-1),_=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629081491669.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),p=e("p",null,"这个明明显示还有磁盘空间的，这是为啥？",-1),A=e("p",null,"后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。",-1),f={href:"https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker",target:"_blank",rel:"noopener noreferrer"},g=r('<p>本机执行df -i，果然出现了链接里一样的情况 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081499054.png" alt="" loading="lazy"></p><p>于是网上查inode的相关资料，大致结论如下：</p><ol><li>Linux下一个文件夹或者一个文件就会占用一个inode资源</li><li>inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘</li><li>如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增</li><li>删除一个文件夹或者文件就能释放一个inode资源</li></ol><p>上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode 我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。 所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ol><li>删除不用的文件和文件夹释放inode</li><li>迁移数据到新磁盘然后格式化重新指定inode</li></ol><p>当时临时采用了第一个方案，但没多久又出现同样的问题了。</p><p>后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的）， 但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),v=e("hr",null,null,-1),C=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我挺会哄女生睡觉的，只要我一问在吗，她们就说要睡觉了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=29e6b5db-eb37-40b8-aaa4-78e10fda42b3",alt:"",loading:"lazy"})])],-1);function F(x,w){const i=n("ExternalLinkIcon"),o=n("RouterLink");return s(),d("div",null,[h,B,u,_,p,A,e("p",null,[t("最后启用google搜索，搜索到有帮助的一个 "),e("a",f,[t("MongoDB no space left on device with docker"),l(i)])]),g,e("ul",null,[e("li",null,[l(o,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:a(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[l(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[t("IO相关")]),_:1})]),e("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[t("index方法压力测试记录")]),_:1})]),e("li",null,[l(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:a(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[l(o,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),m,b,v,C])}const k=E(c,[["render",F],["__file","linux_no_space_left_on_device.html.vue"]]);export{k as default};
