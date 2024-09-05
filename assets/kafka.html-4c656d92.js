import{_ as r,$ as s,a0 as f,a1 as e,a3 as l,a4 as o,a5 as n,a2 as t,w as i}from"./framework-b6ede5bc.js";const d={},h=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),_=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：很多人说我减肥没瘦，减肥没瘦怎么了？你上班不也没存款吗？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=523479aa-9e71-48cb-980d-1693063e715a",alt:"",loading:"lazy"})])],-1);function p(m,A){const a=i("RouterLink");return s(),f("div",null,[h,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(a,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[t("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[l(a,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Docker笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[t("InnoDB存储引擎")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[t("gperftools")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("AQS源码解读")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/linux/Linux.html"},{default:o(()=>[t("Linux")]),_:1})]),e("li",null,[l(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[t("raft协议")]),_:1})])]),u,c,_,E])}const S=r(d,[["render",p],["__file","kafka.html.vue"]]);export{S as default};
