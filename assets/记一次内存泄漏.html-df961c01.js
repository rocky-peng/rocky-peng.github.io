import{_ as r,$ as i,a0 as d,a1 as t,a2 as l,a3 as e,a4 as a,w as s}from"./framework-b3a0f150.js";const _={},u={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),m=t("p",null,[l("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),p=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),A={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},B=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),y=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),b=t("hr",null,null,-1),v=t("hr",null,null,-1),w=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：你看人家鸭子，水上面保持着冷静，水下面拼命划水。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6692095/pexels-photo-6692095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A young girl in a red traditional outfit joyfully holding a bowl of fortune cookies indoors.",loading:"lazy"})])],-1);function k(x,j){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[t("h2",u,[c,l(),t("a",h,[l("Java的Groovy执行器内存泄露"),e(n)])]),E,f,m,p,t("p",null,[l("搜索发现了："),t("a",A,[l("Java的Groovy执行器内存泄露"),e(n)])]),B,g,t("ul",null,[t("li",null,[e(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[l("Oh My ZSH")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[l("KVM 虚拟机安装")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[l("各种网关性能测试")]),_:1})]),t("li",null,[e(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[l("随记")]),_:1})]),t("li",null,[e(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[e(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[l("MySQL索引")]),_:1})]),t("li",null,[e(o,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[l("JetBrains-License-Server")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:a(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[e(o,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[l("Java面试基础")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("表单重复提交解决方案")]),_:1})])]),y,b,v,w])}const L=r(_,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{L as default};
