# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：从小听到最多的， 是「你要懂事」，可却很少听到「你要开心」。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=543210cd-8ed2-49ba-b06b-a4bd51ddc9ac)
