---
title: 提取Docker镜像中的文件
date: 2023-07-11
category:
- Docker
tag:
- Docker
---

我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。

那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？

方法其实很简单

## 将镜像转存为压缩文件

```jsx
docker save -o aaa.tar 镜像名

如：
docker save -o aaaa.tar harbor.xxxxxx.cn/xxxxx-dev/xxxxxxxx:ce191aff7
```

## 解压文件

解压后有类似下面的文件目录

![Untitled](https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png)

其中有一个文件：manifest.json，内容大体如下：

![Untitled](https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png)

layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，**并不绝对**）。

找到与最后一个对应的文件夹，继续解压里面的文件就行。（**如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可**）

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：海底捞的服务是真心好，上次我吃饭没带钱，还是服务员帮我报的警。
<br/><br/>
![](https://api.btstu.cn/sjbz/?m_lx=suiji&uuid=e866e923-9cf3-42d8-8108-85b295e33d5b)
