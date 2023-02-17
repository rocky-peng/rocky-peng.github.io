# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：为什么作业做不完？后来才发现homework，它是个不可数名词！
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=c286a9ac-46d3-431e-a3da-12b67cab6fb9)
