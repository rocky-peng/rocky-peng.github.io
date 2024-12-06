import{_ as i,$ as d,a0 as r,a1 as t,a2 as l,a3 as e,a4 as o,a5 as c,w as n}from"./framework-b3a0f150.js";const E={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),A=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：把我想的那么复杂，说明你也不简单。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9d47d958-4bcd-4a80-80da-1a3c72d8dfb4",alt:"",loading:"lazy"})])],-1);function g(b,F){const s=n("ExternalLinkIcon"),a=n("RouterLink");return d(),r("div",null,[u,t("p",null,[t("a",_,[l("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),p,f,t("ul",null,[t("li",null,[e(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Git笔记")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[l("synchronized原理深度剖析")]),_:1})]),t("li",null,[e(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[l("JVM垃圾收集器")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[l("KVM方式集群部署ES")]),_:1})]),t("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[l("ShadowsockServer")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[l("线上FullGC频繁的排查")]),_:1})]),t("li",null,[e(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("Redis高可用")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("AQS源码解读")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[l("SQL优化")]),_:1})]),t("li",null,[e(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[l("Linux dev shm目录")]),_:1})]),t("li",null,[e(a,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[l("随机图片在线接口")]),_:1})])]),h,B,A,m])}const y=i(E,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
