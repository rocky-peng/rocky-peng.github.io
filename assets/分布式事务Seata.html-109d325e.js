import{_ as i,$ as r,a0 as c,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-16d560c6.js";const h={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),u=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),E=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),B=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),m=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),f={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),x={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},T=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),w=t("hr",null,null,-1),C=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我们之间就像一场游戏，我练到满级，你却删了游戏。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7b2e40ba-653f-4ecb-b864-df2e2ee8c28c",alt:"",loading:"lazy"})])],-1);function L(D,F){const n=s("ExternalLinkIcon"),o=s("RouterLink");return r(),c("div",null,[d,u,E,_,A,B,m,t("p",null,[e("扩展阅读："),t("a",f,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,g,t("p",null,[e("扩展阅读："),t("a",x,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),T,k,t("ul",null,[t("li",null,[l(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[e("RocketMQ")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[l(o,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[e("Nginx的双向认证配置")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[l(o,{to:"/software/linux/Linux.html"},{default:a(()=>[e("Linux")]),_:1})]),t("li",null,[l(o,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[e("Linux dev shm目录")]),_:1})])]),v,w,C,S])}const y=i(h,[["render",L],["__file","分布式事务Seata.html.vue"]]);export{y as default};
