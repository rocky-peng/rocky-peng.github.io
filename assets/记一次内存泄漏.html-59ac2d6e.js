import{_ as E,$ as s,a0 as i,a1 as t,a2 as l,a3 as o,a4 as a,w as r}from"./framework-827a3556.js";const d={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),h=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),D=t("hr",null,null,-1),y=t("hr",null,null,-1),C=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：我这人吧，永远不要挑战我的底线，否则我又得修改底线。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a474145b-a965-4ad2-9893-aecaa11e8bdc",alt:"",loading:"lazy"})])],-1);function F(v,k){const n=r("ExternalLinkIcon"),e=r("RouterLink");return s(),i("div",null,[t("h2",_,[c,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),o(n)])]),A,h,B,f,t("p",null,[l("搜索发现了："),t("a",m,[l("Java的Groovy执行器内存泄露"),o(n)])]),p,g,t("ul",null,[t("li",null,[o(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[l("来个JVM冷知识")]),_:1})]),t("li",null,[o(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[l("K8S 无感发布")]),_:1})]),t("li",null,[o(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[o(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:a(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[o(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:a(()=>[l("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[o(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[l("MySQL三大日志")]),_:1})]),t("li",null,[o(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[l("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[o(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[l("GitHub Workflow突然报错")]),_:1})]),t("li",null,[o(e,{to:"/software/raft/sofajraft.html"},{default:a(()=>[l("sofajraft")]),_:1})]),t("li",null,[o(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("PostgreSQL高可用")]),_:1})]),t("li",null,[o(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[l("K8S常用命令")]),_:1})])]),b,D,y,C])}const L=E(d,[["render",F],["__file","记一次内存泄漏.html.vue"]]);export{L as default};
