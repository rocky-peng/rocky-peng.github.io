---
title: 分布式事务Seata
date: 2018-08-05
---

# SEATA

四种模式：AT、TCC、SAGA、XA 四种模式

## AT

基于两阶段协议的演变

一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。

二阶段 commit 行为：马上成功结束，自动 异步批量清理回滚日志。

二阶段 rollback 行为：通过回滚日志，自动 生成补偿操作，完成数据回滚。

扩展阅读：https://seata.io/zh-cn/docs/overview/what-is-seata.html




## AT与TCC的主要区别
1. 都是基于两阶段提交模型
2. AT适用于底层数据资源本身支持事务的场景
3. TCC，底层数据资源不支持事务的情况可以采用TCC，就是完全自定义prepare/commit/rollback行为

![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-11/34297732151772.png)

扩展阅读：https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html










<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：如果到二零二零年，要消灭贫困人口，那么我剩下的日子不多了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=7b6e6465-c3e1-4a0b-9ba8-afaea5d3002b)
