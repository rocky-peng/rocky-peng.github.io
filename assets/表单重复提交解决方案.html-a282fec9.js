import{_ as r,$ as E,a0 as i,a1 as l,a3 as a,a4 as o,a5 as s,a2 as e,w as n}from"./framework-b3a0f150.js";const d={},B=s('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：冬天床以外的地方都是远方，手够不到的地方都是他乡，上个厕所都是出差。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7a14d7a8-9233-43d8-9c2e-3a941e329bd7",alt:"",loading:"lazy"})])],-1);function f(A,m){const t=n("RouterLink");return E(),i("div",null,[B,l("ul",null,[l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[e("如何安装Google BBR")]),_:1})]),l("li",null,[a(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[e("Paxos算法")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[e("gperftools")]),_:1})]),l("li",null,[a(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("JVM异常处理")]),_:1})]),l("li",null,[a(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("JVM杂项")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[e("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:o(()=>[e("分布式事务Seata")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[e("ESRally性能测试步骤")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("Docker跨主机通信方案")]),_:1})]),l("li",null,[a(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[e("K8S常用命令")]),_:1})])]),u,h,_,c])}const b=r(d,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
