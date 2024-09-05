import{_ as r,$ as s,a0 as n,a1 as e,a3 as o,a4 as a,a5 as i,a2 as l,w as d}from"./framework-b6ede5bc.js";const u={},E=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),c=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：二十几年人生，离女生最近一次，应该是小学同桌。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=95d0fdcc-17ea-4d97-9c19-0c428ecf9758",alt:"",loading:"lazy"})])],-1);function _(m,B){const t=d("RouterLink");return s(),n("div",null,[E,e("ul",null,[e("li",null,[o(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[l("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[o(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:a(()=>[l("Spring框架源码关键点")]),_:1})]),e("li",null,[o(t,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[l("Censys搜索引擎学习")]),_:1})]),e("li",null,[o(t,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[o(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:a(()=>[l("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[o(t,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[l("MAC CMS")]),_:1})]),e("li",null,[o(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[l("分库分表")]),_:1})]),e("li",null,[o(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[l("JVM异常处理")]),_:1})]),e("li",null,[o(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("表单重复提交解决方案")]),_:1})]),e("li",null,[o(t,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[l("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[o(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[l("Linux dev shm目录")]),_:1})])]),h,p,c,A])}const C=r(u,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{C as default};
