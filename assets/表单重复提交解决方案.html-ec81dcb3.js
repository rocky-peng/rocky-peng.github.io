import{_ as r,$ as n,a0 as i,a1 as l,a3 as a,a4 as o,a5 as E,a2 as e,w as s}from"./framework-58787b1c.js";const u={},h=E('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),_=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：生命归结为一种简单的选择，要么忙于生存，要么赶着去死。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e75a1c30-c4be-46bd-acbd-a56532401bc8",alt:"",loading:"lazy"})])],-1);function A(p,B){const t=s("RouterLink");return n(),i("div",null,[h,l("ul",null,[l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("MySQL杂项")]),_:1})]),l("li",null,[a(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[a(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[e("Spring框架源码关键点")]),_:1})]),l("li",null,[a(t,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MySQL高可用")]),_:1})]),l("li",null,[a(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[a(t,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("高可用通用方案")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("CountDownLatch源码解读")]),_:1})]),l("li",null,[a(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[e("SQL优化")]),_:1})]),l("li",null,[a(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[e("raft协议")]),_:1})])]),c,d,_,f])}const b=r(u,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
