---
title: PostgreSQL JSON类型字段常用操作
index: false
article: false
```sql
SELECT info||'{"gender":"男"}' as a,info||'{"gender":"男"}'::jsonb as b,info as c from name_age where (info->>'name') = '小明4';
```
![Untitled](./Untitled%202.png)
## 模糊匹配
```sql
select * from name_age where info #>> '{name}' like '%明';
```
![Untitled](./Untitled%203.png)
---

```sql
select * from name_age where (info->>'name') like '%4';
```

![Untitled](./Untitled%204.png)

# 排序

```sql
select * from name_age order by info->'age' desc,info->'id' asc;
select * from name_age order by info->>'age' desc,info->'id' asc;
select * from name_age order by info->>'age' desc,info->>'id' asc;
```

![Untitled](./Untitled%205.png)

# 修改

## 增加json字段

```sql
update name_age set info = info || '{"gender":"男"}'::jsonb  where (info->>'id')::int4 = 1;
```

![Untitled](./Untitled%206.png)

![Untitled](./Untitled%207.png)

## 删除json字段

```sql
update name_age set info = info-'gender' where  (info->>'id')::int4 = 1;
```

![Untitled](./Untitled%208.png)

![Untitled](./Untitled%209.png)

## 修改json字段值

```sql
update name_age set info = info || '{"age":16}'::jsonb  where (info->>'id')::int4 = 1;
```

![Untitled](./Untitled%2010.png)

![Untitled](./Untitled%2011.png)

# 分页

```sql
select * from name_age order by info->>'age' desc,info->>'id' asc  limit 2 offset 1;
```

- offset 从0开始

![Untitled](./Untitled%2012.png)
