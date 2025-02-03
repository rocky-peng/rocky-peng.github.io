import{_ as r,$ as s,a0 as i,a1 as e,a3 as a,a4 as o,a5 as n,a2 as l,w as d}from"./framework-b3a0f150.js";const h={},u=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：很多父母不让娶的最终没娶，很多父母不让嫁的，最终都嫁了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4c4340f2-64ff-4514-8a44-8ccd30a9dc8d",alt:"",loading:"lazy"})])],-1);function A(f,m){const t=d("RouterLink");return s(),i("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[l("synchronized原理深度剖析")]),_:1})]),e("li",null,[a(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("常见问题")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("PostgreSQL定时备份")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[l("MAC CMS")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[l("常用队列")]),_:1})]),e("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[l("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("PostgreSQL高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[l("杂记")]),_:1})])]),p,E,c,_])}const b=r(h,[["render",A],["__file","K8S 无感发布.html.vue"]]);export{b as default};
