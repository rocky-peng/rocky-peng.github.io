import{_ as r,$ as d,a0 as o,a1 as e,a2 as n,a3 as a,a4 as i,a5 as u,w as t}from"./framework-3895bb24.js";const c={},p=u(`<p>其实就一个脚本就搞定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token function">git</span> filter-branch <span class="token parameter variable">-f</span> --env-filter <span class="token string">&#39;

OLD_EMAIL=&quot;原来的邮箱&quot;
CORRECT_NAME=&quot;现在的名字&quot;
CORRECT_EMAIL=&quot;现在的邮箱&quot;

if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]
then
    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;
    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;
fi
if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]
then
    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;
    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;
fi
&#39;</span> --tag-name-filter <span class="token function">cat</span> -- <span class="token parameter variable">--branches</span> <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在仓库目录下执行上面的脚本，如果执行异常，尝试先执行下下面的命令再试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> filter-branch <span class="token parameter variable">-f</span> --index-filter <span class="token string">&#39;git rm --cached --ignore-unmatch Rakefile&#39;</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示下面的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cannot create a new backup.
A previous backup already exists in refs/original/
Force overwriting the backup with -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以执行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-ref <span class="token parameter variable">-d</span> refs/original/refs/heads/分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后push到远程，在远程仓库查看是否修改成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--force</span> <span class="token parameter variable">--tags</span> origin <span class="token string">&#39;refs/heads/*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),v=e("li",null,"[Spring Cloud（一）：服务治理技术概览【Finchley 版】](../spring/Spring Cloud（一）：服务治理技术概览【Finchley 版】.md)",-1),h={href:"http://xn--1jqq0an6zusg1rzv1bfwmim0b.md",target:"_blank",rel:"noopener noreferrer"},m={href:"http://xn--h9tw83g.md",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),g=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：真正的成熟，是自己主动穿上秋裤。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a1a1730e-934d-4aee-a136-43c3be415609",alt:"",loading:"lazy"})])],-1);function E(k,A){const l=t("ExternalLinkIcon"),s=t("RouterLink");return d(),o("div",null,[p,e("ul",null,[v,e("li",null,[n("[CloudFlare 客户端证书的使用](../../other/CloudFlare "),e("a",h,[n("客户端证书的使用.md"),a(l)]),n(")")]),e("li",null,[a(s,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[n("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(s,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:i(()=>[n("SQL优化")]),_:1})]),e("li",null,[a(s,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:i(()=>[n("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(s,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:i(()=>[n("Nginx的双向认证配置")]),_:1})]),e("li",null,[n("[Hbase 总览](../../other/Hbase "),e("a",m,[n("总览.md"),a(l)]),n(")")]),e("li",null,[a(s,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:i(()=>[n("raft协议")]),_:1})])]),_,b,g,f])}const q=r(c,[["render",E],["__file","批量修改git历史记录中的用户名和邮箱.html.vue"]]);export{q as default};
