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
- **随机毒鸡汤**：哪里会有人喜欢孤独，不过是，不喜欢失望罢了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=a2a6c564-40df-4b27-b266-7e9f776c6255)
