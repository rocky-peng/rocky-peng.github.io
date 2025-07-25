import{_ as o,$ as v,a0 as c,a1 as e,a2 as n,a3 as i,a4 as d,a5 as r,w as a}from"./framework-de22589b.js";const t={},u=r(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建 cordova 项目： cordova-demo
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：你就是个土豆丝，又土又逗，又屌丝。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/33114454/pexels-photo-33114454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A woman walks through a sunlit alley in an urban area, shielding her eyes.",loading:"lazy"})])],-1);function A(B,f){const s=a("ExternalLinkIcon"),l=a("RouterLink");return v(),c("div",null,[u,e("p",null,[n("cordova : "),e("a",m,[n("https://cordova.apache.org/docs/en/latest/guide/cli/index.html"),i(s)])]),e("p",null,[n("umi: "),e("a",b,[n("https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目"),i(s)])]),h,e("ul",null,[e("li",null,[i(l,{to:"/software/unclassified/MyBatis.html"},{default:d(()=>[n("MyBatis")]),_:1})]),e("li",null,[i(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:d(()=>[n("Docker进行资源隔离")]),_:1})]),e("li",null,[i(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:d(()=>[n("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[i(l,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:d(()=>[n("JDK命令行工具")]),_:1})]),e("li",null,[i(l,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:d(()=>[n("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[i(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:d(()=>[n("istio基础知识")]),_:1})]),e("li",null,[i(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:d(()=>[n("InnoDB存储引擎")]),_:1})]),e("li",null,[i(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:d(()=>[n("异地多活")]),_:1})]),e("li",null,[i(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:d(()=>[n("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[i(l,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:d(()=>[n("Nginx的双向认证配置")]),_:1})]),e("li",null,[i(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:d(()=>[n("分布式问题")]),_:1})]),e("li",null,[i(l,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:d(()=>[n("raft协议")]),_:1})])]),E,p,_,g])}const w=o(t,[["render",A],["__file","Cordova_Umi项目搭建步骤.html.vue"]]);export{w as default};
