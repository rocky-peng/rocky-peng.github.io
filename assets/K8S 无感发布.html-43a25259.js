import{_ as r,$ as i,a0 as s,a1 as l,a3 as o,a4 as a,a5 as d,a2 as e,w as n}from"./framework-b3a0f150.js";const u={},E=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),p=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：低质量的相处，不如高质量的独处。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=82af3c55-2e0f-46df-b0fb-8100a010aef8",alt:"",loading:"lazy"})])],-1);function _(B,A){const t=n("RouterLink");return i(),s("div",null,[E,l("ul",null,[l("li",null,[o(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[e("记一次内存泄漏")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),l("li",null,[o(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("弱引用示例")]),_:1})]),l("li",null,[o(t,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[o(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[e("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[o(t,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[e("istio基础知识")]),_:1})]),l("li",null,[o(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),l("li",null,[o(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("Redis高可用")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[e("gperftools")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[e("SQL优化")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("ES杂项")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[e("批量替换文件名中的指定字符串")]),_:1})])]),h,c,p,f])}const b=r(u,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{b as default};
