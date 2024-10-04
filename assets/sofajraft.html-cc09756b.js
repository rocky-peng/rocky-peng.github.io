import{_ as E,$ as r,a0 as s,a1 as t,a3 as a,a4 as o,a5 as i,a2 as l,w as n}from"./framework-827a3556.js";const d={},B=i('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),u=t("hr",null,null,-1),A=t("hr",null,null,-1),p=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：我不止会原地踏步，还会随波逐流。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=faea4285-ea0c-4c22-a460-696e4f5fd16b",alt:"",loading:"lazy"})])],-1);function c(f,_){const e=n("RouterLink");return r(),s("div",null,[B,t("ul",null,[t("li",null,[a(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[l("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Redis笔记")]),_:1})]),t("li",null,[a(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[l("JVM垃圾收集器")]),_:1})]),t("li",null,[a(e,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[l("Docker进行资源隔离")]),_:1})]),t("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[a(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),t("li",null,[a(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("高可用通用方案")]),_:1})]),t("li",null,[a(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[l("istio基础知识")]),_:1})]),t("li",null,[a(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[l("Arthas使用记录")]),_:1})]),t("li",null,[a(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[l("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),h,u,A,p])}const F=E(d,[["render",c],["__file","sofajraft.html.vue"]]);export{F as default};
