import{_ as i,$ as E,a0 as r,a1 as t,a3 as a,a4 as o,a5 as s,a2 as e,w as n}from"./framework-b3a0f150.js";const h={},d=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),B=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),u=t("hr",null,null,-1),c=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：厉害的人太多了，我要为笨蛋争口气！ "),t("br"),t("br"),t("img",{src:"https://images.pexels.com/photos/31263061/pexels-photo-31263061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"",loading:"lazy"})])],-1);function A(_,m){const l=n("RouterLink");return E(),r("div",null,[d,t("ul",null,[t("li",null,[a(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[e("MAT工具")]),_:1})]),t("li",null,[a(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("MySQL杂项")]),_:1})]),t("li",null,[a(l,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[e("NGINX")]),_:1})]),t("li",null,[a(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("PostgreSQL定时备份")]),_:1})]),t("li",null,[a(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[e("istio基础知识")]),_:1})]),t("li",null,[a(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[e("Paxos算法")]),_:1})]),t("li",null,[a(l,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[a(l,{to:"/intro.html"},{default:o(()=>[e("intro")]),_:1})]),t("li",null,[a(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),t("li",null,[a(l,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[e("Mermaid示例")]),_:1})]),t("li",null,[a(l,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[a(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:o(()=>[e("https和http混用解决办法")]),_:1})])]),B,u,c,p])}const g=i(h,[["render",A],["__file","ES杂项.html.vue"]]);export{g as default};
