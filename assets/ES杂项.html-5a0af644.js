import{_ as o,$ as n,a0 as r,a1 as t,a3 as a,a4 as i,a5 as E,a2 as l,w as s}from"./framework-16d560c6.js";const d={},h=E('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),f=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：咸鱼翻身是为了晒得透彻，你翻身是因为手被压麻了。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=ebf98e42-0a8e-4b30-996d-611b85b93c42",alt:"",loading:"lazy"})])],-1);function A(_,p){const e=s("RouterLink");return n(),r("div",null,[h,t("ul",null,[t("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[l("Notion笔记定时备份")]),_:1})]),t("li",null,[a(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[l("来个JVM冷知识")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[l("微博关注关系如何实现")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/NGINX.html"},{default:i(()=>[l("NGINX")]),_:1})]),t("li",null,[a(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[l("MySQL高可用")]),_:1})]),t("li",null,[a(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:i(()=>[l("提取Docker镜像中的文件")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[l("kafka")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[l("批量修改git历史记录中的用户名和邮箱")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:i(()=>[l("Markdown软件比对")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[l("表单重复提交解决方案")]),_:1})]),t("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:i(()=>[l("Linux")]),_:1})]),t("li",null,[a(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:i(()=>[l("raft协议")]),_:1})])]),u,c,f,B])}const g=o(d,[["render",A],["__file","ES杂项.html.vue"]]);export{g as default};
