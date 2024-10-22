import{_ as r,$ as i,a0 as c,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-16d560c6.js";const d={},h=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),E=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),_=e("p",null,"基于两阶段协议的演变",-1),B=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),m=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),p={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),b=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),k=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),F=e("hr",null,null,-1),D=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：不是所有的虫子，都能变成蝴蝶，有的它就是蛆。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=44989d13-39e1-4393-ba44-2eeb2cd72ccd",alt:"",loading:"lazy"})])],-1);function S(T,y){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[h,E,u,_,B,A,m,e("p",null,[t("扩展阅读："),e("a",p,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),f,b,g,e("p",null,[t("扩展阅读："),e("a",C,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),w,k,e("ul",null,[e("li",null,[l(o,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[t("NGINX")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(o,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[l(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[t("istio基础知识")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),e("li",null,[l(o,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[l(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[t("批量替换文件名中的指定字符串")]),_:1})])]),v,F,D,x])}const N=r(d,[["render",S],["__file","分布式事务Seata.html.vue"]]);export{N as default};
