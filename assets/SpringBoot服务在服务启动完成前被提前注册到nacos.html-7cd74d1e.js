import{_ as r,$ as i,a0 as c,a1 as t,a2 as o,a3 as e,a4 as a,a5 as d,w as n}from"./framework-b3a0f150.js";const E={},u=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},_=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),f=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：打工赚不了几个钱，但是打工能让你，没时间花钱。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/264520/pexels-photo-264520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Explore the sleek modern architecture of Vasco da Gama, Lisbon, highlighting its contemporary structure.",loading:"lazy"})])],-1);function A(b,S){const s=n("ExternalLinkIcon"),l=n("RouterLink");return i(),c("div",null,[u,t("p",null,[t("a",p,[o("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),_,h,t("ul",null,[t("li",null,[e(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[o("MySQL常用命令")]),_:1})]),t("li",null,[e(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[o("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[e(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[o("JVM参数设置")]),_:1})]),t("li",null,[e(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[o("随记")]),_:1})]),t("li",null,[e(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[o("提取Docker镜像中的文件")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[o("IO相关")]),_:1})]),t("li",null,[e(l,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[o("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[e(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[o("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[o("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[e(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[o("PostgreSQL高可用")]),_:1})]),t("li",null,[e(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[o("WebSocket SpringBoot Demo")]),_:1})])]),B,f,m,g])}const w=r(E,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
