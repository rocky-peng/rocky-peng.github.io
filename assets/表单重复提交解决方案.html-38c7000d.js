import{_ as i,$ as s,a0 as r,a1 as e,a3 as a,a4 as o,a5 as n,a2 as l,w as d}from"./framework-b3a0f150.js";const E={},u=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),_=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：要不是猪不会说话，不然你都没有，存在的价值。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30865811/pexels-photo-30865811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Close-up view of ancient temple architecture in Fuzhou, China showcasing intricate roof designs.",loading:"lazy"})])],-1);function B(f,m){const t=d("RouterLink");return s(),r("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[l("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[l("MyBatis")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[a(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("Redis高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[l("线上FullGC频繁的排查")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[l("分库分表")]),_:1})]),e("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("ES杂项")]),_:1})]),e("li",null,[a(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[l("K8S常用命令")]),_:1})]),e("li",null,[a(t,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[l("Hbase 总览")]),_:1})])]),h,c,_,A])}const b=i(E,[["render",B],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
