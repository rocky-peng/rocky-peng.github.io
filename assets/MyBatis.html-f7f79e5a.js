import{_ as o,$ as i,a0 as s,a1 as t,a3 as l,a4 as n,a5 as r,a2 as a,w as d}from"./framework-16d560c6.js";const c={},u=r('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),E=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),m=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：只要我自己忘记发过信息，就不怕没人回我。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=21cc7832-f660-420b-9163-bfe4ac1c3745",alt:"",loading:"lazy"})])],-1);function B(g,A){const e=d("RouterLink");return i(),s("div",null,[u,t("ul",null,[t("li",null,[l(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("Git笔记")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[a("Oh My ZSH")]),_:1})]),t("li",null,[l(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[a("Spring框架源码关键点")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:n(()=>[a("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[l(e,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[a("Sublime Text 格式化JSON")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[a("Javassist整理")]),_:1})]),t("li",null,[l(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[a("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("CountDownLatch源码解读")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[a("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[a("Markdown软件比对")]),_:1})]),t("li",null,[l(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[a("Docker隐射的端口外网不能访问")]),_:1})])]),E,h,m,p])}const f=o(c,[["render",B],["__file","MyBatis.html.vue"]]);export{f as default};
