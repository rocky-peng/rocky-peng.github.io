import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as o,a5 as u,w as a}from"./framework-b3a0f150.js";const E={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),h=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),w=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：相遇是猝不及防，而离别是蓄谋已久。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=973478b6-2e57-491e-9411-e449fa97522a",alt:"",loading:"lazy"})])],-1);function b(x,M){const i=a("ExternalLinkIcon"),n=a("RouterLink");return d(),r("div",null,[c,_,l("ol",null,[h,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),p,m,l("ul",null,[l("li",null,[e(n,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("MAT工具")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[t("MyBatis")]),_:1})]),l("li",null,[e(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[t("Spring框架源码关键点")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[e(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[e(n,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[t("RocketMQ")]),_:1})]),l("li",null,[e(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[t("Hbase 总览")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[t("BBR加速")]),_:1})])]),B,A,g,w])}const y=s(E,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{y as default};
