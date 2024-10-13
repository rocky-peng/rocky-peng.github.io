import{_ as r,$ as i,a0 as d,a1 as t,a2 as e,a3 as o,a4 as a,w as s}from"./framework-16d560c6.js";const c={},h={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),B=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),f={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),v=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),y=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),A=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：别总是对我忽冷忽热，不然我会感冒的。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1e3cb489-3fe2-4769-ad65-e3b489466e5d",alt:"",loading:"lazy"})])],-1);function k(w,x){const n=s("ExternalLinkIcon"),l=s("RouterLink");return i(),d("div",null,[t("h2",h,[_,e(),t("a",u,[e("Java的Groovy执行器内存泄露"),o(n)])]),E,m,p,B,t("p",null,[e("搜索发现了："),t("a",f,[e("Java的Groovy执行器内存泄露"),o(n)])]),g,v,t("ul",null,[t("li",null,[o(l,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[o(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[e("synchronized原理深度剖析")]),_:1})]),t("li",null,[o(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[o(l,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[o(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[e("ShadowsockServer")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[o(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[e("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[o(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),t("li",null,[o(l,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("K8S常用命令")]),_:1})]),t("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),y,b,A,S])}const L=r(c,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{L as default};
