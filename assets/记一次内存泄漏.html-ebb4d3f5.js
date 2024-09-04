import{_ as r,$ as i,a0 as c,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-b6ede5bc.js";const d={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),E={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=e("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=e("p",null,[t("通过mat分析19g堆文件，发现： "),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=e("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),B={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),A=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),x=e("hr",null,null,-1),y=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你能接受恋爱年龄差多大？只要长得好看，上下五千年都行。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=89a0eab1-b1f7-4bf3-a306-b8d04afc890c",alt:"",loading:"lazy"})])],-1);function w(k,D){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[e("h2",_,[u,t(),e("a",E,[t("Java的Groovy执行器内存泄露"),l(n)])]),h,f,p,m,e("p",null,[t("搜索发现了："),e("a",B,[t("Java的Groovy执行器内存泄露"),l(n)])]),g,A,e("ul",null,[e("li",null,[l(o,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("MAT工具")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(o,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[t("简易版配置中心&初探原理")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("ES杂项")]),_:1})]),e("li",null,[l(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[t("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[l(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[t("SpringCloud总体认识")]),_:1})]),e("li",null,[l(o,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[t("Linux dev shm目录")]),_:1})])]),b,v,x,y])}const j=r(d,[["render",w],["__file","记一次内存泄漏.html.vue"]]);export{j as default};
