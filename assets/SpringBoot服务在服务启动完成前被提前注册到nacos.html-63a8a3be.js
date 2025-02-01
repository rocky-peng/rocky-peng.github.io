import{_ as i,$ as r,a0 as u,a1 as t,a2 as a,a3 as e,a4 as o,a5 as c,w as n}from"./framework-b3a0f150.js";const d={},_=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},E=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),m=t("hr",null,null,-1),g=t("hr",null,null,-1),b=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：见人说人话，见鬼说鬼话，这不是虚伪而是能力。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=caaf911c-ea66-48a1-bfaa-f81f6eb8a1d9",alt:"",loading:"lazy"})])],-1);function B(A,w){const s=n("ExternalLinkIcon"),l=n("RouterLink");return r(),u("div",null,[_,t("p",null,[t("a",p,[a("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),E,f,t("ul",null,[t("li",null,[e(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[a("记一次内存泄漏")]),_:1})]),t("li",null,[e(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[e(l,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[a("IO相关")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[a("Javassist整理")]),_:1})]),t("li",null,[e(l,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:o(()=>[a("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[a("ES杂项")]),_:1})]),t("li",null,[e(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[a("Java面试基础")]),_:1})]),t("li",null,[e(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[a("GitHub Workflow突然报错")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[a("分布式问题")]),_:1})]),t("li",null,[e(l,{to:"/software/linux/Linux.html"},{default:o(()=>[a("Linux")]),_:1})])]),h,m,g,b])}const v=i(d,[["render",B],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{v as default};
