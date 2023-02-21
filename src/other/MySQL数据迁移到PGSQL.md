# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：以后作业我借你抄，谁不希望高考少个对手。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=1667a60d-14b0-4813-aceb-90b4013cebda)
