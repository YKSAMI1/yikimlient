import"./theme-DsW0LP6A.js";const vm="modulepreload",xm=function(i){return"/"+i},cu={},_t=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");r=Promise.allSettled(t.map(c=>{if(c=xm(c),c in cu)return;cu[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":vm,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})};function Ci(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function th(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},as={duration:.5,overwrite:!1,delay:0},fd,Wt,bt,Vn=1e8,ht=1/Vn,tc=Math.PI*2,ym=tc/4,bm=0,nh=Math.sqrt,Sm=Math.cos,Mm=Math.sin,$t=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="number"},hd=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},gn=function(e){return e!==!1},pd=function(){return typeof window<"u"},Cs=function(e){return kt(e)||$t(e)},ih=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,Em=/random\([^)]+\)/g,wm=/,\s*/g,du=/(?:-?\.?\d|\.)+/gi,rh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ha=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ah=/[+-]=-?[.\d]+/,Tm=/[^,'"\[\]\s]+/gi,Am=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ci,nc,md,Un={},yo={},sh,oh=function(e){return(yo=Aa(e,Un))&&Sn},gd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ss=function(e,t){return!t&&console.warn(e)},lh=function(e,t){return e&&(Un[e]=t)&&yo&&(yo[e]=t)||Un},os=function(){return 0},Rm={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},km={suppressEvents:!0},_d={},cr=[],ic={},ch,Tn={},nl={},uu=30,so=[],vd="",xd=function(e){var t=e[0],n,r;if(yi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=so.length;r--&&!so[r].targetTest(t););n=so[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Lh(e[r],n)))||e.splice(r,1);return e},Ir=function(e){return e._gsap||xd($n(e))[0]._gsap},dh=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():hd(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},va=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Cm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},bo=function(){var e=cr.length,t=cr.slice(0),n,r;for(ic={},cr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},yd=function(e){return!!(e._initted||e._startAt||e.add)},uh=function(e,t,n,r){cr.length&&!Wt&&bo(),e.render(t,n,!!(Wt&&t<0&&yd(e))),cr.length&&!Wt&&bo()},fh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tm).length<2?t:$t(e)?e.trim():e},hh=function(e){return e},Nn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Aa=function(e,t){for(var n in t)e[n]=t[n];return e},fu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},So=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ja=function(e){var t=e.parent||wt,n=e.keyframes?Lm(tn(e.keyframes)):Nn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Pm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ph=function(e,t,n,r,a){var s=e[r],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},zo=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,s=t._next;a?a._next=s:e[n]===t&&(e[n]=s),s?s._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rc=function(e,t,n,r){return e._startAt&&(Wt?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Im=function i(e){return!e||e._ts&&i(e.parent)},hu=function(e){return e._repeat?Ra(e._tTime,e=e.duration()+e._rDelay)*e:0},Ra=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Mo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bo=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Ho=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bo(e),n._dirty||Ur(n,e)),e},mh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Mo(e.rawTime(),t),(!t._dur||ys(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),Ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},pi=function(e,t,n,r){return t.parent&&ur(t),t._start=Et((Oi(n)?n:n||e!==wt?Bn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ph(e,t,"_first","_last",e._sort?"_start":0),ac(t)||(e._recent=t),r||mh(e,t),e._ts<0&&Ho(e,e._tTime),e},gh=function(e,t){return(Un.ScrollTrigger||gd("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},_h=function(e,t,n,r,a){if(Sd(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ch!==Cn.frame)return cr.push(e),e._lazy=[a,r],1},Um=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ac=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Nm=function(e,t,n,r){var a=e.ratio,s=t<0||!t&&(!e._start&&Um(e)&&!(!e._initted&&ac(e))||(e._ts<0||e._dp._ts<0)&&!ac(e))?0:1,o=e._rDelay,c=0,l,d,f;if(o&&e._repeat&&(c=ys(0,e._tDur,t),d=Ra(c,o),e._yoyo&&d&1&&(s=1-s),d!==Ra(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||Wt||r||e._zTime===ht||!t&&e._zTime){if(!e._initted&&_h(e,t,r,n,c))return;for(f=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&rc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&ur(e,1),!n&&!Wt&&(Pn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ka=function(e,t,n,r){var a=e._repeat,s=Et(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:Et(s*(a+1)+e._rDelay*a):s,o>0&&!r&&Ho(e,e._tTime=e._tDur*o),e.parent&&Bo(e),n||Ur(e.parent,e),e},pu=function(e){return e instanceof mn?Ur(e):ka(e,e._dur)},Om={_start:0,endTime:os,totalDuration:os},Bn=function i(e,t,n){var r=e.labels,a=e._recent||Om,s=e.duration()>=Vn?a.endTime(!1):e._dur,o,c,l;return $t(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?a:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=s),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(tn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:s+c)):t==null?s:+t},Qa=function(e,t,n){var r=Oi(t[1]),a=(r?2:1)+(e<2?0:1),s=t[a],o,c;if(r&&(s.duration=t[1]),s.parent=n,e){for(o=s,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=gn(c.vars.inherit)&&c.parent;s.immediateRender=gn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new Ut(t[0],s,t[a+1])},mr=function(e,t){return e||e===0?t(e):t},ys=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!$t(e)||!(t=Am.exec(e))?"":t[1]},zm=function(e,t,n){return mr(n,function(r){return ys(e,t,r)})},sc=[].slice,vh=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==ci},Bm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return $t(r)&&!t||vh(r,1)?(a=n).push.apply(a,$n(r)):n.push(r)})||n},$n=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(nc||!Ca())?sc.call((t||md).querySelectorAll(e),0):tn(e)?Bm(e,n):vh(e)?sc.call(e,0):e?[e]:[]},oc=function(e){return e=$n(e)[0]||ss("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $n(t,n.querySelectorAll?n:n===e?ss("Invalid scope")||md.createElement("div"):e)}},xh=function(e){return e.sort(function(){return .5-Math.random()})},yh=function(e){if(kt(e))return e;var t=yi(e)?e:{each:e},n=Nr(t.ease),r=t.from||0,a=parseFloat(t.base)||0,s={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,d=r,f=r;return $t(r)?d=f={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(d=r[0],f=r[1]),function(u,h,m){var _=(m||t).length,p=s[_],g,b,T,y,M,E,A,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!w){for(A=-Vn;A<(A=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=s[_]=[],g=c?Math.min(w,_)*d-.5:r%w,b=w===Vn?0:c?_*f/w-.5:r/w|0,A=0,v=Vn,E=0;E<_;E++)T=E%w-g,y=b-(E/w|0),p[E]=M=l?Math.abs(l==="y"?y:T):nh(T*T+y*y),M>A&&(A=M),M<v&&(v=M);r==="random"&&xh(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:l?l==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),p.b=_<0?a-_:a,p.u=jt(t.amount||t.each)||0,n=n&&_<0?jm(n):n}return _=(p[u]-p.min)/p.max||0,Et(p.b+(n?n(_):_)*p.v)+p.u}},lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Et(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Oi(n)?0:jt(n))}},bh=function(e,t){var n=tn(e),r,a;return!n&&yi(e)&&(r=n=e.radius||Vn,e.values?(e=$n(e.values),(a=!Oi(e[0]))&&(r*=r)):e=lc(e.increment)),mr(t,n?kt(e)?function(s){return a=e(s),Math.abs(a-s)<=r?a:s}:function(s){for(var o=parseFloat(a?s.x:s),c=parseFloat(a?s.y:0),l=Vn,d=0,f=e.length,u,h;f--;)a?(u=e[f].x-o,h=e[f].y-c,u=u*u+h*h):u=Math.abs(e[f]-o),u<l&&(l=u,d=f);return d=!r||l<=r?e[d]:s,a||d===s||Oi(s)?d:d+jt(s)}:lc(e))},Sh=function(e,t,n,r){return mr(tn(e)?!t:n===!0?!!(n=0):!r,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Hm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,s){return s(a)},r)}},Gm=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},Vm=function(e,t,n){return Eh(e,t,0,1,n)},Mh=function(e,t,n){return mr(n,function(r){return e[~~t(r)]})},$m=function i(e,t,n){var r=t-e;return tn(e)?Mh(e,i(0,e.length),t):mr(n,function(a){return(r+(a-e)%r)%r+e})},Wm=function i(e,t,n){var r=t-e,a=r*2;return tn(e)?Mh(e,i(0,e.length-1),t):mr(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>r?a-s:s)})},ls=function(e){return e.replace(Em,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(wm);return Sh(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Eh=function(e,t,n,r,a){var s=t-e,o=r-n;return mr(a,function(c){return n+((c-e)/s*o||0)})},qm=function i(e,t,n,r){var a=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!a){var s=$t(e),o={},c,l,d,f,u;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(d=[],f=e.length,u=f-2,l=1;l<f;l++)d.push(i(e[l-1],e[l]));f--,a=function(m){m*=f;var _=Math.min(u,~~m);return d[_](m-_)},n=t}else r||(e=Aa(tn(e)?[]:{},e));if(!d){for(c in t)bd.call(o,e,c,"get",t[c]);a=function(m){return wd(m,o)||(s?e.p:e)}}}return mr(n,a)},mu=function(e,t,n){var r=e.labels,a=Vn,s,o,c;for(s in r)o=r[s]-t,o<0==!!n&&o&&a>(o=Math.abs(o))&&(c=s,a=o);return c},Pn=function(e,t,n){var r=e.vars,a=r[t],s=bt,o=e._ctx,c,l,d;if(a)return c=r[t+"Params"],l=r.callbackScope||e,n&&cr.length&&bo(),o&&(bt=o),d=c?a.apply(l,c):a.call(l),bt=s,d},qa=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&Pn(e,"onInterrupt"),e},pa,wh=[],Th=function(e){if(e)if(e=!e.name&&e.default||e,pd()||e.headless){var t=e.name,n=kt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:os,render:wd,add:bd,kill:cg,modifier:lg,rawVars:0},s={targetTest:0,get:0,getSetter:Ed,aliases:{},register:0};if(Ca(),e!==r){if(Tn[t])return;Nn(r,Nn(So(e,a),s)),Aa(r.prototype,Aa(a,So(e,s))),Tn[r.prop=t]=r,e.targetTest&&(so.push(r),_d[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lh(t,r),e.register&&e.register(Sn,r,vn)}else wh.push(e)},ft=255,Xa={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Ah=function(e,t,n){var r=e?Oi(e)?[e>>16,e>>8&ft,e&ft]:0:Xa.black,a,s,o,c,l,d,f,u,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xa[e])r=Xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ft,r&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(du),!t)c=+r[0]%360/360,l=+r[1]/100,d=+r[2]/100,s=d<=.5?d*(l+1):d+l-d*l,a=d*2-s,r.length>3&&(r[3]*=1),r[0]=il(c+1/3,a,s),r[1]=il(c,a,s),r[2]=il(c-1/3,a,s);else if(~e.indexOf("="))return r=e.match(rh),n&&r.length<4&&(r[3]=1),r}else r=e.match(du)||Xa.transparent;r=r.map(Number)}return t&&!m&&(a=r[0]/ft,s=r[1]/ft,o=r[2]/ft,f=Math.max(a,s,o),u=Math.min(a,s,o),d=(f+u)/2,f===u?c=l=0:(h=f-u,l=d>.5?h/(2-f-u):h/(f+u),c=f===a?(s-o)/h+(s<o?6:0):f===s?(o-a)/h+2:(a-s)/h+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},Rh=function(e){var t=[],n=[],r=-1;return e.split(dr).forEach(function(a){var s=a.match(ha)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},gu=function(e,t,n){var r="",a=(e+r).match(dr),s=t?"hsla(":"rgba(",o=0,c,l,d,f;if(!a)return e;if(a=a.map(function(u){return(u=Ah(u,t,1))&&s+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Rh(e),c=n.c,c.join(r)!==d.c.join(r)))for(l=e.replace(dr,"1").split(ha),f=l.length-1;o<f;o++)r+=l[o]+(~c.indexOf(o)?a.shift()||s+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!l)for(l=e.split(dr),f=l.length-1;o<f;o++)r+=l[o]+a[o];return r+l[f]},dr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xa)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Xm=/hsl[a]?\(/,kh=function(e){var t=e.join(" "),n;if(dr.lastIndex=0,dr.test(t))return n=Xm.test(t),e[1]=gu(e[1],n),e[0]=gu(e[0],n,Rh(e[1])),!0},cs,Cn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,a=1e3/240,s=a,o=[],c,l,d,f,u,h,m=function _(p){var g=i()-r,b=p===!0,T,y,M,E;if((g>e||g<0)&&(n+=g-t),r+=g,M=r-n,T=M-s,(T>0||b)&&(E=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,s+=T+(T>=a?4:a-T),y=1),b||(c=l(_)),y)for(h=0;h<o.length;h++)o[h](M,u,E,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){sh&&(!nc&&pd()&&(ci=nc=window,md=ci.document||{},Un.gsap=Sn,(ci.gsapVersions||(ci.gsapVersions=[])).push(Sn.version),oh(yo||ci.GreenSockGlobals||!ci.gsap&&ci||{}),wh.forEach(Th)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=d||function(p){return setTimeout(p,s-f.time*1e3+1|0)},cs=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),cs=0,l=os},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){a=1e3/(p||240),s=f.time*1e3+a},add:function(p,g,b){var T=g?function(y,M,E,A){p(y,M,E,A),f.remove(T)}:p;return f.remove(p),o[b?"unshift":"push"](T),Ca(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},f}(),Ca=function(){return!cs&&Cn.wake()},je={},Ym=/^[\d.\-M][\d.\-,\s]/,Km=/["']/g,Zm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,s=n.length,o,c,l;a<s;a++)c=n[a],o=a!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(Km,"").trim():+l,r=c.substr(o+1).trim();return t},Jm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Qm=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zm(t[1])]:Jm(e).split(",").map(fh)):je._CE&&Ym.test(e)?je._CE("",e):n},jm=function(e){return function(t){return 1-e(1-t)}},Nr=function(e,t){return e&&(kt(e)?e:je[e]||Qm(e))||t},Vr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},s;return _n(e,function(o){je[o]=Un[o]=a,je[s=o.toLowerCase()]=n;for(var c in a)je[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=je[o+"."+c]=a[c]}),a},Ch=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rl=function i(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),s=a/tc*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*Mm((d-s)*a)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Ch(o);return a=tc/a,c.config=function(l,d){return i(e,l,d)},c},al=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Ch(n);return r.config=function(a){return i(e,a)},r};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Vr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Vr("Elastic",rl("in"),rl("out"),rl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,a=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Vr("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Vr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Vr("Circ",function(i){return-(nh(1-i*i)-1)});Vr("Sine",function(i){return i===1?1:-Sm(i*ym)+1});Vr("Back",al("in"),al("out"),al());je.SteppedEase=je.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,s=1-ht;return function(o){return((r*ys(0,s,o)|0)+a)*n}}};as.ease=je["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return vd+=i+","+i+"Params,"});var Lh=function(e,t){this.id=bm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:dh,this.set=t?t.getSetter:Ed},ds=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ka(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),cs||Cn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ka(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ca(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ho(this,n),!a._dp||a.parent||mh(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),uh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?Ra(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Mo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(ys(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Bo(this),Dm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=km);var r=Wt;return Wt=n,yd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,pu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Bn(this,n),gn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,gn(r)),this._dur||(this._zTime=-ht),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-ht)},e.eventCallback=function(n,r,a){var s=this.vars;return arguments.length>1?(r?(s[n]=r,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(s){var o=kt(n)?n:hh,c=function(){var d=r.then;r.then=null,a&&a(),kt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),s(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){qa(this)},i}();Nn(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var mn=function(i){th(e,i);function e(n,r){var a;return n===void 0&&(n={}),a=i.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=gn(n.sortChildren),wt&&pi(n.parent||wt,Ci(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&gh(Ci(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,s){return Qa(0,arguments,this),this},t.from=function(r,a,s){return Qa(1,arguments,this),this},t.fromTo=function(r,a,s,o){return Qa(2,arguments,this),this},t.set=function(r,a,s){return a.duration=0,a.parent=this,Ja(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Ut(r,a,Bn(this,s),1),this},t.call=function(r,a,s){return pi(this,Ut.delayedCall(0,r,a),s)},t.staggerTo=function(r,a,s,o,c,l,d){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=d,s.parent=this,new Ut(r,s,Bn(this,c)),this},t.staggerFrom=function(r,a,s,o,c,l,d){return s.runBackwards=1,Ja(s).immediateRender=gn(s.immediateRender),this.staggerTo(r,a,s,o,c,l,d)},t.staggerFromTo=function(r,a,s,o,c,l,d,f){return o.startAt=s,Ja(o).immediateRender=gn(o.immediateRender),this.staggerTo(r,a,o,c,l,d,f)},t.render=function(r,a,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=r<=0?0:Et(r),f=this._zTime<0!=r<0&&(this._initted||!l),u,h,m,_,p,g,b,T,y,M,E,A;if(this!==wt&&d>c&&r>=0&&(d=c),d!==this._tTime||s||f){if(o!==this._time&&l&&(d+=this._time-o,r+=this._time-o),u=d,y=this._start,T=this._ts,g=!T,f&&(l||(o=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,a,s);if(u=Et(d%p),d===c?(_=this._repeat,u=l):(M=Et(d/p),_=~~M,_&&_===M&&(u=l,_--),u>l&&(u=l)),M=Ra(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),E&&_&1&&(u=l-u,A=1),_!==M&&!this._lock){var v=E&&M&1,w=v===(E&&_&1);if(_<M&&(v=!v),o=v?0:d%l?l:d,this._lock=1,this.render(o||(A?0:Et(_*p)),a,!l)._lock=0,this._tTime=d,!a&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=v?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Fm(this,Et(o),Et(u)),b&&(d-=u-(u=b._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&l&&!a&&!M&&(Pn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||u>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,a,s);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,a,s),u!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=-ht);break}}h=m}else{h=this._last;for(var R=r<0?r:u;h;){if(m=h._prev,(h._act||R<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,a,s);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,a,s||Wt&&yd(h)),u!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=R?-ht:ht);break}}h=m}}if(b&&!a&&(this.pause(),b.render(u>=o?0:-ht)._zTime=u>=o?1:-1,this._ts))return this._start=y,Bo(this),this.render(r,a,s);this._onUpdate&&!a&&Pn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&ur(this,1),!a&&!(r<0&&!o)&&(d||o||!c)&&(Pn(this,d===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var s=this;if(Oi(a)||(a=Bn(this,a,r)),!(r instanceof ds)){if(tn(r))return r.forEach(function(o){return s.add(o,a)}),this;if($t(r))return this.addLabel(r,a);if(kt(r))r=Ut.delayedCall(0,r);else return this}return this!==r?pi(this,r,a):this},t.getChildren=function(r,a,s,o){r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-Vn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ut?a&&c.push(l):(s&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,a,s)))),l=l._next;return c},t.getById=function(r){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===r)return a[s]},t.remove=function(r){return $t(r)?this.removeLabel(r):kt(r)?this.killTweensOf(r):(r.parent===this&&zo(this,r),r===this._recent&&(this._recent=this._last),Ur(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(Cn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Bn(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,s){var o=Ut.delayedCall(0,a||os,s);return o.data="isPause",this._hasPause=1,pi(this,o,Bn(this,r))},t.removePause=function(r){var a=this._first;for(r=Bn(this,r);a;)a._start===r&&a.data==="isPause"&&ur(a),a=a._next},t.killTweensOf=function(r,a,s){for(var o=this.getTweensOf(r,s),c=o.length;c--;)rr!==o[c]&&o[c].kill(r,a);return this},t.getTweensOf=function(r,a){for(var s=[],o=$n(r),c=this._first,l=Oi(a),d;c;)c instanceof Ut?Cm(c._targets,o)&&(l?(!rr||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&s.push(c):(d=c.getTweensOf(o,a)).length&&s.push.apply(s,d),c=c._next;return s},t.tweenTo=function(r,a){a=a||{};var s=this,o=Bn(s,r),c=a,l=c.startAt,d=c.onStart,f=c.onStartParams,u=c.immediateRender,h,m=Ut.to(s,Nn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||ht,onStart:function(){if(s.pause(),!h){var p=a.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());m._dur!==p&&ka(m,p,0,1).render(m._time,!0,!0),h=1}d&&d.apply(m,f||[])}},a));return u?m.render(0):m},t.tweenFromTo=function(r,a,s){return this.tweenTo(a,Nn({startAt:{time:Bn(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),mu(this,Bn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),mu(this,Bn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(r,a,s){s===void 0&&(s=0);var o=this._first,c=this.labels,l;for(r=Et(r);o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(a)for(l in c)c[l]>=s&&(c[l]+=r);return Ur(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ur(this)},t.totalDuration=function(r){var a=0,s=this,o=s._last,c=Vn,l,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(f=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,pi(s,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(a-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=Et(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),o._end>a&&o._ts&&(a=o._end),o=l;ka(s,s===wt&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(wt._ts&&(uh(wt,Mo(r,wt)),ch=Cn.frame),Cn.frame>=uu){uu+=In.autoSleep||120;var a=wt._first;if((!a||!a._ts)&&In.autoSleep&&Cn._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Cn.sleep()}}},e}(ds);Nn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eg=function(e,t,n,r,a,s,o){var c=new vn(this._pt,e,t,0,1,Fh,null,a),l=0,d=0,f,u,h,m,_,p,g,b;for(c.b=n,c.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=ls(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),u=n.match(tl)||[];f=tl.exec(r);)m=f[0],_=r.substring(l,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==u[d++]&&(p=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:p,c:m.charAt(1)==="="?va(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},l=tl.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(ah.test(r)||g)&&(c.e=0),this._pt=c,c},bd=function(e,t,n,r,a,s,o,c,l,d){kt(r)&&(r=r(a||0,e,s));var f=e[t],u=n!=="get"?n:kt(f)?l?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,h=kt(f)?l?ag:Uh:Md,m;if($t(r)&&(~r.indexOf("random(")&&(r=ls(r)),r.charAt(1)==="="&&(m=va(u,r)+(jt(u)||0),(m||m===0)&&(r=m))),!d||u!==r||cc)return!isNaN(u*r)&&r!==""?(m=new vn(this._pt,e,t,+u||0,r-(u||0),typeof f=="boolean"?og:Nh,0,h),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(t in e)&&gd(t,r),eg.call(this,e,t,u,r,h,c||In.stringFilter,l))},tg=function(e,t,n,r,a){if(kt(e)&&(e=ja(e,a,t,n,r)),!yi(e)||e.style&&e.nodeType||tn(e)||ih(e))return $t(e)?ja(e,a,t,n,r):e;var s={},o;for(o in e)s[o]=ja(e[o],a,t,n,r);return s},Ph=function(e,t,n,r,a,s){var o,c,l,d;if(Tn[e]&&(o=new Tn[e]).init(a,o.rawVars?t[e]:tg(t[e],r,a,s,n),n,r,s)!==!1&&(n._pt=c=new vn(n._pt,a,e,0,1,o.render,o,0,o.priority),n!==pa))for(l=n._ptLookup[n._targets.indexOf(a)],d=o._props.length;d--;)l[o._props[d]]=c;return o},rr,cc,Sd=function i(e,t,n){var r=e.vars,a=r.ease,s=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,d=r.runBackwards,f=r.yoyoEase,u=r.keyframes,h=r.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!fd,y=e.timeline,M=r.easeReverse||f,E,A,v,w,R,C,N,O,L,z,X,$,ee;if(y&&(!u||!a)&&(a="none"),e._ease=Nr(a,as.ease),e._rEase=M&&(Nr(M)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||u&&!r.stagger){if(O=p[0]?Ir(p[0]).harness:0,$=O&&r[O.prop],E=So(r,_d),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!h?_.render(-1,!0):_.revert(d&&m?ao:Rm),_._lazy=0),s){if(ur(e._startAt=Ut.set(p,Nn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&gn(c),startAt:null,delay:0,onUpdate:l&&function(){return Pn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!h)&&e._startAt.revert(ao),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),v=Nn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&gn(c),immediateRender:o,stagger:0,parent:g},E),$&&(v[O.prop]=$),ur(e._startAt=Ut.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&gn(c)||c&&!m,A=0;A<p.length;A++){if(R=p[A],N=R._gsap||xd(p)[A]._gsap,e._ptLookup[A]=z={},ic[N.id]&&cr.length&&bo(),X=b===p?A:b.indexOf(R),O&&(L=new O).init(R,$||E,e,X,b)!==!1&&(e._pt=w=new vn(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Y){z[Y]=w}),L.priority&&(C=1)),!O||$)for(v in E)Tn[v]&&(L=Ph(v,E,e,X,R,b))?L.priority&&(C=1):z[v]=w=bd.call(e,R,v,"get",E[v],X,b,0,r.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(rr=e,wt.killTweensOf(R,z,e.globalTime(t)),ee=!e.parent,rr=0),e._pt&&c&&(ic[N.id]=1)}C&&Oh(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ee,u&&t<=0&&y.render(Vn,!0,!0)},ng=function(e,t,n,r,a,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return cc=1,e.vars[t]="+=0",Sd(e,o),cc=0,c?ss(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)f=l[h],d=f._pt||f,d.s=(r||r===0)&&!a?r:d.s+(r||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=Lt(n)+jt(f.e)),f.b&&(f.b=d.s+jt(f.b))},ig=function(e,t){var n=e[0]?Ir(e[0]).harness:0,r=n&&n.aliases,a,s,o,c;if(!r)return t;a=Aa({},t);for(s in r)if(s in a)for(c=r[s].split(","),o=c.length;o--;)a[c[o]]=a[s];return a},rg=function(e,t,n,r){var a=t.ease||r||"power1.inOut",s,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:a})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},ja=function(e,t,n,r,a){return kt(e)?e.call(t,n,r,a):$t(e)&&~e.indexOf("random(")?ls(e):e},Dh=vd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ih={};_n(Dh+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ih[i]=1});var Ut=function(i){th(e,i);function e(n,r,a,s){var o;typeof r=="number"&&(a.duration=r,r=a,a=null),o=i.call(this,s?r:Ja(r))||this;var c=o.vars,l=c.duration,d=c.delay,f=c.immediateRender,u=c.stagger,h=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=r.parent||wt,b=(tn(n)||ih(n)?Oi(n[0]):"length"in r)?[n]:$n(n),T,y,M,E,A,v,w,R;if(o._targets=b.length?xd(b):ss("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||u||Cs(l)||Cs(d)){r=o.vars;var C=r.easeReverse||r.yoyoEase;if(T=o.timeline=new mn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),T.kill(),T.parent=T._dp=Ci(o),T._start=0,u||Cs(l)||Cs(d)){if(E=b.length,w=u&&yh(u),yi(u))for(A in u)~Dh.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(y=0;y<E;y++)M=So(r,Ih),M.stagger=0,C&&(M.easeReverse=C),R&&Aa(M,R),v=b[y],M.duration=+ja(l,Ci(o),y,v,b),M.delay=(+ja(d,Ci(o),y,v,b)||0)-o._delay,!u&&E===1&&M.delay&&(o._delay=d=M.delay,o._start+=d,M.delay=0),T.to(v,M,w?w(y,v,b):0),T._ease=je.none;T.duration()?l=d=0:o.timeline=0}else if(m){Ja(Nn(T.vars.defaults,{ease:"none"})),T._ease=Nr(m.ease||r.ease||"none");var N=0,O,L,z;if(tn(m))m.forEach(function(X){return T.to(b,X,">")}),T.duration();else{M={};for(A in m)A==="ease"||A==="easeEach"||rg(A,m[A],M,m.easeEach);for(A in M)for(O=M[A].sort(function(X,$){return X.t-$.t}),N=0,y=0;y<O.length;y++)L=O[y],z={ease:L.e,duration:(L.t-(y?O[y-1].t:0))/100*l},z[A]=L.v,T.to(b,z,N),N+=z.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return h===!0&&!fd&&(rr=Ci(o),wt.killTweensOf(b),rr=0),pi(g,Ci(o),a),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!l&&!m&&o._start===Et(g._time)&&gn(f)&&Im(Ci(o))&&g.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-d)||0)),p&&gh(Ci(o),p),o}var t=e.prototype;return t.render=function(r,a,s){var o=this._time,c=this._tDur,l=this._dur,d=r<0,f=r>c-ht&&!d?c:r<ht?0:r,u,h,m,_,p,g,b,T;if(!l)Nm(this,r,a,s);else if(f!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,T=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+r,a,s);if(u=Et(f%_),f===c?(m=this._repeat,u=l):(p=Et(f/_),m=~~p,m&&m===p?(u=l,m--):u>l&&(u=l)),g=this._yoyo&&m&1,g&&(u=l-u),p=Ra(this._tTime,_),u===o&&!s&&this._initted&&m===p)return this._tTime=f,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=s=1,this.render(Et(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(_h(this,d?r:u,s,a,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(r,a,s)}if(this._rEase){var y=u<o;if(y!==this._inv){var M=y?o:l-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/l);if(this._from&&(this.ratio=b=1-b),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!a&&!p&&(Pn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;T&&T.render(r<0?r:T._dur*T._ease(u/this._dur),a,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(d&&rc(this,r,a,s),Pn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!a&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&rc(this,r,!0,!0),(r||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ur(this,1),!a&&!(d&&!o)&&(f||o||g)&&(Pn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,s,o,c){cs||Cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Sd(this,l),d=this._ease(l/this._dur),ng(this,r,a,s,o,d,l,c)?this.resetTo(r,a,s,o,1):(Ho(this,0),this.parent||ph(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?qa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,rr&&rr.vars.overwrite!==!0)._first||qa(this),this.parent&&s!==this.timeline.totalDuration()&&ka(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=r?$n(r):o,l=this._ptLookup,d=this._pt,f,u,h,m,_,p,g;if((!a||a==="all")&&Pm(o,c))return a==="all"&&(this._pt=0),qa(this);for(f=this._op=this._op||[],a!=="all"&&($t(a)&&(_={},_n(a,function(b){return _[b]=1}),a=_),a=ig(o,a)),g=o.length;g--;)if(~c.indexOf(o[g])){u=l[g],a==="all"?(f[g]=a,m=u,h={}):(h=f[g]=f[g]||{},m=a);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&zo(this,p,"_pt"),delete u[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&d&&qa(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Qa(1,arguments)},e.delayedCall=function(r,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,a,s){return Qa(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,s){return wt.killTweensOf(r,a,s)},e}(ds);Nn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new mn,t=sc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Md=function(e,t,n){return e[t]=n},Uh=function(e,t,n){return e[t](n)},ag=function(e,t,n,r){return e[t](r.fp,n)},sg=function(e,t,n){return e.setAttribute(t,n)},Ed=function(e,t){return kt(e[t])?Uh:hd(e[t])&&e.setAttribute?sg:Md},Nh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},og=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fh=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},wd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lg=function(e,t,n,r){for(var a=this._pt,s;a;)s=a._next,a.p===r&&a.modifier(e,t,n),a=s},cg=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zo(this,t,"_pt"):t.dep||(n=1),t=r;return!n},dg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Oh=function(e){for(var t=e._pt,n,r,a,s;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=a},vn=function(){function i(t,n,r,a,s,o,c,l,d){this.t=n,this.s=a,this.c=s,this.p=r,this.r=o||Nh,this.d=c||this,this.set=l||Md,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=dg,this.m=n,this.mt=a,this.tween=r},i}();_n(vd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return _d[i]=1});Un.TweenMax=Un.TweenLite=Ut;Un.TimelineLite=Un.TimelineMax=mn;wt=new mn({sortChildren:!1,defaults:as,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=kh;var Fr=[],oo={},ug=[],_u=0,fg=0,sl=function(e){return(oo[e]||ug).map(function(t){return t()})},dc=function(){var e=Date.now(),t=[];e-_u>2&&(sl("matchMediaInit"),Fr.forEach(function(n){var r=n.queries,a=n.conditions,s,o,c,l;for(o in r)s=ci.matchMedia(r[o]).matches,s&&(c=1),s!==a[o]&&(a[o]=s,l=1);l&&(n.revert(),c&&t.push(n))}),sl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),_u=e,sl("matchMedia"))},zh=function(){function i(t,n){this.selector=n&&oc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=fg++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,a){kt(n)&&(a=r,r=n,n=kt);var s=this,o=function(){var l=bt,d=s.selector,f;return l&&l!==s&&l.data.push(s),a&&(s.selector=oc(a)),bt=s,f=r.apply(s,arguments),kt(f)&&s._r.push(f),bt=l,s.selector=d,s.isReverted=!1,f};return s.last=o,n===kt?o(s,function(c){return s.add(null,c)}):n?s[n]=o:o},e.ignore=function(n){var r=bt;bt=null,n(this),bt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?function(){for(var o=a.getTweens(),c=a.data.length,l;c--;)l=a.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=a.data.length;c--;)l=a.data[c],l instanceof mn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ut)&&l.revert&&l.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=Fr.length;s--;)Fr[s].id===this.id&&Fr.splice(s,1)},e.revert=function(n){this.kill(n||{})},i}(),hg=function(){function i(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=i.prototype;return e.add=function(n,r,a){yi(n)||(n={matches:n});var s=new zh(0,a||this.scope),o=s.conditions={},c,l,d;bt&&!s.selector&&(s.selector=bt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(l in n)l==="all"?d=1:(c=ci.matchMedia(n[l]),c&&(Fr.indexOf(s)<0&&Fr.push(s),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(dc):c.addEventListener("change",dc)));return d&&r(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Eo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Th(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,r){$t(e)&&(e=$n(e)[0]);var a=Ir(e||{}).get,s=n?hh:fh;return n==="native"&&(n=""),e&&(t?s((Tn[t]&&Tn[t].get||a)(e,t,n,r)):function(o,c,l){return s((Tn[o]&&Tn[o].get||a)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=$n(e),e.length>1){var r=e.map(function(d){return Sn.quickSetter(d,t,n)}),a=r.length;return function(d){for(var f=a;f--;)r[f](d)}}e=e[0]||{};var s=Tn[t],o=Ir(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(d){var f=new s;pa._pt=0,f.init(e,n?d+n:d,pa,0,[e]),f.render(1,f),pa._pt&&wd(1,pa)}:o.set(e,c);return s?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var r,a=Sn.to(e,Nn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(c,l,d){return a.resetTo(t,c,l,d)};return s.tween=a,s},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Nr(e.ease,as.ease)),fu(as,e||{})},config:function(e){return fu(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Un[o]&&ss(t+" effect requires "+o+" plugin.")}),nl[t]=function(o,c,l){return n($n(o),Nn(c||{},a),l)},s&&(mn.prototype[t]=function(o,c,l){return this.add(nl[t](o,yi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){je[e]=Nr(t)},parseEase:function(e,t){return arguments.length?Nr(e,t):je},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),r,a;for(n.smoothChildTiming=gn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,r=wt._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&pi(n,r,r._start-r._delay),r=a;return pi(wt,n,0),n},context:function(e,t){return e?new zh(e,t):bt},matchMedia:function(e){return new hg(e)},matchMediaRefresh:function(){return Fr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||dc()},addEventListener:function(e,t){var n=oo[e]||(oo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=oo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:$m,wrapYoyo:Wm,distribute:yh,random:Sh,snap:bh,normalize:Vm,getUnit:jt,clamp:zm,splitColor:Ah,toArray:$n,selector:oc,mapRange:Eh,pipe:Hm,unitize:Gm,interpolate:qm,shuffle:xh},install:oh,effects:nl,ticker:Cn,updateRoot:mn.updateRoot,plugins:Tn,globalTimeline:wt,core:{PropTween:vn,globals:lh,Tween:Ut,Timeline:mn,Animation:ds,getCache:Ir,_removeLinkedListItem:zo,reverting:function(){return Wt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return fd=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Eo[i]=Ut[i]});Cn.add(mn.updateRoot);pa=Eo.to({},{duration:0});var pg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mg=function(e,t){var n=e._targets,r,a,s;for(r in t)for(a=n.length;a--;)s=e._ptLookup[a][r],s&&(s=s.d)&&(s._pt&&(s=pg(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[a],r))},ol=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,s){s._onInit=function(o){var c,l;if($t(a)&&(c={},_n(a,function(d){return c[d]=1}),a=c),t){c={};for(l in a)c[l]=t(a[l]);a=c}mg(o,a)}}}},Sn=Eo.registerPlugin({name:"attr",init:function(e,t,n,r,a){var s,o,c;this.tween=n;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],r,a,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ol("roundProps",lc),ol("modifiers"),ol("snap",bh))||Eo;Ut.version=mn.version=Sn.version="3.15.0";sh=1;pd()&&Ca();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vu,ar,xa,Td,Cr,xu,Ad,gg=function(){return typeof window<"u"},zi={},Rr=180/Math.PI,ya=Math.PI/180,Yr=Math.atan2,yu=1e8,Rd=/([A-Z])/g,_g=/(left|right|width|margin|padding|x)/i,vg=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Bh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Mg=function(e,t,n){return e.style[t]=n},Eg=function(e,t,n){return e.style.setProperty(t,n)},wg=function(e,t,n){return e._gsap[t]=n},Tg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ag=function(e,t,n,r,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},Rg=function(e,t,n,r,a){var s=e._gsap;s[t]=n,s.renderTransform(a,s)},Tt="transform",xn=Tt+"Origin",kg=function i(e,t){var n=this,r=this.target,a=r.style,s=r._gsap;if(e in zi&&a){if(this.tfm=this.tfm||{},e!=="transform")e=gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Li(r,o)}):this.tfm[e]=s.x?s[e]:Li(r,e),e===xn&&(this.tfm.zOrigin=s.zOrigin);else return gi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Tt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=Tt}(a||t)&&this.props.push(e,t,a[e])},Gh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cg=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Ad(),(!a||!a.isStart)&&!n[Tt]&&(Gh(n),r.zOrigin&&n[xn]&&(n[xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Vh=function(e,t){var n={target:e,props:[],revert:Cg,save:kg};return e._gsap||Sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},$h,fc=function(e,t){var n=ar.createElementNS?ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ar.createElement(e);return n&&n.style?n:ar.createElement(e)},Dn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Rd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,La(t)||t,1)||""},bu="O,Moz,ms,Ms,Webkit".split(","),La=function(e,t,n){var r=t||Cr,a=r.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(bu[s]+e in a););return s<0?null:(s===3?"ms":s>=0?bu[s]:"")+e},hc=function(){gg()&&window.document&&(vu=window,ar=vu.document,xa=ar.documentElement,Cr=fc("div")||{style:{}},fc("div"),Tt=La(Tt),xn=Tt+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$h=!!La("perspective"),Ad=Sn.core.reverting,Td=1)},Su=function(e){var t=e.ownerSVGElement,n=fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),xa.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),xa.removeChild(n),a},Mu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wh=function(e){var t,n;try{t=e.getBBox()}catch{t=Su(e),n=1}return t&&(t.width||t.height)||n||(t=Su(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mu(e,["x","cx","x1"])||0,y:+Mu(e,["y","cy","y1"])||0,width:0,height:0}:t},qh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wh(e))},fr=function(e,t){if(t){var n=e.style,r;t in zi&&t!==xn&&(t=Tt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,r,a,s){var o=new vn(e._pt,t,n,0,1,s?Hh:Bh);return e._pt=o,o.b=r,o.e=a,e._props.push(n),o},Eu={deg:1,rad:1,turn:1},Lg={grid:1,flex:1},hr=function i(e,t,n,r){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",o=Cr.style,c=_g.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),f=100,u=r==="px",h=r==="%",m,_,p,g;if(r===s||!a||Eu[r]||Eu[s])return a;if(s!=="px"&&!u&&(a=i(e,t,n,"px")),g=e.getCTM&&qh(e),(h||s==="%")&&(zi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],Lt(h?a/m*f:a/100*m);if(o[c?"width":"height"]=f+(u?s:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ar||!_.appendChild)&&(_=ar.body),p=_._gsap,p&&h&&p.width&&c&&p.time===Cn.time&&!p.uncache)return Lt(a/p.width*f);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+r,m=e[d],b?e.style[t]=b:fr(e,t)}else(h||s==="%")&&!Lg[Dn(_,"display")]&&(o.position=Dn(e,"position")),_===e&&(o.position="static"),_.appendChild(Cr),m=Cr[d],_.removeChild(Cr),o.position="absolute";return c&&h&&(p=Ir(_),p.time=Cn.time,p.width=_[d]),Lt(u?m*a/f:m&&a?f/m*a:0)},Li=function(e,t,n,r){var a;return Td||hc(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(a=fs(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:To(Dn(e,xn))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=wo[t]&&wo[t](e,t,n)||Dn(e,t)||dh(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?hr(e,t,a,n)+n:a},Pg=function(e,t,n,r){if(!n||n==="none"){var a=La(t,e,1),s=a&&Dn(e,a,1);s&&s!==n?(t=a,n=s):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var o=new vn(this._pt,e.style,t,0,1,Fh),c=0,l=0,d,f,u,h,m,_,p,g,b,T,y,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Dn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Dn(e,t)||r,_?e.style[t]=_:fr(e,t)),d=[n,r],kh(d),n=d[0],r=d[1],u=n.match(ha)||[],M=r.match(ha)||[],M.length){for(;f=ha.exec(r);)p=f[0],b=r.substring(c,f.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=u[l++]||"")&&(h=parseFloat(_)||0,y=_.substr((h+"").length),p.charAt(1)==="="&&(p=va(h,p)+y),g=parseFloat(p),T=p.substr((g+"").length),c=ha.lastIndex-T.length,T||(T=T||In.units[t]||y,c===r.length&&(r+=T,o.e+=T)),y!==T&&(h=hr(e,t,_,T)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Hh:Bh;return ah.test(r)&&(o.e=0),this._pt=o,o},wu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dg=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=wu[n]||n,t[1]=wu[r]||r,t.join(" ")},Ig=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,s=n._gsap,o,c,l;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),l=a.length;--l>-1;)o=a[l],zi[o]&&(c=1,o=o==="transformOrigin"?xn:Tt),fr(n,o);c&&(fr(n,Tt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",fs(n,1),s.uncache=1,Gh(r)))}},wo={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var s=e._pt=new vn(e._pt,t,n,0,0,Ig);return s.u=r,s.pr=-10,s.tween=a,e._props.push(n),1}}},us=[1,0,0,1,0,0],Xh={},Yh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tu=function(e){var t=Dn(e,Tt);return Yh(t)?us:t.substr(7).match(rh).map(Lt)},kd=function(e,t){var n=e._gsap||Ir(e),r=e.style,a=Tu(e),s,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?us:a):(a===us&&!e.offsetParent&&e!==xa&&!n.svg&&(c=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,xa.appendChild(e)),a=Tu(e),c?r.display=c:fr(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):xa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},pc=function(e,t,n,r,a,s){var o=e._gsap,c=a||kd(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,h=c[0],m=c[1],_=c[2],p=c[3],g=c[4],b=c[5],T=t.split(" "),y=parseFloat(T[0])||0,M=parseFloat(T[1])||0,E,A,v,w;n?c!==us&&(A=h*p-m*_)&&(v=y*(p/A)+M*(-_/A)+(_*b-p*g)/A,w=y*(-m/A)+M*(h/A)-(h*b-m*g)/A,y=v,M=w):(E=Wh(e),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(T[1]||T[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&o.smooth?(g=y-l,b=M-d,o.xOffset=f+(g*h+b*_)-g,o.yOffset=u+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[xn]="0px 0px",s&&(sr(s,o,"xOrigin",l,y),sr(s,o,"yOrigin",d,M),sr(s,o,"xOffset",f,o.xOffset),sr(s,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},fs=function(e,t){var n=e._gsap||new Lh(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=Dn(e,xn)||"0",d,f,u,h,m,_,p,g,b,T,y,M,E,A,v,w,R,C,N,O,L,z,X,$,ee,Y,Q,re,Se,Ae,qe,Fe;return d=f=u=_=p=g=b=T=y=0,h=m=1,n.svg=!!(e.getCTM&&qh(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Tt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Tt]!=="none"?c[Tt]:"")),r.scale=r.rotate=r.translate="none"),A=kd(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),l=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),pc(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==us&&(C=A[0],N=A[1],O=A[2],L=A[3],d=z=A[4],f=X=A[5],A.length===6?(h=Math.sqrt(C*C+N*N),m=Math.sqrt(L*L+O*O),_=C||N?Yr(N,C)*Rr:0,b=O||L?Yr(O,L)*Rr+_:0,b&&(m*=Math.abs(Math.cos(b*ya))),n.svg&&(d-=M-(M*C+E*O),f-=E-(M*N+E*L))):(Fe=A[6],Ae=A[7],Q=A[8],re=A[9],Se=A[10],qe=A[11],d=A[12],f=A[13],u=A[14],v=Yr(Fe,Se),p=v*Rr,v&&(w=Math.cos(-v),R=Math.sin(-v),$=z*w+Q*R,ee=X*w+re*R,Y=Fe*w+Se*R,Q=z*-R+Q*w,re=X*-R+re*w,Se=Fe*-R+Se*w,qe=Ae*-R+qe*w,z=$,X=ee,Fe=Y),v=Yr(-O,Se),g=v*Rr,v&&(w=Math.cos(-v),R=Math.sin(-v),$=C*w-Q*R,ee=N*w-re*R,Y=O*w-Se*R,qe=L*R+qe*w,C=$,N=ee,O=Y),v=Yr(N,C),_=v*Rr,v&&(w=Math.cos(v),R=Math.sin(v),$=C*w+N*R,ee=z*w+X*R,N=N*w-C*R,X=X*w-z*R,C=$,z=ee),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),h=Lt(Math.sqrt(C*C+N*N+O*O)),m=Lt(Math.sqrt(X*X+Fe*Fe)),v=Yr(z,X),b=Math.abs(v)>2e-4?v*Rr:0,y=qe?1/(qe<0?-qe:qe):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yh(Dn(e,Tt)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(h*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=u+s,n.scaleX=Lt(h),n.scaleY=Lt(m),n.rotation=Lt(_)+o,n.rotationX=Lt(p)+o,n.rotationY=Lt(g)+o,n.skewX=b+o,n.skewY=T+o,n.transformPerspective=y+s,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[xn]=To(l)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?Ng:$h?Kh:Ug,n.uncache=0,n},To=function(e){return(e=e.split(" "))[0]+" "+e[1]},ll=function(e,t,n){var r=jt(t);return Lt(parseFloat(t)+parseFloat(hr(e,"x",n+"px",r)))+r},Ug=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kh(e,t)},_r="0deg",Na="0px",vr=") ",Kh=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,s=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,h=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,T=n.zOrigin,y="",M=g==="auto"&&e&&e!==1||g===!0;if(T&&(f!==_r||d!==_r)){var E=parseFloat(d)*ya,A=Math.sin(E),v=Math.cos(E),w;E=parseFloat(f)*ya,w=Math.cos(E),s=ll(b,s,A*w*-T),o=ll(b,o,-Math.sin(E)*-T),c=ll(b,c,v*w*-T+T)}p!==Na&&(y+="perspective("+p+vr),(r||a)&&(y+="translate("+r+"%, "+a+"%) "),(M||s!==Na||o!==Na||c!==Na)&&(y+=c!==Na||M?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+vr),l!==_r&&(y+="rotate("+l+vr),d!==_r&&(y+="rotateY("+d+vr),f!==_r&&(y+="rotateX("+f+vr),(u!==_r||h!==_r)&&(y+="skew("+u+", "+h+vr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+vr),b.style[Tt]=y||"translate(0, 0)"},Ng=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,s=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,h=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,T=parseFloat(s),y=parseFloat(o),M,E,A,v,w;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=ya,l*=ya,M=Math.cos(c)*f,E=Math.sin(c)*f,A=Math.sin(c-l)*-u,v=Math.cos(c-l)*u,l&&(d*=ya,w=Math.tan(l-d),w=Math.sqrt(1+w*w),A*=w,v*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=Lt(M),E=Lt(E),A=Lt(A),v=Lt(v)):(M=f,v=u,E=A=0),(T&&!~(s+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=hr(h,"x",s,"px"),y=hr(h,"y",o,"px")),(m||_||p||g)&&(T=Lt(T+m-(m*M+_*A)+p),y=Lt(y+_-(m*E+_*v)+g)),(r||a)&&(w=h.getBBox(),T=Lt(T+r/100*w.width),y=Lt(y+a/100*w.height)),w="matrix("+M+","+E+","+A+","+v+","+T+","+y+")",h.setAttribute("transform",w),b&&(h.style[Tt]=w)},Fg=function(e,t,n,r,a){var s=360,o=$t(a),c=parseFloat(a)*(o&&~a.indexOf("rad")?Rr:1),l=c-r,d=r+l+"deg",f,u;return o&&(f=a.split("_")[1],f==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),f==="cw"&&l<0?l=(l+s*yu)%s-~~(l/s)*s:f==="ccw"&&l>0&&(l=(l-s*yu)%s-~~(l/s)*s)),e._pt=u=new vn(e._pt,t,n,r,l,xg),u.e=d,u.u="deg",e._props.push(n),u},Au=function(e,t){for(var n in t)e[n]=t[n];return e},Og=function(e,t,n){var r=Au({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,c,l,d,f,u,h,m;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),s[Tt]=t,o=fs(n,1),fr(n,Tt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Tt],s[Tt]=t,o=fs(n,1),s[Tt]=l);for(c in zi)l=r[c],d=o[c],l!==d&&a.indexOf(c)<0&&(h=jt(l),m=jt(d),f=h!==m?hr(n,c,l,m):parseFloat(l),u=parseFloat(d),e._pt=new vn(e._pt,o,c,f,u-f,uc),e._pt.u=m||0,e._props.push(c));Au(o,r)};_n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",a="Left",s=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(o){return e<2?i+o:"border"+o+i});wo[e>1?"border"+i:i]=function(o,c,l,d,f){var u,h;if(arguments.length<4)return u=s.map(function(m){return Li(o,m,l)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},s.forEach(function(m,_){return h[m]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,h,f)}});var Zh={name:"css",register:hc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var s=this._props,o=e.style,c=n.vars.startAt,l,d,f,u,h,m,_,p,g,b,T,y,M,E,A,v,w;Td||hc(),this.styles=this.styles||Vh(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Tn[_]&&Ph(_,t,n,r,e,a)))){if(h=typeof d,m=wo[_],h==="function"&&(d=d.call(n,r,e,a),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=ls(d)),m)m(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",dr.lastIndex=0,dr.test(l)||(p=jt(l),g=jt(d),g?p!==g&&(l=hr(e,_,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,r,a,0,0,_),s.push(_),v.push(_,0,o[_]);else if(h!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,a):c[_],$t(l)&&~l.indexOf("random(")&&(l=ls(l)),jt(l+"")||l==="auto"||(l+=In.units[_]||jt(Li(e,_))||""),(l+"").charAt(1)==="="&&(l=Li(e,_))):l=Li(e,_),u=parseFloat(l),b=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),f=parseFloat(d),_ in gi&&(_==="autoAlpha"&&(u===1&&Li(e,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,o.visibility),sr(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in zi,T){if(this.styles.save(_),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Dn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=Dn(e,"perspective"),R?e.style.perspective=R:fr(e,"perspective")}f=parseFloat(d)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||fs(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new vn(this._pt,o,Tt,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new vn(this._pt,M,"scaleY",M.scaleY,(b?va(M.scaleY,b+f):f)-M.scaleY||0,uc),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(xn,0,o[xn]),d=Dg(d),M.svg?pc(e,d,0,E,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==M.zOrigin&&sr(this,M,"zOrigin",M.zOrigin,g),sr(this,o,_,To(l),To(d)));continue}else if(_==="svgOrigin"){pc(e,d,1,E,0,this);continue}else if(_ in Xh){Fg(this,M,_,u,b?va(u,b+d):d);continue}else if(_==="smoothOrigin"){sr(this,M,"smooth",M.smooth,d);continue}else if(_==="force3D"){M[_]=d;continue}else if(_==="transform"){Og(this,d,e);continue}}else _ in o||(_=La(_)||_);if(T||(f||f===0)&&(u||u===0)&&!vg.test(d)&&_ in o)p=(l+"").substr((u+"").length),f||(f=0),g=jt(d)||(_ in In.units?In.units[_]:p),p!==g&&(u=hr(e,_,l,g)),this._pt=new vn(this._pt,T?M:o,_,u,(b?va(u,b+f):f)-u,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Sg:uc),this._pt.u=g||0,T&&w!==d?(this._pt.b=l,this._pt.e=w,this._pt.r=bg):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=yg);else if(_ in o)Pg.call(this,e,_,l,b?b+d:d);else if(_ in e)this.add(e,_,l||e[_],b?b+d:d,r,a);else if(_!=="parseTransform"){gd(_,d);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,l||e[_])),s.push(_)}}A&&Oh(this)},render:function(e,t){if(t.tween._time||!Ad())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:gi,getSetter:function(e,t,n){var r=gi[t];return r&&r.indexOf(",")<0&&(t=r),t in zi&&t!==xn&&(e._gsap.x||Li(e,"x"))?n&&xu===n?t==="scale"?Tg:wg:(xu=n||{})&&(t==="scale"?Ag:Rg):e.style&&!hd(e.style[t])?Mg:~t.indexOf("-")?Eg:Ed(e,t)},core:{_removeProperty:fr,_getMatrix:kd}};Sn.utils.checkPrefix=La;Sn.core.getStyleSaver=Vh;(function(i,e,t,n){var r=_n(i+","+e+","+t,function(a){zi[a]=1});_n(e,function(a){In.units[a]="deg",Xh[a]=1}),gi[r[13]]=i+","+e,_n(n,function(a){var s=a.split(":");gi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){In.units[i]="px"});Sn.registerPlugin(Zh);var Bi=Sn.registerPlugin(Zh)||Sn;Bi.core.Tween;Bi.matchMedia();function bs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Ru=new WeakMap;function zg(i,e){const t=Ru.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Ru.set(i,t),bs()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const r=document.createElement("span");r.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const a=document.createElement("span");a.textContent=n,a.style.cssText="display:block;";const s=document.createElement("span");s.textContent=e,s.style.cssText="display:block; position:absolute; left:0; top:100%;",r.append(a,s),i.appendChild(r),t.tween=Bi.to([a,s],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Jh(i){if(bs())return;const e=Array.from(i.children).slice(0,8);e.length&&Bi.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Cd(i){bs()||!i.length||Bi.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Ld(i){bs()||Bi.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function Bg(i,e){if(bs()){e();return}Bi.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{Bi.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="186",Hg=0,ku=1,Gg=2,lo=1,Vg=2,Ya=3,Or=0,yn=1,mi=2,Ii=0,es=1,Cu=2,Lu=3,Pu=4,$g=5,da=100,Wg=101,qg=102,Xg=103,Yg=104,Kg=200,Zg=201,Jg=202,Qg=203,Qh=204,jh=205,jg=206,e_=207,t_=208,n_=209,i_=210,r_=211,a_=212,s_=213,o_=214,mc=0,gc=1,_c=2,hs=3,vc=4,xc=5,yc=6,bc=7,Dd=0,l_=1,c_=2,xi=0,ep=1,tp=2,np=3,ip=4,rp=5,ap=6,sp=7,op=300,zr=301,Pa=302,cl=303,dl=304,Go=306,Sc=1e3,Pi=1001,Mc=1002,Nt=1003,d_=1004,Ls=1005,en=1006,ul=1007,Lr=1008,Ln=1009,lp=1010,cp=1011,ps=1012,Id=1013,bi=1014,_i=1015,Si=1016,Ud=1017,Nd=1018,ms=1020,dp=35902,up=35899,fp=1021,hp=1022,ei=1023,Hi=1026,Pr=1027,pp=1028,Fd=1029,Br=1030,Od=1031,zd=1033,co=33776,uo=33777,fo=33778,ho=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Rc=36196,kc=37492,Cc=37496,Lc=37488,Pc=37489,Ao=37490,Dc=37491,Ic=37808,Uc=37809,Nc=37810,Fc=37811,Oc=37812,zc=37813,Bc=37814,Hc=37815,Gc=37816,Vc=37817,$c=37818,Wc=37819,qc=37820,Xc=37821,Yc=36492,Kc=36494,Zc=36495,Jc=36283,Qc=36284,Ro=36285,jc=36286,u_=3200,ed=0,f_=1,nr="",An="srgb",ko="srgb-linear",Co="linear",ct="srgb",fl=7680,h_=519,p_=512,m_=513,g_=514,Bd=515,__=516,v_=517,Hd=518,x_=519,y_=35044,Du="300 es",vi=2e3,gs=2001;function b_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S_(){const i=_s("canvas");return i.style.display="block",i}const Iu={};function Uu(...i){const e="THREE."+i.shift();console.log(e,...i)}function mp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=mp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=mp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ba(...i){const e=i.join(" ");e in Iu||(Iu[e]=!0,Ne(...i))}function M_(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const E_={[mc]:gc,[_c]:yc,[vc]:bc,[hs]:xc,[gc]:mc,[yc]:_c,[bc]:vc,[xc]:hs};class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,td=180/Math.PI;function Ss(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function w_(i,e){return(i%e+e)%e}function hl(i,e,t){return(1-t)*i+t*e}function T_(i){return i*po}function Fa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const A_={degToRad:T_};class tt{static{tt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ia{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3],u=a[s+0],h=a[s+1],m=a[s+2],_=a[s+3];if(f!==_||c!==u||l!==h||d!==m){let p=c*u+l*h+d*m+f*_;p<0&&(u=-u,h=-h,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T,c=c*g+u*o,l=l*g+h*o,d=d*g+m*o,f=f*g+_*o}else{c=c*g+u*o,l=l*g+h*o,d=d*g+m*o,f=f*g+_*o;const b=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=b,l*=b,d*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=a[s],u=a[s+1],h=a[s+2],m=a[s+3];return e[t]=o*m+d*f+c*h-l*u,e[t+1]=c*m+d*u+l*f-o*h,e[t+2]=l*m+d*h+o*u-c*f,e[t+3]=d*m-o*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),f=o(a/2),u=c(n/2),h=c(r/2),m=c(a/2);switch(s){case"XYZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"YXZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"ZXY":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"ZYX":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"YZX":this._x=u*d*f+l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f-u*h*m;break;case"XZY":this._x=u*d*f-l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f+u*h*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(a-l)*h,this._z=(s-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(a-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(s-r)/h,this._x=(a+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+r*l-a*c,this._y=r*d+s*c+a*o-n*l,this._z=a*d+s*l+n*c-r*o,this._w=s*d-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{W.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),d=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+c*l+s*f-o*d,this.y=n+c*d+o*l-a*f,this.z=r+c*f+a*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new W,Nu=new Ia;class Oe{static{Oe.prototype.isMatrix3=!0}constructor(e,t,n,r,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],m=n[8],_=r[0],p=r[3],g=r[6],b=r[1],T=r[4],y=r[7],M=r[2],E=r[5],A=r[8];return a[0]=s*_+o*b+c*M,a[3]=s*p+o*T+c*E,a[6]=s*g+o*y+c*A,a[1]=l*_+d*b+f*M,a[4]=l*p+d*T+f*E,a[7]=l*g+d*y+f*A,a[2]=u*_+h*b+m*M,a[5]=u*p+h*T+m*E,a[8]=u*g+h*y+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*a*d+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*s-o*l,u=o*c-d*a,h=l*a-s*c,m=t*f+n*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*l-d*n)*_,e[2]=(o*n-r*s)*_,e[3]=u*_,e[4]=(d*t-r*c)*_,e[5]=(r*a-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return ba("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(e,t)),this}rotate(e){return ba("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return ba("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Oe,Fu=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R_(){const i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ct&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(r.r=Sa(r.r),r.g=Sa(r.g),r.b=Sa(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?Co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ko]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Je=R_();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kr;class k_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=_s("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ui(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Gd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(gl(r[s].image)):a.push(gl(r[s]))}else a=gl(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?k_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let L_=0;const _l=new W;class Ft extends $r{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Pi,r=Pi,a=en,s=Lr,o=ei,c=Ln,l=Ft.DEFAULT_ANISOTROPY,d=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Ss(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=op;Ft.DEFAULT_ANISOTROPY=1;class At{static{At.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(h+1)/2,M=(g+1)/2,E=(d+u)/4,A=(f+_)/4,v=(m+p)/4;return T>y&&T>M?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=E/n,a=A/n):y>M?y<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),n=E/r,a=v/r):M<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),n=A/a,r=v/a),this.set(n,r,a,t),this}let b=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(f-_)/b,this.z=(u-d)/b,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends $r{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Ft(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends P_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gp extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Rt{static{Rt.prototype.isMatrix4=!0}constructor(e,t,n,r,a,s,o,c,l,d,f,u,h,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,d,f,u,h,m,_,p)}set(e,t,n,r,a,s,o,c,l,d,f,u,h,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=f,g[14]=u,g[3]=h,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),a=1/Zr.setFromMatrixColumn(e,1).length(),s=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=s*d,h=s*f,m=o*d,_=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+m*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=m+h*l,t[10]=s*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u+_*o,t[4]=m*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=h*o-m,t[6]=_+u*o,t[10]=s*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u-_*o,t[4]=-s*f,t[8]=m+h*o,t[1]=h+m*o,t[5]=s*d,t[9]=_-u*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const u=s*d,h=s*f,m=o*d,_=o*f;t[0]=c*d,t[4]=m*l-h,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=h*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const u=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=_-u*f,t[8]=m*f+h,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*f+m,t[10]=u-_*f}else if(e.order==="XZY"){const u=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+_,t[5]=s*d,t[9]=h*f-m,t[2]=m*f-h,t[6]=o*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Xi.crossVectors(n,Mn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Xi.crossVectors(n,Mn)),Xi.normalize(),Ps.crossVectors(Mn,Xi),r[0]=Xi.x,r[4]=Ps.x,r[8]=Mn.x,r[1]=Xi.y,r[5]=Ps.y,r[9]=Mn.y,r[2]=Xi.z,r[6]=Ps.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],T=n[7],y=n[11],M=n[15],E=r[0],A=r[4],v=r[8],w=r[12],R=r[1],C=r[5],N=r[9],O=r[13],L=r[2],z=r[6],X=r[10],$=r[14],ee=r[3],Y=r[7],Q=r[11],re=r[15];return a[0]=s*E+o*R+c*L+l*ee,a[4]=s*A+o*C+c*z+l*Y,a[8]=s*v+o*N+c*X+l*Q,a[12]=s*w+o*O+c*$+l*re,a[1]=d*E+f*R+u*L+h*ee,a[5]=d*A+f*C+u*z+h*Y,a[9]=d*v+f*N+u*X+h*Q,a[13]=d*w+f*O+u*$+h*re,a[2]=m*E+_*R+p*L+g*ee,a[6]=m*A+_*C+p*z+g*Y,a[10]=m*v+_*N+p*X+g*Q,a[14]=m*w+_*O+p*$+g*re,a[3]=b*E+T*R+y*L+M*ee,a[7]=b*A+T*C+y*z+M*Y,a[11]=b*v+T*N+y*X+M*Q,a[15]=b*w+T*O+y*$+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],m=e[3],_=e[7],p=e[11],g=e[15],b=c*h-l*u,T=o*h-l*f,y=o*u-c*f,M=s*h-l*d,E=s*u-c*d,A=s*f-o*d;return t*(_*b-p*T+g*y)-n*(m*b-p*M+g*E)+r*(m*T-_*M+g*A)-a*(m*y-_*E+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-n*(a*d-o*c)+r*(a*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=t*o-n*s,T=t*c-r*s,y=t*l-a*s,M=n*c-r*o,E=n*l-a*o,A=r*l-a*c,v=d*_-f*m,w=d*p-u*m,R=d*g-h*m,C=f*p-u*_,N=f*g-h*_,O=u*g-h*p,L=b*O-T*N+y*C+M*R-E*w+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*O-c*N+l*C)*z,e[1]=(r*N-n*O-a*C)*z,e[2]=(_*A-p*E+g*M)*z,e[3]=(u*E-f*A-h*M)*z,e[4]=(c*R-s*O-l*w)*z,e[5]=(t*O-r*R+a*w)*z,e[6]=(p*y-m*A-g*T)*z,e[7]=(d*A-u*y+h*T)*z,e[8]=(s*N-o*R+l*v)*z,e[9]=(n*R-t*N-a*v)*z,e[10]=(m*E-_*y+g*b)*z,e[11]=(f*y-d*E-h*b)*z,e[12]=(o*w-s*C-c*v)*z,e[13]=(t*C-n*w+r*v)*z,e[14]=(_*T-m*M-p*b)*z,e[15]=(d*M-f*T+u*b)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,d=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*s,0,l*c-r*o,d*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,d=s+s,f=o+o,u=a*l,h=a*d,m=a*f,_=s*d,p=s*f,g=o*f,b=c*l,T=c*d,y=c*f,M=n.x,E=n.y,A=n.z;return r[0]=(1-(_+g))*M,r[1]=(h+y)*M,r[2]=(m-T)*M,r[3]=0,r[4]=(h-y)*E,r[5]=(1-(u+g))*E,r[6]=(p+b)*E,r[7]=0,r[8]=(m+T)*A,r[9]=(p-b)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),c=Zr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),Xn.copy(this);const l=1/s,d=1/o,f=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,r,a,s,o=vi,c=!1){const l=this.elements,d=2*a/(t-e),f=2*a/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(c)m=a/(s-a),_=s*a/(s-a);else if(o===vi)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===gs)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=vi,c=!1){const l=this.elements,d=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),h=-(n+r)/(n-r);let m,_;if(c)m=1/(s-a),_=s/(s-a);else if(o===vi)m=-2/(s-a),_=-(s+a)/(s-a);else if(o===gs)m=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new W,Xn=new Rt,I_=new W(0,0,0),U_=new W(1,1,1),Xi=new W,Ps=new W,Mn=new W,zu=new Rt,Bu=new Ia;class pr{constructor(e=0,t=0,n=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const Hu=new W,Jr=new Ia,Ei=new Rt,Ds=new W,Oa=new W,F_=new W,O_=new Ia,Gu=new W(1,0,0),Vu=new W(0,1,0),$u=new W(0,0,1),Wu={type:"added"},z_={type:"removed"},Qr={type:"childadded",child:null},vl={type:"childremoved",child:null};class nn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,t=new pr,n=new Ia,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Oe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Oa,Ds,this.up):Ei.lookAt(Ds,Oa,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ei),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=r,n;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,m=.005;l.inputState.pinching&&u>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=w_(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=yl(s,a,e+1/3),this.g=yl(s,a,e),this.b=yl(s,a,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=An){function n(a){a!==void 0&&parseFloat(a)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,r=Jt.g,a=Jt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=d<=.5?f/(s+o):f/(2-s-o),s){case n:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-n)/f+2;break;case a:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=An){Je.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,r=Jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Is);const n=hl(Yi.h,Is.h,t),r=hl(Yi.s,Is.s,t),a=hl(Yi.l,Is.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new rt;rt.NAMES=vp;class H_ extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new W,wi=new W,bl=new W,Ti=new W,jr=new W,ea=new W,qu=new W,Sl=new W,Ml=new W,El=new W,wl=new At,Tl=new At,Al=new At;class Qn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yn.subVectors(e,t),r.cross(Yn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Yn.subVectors(r,t),wi.subVectors(n,t),bl.subVectors(e,t);const s=Yn.dot(Yn),o=Yn.dot(wi),c=Yn.dot(bl),l=wi.dot(wi),d=wi.dot(bl),f=s*l-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,h=(l*c-o*d)*u,m=(s*d-o*c)*u;return a.set(1-h-m,m,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ti.x),c.addScaledVector(s,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(wl,a.x),s.addScaledVector(Tl,a.y),s.addScaledVector(Al,a.z),s}static isFrontFacing(e,t,n,r){return Yn.subVectors(n,t),wi.subVectors(e,t),Yn.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Yn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Qn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;jr.subVectors(r,n),ea.subVectors(a,n),Sl.subVectors(e,n);const c=jr.dot(Sl),l=ea.dot(Sl);if(c<=0&&l<=0)return t.copy(n);Ml.subVectors(e,r);const d=jr.dot(Ml),f=ea.dot(Ml);if(d>=0&&f<=d)return t.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(jr,s);El.subVectors(e,a);const h=jr.dot(El),m=ea.dot(El);if(m>=0&&h<=m)return t.copy(a);const _=h*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ea,o);const p=d*m-h*f;if(p<=0&&f-d>=0&&h-m>=0)return qu.subVectors(a,r),o=(f-d)/(f-d+(h-m)),t.copy(r).addScaledVector(qu,o);const g=1/(p+_+u);return s=_*g,o=u*g,t.copy(n).addScaledVector(jr,s).addScaledVector(ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ms{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Kn):Kn.fromBufferAttribute(a,s),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),Ns.subVectors(this.max,za),ta.subVectors(e.a,za),na.subVectors(e.b,za),ia.subVectors(e.c,za),Ki.subVectors(na,ta),Zi.subVectors(ia,na),xr.subVectors(ta,ia);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-xr.z,xr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,xr.z,0,-xr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-xr.y,xr.x,0];return!Rl(t,ta,na,ia,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,ta,na,ia,Ns))?!1:(Fs.crossVectors(Ki,Zi),t=[Fs.x,Fs.y,Fs.z],Rl(t,ta,na,ia,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new W,new W,new W,new W,new W,new W,new W,new W],Kn=new W,Us=new Ms,ta=new W,na=new W,ia=new W,Ki=new W,Zi=new W,xr=new W,za=new W,Ns=new W,Fs=new W,yr=new W;function Rl(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){yr.fromArray(i,a);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),l=t.dot(yr),d=n.dot(yr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const It=new W,Os=new tt;let G_=0;class Ni extends $r{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=y_,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xp extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yp extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fi extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}const V_=new Ms,Ba=new W,kl=new W;class Vd{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):V_.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ba,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(kl)),this.expandByPoint(Ba.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $_=0;const On=new Rt,Cl=new nn,ra=new W,En=new Ms,Ha=new Ms,Ht=new W;class Vi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?yp:xp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(En.min,Ha.min),En.expandByPoint(Ht),Ht.addVectors(En.max,Ha.max),En.expandByPoint(Ht)):(En.expandByPoint(Ha.min),En.expandByPoint(Ha.max))}En.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Ht.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ht.fromBufferAttribute(o,l),c&&(ra.fromBufferAttribute(e,l),Ht.add(ra)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Ni(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new W,c[v]=new W;const l=new W,d=new W,f=new W,u=new tt,h=new tt,m=new tt,_=new W,p=new W;function g(v,w,R){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(a,v),h.fromBufferAttribute(a,w),m.fromBufferAttribute(a,R),d.sub(l),f.sub(l),h.sub(u),m.sub(u);const C=1/(h.x*m.y-m.x*h.y);isFinite(C)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(C),p.copy(f).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(C),o[v].add(_),o[w].add(_),o[R].add(_),c[v].add(p),c[w].add(p),c[R].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,w=b.length;v<w;++v){const R=b[v],C=R.start,N=R.count;for(let O=C,L=C+N;O<L;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new W,y=new W,M=new W,E=new W;function A(v){M.fromBufferAttribute(r,v),E.copy(M);const w=o[v];T.copy(w),T.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(E,w);const C=y.dot(c[v])<0?-1:1;s.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,w=b.length;v<w;++v){const R=b[v],C=R.start,N=R.count;for(let O=C,L=C+N;O<L;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const r=new W,a=new W,s=new W,o=new W,c=new W,l=new W,d=new W,f=new W;if(e)for(let u=0,h=e.count;u<h;u+=3){const m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let h=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*d;for(let g=0;g<d;g++)u[m++]=l[h++]}return new Ni(u,d,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],f=a[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new W,W_=new W,q_=new Oe;class ji{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ll.subVectors(n,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ll),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||q_.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X_=0;class Es extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=es,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=jh,this.blendEquation=da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fl,this.stencilZFail=fl,this.stencilZPass=fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ji().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new W,Pl=new W,zs=new W,Bs=new W;class Y_{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pl.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Bs.copy(this.origin).sub(Pl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(zs),o=Bs.dot(this.direction),c=-Bs.dot(zs),l=Bs.lengthSq(),d=Math.abs(1-s*s);let f,u,h,m;if(d>0)if(f=s*c-o,u=s*o-c,m=a*d,f>=0)if(u>=-m)if(u<=m){const _=1/d;f*=_,u*=_,h=f*(f+s*u+2*o)+u*(s*f+u+2*c)+l}else u=a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;else u=-a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-s*a+o)),u=f>0?-a:Math.min(Math.max(-a,-c),a),h=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-a,-c),a),h=u*(u+2*c)+l):(f=Math.max(0,-(s*a+o)),u=f>0?a:Math.min(Math.max(-a,-c),a),h=-f*f+u*(u+2*c)+l);else u=s>0?-a:a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pl).addScaledVector(zs,u),h}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,a){const s=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,m=t.x-s.x,_=t.y-s.y,p=t.z-s.z,g=n.x-s.x,b=n.y-s.y,T=n.z-s.z,y=Math.abs(c),M=Math.abs(l),E=Math.abs(d);let A,v,w,R,C,N,O,L,z,X,$,ee;if(y>=M&&y>=E?(w=c,N=f,z=m,ee=g,c>=0?(A=l,v=d,R=u,C=h,O=_,L=p,X=b,$=T):(A=d,v=l,R=h,C=u,O=p,L=_,X=T,$=b)):M>=E?(w=l,N=u,z=_,ee=b,l>=0?(A=d,v=c,R=h,C=f,O=p,L=m,X=T,$=g):(A=c,v=d,R=f,C=h,O=m,L=p,X=g,$=T)):(w=d,N=h,z=p,ee=T,d>=0?(A=c,v=l,R=f,C=u,O=m,L=_,X=g,$=b):(A=l,v=c,R=u,C=f,O=_,L=m,X=b,$=g)),w===0)return null;const Y=A/w,Q=v/w,re=1/w,Se=R-Y*N,Ae=C-Q*N,qe=O-Y*z,Fe=L-Q*z,K=X-Y*ee,P=$-Q*ee,G=K*Fe-P*qe,de=Se*P-Ae*K,Pe=qe*Ae-Fe*Se;if(r){if(G<0||de<0||Pe<0)return null}else if((G<0||de<0||Pe<0)&&(G>0||de>0||Pe>0))return null;const ye=G+de+Pe;if(ye===0)return null;const Be=re*(G*N+de*z+Pe*ee);return(ye>0?Be<0:Be>0)?null:this.at(Be/ye,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bp extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xu=new Rt,br=new Y_,Hs=new Vd,Yu=new W,Gs=new W,Vs=new W,$s=new W,Dl=new W,Ws=new W,Ku=new W,qs=new W;class Wn extends nn{constructor(e=new Vi,t=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ws.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=o[c],f=a[c];d!==0&&(Dl.fromBufferAttribute(f,e),s?Ws.addScaledVector(Dl,d):Ws.addScaledVector(Dl.sub(t),d))}t.add(Ws)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(a),br.copy(e.ray).recast(e.near),!(Hs.containsPoint(br.origin)===!1&&(br.intersectSphere(Hs,Yu)===null||br.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(Xu.copy(a).invert(),br.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,u=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=b,M=T;y<M;y+=3){const E=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);r=Xs(this,g,e,n,l,d,f,E,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);r=Xs(this,s,e,n,l,d,f,b,T,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=b,M=T;y<M;y+=3){const E=y,A=y+1,v=y+2;r=Xs(this,g,e,n,l,d,f,E,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=p,T=p+1,y=p+2;r=Xs(this,s,e,n,l,d,f,b,T,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function K_(i,e,t,n,r,a,s,o){let c;if(e.side===yn?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===Or,o),c===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:i}}function Xs(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Gs),i.getVertexPosition(c,Vs),i.getVertexPosition(l,$s);const d=K_(i,e,t,n,Gs,Vs,$s,Ku);if(d){const f=new W;Qn.getBarycoord(Ku,Gs,Vs,$s,f),r&&(d.uv=Qn.getInterpolatedAttribute(r,o,c,l,f,new tt)),a&&(d.uv1=Qn.getInterpolatedAttribute(a,o,c,l,f,new tt)),s&&(d.normal=Qn.getInterpolatedAttribute(s,o,c,l,f,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new W,materialIndex:0};Qn.getNormal(Gs,Vs,$s,u.normal),d.face=u,d.barycoord=f}return d}class Z_ extends Ft{constructor(e=null,t=1,n=1,r,a,s,o,c,l=Nt,d=Nt,f,u){super(null,s,o,c,l,d,r,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sr=new Vd,J_=new tt(.5,.5),Ys=new W;class $d{constructor(e=new ji,t=new ji,n=new ji,r=new ji,a=new ji,s=new ji){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],d=a[4],f=a[5],u=a[6],h=a[7],m=a[8],_=a[9],p=a[10],g=a[11],b=a[12],T=a[13],y=a[14],M=a[15];if(r[0].setComponents(l-s,h-d,g-m,M-b).normalize(),r[1].setComponents(l+s,h+d,g+m,M+b).normalize(),r[2].setComponents(l+o,h+f,g+_,M+T).normalize(),r[3].setComponents(l-o,h-f,g-_,M-T).normalize(),n)r[4].setComponents(c,u,p,y).normalize(),r[5].setComponents(l-c,h-u,g-p,M-y).normalize();else if(r[4].setComponents(l-c,h-u,g-p,M-y).normalize(),t===vi)r[5].setComponents(l+c,h+u,g+p,M+y).normalize();else if(t===gs)r[5].setComponents(c,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const t=J_.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sp extends Ft{constructor(e=[],t=zr,n,r,a,s,o,c,l,d){super(e,t,n,r,a,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q_ extends Ft{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends Ft{constructor(e,t,n=bi,r,a,s,o=Nt,c=Nt,l,d=Hi,f=1){if(d!==Hi&&d!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,a,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class j_ extends vs{constructor(e,t=bi,n=zr,r,a,s=Nt,o=Nt,c,l=Hi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,a,s,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mp extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends Vi{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],d=[],f=[];let u=0,h=0;m("z","y","x",-1,-1,n,t,e,s,a,0),m("z","y","x",1,-1,n,t,-e,s,a,1),m("x","z","y",1,1,e,n,t,r,s,2),m("x","z","y",1,-1,e,n,-t,r,s,3),m("x","y","z",1,-1,e,t,n,r,a,4),m("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Fi(l,3)),this.setAttribute("normal",new Fi(d,3)),this.setAttribute("uv",new Fi(f,2));function m(_,p,g,b,T,y,M,E,A,v,w){const R=y/A,C=M/v,N=y/2,O=M/2,L=E/2,z=A+1,X=v+1;let $=0,ee=0;const Y=new W;for(let Q=0;Q<X;Q++){const re=Q*C-O;for(let Se=0;Se<z;Se++){const Ae=Se*R-N;Y[_]=Ae*b,Y[p]=re*T,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Se/A),f.push(1-Q/v),$+=1}}for(let Q=0;Q<v;Q++)for(let re=0;re<A;re++){const Se=u+re+z*Q,Ae=u+re+z*(Q+1),qe=u+(re+1)+z*(Q+1),Fe=u+(re+1)+z*Q;c.push(Se,Ae,Fe),c.push(Ae,qe,Fe),ee+=6}o.addGroup(h,ee,w),h+=ee,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ws extends Vi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,f=e/o,u=t/c,h=[],m=[],_=[],p=[];for(let g=0;g<d;g++){const b=g*u-s;for(let T=0;T<l;T++){const y=T*f-a;m.push(y,-b,0),_.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const T=b+l*g,y=b+l*(g+1),M=b+1+l*(g+1),E=b+1+l*g;h.push(T,y,E),h.push(y,M,E)}this.setIndex(h),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(_,3)),this.setAttribute("uv",new Fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}function Da(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Zu(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Zu(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Da(i[t]);for(const r in n)e[r]=n[r]}return e}function Zu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function e0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ep(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const t0={clone:Da,merge:on};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(r.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class r0 extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nd extends Es{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Dd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a0 extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s0 extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Il={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ju(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ju(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ju(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class o0{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,a===!1&&r.onStart!==void 0&&r.onStart(d,s,o),a=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const h=l[f],m=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const l0=new o0;class wp{constructor(e){this.manager=e!==void 0?e:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const aa=new WeakMap;class c0 extends wp{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Il.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let f=aa.get(s);f===void 0&&(f=[],aa.set(s,f)),f.push({onLoad:t,onError:r})}return s}const o=_s("img");function c(){d(),t&&t(this);const f=aa.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}aa.delete(this),a.manager.itemEnd(e)}function l(f){d(),r&&r(f),Il.remove(`image:${e}`);const u=aa.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onError&&m.onError(f)}aa.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Il.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Tp extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ul=new Rt,Qu=new W,ju=new W;class d0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ul,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,s=r?r.z/a.x:1,o=r?r.w/a.y:1,c=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ks=new W,Zs=new Ia,si=new W;class Ap extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,Zs,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Zs,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ks,Zs,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Zs,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new W,ef=new tt,tf=new tt;class Gn extends Ap{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wd extends Ap{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u0 extends d0{constructor(){super(new Wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nf extends Tp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new u0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class f0 extends Tp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const sa=-90,oa=1;class h0 extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(sa,oa,e,t);r.layers=this.layers,this.add(r);const a=new Gn(sa,oa,e,t);a.layers=this.layers,this.add(a);const s=new Gn(sa,oa,e,t);s.layers=this.layers,this.add(s);const o=new Gn(sa,oa,e,t);o.layers=this.layers,this.add(o);const c=new Gn(sa,oa,e,t);c.layers=this.layers,this.add(c);const l=new Gn(sa,oa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class p0 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class m0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Rp{static{Rp.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}}function rf(i,e,t,n){const r=g0(n);switch(t){case fp:return i*e;case pp:return i*e/r.components*r.byteLength;case Fd:return i*e/r.components*r.byteLength;case Br:return i*e*2/r.components*r.byteLength;case Od:return i*e*2/r.components*r.byteLength;case hp:return i*e*3/r.components*r.byteLength;case ei:return i*e*4/r.components*r.byteLength;case zd:return i*e*4/r.components*r.byteLength;case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(i,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case Rc:case kc:case Lc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ao:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yc:case Kc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(i){switch(i){case Ln:case lp:return{byteLength:1,components:1};case ps:case cp:case Si:return{byteLength:2,components:1};case Ud:case Nd:return{byteLength:2,components:4};case bi:case Id:case _i:return{byteLength:4,components:1};case dp:case up:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kp(){let i=null,e=!1,t=null,n=null;function r(a,s){n=i.requestAnimationFrame(r),t(a,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function _0(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<f.length;h++){const m=f[u],_=f[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,m=f.length;h<m;h++){const _=f[h];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:b0,alphatest_fragment:S0,alphatest_pars_fragment:M0,aomap_fragment:E0,aomap_pars_fragment:w0,batching_pars_vertex:T0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:k0,bsdfs:C0,iridescence_fragment:L0,bumpmap_pars_fragment:P0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:z0,color_vertex:B0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:$0,displacementmap_vertex:W0,emissivemap_fragment:q0,emissivemap_pars_fragment:X0,colorspace_fragment:Y0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:dv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:rv,gradientmap_pars_fragment:av,lightmap_pars_fragment:sv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:lv,lights_pars_begin:cv,lights_toon_fragment:uv,lights_toon_pars_fragment:fv,lights_phong_fragment:hv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:_v,lights_fragment_maps:vv,lights_fragment_end:xv,lightprobes_pars_fragment:yv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Ev,map_fragment:wv,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Lv,morphcolor_vertex:Pv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Uv,normal_fragment_begin:Nv,normal_fragment_maps:Fv,normal_pars_fragment:Ov,normal_pars_vertex:zv,normal_vertex:Bv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Wv,opaque_fragment:qv,packing:Xv,premultiplied_alpha_fragment:Yv,project_vertex:Kv,dithering_fragment:Zv,dithering_pars_fragment:Jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:sx,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:dx,tonemapping_pars_fragment:ux,transmission_fragment:fx,transmission_pars_fragment:hx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:vx,background_frag:xx,backgroundCube_vert:yx,backgroundCube_frag:bx,cube_vert:Sx,cube_frag:Mx,depth_vert:Ex,depth_frag:wx,distance_vert:Tx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:kx,linedashed_vert:Cx,linedashed_frag:Lx,meshbasic_vert:Px,meshbasic_frag:Dx,meshlambert_vert:Ix,meshlambert_frag:Ux,meshmatcap_vert:Nx,meshmatcap_frag:Fx,meshnormal_vert:Ox,meshnormal_frag:zx,meshphong_vert:Bx,meshphong_frag:Hx,meshphysical_vert:Gx,meshphysical_frag:Vx,meshtoon_vert:$x,meshtoon_frag:Wx,points_vert:qx,points_frag:Xx,shadow_vert:Yx,shadow_frag:Kx,sprite_vert:Zx,sprite_frag:Jx},_e={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},di={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};di.physical={uniforms:on([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Js={r:0,b:0,g:0},Qx=new Rt,Cp=new Oe;Cp.set(-1,0,0,0,1,0,0,0,1);function jx(i,e,t,n,r,a){const s=new rt(0);let o=r===!0?0:1,c,l,d=null,f=0,u=null;function h(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(b){let T=!1;const y=h(b);y===null?p(s,o):y&&y.isColor&&(p(y,1),T=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){const y=h(T);y&&(y.isCubeTexture||y.mapping===Go)?(l===void 0&&(l=new Wn(new Wr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Da(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cp),l.material.toneMapped=Je.getTransfer(y.colorSpace)!==ct,(d!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Wn(new ws(2,2),new Mi({name:"BackgroundMaterial",uniforms:Da(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(Js,Ep(i)),t.buffers.color.setClear(Js.r,Js.g,Js.b,T,a)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,T=1){s.set(b),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(s,o)},render:m,addToRenderList:_,dispose:g}}function ey(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let a=r,s=!1;function o(C,N,O,L,z){let X=!1;const $=f(C,L,O,N);a!==$&&(a=$,l(a.object)),X=h(C,L,O,z),X&&m(C,L,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,y(C,N,O,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function f(C,N,O,L){const z=L.wireframe===!0;let X=n[N.id];X===void 0&&(X={},n[N.id]=X);const $=C.isInstancedMesh===!0?C.id:0;let ee=X[$];ee===void 0&&(ee={},X[$]=ee);let Y=ee[O.id];Y===void 0&&(Y={},ee[O.id]=Y);let Q=Y[z];return Q===void 0&&(Q=u(c()),Y[z]=Q),Q}function u(C){const N=[],O=[],L=[];for(let z=0;z<t;z++)N[z]=0,O[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:C,attributes:{},index:null}}function h(C,N,O,L){const z=a.attributes,X=N.attributes;let $=0;const ee=O.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const re=z[Y];let Se=X[Y];if(Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),re===void 0||re.attribute!==Se||Se&&re.data!==Se.data)return!0;$++}return a.attributesNum!==$||a.index!==L}function m(C,N,O,L){const z={},X=N.attributes;let $=0;const ee=O.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let re=X[Y];re===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const Se={};Se.attribute=re,re&&re.data&&(Se.data=re.data),z[Y]=Se,$++}a.attributes=z,a.attributesNum=$,a.index=L}function _(){const C=a.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function p(C){g(C,0)}function g(C,N){const O=a.newAttributes,L=a.enabledAttributes,z=a.attributeDivisors;O[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),z[C]!==N&&(i.vertexAttribDivisor(C,N),z[C]=N)}function b(){const C=a.newAttributes,N=a.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==C[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function T(C,N,O,L,z,X,$){$===!0?i.vertexAttribIPointer(C,N,O,z,X):i.vertexAttribPointer(C,N,O,L,z,X)}function y(C,N,O,L){_();const z=L.attributes,X=O.getAttributes(),$=N.defaultAttributeValues;for(const ee in X){const Y=X[ee];if(Y.location>=0){let Q=z[ee];if(Q===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const re=Q.normalized,Se=Q.itemSize,Ae=e.get(Q);if(Ae===void 0)continue;const qe=Ae.buffer,Fe=Ae.type,K=Ae.bytesPerElement,P=Fe===i.INT||Fe===i.UNSIGNED_INT||Q.gpuType===Id;if(Q.isInterleavedBufferAttribute){const G=Q.data,de=G.stride,Pe=Q.offset;if(G.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)g(Y.location+ye,G.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ye=0;ye<Y.locationSize;ye++)T(Y.location+ye,Se/Y.locationSize,Fe,re,de*K,(Pe+Se/Y.locationSize*ye)*K,P)}else{if(Q.isInstancedBufferAttribute){for(let G=0;G<Y.locationSize;G++)g(Y.location+G,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let G=0;G<Y.locationSize;G++)p(Y.location+G);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let G=0;G<Y.locationSize;G++)T(Y.location+G,Se/Y.locationSize,Fe,re,Se*K,Se/Y.locationSize*G*K,P)}}else if($!==void 0){const re=$[ee];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Y.location,re);break;case 3:i.vertexAttrib3fv(Y.location,re);break;case 4:i.vertexAttrib4fv(Y.location,re);break;default:i.vertexAttrib1fv(Y.location,re)}}}}b()}function M(){w();for(const C in n){const N=n[C];for(const O in N){const L=N[O];for(const z in L){const X=L[z];for(const $ in X)d(X[$].object),delete X[$];delete L[z]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const O in N){const L=N[O];for(const z in L){const X=L[z];for(const $ in X)d(X[$].object),delete X[$];delete L[z]}}delete n[C.id]}function A(C){for(const N in n){const O=n[N];for(const L in O){const z=O[L];if(z[C.id]===void 0)continue;const X=z[C.id];for(const $ in X)d(X[$].object),delete X[$];delete z[C.id]}}}function v(C){for(const N in n){const O=n[N],L=C.isInstancedMesh===!0?C.id:0,z=O[L];if(z!==void 0){for(const X in z){const $=z[X];for(const ee in $)d($[ee].object),delete $[ee];delete z[X]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function w(){R(),s=!0,a!==r&&(a=r,l(a.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function ty(i,e,t){let n;function r(c){n=c}function a(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function ny(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&A!==_i&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ne("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:E}}function iy(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new ji,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||r;return r=u,n=f.length,h},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!r||m===null||m.length===0||a&&!p)a?d(null):l();else{const b=a?0:n,T=b*4;let y=g.clippingState||null;c.value=y,y=d(m,u,T,h);for(let M=0;M!==T;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,m){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=h+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=h;T!==_;++T,y+=4)s.copy(f[T]).applyMatrix4(b,o),s.normal.toArray(p,y),p[y+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const ma=4,ry=6,ay=20,sy=256,Ga=new Wd,af=new rt;let Nl=null,Fl=0,Ol=0,zl=!1;const oy=new W,Mr=new W;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=oy}=a;Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Fl,Ol),this._renderer.xr.enabled=zl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Si,format:ei,colorSpace:ko,depthBuffer:!1},r=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ly(a)),this._blurMaterial=dy(a,e,t),this._ggxMaterial=cy(a,e,t)}return r}_compileMaterial(e){const t=new Wn(new Vi,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,r,a){const c=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(af),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Wr,new bp({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(af),g=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+d[T],a.y,a.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+d[T],a.z)):(c.up.set(0,l[T],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+d[T]));const M=this._cubeSize;la(r,y*M,T>2?M:0,M,M),f.setRenderTarget(r),g&&f.render(_,c),f.render(e,c)}f.toneMapping=h,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zr||e.mapping===Pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),u=l*1.25,h=f*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-ma?n-m+ma:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=m-t,la(a,p,g,3*_,2*_),r.setRenderTarget(a),r.render(o,Ga),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=m-n,la(e,p,g,3*_,2*_),r.setRenderTarget(e),r.render(o,Ga)}_blur(e,t,n,r){const a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,s),this._blurPass(a,e,n,n,s)}_blurPass(e,t,n,r,a){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],f=3*d*(r>this._lodMax-ma?r-this._lodMax+ma:0),u=4*(this._cubeSize-d);la(t,f,u,3*d,2*d),s.setRenderTarget(t),s.render(c,Ga)}}function ly(i){const e=[],t=[];let n=i;const r=i-ma+1+ry;for(let a=0;a<r;a++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,h=3,m=new Float32Array(h*u*f),_=new Float32Array(h*u*f);for(let g=0;g<f;g++){const b=g%3*2/3-1,T=g>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(y,h*u*g);for(let M=0;M<u;M++){const E=d[M*2]*2-1,A=d[M*2+1]*2-1;g===0?Mr.set(1,A,E):g===1?Mr.set(-E,1,-A):g===2?Mr.set(-E,A,1):g===3?Mr.set(-1,A,-E):g===4?Mr.set(-E,-1,A):Mr.set(E,A,-1),Mr.toArray(_,(g*u+M)*h)}}const p=new Vi;p.setAttribute("position",new Ni(m,h)),p.setAttribute("outputDirection",new Ni(_,h)),t.push(new Wn(p,null)),n>ma&&n--}return{lodMeshes:t,sizeLods:e}}function of(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cy(i,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function dy(i,e,t){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function lf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function cf(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lp extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),a=new Mi({name:"CubemapFromEquirect",uniforms:Da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ii});a.uniforms.tEquirect.value=t;const s=new Wn(r,a),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=en),new h0(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function uy(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,h=!1){return u==null?null:h?s(u):a(u)}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===cl||h===dl)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new Lp(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,m=h===cl||h===dl,_=h===zr||h===Pa;if(m||_){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new sf(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const b=u.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new sf(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,h){return h===cl?u.mapping=zr:h===dl&&(u.mapping=Pa),u}function c(u){let h=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&h++;return h===m}function l(u){const h=u.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function fy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ba("WebGLRenderer: "+n+" extension not supported."),r}}}function hy(i,e,t,n){const r={},a=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete r[u.id];const h=a.get(u);h&&(e.remove(h),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let T=0,y=b.length;T<y;T+=3){const M=b[T+0],E=b[T+1],A=b[T+2];u.push(M,E,E,A,A,M)}}else{const b=m.array;_=m.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const M=T+0,E=T+1,A=T+2;u.push(M,E,E,A,A,M)}}const p=new(m.count>=65535?yp:xp)(u,1);p.version=_;const g=a.get(f);g&&e.remove(g),a.set(f,p)}function d(f){const u=a.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function py(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,u){i.drawElements(n,u,a,f*s),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,a,f*s,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,h);let _=0;for(let p=0;p<h;p++)_+=u[p];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function my(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:at("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gy(i,e,t){const n=new WeakMap,r=new At;function a(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*M*4*f),A=new gp(E,y,M,f);A.type=_i,A.needsUpdate=!0;const v=T*4;for(let R=0;R<f;R++){const C=p[R],N=g[R],O=b[R],L=y*M*4*R;for(let z=0;z<C.count;z++){const X=z*v;h===!0&&(r.fromBufferAttribute(C,z),E[L+X+0]=r.x,E[L+X+1]=r.y,E[L+X+2]=r.z,E[L+X+3]=0),m===!0&&(r.fromBufferAttribute(N,z),E[L+X+4]=r.x,E[L+X+5]=r.y,E[L+X+6]=r.z,E[L+X+7]=0),_===!0&&(r.fromBufferAttribute(O,z),E[L+X+8]=r.x,E[L+X+9]=r.y,E[L+X+10]=r.z,E[L+X+11]=O.itemSize===4?r.w:1)}}u={count:f,texture:A,size:new tt(y,M)},n.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const m=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function _y(i,e,t,n,r){let a=new WeakMap;function s(l){const d=r.render.frame,f=l.geometry,u=e.get(l,f);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==d&&(h.update(),a.set(h,d))}return u}function o(){a=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const vy={[ep]:"LINEAR_TONE_MAPPING",[tp]:"REINHARD_TONE_MAPPING",[np]:"CINEON_TONE_MAPPING",[ip]:"ACES_FILMIC_TONE_MAPPING",[ap]:"AGX_TONE_MAPPING",[sp]:"NEUTRAL_TONE_MAPPING",[rp]:"CUSTOM_TONE_MAPPING"};function xy(i,e,t,n,r,a){const s=new ti(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Vi;l.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const d=new r0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Wn(l,d),u=new Wd(-1,1,1,-1,0,1);let h=null,m=null,_=!1,p,g=null,b=[],T=!1;this.setSize=function(y,M){s.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let E=0;E<b.length;E++){const A=b[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){b=y,T=b.length>0&&b[0].isRenderPass===!0;const M=s.width,E=s.height;b.length>0&&o===null&&(o=new ti(M,E,{type:Si,depthBuffer:!1,stencilBuffer:!1}),c=new ti(M,E,{type:Si,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){const v=b[A];v.setSize&&v.setSize(M,E)}},this.begin=function(y,M){if(_||y.toneMapping===xi&&b.length===0)return!1;if(g=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return T===!1&&y.setRenderTarget(s),p=y.toneMapping,y.toneMapping=xi,!0},this.hasRenderPass=function(){return T},this.end=function(y,M){y.toneMapping=p,_=!0;let E=s,A=o;for(let v=0;v<b.length;v++){const w=b[v];w.enabled!==!1&&(w.render(y,A,E,M),w.needsSwap!==!1&&(E=A,A=A===o?c:o))}if(h!==y.outputColorSpace||m!==y.toneMapping){h=y.outputColorSpace,m=y.toneMapping,d.defines={},Je.getTransfer(h)===ct&&(d.defines.SRGB_TRANSFER="");const v=vy[m];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(f,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const Pp=new Ft,id=new vs(1,1),Dp=new gp,Ip=new D_,Up=new Sp,df=[],uf=[],ff=new Float32Array(16),hf=new Float32Array(9),pf=new Float32Array(4);function Ua(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=df[r];if(a===void 0&&(a=new Float32Array(r),df[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Ey(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),zt(t,n)}}function wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;hf.set(n),i.uniformMatrix3fv(this.addr,!1,hf),zt(t,n)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),zt(t,n)}}function Ay(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Ly(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Uy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(id.compareFunction=t.isReversedDepthBuffer()?Hd:Bd,a=id):a=Pp,t.setTexture2D(e||a,r)}function Ny(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ip,r)}function Fy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Up,r)}function Oy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dp,r)}function zy(i){switch(i){case 5126:return yy;case 35664:return by;case 35665:return Sy;case 35666:return My;case 35674:return Ey;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return ky;case 35669:case 35673:return Cy;case 5125:return Ly;case 36294:return Py;case 36295:return Dy;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){const t=Ua(e,this.size,2);i.uniform2fv(this.addr,t)}function Gy(i,e){const t=Ua(e,this.size,3);i.uniform3fv(this.addr,t)}function Vy(i,e){const t=Ua(e,this.size,4);i.uniform4fv(this.addr,t)}function $y(i,e){const t=Ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wy(i,e){const t=Ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qy(i,e){const t=Ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xy(i,e){i.uniform1iv(this.addr,e)}function Yy(i,e){i.uniform2iv(this.addr,e)}function Ky(i,e){i.uniform3iv(this.addr,e)}function Zy(i,e){i.uniform4iv(this.addr,e)}function Jy(i,e){i.uniform1uiv(this.addr,e)}function Qy(i,e){i.uniform2uiv(this.addr,e)}function jy(i,e){i.uniform3uiv(this.addr,e)}function eb(i,e){i.uniform4uiv(this.addr,e)}function tb(i,e,t){const n=this.cache,r=e.length,a=$o(t,r);Ot(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=id:s=Pp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function nb(i,e,t){const n=this.cache,r=e.length,a=$o(t,r);Ot(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ip,a[s])}function ib(i,e,t){const n=this.cache,r=e.length,a=$o(t,r);Ot(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Up,a[s])}function rb(i,e,t){const n=this.cache,r=e.length,a=$o(t,r);Ot(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Dp,a[s])}function ab(i){switch(i){case 5126:return By;case 35664:return Hy;case 35665:return Gy;case 35666:return Vy;case 35674:return $y;case 35675:return Wy;case 35676:return qy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return jy;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}class sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}}class ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ab(t.type)}}class lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function mf(i,e){i.seq.push(e),i.map[e.id]=e}function cb(i,e,t){const n=i.name,r=n.length;for(Bl.lastIndex=0;;){const a=Bl.exec(n),s=Bl.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){mf(t,l===void 0?new sb(o,i,e):new ob(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new lb(o),mf(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);cb(o,c,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function gf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const db=37297;let ub=0;function fb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const _f=new Oe;function hb(i){Je._getMatrix(_f,Je.workingColorSpace,i);const e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+fb(i.getShaderSource(e),o)}else return a}function pb(i,e){const t=hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mb={[ep]:"Linear",[tp]:"Reinhard",[np]:"Cineon",[ip]:"ACESFilmic",[ap]:"AgX",[sp]:"Neutral",[rp]:"Custom"};function gb(i,e){const t=mb[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new W;function _b(){Je.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function xb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ka(i){return i!==""}function xf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(i){return i.replace(bb,Mb)}const Sb=new Map;function Mb(i,e){let t=Ge[e];if(t===void 0){const n=Sb.get(e);if(n!==void 0)t=Ge[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rd(t)}const Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(i){return i.replace(Eb,wb)}function wb(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Sf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tb={[lo]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function Ab(i){return Tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rb={[zr]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function kb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cb={[Pa]:"ENVMAP_MODE_REFRACTION"};function Lb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pb={[Dd]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[c_]:"ENVMAP_BLENDING_ADD"};function Db(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[i.combine]||"ENVMAP_BLENDING_NONE"}function Ib(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ub(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Ab(t),l=kb(t),d=Lb(t),f=Db(t),u=Ib(t),h=vb(t),m=xb(a),_=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ka).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ka).join(`
`),g.length>0&&(g+=`
`)):(p=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),g=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==xi?gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,pb("linearToOutputTexel",t.outputColorSpace),_b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),s=rd(s),s=xf(s,t),s=yf(s,t),o=rd(o),o=xf(o,t),o=yf(o,t),s=bf(s),o=bf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+p+s,y=b+g+o,M=gf(r,r.VERTEX_SHADER,T),E=gf(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(M)||"",L=r.getShaderInfoLog(E)||"",z=N.trim(),X=O.trim(),$=L.trim();let ee=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,E);else{const Q=vf(r,M,"vertex"),re=vf(r,E,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Q+`
`+re)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(X===""||$==="")&&(Y=!1);Y&&(C.diagnostics={runnable:ee,programLog:z,vertexShader:{log:X,prefix:p},fragmentShader:{log:$,prefix:g}})}r.deleteShader(M),r.deleteShader(E),v=new mo(r,_),w=yb(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,db)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let Nb=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ob(e),t.set(e,n)),n}}class Ob{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}}function zb(i){return i===Br||i===Ao||i===Ro}function Bb(i,e,t,n,r,a){const s=new _p,o=new Fb,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,C,N,O){const L=C.fog,z=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||X,$),Y=ee&&ee.mapping===Go?ee.image.height:null,Q=h[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=re!==void 0?re.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let qe,Fe,K,P;if(Q){const mt=di[Q];qe=mt.vertexShader,Fe=mt.fragmentShader}else{qe=v.vertexShader,Fe=v.fragmentShader;const mt=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,mt,st),K=mt.id,P=st.id}const G=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Be=!!v.map,xt=!!v.matcap,$e=!!ee,Xe=!!v.aoMap,pt=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Bt=!!v.displacementMap,dn=!!v.emissiveMap,Mt=!!v.metalnessMap,Pt=!!v.roughnessMap,U=v.anisotropy>0,Yt=v.clearcoat>0,lt=v.dispersion>0,k=v.retroreflectivity>0,x=v.iridescence>0,F=v.sheen>0,V=v.transmission>0,Z=U&&!!v.anisotropyMap,ce=Yt&&!!v.clearcoatMap,ue=Yt&&!!v.clearcoatNormalMap,J=Yt&&!!v.clearcoatRoughnessMap,te=x&&!!v.iridescenceMap,fe=x&&!!v.iridescenceThicknessMap,Ce=F&&!!v.sheenColorMap,ge=F&&!!v.sheenRoughnessMap,he=!!v.specularMap,Le=!!v.specularColorMap,Ue=!!v.specularIntensityMap,ze=V&&!!v.transmissionMap,I=V&&!!v.thicknessMap,pe=!!v.gradientMap,j=!!v.alphaMap,me=v.alphaTest>0,be=!!v.alphaHash,ae=!!v.extensions;let De=xi;v.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(De=i.toneMapping);const Re={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:P,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:xt,envMap:$e,envMapMode:$e&&ee.mapping,envMapCubeUVHeight:Y,aoMap:Xe,lightMap:pt,bumpMap:Ke,normalMap:yt,displacementMap:Bt,emissiveMap:dn,normalMapObjectSpace:yt&&v.normalMapType===f_,normalMapTangentSpace:yt&&v.normalMapType===ed,packedNormalMap:yt&&v.normalMapType===ed&&zb(v.normalMap.format),metalnessMap:Mt,roughnessMap:Pt,anisotropy:U,anisotropyMap:Z,clearcoat:Yt,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:J,dispersion:lt,retroreflection:k,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:F,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:he,specularColorMap:Le,specularIntensityMap:Ue,transmission:V,transmissionMap:ze,thicknessMap:I,gradientMap:pe,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:me,alphaHash:be,combine:v.combine,mapUv:Be&&m(v.map.channel),aoMapUv:Xe&&m(v.aoMap.channel),lightMapUv:pt&&m(v.lightMap.channel),bumpMapUv:Ke&&m(v.bumpMap.channel),normalMapUv:yt&&m(v.normalMap.channel),displacementMapUv:Bt&&m(v.displacementMap.channel),emissiveMapUv:dn&&m(v.emissiveMap.channel),metalnessMapUv:Mt&&m(v.metalnessMap.channel),roughnessMapUv:Pt&&m(v.roughnessMap.channel),anisotropyMapUv:Z&&m(v.anisotropyMap.channel),clearcoatMapUv:ce&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:Le&&m(v.specularColorMap.channel),specularIntensityMapUv:Ue&&m(v.specularIntensityMap.channel),transmissionMapUv:ze&&m(v.transmissionMap.channel),thicknessMapUv:I&&m(v.thicknessMap.channel),alphaMapUv:j&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(yt||U),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Be||j),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:dn&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(w,v),b(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function T(v){const w=h[v.type];let R;if(w){const C=di[w];R=t0.clone(C.uniforms)}else R=v.uniforms;return R}function y(v,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new Ub(i,w,v,r),l.push(R),d.set(w,R)),R}function M(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:A}}function Hb(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Gb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,m,_,p,g){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:h,material:m,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=b):(b.id=u.id,b.object=u,b.geometry=h,b.material=m,b.materialVariant=s(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=p,b.group=g),e++,b}function c(u,h,m,_,p,g,b){b.reversedDepth===!0&&(p=-p);const T=o(u,h,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?r.push(T):t.push(T)}function l(u,h,m,_,p,g){const b=o(u,h,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?r.unshift(b):t.unshift(b)}function d(u,h){t.length>1&&t.sort(u||Gb),n.length>1&&n.sort(h||Mf),r.length>1&&r.sort(h||Mf)}function f(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:l,finish:f,sort:d}}function Vb(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Ef,i.set(n,[s])):r>=a.length?(s=new Ef,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function $b(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new rt};break;case"SpotLight":t={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Wb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qb=0;function Xb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yb(i){const e=new $b,t=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const r=new W,a=new Rt,s=new Rt;function o(l){let d=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let h=0,m=0,_=0,p=0,g=0,b=0,T=0,y=0,M=0,E=0,A=0,v=0,w=0,R=0;l.sort(Xb);for(let N=0,O=l.length;N<O;N++){const L=l[N],z=L.color,X=L.intensity,$=L.distance;let ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Br?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=z.r*X,f+=z.g*X,u+=z.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);R++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,re=t.get(L);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=re,n.sunShadowMap[m]=ee;const Se=Q.getViewportCount();for(let Ae=0;Ae<Se;Ae++)n.sunShadowMatrix[_+Ae]=Q.getMatrix(Ae),n.sunShadowCascade[_+Ae]=Q._cascadeData[Ae];_+=Se,m++}n.sun[h]=Y,h++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,re=t.get(L);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(X),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[b]=Y;const Q=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,Q.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[b]=Q.matrix,L.castShadow){const re=t.get(L);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.spotShadow[b]=re,n.spotShadowMap[b]=ee,A++}b++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=Y,T++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const Q=L.shadow,re=t.get(L);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=Y,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.sunLength!==h||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==T||C.hemiLength!==y||C.numSunShadows!==m||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==A||C.numSpotMaps!==v||C.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.sunLength=h,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=T,C.hemiLength=y,C.numSunShadows=m,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=A,C.numSpotMaps=v,C.numLightProbes=R,n.version=qb++)}function c(l,d){let f=0,u=0,h=0,m=0,_=0,p=0;const g=d.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const y=l[b];if(y.isSunLight){const M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),f++}else if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(y.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),s.identity(),a.copy(y.matrixWorld),a.premultiply(g),s.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function wf(i){const e=new Yb(i),t=[],n=[],r=[];function a(u){f.camera=u,t.length=0,n.length=0,r.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function Kb(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new wf(i),e.set(r,[o])):a>=s.length?(o=new wf(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qb=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],jb=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Tf=new Rt,Va=new W,Hl=new W;function eS(i,e,t){let n=new $d;const r=new tt,a=new tt,s=new At,o=new a0,c=new s0,l={},d=t.maxTextureSize,f={[Or]:yn,[yn]:Or,[mi]:mi},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Zb,fragmentShader:Jb}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new Vi;m.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let g=this.type;this.render=function(E,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Vg&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lo);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=g!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){const X=E[L],$=X.shadow;if($===void 0){Ne("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ee=$.getFrameExtents();r.multiply(ee),a.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ee.x),r.x=a.x*ee.x,$.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ee.y),r.y=a.y*ee.y,$.mapSize.y=a.y));const Y=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||O===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ya){if(X.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ti(r.x,r.y,{format:Br,type:Si,minFilter:en,magFilter:en,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new vs(r.x,r.y,_i),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Hi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt}else X.isPointLight?($.map=new Lp(r.x),$.map.depthTexture=new j_(r.x,bi)):($.map=new ti(r.x,r.y),$.map.depthTexture=new vs(r.x,r.y,bi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Hi,this.type===lo?($.map.depthTexture.compareFunction=Y?Hd:Bd,$.map.depthTexture.minFilter=en,$.map.depthTexture.magFilter=en):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,v);for(let re=0;re<Q;re++){const Se=$.getCamera(re);if(X.isPointLight){const Ae=$.camera,qe=$.matrix,Fe=X.distance||Ae.far;Fe!==Ae.far&&(Ae.far=Fe,Ae.updateProjectionMatrix()),Va.setFromMatrixPosition(X.matrixWorld),Ae.position.copy(Va),Hl.copy(Ae.position),Hl.add(Qb[re]),Ae.up.copy(jb[re]),Ae.lookAt(Hl),Ae.updateMatrixWorld(),qe.makeTranslation(-Va.x,-Va.y,-Va.z),Tf.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Tf,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,re),i.clear();else{re===0&&(i.setRenderTarget($.map),i.clear());const Ae=$.getViewport(re);s.set(a.x*Ae.x,a.y*Ae.y,a.x*Ae.z,a.y*Ae.w),N.viewport(s)}n=$.getFrustum(re),y(A,v,Se,X,this.type)}$.isPointLightShadow!==!0&&this.type===Ya&&b($,v),$.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,C)};function b(E,A){const v=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(r.x,r.y,{format:Br,type:Si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,h,_,null)}function T(E,A,v,w){let R=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)R=C;else if(R=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,O=A.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let z=L[O];z===void 0&&(z=R.clone(),L[O]=z,A.addEventListener("dispose",M)),R=z}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Ya?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=v}return R}function y(E,A,v,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ya)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),L=E.material;if(Array.isArray(L)){const z=O.groups;for(let X=0,$=z.length;X<$;X++){const ee=z[X],Y=L[ee.materialIndex];if(Y&&Y.visible){const Q=T(E,Y,w,R);E.onBeforeShadow(i,E,A,v,O,Q,ee),i.renderBufferDirect(v,null,O,Q,E,ee),E.onAfterShadow(i,E,A,v,O,Q,ee)}}}else if(L.visible){const z=T(E,L,w,R);E.onBeforeShadow(i,E,A,v,O,z,null),i.renderBufferDirect(v,null,O,z,E,null),E.onAfterShadow(i,E,A,v,O,z,null)}}const N=E.children;for(let O=0,L=N.length;O<L;O++)y(N[O],A,v,w,R)}function M(E){E.target.removeEventListener("dispose",M);for(const v in l){const w=l[v],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function tS(i,e){function t(){let I=!1;const pe=new At;let j=null;const me=new At(0,0,0,0);return{setMask:function(be){j!==be&&!I&&(i.colorMask(be,be,be,be),j=be)},setLocked:function(be){I=be},setClear:function(be,ae,De,Re,mt){mt===!0&&(be*=Re,ae*=Re,De*=Re),pe.set(be,ae,De,Re),me.equals(pe)===!1&&(i.clearColor(be,ae,De,Re),me.copy(pe))},reset:function(){I=!1,j=null,me.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,j=null,me=null,be=null;return{setReversed:function(ae){if(pe!==ae){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;const Re=be;be=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(ae){ae?G(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ae){j!==ae&&!I&&(i.depthMask(ae),j=ae)},setFunc:function(ae){if(pe&&(ae=E_[ae]),me!==ae){switch(ae){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ae}},setLocked:function(ae){I=ae},setClear:function(ae){be!==ae&&(be=ae,pe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){I=!1,j=null,me=null,be=null,pe=!1}}}function r(){let I=!1,pe=null,j=null,me=null,be=null,ae=null,De=null,Re=null,mt=null;return{setTest:function(st){I||(st?G(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(st){pe!==st&&!I&&(i.stencilMask(st),pe=st)},setFunc:function(st,qn,ri){(j!==st||me!==qn||be!==ri)&&(i.stencilFunc(st,qn,ri),j=st,me=qn,be=ri)},setOp:function(st,qn,ri){(ae!==st||De!==qn||Re!==ri)&&(i.stencilOp(st,qn,ri),ae=st,De=qn,Re=ri)},setLocked:function(st){I=st},setClear:function(st){mt!==st&&(i.clearStencil(st),mt=st)},reset:function(){I=!1,pe=null,j=null,me=null,be=null,ae=null,De=null,Re=null,mt=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},f={},u={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,y=null,M=null,E=null,A=null,v=new rt(0,0,0),w=0,R=!1,C=null,N=null,O=null,L=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ee>=2);let Q=null,re={};const Se=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),qe=new At().fromArray(Se),Fe=new At().fromArray(Ae);function K(I,pe,j,me){const be=new Uint8Array(4),ae=i.createTexture();i.bindTexture(I,ae),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<j;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ae}const P={};P[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),G(i.DEPTH_TEST),s.setFunc(hs),Ke(!1),yt(ku),G(i.CULL_FACE),Xe(Ii);function G(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function de(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pe(I,pe){return u[I]!==pe?(i.bindFramebuffer(I,pe),u[I]=pe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ye(I,pe){let j=m,me=!1;if(I){j=h.get(pe),j===void 0&&(j=[],h.set(pe,j));const be=I.textures;if(j.length!==be.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,De=be.length;ae<De;ae++)j[ae]=i.COLOR_ATTACHMENT0+ae;j.length=be.length,me=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,me=!0);me&&i.drawBuffers(j)}function Be(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const xt={[da]:i.FUNC_ADD,[Wg]:i.FUNC_SUBTRACT,[qg]:i.FUNC_REVERSE_SUBTRACT};xt[Xg]=i.MIN,xt[Yg]=i.MAX;const $e={[Kg]:i.ZERO,[Zg]:i.ONE,[Jg]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[i_]:i.SRC_ALPHA_SATURATE,[t_]:i.DST_COLOR,[jg]:i.DST_ALPHA,[Qg]:i.ONE_MINUS_SRC_COLOR,[jh]:i.ONE_MINUS_SRC_ALPHA,[n_]:i.ONE_MINUS_DST_COLOR,[e_]:i.ONE_MINUS_DST_ALPHA,[r_]:i.CONSTANT_COLOR,[a_]:i.ONE_MINUS_CONSTANT_COLOR,[s_]:i.CONSTANT_ALPHA,[o_]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,pe,j,me,be,ae,De,Re,mt,st){if(I===Ii){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(G(i.BLEND),p=!0),I!==$g){if(I!==g||st!==R){if((b!==da||M!==da)&&(i.blendEquation(i.FUNC_ADD),b=da,M=da),st)switch(I){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cu:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",I);break}else switch(I){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",I);break}T=null,y=null,E=null,A=null,v.set(0,0,0),w=0,g=I,R=st}return}be=be||pe,ae=ae||j,De=De||me,(pe!==b||be!==M)&&(i.blendEquationSeparate(xt[pe],xt[be]),b=pe,M=be),(j!==T||me!==y||ae!==E||De!==A)&&(i.blendFuncSeparate($e[j],$e[me],$e[ae],$e[De]),T=j,y=me,E=ae,A=De),(Re.equals(v)===!1||mt!==w)&&(i.blendColor(Re.r,Re.g,Re.b,mt),v.copy(Re),w=mt),g=I,R=!1}function pt(I,pe){I.side===mi?de(i.CULL_FACE):G(i.CULL_FACE);let j=I.side===yn;pe&&(j=!j),Ke(j),I.blending===es&&I.transparent===!1?Xe(Ii):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(I){C!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),C=I)}function yt(I){I!==Hg?(G(i.CULL_FACE),I!==N&&(I===ku?i.cullFace(i.BACK):I===Gg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),N=I}function Bt(I){I!==O&&($&&i.lineWidth(I),O=I)}function dn(I,pe,j){I?(G(i.POLYGON_OFFSET_FILL),(L!==pe||z!==j)&&(L=pe,z=j,s.getReversed()&&(pe=-pe),i.polygonOffset(pe,j))):de(i.POLYGON_OFFSET_FILL)}function Mt(I){I?G(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Pt(I){I===void 0&&(I=i.TEXTURE0+X-1),Q!==I&&(i.activeTexture(I),Q=I)}function U(I,pe,j){j===void 0&&(Q===null?j=i.TEXTURE0+X-1:j=Q);let me=re[j];me===void 0&&(me={type:void 0,texture:void 0},re[j]=me),(me.type!==I||me.texture!==pe)&&(Q!==j&&(i.activeTexture(j),Q=j),i.bindTexture(I,pe||P[I]),me.type=I,me.texture=pe)}function Yt(){const I=re[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function x(){try{i.texSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function F(){try{i.texSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){at("WebGLState:",I)}}function ue(){try{i.texStorage3D(...arguments)}catch(I){at("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function fe(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function Ce(I,pe){f[I]!==pe&&(i.pixelStorei(I,pe),f[I]=pe)}function ge(I){qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function he(I){Fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Le(I,pe){let j=l.get(pe);j===void 0&&(j=new WeakMap,l.set(pe,j));let me=j.get(I);me===void 0&&(me=i.getUniformBlockIndex(pe,I.name),j.set(I,me))}function Ue(I,pe){const me=l.get(pe).get(I);c.get(pe)!==me&&(i.uniformBlockBinding(pe,me,I.__bindingPointIndex),c.set(pe,me))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,re={},u={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,y=null,M=null,E=null,A=null,v=new rt(0,0,0),w=0,R=!1,C=null,N=null,O=null,L=null,z=null,qe.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:G,disable:de,bindFramebuffer:Pe,drawBuffers:ye,useProgram:Be,setBlending:Xe,setMaterial:pt,setFlipSided:Ke,setCullFace:yt,setLineWidth:Bt,setPolygonOffset:dn,setScissorTest:Mt,activeTexture:Pt,bindTexture:U,unbindTexture:Yt,compressedTexImage2D:lt,compressedTexImage3D:k,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:ue,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:ge,viewport:he,reset:ze}}function nS(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(k,x){return m?new OffscreenCanvas(k,x):_s("canvas")}function p(k,x,F){let V=1;const Z=lt(k);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const ce=Math.floor(V*Z.width),ue=Math.floor(V*Z.height);u===void 0&&(u=_(ce,ue));const J=x?_(ce,ue):u;return J.width=ce,J.height=ue,J.getContext("2d").drawImage(k,0,0,ce,ue),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+ue+")."),J}else return"data"in k&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),k;return k}function g(k){return k.generateMipmaps}function b(k){i.generateMipmap(k)}function T(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(k,x,F,V,Z,ce=!1){if(k!==null){if(i[k]!==void 0)return i[k];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),F===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),F===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),F===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const te=ce?Co:Je.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=te===ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),F===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(k,x){let F;return k?x===null||x===bi||x===ms?F=i.DEPTH24_STENCIL8:x===_i?F=i.DEPTH32F_STENCIL8:x===ps&&(F=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===ms?F=i.DEPTH_COMPONENT24:x===_i?F=i.DEPTH_COMPONENT32F:x===ps&&(F=i.DEPTH_COMPONENT16),F}function E(k,x){return g(k)===!0||k.isFramebufferTexture&&k.minFilter!==Nt&&k.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?x.mipmaps.length:1}function A(k){const x=k.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&f.delete(x)}function v(k){const x=k.target;x.removeEventListener("dispose",v),C(x)}function w(k){const x=n.get(k);if(x.__webglInit===void 0)return;const F=k.source,V=h.get(F);if(V){const Z=V[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(k),Object.keys(V).length===0&&h.delete(F)}n.remove(k)}function R(k){const x=n.get(k);i.deleteTexture(x.__webglTexture);const F=k.source,V=h.get(F);delete V[x.__cacheKey],s.memory.textures--}function C(k){const x=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Z=0;Z<x.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=k.textures;for(let V=0,Z=F.length;V<Z;V++){const ce=n.get(F[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),s.memory.textures--),n.remove(F[V])}n.remove(k)}let N=0;function O(){N=0}function L(){return N}function z(k){N=k}function X(){const k=N;return k>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,k}function $(k){const x=[];return x.push(k.wrapS),x.push(k.wrapT),x.push(k.wrapR||0),x.push(k.magFilter),x.push(k.minFilter),x.push(k.anisotropy),x.push(k.internalFormat),x.push(k.format),x.push(k.type),x.push(k.generateMipmaps),x.push(k.premultiplyAlpha),x.push(k.flipY),x.push(k.unpackAlignment),x.push(k.colorSpace),x.join()}function ee(k,x){const F=n.get(k);if(k.isVideoTexture&&U(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&F.__version!==k.version){const V=k.image;if(V===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,k,x);return}}else k.isExternalTexture&&(F.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Y(k,x){const F=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&F.__version!==k.version){de(F,k,x);return}else k.isExternalTexture&&(F.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(k,x){const F=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&F.__version!==k.version){de(F,k,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function re(k,x){const F=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&F.__version!==k.version){Pe(F,k,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const Se={[Sc]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},Ae={[Nt]:i.NEAREST,[d_]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[Lr]:i.LINEAR_MIPMAP_LINEAR},qe={[p_]:i.NEVER,[x_]:i.ALWAYS,[m_]:i.LESS,[Bd]:i.LEQUAL,[g_]:i.EQUAL,[Hd]:i.GEQUAL,[__]:i.GREATER,[v_]:i.NOTEQUAL};function Fe(k,x){if(x.type===_i&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===ul||x.magFilter===Ls||x.magFilter===Lr||x.minFilter===en||x.minFilter===ul||x.minFilter===Ls||x.minFilter===Lr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Se[x.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Se[x.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Se[x.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,Ae[x.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Ls&&x.minFilter!==Lr||x.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function K(k,x){let F=!1;k.__webglInit===void 0&&(k.__webglInit=!0,x.addEventListener("dispose",A));const V=x.source;let Z=h.get(V);Z===void 0&&(Z={},h.set(V,Z));const ce=$(x);if(ce!==k.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Z[ce].usedTimes++;const ue=Z[k.__cacheKey];ue!==void 0&&(Z[k.__cacheKey].usedTimes--,ue.usedTimes===0&&R(x)),k.__cacheKey=ce,k.__webglTexture=Z[ce].texture}return F}function P(k,x,F){return Math.floor(Math.floor(k/F)/x)}function G(k,x,F,V){const ce=k.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,V,x.data);else{ce.sort((Ce,ge)=>Ce.start-ge.start);let ue=0;for(let Ce=1;Ce<ce.length;Ce++){const ge=ce[ue],he=ce[Ce],Le=ge.start+ge.count,Ue=P(he.start,x.width,4),ze=P(ge.start,x.width,4);he.start<=Le+1&&Ue===ze&&P(he.start+he.count-1,x.width,4)===Ue?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++ue,ce[ue]=he)}ce.length=ue+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ce=0,ge=ce.length;Ce<ge;Ce++){const he=ce[Ce],Le=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),ze=Le%x.width,I=Math.floor(Le/x.width),pe=Ue,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ze,I,pe,j,F,V,x.data)}k.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function de(k,x,F){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);const Z=K(k,x),ce=x.source;t.bindTexture(V,k.__webglTexture,i.TEXTURE0+F);const ue=n.get(ce);if(ce.version!==ue.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=Je.getPrimaries(Je.workingColorSpace),me=x.colorSpace===nr?null:Je.getPrimaries(x.colorSpace),be=x.colorSpace===nr||j===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=p(x.image,!1,r.maxTextureSize);te=Yt(x,te);const fe=a.convert(x.format,x.colorSpace),Ce=a.convert(x.type);let ge=y(x.internalFormat,fe,Ce,x.normalized,x.colorSpace,x.isVideoTexture);Fe(V,x);let he;const Le=x.mipmaps,Ue=x.isVideoTexture!==!0,ze=ue.__version===void 0||Z===!0,I=ce.dataReady,pe=E(x,te);if(x.isDepthTexture)ge=M(x.format===Pr,x.type),ze&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,fe,Ce,null));else if(x.isDataTexture)if(Le.length>0){Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let j=0,me=Le.length;j<me;j++)he=Le[j],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,fe,Ce,he.data):t.texImage2D(i.TEXTURE_2D,j,ge,he.width,he.height,0,fe,Ce,he.data);x.generateMipmaps=!1}else Ue?(ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,te.width,te.height),I&&G(x,te,fe,Ce)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,fe,Ce,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Le[0].width,Le[0].height,te.depth);for(let j=0,me=Le.length;j<me;j++)if(he=Le[j],x.format!==ei)if(fe!==null)if(Ue){if(I)if(x.layerUpdates.size>0){const be=rf(he.width,he.height,x.format,x.type);for(const ae of x.layerUpdates){const De=he.data.subarray(ae*be/he.data.BYTES_PER_ELEMENT,(ae+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ae,he.width,he.height,1,fe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,te.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ge,he.width,he.height,te.depth,0,he.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,te.depth,fe,Ce,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ge,he.width,he.height,te.depth,0,fe,Ce,he.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let j=0,me=Le.length;j<me;j++)he=Le[j],x.format!==ei?fe!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ge,he.width,he.height,0,he.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,fe,Ce,he.data):t.texImage2D(i.TEXTURE_2D,j,ge,he.width,he.height,0,fe,Ce,he.data)}else if(x.isDataArrayTexture)if(Ue){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,te.width,te.height,te.depth),I)if(x.layerUpdates.size>0){const j=rf(te.width,te.height,x.format,x.type);for(const me of x.layerUpdates){const be=te.data.subarray(me*j/te.data.BYTES_PER_ELEMENT,(me+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,te.width,te.height,1,fe,Ce,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(x.isData3DTexture)Ue?(ze&&t.texStorage3D(i.TEXTURE_3D,pe,ge,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(x.isFramebufferTexture){if(ze)if(Ue)t.texStorage2D(i.TEXTURE_2D,pe,ge,te.width,te.height);else{let j=te.width,me=te.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,ge,j,me,0,fe,Ce,null),j>>=1,me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(x),j.onpaint=me=>{const be=me.changedElements;for(const ae of f)be.includes(ae.image)&&(ae.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const be=i.RGBA,ae=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,ae,De,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&ze){const j=lt(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,j.width,j.height)}for(let j=0,me=Le.length;j<me;j++)he=Le[j],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,fe,Ce,he):t.texImage2D(i.TEXTURE_2D,j,ge,fe,Ce,he);x.generateMipmaps=!1}else if(Ue){if(ze){const j=lt(te);t.texStorage2D(i.TEXTURE_2D,pe,ge,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,Ce,te);g(x)&&b(V),ue.__version=ce.version,x.onUpdate&&x.onUpdate(x)}k.__version=x.version}function Pe(k,x,F){if(x.image.length!==6)return;const V=K(k,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+F);const ce=n.get(Z);if(Z.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const ue=Je.getPrimaries(Je.workingColorSpace),J=x.colorSpace===nr?null:Je.getPrimaries(x.colorSpace),te=x.colorSpace===nr||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!fe&&!Ce?ge[ae]=p(x.image[ae],!0,r.maxCubemapSize):ge[ae]=Ce?x.image[ae].image:x.image[ae],ge[ae]=Yt(x,ge[ae]);const he=ge[0],Le=a.convert(x.format,x.colorSpace),Ue=a.convert(x.type),ze=y(x.internalFormat,Le,Ue,x.normalized,x.colorSpace),I=x.isVideoTexture!==!0,pe=ce.__version===void 0||V===!0,j=Z.dataReady;let me=E(x,he);Fe(i.TEXTURE_CUBE_MAP,x);let be;if(fe){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,he.width,he.height);for(let ae=0;ae<6;ae++){be=ge[ae].mipmaps;for(let De=0;De<be.length;De++){const Re=be[De];x.format!==ei?Le!==null?I?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,ze,Re.width,Re.height,0,Re.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Re.width,Re.height,Le,Ue,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,ze,Re.width,Re.height,0,Le,Ue,Re.data)}}}else{if(be=x.mipmaps,I&&pe){be.length>0&&me++;const ae=lt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ce){I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Le,Ue,ge[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,ge[ae].width,ge[ae].height,0,Le,Ue,ge[ae].data);for(let De=0;De<be.length;De++){const mt=be[De].image[ae].image;I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,mt.width,mt.height,Le,Ue,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,ze,mt.width,mt.height,0,Le,Ue,mt.data)}}else{I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,Ue,ge[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Le,Ue,ge[ae]);for(let De=0;De<be.length;De++){const Re=be[De];I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,Le,Ue,Re.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,ze,Le,Ue,Re.image[ae])}}}g(x)&&b(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,x.onUpdate&&x.onUpdate(x)}k.__version=x.version}function ye(k,x,F,V,Z,ce){const ue=a.convert(F.format,F.colorSpace),J=a.convert(F.type),te=y(F.internalFormat,ue,J,F.normalized,F.colorSpace),fe=n.get(x),Ce=n.get(F);if(Ce.__renderTarget=x,!fe.__hasExternalTextures){const ge=Math.max(1,x.width>>ce),he=Math.max(1,x.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,te,ge,he,x.depth,0,ue,J,null):t.texImage2D(Z,ce,te,ge,he,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Ce.__webglTexture,0,Mt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(k,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,k),x.depthBuffer){const V=x.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ce=M(x.stencilBuffer,Z),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),ce,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,k)}else{const V=x.textures;for(let Z=0;Z<V.length;Z++){const ce=V[Z],ue=a.convert(ce.format,ce.colorSpace),J=a.convert(ce.type),te=y(ce.internalFormat,ue,J,ce.normalized,ce.colorSpace);Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),te,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(k,x,F){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,x.depthTexture);const fe=a.convert(x.depthTexture.format),Ce=a.convert(x.depthTexture.type);let ge;x.depthTexture.format===Hi?ge=i.DEPTH_COMPONENT24:x.depthTexture.format===Pr&&(ge=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,x.width,x.height,0,fe,Ce,null)}}else ee(x.depthTexture,0);const ce=Z.__webglTexture,ue=Mt(x),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,te=x.depthTexture.format===Pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hi)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ce,0);else if(x.depthTexture.format===Pr)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(k){const x=n.get(k),F=k.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==k.depthTexture){const V=k.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=V}if(k.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)xt(x.__webglFramebuffer[V],k,V);else{const V=k.texture.mipmaps;V&&V.length>0?xt(x.__webglFramebuffer[0],k,0):xt(x.__webglFramebuffer,k,0)}else if(F){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[V],k,!1);else{const Z=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{const V=k.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,k,!1);else{const Z=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(k,x,F){const V=n.get(k);x!==void 0&&ye(V.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(k)}function pt(k){const x=k.texture,F=n.get(k),V=n.get(x);k.addEventListener("dispose",v);const Z=k.textures,ce=k.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,s.memory.textures++),ce){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let te=0;te<x.mipmaps.length;te++)F.__webglFramebuffer[J][te]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,te=Z.length;J<te;J++){const fe=n.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),s.memory.textures++)}if(k.samples>0&&Pt(k)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const fe=a.convert(te.format,te.colorSpace),Ce=a.convert(te.type),ge=y(te.internalFormat,fe,Ce,te.normalized,te.colorSpace,k.isXRRenderTarget===!0),he=Mt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ge,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ye(F.__webglFramebuffer[J][te],k,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ye(F.__webglFramebuffer[J],k,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(x)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,te=Z.length;J<te;J++){const fe=Z[J],Ce=n.get(fe);let ge=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ge=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ce.__webglTexture),Fe(ge,fe),ye(F.__webglFramebuffer,k,fe,i.COLOR_ATTACHMENT0+J,ge,0),g(fe)&&b(ge)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(J=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Fe(J,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ye(F.__webglFramebuffer[te],k,x,i.COLOR_ATTACHMENT0,J,te);else ye(F.__webglFramebuffer,k,x,i.COLOR_ATTACHMENT0,J,0);g(x)&&b(J),t.unbindTexture()}k.depthBuffer&&$e(k)}function Ke(k){const x=k.textures;for(let F=0,V=x.length;F<V;F++){const Z=x[F];if(g(Z)){const ce=T(k),ue=n.get(Z).__webglTexture;t.bindTexture(ce,ue),b(ce),t.unbindTexture()}}}const yt=[],Bt=[];function dn(k){if(k.samples>0){if(Pt(k)===!1){const x=k.textures,F=k.width,V=k.height;let Z=i.COLOR_BUFFER_BIT;const ce=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(k),J=x.length>1;if(J)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=k.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=n.get(x[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Z,i.NEAREST),c===!0&&(yt.length=0,Bt.length=0,yt.push(i.COLOR_ATTACHMENT0+fe),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(yt.push(ce),Bt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=n.get(x[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&c){const x=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(k){return Math.min(r.maxSamples,k.samples)}function Pt(k){const x=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(k){const x=s.render.frame;d.get(k)!==x&&(d.set(k,x),k.update())}function Yt(k,x){const F=k.colorSpace,V=k.format,Z=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||F!==ko&&F!==nr&&(Je.getTransfer(F)===ct?(V!==ei||Z!==Ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",F)),x}function lt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=Xe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iS(i,e){function t(n,r=nr){let a;const s=Je.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ud)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===up)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lp)return i.BYTE;if(n===cp)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===Id)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===fp)return i.ALPHA;if(n===hp)return i.RGB;if(n===ei)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===pp)return i.RED;if(n===Fd)return i.RED_INTEGER;if(n===Br)return i.RG;if(n===Od)return i.RG_INTEGER;if(n===zd)return i.RGBA_INTEGER;if(n===co||n===uo||n===fo||n===ho)if(s===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===wc||n===Tc||n===Ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ec)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===kc||n===Cc||n===Lc||n===Pc||n===Ao||n===Dc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Rc||n===kc)return s===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Cc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return a.COMPRESSED_R11_EAC;if(n===Pc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return a.COMPRESSED_RG11_EAC;if(n===Dc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Gc||n===Vc||n===$c||n===Wc||n===qc||n===Xc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ic)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Kc||n===Zc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Yc)return s===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===Qc||n===Ro||n===jc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Jc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const rS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:rS,fragmentShader:aS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oS extends $r{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new sS,g={},b=t.getContextAttributes();let T=null,y=null;const M=[],E=[],A=new tt;let v=null,w=null;const R=new Gn;R.viewport=new At;const C=new Gn;C.viewport=new At;const N=[R,C],O=new p0;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let G=M[P];return G===void 0&&(G=new xl,M[P]=G),G.getTargetRaySpace()},this.getControllerGrip=function(P){let G=M[P];return G===void 0&&(G=new xl,M[P]=G),G.getGripSpace()},this.getHand=function(P){let G=M[P];return G===void 0&&(G=new xl,M[P]=G),G.getHandSpace()};function X(P){const G=E.indexOf(P.inputSource);if(G===-1)return;const de=M[G];de!==void 0&&(de.update(P.inputSource,P.frame,l||s),de.dispatchEvent({type:P.type,data:P.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let P=0;P<M.length;P++){const G=E[P];G!==null&&(E[P]=null,M[P].disconnect(G))}L=null,z=null,p.reset();for(const P in g)delete g[P];if(e.setRenderTarget(T),h=null,u=null,f=null,r=null,y=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){const P=w.camera;P.fov=w.fov,P.zoom=w.zoom,P.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){a=P,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Pe=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Pr:Hi,Pe=b.stencil?ms:bi);const Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ti(u.textureWidth,u.textureHeight,{format:ei,type:Ln,depthTexture:new vs(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ti(h.framebufferWidth,h.framebufferHeight,{format:ei,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(P){for(let G=0;G<P.removed.length;G++){const de=P.removed[G],Pe=E.indexOf(de);Pe>=0&&(E[Pe]=null,M[Pe].disconnect(de))}for(let G=0;G<P.added.length;G++){const de=P.added[G];let Pe=E.indexOf(de);if(Pe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=E.length){E.push(de),Pe=Be;break}else if(E[Be]===null){E[Be]=de,Pe=Be;break}if(Pe===-1)break}const ye=M[Pe];ye&&ye.connect(de)}}const Y=new W,Q=new W;function re(P,G,de){Y.setFromMatrixPosition(G.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const Pe=Y.distanceTo(Q),ye=G.projectionMatrix.elements,Be=de.projectionMatrix.elements,xt=ye[14]/(ye[10]-1),$e=ye[14]/(ye[10]+1),Xe=(ye[9]+1)/ye[5],pt=(ye[9]-1)/ye[5],Ke=(ye[8]-1)/ye[0],yt=(Be[8]+1)/Be[0],Bt=xt*Ke,dn=xt*yt,Mt=Pe/(-Ke+yt),Pt=Mt*-Ke;if(G.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Pt),P.translateZ(Mt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ye[10]===-1)P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const U=xt+Mt,Yt=$e+Mt,lt=Bt-Pt,k=dn+(Pe-Pt),x=Xe*$e/Yt*U,F=pt*$e/Yt*U;P.projectionMatrix.makePerspective(lt,k,x,F,U,Yt),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Se(P,G){G===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(G.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let G=P.near,de=P.far;p.texture!==null&&(p.depthNear>0&&(G=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=C.near=R.near=G,O.far=C.far=R.far=de,(L!==O.near||z!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,z=O.far),O.layers.mask=P.layers.mask|6,R.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const Pe=P.parent,ye=O.cameras;Se(O,Pe);for(let Be=0;Be<ye.length;Be++)Se(ye[Be],Pe);ye.length===2?re(O,R,C):O.projectionMatrix.copy(R.projectionMatrix),w===null&&P.isPerspectiveCamera&&(w={camera:P,fov:P.fov,zoom:P.zoom}),Ae(P,O,Pe)};function Ae(P,G,de){de===null?P.matrix.copy(G.matrixWorld):(P.matrix.copy(de.matrixWorld),P.matrix.invert(),P.matrix.multiply(G.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=td*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(P){c=P,u!==null&&(u.fixedFoveation=P),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=P)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(P){return g[P]};let qe=null;function Fe(P,G){if(d=G.getViewerPose(l||s),m=G,d!==null){const de=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Pe=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let $e=0;$e<de.length;$e++){const Xe=de[$e];let pt=null;if(h!==null)pt=h.getViewport(Xe);else{const yt=f.getViewSubImage(u,Xe);pt=yt.viewport,$e===0&&(e.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(y))}let Ke=N[$e];Ke===void 0&&(Ke=new Gn,Ke.layers.enable($e),Ke.viewport=new At,N[$e]=Ke),Ke.matrix.fromArray(Xe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Xe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(pt.x,pt.y,pt.width,pt.height),$e===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Ke)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const $e=f.getDepthInformation(de[0]);$e&&$e.isValid&&$e.texture&&p.init($e,r.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let $e=0;$e<de.length;$e++){const Xe=de[$e].camera;if(Xe){let pt=g[Xe];pt||(pt=new Mp,g[Xe]=pt);const Ke=f.getCameraImage(Xe);pt.sourceTexture=Ke}}}}for(let de=0;de<M.length;de++){const Pe=E[de],ye=M[de];Pe!==null&&ye!==void 0&&ye.update(Pe,G,l||s)}qe&&qe(P,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),m=null}const K=new kp;K.setAnimationLoop(Fe),this.setAnimationLoop=function(P){qe=P},this.dispose=function(){}}}const lS=new Rt,Np=new Oe;Np.set(-1,0,0,0,1,0,0,0,1);function cS(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ep(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,b,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(p,g):g.isMeshLambertMaterial?(a(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(p,g),f(p,g)):g.isMeshPhongMaterial?(a(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(p,g),u(p,g),g.isMeshPhysicalMaterial&&h(p,g,y)):g.isMeshMatcapMaterial?(a(p,g),m(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),_(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(lS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Np),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dS(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const E=M.program;n.uniformBlockBinding(y,E)}function l(y,M){let E=r[y.id];E===void 0&&(p(y),E=d(y),r[y.id]=E,y.addEventListener("dispose",b));const A=M.program;n.updateUBOMapping(y,A);const v=e.render.frame;a[y.id]!==v&&(u(y),a[y.id]=v)}function d(y){const M=f();y.__bindingPointIndex=M;const E=i.createBuffer(),A=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=r[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,w=E.length;v<w;v++){const R=E[v];if(Array.isArray(R))for(let C=0,N=R.length;C<N;C++)h(R[C],v,C,A);else h(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,M,E,A){if(_(y,M,E,A)===!0){const v=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let C=0;C<w.length;C++){const N=w[C],O=g(N);m(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function _(y,M,E,A){const v=y.value,w=M+"_"+E;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{const R=A[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(y){const M=y.uniforms;let E=0;const A=16;for(let w=0,R=M.length;w<R;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,O=C.length;N<O;N++){const L=C[N],z=Array.isArray(L.value)?L.value:[L.value];for(let X=0,$=z.length;X<$;X++){const ee=z[X],Y=g(ee),Q=E%A,re=Q%Y.boundary,Se=Q+re;E+=re,Se!==0&&A-Se<Y.storage&&(E+=A-Se),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Y.storage}}}const v=E%A;return v>0&&(E+=A-v),y.__size=E,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),M}function b(y){const M=y.target;M.removeEventListener("dispose",b);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function T(){for(const y in r)i.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:c,update:l,dispose:T}}const uS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function fS(){return oi===null&&(oi=new Z_(uS,16,16,Br,Si),oi.name="DFG_LUT",oi.minFilter=en,oi.magFilter=en,oi.wrapS=Pi,oi.wrapT=Pi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class hS{constructor(e={}){const{canvas:t=S_(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Ln}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=h,p=new Set([zd,Od,Fd]),g=new Set([Ln,bi,ps,ms,Ud,Nd]),b=new Uint32Array(4),T=new Int32Array(4),y=new W;let M=null,E=null;const A=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,N=null,O=null,L=null,z=null;this._outputColorSpace=An;let X=0,$=0,ee=null,Y=-1,Q=null;const re=new At,Se=new At;let Ae=null;const qe=new rt(0);let Fe=0,K=t.width,P=t.height,G=1,de=null,Pe=null;const ye=new At(0,0,K,P),Be=new At(0,0,K,P);let xt=!1;const $e=new $d;let Xe=!1,pt=!1;const Ke=new Rt,yt=new W,Bt=new At,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Pt(){return ee===null?G:1}let U=n;function Yt(S,D){return t.getContext(S,D)}let lt,k,x,F,V,Z,ce,ue,J,te,fe,Ce,ge,he,Le,Ue,ze,I,pe,j,me,be,ae;try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pd}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",qn,!1),U===null){const D="webgl2";if(U=Yt(D,S),U===null)throw Yt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(S){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),at("WebGLRenderer: "+S.message),S}function De(){lt=new fy(U),lt.init(),me=new iS(U,lt),k=new ny(U,lt,e,me),x=new tS(U,lt),k.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),F=new my(U),V=new Hb,Z=new nS(U,lt,x,V,k,me,F),ce=new uy(R),ue=new _0(U),be=new ey(U,ue),J=new hy(U,ue,F,be),te=new _y(U,J,ue,be,F),I=new gy(U,k,Z),Le=new iy(V),fe=new Bb(R,ce,lt,k,be,Le),Ce=new cS(R,V),ge=new Vb,he=new Kb(lt),ze=new jx(R,ce,x,te,m,c),Ue=new eS(R,te,k),ae=new dS(U,F,k,x),pe=new ty(U,lt,F),j=new py(U,lt,F),F.programs=fe.programs,R.capabilities=k,R.extensions=lt,R.properties=V,R.renderLists=ge,R.shadowMap=Ue,R.state=x,R.info=F}_!==Ln&&(w=new xy(_,t.width,t.height,o,r,a));const Re=new oS(R,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(K,P,!1))},this.getSize=function(S){return S.set(K,P)},this.setSize=function(S,D,q=!0){if(Re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,P=D,t.width=Math.floor(S*G),t.height=Math.floor(D*G),q===!0&&(t.style.width=S+"px",t.style.height=D+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(K*G,P*G).floor()},this.setDrawingBufferSize=function(S,D,q){K=S,P=D,G=q,t.width=Math.floor(S*q),t.height=Math.floor(D*q),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===Ln){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(re)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,D,q,B){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,D,q,B),x.viewport(re.copy(ye).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,D,q,B){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,D,q,B),x.scissor(Se.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){x.setScissorTest(xt=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){Pe=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,q=!0){let B=0;if(S){let H=!1;if(ee!==null){const xe=ee.texture.format;H=p.has(xe)}if(H){const xe=ee.texture.type,Ee=g.has(xe),ve=ze.getClearColor(),we=ze.getClearAlpha(),ke=ve.r,He=ve.g,Ye=ve.b;Ee?(b[0]=ke,b[1]=He,b[2]=Ye,b[3]=we,U.clearBufferuiv(U.COLOR,0,b)):(T[0]=ke,T[1]=He,T[2]=Ye,T[3]=we,U.clearBufferiv(U.COLOR,0,T))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),ze.dispose(),ge.dispose(),he.dispose(),V.dispose(),ce.dispose(),te.dispose(),be.dispose(),ae.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",eu),Re.removeEventListener("sessionend",tu),gr.stop()};function mt(S){S.preventDefault(),Uu("WebGLRenderer: Context Lost."),C=!0}function st(){Uu("WebGLRenderer: Context Restored."),C=!1;const S=F.autoReset,D=Ue.enabled,q=Ue.autoUpdate,B=Ue.needsUpdate,H=Ue.type;De(),F.autoReset=S,Ue.enabled=D,Ue.autoUpdate=q,Ue.needsUpdate=B,Ue.type=H}function qn(S){at("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ri(S){const D=S.target;D.removeEventListener("dispose",ri),um(D)}function um(S){fm(S),V.remove(S)}function fm(S){const D=V.get(S).programs;D!==void 0&&(D.forEach(function(q){fe.releaseProgram(q)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,q,B,H,xe){D===null&&(D=dn);const Ee=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=mm(S,D,q,B,H);x.setMaterial(B,Ee);let we=q.index,ke=1;if(B.wireframe===!0){if(we=J.getWireframeAttribute(q),we===void 0)return;ke=2}const He=q.drawRange,Ye=q.attributes.position;let Te=He.start*ke,ot=(He.start+He.count)*ke;xe!==null&&(Te=Math.max(Te,xe.start*ke),ot=Math.min(ot,(xe.start+xe.count)*ke)),we!==null?(Te=Math.max(Te,0),ot=Math.min(ot,we.count)):Ye!=null&&(Te=Math.max(Te,0),ot=Math.min(ot,Ye.count));const Dt=ot-Te;if(Dt<0||Dt===1/0)return;be.setup(H,B,ve,q,we);let vt,ut=pe;if(we!==null&&(vt=ue.get(we),ut=j,ut.setIndex(vt)),H.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Pt()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(H.isLine){let Kt=B.linewidth;Kt===void 0&&(Kt=1),x.setLineWidth(Kt*Pt()),H.isLineSegments?ut.setMode(U.LINES):H.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else H.isPoints?ut.setMode(U.POINTS):H.isSprite&&ut.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Kt=H._multiDrawStarts,Me=H._multiDrawCounts,an=H._multiDrawCount,nt=we?ue.get(we).bytesPerElement:1,Fn=V.get(B).currentProgram.getUniforms();for(let ai=0;ai<an;ai++)Fn.setValue(U,"_gl_DrawID",ai),ut.render(Kt[ai]/nt,Me[ai])}else if(H.isInstancedMesh)ut.renderInstances(Te,Dt,H.count);else if(q.isInstancedBufferGeometry){const Kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Kt);ut.renderInstances(Te,Dt,Me)}else ut.render(Te,Dt)};function jd(S,D,q,B){N!==null&&S.isNodeMaterial&&N.setObject(B,S),Xe===!0&&Le.setState(S,q,!1),S.transparent===!0&&S.side===mi&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,ks(S,D,B),S.side=Or,S.needsUpdate=!0,ks(S,D,B),S.side=mi):ks(S,D,B)}this.compile=function(S,D,q=null){q===null&&(q=S),N!==null&&N.renderStart(S,D,q),E=he.get(q),E.init(D),v.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,Xe=Le.init(this.clippingPlanes,pt),Xe===!0&&Le.setGlobalState(this.clippingPlanes,D),N!==null&&Ue.render(E.state.shadowsArray,q,D);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const ve=xe[Ee];jd(ve,q,D,H),B.add(ve)}else jd(xe,q,D,H),B.add(xe)}),E=v.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(S,D,q=null){const B=this.compile(S,D,q);return new Promise(H=>{function xe(){if(B.forEach(function(Ee){const we=V.get(Ee).currentProgram;(we===void 0||we.isReady())&&B.delete(Ee)}),B.size===0){H(S);return}setTimeout(xe,10)}lt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let jo=null;function hm(S){jo&&jo(S)}function eu(){gr.stop()}function tu(){gr.start()}const gr=new kp;gr.setAnimationLoop(hm),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(S){jo=S,Re.setAnimationLoop(S),S===null?gr.stop():gr.start()},Re.addEventListener("sessionstart",eu),Re.addEventListener("sessionend",tu),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(S,D);const q=Re.enabled===!0&&Re.isPresenting===!0,B=w!==null&&(ee===null||q)&&w.begin(R,ee);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(D),D=Re.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,ee),E=he.get(S,v.length),E.init(D),E.state.textureUnits=Z.getTextureUnits(),v.push(E),Ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$e.setFromProjectionMatrix(Ke,vi,D.reversedDepth),pt=this.localClippingEnabled,Xe=Le.init(this.clippingPlanes,pt),M=ge.get(S,A.length),M.init(),A.push(M),Re.enabled===!0&&Re.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&el(Ee,D,-1/0,R.sortObjects)}el(S,D,0,R.sortObjects),M.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&M.sort(de,Pe),Mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Mt&&ze.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Le.beginShadows();const H=E.state.shadowsArray;if(Ue.render(H,S,D),Xe===!0&&Le.endShadows(),(B&&w.hasRenderPass())===!1){const Ee=M.opaque,ve=M.transmissive;if(E.setupLights(),D.isArrayCamera){const we=D.cameras;if(ve.length>0)for(let ke=0,He=we.length;ke<He;ke++){const Ye=we[ke];iu(Ee,ve,S,Ye)}Mt&&ze.render(S);for(let ke=0,He=we.length;ke<He;ke++){const Ye=we[ke];nu(M,S,Ye,Ye.viewport)}}else ve.length>0&&iu(Ee,ve,S,D),Mt&&ze.render(S),nu(M,S,D)}ee!==null&&$===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),B&&w.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),be.resetDefaultState(),Y=-1,Q=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),Xe===!0&&Le.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function el(S,D,q,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum($e)){B&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);const Ee=te.update(S),ve=S.material;ve.visible&&M.push(S,Ee,ve,q,Bt.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum($e))){const Ee=te.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Bt.copy(Ee.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)),Array.isArray(ve)){const we=Ee.groups;for(let ke=0,He=we.length;ke<He;ke++){const Ye=we[ke],Te=ve[Ye.materialIndex];Te&&Te.visible&&M.push(S,Ee,Te,q,Bt.z,Ye,D)}}else ve.visible&&M.push(S,Ee,ve,q,Bt.z,null,D)}}const xe=S.children;for(let Ee=0,ve=xe.length;Ee<ve;Ee++)el(xe[Ee],D,q,B)}function nu(S,D,q,B){const{opaque:H,transmissive:xe,transparent:Ee}=S;E.setupLightsView(q),Xe===!0&&Le.setGlobalState(R.clippingPlanes,q),B&&x.viewport(re.copy(B)),H.length>0&&Rs(H,D,q),xe.length>0&&Rs(xe,D,q),Ee.length>0&&Rs(Ee,D,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function iu(S,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Te=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new ti(1,1,{generateMipmaps:!0,type:Te?Si:Ln,minFilter:Lr,samples:Math.max(4,k.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const xe=E.state.transmissionRenderTarget[B.id],Ee=B.viewport||re;xe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const ve=R.getRenderTarget(),we=R.getActiveCubeFace(),ke=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(qe),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&ze.render(q);const He=R.toneMapping;R.toneMapping=xi;const Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Xe===!0&&Le.setGlobalState(R.clippingPlanes,B),Rs(S,q,B),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ot=0,Dt=D.length;ot<Dt;ot++){const vt=D[ot],{object:ut,geometry:Kt,material:Me,group:an}=vt;if(Me.side===mi&&ut.layers.test(B.layers)){const nt=Me.side;Me.side=yn,Me.needsUpdate=!0,ru(ut,q,B,Kt,Me,an),Me.side=nt,Me.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}R.setRenderTarget(ve,we,ke),R.setClearColor(qe,Fe),Ye!==void 0&&(B.viewport=Ye),R.toneMapping=He}function Rs(S,D,q){const B=D.isScene===!0?D.overrideMaterial:null;for(let H=0,xe=S.length;H<xe;H++){const Ee=S[H],{object:ve,geometry:we,group:ke}=Ee;let He=Ee.material;He.allowOverride===!0&&B!==null&&(He=B),ve.layers.test(q.layers)&&ru(ve,D,q,we,He,ke)}}function ru(S,D,q,B,H,xe){N!==null&&H.isNodeMaterial&&N.setObject(S,H),S.onBeforeRender(R,D,q,B,H,xe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(R,D,q,B,S,xe),H.transparent===!0&&H.side===mi&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,R.renderBufferDirect(q,D,B,H,S,xe),H.side=Or,H.needsUpdate=!0,R.renderBufferDirect(q,D,B,H,S,xe),H.side=mi):R.renderBufferDirect(q,D,B,H,S,xe),S.onAfterRender(R,D,q,B,H,xe)}function ks(S,D,q){D.isScene!==!0&&(D=dn);const B=V.get(S),H=E.state.lights,xe=E.state.shadowsArray,Ee=H.state.version,ve=fe.getParameters(S,H.state,xe,D,q,E.state.lightProbeGridArray),we=fe.getProgramCacheKey(ve);let ke=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const He=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=ce.get(S.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",ri),ke=new Map,B.programs=ke);let Ye=ke.get(we);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===Ee)return su(S,ve),Ye}else ve.uniforms=fe.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,q,ve),S.onBeforeCompile(ve,R),Ye=fe.acquireProgram(ve,we),ke.set(we,Ye),B.uniforms=ve.uniforms;const Te=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=Le.uniform),su(S,ve),B.needsLights=_m(S),B.lightsStateVersion=Ee,B.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.sunLights.value=H.state.sun,Te.sunLightShadows.value=H.state.sunShadow,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.sunShadowMatrix.value=H.state.sunShadowMatrix,Te.sunShadowCascade.value=H.state.sunShadowCascade,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Ye,B.uniformsList=null,Ye}function au(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=mo.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function su(S,D){const q=V.get(S);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function pm(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let q=0,B=S.length;q<B;q++){const H=S[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function mm(S,D,q,B,H){D.isScene!==!0&&(D=dn),Z.resetTextureUnits();const xe=D.fog,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,ve=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ke=ce.get(B.envMap||Ee,we),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let vt=xi;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(vt=R.toneMapping);const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Kt=ut!==void 0?ut.length:0,Me=V.get(B),an=E.state.lights;if(Xe===!0&&(pt===!0||S!==Q)){const gt=S===Q&&B.id===Y;Le.setState(B,S,gt)}let nt=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==an.state.version||Me.outputColorSpace!==ve||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==ke||B.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==He||Me.vertexTangents!==Ye||Me.morphTargets!==Te||Me.morphNormals!==ot||Me.morphColors!==Dt||Me.toneMapping!==vt||Me.morphTargetsCount!==Kt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Me.__version=B.version);let Fn=Me.currentProgram;nt===!0&&(Fn=ks(B,D,H),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Fn,Me));let ai=!1,$i=!1,qr=!1;const dt=Fn.getUniforms(),Ct=Me.uniforms;if(x.useProgram(Fn.program)&&(ai=!0,$i=!0,qr=!0),B.id!==Y&&(Y=B.id,$i=!0),Me.needsLights){const gt=pm(E.state.lightProbeGridArray,H);Me.lightProbeGrid!==gt&&(Me.lightProbeGrid=gt,$i=!0)}if(ai||Q!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",S.projectionMatrix),dt.setValue(U,"viewMatrix",S.matrixWorldInverse);const qi=dt.map.cameraPosition;qi!==void 0&&qi.setValue(U,yt.setFromMatrixPosition(S.matrixWorld)),k.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,$i=!0,qr=!0)}if(Me.needsLights&&(an.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",an.state.sunShadowMap,Z),an.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,Z),an.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",an.state.spotShadowMap,Z),an.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",an.state.pointShadowMap,Z)),H.isSkinnedMesh){dt.setOptional(U,H,"bindMatrix"),dt.setOptional(U,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(U,"boneTexture",gt.boneTexture,Z))}H.isBatchedMesh&&(dt.setOptional(U,H,"batchingTexture"),dt.setValue(U,"batchingTexture",H._matricesTexture,Z),dt.setOptional(U,H,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",H._indirectTexture,Z),dt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",H._colorsTexture,Z));const Wi=q.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&I.update(H,q,Fn),($i||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,dt.setValue(U,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=fS()),$i){if(dt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&gm(Ct,qr),xe&&B.fog===!0&&Ce.refreshFogUniforms(Ct,xe),Ce.refreshMaterialUniforms(Ct,B,G,P,E.state.transmissionRenderTarget[S.id]),Me.needsLights&&Me.lightProbeGrid){const gt=Me.lightProbeGrid;Ct.probesSH.value=gt.texture,Ct.probesMin.value.copy(gt.boundingBox.min),Ct.probesMax.value.copy(gt.boundingBox.max),Ct.probesResolution.value.copy(gt.resolution)}mo.upload(U,au(Me),Ct,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mo.upload(U,au(Me),Ct,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(U,"center",H.center),dt.setValue(U,"modelViewMatrix",H.modelViewMatrix),dt.setValue(U,"normalMatrix",H.normalMatrix),dt.setValue(U,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const gt=B.uniformsGroups;for(let qi=0,Xr=gt.length;qi<Xr;qi++){const lu=gt[qi];ae.update(lu,Fn),ae.bind(lu,Fn)}}return Fn}function gm(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function _m(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(S,D,q){const B=V.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=D,V.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const q=V.get(S);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,q=0){ee=S,X=D,$=q;let B=null,H=!1,xe=!1;if(S){const ve=V.get(S);if(ve.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),re.copy(S.viewport),Se.copy(S.scissor),Ae=S.scissorTest,x.viewport(re),x.scissor(Se),x.setScissorTest(Ae),Y=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ve.__hasExternalTextures)Z.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const He=S.depthTexture;if(ve.__boundDepthTexture!==He){if(He!==null&&V.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const ke=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?B=ke[D][q]:B=ke[D],H=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?B=V.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[q]:B=ke,re.copy(S.viewport),Se.copy(S.scissor),Ae=S.scissorTest}else re.copy(ye).multiplyScalar(G).floor(),Se.copy(Be).multiplyScalar(G).floor(),Ae=xt;if(q!==0&&(B=O),x.bindFramebuffer(U.FRAMEBUFFER,B)&&x.drawBuffers(S,B),x.viewport(re),x.scissor(Se),x.setScissorTest(Ae),H){const ve=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,q)}else if(xe){const ve=D;for(let we=0;we<S.textures.length;we++){const ke=V.get(S.textures[we]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+we,ke.__webglTexture,q,ve)}}else if(S!==null&&q!==0){const ve=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,q)}Y=-1};function ou(S){const D=V.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=k.textureFormatReadable(S.format),D.__typeReadable=k.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,q,B,H,xe,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){x.bindFramebuffer(U.FRAMEBUFFER,we);try{const ke=S.textures[ve],He=ke.format,Ye=ke.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Te=ou(ke);if(Te.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&q>=0&&q<=S.height-H&&U.readPixels(D,q,B,H,me.convert(He),me.convert(Ye),xe)}finally{const ke=ee!==null?V.get(ee).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,D,q,B,H,xe,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(D>=0&&D<=S.width-B&&q>=0&&q<=S.height-H){x.bindFramebuffer(U.FRAMEBUFFER,we);const ke=S.textures[ve],He=ke.format,Ye=ke.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Te=ou(ke);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),U.readPixels(D,q,B,H,me.convert(He),me.convert(Ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Dt=ee!==null?V.get(ee).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Dt);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await M_(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ot),U.deleteSync(vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,q=0){const B=Math.pow(2,-q),H=Math.floor(S.image.width*B),xe=Math.floor(S.image.height*B),Ee=D!==null?D.x:0,ve=D!==null?D.y:0;Z.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ee,ve,H,xe),x.unbindTexture()},this.copyTextureToTexture=function(S,D,q=null,B=null,H=0,xe=0){let Ee,ve,we,ke,He,Ye,Te,ot,Dt;const vt=S.isCompressedTexture?S.mipmaps[xe]:S.image;if(q!==null)Ee=q.max.x-q.min.x,ve=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,He=q.min.y,Ye=q.isBox3?q.min.z:0;else{const Ct=Math.pow(2,-H);Ee=Math.floor(vt.width*Ct),ve=Math.floor(vt.height*Ct),S.isDataArrayTexture?we=vt.depth:S.isData3DTexture?we=Math.floor(vt.depth*Ct):we=1,ke=0,He=0,Ye=0}B!==null?(Te=B.x,ot=B.y,Dt=B.z):(Te=0,ot=0,Dt=0);const ut=me.convert(D.format),Kt=me.convert(D.type);let Me;D.isData3DTexture?(Z.setTexture3D(D,0),Me=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Me=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Me=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const an=x.getParameter(U.UNPACK_ROW_LENGTH),nt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Fn=x.getParameter(U.UNPACK_SKIP_PIXELS),ai=x.getParameter(U.UNPACK_SKIP_ROWS),$i=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),x.pixelStorei(U.UNPACK_SKIP_ROWS,He),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const qr=S.isDataArrayTexture||S.isData3DTexture,dt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Ct=V.get(S),Wi=V.get(D),gt=V.get(Ct.__renderTarget),qi=V.get(Wi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xr=0;Xr<we;Xr++)qr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(S).__webglTexture,H,Ye+Xr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(D).__webglTexture,xe,Dt+Xr)),U.blitFramebuffer(ke,He,Ee,ve,Te,ot,Ee,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||V.has(S)){const Ct=V.get(S),Wi=V.get(D);x.bindFramebuffer(U.READ_FRAMEBUFFER,L),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let gt=0;gt<we;gt++)qr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,H,Ye+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,H),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wi.__webglTexture,xe,Dt+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wi.__webglTexture,xe),H!==0?U.blitFramebuffer(ke,He,Ee,ve,Te,ot,Ee,ve,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(Me,xe,Te,ot,Dt+gt,ke,He,Ee,ve):U.copyTexSubImage2D(Me,xe,Te,ot,ke,He,Ee,ve);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Me,xe,Te,ot,Dt,Ee,ve,we,ut,Kt,vt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,xe,Te,ot,Dt,Ee,ve,we,ut,vt.data):U.texSubImage3D(Me,xe,Te,ot,Dt,Ee,ve,we,ut,Kt,vt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xe,Te,ot,Ee,ve,ut,Kt,vt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xe,Te,ot,vt.width,vt.height,ut,vt.data):U.texSubImage2D(U.TEXTURE_2D,xe,Te,ot,Ee,ve,ut,Kt,vt);x.pixelStorei(U.UNPACK_ROW_LENGTH,an),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Fn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ai),x.pixelStorei(U.UNPACK_SKIP_IMAGES,$i),xe===0&&D.generateMipmaps&&U.generateMipmap(Me),x.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){X=0,$=0,ee=null,x.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const pS=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],ad=["pitch","yaw","roll","bend","x","y","z"];function go(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function Fp(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function mS(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,r={adi:Fp(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(r.palUzay=!0),e.palDef===!0&&(r.palDef=!0);const a=go(e.loopBas);a!==null&&a>=0&&(r.loopBas=a);const s=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of s){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of pS){const f=c[d];if(!f||typeof f!="object")continue;let u=r.kemikler.get(d);u||(u={},r.kemikler.set(d,u));for(const m of ad){const _=go(f[m]);_!==null&&(u[m]||(u[m]=[]),u[m].push({t:l,v:_,easing:String(c.easing||"LINEAR").toUpperCase()}))}const h=go(f.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,u.turn||(u.turn=[]),u.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return r.palUzay===!0&&r.palDef!==!0&&vS(r),r}const gS={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function _S(i){if(i.length===0)return 0;const e=[...i].sort((n,r)=>n-r),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function vS(i){for(const[e,t]of Object.entries(gS)){const n=i.kemikler.get(e);if(!n)continue;let r=0,a=0;for(const s of["x","y"]){const o=n[s];if(!o||o.length===0)continue;r++;const c=t[s==="x"?0:1];Math.abs(_S(o.map(l=>l.v))-c)<=2&&a++}r===0||a!==r||["x","y","z"].forEach((s,o)=>{const c=n[s];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function xS(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,r={adi:Fp(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},a=t.bones||{};for(const s of Object.keys(a)){const o=a[s];if(!o||typeof o!="object")continue;const c={},l=(d,f,u)=>{if(!d)return;const h=[],m=(_,p)=>{const g=go(p);g!==null&&h.push({t:_,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;m(p,Array.isArray(_?.vector)?_.vector[f]:void 0)}else Array.isArray(d.vector)?m(0,d.vector[f]):typeof d=="number"&&m(0,d);h.length&&(c[u]=h)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&r.kemikler.set(s,c)}return r}function yS(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return mS(e);if(e?.animations)return xS(e);throw new Error("bilinmeyen emote formatı")}function bS(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Af(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],r=i[t],a=r.t-n.t,s=a<=0?1:(e-n.t)/a;return n.v+(r.v-n.v)*bS(r.easing)(s)}function Op(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Rf={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:Op(),kokDon:[0,0,0],kokKonum:[0,0,0]},zp={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},SS=zp,MS={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function kf(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),r=i.palUzay===!0,a={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:r,konum:Op(),kokDon:[0,0,0],kokKonum:[0,0,0]},s=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(h,m,_)=>{h[m==="x"?0:m==="y"?1:2]=_};for(const[h,m]of i.kemikler){if(r&&h==="body"){for(const g of ad){const b=Af(m[g],n);b!==null&&(g==="pitch"?a.kokDon[0]=b:g==="yaw"?a.kokDon[1]=b:g==="roll"?a.kokDon[2]=-b:g==="bend"?a.bend[4]=b:(g==="x"||g==="y"||g==="z")&&d(l,g,b))}continue}const _=zp[h],p=_!==void 0?a[s[_]]:null;for(const g of ad){const b=Af(m[g],n);if(b!==null){if(p){if(g==="pitch")p[0]=b;else if(g==="yaw")p[1]=b;else if(g==="roll")p[2]=r?-b:b;else if(g==="x"||g==="y"||g==="z"){const T=SS[h];T!==void 0&&d(c[T],g,b)}}if(g==="bend"){const T=MS[h];T!==void 0&&(a.bend[T]+=b)}}}}const f=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(r){for(let h=0;h<6;h++){const m=c[h];a.konum[h]=[m[0]??0,m[1]??0,-(m[2]??0)]}return a.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],a}const u=[1,0,1,1,0,0];for(let h=0;h<6;h++){const m=c[h],_=a.konum[h];for(let p=0;p<3;p++){if(m[p]===void 0){_[p]=0;continue}let g=m[p];p===1&&u[h]&&(g+=24),_[p]=g-f[h][p]}}return a}function zn(i,e,t,n,r){return[{x:i+r,y:e,w:t,h:r},{x:i+r+t,y:e,w:t,h:r},{x:i,y:e+r,w:r,h:n},{x:i+r,y:e+r,w:t,h:n},{x:i+r+t,y:e+r,w:r,h:n},{x:i+r+t+r,y:e+r,w:t,h:n}]}const Cf=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:zn(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:zn(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:zn(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:zn(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:zn(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:zn(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:zn(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:zn(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:zn(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:zn(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:zn(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:zn(0,48,4,12,4)}],_o={x:1,y:1,w:10,h:16},Lf={x:12,y:1,w:10,h:16},Bp=20,ES=36,wS=2,TS=4,AS=1;function RS(i){const e=i?3:4,t=AS+4,n=i?t-3:t-4,r=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:r,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function Hp(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function Gp(i){const e=i.getContext("2d",{willReadFrequently:!0});if(!e)return _o;const t=n=>{let r=0;try{const a=e.getImageData(n.x,n.y,n.w,n.h).data;for(let s=3;s<a.length;s+=4)a[s]>8&&r++}catch{return 0}return r};return t(Lf)>t(_o)?Lf:_o}const Ve=1/24;function Rn(i,e,t,n,r,a,s=!1){const o=i.attributes.uv,c=e*4,l=s?a:n,d=s?n:a;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,r/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,r/64,1-d/64)}function Lo(i){i.magFilter=Nt,i.minFilter=Nt,i.colorSpace=An}function Vp(i,e=!1){return i?new nd({map:i,transparent:e,alphaTest:e?.01:0}):new nd({color:5924466})}function Pf(i,e,t=!1){const n=new Wr(i.w*Ve,i.h*Ve,i.d*Ve),{u:r,v:a,w:s,h:o,d:c}=i;return e&&(Rn(n,0,r+c+s,a+c,r+c+s+c,a+c+o),Rn(n,1,r,a+c,r+c,a+c+o),Rn(n,2,r+c,a,r+c+s,a+c),Rn(n,3,r+c+s,a,r+c+s+s,a+c,!0),Rn(n,4,r+c,a+c,r+c+s,a+c+o),Rn(n,5,r+c+s+c,a+c,r+c+s+c+s,a+c+o),Lo(e)),new Wn(n,Vp(e,t))}function js(i,e,t,n=!1){const r=i.h/2,{u:a,v:s,w:o,d:c}=i,l=new Wr(i.w*Ve,r*Ve,i.d*Ve);if(t){const d=s+c+(e?r:0),f=d+r;Rn(l,0,a+c+o,d,a+c+o+c,f),Rn(l,1,a,d,a+c,f),Rn(l,2,a+c,s,a+c+o,s+c),e?Rn(l,3,a+c+o,s,a+c+o+o,s+c,!0):Rn(l,3,a+c,s,a+c+o,s+c),Rn(l,4,a+c,d,a+c+o,f),Rn(l,5,a+c+o+c,d,a+c+o+c+o,f),Lo(t)}return new Wn(l,Vp(t,n))}class kS{renderer=null;scene=new H_;camera=new Gn(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new m0;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinPanel=_o;_bekleyenPelerin=null;canliDoku=null;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.canvas=e;try{this.renderer=new hS({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new f0(16777215,.9));const t=new nf(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new nf(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const r=e.clientWidth||e.parentElement?.clientWidth||320,a=e.clientHeight||300;this.renderer.setSize(r,a,!1),this.camera.aspect=r/Math.max(1,a),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const r=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(r)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){this.surukleX=t.clientX,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX;this.surukleX=t.clientX,this.kameraAciHedef-=n*.008},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak)}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t;const n=this.kameraYariCap;this.camera.position.set(Math.sin(this.kameraAci)*n,this.kameraY,Math.cos(this.kameraAci)*n),this.camera.lookAt(0,.02,0)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return typeof createImageBitmap=="function"?await createImageBitmap(n):await new Promise((r,a)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(s),r(o)},o.onerror=()=>{URL.revokeObjectURL(s),a(new Error("görsel açılamadı"))},o.src=s})}}catch{}return await new c0().loadAsync(e)}async skin(e){let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url);if(n.height===32){const r=document.createElement("canvas");r.width=64,r.height=64;const a=r.getContext("2d");a&&(a.imageSmoothingEnabled=!1,a.drawImage(n,0,0),t=new Ft(r))}t||(t=new Ft(n)),t.needsUpdate=!0}catch{t=null}this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1)}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),!!e?.url)try{const t=await this.dokuResmi(e.url),n=Hp(t);this.pelerinPanel=Gp(n);const r=new Ft(n);Lo(r),r.needsUpdate=!0,this.pelerinDoku=r,this.pelerinMeshKur()}catch{}}pelerinTemizle(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null,this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;const t=new ws(10*Ve,16*Ve),n=t.attributes.uv,r=this.pelerinPanel,a=r.x/64,s=(r.x+r.w)/64,o=1-1/32,c=1-17/32;n.setXY(0,a,o),n.setXY(1,s,o),n.setXY(2,a,c),n.setXY(3,s,c),n.needsUpdate=!0;const l=new nd({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:mi}),d=new Wn(t,l);d.rotation.y=Math.PI,d.position.set(0,-8*Ve,0);const f=new Qt;f.position.set(0,6*Ve,-2.5*Ve),f.rotation.x=.06,f.add(d),e.add(f),this.pelerinGrup=f,this.pelerinSarkac=f}tuvalDoku(e,t){const n=new Q_(e);Lo(n),n.needsUpdate=!0,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0)}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(M=>{const E=M;E.geometry&&E.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.kok=new Qt,this.kok.position.y=-.66,this.kalca=new Qt,this.kalca.position.set(0,12*Ve,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Qt,body:new Qt,armL:new Qt,armR:new Qt,legL:new Qt,legR:new Qt};const[n,r,a,s,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const M of[n,r,a,s,o,c])M.rotation.order="ZYX";const l=Pf({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Ve,0),n.add(l);const d=Pf({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ve,0),n.add(d),r.position.set(0,12*Ve,0),r.userData.pivotPx=[0,12,0];const f=(M,E,A,v)=>{const w=js(E,!1,e);w.position.set(v,A+E.h/4*Ve,0),M.add(w);const R=new Qt;R.position.set(0,A,0);const C=js(E,!0,e);return C.position.set(v,-(E.h/4)*Ve,0),R.add(C),M.add(R),R},u=new Qt;u.position.set(0,-6*Ve,0),u.rotation.order="ZYX";const h=js({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Ve,0),u.add(h),r.add(u);const m=js({u:16,v:16,w:8,h:12,d:4},!0,e);m.position.set(0,-9*Ve,0),r.add(m);const _=new Qt;_.position.set(0,6*Ve,0),_.rotation.order="ZYX";const p=t?3:4;n.position.set(0,6*Ve,0),n.userData.pivotPx=[0,6,0],a.position.set(5*Ve,4*Ve,0),a.userData.pivotPx=[5,4,0];const g=f(a,{u:32,v:48,w:p,h:12,d:4},-4*Ve,Ve);s.position.set(-5*Ve,4*Ve,0),s.userData.pivotPx=[-5,4,0];const b=f(s,{u:40,v:16,w:p,h:12,d:4},-4*Ve,-Ve);o.position.set(1.9*Ve,0,0),o.userData.pivotPx=[1.9,0,0];const T=f(o,{u:16,v:48,w:4,h:12,d:4},-6*Ve,0);c.position.set(-1.9*Ve,0,0),c.userData.pivotPx=[-1.9,0,0];const y=f(c,{u:0,v:16,w:4,h:12,d:4},-6*Ve,0);this.bukulenler={body:u,belUst:_,armL:g,armR:b,legL:T,legR:y},_.add(n,a,s),this.kalca.add(r,_,o,c),this.scene.add(this.kok),this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),or===this&&(or=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=Math.min(.05,this.saat.getDelta());this.zaman+=t,this.adimla(t),this.kameraGuncelle(t),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=kf(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Rf):t=kf(this.aktif,this.tEmote)):(t=Rf,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin()}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,r=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(r-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const r=A_.degToRad,a=(o,c,l)=>{const d=r(c[0]),f=-r(c[1]),u=r(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(f-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],m=e.konum[l],_=(h[0]+m[0])*Ve,p=(h[1]+m[1])*Ve,g=(h[2]+m[2])*Ve;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};a(n.head,e.head,0),a(n.body,e.body,1),a(n.armL,e.armL,2),a(n.armR,e.armR,3),a(n.legL,e.legL,4),a(n.legR,e.legR,5);const s=this.bukulenler;if(s){const o=(c,l)=>{const d=r(l);c.rotation.x+=(d-c.rotation.x)*t};o(s.armL,e.bend[0]),o(s.armR,e.bend[1]),o(s.legL,e.bend[2]),o(s.legR,e.bend[3]),o(s.body,e.bend[4]),o(s.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(r(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-r(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(r(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Ve,d=(12+c[1])*Ve,f=c[2]*Ve;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(f-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this._bekleyenPelerin=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let or=null;function Ts(){return or||(or=new kS),window.__sahne=or,or}function qd(){or?.kapati(),or=null,window.__sahne=null}const Ie=128,Jn=96;function Zn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ie(i,e,t,n=1,r=1,a="#fff"){i.fillStyle=a,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(r))}function Qi(i,e,t=Jn){const n=Math.ceil(t/e.length);e.forEach((r,a)=>ie(i,0,a*n,Ie,n+1,r));for(let r=1;r<e.length;r++){const a=r*n,s=Zn(r*977);for(let o=0;o<Ie;o+=2)s()>.45&&(ie(i,o,a-1,1,1,e[r-1]),s()>.6&&ie(i,o+1,a-1,1,1,e[r]))}}function Df(i,e,t,n,r,a){ie(i,e+3,t+3,n,3,r),ie(i,e,t+5,n+6,3,r),ie(i,e+2,t+8,n-2,2,a),ie(i,e+6,t+2,n-8,2,r),ie(i,e+4,t+10,n-6,1,a)}function If(i,e,t,n,r){const a=Zn(r);for(let s=0;s<6;s++){const o=Math.floor(a()*Ie),c=18+Math.floor(a()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+s%3*6)));ie(i,o-d,e-l,d*2,1,t)}ie(i,o-1,e-c+1,2,2,n)}}function ca(i,e,t,n,r=30){const a=Zn(n);for(let s=0;s<e;s++){const o=Math.floor(a()*Ie),c=r+Math.floor(a()*(Jn-r));ie(i,o,c,1,1,t[Math.floor(a()*t.length)])}}const sd=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){Qi(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),ie(i,0,62,Ie,8,"#b98aa6"),ie(i,0,68,Ie,8,"#8f6377"),If(i,64,"#a97a95","#d9aec6",41);const e=(n,r,a)=>{const s=Zn(a),o=78;ie(i,n,o-r,3,r,"#5d3b46"),ie(i,n+1,o-r,1,r,"#7a5260");const c=12+Math.floor(s()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((s()-.5)*14),f=o-r-Math.round(s()*14)-l*4;for(let u=-c;u<=c;u++){const h=Math.round(Math.sqrt(Math.max(0,c*c-u*u))*1.15);h<=0||ie(i,d-h,f+u,h*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const h=Math.round((s()-.5)*c*1.6),m=Math.round((s()-.5)*c*1.6);ie(i,d+h,f+m,1,1,s()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),ie(i,0,78,Ie,Jn-78,"#7fa86a"),ie(i,0,78,Ie,2,"#9dc484"),ie(i,0,90,Ie,6,"#5d7f4f");const t=Zn(53);for(let n=0;n<70;n++)ie(i,t()*Ie,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){Qi(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),ie(i,0,52,Ie,6,"#ff6a1a"),ie(i,0,52,Ie,2,"#ffa347"),ie(i,0,56,Ie,2,"#c93d0c"),ie(i,0,40,Ie,14,"#2b1218"),ie(i,12,26,16,30,"#1c0a10"),ie(i,12,22,16,5,"#2f121a"),ie(i,96,18,20,42,"#1c0a10"),ie(i,96,14,20,5,"#2f121a"),ie(i,44,34,34,26,"#22101a"),ie(i,44,30,34,4,"#331522");const e=Zn(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),r=36+Math.floor(e()*20);ie(i,n,r,2,3,"#ff9b3d")}ie(i,18,32,2,3,"#ffb04d"),ie(i,102,26,2,3,"#ffb04d"),ie(i,0,70,Ie,26,"#120810");for(let t=0;t<Ie;t+=16)ie(i,t,70,15,8,"#1b0d17"),ie(i,t+1,71,13,2,"#241322");ie(i,0,84,Ie,4,"#ff5a14"),ie(i,0,84,Ie,1,"#ffb44d"),ie(i,0,88,Ie,8,"#120810"),ca(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){Qi(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),ca(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),ie(i,0,58,Ie,10,"#241436"),ie(i,0,58,Ie,2,"#3a2152");const e=(n,r,a)=>{ie(i,n,r,9,a,"#3d2a56"),ie(i,n+1,r,2,a,"#55406f"),ie(i,n+7,r,2,a,"#2a1c3d"),ie(i,n-2,r-3,13,3,"#63498a"),ie(i,n-1,r-6,11,3,"#4a3568"),ie(i,n+2,r-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,r)=>{ie(i,n,r,2,6,"#efe4ff"),ie(i,n-2,r+1,6,3,"rgba(200,170,255,0.35)"),ie(i,n,r+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),ie(i,30,46,14,4,"#2c1a41"),ie(i,34,50,6,3,"#1e1130"),ie(i,96,50,10,3,"#2c1a41"),ie(i,0,68,Ie,Jn-68,"#1b1029"),ie(i,0,68,Ie,3,"#34204a");for(let n=4;n<Ie;n+=14)ie(i,n,76,9,2,"#2a1a3d");ca(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){Qi(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),ie(i,0,46,Ie,8,"#8a2a1c");const e=(t,n,r,a)=>{ie(i,t,n,r,a,"#221a1f"),ie(i,t,n,r,2,"#33272e");for(let s=4;s<a;s+=8)ie(i,t+2,n+s,r-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)ie(i,t,38,6,6,"#120d10");ie(i,4,28,8,8,"#120d10"),ie(i,104,24,8,8,"#120d10"),ie(i,8,50,4,4,"#ffcf4d"),ie(i,14,54,2,2,"#e0a81f"),ie(i,106,44,5,5,"#ffcf4d"),ie(i,60,52,4,4,"#ffcf4d"),ie(i,66,56,2,2,"#e0a81f"),ie(i,0,70,Ie,26,"#150f12"),ie(i,0,74,Ie,6,"#ff6418"),ie(i,0,74,Ie,1,"#ffb44d"),ie(i,0,80,Ie,16,"#150f12"),ca(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){Qi(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Df(i,22,18,22,"#2d6f74","#1d5259"),Df(i,76,12,30,"#2d6f74","#1d5259"),ie(i,0,66,Ie,10,"#2f6b52"),ie(i,0,66,Ie,2,"#4b8b68");const e=(n,r,a)=>{const s=Zn(a),o=4+Math.floor(s()*2);ie(i,n,74-r,o,r,"#e6d7bd"),ie(i,n,74-r,1,r,"#f3e9d6"),ie(i,n+o-1,74-r,1,r,"#c9b797");const c=74-r-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);ie(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)ie(i,n+o/2-12+s()*24,c+2+s()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),ie(i,0,74,Ie,Jn-74,"#3f7c5c"),ie(i,0,74,Ie,2,"#5b9d77"),ie(i,0,86,Ie,10,"#2c5a44");const t=Zn(61);for(let n=0;n<48;n++)ie(i,t()*Ie,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){Qi(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const r=12+n*7;for(let a=0;a<Ie;a++){const s=Math.round(Math.sin(a/Ie*Math.PI*2+n)*3);ie(i,a,r+s,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}ca(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),If(i,60,"#2a4a74","#7fa8d6",77);const e=(n,r,a,s)=>{for(let o=0;o<s;o++){const c=Math.round(a*(1-o/s)*.9);ie(i,n-c/2+o*.4,r+o,c,1,o<s*.4?"#d6ecff":"#a6cbe8")}ie(i,n,r+2,2,s-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),ie(i,0,72,Ie,Jn-72,"#0f2a4a"),ie(i,0,72,Ie,2,"#2b5f8c");for(let n=0;n<24;n++){const r=Zn(n*13);ie(i,r()*Ie,76+r()*18,6+r()*10,1,"#1f4b72")}const t=Zn(83);for(let n=0;n<26;n++)ie(i,t()*Ie,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){Qi(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),ie(i,96,12,12,12,"#fff3cf"),ie(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;ie(i,0,n,Ie,6,t<2?"#d8ab68":"#c1924f"),ie(i,0,n,Ie,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);ie(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),ie(i,46-n/2,e+t,2,1,"#f0d29a")}ie(i,42,40,8,16,"#6b4d28"),ie(i,43,42,6,14,"#3d2b14"),ie(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let r=0;r<8;r++)ie(i,19+n*r,52-r+Math.abs(r-3),2,1,t%2?"#5f8f4a":"#7aa85c")}ie(i,0,78,Ie,Jn-78,"#e0b877"),ie(i,0,78,Ie,2,"#f2d49b");for(let t=6;t<Ie;t+=18)ie(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){Qi(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const r=8+n*21;for(let a=0;a<66;a++){const s=2+a*.18;ie(i,r+a*.12,a,s,1,"rgba(150,240,255,0.06)")}}const e=(n,r,a,s)=>{ie(i,n,r,a,s,"#2f7d76"),ie(i,n,r,a,2,"#48a89a"),ie(i,n,r+s-2,a,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),ie(i,60,18,8,4,"#a8f0e2"),ie(i,62,16,4,2,"#e0fff8"),ie(i,34,40,4,4,"#d9b34a"),ie(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)ie(i,n,52,6,2,"#1d4a48");ie(i,0,64,Ie,Jn-64,"#0b2c33"),ie(i,0,64,Ie,3,"#164a4a");const t=Zn(47);for(let n=0;n<16;n++){const r=t()*Ie,a=6+t()*12;ie(i,r,78-a,2,a,t()>.5?"#1f6b55":"#2b8a63")}ca(i,30,["#8fe8dd","#c8fff6"],11,8)}}],CS=sd;function LS(i){return sd.find(e=>e.id===i)||sd[0]}function $p(i,e){const t=i.getContext("2d");t&&((i.width!==Ie||i.height!==Jn)&&(i.width=Ie,i.height=Jn),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ie,Jn),LS(e).ciz(t))}let pn=null;const PS=()=>document.documentElement.getAttribute("data-world")==="sahne",DS=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function IS(i){const e=le.instances[0];(!pn||!le.instances.find(l=>l.id===pn))&&(pn=e?.id||null);const t=le.instances.find(l=>l.id===pn),n=Gi(),r=l=>!!l&&(l.includes("/")||l.includes("\\")),a=[...le.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),s=a[0]||null,o=a.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${le.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${qt(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Zo(n)}" alt="" draggable="false" ${Jo(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${ne("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${ne("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?ts(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${ne("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${ne("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${ne("play")} HIZLI GİRİŞ</div>
          ${s?`
          <button class="imp-hizli-satir${We.activeId===s.id?" durdur":""}" id="i-hizli-oyla" ${We.activeId&&We.activeId!==s.id?'disabled data-kilitli="1"':""}>
            <b>${s.name}${We.activeId===s.id?" — AÇIK":""}</b>
            <small>${ts(s.mod_loader)} · ${s.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=cn(`
      <div class="imp-satir${We.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${r(l.icon)?`<img src="${qt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${ts(l.mod_loader)} · ${l.mc_version} — ${DS(l.last_played)}</small>
        </span>
        <button class="imp-oyla${We.activeId===l.id?" durdur":""}" ${We.activeId&&We.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${We.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${ne(We.activeId===l.id?"stop":"play")} ${We.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${ne("gear")}</button>
      </div>
    `);d.addEventListener("click",f=>{const u=l.id;if(f.target.closest(".imp-diyis")){it("instances",u);return}if(f.target.closest(".imp-oyla")){We.activeId===l.id&&Gl();return}pn=u,it("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",f=>f.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async f=>{if(f.stopPropagation(),We.activeId===d)return Gl();if(!le.accounts.length)return bn();const{launchInstance:u}=await _t(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>St);return{launchInstance:h}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>it("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>it("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{pn&&it("instances",pn)}),i.querySelector("#i-ad")?.addEventListener("click",()=>bn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>it("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>it("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!s)return;if(We.activeId===s.id)return Gl();if(!le.accounts.length)return bn();const{launchInstance:l}=await _t(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);l(s.id)}),Wp(i,n)}async function Gl(){try{await se("cmd_kill_game")}catch{}const{refreshState:i}=await _t(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>St);return{refreshState:e}},void 0);await i(!0)}async function US(i){const e=i.querySelector("#i-news");if(e)try{const t=await se("cmd_list_yikim_news");t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const r=cn(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);r.addEventListener("click",()=>it("news")),e.appendChild(r)}}catch{}}function NS(i){if(qd(),PS()){IS(i),US(i);return}const e=le.instances[0];(!pn||!le.instances.find(d=>d.id===pn))&&(pn=e?.id||null);const t=le.instances.find(d=>d.id===pn),n=Gi(),r=d=>!!d&&(d.includes("/")||d.includes("\\")),a=t?r(t.icon)?`<img class="hero-inst-icon" src="${qt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",s=t?.cover?` style="background-image:url('${qt(t.cover)}')"`:"",o=t?We.activeId===t.id?"warn":"ok":"off",c=le.instances.filter(d=>d.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${t?.cover?" has-cover":""}"${s}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${rs(o)} ${a} ${t.mc_version} · ${ts(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(le.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(le.sys?.total_ram_mb||16384)*100))}%"></span></div>
            </div>
            <div class="meter">
              <div class="meter-cap">MODLAR</div>
              <div class="meter-val">${t.standard_mods?"Optimize set":"Sade"}<small>${t.source_pack?" · paket":""}</small></div>
            </div>
            <div class="meter">
              <div class="meter-cap">SON OYUN</div>
              <div class="meter-val">${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"—"}</div>
              <div class="meter-bar"><span style="width:0%"></span></div>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn ghost" id="h-manage">${ne("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${ne("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${ne("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${We.activeId?"disabled":""}" id="h-play"
          title="${We.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${We.activeId?"disabled":""}>
          <span class="pr-icon">${We.activeId?ne("clock"):ne("play")}</span>
          <span class="pr-label">${We.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${We.activeId?"çalışıyor":t.name}</span>
        </button>
        ${We.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${ne("stop")}
          <span class="sr-label">DURDUR</span>
        </button>`:""}
      </div>`:""}
    </section>

    <!-- HAT DEFTERİ: diğer kurulumlar cetvelle bölünmüş satırlar -->
    ${c.length?`
    <section class="home-section" aria-label="Diğer kurulumlar">
      <div class="ledger">
        <div class="ledger-head">
          <span class="ledger-title">DİĞER HATLAR</span>
          <button class="btn ghost sm" id="h-all">${ne("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${rs("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${le.config?.show_news===!1?"hidden":""}>
      <div class="section-head">
        <h2 class="dim-cap">YIKIM DUYURULARI</h2>
        <button class="btn ghost sm" id="news-all">Tümü</button>
      </div>
      <div class="news-strip" id="home-news"><div class="spinner" style="margin:30px auto"></div></div>
    </section>

    <!-- Topluluk -->
    <section class="home-section">
      <div class="section-head">
        <h2 class="dim-cap">TOPLULUK</h2>
      </div>
      <div class="community-stats" id="community-stats">
        <div class="card hover community-card">
          <div class="cs-val" id="cs-downloads">…</div>
          <div class="cs-label">İndirilme</div>
        </div>
        <div class="card hover community-card">
          <div class="cs-val" id="cs-stars">…</div>
          <div class="cs-label">GitHub Yıldız</div>
        </div>
        <div class="card hover community-card" id="cs-github-link" style="cursor:pointer">
          <div class="cs-val">${ne("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const l=i.querySelector("#ledger-rows");if(l){for(const d of c){r(d.icon);const f=cn(`
        <button class="ledger-row" data-id="${d.id}">
          ${rs(We.activeId===d.id?"warn":"ok")}
          <span class="lr-name">${d.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${ts(d.mod_loader)} ${d.mc_version}
            <span class="sep">·</span>
            Son: ${d.last_played?new Date(d.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${ne("play")}</span>
        </button>
      `);f.querySelector(".lr-play").innerHTML=ne("play"),f.addEventListener("click",async u=>{if(u.target.closest(".lr-play")){if(!le.accounts.length)return bn();Ld(f);const{launchInstance:h}=await _t(async()=>{const{launchInstance:m}=await Promise.resolve().then(()=>St);return{launchInstance:m}},void 0);h(d.id);return}it("instances",d.id)}),l.appendChild(f)}Cd(Array.from(l.children))}OS(i),zS(),FS(i),Wp(i,n)}async function Wp(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&($p(n,String(le.config?.sahne_arka||"kiraz")),n.classList.add("on"));const r=Ts();r.kur(t),t.classList.add("on");try{const o=await se("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await r.skin({url:qt(String(o.dosya)),slim:!!o.slim}):await r.skin(null)}catch{await r.skin(null)}if(le.config?.menu_animasyon===!1){r.emoteleriKur([]);return}const s={sakin:.6,normal:1,canli:1.8}[String(le.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await se("cmd_list_emotes"),c=[];for(const l of o)try{c.push(yS(l.icerik))}catch{}r.emoteleriKur(c,s)}catch{r.emoteleriKur([])}}async function FS(i){try{const e=await se("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{_t(()=>Promise.resolve().then(()=>St),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function ts(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function OS(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!pn){it("instances");return}if(!le.accounts.length){bn();return}Ld(i.querySelector(".play-ring"));const{launchInstance:e}=await _t(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>St);return{launchInstance:t}},void 0);e(pn)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:e}=await _t(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>St);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{it("instances",pn||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>it("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>it("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>it("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>bn())}async function zS(){const i=hi("#home-news");if(i)try{const e=await se("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=cn(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${ne("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>it("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Uf={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Vl(i){return Uf[i]||Uf.vanilla}let jn=null;function BS(i){const e=qt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function HS(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const r of n){const a=r.target;r.isIntersecting?a.play().catch(()=>{}):a.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function GS(i){if(Di.param&&le.instances.find(e=>e.id===Di.param)){jn=Di.param,Di.param=void 0,xs(i,jn);return}if(jn&&le.instances.find(e=>e.id===jn)){xs(i,jn);return}Po(i)}function Po(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${ne("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${ne("plus")} Yeni Kurulum</button>
      </div>
    </div>
    <div class="inst-grid" id="inst-grid"></div>
    <div class="exp-popular" id="inst-popular">
      <div class="section-head">
        <h2 class="dim-cap">EN ÇOK İNDİRİLEN PAKETLER</h2>
      </div>
      <div class="popular-strip" id="popular-strip"><div class="spinner" style="margin:26px auto"></div></div>
    </div>
    </div>
  `;const e=i.querySelector("#inst-grid");if(!le.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${ne("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Of());else{for(const t of le.instances){const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${qt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",a=We.activeId===t.id,s=cn(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?BS(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${r}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${qp(t.mod_loader)} ${t.mc_version}</span>
                ${a?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${rs(a?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${Ta(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${We.activeId?"disabled":""}>
              ${We.activeId?`${ne("clock")} Açık`:`${ne("play")} Oyna`}
            </button>
            ${a?`<button class="btn danger card-stop" title="Oyunu kapat">${ne("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);s.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!le.accounts.length)return bn();const{launchInstance:c}=await _t(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>St);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await se("cmd_kill_game")}catch{}const{refreshState:c}=await _t(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>St);return{refreshState:l}},void 0);await c(!0);return}jn=t.id,xs(i,t.id)}),e.appendChild(s)}Cd(Array.from(e.querySelectorAll(".inst-card"))),HS(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Of()),i.querySelector("#btn-import")?.addEventListener("click",()=>VS().catch(()=>{})),$S()}async function VS(){const i=await se("cmd_pick_pack_file");if(i){oe("Paket içe aktarılıyor…","ok");try{const e=await se("cmd_import_pack_file",{path:i}),{refreshState:t}=await _t(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>St);return{refreshState:n}},void 0);await t(),oe(`${e.name||"Paket"} kuruldu!`,"ok"),it("instances")}catch(e){oe(`Paket içe aktarılamadı: ${e}`,"err")}}}async function $S(){const i=document.querySelector("#popular-strip");if(i)try{const e=await se("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=cn(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${ne("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${ne("dl")} ${WS(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>it("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function WS(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function qp(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function xs(i,e){const t=le.instances.find(a=>a.id===e);if(!t){jn=null,Po(i);return}const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${qt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${ne("back")}</button>
      <div class="inst-icon xl">${r}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${qp(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${Ta(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${We.activeId?"disabled":""}>${We.activeId?`${ne("clock")} Oyun Açık`:`${ne("play")} Oyna`}</button>
      ${We.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${ne("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${ne("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${ne("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${ne("mug")} Java</button>
      <button class="tab" data-tab="log">${ne("term")} Log</button>
      <button class="tab" data-tab="analytics">${ne("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${ne("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{jn=null,Po(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!le.accounts.length)return bn();const{launchInstance:a}=await _t(async()=>{const{launchInstance:s}=await Promise.resolve().then(()=>St);return{launchInstance:s}},void 0);a(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:a}=await _t(async()=>{const{refreshState:s}=await Promise.resolve().then(()=>St);return{refreshState:s}},void 0);await a(!0)}),i.querySelectorAll(".tab").forEach(a=>{a.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),a.classList.add("active");const s=a.dataset.tab,o=i.querySelector("#tab-content");({mods:Xp,content:qS,java:Yp,log:XS,analytics:YS,settings:KS})[s](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let ki="resourcepacks";const Nf=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function qS(i,e){const t=()=>Nf.find(r=>r.id===ki);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let r=[];try{r=await se("cmd_list_content_files",{instanceId:e.id,kind:ki})}catch{}const a=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Nf.map(o=>`<button class="kt ${o.id===ki?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${ne("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${ne("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${ne("plus")} ${a.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{ki=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>se("cmd_open_content_folder",{instanceId:e.id,kind:ki}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=ki==="resourcepacks"?"resourcepack":ki==="shaderpacks"?"shader":"world";Di.param=`kind:${o}`,it("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await se("cmd_add_content_file",{instanceId:e.id,kind:ki}),await n()}catch(o){oe(`Eklenemedi: ${o}`,"err")}});const s=i.querySelector("#content-list");if(!r.length){s.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${a.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}s.innerHTML="";for(const o of r){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${qt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=cn(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":As(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${ne("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const f=d.currentTarget.dataset.del;if(confirm(`"${f}" silinsin mi?`))try{await se("cmd_delete_content_file",{instanceId:e.id,kind:ki,name:f}),await n()}catch(u){oe(`Silinemedi: ${u}`,"err")}}),s.appendChild(l)}};await n()}async function Xp(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await se("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await se("cmd_resolve_mod_icons",{filenames:t.map(s=>s.filename)})}catch{}let r={};if(t.length)try{const s=await se("cmd_check_mod_updates",{instanceId:e.id});r=Object.fromEntries(s.map(o=>[o.filename,o]))}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${ne("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const a=s=>{const o=t.filter(l=>l.filename.toLowerCase().includes(s.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",o.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of o){const d=n[l.filename],f=d?`<img class="mod-logo" src="${d}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${ne("puzzle")}</span>`,u=cn(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${f}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${As(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${r[l.filename]?`<button class="btn primary sm upd-mod" data-fn="${l.filename}" data-url="${r[l.filename].url}" data-ad="${r[l.filename].yeni_ad}" title="Yeni sürüm: ${r[l.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);u.querySelector(".switch")?.addEventListener("click",async h=>{const m=h.currentTarget,_=m.dataset.fn,p=m.dataset.en!=="true";await se("cmd_toggle_mod",{instanceId:e.id,filename:_,enabled:p}),l.enabled=p,a(i.querySelector("#mod-search").value)}),u.querySelector(".upd-mod")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await se("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),oe("Mod güncellendi"),await Xp(i,e)}catch(_){m.disabled=!1,m.textContent="Güncelle",oe(`Güncellenemedi: ${_}`,"err")}}),u.querySelector(".del-mod")?.addEventListener("click",async()=>{await se("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(h=>h.filename!==l.filename),a(i.querySelector("#mod-search").value),oe("Mod silindi")}),c.appendChild(u)}};i.querySelector("#mod-search")?.addEventListener("input",s=>{a(s.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{it("explore",e.id)}),a("")}async function Yp(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await se("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",r=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),a=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${ne("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${ne("args")} Java Argüman Presetleri</h3>
        <p style="margin-bottom:12px">FPS'e doğrudan etki eden JVM ayarları. Açıklamalarını okuyarak seç.</p>
        <div class="preset-list">
          ${t.map(l=>`
            <div class="preset-row card hover ${e.java_preset_id===l.id?"sel":""}" data-id="${l.id}">
              <div class="preset-head">
                <b>${l.name}</b>
                ${e.java_preset_id===l.id?'<span class="chip">aktif</span>':""}
                <span class="chip gray">${l.recommended_ram_mb} MB öneri</span>
              </div>
              <p>${l.description}</p>
              <details><summary>JVM bayraklarını göster</summary><pre>${l.args.join(`
`).replace(/\{ram_mb\}/g,String(e.ram_mb))}</pre></details>
            </div>`).join("")}
        </div>
      </div>
      <div class="card" id="ozel-card" ${n?"":'style="opacity:0.55"'}>
        <h3>${ne("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${n?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${r(a)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const s=i.querySelector("#ram-range");s.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${s.value} MB`}),s.addEventListener("change",async()=>{await se("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(s.value)}),e.ram_mb=parseInt(s.value),oe("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",f=>f.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",f=>f.stopPropagation()),l.addEventListener("click",async f=>{if(f.target.closest("details"))return;const u=l.dataset.id;await se("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const h=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(m=>m.closest(".preset-row").dataset.id));Yp(i,e),i.querySelectorAll(".preset-row").forEach(m=>{h.has(m.dataset.id)&&(m.querySelector("details").open=!0)}),oe("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),f=l.value.trim(),u=f===""?null:Math.max(2,Math.min(32,parseInt(f)||12)),h=d.value.trim();await se("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:h||null}),e.view_distance=u,e.custom_vm_args=h||null,oe("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function XS(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${ne("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),r=i.querySelector("#log-file"),a=i.querySelector("#log-search");let s="live",o=0;const c=[];let l=[];const d=(b,T)=>{n.textContent=T!==void 0&&T!==b?`${T}/${b} satır`:`${b} satır`},f=b=>{const T=document.createElement("div");return T.textContent=b,b.includes("ERROR")||b.includes("Exception")?T.classList.add("err"):b.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const b=a.value.trim().toLowerCase(),T=b?l.filter(y=>y.toLowerCase().includes(b)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${b?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const y=document.createDocumentFragment();for(const M of T)y.appendChild(f(M));t.appendChild(y)}d(l.length,T.length)},h=()=>{if(s="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const b=document.createDocumentFragment();for(const T of c)b.appendChild(f(T));t.appendChild(b),t.scrollTop=t.scrollHeight}d(o)},m=async b=>{s=b,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await se("cmd_read_log",{instanceId:e.id,fileId:b})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await se("cmd_list_logs",{instanceId:e.id});const b=new Map;for(const T of _)b.has(T.date)||b.set(T.date,[]),b.get(T.date).push(T);for(const[T,y]of b){const M=document.createElement("optgroup");M.label=T;for(const E of y){const A=document.createElement("option");A.value=E.id;const v=E.label.startsWith("Oturum ")?"#"+(E.label.split("-").pop()||E.label):E.label;A.textContent=`${E.time!=="-"?E.time+" — ":""}${v} (${As(E.size)})`,M.appendChild(A)}r.appendChild(M)}}catch{}We.activeId!==e.id&&_.length?(r.value=_[0].id,m(_[0].id)):h(),r.addEventListener("change",()=>{r.value==="live"?h():m(r.value)}),a.addEventListener("input",()=>{s!=="live"&&u()});const p=await ii("game-log",b=>{s!=="live"&&(r.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(b.payload),o++,c.length>500&&c.shift(),t.appendChild(f(b.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function YS(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await se("cmd_get_stats")).snapshot,r=n.per_instance_ms[e.id]||0,a=n.sessions?Math.round(r/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${Ta(r)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${a}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${ne("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((s,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${s.host}</span>
          <span class="chip gray">${s.visits} giriş</span>
          <span class="dur">${Ta(s.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${ne("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Ff(n.daily_ms).map(s=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(s.ms/Math.max(...Ff(n.daily_ms).map(o=>o.ms),1)*100,s.ms?5:2)}%"></div>
            <div class="bar-lbl">${s.label}</div>
            <div class="tooltip">${s.full} — ${Ta(s.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Ff(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),a=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;e.push({label:r.getDate()%3===0?String(r.getDate()):"",ms:i[a]||0,full:a})}return e}async function KS(i,e){const t=a=>a.includes("/")||a.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${qt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${ne("gear")} Kurulum Ayarları</h3>
      <div style="display:flex; flex-direction:column; gap:14px; margin-top:12px">
        <div class="row-between">
          <span>Kurulum adı</span>
          <input class="input" id="set-name" style="width:240px" value="${e.name}" />
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>İkon</span>
            <span class="set-icon-hint">dosya seç veya emoji yaz</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            <div class="inst-icon inst-icon-preview" id="icon-preview">${n}</div>
            <button class="btn ghost sm" id="pick-icon">${ne("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${qt(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?ne("image")+" Değiştir":ne("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${ne("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${ne("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${ne("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${ne("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const r=async()=>{const a=i.querySelector("#set-name").value.trim()||e.name,s=i.querySelector("#set-icon").value.trim();await se("cmd_rename_instance",{id:e.id,name:a}),s&&await se("cmd_set_instance_icon",{id:e.id,icon:s}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("input",()=>{const a=i.querySelector("#set-icon").value.trim();a&&(i.querySelector("#icon-preview").textContent=a)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_icon",{instanceId:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState(!0)),oe("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_cover",{instanceId:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState(!0)),oe("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await se("cmd_set_instance_cover",{id:e.id,cover:null}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState(!0)),oe("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>se("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>se("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await se("cmd_duplicate_instance",{id:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState()),oe("Kurulum kopyalandı"),xs(i.parentElement,jn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await se("cmd_delete_instance",{id:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState()),jn=null,Po(i.parentElement),oe("Kurulum silindi"))})}async function Of(){const e=(await se("cmd_list_versions")).all,t=await se("cmd_list_java_arg_presets"),n=await se("cmd_list_standard_mods"),{root:r,close:a}=(await _t(async()=>{const{openModal:l}=await Promise.resolve().then(()=>St);return{openModal:l}},void 0)).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${e.slice(0,100).map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${Vl("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Vl("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Vl("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
      </button>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${t.map(l=>`<option value="${l.id}">${l.name} — ${l.description}</option>`).join("")}
    </select>

    <div class="std-mods-row">
      <div class="std-mods-text">
        <b>Standart modlar kurulsun</b>
        <div class="std-mods-desc">Performans, PVP ve görünüm modları otomatik kurulur. Sonra paket içinden tek tek açıp kapatabilirsin.</div>
      </div>
      <label class="switch on" id="w-std-switch"></label>
    </div>
    <details class="std-mods-details">
      <summary>Hangi modlar kurulacak? (${n.length} mod)</summary>
      ${["performans","pvp","gorunum","yardarci"].map(l=>`
        <div class="std-cat">
          <div class="std-cat-label">${l==="performans"?"Performans":l==="pvp"?"PVP":l==="yardarci"?"Yardımcı":"Görünüm"}</div>
          <div class="std-chips">
            ${n.filter(d=>d.category===l).map(d=>`<span class="chip ${d.enabled_by_default?"":"gray"}" title="${d.description}">${d.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);let s="fabric",o=!0;r.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(r.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),s=l.dataset.l)})});const c=r.querySelector("#w-ram");c.addEventListener("input",()=>{r.querySelector("#w-ram-val").textContent=`${c.value} MB`}),r.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),r.querySelector("#w-cancel")?.addEventListener("click",a),r.querySelector("#w-create")?.addEventListener("click",async()=>{const l=r.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=r.querySelector("#w-name").value.trim()||"Yeni Kurulum",f=r.querySelector("#w-version").value,u=r.querySelector("#w-preset").value;try{const h=await se("cmd_create_instance",{instance:{name:d,mc_version:f,mod_loader:s,ram_mb:parseInt(c.value),java_preset_id:u,standard_mods:o&&s==="fabric"}});await _t(()=>Promise.resolve().then(()=>St),void 0).then(_=>_.refreshState()),a(),oe(`"${d}" oluşturuldu`);const m=h.instance.id;if(jn=m,le.instances.length){const _=document.querySelector("#content");xs(_,m)}}catch(h){oe(String(h),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}let Hn="mod",li="",Dr=[],Ma=40,er=1,ga=1,ns="",od="",$l=!1;function ZS(i){let e=Di.param;if(e?.startsWith("kind:")){const r=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(r)&&(Hn=r),e=void 0}Di.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${Hn==="mod"?"sel":""}" data-k="mod">${ne("puzzle")} Modlar</button>
        <button class="kt ${Hn==="modpack"?"sel":""}" data-k="modpack">${ne("box")} Paketler</button>
        <button class="kt ${Hn==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${Hn==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${Hn==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${Hn==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${le.featured_versions.map(r=>`<option>${r}</option>`).join("")}
      </select>
      <select class="input" id="exp-loader" style="width:130px">
        <option value="">loader: hepsi</option>
        <option value="fabric">fabric</option>
        <option value="forge">forge</option>
      </select>
      <button class="btn primary" id="exp-go">Ara</button>
      <span class="chip green">● Modrinth</span>
      <span class="chip green" title="Resmî API veya genel ayna üzerinden">● CurseForge</span>
      ${e?'<span class="chip">hedef kurulum seçili</span>':""}
    </div>
    <div class="result-grid" id="exp-results">
      <div class="card empty-state" style="grid-column:1/-1">
        ${ne("search")}
        <h3 style="margin-top:14px">Bir şeyler ara</h3>
        <p style="margin-top:6px">"sodium", "essential", "pvp pack" gibi…</p>
      </div>
    </div>
    <div class="exp-popular" id="exp-popular">
      <div class="section-head">
        <h2 class="dim-cap">EN ÇOK İNDİRİLENLER</h2>
      </div>
      <div class="popular-strip" id="popular-strip"><div class="spinner" style="margin:26px auto"></div></div>
    </div>
    </div>
  `,i.querySelectorAll(".kt").forEach(r=>r.addEventListener("click",()=>{Hn=r.dataset.k,i.querySelectorAll(".kt").forEach(a=>a.classList.remove("sel")),r.classList.add("sel"),li&&Er(i,li),zf(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Er(i,t.value.trim()),380)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&Er(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>Er(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{li&&Er(i,li)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{li&&Er(i,li)}),e&&li&&Er(i,li),zf(i)}async function zf(i){const e=i.querySelector("#popular-strip");try{const t=await se("cmd_repos_popular",{kind:Hn,loader:""});e.innerHTML="";for(const n of t){const r=cn(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${ne("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${ne("dl")} ${Kp(n.downloads)}</div>
          </div>
        </div>
      `);r.addEventListener("click",()=>Zp(n)),e.appendChild(r)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function Er(i,e){if(!e)return;li=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',ns=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;od=["resourcepack","shader","world","datapack"].includes(Hn)?"":n,er=1;try{if(Dr=(await se("cmd_repos_search",{query:e,kind:Hn,versions:ns?[ns]:[],loader:od,offset:0,limit:Ma})).results,ga=Dr.length>=Ma?2:1,t.innerHTML="",!Dr.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const s of Dr)t.appendChild(cd(s));ld(i)}catch(a){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${a}</p></div>`}}function ld(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=Dr.length>=Ma;if(er===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${er<=1?"disabled":""}>‹</button>`];for(let a=1;a<=ga;a++)n.push(`<button class="pg-btn ${a===er?"cur":""}" data-pg="${a}">${a}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const r=cn(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);r.addEventListener("click",a=>{const s=a.target.closest(".pg-btn");if(!s||s.disabled)return;const o=s.dataset.pg,c=o==="prev"?er-1:o==="next"?er+1:parseInt(o,10);!Number.isFinite(c)||c<1||c===er||JS(i,c)}),e.appendChild(r)}async function JS(i,e){if($l)return;$l=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const r=(await se("cmd_repos_search",{query:li,kind:Hn,versions:ns?[ns]:[],loader:od,offset:(e-1)*Ma,limit:Ma})).results;if(!r.length){ga=Math.min(ga,Math.max(1,e-1)),t.innerHTML="";for(const a of Dr)t.appendChild(cd(a));ld(i);return}Dr=r,er=e,ga=Math.max(ga,r.length>=Ma?e+1:e),t.innerHTML="";for(const a of r)t.appendChild(cd(a));ld(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{$l=!1}}function cd(i){const e=cn(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${ne(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${ne("dl")} ${Kp(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>Zp(i)),e}function Kp(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function Zp(i){const{root:e,close:t}=Xt(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",r=document.querySelector("#exp-loader")?.value||(le.instances[0]?.mod_loader==="forge"?"forge":"fabric"),s=["resourcepack","shader","world","datapack"].includes(i.kind)?"":r;try{const o=await se("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?s:"",gameVersion:n}),c=e.querySelector("#ver-list");if(c.innerHTML="",!o.length){c.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const l of o){const d=cn(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${l.name||l.version_number}</b>
            <span class="ver-date">${l.date.slice(0,10)} · ${l.game_versions.slice(0,3).join(", ")}${l.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${As(l.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>QS(i,l,t)),c.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function QS(i,e,t){if(i.kind==="modpack")t(),await jS(i,e);else{if(!le.instances.length){oe("Önce bir kurulum oluşturmalısın","err"),it("instances");return}const{root:n,close:r}=Xt(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${le.instances.map(a=>{const s=a.icon&&!a.icon.includes("/")&&!a.icon.includes("\\")?`${a.icon} `:"";return`<option value="${a.id}">${s}${a.name} (${a.mod_loader} ${a.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",r),n.querySelector("#ok")?.addEventListener("click",async()=>{const a=n.querySelector("#tgt").value,s=n.querySelector("#ok");s.disabled=!0,s.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await se("cmd_repos_install_content",{instanceId:a,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await se("cmd_repos_install",{instanceId:a,source:i.source,projectId:i.id,versionId:e.id}),r(),t(),oe({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){oe(String(o),"err"),s.disabled=!1,s.textContent="Kur"}})}}async function jS(i,e){const{root:t,close:n}=Xt(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),r=t.querySelector("#pk-bar"),a=t.querySelector("#pk-detail"),{listen:s}=await _t(async()=>{const{listen:c}=await Promise.resolve().then(()=>St);return{listen:c}},void 0),o=await s("launch-progress",c=>{c.payload.stage==="modpack"&&(r.style.transform=`scaleX(${Math.min(1,Math.max(0,c.payload.percent/100))})`,a.textContent=c.payload.detail||"")});try{const c=await se("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await _t(()=>Promise.resolve().then(()=>St),void 0).then(l=>l.refreshState()),await eM(c),it("instances")}catch(c){o(),a.textContent=`Kurulum başarısız: ${c}`,a.style.color="var(--danger)"}}async function eM(i){const e=await se("cmd_list_java_arg_presets"),{root:t,close:n}=Xt(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    <div class="preset-list">
      ${e.map(r=>`
        <div class="preset-row card hover" data-id="${r.id}">
          <div class="preset-head"><b>${r.name}</b><span class="chip gray">${r.recommended_ram_mb} MB öneri</span></div>
          <p>${r.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);t.querySelectorAll(".preset-row").forEach(r=>{r.addEventListener("click",async()=>{const a=r.dataset.id;a!=="__skip"&&(await se("cmd_set_instance_java_preset",{id:i.id,presetId:a}),oe(`Preset: ${e.find(s=>s.id===a)?.name}`)),n()})})}function tM(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,nM(i)}async function nM(i){const e=i.querySelector("#yikim-news");try{const t=await se("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${ne("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${ne("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(r=>`<p>${r}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${ne("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const r=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",a=>{a.stopPropagation(),r?.startsWith("https://")&&Ko(r).catch(()=>{})})})}catch{e.innerHTML=""}}const Wl=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],iM={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function rM(i){const e=(t,n,r,a=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${a}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${r}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Za(i){let e=le.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...iM}[e.theme]??e.theme,r=(e.tema_ozel||{})[n]||{},a=Wl.find(m=>m.id===n)||Wl[0],s=(r.accent||"").trim(),o=r.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(_=>{const p=i.querySelector("#app-version");p&&(p.textContent=`v${_} "Kıvılcım"`)}).catch(()=>{const _=i.querySelector("#app-version");_&&(_.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${le.accounts.map(m=>{const _=Gi()?.id===m.id;return`
          <div class="acc-row ${_?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${Zo(m)}" ${Jo(m)} draggable="false" />
            <div class="acc-info">
              <b>${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${_?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${ne("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${ne("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${ne("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Wl.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${rM(m)}
            <span class="wc-body">
              <b>${m.name}</b>
              <span>${m.desc}</span>
            </span>
            ${n===m.id?'<span class="sel-tag">SEÇİLİ</span>':""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Skin Merkezi</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Skinlerini düzenle, giy; Mojang pelerinlerini tak.</div>
        </div>
        <button class="btn ghost sm" id="skins-alani">${ne("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${ne("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${a.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${ne("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${s?"":" aktif"}" data-renk="" style="--sw:${a.accent}" title="Dünya rengi"></button>
            ${["#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#f5f5f5"].map(m=>`<button class="tema-renk${s.toLowerCase()===m?" aktif":""}" data-renk="${m}" style="--sw:${m}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${s||a.accent}" />
            </label>
          </div>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Köşe</span>
          <div class="sk-edit-seg" id="tema-radius">
            ${[["","Dünya"],["keskin","Keskin"],["yumusak","Yumuşak"],["hap","Hap"]].map(([m,_])=>`<button class="seg-btn${o===m?" aktif":""}" data-r="${m}">${_}</button>`).join("")}
          </div>
          <span class="to-ornek" id="tema-ornek">Örnek buton</span>
        </div>
      </div>

      <div class="sahne-art-secim" id="sahne-art-secim">
        <div class="sas-bas">
          <b>Sahne arka planı</b>
          <span>Karakterin arkasındaki piksel manzara — yalnız Sahne dünyasında görünür.</span>
        </div>
        <div class="sas-izgara" id="sas-izgara"></div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("sparkles")} Ambiens &amp; İmleç</h3>
      <p class="set-sub">Dünyanızı hareketlendir: her temanın kendi ambiens parçacık efekti vardır; imleç simgesi de seçilebilir.</p>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Ambiens parçacıklar</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Zımtırak, kar, fosfor yağmuru... — dünya efektinin yoğunluğu. Performans kaygısı varsa Sessiz'i seç.</div>
        </div>
        <select class="input" id="fx-particles" style="width:130px">
          <option value="none" ${e.fx_particles==="none"?"selected":""}>Kapalı</option>
          <option value="low" ${e.fx_particles==="low"?"selected":""}>Sessiz</option>
          <option value="mid" ${!e.fx_particles||e.fx_particles==="mid"?"selected":""}>Normal</option>
          <option value="high" ${e.fx_particles==="high"?"selected":""}>Yoğun</option>
        </select>
      </div>
      <div class="row-between" style="margin-top:12px">
        <div>
          <b style="font-size:13px">Fare imleci</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Launcher içindeki fare simgesi — temasının rengiyle boyunca güncellenir.</div>
        </div>
        <select class="input" id="cursor-style" style="width:130px">
          <option value="standart" ${!e.cursor_style||e.cursor_style==="standart"?"selected":""}>Sistem</option>
          <option value="yikim" ${e.cursor_style==="yikim"?"selected":""}>YIKIM Oku</option>
          <option value="hedef" ${e.cursor_style==="hedef"?"selected":""}>Hedef</option>
          <option value="nokta" ${e.cursor_style==="nokta"?"selected":""}>Nokta</option>
        </select>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${wr("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>Tempo</span>
        <select class="input" id="menu-anim-hiz" style="width:150px">
          <option value="sakin" ${e.menu_animasyon_hiz==="sakin"?"selected":""}>Sakin</option>
          <option value="normal" ${!e.menu_animasyon_hiz||e.menu_animasyon_hiz==="normal"?"selected":""}>Normal</option>
          <option value="canli" ${e.menu_animasyon_hiz==="canli"?"selected":""}>Canlı</option>
        </select>
      </div>
      <div class="anim-liste" id="anim-liste"><div class="spinner" style="margin:14px auto"></div></div>
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap">
        <button class="btn ghost" id="anim-ekle">${ne("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${ne("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("mug")} Java</h3>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Özel Java konumu</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Boşsa YIKIMLient Mojang'in resmî runtime'ını otomatik indirir (önerilen).</div>
        </div>
        <div style="display:flex; gap:8px">
          <button class="btn ghost" id="pick-java">Klasör Seç</button>
          <button class="btn ghost" id="clear-java">Sıfırla</button>
        </div>
      </div>
      <div class="chip gray" id="java-path" style="margin-top:10px; max-width:100%; overflow:hidden; text-overflow:ellipsis">${e.java_dir||"otomatik"}</div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("gear")} Genel</h3>
      ${wr("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${wr("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${wr("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${wr("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${wr("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${wr("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>İndirme hızı (paralel bağlantı)</span>
        <div class="ram-row" style="width:260px">
          <input type="range" min="8" max="64" step="8" value="${e.download_concurrency||32}" id="dlc-range" style="flex:1" />
          <span class="chip" id="dlc-val">${e.download_concurrency||32}</span>
        </div>
      </div>
    </div>

    <div id="rozet-alani"></div>

    <div class="card set-card anim-fade-up">
      <h3>${ne("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${ne("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${ne("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>bn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>bn()),i.querySelectorAll(".acc-row").forEach(m=>{const _=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async p=>{p.stopPropagation(),await se("cmd_select_account",{accountId:_}),await rn(),Za(i),oe("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async p=>{p.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await se("cmd_remove_account",{accountId:_}),await rn(),Za(i),oe("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{le.config.theme=m.dataset.t,fi(),await hn(),Za(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>it("skins"));const c=()=>le.config.tema_ozel||={},l=async(m,_)=>{const p=c()[n]||={};p[m]=_,!p.accent&&!p.radius&&delete c()[n],fi(),await hn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const _=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(p=>p.classList.toggle("aktif",p===m)),await l("accent",_),oe(_?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const d=i.querySelector("#tema-accent-pick");d?.addEventListener("input",()=>{le.config.tema_ozel||={},(le.config.tema_ozel[n]||={}).accent=d.value,fi()}),d?.addEventListener("change",async()=>{await hn(),oe("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(_=>_.classList.toggle("aktif",_===m)),await l("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],fi(),await hn(),Za(i),oe("Bu dünyanın özelleştirmesi sıfırlandı")});const f=i.querySelector("#sas-izgara");if(f){const m=String(e.sahne_arka||"kiraz");f.innerHTML=CS.map(_=>`
      <button class="sas-kart${_.id===m?" sel":""}" data-art="${_.id}">
        <span class="sas-tuval"><canvas data-ciz="${_.id}"></canvas></span>
        <b>${_.ad}</b>
        <small>${_.etiket}</small>
      </button>`).join(""),f.querySelectorAll("canvas[data-ciz]").forEach(_=>{$p(_,_.dataset.ciz||"kiraz")}),f.querySelectorAll(".sas-kart").forEach(_=>_.addEventListener("click",async()=>{le.config.sahne_arka=_.dataset.art,f.querySelectorAll(".sas-kart").forEach(p=>p.classList.toggle("sel",p===_)),await hn(),oe("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{le.config.fx_particles=m.target.value,fi(),await hn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{le.config.cursor_style=m.target.value,fi(),await hn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await se("cmd_pick_java");m&&(le.config.java_dir=m,await hn(),i.querySelector("#java-path").textContent=m,oe("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{le.config.java_dir=null,await hn(),i.querySelector("#java-path").textContent="otomatik"}),Tr(i,"keep-open","keep_launcher_open"),Tr(i,"hide-on-launch","hide_on_launch"),Tr(i,"show-news","show_news"),Tr(i,"stats-enabled","stats_enabled"),Tr(i,"use-java25","use_java25"),Tr(i,"discord-rpc","discord_rpc"),Tr(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{le.config.menu_animasyon_hiz=m.target.value,await hn()});const u=()=>Jp(i);i.querySelector("#anim-yenile")?.addEventListener("click",u),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await se("cmd_pick_emote");m?.length&&(oe(`${m.length} animasyon eklendi`),u())}catch(m){oe(`Animasyon eklenemedi: ${m}`,"err")}}),u();const h=i.querySelector("#dlc-range");h.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=h.value),h.addEventListener("change",async()=>{le.config.download_concurrency=parseInt(h.value),await hn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{oe("Güncelleme kontrol ediliyor…");try{const _=await(await _t(()=>import("./index-DSkUPpwd.js"),[])).check();if(_?.available){const{root:p,close:g}=Xt(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${_.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(_.body||"Değişiklik notu yok.").split(`
`).map(b=>`<div>${b}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);p.querySelector("#upd-later")?.addEventListener("click",()=>g()),p.querySelector("#upd-go")?.addEventListener("click",async()=>{const b=p.querySelector("#upd-go");b.disabled=!0,b.textContent="İndiriliyor…";try{await _.downloadAndInstall(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(T){b.disabled=!1,b.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${T}`,"err")}})}else oe("YIKIMLient güncel ✓")}catch(m){await lM(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Ko(Do).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${Do}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await se("cmd_get_app_dir");om(m).catch(()=>{})}),sM(i,e)}function aM(i){const e=Gi();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=r=>(Array.isArray(r)?r:[]).some(a=>String(a).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const ql=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function sM(i,e){const t=i.querySelector("#rozet-alani");if(t){if(aM(e)){Bf(i,e);return}t.innerHTML="",se("cmd_rozet_yetki").then(n=>{n?.izinli&&Bf(i,e)}).catch(()=>{})}}function Bf(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=Gi(),r=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let a=new Array(64).fill("");const s=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=s(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(s).slice(0,24),l=!1;const d=[];let f=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${ne("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
      <p class="set-sub">
        Bu logoyu yalnız sen çizebilirsin. Çizim <b>tüm kurulumlarına</b> yazılır ve oyun içinde
        adının başına basılır — hangi sunucu olursa olsun, TAB ve F5 dahil. İzin verdiğin
        oyuncular da kendi logolarını çizebilir.
      </p>

      <div class="rozet-duzen">
        <div class="rozet-sol">
          <div class="rozet-izgara" id="rozet-izgara"></div>
          <div class="rozet-palet">
            <button class="rozet-renk${l?"":" aktif"}" data-c="" title="Boya">
              ${ne("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${l?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${ne("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${ne("undo")} Geri</button>
            <button class="btn ghost sm" id="rozet-temizle">Temizle</button>
            <button class="btn ghost sm" id="rozet-stok">Standart Y</button>
          </div>
        </div>
        <div class="rozet-sag">
          <div class="rozet-onizleme">
            <span class="ro-ambiyans"></span>
            <span class="ro-etiket">Önizleme</span>
            <span class="ro-satir">
              <span class="ro-rozet" id="rozet-onizleme"></span>
              <b class="ro-isim">${Gi()?.name||"oyuncu"}</b>
            </span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap">
            <button class="btn primary sm" id="rozet-kaydet">Kaydet ve yayınla</button>
            <button class="btn danger sm" id="rozet-sil">Rozeti kaldır</button>
          </div>
          <div class="set-sub" style="margin:0; font-size:11px">
            Kaydedince dosya tüm kurulumlara yazılır ve oyun içinde en geç 30 saniyede görünür.
          </div>
        </div>
      </div>

      ${r?`<div class="rozet-izinler">
        <div class="rozet-izin-bas">
          <b>Kendi rozetini çizebilecekler</b>
          <span class="set-sub" style="margin:0; font-size:11px">Orijinal (Microsoft) hesap adlarını yaz. Liste sunucuya gönderilir; o oyuncu launcher'ını açtığında atölyeyi görür.</span>
        </div>
        <div class="rozet-izin-ekle">
          <input class="input" id="rozet-isim" placeholder="Oyuncu adı" maxlength="32" />
          <button class="btn ghost sm" id="rozet-ekle">${ne("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),m=t.querySelector("#rozet-cipler"),_=()=>{u.innerHTML=a.map((R,C)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${C}" style="--c:${R||"transparent"}"></button>`).join(""),h.innerHTML=a.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const C=l?"":o;a[R]!==C&&(a[R]=C,_())};u.addEventListener("click",R=>{const C=R.target.closest(".rozet-hucre");C&&(d.push([...a]),d.length>40&&d.shift(),p(Number(C.dataset.i)))});const g=t.querySelector("#rozet-renkler"),b=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),y=t.querySelector("#rozet-renk-sec"),M=()=>{const R=[...ql,...c];g.innerHTML=R.map((C,N)=>`<button class="rozet-renk${C.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${C}" style="--c:${C}" title="${C}" data-ozel="${N>=ql.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(C=>C.addEventListener("click",()=>{const N=C.dataset.c||"";l=!1,N&&E(N)}))},E=(R,C=!0)=>{o=R.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),b.value=o,T.style.setProperty("--c",o),y.value=o,M(),C&&(le.config.rozet_renk=o,hn())},A=R=>{if(!s(R))return oe("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const C=R.toLowerCase();return[...ql,...c].some(N=>N.toLowerCase()===C)||(c=[...c,C].slice(-24),le.config.rozet_renkler=[...c]),E(C),!0};y?.addEventListener("input",()=>{E(y.value,!1)}),y?.addEventListener("change",()=>A(y.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=b.value.trim(),C=R.startsWith("#")?R:`#${R}`;A(C)&&oe(`Renk paletine eklendi: ${C.toLowerCase()}`)}),b?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),b?.addEventListener("input",()=>{const R=b.value.trim(),C=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",s(C)?C:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(a=R,_())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...a]),a=new Array(64).fill(""),_()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...a]),a=oM(),_()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const C=await se("cmd_rozet_ciz",{pikseller:a});oe(C?.yuklendi?`Rozet kaydedildi — ${C.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${C.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${C?.hata||"ağ"})`)}catch(C){oe(`Rozet kaydedilemedi: ${C}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await se("cmd_rozet_sil"),a=new Array(64).fill(""),_(),oe("Rozet kaldırıldı"))});const v=()=>{m&&(m.innerHTML=f.length?f.map((R,C)=>`<span class="rozet-cip">${R}<button data-i="${C}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',m.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{f.splice(Number(R.dataset.i),1),w()})))},w=async()=>{le.config.atolye_izinli=[...f],await hn(),v();try{(await se("cmd_rozet_izinler",{isimler:f}))?.yuklendi||oe("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),C=R.value.trim();if(C){if(f.some(N=>N.toLowerCase()===C.toLowerCase())){oe("Bu isim zaten listede");return}f.push(C),R.value="",w(),oe(`${C} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),_(),M(),v(),se("cmd_rozet_oku").then(R=>{const C=R?.pikseller;Array.isArray(C)&&C.length===64&&(a=C,_())}).catch(()=>{})}function oM(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const Do="https://github.com/YKSAMI1/yikimlient/releases/latest";function Hf(i){return String(i??"").trim().replace(/^v/i,"")}async function lM(i){let e="",t="";try{const a=await se("cmd_check_updates"),s=Hf(a?.current),o=Hf(a?.latest);o&&o!==s&&(e=o)}catch{}try{const a=await se("cmd_upd_teshis"),s=Array.isArray(a?.platformlar)&&a.platformlar.length?a.platformlar.join(", "):"yok",o=[`HTTP ${a?.durum||"?"}`,`manifest ${a?.surum||"?"}`,`platform: ${s}`];a?.hata&&o.push(String(a.hata)),t=o.join(" · ")}catch{}const{root:n,close:r}=Xt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${ne("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>r()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Ko(Do).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${Do}`,"err"))})}async function Jp(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await se("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const r=document.createElement("div");r.className="anim-satir",r.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${ne("trash")}</button>`}`,r.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await se("cmd_delete_emote",{adi:n.adi}),oe("Animasyon kaldırıldı"),Jp(i))}),e.appendChild(r)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function wr(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Tr(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const r=n.currentTarget;r.classList.toggle("on"),le.config[t]=r.classList.contains("on"),await hn()})}async function hn(){await se("cmd_save_settings",{config:le.config}),await rn(),fi()}const fn=64,Ar=64,cM=40;class Io{w=fn;h=Ar;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(fn*Ar*4)}static bos(){return new Io}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new Io(this.veri)}piksel(e,t){if(e<0||t<0||e>=fn||t>=Ar)return[0,0,0,0];const n=(t*fn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,r=1){const a=Math.max(1,Math.min(8,Math.floor(r))),s=e-Math.floor((a-1)/2),o=t-Math.floor((a-1)/2);for(let c=0;c<a;c++)for(let l=0;l<a;l++){const d=s+l,f=o+c;if(d<0||f<0||d>=fn||f>=Ar)continue;const u=(f*fn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,r,a,s=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(r),f=Math.abs(l-o),u=-Math.abs(d-c),h=o<l?1:-1,m=c<d?1:-1;let _=f+u;for(;this.boya(o,c,a,s),!(o===l&&c===d);){const p=2*_;p>=u&&(_+=u,o+=h),p<=f&&(_+=f,c+=m)}}kova(e,t,n){if(e<0||t<0||e>=fn||t>=Ar)return;const r=this.piksel(e,t);if(Gf(r,n))return;const a=[t*fn+e],s=new Uint8Array(fn*Ar);for(;a.length;){const o=a.pop();if(s[o])continue;s[o]=1;const c=o%fn,l=Math.floor(o/fn);Gf(this.piksel(c,l),r)&&(this.boya(c,l,n),c>0&&a.push(o-1),c<fn-1&&a.push(o+1),l>0&&a.push(o-fn),l<Ar-1&&a.push(o+fn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>cM&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function Gf(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function dM(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}const Xd=TS,Qp=Bp*Xd,jp=ES*Xd,uM=.3,Xl=2;let fM=null;function Vf(i,e,t,n,r,a,s){a<=0||s<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,r,a,s)}function $f(i,e,t,n,r,a,s){if(a<=0||s<=0)return;const o=fM??=document.createElement("canvas"),c=Math.round(a),l=Math.round(s);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${uM})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,r))}function hM(i,e,t,n=Xd){const r=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const a=RS(t),s=wS*r;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Bp/2*r,(31.3+Xl)*r,6.2*r,1*r,0,0,Math.PI*2),i.fill(),i.restore();for(const o of a){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*r,l=(o.y+Xl)*r;$f(i,e,o.yan,c,l,s,o.on.h*r),o.ust&&o.ustYan&&$f(i,e,o.ustYan,c,l,s,o.on.h*r)}for(const o of a){const c=o.x*r,l=(o.y+Xl)*r;Vf(i,e,o.on,c,l,o.on.w*r,o.on.h*r),o.ust&&Vf(i,e,o.ust,c,l,o.ust.w*r,o.ust.h*r)}}const pM=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],sn=64;function mM(i,e,t,n){const r=e.pafta;let a=e.slim,s=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,f=!1,u=8,h=!1,m=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${ne("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Kl(s)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${ne("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${sn*u}" height="${sn*u}"></canvas>
          <canvas id="ske-izgara" width="${sn*u}" height="${sn*u}"></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(K=>`<button class="seg-btn ${K===u?"aktif":""}" data-zum="${K}">${K}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-edit-onizleme">
          <canvas id="ske-onizleme"></canvas>
        </div>
        <div class="sk-arac-cubugu">
          <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${ne("brush")}</button>
          <button class="sk-arac" data-arac="silgi" title="Silgi">${ne("trash")}</button>
          <button class="sk-arac" data-arac="kova" title="Kova">${ne("bucket")}</button>
          <button class="sk-arac" data-arac="damla" title="Damlacık">${ne("picker")}</button>
          <span class="sk-arac-ayrac"></span>
          <button class="sk-arac" id="ske-geri-al" title="Geri Al">${ne("undo")}</button>
          <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${ne("redo")}</button>
        </div>
        <div class="sk-renk-satir">
          <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
          <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" />
          <div class="sk-kalinlik">
            ${[1,2,4].map(K=>`<button class="seg-btn ${K===1?"aktif":""}" data-kalinlik="${K}">${K}</button>`).join("")}
          </div>
        </div>
        <div class="sk-palet" id="ske-palet">
          ${pM.map(K=>`<button class="sk-palet-renk" data-renk="${K}" style="--c:${K}" title="${K}"></button>`).join("")}
        </div>
        <div class="sk-bolgeler">
          <div class="sk-bolgeler-ust">
            <b>Bölgeler</b>
            <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
          </div>
          <div class="sk-bolge-liste" id="ske-bolgeler">
            ${["taban","ust"].map(K=>`
              <div class="sk-bolge-grup">
                <span>${K==="taban"?"Taban katman":"Üst katman"}</span>
                ${Cf.filter(P=>P.katman===K).map(P=>`<button class="sk-bolge" data-bolge="${P.id}">${P.ad}</button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${Kl(s)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${ne("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${ne("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),b=p.querySelector("#ske-izgara"),T=g.getContext("2d"),y=b.getContext("2d"),M=p.querySelector("#ske-onizleme"),E=document.createElement("canvas");E.width=sn,E.height=sn;const A=E.getContext("2d"),v=Ts();v.kur(M),v.tuvalDoku(E,a);function w(){const K=new ImageData(new Uint8ClampedArray(r.veri),sn,sn);A.putImageData(K,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(E,0,0,g.width,g.height),R(),v.dokuTazele()}function R(){y.clearRect(0,0,b.width,b.height);const K=b.width/sn;if(u>=8){y.strokeStyle="rgba(255,255,255,0.09)",y.lineWidth=1;for(let P=1;P<sn;P++)y.beginPath(),y.moveTo(P*K,0),y.lineTo(P*K,b.height),y.stroke(),y.beginPath(),y.moveTo(0,P*K),y.lineTo(b.width,P*K),y.stroke()}if(d){y.strokeStyle="rgba(255,150,60,0.35)",y.lineWidth=1,y.setLineDash([]);for(const P of d.dilimler)P.x===d.x&&P.y===d.y||y.strokeRect(P.x*K+.5,P.y*K+.5,P.w*K-1,P.h*K-1);if(y.strokeStyle="rgba(255,150,60,0.95)",y.lineWidth=2,y.setLineDash([6,4]),y.strokeRect(d.x*K+1,d.y*K+1,d.w*K-2,d.h*K-2),y.setLineDash([]),f){y.fillStyle="rgba(0,0,0,0.55)",y.beginPath(),y.rect(0,0,b.width,b.height);for(const P of d.dilimler)y.rect(P.x*K,P.y*K,P.w*K,P.h*K);y.fill("evenodd")}}}function C(K){const P=g.getBoundingClientRect(),G=Math.floor((K.clientX-P.left)/P.width*sn),de=Math.floor((K.clientY-P.top)/P.height*sn);return[Math.max(0,Math.min(sn-1,G)),Math.max(0,Math.min(sn-1,de))]}function N(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",K=>{if(K.button!==0)return;const[P,G]=C(K);if(h=!0,m=P,_=G,g.setPointerCapture(K.pointerId),o==="damla"){l=r.damla(P,G),L(l);return}r.katmanBasla(),o==="kova"?r.kova(P,G,N()):r.boya(P,G,N(),c),w()}),g.addEventListener("pointermove",K=>{if(!h)return;const[P,G]=C(K);P===m&&G===_||((o==="kalem"||o==="silgi")&&(r.cizgi(m,_,P,G,N(),c),w()),m=P,_=G)});const O=()=>{h=!1,m=-1,_=-1};g.addEventListener("pointerup",O),g.addEventListener("pointercancel",O);function L(K){l=K;const P=gM(K);p.querySelector("#ske-renk").value=P,p.querySelector("#ske-renk-hex").value=P,p.querySelectorAll(".sk-palet-renk").forEach(G=>{G.classList.toggle("aktif",G.dataset.renk?.toLowerCase()===P.toLowerCase())})}p.querySelector("#ske-renk").addEventListener("input",K=>{L(Yl(K.target.value))}),p.querySelector("#ske-renk-hex").addEventListener("change",K=>{const P=K.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(P)&&L(Yl(P))}),p.querySelector("#ske-palet")?.addEventListener("click",K=>{const P=K.target.closest(".sk-palet-renk");P?.dataset.renk&&L(Yl(P.dataset.renk))}),p.querySelectorAll(".sk-arac[data-arac]").forEach(K=>{K.addEventListener("click",()=>{o=K.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(K=>{K.addEventListener("click",()=>{c=Number(K.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(K=>{K.addEventListener("click",()=>{u=Number(K.dataset.zum),g.width=g.height=b.width=b.height=sn*u,p.querySelectorAll("[data-zum]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(K=>{K.addEventListener("click",()=>{a=K.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif"),v.tuvalDoku(E,a),ee(a?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})}),p.querySelector("#ske-bolgeler")?.addEventListener("click",K=>{const P=K.target.closest("[data-bolge]");P?.dataset.bolge&&(d=Cf.find(G=>G.id===P.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(G=>G.classList.remove("aktif")),P.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",K=>{f=K.target.checked,R()});const z=()=>{r.geriAl()&&w()},X=()=>{r.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",z),p.querySelector("#ske-ileri-al")?.addEventListener("click",X);const $=K=>{!document.body.contains(p)||!(K.ctrlKey||K.metaKey)||(K.key.toLowerCase()==="z"?(K.preventDefault(),K.shiftKey?X():z()):K.key.toLowerCase()==="s"&&(K.preventDefault(),Q(!0)))};window.addEventListener("keydown",$);function ee(K){const P=p.querySelector("#ske-uyari");P.textContent=K}function Y(){return new Promise(K=>{E.toBlob(async P=>{if(!P)return K([]);const G=new Uint8Array(await P.arrayBuffer());K(Array.from(G))},"image/png")})}async function Q(K){if(s=p.querySelector("#ske-ad").value.trim()||s,s||(s="Skin"),K&&!await _M("Skini giy",`<b>${Kl(s)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const G=await Y();if(!G.length){ee("PNG üretilemedi.");return}const de=p.querySelector(K?"#ske-giy":"#ske-kitaplik");de.disabled=!0,ee(K?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:G,slim:a,ad:s},K),ee(""),Fe()}catch(Pe){ee(String(Pe)),de.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void Q(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void Q(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const K=await Y(),P=p.querySelector("#ske-ad");try{const{invoke:G}=await _t(async()=>{const{invoke:Pe}=await Promise.resolve().then(()=>St);return{invoke:Pe}},void 0),de=await G("cmd_skin_disa_aktar",{ad:P.value.trim()||"skin",veri:K});oe(`Dışa aktarıldı: ${de}`)}catch(G){oe(String(G),"err")}});const re=document.createElement("button");re.className="btn ghost sk-dosya-btn",re.innerHTML=`${ne("image")} Dosya`;const Se=document.createElement("input");Se.type="file",Se.accept="image/png",Se.style.display="none",re.addEventListener("click",()=>Se.click()),Se.addEventListener("change",async()=>{const K=Se.files?.[0];K&&await qe(K),Se.value=""}),p.querySelector("#ske-geri").after(re),p.appendChild(Se);function Ae(){return new Promise(K=>{const{root:P,close:G}=Xt(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${ne("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${ne("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let de=!1;const Pe=ye=>{de||(de=!0,G(),K(ye))};P.querySelector("#se-wide")?.addEventListener("click",()=>Pe(!1)),P.querySelector("#se-slim")?.addEventListener("click",()=>Pe(!0)),P.querySelector("#se-iptal")?.addEventListener("click",()=>Pe(null))})}async function qe(K){try{const P=URL.createObjectURL(K),G=await new Promise((xt,$e)=>{const Xe=new Image;Xe.onload=()=>xt(Xe),Xe.onerror=()=>$e(new Error("görsel okunamadı")),Xe.src=P}),de=document.createElement("canvas");de.width=G.width,de.height=G.height;const Pe=de.getContext("2d");Pe.drawImage(G,0,0),URL.revokeObjectURL(P);const ye=Pe.getImageData(0,0,G.width,G.height);if(!(G.width===64&&(G.height===64||G.height===32))){oe(`Skin 64×64 veya 64×32 olmalı (bu dosya ${G.width}×${G.height})`,"err");return}const Be=await Ae();if(Be===null)return;a=Be,p.querySelectorAll("[data-slim]").forEach(xt=>{xt.classList.toggle("aktif",xt.dataset.slim===(a?"1":"0"))}),r.katmanBasla(),G.height===64?r.veri.set(ye.data):r.veri.set(dM(ye.data)),w(),v.tuvalDoku(E,a)}catch(P){oe(String(P),"err")}}const Fe=()=>{window.removeEventListener("keydown",$),p.remove();try{v.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Fe),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const K=p.querySelector(".sk-edit-kayit");K.scrollIntoView({behavior:"smooth",block:"center"}),K.querySelector("#ske-ad").focus()}),L(l),w()}function gM(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function Yl(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Kl(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function _M(i,e,t){return new Promise(n=>{const{root:r,close:a}=Xt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,a(),n(l))};r.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),r.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=r.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Ze=null,Vt=null,lr=null,ni=!1,Uo=null;const Gt=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Yd(i){qd(),Ze=null,Vt=null,lr=null,Uo=null;const e=Gi();if(!e||e.kind!=="microsoft"){vM(i);return}i.innerHTML=xM(e.name),yM(i,e.id),Wo(i,e.id,!0)}function vM(i){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${ne("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${ne("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{bn(()=>Yd(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>it("settings"))}function xM(i){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${ne("check")} Orijinal hesap</span>
          <button class="btn primary" id="sk-duzenle">${ne("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${Gt(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${ne("undo")} Yedeği Geri Yükle</button>
            </div>
          </div>
        </section>
        <aside class="skin-yan">
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Kayıtlı Skinler</h3><span id="sk-adet" class="skin-adet"></span></div>
            <div id="sk-kitaplik" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-ekle dropzone" id="sk-ekle" tabindex="0" role="button">
              ${ne("plus")}
              <b>Skin Ekle</b>
              <span>PNG sürükle ya da tıkla</span>
            </div>
            <input type="file" id="sk-dosya" accept="image/png" style="display:none" />
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Varsayılan</h3></div>
            <div id="sk-varsayilan" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Pelerinlerin</h3></div>
            <div id="sk-pelerin" class="skin-pelerin-serit"></div>
          </div>
        </aside>
      </div>
    </div>`}function yM(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void AM(i,e)),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Zl(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void MM(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n.addEventListener("change",()=>{const a=n.files?.[0];a&&qf(i,e,a),n.value=""}),t.addEventListener("dragover",a=>{a.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",a=>{a.preventDefault(),t.classList.remove("uzerinde");const s=a.dataTransfer?.files?.[0];s&&qf(i,e,s)});const r=(a,s)=>{const o=i.querySelector(a);o?.addEventListener("click",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||Wf(i,l)}),o?.addEventListener("dblclick",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||(Wf(i,l),s())})};r("#sk-kitaplik",()=>void Zl(i,e)),r("#sk-varsayilan",()=>void Zl(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",a=>{const s=a.target.closest(".skin-sil");if(!s)return;a.stopPropagation();const o=s.closest(".skin-kart");o?.dataset.id&&wM(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",a=>{const s=a.target.closest(".skin-pelerin");if(!s)return;const o=s.dataset.id||null;EM(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",a=>{a.target.closest("#sk-yenile")&&Wo(i,e,!1)})}async function Wo(i,e,t){try{Ze=await se("cmd_skin_hub",{id:e}),Vt=Vt??bM(),Hr(i),t?tm(i):Kd(i),qo(),Ze.cevrimdisi?oe("Çevrimdışısın — son bilinen skin gösteriliyor"):Ze.hata&&oe(Ze.hata,"err")}catch(n){oe(String(n),"err");const r=i.querySelector("#sk-kitaplik");r&&(r.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function bM(){if(!Ze)return null;if(Ze.aktif)return{tur:"kayit",id:`aktif:${Ze.aktif.dosya}`,dosya:Ze.aktif.dosya,slim:Ze.aktif.slim,ad:"Aktif skin"};const i=Ze.kitaplik[0];if(i)return em(i);const e=Ze.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function em(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function Hr(i){if(!Ze)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Ze.cevrimdisi?`<div class="skin-serit-cevrimdisi">${ne("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Ze.kitaplik.length?(t.innerHTML=Ze.kitaplik.map(l=>SM(l)).join(""),t.querySelectorAll(".skin-yuz").forEach(l=>{const d=l.dataset.dosya;d&&Xf(l,d,l.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const c=i.querySelector("#sk-adet");c&&(c.textContent=Ze.kitaplik.length?`${Ze.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Ze.varsayilanlar||[]).map(c=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${Gt(c.ad)}" data-dosya="${Gt(c.dosya)}"
           data-slim="${c.slim?1:0}" data-ad="${Gt(c.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Qp}" height="${jp}"
                  data-dosya="${Gt(c.dosya)}" data-slim="${c.slim?1:0}"></canvas>
          <span class="skin-model">${c.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${Gt(c.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(c=>{const l=c.dataset.dosya;l&&Xf(c,l,c.dataset.slim==="1")}));const r=i.querySelector("#sk-pelerin");if(r)if(!Ze.pelerinler.length)r.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';else{const c=Ze.pelerinler.find(l=>l.aktif);r.innerHTML=Ze.pelerinler.map(l=>`
        <button class="skin-pelerin ${l.aktif?"aktif":""}" data-id="${Gt(l.id)}" title="${Gt(l.ad)}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${Gt(l.dosya||"")}"></canvas>
          <span class="skin-pelerin-ad">${Gt(l.ad)}</span>
          ${l.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(c?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
               <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
             </button>`:""),r.querySelectorAll(".skin-pelerin-tuval").forEach(l=>{const d=l.dataset.dosya;d&&kM(l,d)})}const a=i.querySelector("#sk-aktif-ad");if(a){const c=Vt;a.textContent=Ze.cevrimdisi?"çevrimdışı önizleme":c?`${c.ad} · ${c.slim?"Slim":"Wide"}`:"skin seç"}const s=i.querySelector("#sk-giy");s&&(s.disabled=!Vt||ni,s.textContent=ni?"Bekle…":"Bu Skini Giy");const o=i.querySelector("#sk-yedek");o&&(o.style.display=Ze.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(c=>{const l=Vt&&c.dataset.id===Vt.id;c.classList.toggle("secili",!!l);const d=c.querySelector(".skin-rozet.secim");if(l&&!d){const f=document.createElement("span");f.className="skin-rozet secim",f.textContent=lr&&c.dataset.id===lr?"GİYİLİ":"SEÇİLİ",c.appendChild(f)}else!l&&d?d.remove():l&&d&&(d.textContent=lr&&c.dataset.id===lr?"GİYİLİ":"SEÇİLİ")})}function SM(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${Gt(i.id)}" data-dosya="${Gt(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${Gt(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Qp}" height="${jp}"
                data-dosya="${Gt(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${Gt(i.ad)}</div>
      <button class="skin-sil" title="Sil">${ne("trash")}</button>
    </div>`}function Wf(i,e){Vt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},Kd(),Hr(i)}function tm(i){const e=i.querySelector("#skin-canvas");if(!e)return;Ts().kur(e),Kd()}function Kd(i){const e=Ts();Vt&&e.skin({url:qt(Vt.dosya),slim:Vt.slim})}function qo(){if(!Ze)return;const e=Ze.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;e!==Uo&&(Uo=e,Ts().pelerin(e?{url:qt(e)}:null))}async function Zl(i,e){if(!Vt||ni)return;const t=Vt;if(await Zd("Skini giy",`<b>${Gt(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){ni=!0,Hr(i);try{let r;if(t.tur==="kayit"&&Ze?.kitaplik.some(a=>a.id===t.id))r=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const a=await nm(t.dosya);r=await se("cmd_skin_giy",{id:e,veri:a,slim:t.slim,ad:null})}Ze=r,lr=t.tur==="kayit"?t.id:null,oe("Skin giyildi — sunucularda görünecek.")}catch(r){oe(String(r),"err")}finally{ni=!1,Hr(i)}}}async function MM(i,e){if(!(ni||!await Zd("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){ni=!0;try{Ze=await se("cmd_skin_yedek_geri_yukle",{id:e}),lr=null,oe("Yedek skin geri yüklendi.")}catch(n){oe(String(n),"err")}finally{ni=!1,Hr(i),qo()}}}async function EM(i,e,t){if(!(ni||!Ze)&&!(t===null&&!Ze.pelerinler.some(n=>n.aktif))){ni=!0;try{Ze=await se("cmd_skin_pelerin",{id:e,capeId:t}),oe(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),qo()}catch(n){oe(String(n),"err")}finally{ni=!1,Hr(i)}}}async function wM(i,e,t,n){if(await Zd("Skini sil",`<b>${Gt(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await se("cmd_skin_sil",{kayitId:t}),Vt?.id===t&&(Vt=null),oe("Skin silindi."),await Wo(i,e,!1)}catch(a){oe(String(a),"err")}}async function qf(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),r=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",a=await TM(r);if(a===null)return;await se("cmd_skin_kaydet",{ad:r,veri:n,slim:a}),oe(`Skin kitaplığa eklendi · ${a?"Slim":"Wide"}`),await Wo(i,e,!1)}catch(n){oe(String(n),"err")}}function TM(i){return new Promise(e=>{const{root:t,close:n}=Xt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${Gt(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${ne("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${ne("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let r=!1;const a=c=>{c.key==="Escape"&&s(null)},s=c=>{r||(r=!0,window.removeEventListener("keydown",a),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>s(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>s(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>s(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&s(null)}),window.addEventListener("keydown",a)})}async function AM(i,e){const t=Vt?.dosya||Ze?.aktif?.dosya||Ze?.varsayilanlar[0]?.dosya;if(!t){oe("Önce bir skin seç.","err");return}let n;try{n=await RM(await nm(t))}catch(o){oe(String(o),"err");return}const r=new Date,a=`Skinim ${String(r.getDate()).padStart(2,"0")}.${String(r.getMonth()+1).padStart(2,"0")}`;let s=!1;mM(i,{pafta:n,slim:Vt?.slim??!1,ad:a},async(o,c)=>{const l=await se("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Ze=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),lr=l.id,oe("Skin giyildi — sunucularda görünecek.")):(Ze=await se("cmd_skin_hub",{id:e}),oe("Kitaplığa kaydedildi.")),Vt=em(l),s=!0},()=>{if(!s){Yd(i);return}Hr(i),qd(),Uo=null,tm(i),qo()})}async function RM(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),r=document.createElement("canvas");r.width=64,r.height=64;const a=r.getContext("2d");a.imageSmoothingEnabled=!1;const s=im(n),o=n.naturalHeight===32;return a.drawImage(s,0,0,64,o?32:64),new Io(new Uint8ClampedArray(a.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function nm(i){const e=await fetch(qt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function im(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const r=n.getContext("2d");return r?(r.imageSmoothingEnabled=!1,r.drawImage(i,0,0,n.width,n.height),n):i}function Xf(i,e,t){const n=new Image;n.onload=()=>{const r=i.getContext("2d");r&&hM(r,im(n),t)},n.src=qt(e)}function kM(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const r=Hp(t),a=Gp(r);n.drawImage(r,a.x,a.y,a.w,a.h,0,0,i.width,i.height)},t.src=qt(e)}function Zd(i,e,t){return new Promise(n=>{const{root:r,close:a}=Xt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,a(),n(l))};r.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),r.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=r.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}function CM(){tr.home=NS,tr.instances=GS,tr.explore=ZS,tr.news=tM,tr.settings=Za,tr.skins=Yd}let kr=null;const Ea=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function LM(){kr||(kr=document.createElement("div"),kr.className="drop-veil",kr.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(kr))}function Yf(){kr?.remove(),kr=null}async function PM(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await se("cmd_route_dropped",{path:i})}catch(n){oe(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Xt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${Ea(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let r=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{r=!0,n.close()}),await new Promise(s=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),s())},150)}),!r){oe("Kurulum iptal edildi");return}oe("Paket indiriliyor — süreç panelinden takip edebilirsin");const a=await se("cmd_import_pack_file",{path:i,name:null});await rn(),it("instances"),oe(`${a.name} kuruldu ✓`)}else if(t==="jar"){const n=await dd(`Mod eklenecek kurulum: <b>${Ea(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const r=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";oe(`Mod eklendi: ${e}${r}`,r?"err":"ok")}else if(t==="world"){const n=await dd(`Dünya yüklenecek kurulum: <b>${Ea(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),oe(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await se("cmd_import_emote_dosyasi",{path:i});oe(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await DM(i,e):oe(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){oe(`Kurulamadı: ${n}`,"err")}}async function DM(i,e){const t=Xt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${Ea(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(a=>a.addEventListener("click",()=>{n=a.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(a=>{const s=setInterval(()=>{document.body.contains(t.root)||(clearInterval(s),a())},150)}),!n)return;const r=await dd(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");r&&(await se("cmd_add_content_path",{instanceId:r.id,kind:n,path:i}),oe(`Eklendi: ${e}`))}function dd(i){return new Promise(e=>{const t=le.instances||[];if(!t.length){oe("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Xt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(a=>`
          <button class="btn ghost" data-id="${a.id}">
            <span style="font-size:18px">${a.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${Ea(String(a.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${Ea(String(a.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(a=>{a.addEventListener("click",()=>{const s=t.find(o=>o.id===a.dataset.id)||null;n.close(),e(s)})});const r=setInterval(()=>{document.body.contains(n.root)||(clearInterval(r),e(null))},150)})}function IM(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")LM();else if(n==="drop"){Yf();const r=t.paths||[];for(const a of r)await PM(a)}else Yf()})}catch{}}const vo=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let Jl=null;function UM(i,e){const t=window.innerWidth,n=window.innerHeight,r=e.offsetWidth,a=e.offsetHeight,s=c=>Math.max(12,Math.min(c,t-r-12)),o=c=>Math.max(14,Math.min(c,n-a-14));if(i){const c=i.right+16,l=i.left-16-r;let d;c+r<=t-12?d=c:l>=12?d=l:d=(t-r)/2;let f=i.top+i.height/2-a/2;f<14&&(f=i.bottom+16),e.style.left=`${s(d)}px`,e.style.top=`${o(f)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-r)/2)}px`,e.style.top=`${o((n-a)/2)}px`,e.style.transform="none"}function Kf(i,e){const t=vo[e],n=i.querySelector(".spot"),r=i.querySelector(".tc");it(t.page);const a=r.querySelector(".tc-step");a.innerHTML=vo.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),r.querySelector("h3").textContent=t.title,r.querySelector("p").textContent=t.text;const s=r.querySelector(".tc-next");s.textContent=e===vo.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",UM(o,r),Bi.fromTo(r,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function NM(){if(Jl||le.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),Jl=i;let e=0;const t=async()=>{i.remove(),Jl=null,document.removeEventListener("keydown",r),it("home");try{le.config={...le.config,guided_tour_done:!0},await se("cmd_save_settings",{config:le.config}),await rn()}catch{}},n=()=>{if(e+=1,e>=vo.length){t();return}Kf(i,e)},r=a=>{a.key==="Enter"||a.key==="ArrowRight"?(a.preventDefault(),n()):a.key==="Escape"&&(a.preventDefault(),t())};document.addEventListener("keydown",r),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),Kf(i,e)}let _a=null,xo=null;function ua(){xo!==null&&(clearInterval(xo),xo=null)}function Zf(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function ud(){try{le.config={...le.config,onboarding_done:!0},await se("cmd_save_settings",{config:le.config}),await rn()}catch{}}function Ql(i){ua(),_a?.remove(),_a=null,ud(),it("home")}function FM(){if(_a)return!0;if(le.config?.onboarding_done)return!1;if(!(le.accounts.length===0&&le.instances.length===0))return ud(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),_a=e;const t=e.querySelector(".ob-card"),n=f=>`<div class="ob-dots">${[0,1,2,3].map(u=>`<i class="${u<=f?"done":""}"></i>`).join("")}</div>`,r=f=>`
    <div class="ob-actions">
      ${f.back?'<button class="btn ghost sm" id="ob-back">← Geri</button>':""}
      <span class="spacer"></span>
      ${f.skip?`<button class="btn ghost sm" id="${f.skipId}">${f.skip}</button>`:""}
      ${f.next?`<button class="btn primary sm" id="${f.nextId}">${f.next}</button>`:""}
    </div>`;function a(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${n(0)}
      <div class="ob-step-label">1 / 4 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${r({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Ql()),t.querySelector("#ob-next")?.addEventListener("click",s)}function s(){ua(),t.innerHTML=`
      ${n(1)}
      <div class="ob-step-label">2 / 4 — Hesap</div>
      <h2 style="font-size:16px">Hesabını bağla</h2>
      <p class="ob-sub" style="margin-bottom:12px">Microsoft hesabıyla premium giriş ya da doğrudan çevrimdışı oyna.</p>
      <button class="btn primary lg" id="ob-ms" style="width:100%">Microsoft ile Giriş</button>
      <div id="ob-ms-durum" class="ob-durum" style="display:none"></div>
      <div class="or-divider"><span>veya çevrimdışı</span></div>
      <div class="ob-offline">
        <input class="input" id="ob-off-ad" placeholder="OyuncuAdı" maxlength="16" autocomplete="off" spellcheck="false" />
        <button class="btn" id="ob-off-go">Giriş</button>
      </div>
      <div class="ob-opt" id="ob-off-uyari"></div>
      <div class="ob-ok" id="ob-acc-ok" style="display:none"></div>
      ${r({back:!0,next:"İleri →",nextId:"ob-next",skip:"Sonra",skipId:"ob-skip"})}
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{ua(),a()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Ql());const f=t.querySelector("#ob-acc-ok"),u=t.querySelector("#ob-next"),h=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),g=t.querySelector("#ob-off-ad"),b=y=>{f.style.display="flex",f.textContent=`✓ Hesap hazır: ${y}`,u.disabled=!1,ua()};le.accounts.length?b(le.accounts[0]?.name??""):u.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,h.style.display="block",h.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const y=await se("cmd_ms_login_begin");await rn(),h.textContent="",h.style.display="none",b(y?.name??le.accounts[0]?.name??"")}catch(y){h.textContent=String(y),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const y=g.value.trim();if(y.length<3){m.textContent="İsim en az 3 karakter olmalı.",g.focus();return}m.textContent="",p.disabled=!0,p.textContent="…";try{await se("cmd_add_offline_account",{name:y}),await rn(),b(y),p.textContent="✓"}catch(M){m.textContent=String(M),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),g.addEventListener("keydown",y=>{y.key==="Enter"&&(y.preventDefault(),T())}),xo=setInterval(()=>{le.accounts.length&&b(le.accounts[0]?.name??"")},600),u.addEventListener("click",()=>{ua(),o()})}async function o(){let f=[];try{f=(await se("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${f.map(h=>`<option value="${Zf(h)}">${Zf(h)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${r({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",s);let u=null;t.querySelector("#ob-create")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{u=await se("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:le.config?.default_ram_mb||4096,java_preset_id:le.config?.default_java_preset||"balanced",standard_mods:!0}});const g=t.querySelector("#ob-inst-ok");g.style.display="flex",g.textContent=`✓ Kurulum hazır: ${u.name}`,m.textContent="✓ Oluşturuldu",await rn(),setTimeout(()=>c(),700)}catch(g){d(`Kurulum oluşturulamadı: ${g}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{l()})}function c(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>Her şey hazır! 🎉</h2>
      <p class="ob-sub">Hesabın bağlandı, ilk paketin kuruldu.</p>
      ${n(3)}
      <div class="ob-step-label">4 / 4 — Hazır</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.7">
        Ana Sayfa'dan <b>Oyna</b>'ya bas — saniyeler içinde oyundasın.<br />
        Modları Paketler → modlar sekmesinden yönet; dosyayı<br />ekrana sürükleyip bırak, otomatik kurulur.
      </p>
      ${r({next:"Oyna'ya Git →",nextId:"ob-done"})}
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Ql())}return a(),!0;function l(){ua(),_a?.remove(),_a=null,ud(),it("explore","kind:modpack")}function d(f){_t(()=>Promise.resolve().then(()=>St),void 0).then(u=>u.toast(f,"err"))}}const Gr=Math.PI*2;function No(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function OM(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Xo(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Gr),i.fill()}function Jf(i,e){const t=e?OM(No(),.88):No(),n=r=>({x:Math.random()*r[0],y:r[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Gr});return{base:e?24:30,spawn:n,step:(r,a,s)=>{r.x+=(r.vx+Math.sin(r.seed+r.life*2.1)*9)*a*(1+i*a),r.y+=r.vy*a,r.a=Math.max(0,1-r.life/r.max*1.05),(r.y<-12||r.a<=0)&&Object.assign(r,n(s))},draw:Xo}}function jl(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Gr});return{base:26,spawn:e,step:(t,n,r)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=r[0]+8),t.x>r[0]+8&&(t.x=-8),t.y<-8&&(t.y=r[1]+8),t.y>r[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(r))},draw:Xo}}function zM(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Gr});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Xo}}function BM(){const i=No(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Gr});return{base:16,spawn:e,step:(t,n,r)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Gr),t.stroke()}}}function HM(){const i=No(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,r)=>{t.y+=t.vy*n,t.y>r[1]+40&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function eo(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Gr}),step:(t,n,r)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Xo}}function GM(i){switch(i){case"pano":return Jf(.5,!1);case"sahne":return eo("rgba(255,171,77,0.75)");case"sokum":return Jf(.9,!0);case"afis":return jl("rgba(63,50,38,0.5)");case"standart":return eo("rgba(147,168,255,0.5)");case"sira":return eo("rgba(163,230,53,0.85)");case"rihtim":return BM();case"oda":return jl("rgba(224,48,30,0.6)");case"kumas":return jl("rgba(138,122,92,0.5)");case"perde":return eo("rgba(212,175,55,0.8)");case"buz":return zM();case"skala":return HM();default:return null}}let kn=null,ui=null,ir=null,fa=[],ln=0,is=0,rm=1,am=33,Yo=!1;function Jd(){return Math.min(window.devicePixelRatio||1,1.5)}function ec(){ln&&cancelAnimationFrame(ln),ln=0,ir=null,fa=[],kn&&(kn.remove(),kn=null,ui=null)}function Fo(i){if(ln=0,!ui||!kn||!ir||Yo||document.hidden)return;if(i-is<am){ln=requestAnimationFrame(Fo);return}const e=Math.min((i-is)/1e3,.06);is=i,ln=requestAnimationFrame(Fo);const t=Jd();ui.setTransform(t,0,0,t,0,0),ui.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],r=Math.max(1,Math.round(ir.base*rm));for(;fa.length<r;){const a=ir.spawn(n);a.life=Math.random()*a.max,fa.push(a)}for(;fa.length>r;)fa.pop();for(const a of fa)a.life+=e,ir.step(a,e,n),ui.globalAlpha=a.a,ir.draw(ui,a);ui.globalAlpha=1}function sm(){ir&&ui&&!ln&&!document.hidden&&!Yo&&(is=performance.now(),ln=requestAnimationFrame(Fo))}document.addEventListener("visibilitychange",()=>{document.hidden?(ln&&cancelAnimationFrame(ln),ln=0):sm()});window.addEventListener("blur",()=>{Yo=!0,ln&&cancelAnimationFrame(ln),ln=0});window.addEventListener("focus",()=>{Yo=!1,sm()});window.addEventListener("resize",()=>{if(!kn||!ui)return;const i=Jd();kn.width=Math.round(innerWidth*i),kn.height=Math.round(innerHeight*i)});function VM(){const i=String(le.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){ec();return}const n=GM(e);if(!n){ec();return}rm={low:.45,mid:.9,high:1.6}[i]??1,am=1e3/({low:25,mid:30,high:40}[i]??30),ec(),ir=n;const s=Jd();kn=document.createElement("canvas"),kn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",kn.width=Math.round(innerWidth*s),kn.height=Math.round(innerHeight*s),document.body.appendChild(kn),ui=kn.getContext("2d"),is=performance.now(),ln=requestAnimationFrame(Fo)}function $M(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function WM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function qM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function XM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const YM={yikim:{build:WM,spot:"3 2"},hedef:{build:qM,spot:"12 12"},nokta:{build:XM,spot:"8 8"}};function KM(){const i=String(le.config?.cursor_style||"standart"),e=document.documentElement,t=YM[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build($M());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const et=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,ZM=`<svg ${et}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,JM=`<svg ${et}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,QM=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,jM=`<svg ${et}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,e1=`<svg ${et}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,t1=`<svg ${et}><path d="M12 5v14M5 12h14"/></svg>`,n1=`<svg ${et}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,i1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',r1=`<svg ${et}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,a1=`<svg ${et}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,s1=`<svg ${et}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,o1=`<svg ${et}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,l1=`<svg ${et}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,c1=`<svg ${et}><path d="m4.5 12.5 5 5 10-11"/></svg>`,d1=`<svg ${et}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,u1=`<svg ${et}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,f1=`<svg ${et}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,h1=`<svg ${et}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,p1=`<svg ${et}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,m1=`<svg ${et}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,g1=`<svg ${et}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,_1=`<svg ${et}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,v1=`<svg ${et}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,x1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,y1=`<svg ${et}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,b1=`<svg ${et}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,S1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,M1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,E1=`<svg ${et}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,w1=`<svg ${et}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,T1=`<svg ${et}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,A1=`<svg ${et}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,R1=`<svg ${et}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,k1=`<svg ${et}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,C1=`<svg ${et}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,L1=`<svg ${et}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,Oo={home:ZM,grid:JM,compass:QM,news:jM,gear:e1,plus:t1,search:n1,play:i1,image:r1,folder:a1,trash:s1,copy:o1,back:l1,check:c1,user:d1,puzzle:u1,box:f1,cpu:h1,args:p1,term:m1,chart:g1,dl:_1,mug:v1,globe:x1,sparkle:y1,file:b1,info:S1,clock:M1,stop:E1,shirt:w1,brush:T1,bucket:A1,picker:R1,undo:k1,redo:C1,lock:L1};function ne(i,e=""){const t=Oo[i]||Oo.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const to='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',no=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,$a={min:`<svg ${to}>${no('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${to}>${no('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${to}>${no('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${to}>${no('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},wa=window.__TAURI__,P1=wa.core,D1=wa.event,se=(i,e={})=>P1.invoke(i,e),qt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),ii=(i,e)=>D1.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=Oo[t]||Oo.info,i.replaceWith(n)};const Ko=i=>se("plugin:opener|open_url",{url:i}),om=i=>se("plugin:opener|open_path",{path:i}),le={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function rn(i=!1){const e=await se("cmd_get_state");le.config=e.config,le.accounts=e.accounts,le.instances=e.instances,le.featured_versions=e.featured_versions,le.curseforge=e.curseforge,le.sys=e.sys,fi(),Qo(),i&&it(Qd)}const Qf=Qo;function fi(){if(!le.config)return;const i=le.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",r=(le.config.tema_ozel||{})[n]||{},a=n==="sahne"?le.config.custom_accent:"",s=String(r.accent||a||"").trim();e.setAttribute("data-world",n),s&&/^#[0-9a-fA-F]{3,8}$/.test(s)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",s)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(r.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),VM(),KM()}const I1=fi;function Gi(){return le.accounts.find(i=>i.id===le.config?.last_selected_account)||le.accounts[0]||null}function Zo(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function lm(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Jo(i){const e=lm(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function U1(){const i=document.getElementById("pill-ram");if(!i||!le.sys)return;const t=le.instances[0]?.ram_mb||le.config?.default_ram_mb||4096,n=le.sys.total_ram_mb||16384,r=Math.min(100,Math.round(t/n*100)),a=i.querySelector("#ram-pill-val"),s=`${(t/1024).toFixed(1)} GB`;a?zg(a,s):i.innerHTML=`RAM <b id="ram-pill-val">${s}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${r/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${r/100})`)}const hi=i=>document.querySelector(i);function cn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function As(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function Ta(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function N1(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function rs(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const We={activeId:null};function oe(i,e="ok"){const t=cn(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Wa=[];function Xt(i){const e=cn(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Wa.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",r);const a=Wa.indexOf(e);a>=0&&Wa.splice(a,1),e.remove()},r=a=>{a.key==="Escape"&&Wa[Wa.length-1]===e&&(a.preventDefault(),a.stopPropagation(),n())};return window.addEventListener("keydown",r),e.addEventListener("click",a=>{a.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const tr={},Di={};let jf="home",Qd="home";function it(i,e){const t=hi("#content");t&&(Qd=i,jf=i,Di.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===jf)}),Bg(t,()=>{t.innerHTML="";const n=tr[i];n&&n(t),Jh(t)}))}const F1=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"settings",icon:"gear",label:"Ayarlar"}];function cm(){const i=hi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${$a.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${$a.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${$a.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${F1.map(r=>`
          <button class="rail-item" data-page="${r.page}">
            ${ne(r.icon,"ri-icon")}
            <span class="ri-label">${r.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=wa.window.getCurrentWindow();hi("#tb-min")?.addEventListener("click",()=>t.minimize()),hi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(We.activeId){t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};hi("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(r=>{We.activeId&&(r?.preventDefault?.(),t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const r=hi("#tb-max"),a=o=>{r&&(r.innerHTML=o?$a.restore:$a.max,r.title=o?"Geri Yükle":"Ekranı Kapla",r.setAttribute("aria-label",r.title))},s=()=>{t.isMaximized().then(a).catch(()=>{})};typeof t.onResized=="function"?t.onResized(s):wa.event?.listen&&wa.event.listen("tauri://resize",s),s()}catch{}document.querySelectorAll(".rail-item").forEach(r=>{r.addEventListener("click",()=>it(r.dataset.page))}),Qo(),hi("#rail-account")?.addEventListener("click",()=>{le.accounts.length?it("settings"):bn()}),Cd(Array.from(document.querySelectorAll(".rail-item")))}function Qo(){const i=hi("#rail-account");if(!i)return;const e=Gi();if(!e){i.innerHTML=`<span class="ra-head ph">${ne("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Zo(e)}" draggable="false" ${Jo(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let io=null;function bn(i){if(io){io.root.querySelector("#off-name")?.focus();return}const e=Xt(`
    <h2>Hesap Girişi</h2>
    <div class="sub">Microsoft hesabınla gir ya da çevrimdışı oyna.</div>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div>
        <label style="font-size:12px; color:var(--text-dim)">Offline Kullanıcı Adı</label>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <input class="input" id="off-name" placeholder="OyuncuAdı" maxlength="16" />
          <button class="btn" id="off-go">Giriş</button>
        </div>
      </div>
      <div class="or-divider"><span>veya</span></div>
      <button class="btn primary lg" id="ms-go">${ne("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const r=()=>{n&&(n=!1,io=null,e.close())};io={root:t,close:r},t.querySelector("#off-go")?.addEventListener("click",async()=>{const a=t.querySelector("#off-name").value.trim();if(a.length<3)return oe("İsim en az 3 karakter olmalı","err");try{await se("cmd_add_offline_account",{name:a}),await rn(),Qf(),oe(`Hoş geldin, ${a}!`),r(),i?.()}catch(s){oe(String(s),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const a=t.querySelector("#ms-status"),s=t.querySelector("#ms-go");s.disabled=!0,a.style.display="block",a.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await se("cmd_ms_login_begin");await rn(),Qf(),oe(`Hoş geldin, ${o.name}!`),r(),i?.()}catch(o){a.textContent=String(o),s.disabled=!1}})}let ro=0;async function O1(i){if(!le.accounts.length){bn();return}if(We.activeId){oe("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++ro;We.activeId=i;const{root:t,close:n}=Xt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),r=t.querySelector("#lp-bar"),a=t.querySelector("#lp-stage"),s=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await ii("launch-progress",h=>{if(e!==ro)return;const m=h.payload;r.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,a.textContent=z1(m.stage),s.textContent=m.detail||""}),l=await ii("game-log",h=>{if(e!==ro)return;o.style.display="block";const m=document.createElement("div");m.textContent=h.payload,o.appendChild(m),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await ii("game-exit",h=>{if(e!==ro)return;We.activeId=null;const m=h.payload?.exit_code??h.payload?.code??-1;m===0?(a.textContent="Oyun kapatıldı",setTimeout(n,1200)):(a.textContent=`Oyun hata ile kapandı (kod ${m})`,s.textContent="Canlı logdan detayları görebilirsin.")}),f=()=>{c(),l(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(f(),u.disconnect())});u.observe(document.body,{childList:!0});try{await se("cmd_launch_instance",{instanceId:i}),a.textContent="Oyun çalışıyor",s.textContent="İyi oyunlar!",r.style.transform="scaleX(1)",setTimeout(()=>{f(),n()},1500),await rn(!0)}catch(h){We.activeId=null,a.textContent="Başlatılamadı",s.textContent=String(h),s.style.color="var(--danger)"}}function z1(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}ii("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});ii("game-started",i=>{We.activeId=i.payload,rn(!0)});ii("game-exit",async()=>{window.__yikimRestart||(We.activeId=null,rn(!0))});ii("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&oe(`Kuruldu: ${e.filename}`),e.phase==="error"&&oe(`Hata: ${e.filename}`,"err")});let wn=null,eh;ii("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!wn||!document.body.contains(wn))&&(wn=document.createElement("div"),wn.className="sm-panel",wn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(wn)),clearTimeout(eh);const t=wn.querySelector("#sm-count"),n=wn.querySelector("#sm-fill"),r=wn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const a=document.createElement("div");for(a.className="sm-row done",a.textContent=`✓ ${e.current}`,r.appendChild(a);r.children.length>8;)r.firstElementChild?.remove();r.scrollTop=r.scrollHeight}e.done>=e.total&&(wn.querySelector(".sm-title").textContent="Standart modlar hazır",eh=setTimeout(()=>{wn?.remove(),wn=null},4e3))});ii("mod-install-progress",i=>{i.payload.phase});async function dm(){try{await rn(),CM(),cm(),it("home"),IM(),FM()||NM(),B1()}catch(i){H1(i)}}async function B1(){try{const e=await(await _t(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=Xt(`
      <h2>Güncelleme Var</h2>
      <div class="sub">YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(e.body||"Değişiklik notu yok.").split(`
`).map(r=>`<div>${r}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        <button class="btn ghost" id="upd-later">Sonra</button>
        <button class="btn primary" id="upd-go">İndir ve Kur</button>
      </div>
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const r=t.querySelector("#upd-go");r.disabled=!0,r.textContent="İndiriliyor…";try{let a=0,s=0;await e.download(o=>{switch(o.event){case"Started":s=o.data.contentLength??0;break;case"Progress":a+=o.data.chunkLength;break;case"Finished":r.textContent="Kuruluyor…";break}s>0&&(r.textContent=`İndiriliyor… %${Math.round(a/s*100)}`)}),await e.install(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{wa.process.exit(0)}catch{window.location.reload()}},900)}catch(a){r.disabled=!1,r.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${a}`,"err")}})}catch{}}function H1(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}dm();const St=Object.freeze(Object.defineProperty({__proto__:null,$:hi,applyTheme:I1,applyWorld:fi,boot:dm,currentAccount:Gi,get currentPage(){return Qd},el:cn,enterStage:Jh,fileSrc:qt,fmtBytes:As,fmtDuration:Ta,fmtSpeed:N1,headAttrs:Jo,headFallbackUrl:lm,headUrl:Zo,icon:ne,invoke:se,lamp:rs,launch:We,launchInstance:O1,listen:ii,nav:Di,navigate:it,openExternal:Ko,openLoginModal:bn,openModal:Xt,openPath:om,pages:tr,refreshState:rn,renderAccountPill:Qo,setupShell:cm,state:le,switchPress:Ld,toast:oe,updateRamPill:U1},Symbol.toStringTag,{value:"Module"}));
