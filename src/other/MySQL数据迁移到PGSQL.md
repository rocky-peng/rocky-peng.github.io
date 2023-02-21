# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：其實你並不討厭，就是全無用處罷了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=ab278aa9-9e81-4dac-96c0-be67af1ab60c)
