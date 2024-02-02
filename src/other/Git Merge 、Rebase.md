# Git Merge 、Rebase

## **git merge a**

会找到两个分支的共同祖先、以及两个分支各自最新的提交，然后进行三方合并，并且在对合并中修改的内容形成一个新的commit

## **git rebase a**

也就是变基，即把当前分支的祖先更改为a分支最新的提交。此时a为**基分支**，当前分支为**待变基分支。**git会从两个分支的祖先开始提取待变基分支的提交，然后把当前分支指针指向基分支最新提交，然后应用刚才提取到的修改（即：以a为基底合并当前分支代码）

**rebase与merge的功能都是合并代码**

现在假设有两个分支：dev 和 dev-pqs （dev-pqs是模拟各个开发人员的开发分支）

dev-pqs基于dev分支拉出，然后进行了 A B两个提交

然后dev分支分支有个新的提交 M（比如是其他开发人员合并上去的），如下图

![Untitled](https://cdn.justdopay.com/notion/md5-7ee058faf958872e49825ee139b46a85.png)

## 把dev-pqs的代码合并到dev

### merge

1. 切换当前分支为dev-pqs
2. 执行git merge dev   （后续应该再切换到dev分支，然后把dev-pqs合并到dev，这个步骤就省略了，因为如果有冲突，冲突已经在1、2两个步骤解决掉了，也可以直接执行这两个步骤）

结果如下：

![Untitled](https://cdn.justdopay.com/notion/md5-5f76033e4a96ff5ebc4dd0889fafbe34.png)

### rebase

1. 切换当前分支为 dev-pqs
2. 执行 git rebase dev  （后续应该再切换到dev分支，然后把dev-pqs合并到dev，这个步骤就省略了，因为如果有冲突，冲突已经在1、2两个步骤解决掉了，也可以直接执行这两个步骤）

rebase前，dev-pqs分支的祖先是dev那个提交，rebase后，祖先就更改为dev的最新提交，也就是m那次提交。如下图：

![Untitled](https://cdn.justdopay.com/notion/md5-8b5ea2514439c08c59d915aeca8e72b0.png)

## 区别

1. merge操作通常会生成一个新的commit，已提交的commit的版本号不会发生编号
2. merge后分支的祖先信息不会丢失
3. merge操作后的结果能提现出时间线
4. rebase操作后分支祖先信息会丢失，如上图看不出dev-pqs的祖先
5. rebase同时会更改commit的版本号，比如上面的A、B两个提交的版本号就发生了变化。A: 11e75—>c78c         B: 68b0—>106d
6. rebase操作后并不是按照时间线排列（当然可以根据提交时间判断）

## merge还是rebase?

根据上面的区别，再根据公司、项目实际情况选择使用即可

## git pull

git pull 等效于 git fetch + git merge

git pull -r 等效于 git pull -rebase 又等效于 git fetch + git rebase

## idea的rebase操作

![Untitled](https://cdn.justdopay.com/notion/md5-cdd8d72339d573499dc776d5a970319d.png)

点击红框”rebase dev-pqs onto dev” 就相当于在执行  git rebase dev，一样的效果。  这个”onto”感觉很形象，有点体现出以dev为基底的感觉

## idea设置

![Untitled](https://cdn.justdopay.com/notion/md5-b558ba217c6076d0b70c8e922c37b5c7.png)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：恋爱时会觉得像吸毒一样，分手了又会像戒毒一样。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=bf6a78b9-afb9-49e4-9aaf-f2319ff1cff8)
