import{_ as r,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as a,w as s}from"./framework-16d560c6.js";const u={},E={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),c={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),w=t("hr",null,null,-1),v=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：这世上一半的冷漠，都可能是因为近视。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8a24911c-2de2-4772-beb2-48cb693f6614",alt:"",loading:"lazy"})])],-1);function k(F,I){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[t("h2",E,[_,l(),t("a",c,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,B,f,m,t("p",null,[l("搜索发现了："),t("a",p,[l("Java的Groovy执行器内存泄露"),e(n)])]),A,g,t("ul",null,[t("li",null,[e(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[l("Oh My ZSH")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[l("MyBatis")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[l("Redis笔记")]),_:1})]),t("li",null,[e(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[l("各种网关性能测试")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[l("NGINX")]),_:1})]),t("li",null,[e(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:a(()=>[l("Spring框架源码关键点")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[l("线上FullGC频繁的排查")]),_:1})]),t("li",null,[e(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[l("istio基础知识")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[l("InnoDB存储引擎")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[e(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})])]),b,y,w,v])}const C=r(u,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
