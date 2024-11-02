const n=JSON.parse(`{"key":"v-3631174f","path":"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html","title":"Git历史记录修改用户名和邮箱","lang":"zh-CN","frontmatter":{"title":"Git历史记录修改用户名和邮箱","date":"2024-08-30T00:00:00.000Z","tag":["git"],"category":["git"],"description":"进入仓库目录，执行 #!/bin/sh git filter-branch -f --env-filter ' OLD_EMAIL=\\"旧邮箱\\" CORRECT_NAME=\\"新用户名\\" CORRECT_EMAIL=\\"新邮箱\\" if [ \\"$GIT_COMMITTER_EMAIL\\" = \\"$OLD_EMAIL\\" ] then export GIT_COMMITTER_NAME=\\"$CORRECT_NAME\\" export GIT_COMMITTER_EMAIL=\\"$CORRECT_EMAIL\\" fi if [ \\"$GIT_AUTHOR_EMAIL\\" = \\"$OLD_EMAIL\\" ] then export GIT_AUTHOR_NAME=\\"$CORRECT_NAME\\" export GIT_AUTHOR_EMAIL=\\"$CORRECT_EMAIL\\" fi git config user.name \\"$CORRECT_NAME\\" git config user.email \\"$CORRECT_EMAIL\\" ' --tag-name-filter cat -- --branches --tags 执行 git push --force 如果执行1的过程中出错，可以执行下面命令后重试 rm -rf .git/refs/original/ git reflog expire --expire=now --all 或者 git update-ref -d refs/original/refs/heads/master 或者 git filter-branch -f --tree-filter -f 'rm -f test' -- --all","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Git历史记录修改用户名和邮箱"}],["meta",{"property":"og:description","content":"进入仓库目录，执行 #!/bin/sh git filter-branch -f --env-filter ' OLD_EMAIL=\\"旧邮箱\\" CORRECT_NAME=\\"新用户名\\" CORRECT_EMAIL=\\"新邮箱\\" if [ \\"$GIT_COMMITTER_EMAIL\\" = \\"$OLD_EMAIL\\" ] then export GIT_COMMITTER_NAME=\\"$CORRECT_NAME\\" export GIT_COMMITTER_EMAIL=\\"$CORRECT_EMAIL\\" fi if [ \\"$GIT_AUTHOR_EMAIL\\" = \\"$OLD_EMAIL\\" ] then export GIT_AUTHOR_NAME=\\"$CORRECT_NAME\\" export GIT_AUTHOR_EMAIL=\\"$CORRECT_EMAIL\\" fi git config user.name \\"$CORRECT_NAME\\" git config user.email \\"$CORRECT_EMAIL\\" ' --tag-name-filter cat -- --branches --tags 执行 git push --force 如果执行1的过程中出错，可以执行下面命令后重试 rm -rf .git/refs/original/ git reflog expire --expire=now --all 或者 git update-ref -d refs/original/refs/heads/master 或者 git filter-branch -f --tree-filter -f 'rm -f test' -- --all"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-02T00:39:00.000Z"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2024-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-02T00:39:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git历史记录修改用户名和邮箱\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-02T00:39:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1725015672000,"updatedTime":1730507940000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":248}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"other/Git历史记录修改用户名和邮箱.md","localizedDate":"2024年8月30日","excerpt":"<ol>\\n<li>\\n<p>进入仓库目录，执行</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">#!/bin/sh</span>\\n\\ngit filter<span class=\\"token operator\\">-</span>branch <span class=\\"token operator\\">-</span>f <span class=\\"token comment\\">--env-filter '</span>\\n\\nOLD_EMAIL<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"旧邮箱\\"</span>\\nCORRECT_NAME<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"新用户名\\"</span>\\nCORRECT_EMAIL<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"新邮箱\\"</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"$GIT_COMMITTER_EMAIL\\"</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"$OLD_EMAIL\\"</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n    export GIT_COMMITTER_NAME<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"$CORRECT_NAME\\"</span>\\n    export GIT_COMMITTER_EMAIL<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"$CORRECT_EMAIL\\"</span>\\nfi\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"$GIT_AUTHOR_EMAIL\\"</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"$OLD_EMAIL\\"</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n    export GIT_AUTHOR_NAME<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"$CORRECT_NAME\\"</span>\\n    export GIT_AUTHOR_EMAIL<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"$CORRECT_EMAIL\\"</span>\\nfi\\n\\ngit config <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token string\\">\\"$CORRECT_NAME\\"</span>\\ngit config <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">.</span>email <span class=\\"token string\\">\\"$CORRECT_EMAIL\\"</span>\\n' <span class=\\"token comment\\">--tag-name-filter cat -- --branches --tags</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>执行</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>git push <span class=\\"token comment\\">--force</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如果执行1的过程中出错，可以执行下面命令后重试</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>rm <span class=\\"token operator\\">-</span>rf <span class=\\"token punctuation\\">.</span>git<span class=\\"token operator\\">/</span>refs<span class=\\"token operator\\">/</span>original<span class=\\"token operator\\">/</span>\\ngit reflog expire <span class=\\"token comment\\">--expire=now --all</span>\\n\\n或者\\n\\ngit <span class=\\"token keyword\\">update</span><span class=\\"token operator\\">-</span>ref <span class=\\"token operator\\">-</span>d refs<span class=\\"token operator\\">/</span>original<span class=\\"token operator\\">/</span>refs<span class=\\"token operator\\">/</span>heads<span class=\\"token operator\\">/</span>master\\n\\n或者\\n\\ngit filter<span class=\\"token operator\\">-</span>branch <span class=\\"token operator\\">-</span>f <span class=\\"token comment\\">--tree-filter -f 'rm -f test' -- --all</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{},"autoDesc":true}`);export{n as data};
