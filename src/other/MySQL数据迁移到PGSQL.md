# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：成绩不代表一切，成绩只是让别人，低头弯腰而已。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=61cd96fb-4da3-4149-bb2a-6bdf1c7c7150)
