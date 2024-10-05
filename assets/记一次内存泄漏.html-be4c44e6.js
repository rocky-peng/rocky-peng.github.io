import{_ as s,$ as E,a0 as i,a1 as t,a2 as e,a3 as l,a4 as a,w as r}from"./framework-827a3556.js";const d={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),y=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),C=t("hr",null,null,-1),b=t("hr",null,null,-1),w=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：夜撩了酒，酒撩了你 你撩了我，穷困潦倒了我们。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=681c2756-fe17-407c-bb44-5fdb765611d7",alt:"",loading:"lazy"})])],-1);function k(v,F){const n=r("ExternalLinkIcon"),o=r("RouterLink");return E(),i("div",null,[t("h2",c,[_,e(),t("a",u,[e("Java的Groovy执行器内存泄露"),l(n)])]),h,B,A,m,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(n)])]),f,g,t("ul",null,[t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[l(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("弱引用示例")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:a(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[l(o,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:a(()=>[e("intro")]),_:1})])]),y,C,b,w])}const j=s(d,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{j as default};
