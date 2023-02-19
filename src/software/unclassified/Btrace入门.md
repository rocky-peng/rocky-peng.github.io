---
title: BTrace入门
date: 2016-11-23
---

概念性的东西自行网上查阅吧。

## 安装

现在btrace项目已经迁移到了github上了。这点可以从官网（ https://kenai.com/projects/btrace/downloads/directory/releases/latest ）上看出。

点开这个链接就会跳转到btrace项目的github地址：https://github.com/btraceio/btrace 

下面直接给出下载地址：https://github.com/btraceio/btrace/releases 
我这里下载的版本是 https://github.com/btraceio/btrace/releases/download/v1.3.8.1/btrace-bin-1.3.8.1.tgz


下面的安装步骤主要就是设置环境变量，其实也可以不设置。这里设置下只是为方便执行命令而已。另外各种操作系统设置环境变量的方法也有所不同，我这里是采用的 mac 系统，采用的终端软件我也改变了一下，所以需要各自根据自己的实际情况进行设置。

下载完成后，执行：
```shell
mkdir btrace
tar -zxvf btrace-bin-1.3.8.1.tgz -C btrace
```

假设btrace路径为 : /Applications/btrace
下面只需要设置 BTRACE_HOME 和 PATH 两个环境变量即可。

注意我这里修改的文件是~/.zshrc文件。这个要看各自使用的操作系统以及所使用的terminal客户端而定。具体是哪个文件请各自查阅相关资料。
```shell
vim ~/.zshrc 
```
拉到文件末尾，添加以下代码：（建议不要去修改已有的配置，只需要在末尾追加即可）

```shell
export BTRACE_HOME="/Applications/btrace"
export PATH=$BTRACE_HOME/bin:$PATH
```
保存文件，执行：

```shell
source ~/.zshrc
```

## 基本用法
```shell
btrace pid btrace脚本
```

## 编写测试类
```java
package com.btrace;

import java.util.Random;
import java.util.UUID;

public class RemoteClass {

    public String f1(String a, int b) {
        System.out.println(a + " " + b);
        return a;
    }

    public static void main(String[] args) {
        RemoteClass rc = new RemoteClass();
        while (true) {
            rc.f1(UUID.randomUUID().toString(), new Random().nextInt());
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {

            }
        }
    }
}

然后启动main方法，并找到pid
jps -ml

我这里的pid 为：13705
```

## 编写btrace脚本
- 我这里的脚本保存路径为：/Users/xxx/Desktop/btrace_script
```shell
cd /Users/xxx/Desktop/btrace_script
```
### Btrace初体验

- 功能: 每次执行完f1后，打印 “Hello BTrace”

    ```java
    import com.sun.btrace.annotations.*;
    import static com.sun.btrace.BTraceUtils.*;
    import java.lang.reflect.Field;
    
    @BTrace public class HelloBtrace {
    
      @OnMethod(
        clazz="com.btrace.RemoteClass",
        method="f1"
      ) 
      public static void onF1() {
        println("Hello BTrace");
      }
    }
    ```
    
    保存为：HelloBtrace.java
    
- 执行脚本:
    ```shell
    btrace 13705 HelloBtrace.java
    ```
    ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079756419.png)
    
    
### 获取方法参数
- 功能：得到参数
- 注意：参数的定义，顺序，个数保持一致。（个数我这边测试是必须保持相同的，至于类型，顺序是否必须保持一致就没有测试了）

    ```java
    
    import com.sun.btrace.annotations.*;
    import static com.sun.btrace.BTraceUtils.*;
    import java.lang.reflect.Field;
    
    @BTrace public class HelloBtrace {
    
      @OnMethod(
        clazz="com.btrace.RemoteClass",
        method="f1"
      ) 
      public static void onF1(String a,int b) {
      	println(str(a));
      	println(str(b));
        println("");
      }
    }

    ```
- 执行脚本:
    ```shell
    btrace 13705 HelloBtrace.java
    ```
    ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079952150.png)
    
### 获取方法返回值
- 功能：获取方法的返回值
    ```java
    import com.sun.btrace.annotations.*;
    import static com.sun.btrace.BTraceUtils.*;
    import java.lang.reflect.Field;
    
    @BTrace public class HelloBtrace {
    
      @OnMethod(
        clazz="com.btrace.RemoteClass",
        method="f1",
        location=@Location(Kind.RETURN)
      ) 
      public static void onF1(String a,int b,@Return String result) {
      	println(str(a));
      	println(str(b));
      	println(str(result));
        println("");
      }
    }

    ```
- 执行脚本:
    ```shell
    btrace 13705 HelloBtrace.java
    ```

	![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079959880.png)

### 更多功能
- 参考1：https://kenai.com/projects/btrace/pages/UserGuide
- 参考2：btrace的安装目录下有个 samples 文件夹，里面有各种示例

## 总结
对Btrace的用法主要就是学习用提供的各种注解，以及com.sun.btrace.BTraceUtils类提供的各种功能。

如果想要了解各个注解的文档，可以参考：https://btrace.kenai.com/javadoc/1.2/com/sun/btrace/annotations/package-summary.html
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：每个人都有幸福的权力，却只有少数人，有幸福的能力。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=0af618d1-457a-4a27-b54f-ff0350bcc0dd)
