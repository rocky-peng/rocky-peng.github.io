import{_ as i,$ as E,a0 as n,a1 as l,a3 as a,a4 as o,a5 as r,a2 as e,w as s}from"./framework-b6ede5bc.js";const d={},u=r('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),_=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：愿你们的青春，都像教堂的上空，有神经过。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c8484307-6e8d-4887-85a5-943283e28ccd",alt:"",loading:"lazy"})])],-1);function B(f,m){const t=s("RouterLink");return E(),n("div",null,[u,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[e("KVM 虚拟机安装")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[e("NGINX")]),_:1})]),l("li",null,[a(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("PostgreSQL定时备份")]),_:1})]),l("li",null,[a(t,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[e("IO相关")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[e("线上FullGC频繁的排查")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[a(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[e("Centos离线安装Docker")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[e("杂记")]),_:1})])]),c,A,_,h])}const C=i(d,[["render",B],["__file","表单重复提交解决方案.html.vue"]]);export{C as default};
