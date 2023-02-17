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
- **随机毒鸡汤**：一辈子是202天，因为她说爱我一辈子。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=03251e38-d409-4940-8347-2f606b9bf3d5)
