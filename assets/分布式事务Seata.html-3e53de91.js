import{_ as r,$ as i,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-6821ba0c.js";const h={},c=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),u=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),_=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),m=t("p",null,"基于两阶段协议的演变",-1),E=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),A={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),w=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),S={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),C=t("hr",null,null,-1),v=t("hr",null,null,-1),M=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：梦想要说出来，不然别人怎么嘲笑你？ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d7857ae7-5400-4408-8892-296a8d0d6c50",alt:"",loading:"lazy"})])],-1);function T(F,D){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[c,u,_,m,E,f,p,t("p",null,[e("扩展阅读："),t("a",A,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,b,w,t("p",null,[e("扩展阅读："),t("a",S,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),g,k,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[l(o,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[e("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[e("RocketMQ")]),_:1})]),t("li",null,[l(o,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[e("Linux dev shm目录")]),_:1})])]),x,C,v,M])}const z=r(h,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{z as default};
