import{_ as r,$ as i,a0 as s,a1 as e,a3 as a,a4 as o,a5 as n,a2 as l,w as d}from"./framework-b3a0f150.js";const p={},u=n('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),f=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：爱情可以来迟，但外卖不行，毕竟我还在长身体。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e5e8a6a6-1521-49fd-8525-619e4aad8711",alt:"",loading:"lazy"})])],-1);function h(B,A){const t=d("RouterLink");return i(),s("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Redis笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[l("各种网关性能测试")]),_:1})]),e("li",null,[a(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("弱引用示例")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[l("MySQL三大日志")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[l("RocketMQ")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[l("BBR加速")]),_:1})]),e("li",null,[a(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[l("随机图片在线接口")]),_:1})])]),c,E,f,_])}const w=r(p,[["render",h],["__file","sofajraft.html.vue"]]);export{w as default};
