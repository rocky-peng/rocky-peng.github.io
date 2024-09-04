import{_ as s,$ as r,a0 as E,a1 as t,a2 as l,a3 as o,a4 as e,a5 as u,w as n}from"./framework-b6ede5bc.js";const d={},c=u('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),A=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),f=t("hr",null,null,-1),B=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：为什么追到手后，态度会变？你考完试还看书吗？ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=bb9726d1-2df0-47c8-a332-627fe64d4b77",alt:"",loading:"lazy"})])],-1);function m(b,w){const i=n("ExternalLinkIcon"),a=n("RouterLink");return r(),E("div",null,[c,t("p",null,[t("a",_,[l("https://github.com/alibaba/nacos/issues/11061"),o(i)])]),p,A,t("ul",null,[t("li",null,[o(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:e(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[o(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:e(()=>[l("Redis笔记")]),_:1})]),t("li",null,[o(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:e(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[o(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:e(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[o(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:e(()=>[l("Spring框架源码关键点")]),_:1})]),t("li",null,[o(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:e(()=>[l("IO相关")]),_:1})]),t("li",null,[o(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[o(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:e(()=>[l("Java面试基础")]),_:1})]),t("li",null,[o(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:e(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[o(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:e(()=>[l("GitHub Workflow突然报错")]),_:1})]),t("li",null,[o(a,{to:"/intro.html"},{default:e(()=>[l("intro")]),_:1})]),t("li",null,[o(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:e(()=>[l("Linux dev shm目录")]),_:1})])]),h,f,B,g])}const x=s(d,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
