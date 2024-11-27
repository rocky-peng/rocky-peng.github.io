import{_ as r,$ as i,a0 as c,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},h=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),u=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),E=e("p",null,"基于两阶段协议的演变",-1),m=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),b=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),k=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},S=e("br",null,null,-1),T=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),v=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：小时候我们都很快乐，因为那个时候我们，丑和穷都还不是那么明显。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a15482de-3166-4ee7-8f41-aee34a11de2f",alt:"",loading:"lazy"})])],-1);function D(N,y){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[h,u,_,E,m,f,p,e("p",null,[t("扩展阅读："),e("a",B,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),A,b,k,e("p",null,[t("扩展阅读："),e("a",C,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),S,T,e("ul",null,[e("li",null,[l(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(o,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[l(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[t("Mermaid示例")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("分布式问题")]),_:1})]),e("li",null,[l(o,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[t("SpringCloud总体认识")]),_:1})]),e("li",null,[l(o,{to:"/intro.html"},{default:a(()=>[t("intro")]),_:1})])]),g,w,v,x])}const J=r(d,[["render",D],["__file","分布式事务Seata.html.vue"]]);export{J as default};
