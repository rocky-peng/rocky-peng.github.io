# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：人还是要有梦想的，即使是咸鱼， 也要做最咸的那一条。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=28b852dd-edb8-4c84-b736-8bef6505dcda)
