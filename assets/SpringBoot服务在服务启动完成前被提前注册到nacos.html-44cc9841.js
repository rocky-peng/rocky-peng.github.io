import{_ as s,$ as r,a0 as c,a1 as t,a2 as o,a3 as a,a4 as e,a5 as d,w as n}from"./framework-6821ba0c.js";const E={},u=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),h=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),o(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),f=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),o("：明天就要见对方家长了，好忐忑啊，毕竟是我先打的他们家小孩。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5e9e2ac1-b9c9-4adc-85a5-6ae6a6a10e08",alt:"",loading:"lazy"})])],-1);function m(b,C){const i=n("ExternalLinkIcon"),l=n("RouterLink");return r(),c("div",null,[u,t("p",null,[t("a",_,[o("https://github.com/alibaba/nacos/issues/11061"),a(i)])]),p,h,t("ul",null,[t("li",null,[a(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:e(()=>[o("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[a(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:e(()=>[o("常见问题")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:e(()=>[o("Btrace入门")]),_:1})]),t("li",null,[a(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:e(()=>[o("随记")]),_:1})]),t("li",null,[a(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:e(()=>[o("Hadoop 一")]),_:1})]),t("li",null,[a(l,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:e(()=>[o("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[a(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:e(()=>[o("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(l,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:e(()=>[o("推荐几个适用小工具")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:e(()=>[o("异地多活")]),_:1})]),t("li",null,[a(l,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:e(()=>[o("Arthas使用记录")]),_:1})]),t("li",null,[a(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[o("CountDownLatch源码解读")]),_:1})]),t("li",null,[a(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[o("PostgreSQL高可用")]),_:1})])]),A,B,f,g])}const x=s(E,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{x as default};
