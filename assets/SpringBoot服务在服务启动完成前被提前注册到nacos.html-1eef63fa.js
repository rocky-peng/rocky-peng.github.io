import{_ as s,$ as r,a0 as c,a1 as t,a2 as e,a3 as o,a4 as a,a5 as d,w as n}from"./framework-b3a0f150.js";const u={},p=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},E=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),m=t("hr",null,null,-1),B=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：外貌不重要，爱情看的是感觉，可是人家对丑的没感觉。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4e63735c-0318-422d-a40f-958fdef98e51",alt:"",loading:"lazy"})])],-1);function A(b,S){const i=n("ExternalLinkIcon"),l=n("RouterLink");return r(),c("div",null,[p,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),o(i)])]),E,f,t("ul",null,[t("li",null,[o(l,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[e("Btrace入门")]),_:1})]),t("li",null,[o(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[e("随记")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[o(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[e("Hadoop 一")]),_:1})]),t("li",null,[o(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[e("IO相关")]),_:1})]),t("li",null,[o(l,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[e("ShadowsockServer")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[o(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[e("常用队列")]),_:1})]),t("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),h,m,B,g])}const y=s(u,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
