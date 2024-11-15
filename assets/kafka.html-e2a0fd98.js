import{_ as i,$ as s,a0 as n,a1 as e,a3 as o,a4 as l,a5 as r,a2 as t,w as E}from"./framework-16d560c6.js";const f={},d=r('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：因为长情是古董，所以假货特别多。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c3d151bf-26e3-4f39-a8d1-16979d5b46e0",alt:"",loading:"lazy"})])],-1);function A(B,F){const a=E("RouterLink");return s(),n("div",null,[d,e("ul",null,[e("li",null,[o(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:l(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(a,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[t("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[o(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[t("istio基础知识")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:l(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[o(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:l(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[o(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[o(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[o(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:l(()=>[t("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[o(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[t("Nginx的双向认证配置")]),_:1})]),e("li",null,[o(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[t("PostgreSQL高可用")]),_:1})])]),h,u,c,_])}const m=i(f,[["render",A],["__file","kafka.html.vue"]]);export{m as default};
