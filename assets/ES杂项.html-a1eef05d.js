import{_ as r,$ as i,a0 as n,a1 as e,a3 as a,a4 as o,a5 as s,a2 as t,w as d}from"./framework-16d560c6.js";const c={},h=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),f=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：每一个抖腿的人，心里都有一台缝纫机。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b29abf08-cc3e-4767-86cd-616e52e32489",alt:"",loading:"lazy"})])],-1);function E(m,g){const l=d("RouterLink");return i(),n("div",null,[h,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[t("Btrace入门")]),_:1})]),e("li",null,[a(l,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[a(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[a(l,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[a(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:o(()=>[t("分布式事务Seata")]),_:1})]),e("li",null,[a(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[t("GitHub Workflow突然报错")]),_:1})]),e("li",null,[a(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[t("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[a(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})]),e("li",null,[a(l,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[t("随机图片在线接口")]),_:1})])]),u,_,f,p])}const A=r(c,[["render",E],["__file","ES杂项.html.vue"]]);export{A as default};
