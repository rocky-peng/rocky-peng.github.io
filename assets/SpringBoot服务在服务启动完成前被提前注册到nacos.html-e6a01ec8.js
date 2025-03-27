import{_ as s,$ as r,a0 as d,a1 as t,a2 as e,a3 as o,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const E={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),f=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：乞丐并不会妒忌百万富翁，但是他肯定会妒忌，收入更高的乞丐。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31196726/pexels-photo-31196726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A serene image of a Japanese woman in a kimono, standing in a Kyoto garden with cherry blossoms.",loading:"lazy"})])],-1);function b(A,S){const i=a("ExternalLinkIcon"),l=a("RouterLink");return r(),d("div",null,[u,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),o(i)])]),p,h,t("ul",null,[t("li",null,[o(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),t("li",null,[o(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[o(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[o(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),t("li",null,[o(l,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[o(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[o(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[o(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),t("li",null,[o(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:n(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[o(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[e("WebSocket SpringBoot Demo")]),_:1})]),t("li",null,[o(l,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[e("Hbase 总览")]),_:1})])]),B,f,m,g])}const w=s(E,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
