const s=JSON.parse(`{"key":"v-08aa8f20","path":"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html","title":"ShadowsockServer配置","lang":"zh-CN","frontmatter":{"title":"ShadowsockServer配置","date":"2020-07-06T00:00:00.000Z","description":"临时用vpn的办法： 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱 部署 sshpass -p \\"yourpassword\\" ssh root@$1 &lt;&lt; EOF yum install python-setuptools &amp;&amp; easy_install pip pip install shadowsocks sudo mkdir /etc/shadowsocks echo '{\\"server\\":\\"0.0.0.0\\",\\"server_port\\":12345,\\"local_address\\": \\"127.0.0.1\\",\\"local_port\\":1080,\\"password\\":\\"yourpassword\\", \\"timeout\\":1200,\\"method\\":\\"aes-256-cfb\\",\\"fast_open\\": true,\\"workers\\":3}' &gt;&gt; /etc/shadowsocks/shadowsocks.json ssserver -c /etc/shadowsocks/shadowsocks.json -d restart EOF","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"ShadowsockServer配置"}],["meta",{"property":"og:description","content":"临时用vpn的办法： 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱 部署 sshpass -p \\"yourpassword\\" ssh root@$1 &lt;&lt; EOF yum install python-setuptools &amp;&amp; easy_install pip pip install shadowsocks sudo mkdir /etc/shadowsocks echo '{\\"server\\":\\"0.0.0.0\\",\\"server_port\\":12345,\\"local_address\\": \\"127.0.0.1\\",\\"local_port\\":1080,\\"password\\":\\"yourpassword\\", \\"timeout\\":1200,\\"method\\":\\"aes-256-cfb\\",\\"fast_open\\": true,\\"workers\\":3}' &gt;&gt; /etc/shadowsocks/shadowsocks.json ssserver -c /etc/shadowsocks/shadowsocks.json -d restart EOF"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2020-07-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShadowsockServer配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"修改端口","slug":"修改端口","link":"#修改端口","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1672234764000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":479},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"software/shodowsocks/ShadowsockServer配置.md","localizedDate":"2020年7月6日","excerpt":"<h1> 临时用vpn的办法：</h1>\\n<h1> 腾讯云-&gt;竞价实例-&gt;中国香港-&gt;流量计费(100M) ，两三个小时才几毛钱</h1>\\n<h2> 部署</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>\\nsshpass -p \\"yourpassword\\" ssh root@$1 &lt;&lt; EOF\\n\\nyum install python-setuptools &amp;&amp; easy_install pip\\n\\npip install shadowsocks\\n\\nsudo mkdir /etc/shadowsocks\\n\\necho '{\\"server\\":\\"0.0.0.0\\",\\"server_port\\":12345,\\"local_address\\": \\"127.0.0.1\\",\\"local_port\\":1080,\\"password\\":\\"yourpassword\\", \\"timeout\\":1200,\\"method\\":\\"aes-256-cfb\\",\\"fast_open\\": true,\\"workers\\":3}' &gt;&gt; /etc/shadowsocks/shadowsocks.json\\n\\nssserver -c /etc/shadowsocks/shadowsocks.json -d restart\\nEOF\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}`);export{s as data};
