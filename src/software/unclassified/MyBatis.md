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
- **随机毒鸡汤**：每次考试都认真反思，到最后发现，我写检讨的能力变好了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=8ca098d2-b0d3-43cb-88c5-0a492f3e22fc)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：每个人都有幸福的权力，却只有少数人，有幸福的能力。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=f01183fc-7238-4679-9468-752a9a0920c5)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：心想事成的诀窍是，只想能成的事。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=27b51297-eb4e-4922-a933-06d2a4abe128)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：两只小蜜蜂飞在花丛中，飞的高的对低的说，你个low bee。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=4fa1e4fb-e575-484d-966b-0fe023134eea)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：肚子上的赘肉，是你向生活妥协的痕迹。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=b45d35fa-765d-42ba-9db6-afed8e6bada1)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：遇到喜欢的人一定要表白，你丑没关系，万一他瞎呢。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=ded6794d-39bc-43c9-83f8-a66a1a9870ec)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我可以秒回可以已读不回，也可以不读不回，都取决你是谁。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=c4a2f173-e314-4dc9-8740-4b0fc3a226d4)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：在家宅着，圆了我当皇帝的梦，朕乃“闲疯帝”。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=810403a8-d8b2-4238-852c-7bf862de927d)
