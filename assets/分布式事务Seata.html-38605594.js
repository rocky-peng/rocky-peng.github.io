import{_ as r,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-58787b1c.js";const c={},h=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),E=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),B=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),p={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},m=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),S={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},C=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),w=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),x=t("hr",null,null,-1),D=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：什么事情可以让你，放下尊严低声下气？抄作业。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2ac422b4-a465-4f76-bd54-f1d61a9bd8f9",alt:"",loading:"lazy"})])],-1);function T(v,L){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[h,E,u,_,A,B,f,t("p",null,[e("扩展阅读："),t("a",p,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),m,b,g,t("p",null,[e("扩展阅读："),t("a",S,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),C,k,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[e("数组转树形结构只需两步")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[e("kafka")]),_:1})]),t("li",null,[l(o,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("Redis高可用")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[e("gperftools")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("制作KVM ES镜像文件")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[l(o,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[e("SpringCloud总体认识")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})])]),w,x,D,F])}const j=r(c,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{j as default};
