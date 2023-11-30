---
title: Hbase 总览
date: 2023-11-02
categroy:
- bigdata
- hbase
tag:
- hbase
- bigdata
- 列族
---

hbase主要用来存储大数据量数据，底层存储采用的是hdfs来存储，是一种列式存储nosql数据库。

## 逻辑存储结构

假设现在要存储这样的数据：

```json
{
  "row_key1": {
    "personal_info": {
      "name": "zhangsan",
      "city": "北京",
      "phone": "131********"
    },
    "office_info": {
      "tel": "010-1111111",
      "address": "atguigu"
    }
  },
  "row_key11": {
    "personal_info": {
      "city": "上海",
      "phone": "132********"
    },
    "office_info": {
      "tel": "010-1111111"
    }
  },
  "row_key2": {
    ......
  }
}
```

逻辑上看，大概这样子

![Untitled](https://cdn.justdopay.com/notion2/md5-4850a486e6417b52672a80224d47d579.png)

Region： 一定范围的row_key组成一个region

## 物理存储结构

![Untitled](https://cdn.justdopay.com/notion2/md5-35c66be820c7e94fbd119bc69c1ce4fa.png)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：吃货的思路是，好吃你就多吃点，不好吃多少也要吃点。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=24f46527-d7c0-40f8-a346-94d011f48a72)
