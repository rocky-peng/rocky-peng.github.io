import{_ as s,$ as d,a0 as h,a1 as l,a2 as e,a3 as t,a4 as o,a5 as r,w as i}from"./framework-b3a0f150.js";const c={},u=r('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),p=l("p",null,[l("strong",null,"半同步复制")],-1),f=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),m=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),E={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},B=l("p",null,[l("strong",null,"组复制（MGR）")],-1),b=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),g=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),y={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},x=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),k=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),M=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),D=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),S=l("li",null,"K8S+MGR",-1),w=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),L={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},R={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},Q=r('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),I=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),j=l("hr",null,null,-1),F=l("hr",null,null,-1),G=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：看你玉树临风，一表人才人见人爱，一定是人渣中的极品。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9baff623-9fe3-4640-8942-dd577deaf1d6",alt:"",loading:"lazy"})])],-1);function N(U,V){const a=i("ExternalLinkIcon"),n=i("RouterLink");return d(),h("div",null,[u,l("ol",null,[_,l("li",null,[p,f,m,l("p",null,[e("扩展阅读："),l("a",E,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(a)])])]),l("li",null,[B,b,g,l("p",null,[e("扩展阅读："),l("a",y,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",A,[e("https://zhuanlan.zhihu.com/p/567939774"),t(a)])])])]),x,l("ol",null,[k,M,D,S,w,l("li",null,[l("a",L,[e("MySQL InnoDB Cluster"),t(a)])])]),l("p",null,[e("扩展阅读："),l("a",C,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",q,[e("k8s安装MySQL MGR集群"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",v,[e("https://helm.sh/zh/"),t(a)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",z,[e("RadonDB"),t(a)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",R,[e("美团数据库高可用架构的演进与设想"),t(a)])]),Q,l("ul",null,[l("li",null,[t(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:o(()=>[e("常见问题")]),_:1})]),l("li",null,[t(n,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[e("JetBrains IDE 全破解")]),_:1})]),l("li",null,[t(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[e("Censys搜索引擎学习")]),_:1})]),l("li",null,[t(n,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[e("MAC CMS")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[e("index方法压力测试记录")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("MySQL三大日志")]),_:1})]),l("li",null,[t(n,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[e("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("ES杂项")]),_:1})]),l("li",null,[t(n,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("ReentrantLock源码解读")]),_:1})]),l("li",null,[t(n,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),I,j,F,G])}const J=s(c,[["render",N],["__file","MySQL高可用.html.vue"]]);export{J as default};
