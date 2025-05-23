import{_ as o,$ as v,a0 as t,a1 as e,a2 as n,a3 as i,a4 as d,a5 as r,w as a}from"./framework-349591b1.js";const c={},u=r(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建 cordova 项目： cordova-demo
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,4),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：嘴巴那么毒，内心一定很多苦吧。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/32133598/pexels-photo-32133598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Free stock photo of 35mm film, fnd, melbourne",loading:"lazy"})])],-1);function B(g,f){const s=a("ExternalLinkIcon"),l=a("RouterLink");return v(),t("div",null,[u,e("p",null,[n("cordova : "),e("a",m,[n("https://cordova.apache.org/docs/en/latest/guide/cli/index.html"),i(s)])]),e("p",null,[n("umi: "),e("a",b,[n("https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目"),i(s)])]),h,e("ul",null,[e("li",null,[i(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:d(()=>[n("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[i(l,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:d(()=>[n("来个JVM冷知识")]),_:1})]),e("li",null,[i(l,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:d(()=>[n("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[i(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:d(()=>[n("弱引用示例")]),_:1})]),e("li",null,[i(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:d(()=>[n("Spring框架源码关键点")]),_:1})]),e("li",null,[i(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:d(()=>[n("K8S 无感发布")]),_:1})]),e("li",null,[i(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:d(()=>[n("Hadoop 一")]),_:1})]),e("li",null,[i(l,{to:"/other/Cornell%20Notes%20System.html"},{default:d(()=>[n("Cornell Notes System")]),_:1})]),e("li",null,[i(l,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:d(()=>[n("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[i(l,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:d(()=>[n("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[i(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:d(()=>[n("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[i(l,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:d(()=>[n("CentOS7下Docker端口映射后防火墙失效")]),_:1})])]),E,p,_,A])}const k=o(c,[["render",B],["__file","Cordova_Umi项目搭建步骤.html.vue"]]);export{k as default};
