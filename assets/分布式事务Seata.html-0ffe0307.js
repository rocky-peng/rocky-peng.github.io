import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as o,w as s}from"./framework-58787b1c.js";const E={},d=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),h=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),A=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),B=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),f=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),b=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),g=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},k=t("br",null,null,-1),v=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),w=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),x=t("hr",null,null,-1),D=t("hr",null,null,-1),F=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：自从实行垃圾分类后，尸体和棺材都得分开处理。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2f229da3-3792-4a23-8452-43b6fd3c476a",alt:"",loading:"lazy"})])],-1);function T(S,P){const n=s("ExternalLinkIcon"),a=s("RouterLink");return i(),c("div",null,[d,h,u,_,A,B,f,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),p,b,g,t("p",null,[e("扩展阅读："),t("a",C,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),k,v,t("ul",null,[t("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[e("KVM 虚拟机安装")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[e("数组转树形结构只需两步")]),_:1})]),t("li",null,[l(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(a,{to:"/software/raft/sofajraft.html"},{default:o(()=>[e("sofajraft")]),_:1})])]),w,x,D,F])}const y=r(E,[["render",T],["__file","分布式事务Seata.html.vue"]]);export{y as default};
