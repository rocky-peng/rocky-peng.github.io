import{_ as E,$ as r,a0 as s,a1 as t,a3 as o,a4 as a,a5 as i,a2 as e,w as n}from"./framework-b3a0f150.js";const d={},h=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),A=t("hr",null,null,-1),p=t("hr",null,null,-1),c=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：无论最后我们疏远成什么样，一个红包，就能回到当初。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=677df78a-02fb-45bf-8833-4c01fa11ba91",alt:"",loading:"lazy"})])],-1);function B(_,f){const l=n("RouterLink");return r(),s("div",null,[h,t("ul",null,[t("li",null,[o(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[e("Btrace入门")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[e("各种网关性能测试")]),_:1})]),t("li",null,[o(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[o(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[e("提取Docker镜像中的文件")]),_:1})]),t("li",null,[o(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[e("分库分表")]),_:1})]),t("li",null,[o(l,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),t("li",null,[o(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:a(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),t("li",null,[o(l,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[e("JetBrains-License-Server")]),_:1})]),t("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[e("ShadowsockServer配置")]),_:1})]),t("li",null,[o(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[o(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),t("li",null,[o(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:a(()=>[e("https和http混用解决办法")]),_:1})])]),u,A,p,c])}const D=E(d,[["render",B],["__file","K8S 无感发布.html.vue"]]);export{D as default};
