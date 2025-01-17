import{_ as n,$ as i,a0 as r,a1 as l,a3 as a,a4 as o,a5 as s,a2 as e,w as u}from"./framework-b3a0f150.js";const d={},h=s('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),_=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),c=l("hr",null,null,-1),E=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：虽说爱情不能用金钱来衡量，但足以打动你未来的丈母娘。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9ff9d899-42f6-4f7b-9917-43a4be7b945e",alt:"",loading:"lazy"})])],-1);function B(m,p){const t=u("RouterLink");return i(),r("div",null,[h,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[a(t,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[e("JetBrains IDE 全破解")]),_:1})]),l("li",null,[a(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[e("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[e("如何安装Google BBR")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[e("SQL优化")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[e("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[e("Java面试基础")]),_:1})]),l("li",null,[a(t,{to:"/software/raft/sofajraft.html"},{default:o(()=>[e("sofajraft")]),_:1})]),l("li",null,[a(t,{to:"/intro.html"},{default:o(()=>[e("intro")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[e("杂记")]),_:1})])]),_,f,c,E])}const A=n(d,[["render",B],["__file","表单重复提交解决方案.html.vue"]]);export{A as default};
