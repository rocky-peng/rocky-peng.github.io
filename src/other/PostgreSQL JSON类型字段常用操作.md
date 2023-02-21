---
title: PostgreSQL JSON类型字段常用操作
date: 2023-01-11
---

## 初始数据xxx

```sql
insert into name_age values('{"id":1,"name":"小明", "age":18}');
insert into name_age values('{"id":2,"name":"小明1", "age":17}');
insert into name_age values('{"id":3,"name":"小明3", "age":16}');
insert into name_age values('{"id":4,"name":"小明4", "age":20}');
insert into name_age values('{"id":5,"name":"小明5", "age":30}');
insert into name_age values('{"id":6,"name":"小明6", "age":10}');
insert into name_age values('{"id":7,"name":"小明7", "age":15}');
insert into name_age values('{"id":8,"name":"小明8", "age":35}');
insert into name_age values('{"id":9,"name":"小明9", "age":35}');
```

![Untitled](https://cdn.justdopay.com/notion/md5-4a3de158e20935f6b916a26b4cb21a54.png)

## Where

### 精确匹配

```sql
SELECT info||'{"gender":"男"}' as a,info||'{"gender":"男"}'::jsonb as b,info as c from name_age where (info->>'id')::int4 = 2;
```

![Untitled](https://cdn.justdopay.com/notion/md5-62bd7ca712b92f604a125071fc48cc45.png)

---

```sql
SELECT info||'{"gender":"男"}' as a,info||'{"gender":"男"}'::jsonb as b,info as c from name_age where (info->>'name') = '小明4';
```

![Untitled](https://cdn.justdopay.com/notion/md5-1d441b9a2eed822cfcffa387ad17b785.png)

### 模糊匹配

```sql
select * from name_age where info #>> '{name}' like '%明';
```

![Untitled](https://cdn.justdopay.com/notion/md5-43f7e49091046edf383e859981ca1905.png)

---

```sql
select * from name_age where (info->>'name') like '%4';
```

![Untitled](https://cdn.justdopay.com/notion/md5-9ddfccdf3034813fc20ba24b625ad568.png)

## 排序

```sql
select * from name_age order by info->'age' desc,info->'id' asc;
select * from name_age order by info->>'age' desc,info->'id' asc;
select * from name_age order by info->>'age' desc,info->>'id' asc;
```

![Untitled](https://cdn.justdopay.com/notion/md5-89475d6fb050cc73e3f97fc49bd03c69.png)

## 修改

### 增加json字段

```sql
update name_age set info = info || '{"gender":"男"}'::jsonb  where (info->>'id')::int4 = 1;
```

![Untitled](https://cdn.justdopay.com/notion/md5-6af15a340c5be493c9b8ece7d96b06e0.png)

![Untitled](https://cdn.justdopay.com/notion/md5-8ea2a5fac6d6e8d5cc4fa3b925805fd6.png)

### 删除json字段

```sql
update name_age set info = info-'gender' where  (info->>'id')::int4 = 1;
```

![Untitled](https://cdn.justdopay.com/notion/md5-dff3c28e3b29f2f79048230c54a6dbfe.png)

![Untitled](https://cdn.justdopay.com/notion/md5-5454c1282a1bd4089a55c9442657e34a.png)

### 修改json字段值

```sql
update name_age set info = info || '{"age":16}'::jsonb  where (info->>'id')::int4 = 1;
```

![Untitled](https://cdn.justdopay.com/notion/md5-e1f926e68951b3a665e46f972a174adc.png)

![Untitled](https://cdn.justdopay.com/notion/md5-084eaf5e07602158aa1e5fa7f6943a6c.png)

## 分页

```sql
select * from name_age order by info->>'age' desc,info->>'id' asc  limit 2 offset 1;
```

- **offset 从0开始**

![Untitled](https://cdn.justdopay.com/notion/md5-af25be7103d393e043d2bfea53a1b981.png)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不能成为想要的自己，最终活成了，不想成为的别人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=733941e4-9774-4898-933e-26a9d160b568)
