import{_ as s,$ as r,a0 as c,a1 as t,a2 as e,a3 as l,a4 as n,a5 as E,w as a}from"./framework-b3a0f150.js";const d={},u=E('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},B=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),f=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),g=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：别轻易为喜欢的人付出一切，以免被人知道，你的一切并不值钱。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f007cd28-6b13-4678-aacd-6e7d239f7513",alt:"",loading:"lazy"})])],-1);function A(b,k){const i=a("ExternalLinkIcon"),o=a("RouterLink");return r(),c("div",null,[u,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(i)])]),B,p,t("ul",null,[t("li",null,[l(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[e("NGINX")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[e("IO相关")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20RetryTemplate.html"},{default:n(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[l(o,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("Redis高可用")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[l(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("Docker跨主机通信方案")]),_:1})])]),f,h,g,m])}const x=s(d,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
