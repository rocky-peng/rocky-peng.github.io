import{_ as s,$ as i,a0 as r,a1 as e,a3 as l,a4 as o,a5 as n,a2 as t,w as f}from"./framework-b3a0f150.js";const d={},h=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：白天嘈杂得不愿意醒，夜晚安静得舍不得睡。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/9981233/pexels-photo-9981233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Turkish coffee served in a cozy setting with literature and greenery.",loading:"lazy"})])],-1);function B(A,m){const a=f("RouterLink");return i(),r("div",null,[h,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("Git笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("MAT工具")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("MySQL杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[l(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("MySQL高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[t("K8S 无感发布")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("Redis高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("表单重复提交解决方案")]),_:1})])]),E,u,c,_])}const F=s(d,[["render",B],["__file","kafka.html.vue"]]);export{F as default};
