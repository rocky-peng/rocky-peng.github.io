import{_ as n,$ as E,a0 as s,a1 as e,a3 as a,a4 as o,a5 as r,a2 as l,w as i}from"./framework-16d560c6.js";const d={},u=r('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),B=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：做人要谦虚，多听听他人的意见，然后认真记下他们的名字。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5af5b616-1aed-4fe3-8fa2-4b7edbedbcd3",alt:"",loading:"lazy"})])],-1);function A(f,p){const t=i("RouterLink");return E(),s("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[l("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[a(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[l("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[l("如何安装Google BBR")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Docker笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[l("gperftools")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[l("简易版配置中心&初探原理")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[l("Centos离线安装Docker")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[l("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[l("Markdown软件比对")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("分布式问题")]),_:1})]),e("li",null,[a(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("Mermaid示例")]),_:1})])]),h,c,B,_])}const b=n(d,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
