import{_ as s,$ as i,a0 as E,a1 as t,a2 as e,a3 as l,a4 as a,w as r}from"./framework-b3a0f150.js";const d={},_={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),B=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),f={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),w=t("hr",null,null,-1),v=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：在中国最管用的几句话，“大过年的”“给点面子”，“他还小呢”。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c2711931-b7bf-4d79-8b63-3fb7f48865be",alt:"",loading:"lazy"})])],-1);function C(k,F){const n=r("ExternalLinkIcon"),o=r("RouterLink");return i(),E("div",null,[t("h2",_,[c,e(),t("a",u,[e("Java的Groovy执行器内存泄露"),l(n)])]),h,m,p,B,t("p",null,[e("搜索发现了："),t("a",f,[e("Java的Groovy执行器内存泄露"),l(n)])]),A,g,t("ul",null,[t("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[e("常见问题")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("各种网关性能测试")]),_:1})]),t("li",null,[l(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:a(()=>[e("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[e("常用队列")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[e("JVM异常处理")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:a(()=>[e("CentOS7下Docker端口映射后防火墙失效")]),_:1})])]),b,y,w,v])}const j=s(d,[["render",C],["__file","记一次内存泄漏.html.vue"]]);export{j as default};
