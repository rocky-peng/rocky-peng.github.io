import{_ as i,$ as r,a0 as c,a1 as t,a2 as e,a3 as a,a4 as l,a5 as d,w as n}from"./framework-3895bb24.js";const u={},_=d('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),p={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),E=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),B=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：坦然点，你虽然不会招蜂引蝶，但你招蚊子。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=97428271-13b1-4f5f-a929-4e4a340cc21f",alt:"",loading:"lazy"})])],-1);function b(A,y){const s=n("ExternalLinkIcon"),o=n("RouterLink");return r(),c("div",null,[_,t("p",null,[t("a",p,[e("https://github.com/alibaba/nacos/issues/11061"),a(s)])]),f,E,t("ul",null,[t("li",null,[a(o,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("弱引用示例")]),_:1})]),t("li",null,[a(o,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:l(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[a(o,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("ES杂项")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[e("前后端常用技术")]),_:1})]),t("li",null,[a(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[a(o,{to:"/software/raft/sofajraft.html"},{default:l(()=>[e("sofajraft")]),_:1})])]),h,B,m,g])}const w=i(u,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
