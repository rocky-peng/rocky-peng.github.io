import{_ as s,$ as r,a0 as i,a1 as l,a3 as o,a4 as a,a5 as d,a2 as t,w as n}from"./framework-b3a0f150.js";const u={},h=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),E=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),p=l("hr",null,null,-1),c=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：想当一个园丁，然后在你心里，种点B树。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b4143ec5-18c7-4261-a575-8f89d5d350b6",alt:"",loading:"lazy"})])],-1);function f(A,B){const e=n("RouterLink");return r(),i("div",null,[h,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[o(e,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("常见问题")]),_:1})]),l("li",null,[o(e,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[o(e,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[t("数组转树形结构只需两步")]),_:1})]),l("li",null,[o(e,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[t("Cornell Notes System")]),_:1})]),l("li",null,[o(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("Redis高可用")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[t("异地多活")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:a(()=>[t("Javassist整理")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("JVM杂项")]),_:1})]),l("li",null,[o(e,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[o(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[t("raft协议")]),_:1})])]),E,p,c,_])}const b=s(u,[["render",f],["__file","K8S 无感发布.html.vue"]]);export{b as default};
