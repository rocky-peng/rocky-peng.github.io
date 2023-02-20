---
title: Kafka
date: 2021-08-01
---

1. kafka的副本是针对分区的。也就是说不同分区的leader可能是不一样的。
2. 


## 新消费组
### 设置：AUTO_OFFSET_RESET_CONFIG earliest
第一次启动，从最开始的offset开始消费。然后不改动任何代码和配置重启，还是从最开始的offset开始消费，多次启动，仍然是从最开始的offset开始消费。

也就是说，新的消费组如果设置了earliest，kafka是不会记录消费位置的

### 设置：AUTO_OFFSET_RESET_CONFIG none
启动则报错

### 设置：AUTO_OFFSET_RESET_CONFIG earliest
第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费

### 不配置AUTO_OFFSET_RESET_CONFIG
第一次启动，从最新的offset开始消费。同时offset会实时更新。然后关闭，此时的offset为B。然后不改动任何代码和配置多次重启后，消费的offset不会实时更新，所以多次重启可能会重复消费
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我已剪断我的发，剪断了牵挂，可你却还要让我办张卡？
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=edf4d4ca-90ee-499d-a659-566733d90970)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：当别人向你提出意见时，一定要认真记下来，对你有意见的都有谁。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=69ff993b-ff56-4458-aecc-513e552a4749)
