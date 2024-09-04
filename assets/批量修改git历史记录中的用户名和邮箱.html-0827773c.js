import{_ as l,$ as t,a0 as r,a1 as e,a3 as s,a4 as i,a5 as d,a2 as a,w as o}from"./framework-3895bb24.js";const u={},c=d(`<p>其实就一个脚本就搞定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),v=e("hr",null,null,-1),m=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：现在一直躺在家也好，至少给没钱出去玩，找了个借口。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=52cd8733-050e-4fa6-af12-ca75d80df762",alt:"",loading:"lazy"})])],-1);function _(h,E){const n=o("RouterLink");return t(),r("div",null,[c,e("ul",null,[e("li",null,[s(n,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[a("MySQL杂项")]),_:1})]),e("li",null,[s(n,{to:"/software/unclassified/gperftools.html"},{default:i(()=>[a("gperftools")]),_:1})]),e("li",null,[s(n,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:i(()=>[a("Centos离线安装Docker")]),_:1})]),e("li",null,[s(n,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:i(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[s(n,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[a("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[s(n,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[a("Java面试基础")]),_:1})]),e("li",null,[s(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[a("Hbase 总览")]),_:1})]),e("li",null,[s(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[a("K8S常用命令")]),_:1})])]),p,v,m,b])}const g=l(u,[["render",_],["__file","批量修改git历史记录中的用户名和邮箱.html.vue"]]);export{g as default};
