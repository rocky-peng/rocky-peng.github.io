import{_ as s,$ as r,a0 as n,a1 as e,a3 as o,a4 as a,a5 as E,a2 as t,w as i}from"./framework-b3a0f150.js";const p={},h=E('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),d=e("hr",null,null,-1),B=e("hr",null,null,-1),c=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：她是你最美的回忆，而你是她不堪的过去。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function A(_,f){const l=i("RouterLink");return r(),n("div",null,[h,e("ul",null,[e("li",null,[o(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:a(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[o(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[o(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[o(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[o(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("PostgreSQL定时备份")]),_:1})]),e("li",null,[o(l,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[o(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[o(l,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[o(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("ES杂项")]),_:1})]),e("li",null,[o(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:a(()=>[t("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[o(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[o(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),u,d,B,c])}const g=s(p,[["render",A],["__file","sofajraft.html.vue"]]);export{g as default};
