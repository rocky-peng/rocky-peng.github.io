import{_ as r,$ as i,a0 as d,a1 as e,a2 as t,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const h={},c=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),_=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),E=e("p",null,"基于两阶段协议的演变",-1),m=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),f={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),b=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),C=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),g=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),S=e("hr",null,null,-1),x=e("hr",null,null,-1),y=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：曾经给我泼凉水的人，没关系的，我烧开了还会还给你的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4cd8e3ce-b3da-4617-8a63-36ce71f7088d",alt:"",loading:"lazy"})])],-1);function F(T,z){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),d("div",null,[c,_,u,E,m,A,p,e("p",null,[t("扩展阅读："),e("a",f,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,b,C,e("p",null,[t("扩展阅读："),e("a",w,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),k,g,e("ul",null,[e("li",null,[l(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(o,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[t("随记")]),_:1})]),e("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[t("Hadoop 一")]),_:1})]),e("li",null,[l(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("数据同步方案")]),_:1})]),e("li",null,[l(o,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[l(o,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[t("异地多活")]),_:1})]),e("li",null,[l(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[l(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[t("vuepress-theme-hope使用心得")]),_:1})])]),v,S,x,y])}const j=r(h,[["render",F],["__file","分布式事务Seata.html.vue"]]);export{j as default};
