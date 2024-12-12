import{_ as r,$ as c,a0 as i,a1 as e,a2 as t,a3 as l,a4 as o,w as s}from"./framework-b3a0f150.js";const E={},d=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),h=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),_=e("p",null,"基于两阶段协议的演变",-1),B=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),w=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},F=e("br",null,null,-1),D=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),k=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),x=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我们之所以关系好，全是因为，我在硬撑。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=f0a95a14-51ea-4178-8dc3-60e1e8bc261f",alt:"",loading:"lazy"})])],-1);function y(S,L){const n=s("ExternalLinkIcon"),a=s("RouterLink");return c(),i("div",null,[d,h,u,_,B,A,f,e("p",null,[t("扩展阅读："),e("a",m,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,w,C,e("p",null,[t("扩展阅读："),e("a",b,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),F,D,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[t("InnoDB存储引擎")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[t("MySQL三大日志")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[t("SQL优化")]),_:1})]),e("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})])]),k,g,x,v])}const z=r(E,[["render",y],["__file","分布式事务Seata.html.vue"]]);export{z as default};
