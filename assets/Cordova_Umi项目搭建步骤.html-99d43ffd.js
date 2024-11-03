import{_ as v,$ as o,a0 as c,a1 as e,a2 as i,a3 as n,a4 as l,a5 as r,w as a}from"./framework-16d560c6.js";const u={},t=r(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建 cordova 项目： cordova-demo
cordova create cordova-demo com.example.hello CordovaDemo
# 上面的命令会自动创建 cordova-demo 目录



# 开始创建umi项目
cd cordova-demo
mkdir myapp-a &amp;&amp; cd myapp-a
yarn create umi

# 选择app
# 不启用typescript
# 勾选antd dva
# 回车

# 执行完后，执行

yarn or npm install

# 修改 .umirc.js 在 export default { 中添加下面三行代码
  outputPath: &#39;../www/&#39;,
  publicPath: &#39;./&#39;,
  history: &#39;hash&#39;,

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展资料" tabindex="-1"><a class="header-anchor" href="#扩展资料" aria-hidden="true">#</a> 扩展资料</h2>`,3),m={href:"https://cordova.apache.org/docs/en/latest/guide/cli/index.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://umijs.org/zh/guide/create-umi-app.html#%E5%88%9B%E5%BB%BA-umi-%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="cordova-打包" tabindex="-1"><a class="header-anchor" href="#cordova-打包" aria-hidden="true">#</a> cordova 打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug包

cordova build android -- --gradleArg=-PcdvVersionCode=2


release包
cordova build android --release -- --gradleArg=-PcdvVersionCode=2

传递参数给gradle
-- --gradleArg=-PcdvVersionCode=2 --gradleArg=-PVERSION_NAME=2.2.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),i("：天生我材必有用，即便是废材，也能起陪衬的作用。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e3e40b11-eadf-4122-8da4-8ab3ae7f557c",alt:"",loading:"lazy"})])],-1);function g(f,A){const s=a("ExternalLinkIcon"),d=a("RouterLink");return o(),c("div",null,[t,e("p",null,[i("cordova : "),e("a",m,[i("https://cordova.apache.org/docs/en/latest/guide/cli/index.html"),n(s)])]),e("p",null,[i("umi: "),e("a",b,[i("https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目"),n(s)])]),h,e("ul",null,[e("li",null,[n(d,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[i("Oh My ZSH")]),_:1})]),e("li",null,[n(d,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[i("Git笔记")]),_:1})]),e("li",null,[n(d,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[i("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[n(d,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[i("来个JVM冷知识")]),_:1})]),e("li",null,[n(d,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[i("弱引用示例")]),_:1})]),e("li",null,[n(d,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[i("如何安装Google BBR")]),_:1})]),e("li",null,[n(d,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:l(()=>[i("制作KVM ES镜像文件")]),_:1})]),e("li",null,[n(d,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[i("ShadowsockServer配置")]),_:1})]),e("li",null,[n(d,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[i("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[n(d,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:l(()=>[i("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[n(d,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[i("Linux dev shm目录")]),_:1})]),e("li",null,[n(d,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[i("Hbase 总览")]),_:1})])]),E,p,_,B])}const w=v(u,[["render",g],["__file","Cordova_Umi项目搭建步骤.html.vue"]]);export{w as default};
