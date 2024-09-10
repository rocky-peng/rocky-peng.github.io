import{_ as E,$ as a,a0 as r,a1 as l,a2 as e,a3 as t,a4 as n,a5 as d,w as i}from"./framework-58787b1c.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),B=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),_={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),g=l("hr",null,null,-1),F=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：人生就像一个茶几，上面摆满了杯具。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b3d2fdfd-9764-4d63-9b89-22e8cec92f52",alt:"",loading:"lazy"})])],-1);function b(C,y){const s=i("ExternalLinkIcon"),o=i("RouterLink");return a(),r("div",null,[c,h,l("ol",null,[B,l("li",null,[l("p",null,[e("扩展阅读："),l("a",_,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(s)])])])]),p,m,l("ul",null,[l("li",null,[t(o,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("MySQL杂项")]),_:1})]),l("li",null,[t(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[t(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("PostgreSQL定时备份")]),_:1})]),l("li",null,[t(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[e("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[t(o,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[t(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[t(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[t(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:n(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[e("前后端常用技术")]),_:1})]),l("li",null,[t(o,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[t(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})])]),A,f,g,F])}const w=E(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{w as default};
