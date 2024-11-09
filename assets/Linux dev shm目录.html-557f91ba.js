import{_ as s,$ as r,a0 as c,a1 as l,a2 as t,a3 as e,a4 as n,a5 as d,w as a}from"./framework-16d560c6.js";const u={},h=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),p=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},E=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),b=l("hr",null,null,-1),g=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：天气就跟女人一样善变，天气预报就跟男人一样，不靠谱。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4ec55f82-dcc2-4143-8694-d9518557b6b3",alt:"",loading:"lazy"})])],-1);function w(y,k){const i=a("ExternalLinkIcon"),o=a("RouterLink");return r(),c("div",null,[h,_,l("ol",null,[p,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),E,m,l("ul",null,[l("li",null,[e(o,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[t("MyBatis")]),_:1})]),l("li",null,[e(o,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[t("synchronized原理深度剖析")]),_:1})]),l("li",null,[e(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[e(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[t("gperftools")]),_:1})]),l("li",null,[e(o,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:n(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[e(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[t("Git Merge 、Rebase")]),_:1})]),l("li",null,[e(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[e(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("Docker跨主机通信方案")]),_:1})]),l("li",null,[e(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[t("K8S常用命令")]),_:1})])]),B,b,g,A])}const x=s(u,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{x as default};
