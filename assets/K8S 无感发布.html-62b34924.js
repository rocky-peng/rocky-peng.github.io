import{_ as E,$ as i,a0 as r,a1 as l,a3 as o,a4 as a,a5 as n,a2 as t,w as s}from"./framework-58787b1c.js";const d={},u=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),A=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：我一定要努力，让那些嘲笑我的人，被我笑死。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=efd61765-a73f-4f8e-ac48-e0a40bb88882",alt:"",loading:"lazy"})])],-1);function c(_,f){const e=s("RouterLink");return i(),r("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Git笔记")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[t("kafka")]),_:1})]),l("li",null,[o(e,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[t("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("乱七八糟的笔记")]),_:1})]),l("li",null,[o(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[t("istio基础知识")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),l("li",null,[o(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[t("Arthas使用记录")]),_:1})]),l("li",null,[o(e,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[t("JetBrains-License-Server")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[o(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[t("随机图片在线接口")]),_:1})])]),h,B,A,p])}const F=E(d,[["render",c],["__file","K8S 无感发布.html.vue"]]);export{F as default};
