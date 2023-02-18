# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：月考时我不给你们露两手，你们都不知道我，国庆玩的有多开心。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=685b9148-a2b0-44e2-aebf-f7e0dfb72949)
