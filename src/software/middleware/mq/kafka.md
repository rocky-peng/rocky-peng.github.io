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
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：一个嗯，一个哦，毁了我想对你说的所有话。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=0f2a702a-8a06-4af7-a833-c65600a11f17)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：出场顺序很重要，去迟了也没关系，毕竟大Boss都是最后出场。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=9af56e2d-1f37-4481-ace2-88ab2b4eb623)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：別人前途無量，我前途無亮。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=1ac45bb8-b0f3-4b6f-aab4-e038083140e0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不告白不是怕你拒绝，而是怕你拒绝之后，跟别人一起嘲笑我。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=cb27844b-be52-4efa-8dee-0eca5c53f89f)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：待你长发及腰，记得拉屎要撩。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=16211611-95d9-4f24-a762-05797f0dc67d)
