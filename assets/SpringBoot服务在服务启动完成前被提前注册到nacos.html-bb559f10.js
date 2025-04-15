import{_ as i,$ as r,a0 as c,a1 as t,a2 as o,a3 as e,a4 as l,a5 as E,w as n}from"./framework-b3a0f150.js";const d={},u=E('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},_=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),g=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：相亲最大的好处是，如果以后婚姻出问题，你可以把责任推给媒人。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/264520/pexels-photo-264520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Explore the sleek modern architecture of Vasco da Gama, Lisbon, highlighting its contemporary structure.",loading:"lazy"})])],-1);function b(A,w){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),c("div",null,[u,t("p",null,[t("a",p,[o("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),_,f,t("ul",null,[t("li",null,[e(a,{to:"/software/unclassified/MyBatis.html"},{default:l(()=>[o("MyBatis")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[o("弱引用示例")]),_:1})]),t("li",null,[e(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[o("Spring框架源码关键点")]),_:1})]),t("li",null,[e(a,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[o("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[e(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[o("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[o("Markdown Mermaid画图实例")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:l(()=>[o("KVM方式集群部署ES")]),_:1})]),t("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[o("ShadowsockServer")]),_:1})]),t("li",null,[e(a,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[o("MAC CMS")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[o("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[o("简易版配置中心&初探原理")]),_:1})]),t("li",null,[e(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[o("raft协议")]),_:1})])]),h,B,g,m])}const S=i(d,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{S as default};
