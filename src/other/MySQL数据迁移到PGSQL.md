# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我为什么要栽你手里，你是土吗？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=700e65aa-17c2-4a98-ba54-6d7f1c955949)
