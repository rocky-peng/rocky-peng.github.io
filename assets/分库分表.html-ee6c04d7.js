import{_ as n,$ as a,a0 as s,a1 as l,a3 as e,a4 as o,a2 as t,w as i}from"./framework-b3a0f150.js";const r={},B=l("p",null,"分表：垂直拆分和水平拆分",-1),A=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),u=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),_=l("p",null,"cat/ShardingSphere",-1),d=l("br",null,null,-1),c=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),m=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：我还是很讨厌你，像吃了花椒的邻居，麻了隔壁。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function F(C,w){const E=i("RouterLink");return a(),s("div",null,[B,A,u,_,d,c,l("ul",null,[l("li",null,[e(E,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Redis笔记")]),_:1})]),l("li",null,[e(E,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[e(E,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[e(E,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[t("linux_no_space_left_on_device")]),_:1})]),l("li",null,[e(E,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[e(E,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),l("li",null,[e(E,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[t("Java面试基础")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[e(E,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),h,f,m,p])}const D=n(r,[["render",F],["__file","分库分表.html.vue"]]);export{D as default};
