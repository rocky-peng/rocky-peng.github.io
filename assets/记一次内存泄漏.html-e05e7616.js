import{_ as s,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as n,w as r}from"./framework-b3a0f150.js";const c={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},E=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),m=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),k=t("hr",null,null,-1),D=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：消极的人才会起床抱怨上班，积极的人早就请假继续躺了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1ddd7455-3b80-49df-be98-41fb1daefb29",alt:"",loading:"lazy"})])],-1);function y(C,w){const a=r("ExternalLinkIcon"),o=r("RouterLink");return i(),d("div",null,[t("h2",_,[E,e(),t("a",u,[e("Java的Groovy执行器内存泄露"),l(a)])]),h,B,m,f,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(a)])]),A,g,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Git笔记")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("来个JVM冷知识")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[l(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[e("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[l(o,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:n(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:n(()=>[e("intro")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("Docker跨主机通信方案")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[e("杂记")]),_:1})]),t("li",null,[l(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),b,v,k,D])}const J=s(c,[["render",y],["__file","记一次内存泄漏.html.vue"]]);export{J as default};
