import{_ as n,$ as r,a0 as s,a1 as t,a3 as l,a4 as o,a5 as i,a2 as e,w as d}from"./framework-b3a0f150.js";const E={},c=i('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),p=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),h=t("hr",null,null,-1),u=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：「习惯了」，是个很强大的短句，它能代替所有的一言难尽。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function B(g,A){const a=d("RouterLink");return r(),s("div",null,[c,t("ul",null,[t("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[e("JVM参数设置")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[l(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[e("Hadoop 一")]),_:1})]),t("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[e("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),t("li",null,[l(a,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),t("li",null,[l(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),t("li",null,[l(a,{to:"/intro.html"},{default:o(()=>[e("intro")]),_:1})]),t("li",null,[l(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("Docker跨主机通信方案")]),_:1})])]),p,h,u,m])}const f=n(E,[["render",B],["__file","MyBatis.html.vue"]]);export{f as default};
