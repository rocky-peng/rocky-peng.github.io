import{V as Z,F as ft,A as mt,L as Et,E as gt,M as bt,h as kt,c as G,j as Ot,b as et,i as Rt,O as Nt,ap as xt,as as Tt}from"./mermaid.esm.min-91aa3e95.js";import{Z as At}from"./graph-0ee63739-7ce0378b.js";import{Y as Mt}from"./layout-fd473db2-3b20bd26.js";import{P as It}from"./line-24d93f1b-03c2bb75.js";import"./app-df4f8e20.js";import"./framework-24d1f903.js";import"./array-2ff2c7a6-ffeda358.js";import"./path-428ebac9-3140eca4.js";var at=function(){var t=function(A,i,o,n){for(o=o||{},n=A.length;n--;o[A[n]]=i);return o},e=[6,8,10,20,22,24,26,27,28],r=[1,10],u=[1,11],l=[1,12],p=[1,13],h=[1,14],c=[1,15],d=[1,21],f=[1,22],m=[1,23],E=[1,24],g=[1,25],_=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],L=[1,34],D=[27,28,46,47],P=[41,42,43,44,45],F=[17,34],B=[1,54],N=[1,53],M=[17,34,36,38],k={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function(A,i,o,n,y,a,x){var s=a.length-1;switch(y){case 1:break;case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:n.addEntity(a[s-4]),n.addEntity(a[s-2]),n.addRelationship(a[s-4],a[s],a[s-2],a[s-3]);break;case 9:n.addEntity(a[s-3]),n.addAttributes(a[s-3],a[s-1]);break;case 10:n.addEntity(a[s-2]);break;case 11:n.addEntity(a[s]);break;case 12:n.addEntity(a[s-6],a[s-4]),n.addAttributes(a[s-6],a[s-1]);break;case 13:n.addEntity(a[s-5],a[s-3]);break;case 14:n.addEntity(a[s-3],a[s-1]);break;case 15:case 16:this.$=a[s].trim(),n.setAccTitle(this.$);break;case 17:case 18:this.$=a[s].trim(),n.setAccDescription(this.$);break;case 19:case 43:this.$=a[s];break;case 20:case 41:case 42:this.$=a[s].replace(/"/g,"");break;case 21:case 29:this.$=[a[s]];break;case 22:a[s].push(a[s-1]),this.$=a[s];break;case 23:this.$={attributeType:a[s-1],attributeName:a[s]};break;case 24:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeKeyTypeList:a[s]};break;case 25:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeComment:a[s]};break;case 26:this.$={attributeType:a[s-3],attributeName:a[s-2],attributeKeyTypeList:a[s-1],attributeComment:a[s]};break;case 27:case 28:case 31:this.$=a[s];break;case 30:a[s-2].push(a[s]),this.$=a[s-2];break;case 32:this.$=a[s].replace(/"/g,"");break;case 33:this.$={cardA:a[s],relType:a[s-1],cardB:a[s-2]};break;case 34:this.$=n.Cardinality.ZERO_OR_ONE;break;case 35:this.$=n.Cardinality.ZERO_OR_MORE;break;case 36:this.$=n.Cardinality.ONE_OR_MORE;break;case 37:this.$=n.Cardinality.ONLY_ONE;break;case 38:this.$=n.Cardinality.MD_PARENT;break;case 39:this.$=n.Identification.NON_IDENTIFYING;break;case 40:this.$=n.Identification.IDENTIFYING;break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:u,24:l,26:p,27:h,28:c},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:u,24:l,26:p,27:h,28:c},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:d,42:f,43:m,44:E,45:g}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(_,[2,19]),t(_,[2,20]),t(e,[2,4]),{11:29,27:h,28:c},{16:30,17:[1,31],29:32,30:33,34:L},{11:35,27:h,28:c},{40:36,46:[1,37],47:[1,38]},t(D,[2,34]),t(D,[2,35]),t(D,[2,36]),t(D,[2,37]),t(D,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:L},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:d,42:f,43:m,44:E,45:g},t(P,[2,39]),t(P,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(F,[2,23],{32:50,33:51,35:52,37:B,38:N}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(F,[2,24],{33:56,36:[1,57],38:N}),t(F,[2,25]),t(M,[2,29]),t(F,[2,32]),t(M,[2,31]),{16:58,17:[1,59],29:32,30:33,34:L},t(F,[2,26]),{35:60,37:B},{17:[1,61]},t(e,[2,13]),t(M,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function(A,i){if(i.recoverable)this.trace(A);else{var o=new Error(A);throw o.hash=i,o}},parse:function(A){var i=this,o=[0],n=[],y=[null],a=[],x=this.table,s="",X=0,nt=0,ut=2,st=1,yt=a.slice.call(arguments,1),R=Object.create(this.lexer),K={yy:{}};for(var V in this.yy)Object.prototype.hasOwnProperty.call(this.yy,V)&&(K.yy[V]=this.yy[V]);R.setInput(A,K.yy),K.yy.lexer=R,K.yy.parser=this,typeof R.yylloc>"u"&&(R.yylloc={});var J=R.yylloc;a.push(J);var pt=R.options&&R.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function _t(){var Y;return Y=n.pop()||R.lex()||st,typeof Y!="number"&&(Y instanceof Array&&(n=Y,Y=n.pop()),Y=i.symbols_[Y]||Y),Y}for(var I,U,$,q,z={},j,C,ot,H;;){if(U=o[o.length-1],this.defaultActions[U]?$=this.defaultActions[U]:((I===null||typeof I>"u")&&(I=_t()),$=x[U]&&x[U][I]),typeof $>"u"||!$.length||!$[0]){var tt="";H=[];for(j in x[U])this.terminals_[j]&&j>ut&&H.push("'"+this.terminals_[j]+"'");R.showPosition?tt="Parse error on line "+(X+1)+`:
`+R.showPosition()+`
Expecting `+H.join(", ")+", got '"+(this.terminals_[I]||I)+"'":tt="Parse error on line "+(X+1)+": Unexpected "+(I==st?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(tt,{text:R.match,token:this.terminals_[I]||I,line:R.yylineno,loc:J,expected:H})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+I);switch($[0]){case 1:o.push(I),y.push(R.yytext),a.push(R.yylloc),o.push($[1]),I=null,nt=R.yyleng,s=R.yytext,X=R.yylineno,J=R.yylloc;break;case 2:if(C=this.productions_[$[1]][1],z.$=y[y.length-C],z._$={first_line:a[a.length-(C||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(C||1)].first_column,last_column:a[a.length-1].last_column},pt&&(z._$.range=[a[a.length-(C||1)].range[0],a[a.length-1].range[1]]),q=this.performAction.apply(z,[s,nt,X,K.yy,$[1],y,a].concat(yt)),typeof q<"u")return q;C&&(o=o.slice(0,-1*C*2),y=y.slice(0,-1*C),a=a.slice(0,-1*C)),o.push(this.productions_[$[1]][0]),y.push(z.$),a.push(z._$),ot=x[o[o.length-2]][o[o.length-1]],o.push(ot);break;case 3:return!0}}return!0}},O=function(){var A={EOF:1,parseError:function(i,o){if(this.yy.parser)this.yy.parser.parseError(i,o);else throw new Error(i)},setInput:function(i,o){return this.yy=o||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var o=i.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var o=i.length,n=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===y.length?this.yylloc.first_column:0)+y[y.length-n.length].length-n[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),o=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+o+"^"},test_match:function(i,o){var n,y,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),y=i[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],n=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var x in a)this[x]=a[x];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,o,n,y;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),x=0;x<a.length;x++)if(n=this._input.match(this.rules[a[x]]),n&&(!o||n[0].length>o[0].length)){if(o=n,y=x,this.options.backtrack_lexer){if(i=this.test_match(n,a[x]),i!==!1)return i;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(i=this.test_match(o,a[y]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,o,n,y){switch(n){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return o.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return o.yytext[0];case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return A}();k.lexer=O;function S(){this.yy={}}return S.prototype=k,k.Parser=S,new S}();at.parser=at;const Lt=at;let W={},it=[];const $t={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},St={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},ht=function(t,e=void 0){return W[t]===void 0?(W[t]={attributes:[],alias:e},G.info("Added new entity :",t)):W[t]&&!W[t].alias&&e&&(W[t].alias=e,G.info(`Add alias '${e}' to entity '${t}'`)),W[t]},vt=()=>W,wt=function(t,e){let r=ht(t),u;for(u=e.length-1;u>=0;u--)r.attributes.push(e[u]),G.debug("Added attribute ",e[u].attributeName)},Dt=function(t,e,r,u){let l={entityA:t,roleA:e,entityB:r,relSpec:u};it.push(l),G.debug("Added new relationship :",l)},Bt=()=>it,Ct=function(){W={},it=[],Ot()},Yt={Cardinality:$t,Identification:St,getConfig:()=>Z().er,addEntity:ht,addAttributes:wt,getEntities:vt,addRelationship:Dt,getRelationships:Bt,clear:Ct,setAccTitle:ft,getAccTitle:mt,setAccDescription:Et,getAccDescription:gt,setDiagramTitle:bt,getDiagramTitle:kt},v={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},Zt=function(t,e){let r;t.append("defs").append("marker").attr("id",v.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",v.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",v.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",v.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",v.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",v.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",v.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",v.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",v.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",v.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},w={ERMarkers:v,insertMarkers:Zt},Pt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ft(t){return typeof t=="string"&&Pt.test(t)}const T=[];for(let t=0;t<256;++t)T.push((t+256).toString(16).slice(1));function Wt(t,e=0){return T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]}function Kt(t){if(!Ft(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}function Ut(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}const zt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Gt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Qt(t,e,r){function u(l,p,h,c){var d;if(typeof l=="string"&&(l=Ut(l)),typeof p=="string"&&(p=Kt(p)),((d=p)===null||d===void 0?void 0:d.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let f=new Uint8Array(16+l.length);if(f.set(p),f.set(l,p.length),f=r(f),f[6]=f[6]&15|e,f[8]=f[8]&63|128,h){c=c||0;for(let m=0;m<16;++m)h[c+m]=f[m];return h}return Wt(f)}try{u.name=t}catch{}return u.DNS=zt,u.URL=Gt,u}function Xt(t,e,r,u){switch(t){case 0:return e&r^~e&u;case 1:return e^r^u;case 2:return e&r^e&u^r&u;case 3:return e^r^u}}function rt(t,e){return t<<e|t>>>32-e}function jt(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const h=unescape(encodeURIComponent(t));t=[];for(let c=0;c<h.length;++c)t.push(h.charCodeAt(c))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const u=t.length/4+2,l=Math.ceil(u/16),p=new Array(l);for(let h=0;h<l;++h){const c=new Uint32Array(16);for(let d=0;d<16;++d)c[d]=t[h*64+d*4]<<24|t[h*64+d*4+1]<<16|t[h*64+d*4+2]<<8|t[h*64+d*4+3];p[h]=c}p[l-1][14]=(t.length-1)*8/Math.pow(2,32),p[l-1][14]=Math.floor(p[l-1][14]),p[l-1][15]=(t.length-1)*8&4294967295;for(let h=0;h<l;++h){const c=new Uint32Array(80);for(let _=0;_<16;++_)c[_]=p[h][_];for(let _=16;_<80;++_)c[_]=rt(c[_-3]^c[_-8]^c[_-14]^c[_-16],1);let d=r[0],f=r[1],m=r[2],E=r[3],g=r[4];for(let _=0;_<80;++_){const L=Math.floor(_/20),D=rt(d,5)+Xt(L,f,m,E)+g+e[L]+c[_]>>>0;g=E,E=m,m=rt(f,30)>>>0,f=d,d=D}r[0]=r[0]+d>>>0,r[1]=r[1]+f>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+E>>>0,r[4]=r[4]+g>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}const Ht=Qt("v5",80,jt),Vt=Ht,Jt=/[^\dA-Za-z](\W)*/g;let b={},Q=new Map;const qt=function(t){const e=Object.keys(t);for(const r of e)b[r]=t[r]},te=(t,e,r)=>{const u=b.entityPadding/3,l=b.entityPadding/3,p=b.fontSize*.85,h=e.node().getBBox(),c=[];let d=!1,f=!1,m=0,E=0,g=0,_=0,L=h.height+u*2,D=1;r.forEach(N=>{N.attributeKeyTypeList!==void 0&&N.attributeKeyTypeList.length>0&&(d=!0),N.attributeComment!==void 0&&(f=!0)}),r.forEach(N=>{const M=`${e.node().id}-attr-${D}`;let k=0;const O=Tt(N.attributeType),S=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",p+"px").text(O),A=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",p+"px").text(N.attributeName),i={};i.tn=S,i.nn=A;const o=S.node().getBBox(),n=A.node().getBBox();if(m=Math.max(m,o.width),E=Math.max(E,n.width),k=Math.max(o.height,n.height),d){const y=N.attributeKeyTypeList!==void 0?N.attributeKeyTypeList.join(","):"",a=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",p+"px").text(y);i.kn=a;const x=a.node().getBBox();g=Math.max(g,x.width),k=Math.max(k,x.height)}if(f){const y=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",p+"px").text(N.attributeComment||"");i.cn=y;const a=y.node().getBBox();_=Math.max(_,a.width),k=Math.max(k,a.height)}i.height=k,c.push(i),L+=k+u*2,D+=1});let P=4;d&&(P+=2),f&&(P+=2);const F=m+E+g+_,B={width:Math.max(b.minEntityWidth,Math.max(h.width+b.entityPadding*2,F+l*P)),height:r.length>0?L:Math.max(b.minEntityHeight,h.height+b.entityPadding*2)};if(r.length>0){const N=Math.max(0,(B.width-F-l*P)/(P/2));e.attr("transform","translate("+B.width/2+","+(u+h.height/2)+")");let M=h.height+u*2,k="attributeBoxOdd";c.forEach(O=>{const S=M+u+O.height/2;O.tn.attr("transform","translate("+l+","+S+")");const A=t.insert("rect","#"+O.tn.node().id).classed(`er ${k}`,!0).attr("x",0).attr("y",M).attr("width",m+l*2+N).attr("height",O.height+u*2),i=parseFloat(A.attr("x"))+parseFloat(A.attr("width"));O.nn.attr("transform","translate("+(i+l)+","+S+")");const o=t.insert("rect","#"+O.nn.node().id).classed(`er ${k}`,!0).attr("x",i).attr("y",M).attr("width",E+l*2+N).attr("height",O.height+u*2);let n=parseFloat(o.attr("x"))+parseFloat(o.attr("width"));if(d){O.kn.attr("transform","translate("+(n+l)+","+S+")");const y=t.insert("rect","#"+O.kn.node().id).classed(`er ${k}`,!0).attr("x",n).attr("y",M).attr("width",g+l*2+N).attr("height",O.height+u*2);n=parseFloat(y.attr("x"))+parseFloat(y.attr("width"))}f&&(O.cn.attr("transform","translate("+(n+l)+","+S+")"),t.insert("rect","#"+O.cn.node().id).classed(`er ${k}`,"true").attr("x",n).attr("y",M).attr("width",_+l*2+N).attr("height",O.height+u*2)),M+=O.height+u*2,k=k==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else B.height=Math.max(b.minEntityHeight,L),e.attr("transform","translate("+B.width/2+","+B.height/2+")");return B},ee=function(t,e,r){const u=Object.keys(e);let l;return u.forEach(function(p){const h=oe(p,"entity");Q.set(p,h);const c=t.append("g").attr("id",h);l=l===void 0?h:l;const d="text-"+h,f=c.append("text").classed("er entityLabel",!0).attr("id",d).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",Z().fontFamily).style("font-size",b.fontSize+"px").text(e[p].alias??p),{width:m,height:E}=te(c,f,e[p].attributes),g=c.insert("rect","#"+d).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",m).attr("height",E).node().getBBox();r.setNode(h,{width:g.width,height:g.height,shape:"rect",id:h})}),l},re=function(t,e){e.nodes().forEach(function(r){r!==void 0&&e.node(r)!==void 0&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},dt=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},ae=function(t,e){return t.forEach(function(r){e.setEdge(Q.get(r.entityA),Q.get(r.entityB),{relationship:r},dt(r))}),t};let ct=0;const ie=function(t,e,r,u,l){ct++;const p=r.edge(Q.get(e.entityA),Q.get(e.entityB),dt(e)),h=It().x(function(_){return _.x}).y(function(_){return _.y}).curve(xt),c=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",h(p.points)).style("stroke",b.stroke).style("fill","none");e.relSpec.relType===l.db.Identification.NON_IDENTIFYING&&c.attr("stroke-dasharray","8,8");let d="";switch(b.arrowMarkerAbsolute&&(d=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,d=d.replace(/\(/g,"\\("),d=d.replace(/\)/g,"\\)")),e.relSpec.cardA){case l.db.Cardinality.ZERO_OR_ONE:c.attr("marker-end","url("+d+"#"+w.ERMarkers.ZERO_OR_ONE_END+")");break;case l.db.Cardinality.ZERO_OR_MORE:c.attr("marker-end","url("+d+"#"+w.ERMarkers.ZERO_OR_MORE_END+")");break;case l.db.Cardinality.ONE_OR_MORE:c.attr("marker-end","url("+d+"#"+w.ERMarkers.ONE_OR_MORE_END+")");break;case l.db.Cardinality.ONLY_ONE:c.attr("marker-end","url("+d+"#"+w.ERMarkers.ONLY_ONE_END+")");break;case l.db.Cardinality.MD_PARENT:c.attr("marker-end","url("+d+"#"+w.ERMarkers.MD_PARENT_END+")");break}switch(e.relSpec.cardB){case l.db.Cardinality.ZERO_OR_ONE:c.attr("marker-start","url("+d+"#"+w.ERMarkers.ZERO_OR_ONE_START+")");break;case l.db.Cardinality.ZERO_OR_MORE:c.attr("marker-start","url("+d+"#"+w.ERMarkers.ZERO_OR_MORE_START+")");break;case l.db.Cardinality.ONE_OR_MORE:c.attr("marker-start","url("+d+"#"+w.ERMarkers.ONE_OR_MORE_START+")");break;case l.db.Cardinality.ONLY_ONE:c.attr("marker-start","url("+d+"#"+w.ERMarkers.ONLY_ONE_START+")");break;case l.db.Cardinality.MD_PARENT:c.attr("marker-start","url("+d+"#"+w.ERMarkers.MD_PARENT_START+")");break}const f=c.node().getTotalLength(),m=c.node().getPointAtLength(f*.5),E="rel"+ct,g=t.append("text").classed("er relationshipLabel",!0).attr("id",E).attr("x",m.x).attr("y",m.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",Z().fontFamily).style("font-size",b.fontSize+"px").text(e.roleA).node().getBBox();t.insert("rect","#"+E).classed("er relationshipLabelBox",!0).attr("x",m.x-g.width/2).attr("y",m.y-g.height/2).attr("width",g.width).attr("height",g.height)},ne=function(t,e,r,u){b=Z().er,G.info("Drawing ER diagram");const l=Z().securityLevel;let p;l==="sandbox"&&(p=et("#i"+e));const h=(l==="sandbox"?et(p.nodes()[0].contentDocument.body):et("body")).select(`[id='${e}']`);w.insertMarkers(h,b);let c;c=new At({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:b.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const d=ee(h,u.db.getEntities(),c),f=ae(u.db.getRelationships(),c);Mt(c),re(h,c),f.forEach(function(L){ie(h,L,c,d,u)});const m=b.diagramPadding;Rt.insertTitle(h,"entityTitleText",b.titleTopMargin,u.db.getDiagramTitle());const E=h.node().getBBox(),g=E.width+m*2,_=E.height+m*2;Nt(h,_,g,b.useMaxWidth),h.attr("viewBox",`${E.x-m} ${E.y-m} ${g} ${_}`)},se="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function oe(t="",e=""){const r=t.replace(Jt,"");return`${lt(e)}${lt(r)}${Vt(t,se)}`}function lt(t=""){return t.length>0?`${t}-`:""}const ce={setConf:qt,draw:ne},le=t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,he=le,ge={parser:Lt,db:Yt,renderer:ce,styles:he};export{ge as diagram};
