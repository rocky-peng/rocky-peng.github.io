import{_ as r,$ as i,a0 as _,a1 as e,a2 as t,a3 as l,a4 as n,w as s}from"./framework-b3a0f150.js";const d={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),p=e("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=e("p",null,[t("通过mat分析19g堆文件，发现： "),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=e("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),g={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},B=e("br",null,null,-1),A=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),y=e("hr",null,null,-1),w=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：就算是Believe，中间也藏着一个lie。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=1ba44700-2ecc-4171-a45a-2b92f650d7d3",alt:"",loading:"lazy"})])],-1);function j(k,x){const a=s("ExternalLinkIcon"),o=s("RouterLink");return i(),_("div",null,[e("h2",u,[c,t(),e("a",h,[t("Java的Groovy执行器内存泄露"),l(a)])]),E,p,f,m,e("p",null,[t("搜索发现了："),e("a",g,[t("Java的Groovy执行器内存泄露"),l(a)])]),B,A,e("ul",null,[e("li",null,[l(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("常见问题")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[t("Spring框架源码关键点")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[t("分库分表")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:n(()=>[t("MySQL三大日志")]),_:1})]),e("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(o,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:n(()=>[t("GitHub Workflow突然报错")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("分布式问题")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:n(()=>[t("SpringCloud总体认识")]),_:1})]),e("li",null,[l(o,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[t("Hbase 总览")]),_:1})])]),b,v,y,w])}const L=r(d,[["render",j],["__file","记一次内存泄漏.html.vue"]]);export{L as default};
