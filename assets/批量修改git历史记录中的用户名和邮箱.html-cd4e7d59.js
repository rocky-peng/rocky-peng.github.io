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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),b=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：身在福中不知福是什么？就是发福快发成猪了，还觉得自己身材蛮OK。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0d784103-3b15-4308-b4c6-92ab9968f08d",alt:"",loading:"lazy"})])],-1);function _(h,E){const n=o("RouterLink");return t(),r("div",null,[c,e("ul",null,[e("li",null,[s(n,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[a("MAT工具")]),_:1})]),e("li",null,[s(n,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:i(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[s(n,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[a("MySQL杂项")]),_:1})]),e("li",null,[s(n,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:i(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[s(n,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:i(()=>[a("线上FullGC频繁的排查")]),_:1})]),e("li",null,[s(n,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:i(()=>[a("分库分表")]),_:1})]),e("li",null,[s(n,{to:"/other/JetBrains-License-Server.html"},{default:i(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[s(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[a("Hbase 总览")]),_:1})])]),v,p,b,m])}const g=l(u,[["render",_],["__file","批量修改git历史记录中的用户名和邮箱.html.vue"]]);export{g as default};
