import{_ as s,$ as r,a0 as n,a1 as l,a3 as o,a4 as a,a5 as i,a2 as e,w as d}from"./framework-326c7dc0.js";const u={},h=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),E=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),p=l("hr",null,null,-1),B=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：上班后你会发现，不是别人比你傻，而是别人比你会装傻。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eb869d71-6618-4edc-99f3-727079850ce3",alt:"",loading:"lazy"})])],-1);function A(_,f){const t=d("RouterLink");return r(),n("div",null,[h,l("ul",null,[l("li",null,[o(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Redis笔记")]),_:1})]),l("li",null,[o(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),l("li",null,[o(t,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[e("ShadowsockServer")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[e("线上FullGC频繁的排查")]),_:1})]),l("li",null,[o(t,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[e("CountDownLatch源码解读")]),_:1})]),l("li",null,[o(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[o(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:a(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[o(t,{to:"/software/linux/Linux.html"},{default:a(()=>[e("Linux")]),_:1})]),l("li",null,[o(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("PostgreSQL高可用")]),_:1})]),l("li",null,[o(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[e("Linux dev shm目录")]),_:1})])]),E,p,B,c])}const b=s(u,[["render",A],["__file","K8S 无感发布.html.vue"]]);export{b as default};
