import{_ as s,$ as r,a0 as u,a1 as t,a2 as e,a3 as a,a4 as n,a5 as c,w as o}from"./framework-b6ede5bc.js";const d={},_=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),h={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),g=t("hr",null,null,-1),m=t("hr",null,null,-1),b=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：梦想就像天上的星星，以前看得到摸不到，现在既看不到也摸不到。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=82f3aa33-b222-47a0-b66a-22e255e6447a",alt:"",loading:"lazy"})])],-1);function B(x,A){const i=o("ExternalLinkIcon"),l=o("RouterLink");return r(),u("div",null,[_,t("p",null,[t("a",h,[e("https://github.com/alibaba/nacos/issues/11061"),a(i)])]),p,f,t("ul",null,[t("li",null,[a(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[a(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[e("IO相关")]),_:1})]),t("li",null,[a(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:n(()=>[e("Paxos算法")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[e("MySQL索引")]),_:1})]),t("li",null,[a(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[a(l,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[e("SQL优化")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[e("前后端常用技术")]),_:1})]),t("li",null,[a(l,{to:"/software/linux/Linux.html"},{default:n(()=>[e("Linux")]),_:1})]),t("li",null,[a(l,{to:"/other/%E5%93%88%E5%93%88%E5%93%88%E5%93%88.html"},{default:n(()=>[e("哈哈哈哈")]),_:1})]),t("li",null,[a(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[e("Linux dev shm目录")]),_:1})])]),E,g,m,b])}const y=s(d,[["render",B],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
