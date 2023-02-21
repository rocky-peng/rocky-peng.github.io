---
title: Markdown Mermaid画图实例
date: 2022-12-23
---

官网： https://mermaid.js.org/syntax/flowchart.html

可以理解为思维导图
```mermaid
graph LR
KaTex--> A(标记 Accents)
A-->撇,估计,均值,向量等写于符号上下的标记
KaTex--> 分隔符_Delimiters
分隔符_Delimiters-->小中大括号,竖杠,绝对值等分隔符的反斜杠写法
KaTex--> 公式组_Enviroments
公式组_Enviroments-->B(.....)
KaTex-->C(...)
```
---

状态图
```mermaid
stateDiagram-v2
[*] --> First
First --> Second
First --> Third

state First {
    [*] --> fir
    fir --> [*]
}
state Second {
    [*] --> sec
    sec --> [*]
}
state Third {
    [*] --> thi
    thi --> [*]
}
```



```mermaid
graph TD;
    A(视图创建) --> B(参加校验,基本信息填充) --> C(id是否为空)
	C--true,新增视图-->E(为关联的融合对象创建分组,根节点分组)
	C--false,更新视图-->F(查询历史数据视图关联的融合对象id)
	E-->G(保存融合对象与实体对象属性关系)
	G-->H(保存对象过滤配置)
	H-->I(保存对象行为模型维度值过滤配置)
	I-->ED(结束)
	F-->C2(与传入对象对比)
	C2--新增的关联对象-->O2(创建默认分组,保存融合对象与实体对象属性关系)
	C2--被移除的历史关联对象-->O3(删除与视图关联的对象的分组)
	O2-->C3(视图与对象是否存在失效标签)
	C3--Yes-->O4(将标签重置为有效)-->H
	C3--No-->H
	O3-->O5(删除融合对象与实体对象属性关系)-->O6(将当前视图下对象的标签置为有效)-->H
```

```mermaid
gitGraph
commit
commit
branch develop
checkout develop
commit
commit
checkout main
merge develop
commit
commit
```

```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```

```mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
```

```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：遗憾就像青春痘，痘没了，印还在。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=abc4ceba-c01b-4bf4-a6f2-e787ef721ea2)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：什么叫不自量力？不要自学量子力学。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=918c35f4-c061-49ad-99e3-d991657e3331)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：如果我是一只蝴蝶，我会有一个美丽的名字，—沃斯尼蝶。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=673c5230-a56d-40ff-849e-c64ce615836d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：愚人节都没人表白，那就真的没有了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=edb52873-c524-47c4-ae1a-4aa42bcb6770)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：年轻的时候一定要敢于做梦，毕竟年龄一大，就很容易睡不着。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=fedd5a8c-61f5-40e8-85a7-7acb2283e92a)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：长得帅的踢键子都帅，长得丑的，打高尔夫都像在铲屎。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=c874ba4f-58e4-4f6e-a325-9b84473da273)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：放假给我放傻了，开学之后要怎么才能，融入那个高智商的环境？
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=47db9a0d-bafe-45e5-bc10-4f04db3902ca)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：真正的吃货，是可以把月供看成月饼的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=d182a6db-f8c3-413d-a613-c6640ead95fa)
