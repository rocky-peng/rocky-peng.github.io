import{_ as r,$ as i,a0 as E,a1 as t,a2 as o,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[o("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),A={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),w=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),v=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：你的脖子真可爱，顶着一个猪脑袋。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function k(j,x){const n=s("ExternalLinkIcon"),e=s("RouterLink");return i(),E("div",null,[t("h2",c,[_,o(),t("a",u,[o("Java的Groovy执行器内存泄露"),l(n)])]),h,B,f,m,t("p",null,[o("搜索发现了："),t("a",A,[o("Java的Groovy执行器内存泄露"),l(n)])]),p,g,t("ul",null,[t("li",null,[l(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[o("synchronized原理深度剖析")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[o("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[o("微博关注关系如何实现")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[o("如何安装Google BBR")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[o("常用队列")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[o("分库分表")]),_:1})]),t("li",null,[l(e,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[o("JVM异常处理")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:a(()=>[o("Javassist整理")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[o("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(e,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[o("Centos离线安装Docker")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[o("CountDownLatch源码解读")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[o("Markdown软件比对")]),_:1})])]),w,b,v,y])}const C=r(d,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
