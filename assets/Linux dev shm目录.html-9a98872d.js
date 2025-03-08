import{_ as s,$ as r,a0 as E,a1 as l,a2 as t,a3 as e,a4 as n,a5 as u,w as i}from"./framework-b3a0f150.js";const d={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.top/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),p={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},f=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：是金子总会发光，这句话通常都是用来，安慰失败者的。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Picturesque view of vibrant houses stacked on a hill in Riomaggiore, Liguria, Italy.",loading:"lazy"})])],-1);function w(x,y){const a=i("ExternalLinkIcon"),o=i("RouterLink");return r(),E("div",null,[c,h,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",p,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(a)])])])]),f,m,l("ul",null,[l("li",null,[e(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[t("Oh My ZSH")]),_:1})]),l("li",null,[e(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),l("li",null,[e(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[t("gperftools")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(o,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[e(o,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:n(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[e(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),l("li",null,[e(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[t("杂记")]),_:1})])]),A,B,g,b])}const L=s(d,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{L as default};
