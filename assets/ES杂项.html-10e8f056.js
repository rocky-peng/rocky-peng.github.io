import{_ as n,$ as s,a0 as r,a1 as e,a3 as a,a4 as o,a5 as i,a2 as l,w as E}from"./framework-b3a0f150.js";const d={},h=i('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),A=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：小时候总以为大人不挑食，长大后才明白，他们不吃的东西都不买。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Man enjoys a scenic view of Es Vedrà at sunset from a cliff in San Juan Bautista, providing a perfect summer escape.",loading:"lazy"})])],-1);function f(p,m){const t=E("RouterLink");return s(),r("div",null,[h,e("ul",null,[e("li",null,[a(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[a(t,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("JDK命令行工具")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[l("InnoDB存储引擎")]),_:1})]),e("li",null,[a(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[l("gperftools")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("推荐几个适用小工具")]),_:1})]),e("li",null,[a(t,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[a(t,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[l("Java面试基础")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[a(t,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:o(()=>[l("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[l("杂记")]),_:1})])]),c,u,A,B])}const g=n(d,[["render",f],["__file","ES杂项.html.vue"]]);export{g as default};
