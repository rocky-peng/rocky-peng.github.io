---
title: PostgreSQL JSON类型字段常用操作
index: false
article: false
date: 2023-01-11
---

# 初始数据

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

![Untitled](PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C%206f6b7cdd2ce04871b605930099dbc32d/Untitled.png)

# Where

## 精确匹配

```sql
SELECT info||'{"gender":"男"}' as a,info||'{"gender":"男"}'::jsonb as b,info as c from name_age where (info->>'id')::int4 = 2;
```

![Untitled](./Untitled%201.png)

---

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
