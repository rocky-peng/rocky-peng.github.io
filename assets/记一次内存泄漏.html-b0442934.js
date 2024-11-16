import{_ as r,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-6821ba0c.js";const c={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),E={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),B=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),p={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),A=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),w=t("hr",null,null,-1),x=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：人生上半场激情，下半场亲情，中间插播的都是婚外情。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f12fc77a-5820-48d7-a019-974368a99ae1",alt:"",loading:"lazy"})])],-1);function y(j,k){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[t("h2",_,[u,e(),t("a",E,[e("Java的Groovy执行器内存泄露"),l(n)])]),h,f,B,m,t("p",null,[e("搜索发现了："),t("a",p,[e("Java的Groovy执行器内存泄露"),l(n)])]),g,A,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:a(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[l(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[e("Paxos算法")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("ES杂项")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:a(()=>[e("杂记")]),_:1})])]),v,b,w,x])}const D=r(c,[["render",y],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
