import{_ as i,$ as c,a0 as r,a1 as t,a2 as a,a3 as e,a4 as o,a5 as u,w as n}from"./framework-b3a0f150.js";const d={},E=u('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),A=t("hr",null,null,-1),B=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：看武打片能减肥，因为里面经常说，你快受（瘦）死吧。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=48afd835-c05e-4377-aacf-61e28465e37d",alt:"",loading:"lazy"})])],-1);function g(b,y){const s=n("ExternalLinkIcon"),l=n("RouterLink");return c(),r("div",null,[E,t("p",null,[t("a",_,[a("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),f,p,t("ul",null,[t("li",null,[e(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[a("MAT工具")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("Git笔记")]),_:1})]),t("li",null,[e(l,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[a("Censys搜索引擎学习")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[a("Javassist整理")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[a("MySQL三大日志")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[a("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[a("前后端常用技术")]),_:1})]),t("li",null,[e(l,{to:"/software/raft/sofajraft.html"},{default:o(()=>[a("sofajraft")]),_:1})]),t("li",null,[e(l,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:o(()=>[a("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),t("li",null,[e(l,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[a("Hbase 总览")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[a("BBR加速")]),_:1})])]),h,A,B,m])}const C=i(d,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{C as default};
