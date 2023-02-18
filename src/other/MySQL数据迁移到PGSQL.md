# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我们被困在家里，已经很幸运了，而有些人被永远困在了2020。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=d9071ee3-98ae-4a15-948e-6ecbc350d5b0)
