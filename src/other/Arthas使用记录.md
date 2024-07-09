---
date: 2023-02-10
title: Arthas使用记录
---

思考如下问题：

1. 现在有个接口在开发环境非常快，但线上环境就是慢（假设已经知道了就是代码问题，如何定位具体问题）
2. 我明明改了代码了，为啥子测试环境感觉没生效？ 运维又说更新了代码了，怎么如何确认
3. 排查问题的时候，想知道某个方法的入参、出参，但是代码里又买有打印相关日志，怎么搞？
4. 让运维修改了某个配置的值，但运维部署后，始终感觉有问题，感觉没有更改一样，又没有相关日志，怎么确认？

## vmtool

这个命令可以获取指定类的实例对象，拿到实例对象后还能执行实例方法等。通过help查看使用方法

![Untitled](https://cdn.justdopay.com/notion/md5-4112d9049c217b8cd9ee1dc3457a7f4d.png)

通过这个命令可以拿到指定类的实例，并执行实例的方法，查看字段值等。

### 调用方法时创建对象

```json
private Object getXXX(Long p1,List p2,Set p3);

可以像下面这样创建对象并调用
vmtool --action getInstances --className com.xxx.XXX --express 'instances[0].getXXX(1L,(#test1=new java.util.ArrayList(),#test1.add("test"),#test1),(#test=new java.util.HashSet(),#test.add(""),#test))'

如果执行vmtool提示类不存在，然后sc却能搜索到类，那么可以加上-c参数来指定类加载器。类加载器可以通过sc -d 类名来获得，例如：

vmtool --action getInstances -c 21b8d17c --className com.xxxxx.XXXXServiceClientImpl --express 'instances[0].getCustomerList((#test1=new com.xxxxx.XXXXCustomerListReq(),#test1.setCreatedAtStart(1717224477),#test1.setCreatedAtEnd(1719816477),#test1.setPageNo(1),#test1.setPageSize(100),#test1),"123456")'

vmtool 条件过滤
trace com.xxxx.XXXXServiceImpl getXXXXConfig  -n 5 --skipJDKMethod false '"20111984".equalsIgnoreCase(params[1])'

xxxxxx
```

## ognl

### 获取静态属性值

- 格式： ognl -x 2 ‘@类名@静态属性名’

```jsx
ognl -x 1 '@com.xxxx.SpringUtils@applicationContext'
```

很有可能出现下面的错误

![Untitled](https://cdn.justdopay.com/notion/md5-23d32f676a1fea41242ba0cdf36621a9.png)

就是提示找不到这个类。这个时候需要先找到加载这个类的classloader（sc -d 类名）

再执行下面的命令：

```jsx
ognl -x 1 -c '@com.xxxx.SpringUtils@applicationContext'
```

![Untitled](https://cdn.justdopay.com/notion/md5-b204ab9cd53ca1bc1265e4d2af50900f.png)

### 获取普通属性值

```jsx
ognl -x 3 '#springContext=@com.xxxxx.SpringUtils@applicationContext,#springContext.getBean("xxxxServiceImpl").schema'
```

### 调用静态方法

和静态属性很相似

```jsx
ognl -x 3 '@com.xxxx.SpringUtils@getBean("xxxxServiceImpl")'
```

### 调用实例方法

```jsx
ognl -x 3 '#springContext=@com.xxxx.SpringUtils@applicationContext,#springContext.getBean("xxxxServiceImpl")'
```

### ognl扩展阅读

[https://commons.apache.org/proper/commons-ognl/language-guide.html](https://commons.apache.org/proper/commons-ognl/language-guide.html)

## Watch

- 方法调用层级比较多，有问题需要排查，但又没有日志，需要查看某个中间结果的。比如想看calcCrons这个方法的返回是是什么

![Untitled](https://cdn.justdopay.com/notion/md5-256041297aa45aa490eb6b0db3b27917.png)

- 比如某个方法执行异常了，但是日志中没有打印堆栈信息，这个时候就能快速定位异常位置

## Trace

主要是查看某个方法内部各个节点的耗时情况

### 案例一

之前前端同事说下面的接口比较慢

`/xxxx/xxxx/xxxx/xxxx/list`

![Untitled](https://cdn.justdopay.com/notion/md5-275c78fc16854272237bb5132af5bb47.png)

### 案例二

之前遇到过`SecureRandom.getInstanceStrong()` 的next这个方法在windows和docker环境中都能正常响应，但在centos（没有采用docker）中就很慢，甚至超时。 

百度搜索：SecureRandom.getInstanceStrong()    就知道具体原因

## 常用命令

### 一键离线安装

```json
mkdir -p /tmp/arthas
wget https://arthas.aliyun.com/download/latest_version?mirror=aliyun -O /tmp/arthas/arthas.zip
unzip /tmp/arthas/arthas.zip -d /tmp/arthas/
java -jar /tmp/arthas/arthas-boot.jar
```

### 查看启用端口

```json
vmtool --action getInstances --className org.springframework.context.ConfigurableApplicationContext --express 'instances[0].getEnvironment().getProperty("server.port")'
```

### 查看数据库连接

```json
vmtool --action getInstances --className com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceWrapper --express 'instances[0].basicProperties'
```

### 查看contextPath

```json
vmtool --action getInstances --className org.springframework.context.ConfigurableApplicationContext --express 'instances[0].getEnvironment().getProperty("server.context-path")'
```

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：屎到淋头，还想搅便。
<br/><br/>
![](https://api.btstu.cn/sjbz/?m_lx=suiji&uuid=9345489a-7d09-496e-8e4d-ea6acb4c2843)
