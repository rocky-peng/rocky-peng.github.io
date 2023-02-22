---
title: SofaRaft
date: 2022-03-04
---

是java语音针对raft协议的实现

解决的问题：

1. 集群状态下的共识问题
2. leader的选举问题

1. 同一时刻，最多只有一个leader，leader来负责处理读写请求
2. cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态
3. leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作

Status 状态，封装了任务的执行结果 Closure 回调接口，引用Status， Task

1. 任务的数据
2. 期望的leader id
3. 回调接口 Closure ,在成功或失败的时候调用

StateMachine

1. 业务逻辑关键方法 onApply ,输入批量的task，业务处理task

NodeOptions raft节点的配置信息，里面就引用了StateMachine实例，以及其他的一些配置 比如：快照间隔时间、快照存储路径、日志保存路径、元信息存储路径等

Node:
代表一个raft节点，可以apply task(提交task)，可以创建快照 snapshot 可用RaftServiceFactory创建一个node 正常情况都应该至少创建3个node node之前通过bolt框架通信

RpcServer:
和node的关系是什么? node和rpcserver之间是如何关联的？






<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：别人都是为怎么挣钱而发愁，我却是为怎么花钱而发愁，二十块怎么能花到下月十号？
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=fa3cfe19-41b0-4b5a-a17a-00d8a3792bc4)
