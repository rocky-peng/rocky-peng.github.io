import{_ as s,$ as r,a0 as i,a1 as t,a2 as e,a3 as l,a4 as a,w as n}from"./framework-b3a0f150.js";const c={},d={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},u=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),A=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),m={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),y=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：如果人脑和电脑实现对接，我脑子里的钱，就能转进银行账户了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=ed38ea05-480e-4c48-ae7e-85e78128a4f9",alt:"",loading:"lazy"})])],-1);function v(w,C){const E=n("ExternalLinkIcon"),o=n("RouterLink");return r(),i("div",null,[t("h2",d,[_,e(),t("a",h,[e("Java的Groovy执行器内存泄露"),l(E)])]),u,B,f,A,t("p",null,[e("搜索发现了："),t("a",m,[e("Java的Groovy执行器内存泄露"),l(E)])]),p,g,t("ul",null,[t("li",null,[l(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[e("Paxos算法")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Docker笔记")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[e("gperftools")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[l(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/sofajraft.html"},{default:a(()=>[e("sofajraft")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[l(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("Mermaid示例")]),_:1})])]),k,b,y,F])}const D=s(c,[["render",v],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
