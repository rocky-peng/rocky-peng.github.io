import{_ as r,$ as s,a0 as i,a1 as t,a2 as l,a3 as o,a4 as E,w as n}from"./framework-b3a0f150.js";const d={},B={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},c=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),u=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),p=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),C=t("hr",null,null,-1),F=t("hr",null,null,-1),b=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：过马路不要带耳机，万一要是被车撞上，耳机不就坏了么？ "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function v(w,y){const a=n("ExternalLinkIcon"),e=n("RouterLink");return s(),i("div",null,[t("h2",B,[_,l(),t("a",h,[l("Java的Groovy执行器内存泄露"),o(a)])]),c,u,A,p,t("p",null,[l("搜索发现了："),t("a",m,[l("Java的Groovy执行器内存泄露"),o(a)])]),f,g,t("ul",null,[t("li",null,[o(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[l("Redis笔记")]),_:1})]),t("li",null,[o(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:E(()=>[l("JVM垃圾收集器")]),_:1})]),t("li",null,[o(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:E(()=>[l("Spring框架源码关键点")]),_:1})]),t("li",null,[o(e,{to:"/other/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%88%B6%E4%BD%9CCookie%E3%80%81Local%E3%80%81Session%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E6%8F%92%E4%BB%B6.html"},{default:E(()=>[l("手把手教你制作Cookie、Local、Session数据导出插件")]),_:1})]),t("li",null,[o(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:E(()=>[l("K8S 无感发布")]),_:1})]),t("li",null,[o(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:E(()=>[l("如何安装Google BBR")]),_:1})]),t("li",null,[o(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:E(()=>[l("高可用通用方案")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:E(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[o(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:E(()=>[l("SQL优化")]),_:1})]),t("li",null,[o(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:E(()=>[l("Docker跨主机通信方案")]),_:1})]),t("li",null,[o(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:E(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[o(e,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:E(()=>[l("https和http混用解决办法")]),_:1})])]),k,C,F,b])}const x=r(d,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{x as default};
