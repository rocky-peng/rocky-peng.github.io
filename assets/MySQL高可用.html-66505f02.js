import{_ as s,$ as d,a0 as h,a1 as l,a2 as e,a3 as t,a4 as o,a5 as i,w as r}from"./framework-b3a0f150.js";const u={},c=i('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),f=l("p",null,[l("strong",null,"半同步复制")],-1),p=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),E=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),m={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},B=l("p",null,[l("strong",null,"组复制（MGR）")],-1),b=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),g=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),A={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},x=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),k=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),D=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),M=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),L=l("li",null,"K8S+MGR",-1),S=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),C={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},z={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},R=i('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),v=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),G=l("hr",null,null,-1),N=l("hr",null,null,-1),U=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：遇到你之前，我的世界是黑白的，遇见你之后 哇靠 全黑了。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=11323c61-8166-49b5-93d2-4b62f924ea3c",alt:"",loading:"lazy"})])],-1);function j(P,V){const a=r("ExternalLinkIcon"),n=r("RouterLink");return d(),h("div",null,[c,l("ol",null,[_,l("li",null,[f,p,E,l("p",null,[e("扩展阅读："),l("a",m,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(a)])])]),l("li",null,[B,b,g,l("p",null,[e("扩展阅读："),l("a",A,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",y,[e("https://zhuanlan.zhihu.com/p/567939774"),t(a)])])])]),x,l("ol",null,[k,D,M,L,S,l("li",null,[l("a",C,[e("MySQL InnoDB Cluster"),t(a)])])]),l("p",null,[e("扩展阅读："),l("a",F,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",Q,[e("k8s安装MySQL MGR集群"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",w,[e("https://helm.sh/zh/"),t(a)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",q,[e("RadonDB"),t(a)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",z,[e("美团数据库高可用架构的演进与设想"),t(a)])]),R,l("ul",null,[l("li",null,[t(n,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[e("记一次内存泄漏")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[t(n,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[t(n,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[t(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[e("Paxos算法")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[e("gperftools")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[t(n,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:o(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[e("SQL优化")]),_:1})]),l("li",null,[t(n,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[e("BBR加速")]),_:1})])]),v,G,N,U])}const I=s(u,[["render",j],["__file","MySQL高可用.html.vue"]]);export{I as default};
