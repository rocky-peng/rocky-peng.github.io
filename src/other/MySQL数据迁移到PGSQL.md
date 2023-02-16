# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
---
---
- 随机毒鸡汤：好看的皮囊特别贵，有趣的灵魂特别丑。
---
![](http://api.btstu.cn/sjbz/?lx=meizi)
