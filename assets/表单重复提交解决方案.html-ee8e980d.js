import{_ as o,$ as i,a0 as r,a1 as l,a3 as t,a4 as a,a5 as n,a2 as E,w as s}from"./framework-b3a0f150.js";const A={},d=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),B=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),E("：枕头要经常晒，因为里面装满了，心酸的累和发霉的梦。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=1e3e36de-fade-4373-a200-3d0672f0ace9",alt:"",loading:"lazy"})])],-1);function c(f,p){const e=s("RouterLink");return i(),r("div",null,[d,l("ul",null,[l("li",null,[t(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[E("Redis笔记")]),_:1})]),l("li",null,[t(e,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[E("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[t(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[E("微博关注关系如何实现")]),_:1})]),l("li",null,[t(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[E("高可用通用方案")]),_:1})]),l("li",null,[t(e,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[E("MAC CMS")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[E("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[E("简易版配置中心&初探原理")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[E("gperftools")]),_:1})]),l("li",null,[t(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:a(()=>[E("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[t(e,{to:"/intro.html"},{default:a(()=>[E("intro")]),_:1})]),l("li",null,[t(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[E("GitHub Workflow突然报错")]),_:1})]),l("li",null,[t(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:a(()=>[E("Docker隐射的端口外网不能访问")]),_:1})])]),u,h,B,_])}const D=o(A,[["render",c],["__file","表单重复提交解决方案.html.vue"]]);export{D as default};
