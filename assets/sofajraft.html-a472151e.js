import{_ as r,$ as i,a0 as s,a1 as l,a3 as a,a4 as o,a5 as n,a2 as t,w as E}from"./framework-b3a0f150.js";const d={},u=n('<p>是java语音针对raft协议的实现</p><p>解决的问题：</p><ol><li><p>集群状态下的共识问题</p></li><li><p>leader的选举问题</p></li><li><p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p></li><li><p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p></li><li><p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p></li></ol><p>Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task</p><ol><li>任务的数据</li><li>期望的leader id</li><li>回调接口 Closure ,在成功或失败的时候调用</li></ol><p>StateMachine</p><ol><li>业务逻辑关键方法 onApply ,输入批量的task，业务处理task</li></ol><p>NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等</p><p>Node: 代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信</p><p>RpcServer: 和node的关系是什么? node和rpcserver之间是如何关联的？</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),p=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),A=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：每天道晚安之后，她其实在切换账号。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c4ecbb50-0b81-4835-a007-dc5191a73fac",alt:"",loading:"lazy"})])],-1);function f(B,_){const e=E("RouterLink");return i(),s("div",null,[u,l("ul",null,[l("li",null,[a(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[a(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[a(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[t("kafka")]),_:1})]),l("li",null,[a(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[a(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[t("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[a(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[t("istio基础知识")]),_:1})]),l("li",null,[a(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("Redis高可用")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[a(e,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[t("Linux dev shm目录")]),_:1})]),l("li",null,[a(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[t("raft协议")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("表单重复提交解决方案")]),_:1})])]),p,c,A,h])}const b=r(d,[["render",f],["__file","sofajraft.html.vue"]]);export{b as default};
