import{_ as i,$ as r,a0 as E,a1 as t,a2 as l,a3 as e,a4 as a,a5 as c,w as n}from"./framework-b3a0f150.js";const d={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},_=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),f=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：爱你土爱你作，爱你兜里一百多，爱帮你点拼多多。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31196726/pexels-photo-31196726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Free stock photo of authentic japan, cultural japan, explore japan",loading:"lazy"})])],-1);function g(b,F){const s=n("ExternalLinkIcon"),o=n("RouterLink");return r(),E("div",null,[u,t("p",null,[t("a",p,[l("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),_,h,t("ul",null,[t("li",null,[e(o,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[l("MyBatis")]),_:1})]),t("li",null,[e(o,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[l("常见问题")]),_:1})]),t("li",null,[e(o,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),t("li",null,[e(o,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[l("测试两台服务器间的网速")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[l("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[e(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[l("istio基础知识")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),t("li",null,[e(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[l("Arthas使用记录")]),_:1})]),t("li",null,[e(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:a(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[e(o,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[e(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("Docker跨主机通信方案")]),_:1})]),t("li",null,[e(o,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[l("Hbase 总览")]),_:1})])]),A,B,f,m])}const w=i(d,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
