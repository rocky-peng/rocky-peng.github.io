import{_ as r,$ as i,a0 as c,a1 as t,a2 as e,a3 as l,a4 as a,w as s}from"./framework-b3a0f150.js";const h={},E=t("h1",{id:"seata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seata","aria-hidden":"true"},"#"),e(" SEATA")],-1),d=t("p",null,"四种模式：AT、TCC、SAGA、XA 四种模式",-1),u=t("h2",{id:"at",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at","aria-hidden":"true"},"#"),e(" AT")],-1),_=t("p",null,"基于两阶段协议的演变",-1),B=t("p",null,"一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。",-1),A=t("p",null,"二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。",-1),p=t("p",null,"二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。",-1),m={href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"},f=t("h2",{id:"at与tcc的主要区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#at与tcc的主要区别","aria-hidden":"true"},"#"),e(" AT与TCC的主要区别")],-1),g=t("ol",null,[t("li",null,"都是基于两阶段提交模型"),t("li",null,"AT适用于底层数据资源本身支持事务的场景"),t("li",null,"TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为")],-1),b=t("figure",null,[t("img",{src:"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-11/34297732151772.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),C={href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html",target:"_blank",rel:"noopener noreferrer"},S=t("br",null,null,-1),w=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),F=t("hr",null,null,-1),v=t("hr",null,null,-1),D=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：人最终会变成自己讨厌的人，你讨厌什么人？我讨厌有钱人。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function k(T,G){const n=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[E,d,u,_,B,A,p,t("p",null,[e("扩展阅读："),t("a",m,[e("https://seata.io/zh-cn/docs/overview/what-is-seata.html"),l(n)])]),f,g,b,t("p",null,[e("扩展阅读："),t("a",C,[e("https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"),l(n)])]),S,w,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(o,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[l(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[e("KVM方式集群部署ES")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[e("如何安装Google BBR")]),_:1})]),t("li",null,[l(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[e("AQS源码解读")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[e("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("ES杂项")]),_:1})]),t("li",null,[l(o,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[l(o,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),x,F,v,D])}const N=r(h,[["render",k],["__file","分布式事务Seata.html.vue"]]);export{N as default};
