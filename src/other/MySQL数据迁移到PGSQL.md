# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要轻易向命运低头，因为，一低头就会看到赘肉。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=ca502eae-02be-4ebf-bd43-7e4133c1c6c0)
