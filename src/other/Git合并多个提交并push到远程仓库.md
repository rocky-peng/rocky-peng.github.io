---
title: Git合并多个提交并push到远程仓库
date: 2023-03-01
category:
- Git
tag:
- git
- rebase
- 合并多个提交
---

先看看现在的本地仓库和远程仓库情况：上图为本地仓库，下图为远程仓库

![Untitled](https://cdn.justdopay.com/notion2/md5-f9060536e094b18a62218a8d0d4f0c94.png)

![Untitled](https://cdn.justdopay.com/notion2/md5-cbf5e6b07ee1551e5025180f7043f46f.png)

**现在的需求是，需要把C、D、E三个提交合并为一个提交**

## 方法一：idea 交互界面完成

1. 选中C，右键，点击“interactively rebase from here”

![Untitled](https://cdn.justdopay.com/notion2/md5-597a68bf8ac98aabbe2e490b03106611.png)

1. 选中C、D、E（你想要合并的提交），然后点击Squash，点击后会让你输入新的提交信息，如图：

![Untitled](https://cdn.justdopay.com/notion2/md5-032f33d7fc848e4aa2a2f7d17d261855.png)

![Untitled](https://cdn.justdopay.com/notion2/md5-8177691b185787f9978679011a81a949.png)

![Untitled](https://cdn.justdopay.com/notion2/md5-038fbd2452cb33c39bc01d24a199a832.png)

1. 点击Start Rebasing。完成后可以在本地看到提交记录已经合并，如图：

![Untitled](https://cdn.justdopay.com/notion2/md5-861da70d2bff8bc6db4caa509c813675.png)

1. push到远程仓库，注意需要点击force push

![Untitled](https://cdn.justdopay.com/notion2/md5-847cc507ddbe3005d2a937340b903bd4.png)

1. 操作完成，查看远程仓库的提交，如下图：

![Untitled](https://cdn.justdopay.com/notion2/md5-83ba53599905eeb2f5b952c85003f073.png)

## 方法二：git命令完成

1. 执行 git rebase -i 7d78433312cd651fe811c4c0bb02230203c91b28

-i 后面就是 C 前一个提交的版本号（C这个提交的版本号应该也行，没试过），执行后出现下图的界面，也就是vi编辑界面

```bash
# -i 后面就是 C 前一个提交的版本号，本文例子里就是B这个提交的版本号
git rebase -i dede351fabfaeb41520f59dddf44e632977f39a2
```

![Untitled](https://cdn.justdopay.com/notion2/md5-c62636074ba34efe80fc156c0175c7ab.png)

1. 把 D 和 E 两个提交前面的 pick 更改为 squash，然后输入wq保存，进入编辑提交信息的界面，如下图：（至于squash的含义，在注释中有说明）

![Untitled](https://cdn.justdopay.com/notion2/md5-47abe3455fb152654d35fb5348f5f918.png)

![Untitled](https://cdn.justdopay.com/notion2/md5-747882ae1fff4d7fde09b50d2fd6d6d0.png)

1. 编辑新的提交信息，然后输入wq保存，比如：

![Untitled](https://cdn.justdopay.com/notion2/md5-6680560b2a5755021e8bbc97095e7b16.png)

1. 保存后，本地的提交记录已经合并完成，如图：

![Untitled](https://cdn.justdopay.com/notion2/md5-53154bb64b09c3815391b007b9a94df1.png)

1. push到远程仓库，注意需要**强推**

```bash
git push --force
```

1. 查看远程仓库提交

![Untitled](https://cdn.justdopay.com/notion2/md5-2dbf01966804dc519dfebff958aa863e.png)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：不要遇到困难，就认为自己不适合做这个，很可能是你干啥都不行。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=147d7d06-bd1b-4068-80f1-2e33a32aab9a)
