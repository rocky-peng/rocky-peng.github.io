import{_ as s,$ as i,a0 as r,a1 as t,a2 as e,a3 as l,a4 as a,w as n}from"./framework-b3a0f150.js";const d={},c=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),h=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),B=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),A=t("p",null,"基于两阶段协议的演变",-1),_=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),u=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),D=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),b={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},F=t("br",null,null,-1),g=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),v=t("hr",null,null,-1),w=t("hr",null,null,-1),x=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：现在的时代，不是属于00后的，是属于厚脸皮的！ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=bc3c92a4-a349-4dca-9c87-dcdd6156296b",alt:"",loading:"lazy"})])],-1);function L(S,T){const E=n("ExternalLinkIcon"),o=n("RouterLink");return i(),r("div",null,[c,h,B,A,_,u,f,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(E)])]),p,D,C,t("p",null,[e("扩展阅读："),t("a",b,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(E)])]),F,g,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[l(o,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("Notion笔记定时备份")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[e("Paxos算法")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[e("gperftools")]),_:1})]),t("li",null,[l(o,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:a(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[e("MySQL数据迁移到PGSQL")]),_:1})])]),k,v,w,x])}const Q=s(d,[["render",L],["__file","分布式事务Seata.html.vue"]]);export{Q as default};
