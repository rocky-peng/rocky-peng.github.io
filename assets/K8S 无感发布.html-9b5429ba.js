import{_ as E,$ as s,a0 as i,a1 as t,a3 as a,a4 as o,a5 as n,a2 as l,w as r}from"./framework-b3a0f150.js";const d={},u=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),c=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：你不用心去谈一次恋爱，你就永远不知道，这到底有多浪费时间。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/9212718/pexels-photo-9212718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Aerial shot of a solitary figure on a vast snowy field in Harbin, China, capturing winter's stark beauty.",loading:"lazy"})])],-1);function B(_,f){const e=r("RouterLink");return s(),i("div",null,[u,t("ul",null,[t("li",null,[a(e,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[l("Javassist整理")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[l("MySQL三大日志")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[l("Markdown软件比对")]),_:1})]),t("li",null,[a(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("ReentrantLock源码解读")]),_:1})]),t("li",null,[a(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[a(e,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:o(()=>[l("https和http混用解决办法")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("表单重复提交解决方案")]),_:1})])]),A,h,c,p])}const b=E(d,[["render",B],["__file","K8S 无感发布.html.vue"]]);export{b as default};
