import{_ as r,$ as n,a0 as i,a1 as l,a3 as a,a4 as o,a5 as E,a2 as e,w as s}from"./framework-827a3556.js";const d={},u=E('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),_=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：平时看书是因为有求知欲，考前看书是因为有求生欲。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=49aba101-98b2-4308-99c7-60eb621c4f3c",alt:"",loading:"lazy"})])],-1);function A(f,m){const t=s("RouterLink");return n(),i("div",null,[u,l("ul",null,[l("li",null,[a(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[e("如何安装Google BBR")]),_:1})]),l("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[a(t,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:o(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[a(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("Redis高可用")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Docker笔记")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[e("常用队列")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[e("Markdown软件比对")]),_:1})]),l("li",null,[a(t,{to:"/software/linux/Linux.html"},{default:o(()=>[e("Linux")]),_:1})]),l("li",null,[a(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("PostgreSQL高可用")]),_:1})])]),h,B,_,c])}const b=r(d,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
