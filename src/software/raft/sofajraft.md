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
- **随机毒鸡汤**：昨天遇见小学同班同学，没想到他混的这么差，只往我碗里放了一块钱。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=2dd05434-b46b-45a1-b135-689c8ab8acb9)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：曾经给我泼凉水的人，没关系的，我烧开了还会还给你的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=dca236f0-f8b5-4d38-b0b1-4f769ea9e602)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我有千百个想见你的理由，却缺少一种能见你的身份。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=8f3cabbe-a424-458b-9906-b978832917e0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：宅家想剪头发怎么办？打开窗户，二月春风似剪刀。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=723c8df8-d83c-4e74-b3ee-2b58cb14b73b)
