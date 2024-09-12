import{_ as i,$ as o,a0 as r,a1 as l,a3 as a,a4 as s,a5 as n,a2 as e,w as E}from"./framework-052411f2.js";const u={},c=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：等我圈住你的时候，我就是猪圈。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=db7946c7-0150-44a0-84ba-3128f2324016",alt:"",loading:"lazy"})])],-1);function _(f,m){const t=E("RouterLink");return o(),r("div",null,[c,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[a(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:s(()=>[e("Spring框架源码关键点")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),l("li",null,[a(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:s(()=>[e("Javassist整理")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("AQS源码解读")]),_:1})]),l("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[e("JetBrains-License-Server")]),_:1})]),l("li",null,[a(t,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:s(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("ReentrantLock源码解读")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:s(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("分布式问题")]),_:1})])]),B,d,A,h])}const b=i(u,[["render",_],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
