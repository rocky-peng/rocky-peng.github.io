import{_ as s,$ as r,a0 as f,a1 as e,a3 as l,a4 as o,a5 as i,a2 as t,w as n}from"./framework-b3a0f150.js";const E={},h=i('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你感觉是错过 ，人家感觉是解脱。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=533f3cb8-320d-4071-8e2b-125d46410aab",alt:"",loading:"lazy"})])],-1);function B(A,m){const a=n("RouterLink");return r(),f("div",null,[h,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[t("记一次内存泄漏")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[t("提取Docker镜像中的文件")]),_:1})]),e("li",null,[l(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[t("IO相关")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[t("异地多活")]),_:1})]),e("li",null,[l(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),e("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[t("GitHub Workflow突然报错")]),_:1})]),e("li",null,[l(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[t("Hbase 总览")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[t("BBR加速")]),_:1})])]),d,u,c,_])}const p=s(E,[["render",B],["__file","kafka.html.vue"]]);export{p as default};
