import{_ as a,$ as n,a0 as i,a1 as l,a3 as o,a4 as E,a5 as r,a2 as e,w as s}from"./framework-b3a0f150.js";const h={},B=r('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),_=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：太阳别再晒黑我了，晒黑爸爸妈妈的头发吧。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/30865811/pexels-photo-30865811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Close-up view of ancient temple architecture in Fuzhou, China showcasing intricate roof designs.",loading:"lazy"})])],-1);function c(f,m){const t=s("RouterLink");return n(),i("div",null,[B,l("ul",null,[l("li",null,[o(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:E(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[o(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:E(()=>[e("微博关注关系如何实现")]),_:1})]),l("li",null,[o(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:E(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[o(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:E(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/NGINX.html"},{default:E(()=>[e("NGINX")]),_:1})]),l("li",null,[o(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[o(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:E(()=>[e("JVM杂项")]),_:1})]),l("li",null,[o(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:E(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[o(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:E(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[e("Nginx的双向认证配置")]),_:1})]),l("li",null,[o(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:E(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[o(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:E(()=>[e("Mermaid示例")]),_:1})])]),u,d,_,A])}const F=a(h,[["render",c],["__file","表单重复提交解决方案.html.vue"]]);export{F as default};
