import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as a,a5 as E,w as o}from"./framework-b3a0f150.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=E('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.top/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),B={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},f=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),w=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：很多人觉得自己活得太累，实际上，他们可能只是睡得太晚。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Picturesque view of vibrant houses stacked on a hill in Riomaggiore, Liguria, Italy.",loading:"lazy"})])],-1);function b(x,L){const i=o("ExternalLinkIcon"),n=o("RouterLink");return d(),r("div",null,[c,h,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",B,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),f,m,l("ul",null,[l("li",null,[e(n,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[t("弱引用示例")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("Redis高可用")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[t("MySQL索引")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[t("Markdown软件比对")]),_:1})]),l("li",null,[e(n,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:a(()=>[t("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[t("ESRally性能测试步骤")]),_:1})]),l("li",null,[e(n,{to:"/software/linux/Linux.html"},{default:a(()=>[t("Linux")]),_:1})])]),p,A,w,g])}const y=s(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{y as default};
