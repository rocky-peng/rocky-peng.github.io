# MySQL数据迁移到PGSQL

1. 采用的工具是navicat premium软件的数据传输功能，但有小坑：
    1. mysql的bit(1)数据类型转成了varchar(1)
    2. mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：为什么现代人不会写诗？因为，「文体不限诗歌除外」。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=bae22176-119b-4474-bbe2-ec8a6e112b36)
