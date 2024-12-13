import{_ as s,$ as r,a0 as f,a1 as e,a3 as o,a4 as l,a5 as n,a2 as t,w as i}from"./framework-b3a0f150.js";const h={},d=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),E=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：当你觉得自己不行的时候，就走马路上走走，这样你就是一个行人了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=06c55d5f-f691-4389-ac4d-439de2eb339a",alt:"",loading:"lazy"})])],-1);function A(B,p){const a=i("RouterLink");return r(),f("div",null,[d,e("ul",null,[e("li",null,[o(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[t("来个JVM冷知识")]),_:1})]),e("li",null,[o(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[o(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[o(a,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[o(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[o(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[t("Paxos算法")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/gperftools.html"},{default:l(()=>[t("gperftools")]),_:1})]),e("li",null,[o(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:l(()=>[t("Docker跨主机通信方案")]),_:1})]),e("li",null,[o(a,{to:"/intro.html"},{default:l(()=>[t("intro")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[t("表单重复提交解决方案")]),_:1})]),e("li",null,[o(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[t("Hbase 总览")]),_:1})]),e("li",null,[o(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[t("K8S常用命令")]),_:1})])]),u,c,E,_])}const b=s(h,[["render",A],["__file","kafka.html.vue"]]);export{b as default};
