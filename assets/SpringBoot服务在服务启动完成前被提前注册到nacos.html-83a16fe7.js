import{_ as i,$ as r,a0 as d,a1 as t,a2 as e,a3 as l,a4 as n,a5 as c,w as o}from"./framework-6821ba0c.js";const u={},E=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：别不好意思拒绝别人，反正那些好意思难为你的，也不是什么好人。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e626cd07-62fc-4a1d-9b0e-1d0bddea74bf",alt:"",loading:"lazy"})])],-1);function b(A,y){const s=o("ExternalLinkIcon"),a=o("RouterLink");return r(),d("div",null,[E,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(s)])]),p,f,t("ul",null,[t("li",null,[l(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Git笔记")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[e("JVM垃圾收集器")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[e("Javassist整理")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:n(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[l(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:n(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[l(a,{to:"/intro.html"},{default:n(()=>[e("intro")]),_:1})])]),h,B,m,g])}const M=i(u,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{M as default};
