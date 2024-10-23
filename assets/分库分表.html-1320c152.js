import{_ as s,$ as E,a0 as a,a1 as l,a3 as o,a4 as n,a2 as t,w as r}from"./framework-16d560c6.js";const u={},i=l("p",null,"分表：垂直拆分和水平拆分",-1),_=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),c=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),h=l("p",null,"cat/ShardingSphere",-1),A=l("br",null,null,-1),B=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),m=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：经过多年的打拼，虽然你没有什么收获，但你还有一身债啊。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=77b3b056-a531-4b50-9715-eb4849d7692b",alt:"",loading:"lazy"})])],-1);function b(x,F){const e=r("RouterLink");return E(),a("div",null,[i,_,c,h,A,B,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),l("li",null,[o(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("乱七八糟的笔记")]),_:1})]),l("li",null,[o(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Docker笔记")]),_:1})]),l("li",null,[o(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:n(()=>[t("Paxos算法")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[o(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(e,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:n(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[o(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[o(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[t("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[o(e,{to:"/software/linux/Linux.html"},{default:n(()=>[t("Linux")]),_:1})])]),d,f,m,p])}const k=s(u,[["render",b],["__file","分库分表.html.vue"]]);export{k as default};
