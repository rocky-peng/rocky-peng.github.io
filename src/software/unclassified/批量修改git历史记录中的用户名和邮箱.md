---
title: 批量修改git历史记录中的用户名和邮箱
date: 2023-01-06
---

其实就一个脚本就搞定

```shell
#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="原来的邮箱"
CORRECT_NAME="现在的名字"
CORRECT_EMAIL="现在的邮箱"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

在仓库目录下执行上面的脚本，如果执行异常，尝试先执行下下面的命令再试：
```shell
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch Rakefile' HEAD
```

如果提示下面的信息：
```
Cannot create a new backup.
A previous backup already exists in refs/original/
Force overwriting the backup with -f
```
可以执行下面的命令：
```shell
git update-ref -d refs/original/refs/heads/分支名
```

然后push到远程，在远程仓库查看是否修改成功
```shell
git push --force --tags origin 'refs/heads/*'
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：每天都在勤勤恳恳地，思考一个问题，怎样才能不劳而获？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=13bfa90d-9bf1-447d-89ab-76dd540410fa)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：解释这个东西，让我看起来像个罪人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=42cdd2ec-83c5-4bcf-8637-bb0f9b0c2497)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：希望你以后，有酒有肉有姑娘，姑娘丑的不像样。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=ce17fb25-c47b-4c83-8fdd-59f84b3c26f5)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：人不是慢慢变老的，而是一瞬间变老的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=c97de48d-6bc2-4011-84ea-151a9bc0fd89)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你哪是什么朴实节俭，会过日子的人，你只是单纯的穷而已。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=b2644433-ab99-4175-af56-26b21da91ade)
