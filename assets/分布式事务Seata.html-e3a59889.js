import{_ as r,$ as i,a0 as h,a1 as t,a2 as e,a3 as o,a4 as n,w as s}from"./framework-b3a0f150.js";const c={},E=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),d=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),u=t("p",null,"基于两阶段协议的演变",-1),B=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},f=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),C=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),g={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},k=t("br",null,null,-1),x=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),F=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),S=t("hr",null,null,-1),D=t("hr",null,null,-1),v=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：突然发现，起床第一件事是摸手机，睡前最后一件事是放下手机。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function w(T,N){const a=s("ExternalLinkIcon"),l=s("RouterLink");return i(),h("div",null,[E,d,_,u,B,A,p,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),o(a)])]),f,C,b,t("p",null,[e("扩展阅读："),t("a",g,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),o(a)])]),k,x,t("ul",null,[t("li",null,[o(l,{to:"/other/%E5%9C%A8%E6%B2%A1%E6%9C%89%20telnet%20%E5%92%8C%20nc%20%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%88%A4%E6%96%AD%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E9%80%9A%EF%BC%9F.html"},{default:n(()=>[e("在没有 telnet 和 nc 的世界里，如何优雅地判断端口是否通？")]),_:1})]),t("li",null,[o(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:n(()=>[e("Btrace入门")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[e("NGINX")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%88%B6%E4%BD%9CCookie%E3%80%81Local%E3%80%81Session%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E6%8F%92%E4%BB%B6.html"},{default:n(()=>[e("手把手教你制作Cookie、Local、Session数据导出插件")]),_:1})]),t("li",null,[o(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[e("随记")]),_:1})]),t("li",null,[o(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("数据同步方案")]),_:1})]),t("li",null,[o(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:n(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[o(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),t("li",null,[o(l,{to:"/intro.html"},{default:n(()=>[e("intro")]),_:1})]),t("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),F,S,D,v])}const L=r(c,[["render",w],["__file","分布式事务Seata.html.vue"]]);export{L as default};
