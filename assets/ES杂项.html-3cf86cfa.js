import{_ as i,$ as n,a0 as E,a1 as t,a3 as a,a4 as o,a5 as r,a2 as e,w as s}from"./framework-827a3556.js";const d={},h=r('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),c=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),u=t("hr",null,null,-1),B=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：不就是钱嘛，说得谁不缺似的。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=cd81e05d-161f-40d9-ae8f-6fbbf996571e",alt:"",loading:"lazy"})])],-1);function f(p,_){const l=s("RouterLink");return n(),E("div",null,[h,t("ul",null,[t("li",null,[a(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[e("Docker进行资源隔离")]),_:1})]),t("li",null,[a(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[a(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[e("随记")]),_:1})]),t("li",null,[a(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[e("数组转树形结构只需两步")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[e("KVM方式集群部署ES")]),_:1})]),t("li",null,[a(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[e("乱七八糟的笔记")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[e("Javassist整理")]),_:1})]),t("li",null,[a(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[e("前端axios下载csv文件乱码")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:o(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[a(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[a(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[e("Linux dev shm目录")]),_:1})])]),c,u,B,A])}const g=i(d,[["render",f],["__file","ES杂项.html.vue"]]);export{g as default};
