# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：为什么家长只关注成绩呢？那废话，他们能看得懂题吗？
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=e662b93c-6ace-4462-a954-63e2b47be5f2)
