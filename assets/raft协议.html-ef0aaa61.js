import{_ as t,$ as s,a0 as o,a1 as e,a2 as l,a3 as a,a4 as n,a5 as c,w as d}from"./framework-b3a0f150.js";const u={},v=e("h2",{id:"raft动画解说",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raft动画解说","aria-hidden":"true"},"#"),l(" RAFT动画解说")],-1),m={href:"http://thesecretlivesofdata.com/raft/",target:"_blank",rel:"noopener noreferrer"},E=c(`<ol><li>是一种复制状态机，是一种能让分布式系统中各个节点达成共识的一套框架协议或者算法</li><li>主要有两个过程 <ul><li>leader选举过程</li><li>日志复制过程</li></ul></li><li>一个共三种角色，leader/follower/candidate</li><li>满足的是CAP中的CP，和zk一样，zk也是CP，也是在leader选举过程中不可用</li></ol><h2 id="leader选举过程" tabindex="-1"><a class="header-anchor" href="#leader选举过程" aria-hidden="true">#</a> leader选举过程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 最开始各个节点均已follower角色启动，并各自机出一个超时时间，这个超时时间称之为 election timeout. 一般在150ms-300ms之间
2. 如果节点超过这个时间未收到leader的心跳信息，则发起一轮leader的选举，并且自己的角色转换为candidate，假设a节点发起了一轮选举
3. a节点首先给自己投一票，然后向其他节点发起投票请求(vote request)，
4. 其他节点收到投票请求后，如果自己在这轮投票中尚未投票(注意是本轮，有个term变量来记录轮次)，则进行投票（谁要求投票，则投给谁）
5. 如果a节点收到过半节点的投票，则自己成为leader，并开始向其他节点发送日志和心跳

注意：第5点要过半的投票，是大于一半，不是大于等于，这个很关键，过半可以防止多个leader同时对外提供服务，但仍有可能出现多个leader，但只有一个leader可用

由于在leader的选举过程中，要求必须有过半节点的投票才能成为leader，所以在同一轮投票中最多产生一个leader，但并不一定能产生leader（后面会说到）
注意：这里说的是同一轮投票中，也就是说某个时刻可能会有两个leader，甚至更多leader，但他们不是同一轮选举产生
但只有一个leader才能完成客户端请求，这种情况一般发生在网络分区环境中，后面会说到

同一轮选举中不能产生leader的情况： 比如现在又4个节点A/B/C/D,A,B两个节点的election timeout一样，
两个节点同时发起了选举（他们的term是一样的，所以是同一轮选举），这个时候C/D两个节点分别同时收到两个 投票请求，分别来源于A/B两个节点，
那么有可能c投给了a,d投给了b，那么a/b两个节点收到的投票都是2(包括自己的一票)，都没有过半，所以这轮选举未产生leader. 
这种情况就是需要再次发起新一轮投票（一般可以再次随机自己的election timeout来达到目的）

某个时刻，集群中有两个或更多leader的情况： 比如此时有A/B/C/D/E五个节点，a是leader。 
此时发生了网络分区，A/B两个节点一个分区，C/D/E三个节点一个分区。这个时候发往leader A的请求，由于没有过半节点的日志复制成功， 
所以不能完成客户端的情况。同时C/D/E三个节点由于网络分区，无法收到A的心跳信息，
最终C/D/E三个节点会触发election timeout并选举产生一个leader，假设是C.(因为数量过半嘛)
那么此时这个集群就会有两个leader。但只有一个leader能完成客户端请求。 

如果某个时候，网络分区消除了，会发生什么事呢？
先看C/D/E三个节点，这三个节点有可能收到A节点的心跳或者日志复制信息，但会发现A节点已经不是最新的leader（应该是通过term判断）,
所以不会做出正确的响应，所以之前提交到a的请求 即使在网络分区消除后也不能成功。
再看A节点，当他收到C的心跳和日志复制信息，发现自己已经不是最新的leader了，于是把本地未提交的log进行回滚，并转换follower，同步leader C的日志
再看b节点，基本过程和a的相似，最终跟随C节点

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志复制过程" tabindex="-1"><a class="header-anchor" href="#日志复制过程" aria-hidden="true">#</a> 日志复制过程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 比如客户端发送一个 set 5的请求给leader，
2. leader收到请求后，先追加到自己的日志文件中（WAL，mysql的redo log也是WAL），此时日志处于uncommited状态
3. 然后通过心跳包把这个set 5传递给follower，
4. follower收到这个心跳后，也把日志追加到自己的日志文件中，并返回一个正常的响应给leader
5. 当leader收到过半节点的正常响应后，日志状态改为commited状态，同时执行set 5的动作，然后返回一个正确的响应给客户端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>WAL: 什么叫WAL，全称Write Ahead Log，也就是同一个事务的数据，日志的数据必须先于最终的数据落盘</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),A=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：也许岁月是最好的解药，你看我已经记不清，上周你是在哪天借我钱了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=52886b20-ab57-4ea2-9621-90acfc5788cd",alt:"",loading:"lazy"})])],-1);function B(_,p){const r=d("ExternalLinkIcon"),i=d("RouterLink");return s(),o("div",null,[v,e("p",null,[e("a",m,[l("http://thesecretlivesofdata.com/raft/"),a(r)])]),E,e("ul",null,[e("li",null,[a(i,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[l("Spring框架源码关键点")]),_:1})]),e("li",null,[a(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[l("随记")]),_:1})]),e("li",null,[a(i,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[l("提取Docker镜像中的文件")]),_:1})]),e("li",null,[a(i,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[a(i,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[l("高可用通用方案")]),_:1})]),e("li",null,[a(i,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[l("推荐几个适用小工具")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(i,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[l("Javassist整理")]),_:1})]),e("li",null,[a(i,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[l("SQL优化")]),_:1})]),e("li",null,[a(i,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[l("ESRally性能测试步骤")]),_:1})]),e("li",null,[a(i,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[l("Docker跨主机通信方案")]),_:1})])]),h,b,A,f])}const g=t(u,[["render",B],["__file","raft协议.html.vue"]]);export{g as default};
