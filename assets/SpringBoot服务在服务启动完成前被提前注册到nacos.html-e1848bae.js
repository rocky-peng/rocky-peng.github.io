import{_ as s,$ as r,a0 as d,a1 as t,a2 as e,a3 as l,a4 as a,a5 as E,w as n}from"./framework-58787b1c.js";const c={},u=E('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),m=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：蹉跎于时间，困顿于金钱。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b78bdd61-8820-4767-a16c-fd86316771d8",alt:"",loading:"lazy"})])],-1);function g(b,y){const i=n("ExternalLinkIcon"),o=n("RouterLink");return r(),d("div",null,[u,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(i)])]),p,f,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("各种网关性能测试")]),_:1})]),t("li",null,[l(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[e("分库分表")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[l(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[l(o,{to:"/intro.html"},{default:a(()=>[e("intro")]),_:1})]),t("li",null,[l(o,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[e("raft协议")]),_:1})])]),h,B,m,A])}const w=s(c,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
