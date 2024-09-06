import{_ as i,$ as r,a0 as d,a1 as t,a2 as o,a3 as e,a4 as a,a5 as c,w as n}from"./framework-58787b1c.js";const u={},_=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),f={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),A=t("hr",null,null,-1),g=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：我登过最高的峰，叫早高峰。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=7478d763-940e-4ef9-a1c5-268fa2fa5dfe",alt:"",loading:"lazy"})])],-1);function B(b,k){const s=n("ExternalLinkIcon"),l=n("RouterLink");return r(),d("div",null,[_,t("p",null,[t("a",f,[o("https://github.com/alibaba/nacos/issues/11061"),e(s)])]),p,h,t("ul",null,[t("li",null,[e(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[o("NGINX")]),_:1})]),t("li",null,[e(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[o("随记")]),_:1})]),t("li",null,[e(l,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[o("Censys搜索引擎学习")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[o("测试两台服务器间的网速")]),_:1})]),t("li",null,[e(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[o("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[e(l,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[o("Redis高可用")]),_:1})]),t("li",null,[e(l,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[o("Arthas使用记录")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[o("gperftools")]),_:1})]),t("li",null,[e(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[o("Centos离线安装Docker")]),_:1})]),t("li",null,[e(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[o("ShadowsockServer配置")]),_:1})]),t("li",null,[e(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[o("GitHub Workflow突然报错")]),_:1})])]),E,A,g,m])}const y=i(u,[["render",B],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
