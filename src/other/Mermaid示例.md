---
title: Mermaid示例
date: 2023-01-04
---

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
graph TD;
    A(视图创建) --发起--> B(参加校验,基本信息填充) --> C(id是否为空)
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

[https://www.notion.so](https://www.notion.so)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |

[rocky-peng.github.io/JDK命令行工具.md at main · rocky-peng/rocky-peng.github.io](https://github.com/rocky-peng/rocky-peng.github.io/blob/main/src/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.md)

```mermaid
graph TD
  Mermaid --> Diagramd
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：开车我最讨厌两种人，一种是喜欢加塞的人，另一种是不让我加塞的人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=30a4785f-1d46-467f-a1a4-68559de3ff1d)
