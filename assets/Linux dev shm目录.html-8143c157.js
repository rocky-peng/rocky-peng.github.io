import{_ as s,$ as d,a0 as r,a1 as l,a2 as e,a3 as t,a4 as i,a5 as u,w as a}from"./framework-7f25d394.js";const c={},E=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),h=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),p={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},m=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：现在虚伪不叫虚伪，叫情商高。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=ba39a35a-67f8-4e89-98ac-8b4c7be416b8",alt:"",loading:"lazy"})])],-1);function w(y,x){const o=a("ExternalLinkIcon"),n=a("RouterLink");return d(),r("div",null,[E,_,l("ol",null,[h,l("li",null,[l("p",null,[e("扩展阅读："),l("a",p,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(o)])])])]),m,f,l("ul",null,[l("li",null,[t(n,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[e("Redis笔记")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[e("测试两台服务器间的网速")]),_:1})]),l("li",null,[t(n,{to:"/other/Spring%20RetryTemplate.html"},{default:i(()=>[e("Spring RetryTemplate")]),_:1})]),l("li",null,[t(n,{to:"/other/Cornell%20Notes%20System.html"},{default:i(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:i(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[t(n,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:i(()=>[e("数据同步方案")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:i(()=>[e("linux_no_space_left_on_device")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:i(()=>[e("分库分表")]),_:1})]),l("li",null,[t(n,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:i(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[t(n,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[e("Mermaid示例")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:i(()=>[e("BBR加速")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[e("杂记")]),_:1})])]),A,B,g,b])}const C=s(c,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{C as default};
