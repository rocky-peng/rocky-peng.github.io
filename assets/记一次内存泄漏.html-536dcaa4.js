import{_ as s,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as o,w as r}from"./framework-7a325de9.js";const E={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),m=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),w=t("hr",null,null,-1),k=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：打工人心情不好的时候，骂公司总是没错的。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=85d80195-9c80-4bb0-aa68-f05f7590b39e",alt:"",loading:"lazy"})])],-1);function v(x,L){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),d("div",null,[t("h2",c,[_,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,B,m,f,t("p",null,[l("搜索发现了："),t("a",p,[l("Java的Groovy执行器内存泄露"),e(n)])]),A,g,t("ul",null,[t("li",null,[e(a,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[l("MyBatis")]),_:1})]),t("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[l("Markdown Mermaid画图实例")]),_:1})]),t("li",null,[e(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[l("ShadowsockServer")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:o(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[e(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("高可用通用方案")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[l("常用队列")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[l("异地多活")]),_:1})]),t("li",null,[e(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[e(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("Docker跨主机通信方案")]),_:1})]),t("li",null,[e(a,{to:"/software/linux/Linux.html"},{default:o(()=>[l("Linux")]),_:1})])]),b,w,k,y])}const S=s(E,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{S as default};
