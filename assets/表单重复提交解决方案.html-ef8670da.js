import{_ as i,$ as s,a0 as n,a1 as e,a3 as a,a4 as o,a5 as r,a2 as l,w as h}from"./framework-b7a22294.js";const E={},d=r('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),c=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：传统文化丢失严重啊，古代女子个个能呤诗作对，现代女子不行了 只会作对。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=ed684f8f-a22b-4a86-8a43-5c5617941d28",alt:"",loading:"lazy"})])],-1);function A(f,p){const t=h("RouterLink");return s(),n("div",null,[d,e("ul",null,[e("li",null,[a(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("Notion笔记定时备份")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[l("Btrace入门")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("弱引用示例")]),_:1})]),e("li",null,[a(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[a(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("Redis高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[l("Javassist整理")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),e("li",null,[a(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("Mermaid示例")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[l("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),u,_,c,B])}const b=i(E,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
