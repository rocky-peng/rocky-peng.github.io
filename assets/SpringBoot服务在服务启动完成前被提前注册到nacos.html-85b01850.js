import{_ as s,$ as E,a0 as d,a1 as t,a2 as e,a3 as l,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const c={},_=r('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),u={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),B=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),f=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),m=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：青春期的爱情是精神鸦片，不管你吸没吸，背后总站着无数个林则徐。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=3da63d53-e2db-4d90-85b4-a9394ad09c0a",alt:"",loading:"lazy"})])],-1);function g(b,w){const i=a("ExternalLinkIcon"),o=a("RouterLink");return E(),d("div",null,[_,t("p",null,[t("a",u,[e("https://github.com/alibaba/nacos/issues/11061"),l(i)])]),p,B,t("ul",null,[t("li",null,[l(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(o,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:n(()=>[e("JetBrains IDE 全破解")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[e("NGINX")]),_:1})]),t("li",null,[l(o,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:n(()=>[e("Paxos算法")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:n(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),f,h,m,A])}const y=s(c,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
