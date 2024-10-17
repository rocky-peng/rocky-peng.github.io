import{_ as r,$ as i,a0 as d,a1 as e,a2 as t,a3 as l,a4 as o,w as s}from"./framework-16d560c6.js";const c={},h=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),E=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),u=e("p",null,"基于两阶段协议的演变",-1),f=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),m=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),A=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),w=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),k=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),x=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),C=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),S=e("hr",null,null,-1),v=e("hr",null,null,-1),T=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：健身卡办了半年都没瘦，我要不要亲自去一趟？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5e1daa69-d870-41aa-a09d-39dc71ee99f9",alt:"",loading:"lazy"})])],-1);function D(y,L){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),d("div",null,[h,E,_,u,f,m,A,e("p",null,[t("扩展阅读："),e("a",B,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,w,k,e("p",null,[t("扩展阅读："),e("a",b,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),g,x,e("ul",null,[e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:o(()=>[t("常见问题")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:o(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[t("kafka")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[t("index方法压力测试记录")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[t("MySQL索引")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[t("杂记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("表单重复提交解决方案")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})])]),C,S,v,T])}const z=r(c,[["render",D],["__file","分布式事务Seata.html.vue"]]);export{z as default};
