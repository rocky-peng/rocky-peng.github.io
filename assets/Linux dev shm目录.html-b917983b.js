import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as o,a5 as u,w as a}from"./framework-b6ede5bc.js";const c={},E=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),h=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},m=l("br",null,null,-1),p=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：大地有其边界，人类的愚蠢，却没有尽头。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=8c1bd504-77d7-411c-ba60-3a9f6a79ea02",alt:"",loading:"lazy"})])],-1);function w(k,y){const i=a("ExternalLinkIcon"),n=a("RouterLink");return d(),r("div",null,[E,_,l("ol",null,[h,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),m,p,l("ul",null,[l("li",null,[e(n,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("Notion笔记定时备份")]),_:1})]),l("li",null,[e(n,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[t("来个JVM冷知识")]),_:1})]),l("li",null,[e(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[t("Censys搜索引擎学习")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[t("kafka")]),_:1})]),l("li",null,[e(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Docker笔记")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[t("MySQL索引")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[t("Javassist整理")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[t("MySQL三大日志")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[e(n,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),B,A,g,b])}const C=s(c,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{C as default};
