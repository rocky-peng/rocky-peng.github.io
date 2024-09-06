import{_ as s,$ as r,a0 as d,a1 as t,a2 as a,a3 as l,a4 as n,a5 as c,w as o}from"./framework-58787b1c.js";const u={},E=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),m=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：美貌会消逝，但蠢是永恒的~ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f04de193-1d0b-484d-9c19-99c3844d5ca6",alt:"",loading:"lazy"})])],-1);function g(b,k){const i=o("ExternalLinkIcon"),e=o("RouterLink");return r(),d("div",null,[E,t("p",null,[t("a",_,[a("https://github.com/alibaba/nacos/issues/11061"),l(i)])]),f,p,t("ul",null,[t("li",null,[l(e,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[a("弱引用示例")]),_:1})]),t("li",null,[l(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[a("K8S 无感发布")]),_:1})]),t("li",null,[l(e,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[a("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[l(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[a("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[a("kafka")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[a("数据同步方案")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:n(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("AQS源码解读")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[a("Markdown软件比对")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[a("前后端常用技术")]),_:1})]),t("li",null,[l(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[a("Nginx的双向认证配置")]),_:1})]),t("li",null,[l(e,{to:"/software/raft/sofajraft.html"},{default:n(()=>[a("sofajraft")]),_:1})])]),h,B,m,A])}const C=s(u,[["render",g],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{C as default};
