# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：无论最后我们疏远成什么样，一个红包，就能回到当初。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=13ff99dc-f84f-4362-8122-ce3f010648ec)
