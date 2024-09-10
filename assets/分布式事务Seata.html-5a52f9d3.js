import{_ as i,$ as r,a0 as c,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-58787b1c.js";const d={},E=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),h=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),B=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),k=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),D=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),F=t("hr",null,null,-1),x=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：上联「2345」，下联「6789」，横批「缺衣少食」。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=500fde78-9815-48ba-b2ee-3920b670dcff",alt:"",loading:"lazy"})])],-1);function M(T,v){const n=s("ExternalLinkIcon"),o=s("RouterLink");return r(),c("div",null,[E,h,u,_,A,B,f,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,C,t("p",null,[e("扩展阅读："),t("a",w,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),g,k,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[e("来个JVM冷知识")]),_:1})]),t("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("数据同步方案")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("推荐几个适用小工具")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[e("BBR加速")]),_:1})]),t("li",null,[l(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),D,F,x,S])}const z=i(d,[["render",M],["__file","分布式事务Seata.html.vue"]]);export{z as default};
