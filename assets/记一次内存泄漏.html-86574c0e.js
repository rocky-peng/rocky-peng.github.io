import{_ as r,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as a,w as s}from"./framework-b3a0f150.js";const c={},E={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),p=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),A={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},B=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),y=t("hr",null,null,-1),k=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：有人不会跟你一般见识，但是会给你十般脸色。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2efbcc99-5cc5-4849-a484-87141d66211e",alt:"",loading:"lazy"})])],-1);function w(x,S){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[t("h2",E,[_,l(),t("a",u,[l("Java的Groovy执行器内存泄露"),e(n)])]),h,m,f,p,t("p",null,[l("搜索发现了："),t("a",A,[l("Java的Groovy执行器内存泄露"),e(n)])]),B,g,t("ul",null,[t("li",null,[e(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[l("JVM参数设置")]),_:1})]),t("li",null,[e(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[e(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[l("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[e(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("数据同步方案")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),t("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[l("推荐几个适用小工具")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[l("gperftools")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[l("制作KVM ES镜像文件")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("ES杂项")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("ReentrantLock源码解读")]),_:1})]),t("li",null,[e(o,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("ESRally性能测试步骤")]),_:1})])]),b,v,y,k])}const D=r(c,[["render",w],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
