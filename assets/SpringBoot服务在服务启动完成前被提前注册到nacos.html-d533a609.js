import{_ as s,$ as r,a0 as d,a1 as t,a2 as e,a3 as o,a4 as n,a5 as E,w as a}from"./framework-b3a0f150.js";const c={},_=E('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),u={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),f=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：别再说自己是单身狗了，你这个年纪狗都死了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2eb7f340-2c90-49d2-bbd9-e26abd79c388",alt:"",loading:"lazy"})])],-1);function A(b,w){const i=a("ExternalLinkIcon"),l=a("RouterLink");return r(),d("div",null,[_,t("p",null,[t("a",u,[e("https://github.com/alibaba/nacos/issues/11061"),o(i)])]),p,h,t("ul",null,[t("li",null,[o(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),t("li",null,[o(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[o(l,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[e("Markdown Mermaid画图实例")]),_:1})]),t("li",null,[o(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[o(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[e("分库分表")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("推荐几个适用小工具")]),_:1})]),t("li",null,[o(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[o(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})])]),f,B,m,g])}const k=s(c,[["render",A],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{k as default};
