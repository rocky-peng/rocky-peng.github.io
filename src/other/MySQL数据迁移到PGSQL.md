# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：日日称重日日重，年年减肥年年肥。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=2f8d2b3a-f40a-4ba0-a72c-7437c3793ea4)
