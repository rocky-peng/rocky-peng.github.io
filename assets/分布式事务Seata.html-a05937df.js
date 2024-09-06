import{_ as r,$ as i,a0 as d,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-58787b1c.js";const h={},E=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),c=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),_=e("p",null,"基于两阶段协议的演变",-1),B=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),m=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),A=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),f={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),C=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),g={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),v=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),x=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),F=e("hr",null,null,-1),k=e("hr",null,null,-1),y=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：世界那么大，我的父母应该去看看。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=118a6267-6521-4f1d-80fb-64fc6bd191c9",alt:"",loading:"lazy"})])],-1);function D(S,T){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[E,c,u,_,B,m,A,e("p",null,[t("扩展阅读："),e("a",f,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,C,b,e("p",null,[t("扩展阅读："),e("a",g,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),w,v,e("ul",null,[e("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("常见问题")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[l(o,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[l(o,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[t("异地多活")]),_:1})]),e("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("分布式问题")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),x,F,k,y])}const R=r(h,[["render",D],["__file","分布式事务Seata.html.vue"]]);export{R as default};
