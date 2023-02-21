---
title: Oh My ZSH
date: 2018-05-03
---

## 安装
```shell
yum install git

yum install zsh

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

centos7修改主机名
vim /etc/hostname        重启

----

centos6修改主机名
vim /etc/sysconfig/network  
添加一行：
HOSTNAME=您的主机名


```

## 更改
```shell
cd ~/.oh-my-zsh/themes

echo $ZSH_THEME          //输出 : robbyrussell

cp robbyrussell.zsh-theme myrobbyrussell.zsh-theme

vim myrobbyrussell.zsh-theme

// 修改PROMPT的值为：
PROMPT='%{$fg[green]%}%m@%{$fg[magenta]%}%(?..%?%1v)%n:%{$reset_color%}%{$fg[cyan]%}%~# '

保存退出

修改~/.zshrc文件中ZSH_THEME的值myrobbyrussell
```


# 安装JDK
```shell
修改 ~/.zshrc文件，在末尾处添加：

export JAVA_8_HOME=/jdk1.8.0_181

alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
export JAVA_HOME=$JAVA_8_HOME
export CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib

export PATH=$JAVA_HOME/bin:$PATH

保存退出，执行：

source ~/.zshrc

```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：以前上学是拿钱混日子，现在工作了，是在拿日子混钱。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=7acfba2e-546b-4888-b208-d509ebb2e0de)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：马云成功跟长相没关系，姜尚成功跟年龄没关系，而成功跟你没关系。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=2b39f11b-f1b7-4fad-a31b-8ecb6d5f74db)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：和你已经陌生到，连是否要点赞，都要斟酌再三的地步了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=08b400df-4eed-48a3-af2e-9e32c7897dc0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：女生何必勾心斗角互相攀比，反正几十年后，都要一起跳广场舞的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=b284a65d-9bf9-4fe4-a5bc-24a40daaf786)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：说啥啥不听，干啥啥不行，吃啥啥不剩。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=c0ddec25-f0db-484a-bf82-3cab3d3ecf4f)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：钱买不到快乐是假的，你那点钱买不到快乐是真的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=024e7eeb-a622-4bb3-9f6c-3ea3ba2df43e)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：伤害你的，不是对方的无情，而是你心存幻想的坚持。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=f4a6086d-1039-4361-a07a-6e8e1faa464e)
