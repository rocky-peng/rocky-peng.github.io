import{_ as E,$ as r,a0 as n,a1 as l,a3 as o,a4 as a,a5 as i,a2 as e,w as B}from"./framework-16d560c6.js";const s={},d=i('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),p=l("hr",null,null,-1),u=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：回过头才发现，高考真的是，穷人最便捷的出路。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=926607c1-2059-450f-9b10-aacd53be314b",alt:"",loading:"lazy"})])],-1);function h(f,_){const t=B("RouterLink");return r(),n("div",null,[d,l("ul",null,[l("li",null,[o(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[e("Docker进行资源隔离")]),_:1})]),l("li",null,[o(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[e("微博关注关系如何实现")]),_:1})]),l("li",null,[o(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[o(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("PostgreSQL定时备份")]),_:1})]),l("li",null,[o(t,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("JDK命令行工具")]),_:1})]),l("li",null,[o(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[o(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:a(()=>[e("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[e("异地多活")]),_:1})]),l("li",null,[o(t,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[e("SQL优化")]),_:1})]),l("li",null,[o(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:a(()=>[e("Docker隐射的端口外网不能访问")]),_:1})])]),A,p,u,c])}const C=E(s,[["render",h],["__file","sofajraft.html.vue"]]);export{C as default};
