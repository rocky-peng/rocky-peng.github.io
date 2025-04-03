import{_ as s,$ as r,a0 as i,a1 as e,a3 as o,a4 as a,a5 as n,a2 as t,w as d}from"./framework-b3a0f150.js";const u={},h=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你不当厨子可惜了，甩锅甩的这么厉害。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/9212718/pexels-photo-9212718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Aerial shot of a solitary figure on a vast snowy field in Harbin, China, capturing winter's stark beauty.",loading:"lazy"})])],-1);function f(m,A){const l=d("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[o(l,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[t("MyBatis")]),_:1})]),e("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),e("li",null,[o(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[o(l,{to:"/other/JetBrains-License-Server.html"},{default:a(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[o(l,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[o(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[t("Linux dev shm目录")]),_:1})]),e("li",null,[o(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:a(()=>[t("杂记")]),_:1})]),e("li",null,[o(l,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[t("随机图片在线接口")]),_:1})]),e("li",null,[o(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("PostgreSQL高可用")]),_:1})])]),c,p,_,E])}const b=s(u,[["render",f],["__file","K8S 无感发布.html.vue"]]);export{b as default};
