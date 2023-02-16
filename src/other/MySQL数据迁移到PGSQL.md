# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：虽然我长得丑，但是买了漂亮衣服，我就可以丑的漂亮。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=4de79546-eae7-40e3-aff7-b931aa90e5fb)
