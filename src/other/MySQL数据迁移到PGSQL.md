# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：找对象还是眼光高点好，你总得为，没有人喜欢你找个借口吧。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=9f812d73-b4d0-40d9-8540-01490912b01b)
