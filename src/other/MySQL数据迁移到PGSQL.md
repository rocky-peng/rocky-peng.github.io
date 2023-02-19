# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：妹妹你坐船头，哥哥我在岸上走。看这句的99%都是唱出来的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=1d083b24-9713-4fe2-907f-f3011bf59dbd)
