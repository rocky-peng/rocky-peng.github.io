import{_ as n,$ as r,a0 as s,a1 as l,a3 as o,a4 as a,a2 as e,w as E}from"./framework-b3a0f150.js";const u={},i=l("p",null,"分表：垂直拆分和水平拆分",-1),c=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),_=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),d=l("p",null,"cat/ShardingSphere",-1),h=l("br",null,null,-1),B=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),p=l("hr",null,null,-1),m=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：在楼下给你打电话，寒风中等待你的，只有外卖小哥。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=96df6f56-da5d-4116-a8ce-540a81b6b999",alt:"",loading:"lazy"})])],-1);function b(F,S){const t=E("RouterLink");return r(),s("div",null,[i,c,_,d,h,B,l("ul",null,[l("li",null,[o(t,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[e("JVM参数设置")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[e("NGINX")]),_:1})]),l("li",null,[o(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[e("测试两台服务器间的网速")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("乱七八糟的笔记")]),_:1})]),l("li",null,[o(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[o(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[e("IO相关")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[e("异地多活")]),_:1})]),l("li",null,[o(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[o(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[o(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:a(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[o(t,{to:"/intro.html"},{default:a(()=>[e("intro")]),_:1})])]),f,A,p,m])}const v=n(u,[["render",b],["__file","分库分表.html.vue"]]);export{v as default};
