import{_ as r,$ as i,a0 as c,a1 as t,a2 as l,a3 as e,a4 as a,w as n}from"./framework-b3a0f150.js";const d={},h={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),E={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},_=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),A=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),F=t("hr",null,null,-1),v=t("hr",null,null,-1),k=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：果然爱情就像龙卷风，就比如我，这辈子都没见过龙卷风。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function x(y,S){const s=n("ExternalLinkIcon"),o=n("RouterLink");return i(),c("div",null,[t("h2",h,[u,l(),t("a",E,[l("Java的Groovy执行器内存泄露"),e(s)])]),_,m,B,A,t("p",null,[l("搜索发现了："),t("a",p,[l("Java的Groovy执行器内存泄露"),e(s)])]),f,g,t("ul",null,[t("li",null,[e(o,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[l("NGINX")]),_:1})]),t("li",null,[e(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[e(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[e(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[l("ShadowsockServer")]),_:1})]),t("li",null,[e(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[l("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[l("线上FullGC频繁的排查")]),_:1})]),t("li",null,[e(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[l("Arthas使用记录")]),_:1})]),t("li",null,[e(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:a(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[e(o,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[e(o,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("PostgreSQL高可用")]),_:1})]),t("li",null,[e(o,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[l("随机图片在线接口")]),_:1})])]),b,F,v,k])}const C=r(d,[["render",x],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
