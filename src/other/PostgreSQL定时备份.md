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
- **随机毒鸡汤**：不要轻易瞧不起人，就算是杀马特，发量也比你多。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=b8c9c4c4-cd9d-4b9f-b189-d54ae03fb783)
