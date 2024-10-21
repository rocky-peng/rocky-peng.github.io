import{_ as r,$ as i,a0 as E,a1 as e,a2 as t,a3 as l,a4 as a,w as n}from"./framework-16d560c6.js";const d={},h={id:"java的groovy执行器内存泄露",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#java的groovy执行器内存泄露","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},c=e("p",null,"一个朋友遇到的： 32g内存的机器跑了一个java应用， 发现内存基本占用完了 dump堆下来发现有19G，还有10多g是占用的堆外内存",-1),B=e("p",null,"堆内存包括哪些？主要是青年代和老年代 堆外内存呢？主要存放的是class对象、代码、mmap、还有c语言层面上使用的直接内存",-1),p=e("p",null,[t("通过mat分析19g堆文件，发现： "),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675769877706500.jpg",alt:"",loading:"lazy"}),e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/675776171111800.jpg",alt:"",loading:"lazy"})],-1),m=e("p",null,"发现groovy相关的对象和char数组两个，加起来占用了30%的堆内存",-1),f={href:"https://blog.csdn.net/ld851/article/details/111180179",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),g=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),y=e("hr",null,null,-1),j=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：听说你过的不好，我蹲在门口，笑了一整天。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=ef6709c8-5728-464a-85a3-66be536f1508",alt:"",loading:"lazy"})])],-1);function w(x,D){const s=n("ExternalLinkIcon"),o=n("RouterLink");return i(),E("div",null,[e("h2",h,[_,t(),e("a",u,[t("Java的Groovy执行器内存泄露"),l(s)])]),c,B,p,m,e("p",null,[t("搜索发现了："),e("a",f,[t("Java的Groovy执行器内存泄露"),l(s)])]),A,g,e("ul",null,[e("li",null,[l(o,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[l(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[t("K8S 无感发布")]),_:1})]),e("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[t("IO相关")]),_:1})]),e("li",null,[l(o,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),e("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[t("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("表单重复提交解决方案")]),_:1})])]),v,b,y,j])}const C=r(d,[["render",w],["__file","记一次内存泄漏.html.vue"]]);export{C as default};
