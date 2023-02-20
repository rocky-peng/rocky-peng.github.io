# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：很多父母不让娶的最终没娶，很多父母不让嫁的，最终都嫁了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=e1ca26e3-0165-4992-852e-ddefea9eb4a8)
