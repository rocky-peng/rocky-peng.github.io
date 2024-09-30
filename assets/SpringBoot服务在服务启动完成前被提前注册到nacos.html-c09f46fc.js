import{_ as s,$ as r,a0 as E,a1 as t,a2 as a,a3 as o,a4 as e,a5 as c,w as n}from"./framework-326c7dc0.js";const d={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),f={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},_=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),B=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：夜深了，拿起我最喜欢的书，盖在了泡面上。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=48f36a1e-5f0d-4bf8-98e1-fc6022f45084",alt:"",loading:"lazy"})])],-1);function g(b,w){const i=n("ExternalLinkIcon"),l=n("RouterLink");return r(),E("div",null,[u,t("p",null,[t("a",f,[a("https://github.com/alibaba/nacos/issues/11061"),o(i)])]),_,p,t("ul",null,[t("li",null,[o(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:e(()=>[a("记一次内存泄漏")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:e(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:e(()=>[a("Git笔记")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:e(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mq/kafka.html"},{default:e(()=>[a("kafka")]),_:1})]),t("li",null,[o(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:e(()=>[a("istio基础知识")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:e(()=>[a("Javassist整理")]),_:1})]),t("li",null,[o(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:e(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[o(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:e(()=>[a("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[o(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[a("CountDownLatch源码解读")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:e(()=>[a("前后端常用技术")]),_:1})]),t("li",null,[o(l,{to:"/software/raft/sofajraft.html"},{default:e(()=>[a("sofajraft")]),_:1})])]),A,h,B,m])}const C=s(d,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{C as default};
