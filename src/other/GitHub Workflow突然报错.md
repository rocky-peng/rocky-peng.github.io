---
title: GitHub Workflow突然报错
date: 2024-01-31
---

再github上跑了一个工作流，主要就是执行`npm install`，`npm run docs:build` 

使用的package.json如下：

```java
{
  "name": "my-blogs",
  "version": "2.0.0",
  "description": "my-blogs",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  },
  "devDependencies": {
    "@vuepress/client": "2.0.0-beta.61",
    "@vuepress/plugin-google-analytics": "^2.0.0-beta.61",
    "vue": "^3.2.47",
    "vuepress": "2.0.0-beta.61",
    "vuepress-plugin-china-search-console": "^2.1.5",
    "vuepress-plugin-components": "2.0.0-beta.184",
    "vuepress-plugin-search-pro": "2.0.0-beta.184",
    "vuepress-theme-hope": "2.0.0-beta.184"
  }
}
```

再workflow中指定了node的版本是：16.18.1

上面的配置一直都在正常跑，估计正常跑了大半年之久，突然在2024-01-26号github发来npm install报错邮件。

错误信息大致如下：

```java
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-blogs@2.0.0
npm ERR! Found: vuepress@2.0.0-beta.61
npm ERR! node_modules/vuepress
npm ERR!   dev vuepress@"2.0.0-beta.61" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer vuepress@"2.0.0-rc.2" from @vuepress/plugin-google-analytics@2.0.0-rc.1
npm ERR! node_modules/@vuepress/plugin-google-analytics
npm ERR!   dev @vuepress/plugin-google-analytics@"^2.0.0-beta.61" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /home/runner/.npm/eresolve-report.txt for a full report.
npm ERR! A complete log of this run can be found in:
npm ERR!     /home/runner/.npm/_logs/2024-01-29T10_29_19_566Z-debug-0.log
Error: Process completed with exit code 1.
```

然后本地用同样的node版本，同样的配置执行又可以正常执行

然后各种搜资料，问CHATGPT，都没能正常解决。后来无意发现package.json文件中有`^` 符合，这个符合是做一些版本兼容用的。

具体来说，如果一个包的版本号是 **`^X.Y.Z`**，那么 npm 将会允许安装的版本范围包括从 **`X.Y.Z`** 到 **`X.(Y+1).0`** 的任何版本，但不包括主版本号 **`X`** 的更改

这也就解释了，为什么package.json中明明没有2.0.0-rc.2版本的依赖，但错误信息却有。

所以尝试着把`^` 删除，然后重试，**`成功了`**

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：长胖就不高兴，不高兴就吃零食，吃零食就长胖。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=5fa59fbc-4a54-41bd-a152-7859b826d615)
