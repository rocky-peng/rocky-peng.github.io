import{_ as i,$ as d,a0 as s,a1 as e,a3 as l,a4 as n,a5 as r,a2 as t,w as o}from"./framework-58787b1c.js";const E={},c=r(`<h2 id="先说下需求" tabindex="-1"><a class="header-anchor" href="#先说下需求" aria-hidden="true">#</a> 先说下需求</h2><p>现在有类似下面的字符串（只列出部分，实际很多）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object_type,customer,消费者对象
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换后的效果： <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-12-30/14837638492500.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,21),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),h=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：经过大家的耐心劝导，我终于接受了，自己是傻逼这个事实。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6682a21c-9c60-4755-90ee-d04400dcd3bb",alt:"",loading:"lazy"})])],-1);function p(_,m){const a=o("RouterLink");return d(),s("div",null,[c,e("ul",null,[e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[l(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[l(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:n(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[t("杂记")]),_:1})])]),u,B,h,A])}const b=i(E,[["render",p],["__file","正则表达式匹配第几个符号问题.html.vue"]]);export{b as default};
