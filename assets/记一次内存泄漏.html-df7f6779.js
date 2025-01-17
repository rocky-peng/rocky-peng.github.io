import{_ as s,$ as i,a0 as c,a1 as e,a2 as t,a3 as o,a4 as a,w as r}from"./framework-b3a0f150.js";const d={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=e("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=e("p",null,[t("通过mat分析19g堆文件，发现： "),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),E=e("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),g={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),B=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),w=e("hr",null,null,-1),k=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你这两天早点回家，最近偷猪的多，我怕你出事。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7cb7e7c3-b0e5-40af-a0af-4945fc5e267d",alt:"",loading:"lazy"})])],-1);function y(S,j){const n=r("ExternalLinkIcon"),l=r("RouterLink");return i(),c("div",null,[e("h2",_,[h,t(),e("a",u,[t("Java的Groovy执行器内存泄露"),o(n)])]),f,m,p,E,e("p",null,[t("搜索发现了："),e("a",g,[t("Java的Groovy执行器内存泄露"),o(n)])]),v,B,e("ul",null,[e("li",null,[o(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[o(l,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[o(l,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[t("MAC CMS")]),_:1})]),e("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),e("li",null,[o(l,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[o(l,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[o(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[t("RocketMQ")]),_:1})]),e("li",null,[o(l,{to:"/software/raft/sofajraft.html"},{default:a(()=>[t("sofajraft")]),_:1})])]),b,A,w,k])}const C=s(d,[["render",y],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
