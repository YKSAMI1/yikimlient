import"./theme-QTap-Mp3.js";const d0="modulepreload",u0=function(i){return"/"+i},Mh={},bt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=u0(c),c in Mh)return;Mh[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":d0,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function Ki(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function zp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wr={duration:.5,overwrite:!1,delay:0},Su,tn,kt,ni=1e8,vt=1/ni,rd=Math.PI*2,h0=rd/4,f0=0,Up=Math.sqrt,p0=Math.cos,m0=Math.sin,jt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},aa=function(e){return typeof e=="number"},Mu=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},Eu=function(){return typeof window<"u"},xo=function(e){return It(e)||jt(e)},Np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,g0=/random\([^)]+\)/g,_0=/,\s*/g,Eh=/(?:-?\.?\d|\.)+/gi,Fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Op=/[+-]=-?[.\d]+/,v0=/[^,'"\[\]\s]+/gi,y0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,wi,od,ku,qn={},ul={},Bp,Hp=function(e){return(ul=rr(e,qn))&&Pn},wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qr=function(e,t){return!t&&console.warn(e)},Gp=function(e,t){return e&&(qn[e]=t)&&ul&&(ul[e]=t)||qn},Xr=function(){return 0},x0={suppressEvents:!0,isStart:!0,kill:!1},Qo={suppressEvents:!0,kill:!1},b0={suppressEvents:!0},Tu={},Pa=[],ld={},Vp,Un={},sc={},kh=30,jo=[],Au="",Ru=function(e){var t=e[0],n,a;if(Fi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=jo.length;a--&&!jo[a].targetTest(t););n=jo[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new um(e[a],n)))||e.splice(a,1);return e},ls=function(e){return e._gsap||Ru(ii(e))[0]._gsap},$p=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Mu(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},Zs=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},S0=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},hl=function(){var e=Pa.length,t=Pa.slice(0),n,a;for(ld={},Pa.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Cu=function(e){return!!(e._initted||e._startAt||e.add)},Wp=function(e,t,n,a){Pa.length&&!tn&&hl(),e.render(t,n,!!(tn&&t<0&&Cu(e))),Pa.length&&!tn&&hl()},qp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(v0).length<2?t:jt(e)?e.trim():e},Xp=function(e){return e},Xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},M0=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},rr=function(e,t){for(var n in t)e[n]=t[n];return e},wh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},zr=function(e){var t=e.parent||At,n=e.keyframes?M0(un(e.keyframes)):Xn;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},E0=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Yp=function(e,t,n,a,s){var r=e[a],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=r,t.parent=t._dp=e,t},zl=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[a]===t&&(e[a]=s),t._next=t._prev=t.parent=null},za=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},k0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cd=function(e,t,n,a){return e._startAt&&(tn?e._startAt.revert(Qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},w0=function i(e){return!e||e._ts&&i(e.parent)},Th=function(e){return e._repeat?or(e._tTime,e=e.duration()+e._rDelay)*e:0},or=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},pl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ul=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Nl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ul(e),n._dirty||cs(n,e)),e},Kp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pl(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},Li=function(e,t,n,a){return t.parent&&za(t),t._start=Tt((aa(n)?n:n||e!==At?Qn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yp(e,t,"_first","_last",e._sort?"_start":0),dd(t)||(e._recent=t),a||Kp(e,t),e._ts<0&&Nl(e,e._tTime),e},Zp=function(e,t){return(qn.ScrollTrigger||wu("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},Jp=function(e,t,n,a,s){if(Pu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vp!==Bn.frame)return Pa.push(e),e._lazy=[s,a],1},T0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},dd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},A0=function(e,t,n,a){var s=e.ratio,r=t<0||!t&&(!e._start&&T0(e)&&!(!e._initted&&dd(e))||(e._ts<0||e._dp._ts<0)&&!dd(e))?0:1,o=e._rDelay,c=0,l,d,h;if(o&&e._repeat&&(c=co(0,e._tDur,t),d=or(c,o),e._yoyo&&d&1&&(r=1-r),d!==or(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||tn||a||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Jp(e,t,a,n,c))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&cd(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&za(e,1),!n&&!tn&&(Gn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},R0=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},lr=function(e,t,n,a){var s=e._repeat,r=Tt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Tt(r*(s+1)+e._rDelay*s):r,o>0&&!a&&Nl(e,e._tTime=e._tDur*o),e.parent&&Ul(e),n||cs(e.parent,e),e},Ah=function(e){return e instanceof En?cs(e):lr(e,e._dur)},C0={_start:0,endTime:Xr,totalDuration:Xr},Qn=function i(e,t,n){var a=e.labels,s=e._recent||C0,r=e.duration()>=ni?s.endTime(!1):e._dur,o,c,l;return jt(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=r),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(un(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:r+c)):t==null?r:+t},Ur=function(e,t,n){var a=aa(t[1]),s=(a?2:1)+(e<2?0:1),r=t[s],o,c;if(a&&(r.duration=t[1]),r.parent=n,e){for(o=r,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=kn(c.vars.inherit)&&c.parent;r.immediateRender=kn(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Bt(t[0],r,t[s+1])},Ba=function(e,t){return e||e===0?t(e):t},co=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!jt(e)||!(t=y0.exec(e))?"":t[1]},L0=function(e,t,n){return Ba(n,function(a){return co(e,t,a)})},ud=[].slice,Qp=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==wi},P0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var s;return jt(a)&&!t||Qp(a,1)?(s=n).push.apply(s,ii(a)):n.push(a)})||n},ii=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):jt(e)&&!n&&(od||!cr())?ud.call((t||ku).querySelectorAll(e),0):un(e)?P0(e,n):Qp(e)?ud.call(e,0):e?[e]:[]},hd=function(e){return e=ii(e)[0]||qr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?qr("Invalid scope")||ku.createElement("div"):e)}},jp=function(e){return e.sort(function(){return .5-Math.random()})},em=function(e){if(It(e))return e;var t=Fi(e)?e:{each:e},n=ds(t.ease),a=t.from||0,s=parseFloat(t.base)||0,r={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,h=a;return jt(a)?d=h={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],h=a[1]),function(u,f,m){var _=(m||t).length,p=r[_],g,x,T,b,S,w,A,y,k;if(!p){if(k=t.grid==="auto"?0:(t.grid||[1,ni])[1],!k){for(A=-ni;A<(A=m[k++].getBoundingClientRect().left)&&k<_;);k<_&&k--}for(p=r[_]=[],g=c?Math.min(k,_)*d-.5:a%k,x=k===ni?0:c?_*h/k-.5:a/k|0,A=0,y=ni,w=0;w<_;w++)T=w%k-g,b=x-(w/k|0),p[w]=S=l?Math.abs(l==="y"?b:T):Up(T*T+b*b),S>A&&(A=S),S<y&&(y=S);a==="random"&&jp(p),p.max=A-y,p.min=y,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(k>_?_-1:l?l==="y"?_/k:k:Math.max(k,_/k))||0)*(a==="edges"?-1:1),p.b=_<0?s-_:s,p.u=dn(t.amount||t.each)||0,n=n&&_<0?W0(n):n}return _=(p[u]-p.min)/p.max||0,Tt(p.b+(n?n(_):_)*p.v)+p.u}},fd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Tt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(aa(n)?0:dn(n))}},tm=function(e,t){var n=un(e),a,s;return!n&&Fi(e)&&(a=n=e.radius||ni,e.values?(e=ii(e.values),(s=!aa(e[0]))&&(a*=a)):e=fd(e.increment)),Ba(t,n?It(e)?function(r){return s=e(r),Math.abs(s-r)<=a?s:r}:function(r){for(var o=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=ni,d=0,h=e.length,u,f;h--;)s?(u=e[h].x-o,f=e[h].y-c,u=u*u+f*f):u=Math.abs(e[h]-o),u<l&&(l=u,d=h);return d=!a||l<=a?e[d]:r,s||d===r||aa(r)?d:d+dn(r)}:fd(e))},nm=function(e,t,n,a){return Ba(un(e)?!t:n===!0?!!(n=0):!a,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},D0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(s,r){return r(s)},a)}},I0=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},z0=function(e,t,n){return am(e,t,0,1,n)},im=function(e,t,n){return Ba(n,function(a){return e[~~t(a)]})},U0=function i(e,t,n){var a=t-e;return un(e)?im(e,i(0,e.length),t):Ba(n,function(s){return(a+(s-e)%a)%a+e})},N0=function i(e,t,n){var a=t-e,s=a*2;return un(e)?im(e,i(0,e.length-1),t):Ba(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>a?s-r:r)})},Yr=function(e){return e.replace(g0,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_0);return nm(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},am=function(e,t,n,a,s){var r=t-e,o=a-n;return Ba(s,function(c){return n+((c-e)/r*o||0)})},F0=function i(e,t,n,a){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var r=jt(e),o={},c,l,d,h,u;if(n===!0&&(a=1)&&(n=null),r)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(d=[],h=e.length,u=h-2,l=1;l<h;l++)d.push(i(e[l-1],e[l]));h--,s=function(m){m*=h;var _=Math.min(u,~~m);return d[_](m-_)},n=t}else a||(e=rr(un(e)?[]:{},e));if(!d){for(c in t)Lu.call(o,e,c,"get",t[c]);s=function(m){return zu(m,o)||(r?e.p:e)}}}return Ba(n,s)},Rh=function(e,t,n){var a=e.labels,s=ni,r,o,c;for(r in a)o=a[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=r,s=o);return c},Gn=function(e,t,n){var a=e.vars,s=a[t],r=kt,o=e._ctx,c,l,d;if(s)return c=a[t+"Params"],l=a.callbackScope||e,n&&Pa.length&&hl(),o&&(kt=o),d=c?s.apply(l,c):s.call(l),kt=r,d},Rr=function(e){return za(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Gn(e,"onInterrupt"),e},Vs,sm=[],rm=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,n=It(e),a=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Xr,render:zu,add:Lu,kill:t_,modifier:e_,rawVars:0},r={targetTest:0,get:0,getSetter:Iu,aliases:{},register:0};if(cr(),e!==a){if(Un[t])return;Xn(a,Xn(fl(e,s),r)),rr(a.prototype,rr(s,fl(e,r))),Un[a.prop=t]=a,e.targetTest&&(jo.push(a),Tu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gp(t,a),e.register&&e.register(Pn,a,Tn)}else sm.push(e)},_t=255,Cr={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},rc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},om=function(e,t,n){var a=e?aa(e)?[e>>16,e>>8&_t,e&_t]:0:Cr.black,s,r,o,c,l,d,h,u,f,m;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cr[e])a=Cr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&_t,a&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(a=m=e.match(Eh),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,r=d<=.5?d*(l+1):d+l-d*l,s=d*2-r,a.length>3&&(a[3]*=1),a[0]=rc(c+1/3,s,r),a[1]=rc(c,s,r),a[2]=rc(c-1/3,s,r);else if(~e.indexOf("="))return a=e.match(Fp),n&&a.length<4&&(a[3]=1),a}else a=e.match(Eh)||Cr.transparent;a=a.map(Number)}return t&&!m&&(s=a[0]/_t,r=a[1]/_t,o=a[2]/_t,h=Math.max(s,r,o),u=Math.min(s,r,o),d=(h+u)/2,h===u?c=l=0:(f=h-u,l=d>.5?f/(2-h-u):f/(h+u),c=h===s?(r-o)/f+(r<o?6:0):h===r?(o-s)/f+2:(s-r)/f+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},lm=function(e){var t=[],n=[],a=-1;return e.split(Da).forEach(function(s){var r=s.match(Gs)||[];t.push.apply(t,r),n.push(a+=r.length+1)}),t.c=n,t},Ch=function(e,t,n){var a="",s=(e+a).match(Da),r=t?"hsla(":"rgba(",o=0,c,l,d,h;if(!s)return e;if(s=s.map(function(u){return(u=om(u,t,1))&&r+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=lm(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(Da,"1").split(Gs),h=l.length-1;o<h;o++)a+=l[o]+(~c.indexOf(o)?s.shift()||r+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!l)for(l=e.split(Da),h=l.length-1;o<h;o++)a+=l[o]+s[o];return a+l[h]},Da=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cr)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),O0=/hsl[a]?\(/,cm=function(e){var t=e.join(" "),n;if(Da.lastIndex=0,Da.test(t))return n=O0.test(t),e[1]=Ch(e[1],n),e[0]=Ch(e[0],n,lm(e[1])),!0},Kr,Bn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,s=1e3/240,r=s,o=[],c,l,d,h,u,f,m=function _(p){var g=i()-a,x=p===!0,T,b,S,w;if((g>e||g<0)&&(n+=g-t),a+=g,S=a-n,T=S-r,(T>0||x)&&(w=++h.frame,u=S-h.time*1e3,h.time=S=S/1e3,r+=T+(T>=s?4:s-T),b=1),x||(c=l(_)),b)for(f=0;f<o.length;f++)o[f](S,u,w,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Bp&&(!od&&Eu()&&(wi=od=window,ku=wi.document||{},qn.gsap=Pn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Pn.version),Hp(ul||wi.GreenSockGlobals||!wi.gsap&&wi||{}),sm.forEach(rm)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=d||function(p){return setTimeout(p,r-h.time*1e3+1|0)},Kr=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Kr=0,l=Xr},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),r=h.time*1e3+s},add:function(p,g,x){var T=g?function(b,S,w,A){p(b,S,w,A),h.remove(T)}:p;return h.remove(p),o[x?"unshift":"push"](T),cr(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h}(),cr=function(){return!Kr&&Bn.wake()},nt={},B0=/^[\d.\-M][\d.\-,\s]/,H0=/["']/g,G0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],s=1,r=n.length,o,c,l;s<r;s++)c=n[s],o=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(H0,"").trim():+l,a=c.substr(o+1).trim();return t},V0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},$0=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[G0(t[1])]:V0(e).split(",").map(qp)):nt._CE&&B0.test(e)?nt._CE("",e):n},W0=function(e){return function(t){return 1-e(1-t)}},ds=function(e,t){return e&&(It(e)?e:nt[e]||$0(e))||t},vs=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:a},r;return wn(e,function(o){nt[o]=qn[o]=s,nt[r=o.toLowerCase()]=n;for(var c in s)nt[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=nt[o+"."+c]=s[c]}),s},dm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oc=function i(e,t,n){var a=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/rd*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*m0((d-r)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:dm(o);return s=rd/s,c.config=function(l,d){return i(e,l,d)},c},lc=function i(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},a=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dm(n);return a.config=function(s){return i(e,s)},a};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;vs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;vs("Elastic",oc("in"),oc("out"),oc());(function(i,e){var t=1/e,n=2*t,a=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};vs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);vs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});vs("Circ",function(i){return-(Up(1-i*i)-1)});vs("Sine",function(i){return i===1?1:-p0(i*h0)+1});vs("Back",lc("in"),lc("out"),lc());nt.SteppedEase=nt.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),s=t?1:0,r=1-vt;return function(o){return((a*co(0,r,o)|0)+s)*n}}};Wr.ease=nt["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Au+=i+","+i+"Params,"});var um=function(e,t){this.id=f0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$p,this.set=t?t.getSetter:Iu},Zr=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,lr(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Kr||Bn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nl(this,n),!s._dp||s.parent||Kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wp(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,a):this._repeat?or(this._tTime,s)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?pl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this.totalDuration(),s),a!==!1),Ul(this),k0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Li(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pl(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=b0);var a=tn;return tn=n,Cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=a,this},e.globalTime=function(n){for(var a=this,s=arguments.length?n:a.rawTime();a;)s=a._start+s/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ah(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,Ah(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(Qn(this,n),kn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,kn(a)),this._dur||(this._zTime=-vt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=a&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,a,s){var r=this.vars;return arguments.length>1?(a?(r[n]=a,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=a)):delete r[n],this):r[n]},e.then=function(n){var a=this,s=a._prom;return new Promise(function(r){var o=It(n)?n:Xp,c=function(){var d=a.then;a.then=null,s&&s(),It(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),r(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){Rr(this)},i}();Xn(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var En=function(i){zp(e,i);function e(n,a){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),At&&Li(n.parent||At,Ki(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zp(Ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(a,s,r){return Ur(0,arguments,this),this},t.from=function(a,s,r){return Ur(1,arguments,this),this},t.fromTo=function(a,s,r,o){return Ur(2,arguments,this),this},t.set=function(a,s,r){return s.duration=0,s.parent=this,zr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Bt(a,s,Qn(this,r),1),this},t.call=function(a,s,r){return Li(this,Bt.delayedCall(0,a,s),r)},t.staggerTo=function(a,s,r,o,c,l,d){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=l,r.onCompleteParams=d,r.parent=this,new Bt(a,r,Qn(this,c)),this},t.staggerFrom=function(a,s,r,o,c,l,d){return r.runBackwards=1,zr(r).immediateRender=kn(r.immediateRender),this.staggerTo(a,s,r,o,c,l,d)},t.staggerFromTo=function(a,s,r,o,c,l,d,h){return o.startAt=r,zr(o).immediateRender=kn(o.immediateRender),this.staggerTo(a,s,o,c,l,d,h)},t.render=function(a,s,r){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:Tt(a),h=this._zTime<0!=a<0&&(this._initted||!l),u,f,m,_,p,g,x,T,b,S,w,A;if(this!==At&&d>c&&a>=0&&(d=c),d!==this._tTime||r||h){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),u=d,b=this._start,T=this._ts,g=!T,h&&(l||(o=this._zTime),(a||!s)&&(this._zTime=a)),this._repeat){if(w=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,s,r);if(u=Tt(d%p),d===c?(_=this._repeat,u=l):(S=Tt(d/p),_=~~S,_&&_===S&&(u=l,_--),u>l&&(u=l)),S=or(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(u=l-u,A=1),_!==S&&!this._lock){var y=w&&S&1,k=y===(w&&_&1);if(_<S&&(y=!y),o=y?0:d%l?l:d,this._lock=1,this.render(o||(A?0:Tt(_*p)),s,!l)._lock=0,this._tTime=d,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,k&&(this._lock=2,o=y?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=R0(this,Tt(o),Tt(u)),x&&(d-=u-(u=x._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!s&&!S&&(Gn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(a,s,r);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,r),u!==this._time||!this._ts&&!g){x=0,m&&(d+=this._zTime=-vt);break}}f=m}else{f=this._last;for(var R=a<0?a:u;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(a,s,r);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,r||tn&&Cu(f)),u!==this._time||!this._ts&&!g){x=0,m&&(d+=this._zTime=R?-vt:vt);break}}f=m}}if(x&&!s&&(this.pause(),x.render(u>=o?0:-vt)._zTime=u>=o?1:-1,this._ts))return this._start=b,Ul(this),this.render(a,s,r);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&za(this,1),!s&&!(a<0&&!o)&&(d||o||!c)&&(Gn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,s){var r=this;if(aa(s)||(s=Qn(this,s,a)),!(a instanceof Zr)){if(un(a))return a.forEach(function(o){return r.add(o,s)}),this;if(jt(a))return this.addLabel(a,s);if(It(a))a=Bt.delayedCall(0,a);else return this}return this!==a?Li(this,a,s):this},t.getChildren=function(a,s,r,o){a===void 0&&(a=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-ni);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Bt?s&&c.push(l):(r&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(a){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===a)return s[r]},t.remove=function(a){return jt(a)?this.removeLabel(a):It(a)?this.killTweensOf(a):(a.parent===this&&zl(this,a),a===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(a,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Bn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,s),this._forcing=0,this):this._tTime},t.addLabel=function(a,s){return this.labels[a]=Qn(this,s),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,s,r){var o=Bt.delayedCall(0,s||Xr,r);return o.data="isPause",this._hasPause=1,Li(this,o,Qn(this,a))},t.removePause=function(a){var s=this._first;for(a=Qn(this,a);s;)s._start===a&&s.data==="isPause"&&za(s),s=s._next},t.killTweensOf=function(a,s,r){for(var o=this.getTweensOf(a,r),c=o.length;c--;)Ea!==o[c]&&o[c].kill(a,s);return this},t.getTweensOf=function(a,s){for(var r=[],o=ii(a),c=this._first,l=aa(s),d;c;)c instanceof Bt?S0(c._targets,o)&&(l?(!Ea||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(d=c.getTweensOf(o,s)).length&&r.push.apply(r,d),c=c._next;return r},t.tweenTo=function(a,s){s=s||{};var r=this,o=Qn(r,a),c=s,l=c.startAt,d=c.onStart,h=c.onStartParams,u=c.immediateRender,f,m=Bt.to(r,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale())||vt,onStart:function(){if(r.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale());m._dur!==p&&lr(m,p,0,1).render(m._time,!0,!0),f=1}d&&d.apply(m,h||[])}},s));return u?m.render(0):m},t.tweenFromTo=function(a,s,r){return this.tweenTo(s,Xn({startAt:{time:Qn(this,a)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),Rh(this,Qn(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),Rh(this,Qn(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(a,s,r){r===void 0&&(r=0);var o=this._first,c=this.labels,l;for(a=Tt(a);o;)o._start>=r&&(o._start+=a,o._end+=a),o=o._next;if(s)for(l in c)c[l]>=r&&(c[l]+=a);return cs(this)},t.invalidate=function(a){var s=this._first;for(this._lock=0;s;)s.invalidate(a),s=s._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),cs(this)},t.totalDuration=function(a){var s=0,r=this,o=r._last,c=ni,l,d,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-a:a));if(r._dirty){for(h=r.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&r._sort&&o._ts&&!r._lock?(r._lock=1,Li(r,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(s-=d,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=Tt(d/r._ts),r._time-=d,r._tTime-=d),r.shiftChildren(-d,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;lr(r,r===At&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(a){if(At._ts&&(Wp(At,pl(a,At)),Vp=Bn.frame),Bn.frame>=kh){kh+=Wn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Wn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(Zr);Xn(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var q0=function(e,t,n,a,s,r,o){var c=new Tn(this._pt,e,t,0,1,_m,null,s),l=0,d=0,h,u,f,m,_,p,g,x;for(c.b=n,c.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=Yr(a)),r&&(x=[n,a],r(x,e,t),n=x[0],a=x[1]),u=n.match(ac)||[];h=ac.exec(a);)m=h[0],_=a.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[d++]&&(p=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:p,c:m.charAt(1)==="="?Zs(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},l=ac.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(Op.test(a)||g)&&(c.e=0),this._pt=c,c},Lu=function(e,t,n,a,s,r,o,c,l,d){It(a)&&(a=a(s||0,e,r));var h=e[t],u=n!=="get"?n:It(h)?l?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=It(h)?l?J0:mm:Du,m;if(jt(a)&&(~a.indexOf("random(")&&(a=Yr(a)),a.charAt(1)==="="&&(m=Zs(u,a)+(dn(u)||0),(m||m===0)&&(a=m))),!d||u!==a||pd)return!isNaN(u*a)&&a!==""?(m=new Tn(this._pt,e,t,+u||0,a-(u||0),typeof h=="boolean"?j0:gm,0,f),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&wu(t,a),q0.call(this,e,t,u,a,f,c||Wn.stringFilter,l))},X0=function(e,t,n,a,s){if(It(e)&&(e=Nr(e,s,t,n,a)),!Fi(e)||e.style&&e.nodeType||un(e)||Np(e))return jt(e)?Nr(e,s,t,n,a):e;var r={},o;for(o in e)r[o]=Nr(e[o],s,t,n,a);return r},hm=function(e,t,n,a,s,r){var o,c,l,d;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:X0(t[e],a,s,r,n),n,a,r)!==!1&&(n._pt=c=new Tn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Vs))for(l=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)l[o._props[d]]=c;return o},Ea,pd,Pu=function i(e,t,n){var a=e.vars,s=a.ease,r=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,h=a.yoyoEase,u=a.keyframes,f=a.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!Su,b=e.timeline,S=a.easeReverse||h,w,A,y,k,R,C,z,O,L,H,D,P,Y;if(b&&(!u||!s)&&(s="none"),e._ease=ds(s,Wr.ease),e._rEase=S&&(ds(S)||e._ease),e._from=!b&&!!a.runBackwards,e._from&&(e.ratio=1),!b||u&&!a.stagger){if(O=p[0]?ls(p[0]).harness:0,P=O&&a[O.prop],w=fl(a,Tu),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!f?_.render(-1,!0):_.revert(d&&m?Qo:x0),_._lazy=0),r){if(za(e._startAt=Bt.set(p,Xn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&kn(c),startAt:null,delay:0,onUpdate:l&&function(){return Gn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!f)&&e._startAt.revert(Qo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),y=Xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&kn(c),immediateRender:o,stagger:0,parent:g},w),P&&(y[O.prop]=P),za(e._startAt=Bt.set(p,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(Qo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&kn(c)||c&&!m,A=0;A<p.length;A++){if(R=p[A],z=R._gsap||Ru(p)[A]._gsap,e._ptLookup[A]=H={},ld[z.id]&&Pa.length&&hl(),D=x===p?A:x.indexOf(R),O&&(L=new O).init(R,P||w,e,D,x)!==!1&&(e._pt=k=new Tn(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(G){H[G]=k}),L.priority&&(C=1)),!O||P)for(y in w)Un[y]&&(L=hm(y,w,e,D,R,x))?L.priority&&(C=1):H[y]=k=Lu.call(e,R,y,"get",w[y],D,x,0,a.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(Ea=e,At.killTweensOf(R,H,e.globalTime(t)),Y=!e.parent,Ea=0),e._pt&&c&&(ld[z.id]=1)}C&&vm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Y,u&&t<=0&&b.render(ni,!0,!0)},Y0=function(e,t,n,a,s,r,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return pd=1,e.vars[t]="+=0",Pu(e,o),pd=0,c?qr(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(f=l.length;f--;)h=l[f],d=h._pt||h,d.s=(a||a===0)&&!s?a:d.s+(a||0)+r*d.c,d.c=n-d.s,h.e&&(h.e=Ut(n)+dn(h.e)),h.b&&(h.b=d.s+dn(h.b))},K0=function(e,t){var n=e[0]?ls(e[0]).harness:0,a=n&&n.aliases,s,r,o,c;if(!a)return t;s=rr({},t);for(r in a)if(r in s)for(c=a[r].split(","),o=c.length;o--;)s[c[o]]=s[r];return s},Z0=function(e,t,n,a){var s=t.ease||a||"power1.inOut",r,o;if(un(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},Nr=function(e,t,n,a,s){return It(e)?e.call(t,n,a,s):jt(e)&&~e.indexOf("random(")?Yr(e):e},fm=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pm={};wn(fm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return pm[i]=1});var Bt=function(i){zp(e,i);function e(n,a,s,r){var o;typeof a=="number"&&(s.duration=a,a=s,s=null),o=i.call(this,r?a:zr(a))||this;var c=o.vars,l=c.duration,d=c.delay,h=c.immediateRender,u=c.stagger,f=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=a.parent||At,x=(un(n)||Np(n)?aa(n[0]):"length"in a)?[n]:ii(n),T,b,S,w,A,y,k,R;if(o._targets=x.length?Ru(x):qr("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||u||xo(l)||xo(d)){a=o.vars;var C=a.easeReverse||a.yoyoEase;if(T=o.timeline=new En({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:x}),T.kill(),T.parent=T._dp=Ki(o),T._start=0,u||xo(l)||xo(d)){if(w=x.length,k=u&&em(u),Fi(u))for(A in u)~fm.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(b=0;b<w;b++)S=fl(a,pm),S.stagger=0,C&&(S.easeReverse=C),R&&rr(S,R),y=x[b],S.duration=+Nr(l,Ki(o),b,y,x),S.delay=(+Nr(d,Ki(o),b,y,x)||0)-o._delay,!u&&w===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(y,S,k?k(b,y,x):0),T._ease=nt.none;T.duration()?l=d=0:o.timeline=0}else if(m){zr(Xn(T.vars.defaults,{ease:"none"})),T._ease=ds(m.ease||a.ease||"none");var z=0,O,L,H;if(un(m))m.forEach(function(D){return T.to(x,D,">")}),T.duration();else{S={};for(A in m)A==="ease"||A==="easeEach"||Z0(A,m[A],S,m.easeEach);for(A in S)for(O=S[A].sort(function(D,P){return D.t-P.t}),z=0,b=0;b<O.length;b++)L=O[b],H={ease:L.e,duration:(L.t-(b?O[b-1].t:0))/100*l},H[A]=L.v,T.to(x,H,z),z+=H.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return f===!0&&!Su&&(Ea=Ki(o),At.killTweensOf(x),Ea=0),Li(g,Ki(o),s),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(h||!l&&!m&&o._start===Tt(g._time)&&kn(h)&&w0(Ki(o))&&g.data!=="nested")&&(o._tTime=-vt,o.render(Math.max(0,-d)||0)),p&&Zp(Ki(o),p),o}var t=e.prototype;return t.render=function(a,s,r){var o=this._time,c=this._tDur,l=this._dur,d=a<0,h=a>c-vt&&!d?c:a<vt?0:a,u,f,m,_,p,g,x,T;if(!l)A0(this,a,s,r);else if(h!==this._tTime||!a||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=h,T=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+a,s,r);if(u=Tt(h%_),h===c?(m=this._repeat,u=l):(p=Tt(h/_),m=~~p,m&&m===p?(u=l,m--):u>l&&(u=l)),g=this._yoyo&&m&1,g&&(u=l-u),p=or(this._tTime,_),u===o&&!r&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=r=1,this.render(Tt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Jp(this,d?a:u,r,s,h))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(a,s,r)}if(this._rEase){var b=u<o;if(b!==this._inv){var S=b?o:l-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(b?-1:1)/S:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/l);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Gn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),s,r)||this._startAt&&(this._zTime=a),this._onUpdate&&!s&&(d&&cd(this,a,s,r),Gn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&cd(this,a,!0,!0),(a||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&za(this,1),!s&&!(d&&!o)&&(h||o||g)&&(Gn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,s,r,o,c){Kr||Bn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Pu(this,l),d=this._ease(l/this._dur),Y0(this,a,s,r,o,d,l,c)?this.resetTo(a,s,r,o,1):(Nl(this,0),this.parent||Yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,s){if(s===void 0&&(s="all"),!a&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(a,s,Ea&&Ea.vars.overwrite!==!0)._first||Rr(this),this.parent&&r!==this.timeline.totalDuration()&&lr(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,c=a?ii(a):o,l=this._ptLookup,d=this._pt,h,u,f,m,_,p,g;if((!s||s==="all")&&E0(o,c))return s==="all"&&(this._pt=0),Rr(this);for(h=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},wn(s,function(x){return _[x]=1}),s=_),s=K0(o,s)),g=o.length;g--;)if(~c.indexOf(o[g])){u=l[g],s==="all"?(h[g]=s,m=u,f={}):(f=h[g]=h[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&zl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&d&&Rr(this),this},e.to=function(a,s){return new e(a,s,arguments[2])},e.from=function(a,s){return Ur(1,arguments)},e.delayedCall=function(a,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(a,s,r){return Ur(2,arguments)},e.set=function(a,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(a,s)},e.killTweensOf=function(a,s,r){return At.killTweensOf(a,s,r)},e}(Zr);Xn(Bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(i){Bt[i]=function(){var e=new En,t=ud.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Du=function(e,t,n){return e[t]=n},mm=function(e,t,n){return e[t](n)},J0=function(e,t,n,a){return e[t](a.fp,n)},Q0=function(e,t,n){return e.setAttribute(t,n)},Iu=function(e,t){return It(e[t])?mm:Mu(e[t])&&e.setAttribute?Q0:Du},gm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},j0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_m=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},zu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},e_=function(e,t,n,a){for(var s=this._pt,r;s;)r=s._next,s.p===a&&s.modifier(e,t,n),s=r},t_=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?zl(this,t,"_pt"):t.dep||(n=1),t=a;return!n},n_=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},vm=function(e){for(var t=e._pt,n,a,s,r;t;){for(n=t._next,a=s;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:r)?t._prev._next=t:s=t,(t._next=a)?a._prev=t:r=t,t=n}e._pt=s},Tn=function(){function i(t,n,a,s,r,o,c,l,d){this.t=n,this.s=s,this.c=r,this.p=a,this.r=o||gm,this.d=c||this,this.set=l||Du,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,s){this.mSet=this.mSet||this.set,this.set=n_,this.m=n,this.mt=s,this.tween=a},i}();wn(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Tu[i]=1});qn.TweenMax=qn.TweenLite=Bt;qn.TimelineLite=qn.TimelineMax=En;At=new En({sortChildren:!1,defaults:Wr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=cm;var us=[],el={},i_=[],Lh=0,a_=0,cc=function(e){return(el[e]||i_).map(function(t){return t()})},md=function(){var e=Date.now(),t=[];e-Lh>2&&(cc("matchMediaInit"),us.forEach(function(n){var a=n.queries,s=n.conditions,r,o,c,l;for(o in a)r=wi.matchMedia(a[o]).matches,r&&(c=1),r!==s[o]&&(s[o]=r,l=1);l&&(n.revert(),c&&t.push(n))}),cc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),Lh=e,cc("matchMedia"))},ym=function(){function i(t,n){this.selector=n&&hd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=a_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,s){It(n)&&(s=a,a=n,n=It);var r=this,o=function(){var l=kt,d=r.selector,h;return l&&l!==r&&l.data.push(r),s&&(r.selector=hd(s)),kt=r,h=a.apply(r,arguments),It(h)&&r._r.push(h),kt=l,r.selector=d,r.isReverted=!1,h};return r.last=o,n===It?o(r,function(c){return r.add(null,c)}):n?r[n]=o:o},e.ignore=function(n){var a=kt;kt=null,n(this),kt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Bt&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof En?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Bt)&&l.revert&&l.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var r=us.length;r--;)us[r].id===this.id&&us.splice(r,1)},e.revert=function(n){this.kill(n||{})},i}(),s_=function(){function i(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=i.prototype;return e.add=function(n,a,s){Fi(n)||(n={matches:n});var r=new ym(0,s||this.scope),o=r.conditions={},c,l,d;kt&&!r.selector&&(r.selector=kt.selector),this.contexts.push(r),a=r.add("onMatch",a),r.queries=n;for(l in n)l==="all"?d=1:(c=wi.matchMedia(n[l]),c&&(us.indexOf(r)<0&&us.push(r),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(md):c.addEventListener("change",md)));return d&&a(r,function(h){return r.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),ml={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return rm(a)})},timeline:function(e){return new En(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,a){jt(e)&&(e=ii(e)[0]);var s=ls(e||{}).get,r=n?Xp:qp;return n==="native"&&(n=""),e&&(t?r((Un[t]&&Un[t].get||s)(e,t,n,a)):function(o,c,l){return r((Un[o]&&Un[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var a=e.map(function(d){return Pn.quickSetter(d,t,n)}),s=a.length;return function(d){for(var h=s;h--;)a[h](d)}}e=e[0]||{};var r=Un[t],o=ls(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=r?function(d){var h=new r;Vs._pt=0,h.init(e,n?d+n:d,Vs,0,[e]),h.render(1,h),Vs._pt&&zu(1,Vs)}:o.set(e,c);return r?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,s=Pn.to(e,Xn((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),r=function(c,l,d){return s.resetTo(t,c,l,d)};return r.tween=s,r},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ds(e.ease,Wr.ease)),wh(Wr,e||{})},config:function(e){return wh(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,s=e.defaults,r=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Un[o]&&!qn[o]&&qr(t+" effect requires "+o+" plugin.")}),sc[t]=function(o,c,l){return n(ii(o),Xn(c||{},s),l)},r&&(En.prototype[t]=function(o,c,l){return this.add(sc[t](o,Fi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){nt[e]=ds(t)},parseEase:function(e,t){return arguments.length?ds(e,t):nt},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new En(e),a,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,a=At._first;a;)s=a._next,(t||!(!a._dur&&a instanceof Bt&&a.vars.onComplete===a._targets[0]))&&Li(n,a,a._start-a._delay),a=s;return Li(At,n,0),n},context:function(e,t){return e?new ym(e,t):kt},matchMedia:function(e){return new s_(e)},matchMediaRefresh:function(){return us.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||md()},addEventListener:function(e,t){var n=el[e]||(el[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=el[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:U0,wrapYoyo:N0,distribute:em,random:nm,snap:tm,normalize:z0,getUnit:dn,clamp:L0,splitColor:om,toArray:ii,selector:hd,mapRange:am,pipe:D0,unitize:I0,interpolate:F0,shuffle:jp},install:Hp,effects:sc,ticker:Bn,updateRoot:En.updateRoot,plugins:Un,globalTimeline:At,core:{PropTween:Tn,globals:Gp,Tween:Bt,Timeline:En,Animation:Zr,getCache:ls,_removeLinkedListItem:zl,reverting:function(){return tn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return Su=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ml[i]=Bt[i]});Bn.add(En.updateRoot);Vs=ml.to({},{duration:0});var r_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},o_=function(e,t){var n=e._targets,a,s,r;for(a in t)for(s=n.length;s--;)r=e._ptLookup[s][a],r&&(r=r.d)&&(r._pt&&(r=r_(r,a)),r&&r.modifier&&r.modifier(t[a],e,n[s],a))},dc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,s,r){r._onInit=function(o){var c,l;if(jt(s)&&(c={},wn(s,function(d){return c[d]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}o_(o,s)}}}},Pn=ml.registerPlugin({name:"attr",init:function(e,t,n,a,s){var r,o,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(c||0)+"",t[r],a,s,0,0,r),o.op=r,o.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dc("roundProps",fd),dc("modifiers"),dc("snap",tm))||ml;Bt.version=En.version=Pn.version="3.15.0";Bp=1;Eu()&&cr();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ph,ka,Js,Uu,ns,Dh,Nu,l_=function(){return typeof window<"u"},sa={},ja=180/Math.PI,Qs=Math.PI/180,Ms=Math.atan2,Ih=1e8,Fu=/([A-Z])/g,c_=/(left|right|width|margin|padding|x)/i,d_=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},u_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},h_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},f_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},xm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},m_=function(e,t,n){return e.style[t]=n},g_=function(e,t,n){return e.style.setProperty(t,n)},__=function(e,t,n){return e._gsap[t]=n},v_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},y_=function(e,t,n,a,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},x_=function(e,t,n,a,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Rt="transform",An=Rt+"Origin",b_=function i(e,t){var n=this,a=this.target,s=a.style,r=a._gsap;if(e in sa&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ji(a,o)}):this.tfm[e]=r.x?r[e]:Ji(a,e),e===An&&(this.tfm.zOrigin=r.zOrigin);else return Pi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;r.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},Sm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},S_=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fu,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)a[r]=this.tfm[r];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Nu(),(!s||!s.isStart)&&!n[Rt]&&(Sm(n),a.zOrigin&&n[An]&&(n[An]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Mm=function(e,t){var n={target:e,props:[],revert:S_,save:b_};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},Em,_d=function(e,t){var n=ka.createElementNS?ka.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ka.createElement(e);return n&&n.style?n:ka.createElement(e)},Vn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Fu,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,dr(t)||t,1)||""},zh="O,Moz,ms,Ms,Webkit".split(","),dr=function(e,t,n){var a=t||ns,s=a.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(zh[r]+e in s););return r<0?null:(r===3?"ms":r>=0?zh[r]:"")+e},vd=function(){l_()&&window.document&&(Ph=window,ka=Ph.document,Js=ka.documentElement,ns=_d("div")||{style:{}},_d("div"),Rt=dr(Rt),An=Rt+"Origin",ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Em=!!dr("perspective"),Nu=Pn.core.reverting,Uu=1)},Uh=function(e){var t=e.ownerSVGElement,n=_d("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),s;a.style.display="block",n.appendChild(a),Js.appendChild(n);try{s=a.getBBox()}catch{}return n.removeChild(a),Js.removeChild(n),s},Nh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},km=function(e){var t,n;try{t=e.getBBox()}catch{t=Uh(e),n=1}return t&&(t.width||t.height)||n||(t=Uh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nh(e,["x","cx","x1"])||0,y:+Nh(e,["y","cy","y1"])||0,width:0,height:0}:t},wm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&km(e))},Ua=function(e,t){if(t){var n=e.style,a;t in sa&&t!==An&&(t=Rt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(Fu,"-$1").toLowerCase())):n.removeAttribute(t)}},wa=function(e,t,n,a,s,r){var o=new Tn(e._pt,t,n,0,1,r?bm:xm);return e._pt=o,o.b=a,o.e=s,e._props.push(n),o},Fh={deg:1,rad:1,turn:1},M_={grid:1,flex:1},Na=function i(e,t,n,a){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=ns.style,c=c_.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),h=100,u=a==="px",f=a==="%",m,_,p,g;if(a===r||!s||Fh[a]||Fh[r])return s;if(r!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&wm(e),(f||r==="%")&&(sa[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],Ut(f?s/m*h:s/100*m);if(o[c?"width":"height"]=h+(u?r:a),_=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ka||!_.appendChild)&&(_=ka.body),p=_._gsap,p&&f&&p.width&&c&&p.time===Bn.time&&!p.uncache)return Ut(s/p.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+a,m=e[d],x?e.style[t]=x:Ua(e,t)}else(f||r==="%")&&!M_[Vn(_,"display")]&&(o.position=Vn(e,"position")),_===e&&(o.position="static"),_.appendChild(ns),m=ns[d],_.removeChild(ns),o.position="absolute";return c&&f&&(p=ls(_),p.time=Bn.time,p.width=_[d]),Ut(u?m*s/h:m&&s?h/m*s:0)},Ji=function(e,t,n,a){var s;return Uu||vd(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),sa[t]&&t!=="transform"?(s=Qr(e,a),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(Vn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||a||~(s+"").indexOf("calc("))&&(s=gl[t]&&gl[t](e,t,n)||Vn(e,t)||$p(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Na(e,t,s,n)+n:s},E_=function(e,t,n,a){if(!n||n==="none"){var s=dr(t,e,1),r=s&&Vn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var o=new Tn(this._pt,e.style,t,0,1,_m),c=0,l=0,d,h,u,f,m,_,p,g,x,T,b,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Vn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(_=e.style[t],e.style[t]=a,a=Vn(e,t)||a,_?e.style[t]=_:Ua(e,t)),d=[n,a],cm(d),n=d[0],a=d[1],u=n.match(Gs)||[],S=a.match(Gs)||[],S.length){for(;h=Gs.exec(a);)p=h[0],x=a.substring(c,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=u[l++]||"")&&(f=parseFloat(_)||0,b=_.substr((f+"").length),p.charAt(1)==="="&&(p=Zs(f,p)+b),g=parseFloat(p),T=p.substr((g+"").length),c=Gs.lastIndex-T.length,T||(T=T||Wn.units[t]||b,c===a.length&&(a+=T,o.e+=T)),b!==T&&(f=Na(e,t,_,T)||0),o._pt={_next:o._pt,p:x||l===1?x:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?bm:xm;return Op.test(a)&&(o.e=0),this._pt=o,o},Oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k_=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Oh[n]||n,t[1]=Oh[a]||a,t.join(" ")},w_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,s=t.u,r=n._gsap,o,c,l;if(s==="all"||s===!0)a.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],sa[o]&&(c=1,o=o==="transformOrigin"?An:Rt),Ua(n,o);c&&(Ua(n,Rt),r&&(r.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Qr(n,1),r.uncache=1,Sm(a)))}},gl={clearProps:function(e,t,n,a,s){if(s.data!=="isFromStart"){var r=e._pt=new Tn(e._pt,t,n,0,0,w_);return r.u=a,r.pr=-10,r.tween=s,e._props.push(n),1}}},Jr=[1,0,0,1,0,0],Tm={},Am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=Vn(e,Rt);return Am(t)?Jr:t.substr(7).match(Fp).map(Ut)},Ou=function(e,t){var n=e._gsap||ls(e),a=e.style,s=Bh(e),r,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Jr:s):(s===Jr&&!e.offsetParent&&e!==Js&&!n.svg&&(c=a.display,a.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Js.appendChild(e)),s=Bh(e),c?a.display=c:Ua(e,"display"),l&&(o?r.insertBefore(e,o):r?r.appendChild(e):Js.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yd=function(e,t,n,a,s,r){var o=e._gsap,c=s||Ou(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,h=o.xOffset||0,u=o.yOffset||0,f=c[0],m=c[1],_=c[2],p=c[3],g=c[4],x=c[5],T=t.split(" "),b=parseFloat(T[0])||0,S=parseFloat(T[1])||0,w,A,y,k;n?c!==Jr&&(A=f*p-m*_)&&(y=b*(p/A)+S*(-_/A)+(_*x-p*g)/A,k=b*(-m/A)+S*(f/A)-(f*x-m*g)/A,b=y,S=k):(w=km(e),b=w.x+(~T[0].indexOf("%")?b/100*w.width:b),S=w.y+(~(T[1]||T[0]).indexOf("%")?S/100*w.height:S)),a||a!==!1&&o.smooth?(g=b-l,x=S-d,o.xOffset=h+(g*f+x*_)-g,o.yOffset=u+(g*m+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[An]="0px 0px",r&&(wa(r,o,"xOrigin",l,b),wa(r,o,"yOrigin",d,S),wa(r,o,"xOffset",h,o.xOffset),wa(r,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},Qr=function(e,t){var n=e._gsap||new um(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,s=n.scaleX<0,r="px",o="deg",c=getComputedStyle(e),l=Vn(e,An)||"0",d,h,u,f,m,_,p,g,x,T,b,S,w,A,y,k,R,C,z,O,L,H,D,P,Y,G,Q,ee,ue,Me,Ne,De;return d=h=u=_=p=g=x=T=b=0,f=m=1,n.svg=!!(e.getCTM&&wm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[Rt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Rt]!=="none"?c[Rt]:"")),a.scale=a.rotate=a.translate="none"),A=Ou(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),l=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),yd(e,P||l,!!P||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==Jr&&(C=A[0],z=A[1],O=A[2],L=A[3],d=H=A[4],h=D=A[5],A.length===6?(f=Math.sqrt(C*C+z*z),m=Math.sqrt(L*L+O*O),_=C||z?Ms(z,C)*ja:0,x=O||L?Ms(O,L)*ja+_:0,x&&(m*=Math.abs(Math.cos(x*Qs))),n.svg&&(d-=S-(S*C+w*O),h-=w-(S*z+w*L))):(De=A[6],Me=A[7],Q=A[8],ee=A[9],ue=A[10],Ne=A[11],d=A[12],h=A[13],u=A[14],y=Ms(De,ue),p=y*ja,y&&(k=Math.cos(-y),R=Math.sin(-y),P=H*k+Q*R,Y=D*k+ee*R,G=De*k+ue*R,Q=H*-R+Q*k,ee=D*-R+ee*k,ue=De*-R+ue*k,Ne=Me*-R+Ne*k,H=P,D=Y,De=G),y=Ms(-O,ue),g=y*ja,y&&(k=Math.cos(-y),R=Math.sin(-y),P=C*k-Q*R,Y=z*k-ee*R,G=O*k-ue*R,Ne=L*R+Ne*k,C=P,z=Y,O=G),y=Ms(z,C),_=y*ja,y&&(k=Math.cos(y),R=Math.sin(y),P=C*k+z*R,Y=H*k+D*R,z=z*k-C*R,D=D*k-H*R,C=P,H=Y),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Ut(Math.sqrt(C*C+z*z+O*O)),m=Ut(Math.sqrt(D*D+De*De)),y=Ms(H,D),x=Math.abs(y)>2e-4?y*ja:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Am(Vn(e,Rt)),P&&e.setAttribute("transform",P))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=u+r,n.scaleX=Ut(f),n.scaleY=Ut(m),n.rotation=Ut(_)+o,n.rotationX=Ut(p)+o,n.rotationY=Ut(g)+o,n.skewX=x+o,n.skewY=T+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[An]=_l(l)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?A_:Em?Rm:T_,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},uc=function(e,t,n){var a=dn(t);return Ut(parseFloat(t)+parseFloat(Na(e,"x",n+"px",a)))+a},T_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rm(e,t)},Ga="0deg",vr="0px",Va=") ",Rm=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,T=n.zOrigin,b="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(h!==Ga||d!==Ga)){var w=parseFloat(d)*Qs,A=Math.sin(w),y=Math.cos(w),k;w=parseFloat(h)*Qs,k=Math.cos(w),r=uc(x,r,A*k*-T),o=uc(x,o,-Math.sin(w)*-T),c=uc(x,c,y*k*-T+T)}p!==vr&&(b+="perspective("+p+Va),(a||s)&&(b+="translate("+a+"%, "+s+"%) "),(S||r!==vr||o!==vr||c!==vr)&&(b+=c!==vr||S?"translate3d("+r+", "+o+", "+c+") ":"translate("+r+", "+o+Va),l!==Ga&&(b+="rotate("+l+Va),d!==Ga&&(b+="rotateY("+d+Va),h!==Ga&&(b+="rotateX("+h+Va),(u!==Ga||f!==Ga)&&(b+="skew("+u+", "+f+Va),(m!==1||_!==1)&&(b+="scale("+m+", "+_+Va),x.style[Rt]=b||"translate(0, 0)"},A_=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,T=parseFloat(r),b=parseFloat(o),S,w,A,y,k;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=Qs,l*=Qs,S=Math.cos(c)*h,w=Math.sin(c)*h,A=Math.sin(c-l)*-u,y=Math.cos(c-l)*u,l&&(d*=Qs,k=Math.tan(l-d),k=Math.sqrt(1+k*k),A*=k,y*=k,d&&(k=Math.tan(d),k=Math.sqrt(1+k*k),S*=k,w*=k)),S=Ut(S),w=Ut(w),A=Ut(A),y=Ut(y)):(S=h,y=u,w=A=0),(T&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Na(f,"x",r,"px"),b=Na(f,"y",o,"px")),(m||_||p||g)&&(T=Ut(T+m-(m*S+_*A)+p),b=Ut(b+_-(m*w+_*y)+g)),(a||s)&&(k=f.getBBox(),T=Ut(T+a/100*k.width),b=Ut(b+s/100*k.height)),k="matrix("+S+","+w+","+A+","+y+","+T+","+b+")",f.setAttribute("transform",k),x&&(f.style[Rt]=k)},R_=function(e,t,n,a,s){var r=360,o=jt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?ja:1),l=c-a,d=a+l+"deg",h,u;return o&&(h=s.split("_")[1],h==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),h==="cw"&&l<0?l=(l+r*Ih)%r-~~(l/r)*r:h==="ccw"&&l>0&&(l=(l-r*Ih)%r-~~(l/r)*r)),e._pt=u=new Tn(e._pt,t,n,a,l,u_),u.e=d,u.u="deg",e._props.push(n),u},Hh=function(e,t){for(var n in t)e[n]=t[n];return e},C_=function(e,t,n){var a=Hh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,c,l,d,h,u,f,m;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[Rt]=t,o=Qr(n,1),Ua(n,Rt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Rt],r[Rt]=t,o=Qr(n,1),r[Rt]=l);for(c in sa)l=a[c],d=o[c],l!==d&&s.indexOf(c)<0&&(f=dn(l),m=dn(d),h=f!==m?Na(n,c,l,m):parseFloat(l),u=parseFloat(d),e._pt=new Tn(e._pt,o,c,h,u-h,gd),e._pt.u=m||0,e._props.push(c));Hh(o,a)};wn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",s="Left",r=(e<3?[t,n,a,s]:[t+s,t+n,a+n,a+s]).map(function(o){return e<2?i+o:"border"+o+i});gl[e>1?"border"+i:i]=function(o,c,l,d,h){var u,f;if(arguments.length<4)return u=r.map(function(m){return Ji(o,m,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},r.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,h)}});var Cm={name:"css",register:vd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,s){var r=this._props,o=e.style,c=n.vars.startAt,l,d,h,u,f,m,_,p,g,x,T,b,S,w,A,y,k;Uu||vd(),this.styles=this.styles||Mm(e),y=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Un[_]&&hm(_,t,n,a,e,s)))){if(f=typeof d,m=gl[_],f==="function"&&(d=d.call(n,a,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Yr(d)),m)m(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",Da.lastIndex=0,Da.test(l)||(p=dn(l),g=dn(d),g?p!==g&&(l=Na(e,_,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,a,s,0,0,_),r.push(_),y.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,a,e,s):c[_],jt(l)&&~l.indexOf("random(")&&(l=Yr(l)),dn(l+"")||l==="auto"||(l+=Wn.units[_]||dn(Ji(e,_))||""),(l+"").charAt(1)==="="&&(l=Ji(e,_))):l=Ji(e,_),u=parseFloat(l),x=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),x&&(d=d.substr(2)),h=parseFloat(d),_ in Pi&&(_==="autoAlpha"&&(u===1&&Ji(e,"visibility")==="hidden"&&h&&(u=0),y.push("visibility",0,o.visibility),wa(this,o,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in sa,T){if(this.styles.save(_),k=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=Vn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=Vn(e,"perspective"),R?e.style.perspective=R:Ua(e,"perspective")}h=parseFloat(d)}if(b||(S=e._gsap,S.renderTransform&&!t.parseTransform||Qr(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Tn(this._pt,o,Rt,0,1,S.renderTransform,S,0,-1),b.dep=1),_==="scale")this._pt=new Tn(this._pt,S,"scaleY",S.scaleY,(x?Zs(S.scaleY,x+h):h)-S.scaleY||0,gd),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(An,0,o[An]),d=k_(d),S.svg?yd(e,d,0,w,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==S.zOrigin&&wa(this,S,"zOrigin",S.zOrigin,g),wa(this,o,_,_l(l),_l(d)));continue}else if(_==="svgOrigin"){yd(e,d,1,w,0,this);continue}else if(_ in Tm){R_(this,S,_,u,x?Zs(u,x+d):d);continue}else if(_==="smoothOrigin"){wa(this,S,"smooth",S.smooth,d);continue}else if(_==="force3D"){S[_]=d;continue}else if(_==="transform"){C_(this,d,e);continue}}else _ in o||(_=dr(_)||_);if(T||(h||h===0)&&(u||u===0)&&!d_.test(d)&&_ in o)p=(l+"").substr((u+"").length),h||(h=0),g=dn(d)||(_ in Wn.units?Wn.units[_]:p),p!==g&&(u=Na(e,_,l,g)),this._pt=new Tn(this._pt,T?S:o,_,u,(x?Zs(u,x+h):h)-u,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?p_:gd),this._pt.u=g||0,T&&k!==d?(this._pt.b=l,this._pt.e=k,this._pt.r=f_):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=h_);else if(_ in o)E_.call(this,e,_,l,x?x+d:d);else if(_ in e)this.add(e,_,l||e[_],x?x+d:d,a,s);else if(_!=="parseTransform"){wu(_,d);continue}T||(_ in o?y.push(_,0,o[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,l||e[_])),r.push(_)}}A&&vm(this)},render:function(e,t){if(t.tween._time||!Nu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Pi,getSetter:function(e,t,n){var a=Pi[t];return a&&a.indexOf(",")<0&&(t=a),t in sa&&t!==An&&(e._gsap.x||Ji(e,"x"))?n&&Dh===n?t==="scale"?v_:__:(Dh=n||{})&&(t==="scale"?y_:x_):e.style&&!Mu(e.style[t])?m_:~t.indexOf("-")?g_:Iu(e,t)},core:{_removeProperty:Ua,_getMatrix:Ou}};Pn.utils.checkPrefix=dr;Pn.core.getStyleSaver=Mm;(function(i,e,t,n){var a=wn(i+","+e+","+t,function(s){sa[s]=1});wn(e,function(s){Wn.units[s]="deg",Tm[s]=1}),Pi[a[13]]=i+","+e,wn(n,function(s){var r=s.split(":");Pi[r[1]]=a[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Wn.units[i]="px"});Pn.registerPlugin(Cm);var ra=Pn.registerPlugin(Cm)||Pn;ra.core.Tween;ra.matchMedia();function uo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Gh=new WeakMap;function L_(i,e){const t=Gh.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Gh.set(i,t),uo()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const r=document.createElement("span");r.textContent=e,r.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(s,r),i.appendChild(a),t.tween=ra.to([s,r],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Lm(i){if(uo())return;const e=Array.from(i.children).slice(0,8);e.length&&ra.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Bu(i){uo()||!i.length||ra.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Hu(i){uo()||ra.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function P_(i,e){if(uo()){e();return}ra.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{ra.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gu="186",D_=0,Vh=1,I_=2,tl=1,z_=2,Lr=3,hs=0,Rn=1,fi=2,ta=0,Fr=1,$h=2,Wh=3,qh=4,U_=5,Os=100,N_=101,F_=102,O_=103,B_=104,H_=200,G_=201,V_=202,$_=203,Pm=204,Dm=205,W_=206,q_=207,X_=208,Y_=209,K_=210,Z_=211,J_=212,Q_=213,j_=214,xd=0,bd=1,Sd=2,jr=3,Md=4,Ed=5,kd=6,wd=7,Vu=0,ev=1,tv=2,Ni=0,Im=1,zm=2,Um=3,Nm=4,Fm=5,Om=6,Bm=7,Hm=300,fs=301,ur=302,hc=303,fc=304,Fl=306,Td=1e3,Qi=1001,Ad=1002,qt=1003,nv=1004,bo=1005,en=1006,pc=1007,Ta=1008,Hn=1009,Gm=1010,Vm=1011,eo=1012,$u=1013,Oi=1014,Di=1015,Bi=1016,Wu=1017,qu=1018,to=1020,$m=35902,Wm=35899,qm=1021,Xm=1022,gi=1023,oa=1026,is=1027,Ym=1028,Xu=1029,ps=1030,Yu=1031,Ku=1033,nl=33776,il=33777,al=33778,sl=33779,Rd=35840,Cd=35841,Ld=35842,Pd=35843,Dd=36196,Id=37492,zd=37496,Ud=37488,Nd=37489,vl=37490,Fd=37491,Od=37808,Bd=37809,Hd=37810,Gd=37811,Vd=37812,$d=37813,Wd=37814,qd=37815,Xd=37816,Yd=37817,Kd=37818,Zd=37819,Jd=37820,Qd=37821,jd=36492,eu=36494,tu=36495,nu=36283,iu=36284,yl=36285,au=36286,iv=3200,su=0,av=1,Sa="",Nn="srgb",xl="srgb-linear",bl="linear",ft="srgb",mc=7680,sv=519,rv=512,ov=513,lv=514,Zu=515,cv=516,dv=517,Ju=518,uv=519,hv=35044,Xh="300 es",Ii=2e3,no=2001;function fv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pv(){const i=io("canvas");return i.style.display="block",i}const Yh={};function Kh(...i){const e="THREE."+i.shift();console.log(e,...i)}function Km(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Km(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=Km(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function js(...i){const e=i.join(" ");e in Yh||(Yh[e]=!0,Ge(...i))}function mv(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const gv={[xd]:bd,[Sd]:kd,[Md]:wd,[jr]:Ed,[bd]:xd,[kd]:Sd,[wd]:Md,[Ed]:jr};class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,ru=180/Math.PI;function ho(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function _v(i,e){return(i%e+e)%e}function gc(i,e,t){return(1-t)*i+t*e}function vv(i){return i*rl}function yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yv={degToRad:vv};class it{static{it.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fr{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],d=n[a+2],h=n[a+3],u=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(h!==_||c!==u||l!==f||d!==m){let p=c*u+l*f+d*m+h*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),T=Math.sin(x);g=Math.sin(g*x)/T,o=Math.sin(o*x)/T,c=c*g+u*o,l=l*g+f*o,d=d*g+m*o,h=h*g+_*o}else{c=c*g+u*o,l=l*g+f*o,d=d*g+m*o,h=h*g+_*o;const x=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=x,l*=x,d*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],h=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+d*h+c*f-l*u,e[t+1]=c*m+d*u+l*h-o*f,e[t+2]=l*m+d*f+o*u-c*h,e[t+3]=d*m-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),h=o(s/2),u=c(n/2),f=c(a/2),m=c(s/2);switch(r){case"XYZ":this._x=u*d*h+l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h+u*f*m;break;case"YZX":this._x=u*d*h+l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h-u*f*m;break;case"XZY":this._x=u*d*h-l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h+u*f*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(r-a)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(r-a)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+a*l-s*c,this._y=a*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-a*o,this._w=r*d-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{static{q.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),d=2*(o*t-s*a),h=2*(s*n-r*t);return this.x=t+c*l+r*h-o*d,this.y=n+c*d+o*l-s*h,this.z=a+c*h+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new q,Zh=new fr;class $e{static{$e.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],_=a[0],p=a[3],g=a[6],x=a[1],T=a[4],b=a[7],S=a[2],w=a[5],A=a[8];return s[0]=r*_+o*x+c*S,s[3]=r*p+o*T+c*w,s[6]=r*g+o*b+c*A,s[1]=l*_+d*x+h*S,s[4]=l*p+d*T+h*w,s[7]=l*g+d*b+h*A,s[2]=u*_+f*x+m*S,s[5]=u*p+f*T+m*w,s[8]=u*g+f*b+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+a*s*l-a*r*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*r-o*l,u=o*c-d*s,f=l*s-r*c,m=t*h+n*u+a*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(a*l-d*n)*_,e[2]=(o*n-a*r)*_,e[3]=u*_,e[4]=(d*t-a*c)*_,e[5]=(a*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(e,t)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new $e,Jh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){const i={enabled:!0,workingColorSpace:xl,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ft&&(a.r=na(a.r),a.g=na(a.g),a.b=na(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ft&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sa?bl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xl]:{primaries:e,whitePoint:n,transfer:bl,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),i}const et=xv();function na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Es;class bv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=io("canvas")),Es.width=e.width,Es.height=e.height;const a=Es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=na(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(na(t[n]/255)*255):t[n]=na(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sv=0;class Qu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(yc(a[r].image)):s.push(yc(a[r]))}else s=yc(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Mv=0;const xc=new q;class nn extends ys{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Qi,a=Qi,s=en,r=Ta,o=gi,c=Hn,l=nn.DEFAULT_ANISOTROPY,d=Sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=ho(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Hm;nn.DEFAULT_ANISOTROPY=1;class Ct{static{Ct.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,b=(f+1)/2,S=(g+1)/2,w=(d+u)/4,A=(h+_)/4,y=(m+p)/4;return T>b&&T>S?T<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(T),a=w/n,s=A/n):b>S?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=w/a,s=y/a):S<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),n=A/s,a=y/s),this.set(n,a,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-_)/x,this.z=(u-d)/x,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ev extends ys{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},s=new nn(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Qu(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Ev{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zm extends nn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=qt,this.minFilter=qt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kv extends nn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=qt,this.minFilter=qt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Et{static{Et.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p)}set(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),r=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=r*d,f=r*h,m=o*d,_=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,m=l*d,_=l*h;t[0]=u+_*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=f*o-m,t[6]=_+u*o,t[10]=r*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,m=l*d,_=l*h;t[0]=u-_*o,t[4]=-r*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*d,t[9]=_-u*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const u=r*d,f=r*h,m=o*d,_=o*h;t[0]=c*d,t[4]=m*l-f,t[8]=u*l+_,t[1]=c*h,t[5]=_*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,f=r*l,m=o*c,_=o*l;t[0]=c*d,t[4]=_-u*h,t[8]=m*h+f,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+m,t[10]=u-_*h}else if(e.order==="XZY"){const u=r*c,f=r*l,m=o*c,_=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+_,t[5]=r*d,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Tv)}lookAt(e,t,n){const a=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),fa.crossVectors(n,Dn),fa.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),fa.crossVectors(n,Dn)),fa.normalize(),So.crossVectors(Dn,fa),a[0]=fa.x,a[4]=So.x,a[8]=Dn.x,a[1]=fa.y,a[5]=So.y,a[9]=Dn.y,a[2]=fa.z,a[6]=So.z,a[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],T=n[7],b=n[11],S=n[15],w=a[0],A=a[4],y=a[8],k=a[12],R=a[1],C=a[5],z=a[9],O=a[13],L=a[2],H=a[6],D=a[10],P=a[14],Y=a[3],G=a[7],Q=a[11],ee=a[15];return s[0]=r*w+o*R+c*L+l*Y,s[4]=r*A+o*C+c*H+l*G,s[8]=r*y+o*z+c*D+l*Q,s[12]=r*k+o*O+c*P+l*ee,s[1]=d*w+h*R+u*L+f*Y,s[5]=d*A+h*C+u*H+f*G,s[9]=d*y+h*z+u*D+f*Q,s[13]=d*k+h*O+u*P+f*ee,s[2]=m*w+_*R+p*L+g*Y,s[6]=m*A+_*C+p*H+g*G,s[10]=m*y+_*z+p*D+g*Q,s[14]=m*k+_*O+p*P+g*ee,s[3]=x*w+T*R+b*L+S*Y,s[7]=x*A+T*C+b*H+S*G,s[11]=x*y+T*z+b*D+S*Q,s[15]=x*k+T*O+b*P+S*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=c*f-l*u,T=o*f-l*h,b=o*u-c*h,S=r*f-l*d,w=r*u-c*d,A=r*h-o*d;return t*(_*x-p*T+g*b)-n*(m*x-p*S+g*w)+a*(m*T-_*S+g*A)-s*(m*b-_*w+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(r*d-o*l)-n*(s*d-o*c)+a*(s*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=t*o-n*r,T=t*c-a*r,b=t*l-s*r,S=n*c-a*o,w=n*l-s*o,A=a*l-s*c,y=d*_-h*m,k=d*p-u*m,R=d*g-f*m,C=h*p-u*_,z=h*g-f*_,O=u*g-f*p,L=x*O-T*z+b*C+S*R-w*k+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return e[0]=(o*O-c*z+l*C)*H,e[1]=(a*z-n*O-s*C)*H,e[2]=(_*A-p*w+g*S)*H,e[3]=(u*w-h*A-f*S)*H,e[4]=(c*R-r*O-l*k)*H,e[5]=(t*O-a*R+s*k)*H,e[6]=(p*b-m*A-g*T)*H,e[7]=(d*A-u*b+f*T)*H,e[8]=(r*z-o*R+l*y)*H,e[9]=(n*R-t*z-s*y)*H,e[10]=(m*w-_*b+g*x)*H,e[11]=(h*b-d*w-f*x)*H,e[12]=(o*k-r*C-c*y)*H,e[13]=(t*C-n*k+a*y)*H,e[14]=(_*T-m*S-p*x)*H,e[15]=(d*S-h*T+u*x)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*r,0,l*c-a*o,d*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,h=o+o,u=s*l,f=s*d,m=s*h,_=r*d,p=r*h,g=o*h,x=c*l,T=c*d,b=c*h,S=n.x,w=n.y,A=n.z;return a[0]=(1-(_+g))*S,a[1]=(f+b)*S,a[2]=(m-T)*S,a[3]=0,a[4]=(f-b)*w,a[5]=(1-(u+g))*w,a[6]=(p+x)*w,a[7]=0,a[8]=(m+T)*A,a[9]=(p-x)*A,a[10]=(1-(u+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=ks.set(a[0],a[1],a[2]).length();const o=ks.set(a[4],a[5],a[6]).length(),c=ks.set(a[8],a[9],a[10]).length();s<0&&(r=-r),li.copy(this);const l=1/r,d=1/o,h=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=d,li.elements[5]*=d,li.elements[6]*=d,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,t.setFromRotationMatrix(li),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,a,s,r,o=Ii,c=!1){const l=this.elements,d=2*s/(t-e),h=2*s/(n-a),u=(t+e)/(t-e),f=(n+a)/(n-a);let m,_;if(c)m=s/(r-s),_=r*s/(r-s);else if(o===Ii)m=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===no)m=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Ii,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-a),u=-(t+e)/(t-e),f=-(n+a)/(n-a);let m,_;if(c)m=1/(r-s),_=r/(r-s);else if(o===Ii)m=-2/(r-s),_=-(r+s)/(r-s);else if(o===no)m=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new q,li=new Et,wv=new q(0,0,0),Tv=new q(1,1,1),fa=new q,So=new q,Dn=new q,jh=new Et,ef=new fr;class Fa{constructor(e=0,t=0,n=0,a=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],d=a[9],h=a[2],u=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const tf=new q,ws=new fr,Vi=new Et,Mo=new q,xr=new q,Rv=new q,Cv=new fr,nf=new q(1,0,0),af=new q(0,1,0),sf=new q(0,0,1),rf={type:"added"},Lv={type:"removed"},Ts={type:"childadded",child:null},bc={type:"childremoved",child:null};class an extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new q,t=new Fa,n=new fr,a=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(xr,Mo,this.up):Vi.lookAt(Mo,xr,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Vi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lv),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),h=r(e.shapes),u=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=a,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=et.workingColorSpace){if(e=_v(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Mc(r,s,e+1/3),this.g=Mc(r,s,e),this.b=Mc(r,s,e-1/3)}return et.colorSpaceToWorking(this,a),this}setStyle(e,t=Nn){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=Jm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return et.workingToColorSpace(ln.copy(this),e),Math.round(tt(ln.r*255,0,255))*65536+Math.round(tt(ln.g*255,0,255))*256+Math.round(tt(ln.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(ln.copy(this),t);const n=ln.r,a=ln.g,s=ln.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const h=r-o;switch(l=d<=.5?h/(r+o):h/(2-r-o),r){case n:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-n)/h+2;break;case s:c=(n-a)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Nn){et.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,a=ln.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(pa),this.setHSL(pa.h+e,pa.s+t,pa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pa),e.getHSL(Eo);const n=gc(pa.h,Eo.h,t),a=gc(pa.s,Eo.s,t),s=gc(pa.l,Eo.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new rt;rt.NAMES=Jm;class Dv extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ci=new q,$i=new q,Ec=new q,Wi=new q,As=new q,Rs=new q,of=new q,kc=new q,wc=new q,Tc=new q,Ac=new Ct,Rc=new Ct,Cc=new Ct;class pi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),ci.subVectors(e,t),a.cross(ci);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){ci.subVectors(a,t),$i.subVectors(n,t),Ec.subVectors(e,t);const r=ci.dot(ci),o=ci.dot($i),c=ci.dot(Ec),l=$i.dot($i),d=$i.dot(Ec),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,m=(r*d-o*c)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(r,Wi.y),c.addScaledVector(o,Wi.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Ac,s.x),r.addScaledVector(Rc,s.y),r.addScaledVector(Cc,s.z),r}static isFrontFacing(e,t,n,a){return ci.subVectors(n,t),$i.subVectors(e,t),ci.cross($i).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),ci.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;As.subVectors(a,n),Rs.subVectors(s,n),kc.subVectors(e,n);const c=As.dot(kc),l=Rs.dot(kc);if(c<=0&&l<=0)return t.copy(n);wc.subVectors(e,a);const d=As.dot(wc),h=Rs.dot(wc);if(d>=0&&h<=d)return t.copy(a);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(As,r);Tc.subVectors(e,s);const f=As.dot(Tc),m=Rs.dot(Tc);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Rs,o);const p=d*m-f*h;if(p<=0&&h-d>=0&&f-m>=0)return of.subVectors(s,a),o=(h-d)/(h-d+(f-m)),t.copy(a).addScaledVector(of,o);const g=1/(p+_+u);return r=_*g,o=u*g,t.copy(n).addScaledVector(As,r).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,di):di.fromBufferAttribute(s,r),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),wo.subVectors(this.max,br),Cs.subVectors(e.a,br),Ls.subVectors(e.b,br),Ps.subVectors(e.c,br),ma.subVectors(Ls,Cs),ga.subVectors(Ps,Ls),$a.subVectors(Cs,Ps);let t=[0,-ma.z,ma.y,0,-ga.z,ga.y,0,-$a.z,$a.y,ma.z,0,-ma.x,ga.z,0,-ga.x,$a.z,0,-$a.x,-ma.y,ma.x,0,-ga.y,ga.x,0,-$a.y,$a.x,0];return!Lc(t,Cs,Ls,Ps,wo)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Cs,Ls,Ps,wo))?!1:(To.crossVectors(ma,ga),t=[To.x,To.y,To.z],Lc(t,Cs,Ls,Ps,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new q,new q,new q,new q,new q,new q,new q,new q],di=new q,ko=new fo,Cs=new q,Ls=new q,Ps=new q,ma=new q,ga=new q,$a=new q,br=new q,wo=new q,To=new q,Wa=new q;function Lc(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){Wa.fromArray(i,s);const o=a.x*Math.abs(Wa.x)+a.y*Math.abs(Wa.y)+a.z*Math.abs(Wa.z),c=e.dot(Wa),l=t.dot(Wa),d=n.dot(Wa);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Ot=new q,Ao=new it;let Iv=0;class ia extends ys{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hv,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),a=yn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),a=yn(a,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qm extends ia{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jm extends ia{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ri extends ia{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zv=new fo,Sr=new q,Pc=new q;class Ol{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zv.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Sr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Pc)),this.expandByPoint(Sr.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uv=0;const Zn=new Et,Dc=new an,Ds=new q,In=new fo,Mr=new fo,Kt=new q;class xi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?jm:Qm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ri(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(In.min,Mr.min),In.expandByPoint(Kt),Kt.addVectors(In.max,Mr.max),In.expandByPoint(Kt)):(In.expandByPoint(Mr.min),In.expandByPoint(Mr.max))}In.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Kt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Kt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Kt.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(e,l),Kt.add(Ds)),a=Math.max(a,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ia(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new q,c[y]=new q;const l=new q,d=new q,h=new q,u=new it,f=new it,m=new it,_=new q,p=new q;function g(y,k,R){l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,k),h.fromBufferAttribute(n,R),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,k),m.fromBufferAttribute(s,R),d.sub(l),h.sub(l),f.sub(u),m.sub(u);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(C),p.copy(h).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(C),o[y].add(_),o[k].add(_),o[R].add(_),c[y].add(p),c[k].add(p),c[R].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,k=x.length;y<k;++y){const R=x[y],C=R.start,z=R.count;for(let O=C,L=C+z;O<L;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new q,b=new q,S=new q,w=new q;function A(y){S.fromBufferAttribute(a,y),w.copy(S);const k=o[y];T.copy(k),T.sub(S.multiplyScalar(S.dot(k))).normalize(),b.crossVectors(w,k);const C=b.dot(c[y])<0?-1:1;r.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,k=x.length;y<k;++y){const R=x[y],C=R.start,z=R.count;for(let O=C,L=C+z;O<L;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ia(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const a=new q,s=new q,r=new q,o=new q,c=new q,l=new q,d=new q,h=new q;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)a.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*d;for(let g=0;g<d;g++)u[m++]=l[f++]}return new ia(u,d,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(a[c]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new q,Nv=new q,Fv=new $e;class xa{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Ic.subVectors(n,t).cross(Nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(Ic),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fv.getNormalMatrix(e),a=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ov=0;class pr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=Fr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pm,this.blendDst=Dm,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xa().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new q,zc=new q,Ro=new q,Co=new q;class eh{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){zc.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Co.copy(this.origin).sub(zc);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ro),o=Co.dot(this.direction),c=-Co.dot(Ro),l=Co.lengthSq(),d=Math.abs(1-r*r);let h,u,f,m;if(d>0)if(h=r*c-o,u=r*o-c,m=s*d,h>=0)if(u>=-m)if(u<=m){const _=1/d;h*=_,u*=_,f=h*(h+r*u+2*o)+u*(r*h+u+2*c)+l}else u=s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(zc).addScaledVector(Ro,u),f}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),a=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,a,s){const r=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,h=e.x-r.x,u=e.y-r.y,f=e.z-r.z,m=t.x-r.x,_=t.y-r.y,p=t.z-r.z,g=n.x-r.x,x=n.y-r.y,T=n.z-r.z,b=Math.abs(c),S=Math.abs(l),w=Math.abs(d);let A,y,k,R,C,z,O,L,H,D,P,Y;if(b>=S&&b>=w?(k=c,z=h,H=m,Y=g,c>=0?(A=l,y=d,R=u,C=f,O=_,L=p,D=x,P=T):(A=d,y=l,R=f,C=u,O=p,L=_,D=T,P=x)):S>=w?(k=l,z=u,H=_,Y=x,l>=0?(A=d,y=c,R=f,C=h,O=p,L=m,D=T,P=g):(A=c,y=d,R=h,C=f,O=m,L=p,D=g,P=T)):(k=d,z=f,H=p,Y=T,d>=0?(A=c,y=l,R=h,C=u,O=m,L=_,D=g,P=x):(A=l,y=c,R=u,C=h,O=_,L=m,D=x,P=g)),k===0)return null;const G=A/k,Q=y/k,ee=1/k,ue=R-G*z,Me=C-Q*z,Ne=O-G*H,De=L-Q*H,He=D-G*Y,Z=P-Q*Y,ne=He*De-Z*Ne,he=ue*Z-Me*He,ze=Ne*Me-De*ue;if(a){if(ne<0||he<0||ze<0)return null}else if((ne<0||he<0||ze<0)&&(ne>0||he>0||ze>0))return null;const be=ne+he+ze;if(be===0)return null;const Oe=ee*(ne*z+he*H+ze*Y);return(be>0?Oe<0:Oe>0)?null:this.at(Oe/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eg extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lf=new Et,qa=new eh,Lo=new Ol,cf=new q,Po=new q,Do=new q,Io=new q,Uc=new q,zo=new q,df=new q,Uo=new q;class Yn extends an{constructor(e=new xi,t=new eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){zo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(Uc.fromBufferAttribute(h,e),r?zo.addScaledVector(Uc,d):zo.addScaledVector(Uc.sub(t),d))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),qa.copy(e.ray).recast(e.near),!(Lo.containsPoint(qa.origin)===!1&&(qa.intersectSphere(Lo,cf)===null||qa.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),qa.copy(e.ray).applyMatrix4(lf),!(n.boundingBox!==null&&qa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=r[p.materialIndex],x=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,S=T;b<S;b+=3){const w=o.getX(b),A=o.getX(b+1),y=o.getX(b+2);a=No(this,g,e,n,l,d,h,w,A,y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=No(this,r,e,n,l,d,h,x,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=r[p.materialIndex],x=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,S=T;b<S;b+=3){const w=b,A=b+1,y=b+2;a=No(this,g,e,n,l,d,h,w,A,y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=p,T=p+1,b=p+2;a=No(this,r,e,n,l,d,h,x,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Bv(i,e,t,n,a,s,r,o){let c;if(e.side===Rn?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===hs,o),c===null)return null;Uo.copy(o),Uo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Uo);return l<t.near||l>t.far?null:{distance:l,point:Uo.clone(),object:i}}function No(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,Po),i.getVertexPosition(c,Do),i.getVertexPosition(l,Io);const d=Bv(i,e,t,n,Po,Do,Io,df);if(d){const h=new q;pi.getBarycoord(df,Po,Do,Io,h),a&&(d.uv=pi.getInterpolatedAttribute(a,o,c,l,h,new it)),s&&(d.uv1=pi.getInterpolatedAttribute(s,o,c,l,h,new it)),r&&(d.normal=pi.getInterpolatedAttribute(r,o,c,l,h,new q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new q,materialIndex:0};pi.getNormal(Po,Do,Io,u.normal),d.face=u,d.barycoord=h}return d}class Hv extends nn{constructor(e=null,t=1,n=1,a,s,r,o,c,l=qt,d=qt,h,u){super(null,r,o,c,l,d,a,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xa=new Ol,Gv=new it(.5,.5),Fo=new q;class th{constructor(e=new xa,t=new xa,n=new xa,a=new xa,s=new xa,r=new xa){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],d=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],T=s[13],b=s[14],S=s[15];if(a[0].setComponents(l-r,f-d,g-m,S-x).normalize(),a[1].setComponents(l+r,f+d,g+m,S+x).normalize(),a[2].setComponents(l+o,f+h,g+_,S+T).normalize(),a[3].setComponents(l-o,f-h,g-_,S-T).normalize(),n)a[4].setComponents(c,u,p,b).normalize(),a[5].setComponents(l-c,f-u,g-p,S-b).normalize();else if(a[4].setComponents(l-c,f-u,g-p,S-b).normalize(),t===Ii)a[5].setComponents(l+c,f+u,g+p,S+b).normalize();else if(t===no)a[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(e){Xa.center.set(0,0,0);const t=Gv.distanceTo(e.center);return Xa.radius=.7071067811865476+t,Xa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Fo.x=a.normal.x>0?e.max.x:e.min.x,Fo.y=a.normal.y>0?e.max.y:e.min.y,Fo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tg extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sl=new q,Ml=new q,uf=new Et,Er=new eh,Oo=new Ol,Nc=new q,hf=new q;class Vv extends an{constructor(e=new xi,t=new tg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)Sl.fromBufferAttribute(t,a-1),Ml.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Sl.distanceTo(Ml);e.setAttribute("lineDistance",new ri(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(a),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;uf.copy(a).invert(),Er.copy(e.ray).applyMatrix4(uf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=l){const g=d.getX(_),x=d.getX(_+1),T=Bo(this,e,Er,c,g,x,_);T&&t.push(T)}if(this.isLineLoop){const _=d.getX(m-1),p=d.getX(f),g=Bo(this,e,Er,c,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=l){const g=Bo(this,e,Er,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Bo(this,e,Er,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(i,e,t,n,a,s,r){const o=i.geometry.attributes.position;if(Sl.fromBufferAttribute(o,a),Ml.fromBufferAttribute(o,s),t.distanceSqToSegment(Sl,Ml,Nc,hf)>n)return;Nc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Nc);if(!(l<e.near||l>e.far))return{distance:l,point:hf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const ff=new q,pf=new q;class $v extends Vv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)ff.fromBufferAttribute(t,a),pf.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ff.distanceTo(pf);e.setAttribute("lineDistance",new ri(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ng extends nn{constructor(e=[],t=fs,n,a,s,r,o,c,l,d){super(e,t,n,a,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends nn{constructor(e,t,n,a,s,r,o,c,l){super(e,t,n,a,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends nn{constructor(e,t,n=Oi,a,s,r,o=qt,c=qt,l,d=oa,h=1){if(d!==oa&&d!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,a,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Wv extends ao{constructor(e,t=Oi,n=fs,a,s,r=qt,o=qt,c,l=oa){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,a,s,r,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ag extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class la extends xi{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],h=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,a,r,2),m("x","z","y",1,-1,e,n,-t,a,r,3),m("x","y","z",1,-1,e,t,n,a,s,4),m("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(d,3)),this.setAttribute("uv",new ri(h,2));function m(_,p,g,x,T,b,S,w,A,y,k){const R=b/A,C=S/y,z=b/2,O=S/2,L=w/2,H=A+1,D=y+1;let P=0,Y=0;const G=new q;for(let Q=0;Q<D;Q++){const ee=Q*C-O;for(let ue=0;ue<H;ue++){const Me=ue*R-z;G[_]=Me*x,G[p]=ee*T,G[g]=L,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[g]=w>0?1:-1,d.push(G.x,G.y,G.z),h.push(ue/A),h.push(1-Q/y),P+=1}}for(let Q=0;Q<y;Q++)for(let ee=0;ee<A;ee++){const ue=u+ee+H*Q,Me=u+ee+H*(Q+1),Ne=u+(ee+1)+H*(Q+1),De=u+(ee+1)+H*Q;c.push(ue,Me,De),c.push(Me,Ne,De),Y+=6}o.addGroup(f,Y,k),f+=Y,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bl extends xi{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,h=e/o,u=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<d;g++){const x=g*u-r;for(let T=0;T<l;T++){const b=T*h-s;m.push(b,-x,0),_.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<o;x++){const T=x+l*g,b=x+l*(g+1),S=x+1+l*(g+1),w=x+1+l*g;f.push(T,b,w),f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new ri(m,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}function hr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(mf(a))a.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(mf(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=hr(i[t]);for(const a in n)e[a]=n[a]}return e}function mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Xv={clone:hr,merge:mn};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(a.value);break;case"v2":this.uniforms[n].value=new it().fromArray(a.value);break;case"v3":this.uniforms[n].value=new q().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(a.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(a.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zv extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class El extends pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Vu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jv extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gf(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class jv{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&a.onStart!==void 0&&a.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,a.onProgress!==void 0&&a.onProgress(d,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ey=new jv;class rg{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class ty extends rg{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Fc.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let h=Is.get(r);h===void 0&&(h=[],Is.set(r,h)),h.push({onLoad:t,onError:a})}return r}const o=io("img");function c(){d(),t&&t(this);const h=Is.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Is.delete(this),s.manager.itemEnd(e)}function l(h){d(),a&&a(h),Fc.remove(`image:${e}`);const u=Is.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(h)}Is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fc.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class og extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Oc=new Et,_f=new q,vf=new q;class ny{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,c=a?a.x/s.x:0,l=a?a.y/s.y:0;e.coordinateSystem===no||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ho=new q,Go=new fr,Mi=new q;class lg extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ho,Go,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _a=new q,yf=new it,xf=new it;class ti extends lg{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ru*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_a.x,_a.y).multiplyScalar(-e/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_a.x,_a.y).multiplyScalar(-e/_a.z)}getViewSize(e,t){return this.getViewBounds(e,yf,xf),t.subVectors(xf,yf)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rl*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nh extends lg{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iy extends ny{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bf extends og{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new iy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ay extends og{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const zs=-90,Us=1;class sy extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(zs,Us,e,t);a.layers=this.layers,this.add(a);const s=new ti(zs,Us,e,t);s.layers=this.layers,this.add(s);const r=new ti(zs,Us,e,t);r.layers=this.layers,this.add(r);const o=new ti(zs,Us,e,t);o.layers=this.layers,this.add(o);const c=new ti(zs,Us,e,t);c.layers=this.layers,this.add(c);const l=new ti(zs,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ry extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sf=new Et;class oy{constructor(e,t,n=0,a=1/0){this.ray=new eh(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(Mf),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)ou(e[a],this,n,t);return n.sort(Mf),n}}function Mf(i,e){return i.distance-e.distance}function ou(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ou(s[r],e,t,!0)}}class ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class cg{static{cg.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}}function Ef(i,e,t,n){const a=cy(n);switch(t){case qm:return i*e;case Ym:return i*e/a.components*a.byteLength;case Xu:return i*e/a.components*a.byteLength;case ps:return i*e*2/a.components*a.byteLength;case Yu:return i*e*2/a.components*a.byteLength;case Xm:return i*e*3/a.components*a.byteLength;case gi:return i*e*4/a.components*a.byteLength;case Ku:return i*e*4/a.components*a.byteLength;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Pd:return Math.max(i,16)*Math.max(e,8)/4;case Rd:case Ld:return Math.max(i,8)*Math.max(e,8)/2;case Dd:case Id:case Ud:case Nd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zd:case vl:case Fd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jd:case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cy(i){switch(i){case Hn:case Gm:return{byteLength:1,components:1};case eo:case Vm:case Bi:return{byteLength:2,components:1};case Wu:case qu:return{byteLength:2,components:4};case Oi:case $u:case Di:return{byteLength:4,components:1};case $m:case Wm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function dy(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<h.length;f++){const m=h[u],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
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
#endif`,fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
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
#endif`,ky=`#ifdef USE_BUMPMAP
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ix=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,cx=`uniform sampler2D dfgLUT;
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
}`,dx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,vb=`#if DEPTH_PACKING == 3200
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
}`,yb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Tb=`#define LAMBERT
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
}`,Ab=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,zb=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,Nb=`#define TOON
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
}`,Fb=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 color;
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
}`,Vb=`uniform float rotation;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:uy,alphahash_pars_fragment:hy,alphamap_fragment:fy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:yy,batching_vertex:xy,begin_vertex:by,beginnormal_vertex:Sy,bsdfs:My,iridescence_fragment:Ey,bumpmap_pars_fragment:ky,clipping_planes_fragment:wy,clipping_planes_pars_fragment:Ty,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Ry,color_fragment:Cy,color_pars_fragment:Ly,color_pars_vertex:Py,color_vertex:Dy,common:Iy,cube_uv_reflection_fragment:zy,defaultnormal_vertex:Uy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Fy,emissivemap_fragment:Oy,emissivemap_pars_fragment:By,colorspace_fragment:Hy,colorspace_pars_fragment:Gy,envmap_fragment:Vy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Wy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:ix,envmap_vertex:Xy,fog_vertex:Yy,fog_pars_vertex:Ky,fog_fragment:Zy,fog_pars_fragment:Jy,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:jy,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:ax,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:dx,lights_fragment_maps:ux,lights_fragment_end:hx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:xx,map_particle_pars_fragment:bx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Ex,morphcolor_vertex:kx,morphnormal_vertex:wx,morphtarget_pars_vertex:Tx,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Lx,normal_pars_vertex:Px,normal_vertex:Dx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:Bx,premultiplied_alpha_fragment:Hx,project_vertex:Gx,dithering_fragment:Vx,dithering_pars_fragment:$x,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:jx,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:ab,transmission_fragment:sb,transmission_pars_fragment:rb,uv_pars_fragment:ob,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:db,background_vert:ub,background_frag:hb,backgroundCube_vert:fb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:vb,distance_vert:yb,distance_frag:xb,equirect_vert:bb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:Eb,meshbasic_vert:kb,meshbasic_frag:wb,meshlambert_vert:Tb,meshlambert_frag:Ab,meshmatcap_vert:Rb,meshmatcap_frag:Cb,meshnormal_vert:Lb,meshnormal_frag:Pb,meshphong_vert:Db,meshphong_frag:Ib,meshphysical_vert:zb,meshphysical_frag:Ub,meshtoon_vert:Nb,meshtoon_frag:Fb,points_vert:Ob,points_frag:Bb,shadow_vert:Hb,shadow_frag:Gb,sprite_vert:Vb,sprite_frag:$b},ve={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ti={basic:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:mn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:mn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:mn([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:mn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:mn([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:mn([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:mn([ve.common,ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:mn([ve.lights,ve.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ti.physical={uniforms:mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Vo={r:0,b:0,g:0},Wb=new Et,ug=new $e;ug.set(-1,0,0,0,1,0,0,0,1);function qb(i,e,t,n,a,s){const r=new rt(0);let o=a===!0?0:1,c,l,d=null,h=0,u=null;function f(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const b=x.backgroundBlurriness>0;T=e.get(T,b)}return T}function m(x){let T=!1;const b=f(x);b===null?p(r,o):b&&b.isColor&&(p(b,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,T){const b=f(T);b&&(b.isCubeTexture||b.mapping===Fl)?(l===void 0&&(l=new Yn(new la(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:hr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ug),l.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,(d!==b||h!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Yn(new Bl(2,2),new Hi({name:"BackgroundMaterial",uniforms:hr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,T){x.getRGB(Vo,sg(i)),t.buffers.color.setClear(Vo.r,Vo.g,Vo.b,T,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,T=1){r.set(x),o=T,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(r,o)},render:m,addToRenderList:_,dispose:g}}function Xb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let s=a,r=!1;function o(C,z,O,L,H){let D=!1;const P=h(C,L,O,z);s!==P&&(s=P,l(s.object)),D=f(C,L,O,H),D&&m(C,L,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,b(C,z,O,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function h(C,z,O,L){const H=L.wireframe===!0;let D=n[z.id];D===void 0&&(D={},n[z.id]=D);const P=C.isInstancedMesh===!0?C.id:0;let Y=D[P];Y===void 0&&(Y={},D[P]=Y);let G=Y[O.id];G===void 0&&(G={},Y[O.id]=G);let Q=G[H];return Q===void 0&&(Q=u(c()),G[H]=Q),Q}function u(C){const z=[],O=[],L=[];for(let H=0;H<t;H++)z[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,z,O,L){const H=s.attributes,D=z.attributes;let P=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){const ee=H[G];let ue=D[G];if(ue===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;P++}return s.attributesNum!==P||s.index!==L}function m(C,z,O,L){const H={},D=z.attributes;let P=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){let ee=D[G];ee===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),H[G]=ue,P++}s.attributes=H,s.attributesNum=P,s.index=L}function _(){const C=s.newAttributes;for(let z=0,O=C.length;z<O;z++)C[z]=0}function p(C){g(C,0)}function g(C,z){const O=s.newAttributes,L=s.enabledAttributes,H=s.attributeDivisors;O[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),H[C]!==z&&(i.vertexAttribDivisor(C,z),H[C]=z)}function x(){const C=s.newAttributes,z=s.enabledAttributes;for(let O=0,L=z.length;O<L;O++)z[O]!==C[O]&&(i.disableVertexAttribArray(O),z[O]=0)}function T(C,z,O,L,H,D,P){P===!0?i.vertexAttribIPointer(C,z,O,H,D):i.vertexAttribPointer(C,z,O,L,H,D)}function b(C,z,O,L){_();const H=L.attributes,D=O.getAttributes(),P=z.defaultAttributeValues;for(const Y in D){const G=D[Y];if(G.location>=0){let Q=H[Y];if(Q===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const ee=Q.normalized,ue=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;const Ne=Me.buffer,De=Me.type,He=Me.bytesPerElement,Z=De===i.INT||De===i.UNSIGNED_INT||Q.gpuType===$u;if(Q.isInterleavedBufferAttribute){const ne=Q.data,he=ne.stride,ze=Q.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)g(G.location+be,ne.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<G.locationSize;be++)p(G.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let be=0;be<G.locationSize;be++)T(G.location+be,ue/G.locationSize,De,ee,he*He,(ze+ue/G.locationSize*be)*He,Z)}else{if(Q.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)g(G.location+ne,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ne=0;ne<G.locationSize;ne++)T(G.location+ne,ue/G.locationSize,De,ee,ue*He,ue/G.locationSize*ne*He,Z)}}else if(P!==void 0){const ee=P[Y];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(G.location,ee);break;case 3:i.vertexAttrib3fv(G.location,ee);break;case 4:i.vertexAttrib4fv(G.location,ee);break;default:i.vertexAttrib1fv(G.location,ee)}}}}x()}function S(){k();for(const C in n){const z=n[C];for(const O in z){const L=z[O];for(const H in L){const D=L[H];for(const P in D)d(D[P].object),delete D[P];delete L[H]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const O in z){const L=z[O];for(const H in L){const D=L[H];for(const P in D)d(D[P].object),delete D[P];delete L[H]}}delete n[C.id]}function A(C){for(const z in n){const O=n[z];for(const L in O){const H=O[L];if(H[C.id]===void 0)continue;const D=H[C.id];for(const P in D)d(D[P].object),delete D[P];delete H[C.id]}}}function y(C){for(const z in n){const O=n[z],L=C.isInstancedMesh===!0?C.id:0,H=O[L];if(H!==void 0){for(const D in H){const P=H[D];for(const Y in P)d(P[Y].object),delete P[Y];delete H[D]}delete O[L],Object.keys(O).length===0&&delete n[z]}}}function k(){R(),r=!0,s!==a&&(s=a,l(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:k,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Yb(i,e,t){let n;function a(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Kb(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==gi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&A!==Di&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ge("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:b,maxSamples:S,samples:w}}function Zb(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new xa,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||a;return a=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!a||m===null||m.length===0||s&&!p)s?d(null):l();else{const x=s?0:n,T=x*4;let b=g.clippingState||null;c.value=b,b=d(m,u,T,f);for(let S=0;S!==T;++S)b[S]=t[S];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,b=f;T!==_;++T,b+=4)r.copy(h[T]).applyMatrix4(x,o),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const $s=4,Jb=6,Qb=20,jb=256,kr=new nh,kf=new rt;let Bc=null,Hc=0,Gc=0,Vc=!1;const eS=new q,Ya=new q;class wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=eS}=s;Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,Hc,Gc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Bi,format:gi,colorSpace:xl,depthBuffer:!1},a=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tS(s)),this._blurMaterial=iS(s,e,t),this._ggxMaterial=nS(s,e,t)}return a}_compileMaterial(e){const t=new Yn(new xi,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,a,s){const c=new ti(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kf),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new la,new eg({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(kf),g=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[T]));const S=this._cubeSize;Ns(a,b*S,T>2?S:0,S,S),h.setRenderTarget(a),g&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===fs||e.mapping===ur;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ns(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=l*1.25,f=h*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-$s?n-m+$s:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Ns(s,p,g,3*_,2*_),a.setRenderTarget(s),a.render(o,kr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Ns(e,p,g,3*_,2*_),a.setRenderTarget(e),a.render(o,kr)}_blur(e,t,n,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,a,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],h=3*d*(a>this._lodMax-$s?a-this._lodMax+$s:0),u=4*(this._cubeSize-d);Ns(t,h,u,3*d,2*d),r.setRenderTarget(t),r.render(c,kr)}}function tS(i){const e=[],t=[];let n=i;const a=i-$s+1+Jb;for(let s=0;s<a;s++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,u=6,f=3,m=new Float32Array(f*u*h),_=new Float32Array(f*u*h);for(let g=0;g<h;g++){const x=g%3*2/3-1,T=g>2?0:-1,b=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];m.set(b,f*u*g);for(let S=0;S<u;S++){const w=d[S*2]*2-1,A=d[S*2+1]*2-1;g===0?Ya.set(1,A,w):g===1?Ya.set(-w,1,-A):g===2?Ya.set(-w,A,1):g===3?Ya.set(-1,A,-w):g===4?Ya.set(-w,-1,A):Ya.set(w,A,-1),Ya.toArray(_,(g*u+S)*f)}}const p=new xi;p.setAttribute("position",new ia(m,f)),p.setAttribute("outputDirection",new ia(_,f)),t.push(new Yn(p,null)),n>$s&&n--}return{lodMeshes:t,sizeLods:e}}function Tf(i,e,t){const n=new _i(i,e,t);return n.texture.mapping=Fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function nS(i,e,t){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function iS(i,e,t){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Af(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Rf(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hg extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new ng(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new la(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ta});s.uniforms.tEquirect.value=t;const r=new Yn(a,s),o=t.minFilter;return t.minFilter===Ta&&(t.minFilter=en),new sy(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}function aS(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===hc||f===fc)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new hg(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,m=f===hc||f===fc,_=f===fs||f===ur;if(m||_){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new wf(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const x=u.image;return m&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new wf(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,f){return f===hc?u.mapping=fs:f===fc&&(u.mapping=ur),u}function c(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){const f=u.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function sS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&js("WebGLRenderer: "+n+" extension not supported."),a}}}function rS(i,e,t,n){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete a[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let T=0,b=x.length;T<b;T+=3){const S=x[T+0],w=x[T+1],A=x[T+2];u.push(S,w,w,A,A,S)}}else{const x=m.array;_=m.version;for(let T=0,b=x.length/3-1;T<b;T+=3){const S=T+0,w=T+1,A=T+2;u.push(S,w,w,A,A,S)}}const p=new(m.count>=65535?jm:Qm)(u,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function oS(i,e,t){let n;function a(h){n=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function c(h,u){i.drawElements(n,u,s,h*r),t.update(u,n,1)}function l(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,h*r,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function lS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function cS(i,e,t){const n=new WeakMap,a=new Ct;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let k=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let b=o.attributes.position.count*T,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*S*4*h),A=new Zm(w,b,S,h);A.type=Di,A.needsUpdate=!0;const y=T*4;for(let R=0;R<h;R++){const C=p[R],z=g[R],O=x[R],L=b*S*4*R;for(let H=0;H<C.count;H++){const D=H*y;f===!0&&(a.fromBufferAttribute(C,H),w[L+D+0]=a.x,w[L+D+1]=a.y,w[L+D+2]=a.z,w[L+D+3]=0),m===!0&&(a.fromBufferAttribute(z,H),w[L+D+4]=a.x,w[L+D+5]=a.y,w[L+D+6]=a.z,w[L+D+7]=0),_===!0&&(a.fromBufferAttribute(O,H),w[L+D+8]=a.x,w[L+D+9]=a.y,w[L+D+10]=a.z,w[L+D+11]=O.itemSize===4?a.w:1)}}u={count:h,texture:A,size:new it(b,S)},n.set(o,u),o.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function dS(i,e,t,n,a){let s=new WeakMap;function r(l){const d=a.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const uS={[Im]:"LINEAR_TONE_MAPPING",[zm]:"REINHARD_TONE_MAPPING",[Um]:"CINEON_TONE_MAPPING",[Nm]:"ACES_FILMIC_TONE_MAPPING",[Om]:"AGX_TONE_MAPPING",[Bm]:"NEUTRAL_TONE_MAPPING",[Fm]:"CUSTOM_TONE_MAPPING"};function hS(i,e,t,n,a,s){const r=new _i(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new xi;l.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ri([0,2,0,0,2,0],2));const d=new Zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Yn(l,d),u=new nh(-1,1,1,-1,0,1);let f=null,m=null,_=!1,p,g=null,x=[],T=!1;this.setSize=function(b,S){r.setSize(b,S),o!==null&&o.setSize(b,S),c!==null&&c.setSize(b,S);for(let w=0;w<x.length;w++){const A=x[w];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){x=b,T=x.length>0&&x[0].isRenderPass===!0;const S=r.width,w=r.height;x.length>0&&o===null&&(o=new _i(S,w,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),c=new _i(S,w,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){const y=x[A];y.setSize&&y.setSize(S,w)}},this.begin=function(b,S){if(_||b.toneMapping===Ni&&x.length===0)return!1;if(g=S,S!==null){const w=S.width,A=S.height;(r.width!==w||r.height!==A)&&this.setSize(w,A)}return T===!1&&b.setRenderTarget(r),p=b.toneMapping,b.toneMapping=Ni,!0},this.hasRenderPass=function(){return T},this.end=function(b,S){b.toneMapping=p,_=!0;let w=r,A=o;for(let y=0;y<x.length;y++){const k=x[y];k.enabled!==!1&&(k.render(b,A,w,S),k.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,d.defines={},et.getTransfer(f)===ft&&(d.defines.SRGB_TRANSFER="");const y=uS[m];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(h,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const fg=new nn,lu=new ao(1,1),pg=new Zm,mg=new kv,gg=new ng,Cf=[],Lf=[],Pf=new Float32Array(16),Df=new Float32Array(9),If=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=Cf[a];if(s===void 0&&(s=new Float32Array(a),Cf[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gl(i,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function _S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;If.set(n),i.uniformMatrix2fv(this.addr,!1,If),Yt(t,n)}}function vS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Df.set(n),i.uniformMatrix3fv(this.addr,!1,Df),Yt(t,n)}}function yS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Pf.set(n),i.uniformMatrix4fv(this.addr,!1,Pf),Yt(t,n)}}function xS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function ES(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function AS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=t.isReversedDepthBuffer()?Ju:Zu,s=lu):s=fg,t.setTexture2D(e||s,a)}function RS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||mg,a)}function CS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||gg,a)}function LS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||pg,a)}function PS(i){switch(i){case 5126:return fS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return yS;case 5124:case 35670:return xS;case 35667:case 35671:return bS;case 35668:case 35672:return SS;case 35669:case 35673:return MS;case 5125:return ES;case 36294:return kS;case 36295:return wS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return LS}}function DS(i,e){i.uniform1fv(this.addr,e)}function IS(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function zS(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function US(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function NS(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FS(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OS(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function BS(i,e){i.uniform1iv(this.addr,e)}function HS(i,e){i.uniform2iv(this.addr,e)}function GS(i,e){i.uniform3iv(this.addr,e)}function VS(i,e){i.uniform4iv(this.addr,e)}function $S(i,e){i.uniform1uiv(this.addr,e)}function WS(i,e){i.uniform2uiv(this.addr,e)}function qS(i,e){i.uniform3uiv(this.addr,e)}function XS(i,e){i.uniform4uiv(this.addr,e)}function YS(i,e,t){const n=this.cache,a=e.length,s=Gl(t,a);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=lu:r=fg;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function KS(i,e,t){const n=this.cache,a=e.length,s=Gl(t,a);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||mg,s[r])}function ZS(i,e,t){const n=this.cache,a=e.length,s=Gl(t,a);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||gg,s[r])}function JS(i,e,t){const n=this.cache,a=e.length,s=Gl(t,a);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||pg,s[r])}function QS(i){switch(i){case 5126:return DS;case 35664:return IS;case 35665:return zS;case 35666:return US;case 35674:return NS;case 35675:return FS;case 35676:return OS;case 5124:case 35670:return BS;case 35667:case 35671:return HS;case 35668:case 35672:return GS;case 35669:case 35673:return VS;case 5125:return $S;case 36294:return WS;case 36295:return qS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return JS}}class jS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PS(t.type)}}class e1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QS(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function n1(i,e,t){const n=i.name,a=n.length;for($c.lastIndex=0;;){const s=$c.exec(n),r=$c.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){zf(t,l===void 0?new jS(o,i,e):new e1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new t1(o),zf(t,h)),t=h}}}class ol{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);n1(o,c,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Uf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const i1=37297;let a1=0;function s1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Nf=new $e;function r1(i){et._getMatrix(Nf,et.workingColorSpace,i);const e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case bl:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ff(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+s1(i.getShaderSource(e),o)}else return s}function o1(i,e){const t=r1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l1={[Im]:"Linear",[zm]:"Reinhard",[Um]:"Cineon",[Nm]:"ACESFilmic",[Om]:"AgX",[Bm]:"Neutral",[Fm]:"Custom"};function c1(i,e){const t=l1[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new q;function d1(){et.getLuminanceCoefficients($o);const i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function h1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Pr(i){return i!==""}function Of(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(p1,g1)}const m1=new Map;function g1(i,e){let t=Ke[e];if(t===void 0){const n=m1.get(e);if(n!==void 0)t=Ke[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}const _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(i){return i.replace(_1,v1)}function v1(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Gf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const y1={[tl]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function x1(i){return y1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b1={[fs]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Fl]:"ENVMAP_TYPE_CUBE_UV"};function S1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":b1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const M1={[ur]:"ENVMAP_MODE_REFRACTION"};function E1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":M1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const k1={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[ev]:"ENVMAP_BLENDING_MIX",[tv]:"ENVMAP_BLENDING_ADD"};function w1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k1[i.combine]||"ENVMAP_BLENDING_NONE"}function T1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function A1(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=x1(t),l=S1(t),d=E1(t),h=w1(t),u=T1(t),f=u1(t),m=h1(s),_=a.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pr).join(`
`),g.length>0&&(g+=`
`)):(p=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),g=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ni?c1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),d1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),r=cu(r),r=Of(r,t),r=Bf(r,t),o=cu(o),o=Of(o,t),o=Bf(o,t),r=Hf(r),o=Hf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=x+p+r,b=x+g+o,S=Uf(a,a.VERTEX_SHADER,T),w=Uf(a,a.FRAGMENT_SHADER,b);a.attachShader(_,S),a.attachShader(_,w),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const z=a.getProgramInfoLog(_)||"",O=a.getShaderInfoLog(S)||"",L=a.getShaderInfoLog(w)||"",H=z.trim(),D=O.trim(),P=L.trim();let Y=!0,G=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,S,w);else{const Q=Ff(a,S,"vertex"),ee=Ff(a,w,"fragment");lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Q+`
`+ee)}else H!==""?Ge("WebGLProgram: Program Info Log:",H):(D===""||P==="")&&(G=!1);G&&(C.diagnostics={runnable:Y,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:g}})}a.deleteShader(S),a.deleteShader(w),y=new ol(a,_),k=f1(a,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let k;this.getAttributes=function(){return k===void 0&&A(this),k};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(_,i1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let R1=0;class C1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new L1(e),t.set(e,n)),n}}class L1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function P1(i){return i===ps||i===vl||i===yl}function D1(i,e,t,n,a,s){const r=new ju,o=new C1,c=new Set,l=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,k,R,C,z,O){const L=C.fog,H=z.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=e.get(y.envMap||D,P),G=Y&&Y.mapping===Fl?Y.image.height:null,Q=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=ee!==void 0?ee.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let Ne,De,He,Z;if(Q){const yt=Ti[Q];Ne=yt.vertexShader,De=yt.fragmentShader}else{Ne=y.vertexShader,De=y.fragmentShader;const yt=o.getVertexShaderStage(y),dt=o.getFragmentShaderStage(y);o.update(y,yt,dt),He=yt.id,Z=dt.id}const ne=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,Oe=!!y.map,mt=!!y.matcap,Be=!!Y,Xe=!!y.aoMap,at=!!y.lightMap,Ve=!!y.bumpMap&&y.wireframe===!1,ht=!!y.normalMap,Pt=!!y.displacementMap,Vt=!!y.emissiveMap,ct=!!y.metalnessMap,Dt=!!y.roughnessMap,N=y.anisotropy>0,$t=y.clearcoat>0,B=y.dispersion>0,E=y.retroreflectivity>0,v=y.iridescence>0,F=y.sheen>0,V=y.transmission>0,J=N&&!!y.anisotropyMap,ce=$t&&!!y.clearcoatMap,de=$t&&!!y.clearcoatNormalMap,j=$t&&!!y.clearcoatRoughnessMap,te=v&&!!y.iridescenceMap,fe=v&&!!y.iridescenceThicknessMap,Le=F&&!!y.sheenColorMap,_e=F&&!!y.sheenRoughnessMap,pe=!!y.specularMap,Pe=!!y.specularColorMap,Fe=!!y.specularIntensityMap,qe=V&&!!y.transmissionMap,U=V&&!!y.thicknessMap,me=!!y.gradientMap,ie=!!y.alphaMap,ge=y.alphaTest>0,Se=!!y.alphaHash,oe=!!y.extensions;let Ie=Ni;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Re={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:De,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:mt,envMap:Be,envMapMode:Be&&Y.mapping,envMapCubeUVHeight:G,aoMap:Xe,lightMap:at,bumpMap:Ve,normalMap:ht,displacementMap:Pt,emissiveMap:Vt,normalMapObjectSpace:ht&&y.normalMapType===av,normalMapTangentSpace:ht&&y.normalMapType===su,packedNormalMap:ht&&y.normalMapType===su&&P1(y.normalMap.format),metalnessMap:ct,roughnessMap:Dt,anisotropy:N,anisotropyMap:J,clearcoat:$t,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:j,dispersion:B,retroreflection:E,iridescence:v,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:F,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:pe,specularColorMap:Pe,specularIntensityMap:Fe,transmission:V,transmissionMap:qe,thicknessMap:U,gradientMap:me,opaque:y.transparent===!1&&y.blending===Fr&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:Se,combine:y.combine,mapUv:Oe&&m(y.map.channel),aoMapUv:Xe&&m(y.aoMap.channel),lightMapUv:at&&m(y.lightMap.channel),bumpMapUv:Ve&&m(y.bumpMap.channel),normalMapUv:ht&&m(y.normalMap.channel),displacementMapUv:Pt&&m(y.displacementMap.channel),emissiveMapUv:Vt&&m(y.emissiveMap.channel),metalnessMapUv:ct&&m(y.metalnessMap.channel),roughnessMapUv:Dt&&m(y.roughnessMap.channel),anisotropyMapUv:J&&m(y.anisotropyMap.channel),clearcoatMapUv:ce&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(y.sheenRoughnessMap.channel),specularMapUv:pe&&m(y.specularMap.channel),specularColorMapUv:Pe&&m(y.specularColorMap.channel),specularIntensityMapUv:Fe&&m(y.specularIntensityMap.channel),transmissionMapUv:qe&&m(y.transmissionMap.channel),thicknessMapUv:U&&m(y.thicknessMap.channel),alphaMapUv:ie&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||N),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Oe||ie),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Me,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fi,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(y){const k=[];if(y.shaderID?k.push(y.shaderID):(k.push(y.customVertexShaderID),k.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)k.push(R),k.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(k,y),x(k,y),k.push(i.outputColorSpace)),k.push(y.customProgramCacheKey),k.join()}function g(y,k){y.push(k.precision),y.push(k.outputColorSpace),y.push(k.envMapMode),y.push(k.envMapCubeUVHeight),y.push(k.mapUv),y.push(k.alphaMapUv),y.push(k.lightMapUv),y.push(k.aoMapUv),y.push(k.bumpMapUv),y.push(k.normalMapUv),y.push(k.displacementMapUv),y.push(k.emissiveMapUv),y.push(k.metalnessMapUv),y.push(k.roughnessMapUv),y.push(k.anisotropyMapUv),y.push(k.clearcoatMapUv),y.push(k.clearcoatNormalMapUv),y.push(k.clearcoatRoughnessMapUv),y.push(k.iridescenceMapUv),y.push(k.iridescenceThicknessMapUv),y.push(k.sheenColorMapUv),y.push(k.sheenRoughnessMapUv),y.push(k.specularMapUv),y.push(k.specularColorMapUv),y.push(k.specularIntensityMapUv),y.push(k.transmissionMapUv),y.push(k.thicknessMapUv),y.push(k.combine),y.push(k.fogExp2),y.push(k.sizeAttenuation),y.push(k.morphTargetsCount),y.push(k.morphAttributeCount),y.push(k.numSunLights),y.push(k.numDirLights),y.push(k.numPointLights),y.push(k.numSpotLights),y.push(k.numSpotLightMaps),y.push(k.numHemiLights),y.push(k.numRectAreaLights),y.push(k.numSunLightShadows),y.push(k.numDirLightShadows),y.push(k.numPointLightShadows),y.push(k.numSpotLightShadows),y.push(k.numSpotLightShadowsWithMaps),y.push(k.numLightProbes),y.push(k.shadowMapType),y.push(k.toneMapping),y.push(k.numClippingPlanes),y.push(k.numClipIntersection),y.push(k.depthPacking)}function x(y,k){r.disableAll(),k.instancing&&r.enable(0),k.instancingColor&&r.enable(1),k.instancingMorph&&r.enable(2),k.matcap&&r.enable(3),k.envMap&&r.enable(4),k.normalMapObjectSpace&&r.enable(5),k.normalMapTangentSpace&&r.enable(6),k.clearcoat&&r.enable(7),k.iridescence&&r.enable(8),k.alphaTest&&r.enable(9),k.vertexColors&&r.enable(10),k.vertexAlphas&&r.enable(11),k.vertexUv1s&&r.enable(12),k.vertexUv2s&&r.enable(13),k.vertexUv3s&&r.enable(14),k.vertexTangents&&r.enable(15),k.anisotropy&&r.enable(16),k.alphaHash&&r.enable(17),k.batching&&r.enable(18),k.dispersion&&r.enable(19),k.retroreflection&&r.enable(24),k.batchingColor&&r.enable(20),k.gradientMap&&r.enable(21),k.packedNormalMap&&r.enable(22),k.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),k.fog&&r.enable(0),k.useFog&&r.enable(1),k.flatShading&&r.enable(2),k.logarithmicDepthBuffer&&r.enable(3),k.reversedDepthBuffer&&r.enable(4),k.skinning&&r.enable(5),k.morphTargets&&r.enable(6),k.morphNormals&&r.enable(7),k.morphColors&&r.enable(8),k.premultipliedAlpha&&r.enable(9),k.shadowMapEnabled&&r.enable(10),k.doubleSided&&r.enable(11),k.flipSided&&r.enable(12),k.useDepthPacking&&r.enable(13),k.dithering&&r.enable(14),k.transmission&&r.enable(15),k.sheen&&r.enable(16),k.opaque&&r.enable(17),k.pointsUvs&&r.enable(18),k.decodeVideoTexture&&r.enable(19),k.decodeVideoTextureEmissive&&r.enable(20),k.alphaToCoverage&&r.enable(21),k.numLightProbeGrids>0&&r.enable(22),k.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function T(y){const k=f[y.type];let R;if(k){const C=Ti[k];R=Xv.clone(C.uniforms)}else R=y.uniforms;return R}function b(y,k){let R=d.get(k);return R!==void 0?++R.usedTimes:(R=new A1(i,k,y,a),l.push(R),d.set(k,R)),R}function S(y){if(--y.usedTimes===0){const k=l.indexOf(y);l[k]=l[l.length-1],l.pop(),d.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function I1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function z1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $f(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,p,g){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.materialVariant=r(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=p,x.group=g),e++,x}function c(u,f,m,_,p,g,x){x.reversedDepth===!0&&(p=-p);const T=o(u,f,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?a.push(T):t.push(T)}function l(u,f,m,_,p,g){const x=o(u,f,m,_,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?a.unshift(x):t.unshift(x)}function d(u,f){t.length>1&&t.sort(u||z1),n.length>1&&n.sort(f||Vf),a.length>1&&a.sort(f||Vf)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:c,unshift:l,finish:h,sort:d}}function U1(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new $f,i.set(n,[r])):a>=s.length?(r=new $f,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function N1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new rt};break;case"SpotLight":t={position:new q,direction:new q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function F1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let O1=0;function B1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H1(i){const e=new N1,t=F1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const a=new q,s=new Et,r=new Et;function o(l){let d=0,h=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,x=0,T=0,b=0,S=0,w=0,A=0,y=0,k=0,R=0;l.sort(B1);for(let z=0,O=l.length;z<O;z++){const L=l[z],H=L.color,D=L.intensity,P=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ps?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=H.r*D,h+=H.g*D,u+=H.b*D;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],D);R++}else if(L.isSunLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=Y;const ue=Q.getViewportCount();for(let Me=0;Me<ue;Me++)n.sunShadowMatrix[_+Me]=Q.getMatrix(Me),n.sunShadowCascade[_+Me]=Q._cascadeData[Me];_+=ue,m++}n.sun[f]=G,f++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(H).multiplyScalar(D),G.distance=P,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const Q=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Q.updateMatrices(L),L.castShadow&&k++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=Y,A++}x++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(H).multiplyScalar(D),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=G,T++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(D),G.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[b]=G,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const C=n.hash;(C.sunLength!==f||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==T||C.hemiLength!==b||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==A||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-k,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=R,C.sunLength=f,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=T,C.hemiLength=b,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=A,C.numSpotMaps=y,C.numLightProbes=R,n.version=O1++)}function c(l,d){let h=0,u=0,f=0,m=0,_=0,p=0;const g=d.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){const b=l[x];if(b.isSunLight){const S=n.sun[h];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),h++}else if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(b.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Wf(i){const e=new H1(i),t=[],n=[],a=[];function s(u){h.camera=u,t.length=0,n.length=0,a.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function c(u){a.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function G1(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Wf(i),e.set(a,[o])):s>=r.length?(o=new Wf(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`,W1=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],q1=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],qf=new Et,wr=new q,Wc=new q;function X1(i,e,t){let n=new th;const a=new it,s=new it,r=new Ct,o=new Jv,c=new Qv,l={},d=t.maxTextureSize,h={[hs]:Rn,[Rn]:hs,[fi]:fi},u=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:V1,fragmentShader:$1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new xi;m.setAttribute("position",new ia(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let g=this.type;this.render=function(w,A,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===z_&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tl);const k=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ta),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=g!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=w.length;L<H;L++){const D=w[L],P=D.shadow;if(P===void 0){Ge("WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const Y=P.getFrameExtents();a.multiply(Y),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Y.x),a.x=s.x*Y.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Y.y),a.y=s.y*Y.y,P.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=G,P.map===null||O===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Lr){if(D.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new _i(a.x,a.y,{format:ps,type:Bi,minFilter:en,magFilter:en,generateMipmaps:!1}),P.map.texture.name=D.name+".shadowMap",P.map.depthTexture=new ao(a.x,a.y,Di),P.map.depthTexture.name=D.name+".shadowMapDepth",P.map.depthTexture.format=oa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=qt,P.map.depthTexture.magFilter=qt}else D.isPointLight?(P.map=new hg(a.x),P.map.depthTexture=new Wv(a.x,Oi)):(P.map=new _i(a.x,a.y),P.map.depthTexture=new ao(a.x,a.y,Oi)),P.map.depthTexture.name=D.name+".shadowMap",P.map.depthTexture.format=oa,this.type===tl?(P.map.depthTexture.compareFunction=G?Ju:Zu,P.map.depthTexture.minFilter=en,P.map.depthTexture.magFilter=en):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=qt,P.map.depthTexture.magFilter=qt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const Q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();D.isPointLight!==!0&&P.updateMatrices(D,y);for(let ee=0;ee<Q;ee++){const ue=P.getCamera(ee);if(D.isPointLight){const Me=P.camera,Ne=P.matrix,De=D.distance||Me.far;De!==Me.far&&(Me.far=De,Me.updateProjectionMatrix()),wr.setFromMatrixPosition(D.matrixWorld),Me.position.copy(wr),Wc.copy(Me.position),Wc.add(W1[ee]),Me.up.copy(q1[ee]),Me.lookAt(Wc),Me.updateMatrixWorld(),Ne.makeTranslation(-wr.x,-wr.y,-wr.z),qf.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),P._frustum.setFromProjectionMatrix(qf,Me.coordinateSystem,Me.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(P.map),i.clear());const Me=P.getViewport(ee);r.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),z.viewport(r)}n=P.getFrustum(ee),b(A,y,ue,D,this.type)}P.isPointLightShadow!==!0&&this.type===Lr&&x(P,y),P.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(k,R,C)};function x(w,A){const y=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new _i(a.x,a.y,{format:ps,type:Bi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,y,f,_,null)}function T(w,A,y,k){let R=null;const C=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=R.uuid,O=A.uuid;let L=l[z];L===void 0&&(L={},l[z]=L);let H=L[O];H===void 0&&(H=R.clone(),L[O]=H,A.addEventListener("dispose",S)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,k===Lr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=y}return R}function b(w,A,y,k,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Lr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const O=e.update(w),L=w.material;if(Array.isArray(L)){const H=O.groups;for(let D=0,P=H.length;D<P;D++){const Y=H[D],G=L[Y.materialIndex];if(G&&G.visible){const Q=T(w,G,k,R);w.onBeforeShadow(i,w,A,y,O,Q,Y),i.renderBufferDirect(y,null,O,Q,w,Y),w.onAfterShadow(i,w,A,y,O,Q,Y)}}}else if(L.visible){const H=T(w,L,k,R);w.onBeforeShadow(i,w,A,y,O,H,null),i.renderBufferDirect(y,null,O,H,w,null),w.onAfterShadow(i,w,A,y,O,H,null)}}const z=w.children;for(let O=0,L=z.length;O<L;O++)b(z[O],A,y,k,R)}function S(w){w.target.removeEventListener("dispose",S);for(const y in l){const k=l[y],R=w.target.uuid;R in k&&(k[R].dispose(),delete k[R])}}}function Y1(i,e){function t(){let U=!1;const me=new Ct;let ie=null;const ge=new Ct(0,0,0,0);return{setMask:function(Se){ie!==Se&&!U&&(i.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){U=Se},setClear:function(Se,oe,Ie,Re,yt){yt===!0&&(Se*=Re,oe*=Re,Ie*=Re),me.set(Se,oe,Ie,Re),ge.equals(me)===!1&&(i.clearColor(Se,oe,Ie,Re),ge.copy(me))},reset:function(){U=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,ie=null,ge=null,Se=null;return{setReversed:function(oe){if(me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=oe;const Re=Se;Se=null,this.setClear(Re)}},getReversed:function(){return me},setTest:function(oe){oe?ne(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!U&&(i.depthMask(oe),ie=oe)},setFunc:function(oe){if(me&&(oe=gv[oe]),ge!==oe){switch(oe){case xd:i.depthFunc(i.NEVER);break;case bd:i.depthFunc(i.ALWAYS);break;case Sd:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case Md:i.depthFunc(i.EQUAL);break;case Ed:i.depthFunc(i.GEQUAL);break;case kd:i.depthFunc(i.GREATER);break;case wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Se!==oe&&(Se=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){U=!1,ie=null,ge=null,Se=null,me=!1}}}function a(){let U=!1,me=null,ie=null,ge=null,Se=null,oe=null,Ie=null,Re=null,yt=null;return{setTest:function(dt){U||(dt?ne(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(dt){me!==dt&&!U&&(i.stencilMask(dt),me=dt)},setFunc:function(dt,oi,bi){(ie!==dt||ge!==oi||Se!==bi)&&(i.stencilFunc(dt,oi,bi),ie=dt,ge=oi,Se=bi)},setOp:function(dt,oi,bi){(oe!==dt||Ie!==oi||Re!==bi)&&(i.stencilOp(dt,oi,bi),oe=dt,Ie=oi,Re=bi)},setLocked:function(dt){U=dt},setClear:function(dt){yt!==dt&&(i.clearStencil(dt),yt=dt)},reset:function(){U=!1,me=null,ie=null,ge=null,Se=null,oe=null,Ie=null,Re=null,yt=null}}}const s=new t,r=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,x=null,T=null,b=null,S=null,w=null,A=null,y=new rt(0,0,0),k=0,R=!1,C=null,z=null,O=null,L=null,H=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=Y>=2);let Q=null,ee={};const ue=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Ne=new Ct().fromArray(ue),De=new Ct().fromArray(Me);function He(U,me,ie,ge){const Se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<ie;Ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return oe}const Z={};Z[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),r.setFunc(jr),Ve(!1),ht(Vh),ne(i.CULL_FACE),Xe(ta);function ne(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function he(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function ze(U,me){return u[U]!==me?(i.bindFramebuffer(U,me),u[U]=me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(U,me){let ie=m,ge=!1;if(U){ie=f.get(me),ie===void 0&&(ie=[],f.set(me,ie));const Se=U.textures;if(ie.length!==Se.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ie=Se.length;oe<Ie;oe++)ie[oe]=i.COLOR_ATTACHMENT0+oe;ie.length=Se.length,ge=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ie)}function Oe(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const mt={[Os]:i.FUNC_ADD,[N_]:i.FUNC_SUBTRACT,[F_]:i.FUNC_REVERSE_SUBTRACT};mt[O_]=i.MIN,mt[B_]=i.MAX;const Be={[H_]:i.ZERO,[G_]:i.ONE,[V_]:i.SRC_COLOR,[Pm]:i.SRC_ALPHA,[K_]:i.SRC_ALPHA_SATURATE,[X_]:i.DST_COLOR,[W_]:i.DST_ALPHA,[$_]:i.ONE_MINUS_SRC_COLOR,[Dm]:i.ONE_MINUS_SRC_ALPHA,[Y_]:i.ONE_MINUS_DST_COLOR,[q_]:i.ONE_MINUS_DST_ALPHA,[Z_]:i.CONSTANT_COLOR,[J_]:i.ONE_MINUS_CONSTANT_COLOR,[Q_]:i.CONSTANT_ALPHA,[j_]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,me,ie,ge,Se,oe,Ie,Re,yt,dt){if(U===ta){p===!0&&(he(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),U!==U_){if(U!==g||dt!==R){if((x!==Os||S!==Os)&&(i.blendEquation(i.FUNC_ADD),x=Os,S=Os),dt)switch(U){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",U);break}else switch(U){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",U);break}T=null,b=null,w=null,A=null,y.set(0,0,0),k=0,g=U,R=dt}return}Se=Se||me,oe=oe||ie,Ie=Ie||ge,(me!==x||Se!==S)&&(i.blendEquationSeparate(mt[me],mt[Se]),x=me,S=Se),(ie!==T||ge!==b||oe!==w||Ie!==A)&&(i.blendFuncSeparate(Be[ie],Be[ge],Be[oe],Be[Ie]),T=ie,b=ge,w=oe,A=Ie),(Re.equals(y)===!1||yt!==k)&&(i.blendColor(Re.r,Re.g,Re.b,yt),y.copy(Re),k=yt),g=U,R=!1}function at(U,me){U.side===fi?he(i.CULL_FACE):ne(i.CULL_FACE);let ie=U.side===Rn;me&&(ie=!ie),Ve(ie),U.blending===Fr&&U.transparent===!1?Xe(ta):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){C!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),C=U)}function ht(U){U!==D_?(ne(i.CULL_FACE),U!==z&&(U===Vh?i.cullFace(i.BACK):U===I_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),z=U}function Pt(U){U!==O&&(P&&i.lineWidth(U),O=U)}function Vt(U,me,ie){U?(ne(i.POLYGON_OFFSET_FILL),(L!==me||H!==ie)&&(L=me,H=ie,r.getReversed()&&(me=-me),i.polygonOffset(me,ie))):he(i.POLYGON_OFFSET_FILL)}function ct(U){U?ne(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Dt(U){U===void 0&&(U=i.TEXTURE0+D-1),Q!==U&&(i.activeTexture(U),Q=U)}function N(U,me,ie){ie===void 0&&(Q===null?ie=i.TEXTURE0+D-1:ie=Q);let ge=ee[ie];ge===void 0&&(ge={type:void 0,texture:void 0},ee[ie]=ge),(ge.type!==U||ge.texture!==me)&&(Q!==ie&&(i.activeTexture(ie),Q=ie),i.bindTexture(U,me||Z[U]),ge.type=U,ge.texture=me)}function $t(){const U=ee[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{i.compressedTexImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function v(){try{i.texSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function F(){try{i.texSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function de(){try{i.texStorage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function j(){try{i.texImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function fe(U){return h[U]!==void 0?h[U]:i.getParameter(U)}function Le(U,me){h[U]!==me&&(i.pixelStorei(U,me),h[U]=me)}function _e(U){Ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function pe(U){De.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Pe(U,me){let ie=l.get(me);ie===void 0&&(ie=new WeakMap,l.set(me,ie));let ge=ie.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(me,U.name),ie.set(U,ge))}function Fe(U,me){const ge=l.get(me).get(U);c.get(me)!==ge&&(i.uniformBlockBinding(me,ge,U.__bindingPointIndex),c.set(me,ge))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,ee={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,x=null,T=null,b=null,S=null,w=null,A=null,y=new rt(0,0,0),k=0,R=!1,C=null,z=null,O=null,L=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ne,disable:he,bindFramebuffer:ze,drawBuffers:be,useProgram:Oe,setBlending:Xe,setMaterial:at,setFlipSided:Ve,setCullFace:ht,setLineWidth:Pt,setPolygonOffset:Vt,setScissorTest:ct,activeTexture:Dt,bindTexture:N,unbindTexture:$t,compressedTexImage2D:B,compressedTexImage3D:E,texImage2D:j,texImage3D:te,pixelStorei:Le,getParameter:fe,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:de,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:_e,viewport:pe,reset:qe}}function K1(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):io("canvas")}function p(E,v,F){let V=1;const J=B(E);if((J.width>F||J.height>F)&&(V=F/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(V*J.width),de=Math.floor(V*J.height);u===void 0&&(u=_(ce,de));const j=v?_(ce,de):u;return j.width=ce,j.height=de,j.getContext("2d").drawImage(E,0,0,ce,de),Ge("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ce+"x"+de+")."),j}else return"data"in E&&Ge("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function g(E){return E.generateMipmaps}function x(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,F,V,J,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;V&&(de=e.get("EXT_texture_norm16"),de||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8),F===i.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),F===i.SHORT&&de&&(j=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),v===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8),F===i.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),F===i.SHORT&&de&&(j=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),F===i.SHORT&&de&&(j=de.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const te=ce?bl:et.getTransfer(J);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=te===ft?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),F===i.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(E,v){let F;return E?v===null||v===Oi||v===to?F=i.DEPTH24_STENCIL8:v===Di?F=i.DEPTH32F_STENCIL8:v===eo&&(F=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===to?F=i.DEPTH_COMPONENT24:v===Di?F=i.DEPTH_COMPONENT32F:v===eo&&(F=i.DEPTH_COMPONENT16),F}function w(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==qt&&E.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),k(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&h.delete(v)}function y(E){const v=E.target;v.removeEventListener("dispose",y),C(v)}function k(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,V=f.get(F);if(V){const J=V[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(E),Object.keys(V).length===0&&f.delete(F)}n.remove(E)}function R(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const F=E.source,V=f.get(F);delete V[v.__cacheKey],r.memory.textures--}function C(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let J=0;J<v.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[V][J]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let V=0,J=F.length;V<J;V++){const ce=n.get(F[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),r.memory.textures--),n.remove(F[V])}n.remove(E)}let z=0;function O(){z=0}function L(){return z}function H(E){z=E}function D(){const E=z;return E>=a.maxTextures&&Ge("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),z+=1,E}function P(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){const F=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const V=E.image;if(V===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,E,v);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){he(F,E,v);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Q(E,v){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){he(F,E,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function ee(E,v){const F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){ze(F,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const ue={[Td]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Ad]:i.MIRRORED_REPEAT},Me={[qt]:i.NEAREST,[nv]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[pc]:i.LINEAR_MIPMAP_NEAREST,[Ta]:i.LINEAR_MIPMAP_LINEAR},Ne={[rv]:i.NEVER,[uv]:i.ALWAYS,[ov]:i.LESS,[Zu]:i.LEQUAL,[lv]:i.EQUAL,[Ju]:i.GEQUAL,[cv]:i.GREATER,[dv]:i.NOTEQUAL};function De(E,v){if(v.type===Di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===pc||v.magFilter===bo||v.magFilter===Ta||v.minFilter===en||v.minFilter===pc||v.minFilter===bo||v.minFilter===Ta)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Me[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==bo&&v.minFilter!==Ta||v.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function He(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const V=v.source;let J=f.get(V);J===void 0&&(J={},f.set(V,J));const ce=P(v);if(ce!==E.__cacheKey){J[ce]===void 0&&(J[ce]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,F=!0),J[ce].usedTimes++;const de=J[E.__cacheKey];de!==void 0&&(J[E.__cacheKey].usedTimes--,de.usedTimes===0&&R(v)),E.__cacheKey=ce,E.__webglTexture=J[ce].texture}return F}function Z(E,v,F){return Math.floor(Math.floor(E/F)/v)}function ne(E,v,F,V){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,V,v.data);else{ce.sort((Le,_e)=>Le.start-_e.start);let de=0;for(let Le=1;Le<ce.length;Le++){const _e=ce[de],pe=ce[Le],Pe=_e.start+_e.count,Fe=Z(pe.start,v.width,4),qe=Z(_e.start,v.width,4);pe.start<=Pe+1&&Fe===qe&&Z(pe.start+pe.count-1,v.width,4)===Fe?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++de,ce[de]=pe)}ce.length=de+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Le=0,_e=ce.length;Le<_e;Le++){const pe=ce[Le],Pe=Math.floor(pe.start/4),Fe=Math.ceil(pe.count/4),qe=Pe%v.width,U=Math.floor(Pe/v.width),me=Fe,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,me,ie,F,V,v.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function he(E,v,F){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const J=He(E,v),ce=v.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+F);const de=n.get(ce);if(ce.version!==de.__version||J===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=et.getPrimaries(et.workingColorSpace),ge=v.colorSpace===Sa?null:et.getPrimaries(v.colorSpace),Se=v.colorSpace===Sa||ie===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let te=p(v.image,!1,a.maxTextureSize);te=$t(v,te);const fe=s.convert(v.format,v.colorSpace),Le=s.convert(v.type);let _e=b(v.internalFormat,fe,Le,v.normalized,v.colorSpace,v.isVideoTexture);De(V,v);let pe;const Pe=v.mipmaps,Fe=v.isVideoTexture!==!0,qe=de.__version===void 0||J===!0,U=ce.dataReady,me=w(v,te);if(v.isDepthTexture)_e=S(v.format===is,v.type),qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,_e,te.width,te.height,0,fe,Le,null));else if(v.isDataTexture)if(Pe.length>0){Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,me,_e,Pe[0].width,Pe[0].height);for(let ie=0,ge=Pe.length;ie<ge;ie++)pe=Pe[ie],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(i.TEXTURE_2D,ie,_e,pe.width,pe.height,0,fe,Le,pe.data);v.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(i.TEXTURE_2D,me,_e,te.width,te.height),U&&ne(v,te,fe,Le)):t.texImage2D(i.TEXTURE_2D,0,_e,te.width,te.height,0,fe,Le,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,_e,Pe[0].width,Pe[0].height,te.depth);for(let ie=0,ge=Pe.length;ie<ge;ie++)if(pe=Pe[ie],v.format!==gi)if(fe!==null)if(Fe){if(U)if(v.layerUpdates.size>0){const Se=Ef(pe.width,pe.height,v.format,v.type);for(const oe of v.layerUpdates){const Ie=pe.data.subarray(oe*Se/pe.data.BYTES_PER_ELEMENT,(oe+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,oe,pe.width,pe.height,1,fe,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,pe.width,pe.height,te.depth,0,pe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,fe,Le,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,pe.width,pe.height,te.depth,0,fe,Le,pe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,me,_e,Pe[0].width,Pe[0].height);for(let ie=0,ge=Pe.length;ie<ge;ie++)pe=Pe[ie],v.format!==gi?fe!==null?Fe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(i.TEXTURE_2D,ie,_e,pe.width,pe.height,0,fe,Le,pe.data)}else if(v.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,_e,te.width,te.height,te.depth),U)if(v.layerUpdates.size>0){const ie=Ef(te.width,te.height,v.format,v.type);for(const ge of v.layerUpdates){const Se=te.data.subarray(ge*ie/te.data.BYTES_PER_ELEMENT,(ge+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,fe,Le,Se)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,fe,Le,te.data);else if(v.isData3DTexture)Fe?(qe&&t.texStorage3D(i.TEXTURE_3D,me,_e,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,fe,Le,te.data);else if(v.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,me,_e,te.width,te.height);else{let ie=te.width,ge=te.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,_e,ie,ge,0,fe,Le,null),ie>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),te.parentNode!==ie){ie.appendChild(te),h.add(v),ie.onpaint=ge=>{const Se=ge.changedElements;for(const oe of h)Se.includes(oe.image)&&(oe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const Se=i.RGBA,oe=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,oe,Ie,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Fe&&qe){const ie=B(Pe[0]);t.texStorage2D(i.TEXTURE_2D,me,_e,ie.width,ie.height)}for(let ie=0,ge=Pe.length;ie<ge;ie++)pe=Pe[ie],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe,Le,pe):t.texImage2D(i.TEXTURE_2D,ie,_e,fe,Le,pe);v.generateMipmaps=!1}else if(Fe){if(qe){const ie=B(te);t.texStorage2D(i.TEXTURE_2D,me,_e,ie.width,ie.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,_e,fe,Le,te);g(v)&&x(V),de.__version=ce.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ze(E,v,F){if(v.image.length!==6)return;const V=He(E,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const ce=n.get(J);if(J.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const de=et.getPrimaries(et.workingColorSpace),j=v.colorSpace===Sa?null:et.getPrimaries(v.colorSpace),te=v.colorSpace===Sa||de===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Le=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!fe&&!Le?_e[oe]=p(v.image[oe],!0,a.maxCubemapSize):_e[oe]=Le?v.image[oe].image:v.image[oe],_e[oe]=$t(v,_e[oe]);const pe=_e[0],Pe=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type),qe=b(v.internalFormat,Pe,Fe,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,me=ce.__version===void 0||V===!0,ie=J.dataReady;let ge=w(v,pe);De(i.TEXTURE_CUBE_MAP,v);let Se;if(fe){U&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,pe.width,pe.height);for(let oe=0;oe<6;oe++){Se=_e[oe].mipmaps;for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];v.format!==gi?Pe!==null?U?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,qe,Re.width,Re.height,0,Re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Fe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,qe,Re.width,Re.height,0,Pe,Fe,Re.data)}}}else{if(Se=v.mipmaps,U&&me){Se.length>0&&ge++;const oe=B(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Le){U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Pe,Fe,_e[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,_e[oe].width,_e[oe].height,0,Pe,Fe,_e[oe].data);for(let Ie=0;Ie<Se.length;Ie++){const yt=Se[Ie].image[oe].image;U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,yt.width,yt.height,Pe,Fe,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,qe,yt.width,yt.height,0,Pe,Fe,yt.data)}}else{U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,Fe,_e[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Pe,Fe,_e[oe]);for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Pe,Fe,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,qe,Pe,Fe,Re.image[oe])}}}g(v)&&x(i.TEXTURE_CUBE_MAP),ce.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function be(E,v,F,V,J,ce){const de=s.convert(F.format,F.colorSpace),j=s.convert(F.type),te=b(F.internalFormat,de,j,F.normalized,F.colorSpace),fe=n.get(v),Le=n.get(F);if(Le.__renderTarget=v,!fe.__hasExternalTextures){const _e=Math.max(1,v.width>>ce),pe=Math.max(1,v.height>>ce);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ce,te,_e,pe,v.depth,0,de,j,null):t.texImage2D(J,ce,te,_e,pe,0,de,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,Le.__webglTexture,0,ct(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,Le.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const V=v.depthTexture,J=V&&V.isDepthTexture?V.type:null,ce=S(v.stencilBuffer,J),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(v),ce,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(v),ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{const V=v.textures;for(let J=0;J<V.length;J++){const ce=V[J],de=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),te=b(ce.internalFormat,de,j,ce.normalized,ce.colorSpace);Dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(v),te,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(v),te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(E,v,F){const V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),De(i.TEXTURE_CUBE_MAP,v.depthTexture);const fe=s.convert(v.depthTexture.format),Le=s.convert(v.depthTexture.type);let _e;v.depthTexture.format===oa?_e=i.DEPTH_COMPONENT24:v.depthTexture.format===is&&(_e=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_e,v.width,v.height,0,fe,Le,null)}}else Y(v.depthTexture,0);const ce=J.__webglTexture,de=ct(v),j=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,te=v.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===oa)Dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,j,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,te,j,ce,0);else if(v.depthTexture.format===is)Dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,j,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,te,j,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=V}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)mt(v.__webglFramebuffer[V],E,V);else{const V=E.texture.mipmaps;V&&V.length>0?mt(v.__webglFramebuffer[0],E,0):mt(v.__webglFramebuffer,E,0)}else if(F){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),Oe(v.__webglDepthbuffer[V],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Oe(v.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(E,v,F){const V=n.get(E);v!==void 0&&be(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Be(E)}function at(E){const v=E.texture,F=n.get(E),V=n.get(v);E.addEventListener("dispose",y);const J=E.textures,ce=E.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,r.memory.textures++),ce){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let te=0;te<v.mipmaps.length;te++)F.__webglFramebuffer[j][te]=i.createFramebuffer()}else F.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)F.__webglFramebuffer[j]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(de)for(let j=0,te=J.length;j<te;j++){const fe=n.get(J[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&Dt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){const te=J[j];F.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const fe=s.convert(te.format,te.colorSpace),Le=s.convert(te.type),_e=b(te.internalFormat,fe,Le,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),pe=ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,F.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),De(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)be(F.__webglFramebuffer[j][te],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else be(F.__webglFramebuffer[j],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(v)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,te=J.length;j<te;j++){const fe=J[j],Le=n.get(fe);let _e=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Le.__webglTexture),De(_e,fe),be(F.__webglFramebuffer,E,fe,i.COLOR_ATTACHMENT0+j,_e,0),g(fe)&&x(_e)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,V.__webglTexture),De(j,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)be(F.__webglFramebuffer[te],E,v,i.COLOR_ATTACHMENT0,j,te);else be(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,j,0);g(v)&&x(j),t.unbindTexture()}E.depthBuffer&&Be(E)}function Ve(E){const v=E.textures;for(let F=0,V=v.length;F<V;F++){const J=v[F];if(g(J)){const ce=T(E),de=n.get(J).__webglTexture;t.bindTexture(ce,de),x(ce),t.unbindTexture()}}}const ht=[],Pt=[];function Vt(E){if(E.samples>0){if(Dt(E)===!1){const v=E.textures,F=E.width,V=E.height;let J=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),j=v.length>1;if(j)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Le=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,J,i.NEAREST),c===!0&&(ht.length=0,Pt.length=0,ht.push(i.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ht.push(ce),Pt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Le=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ct(E){return Math.min(a.maxSamples,E.samples)}function Dt(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(E){const v=r.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function $t(E,v){const F=E.colorSpace,V=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==xl&&F!==Sa&&(et.getTransfer(F)===ft?(V!==gi||J!==Hn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",F)),v}function B(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=Xe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z1(i,e){function t(n,a=Sa){let s;const r=et.getTransfer(a);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Wu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$m)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gm)return i.BYTE;if(n===Vm)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===$u)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Di)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===qm)return i.ALPHA;if(n===Xm)return i.RGB;if(n===gi)return i.RGBA;if(n===oa)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Ym)return i.RED;if(n===Xu)return i.RED_INTEGER;if(n===ps)return i.RG;if(n===Yu)return i.RG_INTEGER;if(n===Ku)return i.RGBA_INTEGER;if(n===nl||n===il||n===al||n===sl)if(r===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rd||n===Cd||n===Ld||n===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dd||n===Id||n===zd||n===Ud||n===Nd||n===vl||n===Fd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dd||n===Id)return r===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ud)return s.COMPRESSED_R11_EAC;if(n===Nd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===vl)return s.COMPRESSED_RG11_EAC;if(n===Fd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Od||n===Bd||n===Hd||n===Gd||n===Vd||n===$d||n===Wd||n===qd||n===Xd||n===Yd||n===Kd||n===Zd||n===Jd||n===Qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Od)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$d)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jd||n===eu||n===tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jd)return r===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===iu||n===yl||n===au)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
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

}`;class j1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ag(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hi({vertexShader:J1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new Bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends ys{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new j1,g={},x=t.getContextAttributes();let T=null,b=null;const S=[],w=[],A=new it;let y=null,k=null;const R=new ti;R.viewport=new Ct;const C=new ti;C.viewport=new Ct;const z=[R,C],O=new ry;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=S[Z];return ne===void 0&&(ne=new Sc,S[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=S[Z];return ne===void 0&&(ne=new Sc,S[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=S[Z];return ne===void 0&&(ne=new Sc,S[Z]=ne),ne.getHandSpace()};function D(Z){const ne=w.indexOf(Z.inputSource);if(ne===-1)return;const he=S[ne];he!==void 0&&(he.update(Z.inputSource,Z.frame,l||r),he.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){const ne=w[Z];ne!==null&&(w[Z]=null,S[Z].disconnect(ne))}L=null,H=null,p.reset();for(const Z in g)delete g[Z];if(e.setRenderTarget(T),f=null,u=null,h=null,a=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),k!==null){const Z=k.camera;Z.fov=k.fov,Z.zoom=k.zoom,Z.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",P),a.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ze=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?is:oa,ze=x.stencil?to:Oi);const Oe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Oe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new _i(u.textureWidth,u.textureHeight,{format:gi,type:Hn,depthTexture:new ao(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new _i(f.framebufferWidth,f.framebufferHeight,{format:gi,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),He.setContext(a),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(Z){for(let ne=0;ne<Z.removed.length;ne++){const he=Z.removed[ne],ze=w.indexOf(he);ze>=0&&(w[ze]=null,S[ze].disconnect(he))}for(let ne=0;ne<Z.added.length;ne++){const he=Z.added[ne];let ze=w.indexOf(he);if(ze===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=w.length){w.push(he),ze=Oe;break}else if(w[Oe]===null){w[Oe]=he,ze=Oe;break}if(ze===-1)break}const be=S[ze];be&&be.connect(he)}}const G=new q,Q=new q;function ee(Z,ne,he){G.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const ze=G.distanceTo(Q),be=ne.projectionMatrix.elements,Oe=he.projectionMatrix.elements,mt=be[14]/(be[10]-1),Be=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],at=(be[9]-1)/be[5],Ve=(be[8]-1)/be[0],ht=(Oe[8]+1)/Oe[0],Pt=mt*Ve,Vt=mt*ht,ct=ze/(-Ve+ht),Dt=ct*-Ve;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const N=mt+ct,$t=Be+ct,B=Pt-Dt,E=Vt+(ze-Dt),v=Xe*Be/$t*N,F=at*Be/$t*N;Z.projectionMatrix.makePerspective(B,E,v,F,N,$t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ne=Z.near,he=Z.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(he=p.depthFar)),O.near=C.near=R.near=ne,O.far=C.far=R.far=he,(L!==O.near||H!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,H=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const ze=Z.parent,be=O.cameras;ue(O,ze);for(let Oe=0;Oe<be.length;Oe++)ue(be[Oe],ze);be.length===2?ee(O,R,C):O.projectionMatrix.copy(R.projectionMatrix),k===null&&Z.isPerspectiveCamera&&(k={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,O,ze)};function Me(Z,ne,he){he===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(he.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ru*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return g[Z]};let Ne=null;function De(Z,ne){if(d=ne.getViewerPose(l||r),m=ne,d!==null){const he=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;he.length!==O.cameras.length&&(O.cameras.length=0,ze=!0);for(let Be=0;Be<he.length;Be++){const Xe=he[Be];let at=null;if(f!==null)at=f.getViewport(Xe);else{const ht=h.getViewSubImage(u,Xe);at=ht.viewport,Be===0&&(e.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(b))}let Ve=z[Be];Ve===void 0&&(Ve=new ti,Ve.layers.enable(Be),Ve.viewport=new Ct,z[Be]=Ve),Ve.matrix.fromArray(Xe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Xe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(at.x,at.y,at.width,at.height),Be===0&&(O.matrix.copy(Ve.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ze===!0&&O.cameras.push(Ve)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Be=h.getDepthInformation(he[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Be=0;Be<he.length;Be++){const Xe=he[Be].camera;if(Xe){let at=g[Xe];at||(at=new ag,g[Xe]=at);const Ve=h.getCameraImage(Xe);at.sourceTexture=Ve}}}}for(let he=0;he<S.length;he++){const ze=w[he],be=S[he];ze!==null&&be!==void 0&&be.update(ze,ne,l||r)}Ne&&Ne(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const He=new dg;He.setAnimationLoop(De),this.setAnimationLoop=function(Z){Ne=Z},this.dispose=function(){}}}const tM=new Et,_g=new $e;_g.set(-1,0,0,0,1,0,0,0,1);function nM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,sg(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,x,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,x,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Rn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Rn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),T=x.envMap,b=x.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(_g),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,x,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function iM(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const w=S.program;n.uniformBlockBinding(b,w)}function l(b,S){let w=a[b.id];w===void 0&&(p(b),w=d(b),a[b.id]=w,b.addEventListener("dispose",x));const A=S.program;n.updateUBOMapping(b,A);const y=e.render.frame;s[b.id]!==y&&(u(b),s[b.id]=y)}function d(b){const S=h();b.__bindingPointIndex=S;const w=i.createBuffer(),A=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function h(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=a[b.id],w=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,k=w.length;y<k;y++){const R=w[y];if(Array.isArray(R))for(let C=0,z=R.length;C<z;C++)f(R[C],y,C,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,w,A){if(_(b,S,w,A)===!0){const y=b.__offset,k=b.value;if(Array.isArray(k)){let R=0;for(let C=0;C<k.length;C++){const z=k[C],O=g(z);m(z,b.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(k,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function m(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function _(b,S,w,A){const y=b.value,k=S+"_"+w;if(A[k]===void 0)return typeof y=="number"||typeof y=="boolean"?A[k]=y:ArrayBuffer.isView(y)?A[k]=y.slice():A[k]=y.clone(),!0;{const R=A[k];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[k]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(b){const S=b.uniforms;let w=0;const A=16;for(let k=0,R=S.length;k<R;k++){const C=Array.isArray(S[k])?S[k]:[S[k]];for(let z=0,O=C.length;z<O;z++){const L=C[z],H=Array.isArray(L.value)?L.value:[L.value];for(let D=0,P=H.length;D<P;D++){const Y=H[D],G=g(Y),Q=w%A,ee=Q%G.boundary,ue=Q+ee;w+=ee,ue!==0&&A-ue<G.storage&&(w+=A-ue),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=G.storage}}}const y=w%A;return y>0&&(w+=A-y),b.__size=w,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),S}function x(b){const S=b.target;S.removeEventListener("dispose",x);const w=r.indexOf(S.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function T(){for(const b in a)i.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:c,update:l,dispose:T}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function sM(){return Ei===null&&(Ei=new Hv(aM,16,16,ps,Bi),Ei.name="DFG_LUT",Ei.minFilter=en,Ei.magFilter=en,Ei.wrapS=Qi,Ei.wrapT=Qi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class rM{constructor(e={}){const{canvas:t=pv(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Hn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=f,p=new Set([Ku,Yu,Xu]),g=new Set([Hn,Oi,eo,to,Wu,qu]),x=new Uint32Array(4),T=new Int32Array(4),b=new q;let S=null,w=null;const A=[],y=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,z=null,O=null,L=null,H=null;this._outputColorSpace=Nn;let D=0,P=0,Y=null,G=-1,Q=null;const ee=new Ct,ue=new Ct;let Me=null;const Ne=new rt(0);let De=0,He=t.width,Z=t.height,ne=1,he=null,ze=null;const be=new Ct(0,0,He,Z),Oe=new Ct(0,0,He,Z);let mt=!1;const Be=new th;let Xe=!1,at=!1;const Ve=new Et,ht=new q,Pt=new Ct,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Dt(){return Y===null?ne:1}let N=n;function $t(M,I){return t.getContext(M,I)}let B,E,v,F,V,J,ce,de,j,te,fe,Le,_e,pe,Pe,Fe,qe,U,me,ie,ge,Se,oe;try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",oi,!1),N===null){const I="webgl2";if(N=$t(I,M),N===null)throw $t(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(M){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),lt("WebGLRenderer: "+M.message),M}function Ie(){B=new sS(N),B.init(),ge=new Z1(N,B),E=new Kb(N,B,e,ge),v=new Y1(N,B),E.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=N.createFramebuffer(),L=N.createFramebuffer(),H=N.createFramebuffer(),F=new lS(N),V=new I1,J=new K1(N,B,v,V,E,ge,F),ce=new aS(R),de=new dy(N),Se=new Xb(N,de),j=new rS(N,de,F,Se),te=new dS(N,j,de,Se,F),U=new cS(N,E,J),Pe=new Zb(V),fe=new D1(R,ce,B,E,Se,Pe),Le=new nM(R,V),_e=new U1,pe=new G1(B),qe=new qb(R,ce,v,te,m,c),Fe=new X1(R,te,E),oe=new iM(N,F,E,v),me=new Yb(N,B,F),ie=new oS(N,B,F),F.programs=fe.programs,R.capabilities=E,R.extensions=B,R.properties=V,R.renderLists=_e,R.shadowMap=Fe,R.state=v,R.info=F}_!==Hn&&(k=new hS(_,t.width,t.height,o,a,s));const Re=new eM(R,N);this.xr=Re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=B.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=B.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(He,Z,!1))},this.getSize=function(M){return M.set(He,Z)},this.setSize=function(M,I,K=!0){if(Re.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,Z=I,t.width=Math.floor(M*ne),t.height=Math.floor(I*ne),K===!0&&(t.style.width=M+"px",t.style.height=I+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(He*ne,Z*ne).floor()},this.setDrawingBufferSize=function(M,I,K){He=M,Z=I,ne=K,t.width=Math.floor(M*K),t.height=Math.floor(I*K),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(_===Hn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,I,K,$){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,I,K,$),v.viewport(ee.copy(be).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,I,K,$){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,I,K,$),v.scissor(ue.copy(Oe).multiplyScalar(ne).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){v.setScissorTest(mt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,K=!0){let $=0;if(M){let W=!1;if(Y!==null){const xe=Y.texture.format;W=p.has(xe)}if(W){const xe=Y.texture.type,we=g.has(xe),ye=qe.getClearColor(),Te=qe.getClearAlpha(),Ce=ye.r,Ye=ye.g,Je=ye.b;we?(x[0]=Ce,x[1]=Ye,x[2]=Je,x[3]=Te,N.clearBufferuiv(N.COLOR,0,x)):(T[0]=Ce,T[1]=Ye,T[2]=Je,T[3]=Te,N.clearBufferiv(N.COLOR,0,T))}else $|=N.COLOR_BUFFER_BIT}I&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),qe.dispose(),_e.dispose(),pe.dispose(),V.dispose(),ce.dispose(),te.dispose(),Se.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ph),Re.removeEventListener("sessionend",mh),Ha.stop()};function yt(M){M.preventDefault(),Kh("WebGLRenderer: Context Lost."),C=!0}function dt(){Kh("WebGLRenderer: Context Restored."),C=!1;const M=F.autoReset,I=Fe.enabled,K=Fe.autoUpdate,$=Fe.needsUpdate,W=Fe.type;Ie(),F.autoReset=M,Fe.enabled=I,Fe.autoUpdate=K,Fe.needsUpdate=$,Fe.type=W}function oi(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bi(M){const I=M.target;I.removeEventListener("dispose",bi),i0(I)}function i0(M){a0(M),V.remove(M)}function a0(M){const I=V.get(M).programs;I!==void 0&&(I.forEach(function(K){fe.releaseProgram(K)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,K,$,W,xe){I===null&&(I=Vt);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=o0(M,I,K,$,W);v.setMaterial($,we);let Te=K.index,Ce=1;if($.wireframe===!0){if(Te=j.getWireframeAttribute(K),Te===void 0)return;Ce=2}const Ye=K.drawRange,Je=K.attributes.position;let Ae=Ye.start*Ce,ut=(Ye.start+Ye.count)*Ce;xe!==null&&(Ae=Math.max(Ae,xe.start*Ce),ut=Math.min(ut,(xe.start+xe.count)*Ce)),Te!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,Te.count)):Je!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,Je.count));const Ft=ut-Ae;if(Ft<0||Ft===1/0)return;Se.setup(W,$,ye,K,Te);let Mt,gt=me;if(Te!==null&&(Mt=de.get(Te),gt=ie,gt.setIndex(Mt)),W.isMesh)$.wireframe===!0?(v.setLineWidth($.wireframeLinewidth*Dt()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(W.isLine){let rn=$.linewidth;rn===void 0&&(rn=1),v.setLineWidth(rn*Dt()),W.isLineSegments?gt.setMode(N.LINES):W.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else W.isPoints?gt.setMode(N.POINTS):W.isSprite&&gt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(B.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const rn=W._multiDrawStarts,ke=W._multiDrawCounts,fn=W._multiDrawCount,ot=Te?de.get(Te).bytesPerElement:1,Kn=V.get($).currentProgram.getUniforms();for(let Si=0;Si<fn;Si++)Kn.setValue(N,"_gl_DrawID",Si),gt.render(rn[Si]/ot,ke[Si])}else if(W.isInstancedMesh)gt.renderInstances(Ae,Ft,W.count);else if(K.isInstancedBufferGeometry){const rn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,rn);gt.renderInstances(Ae,Ft,ke)}else gt.render(Ae,Ft)};function fh(M,I,K,$){z!==null&&M.isNodeMaterial&&z.setObject($,M),Xe===!0&&Pe.setState(M,K,!1),M.transparent===!0&&M.side===fi&&M.forceSinglePass===!1?(M.side=Rn,M.needsUpdate=!0,yo(M,I,$),M.side=hs,M.needsUpdate=!0,yo(M,I,$),M.side=fi):yo(M,I,$)}this.compile=function(M,I,K=null){K===null&&(K=M),z!==null&&z.renderStart(M,I,K),w=pe.get(K),w.init(I),y.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),M!==K&&M.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),at=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,at),Xe===!0&&Pe.setGlobalState(this.clippingPlanes,I),z!==null&&Fe.render(w.state.shadowsArray,K,I);const $=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];fh(ye,K,I,W),$.add(ye)}else fh(xe,K,I,W),$.add(xe)}),w=y.pop(),z!==null&&z.renderEnd(),$},this.compileAsync=function(M,I,K=null){const $=this.compile(M,I,K);return new Promise(W=>{function xe(){if($.forEach(function(we){const Te=V.get(we).currentProgram;(Te===void 0||Te.isReady())&&$.delete(we)}),$.size===0){W(M);return}setTimeout(xe,10)}B.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let nc=null;function s0(M){nc&&nc(M)}function ph(){Ha.stop()}function mh(){Ha.start()}const Ha=new dg;Ha.setAnimationLoop(s0),typeof self<"u"&&Ha.setContext(self),this.setAnimationLoop=function(M){nc=M,Re.setAnimationLoop(M),M===null?Ha.stop():Ha.start()},Re.addEventListener("sessionstart",ph),Re.addEventListener("sessionend",mh),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;z!==null&&z.renderStart(M,I);const K=Re.enabled===!0&&Re.isPresenting===!0,$=k!==null&&(Y===null||K)&&k.begin(R,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(I),I=Re.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,I,Y),w=pe.get(M,y.length),w.init(I),w.state.textureUnits=J.getTextureUnits(),y.push(w),Ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(Ve,Ii,I.reversedDepth),at=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,at),S=_e.get(M,A.length),S.init(),A.push(S),Re.enabled===!0&&Re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&ic(we,I,-1/0,R.sortObjects)}ic(M,I,0,R.sortObjects),S.finish(),z!==null&&z.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(he,ze),ct=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ct&&qe.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Pe.beginShadows();const W=w.state.shadowsArray;if(Fe.render(W,M,I),Xe===!0&&Pe.endShadows(),($&&k.hasRenderPass())===!1){const we=S.opaque,ye=S.transmissive;if(w.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ye.length>0)for(let Ce=0,Ye=Te.length;Ce<Ye;Ce++){const Je=Te[Ce];_h(we,ye,M,Je)}ct&&qe.render(M);for(let Ce=0,Ye=Te.length;Ce<Ye;Ce++){const Je=Te[Ce];gh(S,M,Je,Je.viewport)}}else ye.length>0&&_h(we,ye,M,I),ct&&qe.render(M),gh(S,M,I)}Y!==null&&P===0&&(J.updateMultisampleRenderTarget(Y),J.updateRenderTargetMipmap(Y)),$&&k.end(R),M.isScene===!0&&M.onAfterRender(R,M,I),Se.resetDefaultState(),G=-1,Q=null,y.pop(),y.length>0?(w=y[y.length-1],J.setTextureUnits(w.state.textureUnits),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,z!==null&&z.renderEnd()};function ic(M,I,K,$){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Be)){$&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ve);const we=te.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,K,Pt.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Be))){const we=te.update(M),ye=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Pt.copy(we.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(Ve)),Array.isArray(ye)){const Te=we.groups;for(let Ce=0,Ye=Te.length;Ce<Ye;Ce++){const Je=Te[Ce],Ae=ye[Je.materialIndex];Ae&&Ae.visible&&S.push(M,we,Ae,K,Pt.z,Je,I)}}else ye.visible&&S.push(M,we,ye,K,Pt.z,null,I)}}const xe=M.children;for(let we=0,ye=xe.length;we<ye;we++)ic(xe[we],I,K,$)}function gh(M,I,K,$){const{opaque:W,transmissive:xe,transparent:we}=M;w.setupLightsView(K),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,K),$&&v.viewport(ee.copy($)),W.length>0&&vo(W,I,K),xe.length>0&&vo(xe,I,K),we.length>0&&vo(we,I,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _h(M,I,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Ae=B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new _i(1,1,{generateMipmaps:!0,type:Ae?Bi:Hn,minFilter:Ta,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const xe=w.state.transmissionRenderTarget[$.id],we=$.viewport||ee;xe.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const ye=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Ne),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),ct&&qe.render(K);const Ye=R.toneMapping;R.toneMapping=Ni;const Je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,$),vo(M,K,$),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,Ft=I.length;ut<Ft;ut++){const Mt=I[ut],{object:gt,geometry:rn,material:ke,group:fn}=Mt;if(ke.side===fi&&gt.layers.test($.layers)){const ot=ke.side;ke.side=Rn,ke.needsUpdate=!0,vh(gt,K,$,rn,ke,fn),ke.side=ot,ke.needsUpdate=!0,Ae=!0}}Ae===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}R.setRenderTarget(ye,Te,Ce),R.setClearColor(Ne,De),Je!==void 0&&($.viewport=Je),R.toneMapping=Ye}function vo(M,I,K){const $=I.isScene===!0?I.overrideMaterial:null;for(let W=0,xe=M.length;W<xe;W++){const we=M[W],{object:ye,geometry:Te,group:Ce}=we;let Ye=we.material;Ye.allowOverride===!0&&$!==null&&(Ye=$),ye.layers.test(K.layers)&&vh(ye,I,K,Te,Ye,Ce)}}function vh(M,I,K,$,W,xe){z!==null&&W.isNodeMaterial&&z.setObject(M,W),M.onBeforeRender(R,I,K,$,W,xe),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(R,I,K,$,M,xe),W.transparent===!0&&W.side===fi&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,R.renderBufferDirect(K,I,$,W,M,xe),W.side=hs,W.needsUpdate=!0,R.renderBufferDirect(K,I,$,W,M,xe),W.side=fi):R.renderBufferDirect(K,I,$,W,M,xe),M.onAfterRender(R,I,K,$,W,xe)}function yo(M,I,K){I.isScene!==!0&&(I=Vt);const $=V.get(M),W=w.state.lights,xe=w.state.shadowsArray,we=W.state.version,ye=fe.getParameters(M,W.state,xe,I,K,w.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ye);let Ce=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,$.fog=I.fog;const Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=ce.get(M.envMap||$.environment,Ye),$.envMapRotation=$.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",bi),Ce=new Map,$.programs=Ce);let Je=Ce.get(Te);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===we)return xh(M,ye),Je}else ye.uniforms=fe.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,K,ye),M.onBeforeCompile(ye,R),Je=fe.acquireProgram(ye,Te),Ce.set(Te,Je),$.uniforms=ye.uniforms;const Ae=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),xh(M,ye),$.needsLights=c0(M),$.lightsStateVersion=we,$.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),$.lightProbeGrid=w.state.lightProbeGridArray.length>0,$.currentProgram=Je,$.uniformsList=null,Je}function yh(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ol.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function xh(M,I){const K=V.get(M);K.outputColorSpace=I.outputColorSpace,K.batching=I.batching,K.batchingColor=I.batchingColor,K.instancing=I.instancing,K.instancingColor=I.instancingColor,K.instancingMorph=I.instancingMorph,K.skinning=I.skinning,K.morphTargets=I.morphTargets,K.morphNormals=I.morphNormals,K.morphColors=I.morphColors,K.morphTargetsCount=I.morphTargetsCount,K.numClippingPlanes=I.numClippingPlanes,K.numIntersection=I.numClipIntersection,K.vertexAlphas=I.vertexAlphas,K.vertexTangents=I.vertexTangents,K.toneMapping=I.toneMapping}function r0(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let K=0,$=M.length;K<$;K++){const W=M[K];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function o0(M,I,K,$,W){I.isScene!==!0&&(I=Vt),J.resetTextureUnits();const xe=I.fog,we=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?I.environment:null,ye=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:et.workingColorSpace,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=ce.get($.envMap||we,Te),Ye=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ae=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Ft=!!K.morphAttributes.color;let Mt=Ni;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rn=gt!==void 0?gt.length:0,ke=V.get($),fn=w.state.lights;if(Xe===!0&&(at===!0||M!==Q)){const xt=M===Q&&$.id===G;Pe.setState($,M,xt)}let ot=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==fn.state.version||ke.outputColorSpace!==ye||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==Ce||$.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Pe.numPlanes||ke.numIntersection!==Pe.numIntersection)||ke.vertexAlphas!==Ye||ke.vertexTangents!==Je||ke.morphTargets!==Ae||ke.morphNormals!==ut||ke.morphColors!==Ft||ke.toneMapping!==Mt||ke.morphTargetsCount!==rn||!!ke.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,ke.__version=$.version);let Kn=ke.currentProgram;ot===!0&&(Kn=yo($,I,W),z&&$.isNodeMaterial&&z.onUpdateProgram($,Kn,ke));let Si=!1,da=!1,bs=!1;const pt=Kn.getUniforms(),zt=ke.uniforms;if(v.useProgram(Kn.program)&&(Si=!0,da=!0,bs=!0),$.id!==G&&(G=$.id,da=!0),ke.needsLights){const xt=r0(w.state.lightProbeGridArray,W);ke.lightProbeGrid!==xt&&(ke.lightProbeGrid=xt,da=!0)}if(Si||Q!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(N,"projectionMatrix",M.projectionMatrix),pt.setValue(N,"viewMatrix",M.matrixWorldInverse);const ha=pt.map.cameraPosition;ha!==void 0&&ha.setValue(N,ht.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,da=!0,bs=!0)}if(ke.needsLights&&(fn.state.sunShadowMap.length>0&&pt.setValue(N,"sunShadowMap",fn.state.sunShadowMap,J),fn.state.directionalShadowMap.length>0&&pt.setValue(N,"directionalShadowMap",fn.state.directionalShadowMap,J),fn.state.spotShadowMap.length>0&&pt.setValue(N,"spotShadowMap",fn.state.spotShadowMap,J),fn.state.pointShadowMap.length>0&&pt.setValue(N,"pointShadowMap",fn.state.pointShadowMap,J)),W.isSkinnedMesh){pt.setOptional(N,W,"bindMatrix"),pt.setOptional(N,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(N,"boneTexture",xt.boneTexture,J))}W.isBatchedMesh&&(pt.setOptional(N,W,"batchingTexture"),pt.setValue(N,"batchingTexture",W._matricesTexture,J),pt.setOptional(N,W,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",W._indirectTexture,J),pt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",W._colorsTexture,J));const ua=K.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&U.update(W,K,Kn),(da||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,pt.setValue(N,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&I.environment!==null&&(zt.envMapIntensity.value=I.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=sM()),da){if(pt.setValue(N,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&l0(zt,bs),xe&&$.fog===!0&&Le.refreshFogUniforms(zt,xe),Le.refreshMaterialUniforms(zt,$,ne,Z,w.state.transmissionRenderTarget[M.id]),ke.needsLights&&ke.lightProbeGrid){const xt=ke.lightProbeGrid;zt.probesSH.value=xt.texture,zt.probesMin.value.copy(xt.boundingBox.min),zt.probesMax.value.copy(xt.boundingBox.max),zt.probesResolution.value.copy(xt.resolution)}ol.upload(N,yh(ke),zt,J)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ol.upload(N,yh(ke),zt,J),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(N,"center",W.center),pt.setValue(N,"modelViewMatrix",W.modelViewMatrix),pt.setValue(N,"normalMatrix",W.normalMatrix),pt.setValue(N,"modelMatrix",W.matrixWorld),$.uniformsGroups!==void 0){const xt=$.uniformsGroups;for(let ha=0,Ss=xt.length;ha<Ss;ha++){const Sh=xt[ha];oe.update(Sh,Kn),oe.bind(Sh,Kn)}}return Kn}function l0(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function c0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,I,K){const $=V.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=I,V.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const K=V.get(M);K.__webglFramebuffer=I,K.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,K=0){Y=M,D=I,P=K;let $=null,W=!1,xe=!1;if(M){const ye=V.get(M);if(ye.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),ee.copy(M.viewport),ue.copy(M.scissor),Me=M.scissorTest,v.viewport(ee),v.scissor(ue),v.setScissorTest(Me),G=-1;return}else if(ye.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(ye.__hasExternalTextures)J.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(ye.__boundDepthTexture!==Ye){if(Ye!==null&&V.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Ce=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?$=Ce[I][K]:$=Ce[I],W=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?$=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[K]:$=Ce,ee.copy(M.viewport),ue.copy(M.scissor),Me=M.scissorTest}else ee.copy(be).multiplyScalar(ne).floor(),ue.copy(Oe).multiplyScalar(ne).floor(),Me=mt;if(K!==0&&($=O),v.bindFramebuffer(N.FRAMEBUFFER,$)&&v.drawBuffers(M,$),v.viewport(ee),v.scissor(ue),v.setScissorTest(Me),W){const ye=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,K)}else if(xe){const ye=I;for(let Te=0;Te<M.textures.length;Te++){const Ce=V.get(M.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,K,ye)}}else if(M!==null&&K!==0){const ye=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,K)}G=-1};function bh(M){const I=V.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=E.textureFormatReadable(M.format),I.__typeReadable=E.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,K,$,W,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){v.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ce=M.textures[ye],Ye=Ce.format,Je=Ce.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=bh(Ce);if(Ae.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-$&&K>=0&&K<=M.height-W&&N.readPixels(I,K,$,W,ge.convert(Ye),ge.convert(Je),xe)}finally{const Ce=Y!==null?V.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,I,K,$,W,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(I>=0&&I<=M.width-$&&K>=0&&K<=M.height-W){v.bindFramebuffer(N.FRAMEBUFFER,Te);const Ce=M.textures[ye],Ye=Ce.format,Je=Ce.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=bh(Ce);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ut),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(I,K,$,W,ge.convert(Ye),ge.convert(Je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ft=Y!==null?V.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ft);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mv(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ut),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ut),N.deleteSync(Mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,K=0){const $=Math.pow(2,-K),W=Math.floor(M.image.width*$),xe=Math.floor(M.image.height*$),we=I!==null?I.x:0,ye=I!==null?I.y:0;J.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,we,ye,W,xe),v.unbindTexture()},this.copyTextureToTexture=function(M,I,K=null,$=null,W=0,xe=0){let we,ye,Te,Ce,Ye,Je,Ae,ut,Ft;const Mt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(K!==null)we=K.max.x-K.min.x,ye=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,Ye=K.min.y,Je=K.isBox3?K.min.z:0;else{const zt=Math.pow(2,-W);we=Math.floor(Mt.width*zt),ye=Math.floor(Mt.height*zt),M.isDataArrayTexture?Te=Mt.depth:M.isData3DTexture?Te=Math.floor(Mt.depth*zt):Te=1,Ce=0,Ye=0,Je=0}$!==null?(Ae=$.x,ut=$.y,Ft=$.z):(Ae=0,ut=0,Ft=0);const gt=ge.convert(I.format),rn=ge.convert(I.type);let ke;I.isData3DTexture?(J.setTexture3D(I,0),ke=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(J.setTexture2DArray(I,0),ke=N.TEXTURE_2D_ARRAY):(J.setTexture2D(I,0),ke=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const fn=v.getParameter(N.UNPACK_ROW_LENGTH),ot=v.getParameter(N.UNPACK_IMAGE_HEIGHT),Kn=v.getParameter(N.UNPACK_SKIP_PIXELS),Si=v.getParameter(N.UNPACK_SKIP_ROWS),da=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),v.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);const bs=M.isDataArrayTexture||M.isData3DTexture,pt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const zt=V.get(M),ua=V.get(I),xt=V.get(zt.__renderTarget),ha=V.get(ua.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Ss=0;Ss<Te;Ss++)bs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(M).__webglTexture,W,Je+Ss),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(I).__webglTexture,xe,Ft+Ss)),N.blitFramebuffer(Ce,Ye,we,ye,Ae,ut,we,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||V.has(M)){const zt=V.get(M),ua=V.get(I);v.bindFramebuffer(N.READ_FRAMEBUFFER,L),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let xt=0;xt<Te;xt++)bs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,W,Je+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zt.__webglTexture,W),pt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ua.__webglTexture,xe,Ft+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ua.__webglTexture,xe),W!==0?N.blitFramebuffer(Ce,Ye,we,ye,Ae,ut,we,ye,N.COLOR_BUFFER_BIT,N.NEAREST):pt?N.copyTexSubImage3D(ke,xe,Ae,ut,Ft+xt,Ce,Ye,we,ye):N.copyTexSubImage2D(ke,xe,Ae,ut,Ce,Ye,we,ye);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(ke,xe,Ae,ut,Ft,we,ye,Te,gt,rn,Mt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ke,xe,Ae,ut,Ft,we,ye,Te,gt,Mt.data):N.texSubImage3D(ke,xe,Ae,ut,Ft,we,ye,Te,gt,rn,Mt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ut,we,ye,gt,rn,Mt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Ae,ut,Mt.width,Mt.height,gt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ut,we,ye,gt,rn,Mt);v.pixelStorei(N.UNPACK_ROW_LENGTH,fn),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Kn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Si),v.pixelStorei(N.UNPACK_SKIP_IMAGES,da),xe===0&&I.generateMipmaps&&N.generateMipmap(ke),v.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){D=0,P=0,Y=null,v.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const oM=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],du=["pitch","yaw","roll","bend","x","y","z"];function ll(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function vg(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function lM(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:vg(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const s=ll(e.loopBas);s!==null&&s>=0&&(a.loopBas=s);const r=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of r){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of oM){const h=c[d];if(!h||typeof h!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const m of du){const _=ll(h[m]);_!==null&&(u[m]||(u[m]=[]),u[m].push({t:l,v:_,easing:String(c.easing||"LINEAR").toUpperCase()}))}const f=ll(h.turn);f!==null&&f!==0&&(o[d]=(o[d]||0)+f*360,u.turn||(u.turn=[]),u.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&uM(a),a}const cM={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function dM(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function uM(i){for(const[e,t]of Object.entries(cM)){const n=i.kemikler.get(e);if(!n)continue;let a=0,s=0;for(const r of["x","y"]){const o=n[r];if(!o||o.length===0)continue;a++;const c=t[r==="x"?0:1];Math.abs(dM(o.map(l=>l.v))-c)<=2&&s++}a===0||s!==a||["x","y","z"].forEach((r,o)=>{const c=n[r];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function hM(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:vg(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const r of Object.keys(s)){const o=s[r];if(!o||typeof o!="object")continue;const c={},l=(d,h,u)=>{if(!d)return;const f=[],m=(_,p)=>{const g=ll(p);g!==null&&f.push({t:_,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;m(p,Array.isArray(_?.vector)?_.vector[h]:void 0)}else Array.isArray(d.vector)?m(0,d.vector[h]):typeof d=="number"&&m(0,d);f.length&&(c[u]=f)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(r,c)}return a}function fM(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return lM(e);if(e?.animations)return hM(e);throw new Error("bilinmeyen emote formatı")}function pM(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Xf(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],s=a.t-n.t,r=s<=0?1:(e-n.t)/s;return n.v+(a.v-n.v)*pM(a.easing)(r)}function yg(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Yf={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:yg(),kokDon:[0,0,0],kokKonum:[0,0,0]},xg={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},mM=xg,gM={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Kf(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const f=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%f}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:yg(),kokDon:[0,0,0],kokKonum:[0,0,0]},r=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(f,m,_)=>{f[m==="x"?0:m==="y"?1:2]=_};for(const[f,m]of i.kemikler){if(a&&f==="body"){for(const g of du){const x=Xf(m[g],n);x!==null&&(g==="pitch"?s.kokDon[0]=x:g==="yaw"?s.kokDon[1]=x:g==="roll"?s.kokDon[2]=-x:g==="bend"?s.bend[4]=x:(g==="x"||g==="y"||g==="z")&&d(l,g,x))}continue}const _=xg[f],p=_!==void 0?s[r[_]]:null;for(const g of du){const x=Xf(m[g],n);if(x!==null){if(p){if(g==="pitch")p[0]=x;else if(g==="yaw")p[1]=x;else if(g==="roll")p[2]=a?-x:x;else if(g==="x"||g==="y"||g==="z"){const T=mM[f];T!==void 0&&d(c[T],g,x)}}if(g==="bend"){const T=gM[f];T!==void 0&&(s.bend[T]+=x)}}}}const h=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let f=0;f<6;f++){const m=c[f];s.konum[f]=[m[0]??0,m[1]??0,-(m[2]??0)]}return s.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],s}const u=[1,0,1,1,0,0];for(let f=0;f<6;f++){const m=c[f],_=s.konum[f];for(let p=0;p<3;p++){if(m[p]===void 0){_[p]=0;continue}let g=m[p];p===1&&u[f]&&(g+=24),_[p]=g-h[f][p]}}return s}const Ee=1/24,zi=64,Ui=32,_M=.2617994,Zf=.2617994,vM=9;function Fn(i,e,t,n,a,s,r=!1){const o=i.attributes.uv,c=e*4,l=r?s:n,d=r?n:s;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function so(i){i.magFilter=qt,i.minFilter=qt,i.colorSpace=Nn}function bg(i,e=!1){return i?new El({map:i,transparent:e,alphaTest:e?.01:0}):new El({color:5924466})}function Jf(i,e,t=!1){const n=new la(i.w*Ee,i.h*Ee,i.d*Ee),{u:a,v:s,w:r,h:o,d:c}=i;return e&&(Fn(n,0,a+c+r,s+c,a+c+r+c,s+c+o),Fn(n,1,a,s+c,a+c,s+c+o),Fn(n,2,a+c,s,a+c+r,s+c),Fn(n,3,a+c+r,s,a+c+r+r,s+c,!0),Fn(n,4,a+c,s+c,a+c+r,s+c+o),Fn(n,5,a+c+r+c,s+c,a+c+r+c+r,s+c+o),so(e)),new Yn(n,bg(e,t))}function Qf(i,e,t,n,a,s){const r=i.attributes.uv,o=(c,l,d,h,u,f=!1)=>{const m=c*4,_=f?u:d,p=f?d:u;r.setXY(m+0,l/zi,1-_/Ui),r.setXY(m+1,h/zi,1-_/Ui),r.setXY(m+2,l/zi,1-p/Ui),r.setXY(m+3,h/zi,1-p/Ui)};o(0,e+s+n,t+s,e+s+n+s,t+s+a),o(1,e,t+s,e+s,t+s+a),o(2,e+s,t,e+s+n,t+s),o(3,e+s+n,t,e+s+n+n,t+s,!0),o(4,e+s,t+s,e+s+n,t+s+a),o(5,e+s+n+s,t+s,e+s+n+s+n,t+s+a),r.needsUpdate=!0}function jf(i){const e=Math.max(zi,Math.round(i.width)),t=Math.max(Ui,Math.round(i.height)),n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d");return a&&(a.imageSmoothingEnabled=e!==zi||t!==Ui,a.imageSmoothingQuality="high",a.drawImage(i,0,0,e,t)),n}function Wo(i,e=!1){const t=new ig(i);return so(t),e&&(t.magFilter=en,t.minFilter=Ta,t.generateMipmaps=!0),t.needsUpdate=!0,t}function qc(i,e,t,n){const a=e*Ee/2,s=t*Ee/2,r=n*Ee/2,o=.0015,c=new tg({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),l=d=>{const h=new xi;h.setAttribute("position",new ri(d,3));const u=new $v(h,c);u.renderOrder=4,i.add(u)};for(const d of[-r-o,r+o]){const h=[];for(let u=0;u<=e;u++){const f=-a+u*Ee;h.push(f,-s,d,f,s,d)}for(let u=0;u<=t;u++){const f=-s+u*Ee;h.push(-a,f,d,a,f,d)}l(h)}for(const d of[-a-o,a+o]){const h=[];for(let u=0;u<=n;u++){const f=-r+u*Ee;h.push(d,-s,f,d,s,f)}for(let u=0;u<=t;u++){const f=-s+u*Ee;h.push(d,f,-r,d,f,r)}l(h)}for(const d of[-s-o,s+o]){const h=[];for(let u=0;u<=e;u++){const f=-a+u*Ee;h.push(f,d,-r,f,d,r)}for(let u=0;u<=n;u++){const f=-r+u*Ee;h.push(-a,d,f,a,d,f)}l(h)}}function va(i,e,t,n=!1){const a=i.h/2,{u:s,v:r,w:o,d:c}=i,l=new la(i.w*Ee,a*Ee,i.d*Ee);if(t){const d=r+c+(e?a:0),h=d+a;Fn(l,0,s+c+o,d,s+c+o+c,h),Fn(l,1,s,d,s+c,h),Fn(l,2,s+c,r,s+c+o,r+c),e?Fn(l,3,s+c+o,r,s+c+o+o,r+c,!0):Fn(l,3,s+c,r,s+c+o,r+c),Fn(l,4,s+c,d,s+c+o,h),Fn(l,5,s+c+o+c,d,s+c+o+c+o,h),so(t)}return new Yn(l,bg(t,n))}class yM{renderer=null;scene=new Dv;camera=new ti(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new ly;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;kanatAyrikAcik=!1;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new rM({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new ay(16777215,.9));const t=new bf(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new bf(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(a,s,!1),this.camera.aspect=a/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(t.pointerType==="mouse"){const n=t.button===0;if(n&&this.etkilesimKapali||!n&&t.button!==1&&t.button!==2)return}this.surukleX=t.clientX,this.surukleY=t.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX,a=t.clientY-(this.surukleY??t.clientY);this.surukleX=t.clientX,this.surukleY=t.clientY,this.kameraAciHedef-=n*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+a*.006))},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.baglamEngel=t=>t.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.tekerlek=t=>{t.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(t.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,s)=>{const r=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),a(o)},o.onerror=()=>{URL.revokeObjectURL(r),s(new Error("görsel açılamadı"))},o.src=r})}}catch{}return await new ty().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s&&(s.imageSmoothingEnabled=!1,n.height===32?s.drawImage(n,0,0):s.drawImage(n,0,0,64,64),t=new nn(a),so(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;const a=jf(n);this.pelerinDoku=Wo(a,a.width>zi||a.height>Ui),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=Wo(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;const a=jf(n);this.kanatDoku=Wo(a,a.width>zi||a.height>Ui),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=Wo(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new El({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:fi}),n=new Zt;n.position.set(0,6*Ee,-2*Ee);for(const a of[1,-1]){const s=new Zt;s.position.set(a*5*Ee,0,0),s.rotation.order="ZYX";const r=new la(10*Ee,20*Ee,2*Ee);Qf(r,22,0,10,20,2);const o=new Yn(r,t);o.position.set(-a*5*Ee,-10*Ee,-Ee),a<0&&(o.scale.x=-1),qc(o,10,20,2),s.add(o),s.rotation.x=_M,s.rotation.y=0,s.rotation.z=a*Zf,s.userData.yon=a,n.add(s)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.kanatAyrikUygula(),this.izgaraYenile()}kanatAyrik(e){this.kanatAyrikAcik!==e&&(this.kanatAyrikAcik=e,this.kanatAyrikUygula())}kanatAyrikUygula(){if(this.kanatGrup)for(const e of this.kanatGrup.children){const t=e.userData.yon||1;e.position.x=t*(5+(this.kanatAyrikAcik?vM:0))*Ee}}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(r=>r.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Ee)),a=Math.max(1,Math.round(t.height/Ee)),s=Math.max(1,Math.round(t.depth/Ee));qc(e,n,a,s)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new la(10*Ee,16*Ee,1*Ee);Qf(t,0,0,10,16,1);const n=t.attributes.uv;for(const o of[20,22]){const c=n.getX(o),l=n.getX(o+1);n.setX(o,l),n.setX(o+1,c)}n.needsUpdate=!0;const a=new El({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:fi}),s=new Yn(t,a);s.position.set(0,-8*Ee,0),qc(s,10,16,1);const r=new Zt;r.position.set(0,6*Ee,-2.5*Ee),r.rotation.x=.06,r.visible=this.kozmetikGorunur,r.add(s),e.add(r),this.pelerinGrup=r,this.pelerinSarkac=r,this.izgaraYenile()}tuvalDoku(e,t){const n=new ig(e);so(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],zi,Ui):null:this.kanatGrup?this.isin(e,[this.kanatGrup],zi,Ui):null}isin(e,t,n,a){const s=this.canvas;if(!s||!this.renderer||t.length===0)return null;const r=s.getBoundingClientRect();if(r.width<1||r.height<1)return null;const o=new it((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),c=new oy;c.setFromCamera(o,this.camera);const l=c.intersectObjects(t,!0).find(u=>!!u.uv);if(!l?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(l.uv.x*n))),h=Math.min(a-1,Math.max(0,Math.floor((1-l.uv.y)*a)));return{x:d,y:h}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const y=A;y.geometry&&y.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new Zt,this.kok.position.y=-.66,this.kalca=new Zt,this.kalca.position.set(0,12*Ee,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Zt,body:new Zt,armL:new Zt,armR:new Zt,legL:new Zt,legR:new Zt};const[n,a,s,r,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,s,r,o,c])A.rotation.order="ZYX";const l=Jf({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Ee,0),n.add(l);const d=Jf({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ee,0),n.add(d),this.tabanMeshler.push(l),this.ustMeshler.push(d),this.oyuncuMeshler.push(l,d),a.position.set(0,12*Ee,0),a.userData.pivotPx=[0,12,0];const h=(A,y,k,R,C)=>{const z=va(y,!1,e);z.position.set(R,k+y.h/4*Ee,0),A.add(z);const O=new Zt;O.position.set(0,k,0);const L=va(y,!0,e);if(L.position.set(R,-(y.h/4)*Ee,0),O.add(L),A.add(O),this.tabanMeshler.push(z,L),this.oyuncuMeshler.push(z,L),C){const H=Y=>{Y.scale.set((C.w+.5)/C.w,(C.h+.25)/C.h,(C.d+.5)/C.d)},D=va(C,!1,e,!0);D.position.set(R,k+C.h/4*Ee,0),H(D),A.add(D);const P=va(C,!0,e,!0);P.position.set(R,-(C.h/4)*Ee,0),H(P),O.add(P),this.ustMeshler.push(D,P),this.oyuncuMeshler.push(D,P)}return O},u=new Zt;u.position.set(0,-6*Ee,0),u.rotation.order="ZYX";const f=va({u:16,v:16,w:8,h:12,d:4},!1,e);f.position.set(0,3*Ee,0),u.add(f),a.add(u);const m=va({u:16,v:16,w:8,h:12,d:4},!0,e);m.position.set(0,-9*Ee,0),a.add(m);const _=va({u:16,v:32,w:8,h:12,d:4},!1,e,!0);_.position.set(0,3*Ee,0),_.scale.set(1.0625,1.0208,1.125),u.add(_);const p=va({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Ee,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(f,m),this.ustMeshler.push(_,p),this.oyuncuMeshler.push(f,m,_,p);const g=new Zt;g.position.set(0,6*Ee,0),g.rotation.order="ZYX";const x=t?3:4;n.position.set(0,6*Ee,0),n.userData.pivotPx=[0,6,0],s.position.set(5*Ee,4*Ee,0),s.userData.pivotPx=[5,4,0];const T=h(s,{u:32,v:48,w:x,h:12,d:4},-4*Ee,Ee,{u:48,v:48,w:x,h:12,d:4});r.position.set(-5*Ee,4*Ee,0),r.userData.pivotPx=[-5,4,0];const b=h(r,{u:40,v:16,w:x,h:12,d:4},-4*Ee,-Ee,{u:40,v:32,w:x,h:12,d:4});o.position.set(1.9*Ee,0,0),o.userData.pivotPx=[1.9,0,0];const S=h(o,{u:16,v:48,w:4,h:12,d:4},-6*Ee,0,{u:0,v:48,w:4,h:12,d:4});c.position.set(-1.9*Ee,0,0),c.userData.pivotPx=[-1.9,0,0];const w=h(c,{u:0,v:16,w:4,h:12,d:4},-6*Ee,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:g,armL:T,armR:b,legL:S,legR:w},g.add(n,s,r),this.kalca.add(a,g,o,c),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const A of this.ustMeshler)A.visible=!1}else for(const A of this.oyuncuMeshler)A.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),Aa===this&&(Aa=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now(),n=document.hasFocus()?1e3/45:1e3/4;if(t-this.sonCizimAt<n)return;this.sonCizimAt=t;const a=Math.min(.05,this.saat.getDelta());this.zaman+=a,this.adimla(a),this.kameraGuncelle(a),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Kf(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Yf):t=Kf(this.aktif,this.tEmote)):(t=Yf,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Ee+t*.3*Ee;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*(Zf+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=yv.degToRad,s=(o,c,l)=>{const d=a(c[0]),h=-a(c[1]),u=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(h-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const f=o.userData.pivotPx||[0,0,0],m=e.konum[l],_=(f[0]+m[0])*Ee,p=(f[1]+m[1])*Ee,g=(f[2]+m[2])*Ee;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const r=this.bukulenler;if(r){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(r.armL,e.bend[0]),o(r.armR,e.bend[1]),o(r.legL,e.bend[2]),o(r.legR,e.bend[3]),o(r.body,e.bend[4]),o(r.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Ee,d=(12+c[1])*Ee,h=c[2]*Ee;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(h-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let Aa=null;function gn(){return Aa||(Aa=new yM),window.__sahne=Aa,Aa}function Vl(){Aa?.kapati(),Aa=null,window.__sahne=null}const Ue=128,hi=96;function ui(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ae(i,e,t,n=1,a=1,s="#fff"){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ya(i,e,t=hi){const n=Math.ceil(t/e.length);e.forEach((a,s)=>ae(i,0,s*n,Ue,n+1,a));for(let a=1;a<e.length;a++){const s=a*n,r=ui(a*977);for(let o=0;o<Ue;o+=2)r()>.45&&(ae(i,o,s-1,1,1,e[a-1]),r()>.6&&ae(i,o+1,s-1,1,1,e[a]))}}function ep(i,e,t,n,a,s){ae(i,e+3,t+3,n,3,a),ae(i,e,t+5,n+6,3,a),ae(i,e+2,t+8,n-2,2,s),ae(i,e+6,t+2,n-8,2,a),ae(i,e+4,t+10,n-6,1,s)}function tp(i,e,t,n,a){const s=ui(a);for(let r=0;r<6;r++){const o=Math.floor(s()*Ue),c=18+Math.floor(s()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+r%3*6)));ae(i,o-d,e-l,d*2,1,t)}ae(i,o-1,e-c+1,2,2,n)}}function Fs(i,e,t,n,a=30){const s=ui(n);for(let r=0;r<e;r++){const o=Math.floor(s()*Ue),c=a+Math.floor(s()*(hi-a));ae(i,o,c,1,1,t[Math.floor(s()*t.length)])}}const uu=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ya(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),ae(i,0,62,Ue,8,"#b98aa6"),ae(i,0,68,Ue,8,"#8f6377"),tp(i,64,"#a97a95","#d9aec6",41);const e=(n,a,s)=>{const r=ui(s),o=78;ae(i,n,o-a,3,a,"#5d3b46"),ae(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(r()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((r()-.5)*14),h=o-a-Math.round(r()*14)-l*4;for(let u=-c;u<=c;u++){const f=Math.round(Math.sqrt(Math.max(0,c*c-u*u))*1.15);f<=0||ae(i,d-f,h+u,f*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const f=Math.round((r()-.5)*c*1.6),m=Math.round((r()-.5)*c*1.6);ae(i,d+f,h+m,1,1,r()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),ae(i,0,78,Ue,hi-78,"#7fa86a"),ae(i,0,78,Ue,2,"#9dc484"),ae(i,0,90,Ue,6,"#5d7f4f");const t=ui(53);for(let n=0;n<70;n++)ae(i,t()*Ue,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ya(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),ae(i,0,52,Ue,6,"#ff6a1a"),ae(i,0,52,Ue,2,"#ffa347"),ae(i,0,56,Ue,2,"#c93d0c"),ae(i,0,40,Ue,14,"#2b1218"),ae(i,12,26,16,30,"#1c0a10"),ae(i,12,22,16,5,"#2f121a"),ae(i,96,18,20,42,"#1c0a10"),ae(i,96,14,20,5,"#2f121a"),ae(i,44,34,34,26,"#22101a"),ae(i,44,30,34,4,"#331522");const e=ui(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);ae(i,n,a,2,3,"#ff9b3d")}ae(i,18,32,2,3,"#ffb04d"),ae(i,102,26,2,3,"#ffb04d"),ae(i,0,70,Ue,26,"#120810");for(let t=0;t<Ue;t+=16)ae(i,t,70,15,8,"#1b0d17"),ae(i,t+1,71,13,2,"#241322");ae(i,0,84,Ue,4,"#ff5a14"),ae(i,0,84,Ue,1,"#ffb44d"),ae(i,0,88,Ue,8,"#120810"),Fs(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ya(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Fs(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),ae(i,0,58,Ue,10,"#241436"),ae(i,0,58,Ue,2,"#3a2152");const e=(n,a,s)=>{ae(i,n,a,9,s,"#3d2a56"),ae(i,n+1,a,2,s,"#55406f"),ae(i,n+7,a,2,s,"#2a1c3d"),ae(i,n-2,a-3,13,3,"#63498a"),ae(i,n-1,a-6,11,3,"#4a3568"),ae(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{ae(i,n,a,2,6,"#efe4ff"),ae(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),ae(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),ae(i,30,46,14,4,"#2c1a41"),ae(i,34,50,6,3,"#1e1130"),ae(i,96,50,10,3,"#2c1a41"),ae(i,0,68,Ue,hi-68,"#1b1029"),ae(i,0,68,Ue,3,"#34204a");for(let n=4;n<Ue;n+=14)ae(i,n,76,9,2,"#2a1a3d");Fs(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ya(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),ae(i,0,46,Ue,8,"#8a2a1c");const e=(t,n,a,s)=>{ae(i,t,n,a,s,"#221a1f"),ae(i,t,n,a,2,"#33272e");for(let r=4;r<s;r+=8)ae(i,t+2,n+r,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)ae(i,t,38,6,6,"#120d10");ae(i,4,28,8,8,"#120d10"),ae(i,104,24,8,8,"#120d10"),ae(i,8,50,4,4,"#ffcf4d"),ae(i,14,54,2,2,"#e0a81f"),ae(i,106,44,5,5,"#ffcf4d"),ae(i,60,52,4,4,"#ffcf4d"),ae(i,66,56,2,2,"#e0a81f"),ae(i,0,70,Ue,26,"#150f12"),ae(i,0,74,Ue,6,"#ff6418"),ae(i,0,74,Ue,1,"#ffb44d"),ae(i,0,80,Ue,16,"#150f12"),Fs(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ya(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),ep(i,22,18,22,"#2d6f74","#1d5259"),ep(i,76,12,30,"#2d6f74","#1d5259"),ae(i,0,66,Ue,10,"#2f6b52"),ae(i,0,66,Ue,2,"#4b8b68");const e=(n,a,s)=>{const r=ui(s),o=4+Math.floor(r()*2);ae(i,n,74-a,o,a,"#e6d7bd"),ae(i,n,74-a,1,a,"#f3e9d6"),ae(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);ae(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)ae(i,n+o/2-12+r()*24,c+2+r()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),ae(i,0,74,Ue,hi-74,"#3f7c5c"),ae(i,0,74,Ue,2,"#5b9d77"),ae(i,0,86,Ue,10,"#2c5a44");const t=ui(61);for(let n=0;n<48;n++)ae(i,t()*Ue,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ya(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let s=0;s<Ue;s++){const r=Math.round(Math.sin(s/Ue*Math.PI*2+n)*3);ae(i,s,a+r,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Fs(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),tp(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,s,r)=>{for(let o=0;o<r;o++){const c=Math.round(s*(1-o/r)*.9);ae(i,n-c/2+o*.4,a+o,c,1,o<r*.4?"#d6ecff":"#a6cbe8")}ae(i,n,a+2,2,r-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),ae(i,0,72,Ue,hi-72,"#0f2a4a"),ae(i,0,72,Ue,2,"#2b5f8c");for(let n=0;n<24;n++){const a=ui(n*13);ae(i,a()*Ue,76+a()*18,6+a()*10,1,"#1f4b72")}const t=ui(83);for(let n=0;n<26;n++)ae(i,t()*Ue,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ya(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),ae(i,96,12,12,12,"#fff3cf"),ae(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;ae(i,0,n,Ue,6,t<2?"#d8ab68":"#c1924f"),ae(i,0,n,Ue,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);ae(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),ae(i,46-n/2,e+t,2,1,"#f0d29a")}ae(i,42,40,8,16,"#6b4d28"),ae(i,43,42,6,14,"#3d2b14"),ae(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)ae(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}ae(i,0,78,Ue,hi-78,"#e0b877"),ae(i,0,78,Ue,2,"#f2d49b");for(let t=6;t<Ue;t+=18)ae(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ya(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let s=0;s<66;s++){const r=2+s*.18;ae(i,a+s*.12,s,r,1,"rgba(150,240,255,0.06)")}}const e=(n,a,s,r)=>{ae(i,n,a,s,r,"#2f7d76"),ae(i,n,a,s,2,"#48a89a"),ae(i,n,a+r-2,s,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),ae(i,60,18,8,4,"#a8f0e2"),ae(i,62,16,4,2,"#e0fff8"),ae(i,34,40,4,4,"#d9b34a"),ae(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)ae(i,n,52,6,2,"#1d4a48");ae(i,0,64,Ue,hi-64,"#0b2c33"),ae(i,0,64,Ue,3,"#164a4a");const t=ui(47);for(let n=0;n<16;n++){const a=t()*Ue,s=6+t()*12;ae(i,a,78-s,2,s,t()>.5?"#1f6b55":"#2b8a63")}Fs(i,30,["#8fe8dd","#c8fff6"],11,8)}}],xM=uu;function bM(i){return uu.find(e=>e.id===i)||uu[0]}function Sg(i,e){const t=i.getContext("2d");t&&((i.width!==Ue||i.height!==hi)&&(i.width=Ue,i.height=hi),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ue,hi),bM(e).ciz(t))}let Sn=null;const np=()=>document.documentElement.getAttribute("data-world")==="sahne",SM=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function MM(i){const e=le.instances[0];(!Sn||!le.instances.find(l=>l.id===Sn))&&(Sn=e?.id||null);const t=le.instances.find(l=>l.id===Sn),n=Gi(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),s=[...le.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),r=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${le.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${St(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${jl(n)}" alt="" draggable="false" ${ec(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${X("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${X("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Or(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${X("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${X("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${X("play")} HIZLI GİRİŞ</div>
          ${r?`
          <button class="imp-hizli-satir${Ze.activeId===r.id?" durdur":""}" id="i-hizli-oyla" ${Ze.activeId&&Ze.activeId!==r.id?'disabled data-kilitli="1"':""}>
            <b>${r.name}${Ze.activeId===r.id?" — AÇIK":""}</b>
            <small>${Or(r.mod_loader)} · ${r.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=vn(`
      <div class="imp-satir${Ze.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${St(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${Or(l.mod_loader)} · ${l.mc_version} — ${SM(l.last_played)}</small>
        </span>
        <button class="imp-oyla${Ze.activeId===l.id?" durdur":""}" ${Ze.activeId&&Ze.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${Ze.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${X(Ze.activeId===l.id?"stop":"play")} ${Ze.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${X("gear")}</button>
      </div>
    `);d.addEventListener("click",h=>{const u=l.id;if(h.target.closest(".imp-diyis")){st("instances",u);return}if(h.target.closest(".imp-oyla")){Ze.activeId===l.id&&Xc();return}Sn=u,st("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",h=>h.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async h=>{if(h.stopPropagation(),Ze.activeId===d)return Xc();if(!le.accounts.length)return Ln();const{launchInstance:u}=await bt(async()=>{const{launchInstance:f}=await Promise.resolve().then(()=>wt);return{launchInstance:f}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>st("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>st("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{Sn&&st("instances",Sn)}),i.querySelector("#i-ad")?.addEventListener("click",()=>Ln()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>st("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>st("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!r)return;if(Ze.activeId===r.id)return Xc();if(!le.accounts.length)return Ln();const{launchInstance:l}=await bt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>wt);return{launchInstance:d}},void 0);l(r.id)}),Mg(i,n)}async function Xc(){try{await re("cmd_kill_game")}catch{}const{refreshState:i}=await bt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>wt);return{refreshState:e}},void 0);await i(!0)}async function EM(i){const e=i.querySelector("#i-news");if(e)try{const t=await re("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=vn(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>st("news")),e.appendChild(a)}}catch{}}function kM(i){if(Vl(),np()){MM(i),EM(i);return}const e=le.instances[0];(!Sn||!le.instances.find(h=>h.id===Sn))&&(Sn=e?.id||null);const t=le.instances.find(h=>h.id===Sn),n=Gi(),a=h=>!!h&&(h.includes("/")||h.includes("\\")),s=t?a(t.icon)?`<img class="hero-inst-icon" src="${St(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",r=!!t?.cover&&!np(),o=r?` style="background-image:url('${St(t.cover)}')"`:"",c=t?Ze.activeId===t.id?"warn":"ok":"off",l=le.instances.filter(h=>h.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${r?" has-cover":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${$r(c)} ${s} ${t.mc_version} · ${Or(t.mod_loader)}</div>
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
            <button class="btn ghost" id="h-manage">${X("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${X("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${X("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Ze.activeId?"disabled":""}" id="h-play"
          title="${Ze.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ze.activeId?"disabled":""}>
          <span class="pr-icon">${Ze.activeId?X("clock"):X("play")}</span>
          <span class="pr-label">${Ze.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ze.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ze.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${X("stop")}
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
          <button class="btn ghost sm" id="h-all">${X("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${$r("err")}
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
          <div class="cs-val">${X("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const h of l){a(h.icon);const u=vn(`
        <button class="ledger-row" data-id="${h.id}">
          ${$r(Ze.activeId===h.id?"warn":"ok")}
          <span class="lr-name">${h.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Or(h.mod_loader)} ${h.mc_version}
            <span class="sep">·</span>
            Son: ${h.last_played?new Date(h.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${X("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=X("play"),u.addEventListener("click",async f=>{if(f.target.closest(".lr-play")){if(!le.accounts.length)return Ln();Hu(u);const{launchInstance:m}=await bt(async()=>{const{launchInstance:_}=await Promise.resolve().then(()=>wt);return{launchInstance:_}},void 0);m(h.id);return}st("instances",h.id)}),d.appendChild(u)}Bu(Array.from(d.children))}TM(i),AM(),wM(i),Mg(i,n)}async function Mg(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(Sg(n,String(le.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=gn();a.kur(t),t.classList.add("on");try{const o=await re("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:St(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}try{const o=await re("cmd_kozmetik_oku");o?.pelerin_dosya&&o.pelerin_aktif!==!1&&await a.pelerin({url:St(String(o.pelerin_dosya))})}catch{}if(le.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const r={sakin:.6,normal:1,canli:1.8}[String(le.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await re("cmd_list_emotes"),c=[];for(const l of o)try{c.push(fM(l.icerik))}catch{}a.emoteleriKur(c,r)}catch{a.emoteleriKur([])}}async function wM(i){try{const e=await re("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{bt(()=>Promise.resolve().then(()=>wt),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Or(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function TM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!Sn){st("instances");return}if(!le.accounts.length){Ln();return}Hu(i.querySelector(".play-ring"));const{launchInstance:e}=await bt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>wt);return{launchInstance:t}},void 0);e(Sn)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await re("cmd_kill_game")}catch{}const{refreshState:e}=await bt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>wt);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{st("instances",Sn||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>st("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>st("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>st("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>Ln())}async function AM(){const i=Ci("#home-news");if(i)try{const e=await re("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=vn(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${X("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>st("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const ip={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Yc(i){return ip[i]||ip.vanilla}let mi=null;function RM(i){const e=St(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function CM(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const s=a.target;a.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function ap(i,e){return Promise.race([i.catch(()=>null),new Promise(t=>setTimeout(()=>t(null),e))])}function LM(i){if(ea.param&&le.instances.find(e=>e.id===ea.param)){mi=ea.param,ea.param=void 0,ro(i,mi);return}if(mi&&le.instances.find(e=>e.id===mi)){ro(i,mi);return}kl(i)}function kl(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${X("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${X("plus")} Yeni Kurulum</button>
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
        ${X("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>op());else{for(const t of le.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${St(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Ze.activeId===t.id,r=vn(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?RM(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Eg(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${$r(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${sr(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ze.activeId?"disabled":""}>
              ${Ze.activeId?`${X("clock")} Açık`:`${X("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${X("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);r.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!le.accounts.length)return Ln();const{launchInstance:c}=await bt(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>wt);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await re("cmd_kill_game")}catch{}const{refreshState:c}=await bt(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>wt);return{refreshState:l}},void 0);await c(!0);return}mi=t.id,ro(i,t.id)}),e.appendChild(r)}Bu(Array.from(e.querySelectorAll(".inst-card"))),CM(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>op()),i.querySelector("#btn-import")?.addEventListener("click",()=>PM().catch(()=>{})),DM()}async function PM(){const i=await re("cmd_pick_pack_file");if(i){se("Paket içe aktarılıyor…","ok");try{const e=await re("cmd_import_pack_file",{path:i}),{refreshState:t}=await bt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>wt);return{refreshState:n}},void 0);await t(),se(`${e.name||"Paket"} kuruldu!`,"ok"),st("instances")}catch(e){se(`Paket içe aktarılamadı: ${e}`,"err")}}}async function DM(){const i=document.querySelector("#popular-strip");if(i)try{const e=await re("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=vn(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${X("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${X("dl")} ${IM(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>st("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function IM(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Eg(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function ro(i,e){const t=le.instances.find(s=>s.id===e);if(!t){mi=null,kl(i);return}const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${St(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${X("back")}</button>
      <div class="inst-icon xl">${a}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Eg(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${sr(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ze.activeId?"disabled":""}>${Ze.activeId?`${X("clock")} Oyun Açık`:`${X("play")} Oyna`}</button>
      ${Ze.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${X("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${X("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${X("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${X("mug")} Java</button>
      <button class="tab" data-tab="log">${X("term")} Log</button>
      <button class="tab" data-tab="analytics">${X("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${X("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{mi=null,kl(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!le.accounts.length)return Ln();const{launchInstance:s}=await bt(async()=>{const{launchInstance:r}=await Promise.resolve().then(()=>wt);return{launchInstance:r}},void 0);s(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await re("cmd_kill_game")}catch{}const{refreshState:s}=await bt(async()=>{const{refreshState:r}=await Promise.resolve().then(()=>wt);return{refreshState:r}},void 0);await s(!0)}),i.querySelectorAll(".tab").forEach(s=>{s.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),s.classList.add("active");const r=s.dataset.tab,o=i.querySelector("#tab-content");({mods:kg,content:zM,java:wg,log:UM,analytics:NM,settings:FM})[r](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let Yi="resourcepacks";const sp=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function zM(i,e){const t=()=>sp.find(a=>a.id===Yi);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await re("cmd_list_content_files",{instanceId:e.id,kind:Yi})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${sp.map(o=>`<button class="kt ${o.id===Yi?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${X("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${X("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${X("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Yi=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>re("cmd_open_content_folder",{instanceId:e.id,kind:Yi}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Yi==="resourcepacks"?"resourcepack":Yi==="shaderpacks"?"shader":"world";ea.param=`kind:${o}`,st("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await re("cmd_add_content_file",{instanceId:e.id,kind:Yi}),await n()}catch(o){se(`Eklenemedi: ${o}`,"err")}});const r=i.querySelector("#content-list");if(!a.length){r.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}r.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${St(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=vn(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":_o(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${X("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const h=d.currentTarget.dataset.del;if(confirm(`"${h}" silinsin mi?`))try{await re("cmd_delete_content_file",{instanceId:e.id,kind:Yi,name:h}),await n()}catch(u){se(`Silinemedi: ${u}`,"err")}}),r.appendChild(l)}};await n()}async function kg(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await re("cmd_list_mods",{instanceId:e.id})}catch{}let n={},a={};i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${X("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const s=o=>{const c=t.filter(d=>d.filename.toLowerCase().includes(o.toLowerCase())),l=i.querySelector("#mod-list");l.innerHTML="",c.length||(l.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${o?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const d of c){const h=n[d.filename],u=h?`<img class="mod-logo" src="${h}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${X("puzzle")}</span>`,f=vn(`
        <div class="mod-row card">
          <span class="dot ${d.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${d.filename.replace(".jar","")}</div>
            <div class="ms">${_o(d.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[d.filename]?`<button class="btn primary sm upd-mod" data-fn="${d.filename}" data-url="${a[d.filename].url}" data-ad="${a[d.filename].yeni_ad}" title="Yeni sürüm: ${a[d.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${d.enabled?"on":""}" data-fn="${d.filename}" data-en="${d.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${d.filename}">Sil</button>
        </div>
      `);f.querySelector(".switch")?.addEventListener("click",async m=>{const _=m.currentTarget,p=_.dataset.fn,g=_.dataset.en!=="true";await re("cmd_toggle_mod",{instanceId:e.id,filename:p,enabled:g}),d.enabled=g,s(i.querySelector("#mod-search").value)}),f.querySelector(".upd-mod")?.addEventListener("click",async m=>{const _=m.currentTarget;_.disabled=!0,_.textContent="Güncelleniyor…";try{await re("cmd_update_mod",{instanceId:e.id,filename:_.dataset.fn,url:_.dataset.url,yeniAd:_.dataset.ad}),se("Mod güncellendi"),await kg(i,e)}catch(p){_.disabled=!1,_.textContent="Güncelle",se(`Güncellenemedi: ${p}`,"err")}}),f.querySelector(".del-mod")?.addEventListener("click",async()=>{await re("cmd_delete_mod",{instanceId:e.id,filename:d.filename}),t=t.filter(m=>m.filename!==d.filename),s(i.querySelector("#mod-search").value),se("Mod silindi")}),l.appendChild(f)}};if(i.querySelector("#mod-search")?.addEventListener("input",o=>{s(o.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{st("explore",e.id)}),s(""),!t.length)return;const r=()=>i.querySelector("#mod-search")?.value??"";(async()=>{const o=await ap(re("cmd_resolve_mod_icons",{filenames:t.map(l=>l.filename)}),8e3);o&&Object.keys(o).length&&(n=o,s(r()));const c=await ap(re("cmd_check_mod_updates",{instanceId:e.id}),15e3);c&&(a=Object.fromEntries(c.map(l=>[l.filename,l])),s(r()))})()}async function wg(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await re("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",a=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${X("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${X("args")} Java Argüman Presetleri</h3>
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
        <h3>${X("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${n?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${a(s)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const r=i.querySelector("#ram-range");r.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${r.value} MB`}),r.addEventListener("change",async()=>{await re("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(r.value)}),e.ram_mb=parseInt(r.value),se("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",h=>h.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",h=>h.stopPropagation()),l.addEventListener("click",async h=>{if(h.target.closest("details"))return;const u=l.dataset.id;await re("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const f=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(m=>m.closest(".preset-row").dataset.id));wg(i,e),i.querySelectorAll(".preset-row").forEach(m=>{f.has(m.dataset.id)&&(m.querySelector("details").open=!0)}),se("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),h=l.value.trim(),u=h===""?null:Math.max(2,Math.min(32,parseInt(h)||12)),f=d.value.trim();await re("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:f||null}),e.view_distance=u,e.custom_vm_args=f||null,se("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function UM(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${X("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),s=i.querySelector("#log-search");let r="live",o=0;const c=[];let l=[];const d=(x,T)=>{n.textContent=T!==void 0&&T!==x?`${T}/${x} satır`:`${x} satır`},h=x=>{const T=document.createElement("div");return T.textContent=x,x.includes("ERROR")||x.includes("Exception")?T.classList.add("err"):x.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const x=s.value.trim().toLowerCase(),T=x?l.filter(b=>b.toLowerCase().includes(x)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${x?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const b=document.createDocumentFragment();for(const S of T)b.appendChild(h(S));t.appendChild(b)}d(l.length,T.length)},f=()=>{if(r="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const x=document.createDocumentFragment();for(const T of c)x.appendChild(h(T));t.appendChild(x),t.scrollTop=t.scrollHeight}d(o)},m=async x=>{r=x,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await re("cmd_read_log",{instanceId:e.id,fileId:x})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await re("cmd_list_logs",{instanceId:e.id});const x=new Map;for(const T of _)x.has(T.date)||x.set(T.date,[]),x.get(T.date).push(T);for(const[T,b]of x){const S=document.createElement("optgroup");S.label=T;for(const w of b){const A=document.createElement("option");A.value=w.id;const y=w.label.startsWith("Oturum ")?"#"+(w.label.split("-").pop()||w.label):w.label;A.textContent=`${w.time!=="-"?w.time+" — ":""}${y} (${_o(w.size)})`,S.appendChild(A)}a.appendChild(S)}}catch{}Ze.activeId!==e.id&&_.length?(a.value=_[0].id,m(_[0].id)):f(),a.addEventListener("change",()=>{a.value==="live"?f():m(a.value)}),s.addEventListener("input",()=>{r!=="live"&&u()});const p=await yi("game-log",x=>{r!=="live"&&(a.value="live",f()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(x.payload),o++,c.length>500&&c.shift(),t.appendChild(h(x.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function NM(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await re("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${sr(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${X("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((r,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${r.host}</span>
          <span class="chip gray">${r.visits} giriş</span>
          <span class="dur">${sr(r.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${X("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${rp(n.daily_ms).map(r=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(r.ms/Math.max(...rp(n.daily_ms).map(o=>o.ms),1)*100,r.ms?5:2)}%"></div>
            <div class="bar-lbl">${r.label}</div>
            <div class="tooltip">${r.full} — ${sr(r.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function rp(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[s]||0,full:s})}return e}async function FM(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${St(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${X("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${X("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${St(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?X("image")+" Değiştir":X("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${X("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${X("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${X("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${X("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const a=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,r=i.querySelector("#set-icon").value.trim();await re("cmd_rename_instance",{id:e.id,name:s}),r&&await re("cmd_set_instance_icon",{id:e.id,icon:r}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await re("cmd_pick_instance_icon",{instanceId:e.id}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(s=>s.refreshState(!0)),se("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await re("cmd_pick_instance_cover",{instanceId:e.id}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(s=>s.refreshState(!0)),se("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await re("cmd_set_instance_cover",{id:e.id,cover:null}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(s=>s.refreshState(!0)),se("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>re("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>re("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await re("cmd_duplicate_instance",{id:e.id}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(s=>s.refreshState()),se("Kurulum kopyalandı"),ro(i.parentElement,mi)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await re("cmd_delete_instance",{id:e.id}),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(s=>s.refreshState()),mi=null,kl(i.parentElement),se("Kurulum silindi"))})}async function op(){const e=(await re("cmd_list_versions")).all,t=await re("cmd_list_java_arg_presets"),n=await re("cmd_list_standard_mods"),{root:a,close:s}=(await bt(async()=>{const{openModal:l}=await Promise.resolve().then(()=>wt);return{openModal:l}},void 0)).openModal(`
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
        <div class="lc-icon">${Yc("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Yc("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Yc("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let r="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),r=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",s),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",h=a.querySelector("#w-version").value,u=a.querySelector("#w-preset").value;try{const f=await re("cmd_create_instance",{instance:{name:d,mc_version:h,mod_loader:r,ram_mb:parseInt(c.value),java_preset_id:u,standard_mods:o&&r==="fabric"}});await bt(()=>Promise.resolve().then(()=>wt),void 0).then(_=>_.refreshState()),s(),se(`"${d}" oluşturuldu`);const m=f.instance.id;if(mi=m,le.instances.length){const _=document.querySelector("#content");ro(_,m)}}catch(f){se(String(f),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}let jn="mod",ki="",as=[],tr=40,ba=1,Ws=1,Br="",hu="",Kc=!1;function OM(i){let e=ea.param;if(e?.startsWith("kind:")){const a=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(a)&&(jn=a),e=void 0}ea.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${jn==="mod"?"sel":""}" data-k="mod">${X("puzzle")} Modlar</button>
        <button class="kt ${jn==="modpack"?"sel":""}" data-k="modpack">${X("box")} Paketler</button>
        <button class="kt ${jn==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${jn==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${jn==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${jn==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${le.featured_versions.map(a=>`<option>${a}</option>`).join("")}
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
        ${X("search")}
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
  `,i.querySelectorAll(".kt").forEach(a=>a.addEventListener("click",()=>{jn=a.dataset.k,i.querySelectorAll(".kt").forEach(s=>s.classList.remove("sel")),a.classList.add("sel"),ki&&Ka(i,ki),lp(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Ka(i,t.value.trim()),380)}),t.addEventListener("keydown",a=>{a.key==="Enter"&&Ka(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>Ka(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{ki&&Ka(i,ki)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{ki&&Ka(i,ki)}),e&&ki&&Ka(i,ki),lp(i)}async function lp(i){const e=i.querySelector("#popular-strip");try{const t=await re("cmd_repos_popular",{kind:jn,loader:""});e.innerHTML="";for(const n of t){const a=vn(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${X("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${X("dl")} ${Tg(n.downloads)}</div>
          </div>
        </div>
      `);a.addEventListener("click",()=>Ag(n)),e.appendChild(a)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function Ka(i,e){if(!e)return;ki=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',Br=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;hu=["resourcepack","shader","world","datapack"].includes(jn)?"":n,ba=1;try{if(as=(await re("cmd_repos_search",{query:e,kind:jn,versions:Br?[Br]:[],loader:hu,offset:0,limit:tr})).results,Ws=as.length>=tr?2:1,t.innerHTML="",!as.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const r of as)t.appendChild(pu(r));fu(i)}catch(s){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${s}</p></div>`}}function fu(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=as.length>=tr;if(ba===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${ba<=1?"disabled":""}>‹</button>`];for(let s=1;s<=Ws;s++)n.push(`<button class="pg-btn ${s===ba?"cur":""}" data-pg="${s}">${s}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const a=vn(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);a.addEventListener("click",s=>{const r=s.target.closest(".pg-btn");if(!r||r.disabled)return;const o=r.dataset.pg,c=o==="prev"?ba-1:o==="next"?ba+1:parseInt(o,10);!Number.isFinite(c)||c<1||c===ba||BM(i,c)}),e.appendChild(a)}async function BM(i,e){if(Kc)return;Kc=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const a=(await re("cmd_repos_search",{query:ki,kind:jn,versions:Br?[Br]:[],loader:hu,offset:(e-1)*tr,limit:tr})).results;if(!a.length){Ws=Math.min(Ws,Math.max(1,e-1)),t.innerHTML="";for(const s of as)t.appendChild(pu(s));fu(i);return}as=a,ba=e,Ws=Math.max(Ws,a.length>=tr?e+1:e),t.innerHTML="";for(const s of a)t.appendChild(pu(s));fu(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{Kc=!1}}function pu(i){const e=vn(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${X(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${X("dl")} ${Tg(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>Ag(i)),e}function Tg(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function Ag(i){const{root:e,close:t}=sn(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",a=document.querySelector("#exp-loader")?.value||(le.instances[0]?.mod_loader==="forge"?"forge":"fabric"),r=["resourcepack","shader","world","datapack"].includes(i.kind)?"":a;try{const o=await re("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?r:"",gameVersion:n}),c=e.querySelector("#ver-list");if(c.innerHTML="",!o.length){c.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const l of o){const d=vn(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${l.name||l.version_number}</b>
            <span class="ver-date">${l.date.slice(0,10)} · ${l.game_versions.slice(0,3).join(", ")}${l.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${_o(l.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>HM(i,l,t)),c.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function HM(i,e,t){if(i.kind==="modpack")t(),await GM(i,e);else{if(!le.instances.length){se("Önce bir kurulum oluşturmalısın","err"),st("instances");return}const{root:n,close:a}=sn(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${le.instances.map(s=>{const r=s.icon&&!s.icon.includes("/")&&!s.icon.includes("\\")?`${s.icon} `:"";return`<option value="${s.id}">${r}${s.name} (${s.mod_loader} ${s.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",a),n.querySelector("#ok")?.addEventListener("click",async()=>{const s=n.querySelector("#tgt").value,r=n.querySelector("#ok");r.disabled=!0,r.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await re("cmd_repos_install_content",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await re("cmd_repos_install",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id}),a(),t(),se({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){se(String(o),"err"),r.disabled=!1,r.textContent="Kur"}})}}async function GM(i,e){const{root:t,close:n}=sn(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),a=t.querySelector("#pk-bar"),s=t.querySelector("#pk-detail"),{listen:r}=await bt(async()=>{const{listen:c}=await Promise.resolve().then(()=>wt);return{listen:c}},void 0),o=await r("launch-progress",c=>{c.payload.stage==="modpack"&&(a.style.transform=`scaleX(${Math.min(1,Math.max(0,c.payload.percent/100))})`,s.textContent=c.payload.detail||"")});try{const c=await re("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await bt(()=>Promise.resolve().then(()=>wt),void 0).then(l=>l.refreshState()),await VM(c),st("instances")}catch(c){o(),s.textContent=`Kurulum başarısız: ${c}`,s.style.color="var(--danger)"}}async function VM(i){const e=await re("cmd_list_java_arg_presets"),{root:t,close:n}=sn(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    <div class="preset-list">
      ${e.map(a=>`
        <div class="preset-row card hover" data-id="${a.id}">
          <div class="preset-head"><b>${a.name}</b><span class="chip gray">${a.recommended_ram_mb} MB öneri</span></div>
          <p>${a.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);t.querySelectorAll(".preset-row").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.id;s!=="__skip"&&(await re("cmd_set_instance_java_preset",{id:i.id,presetId:s}),se(`Preset: ${e.find(r=>r.id===s)?.name}`)),n()})})}function $M(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,WM(i)}async function WM(i){const e=i.querySelector("#yikim-news");try{const t=await re("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${X("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${X("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${X("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),a?.startsWith("https://")&&Ql(a).catch(()=>{})})})}catch{e.innerHTML=""}}const Zc=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],qM={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function XM(i){const e=(t,n,a,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Dr(i){let e=le.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...qM}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},s=Zc.find(m=>m.id===n)||Zc[0],r=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(_=>{const p=i.querySelector("#app-version");p&&(p.textContent=`v${_} "Kıvılcım"`)}).catch(()=>{const _=i.querySelector("#app-version");_&&(_.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${X("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${le.accounts.map(m=>{const _=Gi()?.id===m.id;return`
          <div class="acc-row ${_?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${jl(m)}" ${ec(m)} draggable="false" />
            <div class="acc-info">
              <b>${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${_?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${X("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${X("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${X("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${X("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Zc.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${XM(m)}
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
        <button class="btn ghost sm" id="skins-alani">${X("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${X("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${s.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${X("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${r?"":" aktif"}" data-renk="" style="--sw:${s.accent}" title="Dünya rengi"></button>
            ${["#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#f5f5f5"].map(m=>`<button class="tema-renk${r.toLowerCase()===m?" aktif":""}" data-renk="${m}" style="--sw:${m}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${r||s.accent}" />
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
      <h3>${X("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${X("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${Za("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
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
        <button class="btn ghost" id="anim-ekle">${X("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${X("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${X("mug")} Java</h3>
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
      <h3>${X("gear")} Genel</h3>
      ${Za("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${Za("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${Za("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${Za("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${Za("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${Za("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
      <h3>${X("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${X("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${X("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>Ln()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>Ln()),i.querySelectorAll(".acc-row").forEach(m=>{const _=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async p=>{p.stopPropagation(),await re("cmd_select_account",{accountId:_}),await hn(),Dr(i),se("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async p=>{p.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await re("cmd_remove_account",{accountId:_}),await hn(),Dr(i),se("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{le.config.theme=m.dataset.t,Ri(),await bn(),Dr(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>st("skins"));const c=()=>le.config.tema_ozel||={},l=async(m,_)=>{const p=c()[n]||={};p[m]=_,!p.accent&&!p.radius&&delete c()[n],Ri(),await bn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const _=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(p=>p.classList.toggle("aktif",p===m)),await l("accent",_),se(_?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const d=i.querySelector("#tema-accent-pick");d?.addEventListener("input",()=>{le.config.tema_ozel||={},(le.config.tema_ozel[n]||={}).accent=d.value,Ri()}),d?.addEventListener("change",async()=>{await bn(),se("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(_=>_.classList.toggle("aktif",_===m)),await l("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],Ri(),await bn(),Dr(i),se("Bu dünyanın özelleştirmesi sıfırlandı")});const h=i.querySelector("#sas-izgara");if(h){const m=String(e.sahne_arka||"kiraz");h.innerHTML=xM.map(_=>`
      <button class="sas-kart${_.id===m?" sel":""}" data-art="${_.id}">
        <span class="sas-tuval"><canvas data-ciz="${_.id}"></canvas></span>
        <b>${_.ad}</b>
        <small>${_.etiket}</small>
      </button>`).join(""),h.querySelectorAll("canvas[data-ciz]").forEach(_=>{Sg(_,_.dataset.ciz||"kiraz")}),h.querySelectorAll(".sas-kart").forEach(_=>_.addEventListener("click",async()=>{le.config.sahne_arka=_.dataset.art,h.querySelectorAll(".sas-kart").forEach(p=>p.classList.toggle("sel",p===_)),await bn(),se("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{le.config.fx_particles=m.target.value,Ri(),await bn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{le.config.cursor_style=m.target.value,Ri(),await bn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await re("cmd_pick_java");m&&(le.config.java_dir=m,await bn(),i.querySelector("#java-path").textContent=m,se("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{le.config.java_dir=null,await bn(),i.querySelector("#java-path").textContent="otomatik"}),Ja(i,"keep-open","keep_launcher_open"),Ja(i,"hide-on-launch","hide_on_launch"),Ja(i,"show-news","show_news"),Ja(i,"stats-enabled","stats_enabled"),Ja(i,"use-java25","use_java25"),Ja(i,"discord-rpc","discord_rpc"),Ja(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{le.config.menu_animasyon_hiz=m.target.value,await bn()});const u=()=>Rg(i);i.querySelector("#anim-yenile")?.addEventListener("click",u),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await re("cmd_pick_emote");m?.length&&(se(`${m.length} animasyon eklendi`),u())}catch(m){se(`Animasyon eklenemedi: ${m}`,"err")}}),u();const f=i.querySelector("#dlc-range");f.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=f.value),f.addEventListener("change",async()=>{le.config.download_concurrency=parseInt(f.value),await bn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{se("Güncelleme kontrol ediliyor…");try{const _=await(await bt(()=>import("./index-DSkUPpwd.js"),[])).check();if(_?.available){const{root:p,close:g}=sn(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${_.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(_.body||"Değişiklik notu yok.").split(`
`).map(x=>`<div>${x}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);p.querySelector("#upd-later")?.addEventListener("click",()=>g()),p.querySelector("#upd-go")?.addEventListener("click",async()=>{const x=p.querySelector("#upd-go");x.disabled=!0,x.textContent="İndiriliyor…";try{await _.downloadAndInstall(),se("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(T){x.disabled=!1,x.textContent="İndir ve Kur",se(`Güncelleme başarısız: ${T}`,"err")}})}else se("YIKIMLient güncel ✓")}catch(m){await JM(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Ql(wl).catch(()=>se(`Tarayıcı açılamadı — adresi elle aç: ${wl}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await re("cmd_get_app_dir");jg(m).catch(()=>{})}),KM(i,e)}function YM(i){const e=Gi();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(s=>String(s).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Jc=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function KM(i,e){const t=i.querySelector("#rozet-alani");if(t){if(YM(e)){cp(i,e);return}t.innerHTML="",re("cmd_rozet_yetki").then(n=>{n?.izinli&&cp(i,e)}).catch(()=>{})}}function cp(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=Gi(),a=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let s=new Array(64).fill("");const r=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=r(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(r).slice(0,24),l=!1;const d=[];let h=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${X("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
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
              ${X("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${l?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${X("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${X("undo")} Geri</button>
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

      ${a?`<div class="rozet-izinler">
        <div class="rozet-izin-bas">
          <b>Kendi rozetini çizebilecekler</b>
          <span class="set-sub" style="margin:0; font-size:11px">Orijinal (Microsoft) hesap adlarını yaz. Liste sunucuya gönderilir; o oyuncu launcher'ını açtığında atölyeyi görür.</span>
        </div>
        <div class="rozet-izin-ekle">
          <input class="input" id="rozet-isim" placeholder="Oyuncu adı" maxlength="32" />
          <button class="btn ghost sm" id="rozet-ekle">${X("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),f=t.querySelector("#rozet-onizleme"),m=t.querySelector("#rozet-cipler"),_=()=>{u.innerHTML=s.map((R,C)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${C}" style="--c:${R||"transparent"}"></button>`).join(""),f.innerHTML=s.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const C=l?"":o;s[R]!==C&&(s[R]=C,_())};u.addEventListener("click",R=>{const C=R.target.closest(".rozet-hucre");C&&(d.push([...s]),d.length>40&&d.shift(),p(Number(C.dataset.i)))});const g=t.querySelector("#rozet-renkler"),x=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),b=t.querySelector("#rozet-renk-sec"),S=()=>{const R=[...Jc,...c];g.innerHTML=R.map((C,z)=>`<button class="rozet-renk${C.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${C}" style="--c:${C}" title="${C}" data-ozel="${z>=Jc.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(C=>C.addEventListener("click",()=>{const z=C.dataset.c||"";l=!1,z&&w(z)}))},w=(R,C=!0)=>{o=R.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),x.value=o,T.style.setProperty("--c",o),b.value=o,S(),C&&(le.config.rozet_renk=o,bn())},A=R=>{if(!r(R))return se("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const C=R.toLowerCase();return[...Jc,...c].some(z=>z.toLowerCase()===C)||(c=[...c,C].slice(-24),le.config.rozet_renkler=[...c]),w(C),!0};b?.addEventListener("input",()=>{w(b.value,!1)}),b?.addEventListener("change",()=>A(b.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=x.value.trim(),C=R.startsWith("#")?R:`#${R}`;A(C)&&se(`Renk paletine eklendi: ${C.toLowerCase()}`)}),x?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),x?.addEventListener("input",()=>{const R=x.value.trim(),C=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",r(C)?C:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(s=R,_())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...s]),s=new Array(64).fill(""),_()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...s]),s=ZM(),_()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const C=await re("cmd_rozet_ciz",{pikseller:s});se(C?.yuklendi?`Rozet kaydedildi — ${C.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${C.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${C?.hata||"ağ"})`)}catch(C){se(`Rozet kaydedilemedi: ${C}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await re("cmd_rozet_sil"),s=new Array(64).fill(""),_(),se("Rozet kaldırıldı"))});const y=()=>{m&&(m.innerHTML=h.length?h.map((R,C)=>`<span class="rozet-cip">${R}<button data-i="${C}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',m.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{h.splice(Number(R.dataset.i),1),k()})))},k=async()=>{le.config.atolye_izinli=[...h],await bn(),y();try{(await re("cmd_rozet_izinler",{isimler:h}))?.yuklendi||se("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),C=R.value.trim();if(C){if(h.some(z=>z.toLowerCase()===C.toLowerCase())){se("Bu isim zaten listede");return}h.push(C),R.value="",k(),se(`${C} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),_(),S(),y(),re("cmd_rozet_oku").then(R=>{const C=R?.pikseller;Array.isArray(C)&&C.length===64&&(s=C,_())}).catch(()=>{})}function ZM(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const wl="https://github.com/YKSAMI1/yikimlient/releases/latest";function dp(i){return String(i??"").trim().replace(/^v/i,"")}async function JM(i){let e="",t="";try{const s=await re("cmd_check_updates"),r=dp(s?.current),o=dp(s?.latest);o&&o!==r&&(e=o)}catch{}try{const s=await re("cmd_upd_teshis"),r=Array.isArray(s?.platformlar)&&s.platformlar.length?s.platformlar.join(", "):"yok",o=[`HTTP ${s?.durum||"?"}`,`manifest ${s?.surum||"?"}`,`platform: ${r}`];s?.hata&&o.push(String(s.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=sn(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${X("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Ql(wl).catch(()=>se(`Tarayıcı açılamadı — adresi elle aç: ${wl}`,"err"))})}async function Rg(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await re("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${X("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await re("cmd_delete_emote",{adi:n.adi}),se("Animasyon kaldırıldı"),Rg(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function Za(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Ja(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),le.config[t]=a.classList.contains("on"),await bn()})}async function bn(){await re("cmd_save_settings",{config:le.config}),await hn(),Ri()}const xn=64,Qa=64,QM=40;class Tl{w=xn;h=Qa;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(xn*Qa*4)}static bos(){return new Tl}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new Tl(this.veri)}piksel(e,t){if(e<0||t<0||e>=xn||t>=Qa)return[0,0,0,0];const n=(t*xn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const s=Math.max(1,Math.min(8,Math.floor(a))),r=e-Math.floor((s-1)/2),o=t-Math.floor((s-1)/2);for(let c=0;c<s;c++)for(let l=0;l<s;l++){const d=r+l,h=o+c;if(d<0||h<0||d>=xn||h>=Qa)continue;const u=(h*xn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,s,r=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),h=Math.abs(l-o),u=-Math.abs(d-c),f=o<l?1:-1,m=c<d?1:-1;let _=h+u;for(;this.boya(o,c,s,r),!(o===l&&c===d);){const p=2*_;p>=u&&(_+=u,o+=f),p<=h&&(_+=h,c+=m)}}kova(e,t,n){if(e<0||t<0||e>=xn||t>=Qa)return;const a=this.piksel(e,t);if(up(a,n))return;const s=[t*xn+e],r=new Uint8Array(xn*Qa);for(;s.length;){const o=s.pop();if(r[o])continue;r[o]=1;const c=o%xn,l=Math.floor(o/xn);up(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&s.push(o-1),c<xn-1&&s.push(o+1),l>0&&s.push(o-xn),l<Qa-1&&s.push(o+xn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>QM&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function up(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function jM(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function Jn(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const hp=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:Jn(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:Jn(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:Jn(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:Jn(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:Jn(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:Jn(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:Jn(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:Jn(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:Jn(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:Jn(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:Jn(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:Jn(0,48,4,12,4)}],ss={x:12,y:1,w:10,h:16},mu={x:1,y:1,w:10,h:16},Cg=20,eE=36,tE=2,nE=4,iE=1;function aE(i){const e=i?3:4,t=iE+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function Lg(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function sE(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const s=e.getImageData(n.x,n.y,n.w,n.h).data;for(let r=3;r<s.length;r+=4)s[r]>8&&a++}catch{return 0}return a})(ss)>0?ss:mu:ss}const ih=nE,Pg=Cg*ih,Dg=eE*ih,rE=.3,Qc=2;let oE=null;function fp(i,e,t,n,a,s,r){s<=0||r<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,s,r)}function pp(i,e,t,n,a,s,r){if(s<=0||r<=0)return;const o=oE??=document.createElement("canvas"),c=Math.round(s),l=Math.round(r);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${rE})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function lE(i,e,t,n=ih){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=aE(t),r=tE*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Cg/2*a,(31.3+Qc)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of s){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+Qc)*a;pp(i,e,o.yan,c,l,r,o.on.h*a),o.ust&&o.ustYan&&pp(i,e,o.ustYan,c,l,r,o.on.h*a)}for(const o of s){const c=o.x*a,l=(o.y+Qc)*a;fp(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&fp(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const cE=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],pn=64;function dE(i,e,t,n){const a=e.pafta;let s=e.slim,r=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,h=!1,u=8,f=!1,m=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${X("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${jc(r)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${X("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${pn*u}" height="${pn*u}"></canvas>
          <canvas id="ske-izgara" width="${pn*u}" height="${pn*u}"></canvas>
          <canvas id="ske-3d-tuval" hidden></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(B=>`<button class="seg-btn ${B===u?"aktif":""}" data-zum="${B}">${B}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-blok">
          <div class="sk-blok-baslik">${X("box")} 3D çizim</div>
          <div class="sk-edit-3dbar">
            <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${X("box")} 3D Çiz</button>
            <button class="seg-btn" id="ske-izgara3d" title="Piksel matrisini (ızgara) karakterin üstünde göster">Matris</button>
            <span class="sk-zum3d" id="ske-zum3d" role="group" aria-label="Karakter yakınlaştırma">
              <button class="seg-btn" data-zum3d="-1" title="Uzaklaş">−</button>
              <button class="seg-btn" data-zum3d="1" title="Yakınlaş">+</button>
              <button class="seg-btn" data-zum3d="0" title="Varsayılan mesafe">Sığdır</button>
            </span>
          </div>
          <p class="sk-etiket sk-3d-ipucu" id="ske-3d-ipucu">Overlay açık — boyama overlay katmanına gider.</p>
          <div class="sk-3d-parca" id="ske-parca" hidden>
            <button class="seg-btn aktif" data-parca="kafa">Kafa</button>
            <button class="seg-btn aktif" data-parca="govde">Gövde</button>
            <button class="seg-btn aktif" data-parca="kollar">Kollar</button>
            <button class="seg-btn aktif" data-parca="bacaklar">Bacaklar</button>
            <button class="seg-btn aktif" data-parca="kaplama" title="Overlay katmanını göster/gizle — açıkken 3D boyama overlay'e, kapalıyken skin yüzeyine gider">Overlay</button>
            <button class="seg-btn aktif" data-parca="kozmetik" title="Pelerin ve elitra kanadı">Pelerin</button>
          </div>
          <div class="sk-edit-onizleme">
            <canvas id="ske-onizleme"></canvas>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${X("brush")} Araçlar</div>
          <div class="sk-arac-cubugu">
            <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${X("brush")}</button>
            <button class="sk-arac" data-arac="silgi" title="Silgi">${X("eraser")}</button>
            <button class="sk-arac" data-arac="kova" title="Kova — bitişik aynı renk alanını doldur">${X("bucket")}</button>
            <button class="sk-arac" data-arac="damla" title="Damlalık — tuvalden renk al">${X("picker")}</button>
            <span class="sk-arac-ayrac"></span>
            <button class="sk-arac" id="ske-geri-al" title="Geri Al">${X("undo")}</button>
            <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${X("redo")}</button>
            <div class="sk-kalinlik">
              ${[1,2,4].map(B=>`<button class="seg-btn ${B===1?"aktif":""}" data-kalinlik="${B}" title="${B} piksel kalınlık">${B}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${X("sparkle")} Renk</div>
          <div class="sk-renk-satir">
            <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
            <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" aria-label="Renk kodu (hex)" />
          </div>
          <span class="sk-etiket">Son kullandıkların</span>
          <div class="kz-son-renkler" id="ske-son"></div>
          <span class="sk-etiket">Hazır palet</span>
          <div class="sk-palet" id="ske-palet">
            ${cE.map(B=>`<button class="sk-palet-renk" data-renk="${B}" style="--c:${B}" title="${B}"></button>`).join("")}
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-bolgeler">
            <div class="sk-bolgeler-ust">
              <b>Bölgeler</b>
              <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
            </div>
            <div class="sk-bolge-liste" id="ske-bolgeler">
              ${["taban","ust"].map(B=>`
                <div class="sk-bolge-grup">
                  <span>${B==="taban"?"Taban katman":"Üst katman"}</span>
                  ${hp.filter(E=>E.katman===B).map(E=>`<button class="sk-bolge" data-bolge="${E.id}">${E.ad}</button>`).join("")}
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${X("check")} Kaydet</div>
          <div class="sk-edit-kayit">
            <label class="sk-edit-etiket">Skin adı</label>
            <input class="input" id="ske-ad" value="${jc(r)}" maxlength="48" />
            <div class="sk-edit-kayit-btn">
              <button class="btn" id="ske-kitaplik">${X("folder")} Sadece Kitaplığa Kaydet</button>
              <button class="btn primary" id="ske-giy">${X("check")} Kaydet ve Giy</button>
            </div>
            <div class="sk-edit-uyari" id="ske-uyari"></div>
          </div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),x=p.querySelector("#ske-izgara"),T=g.getContext("2d"),b=x.getContext("2d"),S=p.querySelector("#ske-onizleme"),w=document.createElement("canvas");w.width=pn,w.height=pn;const A=w.getContext("2d"),y=gn();y.kur(S),y.tuvalDoku(w,s),(async()=>{try{const B=await re("cmd_kozmetik_oku");B.pelerin_dosya&&B.pelerin_aktif!==!1&&await y.pelerin({url:St(B.pelerin_dosya)})}catch{}})();function k(){const B=new ImageData(new Uint8ClampedArray(a.veri),pn,pn);A.putImageData(B,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(w,0,0,g.width,g.height),R(),y.dokuTazele()}function R(){b.clearRect(0,0,x.width,x.height);const B=x.width/pn;if(u>=8){b.strokeStyle="rgba(255,255,255,0.09)",b.lineWidth=1;for(let E=1;E<pn;E++)b.beginPath(),b.moveTo(E*B,0),b.lineTo(E*B,x.height),b.stroke(),b.beginPath(),b.moveTo(0,E*B),b.lineTo(x.width,E*B),b.stroke()}if(d){b.strokeStyle="rgba(255,150,60,0.35)",b.lineWidth=1,b.setLineDash([]);for(const E of d.dilimler)E.x===d.x&&E.y===d.y||b.strokeRect(E.x*B+.5,E.y*B+.5,E.w*B-1,E.h*B-1);if(b.strokeStyle="rgba(255,150,60,0.95)",b.lineWidth=2,b.setLineDash([6,4]),b.strokeRect(d.x*B+1,d.y*B+1,d.w*B-2,d.h*B-2),b.setLineDash([]),h){b.fillStyle="rgba(0,0,0,0.55)",b.beginPath(),b.rect(0,0,x.width,x.height);for(const E of d.dilimler)b.rect(E.x*B,E.y*B,E.w*B,E.h*B);b.fill("evenodd")}}}function C(B){const E=g.getBoundingClientRect(),v=Math.floor((B.clientX-E.left)/E.width*pn),F=Math.floor((B.clientY-E.top)/E.height*pn);return[Math.max(0,Math.min(pn-1,v)),Math.max(0,Math.min(pn-1,F))]}function z(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",B=>{if(B.button!==0)return;const[E,v]=C(B);if(f=!0,m=E,_=v,g.setPointerCapture(B.pointerId),o==="damla"){l=a.damla(E,v),Y(l,!0);return}a.katmanBasla(),o==="kova"?a.kova(E,v,z()):a.boya(E,v,z(),c),k()}),g.addEventListener("pointermove",B=>{if(!f)return;const[E,v]=C(B);E===m&&v===_||((o==="kalem"||o==="silgi")&&(a.cizgi(m,_,E,v,z(),c),k()),m=E,_=v)});const O=()=>{f=!1,m=-1,_=-1};g.addEventListener("pointerup",O),g.addEventListener("pointercancel",O);const L="yikim:renk:son";function H(){try{const B=JSON.parse(localStorage.getItem(L)||"[]");return Array.isArray(B)?B.filter(E=>typeof E=="string"&&/^#[0-9a-fA-F]{6}$/.test(E)).slice(0,12):[]}catch{return[]}}function D(B){const E=p.querySelector("#ske-son");E&&(E.innerHTML=H().map(v=>`<button class="kz-renk${v.toLowerCase()===B?.toLowerCase()?" aktif":""}" data-renk="${v}" style="background:${v}" title="${v}" aria-label="${v}"></button>`).join("")||'<span class="sk-ipucu-kucuk">Henüz renk yok — paletten seç.</span>')}function P(B){const E=B.toLowerCase(),v=[E,...H().filter(F=>F.toLowerCase()!==E)].slice(0,12);try{localStorage.setItem(L,JSON.stringify(v))}catch{}D(E)}function Y(B,E=!1){l=B;const v=mp(B);p.querySelector("#ske-renk").value=v,p.querySelector("#ske-renk-hex").value=v,p.querySelectorAll(".sk-palet-renk").forEach(F=>{F.classList.toggle("aktif",F.dataset.renk?.toLowerCase()===v.toLowerCase())}),D(v),E&&P(v)}p.querySelector("#ske-renk").addEventListener("input",B=>{Y(qo(B.target.value))}),p.querySelector("#ske-renk").addEventListener("change",()=>{P(mp(l))}),p.querySelector("#ske-renk-hex").addEventListener("change",B=>{const E=B.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(E)&&Y(qo(E),!0)}),p.querySelector("#ske-palet")?.addEventListener("click",B=>{const E=B.target.closest(".sk-palet-renk");E?.dataset.renk&&Y(qo(E.dataset.renk),!0)}),p.querySelector("#ske-son")?.addEventListener("click",B=>{const E=B.target.closest(".kz-renk");E?.dataset.renk&&Y(qo(E.dataset.renk),!0)}),p.querySelectorAll(".sk-arac[data-arac]").forEach(B=>{B.addEventListener("click",()=>{o=B.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(B=>{B.addEventListener("click",()=>{c=Number(B.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(B=>{B.addEventListener("click",()=>{u=Number(B.dataset.zum),g.width=g.height=x.width=x.height=pn*u,p.querySelectorAll("[data-zum]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),k()})}),p.querySelectorAll("[data-slim]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),y.tuvalDoku(w,s),Ve(s?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let G=!1,Q="ust",ee=!1,ue=!1;const Me=p.querySelector("#ske-3d"),Ne=p.querySelector("#ske-izgara3d"),De=p.querySelector("#ske-parca"),He=p.querySelector("#ske-3d-tuval"),Z=p.querySelector(".sk-edit-onizleme"),ne=p.querySelector(".sk-edit-zum"),he={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},ze=()=>{y.parcaGoster("kafa",he.kafa),y.parcaGoster("govde",he.govde),y.parcaGoster("kollar",he.kollar),y.parcaGoster("bacaklar",he.bacaklar),y.kaplamaGoster(he.kaplama),y.kozmetikGoster(he.kozmetik),Q=he.kaplama?"ust":"taban";const B=p.querySelector("#ske-3d-ipucu");B&&(B.textContent=he.kaplama?"Overlay açık — boyama overlay katmanına gider.":"Overlay kapalı — boyama skin (taban) yüzeyine gider.")},be=B=>{G=B,ee=!1,y.etkilesimKapali=B,ue=B,Ne?.classList.toggle("aktif",ue),g.hidden=B,x.hidden=B,He.hidden=!B,Z&&(Z.hidden=B),De&&(De.hidden=!B),ne&&(ne.style.display=B?"none":""),Me?.classList.toggle("aktif",B),Me&&(Me.innerHTML=`${X("box")} ${B?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{B?(y.kur(He),y.bakisaAyarla(.35,.04),y.tuvalDoku(w,s),ze(),y.izgaraGoster(ue,!0),Ve("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(y.kur(S),y.tuvalDoku(w,s),ze(),y.izgaraGoster(!1,!0),Ve(""))})};Me?.addEventListener("click",()=>be(!G)),Ne?.addEventListener("click",()=>{ue=!ue,Ne.classList.toggle("aktif",ue),y.izgaraGoster(ue,!0),Ve(ue?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach(B=>{B.addEventListener("click",()=>{const E=Number(B.dataset.zum3d);E===0?y.zoomAyarla(2.75):y.zoomAyarla(y.zoomAl()*(E<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach(B=>{B.addEventListener("click",()=>{const E=B.dataset.parca;he[E]=!he[E],B.classList.toggle("aktif",he[E]),ze()})});const Oe=(B,E)=>{const v=y.atlasNoktasi(B,Q);v&&(E&&a.katmanBasla(),a.boya(v.x,v.y,z(),c),k())};He.addEventListener("contextmenu",B=>{G&&B.preventDefault()}),He.addEventListener("pointerdown",B=>{if(G&&!(B.pointerType==="mouse"&&B.button!==0)){ee=!0;try{He.setPointerCapture(B.pointerId)}catch{}Oe(B,!0)}}),He.addEventListener("pointermove",B=>{G&&ee&&Oe(B,!1)});const mt=()=>{ee=!1};He.addEventListener("pointerup",mt),He.addEventListener("pointercancel",mt),p.querySelector("#ske-bolgeler")?.addEventListener("click",B=>{const E=B.target.closest("[data-bolge]");E?.dataset.bolge&&(d=hp.find(v=>v.id===E.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(v=>v.classList.remove("aktif")),E.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",B=>{h=B.target.checked,R()});const Be=()=>{a.geriAl()&&k()},Xe=()=>{a.ileriAl()&&k()};p.querySelector("#ske-geri-al")?.addEventListener("click",Be),p.querySelector("#ske-ileri-al")?.addEventListener("click",Xe);const at=B=>{!document.body.contains(p)||!(B.ctrlKey||B.metaKey)||(B.key.toLowerCase()==="z"?(B.preventDefault(),B.shiftKey?Xe():Be()):B.key.toLowerCase()==="s"&&(B.preventDefault(),Pt(!0)))};window.addEventListener("keydown",at);function Ve(B){const E=p.querySelector("#ske-uyari");E.textContent=B}function ht(){return new Promise(B=>{w.toBlob(async E=>{if(!E)return B([]);const v=new Uint8Array(await E.arrayBuffer());B(Array.from(v))},"image/png")})}async function Pt(B){if(r=p.querySelector("#ske-ad").value.trim()||r,r||(r="Skin"),B&&!await uE("Skini giy",`<b>${jc(r)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const v=await ht();if(!v.length){Ve("PNG üretilemedi.");return}const F=p.querySelector(B?"#ske-giy":"#ske-kitaplik");F.disabled=!0,Ve(B?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:v,slim:s,ad:r},B),Ve(""),$t()}catch(V){Ve(String(V)),F.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void Pt(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void Pt(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const B=await ht(),E=p.querySelector("#ske-ad");try{const{invoke:v}=await bt(async()=>{const{invoke:V}=await Promise.resolve().then(()=>wt);return{invoke:V}},void 0),F=await v("cmd_skin_disa_aktar",{ad:E.value.trim()||"skin",veri:B});se(`Dışa aktarıldı: ${F}`)}catch(v){se(String(v),"err")}});const Vt=document.createElement("button");Vt.className="btn ghost sk-dosya-btn",Vt.innerHTML=`${X("image")} Dosya`;const ct=document.createElement("input");ct.type="file",ct.accept="image/png",ct.style.display="none",Vt.addEventListener("click",()=>ct.click()),ct.addEventListener("change",async()=>{const B=ct.files?.[0];B&&await N(B),ct.value=""}),p.querySelector("#ske-geri").after(Vt),p.appendChild(ct);function Dt(){return new Promise(B=>{const{root:E,close:v}=sn(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${X("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${X("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let F=!1;const V=J=>{F||(F=!0,v(),B(J))};E.querySelector("#se-wide")?.addEventListener("click",()=>V(!1)),E.querySelector("#se-slim")?.addEventListener("click",()=>V(!0)),E.querySelector("#se-iptal")?.addEventListener("click",()=>V(null))})}async function N(B){try{const E=URL.createObjectURL(B),v=await new Promise((de,j)=>{const te=new Image;te.onload=()=>de(te),te.onerror=()=>j(new Error("görsel okunamadı")),te.src=E}),F=document.createElement("canvas");F.width=v.width,F.height=v.height;const V=F.getContext("2d");V.drawImage(v,0,0),URL.revokeObjectURL(E);const J=V.getImageData(0,0,v.width,v.height);if(!(v.width===64&&(v.height===64||v.height===32))){se(`Skin 64×64 veya 64×32 olmalı (bu dosya ${v.width}×${v.height})`,"err");return}const ce=await Dt();if(ce===null)return;s=ce,p.querySelectorAll("[data-slim]").forEach(de=>{de.classList.toggle("aktif",de.dataset.slim===(s?"1":"0"))}),a.katmanBasla(),v.height===64?a.veri.set(J.data):a.veri.set(jM(J.data)),k(),y.tuvalDoku(w,s)}catch(E){se(String(E),"err")}}const $t=()=>{window.removeEventListener("keydown",at),p.remove();try{y.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",$t),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const B=p.querySelector(".sk-edit-kayit");B.scrollIntoView({behavior:"smooth",block:"center"}),B.querySelector("#ske-ad").focus()}),Y(l),k()}function mp(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function qo(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function jc(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function uE(i,e,t){return new Promise(n=>{const{root:a,close:s}=sn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Qe=null,Qt=null,Ra=null,vi=!1,qs=null,gp=!1,gu=null;const Jt=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ah(i){Vl(),Qe=null,Qt=null,Ra=null,qs=null;const e=Gi();if(!e||e.kind!=="microsoft"){hE(i);return}i.innerHTML=fE(e.name),pE(i,e.id),$l(i,e.id,!0)}function hE(i){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${X("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${X("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{Ln(()=>ah(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>st("settings"))}function fE(i){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${X("check")} Orijinal hesap</span>
          <button class="btn" id="sk-kozmetik">${X("sparkle")} Kozmetikler</button>
          <button class="btn primary" id="sk-duzenle">${X("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${Jt(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${X("undo")} Yedeği Geri Yükle</button>
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
              ${X("plus")}
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
    </div>`}function pE(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void SE(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>st("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void ed(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void vE(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n.click())}),n.addEventListener("change",()=>{const s=n.files?.[0];s&&yp(i,e,s),n.value=""}),t.addEventListener("dragover",s=>{s.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",s=>{s.preventDefault(),t.classList.remove("uzerinde");const r=s.dataTransfer?.files?.[0];r&&yp(i,e,r)});const a=(s,r)=>{const o=i.querySelector(s);o?.addEventListener("click",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||_p(i,l)}),o?.addEventListener("dblclick",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||(_p(i,l),r())})};a("#sk-kitaplik",()=>void ed(i,e)),a("#sk-varsayilan",()=>void ed(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",s=>{const r=s.target.closest(".skin-sil");if(!r)return;s.stopPropagation();const o=r.closest(".skin-kart");o?.dataset.id&&xE(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",s=>{const r=s.target.closest(".skin-pelerin");if(!r)return;const o=r.dataset.id||null;yE(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",s=>{s.target.closest("#sk-yenile")&&$l(i,e,!1)})}async function $l(i,e,t){try{Qe=await re("cmd_skin_hub",{id:e}),Qt=Qt??mE(),ms(i),t?Ug(i):sh(i),Wl(),ql(),Qe.cevrimdisi?se("Çevrimdışısın — son bilinen skin gösteriliyor"):Qe.hata&&se(Qe.hata,"err")}catch(n){se(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function mE(){if(!Qe)return null;if(Qe.aktif)return{tur:"kayit",id:`aktif:${Qe.aktif.dosya}`,dosya:Qe.aktif.dosya,slim:Qe.aktif.slim,ad:"Aktif skin"};const i=Qe.kitaplik[0];if(i)return Ig(i);const e=Qe.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function Ig(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function ms(i){if(!Qe)return;gu=i;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Qe.cevrimdisi?`<div class="skin-serit-cevrimdisi">${X("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Qe.kitaplik.length?(t.innerHTML=Qe.kitaplik.map(c=>gE(c)).join(""),t.querySelectorAll(".skin-yuz").forEach(c=>{const l=c.dataset.dosya;l&&xp(c,l,c.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const o=i.querySelector("#sk-adet");o&&(o.textContent=Qe.kitaplik.length?`${Qe.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Qe.varsayilanlar||[]).map(o=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${Jt(o.ad)}" data-dosya="${Jt(o.dosya)}"
           data-slim="${o.slim?1:0}" data-ad="${Jt(o.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Pg}" height="${Dg}"
                  data-dosya="${Jt(o.dosya)}" data-slim="${o.slim?1:0}"></canvas>
          <span class="skin-model">${o.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${Jt(o.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(o=>{const c=o.dataset.dosya;c&&xp(o,c,o.dataset.slim==="1")})),zg(i);const a=i.querySelector("#sk-aktif-ad");if(a){const o=Qt;a.textContent=Qe.cevrimdisi?"çevrimdışı önizleme":o?`${o.ad} · ${o.slim?"Slim":"Wide"}`:"skin seç"}const s=i.querySelector("#sk-giy");s&&(s.disabled=!Qt||vi,s.textContent=vi?"Bekle…":"Bu Skini Giy");const r=i.querySelector("#sk-yedek");r&&(r.style.display=Qe.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(o=>{const c=Qt&&o.dataset.id===Qt.id;o.classList.toggle("secili",!!c);const l=o.querySelector(".skin-rozet.secim");if(c&&!l){const d=document.createElement("span");d.className="skin-rozet secim",d.textContent=Ra&&o.dataset.id===Ra?"GİYİLİ":"SEÇİLİ",o.appendChild(d)}else!c&&l?l.remove():c&&l&&(l.textContent=Ra&&o.dataset.id===Ra?"GİYİLİ":"SEÇİLİ")})}function zg(i){if(!Qe)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!Qe.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=Qe.pelerinler.find(n=>n.aktif);e.innerHTML=Qe.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${Jt(n.id)}" title="${Jt(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${Jt(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${Jt(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&EE(n,a)})}function gE(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${Jt(i.id)}" data-dosya="${Jt(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${Jt(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Pg}" height="${Dg}"
                data-dosya="${Jt(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${Jt(i.ad)}</div>
      <button class="skin-sil" title="Sil">${X("trash")}</button>
    </div>`}function _p(i,e){Qt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},sh(),ms(i)}function Ug(i){const e=i.querySelector("#skin-canvas");if(!e)return;gn().kur(e),sh()}function sh(i){const e=gn();Qt&&e.skin({url:St(Qt.dosya),slim:Qt.slim})}async function _E(i){const e=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=r,o.src=St(i)}),t=Lg(e),n=t.getContext("2d");if(!n)return St(i);const a=n.getImageData(ss.x,ss.y,ss.w,ss.h);return n.putImageData(a,mu.x,mu.y),t.toDataURL("image/png")}function Wl(){if(!Qe)return;const e=Qe.pelerinler.find(n=>n.aktif&&n.dosya)?.dosya||null;if(e===qs)return;if(qs=e,!e){gn().pelerin(null);return}const t=e;_E(e).then(n=>{qs===t&&gn().pelerin({url:n})}).catch(()=>{qs===t&&gn().pelerin(null)})}let vp=null;async function ql(){try{const i=await re("cmd_kozmetik_oku"),e=i.pelerin_aktif===!1?null:i.pelerin_dosya;if(!!e!==gp&&(gp=!!e,gu&&zg(gu)),!e||e===vp)return;vp=e,await gn().pelerin({url:St(e)}),gn().bakisaAyarla(2.5,.1)}catch{}}async function ed(i,e){if(!Qt||vi)return;const t=Qt;if(await rh("Skini giy",`<b>${Jt(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){vi=!0,ms(i);try{let a;if(t.tur==="kayit"&&Qe?.kitaplik.some(s=>s.id===t.id))a=await re("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const s=await Ng(t.dosya);a=await re("cmd_skin_giy",{id:e,veri:s,slim:t.slim,ad:null})}Qe=a,Ra=t.tur==="kayit"?t.id:null,se("Skin giyildi — sunucularda görünecek.")}catch(a){se(String(a),"err")}finally{vi=!1,ms(i)}}}async function vE(i,e){if(!(vi||!await rh("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){vi=!0;try{Qe=await re("cmd_skin_yedek_geri_yukle",{id:e}),Ra=null,se("Yedek skin geri yüklendi.")}catch(n){se(String(n),"err")}finally{vi=!1,ms(i),Wl(),ql()}}}async function yE(i,e,t){if(!(vi||!Qe)&&!(t===null&&!Qe.pelerinler.some(n=>n.aktif))){vi=!0;try{Qe=await re("cmd_skin_pelerin",{id:e,capeId:t}),se(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),Wl(),ql()}catch(n){se(String(n),"err")}finally{vi=!1,ms(i)}}}async function xE(i,e,t,n){if(await rh("Skini sil",`<b>${Jt(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await re("cmd_skin_sil",{kayitId:t}),Qt?.id===t&&(Qt=null),se("Skin silindi."),await $l(i,e,!1)}catch(s){se(String(s),"err")}}async function yp(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",s=await bE(a);if(s===null)return;await re("cmd_skin_kaydet",{ad:a,veri:n,slim:s}),se(`Skin kitaplığa eklendi · ${s?"Slim":"Wide"}`),await $l(i,e,!1)}catch(n){se(String(n),"err")}}function bE(i){return new Promise(e=>{const{root:t,close:n}=sn(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${Jt(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${X("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${X("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const s=c=>{c.key==="Escape"&&r(null)},r=c=>{a||(a=!0,window.removeEventListener("keydown",s),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>r(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>r(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>r(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&r(null)}),window.addEventListener("keydown",s)})}async function SE(i,e){const t=Qt?.dosya||Qe?.aktif?.dosya||Qe?.varsayilanlar[0]?.dosya;if(!t){se("Önce bir skin seç.","err");return}let n;try{n=await ME(await Ng(t))}catch(o){se(String(o),"err");return}const a=new Date,s=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let r=!1;dE(i,{pafta:n,slim:Qt?.slim??!1,ad:s},async(o,c)=>{const l=await re("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Qe=await re("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),Ra=l.id,se("Skin giyildi — sunucularda görünecek.")):(Qe=await re("cmd_skin_hub",{id:e}),se("Kitaplığa kaydedildi.")),Qt=Ig(l),r=!0},()=>{if(!r){ah(i);return}ms(i),Vl(),qs=null,Ug(i),Wl(),ql()})}async function ME(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s.imageSmoothingEnabled=!1;const r=Fg(n),o=n.naturalHeight===32;return s.drawImage(r,0,0,64,o?32:64),new Tl(new Uint8ClampedArray(s.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Ng(i){const e=await fetch(St(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Fg(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function xp(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&lE(a,Fg(n),t)},n.src=St(e)}function EE(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const a=Lg(t),s=sE(a);n.drawImage(a,s.x,s.y,s.w,s.h,0,0,i.width,i.height)},t.src=St(e)}function rh(i,e,t){return new Promise(n=>{const{root:a,close:s}=sn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const We=64,Nt=32,Cn=We*Nt,Og={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},Xl=[{id:"p-dis",ad:"Dış (görünen)",x:12,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:1,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],Yl=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function gs(i){return(i==="pelerin"?Xl:Yl)[0]}function Bg(i){return(i==="pelerin"?Xl:Yl)[1]}function xs(){return Array.from({length:Cn},()=>"")}function ai(i){return!i.some(e=>e!=="")}function bp(){const i=document.createElement("canvas");return i.width=We,i.height=Nt,i}function Al(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,We,Nt),t&&t(n);for(let a=0;a<Nt;a++)for(let s=0;s<We;s++){const r=e[a*We+s];r&&(n.fillStyle=r,n.fillRect(s,a,1,1))}}}function _u(i){const e=i.getImageData(0,0,We,Nt).data,t=new Array(Cn);for(let n=0;n<Cn;n++){const a=e[n*4+3];t[n]=a<24?"":`#${td(e[n*4])}${td(e[n*4+1])}${td(e[n*4+2])}`}return t}const td=i=>i.toString(16).padStart(2,"0"),kE=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],wE="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function oh(){const i=xs();for(const e of wE.split(";")){const[t,n,a]=e.split(",");i[Number(n)*We+Number(t)]=kE[Number(a)]}return i}const po=["pelerin","kanat"],TE=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],Sp=8;let Kl=xs(),mo=xs(),gr=!1,_r=!1,Wt="pelerin",Ca="#ff8a3d",Mn=!1,Ia=!1,ei=!1,La=!1,es=!0,si="kalem";const AE=[4,8,12,16];let Hr=8;const Hg="yikim:renk:son",Rl=40,cn={pelerin:[],kanat:[]},Oa={pelerin:[],kanat:[]};let Xs=RE();function RE(){try{const i=localStorage.getItem(Hg),e=i?JSON.parse(i):null;return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,12):[]}catch{return[]}}function CE(i){const e=i.toLowerCase();if(Xs[0]?.toLowerCase()!==e){Xs=[i,...Xs.filter(t=>t.toLowerCase()!==e)].slice(0,12);try{localStorage.setItem(Hg,JSON.stringify(Xs))}catch{}}}function Gg(i){const e=`#${i.trim().replace(/^#+/,"")}`;return/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():null}let nr=!0,oo=null,lo=null;const rs=new Map,lh=oh(),LE=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Lt=i=>i==="pelerin"?Kl:mo,Cl=i=>i==="pelerin"?Xl:Yl;function PE(i){Vl(),Ir=i,Kl=xs(),mo=oh(),gr=!1,_r=!1,Wt="pelerin",Ca="#ff8a3d",si="kalem",cn.pelerin.length=0,cn.kanat.length=0,Oa.pelerin.length=0,Oa.kanat.length=0,Mn=!1,Ia=!1,La=!1,nr=!0,Gt.pelerin=!1,Gt.kanat=!1,Ht.pelerin=null,Ht.kanat=null,ca.pelerin=!1,ca.kanat=!1,oo=null,lo=null,rs.clear(),i.innerHTML=DE(),IE(i)}function DE(){return`
    <div class="page-wrap kozmetik-sayfa" id="kz-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitranı doğrudan Minecraft'ın 64×32 dokusu üzerinde çiz — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-sekmeler" role="tablist" aria-label="Düzenlenecek kozmetik">
        <button class="kz-sekme aktif" data-secim="pelerin" role="tab">
          ${X("shirt")} <span>Pelerin</span>
          <em class="kz-sekme-durum" id="kz-pelerin-sekme-durum"></em>
        </button>
        <button class="kz-sekme" data-secim="kanat" role="tab">
          ${X("sparkle")} <span>Elitra</span>
          <em class="kz-sekme-durum" id="kz-kanat-sekme-durum"></em>
        </button>
        <div class="kz-sekme-sag" id="kz-sekme-ipucu">Atlasta ya da 3D modelin üstünde çiz</div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${X("user")} Karakterde görünüm</span>
            <button class="btn ghost sm" id="kz-yon" title="Ön / arka bakış">Önden gör</button>
          </div>
          <canvas id="kz-sahne"></canvas>
          <div class="kz-zum" id="kz-zum">
            <button class="seg-btn" id="kz-zum-eksi" title="Uzaklaş">−</button>
            <button class="seg-btn" id="kz-zum-arti" title="Yakınlaş">+</button>
            <button class="seg-btn" id="kz-zum-sigdir" title="Varsayılan mesafe">Sığdır</button>
            <span class="kz-zum-ipucu">Tekerlek: yakınlaş · Sürükle: döndür</span>
          </div>
          <div class="kz-aktif-satir" id="kz-aktif-satir">
            <span class="kz-aktif-baslik">Oyunda</span>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft pelerin görünür">
              <input type="checkbox" id="kz-pelerin-aktif" checked />
              <span>Özel pelerin</span>
            </label>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft elitrası görünür">
              <input type="checkbox" id="kz-kanat-aktif" checked />
              <span>Özel elitra</span>
            </label>
          </div>
          <div class="kz-cizim-arac" id="kz-cizim-arac" hidden>
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Araç</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-kalem" title="Modelin üstüne boya">${X("brush")} Kalem</button>
                <button class="seg-btn" id="kz-3d-silgi" title="Modelin üstünde sil">${X("eraser")} Silgi</button>
                <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${X("undo")} Döndür</button>
              </span>
              <span class="kz-etiket">Görünüm</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-matris" title="Piksel matrisini (ızgara) aç/kapat">${X("grid")} Matris</button>
                <button class="seg-btn" id="kz-3d-oyuncu" title="Karakter gövdesini göster/gizle">${X("user")} Oyuncuyu gizle</button>
              </span>
              <button class="btn ghost sm kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${X("image")} 2D'ye geç</button>
            </div>
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Fırça rengi</span>
              <span class="kz-3d-renk">
                <input type="color" id="kz-3d-renk" value="#ff8a3d" title="Fırça rengi" />
                <code class="kz-renk-kod" id="kz-3d-renk-kod">#FF8A3D</code>
                <span class="kz-3d-palet" id="kz-3d-palet"></span>
              </span>
            </div>
            <p class="kz-ipucu kz-cizim-ipucu">Kalem: sol tık boyar · Silgi: siler · Döndür: sol tık çevirir ·
              Ctrl+Z geri · Ctrl+Shift+Z ileri</p>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Sürükle: döndür · Tekerlek: yakınlaş</p>
        </aside>

        <div class="kz-kartlar" id="kz-kartlar">
          ${Mp("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${Mp("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function Mp(i,e,t,n,a){const s=AE.map(r=>`<button class="seg-btn ${r===Hr?"aktif":""}" data-kzyum="${r}" title="${r}× yakınlaştır">${r}×</button>`).join("");return`
    <section class="kz-kart" id="kz-${i}-kart" data-tur="${i}">
      <div class="kz-kart-ust">
        <h3>${X(t)} ${e}</h3>
        <span class="kz-rozet" id="kz-${i}-durum"></span>
      </div>

      <div class="kz-calisma">
        <div class="kz-tuval-kolon">
          <div class="kz-tuval-kaydir">
            <div class="kz-tuval-sar" id="kz-${i}-sar">
              <canvas class="kz-tuval" id="kz-${i}-tuval" width="${We}" height="${Nt}"
                aria-label="${n} atlası — 64×32 piksel"></canvas>
              <canvas class="kz-rehber" id="kz-${i}-rehber"
                width="${We*Sp}" height="${Nt*Sp}"></canvas>
            </div>
          </div>
          <div class="kz-tuval-alt">
            <span class="kz-etiket">Yakınlaştır</span>
            <span class="seg-grup">${s}</span>
            <span class="kz-ipucu kz-kart-ipucu">${a}</span>
          </div>
          <div class="kz-bolgeler" id="kz-${i}-bolgeler"></div>
        </div>

        <div class="kz-arac-panel">
          <div class="kz-arac-grup" id="kz-${i}-araclar" role="group" aria-label="Araçlar">
            <button class="kz-arac-btn aktif" data-kzarac="kalem" title="Kalem">${X("brush")}</button>
            <button class="kz-arac-btn" data-kzarac="silgi" title="Silgi (çizerek siler)">${X("eraser")}</button>
            <button class="kz-arac-btn" data-kzarac="kova" title="Kova — bitişik aynı renk alanını doldur">${X("bucket")}</button>
            <button class="kz-arac-btn" data-kzarac="damla" title="Damlalık — tuvallin rengini al">${X("picker")}</button>
            <span class="kz-arac-ayrac"></span>
            <button class="kz-arac-btn" id="kz-${i}-geri" title="Geri al">${X("undo")}</button>
            <button class="kz-arac-btn" id="kz-${i}-ileri" title="İleri al">${X("redo")}</button>
          </div>

          <div class="kz-blok">
            <div class="kz-blok-ust">
              <span class="kz-etiket">Renk</span>
              <code class="kz-renk-kod" id="kz-${i}-renk-kod">#FF8A3D</code>
            </div>
            <div class="kz-renk-sec">
              <input type="color" id="kz-${i}-renk" value="#ff8a3d" title="Renk seç" />
              <input class="input kz-hex" id="kz-${i}-hex" value="#FF8A3D" maxlength="7"
                spellcheck="false" aria-label="Renk kodu (hex)" />
            </div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Son kullandıkların</span>
            <div class="kz-son-renkler" id="kz-${i}-son"></div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Hazır palet</span>
            <div class="kz-araclar" id="kz-${i}-palet"></div>
          </div>
        </div>
      </div>

      <div class="kz-foto" id="kz-${i}-foto" hidden>
        <canvas class="kz-foto-img" id="kz-${i}-foto-img" aria-label="Yüklenen fotoğraf"></canvas>
        <div class="kz-foto-metin">
          <b>Fotoğraf modu</b>
          <p>Bu kozmetik yüklediğin fotoğraftan oluşturuldu ve <b>fotoğrafın kendi kalitesinde</b> görünür.
             Fotoğrafın üzerine çizim yapılamaz — yeni bir fotoğraf yüklediğinde eskisinin yerine geçer.</p>
          <p class="kz-foto-ipucu">Farklı bir bölümü kullanmak istersen tekrar <b>Fotoğraf / Pafta</b> ile yükle.</p>
        </div>
      </div>

      <div class="kz-alt">
        <button class="btn" id="kz-${i}-3d" data-ciz3d="${i}"
          title="Doğrudan 3D modelin her yüzüne boya">${X("box")} 3D Çiz</button>
        <label class="btn" for="kz-${i}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${X("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${i}-dosya" accept="image/*" style="display:none" />
        <span class="kz-alt-bos"></span>
        <button class="btn" id="kz-${i}-temizle" title="Atlasın tamamını temizle">${X("trash")} Temizle</button>
        <button class="btn danger" id="kz-${i}-kaldir" title="Kayıtlı kozmetiği kaldır">Kaldır</button>
        <button class="btn primary" id="kz-${i}-kaydet">${X("check")} Kaydet</button>
      </div>
    </section>`}async function IE(i){let e;try{e=await re("cmd_kozmetik_oku")}catch(d){se(String(d),"err"),e={pelerin:null,kanat:null}}const t=d=>{try{const h=localStorage.getItem(`yikim:kozmetik:${d}:yedek`),u=h?JSON.parse(h):null;return Array.isArray(u)&&u.length===Cn?u.slice():null}catch{return null}},n=(d,h)=>d?d.length===Cn?d.slice():d.length===ZE[h]?QE(d,h):null:null,a=n(e.pelerin,"pelerin"),s=n(e.kanat,"kanat");Kl=!!a&&!ai(a)?a:t("pelerin")??a??xs(),mo=!!s&&!ai(s)?s:t("kanat")??s??oh(),gr=!!a&&!ai(a),_r=!!s&&!ai(s),oo=bp(),lo=bp(),Vg(),zE(i);for(const d of po)GE(i,d);go(i),Yg(i),qE(i);const c=i.querySelector("#kz-pelerin-aktif"),l=i.querySelector("#kz-kanat-aktif");c&&(c.checked=e.pelerin_aktif??wp("pelerin")??!!e.pelerin_dosya),l&&(l.checked=e.kanat_aktif??wp("kanat")??!!e.kanat_dosya),nk(i,e)}function zE(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=gn();t.kur(e),(async()=>{try{const n=Gi();let a=null;if(n){const s=await re("cmd_skin_hub",{id:n.id});a=s?.aktif?.dosya?s.aktif:s?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:St(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function UE(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of Xl)i.fillRect(e.x,e.y,e.w,e.h)}function NE(i){if(!ai(mo)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of Yl)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<Cn;e++){const t=lh[e];t&&(i.fillStyle=t,i.fillRect(e%We,Math.floor(e/We),1,1))}i.restore()}function Vg(){oo&&Al(oo,Kl,UE),lo&&Al(lo,mo,NE),gn().dokuTazele()}function go(i){const e=gn();Wt==="pelerin"?(e.kanatTuval(null),Gt.pelerin&&Ht.pelerin?(e.pelerinTuval(null),e.pelerin({url:St(Ht.pelerin)})):e.pelerinTuval(oo)):(e.pelerinTuval(null),Gt.kanat&&Ht.kanat?(e.kanatTuval(null),e.kanat({url:St(Ht.kanat)})):e.kanatTuval(lo)),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===Wt),t.setAttribute("aria-selected",t.dataset.secim===Wt?"true":"false")});for(const t of po){const n=i.querySelector(`#kz-${t}-kart`);n&&(n.hidden=Wt!==t,n.classList.toggle("secili",Wt===t))}i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===Wt;t.classList.toggle("aktif",Mn&&n),t.innerHTML=Mn&&n?`${X("image")} 2D'ye geç`:`${X("box")} 3D Çiz`})}function $n(i,e){ai(Lt(e))||(ca[e]=!1);const t=i.querySelector(`#kz-${e}-tuval`);t&&Al(t,Lt(e)),Gr(i,e),ch(i,e),Vg()}function ch(i,e){const t=Gt[e]||!ai(Lt(e)),n=e==="pelerin"?gr:_r,a=i.querySelector(`#kz-${e}-durum`);a&&(a.textContent=n&&t?"KAYITLI":"");const s=i.querySelector(`#kz-${e}-sekme-durum`);s&&(s.textContent=n&&t?"kayıtlı":"")}function FE(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/We;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const s of e){const r=t?.id===s.id;if(n.strokeStyle=r?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=r?2:1,n.setLineDash(r?[]:[4,3]),n.strokeRect(s.x*a+.5,s.y*a+.5,s.w*a-1,s.h*a-1),n.setLineDash([]),s.h*a<20)continue;const o=s.w*a<46,c=(s.x+s.w/2)*a,l=Math.min(i.height-10,Math.max(10,(s.y+s.h/2)*a));n.save(),n.translate(c,l),o&&n.rotate(-Math.PI/2);const d=n.measureText(s.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=r?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(s.ad,0,0),n.restore()}}function Gr(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&FE(t,Cl(e),rs.get(e)??null)}function Ep(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*We),a=Math.floor((i.clientY-t.top)/t.height*Nt);return n<0||a<0||n>=We||a>=Nt?null:{x:n,y:a}}function OE(i,e,t){for(const n of Cl(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function BE(i,e,t,n,a,s){let r=e,o=t;const c=Math.abs(n-e),l=Math.abs(a-t),d=e<n?1:-1,h=t<a?1:-1;let u=c-l;for(;r>=0&&r<We&&o>=0&&o<Nt&&(i[o*We+r]=s),!(r===n&&o===a);){const f=2*u;f>-l&&(u-=l,r+=d),f<c&&(u+=c,o+=h)}}function HE(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;kp(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&kp(n,i)}function kp(i,e){i.innerHTML=TE.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>os(e,t.dataset.renk??"#ffffff"))})}function os(i,e,t=!0){const n=Gg(e)??Ca;Ca=n,t&&(si="kalem",CE(n));const a=o=>(o??"").toLowerCase()===n.toLowerCase();for(const o of po){const c=i.querySelector(`#kz-${o}-renk`);c&&(c.value=n);const l=i.querySelector(`#kz-${o}-hex`);l&&(l.value=n.toUpperCase());const d=i.querySelector(`#kz-${o}-renk-kod`);d&&(d.textContent=n.toUpperCase()),i.querySelectorAll(`#kz-${o}-palet .kz-renk`).forEach(h=>{h.classList.toggle("aktif",a(h.dataset.renk))}),i.querySelectorAll(`#kz-${o}-son .kz-renk`).forEach(h=>{h.classList.toggle("aktif",a(h.dataset.renk))})}const s=i.querySelector("#kz-3d-renk");s&&(s.value=n);const r=i.querySelector("#kz-3d-renk-kod");r&&(r.textContent=n.toUpperCase()),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(o=>{o.classList.toggle("aktif",a(o.dataset.renk))}),t&&Mn&&(Ia=!1),dh(i),Xg(i)}function GE(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;HE(i,e),Al(t,Lt(e)),Gr(i,e),ch(i,e),WE(i,e),Xg(i),qg(i),dh(i),e==="pelerin"&&os(i,Ca,!1);let n=!1,a=-1,s=-1;const r=()=>{cn[e].push(Lt(e).slice()),cn[e].length>Rl&&cn[e].shift(),Oa[e].length=0},o=(u,f,m)=>{const _=Lt(e);if(si==="damla"){const g=_[f*We+u];g&&os(i,g,!0);return}if(si==="kova"){if(!m)return;r(),$E(_,u,f,Ca),$n(i,e);return}const p=si==="silgi"?"":Ca;a>=0&&s>=0?BE(_,a,s,u,f,p):_[f*We+u]=p,a=u,s=f,$n(i,e)};t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{Wt!==e&&(Wt=e,go(i)),n=!0,a=-1,s=-1;try{t.setPointerCapture(u.pointerId)}catch{}const f=Ep(u,t);f&&(si!=="damla"&&r(),o(f.x,f.y,!0))}),t.addEventListener("pointermove",u=>{const f=Ep(u,t),m=f?OE(e,f.x,f.y):null;(rs.get(e)??null)?.id!==(m?.id??null)&&(rs.set(e,m),Gr(i,e)),!(!f||!n)&&o(f.x,f.y,!1)});const c=()=>{n=!1,a=-1,s=-1};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerleave",()=>{n||rs.get(e)&&(rs.set(e,null),Gr(i,e))}),i.querySelectorAll(`#kz-${e}-araclar [data-kzarac]`).forEach(u=>{u.addEventListener("click",()=>VE(i,u.dataset.kzarac??"kalem"))}),i.querySelector(`#kz-${e}-geri`)?.addEventListener("click",()=>$g(i,e)),i.querySelector(`#kz-${e}-ileri`)?.addEventListener("click",()=>Wg(i,e)),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",u=>{os(i,u.target.value)});const l=i.querySelector(`#kz-${e}-hex`),d=()=>{if(!l)return;const u=Gg(l.value);u?os(i,u):l.value=Ca.toUpperCase()};l?.addEventListener("change",d),l?.addEventListener("blur",d),l?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{r();const u=Lt(e);for(let f=0;f<u.length;f++)u[f]="";ca[e]=!0,$n(i,e),se(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(Mn&&Wt===e){vu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}vu(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void Ll(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{Gt[e]&&(Gt[e]=!1,Ht[e]=null,ji(i,e)),r();const u=Lt(e);for(let f=0;f<u.length;f++)u[f]="";ca[e]=!0,$n(i,e),Ll(i,e)});const h=i.querySelector(`#kz-${e}-dosya`);h?.addEventListener("change",()=>{const u=h.files?.[0];u&&rk(i,e,u),h.value=""})}function VE(i,e){si=e,dh(i),e==="damla"?se("Damlalık: tuvallin bir pikseline tıkla, rengi alır."):e==="kova"&&se("Kova: bitişik aynı renk alanını seçili renkle doldurur.")}function dh(i){i.querySelectorAll("[data-kzarac]").forEach(e=>{e.classList.toggle("aktif",e.dataset.kzarac===si)}),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",Mn&&si!=="silgi"),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",Mn&&si==="silgi")}function $E(i,e,t,n){const a=i[t*We+e]??"";if(a===n)return;const s=[t*We+e];for(;s.length;){const r=s.pop();if((i[r]??"")!==a)continue;i[r]=n;const o=r%We,c=Math.floor(r/We);o>0&&s.push(r-1),o<We-1&&s.push(r+1),c>0&&s.push(r-We),c<Nt-1&&s.push(r+We)}}function $g(i,e){const t=cn[e].pop();if(!t){se("Geri alınacak adım yok.");return}Oa[e].push(Lt(e).slice()),Lt(e).splice(0,Lt(e).length,...t),$n(i,e)}function Wg(i,e){const t=Oa[e].pop();if(!t){se("İleri alınacak adım yok.");return}cn[e].push(Lt(e).slice()),Lt(e).splice(0,Lt(e).length,...t),$n(i,e)}function qg(i){for(const e of po){const t=i.querySelector(`#kz-${e}-tuval`),n=i.querySelector(`#kz-${e}-rehber`),a=`${We*Hr}px`,s=`${Nt*Hr}px`;t&&(t.style.width=a,t.style.height=s),n&&(n.style.width=a,n.style.height=s)}i.querySelectorAll("[data-kzyum]").forEach(e=>{e.classList.toggle("aktif",Number(e.dataset.kzyum)===Hr)})}function Xg(i){for(const e of po){const t=i.querySelector(`#kz-${e}-son`);t&&(t.innerHTML=Xs.length?Xs.map(n=>`<button class="kz-renk" data-renk="${n}" style="background:${n}" title="${n}" aria-label="${n}"></button>`).join(""):'<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>',t.querySelectorAll(".kz-renk").forEach(n=>{n.addEventListener("click",()=>os(i,n.dataset.renk??"#ffffff"))}))}}function WE(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=Cl(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=Cl(e).find(r=>r.id===n.dataset.bolge)??null,s=r=>{rs.set(e,r?a:null),Gr(i,e)};n.addEventListener("pointerenter",()=>s(!0)),n.addEventListener("pointerleave",()=>s(!1))}))}function vu(i,e,t){e&&t&&(Wt=t),Mn=e,Ia=!1,e||(La=!1),e||(ei=!1);const n=gn();n.etkilesimKapali=e&&!ei,n.izgaraGoster(e&&es),n.kanatAyrik(e),n.oyuncuGoster(!La),i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",e&&es),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const s=i.querySelector("#kz-3d-oyuncu");s&&(s.innerHTML=`${X("user")} ${La?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!Ia),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&Ia),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&ei);const r=i.querySelector("#kz-sahne-alt");r&&(r.textContent=e?ei?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),go(i),requestAnimationFrame(()=>n.boyutGuncelle())}function qE(i){const e=async(c,l,d)=>{const h=Lt(l),u=`yikim:kozmetik:${l}:yedek`;if(!d&&!ai(h))try{localStorage.setItem(u,JSON.stringify(h))}catch{}try{await re("cmd_kozmetik_aktif",{[l]:d});return}catch{}if(!d){if(Gt[l])throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");await yu(l,xs());return}let f=[];try{const m=localStorage.getItem(u),_=m?JSON.parse(m):null;Array.isArray(_)&&_.length===Cn&&(f=_)}catch{f=[]}!f.length&&!ai(h)&&(f=h.slice()),f.length&&(await yu(l,f),h.splice(0,h.length,...f),$n(c,l))},t=i.querySelector("#kz-sahne");if(!t)return;const n=gn();let a=!1;const s=c=>{const l=n.kozmetikNoktasi(c,Wt);if(!l||l.x<0||l.y<0||l.x>=We||l.y>=Nt)return;const d=Lt(Wt),h=Ia?"":Ca,u=l.y*We+l.x;d[u]!==h&&(d[u]=h,$n(i,Wt))};t.addEventListener("contextmenu",c=>{Mn&&c.preventDefault()}),t.addEventListener("pointerdown",c=>{if(!(!Mn||ei)&&!(c.pointerType==="mouse"&&c.button!==0)){a=!0;try{t.setPointerCapture(c.pointerId)}catch{}s(c)}}),t.addEventListener("pointermove",c=>{Mn&&a&&s(c)});const r=()=>{a=!1};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),i.querySelectorAll("[data-secim]").forEach(c=>{c.addEventListener("click",()=>{Wt=c.dataset.secim??"pelerin",go(i)})}),i.querySelectorAll("[data-kzyum]").forEach(c=>{c.addEventListener("click",()=>{const l=Number(c.dataset.kzyum);l&&(Hr=l,qg(i))})}),i.querySelector("#kz-3d-matris")?.addEventListener("click",()=>{es=!es,i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",es),n.izgaraGoster(es),se(es?"Matris açık — piksel sınırları görünür.":"Matris kapalı.")}),i.querySelector("#kz-3d-renk")?.addEventListener("input",c=>{os(i,c.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[c,l]of o)i.querySelector(c)?.addEventListener("change",d=>{const h=d.target,u=h.checked;Tp(l,u),(async()=>{try{await e(i,l,u),se(l==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(f){h.checked=!u,Tp(l,!u),se(String(f),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{nr=!nr,Yg(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{Ia=!1,ei=!1,si="kalem",n.etkilesimKapali=Mn,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{Ia=!0,ei=!1,si="silgi",n.etkilesimKapali=Mn,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{ei=!ei,n.etkilesimKapali=Mn&&!ei,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",ei);const l=i.querySelector("#kz-sahne-alt");l&&(l.textContent=ei?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const c=i.querySelector("#kz-3d-oyuncu");La=!La,n.oyuncuGoster(!La),c&&(c.innerHTML=`${X("user")} ${La?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const c=Wt;vu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${c}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function Yg(i){gn().bakisaAyarla(nr?2.5:0,nr?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=nr?"Önden gör":"Arkadan gör")}const XE=(i,e,t)=>i[t*We+e]??"",Ys=(i,e,t,n)=>{e<0||e>=We||t<0||t>=Nt||(i[t*We+e]=n)};function YE(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)Ys(i,t.x+(e.w-1-a),t.y+n,XE(i,e.x+a,e.y+n))}function KE(i,e){const t=gs(e),n=Og[e],{u:a,v:s,d:r}=n,o=(c,l)=>i[l*We+c]??"";for(let c=0;c<t.h;c++){const l=o(t.x,t.y+c),d=o(t.x+t.w-1,t.y+c);for(let h=0;h<r;h++)Ys(i,a+r+n.w+h,s+r+c,l),Ys(i,a+h,s+r+c,d)}for(let c=0;c<t.w;c++){const l=o(t.x+c,t.y),d=o(t.x+c,t.y+t.h-1);for(let h=0;h<r;h++)Ys(i,a+r+c,s+h,l),Ys(i,a+r+n.w+c,s+h,d)}}const ZE={pelerin:160,kanat:200};function JE(i,e=Lt(i)){const t=gs(i),n=[];for(let a=0;a<t.h;a++)for(let s=0;s<t.w;s++)n.push(e[(t.y+a)*We+t.x+s]??"");return n}function QE(i,e){const t=xs(),n=gs(e);for(let a=0;a<n.h;a++)for(let s=0;s<n.w;s++)Ys(t,n.x+s,n.y+a,i[a*n.w+s]??"");return YE(t,n,Bg(e)),KE(t,e),t}async function yu(i,e){try{return await re("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await re("cmd_kozmetik_kaydet",{[i]:JE(i,e)})}}function wp(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function Tp(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}const Gt={pelerin:!1,kanat:!1},Ht={pelerin:null,kanat:null},ca={pelerin:!1,kanat:!1};function jE(i){return new Promise(e=>{const t=URL.createObjectURL(i),n=new Image;n.onload=()=>{URL.revokeObjectURL(t),e(n)},n.onerror=()=>{URL.revokeObjectURL(t),se("Görsel okunamadı","err"),e(null)},n.src=t})}function ek(i,e,t,n,a,s,r,o){const c=document.createElement("canvas");c.width=Math.max(1,Math.round(s)),c.height=Math.max(1,Math.round(r));const l=c.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("tuval yok");if(l.imageSmoothingEnabled=o,l.imageSmoothingQuality="high",!o)return l.drawImage(i,e,t,n,a,0,0,c.width,c.height),c;let d=i,h=e,u=t,f=n,m=a,_=Math.round(n),p=Math.round(a);for(;_>c.width*2&&p>c.height*2;){_=Math.max(c.width,Math.round(_/2)),p=Math.max(c.height,Math.round(p/2));const g=document.createElement("canvas");g.width=_,g.height=p;const x=g.getContext("2d");if(!x)break;x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.drawImage(d,h,u,f,m,0,0,_,p),d=g,h=0,u=0,f=_,m=p}return l.drawImage(d,h,u,f,m,0,0,c.width,c.height),c}function Kg(i,e,t,n,a,s=!1,r=0){const o=gs(t),c=Bg(t),l=Og[t],d=a?Math.max(1,Math.min(16,Math.round(e.w/o.w))):1,h=document.createElement("canvas");h.width=We*d,h.height=Nt*d;const u=h.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("tuval yok");const f=o.x*d,m=o.y*d,_=o.w*d,p=o.h*d;u.imageSmoothingEnabled=!1;const g=ek(i,e.x,e.y,e.w,e.h,_,p,a);let x=g;if(s||r!==0){const b=document.createElement("canvas");b.width=_,b.height=p;const S=b.getContext("2d");S&&(S.imageSmoothingEnabled=!a,S.translate(_/2,p/2),S.rotate(r*Math.PI/180),S.scale(s?-1:1,1),S.drawImage(g,-_/2,-p/2),x=b)}if(t==="pelerin"&&(u.fillStyle="#000000",u.fillRect(f,m,_,p)),t==="pelerin"?(u.save(),u.translate(f+_,m),u.scale(-1,1),u.drawImage(x,0,0),u.restore()):u.drawImage(x,f,m),n)return h;u.save(),u.translate(c.x*d+_,c.y*d),u.scale(-1,1),u.drawImage(h,f,m,_,p,0,0,_,p),u.restore();const T=d;return u.drawImage(h,f,m,T,p,(l.u+l.d+l.w)*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(h,f+_-T,m,T,p,l.u*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(h,f,m,_,T,(l.u+l.d)*d,l.v*d,_,l.d*d),u.drawImage(h,f,m+p-T,_,T,(l.u+l.d+l.w)*d,l.v*d,_,l.d*d),h}function tk(i){return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(new Error("PNG üretilemedi"));return}const a=new FileReader;a.onload=()=>e(String(a.result).split(",")[1]??""),a.onerror=()=>t(new Error("PNG okunamadı")),a.readAsDataURL(n)},"image/png")})}function ji(i,e){const t=Gt[e],n=i.querySelector(`#kz-${e}-kart`);if(!n)return;n.classList.toggle("foto",t);const a=n.querySelector(".kz-calisma");a&&(a.hidden=t);const s=i.querySelector(`#kz-${e}-foto`);s&&(s.hidden=!t);const r=i.querySelector(`#kz-${e}-foto-img`),o=Ht[e];if(r&&o){const l=new Image;l.onload=()=>{const d=Math.max(1,Math.round(l.naturalWidth/We)),h=gs(e);r.width=h.w*12,r.height=h.h*12;const u=r.getContext("2d");u&&(u.clearRect(0,0,r.width,r.height),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",e==="pelerin"&&(u.save(),u.translate(r.width,0),u.scale(-1,1)),u.drawImage(l,h.x*d,h.y*d,h.w*d,h.h*d,0,0,r.width,r.height),e==="pelerin"&&u.restore())},l.src=St(o)}else r&&r.getContext("2d")?.clearRect(0,0,r.width,r.height);for(const l of["#kz-"+e+"-3d","#kz-"+e+"-temizle","#kz-"+e+"-kaydet"]){const d=i.querySelector(l);d&&(d.hidden=t)}const c=i.querySelector(`#kz-${e}-durum`);c&&(c.textContent=t?"fotoğraf (HD)":""),Wt===e&&go(i)}function nk(i,e){const t=(n,a,s)=>{if(Array.isArray(s)&&s.length===Cn){Gt[n]=!1,Ht[n]=null,ji(i,n);return}if(!a){Gt[n]=!1,Ht[n]=null,ji(i,n);return}Gt[n]=!0,Ht[n]=String(a),ji(i,n);const r=String(a),o=new Image;o.onload=()=>{if(Ht[n]!==r)return;const c=o.naturalWidth>We||o.naturalHeight>Nt;Gt[n]=c,Ht[n]=c?r:null,ji(i,n)},o.onerror=()=>{Ht[n]===r&&(Gt[n]=!0)},o.src=St(r)};t("pelerin",e.pelerin_dosya,e.pelerin),t("kanat",e.kanat_dosya,e.kanat)}async function ik(i,e,t,n,a,s,r=!1,o=0){ca[e]=!1;const c=Kg(t,n,e,a,s,r,o),l=await tk(c);let d;try{d=await re("cmd_kozmetik_fotograf",{tur:e,png:l,duz:a})}catch(f){const m=document.createElement("canvas");m.width=We,m.height=Nt;const _=m.getContext("2d",{willReadFrequently:!0});if(!_)throw f;_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(c,0,0,We,Nt);const p=_u(_),g=Lt(e);cn[e].push(g.slice()),cn[e].length>Rl&&cn[e].shift(),Oa[e].length=0;for(let x=0;x<Cn;x++)g[x]=p[x];$n(i,e),await Ll(i,e),se("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.","err");return}const h=Lt(e);for(let f=0;f<h.length;f++)h[f]="";localStorage.removeItem(`yikim:kozmetik:${e}:yedek`),Gt[e]=!0,Ht[e]=e==="pelerin"?"pelerin.png":"elytra.png";try{const f=await re("cmd_kozmetik_oku"),m=e==="pelerin"?f.pelerin_dosya:f.kanat_dosya;m&&(Ht[e]=String(m))}catch{}if(e==="pelerin"?gr=!0:_r=!0,!s){const f=c.getContext("2d",{willReadFrequently:!0});if(f){const m=_u(f),_=Lt(e);cn[e].push(_.slice()),cn[e].length>Rl&&cn[e].shift(),Oa[e].length=0;for(let p=0;p<Cn;p++)_[p]=m[p];if(e==="kanat")for(let p=0;p<Cn;p++)lh[p]||(_[p]="")}Gt[e]=!1,Ht[e]=null,$n(i,e),ji(i,e),await Ll(i,e);return}$n(i,e),ji(i,e);const u=d.yuklendi?"":" (sunucuya yüklenemedi; yalnız sende görünür)";se(`Fotoğraf ${d.genislik}×${d.yukseklik} HD doku olarak kaydedildi${u}`)}function ak(i,e,t){i.querySelector("#kz-kirp")?.remove();const n=gs(e),a=n.w/n.h,s=e==="pelerin"?"Pelerin":"Elitra";let r=!1,o=!0,c=!1,l=0;const d=document.createElement("div");d.className="kz-kirp",d.id="kz-kirp",d.innerHTML=`
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${s} fotoğrafı</b>
          <span>Çerçeveyi sürükle · köşeden boyutlandır · tekerlekle yakınlaştır · üstteki tutamaçla döndür</span>
        </div>
        <button class="btn ghost sm" id="kz-kirp-kapat" title="Kapat (Esc)">${X("close")}</button>
      </div>
      <div class="kz-kirp-govde">
        <canvas id="kz-kirp-c"></canvas>
        <div class="kz-kirp-yan">
          <span class="kz-etiket">Oyunda görünecek</span>
          <canvas id="kz-kirp-on" width="${n.w}" height="${n.h}"></canvas>
          <p class="kz-kirp-not" id="kz-kirp-boyut">—</p>
          <span class="kz-etiket">Şekil</span>
          <div class="kz-kirp-mod" id="kz-kirp-mod">
            <button class="seg-btn aktif" data-mod="normal">${s} şekli</button>
            <button class="seg-btn" data-mod="duz">Düz dikdörtgen</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-mod-not"></p>
          <span class="kz-etiket">Ayarlama</span>
          <div class="kz-kirp-mod" id="kz-kirp-ayar">
            <button class="seg-btn" id="kz-kirp-ayna" title="Fotoğrafı yatay olarak ters çevir">Ayna</button>
            <button class="seg-btn" id="kz-kirp-don" title="Döndürmeyi sıfırla">0°</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-ayar-not">Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.</p>
          <span class="kz-etiket">Kalite</span>
          <label class="kz-kirp-piksel"><input type="checkbox" id="kz-kirp-piksel" checked /> HD görünüm</label>
          <p class="kz-kirp-not">İşaretliyken fotoğraf HD dokusu olarak kaydedilir. Kapatırsan 64×32 piksel dokusuna iner ve üzerine yeniden çizebilirsin.</p>
        </div>
      </div>
      <div class="kz-kirp-alt">
        <span class="kz-kirp-bilgi" id="kz-kirp-bilgi"></span>
        <button class="btn" id="kz-kirp-iptal">İptal</button>
        <button class="btn primary" id="kz-kirp-uygula">${X("check")} Uygula</button>
      </div>
    </div>`,i.appendChild(d);const h=d.querySelector("#kz-kirp-c"),u=d.querySelector("#kz-kirp-on"),f=d.querySelector("#kz-kirp-bilgi"),m=d.querySelector("#kz-kirp-boyut"),_=d.querySelector("#kz-kirp-mod-not"),p=Math.min(620/t.width,420/t.height,1);h.width=Math.max(60,Math.round(t.width*p)),h.height=Math.max(60,Math.round(t.height*p));const g=h.width/t.width,x=h.getContext("2d");if(!x)throw new Error("tuval yok");let b=(()=>{let D=t.height,P=D*a;return P>t.width&&(P=t.width,D=P/a),{x:(t.width-P)/2,y:(t.height-D)/2,w:P,h:D}})();const S=D=>{const P=Math.max(4,t.width/60);let Y=Math.min(Math.max(D.w,P),t.width),G=Y/a;return G>t.height&&(G=t.height,Y=G*a),{x:Math.min(Math.max(D.x,0),Math.max(0,t.width-Y)),y:Math.min(Math.max(D.y,0),Math.max(0,t.height-G)),w:Y,h:G}};b=S(b);const w=()=>{const D=b.x*g,P=b.y*g,Y=b.w*g,G=P-26;return{x:D+Y/2,y:G<14?P+24:G}},A=()=>{x.clearRect(0,0,h.width,h.height),x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.drawImage(t,0,0,h.width,h.height);const D=b.x*g,P=b.y*g,Y=b.w*g,G=b.h*g;x.fillStyle="rgba(6,8,12,0.66)",x.fillRect(0,0,h.width,P),x.fillRect(0,P+G,h.width,Math.max(0,h.height-P-G)),x.fillRect(0,P,D,G),x.fillRect(D+Y,P,Math.max(0,h.width-D-Y),G),x.strokeStyle="rgba(255,255,255,0.30)",x.lineWidth=1;for(let Be=1;Be<3;Be++)x.beginPath(),x.moveTo(D+Y*Be/3,P),x.lineTo(D+Y*Be/3,P+G),x.stroke(),x.beginPath(),x.moveTo(D,P+G*Be/3),x.lineTo(D+Y,P+G*Be/3),x.stroke();x.strokeStyle="#ff8a3d",x.lineWidth=2,x.strokeRect(D+1,P+1,Math.max(1,Y-2),Math.max(1,G-2)),x.fillStyle="#ff8a3d",x.fillRect(D+Y-8,P+G-8,8,8);const Q=w(),ee=Q.x,ue=Q.y;x.strokeStyle="#ff8a3d",x.lineWidth=2,x.beginPath(),x.moveTo(ee,P),x.lineTo(ee,ue+9),x.stroke(),x.beginPath(),x.arc(ee,ue,9,0,Math.PI*2),x.fillStyle="#12161e",x.fill(),x.stroke(),x.fillStyle="#ff8a3d",x.font="bold 11px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("↻",ee,ue+1);const Me=Kg(t,b,e,r,o,c,l),Ne=Me.width/We,De=gs(e),He=De.w*Ne,Z=De.h*Ne,ne=document.createElement("canvas");ne.width=He,ne.height=Z;const he=ne.getContext("2d",{willReadFrequently:!0}),ze=o?He:De.w*11,be=o?Z:De.h*11;u.width=ze,u.height=be;const Oe=u.getContext("2d");if(he&&Oe){if(he.imageSmoothingEnabled=!1,he.drawImage(Me,De.x*Ne,De.y*Ne,He,Z,0,0,He,Z),e==="kanat"){const Be=he.getImageData(0,0,He,Z);for(let Xe=0;Xe<Z;Xe++)for(let at=0;at<He;at++){const Ve=De.x+Math.floor(at/Ne),ht=De.y+Math.floor(Xe/Ne);lh[ht*We+Ve]||(Be.data[(Xe*He+at)*4+3]=0)}he.putImageData(Be,0,0)}Oe.clearRect(0,0,ze,be),Oe.imageSmoothingEnabled=!1,e==="pelerin"&&(Oe.save(),Oe.translate(ze,0),Oe.scale(-1,1)),Oe.drawImage(ne,0,0,ze,be),e==="pelerin"&&Oe.restore()}u.style.imageRendering=o?"auto":"pixelated";const mt=Ne;m&&(m.textContent=`Doku: ${We*mt}×${Nt*mt} (kumaş ${n.w*mt}×${n.h*mt})`),f&&(f.textContent=`${Math.round(b.w)}×${Math.round(b.h)} px seçim`)},y=D=>{const P=h.getBoundingClientRect();return{x:(D.clientX-P.left)/Math.max(1,P.width)*h.width/g,y:(D.clientY-P.top)/Math.max(1,P.height)*h.height/g}};let k=null;h.addEventListener("pointerdown",D=>{const P=y(D),Y=14/g,G=w(),Q=G.x,ee=G.y,ue=(D.clientX-h.getBoundingClientRect().left)/Math.max(1,h.getBoundingClientRect().width)*h.width,Me=(D.clientY-h.getBoundingClientRect().top)/Math.max(1,h.getBoundingClientRect().height)*h.height,Ne={x:b.x+b.w/2,y:b.y+b.h/2},De=Math.atan2(P.y-Ne.y,P.x-Ne.x)*180/Math.PI;Math.hypot(ue-Q,Me-ee)<=14?k={tip:"don",px:P.x,py:P.y,sec:{...b},aci:De,don:l}:k={tip:Math.hypot(P.x-(b.x+b.w),P.y-(b.y+b.h))<Y?"boyut":"tasi",px:P.x,py:P.y,sec:{...b}},h.setPointerCapture(D.pointerId),D.preventDefault()}),h.addEventListener("pointermove",D=>{if(!k)return;const P=y(D),Y=P.x-k.px,G=P.y-k.py;if(k.tip==="don"){const Q={x:b.x+b.w/2,y:b.y+b.h/2},ee=Math.atan2(P.y-Q.y,P.x-Q.x)*180/Math.PI;let ue=(k.don??0)+(ee-(k.aci??ee));ue=(ue%360+360)%360,D.shiftKey&&(ue=Math.round(ue/15)*15),l=ue,z()}else if(k.tip==="tasi")b=S({x:k.sec.x+Y,y:k.sec.y+G,w:k.sec.w,h:k.sec.h});else{const Q=Math.max(k.sec.w+Math.max(Y,G*a),4);b=S({x:k.sec.x,y:k.sec.y,w:Q})}A()});const R=()=>{k=null};h.addEventListener("pointerup",R),h.addEventListener("pointercancel",R),h.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?1.12:1/1.12,Y=b.x+b.w/2,G=b.y+b.h/2,Q=b.w*P;b=S({x:Y-Q/2,y:G-Q/a/2,w:Q}),A()},{passive:!1});const C=()=>{_&&(_.textContent=r?"Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır.":"Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.")};C(),d.querySelectorAll("[data-mod]").forEach(D=>{D.addEventListener("click",()=>{r=D.dataset.mod==="duz",d.querySelectorAll("[data-mod]").forEach(P=>P.classList.toggle("aktif",P===D)),C()})});const z=()=>{const D=d.querySelector("#kz-kirp-ayar-not"),P=d.querySelector("#kz-kirp-don"),Y=Math.round(l);P&&(P.textContent=`${Y}°`,P.classList.toggle("aktif",Y!==0)),D&&(Y===0&&!c?D.textContent="Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.":D.textContent=`${Y?Y+"° döndürüldü":""}${Y&&c?" · ":""}${c?"aynalandı":""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`)};d.querySelector("#kz-kirp-ayna")?.addEventListener("click",D=>{c=!c,D.currentTarget.classList.toggle("aktif",c),z(),A()}),d.querySelector("#kz-kirp-don")?.addEventListener("click",D=>{l=0,D.currentTarget.classList.remove("aktif"),D.currentTarget.textContent="0°",z(),A()}),z(),d.querySelector("#kz-kirp-piksel")?.addEventListener("change",D=>{o=D.target.checked,A()});const O=()=>{document.removeEventListener("keydown",L),d.remove()},L=D=>{D.key==="Escape"&&(D.preventDefault(),O())};document.addEventListener("keydown",L);const H=d.querySelector("#kz-kirp-uygula");H?.addEventListener("click",()=>{H.disabled||(H.disabled=!0,H.textContent="Kaydediliyor…",ik(i,e,t,{...b},r,o,c,l).then(()=>O()).catch(D=>{H.disabled=!1,H.innerHTML=`${X("check")} Uygula`,se(String(D),"err")}))}),d.querySelector("#kz-kirp-kapat")?.addEventListener("click",O),d.querySelector("#kz-kirp-iptal")?.addEventListener("click",O),d.addEventListener("pointerdown",D=>{D.target===d&&O()}),A()}function sk(i,e,t){const n=document.createElement("canvas");n.width=We,n.height=Nt;const a=n.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("tuval yok");a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,We,Nt);const s=_u(a);if(ai(s))throw new Error("pafta boş görünüyor");const r=Lt(e);cn[e].push(r.slice()),cn[e].length>Rl&&cn[e].shift(),Oa[e].length=0;for(let o=0;o<Cn;o++)r[o]=s[o];Gt[e]=!1,Ht[e]=null,ca[e]=!1,$n(i,e),ji(i,e),se("Pafta okundu — 64×32 atlas yüklendi.")}async function rk(i,e,t){try{const n=await jE(t);if(!n)return;const a=n.width/Math.max(1,n.height);if(Math.abs(a-2)<.02&&n.height>=32&&n.height<=128){sk(i,e,n);return}ak(i,e,n)}catch(n){se(String(n),"err")}}async function ok(i,e){let t;try{t=await re("cmd_kozmetik_oku")}catch{return!1}const n=e==="pelerin"?t.pelerin_dosya:t.kanat_dosya;if(!n)return!1;const a=e==="pelerin"?t.pelerin:t.kanat;if(Array.isArray(a)&&a.length===Cn&&!ai(a)){const s=Lt(e);for(let r=0;r<Cn;r++)s[r]=a[r]??"";Gt[e]=!1,Ht[e]=null}else Gt[e]=!0,Ht[e]=String(n);return e==="pelerin"?gr=!0:_r=!0,$n(i,e),ji(i,e),!0}async function Ll(i,e){const t=Lt(e),n=!ai(t),a=e==="pelerin"?"Pelerin":"Elitra";if(Gt[e]){se(`${a} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);return}if(!n&&!ca[e]){const d=await ok(i,e);se(d?`${a} diskte kayıtlı — silmek için "Kaldır"ı kullan.`:`Kaydedilecek bir ${a.toLocaleLowerCase("tr")} tasarımı yok.`);return}const s=i.querySelector(`#kz-${e}-kaydet`),r=s?s.innerHTML:"",o=`${Date.now()}-${Math.random()}`,c=(d,h)=>{s&&(s.dataset.jeton=o,s.classList.remove("tamam","hata","bekliyor"),s.classList.add(h),s.textContent=d,s.disabled=!0)},l=d=>{s&&window.setTimeout(()=>{s.dataset.jeton===o&&(s.innerHTML=r,s.disabled=!1,s.classList.remove("tamam","hata","bekliyor"))},d)};c("Kaydediliyor…","bekliyor");try{const d=await yu(e,t.slice());ca[e]=!1;try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?gr=n:_r=n,ch(i,e),c("Kaydedildi ✓","tamam"),l(1800),!n){se(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?se(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):se(`${a} kaydedildi (yerel). Sunucu: ${LE(d.hata||"ulaşılamadı")}`)}catch(d){c("Kaydedilemedi","hata"),l(2200),se(String(d),"err")}}let Ir=null;function lk(i){if(!Ir||!Ir.isConnected)return;const e=i.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||!(i.ctrlKey||i.metaKey)||i.altKey)return;const t=i.key.toLowerCase();t==="z"&&!i.shiftKey?(i.preventDefault(),$g(Ir,Wt)):(t==="z"&&i.shiftKey||t==="y")&&(i.preventDefault(),Wg(Ir,Wt))}window.addEventListener("keydown",lk);function ck(){Zi.home=kM,Zi.instances=LM,Zi.explore=OM,Zi.news=$M,Zi.settings=Dr,Zi.skins=ah,Zi.kozmetik=PE}let ts=null;const ir=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function dk(){ts||(ts=document.createElement("div"),ts.className="drop-veil",ts.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(ts))}function Ap(){ts?.remove(),ts=null}async function uk(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await re("cmd_route_dropped",{path:i})}catch(n){se(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=sn(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${ir(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(r=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),r())},150)}),!a){se("Kurulum iptal edildi");return}se("Paket indiriliyor — süreç panelinden takip edebilirsin");const s=await re("cmd_import_pack_file",{path:i,name:null});await hn(),st("instances"),se(`${s.name} kuruldu ✓`)}else if(t==="jar"){const n=await xu(`Mod eklenecek kurulum: <b>${ir(e)}</b>`);if(!n)return;await re("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";se(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await xu(`Dünya yüklenecek kurulum: <b>${ir(e)}</b>`);if(!n)return;await re("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),se(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await re("cmd_import_emote_dosyasi",{path:i});se(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await hk(i,e):se(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){se(`Kurulamadı: ${n}`,"err")}}async function hk(i,e){const t=sn(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${ir(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const r=setInterval(()=>{document.body.contains(t.root)||(clearInterval(r),s())},150)}),!n)return;const a=await xu(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await re("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),se(`Eklendi: ${e}`))}function xu(i){return new Promise(e=>{const t=le.instances||[];if(!t.length){se("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=sn(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${ir(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${ir(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const r=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(r)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function fk(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")dk();else if(n==="drop"){Ap();const a=t.paths||[];for(const s of a)await uk(s)}else Ap()})}catch{}}const cl=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let nd=null;function pk(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,s=e.offsetHeight,r=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-s-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let h=i.top+i.height/2-s/2;h<14&&(h=i.bottom+16),e.style.left=`${r(d)}px`,e.style.top=`${o(h)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function Rp(i,e){const t=cl[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");st(t.page);const s=a.querySelector(".tc-step");s.innerHTML=cl.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const r=a.querySelector(".tc-next");r.textContent=e===cl.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",pk(o,a),ra.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function mk(){if(nd||le.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),nd=i;let e=0;const t=async()=>{i.remove(),nd=null,document.removeEventListener("keydown",a),st("home");try{le.config={...le.config,guided_tour_done:!0},await re("cmd_save_settings",{config:le.config}),await hn()}catch{}},n=()=>{if(e+=1,e>=cl.length){t();return}Rp(i,e)},a=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),Rp(i,e)}let Ks=null,dl=null;function Bs(){dl!==null&&(clearInterval(dl),dl=null)}function Cp(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function bu(){try{le.config={...le.config,onboarding_done:!0},await re("cmd_save_settings",{config:le.config}),await hn()}catch{}}function id(i){Bs(),Ks?.remove(),Ks=null,bu(),st("home")}function gk(){if(Ks)return!0;if(le.config?.onboarding_done)return!1;if(!(le.accounts.length===0&&le.instances.length===0))return bu(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),Ks=e;const t=e.querySelector(".ob-card"),n=h=>`<div class="ob-dots">${[0,1,2,3].map(u=>`<i class="${u<=h?"done":""}"></i>`).join("")}</div>`,a=h=>`
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
      ${a({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>id()),t.querySelector("#ob-next")?.addEventListener("click",r)}function r(){Bs(),t.innerHTML=`
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
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Sonra",skipId:"ob-skip"})}
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{Bs(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>id());const h=t.querySelector("#ob-acc-ok"),u=t.querySelector("#ob-next"),f=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),g=t.querySelector("#ob-off-ad"),x=b=>{h.style.display="flex",h.textContent=`✓ Hesap hazır: ${b}`,u.disabled=!1,Bs()};le.accounts.length?x(le.accounts[0]?.name??""):u.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,f.style.display="block",f.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const b=await re("cmd_ms_login_begin");await hn(),f.textContent="",f.style.display="none",x(b?.name??le.accounts[0]?.name??"")}catch(b){f.textContent=String(b),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const b=g.value.trim();if(b.length<3){m.textContent="İsim en az 3 karakter olmalı.",g.focus();return}m.textContent="",p.disabled=!0,p.textContent="…";try{await re("cmd_add_offline_account",{name:b}),await hn(),x(b),p.textContent="✓"}catch(S){m.textContent=String(S),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),g.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),T())}),dl=setInterval(()=>{le.accounts.length&&x(le.accounts[0]?.name??"")},600),u.addEventListener("click",()=>{Bs(),o()})}async function o(){let h=[];try{h=(await re("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${h.map(f=>`<option value="${Cp(f)}">${Cp(f)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",r);let u=null;t.querySelector("#ob-create")?.addEventListener("click",async f=>{const m=f.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{u=await re("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:le.config?.default_ram_mb||4096,java_preset_id:le.config?.default_java_preset||"balanced",standard_mods:!0}});const g=t.querySelector("#ob-inst-ok");g.style.display="flex",g.textContent=`✓ Kurulum hazır: ${u.name}`,m.textContent="✓ Oluşturuldu",await hn(),setTimeout(()=>c(),700)}catch(g){d(`Kurulum oluşturulamadı: ${g}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{l()})}function c(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>Her şey hazır! 🎉</h2>
      <p class="ob-sub">Hesabın bağlandı, ilk paketin kuruldu.</p>
      ${n(3)}
      <div class="ob-step-label">4 / 4 — Hazır</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.7">
        Ana Sayfa'dan <b>Oyna</b>'ya bas — saniyeler içinde oyundasın.<br />
        Modları Paketler → modlar sekmesinden yönet; dosyayı<br />ekrana sürükleyip bırak, otomatik kurulur.
      </p>
      ${a({next:"Oyna'ya Git →",nextId:"ob-done"})}
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>id())}return s(),!0;function l(){Bs(),Ks?.remove(),Ks=null,bu(),st("explore","kind:modpack")}function d(h){bt(()=>Promise.resolve().then(()=>wt),void 0).then(u=>u.toast(h,"err"))}}const _s=Math.PI*2;function Pl(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function _k(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Zl(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,_s),i.fill()}function Lp(i,e){const t=e?_k(Pl(),.88):Pl(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*_s});return{base:e?24:30,spawn:n,step:(a,s,r)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*s*(1+i*s),a.y+=a.vy*s,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(r))},draw:Zl}}function ad(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*_s});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Zl}}function vk(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*_s});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Zl}}function yk(){const i=Pl(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*_s});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,_s),t.stroke()}}}function xk(){const i=Pl(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function Xo(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*_s}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Zl}}function bk(i){switch(i){case"pano":return Lp(.5,!1);case"sahne":return Xo("rgba(255,171,77,0.75)");case"sokum":return Lp(.9,!0);case"afis":return ad("rgba(63,50,38,0.5)");case"standart":return Xo("rgba(147,168,255,0.5)");case"sira":return Xo("rgba(163,230,53,0.85)");case"rihtim":return yk();case"oda":return ad("rgba(224,48,30,0.6)");case"kumas":return ad("rgba(138,122,92,0.5)");case"perde":return Xo("rgba(212,175,55,0.8)");case"buz":return vk();case"skala":return xk();default:return null}}let On=null,Ai=null,Ma=null,Hs=[],_n=0,Vr=0,Zg=1,Jg=33,Jl=!1;function uh(){return Math.min(window.devicePixelRatio||1,1.5)}function sd(){_n&&cancelAnimationFrame(_n),_n=0,Ma=null,Hs=[],On&&(On.remove(),On=null,Ai=null)}function Dl(i){if(_n=0,!Ai||!On||!Ma||Jl||document.hidden)return;if(i-Vr<Jg){_n=requestAnimationFrame(Dl);return}const e=Math.min((i-Vr)/1e3,.06);Vr=i,_n=requestAnimationFrame(Dl);const t=uh();Ai.setTransform(t,0,0,t,0,0),Ai.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(Ma.base*Zg));for(;Hs.length<a;){const s=Ma.spawn(n);s.life=Math.random()*s.max,Hs.push(s)}for(;Hs.length>a;)Hs.pop();for(const s of Hs)s.life+=e,Ma.step(s,e,n),Ai.globalAlpha=s.a,Ma.draw(Ai,s);Ai.globalAlpha=1}function Qg(){Ma&&Ai&&!_n&&!document.hidden&&!Jl&&(Vr=performance.now(),_n=requestAnimationFrame(Dl))}document.addEventListener("visibilitychange",()=>{document.hidden?(_n&&cancelAnimationFrame(_n),_n=0):Qg()});window.addEventListener("blur",()=>{Jl=!0,_n&&cancelAnimationFrame(_n),_n=0});window.addEventListener("focus",()=>{Jl=!1,Qg()});window.addEventListener("resize",()=>{if(!On||!Ai)return;const i=uh();On.width=Math.round(innerWidth*i),On.height=Math.round(innerHeight*i)});function Sk(){const i=String(le.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){sd();return}const n=bk(e);if(!n){sd();return}Zg={low:.45,mid:.9,high:1.6}[i]??1,Jg=1e3/({low:25,mid:30,high:40}[i]??30),sd(),Ma=n;const r=uh();On=document.createElement("canvas"),On.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",On.width=Math.round(innerWidth*r),On.height=Math.round(innerHeight*r),document.body.appendChild(On),Ai=On.getContext("2d"),Vr=performance.now(),_n=requestAnimationFrame(Dl)}function Mk(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function Ek(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function kk(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function wk(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const Tk={yikim:{build:Ek,spot:"3 2"},hedef:{build:kk,spot:"12 12"},nokta:{build:wk,spot:"8 8"}};function Ak(){const i=String(le.config?.cursor_style||"standart"),e=document.documentElement,t=Tk[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(Mk());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const je=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,Rk=`<svg ${je}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,Ck=`<svg ${je}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,Lk=`<svg ${je}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,Pk=`<svg ${je}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,Dk=`<svg ${je}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,Ik=`<svg ${je}><path d="M12 5v14M5 12h14"/></svg>`,zk=`<svg ${je}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,Uk='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',Nk=`<svg ${je}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,Fk=`<svg ${je}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,Ok=`<svg ${je}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,Bk=`<svg ${je}><path d="m7 20.5-3.8-3.8a2 2 0 0 1 0-2.8l9.4-9.4a2 2 0 0 1 2.8 0l4.8 4.8a2 2 0 0 1 0 2.8l-8.4 8.4z"/><path d="M21.5 20.5H8.5"/><path d="m5.5 11.5 8.5 8.5"/></svg>`,Hk=`<svg ${je}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,Gk=`<svg ${je}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,Vk=`<svg ${je}><path d="m4.5 12.5 5 5 10-11"/></svg>`,$k=`<svg ${je}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,Wk=`<svg ${je}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,qk=`<svg ${je}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,Xk=`<svg ${je}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,Yk=`<svg ${je}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,Kk=`<svg ${je}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,Zk=`<svg ${je}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,Jk=`<svg ${je}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,Qk=`<svg ${je}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,jk=`<svg ${je}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,ew=`<svg ${je}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,tw=`<svg ${je}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,nw=`<svg ${je}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,iw=`<svg ${je}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,aw=`<svg ${je}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,sw=`<svg ${je}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,rw=`<svg ${je}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,ow=`<svg ${je}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,lw=`<svg ${je}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,cw=`<svg ${je}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,dw=`<svg ${je}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,uw=`<svg ${je}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,Il={home:Rk,grid:Ck,compass:Lk,news:Pk,gear:Dk,plus:Ik,search:zk,play:Uk,image:Nk,folder:Fk,trash:Ok,eraser:Bk,copy:Hk,back:Gk,check:Vk,user:$k,puzzle:Wk,box:qk,cpu:Xk,args:Yk,term:Kk,chart:Zk,dl:Jk,mug:Qk,globe:jk,sparkle:ew,file:tw,info:nw,clock:iw,stop:aw,shirt:sw,brush:rw,bucket:ow,picker:lw,undo:cw,redo:dw,lock:uw};function X(i,e=""){const t=Il[i]||Il.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const Yo='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',Ko=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Tr={min:`<svg ${Yo}>${Ko('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${Yo}>${Ko('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${Yo}>${Ko('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${Yo}>${Ko('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},ar=window.__TAURI__,hw=ar.core,fw=ar.event,re=(i,e={})=>hw.invoke(i,e),St=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),yi=(i,e)=>fw.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=Il[t]||Il.info,i.replaceWith(n)};const Ql=i=>re("plugin:opener|open_url",{url:i}),jg=i=>re("plugin:opener|open_path",{path:i}),le={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function hn(i=!1){const e=await re("cmd_get_state");le.config=e.config,le.accounts=e.accounts,le.instances=e.instances,le.featured_versions=e.featured_versions,le.curseforge=e.curseforge,le.sys=e.sys,Ri(),tc(),i&&st(hh)}const Pp=tc;function Ri(){if(!le.config)return;const i=le.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(le.config.tema_ozel||{})[n]||{},s=n==="sahne"?le.config.custom_accent:"",r=String(a.accent||s||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),Sk(),Ak()}const pw=Ri;function Gi(){return le.accounts.find(i=>i.id===le.config?.last_selected_account)||le.accounts[0]||null}function jl(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function e0(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function ec(i){const e=e0(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function mw(){const i=document.getElementById("pill-ram");if(!i||!le.sys)return;const t=le.instances[0]?.ram_mb||le.config?.default_ram_mb||4096,n=le.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),r=`${(t/1024).toFixed(1)} GB`;s?L_(s,r):i.innerHTML=`RAM <b id="ram-pill-val">${r}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const Ci=i=>document.querySelector(i);function vn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function _o(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function sr(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function gw(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function $r(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ze={activeId:null};function se(i,e="ok"){const t=vn(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Ar=[];function sn(i){const e=vn(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Ar.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const s=Ar.indexOf(e);s>=0&&Ar.splice(s,1),e.remove()},a=s=>{s.key==="Escape"&&Ar[Ar.length-1]===e&&(s.preventDefault(),s.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",s=>{s.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Zi={},ea={};let Dp="home",hh="home";function st(i,e){const t=Ci("#content");t&&(hh=i,Dp=i,ea.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===Dp)}),P_(t,()=>{t.innerHTML="";const n=Zi[i];n&&n(t),Lm(t)}))}const _w=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function t0(){const i=Ci("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Tr.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Tr.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Tr.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${_w.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${X(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=ar.window.getCurrentWindow();Ci("#tb-min")?.addEventListener("click",()=>t.minimize()),Ci("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ze.activeId){t.minimize(),se("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};Ci("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(a=>{Ze.activeId&&(a?.preventDefault?.(),t.minimize(),se("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=Ci("#tb-max"),s=o=>{a&&(a.innerHTML=o?Tr.restore:Tr.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},r=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(r):ar.event?.listen&&ar.event.listen("tauri://resize",r),r()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>st(a.dataset.page))}),tc(),Ci("#rail-account")?.addEventListener("click",()=>{le.accounts.length?st("settings"):Ln()}),Bu(Array.from(document.querySelectorAll(".rail-item")))}function tc(){const i=Ci("#rail-account");if(!i)return;const e=Gi();if(!e){i.innerHTML=`<span class="ra-head ph">${X("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${jl(e)}" draggable="false" ${ec(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let Zo=null;function Ln(i){if(Zo){Zo.root.querySelector("#off-name")?.focus();return}const e=sn(`
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
      <button class="btn primary lg" id="ms-go">${X("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,Zo=null,e.close())};Zo={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const s=t.querySelector("#off-name").value.trim();if(s.length<3)return se("İsim en az 3 karakter olmalı","err");try{await re("cmd_add_offline_account",{name:s}),await hn(!0),Pp(),se(`Hoş geldin, ${s}!`),a(),i?.()}catch(r){se(String(r),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const s=t.querySelector("#ms-status"),r=t.querySelector("#ms-go");r.disabled=!0,s.style.display="block",s.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await re("cmd_ms_login_begin");await hn(!0),Pp(),se(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){s.textContent=String(o),r.disabled=!1}})}let Jo=0;async function vw(i){if(!le.accounts.length){Ln();return}if(Ze.activeId){se("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++Jo;Ze.activeId=i;const{root:t,close:n}=sn(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),s=t.querySelector("#lp-stage"),r=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await yi("launch-progress",f=>{if(e!==Jo)return;const m=f.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,s.textContent=yw(m.stage),r.textContent=m.detail||""}),l=await yi("game-log",f=>{if(e!==Jo)return;o.style.display="block";const m=document.createElement("div");m.textContent=f.payload,o.appendChild(m),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await yi("game-exit",f=>{if(e!==Jo)return;Ze.activeId=null;const m=f.payload?.exit_code??f.payload?.code??-1;m===0?(s.textContent="Oyun kapatıldı",setTimeout(n,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${m})`,r.textContent="Canlı logdan detayları görebilirsin.")}),h=()=>{c(),l(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(h(),u.disconnect())});u.observe(document.body,{childList:!0});try{await re("cmd_launch_instance",{instanceId:i}),s.textContent="Oyun çalışıyor",r.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{h(),n()},1500),await hn(!0)}catch(f){Ze.activeId=null,s.textContent="Başlatılamadı",r.textContent=String(f),r.style.color="var(--danger)"}}function yw(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}yi("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});yi("game-started",i=>{Ze.activeId=i.payload,hn(!0)});yi("game-exit",async()=>{window.__yikimRestart||(Ze.activeId=null,hn(!0))});yi("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&se(`Kuruldu: ${e.filename}`),e.phase==="error"&&se(`Hata: ${e.filename}`,"err")});let zn=null,Ip;yi("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!zn||!document.body.contains(zn))&&(zn=document.createElement("div"),zn.className="sm-panel",zn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(zn)),clearTimeout(Ip);const t=zn.querySelector("#sm-count"),n=zn.querySelector("#sm-fill"),a=zn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,a.appendChild(s);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(zn.querySelector(".sm-title").textContent="Standart modlar hazır",Ip=setTimeout(()=>{zn?.remove(),zn=null},4e3))});yi("mod-install-progress",i=>{i.payload.phase});async function n0(){try{await hn(),ck(),t0(),st("home"),fk(),gk()||mk(),xw()}catch(i){bw(i)}}async function xw(){try{const e=await(await bt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=sn(`
      <h2>Güncelleme Var</h2>
      <div class="sub">YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(e.body||"Değişiklik notu yok.").split(`
`).map(a=>`<div>${a}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        <button class="btn ghost" id="upd-later">Sonra</button>
        <button class="btn primary" id="upd-go">İndir ve Kur</button>
      </div>
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const a=t.querySelector("#upd-go");a.disabled=!0,a.textContent="İndiriliyor…";try{let s=0,r=0;await e.download(o=>{switch(o.event){case"Started":r=o.data.contentLength??0;break;case"Progress":s+=o.data.chunkLength;break;case"Finished":a.textContent="Kuruluyor…";break}r>0&&(a.textContent=`İndiriliyor… %${Math.round(s/r*100)}`)}),await e.install(),se("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{ar.process.exit(0)}catch{window.location.reload()}},900)}catch(s){a.disabled=!1,a.textContent="İndir ve Kur",se(`Güncelleme başarısız: ${s}`,"err")}})}catch{}}function bw(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function Sw(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}n0();Sw();const wt=Object.freeze(Object.defineProperty({__proto__:null,$:Ci,applyTheme:pw,applyWorld:Ri,boot:n0,currentAccount:Gi,get currentPage(){return hh},el:vn,enterStage:Lm,fileSrc:St,fmtBytes:_o,fmtDuration:sr,fmtSpeed:gw,headAttrs:ec,headFallbackUrl:e0,headUrl:jl,icon:X,invoke:re,lamp:$r,launch:Ze,launchInstance:vw,listen:yi,nav:ea,navigate:st,openExternal:Ql,openLoginModal:Ln,openModal:sn,openPath:jg,pages:Zi,refreshState:hn,renderAccountPill:tc,setupShell:t0,state:le,switchPress:Hu,toast:se,updateRamPill:mw},Symbol.toStringTag,{value:"Module"}));
