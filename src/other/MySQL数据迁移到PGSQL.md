# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：治疗脱发，最好的办法，剃光头。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=c307e8c1-744b-43b4-ba1a-7c1f270273ce)
