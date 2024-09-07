import{_ as n,$ as s,a0 as r,a1 as t,a3 as l,a4 as o,a5 as i,a2 as a,w as d}from"./framework-58787b1c.js";const c={},E=i('<h2 id="四大对象" tabindex="-1"><a class="header-anchor" href="#四大对象" aria-hidden="true">#</a> 四大对象</h2><ol><li>Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</li><li>ParameterHandler(getParameterObject, setParameters)</li><li>ResultSetHandler(handleResultSets, handleOutputParameters)</li><li>StatementHandler(prepare, parameterize, batch, update, query)</li></ol><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png" alt="" loading="lazy"></p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p><p><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png" alt="" loading="lazy"><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',8),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),h=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：矮是什么感觉？明明想瞪人的，硬生生成了卖萌。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=3c7b20f9-9a57-478c-bbcf-64f9757c27d1",alt:"",loading:"lazy"})])],-1);function B(g,f){const e=d("RouterLink");return s(),r("div",null,[E,t("ul",null,[t("li",null,[l(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[a("Oh My ZSH")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[a("来个JVM冷知识")]),_:1})]),t("li",null,[l(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(e,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[a("Spring框架源码关键点")]),_:1})]),t("li",null,[l(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[a("提取Docker镜像中的文件")]),_:1})]),t("li",null,[l(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[a("Javassist整理")]),_:1})]),t("li",null,[l(e,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[a("gperftools")]),_:1})]),t("li",null,[l(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[a("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[l(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[l(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[a("前端axios下载csv文件乱码")]),_:1})])]),u,p,h,m])}const A=n(c,[["render",B],["__file","MyBatis.html.vue"]]);export{A as default};
