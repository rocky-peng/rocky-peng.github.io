import{_ as i,$ as s,a0 as r,a1 as t,a2 as e,a3 as l,a4 as a,a5 as c,w as n}from"./framework-b6ede5bc.js";const d={},u=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),B=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：如果你特别迷恋一个人，那么你一定配不上他！ "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=f9e71ef7-e3f8-463f-999c-a0ffef30bc62",alt:"",loading:"lazy"})])],-1);function m(b,F){const E=n("ExternalLinkIcon"),o=n("RouterLink");return s(),r("div",null,[u,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(E)])]),f,p,t("ul",null,[t("li",null,[l(o,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[e("记一次内存泄漏")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[l(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[l(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[l(o,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("K8S 无感发布")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("制作KVM ES镜像文件")]),_:1})]),t("li",null,[l(o,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[e("MySQL三大日志")]),_:1})]),t("li",null,[l(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[l(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[e("RocketMQ")]),_:1})])]),A,h,B,g])}const y=i(d,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{y as default};
