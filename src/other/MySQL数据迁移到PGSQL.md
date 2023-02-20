# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你永远不会知道，你的哪个好友，会成为下一个微商。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=ec84d87e-6594-4a2c-92d3-df812526ca88)
