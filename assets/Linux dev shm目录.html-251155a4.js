import{_ as r,$ as s,a0 as d,a1 as l,a2 as e,a3 as t,a4 as n,a5 as u,w as a}from"./framework-b3a0f150.js";const c={},h=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),p=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),E={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},m=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),g=l("hr",null,null,-1),w=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：哪有什么优柔寡断，还不是因为怂。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8d93a1c3-8e63-4e4c-8560-82f617227d07",alt:"",loading:"lazy"})])],-1);function A(y,S){const i=a("ExternalLinkIcon"),o=a("RouterLink");return s(),d("div",null,[h,p,l("ol",null,[_,l("li",null,[l("p",null,[e("扩展阅读："),l("a",E,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(i)])])])]),m,f,l("ul",null,[l("li",null,[t(o,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[t(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[e("JVM垃圾收集器")]),_:1})]),l("li",null,[t(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[e("随记")]),_:1})]),l("li",null,[t(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[t(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[e("MySQL索引")]),_:1})]),l("li",null,[t(o,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("JVM杂项")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("ES杂项")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[e("SQL优化")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[e("Markdown软件比对")]),_:1})]),l("li",null,[t(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:n(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[t(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),B,g,w,b])}const v=r(c,[["render",A],["__file","Linux dev shm目录.html.vue"]]);export{v as default};
