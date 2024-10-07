import{_ as r,$ as i,a0 as E,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-827a3556.js";const _={},d={id:"java的groovy执行器内存泄露",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},h=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),f=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),B={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),w=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我知道虚度年华不对，但是这样，真的好过瘾啊。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=ae4413e0-e216-4fb2-b3ce-19ad62b201fa",alt:"",loading:"lazy"})])],-1);function F(k,x){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),E("div",null,[t("h2",d,[c,e(),t("a",u,[e("Java的Groovy执行器内存泄露"),l(n)])]),h,f,p,m,t("p",null,[e("搜索发现了："),t("a",B,[e("Java的Groovy执行器内存泄露"),l(n)])]),A,g,t("ul",null,[t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[l(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[e("gperftools")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("ES杂项")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})])]),b,v,w,y])}const D=r(_,[["render",F],["__file","记一次内存泄漏.html.vue"]]);export{D as default};
