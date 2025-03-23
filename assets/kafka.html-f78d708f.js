import{_ as s,$ as r,a0 as f,a1 as e,a3 as o,a4 as l,a5 as n,a2 as t,w as i}from"./framework-b3a0f150.js";const h={},u=n('<ol><li>kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。</li><li></li></ol><h2 id="新消费组" tabindex="-1"><a class="header-anchor" href="#新消费组" aria-hidden="true">#</a> 新消费组</h2><h3 id="设置-auto-offset-reset-config-earliest" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。</p><p>也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的</p><h3 id="设置-auto-offset-reset-config-none" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-none" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG none</h3><p>启动则报错</p><h3 id="设置-auto-offset-reset-config-earliest-1" tabindex="-1"><a class="header-anchor" href="#设置-auto-offset-reset-config-earliest-1" aria-hidden="true">#</a> 设置：AUTO_OFFSET_RESET_CONFIG earliest</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><h3 id="不配置auto-offset-reset-config" tabindex="-1"><a class="header-anchor" href="#不配置auto-offset-reset-config" aria-hidden="true">#</a> 不配置AUTO_OFFSET_RESET_CONFIG</h3><p>第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',13),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),c=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：突然发现，起床第一件事是摸手机，睡前最后一件事是放下手机。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/9981233/pexels-photo-9981233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Turkish coffee served in a cozy setting with literature and greenery.",loading:"lazy"})])],-1);function B(p,A){const a=i("RouterLink");return r(),f("div",null,[u,e("ul",null,[e("li",null,[o(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[o(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[o(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[o(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[t("MongoDB高可用")]),_:1})]),e("li",null,[o(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:l(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:l(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[o(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[t("简易版配置中心&初探原理")]),_:1})]),e("li",null,[o(a,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[o(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[t("GitHub Workflow突然报错")]),_:1})]),e("li",null,[o(a,{to:"/software/raft/sofajraft.html"},{default:l(()=>[t("sofajraft")]),_:1})]),e("li",null,[o(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[t("Linux dev shm目录")]),_:1})])]),d,E,c,_])}const F=s(h,[["render",B],["__file","kafka.html.vue"]]);export{F as default};
