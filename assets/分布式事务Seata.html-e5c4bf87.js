import{_ as r,$ as i,a0 as d,a1 as e,a2 as t,a3 as l,a4 as o,w as s}from"./framework-16d560c6.js";const h={},c=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),u=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),E=e("p",null,"基于两阶段协议的演变",-1),A=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),m=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),C=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),v={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),w=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),F=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),k=e("hr",null,null,-1),x=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：钱买不来爱情，但是可以买走爱情。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d073589f-f35c-42a5-a21a-8f0f73a2559a",alt:"",loading:"lazy"})])],-1);function y(D,S){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),d("div",null,[c,u,_,E,A,f,m,e("p",null,[t("扩展阅读："),e("a",B,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,C,b,e("p",null,[t("扩展阅读："),e("a",v,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),T,w,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[t("MyBatis")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[l(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("高可用通用方案")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[t("线上FullGC频繁的排查")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[t("Java面试基础")]),_:1})]),e("li",null,[l(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),F,g,k,x])}const L=r(h,[["render",y],["__file","分布式事务Seata.html.vue"]]);export{L as default};
