import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-58787b1c.js";const d={},h=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),E=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),p=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),A={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),k=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),g={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},w=t("br",null,null,-1),C=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),y=t("hr",null,null,-1),T=t("hr",null,null,-1),v=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我荒废了时间，时间便把我荒废了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0c1f2136-d119-4117-a038-548e88e63809",alt:"",loading:"lazy"})])],-1);function F(S,D){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),c("div",null,[h,_,u,E,m,p,f,t("p",null,[e("扩展阅读："),t("a",A,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,b,k,t("p",null,[e("扩展阅读："),t("a",g,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),w,C,t("ul",null,[t("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[e("kafka")]),_:1})]),t("li",null,[l(a,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(a,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[e("分库分表")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[e("常用队列")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[e("gperftools")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[e("Arthas使用记录")]),_:1})]),t("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("表单重复提交解决方案")]),_:1})])]),x,y,T,v])}const L=r(d,[["render",F],["__file","分布式事务Seata.html.vue"]]);export{L as default};
