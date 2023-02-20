# PostgreSQL定时备份

编写一个shell脚本，暂时命名为：pg-localhost-backup.sh，内容如下：

```bash
username=$1
database=$2
backdir=$3

currTime=`date '+%Y%m%d-%H%M%S'`

/www/server/pgsql/bin/pg_dump/pg_dump -U $username $database | gzip > $backdir/$username-$database-$currTime.zip
```

命令解释：该命令是备份单个数据库，并将备份输出的**文本内容**使用gzip进行压缩存储
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我承受了这个年纪，不该有的饭量。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=8d29ff07-6ade-4d68-b4d2-454c8cc4be9f)
