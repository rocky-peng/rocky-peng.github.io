import{_ as r,$ as i,a0 as h,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},c=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),E=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},w=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),M=t("hr",null,null,-1),S=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我也是有家族传承的人，比如我爷爷对我爸说，要好好学习。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=bc0aaaf8-cee4-4d3a-9e6a-d4772663ac85",alt:"",loading:"lazy"})])],-1);function v(T,L){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),h("div",null,[c,_,u,E,m,A,f,t("p",null,[e("扩展阅读："),t("a",B,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,g,t("p",null,[e("扩展阅读："),t("a",C,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),w,k,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(o,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:a(()=>[e("JetBrains IDE 全破解")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[l(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[e("如何安装Google BBR")]),_:1})]),t("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(o,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[e("JVM异常处理")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[e("异地多活")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[l(o,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[l(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("K8S常用命令")]),_:1})])]),x,M,S,y])}const z=r(d,[["render",v],["__file","分布式事务Seata.html.vue"]]);export{z as default};
