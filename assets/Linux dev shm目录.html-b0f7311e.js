import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as i,a5 as u,w as n}from"./framework-b3a0f150.js";const c={},f=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),E=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),h={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),w=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：如果不逼自己72变，谁来替自己扛81难。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f6249d86-57bd-412c-981a-4130fa81424f",alt:"",loading:"lazy"})])],-1);function b(y,x){const o=n("ExternalLinkIcon"),a=n("RouterLink");return d(),r("div",null,[f,_,l("ol",null,[E,l("li",null,[l("p",null,[t("扩展阅读："),l("a",h,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(o)])])])]),p,m,l("ul",null,[l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[t("MySQL常用命令")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[t("Btrace入门")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:i(()=>[t("线上FullGC频繁的排查")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[t("Javassist整理")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:i(()=>[t("异地多活")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[e(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[t("Mermaid示例")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:i(()=>[t("ESRally性能测试步骤")]),_:1})]),l("li",null,[e(a,{to:"/software/raft/sofajraft.html"},{default:i(()=>[t("sofajraft")]),_:1})]),l("li",null,[e(a,{to:"/intro.html"},{default:i(()=>[t("intro")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[t("杂记")]),_:1})])]),B,A,w,g])}const F=s(c,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{F as default};
