import{_ as s,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as r}from"./framework-b6ede5bc.js";const h={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),E=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),u=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),m=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),k=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),D=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),w=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),x=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：放弃这个字，说起来简单，做起来就更简单了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d0b2bbb2-92e1-4f24-828c-a50e8c480866",alt:"",loading:"lazy"})])],-1);function T(y,S){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),c("div",null,[d,E,_,u,A,m,f,t("p",null,[e("扩展阅读："),t("a",B,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,k,t("p",null,[e("扩展阅读："),t("a",C,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),g,D,t("ul",null,[t("li",null,[l(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(a,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("数据同步方案")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[e("常用队列")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[e("Arthas使用记录")]),_:1})]),t("li",null,[l(a,{to:"/software/raft/sofajraft.html"},{default:o(()=>[e("sofajraft")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("Docker跨主机通信方案")]),_:1})]),t("li",null,[l(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:o(()=>[e("Docker隐射的端口外网不能访问")]),_:1})])]),w,v,x,F])}const z=s(h,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{z as default};
