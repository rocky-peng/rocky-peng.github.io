import{_ as s,$ as h,a0 as d,a1 as l,a2 as e,a3 as t,a4 as a,a5 as r,w as i}from"./framework-b3a0f150.js";const u={},c=r('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),p=l("p",null,[l("strong",null,"半同步复制")],-1),f=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),m=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),E={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},g=l("p",null,[l("strong",null,"组复制（MGR）")],-1),A=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),b=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),B={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},k=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),x=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),M=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),w=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),C=l("li",null,"K8S+MGR",-1),S=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),v={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},R={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},G=r('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),F=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),N=l("hr",null,null,-1),P=l("hr",null,null,-1),Q=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：钥匙圈是非常实用的小工具，它可以让你，一次把所有钥匙都丢光。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/7095765/pexels-photo-7095765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Black and white photo of a symmetrical modern building in urban Japan.",loading:"lazy"})])],-1);function U(V,j){const o=i("ExternalLinkIcon"),n=i("RouterLink");return h(),d("div",null,[c,l("ol",null,[_,l("li",null,[p,f,m,l("p",null,[e("扩展阅读："),l("a",E,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(o)])])]),l("li",null,[g,A,b,l("p",null,[e("扩展阅读："),l("a",B,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",y,[e("https://zhuanlan.zhihu.com/p/567939774"),t(o)])])])]),k,l("ol",null,[x,M,w,C,S,l("li",null,[l("a",v,[e("MySQL InnoDB Cluster"),t(o)])])]),l("p",null,[e("扩展阅读："),l("a",z,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",D,[e("k8s安装MySQL MGR集群"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",q,[e("https://helm.sh/zh/"),t(o)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",L,[e("RadonDB"),t(o)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",R,[e("美团数据库高可用架构的演进与设想"),t(o)])]),G,l("ul",null,[l("li",null,[t(n,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),l("li",null,[t(n,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:a(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Git笔记")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[e("KVM 虚拟机安装")]),_:1})]),l("li",null,[t(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[e("Censys搜索引擎学习")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[e("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("乱七八糟的笔记")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[e("kafka")]),_:1})]),l("li",null,[t(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[e("Docker笔记")]),_:1})]),l("li",null,[t(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:a(()=>[e("前后端常用技术")]),_:1})]),l("li",null,[t(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[e("K8S常用命令")]),_:1})])]),F,N,P,Q])}const H=s(u,[["render",U],["__file","MySQL高可用.html.vue"]]);export{H as default};
