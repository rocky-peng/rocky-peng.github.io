import{_ as r,$ as E,a0 as i,a1 as t,a2 as l,a3 as e,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),_={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),w=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：书籍是进步的阶梯，手机是近视的电梯。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function k(F,j){const n=s("ExternalLinkIcon"),o=s("RouterLink");return E(),i("div",null,[t("h2",u,[c,l(),t("a",_,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,B,A,f,t("p",null,[l("搜索发现了："),t("a",m,[l("Java的Groovy执行器内存泄露"),e(n)])]),p,g,t("ul",null,[t("li",null,[e(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[l("Git笔记")]),_:1})]),t("li",null,[e(o,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[l("Notion笔记定时备份")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[l("KVM方式集群部署ES")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[l("线上FullGC频繁的排查")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[l("常用队列")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(o,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:a(()=>[l("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[e(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[l("分布式问题")]),_:1})])]),v,b,w,y])}const D=r(d,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
