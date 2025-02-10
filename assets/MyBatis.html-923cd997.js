import{_ as n,$ as i,a0 as r,a1 as t,a3 as l,a4 as o,a5 as s,a2 as a,w as d}from"./framework-b3a0f150.js";const c={},u=s('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),m=t("hr",null,null,-1),E=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：做政治试卷，是我这辈子，说谎最多的时候。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f4ed0f20-95dc-475c-8f00-d0d99a9cbafc",alt:"",loading:"lazy"})])],-1);function _(g,B){const e=d("RouterLink");return i(),r("div",null,[u,t("ul",null,[t("li",null,[l(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[a("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[a("来个JVM冷知识")]),_:1})]),t("li",null,[l(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[a("MySQL高可用")]),_:1})]),t("li",null,[l(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[a("K8S 无感发布")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[a("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(e,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[a("kafka")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("乱七八糟的笔记")]),_:1})]),t("li",null,[l(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[a("linux_no_space_left_on_device")]),_:1})]),t("li",null,[l(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[l(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[a("WebSocket SpringBoot Demo")]),_:1})])]),h,p,m,E])}const A=n(c,[["render",_],["__file","MyBatis.html.vue"]]);export{A as default};
