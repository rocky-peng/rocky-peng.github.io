import{_ as r,$ as E,a0 as i,a1 as t,a2 as l,a3 as e,a4 as a,w as s}from"./framework-b3a0f150.js";const _={},d={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),f={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),v=t("hr",null,null,-1),w=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：像我这么单纯的人，做不来这么有心机的数学题。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0ddf175e-345a-4b30-b125-ef5cdaa41100",alt:"",loading:"lazy"})])],-1);function j(k,F){const n=s("ExternalLinkIcon"),o=s("RouterLink");return E(),i("div",null,[t("h2",d,[c,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,B,A,m,t("p",null,[l("搜索发现了："),t("a",f,[l("Java的Groovy执行器内存泄露"),e(n)])]),p,g,t("ul",null,[t("li",null,[e(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[l("常用队列")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[l("linux_no_space_left_on_device")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[l("推荐几个适用小工具")]),_:1})]),t("li",null,[e(o,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("JVM杂项")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[l("MySQL三大日志")]),_:1})]),t("li",null,[e(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[l("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[e(o,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:a(()=>[l("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[l("BBR加速")]),_:1})])]),b,y,v,w])}const L=r(_,[["render",j],["__file","记一次内存泄漏.html.vue"]]);export{L as default};
