import{_ as r,$ as i,a0 as E,a1 as t,a2 as l,a3 as e,a4 as o,w as s}from"./framework-b7a22294.js";const d={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),A=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),F=t("hr",null,null,-1),C=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：正在输入…，给了多少人希望，又给了多少人失望。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2f9f4459-7cad-4b77-b781-ed716bdbf6b8",alt:"",loading:"lazy"})])],-1);function k(w,v){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),E("div",null,[t("h2",c,[_,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,B,f,A,t("p",null,[l("搜索发现了："),t("a",m,[l("Java的Groovy执行器内存泄露"),e(n)])]),p,g,t("ul",null,[t("li",null,[e(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("MAT工具")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Git笔记")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[l("MyBatis")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[l("synchronized原理深度剖析")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[l("MySQL常用命令")]),_:1})]),t("li",null,[e(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[l("kafka")]),_:1})]),t("li",null,[e(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[l("istio基础知识")]),_:1})]),t("li",null,[e(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Docker笔记")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[e(a,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[l("随机图片在线接口")]),_:1})])]),b,y,F,C])}const j=r(d,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{j as default};
