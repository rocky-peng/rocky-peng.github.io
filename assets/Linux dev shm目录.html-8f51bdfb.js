import{_ as s,$ as r,a0 as d,a1 as t,a2 as l,a3 as e,a4 as o,a5 as u,w as a}from"./framework-b6ede5bc.js";const c={},E=t("ul",null,[t("li",null,"dev: 代表device"),t("li",null,"shm: 代表shared memory")],-1),_=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Untitled")],-1),h=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),p={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),m=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),g=t("hr",null,null,-1),A=t("hr",null,null,-1),b=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：长得帅的踢键子都帅，长得丑的，打高尔夫都像在铲屎。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=da6ca48a-ad1c-41bd-975c-1f3c2010cd33",alt:"",loading:"lazy"})])],-1);function w(D,v){const i=a("ExternalLinkIcon"),n=a("RouterLink");return r(),d("div",null,[E,_,t("ol",null,[h,t("li",null,[t("p",null,[l("扩展阅读："),t("a",p,[l("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),f,m,t("ul",null,[t("li",null,[e(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[l("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[e(n,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[l("NGINX")]),_:1})]),t("li",null,[e(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("JDK命令行工具")]),_:1})]),t("li",null,[e(n,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[e(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[e(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("JVM杂项")]),_:1})]),t("li",null,[e(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("分布式问题")]),_:1})]),t("li",null,[e(n,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[e(n,{to:"/intro.html"},{default:o(()=>[l("intro")]),_:1})]),t("li",null,[e(n,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[l("raft协议")]),_:1})])]),B,g,A,b])}const S=s(c,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{S as default};
