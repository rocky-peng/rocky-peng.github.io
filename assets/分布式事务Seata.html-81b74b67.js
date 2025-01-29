import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-b3a0f150.js";const h={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),E=t("p",null,"基于两阶段协议的演变",-1),f=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),m=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),A=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),p={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),S={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},T=t("br",null,null,-1),v=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),w=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),C=t("hr",null,null,-1),k=t("hr",null,null,-1),D=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：爱情这种事太极端，要么一生，要么陌生。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2a30e037-6c51-4a39-bfec-1f8037a0c7c3",alt:"",loading:"lazy"})])],-1);function x(P,y){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),c("div",null,[d,_,u,E,f,m,A,t("p",null,[e("扩展阅读："),t("a",p,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,b,g,t("p",null,[e("扩展阅读："),t("a",S,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),T,v,t("ul",null,[t("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[e("前后端常用技术")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[e("分布式问题")]),_:1})]),t("li",null,[l(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[l(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[e("raft协议")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("表单重复提交解决方案")]),_:1})]),t("li",null,[l(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),w,C,k,D])}const F=r(h,[["render",x],["__file","分布式事务Seata.html.vue"]]);export{F as default};
