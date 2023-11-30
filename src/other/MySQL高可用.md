---
title: MySQL高可用
date: 2023-02-20
category:
- MySQL
- 高可用
tag:
- mysql
- MGR
- MHA
- MMM
- 半同步复制
---

## 单节点

- 优点
    1. 结构简单，使用方便
- 缺点
    1. 存在单点故障问题
    2. 存在读写性能问题
    3. 大数据量情况存在性能问题

## 主从架构

1. 一主多从（主从架构）
2. 多主多从（主从架构）

无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题

- 优点
    1. 一定程度上可以分散读写压力问题
- 缺点
    1. 仍然不能解决海量数据存储问题
    2. 可能存在主从数据不一致问题（比如采用异步复制方案）
    3. 可能存在数据丢失问题

### 主从复制方案

1. **异步复制**
    1. 存在数据延迟问题
    2. 主从数据可能丢失，导致数据不一致
    
    ![Untitled](https://cdn.justdopay.com/notion2/md5-1efd3893046fbfdab9a1ceee17d792e1.png)
    
2. **半同步复制**
    1. 相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）
    2. 一定程度上解决了数据延迟问题
    3. 可以配合MHA实现mysql高可用
    
    ![Untitled](https://cdn.justdopay.com/notion2/md5-e47f94a245016c73ab5d9eae6575a174.png)
    
    扩展阅读：[https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html](https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html)
    
3. **组复制（MGR）**
    1. 组内节点采用paxos共识算法通信
    2. 节点间数据强一致性
    3. 有两种模式：单主模式、多主模式
    4. 是一种高可用方案
    5. 至少3个节点（paxos算法决定）
    
    ![Untitled](https://cdn.justdopay.com/notion2/md5-b5f529e88bddd2faf25caa5bf2274d69.png)
    
    扩展阅读：[https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html](https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html)
    
    扩展阅读：[https://zhuanlan.zhihu.com/p/567939774](https://zhuanlan.zhihu.com/p/567939774)
    

## 高可用架构

1. MMM （Google开发，社区不活跃，不再维护，基本不用了）
2. MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）
3. MGR （推荐mysql8.0及以上版本使用）
4. K8S+MGR 

扩展阅读：[MySQL 8.0.30，一个值得上车MGR的版本](https://zhuanlan.zhihu.com/p/567939774)

扩展阅读：[k8s安装MySQL MGR集群](https://www.jiagou.com/post/45-k8s-mysql-mgr/)

扩展阅读：[https://helm.sh/zh/](https://helm.sh/zh/)  （k8s应用市场）

扩展阅读：[RadonDB](https://xie.infoq.cn/article/ac136ed04796a3cab18db6686)

扩展阅读：[美团数据库高可用架构的演进与设想](https://tech.meituan.com/2017/06/29/database-availability-architecture.html)

## 数据分片+高可用

## 异地备份

## 异地多活

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：猪跟人本质的区别在于，猪永远是猪，人有的时候不是人。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=dongman&type=302&uuid=1b668275-f44c-4ea0-a3aa-a0bb52a3a16e)
