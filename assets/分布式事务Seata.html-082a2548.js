import{_ as i,$ as r,a0 as E,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-16d560c6.js";const c={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),h=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),B=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),C=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),g={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},w=t("br",null,null,-1),D=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),x=t("hr",null,null,-1),F=t("hr",null,null,-1),T=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：人和猪的区别就是，猪一直是猪，而人有时却不是人。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a07553de-b0ba-4495-9ee0-c08c202dc160",alt:"",loading:"lazy"})])],-1);function k(y,S){const n=s("ExternalLinkIcon"),o=s("RouterLink");return r(),E("div",null,[d,h,u,_,A,B,f,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,C,b,t("p",null,[e("扩展阅读："),t("a",g,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),w,D,t("ul",null,[t("li",null,[l(o,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("Notion笔记定时备份")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("MAT工具")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[e("测试两台服务器间的网速")]),_:1})]),t("li",null,[l(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("推荐几个适用小工具")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[e("gperftools")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:a(()=>[e("Javassist整理")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("JVM杂项")]),_:1})]),t("li",null,[l(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),v,x,F,T])}const L=i(c,[["render",k],["__file","分布式事务Seata.html.vue"]]);export{L as default};
