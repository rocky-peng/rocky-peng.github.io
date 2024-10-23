import{_ as s,$ as r,a0 as E,a1 as l,a2 as t,a3 as e,a4 as a,a5 as d,w as o}from"./framework-16d560c6.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),B=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),h=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),p={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},_=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),w=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：我嘴里的舌头，可不是一般的舌头，是贪吃舌。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c2234fe4-c67f-4d0b-9abf-3c5e354047cc",alt:"",loading:"lazy"})])],-1);function b(C,F){const i=o("ExternalLinkIcon"),n=o("RouterLink");return r(),E("div",null,[c,B,l("ol",null,[h,l("li",null,[l("p",null,[t("扩展阅读："),l("a",p,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),_,f,l("ul",null,[l("li",null,[e(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("常见问题")]),_:1})]),l("li",null,[e(n,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[t("JVM参数设置")]),_:1})]),l("li",null,[e(n,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(n,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[t("IO相关")]),_:1})]),l("li",null,[e(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("JVM杂项")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),m,A,g,w])}const v=s(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{v as default};
