# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：别总自称单身狗了，按年龄你是单身鳖，按智商你是单身傻狍子。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=17cf8002-fa2e-49b1-9aa0-368ba11afd2b)
