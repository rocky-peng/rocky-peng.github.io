import{_ as a,$ as l,a0 as r,a1 as e,a2 as n,a3 as d,a4 as s,w as v}from"./framework-294a1fec.js";const c={},o=s(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建 cordova 项目： cordova-demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展资料" tabindex="-1"><a class="header-anchor" href="#扩展资料" aria-hidden="true">#</a> 扩展资料</h2>`,3),m={href:"https://cordova.apache.org/docs/en/latest/guide/cli/index.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://umijs.org/zh/guide/create-umi-app.html#%E5%88%9B%E5%BB%BA-umi-%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"},t=s(`<h2 id="cordova-打包" tabindex="-1"><a class="header-anchor" href="#cordova-打包" aria-hidden="true">#</a> cordova 打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug包

cordova build android -- --gradleArg=-PcdvVersionCode=2


release包
cordova build android --release -- --gradleArg=-PcdvVersionCode=2

传递参数给gradle
-- --gradleArg=-PcdvVersionCode=2 --gradleArg=-PVERSION_NAME=2.2.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,3),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),p=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：你能接受恋爱年龄差多大？只要长得好看，上下五千年都行。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a6932f6c-2587-4cff-92e0-8e7a94dd55a2",alt:"",loading:"lazy"})])],-1);function _(f,x){const i=v("ExternalLinkIcon");return l(),r("div",null,[o,e("p",null,[n("cordova : "),e("a",m,[n("https://cordova.apache.org/docs/en/latest/guide/cli/index.html"),d(i)])]),e("p",null,[n("umi: "),e("a",u,[n("https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目"),d(i)])]),t,n(" ## 系统推荐 - [各种网关性能测试](各种网关性能测试.md) - [Redis高可用](../../other/Redis高可用.md) - [Spring Boot升级到2 6 x踩的坑](../../other/Spring Boot升级到2 6 x踩的坑.md) - [PGSQL的json和 jsonb 读写性能测试](../../other/PGSQL的json和 jsonb 读写性能测试.md) - [Java面试基础](../java-basic/Java面试基础.md) - [sofajraft](../raft/sofajraft.md) - [Docker隐射的端口外网不能访问](../../other/Docker隐射的端口外网不能访问.md) - [杂记](杂记.md) "),b,h,p,g])}const y=a(c,[["render",_],["__file","Cordova_Umi项目搭建步骤.html.vue"]]);export{y as default};
