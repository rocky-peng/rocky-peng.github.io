import{_ as s,$ as r,a0 as n,a1 as e,a3 as o,a4 as l,a5 as f,a2 as t,w as i}from"./framework-b3a0f150.js";const E={},h=f('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),u=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我最擅长地就是虚度光阴，这个现在已经在表演了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/9981233/pexels-photo-9981233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Turkish coffee served in a cozy setting with literature and greenery.",loading:"lazy"})])],-1);function _(A,m){const a=i("RouterLink");return r(),n("div",null,[h,e("ul",null,[e("li",null,[o(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[o(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[o(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[o(a,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[t("MAC CMS")]),_:1})]),e("li",null,[o(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:l(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[o(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[o(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:l(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[o(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:l(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[o(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:l(()=>[t("Docker跨主机通信方案")]),_:1})]),e("li",null,[o(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[t("raft协议")]),_:1})]),e("li",null,[o(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[t("Linux dev shm目录")]),_:1})])]),d,c,u,B])}const k=s(E,[["render",_],["__file","kafka.html.vue"]]);export{k as default};
