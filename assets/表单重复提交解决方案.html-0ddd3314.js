import{_ as s,$ as i,a0 as n,a1 as l,a3 as a,a4 as o,a5 as E,a2 as e,w as r}from"./framework-16d560c6.js";const d={},u=E('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),_=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),c=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：宁愿不说话看起来像个傻子，也不要，开口证明自己的确如此。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=17c2ef56-5d37-40d3-b869-102701036ea5",alt:"",loading:"lazy"})])],-1);function f(A,p){const t=r("RouterLink");return i(),n("div",null,[u,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/MyBatis.html"},{default:o(()=>[e("MyBatis")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("Redis笔记")]),_:1})]),l("li",null,[a(t,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[e("JDK命令行工具")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[e("KVM方式集群部署ES")]),_:1})]),l("li",null,[a(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[a(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[e("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[e("linux_no_space_left_on_device")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[e("Javassist整理")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:o(()=>[e("制作KVM ES镜像文件")]),_:1})]),l("li",null,[a(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[e("Arthas使用记录")]),_:1})]),l("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[e("ShadowsockServer配置")]),_:1})])]),_,h,c,B])}const C=s(d,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{C as default};
