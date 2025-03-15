import{_ as i,$ as r,a0 as c,a1 as t,a2 as e,a3 as o,a4 as n,a5 as d,w as a}from"./framework-b3a0f150.js";const u={},_=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.top/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.top/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},h=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),g=t("hr",null,null,-1),m=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：你说你是我朋友，其实我知道，动物的确是人类的朋友。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31078811/pexels-photo-31078811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Colorful flowers surround a green windmill on a cloudy day in Gwangju, South Korea.",loading:"lazy"})])],-1);function b(w,A){const s=a("ExternalLinkIcon"),l=a("RouterLink");return r(),c("div",null,[_,t("p",null,[t("a",p,[e("https://github.com/alibaba/nacos/issues/11061"),o(s)])]),h,f,t("ul",null,[t("li",null,[o(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("MAT工具")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:n(()=>[e("Btrace入门")]),_:1})]),t("li",null,[o(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[o(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[o(l,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[e("index方法压力测试记录")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[e("linux_no_space_left_on_device")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("ShadowsockServer配置")]),_:1})])]),E,g,m,B])}const x=i(u,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
