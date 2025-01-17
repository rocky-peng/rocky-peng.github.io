import{_ as r,$ as i,a0 as c,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},h=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),E=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),_=e("p",null,"基于两阶段协议的演变",-1),f=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),m=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),A=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),p={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),C=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),g=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),x=e("hr",null,null,-1),T=e("hr",null,null,-1),S=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：打工赚不了几个钱，但是打工能让你，没时间花钱。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1fb48b02-959b-4d0e-9442-b520025cf4ef",alt:"",loading:"lazy"})])],-1);function F(y,D){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[h,E,u,_,f,m,A,e("p",null,[t("扩展阅读："),e("a",p,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,C,b,e("p",null,[t("扩展阅读："),e("a",w,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),k,g,e("ul",null,[e("li",null,[l(o,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("MAT工具")]),_:1})]),e("li",null,[l(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[l(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[l(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[t("随记")]),_:1})]),e("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[t("SQL优化")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[t("Java面试基础")]),_:1})])]),v,x,T,S])}const L=r(d,[["render",F],["__file","分布式事务Seata.html.vue"]]);export{L as default};
