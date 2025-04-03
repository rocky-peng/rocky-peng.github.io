import{_ as r,$ as i,a0 as d,a1 as e,a2 as t,a3 as l,a4 as o,w as s}from"./framework-b3a0f150.js";const h={},c=e("h1",{id:"seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),t(" SEATA")],-1),_=e("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=e("h2",{id:"at",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),t(" AT")],-1),E=e("p",null,"基于两阶段协议的演变",-1),m=e("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=e("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=e("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),B={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),t(" AT与TCC的主要区别")],-1),w=e("ol",null,[e("li",null,"都是基于两阶段提交模型"),e("li",null,"AT适用于底层数据资源本身支持事务的场景"),e("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),k=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),S={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),g=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),C=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),x=e("hr",null,null,-1),T=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：智者不入爱河，愚者为题所困。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30732172/pexels-photo-30732172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"People performing a traditional offering ritual in a Vietnamese temple.",loading:"lazy"})])],-1);function F(y,D){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),d("div",null,[c,_,u,E,m,f,p,e("p",null,[t("扩展阅读："),e("a",B,[t("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),A,w,k,e("p",null,[t("扩展阅读："),e("a",S,[t("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),b,g,e("ul",null,[e("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(a,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[t("MySQL索引")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:o(()=>[t("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[t("Markdown软件比对")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[t("ESRally性能测试步骤")]),_:1})]),e("li",null,[l(a,{to:"/software/raft/sofajraft.html"},{default:o(()=>[t("sofajraft")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[t("K8S常用命令")]),_:1})])]),C,x,T,v])}const j=r(h,[["render",F],["__file","分布式事务Seata.html.vue"]]);export{j as default};
