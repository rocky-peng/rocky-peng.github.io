import{_ as o,$ as n,a0 as E,a1 as l,a3 as a,a4 as i,a5 as r,a2 as t,w as s}from"./framework-b3a0f150.js";const d={},h=r('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),u=l("hr",null,null,-1),B=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：只要跑的快，爱情就追不上你。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=921f8cbe-2dd4-473a-ac69-8ae09acb9f78",alt:"",loading:"lazy"})])],-1);function f(_,p){const e=s("RouterLink");return n(),E("div",null,[h,l("ul",null,[l("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("Notion笔记定时备份")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Redis笔记")]),_:1})]),l("li",null,[a(e,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:i(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[t("弱引用示例")]),_:1})]),l("li",null,[a(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:i(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:i(()=>[t("MySQL索引")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[a(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:i(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[a(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:i(()=>[t("前后端常用技术")]),_:1})]),l("li",null,[a(e,{to:"/intro.html"},{default:i(()=>[t("intro")]),_:1})]),l("li",null,[a(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[t("Hbase 总览")]),_:1})])]),c,u,B,A])}const g=o(d,[["render",f],["__file","ES杂项.html.vue"]]);export{g as default};
