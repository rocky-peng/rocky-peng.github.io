import{_ as n,$ as r,a0 as E,a1 as l,a3 as a,a4 as o,a5 as s,a2 as t,w as i}from"./framework-326c7dc0.js";const d={},u=s('<p>可用从下面几个问题着手</p><ol><li>什么叫重复表单 这个定义出来了，那么后面就是技术方案罢了</li><li>采用什么样的技术方案 <ol><li>比如可以采用阿里巴巴sentinel，其实本质上就是限流。表单重复提交无法就是触发限流的条件有点不一样，功能强大更加丰富，更加灵活，但上手难一些，但不推荐</li><li>自定义个一个注解，写一个aop搞定。</li></ol></li></ol><h2 id="什么叫重复表单" tabindex="-1"><a class="header-anchor" href="#什么叫重复表单" aria-hidden="true">#</a> 什么叫重复表单</h2><p>针对我们自己的业务场景，可以定义为： 同一个用户在短时间内（比如1s）请求了同一个接口（可以加上相同参数）,那么认为就是重复表单</p><p>不同的公司，不同的接口也许定义会有所不一样，这个根据自身情况调整</p><h2 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案" aria-hidden="true">#</a> 技术方案</h2><p>针对我们对重复表单的定义，这里推荐采用自定义注解+AOP的方式完成</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',9),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：你并不是一无所有，你还有脸回家。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=13299af4-3e9c-4cb5-b8b9-b5000a5d1437",alt:"",loading:"lazy"})])],-1);function B(f,m){const e=i("RouterLink");return r(),E("div",null,[u,l("ul",null,[l("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("Notion笔记定时备份")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[a(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[t("Paxos算法")]),_:1})]),l("li",null,[a(e,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[t("Centos离线安装Docker")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[t("Markdown软件比对")]),_:1})]),l("li",null,[a(e,{to:"/software/raft/sofajraft.html"},{default:o(()=>[t("sofajraft")]),_:1})]),l("li",null,[a(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[t("Hbase 总览")]),_:1})]),l("li",null,[a(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[t("随机图片在线接口")]),_:1})]),l("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})])]),A,h,_,c])}const b=n(d,[["render",B],["__file","表单重复提交解决方案.html.vue"]]);export{b as default};
