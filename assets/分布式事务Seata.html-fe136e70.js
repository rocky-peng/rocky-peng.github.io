import{_ as r,$ as i,a0 as h,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const d={},c=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),_=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),p=t("p",null,"基于两阶段协议的演变",-1),m=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),f=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),E=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),A={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},C=t("br",null,null,-1),x=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),v=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),k=t("hr",null,null,-1),y=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：人如果没有梦想，那跟无忧无虑有什么分别？ "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function T(F,z){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),h("div",null,[c,_,u,p,m,f,E,t("p",null,[e("扩展阅读："),t("a",A,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),B,b,g,t("p",null,[e("扩展阅读："),t("a",w,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),C,x,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[l(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[e("随记")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/sofajraft.html"},{default:a(()=>[e("sofajraft")]),_:1})]),t("li",null,[l(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("K8S常用命令")]),_:1})]),t("li",null,[l(o,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:a(()=>[e("https和http混用解决办法")]),_:1})])]),v,k,y,S])}const I=r(d,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{I as default};
