import{_ as s,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as o,w as r}from"./framework-b3a0f150.js";const E={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),_={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),B=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),k=t("hr",null,null,-1),C=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：念旧不是好习惯，尺度不稳成纠缠。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=56c89e02-c2de-4f28-ac87-a80d1c413671",alt:"",loading:"lazy"})])],-1);function w(y,x){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),d("div",null,[t("h2",c,[u,l(),t("a",_,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,f,A,m,t("p",null,[l("搜索发现了："),t("a",p,[l("Java的Groovy执行器内存泄露"),e(n)])]),g,B,t("ul",null,[t("li",null,[e(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[l("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[e(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[e(a,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[l("JetBrains IDE 全破解")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[l("Markdown Mermaid画图实例")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[l("kafka")]),_:1})]),t("li",null,[e(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("数据同步方案")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[l("常用队列")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[l("gperftools")]),_:1})]),t("li",null,[e(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[e(a,{to:"/intro.html"},{default:o(()=>[l("intro")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("分布式问题")]),_:1})])]),b,v,k,C])}const D=s(E,[["render",w],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
