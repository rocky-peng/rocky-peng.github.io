import{_ as o,$ as r,a0 as i,a1 as e,a3 as a,a4 as E,a5 as n,a2 as l,w as s}from"./framework-326c7dc0.js";const d={},B=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：别人骂你的时候，不要理他，反正你又骂不过他。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=39291cf6-0ba6-453a-9b00-de14b036cbe4",alt:"",loading:"lazy"})])],-1);function A(f,p){const t=s("RouterLink");return r(),i("div",null,[B,e("ul",null,[e("li",null,[a(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:E(()=>[l("微博关注关系如何实现")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:E(()=>[l("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[l("乱七八糟的笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:E(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:E(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:E(()=>[l("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:E(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:E(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:E(()=>[l("ES杂项")]),_:1})]),e("li",null,[a(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:E(()=>[l("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[l("PostgreSQL高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/linux/Linux.html"},{default:E(()=>[l("Linux")]),_:1})])]),u,h,c,_])}const b=o(d,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
