import{_ as o,$ as s,a0 as n,a1 as t,a3 as a,a4 as i,a5 as r,a2 as e,w as E}from"./framework-b3a0f150.js";const d={},h=r('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),c=t("hr",null,null,-1),f=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：没有癞蛤蟆，天鹅也会寂寞。 "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Man enjoys a scenic view of Es Vedrà at sunset from a cliff in San Juan Bautista, providing a perfect summer escape.",loading:"lazy"})])],-1);function p(A,_){const l=E("RouterLink");return s(),n("div",null,[h,t("ul",null,[t("li",null,[a(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:i(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[e("Redis笔记")]),_:1})]),t("li",null,[a(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[e("Btrace入门")]),_:1})]),t("li",null,[a(l,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[a(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[a(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[e("istio基础知识")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:i(()=>[e("InnoDB存储引擎")]),_:1})]),t("li",null,[a(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[e("Java面试基础")]),_:1})]),t("li",null,[a(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:i(()=>[e("GitHub Workflow突然报错")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:i(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[e("杂记")]),_:1})])]),u,c,f,B])}const g=o(d,[["render",p],["__file","ES杂项.html.vue"]]);export{g as default};
