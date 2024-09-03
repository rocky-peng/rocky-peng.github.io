const f=Math.PI,M=2*f,p=1e-6,A=M-p;function T(n){this._+=n[0];for(let t=1,i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function E(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return T;const i=10**t;return function(s){this._+=s[0];for(let h=1,_=s.length;h<_;++h)this._+=Math.round(arguments[h]*i)/i+s[h]}}class L{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?T:E(t)}moveTo(t,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,i){this._append`L${this._x1=+t},${this._y1=+i}`}quadraticCurveTo(t,i,s,h){this._append`Q${+t},${+i},${this._x1=+s},${this._y1=+h}`}bezierCurveTo(t,i,s,h,_,a){this._append`C${+t},${+i},${+s},${+h},${this._x1=+_},${this._y1=+a}`}arcTo(t,i,s,h,_){if(t=+t,i=+i,s=+s,h=+h,_=+_,_<0)throw new Error(`negative radius: ${_}`);let a=this._x1,u=this._y1,l=s-t,$=h-i,e=a-t,o=u-i,r=e*e+o*o;if(this._x1===null)this._append`M${this._x1=t},${this._y1=i}`;else if(r>p)if(!(Math.abs(o*l-$*e)>p)||!_)this._append`L${this._x1=t},${this._y1=i}`;else{let d=s-a,x=h-u,y=l*l+$*$,m=d*d+x*x,g=Math.sqrt(y),w=Math.sqrt(r),v=_*Math.tan((f-Math.acos((y+r-m)/(2*g*w)))/2),c=v/w,b=v/g;Math.abs(c-1)>p&&this._append`L${t+c*e},${i+c*o}`,this._append`A${_},${_},0,0,${+(o*d>e*x)},${this._x1=t+b*l},${this._y1=i+b*$}`}}arc(t,i,s,h,_,a){if(t=+t,i=+i,s=+s,a=!!a,s<0)throw new Error(`negative radius: ${s}`);let u=s*Math.cos(h),l=s*Math.sin(h),$=t+u,e=i+l,o=1^a,r=a?h-_:_-h;this._x1===null?this._append`M${$},${e}`:(Math.abs(this._x1-$)>p||Math.abs(this._y1-e)>p)&&this._append`L${$},${e}`,s&&(r<0&&(r=r%M+M),r>A?this._append`A${s},${s},0,1,${o},${t-u},${i-l}A${s},${s},0,1,${o},${this._x1=$},${this._y1=e}`:r>p&&this._append`A${s},${s},0,${+(r>=f)},${o},${this._x1=t+s*Math.cos(_)},${this._y1=i+s*Math.sin(_)}`)}rect(t,i,s,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}h${s=+s}v${+h}h${-s}Z`}toString(){return this._}}function q(n){return function(){return n}}function C(n){let t=3;return n.digits=function(i){if(!arguments.length)return t;if(i==null)t=null;else{const s=Math.floor(i);if(!(s>=0))throw new RangeError(`invalid digits: ${i}`);t=s}return n},()=>new L(t)}export{q as P,C as q};
