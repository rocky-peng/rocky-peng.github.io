import{_ as s,$ as r,a0 as n,a1 as e,a3 as l,a4 as o,a5 as f,a2 as t,w as i}from"./framework-b7a22294.js";const E={},d=f('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我最渴望知识的时候，就是在考试时。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c4c0910e-7e82-401a-be60-e824d7f1d457",alt:"",loading:"lazy"})])],-1);function A(B,p){const a=i("RouterLink");return r(),n("div",null,[d,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[t("KVM 虚拟机安装")]),_:1})]),e("li",null,[l(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[t("弱引用示例")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[t("异地多活")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("推荐几个适用小工具")]),_:1})]),e("li",null,[l(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("Docker跨主机通信方案")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("表单重复提交解决方案")]),_:1})]),e("li",null,[l(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[t("raft协议")]),_:1})]),e("li",null,[l(a,{to:"/software/linux/Linux.html"},{default:o(()=>[t("Linux")]),_:1})])]),u,h,c,_])}const m=s(E,[["render",A],["__file","kafka.html.vue"]]);export{m as default};
