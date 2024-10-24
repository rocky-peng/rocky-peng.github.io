import{_ as i,$ as n,a0 as r,a1 as e,a3 as a,a4 as o,a5 as s,a2 as l,w as E}from"./framework-16d560c6.js";const d={},c=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),_=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：距离产生的不是美，而是第三者。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b0f2acf2-2c11-4665-add4-6c8f28ba68b0",alt:"",loading:"lazy"})])],-1);function p(A,B){const t=E("RouterLink");return n(),r("div",null,[c,e("ul",null,[e("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[l("Btrace入门")]),_:1})]),e("li",null,[a(t,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("MySQL高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[l("SQL优化")]),_:1})]),e("li",null,[a(t,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[a(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[l("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),h,u,_,f])}const g=i(d,[["render",p],["__file","ES杂项.html.vue"]]);export{g as default};
