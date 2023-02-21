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
- **随机毒鸡汤**：现在不努力，以后别人壁咚的墙，都是你搬的砖。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=4dd0e7a3-9cad-4f58-9afa-450fe2c2b33e)
