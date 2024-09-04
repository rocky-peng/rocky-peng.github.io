import{_ as a,$ as n,a0 as i,a2 as s,a4 as t,a1 as e}from"./framework-294a1fec.js";const l={},r=t(`<p>其实就一个脚本就搞定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>`,11),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),o=e("hr",null,null,-1),u=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),s("：自己都是一个失败的人，还想教出成功的孩子吗？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=056fe1c4-1efa-4b92-922e-5ff39e7fff6f",alt:"",loading:"lazy"})])],-1);function p(v,b){return n(),i("div",null,[r,s(" ## 系统推荐 - [JDK命令行工具](../jvm/JDK命令行工具.md) - [Censys搜索引擎学习](../../other/Censys搜索引擎学习.md) - [常用队列](../java-basic/常用队列.md) - [推荐几个适用小工具](../../other/推荐几个适用小工具.md) - [Javassist整理](Javassist整理.md) - [制作KVM ES镜像文件](制作KVM ES镜像文件.md) - [vuepress-theme-hope 添加谷歌广告](../../other/vuepress-theme-hope 添加谷歌广告.md) - [WebSocket SpringBoot Demo](../../other/WebSocket SpringBoot Demo.md) "),d,c,o,u])}const _=a(l,[["render",p],["__file","批量修改git历史记录中的用户名和邮箱.html.vue"]]);export{_ as default};
