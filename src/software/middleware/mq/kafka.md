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
- **随机毒鸡汤**：做事一定要考虑别人的感受，千万不能让他们太开心了。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=76c27b8f-9ec3-4318-a64e-2285f37eb314)