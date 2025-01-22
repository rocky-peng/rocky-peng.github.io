import{_ as s,$ as c,a0 as d,a1 as e,a2 as t,a3 as l,a4 as a,w as r}from"./framework-b3a0f150.js";const i={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=e("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),m=e("p",null,[t("通过mat分析19g堆文件，发现： "),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),p=e("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),B={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),g=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),b=e("hr",null,null,-1),k=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我才不是舔狗，女神说了，我是她的犬系男友。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=998bf88d-74fc-484a-9178-42590d158cf5",alt:"",loading:"lazy"})])],-1);function x(y,C){const n=r("ExternalLinkIcon"),o=r("RouterLink");return c(),d("div",null,[e("h2",_,[u,t(),e("a",h,[t("Java的Groovy执行器内存泄露"),l(n)])]),E,f,m,p,e("p",null,[t("搜索发现了："),e("a",B,[t("Java的Groovy执行器内存泄露"),l(n)])]),A,g,e("ul",null,[e("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[t("提取Docker镜像中的文件")]),_:1})]),e("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("CountDownLatch源码解读")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(o,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[t("Linux dev shm目录")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[t("BBR加速")]),_:1})]),e("li",null,[l(o,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[t("随机图片在线接口")]),_:1})])]),v,w,b,k])}const F=s(i,[["render",x],["__file","记一次内存泄漏.html.vue"]]);export{F as default};
