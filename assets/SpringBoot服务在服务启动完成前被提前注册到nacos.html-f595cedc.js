import{_ as i,$ as r,a0 as d,a1 as t,a2 as e,a3 as l,a4 as o,a5 as c,w as n}from"./framework-b3a0f150.js";const u={},E=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),_={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},p=t("br",null,null,-1),f=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),m=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：西游记告诉我们，有个猪一样的队友，能让团队上西天。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=56676af8-8566-4e5f-92ff-20c3792da4d5",alt:"",loading:"lazy"})])],-1);function b(A,y){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[E,t("p",null,[t("a",_,[e("https://github.com/alibaba/nacos/issues/11061"),l(s)])]),p,f,t("ul",null,[t("li",null,[l(a,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[e("MyBatis")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(a,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[e("线上FullGC频繁的排查")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:o(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[e("MySQL索引")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("ES杂项")]),_:1})]),t("li",null,[l(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Hbase 总览")]),_:1})])]),B,h,m,g])}const w=i(u,[["render",b],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{w as default};
