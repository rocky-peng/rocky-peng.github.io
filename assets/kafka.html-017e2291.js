import{_ as s,$ as r,a0 as i,a1 as e,a3 as l,a4 as o,a5 as n,a2 as t,w as f}from"./framework-b7a22294.js";const d={},h=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：小时候我常想，长大了是上北大还是清华，现在想想原来是我想多了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=54015699-884d-47ee-acaf-f77871595195",alt:"",loading:"lazy"})])],-1);function A(m,B){const a=f("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("数据同步方案")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[t("istio基础知识")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:o(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[t("分库分表")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("CountDownLatch源码解读")]),_:1})]),e("li",null,[l(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})]),e("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[t("Linux dev shm目录")]),_:1})])]),u,E,c,_])}const F=s(d,[["render",A],["__file","kafka.html.vue"]]);export{F as default};
