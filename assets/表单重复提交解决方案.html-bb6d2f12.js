import{_ as s,$ as r,a0 as i,a1 as e,a3 as a,a4 as o,a5 as n,a2 as l,w as E}from"./framework-b3a0f150.js";const u={},h=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),_=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我不敢穿的太潮，因为妈妈说，太潮容易得风湿。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e8efaf0b-668c-4ef9-bcb2-e662975d0a4a",alt:"",loading:"lazy"})])],-1);function f(B,p){const t=E("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[a(t,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[l("JVM参数设置")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[l("NGINX")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[a(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[l("gperftools")]),_:1})]),e("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[l("Markdown软件比对")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(t,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[a(t,{to:"/intro.html"},{default:o(()=>[l("intro")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[l("BBR加速")]),_:1})])]),d,c,_,A])}const b=s(u,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
