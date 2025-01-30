import{_ as s,$ as h,a0 as d,a1 as l,a2 as e,a3 as t,a4 as o,a5 as i,w as r}from"./framework-b3a0f150.js";const c={},u=i('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),p=l("p",null,[l("strong",null,"半同步复制")],-1),m=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),f=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),g={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},b=l("p",null,[l("strong",null,"组复制（MGR）")],-1),E=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),y=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),B={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},A=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),k=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),x=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),M=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),L=l("li",null,"K8S+MGR",-1),C=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),w={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},G={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},N=i('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),R=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),v=l("hr",null,null,-1),F=l("hr",null,null,-1),P=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：什么都在涨价，就是人越来越贱。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e0f620c8-5e58-4fde-9746-ab5e46e3343b",alt:"",loading:"lazy"})])],-1);function U(I,j){const a=r("ExternalLinkIcon"),n=r("RouterLink");return h(),d("div",null,[u,l("ol",null,[_,l("li",null,[p,m,f,l("p",null,[e("扩展阅读："),l("a",g,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(a)])])]),l("li",null,[b,E,y,l("p",null,[e("扩展阅读："),l("a",B,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",S,[e("https://zhuanlan.zhihu.com/p/567939774"),t(a)])])])]),A,l("ol",null,[k,x,M,L,C,l("li",null,[l("a",w,[e("MySQL InnoDB Cluster"),t(a)])])]),l("p",null,[e("扩展阅读："),l("a",z,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",D,[e("k8s安装MySQL MGR集群"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",Q,[e("https://helm.sh/zh/"),t(a)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",q,[e("RadonDB"),t(a)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",G,[e("美团数据库高可用架构的演进与设想"),t(a)])]),N,l("ul",null,[l("li",null,[t(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[e("Docker进行资源隔离")]),_:1})]),l("li",null,[t(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[t(n,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[e("JetBrains IDE 全破解")]),_:1})]),l("li",null,[t(n,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("PostgreSQL定时备份")]),_:1})]),l("li",null,[t(n,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[e("K8S 无感发布")]),_:1})]),l("li",null,[t(n,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[e("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[t(n,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:o(()=>[e("如何安装Google BBR")]),_:1})]),l("li",null,[t(n,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[e("MAC CMS")]),_:1})]),l("li",null,[t(n,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[e("Paxos算法")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[e("MySQL索引")]),_:1})]),l("li",null,[t(n,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[e("WebSocket SpringBoot Demo")]),_:1})]),l("li",null,[t(n,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("PostgreSQL高可用")]),_:1})])]),R,v,F,P])}const V=s(c,[["render",U],["__file","MySQL高可用.html.vue"]]);export{V as default};
