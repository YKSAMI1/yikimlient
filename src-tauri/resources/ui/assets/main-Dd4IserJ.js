import"./theme-IECZJS4v.js";const rm="modulepreload",sm=function(i){return"/"+i},eu={},mt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(t.map(l=>{if(l=sm(l),l in eu)return;eu[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":rm,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function wi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Gh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},id,Gt,xt,zn=1e8,ut=1/zn,ql=Math.PI*2,am=ql/4,om=0,$h=Math.sqrt,lm=Math.cos,cm=Math.sin,Vt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},Ii=function(e){return typeof e=="number"},rd=function(e){return typeof e>"u"},pi=function(e){return typeof e=="object"},fn=function(e){return e!==!1},sd=function(){return typeof window<"u"},Ma=function(e){return At(e)||Vt(e)},Wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,dm=/random\([^)]+\)/g,um=/,\s*/g,tu=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xh=/[+-]=-?[.\d]+/,hm=/[^,'"\[\]\s]+/gi,fm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,ri,Xl,ad,Pn={},fo={},Yh,Kh=function(e){return(fo=ys(e,Pn))&&xn},od=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},js=function(e,t){return!t&&console.warn(e)},Zh=function(e,t){return e&&(Pn[e]=t)&&fo&&(fo[e]=t)||Pn},ea=function(){return 0},pm={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},mm={suppressEvents:!0},ld={},ir=[],Yl={},Jh,Mn={},Ko={},nu=30,ja=[],cd="",dd=function(e){var t=e[0],n,r;if(pi(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ja.length;r--&&!ja[r].targetTest(t););n=ja[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new yf(e[r],n)))||e.splice(r,1);return e},Tr=function(e){return e._gsap||dd(Hn(e))[0]._gsap},Qh=function(e,t,n){return(n=e[t])&&At(n)?e[t]():rd(n)&&e.getAttribute&&e.getAttribute(t)||n},pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},gm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},po=function(){var e=ir.length,t=ir.slice(0),n,r;for(Yl={},ir.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ud=function(e){return!!(e._initted||e._startAt||e.add)},jh=function(e,t,n,r){ir.length&&!Gt&&po(),e.render(t,n,!!(Gt&&t<0&&ud(e))),ir.length&&!Gt&&po()},ef=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hm).length<2?t:Vt(e)?e.trim():e},tf=function(e){return e},Dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_m=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ys=function(e,t){for(var n in t)e[n]=t[n];return e},iu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},mo=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},$s=function(e){var t=e.parent||Mt,n=e.keyframes?_m(jt(e.keyframes)):Dn;if(fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},nf=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Po=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kl=function(e,t,n,r){return e._startAt&&(Gt?e._startAt.revert(Qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ym=function i(e){return!e||e._ts&&i(e.parent)},ru=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Do=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Do(e),n._dirty||Ar(n,e)),e},rf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=go(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),Ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},li=function(e,t,n,r){return t.parent&&sr(t),t._start=bt((Ii(n)?n:n||e!==Mt?Fn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nf(e,t,"_first","_last",e._sort?"_start":0),Zl(t)||(e._recent=t),r||rf(e,t),e._ts<0&&Io(e,e._tTime),e},sf=function(e,t){return(Pn.ScrollTrigger||od("scrollTrigger",t))&&Pn.ScrollTrigger.create(t,e)},af=function(e,t,n,r,s){if(fd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jh!==An.frame)return ir.push(e),e._lazy=[s,r],1},Sm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Zl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bm=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Sm(e)&&!(!e._initted&&Zl(e))||(e._ts<0||e._dp._ts<0)&&!Zl(e))?0:1,o=e._rDelay,l=0,c,d,h;if(o&&e._repeat&&(l=fa(0,e._tDur,t),d=Ss(l,o),e._yoyo&&d&1&&(a=1-a),d!==Ss(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Gt||r||e._zTime===ut||!t&&e._zTime){if(!e._initted&&af(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Kl(e,t,n,!0),e._onUpdate&&!n&&Cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&sr(e,1),!n&&!Gt&&(Cn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Mm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},bs=function(e,t,n,r){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Io(e,e._tTime=e._tDur*o),e.parent&&Do(e),n||Ar(e.parent,e),e},su=function(e){return e instanceof hn?Ar(e):bs(e,e._dur)},Em={_start:0,endTime:ea,totalDuration:ea},Fn=function i(e,t,n){var r=e.labels,s=e._recent||Em,a=e.duration()>=zn?s.endTime(!1):e._dur,o,l,c;return Vt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ws=function(e,t,n){var r=Ii(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=fn(l.vars.inherit)&&l.parent;a.immediateRender=fn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Dt(t[0],a,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},Jt=function(e,t){return!Vt(e)||!(t=fm.exec(e))?"":t[1]},wm=function(e,t,n){return cr(n,function(r){return fa(e,t,r)})},Jl=[].slice,of=function(e,t){return e&&pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pi(e[0]))&&!e.nodeType&&e!==ri},Tm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Vt(r)&&!t||of(r,1)?(s=n).push.apply(s,Hn(r)):n.push(r)})||n},Hn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Vt(e)&&!n&&(Xl||!Ms())?Jl.call((t||ad).querySelectorAll(e),0):jt(e)?Tm(e,n):of(e)?Jl.call(e,0):e?[e]:[]},Ql=function(e){return e=Hn(e)[0]||js("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?js("Invalid scope")||ad.createElement("div"):e)}},lf=function(e){return e.sort(function(){return .5-Math.random()})},cf=function(e){if(At(e))return e;var t=pi(e)?e:{each:e},n=Rr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,d=r,h=r;return Vt(r)?d=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],h=r[1]),function(u,f,g){var _=(g||t).length,p=a[_],m,S,T,y,M,E,A,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,zn])[1],!w){for(A=-zn;A<(A=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=l?Math.min(w,_)*d-.5:r%w,S=w===zn?0:l?_*h/w-.5:r/w|0,A=0,v=zn,E=0;E<_;E++)T=E%w-m,y=S-(E/w|0),p[E]=M=c?Math.abs(c==="y"?y:T):$h(T*T+y*y),M>A&&(A=M),M<v&&(v=M);r==="random"&&lf(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Jt(t.amount||t.each)||0,n=n&&_<0?Bm(n):n}return _=(p[u]-p.min)/p.max||0,bt(p.b+(n?n(_):_)*p.v)+p.u}},jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ii(n)?0:Jt(n))}},df=function(e,t){var n=jt(e),r,s;return!n&&pi(e)&&(r=n=e.radius||zn,e.values?(e=Hn(e.values),(s=!Ii(e[0]))&&(r*=r)):e=jl(e.increment)),cr(t,n?At(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=zn,d=0,h=e.length,u,f;h--;)s?(u=e[h].x-o,f=e[h].y-l,u=u*u+f*f):u=Math.abs(e[h]-o),u<c&&(c=u,d=h);return d=!r||c<=r?e[d]:a,s||d===a||Ii(a)?d:d+Jt(a)}:jl(e))},uf=function(e,t,n,r){return cr(jt(e)?!t:n===!0?!!(n=0):!r,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Am=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Rm=function(e,t){return function(n){return e(parseFloat(n))+(t||Jt(n))}},Cm=function(e,t,n){return ff(e,t,0,1,n)},hf=function(e,t,n){return cr(n,function(r){return e[~~t(r)]})},km=function i(e,t,n){var r=t-e;return jt(e)?hf(e,i(0,e.length),t):cr(n,function(s){return(r+(s-e)%r)%r+e})},Lm=function i(e,t,n){var r=t-e,s=r*2;return jt(e)?hf(e,i(0,e.length-1),t):cr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ta=function(e){return e.replace(dm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(um);return uf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},ff=function(e,t,n,r,s){var a=t-e,o=r-n;return cr(s,function(l){return n+((l-e)/a*o||0)})},Pm=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Vt(e),o={},l,c,d,h,u;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(d=[],h=e.length,u=h-2,c=1;c<h;c++)d.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(u,~~g);return d[_](g-_)},n=t}else r||(e=ys(jt(e)?[]:{},e));if(!d){for(l in t)hd.call(o,e,l,"get",t[l]);s=function(g){return gd(g,o)||(a?e.p:e)}}}return cr(n,s)},au=function(e,t,n){var r=e.labels,s=zn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Cn=function(e,t,n){var r=e.vars,s=r[t],a=xt,o=e._ctx,l,c,d;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ir.length&&po(),o&&(xt=o),d=l?s.apply(c,l):s.call(c),xt=a,d},zs=function(e){return sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Cn(e,"onInterrupt"),e},os,pf=[],mf=function(e){if(e)if(e=!e.name&&e.default||e,sd()||e.headless){var t=e.name,n=At(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ea,render:gd,add:hd,kill:Km,modifier:Ym,rawVars:0},a={targetTest:0,get:0,getSetter:md,aliases:{},register:0};if(Ms(),e!==r){if(Mn[t])return;Dn(r,Dn(mo(e,s),a)),ys(r.prototype,ys(s,mo(e,a))),Mn[r.prop=t]=r,e.targetTest&&(ja.push(r),ld[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zh(t,r),e.register&&e.register(xn,r,mn)}else pf.push(e)},dt=255,Hs={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Zo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},gf=function(e,t,n){var r=e?Ii(e)?[e>>16,e>>8&dt,e&dt]:0:Hs.black,s,a,o,l,c,d,h,u,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])r=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&dt,r&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(tu),!t)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(c+1):d+c-d*c,s=d*2-a,r.length>3&&(r[3]*=1),r[0]=Zo(l+1/3,s,a),r[1]=Zo(l,s,a),r[2]=Zo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(qh),n&&r.length<4&&(r[3]=1),r}else r=e.match(tu)||Hs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/dt,a=r[1]/dt,o=r[2]/dt,h=Math.max(s,a,o),u=Math.min(s,a,o),d=(h+u)/2,h===u?l=c=0:(f=h-u,c=d>.5?f/(2-h-u):f/(h+u),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},_f=function(e){var t=[],n=[],r=-1;return e.split(rr).forEach(function(s){var a=s.match(as)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},ou=function(e,t,n){var r="",s=(e+r).match(rr),a=t?"hsla(":"rgba(",o=0,l,c,d,h;if(!s)return e;if(s=s.map(function(u){return(u=gf(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=_f(e),l=n.c,l.join(r)!==d.c.join(r)))for(c=e.replace(rr,"1").split(as),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!c)for(c=e.split(rr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},rr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Dm=/hsl[a]?\(/,vf=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=Dm.test(t),e[1]=ou(e[1],n),e[0]=ou(e[0],n,_f(e[1])),!0},na,An=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,d,h,u,f,g=function _(p){var m=i()-r,S=p===!0,T,y,M,E;if((m>e||m<0)&&(n+=m-t),r+=m,M=r-n,T=M-a,(T>0||S)&&(E=++h.frame,u=M-h.time*1e3,h.time=M=M/1e3,a+=T+(T>=s?4:s-T),y=1),S||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](M,u,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Yh&&(!Xl&&sd()&&(ri=Xl=window,ad=ri.document||{},Pn.gsap=xn,(ri.gsapVersions||(ri.gsapVersions=[])).push(xn.version),Kh(fo||ri.GreenSockGlobals||!ri.gsap&&ri||{}),pf.forEach(mf)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=d||function(p){return setTimeout(p,a-h.time*1e3+1|0)},na=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,S){var T=m?function(y,M,E,A){p(y,M,E,A),h.remove(T)}:p;return h.remove(p),o[S?"unshift":"push"](T),Ms(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},h}(),Ms=function(){return!na&&An.wake()},Je={},Im=/^[\d.\-M][\d.\-,\s]/,Um=/["']/g,Nm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(Um,"").trim():+c,r=l.substr(o+1).trim();return t},Fm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Om=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nm(t[1])]:Fm(e).split(",").map(ef)):Je._CE&&Im.test(e)?Je._CE("",e):n},Bm=function(e){return function(t){return 1-e(1-t)}},Rr=function(e,t){return e&&(At(e)?e:Je[e]||Om(e))||t},Ur=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return pn(e,function(o){Je[o]=Pn[o]=s,Je[a=o.toLowerCase()]=n;for(var l in s)Je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[o+"."+l]=s[l]}),s},xf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jo=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ql*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*cm((d-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:xf(o);return s=ql/s,l.config=function(c,d){return i(e,c,d)},l},Qo=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:xf(n);return r.config=function(s){return i(e,s)},r};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ur(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;Ur("Elastic",Jo("in"),Jo("out"),Jo());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ur("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ur("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ur("Circ",function(i){return-($h(1-i*i)-1)});Ur("Sine",function(i){return i===1?1:-lm(i*am)+1});Ur("Back",Qo("in"),Qo("out"),Qo());Je.SteppedEase=Je.steps=Pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-ut;return function(o){return((r*fa(0,a,o)|0)+s)*n}}};Qs.ease=Je["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return cd+=i+","+i+"Params,"});var yf=function(e,t){this.id=om++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qh,this.set=t?t.getSetter:md},ia=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),na||An.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Io(this,n),!s._dp||s.parent||rf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ru(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ru(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ss(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Do(this),xm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=bt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&li(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mm);var r=Gt;return Gt=n,ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,su(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,su(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Fn(this,n),fn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,fn(r)),this._dur||(this._zTime=-ut),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=At(n)?n:tf,l=function(){var d=r.then;r.then=null,s&&s(),At(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),a(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){zs(this)},i}();Dn(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var hn=function(i){Gh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=fn(n.sortChildren),Mt&&li(n.parent||Mt,wi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sf(wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ws(0,arguments,this),this},t.from=function(r,s,a){return Ws(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ws(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,$s(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(r,s,Fn(this,a),1),this},t.call=function(r,s,a){return li(this,Dt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,d){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new Dt(r,a,Fn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,d){return a.runBackwards=1,$s(a).immediateRender=fn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,d)},t.staggerFromTo=function(r,s,a,o,l,c,d,h){return o.startAt=a,$s(o).immediateRender=fn(o.immediateRender),this.staggerTo(r,s,o,l,c,d,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:bt(r),h=this._zTime<0!=r<0&&(this._initted||!c),u,f,g,_,p,m,S,T,y,M,E,A;if(this!==Mt&&d>l&&r>=0&&(d=l),d!==this._tTime||a||h){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),u=d,y=this._start,T=this._ts,m=!T,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(u=bt(d%p),d===l?(_=this._repeat,u=c):(M=bt(d/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=Ss(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),E&&_&1&&(u=c-u,A=1),_!==M&&!this._lock){var v=E&&M&1,w=v===(E&&_&1);if(_<M&&(v=!v),o=v?0:d%c?c:d,this._lock=1,this.render(o||(A?0:bt(_*p)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&Cn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Mm(this,bt(o),bt(u)),S&&(d-=u-(u=S._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&c&&!s&&!M&&(Cn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){S=0,g&&(d+=this._zTime=-ut);break}}f=g}else{f=this._last;for(var C=r<0?r:u;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||Gt&&ud(f)),u!==this._time||!this._ts&&!m){S=0,g&&(d+=this._zTime=C?-ut:ut);break}}f=g}}if(S&&!s&&(this.pause(),S.render(u>=o?0:-ut)._zTime=u>=o?1:-1,this._ts))return this._start=y,Do(this),this.render(r,s,a);this._onUpdate&&!s&&Cn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&sr(this,1),!s&&!(r<0&&!o)&&(d||o||!l)&&(Cn(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Ii(s)||(s=Fn(this,s,r)),!(r instanceof ia)){if(jt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Vt(r))return this.addLabel(r,s);if(At(r))r=Dt.delayedCall(0,r);else return this}return this!==r?li(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-zn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Dt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Vt(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&Po(this,r),r===this._recent&&(this._recent=this._last),Ar(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Dt.delayedCall(0,s||ea,a);return o.data="isPause",this._hasPause=1,li(this,o,Fn(this,r))},t.removePause=function(r){var s=this._first;for(r=Fn(this,r);s;)s._start===r&&s.data==="isPause"&&sr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Qi!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Hn(r),l=this._first,c=Ii(s),d;l;)l instanceof Dt?gm(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(d=l.getTweensOf(o,s)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Fn(a,r),l=s,c=l.startAt,d=l.onStart,h=l.onStartParams,u=l.immediateRender,f,g=Dt.to(a,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&bs(g,p,0,1).render(g._time,!0,!0),f=1}d&&d.apply(g,h||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Dn({startAt:{time:Fn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),au(this,Fn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),au(this,Fn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=bt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Ar(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ar(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=zn,c,d,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,li(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(s-=d,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=bt(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;bs(a,a===Mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Mt._ts&&(jh(Mt,go(r,Mt)),Jh=An.frame),An.frame>=nu){nu+=Ln.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&Ln.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},e}(ia);Dn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zm=function(e,t,n,r,s,a,o){var l=new mn(this._pt,e,t,0,1,Tf,null,s),c=0,d=0,h,u,f,g,_,p,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ta(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),u=n.match(Yo)||[];h=Yo.exec(r);)g=h[0],_=r.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[d++]&&(p=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:_||d===1?_:",",s:p,c:g.charAt(1)==="="?us(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Yo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Xh.test(r)||m)&&(l.e=0),this._pt=l,l},hd=function(e,t,n,r,s,a,o,l,c,d){At(r)&&(r=r(s||0,e,a));var h=e[t],u=n!=="get"?n:At(h)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=At(h)?c?Wm:Ef:pd,g;if(Vt(r)&&(~r.indexOf("random(")&&(r=ta(r)),r.charAt(1)==="="&&(g=us(u,r)+(Jt(u)||0),(g||g===0)&&(r=g))),!d||u!==r||ec)return!isNaN(u*r)&&r!==""?(g=new mn(this._pt,e,t,+u||0,r-(u||0),typeof h=="boolean"?Xm:wf,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&od(t,r),zm.call(this,e,t,u,r,f,l||Ln.stringFilter,c))},Hm=function(e,t,n,r,s){if(At(e)&&(e=qs(e,s,t,n,r)),!pi(e)||e.style&&e.nodeType||jt(e)||Wh(e))return Vt(e)?qs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=qs(e[o],s,t,n,r);return a},Sf=function(e,t,n,r,s,a){var o,l,c,d;if(Mn[e]&&(o=new Mn[e]).init(s,o.rawVars?t[e]:Hm(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new mn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==os))for(c=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Qi,ec,fd=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,h=r.yoyoEase,u=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,T=e._overwrite==="auto"&&!id,y=e.timeline,M=r.easeReverse||h,E,A,v,w,C,D,N,O,k,B,X,$,ee;if(y&&(!u||!s)&&(s="none"),e._ease=Rr(s,Qs.ease),e._rEase=M&&(Rr(M)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||u&&!r.stagger){if(O=p[0]?Tr(p[0]).harness:0,$=O&&r[O.prop],E=mo(r,ld),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!f?_.render(-1,!0):_.revert(d&&g?Qa:pm),_._lazy=0),a){if(sr(e._startAt=Dt.set(p,Dn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Cn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!f)&&e._startAt.revert(Qa),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&g&&!_){if(t&&(o=!1),v=Dn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&fn(l),immediateRender:o,stagger:0,parent:m},E),$&&(v[O.prop]=$),sr(e._startAt=Dt.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(Qa):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&fn(l)||l&&!g,A=0;A<p.length;A++){if(C=p[A],N=C._gsap||dd(p)[A]._gsap,e._ptLookup[A]=B={},Yl[N.id]&&ir.length&&po(),X=S===p?A:S.indexOf(C),O&&(k=new O).init(C,$||E,e,X,S)!==!1&&(e._pt=w=new mn(e._pt,C,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Y){B[Y]=w}),k.priority&&(D=1)),!O||$)for(v in E)Mn[v]&&(k=Sf(v,E,e,X,C,S))?k.priority&&(D=1):B[v]=w=hd.call(e,C,v,"get",E[v],X,S,0,r.stringFilter);e._op&&e._op[A]&&e.kill(C,e._op[A]),T&&e._pt&&(Qi=e,Mt.killTweensOf(C,B,e.globalTime(t)),ee=!e.parent,Qi=0),e._pt&&l&&(Yl[N.id]=1)}D&&Af(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,u&&t<=0&&y.render(zn,!0,!0)},Vm=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,h,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return ec=1,e.vars[t]="+=0",fd(e,o),ec=0,l?js(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(f=c.length;f--;)h=c[f],d=h._pt||h,d.s=(r||r===0)&&!s?r:d.s+(r||0)+a*d.c,d.c=n-d.s,h.e&&(h.e=Ct(n)+Jt(h.e)),h.b&&(h.b=d.s+Jt(h.b))},Gm=function(e,t){var n=e[0]?Tr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=ys({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$m=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(jt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},qs=function(e,t,n,r,s){return At(e)?e.call(t,n,r,s):Vt(e)&&~e.indexOf("random(")?ta(e):e},bf=cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Mf={};pn(bf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Mf[i]=1});var Dt=function(i){Gh(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:$s(r))||this;var l=o.vars,c=l.duration,d=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Mt,S=(jt(n)||Wh(n)?Ii(n[0]):"length"in r)?[n]:Hn(n),T,y,M,E,A,v,w,C;if(o._targets=S.length?dd(S):js("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||Ma(c)||Ma(d)){r=o.vars;var D=r.easeReverse||r.yoyoEase;if(T=o.timeline=new hn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),T.kill(),T.parent=T._dp=wi(o),T._start=0,u||Ma(c)||Ma(d)){if(E=S.length,w=u&&cf(u),pi(u))for(A in u)~bf.indexOf(A)&&(C||(C={}),C[A]=u[A]);for(y=0;y<E;y++)M=mo(r,Mf),M.stagger=0,D&&(M.easeReverse=D),C&&ys(M,C),v=S[y],M.duration=+qs(c,wi(o),y,v,S),M.delay=(+qs(d,wi(o),y,v,S)||0)-o._delay,!u&&E===1&&M.delay&&(o._delay=d=M.delay,o._start+=d,M.delay=0),T.to(v,M,w?w(y,v,S):0),T._ease=Je.none;T.duration()?c=d=0:o.timeline=0}else if(g){$s(Dn(T.vars.defaults,{ease:"none"})),T._ease=Rr(g.ease||r.ease||"none");var N=0,O,k,B;if(jt(g))g.forEach(function(X){return T.to(S,X,">")}),T.duration();else{M={};for(A in g)A==="ease"||A==="easeEach"||$m(A,g[A],M,g.easeEach);for(A in M)for(O=M[A].sort(function(X,$){return X.t-$.t}),N=0,y=0;y<O.length;y++)k=O[y],B={ease:k.e,duration:(k.t-(y?O[y-1].t:0))/100*c},B[A]=k.v,T.to(S,B,N),N+=B.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!id&&(Qi=wi(o),Mt.killTweensOf(S),Qi=0),li(m,wi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===bt(m._time)&&fn(h)&&ym(wi(o))&&m.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-d)||0)),p&&sf(wi(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,d=r<0,h=r>l-ut&&!d?l:r<ut?0:r,u,f,g,_,p,m,S,T;if(!c)bm(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+r,s,a);if(u=bt(h%_),h===l?(g=this._repeat,u=c):(p=bt(h/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Ss(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(bt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(af(this,d?r:u,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var M=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Cn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;T&&T.render(r<0?r:T._dur*T._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&Kl(this,r,s,a),Cn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Cn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&Kl(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&sr(this,1),!s&&!(d&&!o)&&(h||o||m)&&(Cn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){na||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||fd(this,c),d=this._ease(c/this._dur),Vm(this,r,s,a,o,d,c,l)?this.resetTo(r,s,a,o,1):(Io(this,0),this.parent||nf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qi&&Qi.vars.overwrite!==!0)._first||zs(this),this.parent&&a!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Hn(r):o,c=this._ptLookup,d=this._pt,h,u,f,g,_,p,m;if((!s||s==="all")&&vm(o,l))return s==="all"&&(this._pt=0),zs(this);for(h=this._op=this._op||[],s!=="all"&&(Vt(s)&&(_={},pn(s,function(S){return _[S]=1}),s=_),s=Gm(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(h[m]=s,g=u,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Po(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&d&&zs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ws(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ws(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Mt.killTweensOf(r,s,a)},e}(ia);Dn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(i){Dt[i]=function(){var e=new hn,t=Jl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var pd=function(e,t,n){return e[t]=n},Ef=function(e,t,n){return e[t](n)},Wm=function(e,t,n,r){return e[t](r.fp,n)},qm=function(e,t,n){return e.setAttribute(t,n)},md=function(e,t){return At(e[t])?Ef:rd(e[t])&&e.setAttribute?qm:pd},wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},gd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ym=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},Km=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Po(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Zm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Af=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},mn=function(){function i(t,n,r,s,a,o,l,c,d){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||wf,this.d=l||this,this.set=c||pd,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Zm,this.m=n,this.mt=s,this.tween=r},i}();pn(cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return ld[i]=1});Pn.TweenMax=Pn.TweenLite=Dt;Pn.TimelineLite=Pn.TimelineMax=hn;Mt=new hn({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=vf;var Cr=[],eo={},Jm=[],lu=0,Qm=0,jo=function(e){return(eo[e]||Jm).map(function(t){return t()})},tc=function(){var e=Date.now(),t=[];e-lu>2&&(jo("matchMediaInit"),Cr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=ri.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),lu=e,jo("matchMedia"))},Rf=function(){function i(t,n){this.selector=n&&Ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){At(n)&&(s=r,r=n,n=At);var a=this,o=function(){var c=xt,d=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ql(s)),xt=a,h=r.apply(a,arguments),At(h)&&a._r.push(h),xt=c,a.selector=d,a.isReverted=!1,h};return a.last=o,n===At?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=xt;xt=null,n(this),xt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Dt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Cr.length;a--;)Cr[a].id===this.id&&Cr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),jm=function(){function i(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){pi(n)||(n={matches:n});var a=new Rf(0,s||this.scope),o=a.conditions={},l,c,d;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?d=1:(l=ri.matchMedia(n[c]),l&&(Cr.indexOf(a)<0&&Cr.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(tc):l.addEventListener("change",tc)));return d&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),_o={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return mf(r)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Vt(e)&&(e=Hn(e)[0]);var s=Tr(e||{}).get,a=n?tf:ef;return n==="native"&&(n=""),e&&(t?a((Mn[t]&&Mn[t].get||s)(e,t,n,r)):function(o,l,c){return a((Mn[o]&&Mn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Hn(e),e.length>1){var r=e.map(function(d){return xn.quickSetter(d,t,n)}),s=r.length;return function(d){for(var h=s;h--;)r[h](d)}}e=e[0]||{};var a=Mn[t],o=Tr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(d){var h=new a;os._pt=0,h.init(e,n?d+n:d,os,0,[e]),h.render(1,h),os._pt&&gd(1,os)}:o.set(e,l);return a?c:function(d){return c(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var r,s=xn.to(e,Dn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,d){return s.resetTo(t,l,c,d)};return a.tween=s,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rr(e.ease,Qs.ease)),iu(Qs,e||{})},config:function(e){return iu(Ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Mn[o]&&!Pn[o]&&js(t+" effect requires "+o+" plugin.")}),Ko[t]=function(o,l,c){return n(Hn(o),Dn(l||{},s),c)},a&&(hn.prototype[t]=function(o,l,c){return this.add(Ko[t](o,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=Rr(t)},parseEase:function(e,t){return arguments.length?Rr(e,t):Je},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new hn(e),r,s;for(n.smoothChildTiming=fn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Dt&&r.vars.onComplete===r._targets[0]))&&li(n,r,r._start-r._delay),r=s;return li(Mt,n,0),n},context:function(e,t){return e?new Rf(e,t):xt},matchMedia:function(e){return new jm(e)},matchMediaRefresh:function(){return Cr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||tc()},addEventListener:function(e,t){var n=eo[e]||(eo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=eo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:km,wrapYoyo:Lm,distribute:cf,random:uf,snap:df,normalize:Cm,getUnit:Jt,clamp:wm,splitColor:gf,toArray:Hn,selector:Ql,mapRange:ff,pipe:Am,unitize:Rm,interpolate:Pm,shuffle:lf},install:Kh,effects:Ko,ticker:An,updateRoot:hn.updateRoot,plugins:Mn,globalTimeline:Mt,core:{PropTween:mn,globals:Zh,Tween:Dt,Timeline:hn,Animation:ia,getCache:Tr,_removeLinkedListItem:Po,reverting:function(){return Gt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return id=e}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return _o[i]=Dt[i]});An.add(hn.updateRoot);os=_o.to({},{duration:0});var eg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tg=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=eg(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},el=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Vt(s)&&(l={},pn(s,function(d){return l[d]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}tg(o,s)}}}},xn=_o.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Gt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},el("roundProps",jl),el("modifiers"),el("snap",df))||_o;Dt.version=hn.version=xn.version="3.15.0";Yh=1;sd()&&Ms();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cu,ji,hs,_d,br,du,vd,ng=function(){return typeof window<"u"},Ui={},yr=180/Math.PI,fs=Math.PI/180,zr=Math.atan2,uu=1e8,xd=/([A-Z])/g,ig=/(left|right|width|margin|padding|x)/i,rg=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ag=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},og=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cg=function(e,t,n){return e.style[t]=n},dg=function(e,t,n){return e.style.setProperty(t,n)},ug=function(e,t,n){return e._gsap[t]=n},hg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fg=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},pg=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Et="transform",gn=Et+"Origin",mg=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Ui&&s){if(this.tfm=this.tfm||{},e!=="transform")e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ti(r,o)}):this.tfm[e]=a.x?a[e]:Ti(r,e),e===gn&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},Lf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gg=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vd(),(!s||!s.isStart)&&!n[Et]&&(Lf(n),r.zOrigin&&n[gn]&&(n[gn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Pf=function(e,t){var n={target:e,props:[],revert:gg,save:mg};return e._gsap||xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Df,ic=function(e,t){var n=ji.createElementNS?ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ji.createElement(e);return n&&n.style?n:ji.createElement(e)},kn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(xd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Es(t)||t,1)||""},hu="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var r=t||br,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(hu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?hu[a]:"")+e},rc=function(){ng()&&window.document&&(cu=window,ji=cu.document,hs=ji.documentElement,br=ic("div")||{style:{}},ic("div"),Et=Es(Et),gn=Et+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Df=!!Es("perspective"),vd=xn.core.reverting,_d=1)},fu=function(e){var t=e.ownerSVGElement,n=ic("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),hs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),hs.removeChild(n),s},pu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},If=function(e){var t,n;try{t=e.getBBox()}catch{t=fu(e),n=1}return t&&(t.width||t.height)||n||(t=fu(e)),t&&!t.width&&!t.x&&!t.y?{x:+pu(e,["x","cx","x1"])||0,y:+pu(e,["y","cy","y1"])||0,width:0,height:0}:t},Uf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&If(e))},ar=function(e,t){if(t){var n=e.style,r;t in Ui&&t!==gn&&(t=Et),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(xd,"-$1").toLowerCase())):n.removeAttribute(t)}},er=function(e,t,n,r,s,a){var o=new mn(e._pt,t,n,0,1,a?kf:Cf);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},mu={deg:1,rad:1,turn:1},_g={grid:1,flex:1},or=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=br.style,l=ig.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),h=100,u=r==="px",f=r==="%",g,_,p,m;if(r===a||!s||mu[r]||mu[a])return s;if(a!=="px"&&!u&&(s=i(e,t,n,"px")),m=e.getCTM&&Uf(e),(f||a==="%")&&(Ui[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[d],Ct(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(u?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ji||!_.appendChild)&&(_=ji.body),p=_._gsap,p&&f&&p.width&&l&&p.time===An.time&&!p.uncache)return Ct(s/p.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,g=e[d],S?e.style[t]=S:ar(e,t)}else(f||a==="%")&&!_g[kn(_,"display")]&&(o.position=kn(e,"position")),_===e&&(o.position="static"),_.appendChild(br),g=br[d],_.removeChild(br),o.position="absolute";return l&&f&&(p=Tr(_),p.time=An.time,p.width=_[d]),Ct(u?g*s/h:g&&s?h/g*s:0)},Ti=function(e,t,n,r){var s;return _d||rc(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ui[t]&&t!=="transform"?(s=sa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xo(kn(e,gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=vo[t]&&vo[t](e,t,n)||kn(e,t)||Qh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?or(e,t,s,n)+n:s},vg=function(e,t,n,r){if(!n||n==="none"){var s=Es(t,e,1),a=s&&kn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var o=new mn(this._pt,e.style,t,0,1,Tf),l=0,c=0,d,h,u,f,g,_,p,m,S,T,y,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=kn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=kn(e,t)||r,_?e.style[t]=_:ar(e,t)),d=[n,r],vf(d),n=d[0],r=d[1],u=n.match(as)||[],M=r.match(as)||[],M.length){for(;h=as.exec(r);)p=h[0],S=r.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=us(f,p)+y),m=parseFloat(p),T=p.substr((m+"").length),l=as.lastIndex-T.length,T||(T=T||Ln.units[t]||y,l===r.length&&(r+=T,o.e+=T)),y!==T&&(f=or(e,t,_,T)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?kf:Cf;return Xh.test(r)&&(o.e=0),this._pt=o,o},gu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xg=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=gu[n]||n,t[1]=gu[r]||r,t.join(" ")},yg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ui[o]&&(l=1,o=o==="transformOrigin"?gn:Et),ar(n,o);l&&(ar(n,Et),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sa(n,1),a.uncache=1,Lf(r)))}},vo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new mn(e._pt,t,n,0,0,yg);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ra=[1,0,0,1,0,0],Nf={},Ff=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_u=function(e){var t=kn(e,Et);return Ff(t)?ra:t.substr(7).match(qh).map(Ct)},yd=function(e,t){var n=e._gsap||Tr(e),r=e.style,s=_u(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!e.offsetParent&&e!==hs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,hs.appendChild(e)),s=_u(e),l?r.display=l:ar(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sc=function(e,t,n,r,s,a){var o=e._gsap,l=s||yd(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,h=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],T=t.split(" "),y=parseFloat(T[0])||0,M=parseFloat(T[1])||0,E,A,v,w;n?l!==ra&&(A=f*p-g*_)&&(v=y*(p/A)+M*(-_/A)+(_*S-p*m)/A,w=y*(-g/A)+M*(f/A)-(f*S-g*m)/A,y=v,M=w):(E=If(e),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(T[1]||T[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&o.smooth?(m=y-c,S=M-d,o.xOffset=h+(m*f+S*_)-m,o.yOffset=u+(m*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[gn]="0px 0px",a&&(er(a,o,"xOrigin",c,y),er(a,o,"yOrigin",d,M),er(a,o,"xOffset",h,o.xOffset),er(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},sa=function(e,t){var n=e._gsap||new yf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=kn(e,gn)||"0",d,h,u,f,g,_,p,m,S,T,y,M,E,A,v,w,C,D,N,O,k,B,X,$,ee,Y,Q,ne,Se,Te,$e,Ue;return d=h=u=_=p=m=S=T=y=0,f=g=1,n.svg=!!(e.getCTM&&Uf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),r.scale=r.rotate=r.translate="none"),A=yd(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),sc(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==ra&&(D=A[0],N=A[1],O=A[2],k=A[3],d=B=A[4],h=X=A[5],A.length===6?(f=Math.sqrt(D*D+N*N),g=Math.sqrt(k*k+O*O),_=D||N?zr(N,D)*yr:0,S=O||k?zr(O,k)*yr+_:0,S&&(g*=Math.abs(Math.cos(S*fs))),n.svg&&(d-=M-(M*D+E*O),h-=E-(M*N+E*k))):(Ue=A[6],Te=A[7],Q=A[8],ne=A[9],Se=A[10],$e=A[11],d=A[12],h=A[13],u=A[14],v=zr(Ue,Se),p=v*yr,v&&(w=Math.cos(-v),C=Math.sin(-v),$=B*w+Q*C,ee=X*w+ne*C,Y=Ue*w+Se*C,Q=B*-C+Q*w,ne=X*-C+ne*w,Se=Ue*-C+Se*w,$e=Te*-C+$e*w,B=$,X=ee,Ue=Y),v=zr(-O,Se),m=v*yr,v&&(w=Math.cos(-v),C=Math.sin(-v),$=D*w-Q*C,ee=N*w-ne*C,Y=O*w-Se*C,$e=k*C+$e*w,D=$,N=ee,O=Y),v=zr(N,D),_=v*yr,v&&(w=Math.cos(v),C=Math.sin(v),$=D*w+N*C,ee=B*w+X*C,N=N*w-D*C,X=X*w-B*C,D=$,B=ee),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Ct(Math.sqrt(D*D+N*N+O*O)),g=Ct(Math.sqrt(X*X+Ue*Ue)),v=zr(B,X),S=Math.abs(v)>2e-4?v*yr:0,y=$e?1/($e<0?-$e:$e):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ff(kn(e,Et)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Ct(f),n.scaleY=Ct(g),n.rotation=Ct(_)+o,n.rotationX=Ct(p)+o,n.rotationY=Ct(m)+o,n.skewX=S+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[gn]=xo(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?bg:Df?Of:Sg,n.uncache=0,n},xo=function(e){return(e=e.split(" "))[0]+" "+e[1]},tl=function(e,t,n){var r=Jt(t);return Ct(parseFloat(t)+parseFloat(or(e,"x",n+"px",r)))+r},Sg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Of(e,t)},ur="0deg",ks="0px",hr=") ",Of=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,d=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,T=n.zOrigin,y="",M=m==="auto"&&e&&e!==1||m===!0;if(T&&(h!==ur||d!==ur)){var E=parseFloat(d)*fs,A=Math.sin(E),v=Math.cos(E),w;E=parseFloat(h)*fs,w=Math.cos(E),a=tl(S,a,A*w*-T),o=tl(S,o,-Math.sin(E)*-T),l=tl(S,l,v*w*-T+T)}p!==ks&&(y+="perspective("+p+hr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||a!==ks||o!==ks||l!==ks)&&(y+=l!==ks||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+hr),c!==ur&&(y+="rotate("+c+hr),d!==ur&&(y+="rotateY("+d+hr),h!==ur&&(y+="rotateX("+h+hr),(u!==ur||f!==ur)&&(y+="skew("+u+", "+f+hr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+hr),S.style[Et]=y||"translate(0, 0)"},bg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,d=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,T=parseFloat(a),y=parseFloat(o),M,E,A,v,w;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=fs,c*=fs,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(d*=fs,w=Math.tan(c-d),w=Math.sqrt(1+w*w),A*=w,v*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=Ct(M),E=Ct(E),A=Ct(A),v=Ct(v)):(M=h,v=u,E=A=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=or(f,"x",a,"px"),y=or(f,"y",o,"px")),(g||_||p||m)&&(T=Ct(T+g-(g*M+_*A)+p),y=Ct(y+_-(g*E+_*v)+m)),(r||s)&&(w=f.getBBox(),T=Ct(T+r/100*w.width),y=Ct(y+s/100*w.height)),w="matrix("+M+","+E+","+A+","+v+","+T+","+y+")",f.setAttribute("transform",w),S&&(f.style[Et]=w)},Mg=function(e,t,n,r,s){var a=360,o=Vt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?yr:1),c=l-r,d=r+c+"deg",h,u;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*uu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*uu)%a-~~(c/a)*a)),e._pt=u=new mn(e._pt,t,n,r,c,sg),u.e=d,u.u="deg",e._props.push(n),u},vu=function(e,t){for(var n in t)e[n]=t[n];return e},Eg=function(e,t,n){var r=vu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,d,h,u,f,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Et]=t,o=sa(n,1),ar(n,Et),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Et],a[Et]=t,o=sa(n,1),a[Et]=c);for(l in Ui)c=r[l],d=o[l],c!==d&&s.indexOf(l)<0&&(f=Jt(c),g=Jt(d),h=f!==g?or(n,l,c,g):parseFloat(c),u=parseFloat(d),e._pt=new mn(e._pt,o,l,h,u-h,nc),e._pt.u=g||0,e._props.push(l));vu(o,r)};pn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});vo[e>1?"border"+i:i]=function(o,l,c,d,h){var u,f;if(arguments.length<4)return u=a.map(function(g){return Ti(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,h)}});var Bf={name:"css",register:rc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,d,h,u,f,g,_,p,m,S,T,y,M,E,A,v,w;_d||rc(),this.styles=this.styles||Pf(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Mn[_]&&Sf(_,t,n,r,e,s)))){if(f=typeof d,g=vo[_],f==="function"&&(d=d.call(n,r,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=ta(d)),g)g(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",rr.lastIndex=0,rr.test(c)||(p=Jt(c),m=Jt(d),m?p!==m&&(c=or(e,_,c,m)+m):p&&(d+=p)),this.add(o,"setProperty",c,d,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Vt(c)&&~c.indexOf("random(")&&(c=ta(c)),Jt(c+"")||c==="auto"||(c+=Ln.units[_]||Jt(Ti(e,_))||""),(c+"").charAt(1)==="="&&(c=Ti(e,_))):c=Ti(e,_),u=parseFloat(c),S=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),S&&(d=d.substr(2)),h=parseFloat(d),_ in di&&(_==="autoAlpha"&&(u===1&&Ti(e,"visibility")==="hidden"&&h&&(u=0),v.push("visibility",0,o.visibility),er(this,o,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Ui,T){if(this.styles.save(_),w=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=kn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=d,d=kn(e,"perspective"),C?e.style.perspective=C:ar(e,"perspective")}h=parseFloat(d)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||sa(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new mn(this._pt,o,Et,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new mn(this._pt,M,"scaleY",M.scaleY,(S?us(M.scaleY,S+h):h)-M.scaleY||0,nc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(gn,0,o[gn]),d=xg(d),M.svg?sc(e,d,0,E,0,this):(m=parseFloat(d.split(" ")[2])||0,m!==M.zOrigin&&er(this,M,"zOrigin",M.zOrigin,m),er(this,o,_,xo(c),xo(d)));continue}else if(_==="svgOrigin"){sc(e,d,1,E,0,this);continue}else if(_ in Nf){Mg(this,M,_,u,S?us(u,S+d):d);continue}else if(_==="smoothOrigin"){er(this,M,"smooth",M.smooth,d);continue}else if(_==="force3D"){M[_]=d;continue}else if(_==="transform"){Eg(this,d,e);continue}}else _ in o||(_=Es(_)||_);if(T||(h||h===0)&&(u||u===0)&&!rg.test(d)&&_ in o)p=(c+"").substr((u+"").length),h||(h=0),m=Jt(d)||(_ in Ln.units?Ln.units[_]:p),p!==m&&(u=or(e,_,c,m)),this._pt=new mn(this._pt,T?M:o,_,u,(S?us(u,S+h):h)-u,!T&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?lg:nc),this._pt.u=m||0,T&&w!==d?(this._pt.b=c,this._pt.e=w,this._pt.r=og):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ag);else if(_ in o)vg.call(this,e,_,c,S?S+d:d);else if(_ in e)this.add(e,_,c||e[_],S?S+d:d,r,s);else if(_!=="parseTransform"){od(_,d);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}A&&Af(this)},render:function(e,t){if(t.tween._time||!vd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ti,aliases:di,getSetter:function(e,t,n){var r=di[t];return r&&r.indexOf(",")<0&&(t=r),t in Ui&&t!==gn&&(e._gsap.x||Ti(e,"x"))?n&&du===n?t==="scale"?hg:ug:(du=n||{})&&(t==="scale"?fg:pg):e.style&&!rd(e.style[t])?cg:~t.indexOf("-")?dg:md(e,t)},core:{_removeProperty:ar,_getMatrix:yd}};xn.utils.checkPrefix=Es;xn.core.getStyleSaver=Pf;(function(i,e,t,n){var r=pn(i+","+e+","+t,function(s){Ui[s]=1});pn(e,function(s){Ln.units[s]="deg",Nf[s]=1}),di[r[13]]=i+","+e,pn(n,function(s){var a=s.split(":");di[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ln.units[i]="px"});xn.registerPlugin(Bf);var Ni=xn.registerPlugin(Bf)||xn;Ni.core.Tween;Ni.matchMedia();function pa(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const xu=new WeakMap;function wg(i,e){const t=xu.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,xu.set(i,t),pa()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const r=document.createElement("span");r.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const a=document.createElement("span");a.textContent=e,a.style.cssText="display:block; position:absolute; left:0; top:100%;",r.append(s,a),i.appendChild(r),t.tween=Ni.to([s,a],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function zf(i){if(pa())return;const e=Array.from(i.children).slice(0,8);e.length&&Ni.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Sd(i){pa()||!i.length||Ni.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function bd(i){pa()||Ni.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function Tg(i,e){if(pa()){e();return}Ni.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{Ni.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="186",Ag=0,yu=1,Rg=2,to=1,Cg=2,Vs=3,kr=0,_n=1,ci=2,ki=0,Xs=1,Su=2,bu=3,Mu=4,kg=5,is=100,Lg=101,Pg=102,Dg=103,Ig=104,Ug=200,Ng=201,Fg=202,Og=203,Hf=204,Vf=205,Bg=206,zg=207,Hg=208,Vg=209,Gg=210,$g=211,Wg=212,qg=213,Xg=214,ac=0,oc=1,lc=2,aa=3,cc=4,dc=5,uc=6,hc=7,Ed=0,Yg=1,Kg=2,fi=0,Gf=1,$f=2,Wf=3,qf=4,Xf=5,Yf=6,Kf=7,Zf=300,Lr=301,ws=302,nl=303,il=304,Uo=306,fc=1e3,Ri=1001,pc=1002,It=1003,Zg=1004,Ea=1005,Qt=1006,rl=1007,Mr=1008,Rn=1009,Jf=1010,Qf=1011,oa=1012,wd=1013,mi=1014,ui=1015,gi=1016,Td=1017,Ad=1018,la=1020,jf=35902,ep=35899,tp=1021,np=1022,Kn=1023,Fi=1026,Er=1027,ip=1028,Rd=1029,Pr=1030,Cd=1031,kd=1033,no=33776,io=33777,ro=33778,so=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Sc=37496,bc=37488,Mc=37489,yo=37490,Ec=37491,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,kc=37813,Lc=37814,Pc=37815,Dc=37816,Ic=37817,Uc=37818,Nc=37819,Fc=37820,Oc=37821,Bc=36492,zc=36494,Hc=36495,Vc=36283,Gc=36284,So=36285,$c=36286,Jg=3200,Wc=0,Qg=1,Zi="",En="srgb",bo="srgb-linear",Mo="linear",ot="srgb",sl=7680,jg=519,e_=512,t_=513,n_=514,Ld=515,i_=516,r_=517,Pd=518,s_=519,a_=35044,Eu="300 es",hi=2e3,ca=2001;function o_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=da("canvas");return i.style.display="block",i}const wu={};function Tu(...i){const e="THREE."+i.shift();console.log(e,...i)}function rp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=rp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=rp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ps(...i){const e=i.join(" ");e in wu||(wu[e]=!0,Ie(...i))}function c_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const d_={[ac]:oc,[lc]:uc,[cc]:hc,[aa]:dc,[oc]:ac,[uc]:lc,[hc]:cc,[dc]:aa};class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,qc=180/Math.PI;function ma(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function u_(i,e){return(i%e+e)%e}function al(i,e,t){return(1-t)*i+t*e}function h_(i){return i*ao}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const f_={degToRad:h_};class je{static{je.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==u||c!==f||d!==g){let p=l*u+c*f+d*g+h*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,l=l*m+u*o,c=c*m+f*o,d=d*m+g*o,h=h*m+_*o}else{l=l*m+u*o,c=c*m+f*o,d=d*m+g*o,h=h*m+_*o;const S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-o*f,e[t+2]=c*g+d*f+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),h=o(s/2),u=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{W.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new W,Au=new As;class Ne{static{Ne.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],S=r[1],T=r[4],y=r[7],M=r[2],E=r[5],A=r[8];return s[0]=a*_+o*S+l*M,s[3]=a*p+o*T+l*E,s[6]=a*m+o*y+l*A,s[1]=c*_+d*S+h*M,s[4]=c*p+d*T+h*E,s[7]=c*m+d*y+h*A,s[2]=u*_+f*S+g*M,s[5]=u*p+f*T+g*E,s[8]=u*m+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,g=t*h+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-d*n)*_,e[2]=(o*n-r*a)*_,e[3]=u*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Ne,Ru=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){const i={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bo]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const Ke=p_();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hr;class m_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=da("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Dd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cl(r[a].image)):s.push(cl(r[a]))}else s=cl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let __=0;const dl=new W;class Ut extends Nr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Ri,r=Ri,s=Qt,a=Mr,o=Kn,l=Rn,c=Ut.DEFAULT_ANISOTROPY,d=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ma(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Zf;Ut.DEFAULT_ANISOTROPY=1;class wt{static{wt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(f+1)/2,M=(m+1)/2,E=(d+u)/4,A=(h+_)/4,v=(g+p)/4;return T>y&&T>M?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=E/n,s=A/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(u-d)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v_ extends Nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ut(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Dd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends v_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sp extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x_ extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Tt{static{Tt.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,l,c,d,h,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,h,u,f,g,_,p)}set(e,t,n,r,s,a,o,l,c,d,h,u,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,S_)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(n,yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(n,yn)),Vi.normalize(),wa.crossVectors(yn,Vi),r[0]=Vi.x,r[4]=wa.x,r[8]=yn.x,r[1]=Vi.y,r[5]=wa.y,r[9]=yn.y,r[2]=Vi.z,r[6]=wa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],T=n[7],y=n[11],M=n[15],E=r[0],A=r[4],v=r[8],w=r[12],C=r[1],D=r[5],N=r[9],O=r[13],k=r[2],B=r[6],X=r[10],$=r[14],ee=r[3],Y=r[7],Q=r[11],ne=r[15];return s[0]=a*E+o*C+l*k+c*ee,s[4]=a*A+o*D+l*B+c*Y,s[8]=a*v+o*N+l*X+c*Q,s[12]=a*w+o*O+l*$+c*ne,s[1]=d*E+h*C+u*k+f*ee,s[5]=d*A+h*D+u*B+f*Y,s[9]=d*v+h*N+u*X+f*Q,s[13]=d*w+h*O+u*$+f*ne,s[2]=g*E+_*C+p*k+m*ee,s[6]=g*A+_*D+p*B+m*Y,s[10]=g*v+_*N+p*X+m*Q,s[14]=g*w+_*O+p*$+m*ne,s[3]=S*E+T*C+y*k+M*ee,s[7]=S*A+T*D+y*B+M*Y,s[11]=S*v+T*N+y*X+M*Q,s[15]=S*w+T*O+y*$+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],S=l*f-c*u,T=o*f-c*h,y=o*u-l*h,M=a*f-c*d,E=a*u-l*d,A=a*h-o*d;return t*(_*S-p*T+m*y)-n*(g*S-p*M+m*E)+r*(g*T-_*M+m*A)-s*(g*y-_*E+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=t*o-n*a,T=t*l-r*a,y=t*c-s*a,M=n*l-r*o,E=n*c-s*o,A=r*c-s*l,v=d*_-h*g,w=d*p-u*g,C=d*m-f*g,D=h*p-u*_,N=h*m-f*_,O=u*m-f*p,k=S*O-T*N+y*D+M*C-E*w+A*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return e[0]=(o*O-l*N+c*D)*B,e[1]=(r*N-n*O-s*D)*B,e[2]=(_*A-p*E+m*M)*B,e[3]=(u*E-h*A-f*M)*B,e[4]=(l*C-a*O-c*w)*B,e[5]=(t*O-r*C+s*w)*B,e[6]=(p*y-g*A-m*T)*B,e[7]=(d*A-u*y+f*T)*B,e[8]=(a*N-o*C+c*v)*B,e[9]=(n*C-t*N-s*v)*B,e[10]=(g*E-_*y+m*S)*B,e[11]=(h*y-d*E-f*S)*B,e[12]=(o*w-a*D-l*v)*B,e[13]=(t*D-n*w+r*v)*B,e[14]=(_*T-g*M-p*S)*B,e[15]=(d*M-h*T+u*S)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,g=s*h,_=a*d,p=a*h,m=o*h,S=l*c,T=l*d,y=l*h,M=n.x,E=n.y,A=n.z;return r[0]=(1-(_+m))*M,r[1]=(f+y)*M,r[2]=(g-T)*M,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(u+m))*E,r[6]=(p+S)*E,r[7]=0,r[8]=(g+T)*A,r[9]=(p-S)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const c=1/a,d=1/o,h=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=d,$n.elements[5]*=d,$n.elements[6]*=d,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=hi,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===hi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ca)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=hi,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===hi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ca)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new W,$n=new Tt,y_=new W(0,0,0),S_=new W(1,1,1),Vi=new W,wa=new W,yn=new W,ku=new Tt,Lu=new As;class lr{constructor(e=0,t=0,n=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b_=0;const Pu=new W,Gr=new As,vi=new Tt,Ta=new W,Ps=new W,M_=new W,E_=new As,Du=new W(1,0,0),Iu=new W(0,1,0),Uu=new W(0,0,1),Nu={type:"added"},w_={type:"removed"},$r={type:"childadded",child:null},ul={type:"childremoved",child:null};class en extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new W,t=new lr,n=new As,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ne}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ps,Ta,this.up):vi.lookAt(Ta,Ps,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(vi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),$r.child=e,this.dispatchEvent($r),$r.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w_),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,M_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,E_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}en.DEFAULT_UP=new W(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=u_(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ke.workingToColorSpace(Kt.copy(this),e),Math.round(Ze(Kt.r*255,0,255))*65536+Math.round(Ze(Kt.g*255,0,255))*256+Math.round(Ze(Kt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=En){Ke.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,r=Kt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Aa);const n=al(Gi.h,Aa.h,t),r=al(Gi.s,Aa.s,t),s=al(Gi.l,Aa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new nt;nt.NAMES=op;class A_ extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wn=new W,xi=new W,pl=new W,yi=new W,Wr=new W,qr=new W,Fu=new W,ml=new W,gl=new W,_l=new W,vl=new wt,xl=new wt,yl=new wt;class Xn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wn.subVectors(r,t),xi.subVectors(n,t),pl.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(xi),l=Wn.dot(pl),c=xi.dot(xi),d=xi.dot(pl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return vl.setScalar(0),xl.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vl,s.x),a.addScaledVector(xl,s.y),a.addScaledVector(yl,s.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),xi.subVectors(e,t),Wn.cross(xi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,n),qr.subVectors(s,n),ml.subVectors(e,n);const l=Wr.dot(ml),c=qr.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,r);const d=Wr.dot(gl),h=qr.dot(gl);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Wr,a);_l.subVectors(e,s);const f=Wr.dot(_l),g=qr.dot(_l);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(qr,o);const p=d*g-f*h;if(p<=0&&h-d>=0&&f-g>=0)return Fu.subVectors(s,r),o=(h-d)/(h-d+(f-g)),t.copy(r).addScaledVector(Fu,o);const m=1/(p+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(Wr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Ca.subVectors(this.max,Ds),Xr.subVectors(e.a,Ds),Yr.subVectors(e.b,Ds),Kr.subVectors(e.c,Ds),$i.subVectors(Yr,Xr),Wi.subVectors(Kr,Yr),fr.subVectors(Xr,Kr);let t=[0,-$i.z,$i.y,0,-Wi.z,Wi.y,0,-fr.z,fr.y,$i.z,0,-$i.x,Wi.z,0,-Wi.x,fr.z,0,-fr.x,-$i.y,$i.x,0,-Wi.y,Wi.x,0,-fr.y,fr.x,0];return!Sl(t,Xr,Yr,Kr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Xr,Yr,Kr,Ca))?!1:(ka.crossVectors($i,Wi),t=[ka.x,ka.y,ka.z],Sl(t,Xr,Yr,Kr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new W,new W,new W,new W,new W,new W,new W,new W],qn=new W,Ra=new ga,Xr=new W,Yr=new W,Kr=new W,$i=new W,Wi=new W,fr=new W,Ds=new W,Ca=new W,ka=new W,pr=new W;function Sl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pr.fromArray(i,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new W,La=new je;let R_=0;class Pi extends Nr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=a_,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lp extends Pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cp extends Pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Di extends Pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const C_=new ga,Is=new W,bl=new W;class Id{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):C_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Is,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(bl)),this.expandByPoint(Is.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k_=0;const Un=new Tt,Ml=new en,Zr=new W,Sn=new ga,Us=new ga,Bt=new W;class Oi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o_(e)?cp:lp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Di(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Id);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,Us.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,Us.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(Us.min),Sn.expandByPoint(Us.max))}Sn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Bt.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),Bt.add(Zr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new W,l[v]=new W;const c=new W,d=new W,h=new W,u=new je,f=new je,g=new je,_=new W,p=new W;function m(v,w,C){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),p.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(D),o[v].add(_),o[w].add(_),o[C].add(_),l[v].add(p),l[w].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const C=S[v],D=C.start,N=C.count;for(let O=D,k=D+N;O<k;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new W,y=new W,M=new W,E=new W;function A(v){M.fromBufferAttribute(r,v),E.copy(M);const w=o[v];T.copy(w),T.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(E,w);const D=y.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,w=S.length;v<w;++v){const C=S[v],D=C.start,N=C.count;for(let O=D,k=D+N;O<k;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,d=new W,h=new W;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let m=0;m<d;m++)u[g++]=c[f++]}return new Pi(u,d,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new W,L_=new W,P_=new Ne;class Xi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=El.subVectors(n,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(El),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||P_.getNormalMatrix(e),r=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let D_=0;class _a extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Xs,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new W,wl=new W,Pa=new W,Da=new W;class I_{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(wl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Da.dot(this.direction),l=-Da.dot(Pa),c=Da.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*l-o,u=a*o-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wl).addScaledVector(Pa,u),f}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),r=bi.dot(bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,T=n.z-a.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(d);let A,v,w,C,D,N,O,k,B,X,$,ee;if(y>=M&&y>=E?(w=l,N=h,B=g,ee=m,l>=0?(A=c,v=d,C=u,D=f,O=_,k=p,X=S,$=T):(A=d,v=c,C=f,D=u,O=p,k=_,X=T,$=S)):M>=E?(w=c,N=u,B=_,ee=S,c>=0?(A=d,v=l,C=f,D=h,O=p,k=g,X=T,$=m):(A=l,v=d,C=h,D=f,O=g,k=p,X=m,$=T)):(w=d,N=f,B=p,ee=T,d>=0?(A=l,v=c,C=h,D=u,O=g,k=_,X=m,$=S):(A=c,v=l,C=u,D=h,O=_,k=g,X=S,$=m)),w===0)return null;const Y=A/w,Q=v/w,ne=1/w,Se=C-Y*N,Te=D-Q*N,$e=O-Y*B,Ue=k-Q*B,K=X-Y*ee,L=$-Q*ee,V=K*Ue-L*$e,le=Se*L-Te*K,Le=$e*Te-Ue*Se;if(r){if(V<0||le<0||Le<0)return null}else if((V<0||le<0||Le<0)&&(V>0||le>0||Le>0))return null;const xe=V+le+Le;if(xe===0)return null;const Oe=ne*(V*N+le*B+Le*ee);return(xe>0?Oe<0:Oe>0)?null:this.at(Oe/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dp extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ou=new Tt,mr=new I_,Ia=new Id,Bu=new W,Ua=new W,Na=new W,Fa=new W,Tl=new W,Oa=new W,zu=new W,Ba=new W;class Vn extends en{constructor(e=new Oi,t=new dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Tl.fromBufferAttribute(h,e),a?Oa.addScaledVector(Tl,d):Oa.addScaledVector(Tl.sub(t),d))}t.add(Oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Ia.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ia,Bu)===null||mr.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,M=T;y<M;y+=3){const E=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);r=za(this,m,e,n,c,d,h,E,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);r=za(this,a,e,n,c,d,h,S,T,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,M=T;y<M;y+=3){const E=y,A=y+1,v=y+2;r=za(this,m,e,n,c,d,h,E,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,T=p+1,y=p+2;r=za(this,a,e,n,c,d,h,S,T,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function U_(i,e,t,n,r,s,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===kr,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ua),i.getVertexPosition(l,Na),i.getVertexPosition(c,Fa);const d=U_(i,e,t,n,Ua,Na,Fa,zu);if(d){const h=new W;Xn.getBarycoord(zu,Ua,Na,Fa,h),r&&(d.uv=Xn.getInterpolatedAttribute(r,o,l,c,h,new je)),s&&(d.uv1=Xn.getInterpolatedAttribute(s,o,l,c,h,new je)),a&&(d.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new W,materialIndex:0};Xn.getNormal(Ua,Na,Fa,u.normal),d.face=u,d.barycoord=h}return d}class N_ extends Ut{constructor(e=null,t=1,n=1,r,s,a,o,l,c=It,d=It,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new Id,F_=new je(.5,.5),Ha=new W;class Ud{constructor(e=new Xi,t=new Xi,n=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],S=s[12],T=s[13],y=s[14],M=s[15];if(r[0].setComponents(c-a,f-d,m-g,M-S).normalize(),r[1].setComponents(c+a,f+d,m+g,M+S).normalize(),r[2].setComponents(c+o,f+h,m+_,M+T).normalize(),r[3].setComponents(c-o,f-h,m-_,M-T).normalize(),n)r[4].setComponents(l,u,p,y).normalize(),r[5].setComponents(c-l,f-u,m-p,M-y).normalize();else if(r[4].setComponents(c-l,f-u,m-p,M-y).normalize(),t===hi)r[5].setComponents(c+l,f+u,m+p,M+y).normalize();else if(t===ca)r[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const t=F_.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class up extends Ut{constructor(e=[],t=Lr,n,r,s,a,o,l,c,d){super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O_ extends Ut{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends Ut{constructor(e,t,n=mi,r,s,a,o=It,l=It,c,d=Fi,h=1){if(d!==Fi&&d!==Er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class B_ extends ua{constructor(e,t=mi,n=Lr,r,s,a=It,o=It,l,c=Fi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hp extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends Oi{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(d,3)),this.setAttribute("uv",new Di(h,2));function g(_,p,m,S,T,y,M,E,A,v,w){const C=y/A,D=M/v,N=y/2,O=M/2,k=E/2,B=A+1,X=v+1;let $=0,ee=0;const Y=new W;for(let Q=0;Q<X;Q++){const ne=Q*D-O;for(let Se=0;Se<B;Se++){const Te=Se*C-N;Y[_]=Te*S,Y[p]=ne*T,Y[m]=k,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(Se/A),h.push(1-Q/v),$+=1}}for(let Q=0;Q<v;Q++)for(let ne=0;ne<A;ne++){const Se=u+ne+B*Q,Te=u+ne+B*(Q+1),$e=u+(ne+1)+B*(Q+1),Ue=u+(ne+1)+B*Q;l.push(Se,Te,Ue),l.push(Te,$e,Ue),ee+=6}o.addGroup(f,ee,w),f+=ee,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class va extends Oi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<d;m++){const S=m*u-a;for(let T=0;T<c;T++){const y=T*h-s;g.push(y,-S,0),_.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const T=S+c*m,y=S+c*(m+1),M=S+1+c*(m+1),E=S+1+c*m;f.push(T,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Hu(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Hu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const r in n)e[r]=n[r]}return e}function Hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function z_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const H_={clone:Ts,merge:sn};var V_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(r.value);break;case"v2":this.uniforms[n].value=new je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $_ extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xc extends _a{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Ed,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Al={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class X_{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Y_=new X_;class pp{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jr=new WeakMap;class Gu extends pp{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Al.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Jr.get(a);h===void 0&&(h=[],Jr.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=da("img");function l(){d(),t&&t(this);const h=Jr.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Jr.delete(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),Al.remove(`image:${e}`);const u=Jr.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}Jr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Al.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class mp extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rl=new Tt,$u=new W,Wu=new W;class K_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ca||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new W,Ga=new As,ti=new W;class gp extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ga,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Ga,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new W,qu=new je,Xu=new je;class Bn extends gp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Xu),t.subVectors(Xu,qu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nd extends gp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z_ extends K_{constructor(){super(new Nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yu extends mp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class J_ extends mp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qr=-90,jr=1;class Q_ extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Qr,jr,e,t);r.layers=this.layers,this.add(r);const s=new Bn(Qr,jr,e,t);s.layers=this.layers,this.add(s);const a=new Bn(Qr,jr,e,t);a.layers=this.layers,this.add(a);const o=new Bn(Qr,jr,e,t);o.layers=this.layers,this.add(o);const l=new Bn(Qr,jr,e,t);l.layers=this.layers,this.add(l);const c=new Bn(Qr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class j_ extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class e0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class _p{static{_p.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Ku(i,e,t,n){const r=t0(n);switch(t){case tp:return i*e;case ip:return i*e/r.components*r.byteLength;case Rd:return i*e/r.components*r.byteLength;case Pr:return i*e*2/r.components*r.byteLength;case Cd:return i*e*2/r.components*r.byteLength;case np:return i*e*3/r.components*r.byteLength;case Kn:return i*e*4/r.components*r.byteLength;case kd:return i*e*4/r.components*r.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case xc:case yc:case bc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case yo:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bc:case zc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case Rn:case Jf:return{byteLength:1,components:1};case oa:case Qf:case gi:return{byteLength:2,components:1};case Td:case Ad:return{byteLength:2,components:4};case mi:case wd:case ui:return{byteLength:4,components:1};case jf:case ep:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function n0(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
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
#endif`,tv=`uniform sampler2D dfgLUT;
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fv=`#if defined( USE_POINTS_UV )
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
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
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
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
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
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vv=`float getShadowMask() {
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
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,yx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,kx=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:d0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:S0,color_fragment:b0,color_pars_fragment:M0,color_pars_vertex:E0,color_vertex:w0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:k0,emissivemap_fragment:L0,emissivemap_pars_fragment:P0,colorspace_fragment:D0,colorspace_pars_fragment:I0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:K0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:W0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:X0,lights_pars_begin:Y0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:Q0,lights_phong_pars_fragment:j0,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:rv,lightprobes_pars_fragment:sv,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:dv,map_pars_fragment:uv,map_particle_fragment:hv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:yv,normal_fragment_begin:Sv,normal_fragment_maps:bv,normal_pars_fragment:Mv,normal_pars_vertex:Ev,normal_vertex:wv,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:kv,opaque_fragment:Lv,packing:Pv,premultiplied_alpha_fragment:Dv,project_vertex:Iv,dithering_fragment:Uv,dithering_pars_fragment:Nv,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Vv,skinbase_vertex:Gv,skinning_pars_vertex:$v,skinning_vertex:Wv,skinnormal_vertex:qv,specularmap_fragment:Xv,specularmap_pars_fragment:Yv,tonemapping_fragment:Kv,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:jv,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:rx,backgroundCube_vert:sx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:dx,distance_vert:ux,distance_frag:hx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:yx,meshmatcap_vert:Sx,meshmatcap_frag:bx,meshnormal_vert:Mx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:kx,points_vert:Lx,points_frag:Px,shadow_vert:Dx,shadow_frag:Ix,sprite_vert:Ux,sprite_frag:Nx},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},si={basic:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:sn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:sn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:sn([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:sn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:sn([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:sn([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:sn([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:sn([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const $a={r:0,b:0,g:0},Fx=new Tt,xp=new Ne;xp.set(-1,0,0,0,1,0,0,0,1);function Ox(i,e,t,n,r,s){const a=new nt(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1;const y=f(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,T){const y=f(T);y&&(y.isCubeTexture||y.mapping===Uo)?(c===void 0&&(c=new Vn(new Fr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ts(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xp),c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,(d!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vn(new va(2,2),new _i({name:"BackgroundMaterial",uniforms:Ts(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB($a,fp(i)),t.buffers.color.setClear($a.r,$a.g,$a.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Bx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(D,N,O,k,B){let X=!1;const $=h(D,k,O,N);s!==$&&(s=$,c(s.object)),X=f(D,k,O,B),X&&g(D,k,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(D,N,O,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function h(D,N,O,k){const B=k.wireframe===!0;let X=n[N.id];X===void 0&&(X={},n[N.id]=X);const $=D.isInstancedMesh===!0?D.id:0;let ee=X[$];ee===void 0&&(ee={},X[$]=ee);let Y=ee[O.id];Y===void 0&&(Y={},ee[O.id]=Y);let Q=Y[B];return Q===void 0&&(Q=u(l()),Y[B]=Q),Q}function u(D){const N=[],O=[],k=[];for(let B=0;B<t;B++)N[B]=0,O[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:k,object:D,attributes:{},index:null}}function f(D,N,O,k){const B=s.attributes,X=N.attributes;let $=0;const ee=O.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const ne=B[Y];let Se=X[Y];if(Se===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;$++}return s.attributesNum!==$||s.index!==k}function g(D,N,O,k){const B={},X=N.attributes;let $=0;const ee=O.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let ne=X[Y];ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),B[Y]=Se,$++}s.attributes=B,s.attributesNum=$,s.index=k}function _(){const D=s.newAttributes;for(let N=0,O=D.length;N<O;N++)D[N]=0}function p(D){m(D,0)}function m(D,N){const O=s.newAttributes,k=s.enabledAttributes,B=s.attributeDivisors;O[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),B[D]!==N&&(i.vertexAttribDivisor(D,N),B[D]=N)}function S(){const D=s.newAttributes,N=s.enabledAttributes;for(let O=0,k=N.length;O<k;O++)N[O]!==D[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function T(D,N,O,k,B,X,$){$===!0?i.vertexAttribIPointer(D,N,O,B,X):i.vertexAttribPointer(D,N,O,k,B,X)}function y(D,N,O,k){_();const B=k.attributes,X=O.getAttributes(),$=N.defaultAttributeValues;for(const ee in X){const Y=X[ee];if(Y.location>=0){let Q=B[ee];if(Q===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ne=Q.normalized,Se=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const $e=Te.buffer,Ue=Te.type,K=Te.bytesPerElement,L=Ue===i.INT||Ue===i.UNSIGNED_INT||Q.gpuType===wd;if(Q.isInterleavedBufferAttribute){const V=Q.data,le=V.stride,Le=Q.offset;if(V.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe,V.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let xe=0;xe<Y.locationSize;xe++)T(Y.location+xe,Se/Y.locationSize,Ue,ne,le*K,(Le+Se/Y.locationSize*xe)*K,L)}else{if(Q.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)m(Y.location+V,Q.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let V=0;V<Y.locationSize;V++)p(Y.location+V);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let V=0;V<Y.locationSize;V++)T(Y.location+V,Se/Y.locationSize,Ue,ne,Se*K,Se/Y.locationSize*V*K,L)}}else if($!==void 0){const ne=$[ee];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Y.location,ne);break;case 3:i.vertexAttrib3fv(Y.location,ne);break;case 4:i.vertexAttrib4fv(Y.location,ne);break;default:i.vertexAttrib1fv(Y.location,ne)}}}}S()}function M(){w();for(const D in n){const N=n[D];for(const O in N){const k=N[O];for(const B in k){const X=k[B];for(const $ in X)d(X[$].object),delete X[$];delete k[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const O in N){const k=N[O];for(const B in k){const X=k[B];for(const $ in X)d(X[$].object),delete X[$];delete k[B]}}delete n[D.id]}function A(D){for(const N in n){const O=n[N];for(const k in O){const B=O[k];if(B[D.id]===void 0)continue;const X=B[D.id];for(const $ in X)d(X[$].object),delete X[$];delete B[D.id]}}}function v(D){for(const N in n){const O=n[N],k=D.isInstancedMesh===!0?D.id:0,B=O[k];if(B!==void 0){for(const X in B){const $=B[X];for(const ee in $)d($[ee].object),delete $[ee];delete B[X]}delete O[k],Object.keys(O).length===0&&delete n[N]}}}function w(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function zx(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Hx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rn&&A!==ui&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:E}}function Vx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Xi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||r;return r=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const S=s?0:n,T=S*4;let y=m.clippingState||null;l.value=y,y=d(g,u,T,f);for(let M=0;M!==T;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=f;T!==_;++T,y+=4)a.copy(h[T]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const ls=4,Gx=6,$x=20,Wx=256,Ns=new Nd,Zu=new nt;let Cl=null,kl=0,Ll=0,Pl=!1;const qx=new W,_r=new W;class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=qx}=s;Cl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,kl,Ll),this._renderer.xr.enabled=Pl,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:gi,format:Kn,colorSpace:bo,depthBuffer:!1},r=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(s)),this._blurMaterial=Kx(s,e,t),this._ggxMaterial=Yx(s,e,t)}return r}_compileMaterial(e){const t=new Vn(new Oi,e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,r,s){const l=new Bn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zu),h.toneMapping=fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new Fr,new dp({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Zu),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const M=this._cubeSize;es(r,y*M,T>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Lr||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-ls?n-g+ls:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,es(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(o,Ns),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,es(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(o,Ns)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],h=3*d*(r>this._lodMax-ls?r-this._lodMax+ls:0),u=4*(this._cubeSize-d);es(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,Ns)}}function Xx(i){const e=[],t=[];let n=i;const r=i-ls+1+Gx;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,g=new Float32Array(f*u*h),_=new Float32Array(f*u*h);for(let m=0;m<h;m++){const S=m%3*2/3-1,T=m>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(y,f*u*m);for(let M=0;M<u;M++){const E=d[M*2]*2-1,A=d[M*2+1]*2-1;m===0?_r.set(1,A,E):m===1?_r.set(-E,1,-A):m===2?_r.set(-E,A,1):m===3?_r.set(-1,A,-E):m===4?_r.set(-E,-1,A):_r.set(E,A,-1),_r.toArray(_,(m*u+M)*f)}}const p=new Oi;p.setAttribute("position",new Pi(g,f)),p.setAttribute("outputDirection",new Pi(_,f)),t.push(new Vn(p,null)),n>ls&&n--}return{lodMeshes:t,sizeLods:e}}function Qu(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yx(i,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Kx(i,e,t){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ju(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function eh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class yp extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new up(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ki});s.uniforms.tEquirect.value=t;const a=new Vn(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Qt),new Q_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Zx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===nl||f===il)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new yp(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===nl||f===il,_=f===Lr||f===ws;if(g||_){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ju(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Ju(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,f){return f===nl?u.mapping=Lr:f===il&&(u.mapping=ws),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ps("WebGLRenderer: "+n+" extension not supported."),r}}}function Qx(i,e,t,n){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let T=0,y=S.length;T<y;T+=3){const M=S[T+0],E=S[T+1],A=S[T+2];u.push(M,E,E,A,A,M)}}else{const S=g.array;_=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){const M=T+0,E=T+1,A=T+2;u.push(M,E,E,A,A,M)}}const p=new(g.count>=65535?cp:lp)(u,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function jx(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ey(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ty(i,e,t){const n=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*M*4*h),A=new sp(E,y,M,h);A.type=ui,A.needsUpdate=!0;const v=T*4;for(let C=0;C<h;C++){const D=p[C],N=m[C],O=S[C],k=y*M*4*C;for(let B=0;B<D.count;B++){const X=B*v;f===!0&&(r.fromBufferAttribute(D,B),E[k+X+0]=r.x,E[k+X+1]=r.y,E[k+X+2]=r.z,E[k+X+3]=0),g===!0&&(r.fromBufferAttribute(N,B),E[k+X+4]=r.x,E[k+X+5]=r.y,E[k+X+6]=r.z,E[k+X+7]=0),_===!0&&(r.fromBufferAttribute(O,B),E[k+X+8]=r.x,E[k+X+9]=r.y,E[k+X+10]=r.z,E[k+X+11]=O.itemSize===4?r.w:1)}}u={count:h,texture:A,size:new je(y,M)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function ny(i,e,t,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const iy={[Gf]:"LINEAR_TONE_MAPPING",[$f]:"REINHARD_TONE_MAPPING",[Wf]:"CINEON_TONE_MAPPING",[qf]:"ACES_FILMIC_TONE_MAPPING",[Yf]:"AGX_TONE_MAPPING",[Kf]:"NEUTRAL_TONE_MAPPING",[Xf]:"CUSTOM_TONE_MAPPING"};function ry(i,e,t,n,r,s){const a=new Zn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Oi;c.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Di([0,2,0,0,2,0],2));const d=new $_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vn(c,d),u=new Nd(-1,1,1,-1,0,1);let f=null,g=null,_=!1,p,m=null,S=[],T=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let E=0;E<S.length;E++){const A=S[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;const M=a.width,E=a.height;S.length>0&&o===null&&(o=new Zn(M,E,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(M,E,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const v=S[A];v.setSize&&v.setSize(M,E)}},this.begin=function(y,M){if(_||y.toneMapping===fi&&S.length===0)return!1;if(m=M,M!==null){const E=M.width,A=M.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return T===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=fi,!0},this.hasRenderPass=function(){return T},this.end=function(y,M){y.toneMapping=p,_=!0;let E=a,A=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(y,A,E,M),w.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,d.defines={},Ke.getTransfer(f)===ot&&(d.defines.SRGB_TRANSFER="");const v=iy[g];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(h,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Sp=new Ut,Yc=new ua(1,1),bp=new sp,Mp=new x_,Ep=new up,th=[],nh=[],ih=new Float32Array(16),rh=new Float32Array(9),sh=new Float32Array(4);function Rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=th[r];if(s===void 0&&(s=new Float32Array(r),th[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function cy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),Ft(t,n)}}function dy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Ft(t,n)}}function uy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Ft(t,n)}}function hy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function yy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=t.isReversedDepthBuffer()?Pd:Ld,s=Yc):s=Sp,t.setTexture2D(e||s,r)}function Sy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Mp,r)}function by(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ep,r)}function My(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bp,r)}function Ey(i){switch(i){case 5126:return sy;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return dy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return vy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return My}}function wy(i,e){i.uniform1fv(this.addr,e)}function Ty(i,e){const t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ay(i,e){const t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Ry(i,e){const t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Cy(i,e){const t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ky(i,e){const t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ly(i,e){const t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Py(i,e){i.uniform1iv(this.addr,e)}function Dy(i,e){i.uniform2iv(this.addr,e)}function Iy(i,e){i.uniform3iv(this.addr,e)}function Uy(i,e){i.uniform4iv(this.addr,e)}function Ny(i,e){i.uniform1uiv(this.addr,e)}function Fy(i,e){i.uniform2uiv(this.addr,e)}function Oy(i,e){i.uniform3uiv(this.addr,e)}function By(i,e){i.uniform4uiv(this.addr,e)}function zy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yc:a=Sp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mp,s[a])}function Vy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ep,s[a])}function Gy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bp,s[a])}function $y(i){switch(i){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return ky;case 35676:return Ly;case 5124:case 35670:return Py;case 35667:case 35671:return Dy;case 35668:case 35672:return Iy;case 35669:case 35673:return Uy;case 5125:return Ny;case 36294:return Fy;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}class Wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$y(t.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function Yy(i,e,t){const n=i.name,r=n.length;for(Dl.lastIndex=0;;){const s=Dl.exec(n),a=Dl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ah(t,c===void 0?new Wy(o,i,e):new qy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Xy(o),ah(t,h)),t=h}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yy(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ky=37297;let Zy=0;function Jy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lh=new Ne;function Qy(i){Ke._getMatrix(lh,Ke.workingColorSpace,i);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ch(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jy(i.getShaderSource(e),o)}else return s}function jy(i,e){const t=Qy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eS={[Gf]:"Linear",[$f]:"Reinhard",[Wf]:"Cineon",[qf]:"ACESFilmic",[Yf]:"AgX",[Kf]:"Neutral",[Xf]:"Custom"};function tS(i,e){const t=eS[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new W;function nS(){Ke.getLuminanceCoefficients(Wa);const i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function rS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(aS,lS)}const oS=new Map;function lS(i,e){let t=ze[e];if(t===void 0){const n=oS.get(e);if(n!==void 0)t=ze[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kc(t)}const cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(cS,dS)}function dS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const uS={[to]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function hS(i){return uS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fS={[Lr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};function pS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const mS={[ws]:"ENVMAP_MODE_REFRACTION"};function gS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _S={[Ed]:"ENVMAP_BLENDING_MULTIPLY",[Yg]:"ENVMAP_BLENDING_MIX",[Kg]:"ENVMAP_BLENDING_ADD"};function vS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_S[i.combine]||"ENVMAP_BLENDING_NONE"}function xS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yS(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hS(t),c=pS(t),d=gS(t),h=vS(t),u=xS(t),f=iS(t),g=rS(s),_=r.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(p=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?ze.tonemapping_pars_fragment:"",t.toneMapping!==fi?tS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),nS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Kc(a),a=dh(a,t),a=uh(a,t),o=Kc(o),o=dh(o,t),o=uh(o,t),a=hh(a),o=hh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=S+p+a,y=S+m+o,M=oh(r,r.VERTEX_SHADER,T),E=oh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(M)||"",k=r.getShaderInfoLog(E)||"",B=N.trim(),X=O.trim(),$=k.trim();let ee=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,E);else{const Q=ch(r,M,"vertex"),ne=ch(r,E,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+ne)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ee,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(M),r.deleteShader(E),v=new oo(r,_),w=sS(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,Ky)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let SS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new MS(e),t.set(e,n)),n}}class MS{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}}function ES(i){return i===Pr||i===yo||i===So}function wS(i,e,t,n,r,s){const a=new ap,o=new bS,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,N,O){const k=D.fog,B=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||X,$),Y=ee&&ee.mapping===Uo?ee.image.height:null,Q=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=ne!==void 0?ne.length:0;let Te=0;B.morphAttributes.position!==void 0&&(Te=1),B.morphAttributes.normal!==void 0&&(Te=2),B.morphAttributes.color!==void 0&&(Te=3);let $e,Ue,K,L;if(Q){const ft=si[Q];$e=ft.vertexShader,Ue=ft.fragmentShader}else{$e=v.vertexShader,Ue=v.fragmentShader;const ft=o.getVertexShaderStage(v),rt=o.getFragmentShaderStage(v);o.update(v,ft,rt),K=ft.id,L=rt.id}const V=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Oe=!!v.map,_t=!!v.matcap,Ve=!!ee,We=!!v.aoMap,ht=!!v.lightMap,Xe=!!v.bumpMap&&v.wireframe===!1,vt=!!v.normalMap,Ot=!!v.displacementMap,ln=!!v.emissiveMap,St=!!v.metalnessMap,kt=!!v.roughnessMap,U=v.anisotropy>0,qt=v.clearcoat>0,at=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,F=v.sheen>0,G=v.transmission>0,Z=U&&!!v.anisotropyMap,ae=qt&&!!v.clearcoatMap,ce=qt&&!!v.clearcoatNormalMap,J=qt&&!!v.clearcoatRoughnessMap,te=x&&!!v.iridescenceMap,de=x&&!!v.iridescenceThicknessMap,Ce=F&&!!v.sheenColorMap,pe=F&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ke=!!v.specularColorMap,De=!!v.specularIntensityMap,Fe=G&&!!v.transmissionMap,I=G&&!!v.thicknessMap,he=!!v.gradientMap,j=!!v.alphaMap,fe=v.alphaTest>0,ye=!!v.alphaHash,re=!!v.extensions;let Pe=fi;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Ae={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:Ue,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:L,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:_t,envMap:Ve,envMapMode:Ve&&ee.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:ht,bumpMap:Xe,normalMap:vt,displacementMap:Ot,emissiveMap:ln,normalMapObjectSpace:vt&&v.normalMapType===Qg,normalMapTangentSpace:vt&&v.normalMapType===Wc,packedNormalMap:vt&&v.normalMapType===Wc&&ES(v.normalMap.format),metalnessMap:St,roughnessMap:kt,anisotropy:U,anisotropyMap:Z,clearcoat:qt,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:at,retroreflection:R,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:de,sheen:F,sheenColorMap:Ce,sheenRoughnessMap:pe,specularMap:ue,specularColorMap:ke,specularIntensityMap:De,transmission:G,transmissionMap:Fe,thicknessMap:I,gradientMap:he,opaque:v.transparent===!1&&v.blending===Xs&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:fe,alphaHash:ye,combine:v.combine,mapUv:Oe&&g(v.map.channel),aoMapUv:We&&g(v.aoMap.channel),lightMapUv:ht&&g(v.lightMap.channel),bumpMapUv:Xe&&g(v.bumpMap.channel),normalMapUv:vt&&g(v.normalMap.channel),displacementMapUv:Ot&&g(v.displacementMap.channel),emissiveMapUv:ln&&g(v.emissiveMap.channel),metalnessMapUv:St&&g(v.metalnessMap.channel),roughnessMapUv:kt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:ae&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:ke&&g(v.specularColorMap.channel),specularIntensityMapUv:De&&g(v.specularIntensityMap.channel),transmissionMapUv:Fe&&g(v.transmissionMap.channel),thicknessMapUv:I&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||U),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Oe||j),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Te,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:ln&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ci,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=f[v.type];let C;if(w){const D=si[w];C=H_.clone(D.uniforms)}else C=v.uniforms;return C}function y(v,w){let C=d.get(w);return C!==void 0?++C.usedTimes:(C=new yS(i,w,v,r),c.push(C),d.set(w,C)),C}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function TS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function AS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function l(u,f,g,_,p,m,S){S.reversedDepth===!0&&(p=-p);const T=o(u,f,g,_,p,m);g.transmission>0?n.push(T):g.transparent===!0?r.push(T):t.push(T)}function c(u,f,g,_,p,m){const S=o(u,f,g,_,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(u,f){t.length>1&&t.sort(u||AS),n.length>1&&n.sort(f||ph),r.length>1&&r.sort(f||ph)}function h(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function RS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new mh,i.set(n,[a])):r>=s.length?(a=new mh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function CS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new nt};break;case"SpotLight":t={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LS=0;function PS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DS(i){const e=new CS,t=kS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new Tt,a=new Tt;function o(c){let d=0,h=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,S=0,T=0,y=0,M=0,E=0,A=0,v=0,w=0,C=0;c.sort(PS);for(let N=0,O=c.length;N<O;N++){const k=c[N],B=k.color,X=k.intensity,$=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Pr?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=B.r*X,h+=B.g*X,u+=B.b*X;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(k.sh.coefficients[Y],X);C++}else if(k.isSunLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,ne=t.get(k);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=ee;const Se=Q.getViewportCount();for(let Te=0;Te<Se;Te++)n.sunShadowMatrix[_+Te]=Q.getMatrix(Te),n.sunShadowCascade[_+Te]=Q._cascadeData[Te];_+=Se,g++}n.sun[f]=Y,f++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,ne=t.get(k);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=k.shadow.matrix,M++}n.directional[p]=Y,p++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=$,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,n.spot[S]=Y;const Q=k.shadow;if(k.map&&(n.spotLightMap[v]=k.map,v++,Q.updateMatrices(k),k.castShadow&&w++),n.spotLightMatrix[S]=Q.matrix,k.castShadow){const ne=t.get(k);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[S]=ne,n.spotShadowMap[S]=ee,A++}S++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),n.rectArea[T]=Y,T++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const Q=k.shadow,ne=t.get(k);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=k.shadow.matrix,E++}n.point[m]=Y,m++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(X),Y.groundColor.copy(k.groundColor).multiplyScalar(X),n.hemi[y]=Y,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=LS++)}function l(c,d){let h=0,u=0,f=0,g=0,_=0,p=0;const m=d.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const y=c[S];if(y.isSunLight){const M=n.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),h++}else if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function gh(i){const e=new DS(i),t=[],n=[],r=[];function s(u){h.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IS(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gh(i),e.set(r,[o])):s>=a.length?(o=new gh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
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
}`,FS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],OS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],_h=new Tt,Fs=new W,Il=new W;function BS(i,e,t){let n=new Ud;const r=new je,s=new je,a=new wt,o=new W_,l=new q_,c={},d=t.maxTextureSize,h={[kr]:_n,[_n]:kr,[ci]:ci},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:US,fragmentShader:NS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oi;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let m=this.type;this.render=function(E,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Cg&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);const w=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ki),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==this.type;O&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(B=>B.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,B=E.length;k<B;k++){const X=E[k],$=X.shadow;if($===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ee=$.getFrameExtents();r.multiply(ee),s.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,$.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,$.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||O===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Vs){if(X.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Zn(r.x,r.y,{format:Pr,type:gi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ua(r.x,r.y,ui),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Fi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=It,$.map.depthTexture.magFilter=It}else X.isPointLight?($.map=new yp(r.x),$.map.depthTexture=new B_(r.x,mi)):($.map=new Zn(r.x,r.y),$.map.depthTexture=new ua(r.x,r.y,mi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Fi,this.type===to?($.map.depthTexture.compareFunction=Y?Pd:Ld,$.map.depthTexture.minFilter=Qt,$.map.depthTexture.magFilter=Qt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=It,$.map.depthTexture.magFilter=It);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,v);for(let ne=0;ne<Q;ne++){const Se=$.getCamera(ne);if(X.isPointLight){const Te=$.camera,$e=$.matrix,Ue=X.distance||Te.far;Ue!==Te.far&&(Te.far=Ue,Te.updateProjectionMatrix()),Fs.setFromMatrixPosition(X.matrixWorld),Te.position.copy(Fs),Il.copy(Te.position),Il.add(FS[ne]),Te.up.copy(OS[ne]),Te.lookAt(Il),Te.updateMatrixWorld(),$e.makeTranslation(-Fs.x,-Fs.y,-Fs.z),_h.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),$._frustum.setFromProjectionMatrix(_h,Te.coordinateSystem,Te.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ne),i.clear();else{ne===0&&(i.setRenderTarget($.map),i.clear());const Te=$.getViewport(ne);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),N.viewport(a)}n=$.getFrustum(ne),y(A,v,Se,X,this.type)}$.isPointLightShadow!==!0&&this.type===Vs&&S($,v),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,C,D)};function S(E,A){const v=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Zn(r.x,r.y,{format:Pr,type:gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function T(E,A,v,w){let C=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=C.uuid,O=A.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let B=k[O];B===void 0&&(B=C.clone(),k[O]=B,A.addEventListener("dispose",M)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Vs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=v}return C}function y(E,A,v,w,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Vs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),k=E.material;if(Array.isArray(k)){const B=O.groups;for(let X=0,$=B.length;X<$;X++){const ee=B[X],Y=k[ee.materialIndex];if(Y&&Y.visible){const Q=T(E,Y,w,C);E.onBeforeShadow(i,E,A,v,O,Q,ee),i.renderBufferDirect(v,null,O,Q,E,ee),E.onAfterShadow(i,E,A,v,O,Q,ee)}}}else if(k.visible){const B=T(E,k,w,C);E.onBeforeShadow(i,E,A,v,O,B,null),i.renderBufferDirect(v,null,O,B,E,null),E.onAfterShadow(i,E,A,v,O,B,null)}}const N=E.children;for(let O=0,k=N.length;O<k;O++)y(N[O],A,v,w,C)}function M(E){E.target.removeEventListener("dispose",M);for(const v in c){const w=c[v],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function zS(i,e){function t(){let I=!1;const he=new wt;let j=null;const fe=new wt(0,0,0,0);return{setMask:function(ye){j!==ye&&!I&&(i.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){I=ye},setClear:function(ye,re,Pe,Ae,ft){ft===!0&&(ye*=Ae,re*=Ae,Pe*=Ae),he.set(ye,re,Pe,Ae),fe.equals(he)===!1&&(i.clearColor(ye,re,Pe,Ae),fe.copy(he))},reset:function(){I=!1,j=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,j=null,fe=null,ye=null;return{setReversed:function(re){if(he!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Ae=ye;ye=null,this.setClear(Ae)}},getReversed:function(){return he},setTest:function(re){re?V(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(re){j!==re&&!I&&(i.depthMask(re),j=re)},setFunc:function(re){if(he&&(re=d_[re]),fe!==re){switch(re){case ac:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=re}},setLocked:function(re){I=re},setClear:function(re){ye!==re&&(ye=re,he&&(re=1-re),i.clearDepth(re))},reset:function(){I=!1,j=null,fe=null,ye=null,he=!1}}}function r(){let I=!1,he=null,j=null,fe=null,ye=null,re=null,Pe=null,Ae=null,ft=null;return{setTest:function(rt){I||(rt?V(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(rt){he!==rt&&!I&&(i.stencilMask(rt),he=rt)},setFunc:function(rt,Gn,jn){(j!==rt||fe!==Gn||ye!==jn)&&(i.stencilFunc(rt,Gn,jn),j=rt,fe=Gn,ye=jn)},setOp:function(rt,Gn,jn){(re!==rt||Pe!==Gn||Ae!==jn)&&(i.stencilOp(rt,Gn,jn),re=rt,Pe=Gn,Ae=jn)},setLocked:function(rt){I=rt},setClear:function(rt){ft!==rt&&(i.clearStencil(rt),ft=rt)},reset:function(){I=!1,he=null,j=null,fe=null,ye=null,re=null,Pe=null,Ae=null,ft=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,S=null,T=null,y=null,M=null,E=null,A=null,v=new nt(0,0,0),w=0,C=!1,D=null,N=null,O=null,k=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ee>=2);let Q=null,ne={};const Se=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),$e=new wt().fromArray(Se),Ue=new wt().fromArray(Te);function K(I,he,j,fe){const ye=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<j;Pe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(he+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return re}const L={};L[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(i.DEPTH_TEST),a.setFunc(aa),Xe(!1),vt(yu),V(i.CULL_FACE),We(ki);function V(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function le(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Le(I,he){return u[I]!==he?(i.bindFramebuffer(I,he),u[I]=he,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(I,he){let j=g,fe=!1;if(I){j=f.get(he),j===void 0&&(j=[],f.set(he,j));const ye=I.textures;if(j.length!==ye.length||j[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Pe=ye.length;re<Pe;re++)j[re]=i.COLOR_ATTACHMENT0+re;j.length=ye.length,fe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,fe=!0);fe&&i.drawBuffers(j)}function Oe(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const _t={[is]:i.FUNC_ADD,[Lg]:i.FUNC_SUBTRACT,[Pg]:i.FUNC_REVERSE_SUBTRACT};_t[Dg]=i.MIN,_t[Ig]=i.MAX;const Ve={[Ug]:i.ZERO,[Ng]:i.ONE,[Fg]:i.SRC_COLOR,[Hf]:i.SRC_ALPHA,[Gg]:i.SRC_ALPHA_SATURATE,[Hg]:i.DST_COLOR,[Bg]:i.DST_ALPHA,[Og]:i.ONE_MINUS_SRC_COLOR,[Vf]:i.ONE_MINUS_SRC_ALPHA,[Vg]:i.ONE_MINUS_DST_COLOR,[zg]:i.ONE_MINUS_DST_ALPHA,[$g]:i.CONSTANT_COLOR,[Wg]:i.ONE_MINUS_CONSTANT_COLOR,[qg]:i.CONSTANT_ALPHA,[Xg]:i.ONE_MINUS_CONSTANT_ALPHA};function We(I,he,j,fe,ye,re,Pe,Ae,ft,rt){if(I===ki){p===!0&&(le(i.BLEND),p=!1);return}if(p===!1&&(V(i.BLEND),p=!0),I!==kg){if(I!==m||rt!==C){if((S!==is||M!==is)&&(i.blendEquation(i.FUNC_ADD),S=is,M=is),rt)switch(I){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFunc(i.ONE,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",I);break}else switch(I){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",I);break}T=null,y=null,E=null,A=null,v.set(0,0,0),w=0,m=I,C=rt}return}ye=ye||he,re=re||j,Pe=Pe||fe,(he!==S||ye!==M)&&(i.blendEquationSeparate(_t[he],_t[ye]),S=he,M=ye),(j!==T||fe!==y||re!==E||Pe!==A)&&(i.blendFuncSeparate(Ve[j],Ve[fe],Ve[re],Ve[Pe]),T=j,y=fe,E=re,A=Pe),(Ae.equals(v)===!1||ft!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ft),v.copy(Ae),w=ft),m=I,C=!1}function ht(I,he){I.side===ci?le(i.CULL_FACE):V(i.CULL_FACE);let j=I.side===_n;he&&(j=!j),Xe(j),I.blending===Xs&&I.transparent===!1?We(ki):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ln(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function vt(I){I!==Ag?(V(i.CULL_FACE),I!==N&&(I===yu?i.cullFace(i.BACK):I===Rg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),N=I}function Ot(I){I!==O&&($&&i.lineWidth(I),O=I)}function ln(I,he,j){I?(V(i.POLYGON_OFFSET_FILL),(k!==he||B!==j)&&(k=he,B=j,a.getReversed()&&(he=-he),i.polygonOffset(he,j))):le(i.POLYGON_OFFSET_FILL)}function St(I){I?V(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function kt(I){I===void 0&&(I=i.TEXTURE0+X-1),Q!==I&&(i.activeTexture(I),Q=I)}function U(I,he,j){j===void 0&&(Q===null?j=i.TEXTURE0+X-1:j=Q);let fe=ne[j];fe===void 0&&(fe={type:void 0,texture:void 0},ne[j]=fe),(fe.type!==I||fe.texture!==he)&&(Q!==j&&(i.activeTexture(j),Q=j),i.bindTexture(I,he||L[I]),fe.type=I,fe.texture=he)}function qt(){const I=ne[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function x(){try{i.texSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function F(){try{i.texSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function ae(){try{i.texStorage2D(...arguments)}catch(I){it("WebGLState:",I)}}function ce(){try{i.texStorage3D(...arguments)}catch(I){it("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function de(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function Ce(I,he){h[I]!==he&&(i.pixelStorei(I,he),h[I]=he)}function pe(I){$e.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function ue(I){Ue.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ue.copy(I))}function ke(I,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let fe=j.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(he,I.name),j.set(I,fe))}function De(I,he){const fe=c.get(he).get(I);l.get(he)!==fe&&(i.uniformBlockBinding(he,fe,I.__bindingPointIndex),l.set(he,fe))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,ne={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,S=null,T=null,y=null,M=null,E=null,A=null,v=new nt(0,0,0),w=0,C=!1,D=null,N=null,O=null,k=null,B=null,$e.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:le,bindFramebuffer:Le,drawBuffers:xe,useProgram:Oe,setBlending:We,setMaterial:ht,setFlipSided:Xe,setCullFace:vt,setLineWidth:Ot,setPolygonOffset:ln,setScissorTest:St,activeTexture:kt,bindTexture:U,unbindTexture:qt,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:de,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:ae,texStorage3D:ce,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:pe,viewport:ue,reset:Fe}}function HS(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return g?new OffscreenCanvas(R,x):da("canvas")}function p(R,x,F){let G=1;const Z=at(R);if((Z.width>F||Z.height>F)&&(G=F/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(G*Z.width),ce=Math.floor(G*Z.height);u===void 0&&(u=_(ae,ce));const J=x?_(ae,ce):u;return J.width=ae,J.height=ce,J.getContext("2d").drawImage(R,0,0,ae,ce),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+ce+")."),J}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,F,G,Z,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;G&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),F===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),F===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),F===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const te=ae?Mo:Ke.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=te===ot?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),F===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(R,x){let F;return R?x===null||x===mi||x===la?F=i.DEPTH24_STENCIL8:x===ui?F=i.DEPTH32F_STENCIL8:x===oa&&(F=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===la?F=i.DEPTH_COMPONENT24:x===ui?F=i.DEPTH_COMPONENT32F:x===oa&&(F=i.DEPTH_COMPONENT16),F}function E(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),D(x)}function w(R){const x=n.get(R);if(x.__webglInit===void 0)return;const F=R.source,G=f.get(F);if(G){const Z=G[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(G).length===0&&f.delete(F)}n.remove(R)}function C(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const F=R.source,G=f.get(F);delete G[x.__cacheKey],a.memory.textures--}function D(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let Z=0;Z<x.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=R.textures;for(let G=0,Z=F.length;G<Z;G++){const ae=n.get(F[G]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(R)}let N=0;function O(){N=0}function k(){return N}function B(R){N=R}function X(){const R=N;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function $(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ee(R,x){const F=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const G=R.image;if(G===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{le(F,R,x);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Y(R,x){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){le(F,R,x);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(R,x){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){le(F,R,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function ne(R,x){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Le(F,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const Se={[fc]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[pc]:i.MIRRORED_REPEAT},Te={[It]:i.NEAREST,[Zg]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},$e={[e_]:i.NEVER,[s_]:i.ALWAYS,[t_]:i.LESS,[Ld]:i.LEQUAL,[n_]:i.EQUAL,[Pd]:i.GEQUAL,[i_]:i.GREATER,[r_]:i.NOTEQUAL};function Ue(R,x){if(x.type===ui&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===rl||x.magFilter===Ea||x.magFilter===Mr||x.minFilter===Qt||x.minFilter===rl||x.minFilter===Ea||x.minFilter===Mr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Se[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Se[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Se[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Te[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,$e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==Ea&&x.minFilter!==Mr||x.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function K(R,x){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const G=x.source;let Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));const ae=$(x);if(ae!==R.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[ae].usedTimes++;const ce=Z[R.__cacheKey];ce!==void 0&&(Z[R.__cacheKey].usedTimes--,ce.usedTimes===0&&C(x)),R.__cacheKey=ae,R.__webglTexture=Z[ae].texture}return F}function L(R,x,F){return Math.floor(Math.floor(R/F)/x)}function V(R,x,F,G){const ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,G,x.data);else{ae.sort((Ce,pe)=>Ce.start-pe.start);let ce=0;for(let Ce=1;Ce<ae.length;Ce++){const pe=ae[ce],ue=ae[Ce],ke=pe.start+pe.count,De=L(ue.start,x.width,4),Fe=L(pe.start,x.width,4);ue.start<=ke+1&&De===Fe&&L(ue.start+ue.count-1,x.width,4)===De?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++ce,ae[ce]=ue)}ae.length=ce+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ce=0,pe=ae.length;Ce<pe;Ce++){const ue=ae[Ce],ke=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),Fe=ke%x.width,I=Math.floor(ke/x.width),he=De,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Fe,I,he,j,F,G,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function le(R,x,F){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const Z=K(R,x),ae=x.source;t.bindTexture(G,R.__webglTexture,i.TEXTURE0+F);const ce=n.get(ae);if(ae.version!==ce.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=Ke.getPrimaries(Ke.workingColorSpace),fe=x.colorSpace===Zi?null:Ke.getPrimaries(x.colorSpace),ye=x.colorSpace===Zi||j===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=p(x.image,!1,r.maxTextureSize);te=qt(x,te);const de=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let pe=y(x.internalFormat,de,Ce,x.normalized,x.colorSpace,x.isVideoTexture);Ue(G,x);let ue;const ke=x.mipmaps,De=x.isVideoTexture!==!0,Fe=ce.__version===void 0||Z===!0,I=ae.dataReady,he=E(x,te);if(x.isDepthTexture)pe=M(x.format===Er,x.type),Fe&&(De?t.texStorage2D(i.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,de,Ce,null));else if(x.isDataTexture)if(ke.length>0){De&&Fe&&t.texStorage2D(i.TEXTURE_2D,he,pe,ke[0].width,ke[0].height);for(let j=0,fe=ke.length;j<fe;j++)ue=ke[j],De?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue.width,ue.height,de,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,j,pe,ue.width,ue.height,0,de,Ce,ue.data);x.generateMipmaps=!1}else De?(Fe&&t.texStorage2D(i.TEXTURE_2D,he,pe,te.width,te.height),I&&V(x,te,de,Ce)):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,de,Ce,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,pe,ke[0].width,ke[0].height,te.depth);for(let j=0,fe=ke.length;j<fe;j++)if(ue=ke[j],x.format!==Kn)if(de!==null)if(De){if(I)if(x.layerUpdates.size>0){const ye=Ku(ue.width,ue.height,x.format,x.type);for(const re of x.layerUpdates){const Pe=ue.data.subarray(re*ye/ue.data.BYTES_PER_ELEMENT,(re+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,re,ue.width,ue.height,1,de,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ue.width,ue.height,te.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,pe,ue.width,ue.height,te.depth,0,ue.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ue.width,ue.height,te.depth,de,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,pe,ue.width,ue.height,te.depth,0,de,Ce,ue.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&Fe&&t.texStorage2D(i.TEXTURE_2D,he,pe,ke[0].width,ke[0].height);for(let j=0,fe=ke.length;j<fe;j++)ue=ke[j],x.format!==Kn?de!==null?De?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,j,pe,ue.width,ue.height,0,ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue.width,ue.height,de,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,j,pe,ue.width,ue.height,0,de,Ce,ue.data)}else if(x.isDataArrayTexture)if(De){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,pe,te.width,te.height,te.depth),I)if(x.layerUpdates.size>0){const j=Ku(te.width,te.height,x.format,x.type);for(const fe of x.layerUpdates){const ye=te.data.subarray(fe*j/te.data.BYTES_PER_ELEMENT,(fe+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,de,Ce,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,de,Ce,te.data);else if(x.isData3DTexture)De?(Fe&&t.texStorage3D(i.TEXTURE_3D,he,pe,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,de,Ce,te.data);else if(x.isFramebufferTexture){if(Fe)if(De)t.texStorage2D(i.TEXTURE_2D,he,pe,te.width,te.height);else{let j=te.width,fe=te.height;for(let ye=0;ye<he;ye++)t.texImage2D(i.TEXTURE_2D,ye,pe,j,fe,0,de,Ce,null),j>>=1,fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),h.add(x),j.onpaint=fe=>{const ye=fe.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const ye=i.RGBA,re=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,re,Pe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(De&&Fe){const j=at(ke[0]);t.texStorage2D(i.TEXTURE_2D,he,pe,j.width,j.height)}for(let j=0,fe=ke.length;j<fe;j++)ue=ke[j],De?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de,Ce,ue):t.texImage2D(i.TEXTURE_2D,j,pe,de,Ce,ue);x.generateMipmaps=!1}else if(De){if(Fe){const j=at(te);t.texStorage2D(i.TEXTURE_2D,he,pe,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,pe,de,Ce,te);m(x)&&S(G),ce.__version=ae.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Le(R,x,F){if(x.image.length!==6)return;const G=K(R,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const ae=n.get(Z);if(Z.version!==ae.__version||G===!0){t.activeTexture(i.TEXTURE0+F);const ce=Ke.getPrimaries(Ke.workingColorSpace),J=x.colorSpace===Zi?null:Ke.getPrimaries(x.colorSpace),te=x.colorSpace===Zi||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const de=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!de&&!Ce?pe[re]=p(x.image[re],!0,r.maxCubemapSize):pe[re]=Ce?x.image[re].image:x.image[re],pe[re]=qt(x,pe[re]);const ue=pe[0],ke=s.convert(x.format,x.colorSpace),De=s.convert(x.type),Fe=y(x.internalFormat,ke,De,x.normalized,x.colorSpace),I=x.isVideoTexture!==!0,he=ae.__version===void 0||G===!0,j=Z.dataReady;let fe=E(x,ue);Ue(i.TEXTURE_CUBE_MAP,x);let ye;if(de){I&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Fe,ue.width,ue.height);for(let re=0;re<6;re++){ye=pe[re].mipmaps;for(let Pe=0;Pe<ye.length;Pe++){const Ae=ye[Pe];x.format!==Kn?ke!==null?I?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ae.width,Ae.height,ke,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ae.width,Ae.height,ke,De,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,Ae.width,Ae.height,0,ke,De,Ae.data)}}}else{if(ye=x.mipmaps,I&&he){ye.length>0&&fe++;const re=at(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Fe,re.width,re.height)}for(let re=0;re<6;re++)if(Ce){I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,ke,De,pe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,pe[re].width,pe[re].height,0,ke,De,pe[re].data);for(let Pe=0;Pe<ye.length;Pe++){const ft=ye[Pe].image[re].image;I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,ft.width,ft.height,ke,De,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,ft.width,ft.height,0,ke,De,ft.data)}}else{I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ke,De,pe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,ke,De,pe[re]);for(let Pe=0;Pe<ye.length;Pe++){const Ae=ye[Pe];I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,ke,De,Ae.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,ke,De,Ae.image[re])}}}m(x)&&S(i.TEXTURE_CUBE_MAP),ae.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function xe(R,x,F,G,Z,ae){const ce=s.convert(F.format,F.colorSpace),J=s.convert(F.type),te=y(F.internalFormat,ce,J,F.normalized,F.colorSpace),de=n.get(x),Ce=n.get(F);if(Ce.__renderTarget=x,!de.__hasExternalTextures){const pe=Math.max(1,x.width>>ae),ue=Math.max(1,x.height>>ae);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,te,pe,ue,x.depth,0,ce,J,null):t.texImage2D(Z,ae,te,pe,ue,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,Ce.__webglTexture,0,St(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,Ce.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(R,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const G=x.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ae=M(x.stencilBuffer,Z),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(x),ae,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,R)}else{const G=x.textures;for(let Z=0;Z<G.length;Z++){const ae=G[Z],ce=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),te=y(ae.internalFormat,ce,J,ae.normalized,ae.colorSpace);kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(x),te,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(R,x,F){const G=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,x.depthTexture);const de=s.convert(x.depthTexture.format),Ce=s.convert(x.depthTexture.type);let pe;x.depthTexture.format===Fi?pe=i.DEPTH_COMPONENT24:x.depthTexture.format===Er&&(pe=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,x.width,x.height,0,de,Ce,null)}}else ee(x.depthTexture,0);const ae=Z.__webglTexture,ce=St(x),J=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,te=x.depthTexture.format===Er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fi)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ae,0);else if(x.depthTexture.format===Er)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(R){const x=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)_t(x.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?_t(x.__webglFramebuffer[0],R,0):_t(x.__webglFramebuffer,R,0)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Oe(x.__webglDepthbuffer[G],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Oe(x.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(R,x,F){const G=n.get(R);x!==void 0&&xe(G.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(R)}function ht(R){const x=R.texture,F=n.get(R),G=n.get(x);R.addEventListener("dispose",v);const Z=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),ae){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let te=0;te<x.mipmaps.length;te++)F.__webglFramebuffer[J][te]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,te=Z.length;J<te;J++){const de=n.get(Z[J]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&kt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const de=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),pe=y(te.internalFormat,de,Ce,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),ue=St(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)xe(F.__webglFramebuffer[J][te],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(F.__webglFramebuffer[J],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,te=Z.length;J<te;J++){const de=Z[J],Ce=n.get(de);let pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ce.__webglTexture),Ue(pe,de),xe(F.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+J,pe,0),m(de)&&S(pe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,G.__webglTexture),Ue(J,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)xe(F.__webglFramebuffer[te],R,x,i.COLOR_ATTACHMENT0,J,te);else xe(F.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,J,0);m(x)&&S(J),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Xe(R){const x=R.textures;for(let F=0,G=x.length;F<G;F++){const Z=x[F];if(m(Z)){const ae=T(R),ce=n.get(Z).__webglTexture;t.bindTexture(ae,ce),S(ae),t.unbindTexture()}}}const vt=[],Ot=[];function ln(R){if(R.samples>0){if(kt(R)===!1){const x=R.textures,F=R.width,G=R.height;let Z=i.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(R),J=x.length>1;if(J)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<x.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Ce=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,Z,i.NEAREST),l===!0&&(vt.length=0,Ot.length=0,vt.push(i.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(vt.push(ae),Ot.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Ce=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function St(R){return Math.min(r.maxSamples,R.samples)}function kt(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){const x=a.render.frame;d.get(R)!==x&&(d.set(R,x),R.update())}function qt(R,x){const F=R.colorSpace,G=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==bo&&F!==Zi&&(Ke.getTransfer(F)===ot?(G!==Kn||Z!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",F)),x}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=k,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=We,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VS(i,e){function t(n,r=Zi){let s;const a=Ke.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ep)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jf)return i.BYTE;if(n===Qf)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===wd)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===tp)return i.ALPHA;if(n===np)return i.RGB;if(n===Kn)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===ip)return i.RED;if(n===Rd)return i.RED_INTEGER;if(n===Pr)return i.RG;if(n===Cd)return i.RG_INTEGER;if(n===kd)return i.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===_c||n===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===yc||n===Sc||n===bc||n===Mc||n===yo||n===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xc||n===yc)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return s.COMPRESSED_R11_EAC;if(n===Mc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return s.COMPRESSED_RG11_EAC;if(n===Ec)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===kc||n===Lc||n===Pc||n===Dc||n===Ic||n===Uc||n===Nc||n===Fc||n===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===zc||n===Hc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Bc)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Gc||n===So||n===$c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$S=`
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

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:GS,fragmentShader:$S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qS extends Nr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new WS,m={},S=t.getContextAttributes();let T=null,y=null;const M=[],E=[],A=new je;let v=null,w=null;const C=new Bn;C.viewport=new wt;const D=new Bn;D.viewport=new wt;const N=[C,D],O=new j_;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=M[L];return V===void 0&&(V=new hl,M[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=M[L];return V===void 0&&(V=new hl,M[L]=V),V.getGripSpace()},this.getHand=function(L){let V=M[L];return V===void 0&&(V=new hl,M[L]=V),V.getHandSpace()};function X(L){const V=E.indexOf(L.inputSource);if(V===-1)return;const le=M[V];le!==void 0&&(le.update(L.inputSource,L.frame,c||a),le.dispatchEvent({type:L.type,data:L.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let L=0;L<M.length;L++){const V=E[L];V!==null&&(E[L]=null,M[L].disconnect(V))}k=null,B=null,p.reset();for(const L in m)delete m[L];if(e.setRenderTarget(T),f=null,u=null,h=null,r=null,y=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){const L=w.camera;L.fov=w.fov,L.zoom=w.zoom,L.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Le=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?Er:Fi,Le=S.stencil?la:mi);const Oe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Oe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Zn(u.textureWidth,u.textureHeight,{format:Kn,type:Rn,depthTexture:new ua(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(L){for(let V=0;V<L.removed.length;V++){const le=L.removed[V],Le=E.indexOf(le);Le>=0&&(E[Le]=null,M[Le].disconnect(le))}for(let V=0;V<L.added.length;V++){const le=L.added[V];let Le=E.indexOf(le);if(Le===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=E.length){E.push(le),Le=Oe;break}else if(E[Oe]===null){E[Oe]=le,Le=Oe;break}if(Le===-1)break}const xe=M[Le];xe&&xe.connect(le)}}const Y=new W,Q=new W;function ne(L,V,le){Y.setFromMatrixPosition(V.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);const Le=Y.distanceTo(Q),xe=V.projectionMatrix.elements,Oe=le.projectionMatrix.elements,_t=xe[14]/(xe[10]-1),Ve=xe[14]/(xe[10]+1),We=(xe[9]+1)/xe[5],ht=(xe[9]-1)/xe[5],Xe=(xe[8]-1)/xe[0],vt=(Oe[8]+1)/Oe[0],Ot=_t*Xe,ln=_t*vt,St=Le/(-Xe+vt),kt=St*-Xe;if(V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(kt),L.translateZ(St),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),xe[10]===-1)L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const U=_t+St,qt=Ve+St,at=Ot-kt,R=ln+(Le-kt),x=We*Ve/qt*U,F=ht*Ve/qt*U;L.projectionMatrix.makePerspective(at,R,x,F,U,qt),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function Se(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let V=L.near,le=L.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(le=p.depthFar)),O.near=D.near=C.near=V,O.far=D.far=C.far=le,(k!==O.near||B!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,B=O.far),O.layers.mask=L.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const Le=L.parent,xe=O.cameras;Se(O,Le);for(let Oe=0;Oe<xe.length;Oe++)Se(xe[Oe],Le);xe.length===2?ne(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),w===null&&L.isPerspectiveCamera&&(w={camera:L,fov:L.fov,zoom:L.zoom}),Te(L,O,Le)};function Te(L,V,le){le===null?L.matrix.copy(V.matrixWorld):(L.matrix.copy(le.matrixWorld),L.matrix.invert(),L.matrix.multiply(V.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=qc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(L){l=L,u!==null&&(u.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(L){return m[L]};let $e=null;function Ue(L,V){if(d=V.getViewerPose(c||a),g=V,d!==null){const le=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Le=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Ve=0;Ve<le.length;Ve++){const We=le[Ve];let ht=null;if(f!==null)ht=f.getViewport(We);else{const vt=h.getViewSubImage(u,We);ht=vt.viewport,Ve===0&&(e.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(y))}let Xe=N[Ve];Xe===void 0&&(Xe=new Bn,Xe.layers.enable(Ve),Xe.viewport=new wt,N[Ve]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Ve===0&&(O.matrix.copy(Xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Xe)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ve=h.getDepthInformation(le[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,r.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<le.length;Ve++){const We=le[Ve].camera;if(We){let ht=m[We];ht||(ht=new hp,m[We]=ht);const Xe=h.getCameraImage(We);ht.sourceTexture=Xe}}}}for(let le=0;le<M.length;le++){const Le=E[le],xe=M[le];Le!==null&&xe!==void 0&&xe.update(Le,V,c||a)}$e&&$e(L,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const K=new vp;K.setAnimationLoop(Ue),this.setAnimationLoop=function(L){$e=L},this.dispose=function(){}}}const XS=new Tt,wp=new Ne;wp.set(-1,0,0,0,1,0,0,0,1);function YS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(wp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function KS(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;n.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(p(y),E=d(y),r[y.id]=E,y.addEventListener("dispose",S));const A=M.program;n.updateUBOMapping(y,A);const v=e.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function d(y){const M=h();y.__bindingPointIndex=M;const E=i.createBuffer(),A=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=r[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,w=E.length;v<w;v++){const C=E[v];if(Array.isArray(C))for(let D=0,N=C.length;D<N;D++)f(C[D],v,D,A);else f(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,E,A){if(_(y,M,E,A)===!0){const v=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){const N=w[D],O=m(N);g(N,y.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function _(y,M,E,A){const v=y.value,w=M+"_"+E;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{const C=A[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(y){const M=y.uniforms;let E=0;const A=16;for(let w=0,C=M.length;w<C;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,O=D.length;N<O;N++){const k=D[N],B=Array.isArray(k.value)?k.value:[k.value];for(let X=0,$=B.length;X<$;X++){const ee=B[X],Y=m(ee),Q=E%A,ne=Q%Y.boundary,Se=Q+ne;E+=ne,Se!==0&&A-Se<Y.storage&&(E+=A-Se),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const v=E%A;return v>0&&(E+=A-v),y.__size=E,y.__cache={},this}function m(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){const M=y.target;M.removeEventListener("dispose",S);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function T(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}const ZS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function JS(){return ni===null&&(ni=new N_(ZS,16,16,Pr,gi),ni.name="DFG_LUT",ni.minFilter=Qt,ni.magFilter=Qt,ni.wrapS=Ri,ni.wrapT=Ri,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class QS{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([kd,Cd,Rd]),m=new Set([Rn,mi,oa,la,Td,Ad]),S=new Uint32Array(4),T=new Int32Array(4),y=new W;let M=null,E=null;const A=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,N=null,O=null,k=null,B=null;this._outputColorSpace=En;let X=0,$=0,ee=null,Y=-1,Q=null;const ne=new wt,Se=new wt;let Te=null;const $e=new nt(0);let Ue=0,K=t.width,L=t.height,V=1,le=null,Le=null;const xe=new wt(0,0,K,L),Oe=new wt(0,0,K,L);let _t=!1;const Ve=new Ud;let We=!1,ht=!1;const Xe=new Tt,vt=new W,Ot=new wt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function kt(){return ee===null?V:1}let U=n;function qt(b,P){return t.getContext(b,P)}let at,R,x,F,G,Z,ae,ce,J,te,de,Ce,pe,ue,ke,De,Fe,I,he,j,fe,ye,re;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Md}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),U===null){const P="webgl2";if(U=qt(P,b),U===null)throw qt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(b){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),it("WebGLRenderer: "+b.message),b}function Pe(){at=new Jx(U),at.init(),fe=new VS(U,at),R=new Hx(U,at,e,fe),x=new zS(U,at),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=U.createFramebuffer(),k=U.createFramebuffer(),B=U.createFramebuffer(),F=new ey(U),G=new TS,Z=new HS(U,at,x,G,R,fe,F),ae=new Zx(C),ce=new n0(U),ye=new Bx(U,ce),J=new Qx(U,ce,F,ye),te=new ny(U,J,ce,ye,F),I=new ty(U,R,Z),ke=new Vx(G),de=new wS(C,ae,at,R,ye,ke),Ce=new YS(C,G),pe=new RS,ue=new IS(at),Fe=new Ox(C,ae,x,te,g,l),De=new BS(C,te,R),re=new KS(U,F,R,x),he=new zx(U,at,F),j=new jx(U,at,F),F.programs=de.programs,C.capabilities=R,C.extensions=at,C.properties=G,C.renderLists=pe,C.shadowMap=De,C.state=x,C.info=F}_!==Rn&&(w=new ry(_,t.width,t.height,o,r,s));const Ae=new qS(C,U);this.xr=Ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(K,L,!1))},this.getSize=function(b){return b.set(K,L)},this.setSize=function(b,P,q=!0){if(Ae.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,L=P,t.width=Math.floor(b*V),t.height=Math.floor(P*V),q===!0&&(t.style.width=b+"px",t.style.height=P+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(K*V,L*V).floor()},this.setDrawingBufferSize=function(b,P,q){K=b,L=P,V=q,t.width=Math.floor(b*q),t.height=Math.floor(P*q),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(_===Rn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,P,q,z){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,P,q,z),x.viewport(ne.copy(xe).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,P,q,z){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,P,q,z),x.scissor(Se.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){x.setScissorTest(_t=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,q=!0){let z=0;if(b){let H=!1;if(ee!==null){const ve=ee.texture.format;H=p.has(ve)}if(H){const ve=ee.texture.type,Me=m.has(ve),_e=Fe.getClearColor(),Ee=Fe.getClearAlpha(),Re=_e.r,Be=_e.g,qe=_e.b;Me?(S[0]=Re,S[1]=Be,S[2]=qe,S[3]=Ee,U.clearBufferuiv(U.COLOR,0,S)):(T[0]=Re,T[1]=Be,T[2]=qe,T[3]=Ee,U.clearBufferiv(U.COLOR,0,T))}else z|=U.COLOR_BUFFER_BIT}P&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),Fe.dispose(),pe.dispose(),ue.dispose(),G.dispose(),ae.dispose(),te.dispose(),ye.dispose(),re.dispose(),de.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Wd),Ae.removeEventListener("sessionend",qd),dr.stop()};function ft(b){b.preventDefault(),Tu("WebGLRenderer: Context Lost."),D=!0}function rt(){Tu("WebGLRenderer: Context Restored."),D=!1;const b=F.autoReset,P=De.enabled,q=De.autoUpdate,z=De.needsUpdate,H=De.type;Pe(),F.autoReset=b,De.enabled=P,De.autoUpdate=q,De.needsUpdate=z,De.type=H}function Gn(b){it("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function jn(b){const P=b.target;P.removeEventListener("dispose",jn),Jp(P)}function Jp(b){Qp(b),G.remove(b)}function Qp(b){const P=G.get(b).programs;P!==void 0&&(P.forEach(function(q){de.releaseProgram(q)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,q,z,H,ve){P===null&&(P=ln);const Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=tm(b,P,q,z,H);x.setMaterial(z,Me);let Ee=q.index,Re=1;if(z.wireframe===!0){if(Ee=J.getWireframeAttribute(q),Ee===void 0)return;Re=2}const Be=q.drawRange,qe=q.attributes.position;let we=Be.start*Re,st=(Be.start+Be.count)*Re;ve!==null&&(we=Math.max(we,ve.start*Re),st=Math.min(st,(ve.start+ve.count)*Re)),Ee!==null?(we=Math.max(we,0),st=Math.min(st,Ee.count)):qe!=null&&(we=Math.max(we,0),st=Math.min(st,qe.count));const Lt=st-we;if(Lt<0||Lt===1/0)return;ye.setup(H,z,_e,q,Ee);let gt,ct=he;if(Ee!==null&&(gt=ce.get(Ee),ct=j,ct.setIndex(gt)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*kt()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(H.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*kt()),H.isLineSegments?ct.setMode(U.LINES):H.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else H.isPoints?ct.setMode(U.POINTS):H.isSprite&&ct.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,be=H._multiDrawCounts,nn=H._multiDrawCount,et=Ee?ce.get(Ee).bytesPerElement:1,In=G.get(z).currentProgram.getUniforms();for(let ei=0;ei<nn;ei++)In.setValue(U,"_gl_DrawID",ei),ct.render(Xt[ei]/et,be[ei])}else if(H.isInstancedMesh)ct.renderInstances(we,Lt,H.count);else if(q.isInstancedBufferGeometry){const Xt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,Xt);ct.renderInstances(we,Lt,be)}else ct.render(we,Lt)};function $d(b,P,q,z){N!==null&&b.isNodeMaterial&&N.setObject(z,b),We===!0&&ke.setState(b,q,!1),b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,ba(b,P,z),b.side=kr,b.needsUpdate=!0,ba(b,P,z),b.side=ci):ba(b,P,z)}this.compile=function(b,P,q=null){q===null&&(q=b),N!==null&&N.renderStart(b,P,q),E=ue.get(q),E.init(P),v.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),b!==q&&b.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ht=this.localClippingEnabled,We=ke.init(this.clippingPlanes,ht),We===!0&&ke.setGlobalState(this.clippingPlanes,P),N!==null&&De.render(E.state.shadowsArray,q,P);const z=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const _e=ve[Me];$d(_e,q,P,H),z.add(_e)}else $d(ve,q,P,H),z.add(ve)}),E=v.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(b,P,q=null){const z=this.compile(b,P,q);return new Promise(H=>{function ve(){if(z.forEach(function(Me){const Ee=G.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&z.delete(Me)}),z.size===0){H(b);return}setTimeout(ve,10)}at.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let qo=null;function jp(b){qo&&qo(b)}function Wd(){dr.stop()}function qd(){dr.start()}const dr=new vp;dr.setAnimationLoop(jp),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(b){qo=b,Ae.setAnimationLoop(b),b===null?dr.stop():dr.start()},Ae.addEventListener("sessionstart",Wd),Ae.addEventListener("sessionend",qd),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,P);const q=Ae.enabled===!0&&Ae.isPresenting===!0,z=w!==null&&(ee===null||q)&&w.begin(C,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(P),P=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,P,ee),E=ue.get(b,v.length),E.init(P),E.state.textureUnits=Z.getTextureUnits(),v.push(E),Xe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ve.setFromProjectionMatrix(Xe,hi,P.reversedDepth),ht=this.localClippingEnabled,We=ke.init(this.clippingPlanes,ht),M=pe.get(b,A.length),M.init(),A.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Xo(Me,P,-1/0,C.sortObjects)}Xo(b,P,0,C.sortObjects),M.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&M.sort(le,Le),St=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,St&&Fe.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&ke.beginShadows();const H=E.state.shadowsArray;if(De.render(H,b,P),We===!0&&ke.endShadows(),(z&&w.hasRenderPass())===!1){const Me=M.opaque,_e=M.transmissive;if(E.setupLights(),P.isArrayCamera){const Ee=P.cameras;if(_e.length>0)for(let Re=0,Be=Ee.length;Re<Be;Re++){const qe=Ee[Re];Yd(Me,_e,b,qe)}St&&Fe.render(b);for(let Re=0,Be=Ee.length;Re<Be;Re++){const qe=Ee[Re];Xd(M,b,qe,qe.viewport)}}else _e.length>0&&Yd(Me,_e,b,P),St&&Fe.render(b),Xd(M,b,P)}ee!==null&&$===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),z&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,P),ye.resetDefaultState(),Y=-1,Q=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),We===!0&&ke.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function Xo(b,P,q,z){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ve)){z&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xe);const Me=te.update(b),_e=b.material;_e.visible&&M.push(b,Me,_e,q,Ot.z,null,P)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ve))){const Me=te.update(b),_e=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ot.copy(Me.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Xe)),Array.isArray(_e)){const Ee=Me.groups;for(let Re=0,Be=Ee.length;Re<Be;Re++){const qe=Ee[Re],we=_e[qe.materialIndex];we&&we.visible&&M.push(b,Me,we,q,Ot.z,qe,P)}}else _e.visible&&M.push(b,Me,_e,q,Ot.z,null,P)}}const ve=b.children;for(let Me=0,_e=ve.length;Me<_e;Me++)Xo(ve[Me],P,q,z)}function Xd(b,P,q,z){const{opaque:H,transmissive:ve,transparent:Me}=b;E.setupLightsView(q),We===!0&&ke.setGlobalState(C.clippingPlanes,q),z&&x.viewport(ne.copy(z)),H.length>0&&Sa(H,P,q),ve.length>0&&Sa(ve,P,q),Me.length>0&&Sa(Me,P,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Yd(b,P,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const we=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Zn(1,1,{generateMipmaps:!0,type:we?gi:Rn,minFilter:Mr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=E.state.transmissionRenderTarget[z.id],Me=z.viewport||ne;ve.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const _e=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor($e),Ue=C.getClearAlpha(),Ue<1&&C.setClearColor(16777215,.5),C.clear(),St&&Fe.render(q);const Be=C.toneMapping;C.toneMapping=fi;const qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),We===!0&&ke.setGlobalState(C.clippingPlanes,z),Sa(b,q,z),Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve),at.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let st=0,Lt=P.length;st<Lt;st++){const gt=P[st],{object:ct,geometry:Xt,material:be,group:nn}=gt;if(be.side===ci&&ct.layers.test(z.layers)){const et=be.side;be.side=_n,be.needsUpdate=!0,Kd(ct,q,z,Xt,be,nn),be.side=et,be.needsUpdate=!0,we=!0}}we===!0&&(Z.updateMultisampleRenderTarget(ve),Z.updateRenderTargetMipmap(ve))}C.setRenderTarget(_e,Ee,Re),C.setClearColor($e,Ue),qe!==void 0&&(z.viewport=qe),C.toneMapping=Be}function Sa(b,P,q){const z=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ve=b.length;H<ve;H++){const Me=b[H],{object:_e,geometry:Ee,group:Re}=Me;let Be=Me.material;Be.allowOverride===!0&&z!==null&&(Be=z),_e.layers.test(q.layers)&&Kd(_e,P,q,Ee,Be,Re)}}function Kd(b,P,q,z,H,ve){N!==null&&H.isNodeMaterial&&N.setObject(b,H),b.onBeforeRender(C,P,q,z,H,ve),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(C,P,q,z,b,ve),H.transparent===!0&&H.side===ci&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,C.renderBufferDirect(q,P,z,H,b,ve),H.side=kr,H.needsUpdate=!0,C.renderBufferDirect(q,P,z,H,b,ve),H.side=ci):C.renderBufferDirect(q,P,z,H,b,ve),b.onAfterRender(C,P,q,z,H,ve)}function ba(b,P,q){P.isScene!==!0&&(P=ln);const z=G.get(b),H=E.state.lights,ve=E.state.shadowsArray,Me=H.state.version,_e=de.getParameters(b,H.state,ve,P,q,E.state.lightProbeGridArray),Ee=de.getProgramCacheKey(_e);let Re=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=ae.get(b.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",jn),Re=new Map,z.programs=Re);let qe=Re.get(Ee);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===Me)return Jd(b,_e),qe}else _e.uniforms=de.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,q,_e),b.onBeforeCompile(_e,C),qe=de.acquireProgram(_e,Ee),Re.set(Ee,qe),z.uniforms=_e.uniforms;const we=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ke.uniform),Jd(b,_e),z.needsLights=im(b),z.lightsStateVersion=Me,z.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=qe,z.uniformsList=null,qe}function Zd(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=oo.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Jd(b,P){const q=G.get(b);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function em(b,P){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let q=0,z=b.length;q<z;q++){const H=b[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function tm(b,P,q,z,H){P.isScene!==!0&&(P=ln),Z.resetTextureUnits();const ve=P.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,_e=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ke.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=ae.get(z.envMap||Me,Ee),Be=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,Lt=!!q.morphAttributes.color;let gt=fi;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(gt=C.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=ct!==void 0?ct.length:0,be=G.get(z),nn=E.state.lights;if(We===!0&&(ht===!0||b!==Q)){const pt=b===Q&&z.id===Y;ke.setState(z,b,pt)}let et=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==nn.state.version||be.outputColorSpace!==_e||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Re||z.fog===!0&&be.fog!==ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ke.numPlanes||be.numIntersection!==ke.numIntersection)||be.vertexAlphas!==Be||be.vertexTangents!==qe||be.morphTargets!==we||be.morphNormals!==st||be.morphColors!==Lt||be.toneMapping!==gt||be.morphTargetsCount!==Xt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,be.__version=z.version);let In=be.currentProgram;et===!0&&(In=ba(z,P,H),N&&z.isNodeMaterial&&N.onUpdateProgram(z,In,be));let ei=!1,Bi=!1,Or=!1;const lt=In.getUniforms(),Rt=be.uniforms;if(x.useProgram(In.program)&&(ei=!0,Bi=!0,Or=!0),z.id!==Y&&(Y=z.id,Bi=!0),be.needsLights){const pt=em(E.state.lightProbeGridArray,H);be.lightProbeGrid!==pt&&(be.lightProbeGrid=pt,Bi=!0)}if(ei||Q!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",b.projectionMatrix),lt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Hi=lt.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,vt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,Bi=!0,Or=!0)}if(be.needsLights&&(nn.state.sunShadowMap.length>0&&lt.setValue(U,"sunShadowMap",nn.state.sunShadowMap,Z),nn.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,Z),nn.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",nn.state.spotShadowMap,Z),nn.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",nn.state.pointShadowMap,Z)),H.isSkinnedMesh){lt.setOptional(U,H,"bindMatrix"),lt.setOptional(U,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),lt.setValue(U,"boneTexture",pt.boneTexture,Z))}H.isBatchedMesh&&(lt.setOptional(U,H,"batchingTexture"),lt.setValue(U,"batchingTexture",H._matricesTexture,Z),lt.setOptional(U,H,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",H._indirectTexture,Z),lt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",H._colorsTexture,Z));const zi=q.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&I.update(H,q,In),(Bi||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,lt.setValue(U,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Rt.envMapIntensity.value=P.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=JS()),Bi){if(lt.setValue(U,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&nm(Rt,Or),ve&&z.fog===!0&&Ce.refreshFogUniforms(Rt,ve),Ce.refreshMaterialUniforms(Rt,z,V,L,E.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){const pt=be.lightProbeGrid;Rt.probesSH.value=pt.texture,Rt.probesMin.value.copy(pt.boundingBox.min),Rt.probesMax.value.copy(pt.boundingBox.max),Rt.probesResolution.value.copy(pt.resolution)}oo.upload(U,Zd(be),Rt,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(oo.upload(U,Zd(be),Rt,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(U,"center",H.center),lt.setValue(U,"modelViewMatrix",H.modelViewMatrix),lt.setValue(U,"normalMatrix",H.normalMatrix),lt.setValue(U,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const pt=z.uniformsGroups;for(let Hi=0,Br=pt.length;Hi<Br;Hi++){const jd=pt[Hi];re.update(jd,In),re.bind(jd,In)}}return In}function nm(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.sunLights.needsUpdate=P,b.sunLightShadows.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function im(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,P,q){const z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=P,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){const q=G.get(b);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,q=0){ee=b,X=P,$=q;let z=null,H=!1,ve=!1;if(b){const _e=G.get(b);if(_e.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),ne.copy(b.viewport),Se.copy(b.scissor),Te=b.scissorTest,x.viewport(ne),x.scissor(Se),x.setScissorTest(Te),Y=-1;return}else if(_e.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(_e.__hasExternalTextures)Z.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(_e.__boundDepthTexture!==Be){if(Be!==null&&G.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Re=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[P])?z=Re[P][q]:z=Re[P],H=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[q]:z=Re,ne.copy(b.viewport),Se.copy(b.scissor),Te=b.scissorTest}else ne.copy(xe).multiplyScalar(V).floor(),Se.copy(Oe).multiplyScalar(V).floor(),Te=_t;if(q!==0&&(z=O),x.bindFramebuffer(U.FRAMEBUFFER,z)&&x.drawBuffers(b,z),x.viewport(ne),x.scissor(Se),x.setScissorTest(Te),H){const _e=G.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,_e.__webglTexture,q)}else if(ve){const _e=P;for(let Ee=0;Ee<b.textures.length;Ee++){const Re=G.get(b.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,q,_e)}}else if(b!==null&&q!==0){const _e=G.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,q)}Y=-1};function Qd(b){const P=G.get(b);return(P.__readFormat!==b.format||P.__readType!==b.type)&&(P.__readFormat=b.format,P.__readType=b.type,P.__formatReadable=R.textureFormatReadable(b.format),P.__typeReadable=R.textureTypeReadable(b.type)),P}this.readRenderTargetPixels=function(b,P,q,z,H,ve,Me,_e=0){if(!(b&&b.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){x.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Re=b.textures[_e],Be=Re.format,qe=Re.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const we=Qd(Re);if(we.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-z&&q>=0&&q<=b.height-H&&U.readPixels(P,q,z,H,fe.convert(Be),fe.convert(qe),ve)}finally{const Re=ee!==null?G.get(ee).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,P,q,z,H,ve,Me,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(P>=0&&P<=b.width-z&&q>=0&&q<=b.height-H){x.bindFramebuffer(U.FRAMEBUFFER,Ee);const Re=b.textures[_e],Be=Re.format,qe=Re.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const we=Qd(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(P,q,z,H,fe.convert(Be),fe.convert(qe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Lt=ee!==null?G.get(ee).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Lt);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await c_(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(st),U.deleteSync(gt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,q=0){const z=Math.pow(2,-q),H=Math.floor(b.image.width*z),ve=Math.floor(b.image.height*z),Me=P!==null?P.x:0,_e=P!==null?P.y:0;Z.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Me,_e,H,ve),x.unbindTexture()},this.copyTextureToTexture=function(b,P,q=null,z=null,H=0,ve=0){let Me,_e,Ee,Re,Be,qe,we,st,Lt;const gt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(q!==null)Me=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Be=q.min.y,qe=q.isBox3?q.min.z:0;else{const Rt=Math.pow(2,-H);Me=Math.floor(gt.width*Rt),_e=Math.floor(gt.height*Rt),b.isDataArrayTexture?Ee=gt.depth:b.isData3DTexture?Ee=Math.floor(gt.depth*Rt):Ee=1,Re=0,Be=0,qe=0}z!==null?(we=z.x,st=z.y,Lt=z.z):(we=0,st=0,Lt=0);const ct=fe.convert(P.format),Xt=fe.convert(P.type);let be;P.isData3DTexture?(Z.setTexture3D(P,0),be=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),be=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),be=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const nn=x.getParameter(U.UNPACK_ROW_LENGTH),et=x.getParameter(U.UNPACK_IMAGE_HEIGHT),In=x.getParameter(U.UNPACK_SKIP_PIXELS),ei=x.getParameter(U.UNPACK_SKIP_ROWS),Bi=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(U.UNPACK_SKIP_ROWS,Be),x.pixelStorei(U.UNPACK_SKIP_IMAGES,qe);const Or=b.isDataArrayTexture||b.isData3DTexture,lt=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const Rt=G.get(b),zi=G.get(P),pt=G.get(Rt.__renderTarget),Hi=G.get(zi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Br=0;Br<Ee;Br++)Or&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(b).__webglTexture,H,qe+Br),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(P).__webglTexture,ve,Lt+Br)),U.blitFramebuffer(Re,Be,Me,_e,we,st,Me,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||G.has(b)){const Rt=G.get(b),zi=G.get(P);x.bindFramebuffer(U.READ_FRAMEBUFFER,k),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let pt=0;pt<Ee;pt++)Or?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,H,qe+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,H),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zi.__webglTexture,ve,Lt+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zi.__webglTexture,ve),H!==0?U.blitFramebuffer(Re,Be,Me,_e,we,st,Me,_e,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(be,ve,we,st,Lt+pt,Re,Be,Me,_e):U.copyTexSubImage2D(be,ve,we,st,Re,Be,Me,_e);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(be,ve,we,st,Lt,Me,_e,Ee,ct,Xt,gt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(be,ve,we,st,Lt,Me,_e,Ee,ct,gt.data):U.texSubImage3D(be,ve,we,st,Lt,Me,_e,Ee,ct,Xt,gt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,we,st,Me,_e,ct,Xt,gt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,we,st,gt.width,gt.height,ct,gt.data):U.texSubImage2D(U.TEXTURE_2D,ve,we,st,Me,_e,ct,Xt,gt);x.pixelStorei(U.UNPACK_ROW_LENGTH,nn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(U.UNPACK_SKIP_PIXELS,In),x.pixelStorei(U.UNPACK_SKIP_ROWS,ei),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Bi),ve===0&&P.generateMipmaps&&U.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,$=0,ee=null,x.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const jS=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],Zc=["pitch","yaw","roll","bend","x","y","z"];function lo(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function Tp(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function eb(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,r={adi:Tp(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(r.palUzay=!0),e.palDef===!0&&(r.palDef=!0);const s=lo(e.loopBas);s!==null&&s>=0&&(r.loopBas=s);const a=Array.isArray(e.moves)?e.moves:[];let o={};for(const l of a){if(typeof l?.tick!="number")continue;const c=l.tick;for(const d of jS){const h=l[d];if(!h||typeof h!="object")continue;let u=r.kemikler.get(d);u||(u={},r.kemikler.set(d,u));for(const g of Zc){const _=lo(h[g]);_!==null&&(u[g]||(u[g]=[]),u[g].push({t:c,v:_,easing:String(l.easing||"LINEAR").toUpperCase()}))}const f=lo(h.turn);f!==null&&f!==0&&(o[d]=(o[d]||0)+f*360,u.turn||(u.turn=[]),u.turn.push({t:c,v:o[d],easing:"LINEAR"}))}}return r.palUzay===!0&&r.palDef!==!0&&ib(r),r}const tb={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function nb(i){if(i.length===0)return 0;const e=[...i].sort((n,r)=>n-r),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function ib(i){for(const[e,t]of Object.entries(tb)){const n=i.kemikler.get(e);if(!n)continue;let r=0,s=0;for(const a of["x","y"]){const o=n[a];if(!o||o.length===0)continue;r++;const l=t[a==="x"?0:1];Math.abs(nb(o.map(c=>c.v))-l)<=2&&s++}r===0||s!==r||["x","y","z"].forEach((a,o)=>{const l=n[a];if(l)for(const c of l)c.v-=t[o]})}i.palDef=!0}function rb(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,r={adi:Tp(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const a of Object.keys(s)){const o=s[a];if(!o||typeof o!="object")continue;const l={},c=(d,h,u)=>{if(!d)return;const f=[],g=(_,p)=>{const m=lo(p);m!==null&&f.push({t:_,v:m,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;g(p,Array.isArray(_?.vector)?_.vector[h]:void 0)}else Array.isArray(d.vector)?g(0,d.vector[h]):typeof d=="number"&&g(0,d);f.length&&(l[u]=f)};c(o.rotation,0,"pitch"),c(o.rotation,1,"yaw"),c(o.rotation,2,"roll"),c(o.position,0,"x"),c(o.position,1,"y"),c(o.position,2,"z"),Object.keys(l).length&&r.kemikler.set(a,l)}return r}function sb(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return eb(e);if(e?.animations)return rb(e);throw new Error("bilinmeyen emote formatı")}function ab(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function vh(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],r=i[t],s=r.t-n.t,a=s<=0?1:(e-n.t)/s;return n.v+(r.v-n.v)*ab(r.easing)(a)}function Ap(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const xh={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:Ap(),kokDon:[0,0,0],kokKonum:[0,0,0]},Rp={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},ob=Rp,lb={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function yh(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const f=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%f}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),r=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:r,konum:Ap(),kokDon:[0,0,0],kokKonum:[0,0,0]},a=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],l=Array.from({length:6},o),c=o(),d=(f,g,_)=>{f[g==="x"?0:g==="y"?1:2]=_};for(const[f,g]of i.kemikler){if(r&&f==="body"){for(const m of Zc){const S=vh(g[m],n);S!==null&&(m==="pitch"?s.kokDon[0]=S:m==="yaw"?s.kokDon[1]=S:m==="roll"?s.kokDon[2]=-S:m==="bend"?s.bend[4]=S:(m==="x"||m==="y"||m==="z")&&d(c,m,S))}continue}const _=Rp[f],p=_!==void 0?s[a[_]]:null;for(const m of Zc){const S=vh(g[m],n);if(S!==null){if(p){if(m==="pitch")p[0]=S;else if(m==="yaw")p[1]=S;else if(m==="roll")p[2]=r?-S:S;else if(m==="x"||m==="y"||m==="z"){const T=ob[f];T!==void 0&&d(l[T],m,S)}}if(m==="bend"){const T=lb[f];T!==void 0&&(s.bend[T]+=S)}}}}const h=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(r){for(let f=0;f<6;f++){const g=l[f];s.konum[f]=[g[0]??0,g[1]??0,-(g[2]??0)]}return s.kokKonum=[c[0]??0,c[1]??0,-(c[2]??0)],s}const u=[1,0,1,1,0,0];for(let f=0;f<6;f++){const g=l[f],_=s.konum[f];for(let p=0;p<3;p++){if(g[p]===void 0){_[p]=0;continue}let m=g[p];p===1&&u[f]&&(m+=24),_[p]=m-h[f][p]}}return s}function Nn(i,e,t,n,r){return[{x:i+r,y:e,w:t,h:r},{x:i+r+t,y:e,w:t,h:r},{x:i,y:e+r,w:r,h:n},{x:i+r,y:e+r,w:t,h:n},{x:i+r+t,y:e+r,w:r,h:n},{x:i+r+t+r,y:e+r,w:t,h:n}]}const Sh=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:Nn(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:Nn(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:Nn(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:Nn(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:Nn(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:Nn(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:Nn(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:Nn(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:Nn(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:Nn(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:Nn(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:Nn(0,48,4,12,4)}],co={x:1,y:1,w:10,h:16},bh={x:12,y:1,w:10,h:16},Cp=20,cb=36,db=2,ub=4,hb=1;function fb(i){const e=i?3:4,t=hb+4,n=i?t-3:t-4,r=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:r,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function kp(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function Lp(i){const e=i.getContext("2d",{willReadFrequently:!0});if(!e)return co;const t=n=>{let r=0;try{const s=e.getImageData(n.x,n.y,n.w,n.h).data;for(let a=3;a<s.length;a+=4)s[a]>8&&r++}catch{return 0}return r};return t(bh)>t(co)?bh:co}const He=1/24;function wn(i,e,t,n,r,s,a=!1){const o=i.attributes.uv,l=e*4,c=a?s:n,d=a?n:s;o.setXY(l+0,t/64,1-c/64),o.setXY(l+1,r/64,1-c/64),o.setXY(l+2,t/64,1-d/64),o.setXY(l+3,r/64,1-d/64)}function Eo(i){i.magFilter=It,i.minFilter=It,i.colorSpace=En}function Pp(i,e=!1){return i?new Xc({map:i,transparent:e,alphaTest:e?.01:0}):new Xc({color:5924466})}function Mh(i,e,t=!1){const n=new Fr(i.w*He,i.h*He,i.d*He),{u:r,v:s,w:a,h:o,d:l}=i;return e&&(wn(n,0,r+l+a,s+l,r+l+a+l,s+l+o),wn(n,1,r,s+l,r+l,s+l+o),wn(n,2,r+l,s,r+l+a,s+l),wn(n,3,r+l+a,s,r+l+a+a,s+l,!0),wn(n,4,r+l,s+l,r+l+a,s+l+o),wn(n,5,r+l+a+l,s+l,r+l+a+l+a,s+l+o),Eo(e)),new Vn(n,Pp(e,t))}function qa(i,e,t,n=!1){const r=i.h/2,{u:s,v:a,w:o,d:l}=i,c=new Fr(i.w*He,r*He,i.d*He);if(t){const d=a+l+(e?r:0),h=d+r;wn(c,0,s+l+o,d,s+l+o+l,h),wn(c,1,s,d,s+l,h),wn(c,2,s+l,a,s+l+o,a+l),e?wn(c,3,s+l+o,a,s+l+o+o,a+l,!0):wn(c,3,s+l,a,s+l+o,a+l),wn(c,4,s+l,d,s+l+o,h),wn(c,5,s+l+o+l,d,s+l+o+l+o,h),Eo(t)}return new Vn(c,Pp(t,n))}class pb{renderer=null;scene=new A_;camera=new Bn(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new e0;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinPanel=co;_bekleyenPelerin=null;canliDoku=null;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.canvas=e;try{this.renderer=new QS({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new J_(16777215,.9));const t=new Yu(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new Yu(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const r=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(r,s,!1),this.camera.aspect=r/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const r=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(r)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){this.surukleX=t.clientX,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX;this.surukleX=t.clientX,this.kameraAciHedef-=n*.008},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak)}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t;const n=this.kameraYariCap;this.camera.position.set(Math.sin(this.kameraAci)*n,this.kameraY,Math.cos(this.kameraAci)*n),this.camera.lookAt(0,.02,0)}_bekleyenSkin=null;async skin(e){let t=null;if(e?.url)try{const n=await new Gu().loadAsync(e.url);if(n.height===32){const r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d");s&&(s.imageSmoothingEnabled=!1,s.drawImage(n,0,0),t=new Ut(r))}t||(t=new Ut(n)),t.needsUpdate=!0}catch{t=null}this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1)}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),!!e?.url)try{const t=await new Gu().loadAsync(e.url),n=kp(t);this.pelerinPanel=Lp(n);const r=new Ut(n);Eo(r),r.needsUpdate=!0,this.pelerinDoku=r,this.pelerinMeshKur()}catch{}}pelerinTemizle(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null,this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;const t=new va(10*He,16*He),n=t.attributes.uv,r=this.pelerinPanel,s=r.x/64,a=(r.x+r.w)/64,o=1-1/32,l=1-17/32;n.setXY(0,s,o),n.setXY(1,a,o),n.setXY(2,s,l),n.setXY(3,a,l),n.needsUpdate=!0;const c=new Xc({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:ci}),d=new Vn(t,c);d.rotation.y=Math.PI,d.position.set(0,-8*He,0);const h=new Zt;h.position.set(0,6*He,-2.5*He),h.rotation.x=.06,h.add(d),e.add(h),this.pelerinGrup=h,this.pelerinSarkac=h}tuvalDoku(e,t){const n=new O_(e);Eo(n),n.needsUpdate=!0,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0)}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(M=>{const E=M;E.geometry&&E.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.kok=new Zt,this.kok.position.y=-.66,this.kalca=new Zt,this.kalca.position.set(0,12*He,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Zt,body:new Zt,armL:new Zt,armR:new Zt,legL:new Zt,legR:new Zt};const[n,r,s,a,o,l]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const M of[n,r,s,a,o,l])M.rotation.order="ZYX";const c=Mh({u:0,v:0,w:8,h:8,d:8},e);c.position.set(0,4*He,0),n.add(c);const d=Mh({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*He,0),n.add(d),r.position.set(0,12*He,0),r.userData.pivotPx=[0,12,0];const h=(M,E,A,v)=>{const w=qa(E,!1,e);w.position.set(v,A+E.h/4*He,0),M.add(w);const C=new Zt;C.position.set(0,A,0);const D=qa(E,!0,e);return D.position.set(v,-(E.h/4)*He,0),C.add(D),M.add(C),C},u=new Zt;u.position.set(0,-6*He,0),u.rotation.order="ZYX";const f=qa({u:16,v:16,w:8,h:12,d:4},!1,e);f.position.set(0,3*He,0),u.add(f),r.add(u);const g=qa({u:16,v:16,w:8,h:12,d:4},!0,e);g.position.set(0,-9*He,0),r.add(g);const _=new Zt;_.position.set(0,6*He,0),_.rotation.order="ZYX";const p=t?3:4;n.position.set(0,6*He,0),n.userData.pivotPx=[0,6,0],s.position.set(5*He,4*He,0),s.userData.pivotPx=[5,4,0];const m=h(s,{u:32,v:48,w:p,h:12,d:4},-4*He,He);a.position.set(-5*He,4*He,0),a.userData.pivotPx=[-5,4,0];const S=h(a,{u:40,v:16,w:p,h:12,d:4},-4*He,-He);o.position.set(1.9*He,0,0),o.userData.pivotPx=[1.9,0,0];const T=h(o,{u:16,v:48,w:4,h:12,d:4},-6*He,0);l.position.set(-1.9*He,0,0),l.userData.pivotPx=[-1.9,0,0];const y=h(l,{u:0,v:16,w:4,h:12,d:4},-6*He,0);this.bukulenler={body:u,belUst:_,armL:m,armR:S,legL:T,legR:y},_.add(n,s,a),this.kalca.add(r,_,o,l),this.scene.add(this.kok),this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin))}emoteleriKur(e){this.emoteListe=e,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),tr===this&&(tr=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=Math.min(.05,this.saat.getDelta());this.zaman+=t,this.adimla(t),this.kameraGuncelle(t),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=yh(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=xh):t=yh(this.aktif,this.tEmote)):(t=xh,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+.9+Math.random()*1.8));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin()}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,r=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(r-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const r=f_.degToRad,s=(o,l,c)=>{const d=r(l[0]),h=-r(l[1]),u=r(l[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(h-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const f=o.userData.pivotPx||[0,0,0],g=e.konum[c],_=(f[0]+g[0])*He,p=(f[1]+g[1])*He,m=(f[2]+g[2])*He;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(m-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const a=this.bukulenler;if(a){const o=(l,c)=>{const d=r(c);l.rotation.x+=(d-l.rotation.x)*t};o(a.armL,e.bend[0]),o(a.armR,e.bend[1]),o(a.legL,e.bend[2]),o(a.legR,e.bend[3]),o(a.body,e.bend[4]),o(a.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(r(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-r(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(r(o[2])-this.kalca.rotation.z)*t;const l=e.kokKonum,c=l[0]*He,d=(12+l[1])*He,h=l[2]*He;this.kalca.position.x+=(c-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(h-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this._bekleyenPelerin=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let tr=null;function xa(){return tr||(tr=new pb),window.__sahne=tr,tr}function Fd(){tr?.kapati(),tr=null,window.__sahne=null}let un=null;const mb=()=>document.documentElement.getAttribute("data-world")==="sahne",gb=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function _b(i){const e=oe.instances[0];(!un||!oe.instances.find(c=>c.id===un))&&(un=e?.id||null);const t=oe.instances.find(c=>c.id===un),n=Cs(),r=c=>!!c&&(c.includes("/")||c.includes("\\")),s=[...oe.instances].sort((c,d)=>(d.last_played||0)-(c.last_played||0)),a=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${oe.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${$t(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Go(n)}" alt="" draggable="false" ${$o(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${ie("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${ie("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Ys(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${ie("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${ie("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${ie("play")} HIZLI GİRİŞ</div>
          ${a?`
          <button class="imp-hizli-satir${Ge.activeId===a.id?" durdur":""}" id="i-hizli-oyla" ${Ge.activeId&&Ge.activeId!==a.id?'disabled data-kilitli="1"':""}>
            <b>${a.name}${Ge.activeId===a.id?" — AÇIK":""}</b>
            <small>${Ys(a.mod_loader)} · ${a.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const l=i.querySelector("#i-profil-satirlar");for(const c of o){const d=on(`
      <div class="imp-satir${Ge.activeId===c.id?" oyunda":""}" role="button" tabindex="0" data-id="${c.id}">
        <span class="imp-satir-ikon">${r(c.icon)?`<img src="${$t(c.icon)}" draggable="false" />`:`<span class="emoji">${c.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${c.name}</b>
          <small>${Ys(c.mod_loader)} · ${c.mc_version} — ${gb(c.last_played)}</small>
        </span>
        <button class="imp-oyla${Ge.activeId===c.id?" durdur":""}" ${Ge.activeId&&Ge.activeId!==c.id?'disabled data-kilitli="1"':""}
          title="${Ge.activeId===c.id?"Oyunu kapat":`${c.name} — OYNA`}">${ie(Ge.activeId===c.id?"stop":"play")} ${Ge.activeId===c.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${ie("gear")}</button>
      </div>
    `);d.addEventListener("click",h=>{const u=c.id;if(h.target.closest(".imp-diyis")){tt("instances",u);return}if(h.target.closest(".imp-oyla")){Ge.activeId===c.id&&Ul();return}un=u,tt("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",h=>h.stopPropagation()),l.appendChild(d)}l.querySelectorAll(".imp-satir").forEach(c=>{const d=c.dataset.id||"";c.querySelector(".imp-oyla")?.addEventListener("click",async h=>{if(h.stopPropagation(),Ge.activeId===d)return Ul();if(!oe.accounts.length)return vn();const{launchInstance:u}=await mt(async()=>{const{launchInstance:f}=await Promise.resolve().then(()=>yt);return{launchInstance:f}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>tt("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>tt("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{un&&tt("instances",un)}),i.querySelector("#i-ad")?.addEventListener("click",()=>vn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>tt("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>tt("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!a)return;if(Ge.activeId===a.id)return Ul();if(!oe.accounts.length)return vn();const{launchInstance:c}=await mt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>yt);return{launchInstance:d}},void 0);c(a.id)}),Dp(i,n)}async function Ul(){try{await se("cmd_kill_game")}catch{}const{refreshState:i}=await mt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>yt);return{refreshState:e}},void 0);await i(!0)}async function vb(i){const e=i.querySelector("#i-news");if(e)try{const t=await se("cmd_list_yikim_news");t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const r=on(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);r.addEventListener("click",()=>tt("news")),e.appendChild(r)}}catch{}}function xb(i){if(Fd(),mb()){_b(i),vb(i);return}const e=oe.instances[0];(!un||!oe.instances.find(d=>d.id===un))&&(un=e?.id||null);const t=oe.instances.find(d=>d.id===un),n=Cs(),r=d=>!!d&&(d.includes("/")||d.includes("\\")),s=t?r(t.icon)?`<img class="hero-inst-icon" src="${$t(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",a=t?.cover?` style="background-image:url('${$t(t.cover)}')"`:"",o=t?Ge.activeId===t.id?"warn":"ok":"off",l=oe.instances.filter(d=>d.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${t?.cover?" has-cover":""}"${a}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${Js(o)} ${s} ${t.mc_version} · ${Ys(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(oe.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(oe.sys?.total_ram_mb||16384)*100))}%"></span></div>
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
            <button class="btn ghost" id="h-manage">${ie("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${ie("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${ie("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Ge.activeId?"disabled":""}" id="h-play"
          title="${Ge.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ge.activeId?"disabled":""}>
          <span class="pr-icon">${Ge.activeId?ie("clock"):ie("play")}</span>
          <span class="pr-label">${Ge.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ge.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ge.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${ie("stop")}
          <span class="sr-label">DURDUR</span>
        </button>`:""}
      </div>`:""}
    </section>

    <!-- HAT DEFTERİ: diğer kurulumlar cetvelle bölünmüş satırlar -->
    ${l.length?`
    <section class="home-section" aria-label="Diğer kurulumlar">
      <div class="ledger">
        <div class="ledger-head">
          <span class="ledger-title">DİĞER HATLAR</span>
          <button class="btn ghost sm" id="h-all">${ie("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${Js("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${oe.config?.show_news===!1?"hidden":""}>
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
          <div class="cs-val">${ie("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const c=i.querySelector("#ledger-rows");if(c){for(const d of l){r(d.icon);const h=on(`
        <button class="ledger-row" data-id="${d.id}">
          ${Js(Ge.activeId===d.id?"warn":"ok")}
          <span class="lr-name">${d.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Ys(d.mod_loader)} ${d.mc_version}
            <span class="sep">·</span>
            Son: ${d.last_played?new Date(d.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${ie("play")}</span>
        </button>
      `);h.querySelector(".lr-play").innerHTML=ie("play"),h.addEventListener("click",async u=>{if(u.target.closest(".lr-play")){if(!oe.accounts.length)return vn();bd(h);const{launchInstance:f}=await mt(async()=>{const{launchInstance:g}=await Promise.resolve().then(()=>yt);return{launchInstance:g}},void 0);f(d.id);return}tt("instances",d.id)}),c.appendChild(h)}Sd(Array.from(c.children))}Sb(i),bb(),yb(i),Dp(i,n)}async function Dp(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=xa();n.kur(t),t.classList.add("on");try{const r=await se("cmd_get_account_skin",{id:e?.id||""});r?.dosya?await n.skin({url:$t(String(r.dosya)),slim:!!r.slim}):await n.skin(null)}catch{await n.skin(null)}try{const r=await se("cmd_list_emotes"),s=[];for(const a of r)try{s.push(sb(a.icerik))}catch{}n.emoteleriKur(s)}catch{n.emoteleriKur([])}}async function yb(i){try{const e=await se("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{mt(()=>Promise.resolve().then(()=>yt),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Ys(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Sb(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!un){tt("instances");return}if(!oe.accounts.length){vn();return}bd(i.querySelector(".play-ring"));const{launchInstance:e}=await mt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>yt);return{launchInstance:t}},void 0);e(un)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:e}=await mt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>yt);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{tt("instances",un||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>tt("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>tt("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>tt("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>vn())}async function bb(){const i=oi("#home-news");if(i)try{const e=await se("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=on(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${ie("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>tt("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Eh={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Nl(i){return Eh[i]||Eh.vanilla}let Yn=null;function Mb(i){const e=$t(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function Eb(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const r of n){const s=r.target;r.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function wb(i){if(Ci.param&&oe.instances.find(e=>e.id===Ci.param)){Yn=Ci.param,Ci.param=void 0,ha(i,Yn);return}if(Yn&&oe.instances.find(e=>e.id===Yn)){ha(i,Yn);return}wo(i)}function wo(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${ie("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${ie("plus")} Yeni Kurulum</button>
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
  `;const e=i.querySelector("#inst-grid");if(!oe.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${ie("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Ah());else{for(const t of oe.instances){const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${$t(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Ge.activeId===t.id,a=on(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?Mb(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${r}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Ip(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${Js(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${xs(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ge.activeId?"disabled":""}>
              ${Ge.activeId?`${ie("clock")} Açık`:`${ie("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${ie("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);a.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!oe.accounts.length)return vn();const{launchInstance:l}=await mt(async()=>{const{launchInstance:c}=await Promise.resolve().then(()=>yt);return{launchInstance:c}},void 0);l(t.id);return}if(o.target.closest(".card-stop")){try{await se("cmd_kill_game")}catch{}const{refreshState:l}=await mt(async()=>{const{refreshState:c}=await Promise.resolve().then(()=>yt);return{refreshState:c}},void 0);await l(!0);return}Yn=t.id,ha(i,t.id)}),e.appendChild(a)}Sd(Array.from(e.querySelectorAll(".inst-card"))),Eb(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Ah()),i.querySelector("#btn-import")?.addEventListener("click",()=>Tb().catch(()=>{})),Ab()}async function Tb(){const i=await se("cmd_pick_pack_file");if(i){ge("Paket içe aktarılıyor…","ok");try{const e=await se("cmd_import_pack_file",{path:i}),{refreshState:t}=await mt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>yt);return{refreshState:n}},void 0);await t(),ge(`${e.name||"Paket"} kuruldu!`,"ok"),tt("instances")}catch(e){ge(`Paket içe aktarılamadı: ${e}`,"err")}}}async function Ab(){const i=document.querySelector("#popular-strip");if(i)try{const e=await se("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=on(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${ie("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${ie("dl")} ${Rb(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>tt("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function Rb(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Ip(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function ha(i,e){const t=oe.instances.find(s=>s.id===e);if(!t){Yn=null,wo(i);return}const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${$t(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${ie("back")}</button>
      <div class="inst-icon xl">${r}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Ip(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${xs(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ge.activeId?"disabled":""}>${Ge.activeId?`${ie("clock")} Oyun Açık`:`${ie("play")} Oyna`}</button>
      ${Ge.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${ie("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${ie("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${ie("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${ie("mug")} Java</button>
      <button class="tab" data-tab="log">${ie("term")} Log</button>
      <button class="tab" data-tab="analytics">${ie("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${ie("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Yn=null,wo(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!oe.accounts.length)return vn();const{launchInstance:s}=await mt(async()=>{const{launchInstance:a}=await Promise.resolve().then(()=>yt);return{launchInstance:a}},void 0);s(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:s}=await mt(async()=>{const{refreshState:a}=await Promise.resolve().then(()=>yt);return{refreshState:a}},void 0);await s(!0)}),i.querySelectorAll(".tab").forEach(s=>{s.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(l=>l.classList.remove("active")),s.classList.add("active");const a=s.dataset.tab,o=i.querySelector("#tab-content");({mods:kb,content:Cb,java:Up,log:Lb,analytics:Pb,settings:Db})[a](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let Mi="resourcepacks";const wh=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function Cb(i,e){const t=()=>wh.find(r=>r.id===Mi);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let r=[];try{r=await se("cmd_list_content_files",{instanceId:e.id,kind:Mi})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${wh.map(o=>`<button class="kt ${o.id===Mi?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${ie("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${ie("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${ie("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Mi=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>se("cmd_open_content_folder",{instanceId:e.id,kind:Mi}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Mi==="resourcepacks"?"resourcepack":Mi==="shaderpacks"?"shader":"world";Ci.param=`kind:${o}`,tt("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await se("cmd_add_content_file",{instanceId:e.id,kind:Mi}),await n()}catch(o){ge(`Eklenemedi: ${o}`,"err")}});const a=i.querySelector("#content-list");if(!r.length){a.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}a.innerHTML="";for(const o of r){const l=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${$t(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,c=on(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${l}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":ya(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${ie("trash")}</button>
        </div>
      `);c.querySelector("[data-del]")?.addEventListener("click",async d=>{const h=d.currentTarget.dataset.del;if(confirm(`"${h}" silinsin mi?`))try{await se("cmd_delete_content_file",{instanceId:e.id,kind:Mi,name:h}),await n()}catch(u){ge(`Silinemedi: ${u}`,"err")}}),a.appendChild(c)}};await n()}async function kb(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await se("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await se("cmd_resolve_mod_icons",{filenames:t.map(s=>s.filename)})}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${ie("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=s=>{const a=t.filter(l=>l.filename.toLowerCase().includes(s.toLowerCase())),o=i.querySelector("#mod-list");o.innerHTML="",a.length||(o.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of a){const c=n[l.filename],d=c?`<img class="mod-logo" src="${c}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${ie("puzzle")}</span>`,h=on(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${d}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${ya(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async u=>{const f=u.currentTarget,g=f.dataset.fn,_=f.dataset.en!=="true";await se("cmd_toggle_mod",{instanceId:e.id,filename:g,enabled:_}),l.enabled=_,r(i.querySelector("#mod-search").value)}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await se("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(u=>u.filename!==l.filename),r(i.querySelector("#mod-search").value),ge("Mod silindi")}),o.appendChild(h)}};i.querySelector("#mod-search")?.addEventListener("input",s=>{r(s.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{tt("explore",e.id)}),r("")}async function Up(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await se("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",r=c=>c.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(c=>c.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${ie("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${ie("args")} Java Argüman Presetleri</h3>
        <p style="margin-bottom:12px">FPS'e doğrudan etki eden JVM ayarları. Açıklamalarını okuyarak seç.</p>
        <div class="preset-list">
          ${t.map(c=>`
            <div class="preset-row card hover ${e.java_preset_id===c.id?"sel":""}" data-id="${c.id}">
              <div class="preset-head">
                <b>${c.name}</b>
                ${e.java_preset_id===c.id?'<span class="chip">aktif</span>':""}
                <span class="chip gray">${c.recommended_ram_mb} MB öneri</span>
              </div>
              <p>${c.description}</p>
              <details><summary>JVM bayraklarını göster</summary><pre>${c.args.join(`
`).replace(/\{ram_mb\}/g,String(e.ram_mb))}</pre></details>
            </div>`).join("")}
        </div>
      </div>
      <div class="card" id="ozel-card" ${n?"":'style="opacity:0.55"'}>
        <h3>${ie("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${n?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${r(s)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const a=i.querySelector("#ram-range");a.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${a.value} MB`}),a.addEventListener("change",async()=>{await se("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(a.value)}),e.ram_mb=parseInt(a.value),ge("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(c=>{const d=c.querySelector("details");d?.addEventListener("click",h=>h.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",h=>h.stopPropagation()),c.addEventListener("click",async h=>{if(h.target.closest("details"))return;const u=c.dataset.id;await se("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const f=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(g=>g.closest(".preset-row").dataset.id));Up(i,e),i.querySelectorAll(".preset-row").forEach(g=>{f.has(g.dataset.id)&&(g.querySelector("details").open=!0)}),ge("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const c=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),h=c.value.trim(),u=h===""?null:Math.max(2,Math.min(32,parseInt(h)||12)),f=d.value.trim();await se("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:f||null}),e.view_distance=u,e.custom_vm_args=f||null,ge("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const c=i.querySelector("#ozel-args");c.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function Lb(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${ie("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),r=i.querySelector("#log-file"),s=i.querySelector("#log-search");let a="live",o=0;const l=[];let c=[];const d=(S,T)=>{n.textContent=T!==void 0&&T!==S?`${T}/${S} satır`:`${S} satır`},h=S=>{const T=document.createElement("div");return T.textContent=S,S.includes("ERROR")||S.includes("Exception")?T.classList.add("err"):S.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const S=s.value.trim().toLowerCase(),T=S?c.filter(y=>y.toLowerCase().includes(S)):c;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${S?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const y=document.createDocumentFragment();for(const M of T)y.appendChild(h(M));t.appendChild(y)}d(c.length,T.length)},f=()=>{if(a="live",c=[],t.innerHTML="",!l.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const S=document.createDocumentFragment();for(const T of l)S.appendChild(h(T));t.appendChild(S),t.scrollTop=t.scrollHeight}d(o)},g=async S=>{a=S,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{c=(await se("cmd_read_log",{instanceId:e.id,fileId:S})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await se("cmd_list_logs",{instanceId:e.id});const S=new Map;for(const T of _)S.has(T.date)||S.set(T.date,[]),S.get(T.date).push(T);for(const[T,y]of S){const M=document.createElement("optgroup");M.label=T;for(const E of y){const A=document.createElement("option");A.value=E.id;const v=E.label.startsWith("Oturum ")?"#"+(E.label.split("-").pop()||E.label):E.label;A.textContent=`${E.time!=="-"?E.time+" — ":""}${v} (${ya(E.size)})`,M.appendChild(A)}r.appendChild(M)}}catch{}Ge.activeId!==e.id&&_.length?(r.value=_[0].id,g(_[0].id)):f(),r.addEventListener("change",()=>{r.value==="live"?f():g(r.value)}),s.addEventListener("input",()=>{a!=="live"&&u()});const p=await Qn("game-log",S=>{a!=="live"&&(r.value="live",f()),t.querySelector(".log-hint")&&(t.innerHTML=""),l.push(S.payload),o++,l.length>500&&l.shift(),t.appendChild(h(S.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),m=new MutationObserver(()=>{document.body.contains(t)||(p(),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}async function Pb(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await se("cmd_get_stats")).snapshot,r=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(r/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${xs(r)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${ie("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((a,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${a.host}</span>
          <span class="chip gray">${a.visits} giriş</span>
          <span class="dur">${xs(a.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${ie("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Th(n.daily_ms).map(a=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(a.ms/Math.max(...Th(n.daily_ms).map(o=>o.ms),1)*100,a.ms?5:2)}%"></div>
            <div class="bar-lbl">${a.label}</div>
            <div class="tooltip">${a.full} — ${xs(a.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Th(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;e.push({label:r.getDate()%3===0?String(r.getDate()):"",ms:i[s]||0,full:s})}return e}async function Db(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${$t(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${ie("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${ie("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${$t(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?ie("image")+" Değiştir":ie("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${ie("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${ie("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${ie("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${ie("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const r=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,a=i.querySelector("#set-icon").value.trim();await se("cmd_rename_instance",{id:e.id,name:s}),a&&await se("cmd_set_instance_icon",{id:e.id,icon:a}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_icon",{instanceId:e.id}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(s=>s.refreshState(!0)),ge("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_cover",{instanceId:e.id}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(s=>s.refreshState(!0)),ge("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await se("cmd_set_instance_cover",{id:e.id,cover:null}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(s=>s.refreshState(!0)),ge("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>se("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>se("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await se("cmd_duplicate_instance",{id:e.id}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(s=>s.refreshState()),ge("Kurulum kopyalandı"),ha(i.parentElement,Yn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await se("cmd_delete_instance",{id:e.id}),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(s=>s.refreshState()),Yn=null,wo(i.parentElement),ge("Kurulum silindi"))})}async function Ah(){const e=(await se("cmd_list_versions")).all,t=await se("cmd_list_java_arg_presets"),n=await se("cmd_list_standard_mods"),{root:r,close:s}=(await mt(async()=>{const{openModal:c}=await Promise.resolve().then(()=>yt);return{openModal:c}},void 0)).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${e.slice(0,100).map(c=>`<option value="${c}">${c}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${Nl("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Nl("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Nl("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
      </button>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${t.map(c=>`<option value="${c.id}">${c.name} — ${c.description}</option>`).join("")}
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
      ${["performans","pvp","gorunum","yardarci"].map(c=>`
        <div class="std-cat">
          <div class="std-cat-label">${c==="performans"?"Performans":c==="pvp"?"PVP":c==="yardarci"?"Yardımcı":"Görünüm"}</div>
          <div class="std-chips">
            ${n.filter(d=>d.category===c).map(d=>`<span class="chip ${d.enabled_by_default?"":"gray"}" title="${d.description}">${d.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);let a="fabric",o=!0;r.querySelectorAll(".loader-card").forEach(c=>{c.addEventListener("click",()=>{c.classList.contains("disabled")||(r.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),c.classList.add("sel"),a=c.dataset.l)})});const l=r.querySelector("#w-ram");l.addEventListener("input",()=>{r.querySelector("#w-ram-val").textContent=`${l.value} MB`}),r.querySelector("#w-std-switch")?.addEventListener("click",c=>{o=!o,c.currentTarget.classList.toggle("on",o)}),r.querySelector("#w-cancel")?.addEventListener("click",s),r.querySelector("#w-create")?.addEventListener("click",async()=>{const c=r.querySelector("#w-create");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=r.querySelector("#w-name").value.trim()||"Yeni Kurulum",h=r.querySelector("#w-version").value,u=r.querySelector("#w-preset").value;try{const f=await se("cmd_create_instance",{instance:{name:d,mc_version:h,mod_loader:a,ram_mb:parseInt(l.value),java_preset_id:u,standard_mods:o&&a==="fabric"}});await mt(()=>Promise.resolve().then(()=>yt),void 0).then(_=>_.refreshState()),s(),ge(`"${d}" oluşturuldu`);const g=f.instance.id;if(Yn=g,oe.instances.length){const _=document.querySelector("#content");ha(_,g)}}catch(f){ge(String(f),"err"),c.disabled=!1,c.textContent="Kurulumu Oluştur"}})}let On="mod",ii="",wr=[],gs=40,Yi=1,cs=1,Ks="",Jc="",Fl=!1;function Ib(i){let e=Ci.param;if(e?.startsWith("kind:")){const r=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(r)&&(On=r),e=void 0}Ci.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${On==="mod"?"sel":""}" data-k="mod">${ie("puzzle")} Modlar</button>
        <button class="kt ${On==="modpack"?"sel":""}" data-k="modpack">${ie("box")} Paketler</button>
        <button class="kt ${On==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${On==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${On==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${On==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${oe.featured_versions.map(r=>`<option>${r}</option>`).join("")}
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
        ${ie("search")}
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
  `,i.querySelectorAll(".kt").forEach(r=>r.addEventListener("click",()=>{On=r.dataset.k,i.querySelectorAll(".kt").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),ii&&vr(i,ii),Rh(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>vr(i,t.value.trim()),380)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&vr(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>vr(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{ii&&vr(i,ii)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{ii&&vr(i,ii)}),e&&ii&&vr(i,ii),Rh(i)}async function Rh(i){const e=i.querySelector("#popular-strip");try{const t=await se("cmd_repos_popular",{kind:On,loader:""});e.innerHTML="";for(const n of t){const r=on(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${ie("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${ie("dl")} ${Np(n.downloads)}</div>
          </div>
        </div>
      `);r.addEventListener("click",()=>Fp(n)),e.appendChild(r)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function vr(i,e){if(!e)return;ii=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',Ks=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;Jc=["resourcepack","shader","world","datapack"].includes(On)?"":n,Yi=1;try{if(wr=(await se("cmd_repos_search",{query:e,kind:On,versions:Ks?[Ks]:[],loader:Jc,offset:0,limit:gs})).results,cs=wr.length>=gs?2:1,t.innerHTML="",!wr.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const a of wr)t.appendChild(jc(a));Qc(i)}catch(s){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${s}</p></div>`}}function Qc(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=wr.length>=gs;if(Yi===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${Yi<=1?"disabled":""}>‹</button>`];for(let s=1;s<=cs;s++)n.push(`<button class="pg-btn ${s===Yi?"cur":""}" data-pg="${s}">${s}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const r=on(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);r.addEventListener("click",s=>{const a=s.target.closest(".pg-btn");if(!a||a.disabled)return;const o=a.dataset.pg,l=o==="prev"?Yi-1:o==="next"?Yi+1:parseInt(o,10);!Number.isFinite(l)||l<1||l===Yi||Ub(i,l)}),e.appendChild(r)}async function Ub(i,e){if(Fl)return;Fl=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const r=(await se("cmd_repos_search",{query:ii,kind:On,versions:Ks?[Ks]:[],loader:Jc,offset:(e-1)*gs,limit:gs})).results;if(!r.length){cs=Math.min(cs,Math.max(1,e-1)),t.innerHTML="";for(const s of wr)t.appendChild(jc(s));Qc(i);return}wr=r,Yi=e,cs=Math.max(cs,r.length>=gs?e+1:e),t.innerHTML="";for(const s of r)t.appendChild(jc(s));Qc(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{Fl=!1}}function jc(i){const e=on(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${ie(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${ie("dl")} ${Np(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>Fp(i)),e}function Np(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function Fp(i){const{root:e,close:t}=Wt(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",r=document.querySelector("#exp-loader")?.value||(oe.instances[0]?.mod_loader==="forge"?"forge":"fabric"),a=["resourcepack","shader","world","datapack"].includes(i.kind)?"":r;try{const o=await se("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?a:"",gameVersion:n}),l=e.querySelector("#ver-list");if(l.innerHTML="",!o.length){l.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const c of o){const d=on(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${c.name||c.version_number}</b>
            <span class="ver-date">${c.date.slice(0,10)} · ${c.game_versions.slice(0,3).join(", ")}${c.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${ya(c.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>Nb(i,c,t)),l.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function Nb(i,e,t){if(i.kind==="modpack")t(),await Fb(i,e);else{if(!oe.instances.length){ge("Önce bir kurulum oluşturmalısın","err"),tt("instances");return}const{root:n,close:r}=Wt(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${oe.instances.map(s=>{const a=s.icon&&!s.icon.includes("/")&&!s.icon.includes("\\")?`${s.icon} `:"";return`<option value="${s.id}">${a}${s.name} (${s.mod_loader} ${s.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",r),n.querySelector("#ok")?.addEventListener("click",async()=>{const s=n.querySelector("#tgt").value,a=n.querySelector("#ok");a.disabled=!0,a.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await se("cmd_repos_install_content",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await se("cmd_repos_install",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id}),r(),t(),ge({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){ge(String(o),"err"),a.disabled=!1,a.textContent="Kur"}})}}async function Fb(i,e){const{root:t,close:n}=Wt(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),r=t.querySelector("#pk-bar"),s=t.querySelector("#pk-detail"),{listen:a}=await mt(async()=>{const{listen:l}=await Promise.resolve().then(()=>yt);return{listen:l}},void 0),o=await a("launch-progress",l=>{l.payload.stage==="modpack"&&(r.style.transform=`scaleX(${Math.min(1,Math.max(0,l.payload.percent/100))})`,s.textContent=l.payload.detail||"")});try{const l=await se("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await mt(()=>Promise.resolve().then(()=>yt),void 0).then(c=>c.refreshState()),await Ob(l),tt("instances")}catch(l){o(),s.textContent=`Kurulum başarısız: ${l}`,s.style.color="var(--danger)"}}async function Ob(i){const e=await se("cmd_list_java_arg_presets"),{root:t,close:n}=Wt(`
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
  `);t.querySelectorAll(".preset-row").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.id;s!=="__skip"&&(await se("cmd_set_instance_java_preset",{id:i.id,presetId:s}),ge(`Preset: ${e.find(a=>a.id===s)?.name}`)),n()})})}function Bb(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,zb(i)}async function zb(i){const e=i.querySelector("#yikim-news");try{const t=await se("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${ie("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${ie("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(r=>`<p>${r}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${ie("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const r=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),r?.startsWith("https://")&&Vo(r).catch(()=>{})})})}catch{e.innerHTML=""}}const Hb=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"pano",name:"Devre Panosu",desc:"Hatlar, lambalar, şalter",bg:"#0b0b0d",panel:"#141419",line:"#26262e",text:"#e9e7e2",dim:"#6d6b66",accent:"#ff7a18"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"standart",name:"Kategori Standardı",desc:"Arc/Linear cilası — yumuşak köşe, çelik mavisi",bg:"#0e1016",panel:"#171a24",line:"#2b3044",text:"#eceffa",dim:"#666e8a",accent:"#6e8bff"},{id:"afis",name:"Afiş Provası",desc:"Sıfırdan yeni tasarım — baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"},{id:"oda",name:"Karanlık Oda",desc:"Fotoğraf laboratuvarı — safelight kırmızı, mono tip, ikon-only ray",bg:"#0e0a0b",panel:"#191214",line:"#2c2022",text:"#e8ddd8",dim:"#655a57",accent:"#e0301e"},{id:"kumas",name:"Kumaş",desc:"Terzi rafı — krem keten, kesik dikişli çizgiler, erik moru",bg:"#f7f2e9",panel:"#fffaf1",line:"#ddcfb6",text:"#3f3226",dim:"#97897a",accent:"#a04ac2"},{id:"perde",name:"Perde",desc:"Kızıl kadife sahne — altın vurgular, serif tipografisi",bg:"#17090f",panel:"#24111a",line:"#3f1f2b",text:"#f3e8dd",dim:"#857162",accent:"#d4af37"},{id:"buz",name:"Buzul",desc:"Buzlu cam yüzeyler (frosted) — kar beyazı, kobalt mavi",bg:"#e6edf4",panel:"#f2f6fb",line:"#c7d5e3",text:"#14202c",dim:"#8296a8",accent:"#0b57d0"},{id:"skala",name:"Skala",desc:"Fosforlu CRT tüpü — tarama çizgileri, glow yeşil, mono her şey",bg:"#07130c",panel:"#0d2015",line:"#1a3a26",text:"#d6f5df",dim:"#5e8069",accent:"#45f882"}];function Vb(i){const e=(t,n,r,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${r}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function ed(i){let e=oe.config;const n={dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[e.theme]??e.theme,r=!!(e.custom_accent||"").trim();try{const l=window.__TAURI__?.app;l?.getVersion&&l.getVersion().then(c=>{const d=i.querySelector("#app-version");d&&(d.textContent=`v${c} "Kıvılcım"`)}).catch(()=>{const c=i.querySelector("#app-version");c&&(c.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ie("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${oe.accounts.map(l=>{const c=Cs()?.id===l.id;return`
          <div class="acc-row ${c?"active":""}" data-id="${l.id}">
            <img class="acc-head" src="${Go(l)}" ${$o(l)} draggable="false" />
            <div class="acc-info">
              <b>${l.name}</b>
              <span>${l.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${c?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${ie("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${ie("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${ie("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ie("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Hb.map(l=>`
          <button class="world-card ${n===l.id?"sel":""}" data-t="${l.id}">
            ${Vb(l)}
            <span class="wc-body">
              <b>${l.name}</b>
              <span>${l.desc}</span>
            </span>
            ${n===l.id?'<span class="sel-tag">SEÇİLİ</span>':""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Skin Merkezi</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Skinlerini düzenle, giy; Mojang pelerinlerini tak.</div>
        </div>
        <button class="btn ghost sm" id="skins-alani">${ie("shirt")} Aç</button>
      </div>
      <div class="row-between" style="margin-top:14px" id="custom-row">
        <div>
          <b style="font-size:13px">Özel vurgu rengi</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Her dünyada çalışır — lamba, şalter ve vurgu renklerini boyar. Dünya rengine dönmek için kapat.</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center">
          <button class="btn ghost sm ${r?"":"sel"}" id="accent-default">Dünya rengi</button>
          <input type="color" id="accent-pick" value="${e.custom_accent||n==="standart"?"#6e8bff":"#ff7a18"}" style="width:56px; height:34px; border:none; background:none; cursor:pointer" />
        </div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ie("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${ie("mug")} Java</h3>
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
      <h3>${ie("gear")} Genel</h3>
      ${ts("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${ts("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${ts("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${ts("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${ts("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${ts("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>İndirme hızı (paralel bağlantı)</span>
        <div class="ram-row" style="width:260px">
          <input type="range" min="8" max="64" step="8" value="${e.download_concurrency||32}" id="dlc-range" style="flex:1" />
          <span class="chip" id="dlc-val">${e.download_concurrency||32}</span>
        </div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${ie("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${ie("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${ie("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>vn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>vn()),i.querySelectorAll(".acc-row").forEach(l=>{const c=l.dataset.id;l.querySelector(".acc-use")?.addEventListener("click",async d=>{d.stopPropagation(),await se("cmd_select_account",{accountId:c}),await tn(),ed(i),ge("Hesap değiştirildi")}),l.querySelector(".acc-del")?.addEventListener("click",async d=>{d.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await se("cmd_remove_account",{accountId:c}),await tn(),ed(i),ge("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(l=>l.addEventListener("click",async()=>{oe.config.theme=l.dataset.t,Ai(),i.querySelectorAll(".world-card").forEach(c=>c.classList.remove("sel")),l.classList.add("sel"),await Ei()}));const s=i.querySelector("#accent-pick"),a=i.querySelector("#accent-default");i.querySelector("#skins-alani")?.addEventListener("click",()=>tt("skins")),s?.addEventListener("input",l=>{oe.config.custom_accent=l.target.value,Ai()}),s?.addEventListener("change",async()=>{await Ei(),ge("Vurgu rengi kaydedildi")}),a?.addEventListener("click",async()=>{oe.config.custom_accent="",Ai(),await Ei(),ge("Dünya rengine dönüldü")}),i.querySelector("#fx-particles")?.addEventListener("change",async l=>{oe.config.fx_particles=l.target.value,Ai(),await Ei()}),i.querySelector("#cursor-style")?.addEventListener("change",async l=>{oe.config.cursor_style=l.target.value,Ai(),await Ei()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const l=await se("cmd_pick_java");l&&(oe.config.java_dir=l,await Ei(),i.querySelector("#java-path").textContent=l,ge("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{oe.config.java_dir=null,await Ei(),i.querySelector("#java-path").textContent="otomatik"}),ns(i,"keep-open","keep_launcher_open"),ns(i,"hide-on-launch","hide_on_launch"),ns(i,"show-news","show_news"),ns(i,"stats-enabled","stats_enabled"),ns(i,"use-java25","use_java25"),ns(i,"discord-rpc","discord_rpc");const o=i.querySelector("#dlc-range");o.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=o.value),o.addEventListener("change",async()=>{oe.config.download_concurrency=parseInt(o.value),await Ei()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{ge("Güncelleme kontrol ediliyor…");try{const c=await(await mt(()=>import("./index-DSkUPpwd.js"),[])).check();if(c?.available){const{root:d,close:h}=Wt(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${c.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(c.body||"Değişiklik notu yok.").split(`
`).map(u=>`<div>${u}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);d.querySelector("#upd-later")?.addEventListener("click",()=>h()),d.querySelector("#upd-go")?.addEventListener("click",async()=>{const u=d.querySelector("#upd-go");u.disabled=!0,u.textContent="İndiriliyor…";try{await c.downloadAndInstall(),ge("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(f){u.disabled=!1,u.textContent="İndir ve Kur",ge(`Güncelleme başarısız: ${f}`,"err")}})}else ge("YIKIMLient güncel ✓")}catch(l){await Gb(l)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Vo(To).catch(()=>ge(`Tarayıcı açılamadı — adresi elle aç: ${To}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const l=await se("cmd_get_app_dir");Xp(l).catch(()=>{})})}const To="https://github.com/YKSAMI1/yikimlient/releases/latest";function Ch(i){return String(i??"").trim().replace(/^v/i,"")}async function Gb(i){let e="",t="";try{const s=await se("cmd_check_updates"),a=Ch(s?.current),o=Ch(s?.latest);o&&o!==a&&(e=o)}catch{}try{const s=await se("cmd_upd_teshis"),a=Array.isArray(s?.platformlar)&&s.platformlar.length?s.platformlar.join(", "):"yok",o=[`HTTP ${s?.durum||"?"}`,`manifest ${s?.surum||"?"}`,`platform: ${a}`];s?.hata&&o.push(String(s.hata)),t=o.join(" · ")}catch{}const{root:n,close:r}=Wt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${ie("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>r()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Vo(To).catch(()=>ge(`Tarayıcı açılamadı — adresi elle aç: ${To}`,"err"))})}function ts(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function ns(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const r=n.currentTarget;r.classList.toggle("on"),oe.config[t]=r.classList.contains("on"),await Ei()})}async function Ei(){await se("cmd_save_settings",{config:oe.config}),await tn(),Ai()}const dn=64,xr=64,$b=40;class Ao{w=dn;h=xr;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(dn*xr*4)}static bos(){return new Ao}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new Ao(this.veri)}piksel(e,t){if(e<0||t<0||e>=dn||t>=xr)return[0,0,0,0];const n=(t*dn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,r=1){const s=Math.max(1,Math.min(8,Math.floor(r))),a=e-Math.floor((s-1)/2),o=t-Math.floor((s-1)/2);for(let l=0;l<s;l++)for(let c=0;c<s;c++){const d=a+c,h=o+l;if(d<0||h<0||d>=dn||h>=xr)continue;const u=(h*dn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,r,s,a=1){let o=Math.round(e),l=Math.round(t);const c=Math.round(n),d=Math.round(r),h=Math.abs(c-o),u=-Math.abs(d-l),f=o<c?1:-1,g=l<d?1:-1;let _=h+u;for(;this.boya(o,l,s,a),!(o===c&&l===d);){const p=2*_;p>=u&&(_+=u,o+=f),p<=h&&(_+=h,l+=g)}}kova(e,t,n){if(e<0||t<0||e>=dn||t>=xr)return;const r=this.piksel(e,t);if(kh(r,n))return;const s=[t*dn+e],a=new Uint8Array(dn*xr);for(;s.length;){const o=s.pop();if(a[o])continue;a[o]=1;const l=o%dn,c=Math.floor(o/dn);kh(this.piksel(l,c),r)&&(this.boya(l,c,n),l>0&&s.push(o-1),l<dn-1&&s.push(o+1),c>0&&s.push(o-dn),c<xr-1&&s.push(o+dn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>$b&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function kh(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function Wb(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}const Od=ub,Op=Cp*Od,Bp=cb*Od,qb=.3,Ol=2;let Xb=null;function Lh(i,e,t,n,r,s,a){s<=0||a<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,r,s,a)}function Ph(i,e,t,n,r,s,a){if(s<=0||a<=0)return;const o=Xb??=document.createElement("canvas"),l=Math.round(s),c=Math.round(a);o.width=l,o.height=c;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,l,c),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${qb})`,d.fillRect(0,0,l,c),d.globalCompositeOperation="source-over",i.drawImage(o,n,r))}function Yb(i,e,t,n=Od){const r=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=fb(t),a=db*r;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Cp/2*r,(31.3+Ol)*r,6.2*r,1*r,0,0,Math.PI*2),i.fill(),i.restore();for(const o of s){if(!o.yanGorunur)continue;const l=(o.x+o.on.w)*r,c=(o.y+Ol)*r;Ph(i,e,o.yan,l,c,a,o.on.h*r),o.ust&&o.ustYan&&Ph(i,e,o.ustYan,l,c,a,o.on.h*r)}for(const o of s){const l=o.x*r,c=(o.y+Ol)*r;Lh(i,e,o.on,l,c,o.on.w*r,o.on.h*r),o.ust&&Lh(i,e,o.ust,l,c,o.ust.w*r,o.ust.h*r)}}const Kb=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],rn=64;function Zb(i,e,t,n){const r=e.pafta;let s=e.slim,a=e.ad,o="kalem",l=1,c=[255,90,40,255],d=null,h=!1,u=8,f=!1,g=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${ie("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${zl(a)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${ie("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${rn*u}" height="${rn*u}"></canvas>
          <canvas id="ske-izgara" width="${rn*u}" height="${rn*u}"></canvas>
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
          <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${ie("brush")}</button>
          <button class="sk-arac" data-arac="silgi" title="Silgi">${ie("trash")}</button>
          <button class="sk-arac" data-arac="kova" title="Kova">${ie("bucket")}</button>
          <button class="sk-arac" data-arac="damla" title="Damlacık">${ie("picker")}</button>
          <span class="sk-arac-ayrac"></span>
          <button class="sk-arac" id="ske-geri-al" title="Geri Al">${ie("undo")}</button>
          <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${ie("redo")}</button>
        </div>
        <div class="sk-renk-satir">
          <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
          <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" />
          <div class="sk-kalinlik">
            ${[1,2,4].map(K=>`<button class="seg-btn ${K===1?"aktif":""}" data-kalinlik="${K}">${K}</button>`).join("")}
          </div>
        </div>
        <div class="sk-palet" id="ske-palet">
          ${Kb.map(K=>`<button class="sk-palet-renk" data-renk="${K}" style="--c:${K}" title="${K}"></button>`).join("")}
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
                ${Sh.filter(L=>L.katman===K).map(L=>`<button class="sk-bolge" data-bolge="${L.id}">${L.ad}</button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${zl(a)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${ie("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${ie("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const m=p.querySelector("#ske-tuval"),S=p.querySelector("#ske-izgara"),T=m.getContext("2d"),y=S.getContext("2d"),M=p.querySelector("#ske-onizleme"),E=document.createElement("canvas");E.width=rn,E.height=rn;const A=E.getContext("2d"),v=xa();v.kur(M),v.tuvalDoku(E,s);function w(){const K=new ImageData(new Uint8ClampedArray(r.veri),rn,rn);A.putImageData(K,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,m.width,m.height),T.drawImage(E,0,0,m.width,m.height),C(),v.dokuTazele()}function C(){y.clearRect(0,0,S.width,S.height);const K=S.width/rn;if(u>=8){y.strokeStyle="rgba(255,255,255,0.09)",y.lineWidth=1;for(let L=1;L<rn;L++)y.beginPath(),y.moveTo(L*K,0),y.lineTo(L*K,S.height),y.stroke(),y.beginPath(),y.moveTo(0,L*K),y.lineTo(S.width,L*K),y.stroke()}if(d){y.strokeStyle="rgba(255,150,60,0.35)",y.lineWidth=1,y.setLineDash([]);for(const L of d.dilimler)L.x===d.x&&L.y===d.y||y.strokeRect(L.x*K+.5,L.y*K+.5,L.w*K-1,L.h*K-1);if(y.strokeStyle="rgba(255,150,60,0.95)",y.lineWidth=2,y.setLineDash([6,4]),y.strokeRect(d.x*K+1,d.y*K+1,d.w*K-2,d.h*K-2),y.setLineDash([]),h){y.fillStyle="rgba(0,0,0,0.55)",y.beginPath(),y.rect(0,0,S.width,S.height);for(const L of d.dilimler)y.rect(L.x*K,L.y*K,L.w*K,L.h*K);y.fill("evenodd")}}}function D(K){const L=m.getBoundingClientRect(),V=Math.floor((K.clientX-L.left)/L.width*rn),le=Math.floor((K.clientY-L.top)/L.height*rn);return[Math.max(0,Math.min(rn-1,V)),Math.max(0,Math.min(rn-1,le))]}function N(){return o==="silgi"?[0,0,0,0]:c}m.addEventListener("pointerdown",K=>{if(K.button!==0)return;const[L,V]=D(K);if(f=!0,g=L,_=V,m.setPointerCapture(K.pointerId),o==="damla"){c=r.damla(L,V),k(c);return}r.katmanBasla(),o==="kova"?r.kova(L,V,N()):r.boya(L,V,N(),l),w()}),m.addEventListener("pointermove",K=>{if(!f)return;const[L,V]=D(K);L===g&&V===_||((o==="kalem"||o==="silgi")&&(r.cizgi(g,_,L,V,N(),l),w()),g=L,_=V)});const O=()=>{f=!1,g=-1,_=-1};m.addEventListener("pointerup",O),m.addEventListener("pointercancel",O);function k(K){c=K;const L=Jb(K);p.querySelector("#ske-renk").value=L,p.querySelector("#ske-renk-hex").value=L,p.querySelectorAll(".sk-palet-renk").forEach(V=>{V.classList.toggle("aktif",V.dataset.renk?.toLowerCase()===L.toLowerCase())})}p.querySelector("#ske-renk").addEventListener("input",K=>{k(Bl(K.target.value))}),p.querySelector("#ske-renk-hex").addEventListener("change",K=>{const L=K.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(L)&&k(Bl(L))}),p.querySelector("#ske-palet")?.addEventListener("click",K=>{const L=K.target.closest(".sk-palet-renk");L?.dataset.renk&&k(Bl(L.dataset.renk))}),p.querySelectorAll(".sk-arac[data-arac]").forEach(K=>{K.addEventListener("click",()=>{o=K.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(L=>L.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(K=>{K.addEventListener("click",()=>{l=Number(K.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(L=>L.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(K=>{K.addEventListener("click",()=>{u=Number(K.dataset.zum),m.width=m.height=S.width=S.height=rn*u,p.querySelectorAll("[data-zum]").forEach(L=>L.classList.remove("aktif")),K.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(K=>{K.addEventListener("click",()=>{s=K.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(L=>L.classList.remove("aktif")),K.classList.add("aktif"),v.tuvalDoku(E,s),ee(s?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})}),p.querySelector("#ske-bolgeler")?.addEventListener("click",K=>{const L=K.target.closest("[data-bolge]");L?.dataset.bolge&&(d=Sh.find(V=>V.id===L.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(V=>V.classList.remove("aktif")),L.classList.add("aktif"),C())}),p.querySelector("#ske-sadece").addEventListener("change",K=>{h=K.target.checked,C()});const B=()=>{r.geriAl()&&w()},X=()=>{r.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",B),p.querySelector("#ske-ileri-al")?.addEventListener("click",X);const $=K=>{!document.body.contains(p)||!(K.ctrlKey||K.metaKey)||(K.key.toLowerCase()==="z"?(K.preventDefault(),K.shiftKey?X():B()):K.key.toLowerCase()==="s"&&(K.preventDefault(),Q(!0)))};window.addEventListener("keydown",$);function ee(K){const L=p.querySelector("#ske-uyari");L.textContent=K}function Y(){return new Promise(K=>{E.toBlob(async L=>{if(!L)return K([]);const V=new Uint8Array(await L.arrayBuffer());K(Array.from(V))},"image/png")})}async function Q(K){if(a=p.querySelector("#ske-ad").value.trim()||a,a||(a="Skin"),K&&!await Qb("Skini giy",`<b>${zl(a)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const V=await Y();if(!V.length){ee("PNG üretilemedi.");return}const le=p.querySelector(K?"#ske-giy":"#ske-kitaplik");le.disabled=!0,ee(K?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:V,slim:s,ad:a},K),ee(""),Ue()}catch(Le){ee(String(Le)),le.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void Q(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void Q(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const K=await Y(),L=p.querySelector("#ske-ad");try{const{invoke:V}=await mt(async()=>{const{invoke:Le}=await Promise.resolve().then(()=>yt);return{invoke:Le}},void 0),le=await V("cmd_skin_disa_aktar",{ad:L.value.trim()||"skin",veri:K});ge(`Dışa aktarıldı: ${le}`)}catch(V){ge(String(V),"err")}});const ne=document.createElement("button");ne.className="btn ghost sk-dosya-btn",ne.innerHTML=`${ie("image")} Dosya`;const Se=document.createElement("input");Se.type="file",Se.accept="image/png",Se.style.display="none",ne.addEventListener("click",()=>Se.click()),Se.addEventListener("change",async()=>{const K=Se.files?.[0];K&&await $e(K),Se.value=""}),p.querySelector("#ske-geri").after(ne),p.appendChild(Se);function Te(){return new Promise(K=>{const{root:L,close:V}=Wt(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${ie("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${ie("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let le=!1;const Le=xe=>{le||(le=!0,V(),K(xe))};L.querySelector("#se-wide")?.addEventListener("click",()=>Le(!1)),L.querySelector("#se-slim")?.addEventListener("click",()=>Le(!0)),L.querySelector("#se-iptal")?.addEventListener("click",()=>Le(null))})}async function $e(K){try{const L=URL.createObjectURL(K),V=await new Promise((_t,Ve)=>{const We=new Image;We.onload=()=>_t(We),We.onerror=()=>Ve(new Error("görsel okunamadı")),We.src=L}),le=document.createElement("canvas");le.width=V.width,le.height=V.height;const Le=le.getContext("2d");Le.drawImage(V,0,0),URL.revokeObjectURL(L);const xe=Le.getImageData(0,0,V.width,V.height);if(!(V.width===64&&(V.height===64||V.height===32))){ge(`Skin 64×64 veya 64×32 olmalı (bu dosya ${V.width}×${V.height})`,"err");return}const Oe=await Te();if(Oe===null)return;s=Oe,p.querySelectorAll("[data-slim]").forEach(_t=>{_t.classList.toggle("aktif",_t.dataset.slim===(s?"1":"0"))}),r.katmanBasla(),V.height===64?r.veri.set(xe.data):r.veri.set(Wb(xe.data)),w(),v.tuvalDoku(E,s)}catch(L){ge(String(L),"err")}}const Ue=()=>{window.removeEventListener("keydown",$),p.remove();try{v.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Ue),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const K=p.querySelector(".sk-edit-kayit");K.scrollIntoView({behavior:"smooth",block:"center"}),K.querySelector("#ske-ad").focus()}),k(c),w()}function Jb(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function Bl(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function zl(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qb(i,e,t){return new Promise(n=>{const{root:r,close:s}=Wt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let a=!1;const o=c=>{a||(a=!0,s(),n(c))};r.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),r.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const l=r.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}let Ye=null,Ht=null,nr=null,Jn=!1,Ro=null;const zt=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Bd(i){Fd(),Ye=null,Ht=null,nr=null,Ro=null;const e=Cs();if(!e||e.kind!=="microsoft"){jb(i);return}i.innerHTML=eM(e.name),tM(i,e.id),Oo(i,e.id,!0)}function jb(i){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${ie("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${ie("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{vn(()=>Bd(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>tt("settings"))}function eM(i){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${ie("check")} Orijinal hesap</span>
          <button class="btn primary" id="sk-duzenle">${ie("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${zt(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${ie("undo")} Yedeği Geri Yükle</button>
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
              ${ie("plus")}
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
    </div>`}function tM(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void lM(i,e)),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Hl(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void rM(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n.click())}),n.addEventListener("change",()=>{const s=n.files?.[0];s&&Ih(i,e,s),n.value=""}),t.addEventListener("dragover",s=>{s.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",s=>{s.preventDefault(),t.classList.remove("uzerinde");const a=s.dataTransfer?.files?.[0];a&&Ih(i,e,a)});const r=(s,a)=>{const o=i.querySelector(s);o?.addEventListener("click",l=>{const c=l.target.closest(".skin-kart");!c||l.target.closest(".skin-sil")||Dh(i,c)}),o?.addEventListener("dblclick",l=>{const c=l.target.closest(".skin-kart");!c||l.target.closest(".skin-sil")||(Dh(i,c),a())})};r("#sk-kitaplik",()=>void Hl(i,e)),r("#sk-varsayilan",()=>void Hl(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",s=>{const a=s.target.closest(".skin-sil");if(!a)return;s.stopPropagation();const o=a.closest(".skin-kart");o?.dataset.id&&aM(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",s=>{const a=s.target.closest(".skin-pelerin");if(!a)return;const o=a.dataset.id||null;sM(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",s=>{s.target.closest("#sk-yenile")&&Oo(i,e,!1)})}async function Oo(i,e,t){try{Ye=await se("cmd_skin_hub",{id:e}),Ht=Ht??nM(),Dr(i),t?Hp(i):zd(i),Bo(),Ye.cevrimdisi?ge("Çevrimdışısın — son bilinen skin gösteriliyor"):Ye.hata&&ge(Ye.hata,"err")}catch(n){ge(String(n),"err");const r=i.querySelector("#sk-kitaplik");r&&(r.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function nM(){if(!Ye)return null;if(Ye.aktif)return{tur:"kayit",id:`aktif:${Ye.aktif.dosya}`,dosya:Ye.aktif.dosya,slim:Ye.aktif.slim,ad:"Aktif skin"};const i=Ye.kitaplik[0];if(i)return zp(i);const e=Ye.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function zp(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function Dr(i){if(!Ye)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Ye.cevrimdisi?`<div class="skin-serit-cevrimdisi">${ie("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Ye.kitaplik.length?(t.innerHTML=Ye.kitaplik.map(c=>iM(c)).join(""),t.querySelectorAll(".skin-yuz").forEach(c=>{const d=c.dataset.dosya;d&&Uh(c,d,c.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const l=i.querySelector("#sk-adet");l&&(l.textContent=Ye.kitaplik.length?`${Ye.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Ye.varsayilanlar||[]).map(l=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${zt(l.ad)}" data-dosya="${zt(l.dosya)}"
           data-slim="${l.slim?1:0}" data-ad="${zt(l.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Op}" height="${Bp}"
                  data-dosya="${zt(l.dosya)}" data-slim="${l.slim?1:0}"></canvas>
          <span class="skin-model">${l.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${zt(l.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(l=>{const c=l.dataset.dosya;c&&Uh(l,c,l.dataset.slim==="1")}));const r=i.querySelector("#sk-pelerin");if(r)if(!Ye.pelerinler.length)r.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';else{const l=Ye.pelerinler.find(c=>c.aktif);r.innerHTML=Ye.pelerinler.map(c=>`
        <button class="skin-pelerin ${c.aktif?"aktif":""}" data-id="${zt(c.id)}" title="${zt(c.ad)}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${zt(c.dosya||"")}"></canvas>
          <span class="skin-pelerin-ad">${zt(c.ad)}</span>
          ${c.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(l?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
               <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
             </button>`:""),r.querySelectorAll(".skin-pelerin-tuval").forEach(c=>{const d=c.dataset.dosya;d&&dM(c,d)})}const s=i.querySelector("#sk-aktif-ad");if(s){const l=Ht;s.textContent=Ye.cevrimdisi?"çevrimdışı önizleme":l?`${l.ad} · ${l.slim?"Slim":"Wide"}`:"skin seç"}const a=i.querySelector("#sk-giy");a&&(a.disabled=!Ht||Jn,a.textContent=Jn?"Bekle…":"Bu Skini Giy");const o=i.querySelector("#sk-yedek");o&&(o.style.display=Ye.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(l=>{const c=Ht&&l.dataset.id===Ht.id;l.classList.toggle("secili",!!c);const d=l.querySelector(".skin-rozet.secim");if(c&&!d){const h=document.createElement("span");h.className="skin-rozet secim",h.textContent=nr&&l.dataset.id===nr?"GİYİLİ":"SEÇİLİ",l.appendChild(h)}else!c&&d?d.remove():c&&d&&(d.textContent=nr&&l.dataset.id===nr?"GİYİLİ":"SEÇİLİ")})}function iM(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${zt(i.id)}" data-dosya="${zt(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${zt(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Op}" height="${Bp}"
                data-dosya="${zt(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${zt(i.ad)}</div>
      <button class="skin-sil" title="Sil">${ie("trash")}</button>
    </div>`}function Dh(i,e){Ht={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},zd(),Dr(i)}function Hp(i){const e=i.querySelector("#skin-canvas");if(!e)return;xa().kur(e),zd()}function zd(i){const e=xa();Ht&&e.skin({url:$t(Ht.dosya),slim:Ht.slim})}function Bo(){if(!Ye)return;const e=Ye.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;e!==Ro&&(Ro=e,xa().pelerin(e?{url:$t(e)}:null))}async function Hl(i,e){if(!Ht||Jn)return;const t=Ht;if(await Hd("Skini giy",`<b>${zt(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){Jn=!0,Dr(i);try{let r;if(t.tur==="kayit"&&Ye?.kitaplik.some(s=>s.id===t.id))r=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const s=await Vp(t.dosya);r=await se("cmd_skin_giy",{id:e,veri:s,slim:t.slim,ad:null})}Ye=r,nr=t.tur==="kayit"?t.id:null,ge("Skin giyildi — sunucularda görünecek.")}catch(r){ge(String(r),"err")}finally{Jn=!1,Dr(i)}}}async function rM(i,e){if(!(Jn||!await Hd("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){Jn=!0;try{Ye=await se("cmd_skin_yedek_geri_yukle",{id:e}),nr=null,ge("Yedek skin geri yüklendi.")}catch(n){ge(String(n),"err")}finally{Jn=!1,Dr(i),Bo()}}}async function sM(i,e,t){if(!(Jn||!Ye)&&!(t===null&&!Ye.pelerinler.some(n=>n.aktif))){Jn=!0;try{Ye=await se("cmd_skin_pelerin",{id:e,capeId:t}),ge(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),Bo()}catch(n){ge(String(n),"err")}finally{Jn=!1,Dr(i)}}}async function aM(i,e,t,n){if(await Hd("Skini sil",`<b>${zt(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await se("cmd_skin_sil",{kayitId:t}),Ht?.id===t&&(Ht=null),ge("Skin silindi."),await Oo(i,e,!1)}catch(s){ge(String(s),"err")}}async function Ih(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),r=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",s=await oM(r);if(s===null)return;await se("cmd_skin_kaydet",{ad:r,veri:n,slim:s}),ge(`Skin kitaplığa eklendi · ${s?"Slim":"Wide"}`),await Oo(i,e,!1)}catch(n){ge(String(n),"err")}}function oM(i){return new Promise(e=>{const{root:t,close:n}=Wt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${zt(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${ie("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${ie("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let r=!1;const s=l=>{l.key==="Escape"&&a(null)},a=l=>{r||(r=!0,window.removeEventListener("keydown",s),n(),e(l))};t.querySelector("#sm-wide")?.addEventListener("click",()=>a(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>a(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>a(null));const o=t.parentElement;o?.addEventListener("click",l=>{l.target===o&&a(null)}),window.addEventListener("keydown",s)})}async function lM(i,e){const t=Ht?.dosya||Ye?.aktif?.dosya||Ye?.varsayilanlar[0]?.dosya;if(!t){ge("Önce bir skin seç.","err");return}let n;try{n=await cM(await Vp(t))}catch(o){ge(String(o),"err");return}const r=new Date,s=`Skinim ${String(r.getDate()).padStart(2,"0")}.${String(r.getMonth()+1).padStart(2,"0")}`;let a=!1;Zb(i,{pafta:n,slim:Ht?.slim??!1,ad:s},async(o,l)=>{const c=await se("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});l?(Ye=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:c.id}),nr=c.id,ge("Skin giyildi — sunucularda görünecek.")):(Ye=await se("cmd_skin_hub",{id:e}),ge("Kitaplığa kaydedildi.")),Ht=zp(c),a=!0},()=>{if(!a){Bd(i);return}Dr(i),Fd(),Ro=null,Hp(i),Bo()})}async function cM(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((l,c)=>{const d=new Image;d.onload=()=>l(d),d.onerror=()=>c(new Error("Skin dosyası okunamadı.")),d.src=t}),r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d");s.imageSmoothingEnabled=!1;const a=Gp(n),o=n.naturalHeight===32;return s.drawImage(a,0,0,64,o?32:64),new Ao(new Uint8ClampedArray(s.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Vp(i){const e=await fetch($t(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Gp(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const r=n.getContext("2d");return r?(r.imageSmoothingEnabled=!1,r.drawImage(i,0,0,n.width,n.height),n):i}function Uh(i,e,t){const n=new Image;n.onload=()=>{const r=i.getContext("2d");r&&Yb(r,Gp(n),t)},n.src=$t(e)}function dM(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const r=kp(t),s=Lp(r);n.drawImage(r,s.x,s.y,s.w,s.h,0,0,i.width,i.height)},t.src=$t(e)}function Hd(i,e,t){return new Promise(n=>{const{root:r,close:s}=Wt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let a=!1;const o=c=>{a||(a=!0,s(),n(c))};r.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),r.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const l=r.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}function uM(){Ki.home=xb,Ki.instances=wb,Ki.explore=Ib,Ki.news=Bb,Ki.settings=ed,Ki.skins=Bd}let Sr=null;const _s=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function hM(){Sr||(Sr=document.createElement("div"),Sr.className="drop-veil",Sr.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(Sr))}function Nh(){Sr?.remove(),Sr=null}async function fM(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await se("cmd_route_dropped",{path:i})}catch(n){ge(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Wt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${_s(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let r=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{r=!0,n.close()}),await new Promise(a=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),a())},150)}),!r){ge("Kurulum iptal edildi");return}ge("Paket indiriliyor — süreç panelinden takip edebilirsin");const s=await se("cmd_import_pack_file",{path:i,name:null});await tn(),tt("instances"),ge(`${s.name} kuruldu ✓`)}else if(t==="jar"){const n=await td(`Mod eklenecek kurulum: <b>${_s(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const r=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";ge(`Mod eklendi: ${e}${r}`,r?"err":"ok")}else if(t==="world"){const n=await td(`Dünya yüklenecek kurulum: <b>${_s(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),ge(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await se("cmd_import_emote_dosyasi",{path:i});ge(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await pM(i,e):ge(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){ge(`Kurulamadı: ${n}`,"err")}}async function pM(i,e){const t=Wt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${_s(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const a=setInterval(()=>{document.body.contains(t.root)||(clearInterval(a),s())},150)}),!n)return;const r=await td(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");r&&(await se("cmd_add_content_path",{instanceId:r.id,kind:n,path:i}),ge(`Eklendi: ${e}`))}function td(i){return new Promise(e=>{const t=oe.instances||[];if(!t.length){ge("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Wt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${_s(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${_s(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const a=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(a)})});const r=setInterval(()=>{document.body.contains(n.root)||(clearInterval(r),e(null))},150)})}function mM(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")hM();else if(n==="drop"){Nh();const r=t.paths||[];for(const s of r)await fM(s)}else Nh()})}catch{}}const uo=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let Vl=null;function gM(i,e){const t=window.innerWidth,n=window.innerHeight,r=e.offsetWidth,s=e.offsetHeight,a=l=>Math.max(12,Math.min(l,t-r-12)),o=l=>Math.max(14,Math.min(l,n-s-14));if(i){const l=i.right+16,c=i.left-16-r;let d;l+r<=t-12?d=l:c>=12?d=c:d=(t-r)/2;let h=i.top+i.height/2-s/2;h<14&&(h=i.bottom+16),e.style.left=`${a(d)}px`,e.style.top=`${o(h)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-r)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function Fh(i,e){const t=uo[e],n=i.querySelector(".spot"),r=i.querySelector(".tc");tt(t.page);const s=r.querySelector(".tc-step");s.innerHTML=uo.map((l,c)=>`<i class="${c<=e?"done":""}"></i>`).join(""),r.querySelector("h3").textContent=t.title,r.querySelector("p").textContent=t.text;const a=r.querySelector(".tc-next");a.textContent=e===uo.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const l=document.querySelector(t.sel);l&&(o=l.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",gM(o,r),Ni.fromTo(r,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function _M(){if(Vl||oe.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),Vl=i;let e=0;const t=async()=>{i.remove(),Vl=null,document.removeEventListener("keydown",r),tt("home");try{oe.config={...oe.config,guided_tour_done:!0},await se("cmd_save_settings",{config:oe.config}),await tn()}catch{}},n=()=>{if(e+=1,e>=uo.length){t();return}Fh(i,e)},r=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",r),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),Fh(i,e)}let ds=null,ho=null;function rs(){ho!==null&&(clearInterval(ho),ho=null)}function Oh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function nd(){try{oe.config={...oe.config,onboarding_done:!0},await se("cmd_save_settings",{config:oe.config}),await tn()}catch{}}function Gl(i){rs(),ds?.remove(),ds=null,nd(),tt("home")}function vM(){if(ds)return!0;if(oe.config?.onboarding_done)return!1;if(!(oe.accounts.length===0&&oe.instances.length===0))return nd(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),ds=e;const t=e.querySelector(".ob-card"),n=h=>`<div class="ob-dots">${[0,1,2,3].map(u=>`<i class="${u<=h?"done":""}"></i>`).join("")}</div>`,r=h=>`
    <div class="ob-actions">
      ${h.back?'<button class="btn ghost sm" id="ob-back">← Geri</button>':""}
      <span class="spacer"></span>
      ${h.skip?`<button class="btn ghost sm" id="${h.skipId}">${h.skip}</button>`:""}
      ${h.next?`<button class="btn primary sm" id="${h.nextId}">${h.next}</button>`:""}
    </div>`;function s(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${n(0)}
      <div class="ob-step-label">1 / 4 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${r({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Gl()),t.querySelector("#ob-next")?.addEventListener("click",a)}function a(){rs(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{rs(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Gl());const h=t.querySelector("#ob-acc-ok"),u=t.querySelector("#ob-next"),f=t.querySelector("#ob-ms-durum"),g=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),m=t.querySelector("#ob-off-ad"),S=y=>{h.style.display="flex",h.textContent=`✓ Hesap hazır: ${y}`,u.disabled=!1,rs()};oe.accounts.length?S(oe.accounts[0]?.name??""):u.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,f.style.display="block",f.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const y=await se("cmd_ms_login_begin");await tn(),f.textContent="",f.style.display="none",S(y?.name??oe.accounts[0]?.name??"")}catch(y){f.textContent=String(y),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const y=m.value.trim();if(y.length<3){g.textContent="İsim en az 3 karakter olmalı.",m.focus();return}g.textContent="",p.disabled=!0,p.textContent="…";try{await se("cmd_add_offline_account",{name:y}),await tn(),S(y),p.textContent="✓"}catch(M){g.textContent=String(M),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),m.addEventListener("keydown",y=>{y.key==="Enter"&&(y.preventDefault(),T())}),ho=setInterval(()=>{oe.accounts.length&&S(oe.accounts[0]?.name??"")},600),u.addEventListener("click",()=>{rs(),o()})}async function o(){let h=[];try{h=(await se("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${h.map(f=>`<option value="${Oh(f)}">${Oh(f)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${r({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",a);let u=null;t.querySelector("#ob-create")?.addEventListener("click",async f=>{const g=f.currentTarget;g.disabled=!0,g.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{u=await se("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:oe.config?.default_ram_mb||4096,java_preset_id:oe.config?.default_java_preset||"balanced",standard_mods:!0}});const m=t.querySelector("#ob-inst-ok");m.style.display="flex",m.textContent=`✓ Kurulum hazır: ${u.name}`,g.textContent="✓ Oluşturuldu",await tn(),setTimeout(()=>l(),700)}catch(m){d(`Kurulum oluşturulamadı: ${m}`),g.disabled=!1,g.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{c()})}function l(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Gl())}return s(),!0;function c(){rs(),ds?.remove(),ds=null,nd(),tt("explore","kind:modpack")}function d(h){mt(()=>Promise.resolve().then(()=>yt),void 0).then(u=>u.toast(h,"err"))}}const Ir=Math.PI*2;function Co(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function xM(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function zo(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Ir),i.fill()}function Bh(i,e){const t=e?xM(Co(),.88):Co(),n=r=>({x:Math.random()*r[0],y:r[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Ir});return{base:e?24:30,spawn:n,step:(r,s,a)=>{r.x+=(r.vx+Math.sin(r.seed+r.life*2.1)*9)*s*(1+i*s),r.y+=r.vy*s,r.a=Math.max(0,1-r.life/r.max*1.05),(r.y<-12||r.a<=0)&&Object.assign(r,n(a))},draw:zo}}function $l(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Ir});return{base:26,spawn:e,step:(t,n,r)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=r[0]+8),t.x>r[0]+8&&(t.x=-8),t.y<-8&&(t.y=r[1]+8),t.y>r[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(r))},draw:zo}}function yM(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Ir});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:zo}}function SM(){const i=Co(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Ir});return{base:16,spawn:e,step:(t,n,r)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Ir),t.stroke()}}}function bM(){const i=Co(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,r)=>{t.y+=t.vy*n,t.y>r[1]+40&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function Xa(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Ir}),step:(t,n,r)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:zo}}function MM(i){switch(i){case"pano":return Bh(.5,!1);case"sahne":return Xa("rgba(255,171,77,0.75)");case"sokum":return Bh(.9,!0);case"afis":return $l("rgba(63,50,38,0.5)");case"standart":return Xa("rgba(147,168,255,0.5)");case"sira":return Xa("rgba(163,230,53,0.85)");case"rihtim":return SM();case"oda":return $l("rgba(224,48,30,0.6)");case"kumas":return $l("rgba(138,122,92,0.5)");case"perde":return Xa("rgba(212,175,55,0.8)");case"buz":return yM();case"skala":return bM();default:return null}}let Tn=null,ai=null,Ji=null,ss=[],an=0,Zs=0,$p=1,Wp=33,Ho=!1;function Vd(){return Math.min(window.devicePixelRatio||1,1.5)}function Wl(){an&&cancelAnimationFrame(an),an=0,Ji=null,ss=[],Tn&&(Tn.remove(),Tn=null,ai=null)}function ko(i){if(an=0,!ai||!Tn||!Ji||Ho||document.hidden)return;if(i-Zs<Wp){an=requestAnimationFrame(ko);return}const e=Math.min((i-Zs)/1e3,.06);Zs=i,an=requestAnimationFrame(ko);const t=Vd();ai.setTransform(t,0,0,t,0,0),ai.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],r=Math.max(1,Math.round(Ji.base*$p));for(;ss.length<r;){const s=Ji.spawn(n);s.life=Math.random()*s.max,ss.push(s)}for(;ss.length>r;)ss.pop();for(const s of ss)s.life+=e,Ji.step(s,e,n),ai.globalAlpha=s.a,Ji.draw(ai,s);ai.globalAlpha=1}function qp(){Ji&&ai&&!an&&!document.hidden&&!Ho&&(Zs=performance.now(),an=requestAnimationFrame(ko))}document.addEventListener("visibilitychange",()=>{document.hidden?(an&&cancelAnimationFrame(an),an=0):qp()});window.addEventListener("blur",()=>{Ho=!0,an&&cancelAnimationFrame(an),an=0});window.addEventListener("focus",()=>{Ho=!1,qp()});window.addEventListener("resize",()=>{if(!Tn||!ai)return;const i=Vd();Tn.width=Math.round(innerWidth*i),Tn.height=Math.round(innerHeight*i)});function EM(){const i=String(oe.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){Wl();return}const n=MM(e);if(!n){Wl();return}$p={low:.45,mid:.9,high:1.6}[i]??1,Wp=1e3/({low:25,mid:30,high:40}[i]??30),Wl(),Ji=n;const a=Vd();Tn=document.createElement("canvas"),Tn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Tn.width=Math.round(innerWidth*a),Tn.height=Math.round(innerHeight*a),document.body.appendChild(Tn),ai=Tn.getContext("2d"),Zs=performance.now(),an=requestAnimationFrame(ko)}function wM(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function TM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function AM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function RM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const CM={yikim:{build:TM,spot:"3 2"},hedef:{build:AM,spot:"12 12"},nokta:{build:RM,spot:"8 8"}};function kM(){const i=String(oe.config?.cursor_style||"standart"),e=document.documentElement,t=CM[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(wM());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const Qe=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,LM=`<svg ${Qe}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,PM=`<svg ${Qe}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,DM=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,IM=`<svg ${Qe}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,UM=`<svg ${Qe}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,NM=`<svg ${Qe}><path d="M12 5v14M5 12h14"/></svg>`,FM=`<svg ${Qe}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,OM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',BM=`<svg ${Qe}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,zM=`<svg ${Qe}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,HM=`<svg ${Qe}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,VM=`<svg ${Qe}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,GM=`<svg ${Qe}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,$M=`<svg ${Qe}><path d="m4.5 12.5 5 5 10-11"/></svg>`,WM=`<svg ${Qe}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,qM=`<svg ${Qe}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,XM=`<svg ${Qe}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,YM=`<svg ${Qe}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,KM=`<svg ${Qe}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,ZM=`<svg ${Qe}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,JM=`<svg ${Qe}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,QM=`<svg ${Qe}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,jM=`<svg ${Qe}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,e1=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,t1=`<svg ${Qe}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,n1=`<svg ${Qe}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,i1=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,r1=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,s1=`<svg ${Qe}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,a1=`<svg ${Qe}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,o1=`<svg ${Qe}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,l1=`<svg ${Qe}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,c1=`<svg ${Qe}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,d1=`<svg ${Qe}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,u1=`<svg ${Qe}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,h1=`<svg ${Qe}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,Lo={home:LM,grid:PM,compass:DM,news:IM,gear:UM,plus:NM,search:FM,play:OM,image:BM,folder:zM,trash:HM,copy:VM,back:GM,check:$M,user:WM,puzzle:qM,box:XM,cpu:YM,args:KM,term:ZM,chart:JM,dl:QM,mug:jM,globe:e1,sparkle:t1,file:n1,info:i1,clock:r1,stop:s1,shirt:a1,brush:o1,bucket:l1,picker:c1,undo:d1,redo:u1,lock:h1};function ie(i,e=""){const t=Lo[i]||Lo.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const Ya='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',Ka=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Os={min:`<svg ${Ya}>${Ka('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${Ya}>${Ka('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${Ya}>${Ka('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${Ya}>${Ka('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},vs=window.__TAURI__,f1=vs.core,p1=vs.event,se=(i,e={})=>f1.invoke(i,e),$t=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),Qn=(i,e)=>p1.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=Lo[t]||Lo.info,i.replaceWith(n)};const Vo=i=>se("plugin:opener|open_url",{url:i}),Xp=i=>se("plugin:opener|open_path",{path:i}),oe={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function tn(i=!1){const e=await se("cmd_get_state");oe.config=e.config,oe.accounts=e.accounts,oe.instances=e.instances,oe.featured_versions=e.featured_versions,oe.curseforge=e.curseforge,oe.sys=e.sys,Ai(),Wo(),i&&tt(Gd)}const zh=Wo;function Ai(){if(!oe.config)return;const i=oe.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",r=(oe.config.custom_accent||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent")),EM(),kM()}const m1=Ai;function Cs(){return oe.accounts.find(i=>i.id===oe.config?.last_selected_account)||oe.accounts[0]||null}function Go(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function Yp(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function $o(i){const e=Yp(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function g1(){const i=document.getElementById("pill-ram");if(!i||!oe.sys)return;const t=oe.instances[0]?.ram_mb||oe.config?.default_ram_mb||4096,n=oe.sys.total_ram_mb||16384,r=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),a=`${(t/1024).toFixed(1)} GB`;s?wg(s,a):i.innerHTML=`RAM <b id="ram-pill-val">${a}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${r/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${r/100})`)}const oi=i=>document.querySelector(i);function on(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function ya(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function xs(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function _1(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function Js(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ge={activeId:null};function ge(i,e="ok"){const t=on(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Bs=[];function Wt(i){const e=on(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Bs.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",r);const s=Bs.indexOf(e);s>=0&&Bs.splice(s,1),e.remove()},r=s=>{s.key==="Escape"&&Bs[Bs.length-1]===e&&(s.preventDefault(),s.stopPropagation(),n())};return window.addEventListener("keydown",r),e.addEventListener("click",s=>{s.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Ki={},Ci={};let Hh="home",Gd="home";function tt(i,e){const t=oi("#content");t&&(Gd=i,Hh=i,Ci.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===Hh)}),Tg(t,()=>{t.innerHTML="";const n=Ki[i];n&&n(t),zf(t)}))}const v1=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"settings",icon:"gear",label:"Ayarlar"}];function Kp(){const i=oi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Os.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Os.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Os.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${v1.map(r=>`
          <button class="rail-item" data-page="${r.page}">
            ${ie(r.icon,"ri-icon")}
            <span class="ri-label">${r.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=vs.window.getCurrentWindow();oi("#tb-min")?.addEventListener("click",()=>t.minimize()),oi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ge.activeId){t.minimize(),ge("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};oi("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(r=>{Ge.activeId&&(r?.preventDefault?.(),t.minimize(),ge("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const r=oi("#tb-max"),s=o=>{r&&(r.innerHTML=o?Os.restore:Os.max,r.title=o?"Geri Yükle":"Ekranı Kapla",r.setAttribute("aria-label",r.title))},a=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(a):vs.event?.listen&&vs.event.listen("tauri://resize",a),a()}catch{}document.querySelectorAll(".rail-item").forEach(r=>{r.addEventListener("click",()=>tt(r.dataset.page))}),Wo(),oi("#rail-account")?.addEventListener("click",()=>{oe.accounts.length?tt("settings"):vn()}),Sd(Array.from(document.querySelectorAll(".rail-item")))}function Wo(){const i=oi("#rail-account");if(!i)return;const e=Cs();if(!e){i.innerHTML=`<span class="ra-head ph">${ie("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Go(e)}" draggable="false" ${$o(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let Za=null;function vn(i){if(Za){Za.root.querySelector("#off-name")?.focus();return}const e=Wt(`
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
      <button class="btn primary lg" id="ms-go">${ie("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const r=()=>{n&&(n=!1,Za=null,e.close())};Za={root:t,close:r},t.querySelector("#off-go")?.addEventListener("click",async()=>{const s=t.querySelector("#off-name").value.trim();if(s.length<3)return ge("İsim en az 3 karakter olmalı","err");try{await se("cmd_add_offline_account",{name:s}),await tn(),zh(),ge(`Hoş geldin, ${s}!`),r(),i?.()}catch(a){ge(String(a),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const s=t.querySelector("#ms-status"),a=t.querySelector("#ms-go");a.disabled=!0,s.style.display="block",s.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await se("cmd_ms_login_begin");await tn(),zh(),ge(`Hoş geldin, ${o.name}!`),r(),i?.()}catch(o){s.textContent=String(o),a.disabled=!1}})}let Ja=0;async function x1(i){if(!oe.accounts.length){vn();return}if(Ge.activeId){ge("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++Ja;Ge.activeId=i;const{root:t,close:n}=Wt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),r=t.querySelector("#lp-bar"),s=t.querySelector("#lp-stage"),a=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),l=await Qn("launch-progress",f=>{if(e!==Ja)return;const g=f.payload;r.style.transform=`scaleX(${Math.min(1,Math.max(0,g.percent/100))})`,s.textContent=y1(g.stage),a.textContent=g.detail||""}),c=await Qn("game-log",f=>{if(e!==Ja)return;o.style.display="block";const g=document.createElement("div");g.textContent=f.payload,o.appendChild(g),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await Qn("game-exit",f=>{if(e!==Ja)return;Ge.activeId=null;const g=f.payload?.exit_code??f.payload?.code??-1;g===0?(s.textContent="Oyun kapatıldı",setTimeout(n,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${g})`,a.textContent="Canlı logdan detayları görebilirsin.")}),h=()=>{l(),c(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(h(),u.disconnect())});u.observe(document.body,{childList:!0});try{await se("cmd_launch_instance",{instanceId:i}),s.textContent="Oyun çalışıyor",a.textContent="İyi oyunlar!",r.style.transform="scaleX(1)",setTimeout(()=>{h(),n()},1500),await tn(!0)}catch(f){Ge.activeId=null,s.textContent="Başlatılamadı",a.textContent=String(f),a.style.color="var(--danger)"}}function y1(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}Qn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});Qn("game-started",i=>{Ge.activeId=i.payload,tn(!0)});Qn("game-exit",async()=>{window.__yikimRestart||(Ge.activeId=null,tn(!0))});Qn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&ge(`Kuruldu: ${e.filename}`),e.phase==="error"&&ge(`Hata: ${e.filename}`,"err")});let bn=null,Vh;Qn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!bn||!document.body.contains(bn))&&(bn=document.createElement("div"),bn.className="sm-panel",bn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(bn)),clearTimeout(Vh);const t=bn.querySelector("#sm-count"),n=bn.querySelector("#sm-fill"),r=bn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,r.appendChild(s);r.children.length>8;)r.firstElementChild?.remove();r.scrollTop=r.scrollHeight}e.done>=e.total&&(bn.querySelector(".sm-title").textContent="Standart modlar hazır",Vh=setTimeout(()=>{bn?.remove(),bn=null},4e3))});Qn("mod-install-progress",i=>{i.payload.phase});async function Zp(){try{await tn(),uM(),Kp(),tt("home"),mM(),vM()||_M(),S1()}catch(i){b1(i)}}async function S1(){try{const e=await(await mt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=Wt(`
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
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const r=t.querySelector("#upd-go");r.disabled=!0,r.textContent="İndiriliyor…";try{let s=0,a=0;await e.download(o=>{switch(o.event){case"Started":a=o.data.contentLength??0;break;case"Progress":s+=o.data.chunkLength;break;case"Finished":r.textContent="Kuruluyor…";break}a>0&&(r.textContent=`İndiriliyor… %${Math.round(s/a*100)}`)}),await e.install(),ge("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{vs.process.exit(0)}catch{window.location.reload()}},900)}catch(s){r.disabled=!1,r.textContent="İndir ve Kur",ge(`Güncelleme başarısız: ${s}`,"err")}})}catch{}}function b1(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}Zp();const yt=Object.freeze(Object.defineProperty({__proto__:null,$:oi,applyTheme:m1,applyWorld:Ai,boot:Zp,currentAccount:Cs,get currentPage(){return Gd},el:on,enterStage:zf,fileSrc:$t,fmtBytes:ya,fmtDuration:xs,fmtSpeed:_1,headAttrs:$o,headFallbackUrl:Yp,headUrl:Go,icon:ie,invoke:se,lamp:Js,launch:Ge,launchInstance:x1,listen:Qn,nav:Ci,navigate:tt,openExternal:Vo,openLoginModal:vn,openModal:Wt,openPath:Xp,pages:Ki,refreshState:tn,renderAccountPill:Wo,setupShell:Kp,state:oe,switchPress:bd,toast:ge,updateRamPill:g1},Symbol.toStringTag,{value:"Module"}));
