import{_ as n,$ as o,a0 as r,a1 as e,a3 as a,a4 as i,a5 as s,a2 as t,w as E}from"./framework-b3a0f150.js";const d={},h=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),B=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：友谊是什么？你智障多年，我依然不离不弃。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=54fba20b-3042-4620-b60b-b9b32bc1b9bb",alt:"",loading:"lazy"})])],-1);function p(_,A){const l=E("RouterLink");return o(),r("div",null,[h,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:i(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[t("MySQL杂项")]),_:1})]),e("li",null,[a(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[a(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:i(()=>[t("Spring框架源码关键点")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[t("弱引用示例")]),_:1})]),e("li",null,[a(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[t("istio基础知识")]),_:1})]),e("li",null,[a(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[t("Paxos算法")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[t("AQS源码解读")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:i(()=>[t("简易版配置中心&初探原理")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:i(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[a(l,{to:"/other/JetBrains-License-Server.html"},{default:i(()=>[t("JetBrains-License-Server")]),_:1})])]),c,u,B,f])}const b=n(d,[["render",p],["__file","ES杂项.html.vue"]]);export{b as default};
