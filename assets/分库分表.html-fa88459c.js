import{_ as n,$ as B,a0 as a,a1 as E,a3 as e,a4 as o,a2 as l,w as s}from"./framework-b3a0f150.js";const A={},r=E("p",null,"分表：垂直拆分和水平拆分",-1),i=E("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),u=E("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),d=E("p",null,"cat/ShardingSphere",-1),h=E("br",null,null,-1),_=E("h2",{id:"系统推荐",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),c=E("p",null,[E("br"),E("br"),E("br"),E("br"),E("br"),E("br")],-1),m=E("hr",null,null,-1),f=E("hr",null,null,-1),p=E("ul",null,[E("li",null,[E("strong",null,"随机毒鸡汤"),l("：如果没有好主意，馊主意就是最好的主意。 "),E("br"),E("br"),E("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function F(C,D){const t=s("RouterLink");return B(),a("div",null,[r,i,u,d,h,_,E("ul",null,[E("li",null,[e(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Git笔记")]),_:1})]),E("li",null,[e(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),E("li",null,[e(t,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("MySQL高可用")]),_:1})]),E("li",null,[e(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:o(()=>[l("微博关注关系如何实现")]),_:1})]),E("li",null,[e(t,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[l("Censys搜索引擎学习")]),_:1})]),E("li",null,[e(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[l("InnoDB存储引擎")]),_:1})]),E("li",null,[e(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),E("li",null,[e(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[l("PasteImageIntoMarkdown插件开发")]),_:1})]),E("li",null,[e(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:o(()=>[l("Docker隐射的端口外网不能访问")]),_:1})]),E("li",null,[e(t,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),E("li",null,[e(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("Mermaid示例")]),_:1})]),E("li",null,[e(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[l("随机图片在线接口")]),_:1})])]),c,m,f,p])}const b=n(A,[["render",F],["__file","分库分表.html.vue"]]);export{b as default};
