# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：洗脸时不要洗到发际线，因为发际线会以为那是脸，就会往后移。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=35651973-08bb-446a-b88c-2fbc85c51ab2)
