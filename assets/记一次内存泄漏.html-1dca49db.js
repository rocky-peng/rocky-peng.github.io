import{_ as s,$ as E,a0 as i,a1 as t,a2 as l,a3 as e,a4 as a,w as r}from"./framework-58787b1c.js";const d={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),B={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),D=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),b=t("hr",null,null,-1),w=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：你就是，好得不够纯粹，坏得不够彻底。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=06e5c360-83de-422f-b17d-598fe20ea1ed",alt:"",loading:"lazy"})])],-1);function v(k,x){const n=r("ExternalLinkIcon"),o=r("RouterLink");return E(),i("div",null,[t("h2",c,[_,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,m,A,f,t("p",null,[l("搜索发现了："),t("a",B,[l("Java的Groovy执行器内存泄露"),e(n)])]),p,g,t("ul",null,[t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("MySQL杂项")]),_:1})]),t("li",null,[e(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[l("Docker进行资源隔离")]),_:1})]),t("li",null,[e(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[e(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[l("K8S 无感发布")]),_:1})]),t("li",null,[e(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[l("Paxos算法")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[e(o,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("JVM杂项")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[l("SQL优化")]),_:1})]),t("li",null,[e(o,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("ESRally性能测试步骤")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[l("批量替换文件名中的指定字符串")]),_:1})])]),D,y,b,w])}const C=s(d,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
