import{_ as i,$ as r,a0 as c,a1 as t,a2 as e,a3 as o,a4 as n,a5 as E,w as a}from"./framework-b3a0f150.js";const u={},d=E('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},h=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),f=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),g=t("hr",null,null,-1),A=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：突然发现，起床第一件事是摸手机，睡前最后一件事是放下手机。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31196726/pexels-photo-31196726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A serene image of a Japanese woman in a kimono, standing in a Kyoto garden with cherry blossoms.",loading:"lazy"})])],-1);function m(b,x){const s=a("ExternalLinkIcon"),l=a("RouterLink");return r(),c("div",null,[d,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),o(s)])]),h,p,t("ul",null,[t("li",null,[o(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[o(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[o(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[e("如何安装Google BBR")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:n(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[o(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[e("gperftools")]),_:1})]),t("li",null,[o(l,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:n(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[o(l,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[o(l,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[o(l,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[e("Docker隐射的端口外网不能访问")]),_:1})])]),f,g,A,B])}const w=i(u,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
