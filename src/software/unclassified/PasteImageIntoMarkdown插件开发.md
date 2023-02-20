---
title: PasteImageIntoMarkdown插件开发记录
date: 2020-03-03
---

## 背景

由于这段时间需要经常使用markdown写一些文档，
本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。
于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径，
于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。

写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不
接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。

## 功能增强
在那个仓库的基础上我进行了一些功能修改，主要有以下几点：
1. 支持把图片上传到七牛云（原仓库不支持）
2. 支持把图片保存到工程相对路径（原仓库也有，做了一些修改）
3. 支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）
4. 把设置选项统一集成在了idea的设置里

下面有时间要做的是支持：
1. 阿里云存储
2. 腾讯云存储

## 插件名称
新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown 

![](https://cdn.justdopay.com/xiaoshujiang/1629080060089.png)


## 插件仓库
github: [https://github.com/rocky-peng/PasteImageToMarkdown][https://github.com/rocky-peng/PasteImageToMarkdown]

欢迎各位大佬吐槽

[https://github.com/rocky-peng/PasteImageToMarkdown]: https://github.com/rocky-peng/PasteImageToMarkdown/
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我们不合适，你适合更好的，而不是我这种最好的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=adc30e76-3ab0-42f6-a9dc-2aaa4fc3e590)
