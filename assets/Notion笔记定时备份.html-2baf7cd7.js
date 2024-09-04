import{_ as l,$ as d,a0 as h,a1 as e,a2 as a,a3 as t,a4 as o,a5 as s,w as r}from"./framework-b6ede5bc.js";const c="/assets/431974973335700-802dc2ee.png",p="/assets/432626452724700-6cf40815.png",E="/assets/432630809150500-738962c1.png",u="/assets/432770360556700-53975437.png",f="/assets/432832006568400-bd5facd8.png",_="/assets/432956352937000-aa634929.png",g="/assets/433052161706700-adfd3510.png",A="/assets/433237435722500-7630af31.png",m="/assets/431654460959200-9e29d415.png",b="/assets/433658683222900-eb6e61c3.png",B={},k=s('<h2 id="先说原理" tabindex="-1"><a class="header-anchor" href="#先说原理" aria-hidden="true">#</a> 先说原理</h2><p>原理就是，模拟notion的&quot;export all workspace content&quot;按钮的请求，得到notion返回的zip压缩包。</p><p>拿到zip压缩包后怎么处理，就看各自的需求了。</p><p>我这里拿到zip压缩包后的操作是：自动解压并推送到github的私有仓库中</p><h2 id="具体步骤" tabindex="-1"><a class="header-anchor" href="#具体步骤" aria-hidden="true">#</a> 具体步骤</h2><h3 id="一、创建或准备自己的私有仓库" tabindex="-1"><a class="header-anchor" href="#一、创建或准备自己的私有仓库" aria-hidden="true">#</a> 一、创建或准备自己的私有仓库</h3><p>可以是新建的私有仓库，也可以是已有仓库，但无论新建还是已有，都不能是空仓库，哪怕随便提交一个文件都可以。然后分支名要命名为main</p><p>我这里是创建的新仓库，仓库名就是： my-notion-backup （可以不一样，根据自身情况定义即可）</p><h3 id="二、fork仓库" tabindex="-1"><a class="header-anchor" href="#二、fork仓库" aria-hidden="true">#</a> 二、fork仓库</h3><p>这个仓库的作用就是完成上面说的工作：定时模拟notion导出请求，解压，推送</p>',10),x={href:"https://github.com/richartkeil/notion-guardian",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/rocky-peng/Keenster-notion-guardian",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"三、准备以下参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三、准备以下参数","aria-hidden":"true"},"#"),a(" 三、准备以下参数")],-1),D=e("h4",{id:"repo-username",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repo-username","aria-hidden":"true"},"#"),a(" REPO_USERNAME")],-1),N=e("p",null,"这个参数就是自己github的用户名，就是步骤二中自己fork的仓库地址中用户名那一节。",-1),C={href:"https://github.com/rocky-peng/Keenster-notion-guardian%EF%BC%8C%E9%82%A3rocky-peng%E5%B0%B1%E6%98%AFREPO_USERNAME",target:"_blank",rel:"noopener noreferrer"},F=e("h4",{id:"repo-personal-access-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repo-personal-access-token","aria-hidden":"true"},"#"),a(" REPO_PERSONAL_ACCESS_TOKEN")],-1),S={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},O=e("img",{src:c,alt:"",loading:"lazy"},null,-1),R=s('<h4 id="repo-name" tabindex="-1"><a class="header-anchor" href="#repo-name" aria-hidden="true">#</a> REPO_NAME</h4><p>这个参数就是步骤一中自己的私有仓库名字，我这里就是： my-notion-backup</p><h4 id="repo-email" tabindex="-1"><a class="header-anchor" href="#repo-email" aria-hidden="true">#</a> REPO_EMAIL</h4><p>这个参数一般配置为自己的邮箱，用于定义推送到私有仓库的用户。自己常用的邮箱即可</p><h4 id="notion-space-id" tabindex="-1"><a class="header-anchor" href="#notion-space-id" aria-hidden="true">#</a> NOTION_SPACE_ID</h4><p>进入自己的notion。看下图：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中缺失的3：</p><p>浏览器右键并点击&quot;检查&quot;</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后找到network或者网络，如下：</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时步骤3完成，可以继续步骤4</p><p>然后会出现弹框，如下：</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>继续点击红框按钮</p><p>然后此时在network或者网络下方找到下面的请求：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右下角的spaceId，就是我们要找的值，记录下来</p><h4 id="notion-token" tabindex="-1"><a class="header-anchor" href="#notion-token" aria-hidden="true">#</a> NOTION_TOKEN</h4><p><img src="'+A+'" alt="" loading="lazy"> 红框中 token_v2的值就是了，记录下来</p><h4 id="notion-user-id" tabindex="-1"><a class="header-anchor" href="#notion-user-id" aria-hidden="true">#</a> NOTION_USER_ID</h4><p>上图中红框中 notion_user_id 的值就是了，记录下来</p><h3 id="四、配置刚刚fork的仓库" tabindex="-1"><a class="header-anchor" href="#四、配置刚刚fork的仓库" aria-hidden="true">#</a> 四、配置刚刚fork的仓库</h3><h4 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h4><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>按照上图的操作，依次创建上面的准备的参数，最后类似上图上图</p><h4 id="开启workflow" tabindex="-1"><a class="header-anchor" href="#开启workflow" aria-hidden="true">#</a> 开启workflow</h4><p>单击fork仓库上的“Actions”选项卡，然后单击启用按钮。</p><p>在左侧边栏上单击“Backup Notion Workspace”工作流程。通知将告诉您“计划的操作”已禁用，因此请继续并单击按钮以启用它们。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>此时任意往fork的仓库中提交一点东西，就会触发actions动作</p><p>等待一会，刷新自己的私有仓库，看看是否有文件生成，类似如下：</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改定时备份频率" tabindex="-1"><a class="header-anchor" href="#修改定时备份频率" aria-hidden="true">#</a> 修改定时备份频率</h2><p>fork仓库默认是每天0点0分备份一次。可以通过修改工作流配置文件修改备份频率。一般一天一次足够</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',39),z=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),I=e("hr",null,null,-1),M=e("hr",null,null,-1),P=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：最新名词解释，“别来无恙”，你别来我就不会生病。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eab4f612-2599-47ca-be54-9cfd0f2295f5",alt:"",loading:"lazy"})])],-1);function v(L,K){const i=r("ExternalLinkIcon"),n=r("RouterLink");return d(),h("div",null,[k,e("p",null,[a("仓库地址："),e("a",x,[a("https://github.com/richartkeil/notion-guardian"),t(i)])]),e("p",null,[a("也可以fork楼主的仓库："),e("a",w,[a("https://github.com/rocky-peng/Keenster-notion-guardian"),t(i)]),a(" （修改了中文时区并默认为子页面创建文件夹，方便管理）")]),y,D,N,e("p",null,[a("比如我的仓库地址："),e("a",C,[a("https://github.com/rocky-peng/Keenster-notion-guardian，那rocky-peng就是REPO_USERNAME"),t(i)])]),F,e("p",null,[a("这个参数在自己的github上创建，这里提供一个便捷链接： "),e("a",S,[a("https://github.com/settings/tokens/new"),t(i)]),O]),R,e("ul",null,[e("li",null,[t(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[a("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[t(n,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[t(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("Docker笔记")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[a("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[a("linux_no_space_left_on_device")]),_:1})]),e("li",null,[t(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[t(n,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[a("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[a("Markdown软件比对")]),_:1})]),e("li",null,[t(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[t(n,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[a("表单重复提交解决方案")]),_:1})])]),z,I,M,P])}const q=l(B,[["render",v],["__file","Notion笔记定时备份.html.vue"]]);export{q as default};
