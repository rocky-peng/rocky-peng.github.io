import{_ as r,$ as s,a0 as i,a1 as l,a3 as o,a4 as a,a5 as E,a2 as t,w as d}from"./framework-326c7dc0.js";const n={},u=E('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),p=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：离远一看长发飘飘，走近一看虎背熊腰，转身一看卧槽黑山老妖。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=96d51b96-fc85-4c30-b4a0-fbcf60c1a62e",alt:"",loading:"lazy"})])],-1);function f(_,B){const e=d("RouterLink");return s(),i("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[t("Oh My ZSH")]),_:1})]),l("li",null,[o(e,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("JVM杂项")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[t("SQL优化")]),_:1})]),l("li",null,[o(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[t("Java面试基础")]),_:1})]),l("li",null,[o(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),l("li",null,[o(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("Docker跨主机通信方案")]),_:1})]),l("li",null,[o(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[t("SpringCloud总体认识")]),_:1})]),l("li",null,[o(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[t("raft协议")]),_:1})])]),c,h,p,A])}const b=r(n,[["render",f],["__file","K8S 无感发布.html.vue"]]);export{b as default};
