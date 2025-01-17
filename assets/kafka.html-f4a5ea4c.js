import{_ as r,$ as s,a0 as i,a1 as e,a3 as o,a4 as l,a5 as n,a2 as t,w as f}from"./framework-b3a0f150.js";const d={},h=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：二十不惑三十而已，而我不一样，我困惑不已。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=420ea9ad-3711-4e0a-b990-c4834b18f526",alt:"",loading:"lazy"})])],-1);function B(A,m){const a=f("RouterLink");return s(),i("div",null,[h,e("ul",null,[e("li",null,[o(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[t("Redis笔记")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:l(()=>[t("KVM 虚拟机安装")]),_:1})]),e("li",null,[o(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[o(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[t("提取Docker镜像中的文件")]),_:1})]),e("li",null,[o(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[t("Redis高可用")]),_:1})]),e("li",null,[o(a,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[t("MAC CMS")]),_:1})]),e("li",null,[o(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[t("Markdown软件比对")]),_:1})]),e("li",null,[o(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[t("RocketMQ")]),_:1})]),e("li",null,[o(a,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:l(()=>[t("随机图片在线接口")]),_:1})]),e("li",null,[o(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[t("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[o(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[t("K8S常用命令")]),_:1})])]),E,u,c,_])}const F=r(d,[["render",B],["__file","kafka.html.vue"]]);export{F as default};
