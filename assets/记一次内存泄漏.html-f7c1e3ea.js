import{_ as s,$ as i,a0 as E,a1 as t,a2 as l,a3 as o,a4 as a,w as r}from"./framework-b3a0f150.js";const d={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},c=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),A=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),y=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),w=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：间歇性洗心革面，持续性混吃等死。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function v(j,x){const n=r("ExternalLinkIcon"),e=r("RouterLink");return i(),E("div",null,[t("h2",u,[_,l(),t("a",h,[l("Java的Groovy执行器内存泄露"),o(n)])]),c,A,B,m,t("p",null,[l("搜索发现了："),t("a",p,[l("Java的Groovy执行器内存泄露"),o(n)])]),f,g,t("ul",null,[t("li",null,[o(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[o(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[o(e,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[l("Spring RetryTemplate")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[o(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[l("index方法压力测试记录")]),_:1})]),t("li",null,[o(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[l("Arthas使用记录")]),_:1})]),t("li",null,[o(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[o(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[l("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[o(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:a(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("ESRally性能测试步骤")]),_:1})]),t("li",null,[o(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[l("随机图片在线接口")]),_:1})])]),y,b,w,F])}const D=s(d,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
