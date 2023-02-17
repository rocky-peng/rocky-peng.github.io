---
title: Git笔记
date: 2015-07-05
---

#  Git

1. 在github上fork别人的项目后，如何进行同步？
    1. 检查是否配置目标远程仓库地址
    
        ```
        git remote -v
        ```
        如果只显示了自己的远程仓库地址，则需要执行第二步
    
    2. 添加远程仓库地址
    
        ```
        git remote add upstream 目标远程仓库地址（就是原项目地址）
        ```
        upstream 可以自定义，比如也可以写base
        
    3. 拉取原项目远程仓库的提交
        ```
        git fetch upstream
        ```
    
    4. 执行merge动作,将远程提交合并到本地仓库
        ```
        git merge upstream/master
        ```
        如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。
    
    5. 根据自己情况决定是否提交到自己的远程仓库
    
    > https://segmentfault.com/q/1010000002590371
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：小时候总以为大人不挑食，长大后才明白，他们不吃的东西都不买。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=f6307b4d-124d-43c9-b559-28a89b6ccbfe)
