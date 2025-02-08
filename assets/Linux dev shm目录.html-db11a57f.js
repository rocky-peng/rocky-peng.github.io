import{_ as i,$ as s,a0 as d,a1 as l,a2 as t,a3 as e,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const B={},u=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),A=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),c=r('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),_={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},h=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),p=l("hr",null,null,-1),F=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：不要总对人掏心掏肺，有的人不吃内脏。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=6239afbe-3a04-4751-80a6-67713612f5ea",alt:"",loading:"lazy"})])],-1);function C(w,S){const o=a("ExternalLinkIcon"),E=a("RouterLink");return s(),d("div",null,[u,A,l("ol",null,[c,l("li",null,[l("p",null,[t("扩展阅读："),l("a",_,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(o)])])])]),h,f,l("ul",null,[l("li",null,[e(E,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[t("Cornell Notes System")]),_:1})]),l("li",null,[e(E,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[e(E,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[e(E,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[t("前后端常用技术")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("分布式问题")]),_:1})]),l("li",null,[e(E,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[e(E,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[t("ESRally性能测试步骤")]),_:1})]),l("li",null,[e(E,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:n(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[e(E,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[t("K8S常用命令")]),_:1})])]),m,p,F,g])}const y=i(B,[["render",C],["__file","Linux dev shm目录.html.vue"]]);export{y as default};
