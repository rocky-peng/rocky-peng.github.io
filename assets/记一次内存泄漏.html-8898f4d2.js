import{_ as r,$ as i,a0 as E,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-58787b1c.js";const d={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},u=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),A=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),f=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),b=t("hr",null,null,-1),w=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：天冷了，晚上睡觉要是冻醒了，别忘了给舍友掀一下被子。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0b22c01a-55c5-4a32-8bdf-74e645bce817",alt:"",loading:"lazy"})])],-1);function v(D,F){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),E("div",null,[t("h2",c,[_,e(),t("a",h,[e("Java的Groovy执行器内存泄露"),l(n)])]),u,B,A,f,t("p",null,[e("搜索发现了："),t("a",m,[e("Java的Groovy执行器内存泄露"),l(n)])]),p,g,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[e("synchronized原理深度剖析")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[e("kafka")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:a(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[e("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[e("ESRally性能测试步骤")]),_:1})]),t("li",null,[l(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[e("MySQL数据迁移到PGSQL")]),_:1})])]),k,y,b,w])}const C=r(d,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
