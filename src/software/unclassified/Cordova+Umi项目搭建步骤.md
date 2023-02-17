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
- **随机毒鸡汤**：关闭放假模式开启学霸模式，——对不起，您配置太低无法启用该功能。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=ce528b92-a8b8-4b8c-bbdd-23ab1dda18be)
