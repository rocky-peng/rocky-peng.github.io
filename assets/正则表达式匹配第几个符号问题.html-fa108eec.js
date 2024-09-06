import{_ as i,$ as s,a0 as d,a1 as e,a3 as l,a4 as n,a5 as r,a2 as t,w as o}from"./framework-b7a22294.js";const c={},u=r(`<h2 id="先说下需求" tabindex="-1"><a class="header-anchor" href="#先说下需求" aria-hidden="true">#</a> 先说下需求</h2><p>现在有类似下面的字符串（只列出部分，实际很多）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object_type,customer,消费者对象
object_type,product,产品对象
object_type,organization,组织对象
object_type,employee,员工对象
object_type,other,其他
wechat_public_account,test,java
wechat_mini_program,test,vue
encrypt_method,noencrypt,不加密
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在想把第一个 , 改为 .<br> 然后想把第二个 , 改为 =</p><hr><h2 id="如果是你-你会怎么做-如果用正则-正则怎么写" tabindex="-1"><a class="header-anchor" href="#如果是你-你会怎么做-如果用正则-正则怎么写" aria-hidden="true">#</a> 如果是你，你会怎么做？ 如果用正则，正则怎么写？</h2><h2 id="我的方案" tabindex="-1"><a class="header-anchor" href="#我的方案" aria-hidden="true">#</a> 我的方案</h2><p>采用正则表达式，正则的表达式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,(.*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.$1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 $1 就表示第一对小括号匹配到的字符串。 类似的 $2 表示第二对小括号匹配到的字符串</p><h2 id="举一反三" tabindex="-1"><a class="header-anchor" href="#举一反三" aria-hidden="true">#</a> 举一反三</h2><p>现在需求改为：把第二个逗号后的内容 和 第一个第二个逗号之间的内容 位置进行调换，正则表达式怎么写？</p><p>匹配的表达式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,(.*),(.*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,$2,$1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换后的效果： <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-12-30/14837638492500.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,21),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),_=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：时间就是金钱，我们要视金钱为粪土，所以时间就是粪土。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=3546e10e-b155-46d6-abfa-5e7cc3f1a1d0",alt:"",loading:"lazy"})])],-1);function m(v,A){const a=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[e("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[l(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[l(a,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(a,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("分布式问题")]),_:1})])]),E,h,_,p])}const b=i(c,[["render",m],["__file","正则表达式匹配第几个符号问题.html.vue"]]);export{b as default};
