import{_ as o,$ as r,a0 as n,a1 as l,a3 as a,a4 as E,a5 as B,a2 as e,w as s}from"./framework-827a3556.js";const i={},A=B('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),u=l("hr",null,null,-1),h=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：到了一定年龄，别人问你多大了，你得稍微算一下。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=fc3ddd54-737f-4a7c-8e8f-debeab14ea3e",alt:"",loading:"lazy"})])],-1);function _(f,D){const t=s("RouterLink");return r(),n("div",null,[A,l("ul",null,[l("li",null,[a(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:E(()=>[e("来个JVM冷知识")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:E(()=>[e("微博关注关系如何实现")]),_:1})]),l("li",null,[a(t,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:E(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:E(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:E(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[a(t,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:E(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:E(()=>[e("CountDownLatch源码解读")]),_:1})]),l("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[e("ShadowsockServer配置")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:E(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:E(()=>[e("Markdown软件比对")]),_:1})]),l("li",null,[a(t,{to:"/software/raft/sofajraft.html"},{default:E(()=>[e("sofajraft")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:E(()=>[e("Docker跨主机通信方案")]),_:1})])]),d,u,h,c])}const p=o(i,[["render",_],["__file","表单重复提交解决方案.html.vue"]]);export{p as default};
