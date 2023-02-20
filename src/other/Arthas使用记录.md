---
date: 2023-02-10
title: Arthas使用记录
---

## ONGL语言

完成的操作符如下表：

| Operator | getValue() Notes | setValue() Notes |
| --- | --- | --- |
| e1, e2Sequence operator | Both e1 and e2 are evaluated with the same source object, and the result of e2 is returned. | getValue is called on e1, and then setValue is called on e2. |
| e1 = e2Assignment operator | getValue is called on e2, and then setValue is called on e1 with the result of e2 as the target object. | Cannot be the top-level expression for setValue. |
| e1 ? e2 : e3Conditional operator | getValue is called on e1 and the result is interpreted as a boolean. getValue is then called on either e2 or e3, depending on whether the result of e1 was true or false respectively, and the result is returned. | getValue is called on e1, and then setValue is called on either e2 or e3. |
| e1 || e2, e1 or e2Logical or operator | getValue is called on e1 and the result is interpreted as a boolean. If true, that result is returned; if false, getValue is called on e2 and its value is returned. | getValue is called on e1; if false, setValue is called on e2. Note that e1 being true prevents any further setting from taking place. |
| e1 && e2, e1 and e2Logical and operator | getValue is called on e1 and the result is interpreted as a boolean. If false, that result is returned; if true, getValue is called on e2 and its value is returned. | getValue is called on e1; if true, setValue is called on e2. Note that e1 being false prevents any further setting from taking place. |
| e1 | e2, e1 bor e2Bitwise or operator | e1 and e2 are interpreted as integers and the result is an integer. | Cannot be the top-level expression passed to setValue. |
| e1 ^ e2, e1 xor e2Bitwise exclusive-or operator | e1 and e2 are interpreted as integers and the result is an integer. | Cannot be the top-level expression passed to setValue. |
| e1 & e2, e1 band e2Bitwise and operator | e1 and e2 are interpreted as integers and the result is an integer. | Cannot be the top-level expression passed to setValue. |
| e1 == e2, e1 eq e2Equality teste1 != e2, e1 neq e2Inequality test | Equality is tested for as follows. If either value is null, they are equal if and only if both are null. If they are the same object or the equals() method says they are equal, they are equal. If they are both Numbers, they are equal if their values as double-precision floating point numbers are equal. Otherwise, they are not equal. These rules make numbers compare equal more readily than they would normally, if just using the equals method. | Cannot be the top-level expression passed to setValue. |
| e1 < e2, e1 lt e2Less than comparisone1 <= e2, e1 lte e2Less than or equals comparisone1 > e2, e1 gt e2Greater than comparisone1 >= e2, e1 gte e2Greater than or equals comparisone1 in e2List membership comparisone1 not in e2List non-membership comparison | The ordering operators compare with compareTo() if their arguments are non-numeric and implement Comparable; otherwise, the arguments are interpreted as numbers and compared numerically. The in operator is not from Java; it tests for inclusion of e1 in e2, where e2 is interpreted as a collection. This test is not efficient: it iterates the collection. However, it uses the standard OGNL equality test. | Cannot be the top-level expression passed to setValue. |
| e1 << e2, e1 shl e2Bit shift lefte1 >> e2, e1 shr e2Bit shift righte1 >>> e2, e1 ushr e2Logical shift right | e1 and e2 are interpreted as integers and the result is an integer. | Cannot be the top-level expression passed to setValue. |
| e1 + e2Additione1 - e2Subtraction | The plus operator concatenates strings if its arguments are non-numeric; otherwise it interprets its arguments as numbers and adds them. The minus operator always works on numbers. | Cannot be the top-level expression passed to setValue. |
| e1* e2Multiplicatione1 / e2Divisione1 % e2Remainder | Multiplication, division, which interpret their arguments as numbers, and remainder, which interprets its arguments as integers. | Cannot be the top-level expression passed to setValue. |
| + eUnary plus- eUnary minus! e, not eLogical not~ eBitwise note instanceof classClass membership | Unary plus is a no-op, it simply returns the value of its argument. Unary minus interprets its argument as a number. Logical not interprets its argument as a boolean. Bitwise not interprets its argument as an integer. The class argument to instanceof is the fully qualified name of a Java class. | Cannot be the top-level expression passed to setValue. |
| e.method(args)Method calle.propertyPropertye1[ e2 ]Indexe1.{ e2 }Projectione1.{? e2 }Selectione1.(e2)Subexpression evaluatione1(e2)Expression evaluation | Generally speaking, navigation chains are evaluated by evaluating the first expression, then evaluating the second one with the result of the first as the source object. | Some of these forms can be passed as top-level expressions to setValue and others cannot. Only those chains that end in property references (e.property), indexes (e1[e2]), and subexpressions (e1.(e2)) can be; and expression evaluations can be as well. For the chains, getValue is called on the left-hand expression (e or e1), and then setValue is called on the rest with the result as the target object. |
| constantConstant( e )Parenthesized expressionmethod(args)Method callpropertyProperty reference[ e ]Index reference{ e, ... }List creation#variableContext variable reference@class@method(args)Static method reference@class@fieldStatic field referencenew class(args)Constructor callnew array-component-class[] { e, ... }Array creation#{ e1 : e2, ... }Map creation#@classname@{ e1 : e2, ... }Map creation with specific subclass:[ e ]Lambda expression definition | Basic expressions | Only property references (property), indexes ([e]), and variable references (#variable) can be passed as top-level expressions to setValue. For indexes, getValue is called on e, and then the result is used as the property "name" (which might be a String or any other kind of object) to set in the current target object. Variable and property references are set more directly. |

扩展阅读：[https://commons.apache.org/proper/commons-ognl/language-guide.html](https://commons.apache.org/proper/commons-ognl/language-guide.html)

## 查看变量名

通过上面的表格知道调用静态方法或者静态变量使用@操作符

首先要有SpringContextUtils类似的工具类，大概样子如下

![Untitled](https://cdn.justdopay.com/notion/md5-1353f7ebffcb700b767a4aa0df3ca1c8.png)

假设完整类名是：com.xxx.SpringUtils

### 方法一

```bash
ognl '@com.xxx.SpringUtils@applicationContext'
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：上天不会亏待痴情人，一般都往死里整。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=9d688ee1-ef9b-4408-9646-028db1c5c672)
