import{Z as O}from"./graph-940f1512-3e7994b8.js";import{c as A,a as g,k as P,V as _,$ as j,T as C,R as $,C as T,Z as R,S as Z,ag as D,ah as G,ai as F,aj as M,ak as U,e as Q}from"./mermaid.esm.min-bfa96e66.js";import{b as W}from"./index-4400e55d-b18ce574.js";import{e as X}from"./channel-b111d153-34b2be60.js";function Y(e){return typeof e=="string"?new D([document.querySelectorAll(e)],[document.documentElement]):new D([F(e)],G)}function ce(e,l){return!!e.children(l).length}function de(e){return E(e.v)+":"+E(e.w)+":"+E(e.name)}var H=/:/g;function E(e){return e?String(e).replace(H,"\\:"):""}function J(e,l){l&&e.attr("style",l)}function pe(e,l,c){l&&e.attr("class",l).attr("class",c+" "+e.attr("class"))}function be(e,l){var c=l.graph();if(U(c)){var o=c.transition;if(Q(o))return o(e)}return e}function K(e,l){var c=e.append("foreignObject").attr("width","100000"),o=c.append("xhtml:div");o.attr("xmlns","http://www.w3.org/1999/xhtml");var i=l.label;switch(typeof i){case"function":o.insert(i);break;case"object":o.insert(function(){return i});break;default:o.html(i)}J(o,l.labelStyle),o.style("display","inline-block"),o.style("white-space","nowrap");var d=o.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}const I={},ee=function(e){const l=Object.keys(e);for(const c of l)I[c]=e[c]},z=function(e,l,c,o,i,d){const b=o.select(`[id="${c}"]`);Object.keys(e).forEach(function(n){const r=e[n];let w="default";r.classes.length>0&&(w=r.classes.join(" ")),w=w+" flowchart-label";const h=A(r.styles);let y=r.text!==void 0?r.text:r.id,t;if(g.info("vertex",r,r.labelType),r.labelType==="markdown")g.info("vertex",r,r.labelType);else if(P(_().flowchart.htmlLabels)){const f={label:y.replace(/fa[blrs]?:fa-[\w-]+/g,S=>`<i class='${S.replace(":"," ")}'></i>`)};t=K(b,f).node(),t.parentNode.removeChild(t)}else{const f=i.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("style",h.labelStyle.replace("color:","fill:"));const S=y.split(j.lineBreakRegex);for(const m of S){const x=i.createElementNS("http://www.w3.org/2000/svg","tspan");x.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),x.setAttribute("dy","1em"),x.setAttribute("x","1"),x.textContent=m,f.appendChild(x)}t=f}let s=0,a="";switch(r.type){case"round":s=5,a="rect";break;case"square":a="rect";break;case"diamond":a="question";break;case"hexagon":a="hexagon";break;case"odd":a="rect_left_inv_arrow";break;case"lean_right":a="lean_right";break;case"lean_left":a="lean_left";break;case"trapezoid":a="trapezoid";break;case"inv_trapezoid":a="inv_trapezoid";break;case"odd_right":a="rect_left_inv_arrow";break;case"circle":a="circle";break;case"ellipse":a="ellipse";break;case"stadium":a="stadium";break;case"subroutine":a="subroutine";break;case"cylinder":a="cylinder";break;case"group":a="rect";break;case"doublecircle":a="doublecircle";break;default:a="rect"}l.setNode(r.id,{labelStyle:h.labelStyle,shape:a,labelText:y,labelType:r.labelType,rx:s,ry:s,class:w,style:h.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:_().flowchart.padding}),g.info("setNode",{labelStyle:h.labelStyle,labelType:r.labelType,shape:a,labelText:y,rx:s,ry:s,class:w,style:h.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:_().flowchart.padding})})},V=function(e,l,c){g.info("abc78 edges = ",e);let o=0,i={},d,b;if(e.defaultStyle!==void 0){const n=A(e.defaultStyle);d=n.style,b=n.labelStyle}e.forEach(function(n){o++;const r="L-"+n.start+"-"+n.end;i[r]===void 0?(i[r]=0,g.info("abc78 new entry",r,i[r])):(i[r]++,g.info("abc78 new entry",r,i[r]));let w=r+"-"+i[r];g.info("abc78 new link id to be used is",r,w,i[r]);const h="LS-"+n.start,y="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",a="";switch(n.stroke){case"normal":s="fill:none;",d!==void 0&&(s=d),b!==void 0&&(a=b),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){const f=A(n.style);s=f.style,a=f.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=a,n.interpolate!==void 0?t.curve=C(n.interpolate,$):e.defaultInterpolate!==void 0?t.curve=C(e.defaultInterpolate,$):t.curve=C(I.curve,$),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=n.text.replace(j.lineBreakRegex,`
`),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=w,t.classes="flowchart-link "+h+" "+y,l.setEdge(n.start,n.end,t,o)})},te=function(e,l){return l.db.getClasses()},re=async function(e,l,c,o){g.info("Drawing flowchart");let i=o.db.getDirection();i===void 0&&(i="TD");const{securityLevel:d,flowchart:b}=_(),n=b.nodeSpacing||50,r=b.rankSpacing||50;let w;d==="sandbox"&&(w=T("#i"+l));const h=d==="sandbox"?T(w.nodes()[0].contentDocument.body):T("body"),y=d==="sandbox"?w.nodes()[0].contentDocument:document,t=new O({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:r,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let s;const a=o.db.getSubGraphs();g.info("Subgraphs - ",a);for(let p=a.length-1;p>=0;p--)s=a[p],g.info("Subgraph - ",s),o.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);const f=o.db.getVertices(),S=o.db.getEdges();g.info("Edges",S);let m=0;for(m=a.length-1;m>=0;m--){s=a[m],Y("cluster").append("text");for(let p=0;p<s.nodes.length;p++)g.info("Setting up subgraphs",s.nodes[p],s.id),t.setParent(s.nodes[p],s.id)}z(f,t,l,h,y,o),V(S,t);const x=h.select(`[id="${l}"]`),q=h.select("#"+l+" g");if(await W(q,t,["point","circle","cross"],"flowchart",l),R.insertTitle(x,"flowchartTitleText",b.titleTopMargin,o.db.getDiagramTitle()),Z(t,x,b.diagramPadding,b.useMaxWidth),o.db.indexNodes("subGraph"+m),!b.htmlLabels){const p=y.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(const k of p){const v=k.getBBox(),u=y.createElementNS("http://www.w3.org/2000/svg","rect");u.setAttribute("rx",0),u.setAttribute("ry",0),u.setAttribute("width",v.width),u.setAttribute("height",v.height),k.insertBefore(u,k.firstChild)}}Object.keys(f).forEach(function(p){const k=f[p];if(k.link){const v=T("#"+l+' [id="'+p+'"]');if(v){const u=y.createElementNS("http://www.w3.org/2000/svg","a");u.setAttributeNS("http://www.w3.org/2000/svg","class",k.classes.join(" ")),u.setAttributeNS("http://www.w3.org/2000/svg","href",k.link),u.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?u.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):k.linkTarget&&u.setAttributeNS("http://www.w3.org/2000/svg","target",k.linkTarget);const B=v.insert(function(){return u},":first-child"),L=v.select(".label-container");L&&B.append(function(){return L.node()});const N=v.select(".label");N&&B.append(function(){return N.node()})}}})},we={setConf:ee,addVertices:z,addEdges:V,getClasses:te,draw:re},le=(e,l)=>{const c=X,o=c(e,"r"),i=c(e,"g"),d=c(e,"b");return M(o,i,d,l)},ae=e=>`.label {
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
    background-color: ${le(e.edgeLabelBackground,.5)};
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
`,fe=ae;export{K as O,Y as Q,J as Z,be as b,ce as d,de as f,pe as p,we as u,fe as w};
