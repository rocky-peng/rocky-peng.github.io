import{L as G}from"./layout-61b0da4f-388282f4.js";import{b as L,A as g,c as P,X as _,I,_ as $,D as C,C as T,K as F,d as M,ag as D,ah as R,ai as U,aj as V,ak as X,m as K,al as W,am as Y}from"./mermaid.esm.min-3824ce45.js";import{x as Z}from"./index-8f0054e7-21d82dd8.js";function H(e){return typeof e=="string"?new D([document.querySelectorAll(e)],[document.documentElement]):new D([U(e)],R)}const J=(e,l)=>W.lang.round(Y.parse(e)[l]),Q=J;function pe(e,l){return!!e.children(l).length}function be(e){return E(e.v)+":"+E(e.w)+":"+E(e.name)}var ee=/:/g;function E(e){return e?String(e).replace(ee,"\\:"):""}function te(e,l){l&&e.attr("style",l)}function ue(e,l,c){l&&e.attr("class",l).attr("class",c+" "+e.attr("class"))}function we(e,l){var c=l.graph();if(X(c)){var o=c.transition;if(K(o))return o(e)}return e}function re(e,l){var c=e.append("foreignObject").attr("width","100000"),o=c.append("xhtml:div");o.attr("xmlns","http://www.w3.org/1999/xhtml");var i=l.label;switch(typeof i){case"function":o.insert(i);break;case"object":o.insert(function(){return i});break;default:o.html(i)}te(o,l.labelStyle),o.style("display","inline-block"),o.style("white-space","nowrap");var d=o.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}const j={},le=function(e){const l=Object.keys(e);for(const c of l)j[c]=e[c]},z=function(e,l,c,o,i,d){const b=o.select(`[id="${c}"]`);Object.keys(e).forEach(function(n){const r=e[n];let u="default";r.classes.length>0&&(u=r.classes.join(" ")),u=u+" flowchart-label";const h=L(r.styles);let y=r.text!==void 0?r.text:r.id,t;if(g.info("vertex",r,r.labelType),r.labelType==="markdown")g.info("vertex",r,r.labelType);else if(P(_().flowchart.htmlLabels)){const w={label:y.replace(/fa[blrs]?:fa-[\w-]+/g,S=>`<i class='${S.replace(":"," ")}'></i>`)};t=re(b,w).node(),t.parentNode.removeChild(t)}else{const w=i.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("style",h.labelStyle.replace("color:","fill:"));const S=y.split(I.lineBreakRegex);for(const m of S){const x=i.createElementNS("http://www.w3.org/2000/svg","tspan");x.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),x.setAttribute("dy","1em"),x.setAttribute("x","1"),x.textContent=m,w.appendChild(x)}t=w}let s=0,a="";switch(r.type){case"round":s=5,a="rect";break;case"square":a="rect";break;case"diamond":a="question";break;case"hexagon":a="hexagon";break;case"odd":a="rect_left_inv_arrow";break;case"lean_right":a="lean_right";break;case"lean_left":a="lean_left";break;case"trapezoid":a="trapezoid";break;case"inv_trapezoid":a="inv_trapezoid";break;case"odd_right":a="rect_left_inv_arrow";break;case"circle":a="circle";break;case"ellipse":a="ellipse";break;case"stadium":a="stadium";break;case"subroutine":a="subroutine";break;case"cylinder":a="cylinder";break;case"group":a="rect";break;case"doublecircle":a="doublecircle";break;default:a="rect"}l.setNode(r.id,{labelStyle:h.labelStyle,shape:a,labelText:y,labelType:r.labelType,rx:s,ry:s,class:u,style:h.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:_().flowchart.padding}),g.info("setNode",{labelStyle:h.labelStyle,labelType:r.labelType,shape:a,labelText:y,rx:s,ry:s,class:u,style:h.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:_().flowchart.padding})})},O=function(e,l,c){g.info("abc78 edges = ",e);let o=0,i={},d,b;if(e.defaultStyle!==void 0){const n=L(e.defaultStyle);d=n.style,b=n.labelStyle}e.forEach(function(n){o++;const r="L-"+n.start+"-"+n.end;i[r]===void 0?(i[r]=0,g.info("abc78 new entry",r,i[r])):(i[r]++,g.info("abc78 new entry",r,i[r]));let u=r+"-"+i[r];g.info("abc78 new link id to be used is",r,u,i[r]);const h="LS-"+n.start,y="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",a="";switch(n.stroke){case"normal":s="fill:none;",d!==void 0&&(s=d),b!==void 0&&(a=b),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){const w=L(n.style);s=w.style,a=w.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=a,n.interpolate!==void 0?t.curve=$(n.interpolate,C):e.defaultInterpolate!==void 0?t.curve=$(e.defaultInterpolate,C):t.curve=$(j.curve,C),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=n.text.replace(I.lineBreakRegex,`
`),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=u,t.classes="flowchart-link "+h+" "+y,l.setEdge(n.start,n.end,t,o)})},ae=function(e,l){return l.db.getClasses()},oe=async function(e,l,c,o){g.info("Drawing flowchart");let i=o.db.getDirection();i===void 0&&(i="TD");const{securityLevel:d,flowchart:b}=_(),n=b.nodeSpacing||50,r=b.rankSpacing||50;let u;d==="sandbox"&&(u=T("#i"+l));const h=d==="sandbox"?T(u.nodes()[0].contentDocument.body):T("body"),y=d==="sandbox"?u.nodes()[0].contentDocument:document,t=new G({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:r,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let s;const a=o.db.getSubGraphs();g.info("Subgraphs - ",a);for(let p=a.length-1;p>=0;p--)s=a[p],g.info("Subgraph - ",s),o.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);const w=o.db.getVertices(),S=o.db.getEdges();g.info("Edges",S);let m=0;for(m=a.length-1;m>=0;m--){s=a[m],H("cluster").append("text");for(let p=0;p<s.nodes.length;p++)g.info("Setting up subgraphs",s.nodes[p],s.id),t.setParent(s.nodes[p],s.id)}z(w,t,l,h,y,o),O(S,t);const x=h.select(`[id="${l}"]`),q=h.select("#"+l+" g");if(await Z(q,t,["point","circle","cross"],"flowchart",l),F.insertTitle(x,"flowchartTitleText",b.titleTopMargin,o.db.getDiagramTitle()),M(t,x,b.diagramPadding,b.useMaxWidth),o.db.indexNodes("subGraph"+m),!b.htmlLabels){const p=y.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(const k of p){const v=k.getBBox(),f=y.createElementNS("http://www.w3.org/2000/svg","rect");f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",v.width),f.setAttribute("height",v.height),k.insertBefore(f,k.firstChild)}}Object.keys(w).forEach(function(p){const k=w[p];if(k.link){const v=T("#"+l+' [id="'+p+'"]');if(v){const f=y.createElementNS("http://www.w3.org/2000/svg","a");f.setAttributeNS("http://www.w3.org/2000/svg","class",k.classes.join(" ")),f.setAttributeNS("http://www.w3.org/2000/svg","href",k.link),f.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?f.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):k.linkTarget&&f.setAttributeNS("http://www.w3.org/2000/svg","target",k.linkTarget);const A=v.insert(function(){return f},":first-child"),B=v.select(".label-container");B&&A.append(function(){return B.node()});const N=v.select(".label");N&&A.append(function(){return N.node()})}}})},fe={setConf:le,addVertices:z,addEdges:O,getClasses:ae,draw:oe},ne=(e,l)=>{const c=Q,o=c(e,"r"),i=c(e,"g"),d=c(e,"b");return V(o,i,d,l)},se=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${ne(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,ge=se;export{H as Y,be as b,fe as h,pe as p,re as r,te as t,ue as u,we as w,ge as y};
