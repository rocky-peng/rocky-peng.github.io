import{_ as o,$ as s,a0 as i,a1 as t,a3 as l,a4 as n,a5 as r,a2 as e,w as d}from"./framework-58787b1c.js";const E={},c=r('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),m=t("hr",null,null,-1),h=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：头这么疼，一定是有人在压榨我的智慧。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=5ac5c0de-193d-4020-8896-506b073f17ac",alt:"",loading:"lazy"})])],-1);function B(A,g){const a=d("RouterLink");return s(),i("div",null,[c,t("ul",null,[t("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("来个JVM冷知识")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[e("Censys搜索引擎学习")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("数据同步方案")]),_:1})]),t("li",null,[l(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:n(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[e("分布式问题")]),_:1})]),t("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[e("Linux dev shm目录")]),_:1})])]),u,m,h,p])}const f=o(E,[["render",B],["__file","MyBatis.html.vue"]]);export{f as default};
