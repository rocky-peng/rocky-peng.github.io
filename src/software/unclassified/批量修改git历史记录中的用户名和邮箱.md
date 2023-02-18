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
- **随机毒鸡汤**：她只是看了你一眼，你却在心里，演了场电影。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=bc2f6e49-467f-4f57-a4e2-ddbc4605663e)
