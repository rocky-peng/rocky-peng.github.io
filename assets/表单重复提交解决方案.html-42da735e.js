import{_ as i,$ as n,a0 as r,a1 as l,a3 as a,a4 as o,a5 as s,a2 as e,w as E}from"./framework-b3a0f150.js";const u={},d=s('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),_=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：有些人一旦道了歉，还没等对方原谅他，他已经率先原谅了自己。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/30865811/pexels-photo-30865811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Close-up view of ancient temple architecture in Fuzhou, China showcasing intricate roof designs.",loading:"lazy"})])],-1);function f(m,p){const t=E("RouterLink");return n(),r("div",null,[d,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[e("MAT工具")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[e("各种网关性能测试")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[e("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[a(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[e("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[a(t,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Docker笔记")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:o(()=>[e("制作KVM ES镜像文件")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[e("MySQL索引")]),_:1})]),l("li",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[e("Nginx的双向认证配置")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[e("分布式问题")]),_:1})]),l("li",null,[a(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:o(()=>[e("SpringCloud总体认识")]),_:1})]),l("li",null,[a(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[e("MySQL数据迁移到PGSQL")]),_:1})])]),h,c,_,B])}const C=i(u,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{C as default};
