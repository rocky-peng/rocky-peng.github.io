import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-58787b1c.js";const d={},h=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),E=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),B=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),A=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},x=t("br",null,null,-1),C=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),k=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),T=t("hr",null,null,-1),v=t("hr",null,null,-1),D=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：我通过了你的好友请求，现在我们可以开始沉默了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b5cca3d9-88e0-4dc5-b67f-1d44dd48feda",alt:"",loading:"lazy"})])],-1);function F(S,L){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),c("div",null,[h,E,u,_,B,f,A,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,g,t("p",null,[e("扩展阅读："),t("a",w,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),x,C,t("ul",null,[t("li",null,[l(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[e("Btrace入门")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:o(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[e("gperftools")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[e("前后端常用技术")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[l(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[e("BBR加速")]),_:1})])]),k,T,v,D])}const z=r(d,[["render",F],["__file","分布式事务Seata.html.vue"]]);export{z as default};
