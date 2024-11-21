import{_ as v,$ as o,a0 as c,a1 as e,a2 as n,a3 as i,a4 as l,a5 as r,w as s}from"./framework-6821ba0c.js";const u={},t=r(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建 cordova 项目： cordova-demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展资料" tabindex="-1"><a class="header-anchor" href="#扩展资料" aria-hidden="true">#</a> 扩展资料</h2>`,3),m={href:"https://cordova.apache.org/docs/en/latest/guide/cli/index.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://umijs.org/zh/guide/create-umi-app.html#%E5%88%9B%E5%BB%BA-umi-%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"},E=r(`<h2 id="cordova-打包" tabindex="-1"><a class="header-anchor" href="#cordova-打包" aria-hidden="true">#</a> cordova 打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug包

cordova build android -- --gradleArg=-PcdvVersionCode=2


release包
cordova build android --release -- --gradleArg=-PcdvVersionCode=2

传递参数给gradle
-- --gradleArg=-PcdvVersionCode=2 --gradleArg=-PVERSION_NAME=2.2.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：快乐分享错了人就成了显摆，难过分享错了人就成了矫情。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4eab04ef-42d9-4db3-b05d-733f2b6d4e79",alt:"",loading:"lazy"})])],-1);function g(f,A){const a=s("ExternalLinkIcon"),d=s("RouterLink");return o(),c("div",null,[t,e("p",null,[n("cordova : "),e("a",m,[n("https://cordova.apache.org/docs/en/latest/guide/cli/index.html"),i(a)])]),e("p",null,[n("umi: "),e("a",b,[n("https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目"),i(a)])]),E,e("ul",null,[e("li",null,[i(d,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[n("各种网关性能测试")]),_:1})]),e("li",null,[i(d,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[n("微博关注关系如何实现")]),_:1})]),e("li",null,[i(d,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:l(()=>[n("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[i(d,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[n("Censys搜索引擎学习")]),_:1})]),e("li",null,[i(d,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[n("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[i(d,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[n("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[i(d,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[n("MAC CMS")]),_:1})]),e("li",null,[i(d,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[n("Paxos算法")]),_:1})]),e("li",null,[i(d,{to:"/intro.html"},{default:l(()=>[n("intro")]),_:1})]),e("li",null,[i(d,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:l(()=>[n("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[i(d,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:l(()=>[n("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[i(d,{to:"/software/raft/sofajraft.html"},{default:l(()=>[n("sofajraft")]),_:1})])]),h,p,_,B])}const x=v(u,[["render",g],["__file","Cordova_Umi项目搭建步骤.html.vue"]]);export{x as default};
