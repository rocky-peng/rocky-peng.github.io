import{t as h}from"./array-2ff2c7a6-ffeda358.js";import{q as y,P as i}from"./path-428ebac9-3140eca4.js";import{D as d}from"./mermaid.esm.min-91aa3e95.js";function v(t){return t[0]}function x(t){return t[1]}function q(t,e){var g=i(!0),f=null,l=d,o=null,s=y(r);t=typeof t=="function"?t:t===void 0?v:i(t),e=typeof e=="function"?e:e===void 0?x:i(e);function r(n){var u,p=(n=h(n)).length,m,c=!1,a;for(f==null&&(o=l(a=s())),u=0;u<=p;++u)!(u<p&&g(m=n[u],u,n))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+t(m,u,n),+e(m,u,n));if(a)return o=null,a+""||null}return r.x=function(n){return arguments.length?(t=typeof n=="function"?n:i(+n),r):t},r.y=function(n){return arguments.length?(e=typeof n=="function"?n:i(+n),r):e},r.defined=function(n){return arguments.length?(g=typeof n=="function"?n:i(!!n),r):g},r.curve=function(n){return arguments.length?(l=n,f!=null&&(o=l(f)),r):l},r.context=function(n){return arguments.length?(n==null?f=o=null:o=l(f=n),r):f},r}export{q as P};
