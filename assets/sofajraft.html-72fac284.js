import{_ as r,$ as i,a0 as n,a1 as e,a3 as a,a4 as o,a5 as s,a2 as l,w as d}from"./framework-3367138f.js";const p={},u=s('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),c=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：能不能借我一毛钱？以免我们，一毛钱关系都没有。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d9d4a758-09aa-43ef-b1b8-222b4a258e96",alt:"",loading:"lazy"})])],-1);function B(_,m){const t=d("RouterLink");return i(),n("div",null,[u,e("ul",null,[e("li",null,[a(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[l("测试两台服务器间的网速")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[a(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[l("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:o(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[l("kafka")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[l("InnoDB存储引擎")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[l("异地多活")]),_:1})]),e("li",null,[a(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("JVM杂项")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})])]),E,h,c,f])}const S=r(p,[["render",B],["__file","sofajraft.html.vue"]]);export{S as default};
