import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as n}from"./framework-b3a0f150.js";const d={},h=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),E=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),p={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),x=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),F=t("hr",null,null,-1),v=t("hr",null,null,-1),y=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：上班吃外卖真的很不健康，所以我建议，不要上班。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31406340/pexels-photo-31406340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"",loading:"lazy"})])],-1);function S(T,L){const s=n("ExternalLinkIcon"),a=n("RouterLink");return i(),c("div",null,[h,_,u,E,m,A,f,t("p",null,[e("扩展阅读："),t("a",p,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(s)])]),B,b,C,t("p",null,[e("扩展阅读："),t("a",w,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(s)])]),g,x,t("ul",null,[t("li",null,[l(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[e("各种网关性能测试")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[e("异地多活")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[e("杂记")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[e("BBR加速")]),_:1})])]),k,F,v,y])}const z=r(d,[["render",S],["__file","分布式事务Seata.html.vue"]]);export{z as default};
