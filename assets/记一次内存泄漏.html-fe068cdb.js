import{_ as r,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-b3a0f150.js";const _={},c={id:"java的groovy执行器内存泄露",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),h={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),m=t("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),f=t("p",null,[e("通过mat分析19g堆文件，发现： "),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),p=t("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),B={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),b=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),y=t("hr",null,null,-1),x=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我知道岁月会磨平我的棱角，但没想到，是把我按在地上摩擦。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0504a493-a32a-482b-91ed-a9484233956c",alt:"",loading:"lazy"})])],-1);function k(w,L){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),d("div",null,[t("h2",c,[u,e(),t("a",h,[e("Java的Groovy执行器内存泄露"),l(n)])]),E,m,f,p,t("p",null,[e("搜索发现了："),t("a",B,[e("Java的Groovy执行器内存泄露"),l(n)])]),A,g,t("ul",null,[t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[e("MySQL常用命令")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[e("NGINX")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("Redis高可用")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[e("Javassist整理")]),_:1})]),t("li",null,[l(a,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(a,{to:"/intro.html"},{default:o(()=>[e("intro")]),_:1})]),t("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[e("Linux dev shm目录")]),_:1})])]),b,v,y,x])}const F=r(_,[["render",k],["__file","记一次内存泄漏.html.vue"]]);export{F as default};
