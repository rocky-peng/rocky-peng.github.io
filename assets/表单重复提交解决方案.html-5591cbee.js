import{_ as o,$ as r,a0 as s,a1 as e,a3 as a,a4 as i,a5 as n,a2 as l,w as u}from"./framework-b3a0f150.js";const E={},d=n('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),c=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：只要选对了人生的方向，很容易就成功了，让我们恭喜只要和很容易。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f844a433-5b03-4e80-a1c7-06d4e1923434",alt:"",loading:"lazy"})])],-1);function f(A,p){const t=u("RouterLink");return r(),s("div",null,[d,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[l("Git笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:i(()=>[l("记一次内存泄漏")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:i(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[l("Btrace入门")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[l("弱引用示例")]),_:1})]),e("li",null,[a(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:i(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:i(()=>[l("KVM方式集群部署ES")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[l("kafka")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:i(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[l("乱七八糟的笔记")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:i(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:i(()=>[l("Linux dev shm目录")]),_:1})])]),h,_,c,B])}const b=o(E,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
