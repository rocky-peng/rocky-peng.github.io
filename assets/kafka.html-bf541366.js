import{_ as s,$ as r,a0 as n,a1 as e,a3 as o,a4 as l,a5 as i,a2 as t,w as f}from"./framework-b3a0f150.js";const E={},h=i('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),c=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：表达有很多种，不表达也是其中一种。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/9981233/pexels-photo-9981233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Turkish coffee served in a cozy setting with literature and greenery.",loading:"lazy"})])],-1);function _(B,g){const a=f("RouterLink");return r(),n("div",null,[h,e("ul",null,[e("li",null,[o(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[o(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[o(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[t("JVM参数设置")]),_:1})]),e("li",null,[o(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[t("PostgreSQL定时备份")]),_:1})]),e("li",null,[o(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[t("Redis高可用")]),_:1})]),e("li",null,[o(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[t("Docker笔记")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/gperftools.html"},{default:l(()=>[t("gperftools")]),_:1})]),e("li",null,[o(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:l(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[o(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:l(()=>[t("MySQL三大日志")]),_:1})]),e("li",null,[o(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[t("CountDownLatch源码解读")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[o(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:l(()=>[t("Docker隐射的端口外网不能访问")]),_:1})])]),d,u,c,A])}const p=s(E,[["render",_],["__file","kafka.html.vue"]]);export{p as default};
