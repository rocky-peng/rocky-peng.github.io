import{_ as o,$ as n,a0 as s,a1 as l,a3 as a,a4 as E,a2 as t,w as r}from"./framework-16d560c6.js";const A={},u=l("p",null,"分表：垂直拆分和水平拆分",-1),i=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),_=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),d=l("p",null,"cat/ShardingSphere",-1),B=l("br",null,null,-1),c=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),m=l("hr",null,null,-1),D=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：成功的路上从不拥挤，因为坚持的人不多。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d8926e85-a519-42e4-808b-3223a6533ff0",alt:"",loading:"lazy"})])],-1);function p(b,F){const e=r("RouterLink");return n(),s("div",null,[u,i,_,d,B,c,l("ul",null,[l("li",null,[a(e,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:E(()=>[t("弱引用示例")]),_:1})]),l("li",null,[a(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[t("Redis高可用")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:E(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[t("Docker笔记")]),_:1})]),l("li",null,[a(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:E(()=>[t("Arthas使用记录")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:E(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[a(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:E(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:E(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:E(()=>[t("分布式事务Seata")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:E(()=>[t("Java面试基础")]),_:1})]),l("li",null,[a(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:E(()=>[t("raft协议")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:E(()=>[t("表单重复提交解决方案")]),_:1})])]),h,f,m,D])}const k=o(A,[["render",p],["__file","分库分表.html.vue"]]);export{k as default};
