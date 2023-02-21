---
title: Cordova+Umi项目搭建步骤
date: 2018-07-04
---

## 项目搭建
```
# 创建 cordova 项目： cordova-demo
cordova create cordova-demo com.example.hello CordovaDemo
# 上面的命令会自动创建 cordova-demo 目录



# 开始创建umi项目
cd cordova-demo
mkdir myapp-a && cd myapp-a
yarn create umi

# 选择app
# 不启用typescript
# 勾选antd dva
# 回车

# 执行完后，执行

yarn or npm install

# 修改 .umirc.js 在 export default { 中添加下面三行代码
  outputPath: '../www/',
  publicPath: './',
  history: 'hash',

# 然后执行
npm run build

# 上面执行完后，会将 cordova-demo 目录中原有的www目录给删掉，然后重新创建www目录，存放的是umi项目的打包后的文件

# 这个时候返回cordova-demo目录
cd ..

# 测试 cordova android

cordova platform add android
cordova build android

# 添加 .gitignore 文件

在 cordova-demo 创建 .gitignore 文件，内容如下：

.idea
node_modules
plugins
platforms
www

在 myapp-a 创建 .gitignore 文件，内容如下：


# dependencies
/node_modules
/npm-debug.log*
/yarn-error.log
/yarn.lock
/package-lock.json

# production
/dist

# misc
.DS_Store

# umi
.umi
.umi-production

结束
```

## 扩展资料

cordova : https://cordova.apache.org/docs/en/latest/guide/cli/index.html 

umi: https://umijs.org/zh/guide/create-umi-app.html#%E5%88%9B%E5%BB%BA-umi-%E9%A1%B9%E7%9B%AE


## cordova 打包
```
debug包

cordova build android -- --gradleArg=-PcdvVersionCode=2


release包
cordova build android --release -- --gradleArg=-PcdvVersionCode=2

传递参数给gradle
-- --gradleArg=-PcdvVersionCode=2 --gradleArg=-PVERSION_NAME=2.2.2

```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：富人孩子拼父母，穷人父母拼孩子。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=f9295a5e-d49f-4882-aca2-e5c0a1946bf0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：老说找不到理想中的另一半，问问自己，成为理想中的自己了吗？
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=0cd7f30e-0203-4f86-81c1-a9298784b562)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：试着去了解那些你讨厌的人，你会发现，真是越看越讨厌。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=6c1a4d44-a8be-4a0d-b677-00800c1dda09)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：好看的皮囊特别贵，有趣的灵魂特别丑。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=2b186b9f-9318-4499-ae9a-78454d2688ac)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：为什么现代人不会写诗？因为，「文体不限诗歌除外」。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=c442778f-4ee1-4e08-833a-3f085cb1d1f5)
