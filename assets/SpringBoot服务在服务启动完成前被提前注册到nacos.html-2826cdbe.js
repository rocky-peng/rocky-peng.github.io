import{_ as s,$ as r,a0 as c,a1 as t,a2 as e,a3 as n,a4 as l,a5 as d,w as o}from"./framework-58787b1c.js";const E={},_=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),u={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),g=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：让你不顾一切往高处爬的人，不过是想看你摔得更惨。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e5e80431-6a09-49db-a6cb-b055b51bb84f",alt:"",loading:"lazy"})])],-1);function b(A,k){const i=o("ExternalLinkIcon"),a=o("RouterLink");return r(),c("div",null,[_,t("p",null,[t("a",u,[e("https://github.com/alibaba/nacos/issues/11061"),n(i)])]),f,p,t("ul",null,[t("li",null,[n(a,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[e("Notion笔记定时备份")]),_:1})]),t("li",null,[n(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:l(()=>[e("KVM方式集群部署ES")]),_:1})]),t("li",null,[n(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[n(a,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[e("kafka")]),_:1})]),t("li",null,[n(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:l(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:l(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[e("Markdown软件比对")]),_:1})]),t("li",null,[n(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),t("li",null,[n(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("分布式问题")]),_:1})])]),B,h,g,m])}const x=s(E,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
