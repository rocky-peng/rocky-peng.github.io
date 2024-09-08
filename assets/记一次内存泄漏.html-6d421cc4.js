import{_ as s,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,w as r}from"./framework-58787b1c.js";const u={},E={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),_={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),A=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},m=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),y=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：曾经以为三十岁很远，不料现在，十八岁已是很久以前。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=57be4e1f-6ee5-45d9-b9c6-edff42ee9637",alt:"",loading:"lazy"})])],-1);function k(w,x){const n=r("ExternalLinkIcon"),o=r("RouterLink");return i(),d("div",null,[t("h2",E,[c,e(),t("a",_,[e("Java的Groovy执行器内存泄露"),l(n)])]),h,f,B,A,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(n)])]),m,g,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Git笔记")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("MySQL常用命令")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[e("Java面试基础")]),_:1})]),t("li",null,[l(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("Docker跨主机通信方案")]),_:1})]),t("li",null,[l(o,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[e("raft协议")]),_:1})])]),b,v,y,F])}const C=s(u,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
