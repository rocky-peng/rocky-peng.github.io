import{_ as r,$ as i,a0 as d,a1 as t,a2 as o,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const c={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},E=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},u=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),m=t("p",null,[o("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),w=t("hr",null,null,-1),k=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：从今天开始我不会再洗头，因为我要在跨年的时候，为你下一场雪。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function x(y,D){const n=s("ExternalLinkIcon"),e=s("RouterLink");return i(),d("div",null,[t("h2",_,[E,o(),t("a",h,[o("Java的Groovy执行器内存泄露"),l(n)])]),u,B,m,f,t("p",null,[o("搜索发现了："),t("a",p,[o("Java的Groovy执行器内存泄露"),l(n)])]),A,g,t("ul",null,[t("li",null,[l(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[o("Git笔记")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[o("Btrace入门")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[o("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[o("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(e,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[o("ShadowsockServer")]),_:1})]),t("li",null,[l(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[o("istio基础知识")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[o("InnoDB存储引擎")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[o("AQS源码解读")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[o("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[l(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[o("Nginx的双向认证配置")]),_:1})]),t("li",null,[l(e,{to:"/intro.html"},{default:a(()=>[o("intro")]),_:1})]),t("li",null,[l(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[o("K8S常用命令")]),_:1})])]),b,v,w,k])}const F=r(c,[["render",x],["__file","记一次内存泄漏.html.vue"]]);export{F as default};
