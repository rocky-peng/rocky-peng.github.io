import{_ as r,$ as n,a0 as i,a1 as e,a3 as a,a4 as o,a5 as s,a2 as t,w as E}from"./framework-58787b1c.js";const d={},c=s('<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><ol><li>倒排索引和mysql里面的fulltext索引，目前还不知道是不是一个原理</li></ol><p>先看张图：单词-文档矩阵 <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1117725911208899.png" alt="" loading="lazy"></p><p>一列一列看，就是<strong>正排索引</strong> 一行一行看，就是<strong>倒排索引</strong></p><p>正排索引告诉你的是：这个文档中有哪些关键字，每个关键字出现了多少次，出现在哪些位置 倒排索引告诉你的是：这个关键词在哪些文档中出现了，出现了多少次，出现在哪些位置</p><p>如果有人问你什么事倒排索引，就画这个图给他看</p><h3 id="为什么搜索引擎都是倒排索引" tabindex="-1"><a class="header-anchor" href="#为什么搜索引擎都是倒排索引" aria-hidden="true">#</a> 为什么搜索引擎都是倒排索引？</h3><p>通过上图可以知道，告诉我关键字，可以非常快速的知道这个关键字出现在了哪些文档，而通过正排索引就需要遍历文档才知道</p><p>前端时间看到美团技术公众号发得一篇文章提到，他们已经尝试用ClickHorse+filebeat替换ELK了</p><h2 id="es性能测试" tabindex="-1"><a class="header-anchor" href="#es性能测试" aria-hidden="true">#</a> ES性能测试</h2><h3 id="写入性能测试" tabindex="-1"><a class="header-anchor" href="#写入性能测试" aria-hidden="true">#</a> 写入性能测试</h3><figure><img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-20/1119051526580500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>单条数据越大，性能越差</li><li>集群环境下0副本的情况比1副本的情况吞吐量大概多1w docs/s</li><li>增加client数量能提高吞吐量,但超过2个后对吞吐量提高不是很明显，所以不建议超过2到3个为宜</li><li>单节点环境下有无副本貌似影响不大</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',15),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),B=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：小时候梦想长大了要超有钱，现在梦想实现一半了，我长大了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=01ba6fe0-0cdd-46e5-9c7f-6f46435f1c29",alt:"",loading:"lazy"})])],-1);function A(p,_){const l=E("RouterLink");return n(),i("div",null,[c,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[t("KVM 虚拟机安装")]),_:1})]),e("li",null,[a(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[a(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[a(l,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[a(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[t("常用队列")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(l,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[t("Nginx的双向认证配置")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[a(l,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[a(l,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[t("raft协议")]),_:1})]),e("li",null,[a(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),h,u,B,f])}const g=r(d,[["render",A],["__file","ES杂项.html.vue"]]);export{g as default};
