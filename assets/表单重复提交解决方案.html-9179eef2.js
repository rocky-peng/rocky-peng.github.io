import{_ as i,$ as s,a0 as n,a1 as e,a3 as a,a4 as o,a5 as r,a2 as l,w as E}from"./framework-b7a22294.js";const d={},h=r('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),c=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：让学生拿着手机上网课，不就是，让孙悟空看守蟠桃园吗？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=18e11458-f800-4072-b24a-09e19008d4de",alt:"",loading:"lazy"})])],-1);function f(m,A){const t=E("RouterLink");return s(),n("div",null,[h,e("ul",null,[e("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("MySQL杂项")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[l("NGINX")]),_:1})]),e("li",null,[a(t,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[l("随记")]),_:1})]),e("li",null,[a(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[a(t,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[l("MAC CMS")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("ES杂项")]),_:1})]),e("li",null,[a(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[l("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[l("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[a(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[l("随机图片在线接口")]),_:1})])]),u,_,c,B])}const b=i(d,[["render",f],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
