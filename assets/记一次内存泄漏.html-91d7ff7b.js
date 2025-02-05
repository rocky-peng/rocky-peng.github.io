import{_ as s,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,w as r}from"./framework-b3a0f150.js";const c={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),y=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),b=t("hr",null,null,-1),k=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：愿你以后，有酒有肉有姑娘，姑娘丑的不像样。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d21807c9-8a92-41c4-b539-d0a0ced56836",alt:"",loading:"lazy"})])],-1);function j(F,w){const n=r("ExternalLinkIcon"),o=r("RouterLink");return i(),d("div",null,[t("h2",_,[u,e(),t("a",h,[e("Java的Groovy执行器内存泄露"),l(n)])]),E,f,B,m,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(n)])]),A,g,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[e("Hadoop 一")]),_:1})]),t("li",null,[l(o,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("数据同步方案")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(o,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/sofajraft.html"},{default:a(()=>[e("sofajraft")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:a(()=>[e("intro")]),_:1})])]),y,v,b,k])}const x=s(c,[["render",j],["__file","记一次内存泄漏.html.vue"]]);export{x as default};
