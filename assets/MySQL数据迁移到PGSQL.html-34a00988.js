const e=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Git笔记 JVM垃圾收集器 KVM 虚拟机安装 Btrace入门 如何安装Google BBR Hadoop 一 index方法压力测试记录 制作KVM ES镜像文件 推荐几个适用小工具 多台centos服务器，文件互相备份 JetBrains-License-Server ES杂项","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Git笔记 JVM垃圾收集器 KVM 虚拟机安装 Btrace入门 如何安装Google BBR Hadoop 一 index方法压力测试记录 制作KVM ES镜像文件 推荐几个适用小工具 多台centos服务器，文件互相备份 JetBrains-License-Server ES杂项"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-05T15:15:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-05T15:15:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-05T15:15:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1725549337000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":52},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.32,"words":396},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Git笔记</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html\\" target=\\"blank\\">JVM垃圾收集器</a></li>\\n<li><a href=\\"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html\\" target=\\"blank\\">KVM 虚拟机安装</a></li>\\n<li><a href=\\"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html\\" target=\\"blank\\">Btrace入门</a></li>\\n<li><a href=\\"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html\\" target=\\"blank\\">如何安装Google BBR</a></li>\\n<li><a href=\\"/other/Hadoop%20%E4%B8%80.html\\" target=\\"blank\\">Hadoop 一</a></li>\\n<li><a href=\\"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">index方法压力测试记录</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html\\" target=\\"blank\\">制作KVM ES镜像文件</a></li>\\n<li><a href=\\"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">推荐几个适用小工具</a></li>\\n<li><a href=\\"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">多台centos服务器，文件互相备份</a></li>\\n<li><a href=\\"/other/JetBrains-License-Server.html\\" target=\\"blank\\">JetBrains-License-Server</a></li>\\n<li><a href=\\"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">ES杂项</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
