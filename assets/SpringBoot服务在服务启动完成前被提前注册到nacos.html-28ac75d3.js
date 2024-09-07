import{_ as i,$ as r,a0 as c,a1 as t,a2 as a,a3 as e,a4 as o,a5 as u,w as n}from"./framework-58787b1c.js";const d={},_=u('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),f={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},E=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),m=t("hr",null,null,-1),B=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：我不是那种，落井下石的人，我是直接把井封了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=22311f40-53f2-467a-8186-38074e5346e1",alt:"",loading:"lazy"})])],-1);function A(b,w){const s=n("ExternalLinkIcon"),l=n("RouterLink");return r(),c("div",null,[_,t("p",null,[t("a",f,[a("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),E,p,t("ul",null,[t("li",null,[e(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[a("synchronized原理深度剖析")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[a("MySQL杂项")]),_:1})]),t("li",null,[e(l,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[a("来个JVM冷知识")]),_:1})]),t("li",null,[e(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[a("JVM参数设置")]),_:1})]),t("li",null,[e(l,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[a("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[e(l,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[a("kafka")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[a("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[a("gperftools")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[a("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(l,{to:"/software/raft/sofajraft.html"},{default:o(()=>[a("sofajraft")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[a("杂记")]),_:1})])]),h,m,B,g])}const x=i(d,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
