import{_ as o,$ as n,a0 as i,a1 as t,a3 as e,a4 as E,a5 as s,a2 as l,w as r}from"./framework-b3a0f150.js";const u={},h=s('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),d=t("hr",null,null,-1),c=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：因为穷我连关心你都不敢，就怕你说嘘寒问暖，不如打笔巨款。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=1351c2a4-d34b-4898-8e26-a3756c2e2ce2",alt:"",loading:"lazy"})])],-1);function _(f,m){const a=r("RouterLink");return n(),i("div",null,[h,t("ul",null,[t("li",null,[e(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:E(()=>[l("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:E(()=>[l("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),t("li",null,[e(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:E(()=>[l("K8S 无感发布")]),_:1})]),t("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:E(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[l("乱七八糟的笔记")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:E(()=>[l("kafka")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:E(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),t("li",null,[e(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:E(()=>[l("简易版配置中心&初探原理")]),_:1})]),t("li",null,[e(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:E(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[e(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:E(()=>[l("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[e(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:E(()=>[l("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[e(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:E(()=>[l("ESRally性能测试步骤")]),_:1})])]),B,d,c,A])}const D=o(u,[["render",_],["__file","表单重复提交解决方案.html.vue"]]);export{D as default};
