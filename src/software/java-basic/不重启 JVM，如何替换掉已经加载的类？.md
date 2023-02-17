---
title: 不重启 JVM，如何替换掉已经加载的类？
date: 2017-03-08
---

### 场景
在遥远的希艾斯星球爪哇国塞沃城中，两名年轻的程序员正在为一件事情苦恼，程序出问题了，一时看不出问题出在哪里，于是有了以下对话：

“Debug一下吧。”

“线上机器，没开Debug端口。”

“看日志，看看请求值和返回值分别是什么？”

“那段代码没打印日志。”

“改代码，加日志，重新发布一次。”

“怀疑是线程池的问题，重启会破坏现场。”

长达几十秒的沉默之后：“据说，排查问题的最高境界，就是只通过Review代码来发现问题。”

比几十秒长几十倍的沉默之后：“我轮询了那段代码一十七遍之后，终于得出一个结论。”

“结论是？”

“我还没到达只通过Review代码就能发现问题的至高境界。”

### 方案
- BTrace
  
- 阿里的Arthas
 
- 其他楼主未知的工具

上面的Btrace在阿里的Arthas出来前是比较流行的，但个人认为使用起来还是繁琐的。具体使用的入门教程参见：[BTrace入门](https://blog.csdn.net/wilsonpeng3/article/details/52576253)

在Arthas出来后，个人建议使用这个，这个相比Btrace使用起来要简单多了，而且内置了一些功能，具体的使用教程参见官网：[Arthas官方教程](https://arthas.aliyun.com/doc/)

### 本文

透过现象看本质，其实无论是Btrace还是Arthas，他们的底层实现原理脱离不了jvm自带的两个api:
1. Instrumentation API
2. Attach API

本文就是用这两个api来具体实践一下

本文所用到的完整代码已上传到码云： [instrument](https://gitee.com/rocky-peng/java_practice_public/tree/main/instrument)

#### 模拟业务代码

```java
public class BusinessClass {

    public void businessMethod() {
        System.out.println("businessMethod code: " + new Date());
    }


    public static void main(String[] args) {
        for (int i = 0; i < 10000; i++) {
            new BusinessClass().businessMethod();
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {

            }
        }
    }
}
```

上面的代码打成一个可执行jar包，然后执行 java -jar 跑起来	，假设跑起来后的pid是22820，记下来就行后续会用。

#### Agent代码
```java
public class InstrumentAgent {
    public static void agentmain(String agentArgs, Instrumentation inst) {
        try {
            System.out.println("Agent Main Start");

            //创建一个ClassFileTransformer对象，在这个对象的transform方法中完成真正的字节码替换
            BusinessTransformer businessTransformer = new BusinessTransformer();
            inst.addTransformer(businessTransformer, true);

            //触发BusinessClass的二进制更新，执行该代码后会执行ClassFileTransformer对象的transform方法

            inst.retransformClasses(Class.forName("com.rocky.practice.instrument.BusinessClass"));


            //移除（如果不移除，多次执行attach,那么transform方法会执行多次，没有意义）
            inst.removeTransformer(businessTransformer);
            System.out.println("Agent Main End: " + Thread.currentThread().getName());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

上面的类需要依赖jdk lib目录下的tools.jar，所以在maven中需要添加如下依赖：
```xml
<dependency>
	<groupId>com.sun</groupId>
	<artifactId>tools</artifactId>
	<version>1.5.0</version>
	<scope>system</scope>
	<systemPath>${env.JAVA_HOME}/lib/tools.jar</systemPath>
</dependency>
```

#### ClassFileTransformer代码
```java
public class BusinessTransformer implements ClassFileTransformer {
    @Override
    public byte[] transform(ClassLoader loader, String className, Class<?> classBeingRedefined, ProtectionDomain protectionDomain, byte[] classfileBuffer) throws IllegalClassFormatException {
        
		System.out.println("start transform: " + className + " " + Thread.currentThread().getName());

        //这里只重新定义BusinessClass类，采用了javassist框架来完成类的重定义，也可采用其他二进制框架，比如ASM
        if (className.equalsIgnoreCase("com/rocky/practice/instrument/BusinessClass")) {

            try {
                ClassPool classPool = ClassPool.getDefault();

                try {
                    CtClass ctClass = classPool.get(className.replaceAll("/", "."));
                    CtMethod ctMethod = ctClass.getDeclaredMethod("businessMethod");
                    if (!ctMethod.isEmpty()) {
                        ctMethod.setBody("" +
                                "{" +
                                "System.out.println(\"instrument api success\");" +
                                "}");
                    }
                    return ctClass.toBytecode();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }

        return classfileBuffer;
    }
}
```
这段代码完成的功能：重写BusinessClass中businessMethod的方法体，并生成类的二进制，功能实现需要依赖javassist框架，所以maven中添加依赖：
```xml
<dependency>
	<groupId>javassist</groupId>
	<artifactId>javassist</artifactId>
	<version>3.12.1.GA</version>
</dependency>
```

上面的两个类打包成另外一个jar包，比如叫agent.jar。  打这个jar包的时候需要注意下，需要自定义manifest.mf：
```
Manifest-Version: 1.0
Agent-Class: com.rocky.practice.instrument.InstrumentAgent
Can-Retransform-Classes: true

```

这里我打jar包的时候，折腾了一下，最终通过maven的插件轻松解决指定manifest.mf的问题
```xml
<plugin>
	<artifactId>maven-assembly-plugin</artifactId>
	<configuration>
		<descriptorRefs>
			<descriptorRef>jar-with-dependencies</descriptorRef>
		</descriptorRefs>
		<archive>
		
			<!--在这里指定manifest.mf的路径-->
			<manifestFile>
				src/main/resources/META-INF/MANIFEST.MF
			</manifestFile>
			
			<manifest>
				<addClasspath>true</addClasspath>
				<classpathPrefix>lib/</classpathPrefix>
			</manifest>
		</archive>
	</configuration>
	<executions>
		<execution>
			<id>make-assembly</id>
			<phase>package</phase>
			<goals>
				<goal>single</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

#### Attach API
```java
public class AttachMain {
    public static void main(String[] args) {
        try {
            VirtualMachine attach = VirtualMachine.attach("9044");
            attach.loadAgent("D:\\IdeaProjects\\java_practice_public\\instrument\\instrument_project\\target\\instrument_project-1.0-SNAPSHOT-jar-with-dependencies.jar");
            Thread.sleep(1000000);
            attach.detach();
            System.out.println("detached");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
这个代码中的9044修改为上面得到的pid，下面那行代码的jar包路径改为刚生成的agent.jar的路径，然后执行。顺利的话，这个main执行后，跑bussinessclass代码的进程讲会打印出类似下面的语句：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1628764982862.png)

## 总结：
通过attach api能连上目标pid进程，然后会执行agent.jar里的premain方法，在这个方法里就可以通过Instrumentation实例对象触发对某个类的替换


用过arthas的同学，其中有个重新定义类的功能，相信通过本文也能了解其实现原理了。

多一嘴：idea的破解之前有个破解的agent，是不是也是同样的原理呢?

本文所用到的完整代码已上传到码云： [instrument](https://gitee.com/rocky-peng/java_practice_public/tree/main/instrument)

至此，本文也就实现了标题所实现的功能，开头描述的场景也就得到解决方案，下期再见
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：事事如意料之外，年年有余额不足。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=0d68f2dd-3bb0-493c-8659-0e9ef8da6d35)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：可以回头看，但别往回走了，因为逆行是全责。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=6faa0529-7b3b-405c-b819-229837be89ad)
