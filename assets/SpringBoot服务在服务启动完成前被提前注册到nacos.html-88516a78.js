import{_ as s,$ as E,a0 as r,a1 as t,a2 as l,a3 as a,a4 as e,a5 as c,w as n}from"./framework-b3a0f150.js";const B={},d=c('<p>springboot服务在服务启动完成前提前注册到nacos，gateway拿到服务提供者信息后转发请求导致请求异常</p><figure><img src="https://cdn.justdopay.com/notion/md5-619e12353bf9ad2532278053f3236247.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>上图中的例子两个时间相差3秒时间（估计因为我机子当时在做测试，cpu基本满了，导致时间相差比较大）。</p><p>版本信息：</p><p>nacos版本：2021.0.5.0</p><p>springboot版本：2.6.13</p><p>gateway中有额外写一个监听器监听nacos事件，如果是NamingEvent，则更新服务缓存。</p><p>看代码应该是这里触发了注册：</p><figure><img src="https://cdn.justdopay.com/notion/md5-288ff2d5013add15dd4968f7bdf80d86.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>提交bug给nacos，回复不是nacos的职责，所以不处理</p><p>当然有其他方法也能做到无损发布，比如结合k8s的就绪探针等等。但这样会动底层，所以自己修改了nacos源码，增加了一个就绪探测的功能，就绪后才注册到nacos中</p>',11),u={href:"https://github.com/alibaba/nacos/issues/11061",target:"_blank",rel:"noopener noreferrer"},_=t("br",null,null,-1),p=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),f=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),A=t("hr",null,null,-1),g=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：出生非典，高考肺炎。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a1913b9f-c354-4530-9571-c43e3cfdd421",alt:"",loading:"lazy"})])],-1);function m(b,D){const i=n("ExternalLinkIcon"),o=n("RouterLink");return E(),r("div",null,[d,t("p",null,[t("a",u,[l("https://github.com/alibaba/nacos/issues/11061"),a(i)])]),_,p,t("ul",null,[t("li",null,[a(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:e(()=>[l("Spring框架源码关键点")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:e(()=>[l("数组转树形结构只需两步")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mq/kafka.html"},{default:e(()=>[l("kafka")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:e(()=>[l("IO相关")]),_:1})]),t("li",null,[a(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:e(()=>[l("数据同步方案")]),_:1})]),t("li",null,[a(o,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:e(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:e(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:e(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[a(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:e(()=>[l("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:e(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[a(o,{to:"/intro.html"},{default:e(()=>[l("intro")]),_:1})]),t("li",null,[a(o,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[l("PostgreSQL高可用")]),_:1})])]),f,h,A,g])}const F=s(B,[["render",m],["__file","SpringBoot服务在服务启动完成前被提前注册到nacos.html.vue"]]);export{F as default};
