---
title: index方法压力测试记录
date: 2016-10-12
---

## 相关参数

### JMeter参数的设置
    
    线程数：1000
    Ramp-up Period ：0  
    循环次数：2 
    
    也就是说立即启动1000个线程去执行2000个请求
    
### index接口参数的设置
    
    都是请求首页接口，所有 参数都一样，除了uid，uid进行参数化。
    总共提供了4100个不同的uid
    
    总的来说就是用1000个线程来模拟2000个不同的用户尽快的请求首页接口

![jmeter的截图](https://cdn.justdopay.com/xiaoshujiang/1629080158124.png)

## 代码修改（仅仅添加了耗时的统计）
![统计广场首页的耗时，也统计了推荐接口第一页数据的耗时](https://cdn.justdopay.com/xiaoshujiang/1629080164719.png)

![这个方法是所有接口返回数据时都要执行的，整个方法的耗时反应了jetty把数据发送给客户端的时间，是已经准备好数据，仅仅是发送给客户端的时间](https://cdn.justdopay.com/xiaoshujiang/1629080172145.png)

## 测试

### 通过nginx转发的测试
1. 准备工作
    ```shell
    /data/jetty-web/bin/jetty.sh restart
    echo "" > /data/jetty-web/logs/2016_10_29.stderrout.log
    tail -f /data/jetty-web/logs/2016_10_29.stderrout.log > /data/have_nginx_jetty.txt
    echo "" > /data/nginx/access.log
    tail -f /data/nginx/access.log > /data/have_nginx_access.txt
    ```
2. 启动JMeter
3. 结果

![jmeter显示有2000*0.3045=609个请求异常，1391个请求成功](https://cdn.justdopay.com/xiaoshujiang/1629080179712.png)

![jmeter显示的响应时间，最长的大约有53s的样子](https://cdn.justdopay.com/xiaoshujiang/1629080184677.png)

![jetty日志，成功处理的那些请求，把数据发送给客户端最长用了49ms的样子](https://cdn.justdopay.com/xiaoshujiang/1629080192010.png)

![jetty日志，成功处理的那些请求，最长花了4.1秒准备数据](https://cdn.justdopay.com/xiaoshujiang/1629081393416.png)

    jetty日志没有异常，显示我们的程序共成功处理了1998个请求，成功吧数据发送给客户端的请求有1998个请求。也就是说可以说jetty几乎成功处理了全部请求。
    
    那为什么客户端却只显示只有1390个请求处理成功了呢？
    
    再来看看nginx的访问日志
  
![nginx日志，一共了1998条日志信息，这和jetty日志的记录数完全吻合。nginx处理整个请求最长花了63.5秒时间](https://cdn.justdopay.com/xiaoshujiang/1629081402647.png)
    
    那么为什么nginx会和客户端交互这么长时间? 其实也不是nginx的问题。jetty成功请求到发送数据，看截图可以看到两个最长时间加起来也不到4.1秒，算它5秒了，减去这5s,nginx与客户端的交互时间最长的到了了47秒。
    
    问题在于客户端，下面的测试进一步验证

### 绕过nginx转发的测试
1. 准备工作
    ```shell
    /data/jetty-web/bin/jetty.sh restart
    echo "" > /data/jetty-web/logs/2016_10_29.stderrout.log
    tail -f /data/jetty-web/logs/2016_10_29.stderrout.log > /data/no_nginx_jetty.txt
    ```
2. 启动JMeter
3. 结果

![jmeter显示有2000*0.619=1238个请求异常，762个请求成功](https://cdn.justdopay.com/xiaoshujiang/1629081422103.png)


![jmeter显示的响应时间，最长的大约有27s的样子](https://cdn.justdopay.com/xiaoshujiang/1629081426713.png)

![jetty日志，成功处理的那些请求，把数据发送给客户端最长用了近28秒的样子。注意这是请求已经成功处理，是把数据发送给客户端的时间，或者说是客户端读取结果的时间，这个时间和jmeter显示的最长响应时间是吻合的](https://cdn.justdopay.com/xiaoshujiang/1629081439446.png)

![jetty日志，成功处理的那些请求，最长花了2.2秒准备数据](https://cdn.justdopay.com/xiaoshujiang/1629081435325.png)

![jetty异常信息，可以看到完全和我们的程序没有关系，注意红色框](https://cdn.justdopay.com/xiaoshujiang/1629081445130.png)

 从jetty日志中可以看到，我们的程序总共成功处理了1005个请求，成功把数据发送给客户端的请求有810个。
 
 那么客户端显示的成功请求个数应该是小于等于这个数据了，可以看到客户端显示的成功请求个数是762。
 
 那为什么要少于810，只能说不确定因素比如网络，反正不是810-762的这些请求没有成功，肯定不是服务端的问题了。
 
 我们的程序共成功处理了1005个请求，jmeter显示只有762个请求成功，那么1005-762个，大约240个请求发生什么事了呢？：就是数据没有成功发送给客户端，没有成功的原因就是客户端没能及时读取数据，导致超时，然后超时导致了刚才看到的jetty异常信息。
 
 jetty共处理了1005个请求，那其他的955个请求根本没有处理，这是什么原因造成的？
 这个原因不能确定，也许是之前的异常引发的连锁反应，也有可能是其他什么原因，反正可以确定，那就是不是我们程序的问题了。


jetty异常的解释：

![jetty的github官方项目代码贡献者的回答](https://cdn.justdopay.com/xiaoshujiang/1629081453216.png)


## 结论

对广场首页的压测结果不理想的原因基本可以可以排除服务端的问题。当然也并不能证明服务端程序能够承受住很大的并发。
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：分手后还能做朋友，一定是其中一方不死心，或者钱没还清。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=aa09c0bf-7a30-472f-8958-cd4b8f969d65)
