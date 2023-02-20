---
title: MySQL索引
date: 2018-11-05
--- 

## InnoDB索引
InnoDB支持的索引
- 分类方式1：
    1. B+树索引
        - B 不是指binary，而是balance。
        - 由平衡二叉树演变而来，是目前关系型数据库中查找最为常用和有效的索引
        - InnoDB中，通过某个键值找到value不是具体的数据行，而是数据行所在的页，然后读取页到内存，再在内存中进行查找，最终找到要查找的数据。

    2. 全文索引
    3. 哈希索引
       InnoDB支持的哈希索引是自适应的，InnoDB存储引擎会根据表的使用情况自动为表生成哈希索引，不能人为干预是否在一张表中生成哈希索引。

- 分类方式2：
    1. 聚集索引

    2. 辅助索引

- 分类方式3：
    1. 主键索引

    2. 唯一索引
    3. 覆盖索引
    4. 联合索引 == 复合索引

### B+树索引
前面提到过，页是MySQL进行IO操作的最小单位(表段区页，每页16kb，每次申请4-5个区，每个区1m)

页的存储结构如下：
![页结构示意图](https://cdn.justdopay.com/xiaoshujiang/1629079649483.png)

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079639650.png)

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079658873.png)

- **各个数据页**组成一个**双向链表**

- 每个**数据页中的记录**又可以组成一个**单向链表**

- 每个数据页都会为存储在它里边儿的记录生成一个**页目录**，在通过主键查找某条记录的时候可以在页目录中使用二分法快速定位到对应的槽，然后再遍历该槽对应分组中的记录即可快速找到指定的记录

- 以**非索引列**作为搜索条件：依次遍历单链表中的每条记录

### [B树和B+树的区别](https://www.cnblogs.com/xueqiuqiu/articles/8779029.html)

- B数
    - 关键字集合分布在整颗树中；

    - 任何一个关键字出现且只出现在一个结点中；
    - 搜索有可能在非叶子结点结束；
    - 不支持范围查找

  ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079002404.png)
- b+树相比于b树的查询优势：

    - b+树的中间节点不保存数据，所以磁盘页能容纳更多节点元素，更“矮胖”；

    - b+树查询必须查找到叶子节点，b树只要匹配到即可不用管元素位置，因此b+树查找更稳定（并不慢）；
    - 对于范围查找来说，b+树只需遍历叶子节点链表即可，b树却需要重复地中序遍历，如下两图：

  ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079028387.png)


- [B数和B+数的区别](https://www.cnblogs.com/xueqiuqiu/articles/8779029.html)

    - B数
        -  关键字集合分布在整颗树中；

        - 任何一个关键字出现且只出现在一个结点中；
        - 搜索有可能在非叶子结点结束；

      ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079002404.png)
    - b+树相比于b树的查询优势：

        - b+树的中间节点不保存数据，所以磁盘页能容纳更多节点元素，更“矮胖”；

        - b+树查询必须查找到叶子节点，b树只要匹配到即可不用管元素位置，因此b+树查找更稳定（并不慢）；
        - 对于范围查找来说，b+树只需遍历叶子节点链表即可，b树却需要重复地中序遍历，如下两图：
          ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079028387.png)



#### 索引如何提高检索速度
有了上面的基础，我们来看看要找到id为8的记录简要步骤：

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079665718.png)

很明显，如果不使用索引就得遍历所有的数据知道找到目标数据。
关于MySQL中B+树索引更详细的资料参见：[MySql中的B+树索引](https://mp.weixin.qq.com/s?__biz=MzIxNTQ3NDMzMw==&mid=2247483701&idx=1&sn=bd229dd584f51ef4fe545d44ad8cdbf9&chksm=979688c7a0e101d1b5c752094013b78f5bd50ab905257ba82149d85d35ea07aba1a15b0e52b4&mpshare=1&scene=1&srcid=0409Tn66UYWSWvqEVlOpwGtR&key=6cd553e86912686a47d76f2d900b1b5b388c90b29708f016db3a6e1bcebe032220ba63626095c4298f32cda7d0d7bd11bded2365f05c32e522584dd149b98db0bb8549ef144cdca694665d31d35cfeef&ascene=0&uin=MzAzMjU4NDM3Nw%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.4+build(16E195)&version=12020810&nettype=WIFI&lang=zh_CN&fontScale=100&pass_ticket=YHEmqDDX8hHkj5FiSVpQvjYqIMBDHHDS2po4mfJe%2BqIXlqwJI%2Bg7aJUZq0%2BDwGJ0)

#### 索引如何降低增删改的速度
索引采用的结构是B+树，而我们知道B+树是**平衡树**的一种，对数据库执行增删改操作的时候，是会破坏平衡树的特点的，如果不采取额外的操作，B+树就可能退化成**链表**。**因此在执行增删改操作的时候，必须采取额外的操作来维护B+树的特点，而这些额外的开销就降低了增删改的速度**


- 平衡树
  它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

- B+树的具体算法参见：[https://www.cnblogs.com/wade-luffy/p/6292784.html](https://www.cnblogs.com/wade-luffy/p/6292784.html)

### Hash索引
主流的还是使用B+树索引比较多，对于哈希索引，InnoDB是自适应哈希索引的（hash索引的创建由InnoDB存储引擎引擎自动优化创建，人工干预不了）！

### 聚集和非聚集索引
聚集索引：以主键创建的索引
非聚集索引：以非主键创建的索引

一张Innodb引擎的表只能创建一个聚集索引（如果创建表的时候没有指定主键列，InnoDB会自动为每行数据生成一个6字节的rowid，并以此作为主键）

**区别：**
1. 聚集索引在叶子节点存储的是表中的数据
2. 非聚集索引在叶子节点存储的是主键和索引列，所以使用非聚集索引一般还需要做**回表**操作
3. 聚集索引一张表只能创建一个，而非聚集所以一张表可以创建多个

回表：使用非聚集索引查询出数据时，拿到叶子上的主键再去查到想要查找的数据，拿到主键再查找这个过程叫做回表。


非聚集索引 == 二级索引 == 辅助索引

### 面试题
1. 使用索引为什么可以加快数据库的检索速度啊？
2. 为什么说索引会降低插入、删除、修改等维护任务的速度。
3. 索引的最左匹配原则指的是什么？
4. Hash索引和B+树索引有什么区别？主流的使用哪一个比较多？InnoDB存储都支持吗？
    - 哈希索引没办法利用索引完成排序
    - 不支持最左匹配原则

    - 在有大量重复键值情况下，哈希索引的效率也是极低的---->哈希碰撞问题。
    - 不支持范围查询
5. 聚集索引和非聚集索引有什么区别？
    1. 聚集索引在叶子节点存储的是表中的数据

    2. 非聚集索引在叶子节点存储的是主键和索引列，所以使用非聚集索引一般还需要做**回表**操作
    3. 聚集索引一张表只能创建一个，而非聚集所以一张表可以创建多个


以上内容部分摘录自：https://juejin.im/post/5b55b842f265da0f9e589e79



<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：掐指一算，你俩要散。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=599764f4-ae76-45f4-90b9-8db007843385)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：外貌不重要，爱情看的是感觉，可是人家对丑的没感觉。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=29117b7c-9fac-4f19-859d-84044e4a3f14)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：跟你在一起，苦一点我也愿意，苦很多就算了吧。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=bc665ee4-639f-4f13-a3ed-f4e7a5597ff8)
