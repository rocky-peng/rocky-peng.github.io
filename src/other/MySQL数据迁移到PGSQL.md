# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要和穿船袜的人握手，因为你不知道TA，最近一次抠脚是什么时候。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=960c456d-77f5-4335-bc4c-8128f08c4e26)
