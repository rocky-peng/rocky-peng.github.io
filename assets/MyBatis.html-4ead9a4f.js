import{_ as i,$ as n,a0 as r,a1 as t,a3 as l,a4 as o,a5 as s,a2 as a,w as d}from"./framework-b3a0f150.js";const E={},c=s('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),m=t("hr",null,null,-1),p=t("hr",null,null,-1),h=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：为什么在学校，一上课就想睡觉？因为学校是梦开始的地方。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6f3641ae-64ce-4c13-945e-7757411a794c",alt:"",loading:"lazy"})])],-1);function B(A,g){const e=d("RouterLink");return n(),r("div",null,[c,t("ul",null,[t("li",null,[l(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("Redis笔记")]),_:1})]),t("li",null,[l(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[a("Redis高可用")]),_:1})]),t("li",null,[l(e,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[a("AQS源码解读")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[a("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[a("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:o(()=>[a("分布式事务Seata")]),_:1})]),t("li",null,[l(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[a("Nginx的双向认证配置")]),_:1})]),t("li",null,[l(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[a("GitHub Workflow突然报错")]),_:1})]),t("li",null,[l(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:o(()=>[a("SpringCloud总体认识")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[a("ESRally性能测试步骤")]),_:1})])]),u,m,p,h])}const f=i(E,[["render",B],["__file","MyBatis.html.vue"]]);export{f as default};
