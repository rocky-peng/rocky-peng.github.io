import{_ as s,$ as r,a0 as E,a1 as t,a2 as o,a3 as e,a4 as n,a5 as c,w as a}from"./framework-b6ede5bc.js";const d={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),A=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：我曾试着吐露自己的心声，可结果，它变成了我的把柄。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4630a537-b0d9-4c95-81ab-2fc36ca4aef4",alt:"",loading:"lazy"})])],-1);function m(b,w){const i=a("ExternalLinkIcon"),l=a("RouterLink");return r(),E("div",null,[u,t("p",null,[t("a",_,[o("https://github.com/alibaba/nacos/issues/11061"),e(i)])]),p,f,t("ul",null,[t("li",null,[e(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[o("Redis笔记")]),_:1})]),t("li",null,[e(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[o("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[o("NGINX")]),_:1})]),t("li",null,[e(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[o("Spring框架源码关键点")]),_:1})]),t("li",null,[e(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[o("ShadowsockServer")]),_:1})]),t("li",null,[e(l,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[o("MAC CMS")]),_:1})]),t("li",null,[e(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[o("istio基础知识")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[o("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[e(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[o("Centos离线安装Docker")]),_:1})]),t("li",null,[e(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:n(()=>[o("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[o("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[e(l,{to:"/intro.html"},{default:n(()=>[o("intro")]),_:1})])]),h,B,A,g])}const k=s(d,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{k as default};
