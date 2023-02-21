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
- **随机毒鸡汤**：每天最顺心的事，恐怕就是早上起床，手机满电了吧。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=6dbcfc31-8040-40c7-a473-9a93ab805245)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：像你这样的人，哪怕把土豪两个字贴在脸上，别人也会反过来读。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=203cc3b9-5022-4ac6-8f70-242bf953f72b)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：吃货的思路是，好吃你就多吃点，不好吃多少也要吃点。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=821a2b0d-8e66-483f-b06e-80fe9b4721d5)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：乖别担心，恋爱都轮不到你，肺炎怎么会轮到你？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=660a7aa9-fda9-4256-99ad-3ad65782aff1)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：以前丑不好意思发自拍，现在不一样了，现在脸皮厚了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=9487e75f-cb3c-4f51-b3b1-66004a384eae)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：世界上最远的距离是，我想和你叙叙旧，你却问我要不要代购。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=4c71bb28-92c1-4334-94f3-aed4fd38f303)
