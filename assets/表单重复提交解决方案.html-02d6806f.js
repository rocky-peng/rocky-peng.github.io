import{_ as r,$ as E,a0 as i,a1 as e,a3 as o,a4 as a,a5 as n,a2 as l,w as s}from"./framework-b3a0f150.js";const h={},d=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),B=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：悲伤的时候看看自己，你一定会开怀大笑的，毕竟你就是个笑话。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30865811/pexels-photo-30865811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Close-up view of ancient temple architecture in Fuzhou, China showcasing intricate roof designs.",loading:"lazy"})])],-1);function A(f,m){const t=s("RouterLink");return E(),i("div",null,[d,e("ul",null,[e("li",null,[o(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[l("Oh My ZSH")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[l("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(t,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[o(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[l("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[o(t,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[o(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[l("ES杂项")]),_:1})]),e("li",null,[o(t,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:a(()=>[l("Java面试基础")]),_:1})]),e("li",null,[o(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:a(()=>[l("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[o(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[l("Docker跨主机通信方案")]),_:1})]),e("li",null,[o(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[o(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[l("随机图片在线接口")]),_:1})]),e("li",null,[o(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[l("PostgreSQL高可用")]),_:1})])]),u,c,B,_])}const S=r(h,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{S as default};
