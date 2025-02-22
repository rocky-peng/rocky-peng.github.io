import{_ as i,$ as r,a0 as d,a1 as t,a2 as e,a3 as l,a4 as o,a5 as c,w as n}from"./framework-b3a0f150.js";const E={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：不要把银行卡密码，设成女朋友的生日，不然总要换多麻烦。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=fa3db5af-2746-4c31-93b0-e8a4b419a058",alt:"",loading:"lazy"})])],-1);function A(b,w){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[u,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(s)])]),p,f,t("ul",null,[t("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),t("li",null,[l(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[e("istio基础知识")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("JVM异常处理")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[l(a,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[e("杂记")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[e("BBR加速")]),_:1})])]),B,h,m,g])}const F=i(E,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{F as default};
