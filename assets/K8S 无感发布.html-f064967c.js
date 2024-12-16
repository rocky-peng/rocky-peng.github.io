import{_ as a,$ as r,a0 as d,a1 as l,a3 as o,a4 as E,a5 as n,a2 as t,w as i}from"./framework-b3a0f150.js";const s={},u=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),A=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：孙悟空之所以那么瘦，是因为他在炼丹炉里，燃烧了他的卡路里。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=55294e57-440c-4bc1-980c-df6c42e52ba5",alt:"",loading:"lazy"})])],-1);function B(_,f){const e=i("RouterLink");return r(),d("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:E(()=>[t("MySQL杂项")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:E(()=>[t("MySQL常用命令")]),_:1})]),l("li",null,[o(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:E(()=>[t("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:E(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[o(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[t("Docker笔记")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:E(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[o(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:E(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:E(()=>[t("JVM杂项")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:E(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mq/RocketMQ.html"},{default:E(()=>[t("RocketMQ")]),_:1})]),l("li",null,[o(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:E(()=>[t("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[o(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:E(()=>[t("GitHub Workflow突然报错")]),_:1})])]),h,c,A,p])}const D=a(s,[["render",B],["__file","K8S 无感发布.html.vue"]]);export{D as default};
