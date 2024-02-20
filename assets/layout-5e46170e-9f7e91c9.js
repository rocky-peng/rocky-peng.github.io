import{S as be,v as P,w as f,Z as y,e as ze,Y as _,D as ye,C as xe,P as Ue,a as b,E as p,H as E,X as F,j as Xe,B as ke,I as Ee,b as Je,c as C,J as O,U as We,T as Ze,d as He}from"./graph-940f1512-1efd335c.js";import{u as Ne,aa as G,a2 as _e,a8 as Qe,ab as Ke,ac as er,t as Z,ad as J,g as Ie,p as H,a5 as rr,ae as tr,af as nr,v as Y,m as or,P as Te,W as ir,i as ur}from"./mermaid.esm.min-00242231.js";var ar=/\s/;function dr(e){for(var r=e.length;r--&&ar.test(e.charAt(r)););return r}var cr=/^\s+/;function fr(e){return e&&e.slice(0,dr(e)+1).replace(cr,"")}var ue=0/0,sr=/^[-+]0x[0-9a-f]+$/i,vr=/^0b[01]+$/i,gr=/^0o[0-7]+$/i,hr=parseInt;function lr(e){if(typeof e=="number")return e;if(O(e))return ue;if(Y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=fr(e);var t=vr.test(e);return t||gr.test(e)?hr(e.slice(2),t?2:8):sr.test(e)?ue:+e}var ae=1/0,pr=17976931348623157e292;function S(e){if(!e)return e===0?e:0;if(e=lr(e),e===ae||e===-ae){var r=e<0?-1:1;return r*pr}return e===e?e:0}function mr(e){var r=S(e),t=r%1;return r===r?t?r-t:r:0}function I(e){var r=e==null?0:e.length;return r?be(e,1):[]}function wr(e){return Ke(er(e,void 0,I),e+"")}var br=1,yr=4;function xr(e){return Xe(e,br|yr)}var kr=function(){return tr.Date.now()};const de=kr;var Re=Object.prototype,Er=Re.hasOwnProperty,Nr=Ne(function(e,r){e=Object(e);var t=-1,n=r.length,o=n>2?r[2]:void 0;for(o&&G(r[0],r[1],o)&&(n=1);++t<n;)for(var u=r[t],i=_e(u),a=-1,d=i.length;++a<d;){var c=i[a],s=e[c];(s===void 0||Qe(s,Re[c])&&!Er.call(e,c))&&(e[c]=u[c])}return e});const _r=Nr;function j(e){var r=e==null?0:e.length;return r?e[r-1]:void 0}function Ir(e){return function(r,t,n){var o=Object(r);if(!Ie(r)){var u=_(t);r=Ze(r),t=function(a){return u(o[a],a,o)}}var i=e(r,t,n);return i>-1?o[u?r[i]:i]:void 0}}var Tr=Math.max;function Rr(e,r,t){var n=e==null?0:e.length;if(!n)return-1;var o=t==null?0:mr(t);return o<0&&(o=Tr(n+o,0)),He(e,_(r),o)}var Mr=Ir(Rr);const Q=Mr;function Me(e,r){var t=-1,n=Ie(e)?Array(e.length):[];return ze(e,function(o,u,i){n[++t]=r(o,u,i)}),n}function m(e,r){var t=H(e)?P:Me;return t(e,_(r))}function $r(e,r){return e==null?e:ir(e,ke(r),_e)}function Cr(e,r){return e&&ye(e,ke(r))}function Lr(e,r){return e>r}function $e(e,r){return e<r}function V(e,r){var t={};return r=_(r),ye(e,function(n,o,u){nr(t,o,r(n,o,u))}),t}function K(e,r,t){for(var n=-1,o=e.length;++n<o;){var u=e[n],i=r(u);if(i!=null&&(a===void 0?i===i&&!O(i):t(i,a)))var a=i,d=u}return d}function x(e){return e&&e.length?K(e,Z,Lr):void 0}function M(e){return e&&e.length?K(e,Z,$e):void 0}function ee(e,r){return e&&e.length?K(e,_(r),$e):void 0}function Pr(e,r,t,n){if(!Y(e))return e;r=Ee(r,e);for(var o=-1,u=r.length,i=u-1,a=e;a!=null&&++o<u;){var d=We(r[o]),c=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=i){var s=a[d];c=n?n(s,d,a):void 0,c===void 0&&(c=Y(s)?s:or(r[o+1])?[]:{})}Te(a,d,c),a=a[d]}return e}function Sr(e,r,t){for(var n=-1,o=r.length,u={};++n<o;){var i=r[n],a=xe(e,i);t(a,i)&&Pr(u,Ee(i,e),a)}return u}function Or(e,r){var t=e.length;for(e.sort(r);t--;)e[t]=e[t].value;return e}function Gr(e,r){if(e!==r){var t=e!==void 0,n=e===null,o=e===e,u=O(e),i=r!==void 0,a=r===null,d=r===r,c=O(r);if(!a&&!c&&!u&&e>r||u&&i&&d&&!a&&!c||n&&i&&d||!t&&d||!o)return 1;if(!n&&!u&&!c&&e<r||c&&t&&o&&!n&&!u||a&&t&&o||!i&&o||!d)return-1}return 0}function Yr(e,r,t){for(var n=-1,o=e.criteria,u=r.criteria,i=o.length,a=t.length;++n<i;){var d=Gr(o[n],u[n]);if(d){if(n>=a)return d;var c=t[n];return d*(c=="desc"?-1:1)}}return e.index-r.index}function jr(e,r,t){r.length?r=P(r,function(u){return H(u)?function(i){return xe(i,u.length===1?u[0]:u)}:u}):r=[Z];var n=-1;r=P(r,rr(_));var o=Me(e,function(u,i,a){var d=P(r,function(c){return c(u)});return{criteria:d,index:++n,value:u}});return Or(o,function(u,i){return Yr(u,i,t)})}function Br(e,r){return Sr(e,r,function(t,n){return Je(e,n)})}var Fr=wr(function(e,r){return e==null?{}:Br(e,r)});const B=Fr;var Vr=Math.ceil,qr=Math.max;function Dr(e,r,t,n){for(var o=-1,u=qr(Vr((r-e)/(t||1)),0),i=Array(u);u--;)i[n?u:++o]=e,e+=t;return i}function Ar(e){return function(r,t,n){return n&&typeof n!="number"&&G(r,t,n)&&(t=n=void 0),r=S(r),t===void 0?(t=r,r=0):t=S(t),n=n===void 0?r<t?1:-1:S(n),Dr(r,t,n,e)}}var zr=Ar();const N=zr;var Ur=Ne(function(e,r){if(e==null)return[];var t=r.length;return t>1&&G(e,r[0],r[1])?r=[]:t>2&&G(r[0],r[1],r[2])&&(r=[r[0]]),jr(e,be(r,1),[])});const L=Ur;var Xr=0;function re(e){var r=++Xr;return Ue(e)+r}function Jr(e,r,t){for(var n=-1,o=e.length,u=r.length,i={};++n<o;){var a=n<u?r[n]:void 0;t(i,e[n],a)}return i}function Wr(e,r){return Jr(e||[],r||[],Te)}class Zr{constructor(){var r={};r._next=r._prev=r,this._sentinel=r}dequeue(){var r=this._sentinel,t=r._prev;if(t!==r)return ce(t),t}enqueue(r){var t=this._sentinel;r._prev&&r._next&&ce(r),r._next=t._next,t._next._prev=r,t._next=r,r._prev=t}toString(){for(var r=[],t=this._sentinel,n=t._prev;n!==t;)r.push(JSON.stringify(n,Hr)),n=n._prev;return"["+r.join(", ")+"]"}}function ce(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function Hr(e,r){if(e!=="_next"&&e!=="_prev")return r}var Qr=ur(1);function Kr(e,r){if(e.nodeCount()<=1)return[];var t=rt(e,r||Qr),n=et(t.graph,t.buckets,t.zeroIdx);return I(m(n,function(o){return e.outEdges(o.v,o.w)}))}function et(e,r,t){for(var n=[],o=r[r.length-1],u=r[0],i;e.nodeCount();){for(;i=u.dequeue();)D(e,r,t,i);for(;i=o.dequeue();)D(e,r,t,i);if(e.nodeCount()){for(var a=r.length-2;a>0;--a)if(i=r[a].dequeue(),i){n=n.concat(D(e,r,t,i,!0));break}}}return n}function D(e,r,t,n,o){var u=o?[]:void 0;return f(e.inEdges(n.v),function(i){var a=e.edge(i),d=e.node(i.v);o&&u.push({v:i.v,w:i.w}),d.out-=a,W(r,t,d)}),f(e.outEdges(n.v),function(i){var a=e.edge(i),d=i.w,c=e.node(d);c.in-=a,W(r,t,c)}),e.removeNode(n.v),u}function rt(e,r){var t=new y,n=0,o=0;f(e.nodes(),function(a){t.setNode(a,{v:a,in:0,out:0})}),f(e.edges(),function(a){var d=t.edge(a.v,a.w)||0,c=r(a),s=d+c;t.setEdge(a.v,a.w,s),o=Math.max(o,t.node(a.v).out+=c),n=Math.max(n,t.node(a.w).in+=c)});var u=N(o+n+3).map(function(){return new Zr}),i=n+1;return f(t.nodes(),function(a){W(u,i,t.node(a))}),{graph:t,buckets:u,zeroIdx:i}}function W(e,r,t){t.out?t.in?e[t.out-t.in+r].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}function tt(e){var r=e.graph().acyclicer==="greedy"?Kr(e,t(e)):nt(e);f(r,function(n){var o=e.edge(n);e.removeEdge(n),o.forwardName=n.name,o.reversed=!0,e.setEdge(n.w,n.v,o,re("rev"))});function t(n){return function(o){return n.edge(o).weight}}}function nt(e){var r=[],t={},n={};function o(u){p(n,u)||(n[u]=!0,t[u]=!0,f(e.outEdges(u),function(i){p(t,i.w)?r.push(i):o(i.w)}),delete t[u])}return f(e.nodes(),o),r}function ot(e){f(e.edges(),function(r){var t=e.edge(r);if(t.reversed){e.removeEdge(r);var n=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(r.w,r.v,t,n)}})}function T(e,r,t,n){var o;do o=re(n);while(e.hasNode(o));return t.dummy=r,e.setNode(o,t),o}function it(e){var r=new y().setGraph(e.graph());return f(e.nodes(),function(t){r.setNode(t,e.node(t))}),f(e.edges(),function(t){var n=r.edge(t.v,t.w)||{weight:0,minlen:1},o=e.edge(t);r.setEdge(t.v,t.w,{weight:n.weight+o.weight,minlen:Math.max(n.minlen,o.minlen)})}),r}function Ce(e){var r=new y({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(t){e.children(t).length||r.setNode(t,e.node(t))}),f(e.edges(),function(t){r.setEdge(t,e.edge(t))}),r}function fe(e,r){var t=e.x,n=e.y,o=r.x-t,u=r.y-n,i=e.width/2,a=e.height/2;if(!o&&!u)throw new Error("Not possible to find intersection inside of the rectangle");var d,c;return Math.abs(u)*i>Math.abs(o)*a?(u<0&&(a=-a),d=a*o/u,c=a):(o<0&&(i=-i),d=i,c=i*u/o),{x:t+d,y:n+c}}function q(e){var r=m(N(Le(e)+1),function(){return[]});return f(e.nodes(),function(t){var n=e.node(t),o=n.rank;b(o)||(r[o][n.order]=t)}),r}function ut(e){var r=M(m(e.nodes(),function(t){return e.node(t).rank}));f(e.nodes(),function(t){var n=e.node(t);p(n,"rank")&&(n.rank-=r)})}function at(e){var r=M(m(e.nodes(),function(u){return e.node(u).rank})),t=[];f(e.nodes(),function(u){var i=e.node(u).rank-r;t[i]||(t[i]=[]),t[i].push(u)});var n=0,o=e.graph().nodeRankFactor;f(t,function(u,i){b(u)&&i%o!==0?--n:n&&f(u,function(a){e.node(a).rank+=n})})}function se(e,r,t,n){var o={width:0,height:0};return arguments.length>=4&&(o.rank=t,o.order=n),T(e,"border",o,r)}function Le(e){return x(m(e.nodes(),function(r){var t=e.node(r).rank;if(!b(t))return t}))}function dt(e,r){var t={lhs:[],rhs:[]};return f(e,function(n){r(n)?t.lhs.push(n):t.rhs.push(n)}),t}function ct(e,r){var t=de();try{return r()}finally{console.log(e+" time: "+(de()-t)+"ms")}}function ft(e,r){return r()}function st(e){function r(t){var n=e.children(t),o=e.node(t);if(n.length&&f(n,r),p(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var u=o.minRank,i=o.maxRank+1;u<i;++u)ve(e,"borderLeft","_bl",t,o,u),ve(e,"borderRight","_br",t,o,u)}}f(e.children(),r)}function ve(e,r,t,n,o,u){var i={width:0,height:0,rank:u,borderType:r},a=o[r][u-1],d=T(e,"border",i,t);o[r][u]=d,e.setParent(d,n),a&&e.setEdge(a,d,{weight:1})}function vt(e){var r=e.graph().rankdir.toLowerCase();(r==="lr"||r==="rl")&&Pe(e)}function gt(e){var r=e.graph().rankdir.toLowerCase();(r==="bt"||r==="rl")&&ht(e),(r==="lr"||r==="rl")&&(lt(e),Pe(e))}function Pe(e){f(e.nodes(),function(r){ge(e.node(r))}),f(e.edges(),function(r){ge(e.edge(r))})}function ge(e){var r=e.width;e.width=e.height,e.height=r}function ht(e){f(e.nodes(),function(r){A(e.node(r))}),f(e.edges(),function(r){var t=e.edge(r);f(t.points,A),p(t,"y")&&A(t)})}function A(e){e.y=-e.y}function lt(e){f(e.nodes(),function(r){z(e.node(r))}),f(e.edges(),function(r){var t=e.edge(r);f(t.points,z),p(t,"x")&&z(t)})}function z(e){var r=e.x;e.x=e.y,e.y=r}function pt(e){e.graph().dummyChains=[],f(e.edges(),function(r){mt(e,r)})}function mt(e,r){var t=r.v,n=e.node(t).rank,o=r.w,u=e.node(o).rank,i=r.name,a=e.edge(r),d=a.labelRank;if(u!==n+1){e.removeEdge(r);var c,s,v;for(v=0,++n;n<u;++v,++n)a.points=[],s={width:0,height:0,edgeLabel:a,edgeObj:r,rank:n},c=T(e,"edge",s,"_d"),n===d&&(s.width=a.width,s.height=a.height,s.dummy="edge-label",s.labelpos=a.labelpos),e.setEdge(t,c,{weight:a.weight},i),v===0&&e.graph().dummyChains.push(c),t=c;e.setEdge(t,o,{weight:a.weight},i)}}function wt(e){f(e.graph().dummyChains,function(r){var t=e.node(r),n=t.edgeLabel,o;for(e.setEdge(t.edgeObj,n);t.dummy;)o=e.successors(r)[0],e.removeNode(r),n.points.push({x:t.x,y:t.y}),t.dummy==="edge-label"&&(n.x=t.x,n.y=t.y,n.width=t.width,n.height=t.height),r=o,t=e.node(r)})}function te(e){var r={};function t(n){var o=e.node(n);if(p(r,n))return o.rank;r[n]=!0;var u=M(m(e.outEdges(n),function(i){return t(i.w)-e.edge(i).minlen}));return(u===Number.POSITIVE_INFINITY||u===void 0||u===null)&&(u=0),o.rank=u}f(e.sources(),t)}function $(e,r){return e.node(r.w).rank-e.node(r.v).rank-e.edge(r).minlen}function Se(e){var r=new y({directed:!1}),t=e.nodes()[0],n=e.nodeCount();r.setNode(t,{});for(var o,u;bt(r,e)<n;)o=yt(r,e),u=r.hasNode(o.v)?$(e,o):-$(e,o),xt(r,e,u);return r}function bt(e,r){function t(n){f(r.nodeEdges(n),function(o){var u=o.v,i=n===u?o.w:u;!e.hasNode(i)&&!$(r,o)&&(e.setNode(i,{}),e.setEdge(n,i,{}),t(i))})}return f(e.nodes(),t),e.nodeCount()}function yt(e,r){return ee(r.edges(),function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return $(r,t)})}function xt(e,r,t){f(e.nodes(),function(n){r.node(n).rank+=t})}function Oe(e,r,t){H(r)||(r=[r]);var n=(e.isDirected()?e.successors:e.neighbors).bind(e),o=[],u={};return f(r,function(i){if(!e.hasNode(i))throw new Error("Graph does not have node: "+i);Ge(e,i,t==="post",u,n,o)}),o}function Ge(e,r,t,n,o,u){p(n,r)||(n[r]=!0,t||u.push(r),f(o(r),function(i){Ge(e,i,t,n,o,u)}),t&&u.push(r))}function kt(e,r){return Oe(e,r,"post")}function Et(e,r){return Oe(e,r,"pre")}k.initLowLimValues=oe;k.initCutValues=ne;k.calcCutValue=Ye;k.leaveEdge=Be;k.enterEdge=Fe;k.exchangeEdges=Ve;function k(e){e=it(e),te(e);var r=Se(e);oe(r),ne(r,e);for(var t,n;t=Be(r);)n=Fe(r,e,t),Ve(r,e,t,n)}function ne(e,r){var t=kt(e,e.nodes());t=t.slice(0,t.length-1),f(t,function(n){Nt(e,r,n)})}function Nt(e,r,t){var n=e.node(t),o=n.parent;e.edge(t,o).cutvalue=Ye(e,r,t)}function Ye(e,r,t){var n=e.node(t),o=n.parent,u=!0,i=r.edge(t,o),a=0;return i||(u=!1,i=r.edge(o,t)),a=i.weight,f(r.nodeEdges(t),function(d){var c=d.v===t,s=c?d.w:d.v;if(s!==o){var v=c===u,g=r.edge(d).weight;if(a+=v?g:-g,It(e,t,s)){var h=e.edge(t,s).cutvalue;a+=v?-h:h}}}),a}function oe(e,r){arguments.length<2&&(r=e.nodes()[0]),je(e,{},1,r)}function je(e,r,t,n,o){var u=t,i=e.node(n);return r[n]=!0,f(e.neighbors(n),function(a){p(r,a)||(t=je(e,r,t,a,n))}),i.low=u,i.lim=t++,o?i.parent=o:delete i.parent,t}function Be(e){return Q(e.edges(),function(r){return e.edge(r).cutvalue<0})}function Fe(e,r,t){var n=t.v,o=t.w;r.hasEdge(n,o)||(n=t.w,o=t.v);var u=e.node(n),i=e.node(o),a=u,d=!1;u.lim>i.lim&&(a=i,d=!0);var c=C(r.edges(),function(s){return d===he(e,e.node(s.v),a)&&d!==he(e,e.node(s.w),a)});return ee(c,function(s){return $(r,s)})}function Ve(e,r,t,n){var o=t.v,u=t.w;e.removeEdge(o,u),e.setEdge(n.v,n.w,{}),oe(e),ne(e,r),_t(e,r)}function _t(e,r){var t=Q(e.nodes(),function(o){return!r.node(o).parent}),n=Et(e,t);n=n.slice(1),f(n,function(o){var u=e.node(o).parent,i=r.edge(o,u),a=!1;i||(i=r.edge(u,o),a=!0),r.node(o).rank=r.node(u).rank+(a?i.minlen:-i.minlen)})}function It(e,r,t){return e.hasEdge(r,t)}function he(e,r,t){return t.low<=r.lim&&r.lim<=t.lim}function Tt(e){switch(e.graph().ranker){case"network-simplex":le(e);break;case"tight-tree":Mt(e);break;case"longest-path":Rt(e);break;default:le(e)}}var Rt=te;function Mt(e){te(e),Se(e)}function le(e){k(e)}function $t(e){var r=T(e,"root",{},"_root"),t=Ct(e),n=x(E(t))-1,o=2*n+1;e.graph().nestingRoot=r,f(e.edges(),function(i){e.edge(i).minlen*=o});var u=Lt(e)+1;f(e.children(),function(i){qe(e,r,o,u,n,t,i)}),e.graph().nodeRankFactor=o}function qe(e,r,t,n,o,u,i){var a=e.children(i);if(!a.length){i!==r&&e.setEdge(r,i,{weight:0,minlen:t});return}var d=se(e,"_bt"),c=se(e,"_bb"),s=e.node(i);e.setParent(d,i),s.borderTop=d,e.setParent(c,i),s.borderBottom=c,f(a,function(v){qe(e,r,t,n,o,u,v);var g=e.node(v),h=g.borderTop?g.borderTop:v,l=g.borderBottom?g.borderBottom:v,w=g.borderTop?n:2*n,R=h!==l?1:o-u[i]+1;e.setEdge(d,h,{weight:w,minlen:R,nestingEdge:!0}),e.setEdge(l,c,{weight:w,minlen:R,nestingEdge:!0})}),e.parent(i)||e.setEdge(r,d,{weight:0,minlen:o+u[i]})}function Ct(e){var r={};function t(n,o){var u=e.children(n);u&&u.length&&f(u,function(i){t(i,o+1)}),r[n]=o}return f(e.children(),function(n){t(n,1)}),r}function Lt(e){return F(e.edges(),function(r,t){return r+e.edge(t).weight},0)}function Pt(e){var r=e.graph();e.removeNode(r.nestingRoot),delete r.nestingRoot,f(e.edges(),function(t){var n=e.edge(t);n.nestingEdge&&e.removeEdge(t)})}function St(e,r,t){var n={},o;f(t,function(u){for(var i=e.parent(u),a,d;i;){if(a=e.parent(i),a?(d=n[a],n[a]=i):(d=o,o=i),d&&d!==i){r.setEdge(d,i);return}i=a}})}function Ot(e,r,t){var n=Gt(e),o=new y({compound:!0}).setGraph({root:n}).setDefaultNodeLabel(function(u){return e.node(u)});return f(e.nodes(),function(u){var i=e.node(u),a=e.parent(u);(i.rank===r||i.minRank<=r&&r<=i.maxRank)&&(o.setNode(u),o.setParent(u,a||n),f(e[t](u),function(d){var c=d.v===u?d.w:d.v,s=o.edge(c,u),v=b(s)?0:s.weight;o.setEdge(c,u,{weight:e.edge(d).weight+v})}),p(i,"minRank")&&o.setNode(u,{borderLeft:i.borderLeft[r],borderRight:i.borderRight[r]}))}),o}function Gt(e){for(var r;e.hasNode(r=re("_root")););return r}function Yt(e,r){for(var t=0,n=1;n<r.length;++n)t+=jt(e,r[n-1],r[n]);return t}function jt(e,r,t){for(var n=Wr(t,m(t,function(c,s){return s})),o=I(m(r,function(c){return L(m(e.outEdges(c),function(s){return{pos:n[s.w],weight:e.edge(s).weight}}),"pos")})),u=1;u<t.length;)u<<=1;var i=2*u-1;u-=1;var a=m(new Array(i),function(){return 0}),d=0;return f(o.forEach(function(c){var s=c.pos+u;a[s]+=c.weight;for(var v=0;s>0;)s%2&&(v+=a[s+1]),s=s-1>>1,a[s]+=c.weight;d+=c.weight*v})),d}function Bt(e){var r={},t=C(e.nodes(),function(a){return!e.children(a).length}),n=x(m(t,function(a){return e.node(a).rank})),o=m(N(n+1),function(){return[]});function u(a){if(!p(r,a)){r[a]=!0;var d=e.node(a);o[d.rank].push(a),f(e.successors(a),u)}}var i=L(t,function(a){return e.node(a).rank});return f(i,u),o}function Ft(e,r){return m(r,function(t){var n=e.inEdges(t);if(n.length){var o=F(n,function(u,i){var a=e.edge(i),d=e.node(i.v);return{sum:u.sum+a.weight*d.order,weight:u.weight+a.weight}},{sum:0,weight:0});return{v:t,barycenter:o.sum/o.weight,weight:o.weight}}else return{v:t}})}function Vt(e,r){var t={};f(e,function(o,u){var i=t[o.v]={indegree:0,in:[],out:[],vs:[o.v],i:u};b(o.barycenter)||(i.barycenter=o.barycenter,i.weight=o.weight)}),f(r.edges(),function(o){var u=t[o.v],i=t[o.w];!b(u)&&!b(i)&&(i.indegree++,u.out.push(t[o.w]))});var n=C(t,function(o){return!o.indegree});return qt(n)}function qt(e){var r=[];function t(u){return function(i){i.merged||(b(i.barycenter)||b(u.barycenter)||i.barycenter>=u.barycenter)&&Dt(u,i)}}function n(u){return function(i){i.in.push(u),--i.indegree===0&&e.push(i)}}for(;e.length;){var o=e.pop();r.push(o),f(o.in.reverse(),t(o)),f(o.out,n(o))}return m(C(r,function(u){return!u.merged}),function(u){return B(u,["vs","i","barycenter","weight"])})}function Dt(e,r){var t=0,n=0;e.weight&&(t+=e.barycenter*e.weight,n+=e.weight),r.weight&&(t+=r.barycenter*r.weight,n+=r.weight),e.vs=r.vs.concat(e.vs),e.barycenter=t/n,e.weight=n,e.i=Math.min(r.i,e.i),r.merged=!0}function At(e,r){var t=dt(e,function(s){return p(s,"barycenter")}),n=t.lhs,o=L(t.rhs,function(s){return-s.i}),u=[],i=0,a=0,d=0;n.sort(zt(!!r)),d=pe(u,o,d),f(n,function(s){d+=s.vs.length,u.push(s.vs),i+=s.barycenter*s.weight,a+=s.weight,d=pe(u,o,d)});var c={vs:I(u)};return a&&(c.barycenter=i/a,c.weight=a),c}function pe(e,r,t){for(var n;r.length&&(n=j(r)).i<=t;)r.pop(),e.push(n.vs),t++;return t}function zt(e){return function(r,t){return r.barycenter<t.barycenter?-1:r.barycenter>t.barycenter?1:e?t.i-r.i:r.i-t.i}}function De(e,r,t,n){var o=e.children(r),u=e.node(r),i=u?u.borderLeft:void 0,a=u?u.borderRight:void 0,d={};i&&(o=C(o,function(l){return l!==i&&l!==a}));var c=Ft(e,o);f(c,function(l){if(e.children(l.v).length){var w=De(e,l.v,t,n);d[l.v]=w,p(w,"barycenter")&&Xt(l,w)}});var s=Vt(c,t);Ut(s,d);var v=At(s,n);if(i&&(v.vs=I([i,v.vs,a]),e.predecessors(i).length)){var g=e.node(e.predecessors(i)[0]),h=e.node(e.predecessors(a)[0]);p(v,"barycenter")||(v.barycenter=0,v.weight=0),v.barycenter=(v.barycenter*v.weight+g.order+h.order)/(v.weight+2),v.weight+=2}return v}function Ut(e,r){f(e,function(t){t.vs=I(t.vs.map(function(n){return r[n]?r[n].vs:n}))})}function Xt(e,r){b(e.barycenter)?(e.barycenter=r.barycenter,e.weight=r.weight):(e.barycenter=(e.barycenter*e.weight+r.barycenter*r.weight)/(e.weight+r.weight),e.weight+=r.weight)}function Jt(e){var r=Le(e),t=me(e,N(1,r+1),"inEdges"),n=me(e,N(r-1,-1,-1),"outEdges"),o=Bt(e);we(e,o);for(var u=Number.POSITIVE_INFINITY,i,a=0,d=0;d<4;++a,++d){Wt(a%2?t:n,a%4>=2),o=q(e);var c=Yt(e,o);c<u&&(d=0,i=xr(o),u=c)}we(e,i)}function me(e,r,t){return m(r,function(n){return Ot(e,n,t)})}function Wt(e,r){var t=new y;f(e,function(n){var o=n.graph().root,u=De(n,o,t,r);f(u.vs,function(i,a){n.node(i).order=a}),St(n,t,u.vs)})}function we(e,r){f(r,function(t){f(t,function(n,o){e.node(n).order=o})})}function Zt(e){var r=Qt(e);f(e.graph().dummyChains,function(t){for(var n=e.node(t),o=n.edgeObj,u=Ht(e,r,o.v,o.w),i=u.path,a=u.lca,d=0,c=i[d],s=!0;t!==o.w;){if(n=e.node(t),s){for(;(c=i[d])!==a&&e.node(c).maxRank<n.rank;)d++;c===a&&(s=!1)}if(!s){for(;d<i.length-1&&e.node(c=i[d+1]).minRank<=n.rank;)d++;c=i[d]}e.setParent(t,c),t=e.successors(t)[0]}})}function Ht(e,r,t,n){var o=[],u=[],i=Math.min(r[t].low,r[n].low),a=Math.max(r[t].lim,r[n].lim),d,c;d=t;do d=e.parent(d),o.push(d);while(d&&(r[d].low>i||a>r[d].lim));for(c=d,d=n;(d=e.parent(d))!==c;)u.push(d);return{path:o.concat(u.reverse()),lca:c}}function Qt(e){var r={},t=0;function n(o){var u=t;f(e.children(o),n),r[o]={low:u,lim:t++}}return f(e.children(),n),r}function Kt(e,r){var t={};function n(o,u){var i=0,a=0,d=o.length,c=j(u);return f(u,function(s,v){var g=rn(e,s),h=g?e.node(g).order:d;(g||s===c)&&(f(u.slice(a,v+1),function(l){f(e.predecessors(l),function(w){var R=e.node(w),ie=R.order;(ie<i||h<ie)&&!(R.dummy&&e.node(l).dummy)&&Ae(t,w,l)})}),a=v+1,i=h)}),u}return F(r,n),t}function en(e,r){var t={};function n(u,i,a,d,c){var s;f(N(i,a),function(v){s=u[v],e.node(s).dummy&&f(e.predecessors(s),function(g){var h=e.node(g);h.dummy&&(h.order<d||h.order>c)&&Ae(t,g,s)})})}function o(u,i){var a=-1,d,c=0;return f(i,function(s,v){if(e.node(s).dummy==="border"){var g=e.predecessors(s);g.length&&(d=e.node(g[0]).order,n(i,c,v,a,d),c=v,a=d)}n(i,c,i.length,d,u.length)}),i}return F(r,o),t}function rn(e,r){if(e.node(r).dummy)return Q(e.predecessors(r),function(t){return e.node(t).dummy})}function Ae(e,r,t){if(r>t){var n=r;r=t,t=n}var o=e[r];o||(e[r]=o={}),o[t]=!0}function tn(e,r,t){if(r>t){var n=r;r=t,t=n}return p(e[r],t)}function nn(e,r,t,n){var o={},u={},i={};return f(r,function(a){f(a,function(d,c){o[d]=d,u[d]=d,i[d]=c})}),f(r,function(a){var d=-1;f(a,function(c){var s=n(c);if(s.length){s=L(s,function(w){return i[w]});for(var v=(s.length-1)/2,g=Math.floor(v),h=Math.ceil(v);g<=h;++g){var l=s[g];u[c]===c&&d<i[l]&&!tn(t,c,l)&&(u[l]=c,u[c]=o[c]=o[l],d=i[l])}}})}),{root:o,align:u}}function on(e,r,t,n,o){var u={},i=un(e,r,t,o),a=o?"borderLeft":"borderRight";function d(v,g){for(var h=i.nodes(),l=h.pop(),w={};l;)w[l]?v(l):(w[l]=!0,h.push(l),h=h.concat(g(l))),l=h.pop()}function c(v){u[v]=i.inEdges(v).reduce(function(g,h){return Math.max(g,u[h.v]+i.edge(h))},0)}function s(v){var g=i.outEdges(v).reduce(function(l,w){return Math.min(l,u[w.w]-i.edge(w))},Number.POSITIVE_INFINITY),h=e.node(v);g!==Number.POSITIVE_INFINITY&&h.borderType!==a&&(u[v]=Math.max(u[v],g))}return d(c,i.predecessors.bind(i)),d(s,i.successors.bind(i)),f(n,function(v){u[v]=u[t[v]]}),u}function un(e,r,t,n){var o=new y,u=e.graph(),i=sn(u.nodesep,u.edgesep,n);return f(r,function(a){var d;f(a,function(c){var s=t[c];if(o.setNode(s),d){var v=t[d],g=o.edge(v,s);o.setEdge(v,s,Math.max(i(e,c,d),g||0))}d=c})}),o}function an(e,r){return ee(E(r),function(t){var n=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return $r(t,function(u,i){var a=vn(e,i)/2;n=Math.max(u+a,n),o=Math.min(u-a,o)}),n-o})}function dn(e,r){var t=E(r),n=M(t),o=x(t);f(["u","d"],function(u){f(["l","r"],function(i){var a=u+i,d=e[a],c;if(d!==r){var s=E(d);c=i==="l"?n-M(s):o-x(s),c&&(e[a]=V(d,function(v){return v+c}))}})})}function cn(e,r){return V(e.ul,function(t,n){if(r)return e[r.toLowerCase()][n];var o=L(m(e,n));return(o[1]+o[2])/2})}function fn(e){var r=q(e),t=J(Kt(e,r),en(e,r)),n={},o;f(["u","d"],function(i){o=i==="u"?r:E(r).reverse(),f(["l","r"],function(a){a==="r"&&(o=m(o,function(v){return E(v).reverse()}));var d=(i==="u"?e.predecessors:e.successors).bind(e),c=nn(e,o,t,d),s=on(e,o,c.root,c.align,a==="r");a==="r"&&(s=V(s,function(v){return-v})),n[i+a]=s})});var u=an(e,n);return dn(n,u),cn(n,e.graph().align)}function sn(e,r,t){return function(n,o,u){var i=n.node(o),a=n.node(u),d=0,c;if(d+=i.width/2,p(i,"labelpos"))switch(i.labelpos.toLowerCase()){case"l":c=-i.width/2;break;case"r":c=i.width/2;break}if(c&&(d+=t?c:-c),c=0,d+=(i.dummy?r:e)/2,d+=(a.dummy?r:e)/2,d+=a.width/2,p(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":c=a.width/2;break;case"r":c=-a.width/2;break}return c&&(d+=t?c:-c),c=0,d}}function vn(e,r){return e.node(r).width}function gn(e){e=Ce(e),hn(e),Cr(fn(e),function(r,t){e.node(t).x=r})}function hn(e){var r=q(e),t=e.graph().ranksep,n=0;f(r,function(o){var u=x(m(o,function(i){return e.node(i).height}));f(o,function(i){e.node(i).y=n+u/2}),n+=u+t})}function Fn(e,r){var t=r&&r.debugTiming?ct:ft;t("layout",function(){var n=t("  buildLayoutGraph",function(){return _n(e)});t("  runLayout",function(){ln(n,t)}),t("  updateInputGraph",function(){pn(e,n)})})}function ln(e,r){r("    makeSpaceForEdgeLabels",function(){In(e)}),r("    removeSelfEdges",function(){On(e)}),r("    acyclic",function(){tt(e)}),r("    nestingGraph.run",function(){$t(e)}),r("    rank",function(){Tt(Ce(e))}),r("    injectEdgeLabelProxies",function(){Tn(e)}),r("    removeEmptyRanks",function(){at(e)}),r("    nestingGraph.cleanup",function(){Pt(e)}),r("    normalizeRanks",function(){ut(e)}),r("    assignRankMinMax",function(){Rn(e)}),r("    removeEdgeLabelProxies",function(){Mn(e)}),r("    normalize.run",function(){pt(e)}),r("    parentDummyChains",function(){Zt(e)}),r("    addBorderSegments",function(){st(e)}),r("    order",function(){Jt(e)}),r("    insertSelfEdges",function(){Gn(e)}),r("    adjustCoordinateSystem",function(){vt(e)}),r("    position",function(){gn(e)}),r("    positionSelfEdges",function(){Yn(e)}),r("    removeBorderNodes",function(){Sn(e)}),r("    normalize.undo",function(){wt(e)}),r("    fixupEdgeLabelCoords",function(){Ln(e)}),r("    undoCoordinateSystem",function(){gt(e)}),r("    translateGraph",function(){$n(e)}),r("    assignNodeIntersects",function(){Cn(e)}),r("    reversePoints",function(){Pn(e)}),r("    acyclic.undo",function(){ot(e)})}function pn(e,r){f(e.nodes(),function(t){var n=e.node(t),o=r.node(t);n&&(n.x=o.x,n.y=o.y,r.children(t).length&&(n.width=o.width,n.height=o.height))}),f(e.edges(),function(t){var n=e.edge(t),o=r.edge(t);n.points=o.points,p(o,"x")&&(n.x=o.x,n.y=o.y)}),e.graph().width=r.graph().width,e.graph().height=r.graph().height}var mn=["nodesep","edgesep","ranksep","marginx","marginy"],wn={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},bn=["acyclicer","ranker","rankdir","align"],yn=["width","height"],xn={width:0,height:0},kn=["minlen","weight","width","height","labeloffset"],En={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Nn=["labelpos"];function _n(e){var r=new y({multigraph:!0,compound:!0}),t=X(e.graph());return r.setGraph(J({},wn,U(t,mn),B(t,bn))),f(e.nodes(),function(n){var o=X(e.node(n));r.setNode(n,_r(U(o,yn),xn)),r.setParent(n,e.parent(n))}),f(e.edges(),function(n){var o=X(e.edge(n));r.setEdge(n,J({},En,U(o,kn),B(o,Nn)))}),r}function In(e){var r=e.graph();r.ranksep/=2,f(e.edges(),function(t){var n=e.edge(t);n.minlen*=2,n.labelpos.toLowerCase()!=="c"&&(r.rankdir==="TB"||r.rankdir==="BT"?n.width+=n.labeloffset:n.height+=n.labeloffset)})}function Tn(e){f(e.edges(),function(r){var t=e.edge(r);if(t.width&&t.height){var n=e.node(r.v),o=e.node(r.w),u={rank:(o.rank-n.rank)/2+n.rank,e:r};T(e,"edge-proxy",u,"_ep")}})}function Rn(e){var r=0;f(e.nodes(),function(t){var n=e.node(t);n.borderTop&&(n.minRank=e.node(n.borderTop).rank,n.maxRank=e.node(n.borderBottom).rank,r=x(r,n.maxRank))}),e.graph().maxRank=r}function Mn(e){f(e.nodes(),function(r){var t=e.node(r);t.dummy==="edge-proxy"&&(e.edge(t.e).labelRank=t.rank,e.removeNode(r))})}function $n(e){var r=Number.POSITIVE_INFINITY,t=0,n=Number.POSITIVE_INFINITY,o=0,u=e.graph(),i=u.marginx||0,a=u.marginy||0;function d(c){var s=c.x,v=c.y,g=c.width,h=c.height;r=Math.min(r,s-g/2),t=Math.max(t,s+g/2),n=Math.min(n,v-h/2),o=Math.max(o,v+h/2)}f(e.nodes(),function(c){d(e.node(c))}),f(e.edges(),function(c){var s=e.edge(c);p(s,"x")&&d(s)}),r-=i,n-=a,f(e.nodes(),function(c){var s=e.node(c);s.x-=r,s.y-=n}),f(e.edges(),function(c){var s=e.edge(c);f(s.points,function(v){v.x-=r,v.y-=n}),p(s,"x")&&(s.x-=r),p(s,"y")&&(s.y-=n)}),u.width=t-r+i,u.height=o-n+a}function Cn(e){f(e.edges(),function(r){var t=e.edge(r),n=e.node(r.v),o=e.node(r.w),u,i;t.points?(u=t.points[0],i=t.points[t.points.length-1]):(t.points=[],u=o,i=n),t.points.unshift(fe(n,u)),t.points.push(fe(o,i))})}function Ln(e){f(e.edges(),function(r){var t=e.edge(r);if(p(t,"x"))switch((t.labelpos==="l"||t.labelpos==="r")&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset;break}})}function Pn(e){f(e.edges(),function(r){var t=e.edge(r);t.reversed&&t.points.reverse()})}function Sn(e){f(e.nodes(),function(r){if(e.children(r).length){var t=e.node(r),n=e.node(t.borderTop),o=e.node(t.borderBottom),u=e.node(j(t.borderLeft)),i=e.node(j(t.borderRight));t.width=Math.abs(i.x-u.x),t.height=Math.abs(o.y-n.y),t.x=u.x+t.width/2,t.y=n.y+t.height/2}}),f(e.nodes(),function(r){e.node(r).dummy==="border"&&e.removeNode(r)})}function On(e){f(e.edges(),function(r){if(r.v===r.w){var t=e.node(r.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:r,label:e.edge(r)}),e.removeEdge(r)}})}function Gn(e){var r=q(e);f(r,function(t){var n=0;f(t,function(o,u){var i=e.node(o);i.order=u+n,f(i.selfEdges,function(a){T(e,"selfedge",{width:a.label.width,height:a.label.height,rank:i.rank,order:u+ ++n,e:a.e,label:a.label},"_se")}),delete i.selfEdges})})}function Yn(e){f(e.nodes(),function(r){var t=e.node(r);if(t.dummy==="selfedge"){var n=e.node(t.e.v),o=n.x+n.width/2,u=n.y,i=t.x-o,a=n.height/2;e.setEdge(t.e,t.label),e.removeNode(r),t.label.points=[{x:o+2*i/3,y:u-a},{x:o+5*i/6,y:u-a},{x:o+i,y:u},{x:o+5*i/6,y:u+a},{x:o+2*i/3,y:u+a}],t.label.x=t.x,t.label.y=t.y}})}function U(e,r){return V(B(e,r),Number)}function X(e){var r={};return f(e,function(t,n){r[n.toLowerCase()]=t}),r}export{B as G,N,Fn as Y,_r as _,re as e,m};
