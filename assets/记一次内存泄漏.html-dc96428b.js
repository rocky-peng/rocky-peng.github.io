import{_ as r,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as o,w as s}from"./framework-7f25d394.js";const _={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),E={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),A=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},B=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),F=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：垃圾，就是放错了位置的资源。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=533105d7-a272-4eaf-8838-29268ffc895d",alt:"",loading:"lazy"})])],-1);function j(w,k){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),d("div",null,[t("h2",u,[c,l(),t("a",E,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,f,p,A,t("p",null,[l("搜索发现了："),t("a",m,[l("Java的Groovy执行器内存泄露"),e(n)])]),B,g,t("ul",null,[t("li",null,[e(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("MAT工具")]),_:1})]),t("li",null,[e(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[l("来个JVM冷知识")]),_:1})]),t("li",null,[e(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("MySQL高可用")]),_:1})]),t("li",null,[e(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[l("JVM参数设置")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[l("常用队列")]),_:1})]),t("li",null,[e(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("推荐几个适用小工具")]),_:1})]),t("li",null,[e(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[l("Arthas使用记录")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[l("Javassist整理")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[e(a,{to:"/software/raft/sofajraft.html"},{default:o(()=>[l("sofajraft")]),_:1})]),t("li",null,[e(a,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:o(()=>[l("SpringCloud总体认识")]),_:1})]),t("li",null,[e(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[l("Hbase 总览")]),_:1})])]),b,v,F,y])}const J=r(_,[["render",j],["__file","记一次内存泄漏.html.vue"]]);export{J as default};
