const s=JSON.parse('{"key":"v-7ea8c296","path":"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html","title":"GitHub Workflow突然报错","lang":"zh-CN","frontmatter":{"title":"GitHub Workflow突然报错","date":"2024-01-31T00:00:00.000Z","description":"再github上跑了一个工作流，主要就是执行npm install，npm run docs:build 使用的package.json如下： { \\"name\\": \\"my-blogs\\", \\"version\\": \\"2.0.0\\", \\"description\\": \\"my-blogs\\", \\"license\\": \\"MIT\\", \\"type\\": \\"module\\", \\"scripts\\": { \\"docs:build\\": \\"vuepress build src\\", \\"docs:clean-dev\\": \\"vuepress dev src --clean-cache\\", \\"docs:dev\\": \\"vuepress dev src\\" }, \\"devDependencies\\": { \\"@vuepress/client\\": \\"2.0.0-beta.61\\", \\"@vuepress/plugin-google-analytics\\": \\"^2.0.0-beta.61\\", \\"vue\\": \\"^3.2.47\\", \\"vuepress\\": \\"2.0.0-beta.61\\", \\"vuepress-plugin-china-search-console\\": \\"^2.1.5\\", \\"vuepress-plugin-components\\": \\"2.0.0-beta.184\\", \\"vuepress-plugin-search-pro\\": \\"2.0.0-beta.184\\", \\"vuepress-theme-hope\\": \\"2.0.0-beta.184\\" } }","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"GitHub Workflow突然报错"}],["meta",{"property":"og:description","content":"再github上跑了一个工作流，主要就是执行npm install，npm run docs:build 使用的package.json如下： { \\"name\\": \\"my-blogs\\", \\"version\\": \\"2.0.0\\", \\"description\\": \\"my-blogs\\", \\"license\\": \\"MIT\\", \\"type\\": \\"module\\", \\"scripts\\": { \\"docs:build\\": \\"vuepress build src\\", \\"docs:clean-dev\\": \\"vuepress dev src --clean-cache\\", \\"docs:dev\\": \\"vuepress dev src\\" }, \\"devDependencies\\": { \\"@vuepress/client\\": \\"2.0.0-beta.61\\", \\"@vuepress/plugin-google-analytics\\": \\"^2.0.0-beta.61\\", \\"vue\\": \\"^3.2.47\\", \\"vuepress\\": \\"2.0.0-beta.61\\", \\"vuepress-plugin-china-search-console\\": \\"^2.1.5\\", \\"vuepress-plugin-components\\": \\"2.0.0-beta.184\\", \\"vuepress-plugin-search-pro\\": \\"2.0.0-beta.184\\", \\"vuepress-theme-hope\\": \\"2.0.0-beta.184\\" } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-09T07:03:54.000Z"}],["meta",{"property":"article:published_time","content":"2024-01-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T07:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub Workflow突然报错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-09T07:03:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1706671164000,"updatedTime":1731135834000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":265}]},"readingTime":{"minutes":2.87,"words":861},"filePathRelative":"other/GitHub Workflow突然报错.md","localizedDate":"2024年1月31日","excerpt":"<p>再github上跑了一个工作流，主要就是执行<code>npm install</code>，<code>npm run docs:build</code></p>\\n<p>使用的package.json如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token string\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"my-blogs\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"version\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"description\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"my-blogs\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"license\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"MIT\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"type\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"module\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"scripts\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">\\"docs:build\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"vuepress build src\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"docs:clean-dev\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"vuepress dev src --clean-cache\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"docs:dev\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"vuepress dev src\\"</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string\\">\\"devDependencies\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">\\"@vuepress/client\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0-beta.61\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"@vuepress/plugin-google-analytics\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^2.0.0-beta.61\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vue\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^3.2.47\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vuepress\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0-beta.61\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vuepress-plugin-china-search-console\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^2.1.5\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vuepress-plugin-components\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0-beta.184\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vuepress-plugin-search-pro\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0-beta.184\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"vuepress-theme-hope\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0-beta.184\\"</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{s as data};
