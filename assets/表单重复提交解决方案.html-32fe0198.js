import{_ as i,$ as n,a0 as s,a1 as l,a3 as a,a4 as o,a5 as E,a2 as e,w as r}from"./framework-b3a0f150.js";const d={},u=E('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),_=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),h=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：人生无非两种结果，见笑和见效了。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=323864f1-e7ed-44f2-8fe1-c9deabb2f7dc",alt:"",loading:"lazy"})])],-1);function A(B,p){const t=r("RouterLink");return n(),s("div",null,[u,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[a(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("Notion笔记定时备份")]),_:1})]),l("li",null,[a(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[e("IO相关")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[e("分库分表")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[e("linux_no_space_left_on_device")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[e("常用队列")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[e("Javassist整理")]),_:1})]),l("li",null,[a(t,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:o(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[e("前后端常用技术")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("Docker跨主机通信方案")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[e("杂记")]),_:1})])]),_,c,h,f])}const b=i(d,[["render",A],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
