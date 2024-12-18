import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},h=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),E=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},T=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),k=t("hr",null,null,-1),S=t("hr",null,null,-1),x=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：还没来得及去沾花惹草，就被人拔光了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=015b304b-3202-40c7-bf44-efc6b32e8d62",alt:"",loading:"lazy"})])],-1);function y(D,F){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[h,_,u,E,m,A,f,t("p",null,[e("扩展阅读："),t("a",B,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,C,t("p",null,[e("扩展阅读："),t("a",w,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),T,g,t("ul",null,[t("li",null,[l(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[e("KVM方式集群部署ES")]),_:1})]),t("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[e("ShadowsockServer")]),_:1})]),t("li",null,[l(o,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[e("批量替换文件名中的指定字符串")]),_:1})])]),v,k,S,x])}const V=r(d,[["render",y],["__file","分布式事务Seata.html.vue"]]);export{V as default};
