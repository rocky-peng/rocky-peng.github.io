# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：爱情会离开你，但数学不会，不会就是不会。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=2b2e21cf-5533-430a-b39d-2f1eef5504c4)
