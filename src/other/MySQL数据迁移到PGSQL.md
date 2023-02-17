# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：早睡早起身体好，晚睡晚起心情好。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=da6276e0-103c-4d10-8dd0-964d0c4d8f41)
