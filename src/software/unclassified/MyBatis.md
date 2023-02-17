---
title: MyBatis
date: 2020-05-03
---

## 四大对象
1. Executor(update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)
2. ParameterHandler(getParameterObject, setParameters)
3. ResultSetHandler(handleResultSets, handleOutputParameters)
4. StatementHandler(prepare, parameterize, batch, update, query)

![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036349606140000.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036362816835900.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036375527829600.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036402558195200.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036316696453400.png)

## 自定义插件
实现 MyBatis 的 Interceptor 接口并复写 intercept() 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。

![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036504434818200.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-19/1036521422741800.png)


<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：屎到淋头，还想搅便。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=03cbef62-d0af-4cdb-b778-468f4baa7c19)
