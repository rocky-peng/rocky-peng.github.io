import{_ as o,$ as r,a0 as n,a1 as t,a3 as a,a4 as i,a5 as s,a2 as e,w as d}from"./framework-58787b1c.js";const E={},h=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),f=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：只有我不认真复习，才能说服自己，接受自己糟糕的成绩。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f234d84b-217e-4899-885a-d7b93d7e7fba",alt:"",loading:"lazy"})])],-1);function A(p,_){const l=d("RouterLink");return r(),n("div",null,[h,t("ul",null,[t("li",null,[a(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[e("MySQL常用命令")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[e("Btrace入门")]),_:1})]),t("li",null,[a(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:i(()=>[e("IO相关")]),_:1})]),t("li",null,[a(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[e("JVM杂项")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:i(()=>[e("分布式事务Seata")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:i(()=>[e("前后端常用技术")]),_:1})]),t("li",null,[a(l,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:i(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[e("杂记")]),_:1})]),t("li",null,[a(l,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:i(()=>[e("raft协议")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[e("表单重复提交解决方案")]),_:1})]),t("li",null,[a(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:i(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),u,c,f,B])}const b=o(E,[["render",A],["__file","ES杂项.html.vue"]]);export{b as default};
