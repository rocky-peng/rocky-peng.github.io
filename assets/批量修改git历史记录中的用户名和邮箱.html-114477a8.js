import{_ as e,$ as a,a0 as n,a3 as s}from"./framework-902e823a.js";const i={},r=s(`<p>其实就一个脚本就搞定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：既没有牵过手，也没有挂过科，就是所谓的无牵无挂。 <br><br><img src="https://tuapi.eees.cc/api.php?category=dongman&amp;type=302&amp;uuid=90af142c-a831-4367-bedc-6e4b22e2664c" alt="" loading="lazy"></li></ul>`,14),t=[r];function l(d,c){return a(),n("div",null,t)}const o=e(i,[["render",l],["__file","批量修改git历史记录中的用户名和邮箱.html.vue"]]);export{o as default};
