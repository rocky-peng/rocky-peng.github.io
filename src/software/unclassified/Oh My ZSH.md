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
- **随机毒鸡汤**：如果你心比天高，老天爷会让你知道，什么是命比纸薄。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=80bfc3d3-6313-409c-a25a-f57391e9ea9d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：认识陌生人其实很麻烦，许多谎话又得重新说起。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=7dc1c3d1-7ea2-40a5-8906-22719e2ecca5)
