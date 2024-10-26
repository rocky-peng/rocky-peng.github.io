import{_ as s,$ as d,a0 as i,a1 as t,a2 as e,a3 as l,a4 as o,w as r}from"./framework-16d560c6.js";const c={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),B=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),w=t("hr",null,null,-1),b=t("hr",null,null,-1),v=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：成绩不代表一切，成绩只是让别人，低头弯腰而已。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=27ad4314-7d5f-434e-a462-67fd2ddbae06",alt:"",loading:"lazy"})])],-1);function x(y,j){const n=r("ExternalLinkIcon"),a=r("RouterLink");return d(),i("div",null,[t("h2",u,[_,e(),t("a",h,[e("Java的Groovy执行器内存泄露"),l(n)])]),E,m,f,B,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(n)])]),g,k,t("ul",null,[t("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[e("NGINX")]),_:1})]),t("li",null,[l(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[e("kafka")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[e("IO相关")]),_:1})]),t("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[e("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[e("分库分表")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Docker笔记")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("CountDownLatch源码解读")]),_:1})]),t("li",null,[l(a,{to:"/software/linux/Linux.html"},{default:o(()=>[e("Linux")]),_:1})])]),A,w,b,v])}const I=s(c,[["render",x],["__file","记一次内存泄漏.html.vue"]]);export{I as default};
