# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：老板用你的时候你就是人才，不用你的时候就变成裁人！
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=74a9716c-eeeb-4570-b7a2-9eafd2fad2f2)
