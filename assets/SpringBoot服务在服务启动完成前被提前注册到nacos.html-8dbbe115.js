import{_ as i,$ as E,a0 as r,a1 as t,a2 as l,a3 as a,a4 as e,a5 as c,w as n}from"./framework-b3a0f150.js";const u={},d=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),A=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：现在不努力，以后别人壁咚的墙，都是你搬的砖。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a13ffb92-44c9-4ffd-83af-ecf786e29905",alt:"",loading:"lazy"})])],-1);function m(b,F){const s=n("ExternalLinkIcon"),o=n("RouterLink");return E(),r("div",null,[d,t("p",null,[t("a",_,[l("https://github.com/alibaba/nacos/issues/11061"),a(s)])]),p,f,t("ul",null,[t("li",null,[a(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:e(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:e(()=>[l("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[a(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[l("MySQL高可用")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:e(()=>[l("JVM参数设置")]),_:1})]),t("li",null,[a(o,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:e(()=>[l("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[a(o,{to:"/software/maccms/MAC%20CMS.html"},{default:e(()=>[l("MAC CMS")]),_:1})]),t("li",null,[a(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:e(()=>[l("Paxos算法")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:e(()=>[l("Javassist整理")]),_:1})]),t("li",null,[a(o,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:e(()=>[l("JVM异常处理")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:e(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[a(o,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:e(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:e(()=>[l("前后端常用技术")]),_:1})])]),h,B,A,g])}const y=i(u,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
