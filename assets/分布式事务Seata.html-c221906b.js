import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const h={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),u=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),E=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},f=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),g={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},F=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),D=t("hr",null,null,-1),w=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：学校教学楼放镜子，是为了让你知道，人丑就要多读书。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c1ab8b1c-8191-4ead-af4a-c9db928fae41",alt:"",loading:"lazy"})])],-1);function T(v,V){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[d,u,E,_,m,A,p,t("p",null,[e("扩展阅读："),t("a",B,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),f,b,C,t("p",null,[e("扩展阅读："),t("a",g,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),F,k,t("ul",null,[t("li",null,[l(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[e("KVM 虚拟机安装")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[l(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[e("Arthas使用记录")]),_:1})]),t("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[e("RocketMQ")]),_:1})]),t("li",null,[l(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:a(()=>[e("intro")]),_:1})]),t("li",null,[l(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[e("WebSocket SpringBoot Demo")]),_:1})]),t("li",null,[l(o,{to:"/software/linux/Linux.html"},{default:a(()=>[e("Linux")]),_:1})])]),x,D,w,S])}const L=r(h,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{L as default};
