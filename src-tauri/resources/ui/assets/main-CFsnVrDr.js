import"./theme-DsW0LP6A.js";const Am="modulepreload",km=function(i){return"/"+i},fu={},_t=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=km(c),c in fu)return;fu[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Am,l||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};function Li(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function dh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},md,Wt,bt,$n=1e8,ht=1/$n,ac=Math.PI*2,Rm=ac/4,Cm=0,uh=Math.sqrt,Lm=Math.cos,Pm=Math.sin,$t=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},gd=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},gn=function(e){return e!==!1},_d=function(){return typeof window<"u"},Is=function(e){return Rt(e)||$t(e)},fh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,Dm=/random\([^)]+\)/g,Im=/,\s*/g,hu=/(?:-?\.?\d|\.)+/gi,hh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ph=/[+-]=-?[.\d]+/,Um=/[^,'"\[\]\s]+/gi,Nm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,di,rc,vd,Un={},Eo={},mh,gh=function(e){return(Eo=kr(e,Un))&&Sn},yd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ds=function(e,t){return!t&&console.warn(e)},_h=function(e,t){return e&&(Un[e]=t)&&Eo&&(Eo[e]=t)||Un},us=function(){return 0},Fm={suppressEvents:!0,isStart:!0,kill:!1},co={suppressEvents:!0,kill:!1},Om={suppressEvents:!0},xd={},da=[],sc={},vh,Tn={},rl={},pu=30,uo=[],bd="",Sd=function(e){var t=e[0],n,a;if(bi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=uo.length;a--&&!uo[a].targetTest(t););n=uo[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Bh(e[a],n)))||e.splice(a,1);return e},Ua=function(e){return e._gsap||Sd(Wn(e))[0]._gsap},yh=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():gd(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},yr=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},zm=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},wo=function(){var e=da.length,t=da.slice(0),n,a;for(sc={},da.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Md=function(e){return!!(e._initted||e._startAt||e.add)},xh=function(e,t,n,a){da.length&&!Wt&&wo(),e.render(t,n,!!(Wt&&t<0&&Md(e))),da.length&&!Wt&&wo()},bh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Um).length<2?t:$t(e)?e.trim():e},Sh=function(e){return e},Nn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bm=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},kr=function(e,t){for(var n in t)e[n]=t[n];return e},mu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},To=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},es=function(e){var t=e.parent||wt,n=e.keyframes?Bm(tn(e.keyframes)):Nn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hm=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Mh=function(e,t,n,a,r){var s=e[a],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},Go=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[a]===t&&(e[a]=r),t._next=t._prev=t.parent=null},fa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Na=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},oc=function(e,t,n,a){return e._startAt&&(Wt?e._startAt.revert(co):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},Vm=function i(e){return!e||e._ts&&i(e.parent)},gu=function(e){return e._repeat?Rr(e._tTime,e=e.duration()+e._rDelay)*e:0},Rr=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Ao=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},$o=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||Na(n,e)),e},Eh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ao(e.rawTime(),t),(!t._dur||Es(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),Na(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},mi=function(e,t,n,a){return t.parent&&fa(t),t._start=Et((Bi(n)?n:n||e!==wt?Bn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mh(e,t,"_first","_last",e._sort?"_start":0),lc(t)||(e._recent=t),a||Eh(e,t),e._ts<0&&$o(e,e._tTime),e},wh=function(e,t){return(Un.ScrollTrigger||yd("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Th=function(e,t,n,a,r){if(wd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vh!==Cn.frame)return da.push(e),e._lazy=[r,a],1},$m=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},lc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wm=function(e,t,n,a){var r=e.ratio,s=t<0||!t&&(!e._start&&$m(e)&&!(!e._initted&&lc(e))||(e._ts<0||e._dp._ts<0)&&!lc(e))?0:1,o=e._rDelay,c=0,l,d,u;if(o&&e._repeat&&(c=Es(0,e._tDur,t),d=Rr(c,o),e._yoyo&&d&1&&(s=1-s),d!==Rr(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Wt||a||e._zTime===ht||!t&&e._zTime){if(!e._initted&&Th(e,t,a,n,c))return;for(u=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&oc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&fa(e,1),!n&&!Wt&&(Pn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},qm=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},Cr=function(e,t,n,a){var r=e._repeat,s=Et(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Et(s*(r+1)+e._rDelay*r):s,o>0&&!a&&$o(e,e._tTime=e._tDur*o),e.parent&&Vo(e),n||Na(e.parent,e),e},_u=function(e){return e instanceof mn?Na(e):Cr(e,e._dur)},Xm={_start:0,endTime:us,totalDuration:us},Bn=function i(e,t,n){var a=e.labels,r=e._recent||Xm,s=e.duration()>=$n?r.endTime(!1):e._dur,o,c,l;return $t(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=s),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(tn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:s+c)):t==null?s:+t},ts=function(e,t,n){var a=Bi(t[1]),r=(a?2:1)+(e<2?0:1),s=t[r],o,c;if(a&&(s.duration=t[1]),s.parent=n,e){for(o=s,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=gn(c.vars.inherit)&&c.parent;s.immediateRender=gn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ut(t[0],s,t[r+1])},ga=function(e,t){return e||e===0?t(e):t},Es=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!$t(e)||!(t=Nm.exec(e))?"":t[1]},Ym=function(e,t,n){return ga(n,function(a){return Es(e,t,a)})},cc=[].slice,Ah=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==di},Km=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var r;return $t(a)&&!t||Ah(a,1)?(r=n).push.apply(r,Wn(a)):n.push(a)})||n},Wn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(rc||!Lr())?cc.call((t||vd).querySelectorAll(e),0):tn(e)?Km(e,n):Ah(e)?cc.call(e,0):e?[e]:[]},dc=function(e){return e=Wn(e)[0]||ds("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?ds("Invalid scope")||vd.createElement("div"):e)}},kh=function(e){return e.sort(function(){return .5-Math.random()})},Rh=function(e){if(Rt(e))return e;var t=bi(e)?e:{each:e},n=Fa(t.ease),a=t.from||0,r=parseFloat(t.base)||0,s={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,u=a;return $t(a)?d=u={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],u=a[1]),function(f,h,m){var _=(m||t).length,p=s[_],g,b,T,x,M,E,A,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,$n])[1],!w){for(A=-$n;A<(A=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=s[_]=[],g=c?Math.min(w,_)*d-.5:a%w,b=w===$n?0:c?_*u/w-.5:a/w|0,A=0,v=$n,E=0;E<_;E++)T=E%w-g,x=b-(E/w|0),p[E]=M=l?Math.abs(l==="y"?x:T):uh(T*T+x*x),M>A&&(A=M),M<v&&(v=M);a==="random"&&kh(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:l?l==="y"?_/w:w:Math.max(w,_/w))||0)*(a==="edges"?-1:1),p.b=_<0?r-_:r,p.u=jt(t.amount||t.each)||0,n=n&&_<0?lg(n):n}return _=(p[f]-p.min)/p.max||0,Et(p.b+(n?n(_):_)*p.v)+p.u}},uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Et(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(Bi(n)?0:jt(n))}},Ch=function(e,t){var n=tn(e),a,r;return!n&&bi(e)&&(a=n=e.radius||$n,e.values?(e=Wn(e.values),(r=!Bi(e[0]))&&(a*=a)):e=uc(e.increment)),ga(t,n?Rt(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),c=parseFloat(r?s.y:0),l=$n,d=0,u=e.length,f,h;u--;)r?(f=e[u].x-o,h=e[u].y-c,f=f*f+h*h):f=Math.abs(e[u]-o),f<l&&(l=f,d=u);return d=!a||l<=a?e[d]:s,r||d===s||Bi(s)?d:d+jt(s)}:uc(e))},Lh=function(e,t,n,a){return ga(tn(e)?!t:n===!0?!!(n=0):!a,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},Zm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(r,s){return s(r)},a)}},Jm=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},Qm=function(e,t,n){return Dh(e,t,0,1,n)},Ph=function(e,t,n){return ga(n,function(a){return e[~~t(a)]})},jm=function i(e,t,n){var a=t-e;return tn(e)?Ph(e,i(0,e.length),t):ga(n,function(r){return(a+(r-e)%a)%a+e})},eg=function i(e,t,n){var a=t-e,r=a*2;return tn(e)?Ph(e,i(0,e.length-1),t):ga(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},fs=function(e){return e.replace(Dm,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Im);return Lh(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},Dh=function(e,t,n,a,r){var s=t-e,o=a-n;return ga(r,function(c){return n+((c-e)/s*o||0)})},tg=function i(e,t,n,a){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var s=$t(e),o={},c,l,d,u,f;if(n===!0&&(a=1)&&(n=null),s)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(d=[],u=e.length,f=u-2,l=1;l<u;l++)d.push(i(e[l-1],e[l]));u--,r=function(m){m*=u;var _=Math.min(f,~~m);return d[_](m-_)},n=t}else a||(e=kr(tn(e)?[]:{},e));if(!d){for(c in t)Ed.call(o,e,c,"get",t[c]);r=function(m){return kd(m,o)||(s?e.p:e)}}}return ga(n,r)},vu=function(e,t,n){var a=e.labels,r=$n,s,o,c;for(s in a)o=a[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=s,r=o);return c},Pn=function(e,t,n){var a=e.vars,r=a[t],s=bt,o=e._ctx,c,l,d;if(r)return c=a[t+"Params"],l=a.callbackScope||e,n&&da.length&&wo(),o&&(bt=o),d=c?r.apply(l,c):r.call(l),bt=s,d},Xr=function(e){return fa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&Pn(e,"onInterrupt"),e},mr,Ih=[],Uh=function(e){if(e)if(e=!e.name&&e.default||e,_d()||e.headless){var t=e.name,n=Rt(e),a=t&&!n&&e.init?function(){this._props=[]}:e,r={init:us,render:kd,add:Ed,kill:vg,modifier:_g,rawVars:0},s={targetTest:0,get:0,getSetter:Ad,aliases:{},register:0};if(Lr(),e!==a){if(Tn[t])return;Nn(a,Nn(To(e,r),s)),kr(a.prototype,kr(r,To(e,s))),Tn[a.prop=t]=a,e.targetTest&&(uo.push(a),xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_h(t,a),e.register&&e.register(Sn,a,vn)}else Ih.push(e)},ft=255,Yr={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},sl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Nh=function(e,t,n){var a=e?Bi(e)?[e>>16,e>>8&ft,e&ft]:0:Yr.black,r,s,o,c,l,d,u,f,h,m;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yr[e])a=Yr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&ft,a&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(a=m=e.match(hu),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,s=d<=.5?d*(l+1):d+l-d*l,r=d*2-s,a.length>3&&(a[3]*=1),a[0]=sl(c+1/3,r,s),a[1]=sl(c,r,s),a[2]=sl(c-1/3,r,s);else if(~e.indexOf("="))return a=e.match(hh),n&&a.length<4&&(a[3]=1),a}else a=e.match(hu)||Yr.transparent;a=a.map(Number)}return t&&!m&&(r=a[0]/ft,s=a[1]/ft,o=a[2]/ft,u=Math.max(r,s,o),f=Math.min(r,s,o),d=(u+f)/2,u===f?c=l=0:(h=u-f,l=d>.5?h/(2-u-f):h/(u+f),c=u===r?(s-o)/h+(s<o?6:0):u===s?(o-r)/h+2:(r-s)/h+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},Fh=function(e){var t=[],n=[],a=-1;return e.split(ua).forEach(function(r){var s=r.match(pr)||[];t.push.apply(t,s),n.push(a+=s.length+1)}),t.c=n,t},yu=function(e,t,n){var a="",r=(e+a).match(ua),s=t?"hsla(":"rgba(",o=0,c,l,d,u;if(!r)return e;if(r=r.map(function(f){return(f=Nh(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(d=Fh(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(ua,"1").split(pr),u=l.length-1;o<u;o++)a+=l[o]+(~c.indexOf(o)?r.shift()||s+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!l)for(l=e.split(ua),u=l.length-1;o<u;o++)a+=l[o]+r[o];return a+l[u]},ua=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yr)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),ng=/hsl[a]?\(/,Oh=function(e){var t=e.join(" "),n;if(ua.lastIndex=0,ua.test(t))return n=ng.test(t),e[1]=yu(e[1],n),e[0]=yu(e[0],n,Fh(e[1])),!0},hs,Cn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,r=1e3/240,s=r,o=[],c,l,d,u,f,h,m=function _(p){var g=i()-a,b=p===!0,T,x,M,E;if((g>e||g<0)&&(n+=g-t),a+=g,M=a-n,T=M-s,(T>0||b)&&(E=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,s+=T+(T>=r?4:r-T),x=1),b||(c=l(_)),x)for(h=0;h<o.length;h++)o[h](M,f,E,p)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){mh&&(!rc&&_d()&&(di=rc=window,vd=di.document||{},Un.gsap=Sn,(di.gsapVersions||(di.gsapVersions=[])).push(Sn.version),gh(Eo||di.GreenSockGlobals||!di.gsap&&di||{}),Ih.forEach(Uh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=d||function(p){return setTimeout(p,s-u.time*1e3+1|0)},hs=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),hs=0,l=us},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),s=u.time*1e3+r},add:function(p,g,b){var T=g?function(x,M,E,A){p(x,M,E,A),u.remove(T)}:p;return u.remove(p),o[b?"unshift":"push"](T),Lr(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},u}(),Lr=function(){return!hs&&Cn.wake()},je={},ig=/^[\d.\-M][\d.\-,\s]/,ag=/["']/g,rg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],r=1,s=n.length,o,c,l;r<s;r++)c=n[r],o=r!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(ag,"").trim():+l,a=c.substr(o+1).trim();return t},sg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},og=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rg(t[1])]:sg(e).split(",").map(bh)):je._CE&&ig.test(e)?je._CE("",e):n},lg=function(e){return function(t){return 1-e(1-t)}},Fa=function(e,t){return e&&(Rt(e)?e:je[e]||og(e))||t},$a=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:a},s;return _n(e,function(o){je[o]=Un[o]=r,je[s=o.toLowerCase()]=n;for(var c in r)je[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=je[o+"."+c]=r[c]}),r},zh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ol=function i(e,t,n){var a=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/ac*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*Pm((d-s)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:zh(o);return r=ac/r,c.config=function(l,d){return i(e,l,d)},c},ll=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:zh(n);return a.config=function(r){return i(e,r)},a};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;$a(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;$a("Elastic",ol("in"),ol("out"),ol());(function(i,e){var t=1/e,n=2*t,a=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};$a("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);$a("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});$a("Circ",function(i){return-(uh(1-i*i)-1)});$a("Sine",function(i){return i===1?1:-Lm(i*Rm)+1});$a("Back",ll("in"),ll("out"),ll());je.SteppedEase=je.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),r=t?1:0,s=1-ht;return function(o){return((a*Es(0,s,o)|0)+r)*n}}};cs.ease=je["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return bd+=i+","+i+"Params,"});var Bh=function(e,t){this.id=Cm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yh,this.set=t?t.getSetter:Ad},ps=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cr(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),hs||Cn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(Lr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($o(this,n),!r._dp||r.parent||Eh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xh(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gu(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,a):this._repeat?Rr(this._tTime,r)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(Es(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),Vo(this),Gm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&mi(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ao(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Om);var a=Wt;return Wt=n,Md(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=a,this},e.globalTime=function(n){for(var a=this,r=arguments.length?n:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_u(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,_u(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(Bn(this,n),gn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,gn(a)),this._dur||(this._zTime=-ht),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=a&&r<this.endTime(!0)-ht)},e.eventCallback=function(n,a,r){var s=this.vars;return arguments.length>1?(a?(s[n]=a,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=a)):delete s[n],this):s[n]},e.then=function(n){var a=this,r=a._prom;return new Promise(function(s){var o=Rt(n)?n:Sh,c=function(){var d=a.then;a.then=null,r&&r(),Rt(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),s(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){Xr(this)},i}();Nn(ps.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var mn=function(i){dh(e,i);function e(n,a){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gn(n.sortChildren),wt&&mi(n.parent||wt,Li(r),a),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&wh(Li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(a,r,s){return ts(0,arguments,this),this},t.from=function(a,r,s){return ts(1,arguments,this),this},t.fromTo=function(a,r,s,o){return ts(2,arguments,this),this},t.set=function(a,r,s){return r.duration=0,r.parent=this,es(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ut(a,r,Bn(this,s),1),this},t.call=function(a,r,s){return mi(this,Ut.delayedCall(0,a,r),s)},t.staggerTo=function(a,r,s,o,c,l,d){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=d,s.parent=this,new Ut(a,s,Bn(this,c)),this},t.staggerFrom=function(a,r,s,o,c,l,d){return s.runBackwards=1,es(s).immediateRender=gn(s.immediateRender),this.staggerTo(a,r,s,o,c,l,d)},t.staggerFromTo=function(a,r,s,o,c,l,d,u){return o.startAt=s,es(o).immediateRender=gn(o.immediateRender),this.staggerTo(a,r,o,c,l,d,u)},t.render=function(a,r,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:Et(a),u=this._zTime<0!=a<0&&(this._initted||!l),f,h,m,_,p,g,b,T,x,M,E,A;if(this!==wt&&d>c&&a>=0&&(d=c),d!==this._tTime||s||u){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),f=d,x=this._start,T=this._ts,g=!T,u&&(l||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,r,s);if(f=Et(d%p),d===c?(_=this._repeat,f=l):(M=Et(d/p),_=~~M,_&&_===M&&(f=l,_--),f>l&&(f=l)),M=Rr(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),E&&_&1&&(f=l-f,A=1),_!==M&&!this._lock){var v=E&&M&1,w=v===(E&&_&1);if(_<M&&(v=!v),o=v?0:d%l?l:d,this._lock=1,this.render(o||(A?0:Et(_*p)),r,!l)._lock=0,this._tTime=d,!r&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=v?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=qm(this,Et(o),Et(f)),b&&(d-=f-(f=b._start))),this._tTime=d,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!r&&!M&&(Pn(this,"onStart"),this._tTime!==d))return this;if(f>=o&&a>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,s),f!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=-ht);break}}h=m}else{h=this._last;for(var k=a<0?a:f;h;){if(m=h._prev,(h._act||k<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(k-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(k-h._start)*h._ts,r,s||Wt&&Md(h)),f!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=k?-ht:ht);break}}h=m}}if(b&&!r&&(this.pause(),b.render(f>=o?0:-ht)._zTime=f>=o?1:-1,this._ts))return this._start=x,Vo(this),this.render(a,r,s);this._onUpdate&&!r&&Pn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&fa(this,1),!r&&!(a<0&&!o)&&(d||o||!c)&&(Pn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,r){var s=this;if(Bi(r)||(r=Bn(this,r,a)),!(a instanceof ps)){if(tn(a))return a.forEach(function(o){return s.add(o,r)}),this;if($t(a))return this.addLabel(a,r);if(Rt(a))a=Ut.delayedCall(0,a);else return this}return this!==a?mi(this,a,r):this},t.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-$n);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ut?r&&c.push(l):(s&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,r,s)))),l=l._next;return c},t.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},t.remove=function(a){return $t(a)?this.removeLabel(a):Rt(a)?this.killTweensOf(a):(a.parent===this&&Go(this,a),a===this._recent&&(this._recent=this._last),Na(this))},t.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(Cn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},t.addLabel=function(a,r){return this.labels[a]=Bn(this,r),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,r,s){var o=Ut.delayedCall(0,r||us,s);return o.data="isPause",this._hasPause=1,mi(this,o,Bn(this,a))},t.removePause=function(a){var r=this._first;for(a=Bn(this,a);r;)r._start===a&&r.data==="isPause"&&fa(r),r=r._next},t.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),c=o.length;c--;)ra!==o[c]&&o[c].kill(a,r);return this},t.getTweensOf=function(a,r){for(var s=[],o=Wn(a),c=this._first,l=Bi(r),d;c;)c instanceof Ut?zm(c._targets,o)&&(l?(!ra||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&s.push(c):(d=c.getTweensOf(o,r)).length&&s.push.apply(s,d),c=c._next;return s},t.tweenTo=function(a,r){r=r||{};var s=this,o=Bn(s,a),c=r,l=c.startAt,d=c.onStart,u=c.onStartParams,f=c.immediateRender,h,m=Ut.to(s,Nn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||ht,onStart:function(){if(s.pause(),!h){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());m._dur!==p&&Cr(m,p,0,1).render(m._time,!0,!0),h=1}d&&d.apply(m,u||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(a,r,s){return this.tweenTo(r,Nn({startAt:{time:Bn(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),vu(this,Bn(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),vu(this,Bn(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,c=this.labels,l;for(a=Et(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(l in c)c[l]>=s&&(c[l]+=a);return Na(this)},t.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Na(this)},t.totalDuration=function(a){var r=0,s=this,o=s._last,c=$n,l,d,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(u=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,mi(s,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(r-=d,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=Et(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Cr(s,s===wt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(wt._ts&&(xh(wt,Ao(a,wt)),vh=Cn.frame),Cn.frame>=pu){pu+=In.autoSleep||120;var r=wt._first;if((!r||!r._ts)&&In.autoSleep&&Cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Cn.sleep()}}},e}(ps);Nn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cg=function(e,t,n,a,r,s,o){var c=new vn(this._pt,e,t,0,1,qh,null,r),l=0,d=0,u,f,h,m,_,p,g,b;for(c.b=n,c.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=fs(a)),s&&(b=[n,a],s(b,e,t),n=b[0],a=b[1]),f=n.match(al)||[];u=al.exec(a);)m=u[0],_=a.substring(l,u.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[d++]&&(p=parseFloat(f[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:p,c:m.charAt(1)==="="?yr(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},l=al.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(ph.test(a)||g)&&(c.e=0),this._pt=c,c},Ed=function(e,t,n,a,r,s,o,c,l,d){Rt(a)&&(a=a(r||0,e,s));var u=e[t],f=n!=="get"?n:Rt(u)?l?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,h=Rt(u)?l?pg:$h:Td,m;if($t(a)&&(~a.indexOf("random(")&&(a=fs(a)),a.charAt(1)==="="&&(m=yr(f,a)+(jt(f)||0),(m||m===0)&&(a=m))),!d||f!==a||fc)return!isNaN(f*a)&&a!==""?(m=new vn(this._pt,e,t,+f||0,a-(f||0),typeof u=="boolean"?gg:Wh,0,h),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&yd(t,a),cg.call(this,e,t,f,a,h,c||In.stringFilter,l))},dg=function(e,t,n,a,r){if(Rt(e)&&(e=ns(e,r,t,n,a)),!bi(e)||e.style&&e.nodeType||tn(e)||fh(e))return $t(e)?ns(e,r,t,n,a):e;var s={},o;for(o in e)s[o]=ns(e[o],r,t,n,a);return s},Hh=function(e,t,n,a,r,s){var o,c,l,d;if(Tn[e]&&(o=new Tn[e]).init(r,o.rawVars?t[e]:dg(t[e],a,r,s,n),n,a,s)!==!1&&(n._pt=c=new vn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==mr))for(l=n._ptLookup[n._targets.indexOf(r)],d=o._props.length;d--;)l[o._props[d]]=c;return o},ra,fc,wd=function i(e,t,n){var a=e.vars,r=a.ease,s=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,u=a.yoyoEase,f=a.keyframes,h=a.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!md,x=e.timeline,M=a.easeReverse||u,E,A,v,w,k,C,N,O,L,z,X,$,te;if(x&&(!f||!r)&&(r="none"),e._ease=Fa(r,cs.ease),e._rEase=M&&(Fa(M)||e._ease),e._from=!x&&!!a.runBackwards,e._from&&(e.ratio=1),!x||f&&!a.stagger){if(O=p[0]?Ua(p[0]).harness:0,$=O&&a[O.prop],E=To(a,xd),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!h?_.render(-1,!0):_.revert(d&&m?co:Fm),_._lazy=0),s){if(fa(e._startAt=Ut.set(p,Nn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&gn(c),startAt:null,delay:0,onUpdate:l&&function(){return Pn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!h)&&e._startAt.revert(co),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),v=Nn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&gn(c),immediateRender:o,stagger:0,parent:g},E),$&&(v[O.prop]=$),fa(e._startAt=Ut.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(co):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&gn(c)||c&&!m,A=0;A<p.length;A++){if(k=p[A],N=k._gsap||Sd(p)[A]._gsap,e._ptLookup[A]=z={},sc[N.id]&&da.length&&wo(),X=b===p?A:b.indexOf(k),O&&(L=new O).init(k,$||E,e,X,b)!==!1&&(e._pt=w=new vn(e._pt,k,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Y){z[Y]=w}),L.priority&&(C=1)),!O||$)for(v in E)Tn[v]&&(L=Hh(v,E,e,X,k,b))?L.priority&&(C=1):z[v]=w=Ed.call(e,k,v,"get",E[v],X,b,0,a.stringFilter);e._op&&e._op[A]&&e.kill(k,e._op[A]),T&&e._pt&&(ra=e,wt.killTweensOf(k,z,e.globalTime(t)),te=!e.parent,ra=0),e._pt&&c&&(sc[N.id]=1)}C&&Xh(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!te,f&&t<=0&&x.render($n,!0,!0)},ug=function(e,t,n,a,r,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(d=f[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return fc=1,e.vars[t]="+=0",wd(e,o),fc=0,c?ds(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)u=l[h],d=u._pt||u,d.s=(a||a===0)&&!r?a:d.s+(a||0)+s*d.c,d.c=n-d.s,u.e&&(u.e=Lt(n)+jt(u.e)),u.b&&(u.b=d.s+jt(u.b))},fg=function(e,t){var n=e[0]?Ua(e[0]).harness:0,a=n&&n.aliases,r,s,o,c;if(!a)return t;r=kr({},t);for(s in a)if(s in r)for(c=a[s].split(","),o=c.length;o--;)r[c[o]]=r[s];return r},hg=function(e,t,n,a){var r=t.ease||a||"power1.inOut",s,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ns=function(e,t,n,a,r){return Rt(e)?e.call(t,n,a,r):$t(e)&&~e.indexOf("random(")?fs(e):e},Gh=bd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vh={};_n(Gh+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Vh[i]=1});var Ut=function(i){dh(e,i);function e(n,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=i.call(this,s?a:es(a))||this;var c=o.vars,l=c.duration,d=c.delay,u=c.immediateRender,f=c.stagger,h=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=a.parent||wt,b=(tn(n)||fh(n)?Bi(n[0]):"length"in a)?[n]:Wn(n),T,x,M,E,A,v,w,k;if(o._targets=b.length?Sd(b):ds("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||f||Is(l)||Is(d)){a=o.vars;var C=a.easeReverse||a.yoyoEase;if(T=o.timeline=new mn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),T.kill(),T.parent=T._dp=Li(o),T._start=0,f||Is(l)||Is(d)){if(E=b.length,w=f&&Rh(f),bi(f))for(A in f)~Gh.indexOf(A)&&(k||(k={}),k[A]=f[A]);for(x=0;x<E;x++)M=To(a,Vh),M.stagger=0,C&&(M.easeReverse=C),k&&kr(M,k),v=b[x],M.duration=+ns(l,Li(o),x,v,b),M.delay=(+ns(d,Li(o),x,v,b)||0)-o._delay,!f&&E===1&&M.delay&&(o._delay=d=M.delay,o._start+=d,M.delay=0),T.to(v,M,w?w(x,v,b):0),T._ease=je.none;T.duration()?l=d=0:o.timeline=0}else if(m){es(Nn(T.vars.defaults,{ease:"none"})),T._ease=Fa(m.ease||a.ease||"none");var N=0,O,L,z;if(tn(m))m.forEach(function(X){return T.to(b,X,">")}),T.duration();else{M={};for(A in m)A==="ease"||A==="easeEach"||hg(A,m[A],M,m.easeEach);for(A in M)for(O=M[A].sort(function(X,$){return X.t-$.t}),N=0,x=0;x<O.length;x++)L=O[x],z={ease:L.e,duration:(L.t-(x?O[x-1].t:0))/100*l},z[A]=L.v,T.to(b,z,N),N+=z.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return h===!0&&!md&&(ra=Li(o),wt.killTweensOf(b),ra=0),mi(g,Li(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(u||!l&&!m&&o._start===Et(g._time)&&gn(u)&&Vm(Li(o))&&g.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-d)||0)),p&&wh(Li(o),p),o}var t=e.prototype;return t.render=function(a,r,s){var o=this._time,c=this._tDur,l=this._dur,d=a<0,u=a>c-ht&&!d?c:a<ht?0:a,f,h,m,_,p,g,b,T;if(!l)Wm(this,a,r,s);else if(u!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=u,T=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+a,r,s);if(f=Et(u%_),u===c?(m=this._repeat,f=l):(p=Et(u/_),m=~~p,m&&m===p?(f=l,m--):f>l&&(f=l)),g=this._yoyo&&m&1,g&&(f=l-f),p=Rr(this._tTime,_),f===o&&!s&&this._initted&&m===p)return this._tTime=u,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=s=1,this.render(Et(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Th(this,d?a:f,s,r,u))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(a,r,s)}if(this._rEase){var x=f<o;if(x!==this._inv){var M=x?o:l-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/l);if(this._from&&(this.ratio=b=1-b),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!p&&(Pn(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(d&&oc(this,a,r,s),Pn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&Pn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&oc(this,a,!0,!0),(a||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&fa(this,1),!r&&!(d&&!o)&&(u||o||g)&&(Pn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,r,s,o,c){hs||Cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||wd(this,l),d=this._ease(l/this._dur),ug(this,a,r,s,o,d,l,c)?this.resetTo(a,r,s,o,1):($o(this,0),this.parent||Mh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,ra&&ra.vars.overwrite!==!0)._first||Xr(this),this.parent&&s!==this.timeline.totalDuration()&&Cr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=a?Wn(a):o,l=this._ptLookup,d=this._pt,u,f,h,m,_,p,g;if((!r||r==="all")&&Hm(o,c))return r==="all"&&(this._pt=0),Xr(this);for(u=this._op=this._op||[],r!=="all"&&($t(r)&&(_={},_n(r,function(b){return _[b]=1}),r=_),r=fg(o,r)),g=o.length;g--;)if(~c.indexOf(o[g])){f=l[g],r==="all"?(u[g]=r,m=f,h={}):(h=u[g]=u[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Go(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&d&&Xr(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return ts(1,arguments)},e.delayedCall=function(a,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(a,r,s){return ts(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return wt.killTweensOf(a,r,s)},e}(ps);Nn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new mn,t=cc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Td=function(e,t,n){return e[t]=n},$h=function(e,t,n){return e[t](n)},pg=function(e,t,n,a){return e[t](a.fp,n)},mg=function(e,t,n){return e.setAttribute(t,n)},Ad=function(e,t){return Rt(e[t])?$h:gd(e[t])&&e.setAttribute?mg:Td},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qh=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},kd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_g=function(e,t,n,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,t,n),r=s},vg=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?Go(this,t,"_pt"):t.dep||(n=1),t=a;return!n},yg=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},Xh=function(e){for(var t=e._pt,n,a,r,s;t;){for(n=t._next,a=r;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:r=t,(t._next=a)?a._prev=t:s=t,t=n}e._pt=r},vn=function(){function i(t,n,a,r,s,o,c,l,d){this.t=n,this.s=r,this.c=s,this.p=a,this.r=o||Wh,this.d=c||this,this.set=l||Td,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,r){this.mSet=this.mSet||this.set,this.set=yg,this.m=n,this.mt=r,this.tween=a},i}();_n(bd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return xd[i]=1});Un.TweenMax=Un.TweenLite=Ut;Un.TimelineLite=Un.TimelineMax=mn;wt=new mn({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Oh;var Oa=[],fo={},xg=[],xu=0,bg=0,cl=function(e){return(fo[e]||xg).map(function(t){return t()})},hc=function(){var e=Date.now(),t=[];e-xu>2&&(cl("matchMediaInit"),Oa.forEach(function(n){var a=n.queries,r=n.conditions,s,o,c,l;for(o in a)s=di.matchMedia(a[o]).matches,s&&(c=1),s!==r[o]&&(r[o]=s,l=1);l&&(n.revert(),c&&t.push(n))}),cl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),xu=e,cl("matchMedia"))},Yh=function(){function i(t,n){this.selector=n&&dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bg++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,r){Rt(n)&&(r=a,a=n,n=Rt);var s=this,o=function(){var l=bt,d=s.selector,u;return l&&l!==s&&l.data.push(s),r&&(s.selector=dc(r)),bt=s,u=a.apply(s,arguments),Rt(u)&&s._r.push(u),bt=l,s.selector=d,s.isReverted=!1,u};return s.last=o,n===Rt?o(s,function(c){return s.add(null,c)}):n?s[n]=o:o},e.ignore=function(n){var a=bt;bt=null,n(this),bt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Ut&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,u){return u.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof mn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ut)&&l.revert&&l.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=Oa.length;s--;)Oa[s].id===this.id&&Oa.splice(s,1)},e.revert=function(n){this.kill(n||{})},i}(),Sg=function(){function i(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=i.prototype;return e.add=function(n,a,r){bi(n)||(n={matches:n});var s=new Yh(0,r||this.scope),o=s.conditions={},c,l,d;bt&&!s.selector&&(s.selector=bt.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=n;for(l in n)l==="all"?d=1:(c=di.matchMedia(n[l]),c&&(Oa.indexOf(s)<0&&Oa.push(s),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(hc):c.addEventListener("change",hc)));return d&&a(s,function(u){return s.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return Uh(a)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,a){$t(e)&&(e=Wn(e)[0]);var r=Ua(e||{}).get,s=n?Sh:bh;return n==="native"&&(n=""),e&&(t?s((Tn[t]&&Tn[t].get||r)(e,t,n,a)):function(o,c,l){return s((Tn[o]&&Tn[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var a=e.map(function(d){return Sn.quickSetter(d,t,n)}),r=a.length;return function(d){for(var u=r;u--;)a[u](d)}}e=e[0]||{};var s=Tn[t],o=Ua(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(d){var u=new s;mr._pt=0,u.init(e,n?d+n:d,mr,0,[e]),u.render(1,u),mr._pt&&kd(1,mr)}:o.set(e,c);return s?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,r=Sn.to(e,Nn((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),s=function(c,l,d){return r.resetTo(t,c,l,d)};return s.tween=r,s},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fa(e.ease,cs.ease)),mu(cs,e||{})},config:function(e){return mu(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Un[o]&&ds(t+" effect requires "+o+" plugin.")}),rl[t]=function(o,c,l){return n(Wn(o),Nn(c||{},r),l)},s&&(mn.prototype[t]=function(o,c,l){return this.add(rl[t](o,bi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){je[e]=Fa(t)},parseEase:function(e,t){return arguments.length?Fa(e,t):je},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),a,r;for(n.smoothChildTiming=gn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,a=wt._first;a;)r=a._next,(t||!(!a._dur&&a instanceof Ut&&a.vars.onComplete===a._targets[0]))&&mi(n,a,a._start-a._delay),a=r;return mi(wt,n,0),n},context:function(e,t){return e?new Yh(e,t):bt},matchMedia:function(e){return new Sg(e)},matchMediaRefresh:function(){return Oa.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||hc()},addEventListener:function(e,t){var n=fo[e]||(fo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fo[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:jm,wrapYoyo:eg,distribute:Rh,random:Lh,snap:Ch,normalize:Qm,getUnit:jt,clamp:Ym,splitColor:Nh,toArray:Wn,selector:dc,mapRange:Dh,pipe:Zm,unitize:Jm,interpolate:tg,shuffle:kh},install:gh,effects:rl,ticker:Cn,updateRoot:mn.updateRoot,plugins:Tn,globalTimeline:wt,core:{PropTween:vn,globals:_h,Tween:Ut,Timeline:mn,Animation:ps,getCache:Ua,_removeLinkedListItem:Go,reverting:function(){return Wt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return md=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ko[i]=Ut[i]});Cn.add(mn.updateRoot);mr=ko.to({},{duration:0});var Mg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Eg=function(e,t){var n=e._targets,a,r,s;for(a in t)for(r=n.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=Mg(s,a)),s&&s.modifier&&s.modifier(t[a],e,n[r],a))},dl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var c,l;if($t(r)&&(c={},_n(r,function(d){return c[d]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}Eg(o,r)}}}},Sn=ko.registerPlugin({name:"attr",init:function(e,t,n,a,r){var s,o,c;this.tween=n;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],a,r,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dl("roundProps",uc),dl("modifiers"),dl("snap",Ch))||ko;Ut.version=mn.version=Sn.version="3.15.0";mh=1;_d()&&Lr();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bu,sa,xr,Rd,La,Su,Cd,wg=function(){return typeof window<"u"},Hi={},Ra=180/Math.PI,br=Math.PI/180,Ka=Math.atan2,Mu=1e8,Ld=/([A-Z])/g,Tg=/(left|right|width|margin|padding|x)/i,Ag=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Pg=function(e,t,n){return e.style[t]=n},Dg=function(e,t,n){return e.style.setProperty(t,n)},Ig=function(e,t,n){return e._gsap[t]=n},Ug=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ng=function(e,t,n,a,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},Fg=function(e,t,n,a,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Tt="transform",yn=Tt+"Origin",Og=function i(e,t){var n=this,a=this.target,r=a.style,s=a._gsap;if(e in Hi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Di(a,o)}):this.tfm[e]=s.x?s[e]:Di(a,e),e===yn&&(this.tfm.zOrigin=s.zOrigin);else return _i.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Tt)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=Tt}(r||t)&&this.props.push(e,t,r[e])},Jh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},zg=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ld,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cd(),(!r||!r.isStart)&&!n[Tt]&&(Jh(n),a.zOrigin&&n[yn]&&(n[yn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Qh=function(e,t){var n={target:e,props:[],revert:zg,save:Og};return e._gsap||Sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},jh,mc=function(e,t){var n=sa.createElementNS?sa.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sa.createElement(e);return n&&n.style?n:sa.createElement(e)},Dn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Ld,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,Pr(t)||t,1)||""},Eu="O,Moz,ms,Ms,Webkit".split(","),Pr=function(e,t,n){var a=t||La,r=a.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Eu[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Eu[s]:"")+e},gc=function(){wg()&&window.document&&(bu=window,sa=bu.document,xr=sa.documentElement,La=mc("div")||{style:{}},mc("div"),Tt=Pr(Tt),yn=Tt+"Origin",La.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jh=!!Pr("perspective"),Cd=Sn.core.reverting,Rd=1)},wu=function(e){var t=e.ownerSVGElement,n=mc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",n.appendChild(a),xr.appendChild(n);try{r=a.getBBox()}catch{}return n.removeChild(a),xr.removeChild(n),r},Tu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t,n;try{t=e.getBBox()}catch{t=wu(e),n=1}return t&&(t.width||t.height)||n||(t=wu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tu(e,["x","cx","x1"])||0,y:+Tu(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},ha=function(e,t){if(t){var n=e.style,a;t in Hi&&t!==yn&&(t=Tt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(Ld,"-$1").toLowerCase())):n.removeAttribute(t)}},oa=function(e,t,n,a,r,s){var o=new vn(e._pt,t,n,0,1,s?Zh:Kh);return e._pt=o,o.b=a,o.e=r,e._props.push(n),o},Au={deg:1,rad:1,turn:1},Bg={grid:1,flex:1},pa=function i(e,t,n,a){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=La.style,c=Tg.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=a==="px",h=a==="%",m,_,p,g;if(a===s||!r||Au[a]||Au[s])return r;if(s!=="px"&&!f&&(r=i(e,t,n,"px")),g=e.getCTM&&tp(e),(h||s==="%")&&(Hi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],Lt(h?r/m*u:r/100*m);if(o[c?"width":"height"]=u+(f?s:a),_=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===sa||!_.appendChild)&&(_=sa.body),p=_._gsap,p&&h&&p.width&&c&&p.time===Cn.time&&!p.uncache)return Lt(r/p.width*u);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+a,m=e[d],b?e.style[t]=b:ha(e,t)}else(h||s==="%")&&!Bg[Dn(_,"display")]&&(o.position=Dn(e,"position")),_===e&&(o.position="static"),_.appendChild(La),m=La[d],_.removeChild(La),o.position="absolute";return c&&h&&(p=Ua(_),p.time=Cn.time,p.width=_[d]),Lt(f?m*r/u:m&&r?u/m*r:0)},Di=function(e,t,n,a){var r;return Rd||gc(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(r=gs(e,a),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Co(Dn(e,yn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=Ro[t]&&Ro[t](e,t,n)||Dn(e,t)||yh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?pa(e,t,r,n)+n:r},Hg=function(e,t,n,a){if(!n||n==="none"){var r=Pr(t,e,1),s=r&&Dn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var o=new vn(this._pt,e.style,t,0,1,qh),c=0,l=0,d,u,f,h,m,_,p,g,b,T,x,M;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Dn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(_=e.style[t],e.style[t]=a,a=Dn(e,t)||a,_?e.style[t]=_:ha(e,t)),d=[n,a],Oh(d),n=d[0],a=d[1],f=n.match(pr)||[],M=a.match(pr)||[],M.length){for(;u=pr.exec(a);)p=u[0],b=a.substring(c,u.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=f[l++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),p.charAt(1)==="="&&(p=yr(h,p)+x),g=parseFloat(p),T=p.substr((g+"").length),c=pr.lastIndex-T.length,T||(T=T||In.units[t]||x,c===a.length&&(a+=T,o.e+=T)),x!==T&&(h=pa(e,t,_,T)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?Zh:Kh;return ph.test(a)&&(o.e=0),this._pt=o,o},ku={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gg=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=ku[n]||n,t[1]=ku[a]||a,t.join(" ")},Vg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,r=t.u,s=n._gsap,o,c,l;if(r==="all"||r===!0)a.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Hi[o]&&(c=1,o=o==="transformOrigin"?yn:Tt),ha(n,o);c&&(ha(n,Tt),s&&(s.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",gs(n,1),s.uncache=1,Jh(a)))}},Ro={clearProps:function(e,t,n,a,r){if(r.data!=="isFromStart"){var s=e._pt=new vn(e._pt,t,n,0,0,Vg);return s.u=a,s.pr=-10,s.tween=r,e._props.push(n),1}}},ms=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ru=function(e){var t=Dn(e,Tt);return ip(t)?ms:t.substr(7).match(hh).map(Lt)},Pd=function(e,t){var n=e._gsap||Ua(e),a=e.style,r=Ru(e),s,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ms:r):(r===ms&&!e.offsetParent&&e!==xr&&!n.svg&&(c=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,xr.appendChild(e)),r=Ru(e),c?a.display=c:ha(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):xr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},_c=function(e,t,n,a,r,s){var o=e._gsap,c=r||Pd(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,h=c[0],m=c[1],_=c[2],p=c[3],g=c[4],b=c[5],T=t.split(" "),x=parseFloat(T[0])||0,M=parseFloat(T[1])||0,E,A,v,w;n?c!==ms&&(A=h*p-m*_)&&(v=x*(p/A)+M*(-_/A)+(_*b-p*g)/A,w=x*(-m/A)+M*(h/A)-(h*b-m*g)/A,x=v,M=w):(E=ep(e),x=E.x+(~T[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(T[1]||T[0]).indexOf("%")?M/100*E.height:M)),a||a!==!1&&o.smooth?(g=x-l,b=M-d,o.xOffset=u+(g*h+b*_)-g,o.yOffset=f+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[yn]="0px 0px",s&&(oa(s,o,"xOrigin",l,x),oa(s,o,"yOrigin",d,M),oa(s,o,"xOffset",u,o.xOffset),oa(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},gs=function(e,t){var n=e._gsap||new Bh(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,r=n.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=Dn(e,yn)||"0",d,u,f,h,m,_,p,g,b,T,x,M,E,A,v,w,k,C,N,O,L,z,X,$,te,Y,j,ae,Se,Ae,qe,Fe;return d=u=f=_=p=g=b=T=x=0,h=m=1,n.svg=!!(e.getCTM&&tp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[Tt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Tt]!=="none"?c[Tt]:"")),a.scale=a.rotate=a.translate="none"),A=Pd(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),l=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),_c(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==ms&&(C=A[0],N=A[1],O=A[2],L=A[3],d=z=A[4],u=X=A[5],A.length===6?(h=Math.sqrt(C*C+N*N),m=Math.sqrt(L*L+O*O),_=C||N?Ka(N,C)*Ra:0,b=O||L?Ka(O,L)*Ra+_:0,b&&(m*=Math.abs(Math.cos(b*br))),n.svg&&(d-=M-(M*C+E*O),u-=E-(M*N+E*L))):(Fe=A[6],Ae=A[7],j=A[8],ae=A[9],Se=A[10],qe=A[11],d=A[12],u=A[13],f=A[14],v=Ka(Fe,Se),p=v*Ra,v&&(w=Math.cos(-v),k=Math.sin(-v),$=z*w+j*k,te=X*w+ae*k,Y=Fe*w+Se*k,j=z*-k+j*w,ae=X*-k+ae*w,Se=Fe*-k+Se*w,qe=Ae*-k+qe*w,z=$,X=te,Fe=Y),v=Ka(-O,Se),g=v*Ra,v&&(w=Math.cos(-v),k=Math.sin(-v),$=C*w-j*k,te=N*w-ae*k,Y=O*w-Se*k,qe=L*k+qe*w,C=$,N=te,O=Y),v=Ka(N,C),_=v*Ra,v&&(w=Math.cos(v),k=Math.sin(v),$=C*w+N*k,te=z*w+X*k,N=N*w-C*k,X=X*w-z*k,C=$,z=te),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),h=Lt(Math.sqrt(C*C+N*N+O*O)),m=Lt(Math.sqrt(X*X+Fe*Fe)),v=Ka(z,X),b=Math.abs(v)>2e-4?v*Ra:0,x=qe?1/(qe<0?-qe:qe):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(Dn(e,Tt)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(h*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Lt(h),n.scaleY=Lt(m),n.rotation=Lt(_)+o,n.rotationX=Lt(p)+o,n.rotationY=Lt(g)+o,n.skewX=b+o,n.skewY=T+o,n.transformPerspective=x+s,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[yn]=Co(l)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?Wg:jh?ap:$g,n.uncache=0,n},Co=function(e){return(e=e.split(" "))[0]+" "+e[1]},ul=function(e,t,n){var a=jt(t);return Lt(parseFloat(t)+parseFloat(pa(e,"x",n+"px",a)))+a},$g=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ap(e,t)},va="0deg",Fr="0px",ya=") ",ap=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,u=n.rotationX,f=n.skewX,h=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,T=n.zOrigin,x="",M=g==="auto"&&e&&e!==1||g===!0;if(T&&(u!==va||d!==va)){var E=parseFloat(d)*br,A=Math.sin(E),v=Math.cos(E),w;E=parseFloat(u)*br,w=Math.cos(E),s=ul(b,s,A*w*-T),o=ul(b,o,-Math.sin(E)*-T),c=ul(b,c,v*w*-T+T)}p!==Fr&&(x+="perspective("+p+ya),(a||r)&&(x+="translate("+a+"%, "+r+"%) "),(M||s!==Fr||o!==Fr||c!==Fr)&&(x+=c!==Fr||M?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+ya),l!==va&&(x+="rotate("+l+ya),d!==va&&(x+="rotateY("+d+ya),u!==va&&(x+="rotateX("+u+ya),(f!==va||h!==va)&&(x+="skew("+f+", "+h+ya),(m!==1||_!==1)&&(x+="scale("+m+", "+_+ya),b.style[Tt]=x||"translate(0, 0)"},Wg=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,u=n.scaleX,f=n.scaleY,h=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,T=parseFloat(s),x=parseFloat(o),M,E,A,v,w;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=br,l*=br,M=Math.cos(c)*u,E=Math.sin(c)*u,A=Math.sin(c-l)*-f,v=Math.cos(c-l)*f,l&&(d*=br,w=Math.tan(l-d),w=Math.sqrt(1+w*w),A*=w,v*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=Lt(M),E=Lt(E),A=Lt(A),v=Lt(v)):(M=u,v=f,E=A=0),(T&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=pa(h,"x",s,"px"),x=pa(h,"y",o,"px")),(m||_||p||g)&&(T=Lt(T+m-(m*M+_*A)+p),x=Lt(x+_-(m*E+_*v)+g)),(a||r)&&(w=h.getBBox(),T=Lt(T+a/100*w.width),x=Lt(x+r/100*w.height)),w="matrix("+M+","+E+","+A+","+v+","+T+","+x+")",h.setAttribute("transform",w),b&&(h.style[Tt]=w)},qg=function(e,t,n,a,r){var s=360,o=$t(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Ra:1),l=c-a,d=a+l+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),u==="cw"&&l<0?l=(l+s*Mu)%s-~~(l/s)*s:u==="ccw"&&l>0&&(l=(l-s*Mu)%s-~~(l/s)*s)),e._pt=f=new vn(e._pt,t,n,a,l,kg),f.e=d,f.u="deg",e._props.push(n),f},Cu=function(e,t){for(var n in t)e[n]=t[n];return e},Xg=function(e,t,n){var a=Cu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,c,l,d,u,f,h,m;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),s[Tt]=t,o=gs(n,1),ha(n,Tt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Tt],s[Tt]=t,o=gs(n,1),s[Tt]=l);for(c in Hi)l=a[c],d=o[c],l!==d&&r.indexOf(c)<0&&(h=jt(l),m=jt(d),u=h!==m?pa(n,c,l,m):parseFloat(l),f=parseFloat(d),e._pt=new vn(e._pt,o,c,u,f-u,pc),e._pt.u=m||0,e._props.push(c));Cu(o,a)};_n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",r="Left",s=(e<3?[t,n,a,r]:[t+r,t+n,a+n,a+r]).map(function(o){return e<2?i+o:"border"+o+i});Ro[e>1?"border"+i:i]=function(o,c,l,d,u){var f,h;if(arguments.length<4)return f=s.map(function(m){return Di(o,m,l)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(d+"").split(" "),h={},s.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,h,u)}});var rp={name:"css",register:gc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,r){var s=this._props,o=e.style,c=n.vars.startAt,l,d,u,f,h,m,_,p,g,b,T,x,M,E,A,v,w;Rd||gc(),this.styles=this.styles||Qh(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Tn[_]&&Hh(_,t,n,a,e,r)))){if(h=typeof d,m=Ro[_],h==="function"&&(d=d.call(n,a,e,r),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=fs(d)),m)m(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",ua.lastIndex=0,ua.test(l)||(p=jt(l),g=jt(d),g?p!==g&&(l=pa(e,_,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,a,r,0,0,_),s.push(_),v.push(_,0,o[_]);else if(h!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,a,e,r):c[_],$t(l)&&~l.indexOf("random(")&&(l=fs(l)),jt(l+"")||l==="auto"||(l+=In.units[_]||jt(Di(e,_))||""),(l+"").charAt(1)==="="&&(l=Di(e,_))):l=Di(e,_),f=parseFloat(l),b=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),u=parseFloat(d),_ in _i&&(_==="autoAlpha"&&(f===1&&Di(e,"visibility")==="hidden"&&u&&(f=0),v.push("visibility",0,o.visibility),oa(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Hi,T){if(this.styles.save(_),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Dn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var k=e.style.perspective;e.style.perspective=d,d=Dn(e,"perspective"),k?e.style.perspective=k:ha(e,"perspective")}u=parseFloat(d)}if(x||(M=e._gsap,M.renderTransform&&!t.parseTransform||gs(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new vn(this._pt,o,Tt,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new vn(this._pt,M,"scaleY",M.scaleY,(b?yr(M.scaleY,b+u):u)-M.scaleY||0,pc),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(yn,0,o[yn]),d=Gg(d),M.svg?_c(e,d,0,E,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==M.zOrigin&&oa(this,M,"zOrigin",M.zOrigin,g),oa(this,o,_,Co(l),Co(d)));continue}else if(_==="svgOrigin"){_c(e,d,1,E,0,this);continue}else if(_ in np){qg(this,M,_,f,b?yr(f,b+d):d);continue}else if(_==="smoothOrigin"){oa(this,M,"smooth",M.smooth,d);continue}else if(_==="force3D"){M[_]=d;continue}else if(_==="transform"){Xg(this,d,e);continue}}else _ in o||(_=Pr(_)||_);if(T||(u||u===0)&&(f||f===0)&&!Ag.test(d)&&_ in o)p=(l+"").substr((f+"").length),u||(u=0),g=jt(d)||(_ in In.units?In.units[_]:p),p!==g&&(f=pa(e,_,l,g)),this._pt=new vn(this._pt,T?M:o,_,f,(b?yr(f,b+u):u)-f,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Lg:pc),this._pt.u=g||0,T&&w!==d?(this._pt.b=l,this._pt.e=w,this._pt.r=Cg):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=Rg);else if(_ in o)Hg.call(this,e,_,l,b?b+d:d);else if(_ in e)this.add(e,_,l||e[_],b?b+d:d,a,r);else if(_!=="parseTransform"){yd(_,d);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,l||e[_])),s.push(_)}}A&&Xh(this)},render:function(e,t){if(t.tween._time||!Cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:_i,getSetter:function(e,t,n){var a=_i[t];return a&&a.indexOf(",")<0&&(t=a),t in Hi&&t!==yn&&(e._gsap.x||Di(e,"x"))?n&&Su===n?t==="scale"?Ug:Ig:(Su=n||{})&&(t==="scale"?Ng:Fg):e.style&&!gd(e.style[t])?Pg:~t.indexOf("-")?Dg:Ad(e,t)},core:{_removeProperty:ha,_getMatrix:Pd}};Sn.utils.checkPrefix=Pr;Sn.core.getStyleSaver=Qh;(function(i,e,t,n){var a=_n(i+","+e+","+t,function(r){Hi[r]=1});_n(e,function(r){In.units[r]="deg",np[r]=1}),_i[a[13]]=i+","+e,_n(n,function(r){var s=r.split(":");_i[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){In.units[i]="px"});Sn.registerPlugin(rp);var Gi=Sn.registerPlugin(rp)||Sn;Gi.core.Tween;Gi.matchMedia();function ws(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Lu=new WeakMap;function Yg(i,e){const t=Lu.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Lu.set(i,t),ws()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const r=document.createElement("span");r.textContent=n,r.style.cssText="display:block;";const s=document.createElement("span");s.textContent=e,s.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(r,s),i.appendChild(a),t.tween=Gi.to([r,s],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function sp(i){if(ws())return;const e=Array.from(i.children).slice(0,8);e.length&&Gi.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Dd(i){ws()||!i.length||Gi.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Id(i){ws()||Gi.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function Kg(i,e){if(ws()){e();return}Gi.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{Gi.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="186",Zg=0,Pu=1,Jg=2,ho=1,Qg=2,Kr=3,za=0,xn=1,gi=2,Ni=0,is=1,Du=2,Iu=3,Uu=4,jg=5,ur=100,e_=101,t_=102,n_=103,i_=104,a_=200,r_=201,s_=202,o_=203,op=204,lp=205,l_=206,c_=207,d_=208,u_=209,f_=210,h_=211,p_=212,m_=213,g_=214,vc=0,yc=1,xc=2,_s=3,bc=4,Sc=5,Mc=6,Ec=7,Nd=0,__=1,v_=2,xi=0,cp=1,dp=2,up=3,fp=4,hp=5,pp=6,mp=7,gp=300,Ba=301,Dr=302,fl=303,hl=304,Wo=306,wc=1e3,Ii=1001,Tc=1002,Nt=1003,y_=1004,Us=1005,en=1006,pl=1007,Pa=1008,Ln=1009,_p=1010,vp=1011,vs=1012,Fd=1013,Si=1014,vi=1015,Mi=1016,Od=1017,zd=1018,ys=1020,yp=35902,xp=35899,bp=1021,Sp=1022,ti=1023,Vi=1026,Da=1027,Mp=1028,Bd=1029,Ha=1030,Hd=1031,Gd=1033,po=33776,mo=33777,go=33778,_o=33779,Ac=35840,kc=35841,Rc=35842,Cc=35843,Lc=36196,Pc=37492,Dc=37496,Ic=37488,Uc=37489,Lo=37490,Nc=37491,Fc=37808,Oc=37809,zc=37810,Bc=37811,Hc=37812,Gc=37813,Vc=37814,$c=37815,Wc=37816,qc=37817,Xc=37818,Yc=37819,Kc=37820,Zc=37821,Jc=36492,Qc=36494,jc=36495,ed=36283,td=36284,Po=36285,nd=36286,x_=3200,id=0,b_=1,ia="",An="srgb",Do="srgb-linear",Io="linear",ct="srgb",ml=7680,S_=519,M_=512,E_=513,w_=514,Vd=515,T_=516,A_=517,$d=518,k_=519,R_=35044,Nu="300 es",yi=2e3,xs=2001;function C_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L_(){const i=bs("canvas");return i.style.display="block",i}const Fu={};function Ou(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ep(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Ep(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=Ep(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sr(...i){const e=i.join(" ");e in Fu||(Fu[e]=!0,Ne(...i))}function P_(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const D_={[vc]:yc,[xc]:Mc,[bc]:Ec,[_s]:Sc,[yc]:vc,[Mc]:xc,[Ec]:bc,[Sc]:_s};class Wa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,ad=180/Math.PI;function Ts(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function I_(i,e){return(i%e+e)%e}function gl(i,e,t){return(1-t)*i+t*e}function U_(i){return i*vo}function Or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const N_={degToRad:U_};class nt{static{nt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ur{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],d=n[a+2],u=n[a+3],f=r[s+0],h=r[s+1],m=r[s+2],_=r[s+3];if(u!==_||c!==f||l!==h||d!==m){let p=c*f+l*h+d*m+u*_;p<0&&(f=-f,h=-h,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T,c=c*g+f*o,l=l*g+h*o,d=d*g+m*o,u=u*g+_*o}else{c=c*g+f*o,l=l*g+h*o,d=d*g+m*o,u=u*g+_*o;const b=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=b,l*=b,d*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],u=r[s],f=r[s+1],h=r[s+2],m=r[s+3];return e[t]=o*m+d*u+c*h-l*f,e[t+1]=c*m+d*f+l*u-o*h,e[t+2]=l*m+d*h+o*f-c*u,e[t+3]=d*m-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),u=o(r/2),f=c(n/2),h=c(a/2),m=c(r/2);switch(s){case"XYZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"YXZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"ZXY":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"ZYX":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"YZX":this._x=f*d*u+l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u-f*h*m;break;case"XZY":this._x=f*d*u-l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u+f*h*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(s-a)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(r-l)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(s-a)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+a*l-r*c,this._y=a*d+s*c+r*o-n*l,this._z=r*d+s*l+n*c-a*o,this._w=s*d-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{W.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),d=2*(o*t-r*a),u=2*(r*n-s*t);return this.x=t+c*l+s*u-o*d,this.y=n+c*d+o*l-r*u,this.z=a+c*u+r*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new W,zu=new Ur;class Oe{static{Oe.prototype.isMatrix3=!0}constructor(e,t,n,a,r,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],m=n[8],_=a[0],p=a[3],g=a[6],b=a[1],T=a[4],x=a[7],M=a[2],E=a[5],A=a[8];return r[0]=s*_+o*b+c*M,r[3]=s*p+o*T+c*E,r[6]=s*g+o*x+c*A,r[1]=l*_+d*b+u*M,r[4]=l*p+d*T+u*E,r[7]=l*g+d*x+u*A,r[2]=f*_+h*b+m*M,r[5]=f*p+h*T+m*E,r[8]=f*g+h*x+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*r*d+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*s-o*l,f=o*c-d*r,h=l*r-s*c,m=t*u+n*f+a*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(a*l-d*n)*_,e[2]=(o*n-a*s)*_,e[3]=f*_,e[4]=(d*t-a*c)*_,e[5]=(a*r-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vl.makeScale(e,t)),this}rotate(e){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new Oe,Bu=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const i={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ct&&(a.r=Fi(a.r),a.g=Fi(a.g),a.b=Fi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(a.r=Mr(a.r),a.g=Mr(a.g),a.b=Mr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ia?Io:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Do]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:Bu,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Bu,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Je=F_();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Za;class O_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Za===void 0&&(Za=bs("canvas")),Za.width=e.width,Za.height=e.height;const a=Za.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Za}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Fi(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Wd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(yl(a[s].image)):r.push(yl(a[s]))}else r=yl(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?O_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let B_=0;const xl=new W;class Vt extends Wa{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Ii,a=Ii,r=en,s=Pa,o=ti,c=Ln,l=Vt.DEFAULT_ANISOTROPY,d=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ts(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=gp;Vt.DEFAULT_ANISOTROPY=1;class At{static{At.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(h+1)/2,M=(g+1)/2,E=(d+f)/4,A=(u+_)/4,v=(m+p)/4;return T>x&&T>M?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=E/n,r=A/n):x>M?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=E/a,r=v/a):M<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),n=A/r,a=v/r),this.set(n,a,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-_)/b,this.z=(f-d)/b,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends Wa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new Vt(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Wd(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends H_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wp extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G_ extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class kt{static{kt.prototype.isMatrix4=!0}constructor(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p)}set(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=r,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=u,g[14]=f,g[3]=h,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Ja.setFromMatrixColumn(e,0).length(),r=1/Ja.setFromMatrixColumn(e,1).length(),s=1/Ja.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=s*d,h=s*u,m=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+m*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=m+h*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,m=l*d,_=l*u;t[0]=f+_*o,t[4]=m*o-h,t[8]=s*l,t[1]=s*u,t[5]=s*d,t[9]=-o,t[2]=h*o-m,t[6]=_+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,m=l*d,_=l*u;t[0]=f-_*o,t[4]=-s*u,t[8]=m+h*o,t[1]=h+m*o,t[5]=s*d,t[9]=_-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*d,h=s*u,m=o*d,_=o*u;t[0]=c*d,t[4]=m*l-h,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=h*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=_-f*u,t[8]=m*u+h,t[1]=u,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+_,t[5]=s*d,t[9]=h*u-m,t[2]=m*u-h,t[6]=o*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,$_)}lookAt(e,t,n){const a=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(n,Mn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(n,Mn)),Ki.normalize(),Ns.crossVectors(Mn,Ki),a[0]=Ki.x,a[4]=Ns.x,a[8]=Mn.x,a[1]=Ki.y,a[5]=Ns.y,a[9]=Mn.y,a[2]=Ki.z,a[6]=Ns.z,a[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],T=n[7],x=n[11],M=n[15],E=a[0],A=a[4],v=a[8],w=a[12],k=a[1],C=a[5],N=a[9],O=a[13],L=a[2],z=a[6],X=a[10],$=a[14],te=a[3],Y=a[7],j=a[11],ae=a[15];return r[0]=s*E+o*k+c*L+l*te,r[4]=s*A+o*C+c*z+l*Y,r[8]=s*v+o*N+c*X+l*j,r[12]=s*w+o*O+c*$+l*ae,r[1]=d*E+u*k+f*L+h*te,r[5]=d*A+u*C+f*z+h*Y,r[9]=d*v+u*N+f*X+h*j,r[13]=d*w+u*O+f*$+h*ae,r[2]=m*E+_*k+p*L+g*te,r[6]=m*A+_*C+p*z+g*Y,r[10]=m*v+_*N+p*X+g*j,r[14]=m*w+_*O+p*$+g*ae,r[3]=b*E+T*k+x*L+M*te,r[7]=b*A+T*C+x*z+M*Y,r[11]=b*v+T*N+x*X+M*j,r[15]=b*w+T*O+x*$+M*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],m=e[3],_=e[7],p=e[11],g=e[15],b=c*h-l*f,T=o*h-l*u,x=o*f-c*u,M=s*h-l*d,E=s*f-c*d,A=s*u-o*d;return t*(_*b-p*T+g*x)-n*(m*b-p*M+g*E)+a*(m*T-_*M+g*A)-r*(m*x-_*E+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-n*(r*d-o*c)+a*(r*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=t*o-n*s,T=t*c-a*s,x=t*l-r*s,M=n*c-a*o,E=n*l-r*o,A=a*l-r*c,v=d*_-u*m,w=d*p-f*m,k=d*g-h*m,C=u*p-f*_,N=u*g-h*_,O=f*g-h*p,L=b*O-T*N+x*C+M*k-E*w+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*O-c*N+l*C)*z,e[1]=(a*N-n*O-r*C)*z,e[2]=(_*A-p*E+g*M)*z,e[3]=(f*E-u*A-h*M)*z,e[4]=(c*k-s*O-l*w)*z,e[5]=(t*O-a*k+r*w)*z,e[6]=(p*x-m*A-g*T)*z,e[7]=(d*A-f*x+h*T)*z,e[8]=(s*N-o*k+l*v)*z,e[9]=(n*k-t*N-r*v)*z,e[10]=(m*E-_*x+g*b)*z,e[11]=(u*x-d*E-h*b)*z,e[12]=(o*w-s*C-c*v)*z,e[13]=(t*C-n*w+a*v)*z,e[14]=(_*T-m*M-p*b)*z,e[15]=(d*M-u*T+f*b)*z,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,d=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*s,0,l*c-a*o,d*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,d=s+s,u=o+o,f=r*l,h=r*d,m=r*u,_=s*d,p=s*u,g=o*u,b=c*l,T=c*d,x=c*u,M=n.x,E=n.y,A=n.z;return a[0]=(1-(_+g))*M,a[1]=(h+x)*M,a[2]=(m-T)*M,a[3]=0,a[4]=(h-x)*E,a[5]=(1-(f+g))*E,a[6]=(p+b)*E,a[7]=0,a[8]=(m+T)*A,a[9]=(p-b)*A,a[10]=(1-(f+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Ja.set(a[0],a[1],a[2]).length();const o=Ja.set(a[4],a[5],a[6]).length(),c=Ja.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Yn.copy(this);const l=1/s,d=1/o,u=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,a,r,s,o=yi,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let m,_;if(c)m=r/(s-r),_=s*r/(s-r);else if(o===yi)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===xs)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=yi,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-a),f=-(t+e)/(t-e),h=-(n+a)/(n-a);let m,_;if(c)m=1/(s-r),_=s/(s-r);else if(o===yi)m=-2/(s-r),_=-(s+r)/(s-r);else if(o===xs)m=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ja=new W,Yn=new kt,V_=new W(0,0,0),$_=new W(1,1,1),Ki=new W,Ns=new W,Mn=new W,Gu=new kt,Vu=new Ur;class ma{constructor(e=0,t=0,n=0,a=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],d=a[9],u=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const $u=new W,Qa=new Ur,wi=new kt,Fs=new W,zr=new W,q_=new W,X_=new Ur,Wu=new W(1,0,0),qu=new W(0,1,0),Xu=new W(0,0,1),Yu={type:"added"},Y_={type:"removed"},ja={type:"childadded",child:null},bl={type:"childremoved",child:null};class nn extends Wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,t=new ma,n=new Ur,a=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new Oe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.multiply(Qa),this}rotateOnWorldAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.premultiply(Qa),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(zr,Fs,this.up):wi.lookAt(Fs,zr,this.up),this.quaternion.setFromRotationMatrix(wi),a&&(wi.extractRotation(a.matrixWorld),Qa.setFromRotationMatrix(wi),this.quaternion.premultiply(Qa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),ja.child=e,this.dispatchEvent(ja),ja.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,X_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=a,n;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Je.workingColorSpace){if(e=I_(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ml(s,r,e+1/3),this.g=Ml(s,r,e),this.b=Ml(s,r,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,a=Jt.g,r=Jt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=d<=.5?u/(s+o):u/(2-s-o),s){case n:c=(a-r)/u+(a<r?6:0);break;case a:c=(r-n)/u+2;break;case r:c=(n-a)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=An){Je.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,a=Jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Os);const n=gl(Zi.h,Os.h,t),a=gl(Zi.s,Os.s,t),r=gl(Zi.l,Os.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new at;at.NAMES=Ap;class Z_ extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kn=new W,Ti=new W,El=new W,Ai=new W,er=new W,tr=new W,Ku=new W,wl=new W,Tl=new W,Al=new W,kl=new At,Rl=new At,Cl=new At;class jn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Kn.subVectors(e,t),a.cross(Kn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Kn.subVectors(a,t),Ti.subVectors(n,t),El.subVectors(e,t);const s=Kn.dot(Kn),o=Kn.dot(Ti),c=Kn.dot(El),l=Ti.dot(Ti),d=Ti.dot(El),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,m=(s*d-o*c)*f;return r.set(1-h-m,m,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(s,Ai.y),c.addScaledVector(o,Ai.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return kl.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),kl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,n),Cl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(kl,r.x),s.addScaledVector(Rl,r.y),s.addScaledVector(Cl,r.z),s}static isFrontFacing(e,t,n,a){return Kn.subVectors(n,t),Ti.subVectors(e,t),Kn.cross(Ti).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Kn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;er.subVectors(a,n),tr.subVectors(r,n),wl.subVectors(e,n);const c=er.dot(wl),l=tr.dot(wl);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,a);const d=er.dot(Tl),u=tr.dot(Tl);if(d>=0&&u<=d)return t.copy(a);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(er,s);Al.subVectors(e,r);const h=er.dot(Al),m=tr.dot(Al);if(m>=0&&h<=m)return t.copy(r);const _=h*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(tr,o);const p=d*m-h*u;if(p<=0&&u-d>=0&&h-m>=0)return Ku.subVectors(r,a),o=(u-d)/(u-d+(h-m)),t.copy(a).addScaledVector(Ku,o);const g=1/(p+_+f);return s=_*g,o=f*g,t.copy(n).addScaledVector(er,s).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class As{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zn):Zn.fromBufferAttribute(r,s),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Bs.subVectors(this.max,Br),nr.subVectors(e.a,Br),ir.subVectors(e.b,Br),ar.subVectors(e.c,Br),Ji.subVectors(ir,nr),Qi.subVectors(ar,ir),xa.subVectors(nr,ar);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-xa.z,xa.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,xa.z,0,-xa.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-xa.y,xa.x,0];return!Ll(t,nr,ir,ar,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,nr,ir,ar,Bs))?!1:(Hs.crossVectors(Ji,Qi),t=[Hs.x,Hs.y,Hs.z],Ll(t,nr,ir,ar,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,zs=new As,nr=new W,ir=new W,ar=new W,Ji=new W,Qi=new W,xa=new W,Br=new W,Bs=new W,Hs=new W,ba=new W;function Ll(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){ba.fromArray(i,r);const o=a.x*Math.abs(ba.x)+a.y*Math.abs(ba.y)+a.z*Math.abs(ba.z),c=e.dot(ba),l=t.dot(ba),d=n.dot(ba);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const It=new W,Gs=new nt;let J_=0;class Oi extends Wa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=R_,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),a=un(a,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kp extends Oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rp extends Oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zi extends Oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Q_=new As,Hr=new W,Pl=new W;class qd{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Q_.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Hr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Pl)),this.expandByPoint(Hr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let j_=0;const On=new kt,Dl=new nn,rr=new W,En=new As,Gr=new As,Bt=new W;class Wi extends Wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?Rp:kp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new zi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(En.min,Gr.min),En.expandByPoint(Bt),Bt.addVectors(En.max,Gr.max),En.expandByPoint(Bt)):(En.expandByPoint(Gr.min),En.expandByPoint(Gr.max))}En.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Bt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Bt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Bt.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),Bt.add(rr)),a=Math.max(a,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Oi(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new W,c[v]=new W;const l=new W,d=new W,u=new W,f=new nt,h=new nt,m=new nt,_=new W,p=new W;function g(v,w,k){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,k),f.fromBufferAttribute(r,v),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,k),d.sub(l),u.sub(l),h.sub(f),m.sub(f);const C=1/(h.x*m.y-m.x*h.y);isFinite(C)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(C),p.copy(u).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(C),o[v].add(_),o[w].add(_),o[k].add(_),c[v].add(p),c[w].add(p),c[k].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,w=b.length;v<w;++v){const k=b[v],C=k.start,N=k.count;for(let O=C,L=C+N;O<L;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new W,x=new W,M=new W,E=new W;function A(v){M.fromBufferAttribute(a,v),E.copy(M);const w=o[v];T.copy(w),T.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(E,w);const C=x.dot(c[v])<0?-1:1;s.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,w=b.length;v<w;++v){const k=b[v],C=k.start,N=k.count;for(let O=C,L=C+N;O<L;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const a=new W,r=new W,s=new W,o=new W,c=new W,l=new W,d=new W,u=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*d;for(let g=0;g<d;g++)f[m++]=l[h++]}return new Oi(f,d,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(a[c]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new W,e0=new W,t0=new Oe;class ta{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Il.subVectors(n,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(Il),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t0.getNormalMatrix(e),a=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let n0=0;class ks extends Wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=is,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ta().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new W,Ul=new W,Vs=new W,$s=new W;class i0{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ul.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),$s.copy(this.origin).sub(Ul);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Vs),o=$s.dot(this.direction),c=-$s.dot(Vs),l=$s.lengthSq(),d=Math.abs(1-s*s);let u,f,h,m;if(d>0)if(u=s*c-o,f=s*o-c,m=r*d,u>=0)if(f>=-m)if(f<=m){const _=1/d;u*=_,f*=_,h=u*(u+s*f+2*o)+f*(s*u+f+2*c)+l}else f=r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-s*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(u=Math.max(0,-(s*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l);else f=s>0?-r:r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Ul).addScaledVector(Vs,f),h}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),a=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,a,r){const s=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,m=t.x-s.x,_=t.y-s.y,p=t.z-s.z,g=n.x-s.x,b=n.y-s.y,T=n.z-s.z,x=Math.abs(c),M=Math.abs(l),E=Math.abs(d);let A,v,w,k,C,N,O,L,z,X,$,te;if(x>=M&&x>=E?(w=c,N=u,z=m,te=g,c>=0?(A=l,v=d,k=f,C=h,O=_,L=p,X=b,$=T):(A=d,v=l,k=h,C=f,O=p,L=_,X=T,$=b)):M>=E?(w=l,N=f,z=_,te=b,l>=0?(A=d,v=c,k=h,C=u,O=p,L=m,X=T,$=g):(A=c,v=d,k=u,C=h,O=m,L=p,X=g,$=T)):(w=d,N=h,z=p,te=T,d>=0?(A=c,v=l,k=u,C=f,O=m,L=_,X=g,$=b):(A=l,v=c,k=f,C=u,O=_,L=m,X=b,$=g)),w===0)return null;const Y=A/w,j=v/w,ae=1/w,Se=k-Y*N,Ae=C-j*N,qe=O-Y*z,Fe=L-j*z,K=X-Y*te,P=$-j*te,G=K*Fe-P*qe,de=Se*P-Ae*K,Pe=qe*Ae-Fe*Se;if(a){if(G<0||de<0||Pe<0)return null}else if((G<0||de<0||Pe<0)&&(G>0||de>0||Pe>0))return null;const xe=G+de+Pe;if(xe===0)return null;const Be=ae*(G*N+de*z+Pe*te);return(xe>0?Be<0:Be>0)?null:this.at(Be/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cp extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zu=new kt,Sa=new i0,Ws=new qd,Ju=new W,qs=new W,Xs=new W,Ys=new W,Nl=new W,Ks=new W,Qu=new W,Zs=new W;class qn extends nn{constructor(e=new Wi,t=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(Nl.fromBufferAttribute(u,e),s?Ks.addScaledVector(Nl,d):Ks.addScaledVector(Nl.sub(t),d))}t.add(Ks)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Sa.copy(e.ray).recast(e.near),!(Ws.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere(Ws,Ju)===null||Sa.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Sa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,M=T;x<M;x+=3){const E=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);a=Js(this,g,e,n,l,d,u,E,A,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);a=Js(this,s,e,n,l,d,u,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,M=T;x<M;x+=3){const E=x,A=x+1,v=x+2;a=Js(this,g,e,n,l,d,u,E,A,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=p,T=p+1,x=p+2;a=Js(this,s,e,n,l,d,u,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function a0(i,e,t,n,a,r,s,o){let c;if(e.side===xn?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===za,o),c===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:i}}function Js(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,qs),i.getVertexPosition(c,Xs),i.getVertexPosition(l,Ys);const d=a0(i,e,t,n,qs,Xs,Ys,Qu);if(d){const u=new W;jn.getBarycoord(Qu,qs,Xs,Ys,u),a&&(d.uv=jn.getInterpolatedAttribute(a,o,c,l,u,new nt)),r&&(d.uv1=jn.getInterpolatedAttribute(r,o,c,l,u,new nt)),s&&(d.normal=jn.getInterpolatedAttribute(s,o,c,l,u,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new W,materialIndex:0};jn.getNormal(qs,Xs,Ys,f.normal),d.face=f,d.barycoord=u}return d}class r0 extends Vt{constructor(e=null,t=1,n=1,a,r,s,o,c,l=Nt,d=Nt,u,f){super(null,s,o,c,l,d,a,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new qd,s0=new nt(.5,.5),Qs=new W;class Xd{constructor(e=new ta,t=new ta,n=new ta,a=new ta,r=new ta,s=new ta){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],p=r[10],g=r[11],b=r[12],T=r[13],x=r[14],M=r[15];if(a[0].setComponents(l-s,h-d,g-m,M-b).normalize(),a[1].setComponents(l+s,h+d,g+m,M+b).normalize(),a[2].setComponents(l+o,h+u,g+_,M+T).normalize(),a[3].setComponents(l-o,h-u,g-_,M-T).normalize(),n)a[4].setComponents(c,f,p,x).normalize(),a[5].setComponents(l-c,h-f,g-p,M-x).normalize();else if(a[4].setComponents(l-c,h-f,g-p,M-x).normalize(),t===yi)a[5].setComponents(l+c,h+f,g+p,M+x).normalize();else if(t===xs)a[5].setComponents(c,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ma)}intersectsSprite(e){Ma.center.set(0,0,0);const t=s0.distanceTo(e.center);return Ma.radius=.7071067811865476+t,Ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ma)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Qs.x=a.normal.x>0?e.max.x:e.min.x,Qs.y=a.normal.y>0?e.max.y:e.min.y,Qs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lp extends Vt{constructor(e=[],t=Ba,n,a,r,s,o,c,l,d){super(e,t,n,a,r,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends Vt{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Vt{constructor(e,t,n=Si,a,r,s,o=Nt,c=Nt,l,d=Vi,u=1){if(d!==Vi&&d!==Da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,a,r,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class l0 extends Ss{constructor(e,t=Si,n=Ba,a,r,s=Nt,o=Nt,c,l=Vi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,a,r,s,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pp extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qa extends Wi{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],d=[],u=[];let f=0,h=0;m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,a,s,2),m("x","z","y",1,-1,e,n,-t,a,s,3),m("x","y","z",1,-1,e,t,n,a,r,4),m("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new zi(l,3)),this.setAttribute("normal",new zi(d,3)),this.setAttribute("uv",new zi(u,2));function m(_,p,g,b,T,x,M,E,A,v,w){const k=x/A,C=M/v,N=x/2,O=M/2,L=E/2,z=A+1,X=v+1;let $=0,te=0;const Y=new W;for(let j=0;j<X;j++){const ae=j*C-O;for(let Se=0;Se<z;Se++){const Ae=Se*k-N;Y[_]=Ae*b,Y[p]=ae*T,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),u.push(Se/A),u.push(1-j/v),$+=1}}for(let j=0;j<v;j++)for(let ae=0;ae<A;ae++){const Se=f+ae+z*j,Ae=f+ae+z*(j+1),qe=f+(ae+1)+z*(j+1),Fe=f+(ae+1)+z*j;c.push(Se,Ae,Fe),c.push(Ae,qe,Fe),te+=6}o.addGroup(h,te,w),h+=te,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rs extends Wi{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,u=e/o,f=t/c,h=[],m=[],_=[],p=[];for(let g=0;g<d;g++){const b=g*f-s;for(let T=0;T<l;T++){const x=T*u-r;m.push(x,-b,0),_.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const T=b+l*g,x=b+l*(g+1),M=b+1+l*(g+1),E=b+1+l*g;h.push(T,x,E),h.push(x,M,E)}this.setIndex(h),this.setAttribute("position",new zi(m,3)),this.setAttribute("normal",new zi(_,3)),this.setAttribute("uv",new zi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(ju(a))a.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(ju(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const a in n)e[a]=n[a]}return e}function ju(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function c0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const d0={clone:Ir,merge:on};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(a.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(a.value);break;case"v3":this.uniforms[n].value=new W().fromArray(a.value);break;case"v4":this.uniforms[n].value=new At().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(a.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class h0 extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rd extends ks{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Nd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p0 extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ef(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ef(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ef(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class g0{constructor(e,t,n){const a=this;let r=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){const h=l[u],m=l[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _0=new g0;class Ip{constructor(e){this.manager=e!==void 0?e:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ip.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr=new WeakMap;class v0 extends Ip{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Fl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let u=sr.get(s);u===void 0&&(u=[],sr.set(s,u)),u.push({onLoad:t,onError:a})}return s}const o=bs("img");function c(){d(),t&&t(this);const u=sr.get(this)||[];for(let f=0;f<u.length;f++){const h=u[f];h.onLoad&&h.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function l(u){d(),a&&a(u),Fl.remove(`image:${e}`);const f=sr.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onError&&m.onError(u)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Up extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ol=new kt,tf=new W,nf=new W;class y0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,c=a?a.x/r.x:0,l=a?a.y/r.y:0;e.coordinateSystem===xs||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const js=new W,eo=new Ur,oi=new W;class Np extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(js,eo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,eo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(js,eo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,eo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new W,af=new nt,rf=new nt;class Vn extends Np{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,af,rf),t.subVectors(rf,af)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yd extends Np{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class x0 extends y0{constructor(){super(new Yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sf extends Up{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new x0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class b0 extends Up{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const or=-90,lr=1;class S0 extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(or,lr,e,t);a.layers=this.layers,this.add(a);const r=new Vn(or,lr,e,t);r.layers=this.layers,this.add(r);const s=new Vn(or,lr,e,t);s.layers=this.layers,this.add(s);const o=new Vn(or,lr,e,t);o.layers=this.layers,this.add(o);const c=new Vn(or,lr,e,t);c.layers=this.layers,this.add(c);const l=new Vn(or,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class M0 extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class E0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Fp{static{Fp.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}}function of(i,e,t,n){const a=w0(n);switch(t){case bp:return i*e;case Mp:return i*e/a.components*a.byteLength;case Bd:return i*e/a.components*a.byteLength;case Ha:return i*e*2/a.components*a.byteLength;case Hd:return i*e*2/a.components*a.byteLength;case Sp:return i*e*3/a.components*a.byteLength;case ti:return i*e*4/a.components*a.byteLength;case Gd:return i*e*4/a.components*a.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case Ac:case Rc:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Pc:case Ic:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Lo:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jc:case Qc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ed:case td:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case nd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(i){switch(i){case Ln:case _p:return{byteLength:1,components:1};case vs:case vp:case Mi:return{byteLength:2,components:1};case Od:case zd:return{byteLength:2,components:4};case Si:case Fd:case vi:return{byteLength:4,components:1};case yp:case xp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Op(){let i=null,e=!1,t=null,n=null;function a(r,s){n=i.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<u.length;h++){const m=u[f],_=u[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let h=0,m=u.length;h<m;h++){const _=u[h];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yv=`#ifdef USE_ENVMAP
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
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,wv=`uniform sampler2D dfgLUT;
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
}`,Tv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,$v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
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
#endif`,Jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Ny=`#define DISTANCE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
}`,By=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,qy=`#define MATCAP
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
}`,Xy=`#define NORMAL
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
}`,Yy=`#define NORMAL
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
}`,Ky=`#define PHONG
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
}`,Zy=`#define PHONG
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
}`,Jy=`#define STANDARD
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
}`,Qy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,ex=`#define TOON
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
}`,tx=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:A0,alphahash_pars_fragment:k0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:L0,alphatest_pars_fragment:P0,aomap_fragment:D0,aomap_pars_fragment:I0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:z0,iridescence_fragment:B0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:W0,color_fragment:q0,color_pars_fragment:X0,color_pars_vertex:Y0,color_vertex:K0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:j0,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:av,envmap_fragment:rv,envmap_common_pars_fragment:sv,envmap_pars_fragment:ov,envmap_pars_vertex:lv,envmap_physical_pars_fragment:yv,envmap_vertex:cv,fog_vertex:dv,fog_pars_vertex:uv,fog_fragment:fv,fog_pars_fragment:hv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:vv,lights_toon_fragment:xv,lights_toon_pars_fragment:bv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:Ev,lights_physical_pars_fragment:wv,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:kv,lightprobes_pars_fragment:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Dv,map_fragment:Iv,map_pars_fragment:Uv,map_particle_fragment:Nv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:zv,morphinstance_vertex:Bv,morphcolor_vertex:Hv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Vv,morphtarget_vertex:$v,normal_fragment_begin:Wv,normal_fragment_maps:qv,normal_pars_fragment:Xv,normal_pars_vertex:Yv,normal_vertex:Kv,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Jv,clearcoat_normal_fragment_maps:Qv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:ay,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:dy,shadowmap_vertex:uy,shadowmask_pars_fragment:fy,skinbase_vertex:hy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:yy,tonemapping_pars_fragment:xy,transmission_fragment:by,transmission_pars_fragment:Sy,uv_pars_fragment:My,uv_pars_vertex:Ey,uv_vertex:wy,worldpos_vertex:Ty,background_vert:Ay,background_frag:ky,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Ly,cube_frag:Py,depth_vert:Dy,depth_frag:Iy,distance_vert:Uy,distance_frag:Ny,equirect_vert:Fy,equirect_frag:Oy,linedashed_vert:zy,linedashed_frag:By,meshbasic_vert:Hy,meshbasic_frag:Gy,meshlambert_vert:Vy,meshlambert_frag:$y,meshmatcap_vert:Wy,meshmatcap_frag:qy,meshnormal_vert:Xy,meshnormal_frag:Yy,meshphong_vert:Ky,meshphong_frag:Zy,meshphysical_vert:Jy,meshphysical_frag:Qy,meshtoon_vert:jy,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:ax,sprite_vert:rx,sprite_frag:sx},_e={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ui={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const to={r:0,b:0,g:0},ox=new kt,zp=new Oe;zp.set(-1,0,0,0,1,0,0,0,1);function lx(i,e,t,n,a,r){const s=new at(0);let o=a===!0?0:1,c,l,d=null,u=0,f=null;function h(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const x=b.backgroundBlurriness>0;T=e.get(T,x)}return T}function m(b){let T=!1;const x=h(b);x===null?p(s,o):x&&x.isColor&&(p(x,1),T=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){const x=h(T);x&&(x.isCubeTexture||x.mapping===Wo)?(l===void 0&&(l=new qn(new qa(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ir(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zp),l.material.toneMapped=Je.getTransfer(x.colorSpace)!==ct,(d!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new qn(new Rs(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ir(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(to,Dp(i)),t.buffers.color.setClear(to.r,to.g,to.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,T=1){s.set(b),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(s,o)},render:m,addToRenderList:_,dispose:g}}function cx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let r=a,s=!1;function o(C,N,O,L,z){let X=!1;const $=u(C,L,O,N);r!==$&&(r=$,l(r.object)),X=h(C,L,O,z),X&&m(C,L,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,x(C,N,O,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function u(C,N,O,L){const z=L.wireframe===!0;let X=n[N.id];X===void 0&&(X={},n[N.id]=X);const $=C.isInstancedMesh===!0?C.id:0;let te=X[$];te===void 0&&(te={},X[$]=te);let Y=te[O.id];Y===void 0&&(Y={},te[O.id]=Y);let j=Y[z];return j===void 0&&(j=f(c()),Y[z]=j),j}function f(C){const N=[],O=[],L=[];for(let z=0;z<t;z++)N[z]=0,O[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:C,attributes:{},index:null}}function h(C,N,O,L){const z=r.attributes,X=N.attributes;let $=0;const te=O.getAttributes();for(const Y in te)if(te[Y].location>=0){const ae=z[Y];let Se=X[Y];if(Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),ae===void 0||ae.attribute!==Se||Se&&ae.data!==Se.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function m(C,N,O,L){const z={},X=N.attributes;let $=0;const te=O.getAttributes();for(const Y in te)if(te[Y].location>=0){let ae=X[Y];ae===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const Se={};Se.attribute=ae,ae&&ae.data&&(Se.data=ae.data),z[Y]=Se,$++}r.attributes=z,r.attributesNum=$,r.index=L}function _(){const C=r.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function p(C){g(C,0)}function g(C,N){const O=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;O[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),z[C]!==N&&(i.vertexAttribDivisor(C,N),z[C]=N)}function b(){const C=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==C[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function T(C,N,O,L,z,X,$){$===!0?i.vertexAttribIPointer(C,N,O,z,X):i.vertexAttribPointer(C,N,O,L,z,X)}function x(C,N,O,L){_();const z=L.attributes,X=O.getAttributes(),$=N.defaultAttributeValues;for(const te in X){const Y=X[te];if(Y.location>=0){let j=z[te];if(j===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const ae=j.normalized,Se=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const qe=Ae.buffer,Fe=Ae.type,K=Ae.bytesPerElement,P=Fe===i.INT||Fe===i.UNSIGNED_INT||j.gpuType===Fd;if(j.isInterleavedBufferAttribute){const G=j.data,de=G.stride,Pe=j.offset;if(G.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)g(Y.location+xe,G.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let xe=0;xe<Y.locationSize;xe++)T(Y.location+xe,Se/Y.locationSize,Fe,ae,de*K,(Pe+Se/Y.locationSize*xe)*K,P)}else{if(j.isInstancedBufferAttribute){for(let G=0;G<Y.locationSize;G++)g(Y.location+G,j.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let G=0;G<Y.locationSize;G++)p(Y.location+G);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let G=0;G<Y.locationSize;G++)T(Y.location+G,Se/Y.locationSize,Fe,ae,Se*K,Se/Y.locationSize*G*K,P)}}else if($!==void 0){const ae=$[te];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Y.location,ae);break;case 3:i.vertexAttrib3fv(Y.location,ae);break;case 4:i.vertexAttrib4fv(Y.location,ae);break;default:i.vertexAttrib1fv(Y.location,ae)}}}}b()}function M(){w();for(const C in n){const N=n[C];for(const O in N){const L=N[O];for(const z in L){const X=L[z];for(const $ in X)d(X[$].object),delete X[$];delete L[z]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const O in N){const L=N[O];for(const z in L){const X=L[z];for(const $ in X)d(X[$].object),delete X[$];delete L[z]}}delete n[C.id]}function A(C){for(const N in n){const O=n[N];for(const L in O){const z=O[L];if(z[C.id]===void 0)continue;const X=z[C.id];for(const $ in X)d(X[$].object),delete X[$];delete z[C.id]}}}function v(C){for(const N in n){const O=n[N],L=C.isInstancedMesh===!0?C.id:0,z=O[L];if(z!==void 0){for(const X in z){const $=z[X];for(const te in $)d($[te].object),delete $[te];delete z[X]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function w(){k(),s=!0,r!==a&&(r=a,l(r.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function dx(i,e,t){let n;function a(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let f=0;for(let h=0;h<d;h++)f+=l[h];t.update(f,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function ux(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&A!==vi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ne("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,maxSamples:M,samples:E}}function fx(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new ta,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||a;return a=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!a||m===null||m.length===0||r&&!p)r?d(null):l();else{const b=r?0:n,T=b*4;let x=g.clippingState||null;c.value=x,x=d(m,f,T,h);for(let M=0;M!==T;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=h+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,x=h;T!==_;++T,x+=4)s.copy(u[T]).applyMatrix4(b,o),s.normal.toArray(p,x),p[x+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const gr=4,hx=6,px=20,mx=256,Vr=new Yd,lf=new at;let zl=null,Bl=0,Hl=0,Gl=!1;const gx=new W,Ea=new W;class cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=gx}=r;zl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Bl,Hl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ba||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Mi,format:ti,colorSpace:Do,depthBuffer:!1},a=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_x(r)),this._blurMaterial=yx(r,e,t),this._ggxMaterial=vx(r,e,t)}return a}_compileMaterial(e){const t=new qn(new Wi,e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,n,a,r){const c=new Vn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(lf),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new qa,new Cp({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(lf),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));const M=this._cubeSize;cr(a,x*M,T>2?M:0,M,M),u.setRenderTarget(a),g&&u.render(_,c),u.render(e,c)}u.toneMapping=h,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ba||e.mapping===Dr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),f=l*1.25,h=u*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-gr?n-m+gr:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=m-t,cr(r,p,g,3*_,2*_),a.setRenderTarget(r),a.render(o,Vr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,cr(e,p,g,3*_,2*_),a.setRenderTarget(e),a.render(o,Vr)}_blur(e,t,n,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,a,r){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],u=3*d*(a>this._lodMax-gr?a-this._lodMax+gr:0),f=4*(this._cubeSize-d);cr(t,u,f,3*d,2*d),s.setRenderTarget(t),s.render(c,Vr)}}function _x(i){const e=[],t=[];let n=i;const a=i-gr+1+hx;for(let r=0;r<a;r++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,h=3,m=new Float32Array(h*f*u),_=new Float32Array(h*f*u);for(let g=0;g<u;g++){const b=g%3*2/3-1,T=g>2?0:-1,x=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(x,h*f*g);for(let M=0;M<f;M++){const E=d[M*2]*2-1,A=d[M*2+1]*2-1;g===0?Ea.set(1,A,E):g===1?Ea.set(-E,1,-A):g===2?Ea.set(-E,A,1):g===3?Ea.set(-1,A,-E):g===4?Ea.set(-E,-1,A):Ea.set(E,A,-1),Ea.toArray(_,(g*f+M)*h)}}const p=new Wi;p.setAttribute("position",new Oi(m,h)),p.setAttribute("outputDirection",new Oi(_,h)),t.push(new qn(p,null)),n>gr&&n--}return{lodMeshes:t,sizeLods:e}}function df(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function vx(i,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function yx(i,e,t){return new Ei({name:"SphericalGaussianBlur",defines:{SAMPLES:px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function uf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ff(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bp extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Lp(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qa(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ni});r.uniforms.tEquirect.value=t;const s=new qn(a,r),o=t.minFilter;return t.minFilter===Pa&&(t.minFilter=en),new S0(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function xx(i){let e=new WeakMap,t=new WeakMap,n=null;function a(f,h=!1){return f==null?null:h?s(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===fl||h===hl)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new Bp(m.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===fl||h===hl,_=h===Ba||h===Dr;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new cf(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new cf(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function o(f,h){return h===fl?f.mapping=Ba:h===hl&&(f.mapping=Dr),f}function c(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(f){const h=f.target;h.removeEventListener("dispose",d);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function bx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Sr("WebGLRenderer: "+n+" extension not supported."),a}}}function Sx(i,e,t,n){const a={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete a[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(u){const f=[],h=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let T=0,x=b.length;T<x;T+=3){const M=b[T+0],E=b[T+1],A=b[T+2];f.push(M,E,E,A,A,M)}}else{const b=m.array;_=m.version;for(let T=0,x=b.length/3-1;T<x;T+=3){const M=T+0,E=T+1,A=T+2;f.push(M,E,E,A,A,M)}}const p=new(m.count>=65535?Rp:kp)(f,1);p.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Mx(i,e,t){let n;function a(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*s),t.update(f,n,1)}function l(u,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,u*s,h),t.update(f,n,h))}function d(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,h);let _=0;for(let p=0;p<h;p++)_+=f[p];t.update(_,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Ex(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function wx(i,e,t){const n=new WeakMap,a=new At;function r(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*M*4*u),A=new wp(E,x,M,u);A.type=vi,A.needsUpdate=!0;const v=T*4;for(let k=0;k<u;k++){const C=p[k],N=g[k],O=b[k],L=x*M*4*k;for(let z=0;z<C.count;z++){const X=z*v;h===!0&&(a.fromBufferAttribute(C,z),E[L+X+0]=a.x,E[L+X+1]=a.y,E[L+X+2]=a.z,E[L+X+3]=0),m===!0&&(a.fromBufferAttribute(N,z),E[L+X+4]=a.x,E[L+X+5]=a.y,E[L+X+6]=a.z,E[L+X+7]=0),_===!0&&(a.fromBufferAttribute(O,z),E[L+X+8]=a.x,E[L+X+9]=a.y,E[L+X+10]=a.z,E[L+X+11]=O.itemSize===4?a.w:1)}}f={count:u,texture:A,size:new nt(x,M)},n.set(o,f),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const m=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tx(i,e,t,n,a){let r=new WeakMap;function s(l){const d=a.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Ax={[cp]:"LINEAR_TONE_MAPPING",[dp]:"REINHARD_TONE_MAPPING",[up]:"CINEON_TONE_MAPPING",[fp]:"ACES_FILMIC_TONE_MAPPING",[pp]:"AGX_TONE_MAPPING",[mp]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function kx(i,e,t,n,a,r){const s=new ni(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Wi;l.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zi([0,2,0,0,2,0],2));const d=new h0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qn(l,d),f=new Yd(-1,1,1,-1,0,1);let h=null,m=null,_=!1,p,g=null,b=[],T=!1;this.setSize=function(x,M){s.setSize(x,M),o!==null&&o.setSize(x,M),c!==null&&c.setSize(x,M);for(let E=0;E<b.length;E++){const A=b[E];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){b=x,T=b.length>0&&b[0].isRenderPass===!0;const M=s.width,E=s.height;b.length>0&&o===null&&(o=new ni(M,E,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),c=new ni(M,E,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){const v=b[A];v.setSize&&v.setSize(M,E)}},this.begin=function(x,M){if(_||x.toneMapping===xi&&b.length===0)return!1;if(g=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return T===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=xi,!0},this.hasRenderPass=function(){return T},this.end=function(x,M){x.toneMapping=p,_=!0;let E=s,A=o;for(let v=0;v<b.length;v++){const w=b[v];w.enabled!==!1&&(w.render(x,A,E,M),w.needsSwap!==!1&&(E=A,A=A===o?c:o))}if(h!==x.outputColorSpace||m!==x.toneMapping){h=x.outputColorSpace,m=x.toneMapping,d.defines={},Je.getTransfer(h)===ct&&(d.defines.SRGB_TRANSFER="");const v=Ax[m];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(g),x.render(u,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const Hp=new Vt,sd=new Ss(1,1),Gp=new wp,Vp=new G_,$p=new Lp,hf=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=hf[a];if(r===void 0&&(r=new Float32Array(a),hf[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),Ot(t,n)}}function Ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),Ot(t,n)}}function Ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),Ot(t,n)}}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function $x(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(sd.compareFunction=t.isReversedDepthBuffer()?$d:Vd,r=sd):r=Hp,t.setTexture2D(e||r,a)}function Wx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Vp,a)}function qx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||$p,a)}function Xx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Gp,a)}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Cx;case 35665:return Lx;case 35666:return Px;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return Bx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Kx(i,e){i.uniform1fv(this.addr,e)}function Zx(i,e){const t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){const t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){const t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function jx(i,e){const t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eb(i,e){const t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tb(i,e){const t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nb(i,e){i.uniform1iv(this.addr,e)}function ib(i,e){i.uniform2iv(this.addr,e)}function ab(i,e){i.uniform3iv(this.addr,e)}function rb(i,e){i.uniform4iv(this.addr,e)}function sb(i,e){i.uniform1uiv(this.addr,e)}function ob(i,e){i.uniform2uiv(this.addr,e)}function lb(i,e){i.uniform3uiv(this.addr,e)}function cb(i,e){i.uniform4uiv(this.addr,e)}function db(i,e,t){const n=this.cache,a=e.length,r=Xo(t,a);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=sd:s=Hp;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function ub(i,e,t){const n=this.cache,a=e.length,r=Xo(t,a);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Vp,r[s])}function fb(i,e,t){const n=this.cache,a=e.length,r=Xo(t,a);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||$p,r[s])}function hb(i,e,t){const n=this.cache,a=e.length,r=Xo(t,a);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Gp,r[s])}function pb(i){switch(i){case 5126:return Kx;case 35664:return Zx;case 35665:return Jx;case 35666:return Qx;case 35674:return jx;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}class mb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pb(t.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function vf(i,e){i.seq.push(e),i.map[e.id]=e}function vb(i,e,t){const n=i.name,a=n.length;for(Vl.lastIndex=0;;){const r=Vl.exec(n),s=Vl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){vf(t,l===void 0?new mb(o,i,e):new gb(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new _b(o),vf(t,u)),t=u}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);vb(o,c,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function yf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yb=37297;let xb=0;function bb(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const xf=new Oe;function Sb(i){Je._getMatrix(xf,Je.workingColorSpace,i);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Io:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bb(i.getShaderSource(e),o)}else return r}function Mb(i,e){const t=Sb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Eb={[cp]:"Linear",[dp]:"Reinhard",[up]:"Cineon",[fp]:"ACESFilmic",[pp]:"AgX",[mp]:"Neutral",[hp]:"Custom"};function wb(i,e){const t=Eb[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new W;function Tb(){Je.getLuminanceCoefficients(no);const i=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function kb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Zr(i){return i!==""}function Sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(i){return i.replace(Cb,Pb)}const Lb=new Map;function Pb(i,e){let t=Ge[e];if(t===void 0){const n=Lb.get(e);if(n!==void 0)t=Ge[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return od(t)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(Db,Ib)}function Ib(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Ub={[ho]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Nb(i){return Ub[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fb={[Ba]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function Ob(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const zb={[Dr]:"ENVMAP_MODE_REFRACTION"};function Bb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hb={[Nd]:"ENVMAP_BLENDING_MULTIPLY",[__]:"ENVMAP_BLENDING_MIX",[v_]:"ENVMAP_BLENDING_ADD"};function Gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hb[i.combine]||"ENVMAP_BLENDING_NONE"}function Vb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $b(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Nb(t),l=Ob(t),d=Bb(t),u=Gb(t),f=Vb(t),h=Ab(t),m=kb(r),_=a.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zr).join(`
`),g.length>0&&(g+=`
`)):(p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),g=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==xi?wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Mb("linearToOutputTexel",t.outputColorSpace),Tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),s=od(s),s=Sf(s,t),s=Mf(s,t),o=od(o),o=Sf(o,t),o=Mf(o,t),s=Ef(s),o=Ef(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+p+s,x=b+g+o,M=yf(a,a.VERTEX_SHADER,T),E=yf(a,a.FRAGMENT_SHADER,x);a.attachShader(_,M),a.attachShader(_,E),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const N=a.getProgramInfoLog(_)||"",O=a.getShaderInfoLog(M)||"",L=a.getShaderInfoLog(E)||"",z=N.trim(),X=O.trim(),$=L.trim();let te=!0,Y=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,M,E);else{const j=bf(a,M,"vertex"),ae=bf(a,E,"fragment");rt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+j+`
`+ae)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(X===""||$==="")&&(Y=!1);Y&&(C.diagnostics={runnable:te,programLog:z,vertexShader:{log:X,prefix:p},fragmentShader:{log:$,prefix:g}})}a.deleteShader(M),a.deleteShader(E),v=new yo(a,_),w=Rb(a,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(_,yb)),k},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let Wb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xb(e),t.set(e,n)),n}}class Xb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function Yb(i){return i===Ha||i===Lo||i===Po}function Kb(i,e,t,n,a,r){const s=new Tp,o=new qb,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,k,C,N,O){const L=C.fog,z=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||X,$),Y=te&&te.mapping===Wo?te.image.height:null,j=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=ae!==void 0?ae.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let qe,Fe,K,P;if(j){const mt=ui[j];qe=mt.vertexShader,Fe=mt.fragmentShader}else{qe=v.vertexShader,Fe=v.fragmentShader;const mt=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,mt,st),K=mt.id,P=st.id}const G=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Be=!!v.map,yt=!!v.matcap,$e=!!te,Xe=!!v.aoMap,pt=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,zt=!!v.displacementMap,dn=!!v.emissiveMap,Mt=!!v.metalnessMap,Pt=!!v.roughnessMap,U=v.anisotropy>0,Yt=v.clearcoat>0,lt=v.dispersion>0,R=v.retroreflectivity>0,y=v.iridescence>0,F=v.sheen>0,V=v.transmission>0,Z=U&&!!v.anisotropyMap,ce=Yt&&!!v.clearcoatMap,ue=Yt&&!!v.clearcoatNormalMap,J=Yt&&!!v.clearcoatRoughnessMap,ne=y&&!!v.iridescenceMap,fe=y&&!!v.iridescenceThicknessMap,Ce=F&&!!v.sheenColorMap,ge=F&&!!v.sheenRoughnessMap,he=!!v.specularMap,Le=!!v.specularColorMap,Ue=!!v.specularIntensityMap,ze=V&&!!v.transmissionMap,I=V&&!!v.thicknessMap,pe=!!v.gradientMap,ee=!!v.alphaMap,me=v.alphaTest>0,be=!!v.alphaHash,re=!!v.extensions;let De=xi;v.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(De=i.toneMapping);const ke={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:P,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:yt,envMap:$e,envMapMode:$e&&te.mapping,envMapCubeUVHeight:Y,aoMap:Xe,lightMap:pt,bumpMap:Ke,normalMap:xt,displacementMap:zt,emissiveMap:dn,normalMapObjectSpace:xt&&v.normalMapType===b_,normalMapTangentSpace:xt&&v.normalMapType===id,packedNormalMap:xt&&v.normalMapType===id&&Yb(v.normalMap.format),metalnessMap:Mt,roughnessMap:Pt,anisotropy:U,anisotropyMap:Z,clearcoat:Yt,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:J,dispersion:lt,retroreflection:R,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:F,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:he,specularColorMap:Le,specularIntensityMap:Ue,transmission:V,transmissionMap:ze,thicknessMap:I,gradientMap:pe,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:be,combine:v.combine,mapUv:Be&&m(v.map.channel),aoMapUv:Xe&&m(v.aoMap.channel),lightMapUv:pt&&m(v.lightMap.channel),bumpMapUv:Ke&&m(v.bumpMap.channel),normalMapUv:xt&&m(v.normalMap.channel),displacementMapUv:zt&&m(v.displacementMap.channel),emissiveMapUv:dn&&m(v.emissiveMap.channel),metalnessMapUv:Mt&&m(v.metalnessMap.channel),roughnessMapUv:Pt&&m(v.roughnessMap.channel),anisotropyMapUv:Z&&m(v.anisotropyMap.channel),clearcoatMapUv:ce&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:Le&&m(v.specularColorMap.channel),specularIntensityMapUv:Ue&&m(v.specularIntensityMap.channel),transmissionMapUv:ze&&m(v.transmissionMap.channel),thicknessMapUv:I&&m(v.thicknessMap.channel),alphaMapUv:ee&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||U),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Be||ee),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:dn&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gi,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)w.push(k),w.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(g(w,v),b(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function T(v){const w=h[v.type];let k;if(w){const C=ui[w];k=d0.clone(C.uniforms)}else k=v.uniforms;return k}function x(v,w){let k=d.get(w);return k!==void 0?++k.usedTimes:(k=new $b(i,w,v,a),l.push(k),d.set(w,k)),k}function M(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:A}}function Zb(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Jb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Af(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,_,p,g){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:m,materialVariant:s(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=m,b.materialVariant=s(f),b.groupOrder=_,b.renderOrder=f.renderOrder,b.z=p,b.group=g),e++,b}function c(f,h,m,_,p,g,b){b.reversedDepth===!0&&(p=-p);const T=o(f,h,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?a.push(T):t.push(T)}function l(f,h,m,_,p,g){const b=o(f,h,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?a.unshift(b):t.unshift(b)}function d(f,h){t.length>1&&t.sort(f||Jb),n.length>1&&n.sort(h||Tf),a.length>1&&a.sort(h||Tf)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:c,unshift:l,finish:u,sort:d}}function Qb(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Af,i.set(n,[s])):a>=r.length?(s=new Af,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function jb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function eS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tS=0;function nS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iS(i){const e=new jb,t=eS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const a=new W,r=new kt,s=new kt;function o(l){let d=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let h=0,m=0,_=0,p=0,g=0,b=0,T=0,x=0,M=0,E=0,A=0,v=0,w=0,k=0;l.sort(nS);for(let N=0,O=l.length;N<O;N++){const L=l[N],z=L.color,X=L.intensity,$=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ha?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=z.r*X,u+=z.g*X,f+=z.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);k++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,ae=t.get(L);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=ae,n.sunShadowMap[m]=te;const Se=j.getViewportCount();for(let Ae=0;Ae<Se;Ae++)n.sunShadowMatrix[_+Ae]=j.getMatrix(Ae),n.sunShadowCascade[_+Ae]=j._cascadeData[Ae];_+=Se,m++}n.sun[h]=Y,h++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,ae=t.get(L);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(X),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[b]=Y;const j=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[b]=j.matrix,L.castShadow){const ae=t.get(L);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,n.spotShadow[b]=ae,n.spotShadowMap[b]=te,A++}b++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=Y,T++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,ae=t.get(L);ae.shadowIntensity=j.intensity,ae.shadowBias=j.bias,ae.shadowNormalBias=j.normalBias,ae.shadowRadius=j.radius,ae.shadowMapSize=j.mapSize,ae.shadowCameraNear=j.camera.near,ae.shadowCameraFar=j.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[x]=Y,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==h||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==T||C.hemiLength!==x||C.numSunShadows!==m||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==A||C.numSpotMaps!==v||C.numLightProbes!==k)&&(n.sun.length=h,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=k,C.sunLength=h,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=T,C.hemiLength=x,C.numSunShadows=m,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=A,C.numSpotMaps=v,C.numLightProbes=k,n.version=tS++)}function c(l,d){let u=0,f=0,h=0,m=0,_=0,p=0;const g=d.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const x=l[b];if(x.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),u++}else if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),f++}else if(x.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),s.identity(),r.copy(x.matrixWorld),r.premultiply(g),s.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function kf(i){const e=new iS(i),t=[],n=[],a=[];function r(f){u.camera=f,t.length=0,n.length=0,a.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function c(f){a.push(f)}function l(){e.setup(t)}function d(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function aS(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new kf(i),e.set(a,[o])):r>=s.length?(o=new kf(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
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
}`,oS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],lS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Rf=new kt,$r=new W,$l=new W;function cS(i,e,t){let n=new Xd;const a=new nt,r=new nt,s=new At,o=new p0,c=new m0,l={},d=t.maxTextureSize,u={[za]:xn,[xn]:za,[gi]:gi},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rS,fragmentShader:sS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Wi;m.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let g=this.type;this.render=function(E,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Qg&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ho);const w=i.getRenderTarget(),k=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=g!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){const X=E[L],$=X.shadow;if($===void 0){Ne("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const te=$.getFrameExtents();a.multiply(te),r.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/te.x),a.x=r.x*te.x,$.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/te.y),a.y=r.y*te.y,$.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||O===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Kr){if(X.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ni(a.x,a.y,{format:Ha,type:Mi,minFilter:en,magFilter:en,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new Ss(a.x,a.y,vi),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt}else X.isPointLight?($.map=new Bp(a.x),$.map.depthTexture=new l0(a.x,Si)):($.map=new ni(a.x,a.y),$.map.depthTexture=new Ss(a.x,a.y,Si)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Vi,this.type===ho?($.map.depthTexture.compareFunction=Y?$d:Vd,$.map.depthTexture.minFilter=en,$.map.depthTexture.magFilter=en):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nt,$.map.depthTexture.magFilter=Nt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==a.x||$.map.height!==a.y)&&$.map.setSize(a.x,a.y);const j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,v);for(let ae=0;ae<j;ae++){const Se=$.getCamera(ae);if(X.isPointLight){const Ae=$.camera,qe=$.matrix,Fe=X.distance||Ae.far;Fe!==Ae.far&&(Ae.far=Fe,Ae.updateProjectionMatrix()),$r.setFromMatrixPosition(X.matrixWorld),Ae.position.copy($r),$l.copy(Ae.position),$l.add(oS[ae]),Ae.up.copy(lS[ae]),Ae.lookAt($l),Ae.updateMatrixWorld(),qe.makeTranslation(-$r.x,-$r.y,-$r.z),Rf.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Rf,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ae),i.clear();else{ae===0&&(i.setRenderTarget($.map),i.clear());const Ae=$.getViewport(ae);s.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),N.viewport(s)}n=$.getFrustum(ae),x(A,v,Se,X,this.type)}$.isPointLightShadow!==!0&&this.type===Kr&&b($,v),$.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,k,C)};function b(E,A){const v=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new ni(a.x,a.y,{format:Ha,type:Mi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,h,_,null)}function T(E,A,v,w){let k=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)k=C;else if(k=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=k.uuid,O=A.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let z=L[O];z===void 0&&(z=k.clone(),L[O]=z,A.addEventListener("dispose",M)),k=z}if(k.visible=A.visible,k.wireframe=A.wireframe,w===Kr?k.side=A.shadowSide!==null?A.shadowSide:A.side:k.side=A.shadowSide!==null?A.shadowSide:u[A.side],k.alphaMap=A.alphaMap,k.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,k.map=A.map,k.clipShadows=A.clipShadows,k.clippingPlanes=A.clippingPlanes,k.clipIntersection=A.clipIntersection,k.displacementMap=A.displacementMap,k.displacementScale=A.displacementScale,k.displacementBias=A.displacementBias,k.wireframeLinewidth=A.wireframeLinewidth,k.linewidth=A.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const N=i.properties.get(k);N.light=v}return k}function x(E,A,v,w,k){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Kr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),L=E.material;if(Array.isArray(L)){const z=O.groups;for(let X=0,$=z.length;X<$;X++){const te=z[X],Y=L[te.materialIndex];if(Y&&Y.visible){const j=T(E,Y,w,k);E.onBeforeShadow(i,E,A,v,O,j,te),i.renderBufferDirect(v,null,O,j,E,te),E.onAfterShadow(i,E,A,v,O,j,te)}}}else if(L.visible){const z=T(E,L,w,k);E.onBeforeShadow(i,E,A,v,O,z,null),i.renderBufferDirect(v,null,O,z,E,null),E.onAfterShadow(i,E,A,v,O,z,null)}}const N=E.children;for(let O=0,L=N.length;O<L;O++)x(N[O],A,v,w,k)}function M(E){E.target.removeEventListener("dispose",M);for(const v in l){const w=l[v],k=E.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function dS(i,e){function t(){let I=!1;const pe=new At;let ee=null;const me=new At(0,0,0,0);return{setMask:function(be){ee!==be&&!I&&(i.colorMask(be,be,be,be),ee=be)},setLocked:function(be){I=be},setClear:function(be,re,De,ke,mt){mt===!0&&(be*=ke,re*=ke,De*=ke),pe.set(be,re,De,ke),me.equals(pe)===!1&&(i.clearColor(be,re,De,ke),me.copy(pe))},reset:function(){I=!1,ee=null,me.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,ee=null,me=null,be=null;return{setReversed:function(re){if(pe!==re){const De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const ke=be;be=null,this.setClear(ke)}},getReversed:function(){return pe},setTest:function(re){re?G(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(re){ee!==re&&!I&&(i.depthMask(re),ee=re)},setFunc:function(re){if(pe&&(re=D_[re]),me!==re){switch(re){case vc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=re}},setLocked:function(re){I=re},setClear:function(re){be!==re&&(be=re,pe&&(re=1-re),i.clearDepth(re))},reset:function(){I=!1,ee=null,me=null,be=null,pe=!1}}}function a(){let I=!1,pe=null,ee=null,me=null,be=null,re=null,De=null,ke=null,mt=null;return{setTest:function(st){I||(st?G(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(st){pe!==st&&!I&&(i.stencilMask(st),pe=st)},setFunc:function(st,Xn,ri){(ee!==st||me!==Xn||be!==ri)&&(i.stencilFunc(st,Xn,ri),ee=st,me=Xn,be=ri)},setOp:function(st,Xn,ri){(re!==st||De!==Xn||ke!==ri)&&(i.stencilOp(st,Xn,ri),re=st,De=Xn,ke=ri)},setLocked:function(st){I=st},setClear:function(st){mt!==st&&(i.clearStencil(st),mt=st)},reset:function(){I=!1,pe=null,ee=null,me=null,be=null,re=null,De=null,ke=null,mt=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},u={},f={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,M=null,E=null,A=null,v=new at(0,0,0),w=0,k=!1,C=null,N=null,O=null,L=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=te>=2);let j=null,ae={};const Se=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),qe=new At().fromArray(Se),Fe=new At().fromArray(Ae);function K(I,pe,ee,me){const be=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return re}const P={};P[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),G(i.DEPTH_TEST),s.setFunc(_s),Ke(!1),xt(Pu),G(i.CULL_FACE),Xe(Ni);function G(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function de(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pe(I,pe){return f[I]!==pe?(i.bindFramebuffer(I,pe),f[I]=pe,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function xe(I,pe){let ee=m,me=!1;if(I){ee=h.get(pe),ee===void 0&&(ee=[],h.set(pe,ee));const be=I.textures;if(ee.length!==be.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let re=0,De=be.length;re<De;re++)ee[re]=i.COLOR_ATTACHMENT0+re;ee.length=be.length,me=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,me=!0);me&&i.drawBuffers(ee)}function Be(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const yt={[ur]:i.FUNC_ADD,[e_]:i.FUNC_SUBTRACT,[t_]:i.FUNC_REVERSE_SUBTRACT};yt[n_]=i.MIN,yt[i_]=i.MAX;const $e={[a_]:i.ZERO,[r_]:i.ONE,[s_]:i.SRC_COLOR,[op]:i.SRC_ALPHA,[f_]:i.SRC_ALPHA_SATURATE,[d_]:i.DST_COLOR,[l_]:i.DST_ALPHA,[o_]:i.ONE_MINUS_SRC_COLOR,[lp]:i.ONE_MINUS_SRC_ALPHA,[u_]:i.ONE_MINUS_DST_COLOR,[c_]:i.ONE_MINUS_DST_ALPHA,[h_]:i.CONSTANT_COLOR,[p_]:i.ONE_MINUS_CONSTANT_COLOR,[m_]:i.CONSTANT_ALPHA,[g_]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,pe,ee,me,be,re,De,ke,mt,st){if(I===Ni){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(G(i.BLEND),p=!0),I!==jg){if(I!==g||st!==k){if((b!==ur||M!==ur)&&(i.blendEquation(i.FUNC_ADD),b=ur,M=ur),st)switch(I){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",I);break}else switch(I){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",I);break}T=null,x=null,E=null,A=null,v.set(0,0,0),w=0,g=I,k=st}return}be=be||pe,re=re||ee,De=De||me,(pe!==b||be!==M)&&(i.blendEquationSeparate(yt[pe],yt[be]),b=pe,M=be),(ee!==T||me!==x||re!==E||De!==A)&&(i.blendFuncSeparate($e[ee],$e[me],$e[re],$e[De]),T=ee,x=me,E=re,A=De),(ke.equals(v)===!1||mt!==w)&&(i.blendColor(ke.r,ke.g,ke.b,mt),v.copy(ke),w=mt),g=I,k=!1}function pt(I,pe){I.side===gi?de(i.CULL_FACE):G(i.CULL_FACE);let ee=I.side===xn;pe&&(ee=!ee),Ke(ee),I.blending===is&&I.transparent===!1?Xe(Ni):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(I){C!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),C=I)}function xt(I){I!==Zg?(G(i.CULL_FACE),I!==N&&(I===Pu?i.cullFace(i.BACK):I===Jg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),N=I}function zt(I){I!==O&&($&&i.lineWidth(I),O=I)}function dn(I,pe,ee){I?(G(i.POLYGON_OFFSET_FILL),(L!==pe||z!==ee)&&(L=pe,z=ee,s.getReversed()&&(pe=-pe),i.polygonOffset(pe,ee))):de(i.POLYGON_OFFSET_FILL)}function Mt(I){I?G(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Pt(I){I===void 0&&(I=i.TEXTURE0+X-1),j!==I&&(i.activeTexture(I),j=I)}function U(I,pe,ee){ee===void 0&&(j===null?ee=i.TEXTURE0+X-1:ee=j);let me=ae[ee];me===void 0&&(me={type:void 0,texture:void 0},ae[ee]=me),(me.type!==I||me.texture!==pe)&&(j!==ee&&(i.activeTexture(ee),j=ee),i.bindTexture(I,pe||P[I]),me.type=I,me.texture=pe)}function Yt(){const I=ae[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function y(){try{i.texSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function F(){try{i.texSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function ue(){try{i.texStorage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function ne(){try{i.texImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function fe(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function Ce(I,pe){u[I]!==pe&&(i.pixelStorei(I,pe),u[I]=pe)}function ge(I){qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function he(I){Fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Le(I,pe){let ee=l.get(pe);ee===void 0&&(ee=new WeakMap,l.set(pe,ee));let me=ee.get(I);me===void 0&&(me=i.getUniformBlockIndex(pe,I.name),ee.set(I,me))}function Ue(I,pe){const me=l.get(pe).get(I);c.get(pe)!==me&&(i.uniformBlockBinding(pe,me,I.__bindingPointIndex),c.set(pe,me))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,ae={},f={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,M=null,E=null,A=null,v=new at(0,0,0),w=0,k=!1,C=null,N=null,O=null,L=null,z=null,qe.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:G,disable:de,bindFramebuffer:Pe,drawBuffers:xe,useProgram:Be,setBlending:Xe,setMaterial:pt,setFlipSided:Ke,setCullFace:xt,setLineWidth:zt,setPolygonOffset:dn,setScissorTest:Mt,activeTexture:Pt,bindTexture:U,unbindTexture:Yt,compressedTexImage2D:lt,compressedTexImage3D:R,texImage2D:J,texImage3D:ne,pixelStorei:Ce,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:ue,texSubImage2D:y,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:ge,viewport:he,reset:ze}}function uS(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,d=new WeakMap,u=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return m?new OffscreenCanvas(R,y):bs("canvas")}function p(R,y,F){let V=1;const Z=lt(R);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(V*Z.width),ue=Math.floor(V*Z.height);f===void 0&&(f=_(ce,ue));const J=y?_(ce,ue):f;return J.width=ce,J.height=ue,J.getContext("2d").drawImage(R,0,0,ce,ue),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+ue+")."),J}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function g(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,y,F,V,Z,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),F===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),y===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),F===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(F===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),F===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){const ne=ce?Io:Je.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=ne===ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),F===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(R,y){let F;return R?y===null||y===Si||y===ys?F=i.DEPTH24_STENCIL8:y===vi?F=i.DEPTH32F_STENCIL8:y===vs&&(F=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Si||y===ys?F=i.DEPTH_COMPONENT24:y===vi?F=i.DEPTH_COMPONENT32F:y===vs&&(F=i.DEPTH_COMPONENT16),F}function E(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function v(R){const y=R.target;y.removeEventListener("dispose",v),C(y)}function w(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,V=h.get(F);if(V){const Z=V[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&k(R),Object.keys(V).length===0&&h.delete(F)}n.remove(R)}function k(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const F=R.source,V=h.get(F);delete V[y.__cacheKey],s.memory.textures--}function C(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let Z=0;Z<y.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let V=0,Z=F.length;V<Z;V++){const ce=n.get(F[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),s.memory.textures--),n.remove(F[V])}n.remove(R)}let N=0;function O(){N=0}function L(){return N}function z(R){N=R}function X(){const R=N;return R>=a.maxTextures&&Ne("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,R}function $(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function te(R,y){const F=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const V=R.image;if(V===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function Y(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){de(F,R,y);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function j(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){de(F,R,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function ae(R,y){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Pe(F,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const Se={[wc]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},Ae={[Nt]:i.NEAREST,[y_]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[Pa]:i.LINEAR_MIPMAP_LINEAR},qe={[M_]:i.NEVER,[k_]:i.ALWAYS,[E_]:i.LESS,[Vd]:i.LEQUAL,[w_]:i.EQUAL,[$d]:i.GEQUAL,[T_]:i.GREATER,[A_]:i.NOTEQUAL};function Fe(R,y){if(y.type===vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===pl||y.magFilter===Us||y.magFilter===Pa||y.minFilter===en||y.minFilter===pl||y.minFilter===Us||y.minFilter===Pa)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Se[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Se[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Se[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nt||y.minFilter!==Us&&y.minFilter!==Pa||y.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const V=y.source;let Z=h.get(V);Z===void 0&&(Z={},h.set(V,Z));const ce=$(y);if(ce!==R.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Z[ce].usedTimes++;const ue=Z[R.__cacheKey];ue!==void 0&&(Z[R.__cacheKey].usedTimes--,ue.usedTimes===0&&k(y)),R.__cacheKey=ce,R.__webglTexture=Z[ce].texture}return F}function P(R,y,F){return Math.floor(Math.floor(R/F)/y)}function G(R,y,F,V){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,F,V,y.data);else{ce.sort((Ce,ge)=>Ce.start-ge.start);let ue=0;for(let Ce=1;Ce<ce.length;Ce++){const ge=ce[ue],he=ce[Ce],Le=ge.start+ge.count,Ue=P(he.start,y.width,4),ze=P(ge.start,y.width,4);he.start<=Le+1&&Ue===ze&&P(he.start+he.count-1,y.width,4)===Ue?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++ue,ce[ue]=he)}ce.length=ue+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,ge=ce.length;Ce<ge;Ce++){const he=ce[Ce],Le=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),ze=Le%y.width,I=Math.floor(Le/y.width),pe=Ue,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ze,I,pe,ee,F,V,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function de(R,y,F){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);const Z=K(R,y),ce=y.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+F);const ue=n.get(ce);if(ce.version!==ue.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ee=Je.getPrimaries(Je.workingColorSpace),me=y.colorSpace===ia?null:Je.getPrimaries(y.colorSpace),be=y.colorSpace===ia||ee===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=p(y.image,!1,a.maxTextureSize);ne=Yt(y,ne);const fe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type);let ge=x(y.internalFormat,fe,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Fe(V,y);let he;const Le=y.mipmaps,Ue=y.isVideoTexture!==!0,ze=ue.__version===void 0||Z===!0,I=ce.dataReady,pe=E(y,ne);if(y.isDepthTexture)ge=M(y.format===Da,y.type),ze&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ge,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ce,null));else if(y.isDataTexture)if(Le.length>0){Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let ee=0,me=Le.length;ee<me;ee++)he=Le[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,fe,Ce,he.data):t.texImage2D(i.TEXTURE_2D,ee,ge,he.width,he.height,0,fe,Ce,he.data);y.generateMipmaps=!1}else Ue?(ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,ne.width,ne.height),I&&G(y,ne,fe,Ce)):t.texImage2D(i.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ce,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Le[0].width,Le[0].height,ne.depth);for(let ee=0,me=Le.length;ee<me;ee++)if(he=Le[ee],y.format!==ti)if(fe!==null)if(Ue){if(I)if(y.layerUpdates.size>0){const be=of(he.width,he.height,y.format,y.type);for(const re of y.layerUpdates){const De=he.data.subarray(re*be/he.data.BYTES_PER_ELEMENT,(re+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,re,he.width,he.height,1,fe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,ne.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ge,he.width,he.height,ne.depth,0,he.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,ne.depth,fe,Ce,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ge,he.width,he.height,ne.depth,0,fe,Ce,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let ee=0,me=Le.length;ee<me;ee++)he=Le[ee],y.format!==ti?fe!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ge,he.width,he.height,0,he.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,fe,Ce,he.data):t.texImage2D(i.TEXTURE_2D,ee,ge,he.width,he.height,0,fe,Ce,he.data)}else if(y.isDataArrayTexture)if(Ue){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,ne.width,ne.height,ne.depth),I)if(y.layerUpdates.size>0){const ee=of(ne.width,ne.height,y.format,y.type);for(const me of y.layerUpdates){const be=ne.data.subarray(me*ee/ne.data.BYTES_PER_ELEMENT,(me+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ne.width,ne.height,1,fe,Ce,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ce,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,fe,Ce,ne.data);else if(y.isData3DTexture)Ue?(ze&&t.texStorage3D(i.TEXTURE_3D,pe,ge,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ce,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,fe,Ce,ne.data);else if(y.isFramebufferTexture){if(ze)if(Ue)t.texStorage2D(i.TEXTURE_2D,pe,ge,ne.width,ne.height);else{let ee=ne.width,me=ne.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,ge,ee,me,0,fe,Ce,null),ee>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),u.add(y),ee.onpaint=me=>{const be=me.changedElements;for(const re of u)be.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const be=i.RGBA,re=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,re,De,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&ze){const ee=lt(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,ee.width,ee.height)}for(let ee=0,me=Le.length;ee<me;ee++)he=Le[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe,Ce,he):t.texImage2D(i.TEXTURE_2D,ee,ge,fe,Ce,he);y.generateMipmaps=!1}else if(Ue){if(ze){const ee=lt(ne);t.texStorage2D(i.TEXTURE_2D,pe,ge,ee.width,ee.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ce,ne)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,Ce,ne);g(y)&&b(V),ue.__version=ce.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Pe(R,y,F){if(y.image.length!==6)return;const V=K(R,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const ce=n.get(Z);if(Z.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const ue=Je.getPrimaries(Je.workingColorSpace),J=y.colorSpace===ia?null:Je.getPrimaries(y.colorSpace),ne=y.colorSpace===ia||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!fe&&!Ce?ge[re]=p(y.image[re],!0,a.maxCubemapSize):ge[re]=Ce?y.image[re].image:y.image[re],ge[re]=Yt(y,ge[re]);const he=ge[0],Le=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),ze=x(y.internalFormat,Le,Ue,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,pe=ce.__version===void 0||V===!0,ee=Z.dataReady;let me=E(y,he);Fe(i.TEXTURE_CUBE_MAP,y);let be;if(fe){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,he.width,he.height);for(let re=0;re<6;re++){be=ge[re].mipmaps;for(let De=0;De<be.length;De++){const ke=be[De];y.format!==ti?Le!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,ze,ke.width,ke.height,0,ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,ke.width,ke.height,Le,Ue,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,ze,ke.width,ke.height,0,Le,Ue,ke.data)}}}else{if(be=y.mipmaps,I&&pe){be.length>0&&me++;const re=lt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,re.width,re.height)}for(let re=0;re<6;re++)if(Ce){I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Le,Ue,ge[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,ge[re].width,ge[re].height,0,Le,Ue,ge[re].data);for(let De=0;De<be.length;De++){const mt=be[De].image[re].image;I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,mt.width,mt.height,Le,Ue,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,ze,mt.width,mt.height,0,Le,Ue,mt.data)}}else{I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Ue,ge[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Le,Ue,ge[re]);for(let De=0;De<be.length;De++){const ke=be[De];I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,Le,Ue,ke.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,ze,Le,Ue,ke.image[re])}}}g(y)&&b(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,F,V,Z,ce){const ue=r.convert(F.format,F.colorSpace),J=r.convert(F.type),ne=x(F.internalFormat,ue,J,F.normalized,F.colorSpace),fe=n.get(y),Ce=n.get(F);if(Ce.__renderTarget=y,!fe.__hasExternalTextures){const ge=Math.max(1,y.width>>ce),he=Math.max(1,y.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,ne,ge,he,y.depth,0,ue,J,null):t.texImage2D(Z,ce,ne,ge,he,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Ce.__webglTexture,0,Mt(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(R,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const V=y.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ce=M(y.stencilBuffer,Z),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(y),ce,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,R)}else{const V=y.textures;for(let Z=0;Z<V.length;Z++){const ce=V[Z],ue=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),ne=x(ce.internalFormat,ue,J,ce.normalized,ce.colorSpace);Pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(y),ne,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(y),ne,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(R,y,F){const V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,y.depthTexture);const fe=r.convert(y.depthTexture.format),Ce=r.convert(y.depthTexture.type);let ge;y.depthTexture.format===Vi?ge=i.DEPTH_COMPONENT24:y.depthTexture.format===Da&&(ge=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,y.width,y.height,0,fe,Ce,null)}}else te(y.depthTexture,0);const ce=Z.__webglTexture,ue=Mt(y),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ne=y.depthTexture.format===Da?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Vi)Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,ce,0);else if(y.depthTexture.format===Da)Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)yt(y.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?yt(y.__webglFramebuffer[0],R,0):yt(y.__webglFramebuffer,R,0)}else if(F){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),Be(y.__webglDepthbuffer[V],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Be(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(R,y,F){const V=n.get(R);y!==void 0&&xe(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(R)}function pt(R){const y=R.texture,F=n.get(R),V=n.get(y);R.addEventListener("dispose",v);const Z=R.textures,ce=R.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,s.memory.textures++),ce){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let ne=0;ne<y.mipmaps.length;ne++)F.__webglFramebuffer[J][ne]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,ne=Z.length;J<ne;J++){const fe=n.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&Pt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ne=Z[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const fe=r.convert(ne.format,ne.colorSpace),Ce=r.convert(ne.type),ge=x(ne.internalFormat,fe,Ce,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),he=Mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)xe(F.__webglFramebuffer[J][ne],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else xe(F.__webglFramebuffer[J],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,ne=Z.length;J<ne;J++){const fe=Z[J],Ce=n.get(fe);let ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ce.__webglTexture),Fe(ge,fe),xe(F.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+J,ge,0),g(fe)&&b(ge)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Fe(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)xe(F.__webglFramebuffer[ne],R,y,i.COLOR_ATTACHMENT0,J,ne);else xe(F.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,J,0);g(y)&&b(J),t.unbindTexture()}R.depthBuffer&&$e(R)}function Ke(R){const y=R.textures;for(let F=0,V=y.length;F<V;F++){const Z=y[F];if(g(Z)){const ce=T(R),ue=n.get(Z).__webglTexture;t.bindTexture(ce,ue),b(ce),t.unbindTexture()}}}const xt=[],zt=[];function dn(R){if(R.samples>0){if(Pt(R)===!1){const y=R.textures,F=R.width,V=R.height;let Z=i.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(R),J=y.length>1;if(J)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Z,i.NEAREST),c===!0&&(xt.length=0,zt.length=0,xt.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(xt.push(ce),zt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Mt(R){return Math.min(a.maxSamples,R.samples)}function Pt(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(R){const y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function Yt(R,y){const F=R.colorSpace,V=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Do&&F!==ia&&(Je.getTransfer(F)===ct?(V!==ti||Z!==Ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",F)),y}function lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=ae,this.rebindTextures=Xe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fS(i,e){function t(n,a=ia){let r;const s=Je.getTransfer(a);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Od)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_p)return i.BYTE;if(n===vp)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Fd)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===bp)return i.ALPHA;if(n===Sp)return i.RGB;if(n===ti)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Da)return i.DEPTH_STENCIL;if(n===Mp)return i.RED;if(n===Bd)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===Hd)return i.RG_INTEGER;if(n===Gd)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(s===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===kc||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Pc||n===Dc||n===Ic||n===Uc||n===Lo||n===Nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Pc)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ic)return r.COMPRESSED_R11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Gc||n===Vc||n===$c||n===Wc||n===qc||n===Xc||n===Yc||n===Kc||n===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===Qc||n===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jc)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ed||n===td||n===Po||n===nd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ed)return r.COMPRESSED_RED_RGTC1_EXT;if(n===td)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
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

}`;class mS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Pp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:hS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gS extends Wa{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new mS,g={},b=t.getContextAttributes();let T=null,x=null;const M=[],E=[],A=new nt;let v=null,w=null;const k=new Vn;k.viewport=new At;const C=new Vn;C.viewport=new At;const N=[k,C],O=new M0;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let G=M[P];return G===void 0&&(G=new Sl,M[P]=G),G.getTargetRaySpace()},this.getControllerGrip=function(P){let G=M[P];return G===void 0&&(G=new Sl,M[P]=G),G.getGripSpace()},this.getHand=function(P){let G=M[P];return G===void 0&&(G=new Sl,M[P]=G),G.getHandSpace()};function X(P){const G=E.indexOf(P.inputSource);if(G===-1)return;const de=M[G];de!==void 0&&(de.update(P.inputSource,P.frame,l||s),de.dispatchEvent({type:P.type,data:P.inputSource}))}function $(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",te);for(let P=0;P<M.length;P++){const G=E[P];G!==null&&(E[P]=null,M[P].disconnect(G))}L=null,z=null,p.reset();for(const P in g)delete g[P];if(e.setRenderTarget(T),h=null,f=null,u=null,a=null,x=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){const P=w.camera;P.fov=w.fov,P.zoom=w.zoom,P.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(P){if(a=P,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",$),a.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Pe=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Da:Vi,Pe=b.stencil?ys:Si);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Be),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ni(f.textureWidth,f.textureHeight,{format:ti,type:Ln,depthTexture:new Ss(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new ni(h.framebufferWidth,h.framebufferHeight,{format:ti,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),K.setContext(a),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(P){for(let G=0;G<P.removed.length;G++){const de=P.removed[G],Pe=E.indexOf(de);Pe>=0&&(E[Pe]=null,M[Pe].disconnect(de))}for(let G=0;G<P.added.length;G++){const de=P.added[G];let Pe=E.indexOf(de);if(Pe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=E.length){E.push(de),Pe=Be;break}else if(E[Be]===null){E[Be]=de,Pe=Be;break}if(Pe===-1)break}const xe=M[Pe];xe&&xe.connect(de)}}const Y=new W,j=new W;function ae(P,G,de){Y.setFromMatrixPosition(G.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const Pe=Y.distanceTo(j),xe=G.projectionMatrix.elements,Be=de.projectionMatrix.elements,yt=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),Xe=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],Ke=(xe[8]-1)/xe[0],xt=(Be[8]+1)/Be[0],zt=yt*Ke,dn=yt*xt,Mt=Pe/(-Ke+xt),Pt=Mt*-Ke;if(G.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Pt),P.translateZ(Mt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),xe[10]===-1)P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const U=yt+Mt,Yt=$e+Mt,lt=zt-Pt,R=dn+(Pe-Pt),y=Xe*$e/Yt*U,F=pt*$e/Yt*U;P.projectionMatrix.makePerspective(lt,R,y,F,U,Yt),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Se(P,G){G===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(G.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(a===null)return;let G=P.near,de=P.far;p.texture!==null&&(p.depthNear>0&&(G=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=C.near=k.near=G,O.far=C.far=k.far=de,(L!==O.near||z!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,z=O.far),O.layers.mask=P.layers.mask|6,k.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const Pe=P.parent,xe=O.cameras;Se(O,Pe);for(let Be=0;Be<xe.length;Be++)Se(xe[Be],Pe);xe.length===2?ae(O,k,C):O.projectionMatrix.copy(k.projectionMatrix),w===null&&P.isPerspectiveCamera&&(w={camera:P,fov:P.fov,zoom:P.zoom}),Ae(P,O,Pe)};function Ae(P,G,de){de===null?P.matrix.copy(G.matrixWorld):(P.matrix.copy(de.matrixWorld),P.matrix.invert(),P.matrix.multiply(G.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=ad*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(P){c=P,f!==null&&(f.fixedFoveation=P),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=P)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(P){return g[P]};let qe=null;function Fe(P,G){if(d=G.getViewerPose(l||s),m=G,d!==null){const de=d.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Pe=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let $e=0;$e<de.length;$e++){const Xe=de[$e];let pt=null;if(h!==null)pt=h.getViewport(Xe);else{const xt=u.getViewSubImage(f,Xe);pt=xt.viewport,$e===0&&(e.setRenderTargetTextures(x,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(x))}let Ke=N[$e];Ke===void 0&&(Ke=new Vn,Ke.layers.enable($e),Ke.viewport=new At,N[$e]=Ke),Ke.matrix.fromArray(Xe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Xe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(pt.x,pt.y,pt.width,pt.height),$e===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Ke)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const $e=u.getDepthInformation(de[0]);$e&&$e.isValid&&$e.texture&&p.init($e,a.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<de.length;$e++){const Xe=de[$e].camera;if(Xe){let pt=g[Xe];pt||(pt=new Pp,g[Xe]=pt);const Ke=u.getCameraImage(Xe);pt.sourceTexture=Ke}}}}for(let de=0;de<M.length;de++){const Pe=E[de],xe=M[de];Pe!==null&&xe!==void 0&&xe.update(Pe,G,l||s)}qe&&qe(P,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),m=null}const K=new Op;K.setAnimationLoop(Fe),this.setAnimationLoop=function(P){qe=P},this.dispose=function(){}}}const _S=new kt,Wp=new Oe;Wp.set(-1,0,0,0,1,0,0,0,1);function vS(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Dp(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,b,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===xn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===xn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,x=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Wp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function yS(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const E=M.program;n.uniformBlockBinding(x,E)}function l(x,M){let E=a[x.id];E===void 0&&(p(x),E=d(x),a[x.id]=E,x.addEventListener("dispose",b));const A=M.program;n.updateUBOMapping(x,A);const v=e.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function d(x){const M=u();x.__bindingPointIndex=M;const E=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=a[x.id],E=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,w=E.length;v<w;v++){const k=E[v];if(Array.isArray(k))for(let C=0,N=k.length;C<N;C++)h(k[C],v,C,A);else h(k,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,E,A){if(_(x,M,E,A)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let k=0;for(let C=0;C<w.length;C++){const N=w[C],O=g(N);m(N,x.__data,k),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,M,E){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,E)}function _(x,M,E,A){const v=x.value,w=M+"_"+E;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{const k=A[w];if(typeof v=="number"||typeof v=="boolean"){if(k!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(k.equals(v)===!1)return k.copy(v),!0}}return!1}function p(x){const M=x.uniforms;let E=0;const A=16;for(let w=0,k=M.length;w<k;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,O=C.length;N<O;N++){const L=C[N],z=Array.isArray(L.value)?L.value:[L.value];for(let X=0,$=z.length;X<$;X++){const te=z[X],Y=g(te),j=E%A,ae=j%Y.boundary,Se=j+ae;E+=ae,Se!==0&&A-Se<Y.storage&&(E+=A-Se),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Y.storage}}}const v=E%A;return v>0&&(E+=A-v),x.__size=E,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),M}function b(x){const M=x.target;M.removeEventListener("dispose",b);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function T(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:l,dispose:T}}const xS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function bS(){return li===null&&(li=new r0(xS,16,16,Ha,Mi),li.name="DFG_LUT",li.minFilter=en,li.magFilter=en,li.wrapS=Ii,li.wrapT=Ii,li.generateMipmaps=!1,li.needsUpdate=!0),li}class SS{constructor(e={}){const{canvas:t=L_(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Ln}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=h,p=new Set([Gd,Hd,Bd]),g=new Set([Ln,Si,vs,ys,Od,zd]),b=new Uint32Array(4),T=new Int32Array(4),x=new W;let M=null,E=null;const A=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let C=!1,N=null,O=null,L=null,z=null;this._outputColorSpace=An;let X=0,$=0,te=null,Y=-1,j=null;const ae=new At,Se=new At;let Ae=null;const qe=new at(0);let Fe=0,K=t.width,P=t.height,G=1,de=null,Pe=null;const xe=new At(0,0,K,P),Be=new At(0,0,K,P);let yt=!1;const $e=new Xd;let Xe=!1,pt=!1;const Ke=new kt,xt=new W,zt=new At,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Pt(){return te===null?G:1}let U=n;function Yt(S,D){return t.getContext(S,D)}let lt,R,y,F,V,Z,ce,ue,J,ne,fe,Ce,ge,he,Le,Ue,ze,I,pe,ee,me,be,re;try{const S={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ud}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),U===null){const D="webgl2";if(U=Yt(D,S),U===null)throw Yt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(S){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),rt("WebGLRenderer: "+S.message),S}function De(){lt=new bx(U),lt.init(),me=new fS(U,lt),R=new ux(U,lt,e,me),y=new dS(U,lt),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),F=new Ex(U),V=new Zb,Z=new uS(U,lt,y,V,R,me,F),ce=new xx(k),ue=new T0(U),be=new cx(U,ue),J=new Sx(U,ue,F,be),ne=new Tx(U,J,ue,be,F),I=new wx(U,R,Z),Le=new fx(V),fe=new Kb(k,ce,lt,R,be,Le),Ce=new vS(k,V),ge=new Qb,he=new aS(lt),ze=new lx(k,ce,y,ne,m,c),Ue=new cS(k,ne,R),re=new yS(U,F,R,y),pe=new dx(U,lt,F),ee=new Mx(U,lt,F),F.programs=fe.programs,k.capabilities=R,k.extensions=lt,k.properties=V,k.renderLists=ge,k.shadowMap=Ue,k.state=y,k.info=F}_!==Ln&&(w=new kx(_,t.width,t.height,o,a,r));const ke=new gS(k,U);this.xr=ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(K,P,!1))},this.getSize=function(S){return S.set(K,P)},this.setSize=function(S,D,q=!0){if(ke.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,P=D,t.width=Math.floor(S*G),t.height=Math.floor(D*G),q===!0&&(t.style.width=S+"px",t.style.height=D+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(K*G,P*G).floor()},this.setDrawingBufferSize=function(S,D,q){K=S,P=D,G=q,t.width=Math.floor(S*q),t.height=Math.floor(D*q),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===Ln){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ae)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,D,q,B){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,D,q,B),y.viewport(ae.copy(xe).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,D,q,B){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,D,q,B),y.scissor(Se.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(S){y.setScissorTest(yt=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){Pe=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,q=!0){let B=0;if(S){let H=!1;if(te!==null){const ye=te.texture.format;H=p.has(ye)}if(H){const ye=te.texture.type,Ee=g.has(ye),ve=ze.getClearColor(),we=ze.getClearAlpha(),Re=ve.r,He=ve.g,Ye=ve.b;Ee?(b[0]=Re,b[1]=He,b[2]=Ye,b[3]=we,U.clearBufferuiv(U.COLOR,0,b)):(T[0]=Re,T[1]=He,T[2]=Ye,T[3]=we,U.clearBufferiv(U.COLOR,0,T))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),ze.dispose(),ge.dispose(),he.dispose(),V.dispose(),ce.dispose(),ne.dispose(),be.dispose(),re.dispose(),fe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",iu),ke.removeEventListener("sessionend",au),_a.stop()};function mt(S){S.preventDefault(),Ou("WebGLRenderer: Context Lost."),C=!0}function st(){Ou("WebGLRenderer: Context Restored."),C=!1;const S=F.autoReset,D=Ue.enabled,q=Ue.autoUpdate,B=Ue.needsUpdate,H=Ue.type;De(),F.autoReset=S,Ue.enabled=D,Ue.autoUpdate=q,Ue.needsUpdate=B,Ue.type=H}function Xn(S){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ri(S){const D=S.target;D.removeEventListener("dispose",ri),xm(D)}function xm(S){bm(S),V.remove(S)}function bm(S){const D=V.get(S).programs;D!==void 0&&(D.forEach(function(q){fe.releaseProgram(q)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,q,B,H,ye){D===null&&(D=dn);const Ee=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=Em(S,D,q,B,H);y.setMaterial(B,Ee);let we=q.index,Re=1;if(B.wireframe===!0){if(we=J.getWireframeAttribute(q),we===void 0)return;Re=2}const He=q.drawRange,Ye=q.attributes.position;let Te=He.start*Re,ot=(He.start+He.count)*Re;ye!==null&&(Te=Math.max(Te,ye.start*Re),ot=Math.min(ot,(ye.start+ye.count)*Re)),we!==null?(Te=Math.max(Te,0),ot=Math.min(ot,we.count)):Ye!=null&&(Te=Math.max(Te,0),ot=Math.min(ot,Ye.count));const Dt=ot-Te;if(Dt<0||Dt===1/0)return;be.setup(H,B,ve,q,we);let vt,ut=pe;if(we!==null&&(vt=ue.get(we),ut=ee,ut.setIndex(vt)),H.isMesh)B.wireframe===!0?(y.setLineWidth(B.wireframeLinewidth*Pt()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(H.isLine){let Kt=B.linewidth;Kt===void 0&&(Kt=1),y.setLineWidth(Kt*Pt()),H.isLineSegments?ut.setMode(U.LINES):H.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else H.isPoints?ut.setMode(U.POINTS):H.isSprite&&ut.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Kt=H._multiDrawStarts,Me=H._multiDrawCounts,rn=H._multiDrawCount,it=we?ue.get(we).bytesPerElement:1,Fn=V.get(B).currentProgram.getUniforms();for(let si=0;si<rn;si++)Fn.setValue(U,"_gl_DrawID",si),ut.render(Kt[si]/it,Me[si])}else if(H.isInstancedMesh)ut.renderInstances(Te,Dt,H.count);else if(q.isInstancedBufferGeometry){const Kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Kt);ut.renderInstances(Te,Dt,Me)}else ut.render(Te,Dt)};function nu(S,D,q,B){N!==null&&S.isNodeMaterial&&N.setObject(B,S),Xe===!0&&Le.setState(S,q,!1),S.transparent===!0&&S.side===gi&&S.forceSinglePass===!1?(S.side=xn,S.needsUpdate=!0,Ds(S,D,B),S.side=za,S.needsUpdate=!0,Ds(S,D,B),S.side=gi):Ds(S,D,B)}this.compile=function(S,D,q=null){q===null&&(q=S),N!==null&&N.renderStart(S,D,q),E=he.get(q),E.init(D),v.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,Xe=Le.init(this.clippingPlanes,pt),Xe===!0&&Le.setGlobalState(this.clippingPlanes,D),N!==null&&Ue.render(E.state.shadowsArray,q,D);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const ve=ye[Ee];nu(ve,q,D,H),B.add(ve)}else nu(ye,q,D,H),B.add(ye)}),E=v.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(S,D,q=null){const B=this.compile(S,D,q);return new Promise(H=>{function ye(){if(B.forEach(function(Ee){const we=V.get(Ee).currentProgram;(we===void 0||we.isReady())&&B.delete(Ee)}),B.size===0){H(S);return}setTimeout(ye,10)}lt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let nl=null;function Sm(S){nl&&nl(S)}function iu(){_a.stop()}function au(){_a.start()}const _a=new Op;_a.setAnimationLoop(Sm),typeof self<"u"&&_a.setContext(self),this.setAnimationLoop=function(S){nl=S,ke.setAnimationLoop(S),S===null?_a.stop():_a.start()},ke.addEventListener("sessionstart",iu),ke.addEventListener("sessionend",au),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(S,D);const q=ke.enabled===!0&&ke.isPresenting===!0,B=w!==null&&(te===null||q)&&w.begin(k,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(D),D=ke.getCamera()),S.isScene===!0&&S.onBeforeRender(k,S,D,te),E=he.get(S,v.length),E.init(D),E.state.textureUnits=Z.getTextureUnits(),v.push(E),Ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$e.setFromProjectionMatrix(Ke,yi,D.reversedDepth),pt=this.localClippingEnabled,Xe=Le.init(this.clippingPlanes,pt),M=ge.get(S,A.length),M.init(),A.push(M),ke.enabled===!0&&ke.isPresenting===!0){const Ee=k.xr.getDepthSensingMesh();Ee!==null&&il(Ee,D,-1/0,k.sortObjects)}il(S,D,0,k.sortObjects),M.finish(),N!==null&&N.updateLights(E.state.lightsArray),k.sortObjects===!0&&M.sort(de,Pe),Mt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Mt&&ze.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Le.beginShadows();const H=E.state.shadowsArray;if(Ue.render(H,S,D),Xe===!0&&Le.endShadows(),(B&&w.hasRenderPass())===!1){const Ee=M.opaque,ve=M.transmissive;if(E.setupLights(),D.isArrayCamera){const we=D.cameras;if(ve.length>0)for(let Re=0,He=we.length;Re<He;Re++){const Ye=we[Re];su(Ee,ve,S,Ye)}Mt&&ze.render(S);for(let Re=0,He=we.length;Re<He;Re++){const Ye=we[Re];ru(M,S,Ye,Ye.viewport)}}else ve.length>0&&su(Ee,ve,S,D),Mt&&ze.render(S),ru(M,S,D)}te!==null&&$===0&&(Z.updateMultisampleRenderTarget(te),Z.updateRenderTargetMipmap(te)),B&&w.end(k),S.isScene===!0&&S.onAfterRender(k,S,D),be.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),Xe===!0&&Le.setGlobalState(k.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function il(S,D,q,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum($e)){B&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);const Ee=ne.update(S),ve=S.material;ve.visible&&M.push(S,Ee,ve,q,zt.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum($e))){const Ee=ne.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),zt.copy(Ee.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)),Array.isArray(ve)){const we=Ee.groups;for(let Re=0,He=we.length;Re<He;Re++){const Ye=we[Re],Te=ve[Ye.materialIndex];Te&&Te.visible&&M.push(S,Ee,Te,q,zt.z,Ye,D)}}else ve.visible&&M.push(S,Ee,ve,q,zt.z,null,D)}}const ye=S.children;for(let Ee=0,ve=ye.length;Ee<ve;Ee++)il(ye[Ee],D,q,B)}function ru(S,D,q,B){const{opaque:H,transmissive:ye,transparent:Ee}=S;E.setupLightsView(q),Xe===!0&&Le.setGlobalState(k.clippingPlanes,q),B&&y.viewport(ae.copy(B)),H.length>0&&Ps(H,D,q),ye.length>0&&Ps(ye,D,q),Ee.length>0&&Ps(Ee,D,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function su(S,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Te=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new ni(1,1,{generateMipmaps:!0,type:Te?Mi:Ln,minFilter:Pa,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ye=E.state.transmissionRenderTarget[B.id],Ee=B.viewport||ae;ye.setSize(Ee.z*k.transmissionResolutionScale,Ee.w*k.transmissionResolutionScale);const ve=k.getRenderTarget(),we=k.getActiveCubeFace(),Re=k.getActiveMipmapLevel();k.setRenderTarget(ye),k.getClearColor(qe),Fe=k.getClearAlpha(),Fe<1&&k.setClearColor(16777215,.5),k.clear(),Mt&&ze.render(q);const He=k.toneMapping;k.toneMapping=xi;const Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Xe===!0&&Le.setGlobalState(k.clippingPlanes,B),Ps(S,q,B),Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ot=0,Dt=D.length;ot<Dt;ot++){const vt=D[ot],{object:ut,geometry:Kt,material:Me,group:rn}=vt;if(Me.side===gi&&ut.layers.test(B.layers)){const it=Me.side;Me.side=xn,Me.needsUpdate=!0,ou(ut,q,B,Kt,Me,rn),Me.side=it,Me.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye))}k.setRenderTarget(ve,we,Re),k.setClearColor(qe,Fe),Ye!==void 0&&(B.viewport=Ye),k.toneMapping=He}function Ps(S,D,q){const B=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ye=S.length;H<ye;H++){const Ee=S[H],{object:ve,geometry:we,group:Re}=Ee;let He=Ee.material;He.allowOverride===!0&&B!==null&&(He=B),ve.layers.test(q.layers)&&ou(ve,D,q,we,He,Re)}}function ou(S,D,q,B,H,ye){N!==null&&H.isNodeMaterial&&N.setObject(S,H),S.onBeforeRender(k,D,q,B,H,ye),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(k,D,q,B,S,ye),H.transparent===!0&&H.side===gi&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,k.renderBufferDirect(q,D,B,H,S,ye),H.side=za,H.needsUpdate=!0,k.renderBufferDirect(q,D,B,H,S,ye),H.side=gi):k.renderBufferDirect(q,D,B,H,S,ye),S.onAfterRender(k,D,q,B,H,ye)}function Ds(S,D,q){D.isScene!==!0&&(D=dn);const B=V.get(S),H=E.state.lights,ye=E.state.shadowsArray,Ee=H.state.version,ve=fe.getParameters(S,H.state,ye,D,q,E.state.lightProbeGridArray),we=fe.getProgramCacheKey(ve);let Re=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const He=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=ce.get(S.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",ri),Re=new Map,B.programs=Re);let Ye=Re.get(we);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===Ee)return cu(S,ve),Ye}else ve.uniforms=fe.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,q,ve),S.onBeforeCompile(ve,k),Ye=fe.acquireProgram(ve,we),Re.set(we,Ye),B.uniforms=ve.uniforms;const Te=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=Le.uniform),cu(S,ve),B.needsLights=Tm(S),B.lightsStateVersion=Ee,B.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.sunLights.value=H.state.sun,Te.sunLightShadows.value=H.state.sunShadow,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.sunShadowMatrix.value=H.state.sunShadowMatrix,Te.sunShadowCascade.value=H.state.sunShadowCascade,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Ye,B.uniformsList=null,Ye}function lu(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=yo.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function cu(S,D){const q=V.get(S);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Mm(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let q=0,B=S.length;q<B;q++){const H=S[q];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function Em(S,D,q,B,H){D.isScene!==!0&&(D=dn),Z.resetTextureUnits();const ye=D.fog,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,ve=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Je.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=ce.get(B.envMap||Ee,we),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let vt=xi;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(vt=k.toneMapping);const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Kt=ut!==void 0?ut.length:0,Me=V.get(B),rn=E.state.lights;if(Xe===!0&&(pt===!0||S!==j)){const gt=S===j&&B.id===Y;Le.setState(B,S,gt)}let it=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==rn.state.version||Me.outputColorSpace!==ve||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==Re||B.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==He||Me.vertexTangents!==Ye||Me.morphTargets!==Te||Me.morphNormals!==ot||Me.morphColors!==Dt||Me.toneMapping!==vt||Me.morphTargetsCount!==Kt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Me.__version=B.version);let Fn=Me.currentProgram;it===!0&&(Fn=Ds(B,D,H),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Fn,Me));let si=!1,qi=!1,Xa=!1;const dt=Fn.getUniforms(),Ct=Me.uniforms;if(y.useProgram(Fn.program)&&(si=!0,qi=!0,Xa=!0),B.id!==Y&&(Y=B.id,qi=!0),Me.needsLights){const gt=Mm(E.state.lightProbeGridArray,H);Me.lightProbeGrid!==gt&&(Me.lightProbeGrid=gt,qi=!0)}if(si||j!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",S.projectionMatrix),dt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Yi=dt.map.cameraPosition;Yi!==void 0&&Yi.setValue(U,xt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,qi=!0,Xa=!0)}if(Me.needsLights&&(rn.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",rn.state.sunShadowMap,Z),rn.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,Z),rn.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",rn.state.spotShadowMap,Z),rn.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",rn.state.pointShadowMap,Z)),H.isSkinnedMesh){dt.setOptional(U,H,"bindMatrix"),dt.setOptional(U,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(U,"boneTexture",gt.boneTexture,Z))}H.isBatchedMesh&&(dt.setOptional(U,H,"batchingTexture"),dt.setValue(U,"batchingTexture",H._matricesTexture,Z),dt.setOptional(U,H,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",H._indirectTexture,Z),dt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",H._colorsTexture,Z));const Xi=q.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&I.update(H,q,Fn),(qi||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,dt.setValue(U,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=bS()),qi){if(dt.setValue(U,"toneMappingExposure",k.toneMappingExposure),Me.needsLights&&wm(Ct,Xa),ye&&B.fog===!0&&Ce.refreshFogUniforms(Ct,ye),Ce.refreshMaterialUniforms(Ct,B,G,P,E.state.transmissionRenderTarget[S.id]),Me.needsLights&&Me.lightProbeGrid){const gt=Me.lightProbeGrid;Ct.probesSH.value=gt.texture,Ct.probesMin.value.copy(gt.boundingBox.min),Ct.probesMax.value.copy(gt.boundingBox.max),Ct.probesResolution.value.copy(gt.resolution)}yo.upload(U,lu(Me),Ct,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(yo.upload(U,lu(Me),Ct,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(U,"center",H.center),dt.setValue(U,"modelViewMatrix",H.modelViewMatrix),dt.setValue(U,"normalMatrix",H.normalMatrix),dt.setValue(U,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const gt=B.uniformsGroups;for(let Yi=0,Ya=gt.length;Yi<Ya;Yi++){const uu=gt[Yi];re.update(uu,Fn),re.bind(uu,Fn)}}return Fn}function wm(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Tm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,D,q){const B=V.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=D,V.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const q=V.get(S);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,q=0){te=S,X=D,$=q;let B=null,H=!1,ye=!1;if(S){const ve=V.get(S);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),ae.copy(S.viewport),Se.copy(S.scissor),Ae=S.scissorTest,y.viewport(ae),y.scissor(Se),y.setScissorTest(Ae),Y=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ve.__hasExternalTextures)Z.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const He=S.depthTexture;if(ve.__boundDepthTexture!==He){if(He!==null&&V.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Re=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?B=Re[D][q]:B=Re[D],H=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?B=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[q]:B=Re,ae.copy(S.viewport),Se.copy(S.scissor),Ae=S.scissorTest}else ae.copy(xe).multiplyScalar(G).floor(),Se.copy(Be).multiplyScalar(G).floor(),Ae=yt;if(q!==0&&(B=O),y.bindFramebuffer(U.FRAMEBUFFER,B)&&y.drawBuffers(S,B),y.viewport(ae),y.scissor(Se),y.setScissorTest(Ae),H){const ve=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,q)}else if(ye){const ve=D;for(let we=0;we<S.textures.length;we++){const Re=V.get(S.textures[we]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+we,Re.__webglTexture,q,ve)}}else if(S!==null&&q!==0){const ve=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,q)}Y=-1};function du(S){const D=V.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=R.textureFormatReadable(S.format),D.__typeReadable=R.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,q,B,H,ye,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){y.bindFramebuffer(U.FRAMEBUFFER,we);try{const Re=S.textures[ve],He=Re.format,Ye=Re.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Te=du(Re);if(Te.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&q>=0&&q<=S.height-H&&U.readPixels(D,q,B,H,me.convert(He),me.convert(Ye),ye)}finally{const Re=te!==null?V.get(te).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,D,q,B,H,ye,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(D>=0&&D<=S.width-B&&q>=0&&q<=S.height-H){y.bindFramebuffer(U.FRAMEBUFFER,we);const Re=S.textures[ve],He=Re.format,Ye=Re.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Te=du(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(D,q,B,H,me.convert(He),me.convert(Ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Dt=te!==null?V.get(te).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Dt);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await P_(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ot),U.deleteSync(vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,q=0){const B=Math.pow(2,-q),H=Math.floor(S.image.width*B),ye=Math.floor(S.image.height*B),Ee=D!==null?D.x:0,ve=D!==null?D.y:0;Z.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ee,ve,H,ye),y.unbindTexture()},this.copyTextureToTexture=function(S,D,q=null,B=null,H=0,ye=0){let Ee,ve,we,Re,He,Ye,Te,ot,Dt;const vt=S.isCompressedTexture?S.mipmaps[ye]:S.image;if(q!==null)Ee=q.max.x-q.min.x,ve=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,He=q.min.y,Ye=q.isBox3?q.min.z:0;else{const Ct=Math.pow(2,-H);Ee=Math.floor(vt.width*Ct),ve=Math.floor(vt.height*Ct),S.isDataArrayTexture?we=vt.depth:S.isData3DTexture?we=Math.floor(vt.depth*Ct):we=1,Re=0,He=0,Ye=0}B!==null?(Te=B.x,ot=B.y,Dt=B.z):(Te=0,ot=0,Dt=0);const ut=me.convert(D.format),Kt=me.convert(D.type);let Me;D.isData3DTexture?(Z.setTexture3D(D,0),Me=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Me=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Me=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const rn=y.getParameter(U.UNPACK_ROW_LENGTH),it=y.getParameter(U.UNPACK_IMAGE_HEIGHT),Fn=y.getParameter(U.UNPACK_SKIP_PIXELS),si=y.getParameter(U.UNPACK_SKIP_ROWS),qi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(U.UNPACK_SKIP_ROWS,He),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const Xa=S.isDataArrayTexture||S.isData3DTexture,dt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Ct=V.get(S),Xi=V.get(D),gt=V.get(Ct.__renderTarget),Yi=V.get(Xi.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Ya=0;Ya<we;Ya++)Xa&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(S).__webglTexture,H,Ye+Ya),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(D).__webglTexture,ye,Dt+Ya)),U.blitFramebuffer(Re,He,Ee,ve,Te,ot,Ee,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||V.has(S)){const Ct=V.get(S),Xi=V.get(D);y.bindFramebuffer(U.READ_FRAMEBUFFER,L),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let gt=0;gt<we;gt++)Xa?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,H,Ye+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,H),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xi.__webglTexture,ye,Dt+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xi.__webglTexture,ye),H!==0?U.blitFramebuffer(Re,He,Ee,ve,Te,ot,Ee,ve,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(Me,ye,Te,ot,Dt+gt,Re,He,Ee,ve):U.copyTexSubImage2D(Me,ye,Te,ot,Re,He,Ee,ve);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Me,ye,Te,ot,Dt,Ee,ve,we,ut,Kt,vt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,ye,Te,ot,Dt,Ee,ve,we,ut,vt.data):U.texSubImage3D(Me,ye,Te,ot,Dt,Ee,ve,we,ut,Kt,vt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,Te,ot,Ee,ve,ut,Kt,vt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Te,ot,vt.width,vt.height,ut,vt.data):U.texSubImage2D(U.TEXTURE_2D,ye,Te,ot,Ee,ve,ut,Kt,vt);y.pixelStorei(U.UNPACK_ROW_LENGTH,rn),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Fn),y.pixelStorei(U.UNPACK_SKIP_ROWS,si),y.pixelStorei(U.UNPACK_SKIP_IMAGES,qi),ye===0&&D.generateMipmaps&&U.generateMipmap(Me),y.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){X=0,$=0,te=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const MS=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],ld=["pitch","yaw","roll","bend","x","y","z"];function xo(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function qp(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function ES(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:qp(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const r=xo(e.loopBas);r!==null&&r>=0&&(a.loopBas=r);const s=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of s){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of MS){const u=c[d];if(!u||typeof u!="object")continue;let f=a.kemikler.get(d);f||(f={},a.kemikler.set(d,f));for(const m of ld){const _=xo(u[m]);_!==null&&(f[m]||(f[m]=[]),f[m].push({t:l,v:_,easing:String(c.easing||"LINEAR").toUpperCase()}))}const h=xo(u.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,f.turn||(f.turn=[]),f.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&AS(a),a}const wS={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function TS(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function AS(i){for(const[e,t]of Object.entries(wS)){const n=i.kemikler.get(e);if(!n)continue;let a=0,r=0;for(const s of["x","y"]){const o=n[s];if(!o||o.length===0)continue;a++;const c=t[s==="x"?0:1];Math.abs(TS(o.map(l=>l.v))-c)<=2&&r++}a===0||r!==a||["x","y","z"].forEach((s,o)=>{const c=n[s];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function kS(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:qp(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},r=t.bones||{};for(const s of Object.keys(r)){const o=r[s];if(!o||typeof o!="object")continue;const c={},l=(d,u,f)=>{if(!d)return;const h=[],m=(_,p)=>{const g=xo(p);g!==null&&h.push({t:_,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;m(p,Array.isArray(_?.vector)?_.vector[u]:void 0)}else Array.isArray(d.vector)?m(0,d.vector[u]):typeof d=="number"&&m(0,d);h.length&&(c[f]=h)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(s,c)}return a}function RS(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return ES(e);if(e?.animations)return kS(e);throw new Error("bilinmeyen emote formatı")}function CS(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Cf(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],r=a.t-n.t,s=r<=0?1:(e-n.t)/r;return n.v+(a.v-n.v)*CS(a.easing)(s)}function Xp(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Lf={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:Xp(),kokDon:[0,0,0],kokKonum:[0,0,0]},Yp={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},LS=Yp,PS={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Pf(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,r={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:Xp(),kokDon:[0,0,0],kokKonum:[0,0,0]},s=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(h,m,_)=>{h[m==="x"?0:m==="y"?1:2]=_};for(const[h,m]of i.kemikler){if(a&&h==="body"){for(const g of ld){const b=Cf(m[g],n);b!==null&&(g==="pitch"?r.kokDon[0]=b:g==="yaw"?r.kokDon[1]=b:g==="roll"?r.kokDon[2]=-b:g==="bend"?r.bend[4]=b:(g==="x"||g==="y"||g==="z")&&d(l,g,b))}continue}const _=Yp[h],p=_!==void 0?r[s[_]]:null;for(const g of ld){const b=Cf(m[g],n);if(b!==null){if(p){if(g==="pitch")p[0]=b;else if(g==="yaw")p[1]=b;else if(g==="roll")p[2]=a?-b:b;else if(g==="x"||g==="y"||g==="z"){const T=LS[h];T!==void 0&&d(c[T],g,b)}}if(g==="bend"){const T=PS[h];T!==void 0&&(r.bend[T]+=b)}}}}const u=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const m=c[h];r.konum[h]=[m[0]??0,m[1]??0,-(m[2]??0)]}return r.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],r}const f=[1,0,1,1,0,0];for(let h=0;h<6;h++){const m=c[h],_=r.konum[h];for(let p=0;p<3;p++){if(m[p]===void 0){_[p]=0;continue}let g=m[p];p===1&&f[h]&&(g+=24),_[p]=g-u[h][p]}}return r}function zn(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const Df=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:zn(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:zn(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:zn(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:zn(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:zn(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:zn(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:zn(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:zn(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:zn(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:zn(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:zn(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:zn(0,48,4,12,4)}],bo={x:1,y:1,w:10,h:16},If={x:12,y:1,w:10,h:16},Kp=20,DS=36,IS=2,US=4,NS=1;function FS(i){const e=i?3:4,t=NS+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function Zp(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function Jp(i){const e=i.getContext("2d",{willReadFrequently:!0});if(!e)return bo;const t=n=>{let a=0;try{const r=e.getImageData(n.x,n.y,n.w,n.h).data;for(let s=3;s<r.length;s+=4)r[s]>8&&a++}catch{return 0}return a};return t(If)>t(bo)?If:bo}const Ve=1/24;function kn(i,e,t,n,a,r,s=!1){const o=i.attributes.uv,c=e*4,l=s?r:n,d=s?n:r;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function as(i){i.magFilter=Nt,i.minFilter=Nt,i.colorSpace=An}function Qp(i,e=!1){return i?new rd({map:i,transparent:e,alphaTest:e?.01:0}):new rd({color:5924466})}function Uf(i,e,t=!1){const n=new qa(i.w*Ve,i.h*Ve,i.d*Ve),{u:a,v:r,w:s,h:o,d:c}=i;return e&&(kn(n,0,a+c+s,r+c,a+c+s+c,r+c+o),kn(n,1,a,r+c,a+c,r+c+o),kn(n,2,a+c,r,a+c+s,r+c),kn(n,3,a+c+s,r,a+c+s+s,r+c,!0),kn(n,4,a+c,r+c,a+c+s,r+c+o),kn(n,5,a+c+s+c,r+c,a+c+s+c+s,r+c+o),as(e)),new qn(n,Qp(e,t))}function io(i,e,t,n=!1){const a=i.h/2,{u:r,v:s,w:o,d:c}=i,l=new qa(i.w*Ve,a*Ve,i.d*Ve);if(t){const d=s+c+(e?a:0),u=d+a;kn(l,0,r+c+o,d,r+c+o+c,u),kn(l,1,r,d,r+c,u),kn(l,2,r+c,s,r+c+o,s+c),e?kn(l,3,r+c+o,s,r+c+o+o,s+c,!0):kn(l,3,r+c,s,r+c+o,s+c),kn(l,4,r+c,d,r+c+o,u),kn(l,5,r+c+o+c,d,r+c+o+c+o,u),as(t)}return new qn(l,Qp(t,n))}class OS{renderer=null;scene=new Z_;camera=new Vn(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new E0;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinPanel=bo;_bekleyenPelerin=null;canliDoku=null;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.canvas=e;try{this.renderer=new SS({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new b0(16777215,.9));const t=new sf(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new sf(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,r=e.clientHeight||300;this.renderer.setSize(a,r,!1),this.camera.aspect=a/Math.max(1,r),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){this.surukleX=t.clientX,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX;this.surukleX=t.clientX,this.kameraAciHedef-=n*.008},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak)}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t;const n=this.kameraYariCap;this.camera.position.set(Math.sin(this.kameraAci)*n,this.kameraY,Math.cos(this.kameraAci)*n),this.camera.lookAt(0,.02,0)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,r)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(s),a(o)},o.onerror=()=>{URL.revokeObjectURL(s),r(new Error("görsel açılamadı"))},o.src=s})}}catch{}return await new v0().loadAsync(e)}async skin(e){let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r&&(r.imageSmoothingEnabled=!1,n.height===32?r.drawImage(n,0,0):r.drawImage(n,0,0,64,64),t=new Vt(a),as(t),t.needsUpdate=!0)}catch{t=null}this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1)}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),!!e?.url)try{const t=await this.dokuResmi(e.url),n=Zp(t);this.pelerinPanel=Jp(n);const a=new Vt(n);as(a),a.needsUpdate=!0,this.pelerinDoku=a,this.pelerinMeshKur()}catch{}}pelerinTemizle(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null,this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;const t=new Rs(10*Ve,16*Ve),n=t.attributes.uv,a=this.pelerinPanel,r=a.x/64,s=(a.x+a.w)/64,o=1-1/32,c=1-17/32;n.setXY(0,r,o),n.setXY(1,s,o),n.setXY(2,r,c),n.setXY(3,s,c),n.needsUpdate=!0;const l=new rd({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:gi}),d=new qn(t,l);d.rotation.y=Math.PI,d.position.set(0,-8*Ve,0);const u=new Qt;u.position.set(0,6*Ve,-2.5*Ve),u.rotation.x=.06,u.add(d),e.add(u),this.pelerinGrup=u,this.pelerinSarkac=u}tuvalDoku(e,t){const n=new o0(e);as(n),n.needsUpdate=!0,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0)}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(M=>{const E=M;E.geometry&&E.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.kok=new Qt,this.kok.position.y=-.66,this.kalca=new Qt,this.kalca.position.set(0,12*Ve,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Qt,body:new Qt,armL:new Qt,armR:new Qt,legL:new Qt,legR:new Qt};const[n,a,r,s,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const M of[n,a,r,s,o,c])M.rotation.order="ZYX";const l=Uf({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Ve,0),n.add(l);const d=Uf({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ve,0),n.add(d),a.position.set(0,12*Ve,0),a.userData.pivotPx=[0,12,0];const u=(M,E,A,v)=>{const w=io(E,!1,e);w.position.set(v,A+E.h/4*Ve,0),M.add(w);const k=new Qt;k.position.set(0,A,0);const C=io(E,!0,e);return C.position.set(v,-(E.h/4)*Ve,0),k.add(C),M.add(k),k},f=new Qt;f.position.set(0,-6*Ve,0),f.rotation.order="ZYX";const h=io({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Ve,0),f.add(h),a.add(f);const m=io({u:16,v:16,w:8,h:12,d:4},!0,e);m.position.set(0,-9*Ve,0),a.add(m);const _=new Qt;_.position.set(0,6*Ve,0),_.rotation.order="ZYX";const p=t?3:4;n.position.set(0,6*Ve,0),n.userData.pivotPx=[0,6,0],r.position.set(5*Ve,4*Ve,0),r.userData.pivotPx=[5,4,0];const g=u(r,{u:32,v:48,w:p,h:12,d:4},-4*Ve,Ve);s.position.set(-5*Ve,4*Ve,0),s.userData.pivotPx=[-5,4,0];const b=u(s,{u:40,v:16,w:p,h:12,d:4},-4*Ve,-Ve);o.position.set(1.9*Ve,0,0),o.userData.pivotPx=[1.9,0,0];const T=u(o,{u:16,v:48,w:4,h:12,d:4},-6*Ve,0);c.position.set(-1.9*Ve,0,0),c.userData.pivotPx=[-1.9,0,0];const x=u(c,{u:0,v:16,w:4,h:12,d:4},-6*Ve,0);this.bukulenler={body:f,belUst:_,armL:g,armR:b,legL:T,legR:x},_.add(n,r,s),this.kalca.add(a,_,o,c),this.scene.add(this.kok),this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),la===this&&(la=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=Math.min(.05,this.saat.getDelta());this.zaman+=t,this.adimla(t),this.kameraGuncelle(t),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Pf(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Lf):t=Pf(this.aktif,this.tEmote)):(t=Lf,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin()}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=N_.degToRad,r=(o,c,l)=>{const d=a(c[0]),u=-a(c[1]),f=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(u-o.rotation.y)*t,o.rotation.z+=(f-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],m=e.konum[l],_=(h[0]+m[0])*Ve,p=(h[1]+m[1])*Ve,g=(h[2]+m[2])*Ve;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};r(n.head,e.head,0),r(n.body,e.body,1),r(n.armL,e.armL,2),r(n.armR,e.armR,3),r(n.legL,e.legL,4),r(n.legR,e.legR,5);const s=this.bukulenler;if(s){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(s.armL,e.bend[0]),o(s.armR,e.bend[1]),o(s.legL,e.bend[2]),o(s.legR,e.bend[3]),o(s.body,e.bend[4]),o(s.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Ve,d=(12+c[1])*Ve,u=c[2]*Ve;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(u-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this._bekleyenPelerin=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let la=null;function Cs(){return la||(la=new OS),window.__sahne=la,la}function Kd(){la?.kapati(),la=null,window.__sahne=null}const Ie=128,Qn=96;function Jn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ie(i,e,t,n=1,a=1,r="#fff"){i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ea(i,e,t=Qn){const n=Math.ceil(t/e.length);e.forEach((a,r)=>ie(i,0,r*n,Ie,n+1,a));for(let a=1;a<e.length;a++){const r=a*n,s=Jn(a*977);for(let o=0;o<Ie;o+=2)s()>.45&&(ie(i,o,r-1,1,1,e[a-1]),s()>.6&&ie(i,o+1,r-1,1,1,e[a]))}}function Nf(i,e,t,n,a,r){ie(i,e+3,t+3,n,3,a),ie(i,e,t+5,n+6,3,a),ie(i,e+2,t+8,n-2,2,r),ie(i,e+6,t+2,n-8,2,a),ie(i,e+4,t+10,n-6,1,r)}function Ff(i,e,t,n,a){const r=Jn(a);for(let s=0;s<6;s++){const o=Math.floor(r()*Ie),c=18+Math.floor(r()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+s%3*6)));ie(i,o-d,e-l,d*2,1,t)}ie(i,o-1,e-c+1,2,2,n)}}function dr(i,e,t,n,a=30){const r=Jn(n);for(let s=0;s<e;s++){const o=Math.floor(r()*Ie),c=a+Math.floor(r()*(Qn-a));ie(i,o,c,1,1,t[Math.floor(r()*t.length)])}}const cd=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ea(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),ie(i,0,62,Ie,8,"#b98aa6"),ie(i,0,68,Ie,8,"#8f6377"),Ff(i,64,"#a97a95","#d9aec6",41);const e=(n,a,r)=>{const s=Jn(r),o=78;ie(i,n,o-a,3,a,"#5d3b46"),ie(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(s()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((s()-.5)*14),u=o-a-Math.round(s()*14)-l*4;for(let f=-c;f<=c;f++){const h=Math.round(Math.sqrt(Math.max(0,c*c-f*f))*1.15);h<=0||ie(i,d-h,u+f,h*2,1,f<0?"#f7b8d2":"#e795b6")}for(let f=0;f<10;f++){const h=Math.round((s()-.5)*c*1.6),m=Math.round((s()-.5)*c*1.6);ie(i,d+h,u+m,1,1,s()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),ie(i,0,78,Ie,Qn-78,"#7fa86a"),ie(i,0,78,Ie,2,"#9dc484"),ie(i,0,90,Ie,6,"#5d7f4f");const t=Jn(53);for(let n=0;n<70;n++)ie(i,t()*Ie,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ea(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),ie(i,0,52,Ie,6,"#ff6a1a"),ie(i,0,52,Ie,2,"#ffa347"),ie(i,0,56,Ie,2,"#c93d0c"),ie(i,0,40,Ie,14,"#2b1218"),ie(i,12,26,16,30,"#1c0a10"),ie(i,12,22,16,5,"#2f121a"),ie(i,96,18,20,42,"#1c0a10"),ie(i,96,14,20,5,"#2f121a"),ie(i,44,34,34,26,"#22101a"),ie(i,44,30,34,4,"#331522");const e=Jn(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);ie(i,n,a,2,3,"#ff9b3d")}ie(i,18,32,2,3,"#ffb04d"),ie(i,102,26,2,3,"#ffb04d"),ie(i,0,70,Ie,26,"#120810");for(let t=0;t<Ie;t+=16)ie(i,t,70,15,8,"#1b0d17"),ie(i,t+1,71,13,2,"#241322");ie(i,0,84,Ie,4,"#ff5a14"),ie(i,0,84,Ie,1,"#ffb44d"),ie(i,0,88,Ie,8,"#120810"),dr(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ea(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),dr(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),ie(i,0,58,Ie,10,"#241436"),ie(i,0,58,Ie,2,"#3a2152");const e=(n,a,r)=>{ie(i,n,a,9,r,"#3d2a56"),ie(i,n+1,a,2,r,"#55406f"),ie(i,n+7,a,2,r,"#2a1c3d"),ie(i,n-2,a-3,13,3,"#63498a"),ie(i,n-1,a-6,11,3,"#4a3568"),ie(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{ie(i,n,a,2,6,"#efe4ff"),ie(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),ie(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),ie(i,30,46,14,4,"#2c1a41"),ie(i,34,50,6,3,"#1e1130"),ie(i,96,50,10,3,"#2c1a41"),ie(i,0,68,Ie,Qn-68,"#1b1029"),ie(i,0,68,Ie,3,"#34204a");for(let n=4;n<Ie;n+=14)ie(i,n,76,9,2,"#2a1a3d");dr(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ea(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),ie(i,0,46,Ie,8,"#8a2a1c");const e=(t,n,a,r)=>{ie(i,t,n,a,r,"#221a1f"),ie(i,t,n,a,2,"#33272e");for(let s=4;s<r;s+=8)ie(i,t+2,n+s,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)ie(i,t,38,6,6,"#120d10");ie(i,4,28,8,8,"#120d10"),ie(i,104,24,8,8,"#120d10"),ie(i,8,50,4,4,"#ffcf4d"),ie(i,14,54,2,2,"#e0a81f"),ie(i,106,44,5,5,"#ffcf4d"),ie(i,60,52,4,4,"#ffcf4d"),ie(i,66,56,2,2,"#e0a81f"),ie(i,0,70,Ie,26,"#150f12"),ie(i,0,74,Ie,6,"#ff6418"),ie(i,0,74,Ie,1,"#ffb44d"),ie(i,0,80,Ie,16,"#150f12"),dr(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ea(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Nf(i,22,18,22,"#2d6f74","#1d5259"),Nf(i,76,12,30,"#2d6f74","#1d5259"),ie(i,0,66,Ie,10,"#2f6b52"),ie(i,0,66,Ie,2,"#4b8b68");const e=(n,a,r)=>{const s=Jn(r),o=4+Math.floor(s()*2);ie(i,n,74-a,o,a,"#e6d7bd"),ie(i,n,74-a,1,a,"#f3e9d6"),ie(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);ie(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)ie(i,n+o/2-12+s()*24,c+2+s()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),ie(i,0,74,Ie,Qn-74,"#3f7c5c"),ie(i,0,74,Ie,2,"#5b9d77"),ie(i,0,86,Ie,10,"#2c5a44");const t=Jn(61);for(let n=0;n<48;n++)ie(i,t()*Ie,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ea(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let r=0;r<Ie;r++){const s=Math.round(Math.sin(r/Ie*Math.PI*2+n)*3);ie(i,r,a+s,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}dr(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),Ff(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,r,s)=>{for(let o=0;o<s;o++){const c=Math.round(r*(1-o/s)*.9);ie(i,n-c/2+o*.4,a+o,c,1,o<s*.4?"#d6ecff":"#a6cbe8")}ie(i,n,a+2,2,s-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),ie(i,0,72,Ie,Qn-72,"#0f2a4a"),ie(i,0,72,Ie,2,"#2b5f8c");for(let n=0;n<24;n++){const a=Jn(n*13);ie(i,a()*Ie,76+a()*18,6+a()*10,1,"#1f4b72")}const t=Jn(83);for(let n=0;n<26;n++)ie(i,t()*Ie,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ea(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),ie(i,96,12,12,12,"#fff3cf"),ie(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;ie(i,0,n,Ie,6,t<2?"#d8ab68":"#c1924f"),ie(i,0,n,Ie,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);ie(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),ie(i,46-n/2,e+t,2,1,"#f0d29a")}ie(i,42,40,8,16,"#6b4d28"),ie(i,43,42,6,14,"#3d2b14"),ie(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)ie(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}ie(i,0,78,Ie,Qn-78,"#e0b877"),ie(i,0,78,Ie,2,"#f2d49b");for(let t=6;t<Ie;t+=18)ie(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ea(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let r=0;r<66;r++){const s=2+r*.18;ie(i,a+r*.12,r,s,1,"rgba(150,240,255,0.06)")}}const e=(n,a,r,s)=>{ie(i,n,a,r,s,"#2f7d76"),ie(i,n,a,r,2,"#48a89a"),ie(i,n,a+s-2,r,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),ie(i,60,18,8,4,"#a8f0e2"),ie(i,62,16,4,2,"#e0fff8"),ie(i,34,40,4,4,"#d9b34a"),ie(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)ie(i,n,52,6,2,"#1d4a48");ie(i,0,64,Ie,Qn-64,"#0b2c33"),ie(i,0,64,Ie,3,"#164a4a");const t=Jn(47);for(let n=0;n<16;n++){const a=t()*Ie,r=6+t()*12;ie(i,a,78-r,2,r,t()>.5?"#1f6b55":"#2b8a63")}dr(i,30,["#8fe8dd","#c8fff6"],11,8)}}],zS=cd;function BS(i){return cd.find(e=>e.id===i)||cd[0]}function jp(i,e){const t=i.getContext("2d");t&&((i.width!==Ie||i.height!==Qn)&&(i.width=Ie,i.height=Qn),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ie,Qn),BS(e).ciz(t))}let pn=null;const Of=()=>document.documentElement.getAttribute("data-world")==="sahne",HS=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function GS(i){const e=le.instances[0];(!pn||!le.instances.find(l=>l.id===pn))&&(pn=e?.id||null);const t=le.instances.find(l=>l.id===pn),n=$i(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),r=[...le.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),s=r[0]||null,o=r.slice(0,5);i.innerHTML=`
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
            ${n?.name?`<img src="${jo(n)}" alt="" draggable="false" ${el(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${Q("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${Q("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?rs(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${Q("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${Q("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${Q("play")} HIZLI GİRİŞ</div>
          ${s?`
          <button class="imp-hizli-satir${We.activeId===s.id?" durdur":""}" id="i-hizli-oyla" ${We.activeId&&We.activeId!==s.id?'disabled data-kilitli="1"':""}>
            <b>${s.name}${We.activeId===s.id?" — AÇIK":""}</b>
            <small>${rs(s.mod_loader)} · ${s.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=cn(`
      <div class="imp-satir${We.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${qt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${rs(l.mod_loader)} · ${l.mc_version} — ${HS(l.last_played)}</small>
        </span>
        <button class="imp-oyla${We.activeId===l.id?" durdur":""}" ${We.activeId&&We.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${We.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${Q(We.activeId===l.id?"stop":"play")} ${We.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${Q("gear")}</button>
      </div>
    `);d.addEventListener("click",u=>{const f=l.id;if(u.target.closest(".imp-diyis")){tt("instances",f);return}if(u.target.closest(".imp-oyla")){We.activeId===l.id&&Wl();return}pn=f,tt("instances",f)}),d.querySelector(".imp-oyla")?.addEventListener("click",u=>u.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async u=>{if(u.stopPropagation(),We.activeId===d)return Wl();if(!le.accounts.length)return bn();const{launchInstance:f}=await _t(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>St);return{launchInstance:h}},void 0);f(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>tt("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>tt("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{pn&&tt("instances",pn)}),i.querySelector("#i-ad")?.addEventListener("click",()=>bn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>tt("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>tt("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!s)return;if(We.activeId===s.id)return Wl();if(!le.accounts.length)return bn();const{launchInstance:l}=await _t(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);l(s.id)}),em(i,n)}async function Wl(){try{await se("cmd_kill_game")}catch{}const{refreshState:i}=await _t(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>St);return{refreshState:e}},void 0);await i(!0)}async function VS(i){const e=i.querySelector("#i-news");if(e)try{const t=await se("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=cn(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>tt("news")),e.appendChild(a)}}catch{}}function $S(i){if(Kd(),Of()){GS(i),VS(i);return}const e=le.instances[0];(!pn||!le.instances.find(u=>u.id===pn))&&(pn=e?.id||null);const t=le.instances.find(u=>u.id===pn),n=$i(),a=u=>!!u&&(u.includes("/")||u.includes("\\")),r=t?a(t.icon)?`<img class="hero-inst-icon" src="${qt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",s=!!t?.cover&&!Of(),o=s?` style="background-image:url('${qt(t.cover)}')"`:"",c=t?We.activeId===t.id?"warn":"ok":"off",l=le.instances.filter(u=>u.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${s?" has-cover":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${ls(c)} ${r} ${t.mc_version} · ${rs(t.mod_loader)}</div>
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
            <button class="btn ghost" id="h-manage">${Q("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${Q("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${Q("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${We.activeId?"disabled":""}" id="h-play"
          title="${We.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${We.activeId?"disabled":""}>
          <span class="pr-icon">${We.activeId?Q("clock"):Q("play")}</span>
          <span class="pr-label">${We.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${We.activeId?"çalışıyor":t.name}</span>
        </button>
        ${We.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${Q("stop")}
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
          <button class="btn ghost sm" id="h-all">${Q("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${ls("err")}
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
          <div class="cs-val">${Q("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const u of l){a(u.icon);const f=cn(`
        <button class="ledger-row" data-id="${u.id}">
          ${ls(We.activeId===u.id?"warn":"ok")}
          <span class="lr-name">${u.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${rs(u.mod_loader)} ${u.mc_version}
            <span class="sep">·</span>
            Son: ${u.last_played?new Date(u.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${Q("play")}</span>
        </button>
      `);f.querySelector(".lr-play").innerHTML=Q("play"),f.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!le.accounts.length)return bn();Id(f);const{launchInstance:m}=await _t(async()=>{const{launchInstance:_}=await Promise.resolve().then(()=>St);return{launchInstance:_}},void 0);m(u.id);return}tt("instances",u.id)}),d.appendChild(f)}Dd(Array.from(d.children))}qS(i),XS(),WS(i),em(i,n)}async function em(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(jp(n,String(le.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=Cs();a.kur(t),t.classList.add("on");try{const o=await se("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:qt(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}if(le.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const s={sakin:.6,normal:1,canli:1.8}[String(le.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await se("cmd_list_emotes"),c=[];for(const l of o)try{c.push(RS(l.icerik))}catch{}a.emoteleriKur(c,s)}catch{a.emoteleriKur([])}}async function WS(i){try{const e=await se("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{_t(()=>Promise.resolve().then(()=>St),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function rs(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function qS(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!pn){tt("instances");return}if(!le.accounts.length){bn();return}Id(i.querySelector(".play-ring"));const{launchInstance:e}=await _t(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>St);return{launchInstance:t}},void 0);e(pn)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:e}=await _t(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>St);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{tt("instances",pn||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>tt("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>tt("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>tt("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>bn())}async function XS(){const i=pi("#home-news");if(i)try{const e=await se("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=cn(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${Q("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>tt("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const zf={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function ql(i){return zf[i]||zf.vanilla}let ei=null;function YS(i){const e=qt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function KS(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const r=a.target;a.isIntersecting?r.play().catch(()=>{}):r.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function ZS(i){if(Ui.param&&le.instances.find(e=>e.id===Ui.param)){ei=Ui.param,Ui.param=void 0,Ms(i,ei);return}if(ei&&le.instances.find(e=>e.id===ei)){Ms(i,ei);return}Uo(i)}function Uo(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${Q("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${Q("plus")} Yeni Kurulum</button>
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
        ${Q("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Gf());else{for(const t of le.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${qt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",r=We.activeId===t.id,s=cn(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?YS(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${tm(t.mod_loader)} ${t.mc_version}</span>
                ${r?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${ls(r?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${Ar(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${We.activeId?"disabled":""}>
              ${We.activeId?`${Q("clock")} Açık`:`${Q("play")} Oyna`}
            </button>
            ${r?`<button class="btn danger card-stop" title="Oyunu kapat">${Q("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);s.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!le.accounts.length)return bn();const{launchInstance:c}=await _t(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>St);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await se("cmd_kill_game")}catch{}const{refreshState:c}=await _t(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>St);return{refreshState:l}},void 0);await c(!0);return}ei=t.id,Ms(i,t.id)}),e.appendChild(s)}Dd(Array.from(e.querySelectorAll(".inst-card"))),KS(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Gf()),i.querySelector("#btn-import")?.addEventListener("click",()=>JS().catch(()=>{})),QS()}async function JS(){const i=await se("cmd_pick_pack_file");if(i){oe("Paket içe aktarılıyor…","ok");try{const e=await se("cmd_import_pack_file",{path:i}),{refreshState:t}=await _t(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>St);return{refreshState:n}},void 0);await t(),oe(`${e.name||"Paket"} kuruldu!`,"ok"),tt("instances")}catch(e){oe(`Paket içe aktarılamadı: ${e}`,"err")}}}async function QS(){const i=document.querySelector("#popular-strip");if(i)try{const e=await se("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=cn(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${Q("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${Q("dl")} ${jS(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>tt("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function jS(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function tm(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Ms(i,e){const t=le.instances.find(r=>r.id===e);if(!t){ei=null,Uo(i);return}const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${qt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${Q("back")}</button>
      <div class="inst-icon xl">${a}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${tm(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${Ar(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${We.activeId?"disabled":""}>${We.activeId?`${Q("clock")} Oyun Açık`:`${Q("play")} Oyna`}</button>
      ${We.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${Q("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${Q("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${Q("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${Q("mug")} Java</button>
      <button class="tab" data-tab="log">${Q("term")} Log</button>
      <button class="tab" data-tab="analytics">${Q("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${Q("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{ei=null,Uo(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!le.accounts.length)return bn();const{launchInstance:r}=await _t(async()=>{const{launchInstance:s}=await Promise.resolve().then(()=>St);return{launchInstance:s}},void 0);r(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:r}=await _t(async()=>{const{refreshState:s}=await Promise.resolve().then(()=>St);return{refreshState:s}},void 0);await r(!0)}),i.querySelectorAll(".tab").forEach(r=>{r.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),r.classList.add("active");const s=r.dataset.tab,o=i.querySelector("#tab-content");({mods:nm,content:eM,java:im,log:tM,analytics:nM,settings:iM})[s](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let Ci="resourcepacks";const Bf=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function eM(i,e){const t=()=>Bf.find(a=>a.id===Ci);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await se("cmd_list_content_files",{instanceId:e.id,kind:Ci})}catch{}const r=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Bf.map(o=>`<button class="kt ${o.id===Ci?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${Q("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${Q("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${Q("plus")} ${r.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Ci=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>se("cmd_open_content_folder",{instanceId:e.id,kind:Ci}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Ci==="resourcepacks"?"resourcepack":Ci==="shaderpacks"?"shader":"world";Ui.param=`kind:${o}`,tt("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await se("cmd_add_content_file",{instanceId:e.id,kind:Ci}),await n()}catch(o){oe(`Eklenemedi: ${o}`,"err")}});const s=i.querySelector("#content-list");if(!a.length){s.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${r.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}s.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${qt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=cn(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Ls(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${Q("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const u=d.currentTarget.dataset.del;if(confirm(`"${u}" silinsin mi?`))try{await se("cmd_delete_content_file",{instanceId:e.id,kind:Ci,name:u}),await n()}catch(f){oe(`Silinemedi: ${f}`,"err")}}),s.appendChild(l)}};await n()}async function nm(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await se("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await se("cmd_resolve_mod_icons",{filenames:t.map(s=>s.filename)})}catch{}let a={};if(t.length)try{const s=await se("cmd_check_mod_updates",{instanceId:e.id});a=Object.fromEntries(s.map(o=>[o.filename,o]))}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${Q("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=s=>{const o=t.filter(l=>l.filename.toLowerCase().includes(s.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",o.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of o){const d=n[l.filename],u=d?`<img class="mod-logo" src="${d}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${Q("puzzle")}</span>`,f=cn(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${Ls(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[l.filename]?`<button class="btn primary sm upd-mod" data-fn="${l.filename}" data-url="${a[l.filename].url}" data-ad="${a[l.filename].yeni_ad}" title="Yeni sürüm: ${a[l.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);f.querySelector(".switch")?.addEventListener("click",async h=>{const m=h.currentTarget,_=m.dataset.fn,p=m.dataset.en!=="true";await se("cmd_toggle_mod",{instanceId:e.id,filename:_,enabled:p}),l.enabled=p,r(i.querySelector("#mod-search").value)}),f.querySelector(".upd-mod")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await se("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),oe("Mod güncellendi"),await nm(i,e)}catch(_){m.disabled=!1,m.textContent="Güncelle",oe(`Güncellenemedi: ${_}`,"err")}}),f.querySelector(".del-mod")?.addEventListener("click",async()=>{await se("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(h=>h.filename!==l.filename),r(i.querySelector("#mod-search").value),oe("Mod silindi")}),c.appendChild(f)}};i.querySelector("#mod-search")?.addEventListener("input",s=>{r(s.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{tt("explore",e.id)}),r("")}async function im(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await se("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",a=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),r=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${Q("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${Q("args")} Java Argüman Presetleri</h3>
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
        <h3>${Q("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${n?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${a(r)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const s=i.querySelector("#ram-range");s.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${s.value} MB`}),s.addEventListener("change",async()=>{await se("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(s.value)}),e.ram_mb=parseInt(s.value),oe("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",u=>u.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",u=>u.stopPropagation()),l.addEventListener("click",async u=>{if(u.target.closest("details"))return;const f=l.dataset.id;await se("cmd_set_instance_java_preset",{id:e.id,presetId:f}),e.java_preset_id=f;const h=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(m=>m.closest(".preset-row").dataset.id));im(i,e),i.querySelectorAll(".preset-row").forEach(m=>{h.has(m.dataset.id)&&(m.querySelector("details").open=!0)}),oe("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),u=l.value.trim(),f=u===""?null:Math.max(2,Math.min(32,parseInt(u)||12)),h=d.value.trim();await se("cmd_set_instance_custom",{id:e.id,viewDistance:f,customVmArgs:h||null}),e.view_distance=f,e.custom_vm_args=h||null,oe("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function tM(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${Q("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),r=i.querySelector("#log-search");let s="live",o=0;const c=[];let l=[];const d=(b,T)=>{n.textContent=T!==void 0&&T!==b?`${T}/${b} satır`:`${b} satır`},u=b=>{const T=document.createElement("div");return T.textContent=b,b.includes("ERROR")||b.includes("Exception")?T.classList.add("err"):b.includes("WARN")&&T.classList.add("warn"),T},f=()=>{const b=r.value.trim().toLowerCase(),T=b?l.filter(x=>x.toLowerCase().includes(b)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${b?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const x=document.createDocumentFragment();for(const M of T)x.appendChild(u(M));t.appendChild(x)}d(l.length,T.length)},h=()=>{if(s="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const b=document.createDocumentFragment();for(const T of c)b.appendChild(u(T));t.appendChild(b),t.scrollTop=t.scrollHeight}d(o)},m=async b=>{s=b,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await se("cmd_read_log",{instanceId:e.id,fileId:b})).split(`
`),f(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await se("cmd_list_logs",{instanceId:e.id});const b=new Map;for(const T of _)b.has(T.date)||b.set(T.date,[]),b.get(T.date).push(T);for(const[T,x]of b){const M=document.createElement("optgroup");M.label=T;for(const E of x){const A=document.createElement("option");A.value=E.id;const v=E.label.startsWith("Oturum ")?"#"+(E.label.split("-").pop()||E.label):E.label;A.textContent=`${E.time!=="-"?E.time+" — ":""}${v} (${Ls(E.size)})`,M.appendChild(A)}a.appendChild(M)}}catch{}We.activeId!==e.id&&_.length?(a.value=_[0].id,m(_[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():m(a.value)}),r.addEventListener("input",()=>{s!=="live"&&f()});const p=await ai("game-log",b=>{s!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(b.payload),o++,c.length>500&&c.shift(),t.appendChild(u(b.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function nM(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await se("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,r=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${Ar(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${r}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Q("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((s,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${s.host}</span>
          <span class="chip gray">${s.visits} giriş</span>
          <span class="dur">${Ar(s.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Q("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Hf(n.daily_ms).map(s=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(s.ms/Math.max(...Hf(n.daily_ms).map(o=>o.ms),1)*100,s.ms?5:2)}%"></div>
            <div class="bar-lbl">${s.label}</div>
            <div class="tooltip">${s.full} — ${Ar(s.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Hf(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[r]||0,full:r})}return e}async function iM(i,e){const t=r=>r.includes("/")||r.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${qt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${Q("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${Q("image")} Dosyadan Seç</button>
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
            <button class="btn ghost sm" id="pick-cover">${e.cover?Q("image")+" Değiştir":Q("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${Q("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${Q("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${Q("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${Q("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const a=async()=>{const r=i.querySelector("#set-name").value.trim()||e.name,s=i.querySelector("#set-icon").value.trim();await se("cmd_rename_instance",{id:e.id,name:r}),s&&await se("cmd_set_instance_icon",{id:e.id,icon:s}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const r=i.querySelector("#set-icon").value.trim();r&&(i.querySelector("#icon-preview").textContent=r)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_icon",{instanceId:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),oe("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_cover",{instanceId:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),oe("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await se("cmd_set_instance_cover",{id:e.id,cover:null}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),oe("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>se("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>se("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await se("cmd_duplicate_instance",{id:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),oe("Kurulum kopyalandı"),Ms(i.parentElement,ei)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await se("cmd_delete_instance",{id:e.id}),await _t(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),ei=null,Uo(i.parentElement),oe("Kurulum silindi"))})}async function Gf(){const e=(await se("cmd_list_versions")).all,t=await se("cmd_list_java_arg_presets"),n=await se("cmd_list_standard_mods"),{root:a,close:r}=(await _t(async()=>{const{openModal:l}=await Promise.resolve().then(()=>St);return{openModal:l}},void 0)).openModal(`
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
        <div class="lc-icon">${ql("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${ql("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${ql("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let s="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),s=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",r),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",u=a.querySelector("#w-version").value,f=a.querySelector("#w-preset").value;try{const h=await se("cmd_create_instance",{instance:{name:d,mc_version:u,mod_loader:s,ram_mb:parseInt(c.value),java_preset_id:f,standard_mods:o&&s==="fabric"}});await _t(()=>Promise.resolve().then(()=>St),void 0).then(_=>_.refreshState()),r(),oe(`"${d}" oluşturuldu`);const m=h.instance.id;if(ei=m,le.instances.length){const _=document.querySelector("#content");Ms(_,m)}}catch(h){oe(String(h),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}let Hn="mod",ci="",Ia=[],Er=40,na=1,_r=1,ss="",dd="",Xl=!1;function aM(i){let e=Ui.param;if(e?.startsWith("kind:")){const a=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(a)&&(Hn=a),e=void 0}Ui.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${Hn==="mod"?"sel":""}" data-k="mod">${Q("puzzle")} Modlar</button>
        <button class="kt ${Hn==="modpack"?"sel":""}" data-k="modpack">${Q("box")} Paketler</button>
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
        ${Q("search")}
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
  `,i.querySelectorAll(".kt").forEach(a=>a.addEventListener("click",()=>{Hn=a.dataset.k,i.querySelectorAll(".kt").forEach(r=>r.classList.remove("sel")),a.classList.add("sel"),ci&&wa(i,ci),Vf(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>wa(i,t.value.trim()),380)}),t.addEventListener("keydown",a=>{a.key==="Enter"&&wa(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>wa(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{ci&&wa(i,ci)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{ci&&wa(i,ci)}),e&&ci&&wa(i,ci),Vf(i)}async function Vf(i){const e=i.querySelector("#popular-strip");try{const t=await se("cmd_repos_popular",{kind:Hn,loader:""});e.innerHTML="";for(const n of t){const a=cn(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${Q("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${Q("dl")} ${am(n.downloads)}</div>
          </div>
        </div>
      `);a.addEventListener("click",()=>rm(n)),e.appendChild(a)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function wa(i,e){if(!e)return;ci=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',ss=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;dd=["resourcepack","shader","world","datapack"].includes(Hn)?"":n,na=1;try{if(Ia=(await se("cmd_repos_search",{query:e,kind:Hn,versions:ss?[ss]:[],loader:dd,offset:0,limit:Er})).results,_r=Ia.length>=Er?2:1,t.innerHTML="",!Ia.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const s of Ia)t.appendChild(fd(s));ud(i)}catch(r){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${r}</p></div>`}}function ud(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=Ia.length>=Er;if(na===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${na<=1?"disabled":""}>‹</button>`];for(let r=1;r<=_r;r++)n.push(`<button class="pg-btn ${r===na?"cur":""}" data-pg="${r}">${r}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const a=cn(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);a.addEventListener("click",r=>{const s=r.target.closest(".pg-btn");if(!s||s.disabled)return;const o=s.dataset.pg,c=o==="prev"?na-1:o==="next"?na+1:parseInt(o,10);!Number.isFinite(c)||c<1||c===na||rM(i,c)}),e.appendChild(a)}async function rM(i,e){if(Xl)return;Xl=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const a=(await se("cmd_repos_search",{query:ci,kind:Hn,versions:ss?[ss]:[],loader:dd,offset:(e-1)*Er,limit:Er})).results;if(!a.length){_r=Math.min(_r,Math.max(1,e-1)),t.innerHTML="";for(const r of Ia)t.appendChild(fd(r));ud(i);return}Ia=a,na=e,_r=Math.max(_r,a.length>=Er?e+1:e),t.innerHTML="";for(const r of a)t.appendChild(fd(r));ud(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{Xl=!1}}function fd(i){const e=cn(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${Q(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${Q("dl")} ${am(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>rm(i)),e}function am(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function rm(i){const{root:e,close:t}=Xt(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",a=document.querySelector("#exp-loader")?.value||(le.instances[0]?.mod_loader==="forge"?"forge":"fabric"),s=["resourcepack","shader","world","datapack"].includes(i.kind)?"":a;try{const o=await se("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?s:"",gameVersion:n}),c=e.querySelector("#ver-list");if(c.innerHTML="",!o.length){c.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const l of o){const d=cn(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${l.name||l.version_number}</b>
            <span class="ver-date">${l.date.slice(0,10)} · ${l.game_versions.slice(0,3).join(", ")}${l.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${Ls(l.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>sM(i,l,t)),c.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function sM(i,e,t){if(i.kind==="modpack")t(),await oM(i,e);else{if(!le.instances.length){oe("Önce bir kurulum oluşturmalısın","err"),tt("instances");return}const{root:n,close:a}=Xt(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${le.instances.map(r=>{const s=r.icon&&!r.icon.includes("/")&&!r.icon.includes("\\")?`${r.icon} `:"";return`<option value="${r.id}">${s}${r.name} (${r.mod_loader} ${r.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",a),n.querySelector("#ok")?.addEventListener("click",async()=>{const r=n.querySelector("#tgt").value,s=n.querySelector("#ok");s.disabled=!0,s.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await se("cmd_repos_install_content",{instanceId:r,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await se("cmd_repos_install",{instanceId:r,source:i.source,projectId:i.id,versionId:e.id}),a(),t(),oe({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){oe(String(o),"err"),s.disabled=!1,s.textContent="Kur"}})}}async function oM(i,e){const{root:t,close:n}=Xt(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),a=t.querySelector("#pk-bar"),r=t.querySelector("#pk-detail"),{listen:s}=await _t(async()=>{const{listen:c}=await Promise.resolve().then(()=>St);return{listen:c}},void 0),o=await s("launch-progress",c=>{c.payload.stage==="modpack"&&(a.style.transform=`scaleX(${Math.min(1,Math.max(0,c.payload.percent/100))})`,r.textContent=c.payload.detail||"")});try{const c=await se("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await _t(()=>Promise.resolve().then(()=>St),void 0).then(l=>l.refreshState()),await lM(c),tt("instances")}catch(c){o(),r.textContent=`Kurulum başarısız: ${c}`,r.style.color="var(--danger)"}}async function lM(i){const e=await se("cmd_list_java_arg_presets"),{root:t,close:n}=Xt(`
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
  `);t.querySelectorAll(".preset-row").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.id;r!=="__skip"&&(await se("cmd_set_instance_java_preset",{id:i.id,presetId:r}),oe(`Preset: ${e.find(s=>s.id===r)?.name}`)),n()})})}function cM(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,dM(i)}async function dM(i){const e=i.querySelector("#yikim-news");try{const t=await se("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${Q("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${Q("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${Q("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",r=>{r.stopPropagation(),a?.startsWith("https://")&&Qo(a).catch(()=>{})})})}catch{e.innerHTML=""}}const Yl=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],uM={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function fM(i){const e=(t,n,a,r=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${r}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Jr(i){let e=le.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...uM}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},r=Yl.find(m=>m.id===n)||Yl[0],s=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(_=>{const p=i.querySelector("#app-version");p&&(p.textContent=`v${_} "Kıvılcım"`)}).catch(()=>{const _=i.querySelector("#app-version");_&&(_.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Q("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${le.accounts.map(m=>{const _=$i()?.id===m.id;return`
          <div class="acc-row ${_?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${jo(m)}" ${el(m)} draggable="false" />
            <div class="acc-info">
              <b>${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${_?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${Q("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${Q("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${Q("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Q("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Yl.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${fM(m)}
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
        <button class="btn ghost sm" id="skins-alani">${Q("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${Q("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${r.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${Q("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${s?"":" aktif"}" data-renk="" style="--sw:${r.accent}" title="Dünya rengi"></button>
            ${["#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#f5f5f5"].map(m=>`<button class="tema-renk${s.toLowerCase()===m?" aktif":""}" data-renk="${m}" style="--sw:${m}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${s||r.accent}" />
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
      <h3>${Q("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${Q("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${Ta("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
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
        <button class="btn ghost" id="anim-ekle">${Q("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${Q("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Q("mug")} Java</h3>
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
      <h3>${Q("gear")} Genel</h3>
      ${Ta("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${Ta("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${Ta("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${Ta("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${Ta("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${Ta("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
      <h3>${Q("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${Q("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${Q("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>bn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>bn()),i.querySelectorAll(".acc-row").forEach(m=>{const _=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async p=>{p.stopPropagation(),await se("cmd_select_account",{accountId:_}),await an(),Jr(i),oe("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async p=>{p.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await se("cmd_remove_account",{accountId:_}),await an(),Jr(i),oe("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{le.config.theme=m.dataset.t,hi(),await hn(),Jr(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>tt("skins"));const c=()=>le.config.tema_ozel||={},l=async(m,_)=>{const p=c()[n]||={};p[m]=_,!p.accent&&!p.radius&&delete c()[n],hi(),await hn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const _=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(p=>p.classList.toggle("aktif",p===m)),await l("accent",_),oe(_?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const d=i.querySelector("#tema-accent-pick");d?.addEventListener("input",()=>{le.config.tema_ozel||={},(le.config.tema_ozel[n]||={}).accent=d.value,hi()}),d?.addEventListener("change",async()=>{await hn(),oe("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(_=>_.classList.toggle("aktif",_===m)),await l("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],hi(),await hn(),Jr(i),oe("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=String(e.sahne_arka||"kiraz");u.innerHTML=zS.map(_=>`
      <button class="sas-kart${_.id===m?" sel":""}" data-art="${_.id}">
        <span class="sas-tuval"><canvas data-ciz="${_.id}"></canvas></span>
        <b>${_.ad}</b>
        <small>${_.etiket}</small>
      </button>`).join(""),u.querySelectorAll("canvas[data-ciz]").forEach(_=>{jp(_,_.dataset.ciz||"kiraz")}),u.querySelectorAll(".sas-kart").forEach(_=>_.addEventListener("click",async()=>{le.config.sahne_arka=_.dataset.art,u.querySelectorAll(".sas-kart").forEach(p=>p.classList.toggle("sel",p===_)),await hn(),oe("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{le.config.fx_particles=m.target.value,hi(),await hn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{le.config.cursor_style=m.target.value,hi(),await hn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await se("cmd_pick_java");m&&(le.config.java_dir=m,await hn(),i.querySelector("#java-path").textContent=m,oe("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{le.config.java_dir=null,await hn(),i.querySelector("#java-path").textContent="otomatik"}),Aa(i,"keep-open","keep_launcher_open"),Aa(i,"hide-on-launch","hide_on_launch"),Aa(i,"show-news","show_news"),Aa(i,"stats-enabled","stats_enabled"),Aa(i,"use-java25","use_java25"),Aa(i,"discord-rpc","discord_rpc"),Aa(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{le.config.menu_animasyon_hiz=m.target.value,await hn()});const f=()=>sm(i);i.querySelector("#anim-yenile")?.addEventListener("click",f),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await se("cmd_pick_emote");m?.length&&(oe(`${m.length} animasyon eklendi`),f())}catch(m){oe(`Animasyon eklenemedi: ${m}`,"err")}}),f();const h=i.querySelector("#dlc-range");h.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=h.value),h.addEventListener("change",async()=>{le.config.download_concurrency=parseInt(h.value),await hn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{oe("Güncelleme kontrol ediliyor…");try{const _=await(await _t(()=>import("./index-DSkUPpwd.js"),[])).check();if(_?.available){const{root:p,close:g}=Xt(`
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
        `);p.querySelector("#upd-later")?.addEventListener("click",()=>g()),p.querySelector("#upd-go")?.addEventListener("click",async()=>{const b=p.querySelector("#upd-go");b.disabled=!0,b.textContent="İndiriliyor…";try{await _.downloadAndInstall(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(T){b.disabled=!1,b.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${T}`,"err")}})}else oe("YIKIMLient güncel ✓")}catch(m){await gM(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Qo(No).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${No}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await se("cmd_get_app_dir");gm(m).catch(()=>{})}),pM(i,e)}function hM(i){const e=$i();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(r=>String(r).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Kl=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function pM(i,e){const t=i.querySelector("#rozet-alani");if(t){if(hM(e)){$f(i,e);return}t.innerHTML="",se("cmd_rozet_yetki").then(n=>{n?.izinli&&$f(i,e)}).catch(()=>{})}}function $f(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=$i(),a=!!n&&(e?.atolye_admin||[]).some(k=>String(k).toLowerCase()===n.name.toLowerCase());let r=new Array(64).fill("");const s=k=>/^#[0-9a-fA-F]{6}$/.test(String(k||""));let o=s(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(s).slice(0,24),l=!1;const d=[];let u=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${Q("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
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
              ${Q("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${l?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${Q("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${Q("undo")} Geri</button>
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
              <b class="ro-isim">${$i()?.name||"oyuncu"}</b>
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
          <button class="btn ghost sm" id="rozet-ekle">${Q("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const f=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),m=t.querySelector("#rozet-cipler"),_=()=>{f.innerHTML=r.map((k,C)=>`<button class="rozet-hucre${k?" dolu":""}" data-i="${C}" style="--c:${k||"transparent"}"></button>`).join(""),h.innerHTML=r.map(k=>`<i style="--c:${k||"transparent"}"></i>`).join("")},p=k=>{const C=l?"":o;r[k]!==C&&(r[k]=C,_())};f.addEventListener("click",k=>{const C=k.target.closest(".rozet-hucre");C&&(d.push([...r]),d.length>40&&d.shift(),p(Number(C.dataset.i)))});const g=t.querySelector("#rozet-renkler"),b=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),x=t.querySelector("#rozet-renk-sec"),M=()=>{const k=[...Kl,...c];g.innerHTML=k.map((C,N)=>`<button class="rozet-renk${C.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${C}" style="--c:${C}" title="${C}" data-ozel="${N>=Kl.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(C=>C.addEventListener("click",()=>{const N=C.dataset.c||"";l=!1,N&&E(N)}))},E=(k,C=!0)=>{o=k.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),b.value=o,T.style.setProperty("--c",o),x.value=o,M(),C&&(le.config.rozet_renk=o,hn())},A=k=>{if(!s(k))return oe("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const C=k.toLowerCase();return[...Kl,...c].some(N=>N.toLowerCase()===C)||(c=[...c,C].slice(-24),le.config.rozet_renkler=[...c]),E(C),!0};x?.addEventListener("input",()=>{E(x.value,!1)}),x?.addEventListener("change",()=>A(x.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const k=b.value.trim(),C=k.startsWith("#")?k:`#${k}`;A(C)&&oe(`Renk paletine eklendi: ${C.toLowerCase()}`)}),b?.addEventListener("keydown",k=>{k.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),b?.addEventListener("input",()=>{const k=b.value.trim(),C=k.startsWith("#")?k:`#${k}`;T.style.setProperty("--c",s(C)?C:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(k=>k.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const k=d.pop();k&&(r=k,_())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...r]),r=new Array(64).fill(""),_()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...r]),r=mM(),_()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const k=t.querySelector("#rozet-kaydet");k.disabled=!0,k.textContent="Kaydediliyor…";try{const C=await se("cmd_rozet_ciz",{pikseller:r});oe(C?.yuklendi?`Rozet kaydedildi — ${C.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${C.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${C?.hata||"ağ"})`)}catch(C){oe(`Rozet kaydedilemedi: ${C}`,"err")}finally{k.disabled=!1,k.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await se("cmd_rozet_sil"),r=new Array(64).fill(""),_(),oe("Rozet kaldırıldı"))});const v=()=>{m&&(m.innerHTML=u.length?u.map((k,C)=>`<span class="rozet-cip">${k}<button data-i="${C}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',m.querySelectorAll("button").forEach(k=>k.addEventListener("click",()=>{u.splice(Number(k.dataset.i),1),w()})))},w=async()=>{le.config.atolye_izinli=[...u],await hn(),v();try{(await se("cmd_rozet_izinler",{isimler:u}))?.yuklendi||oe("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const k=t.querySelector("#rozet-isim"),C=k.value.trim();if(C){if(u.some(N=>N.toLowerCase()===C.toLowerCase())){oe("Bu isim zaten listede");return}u.push(C),k.value="",w(),oe(`${C} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",k=>{k.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),_(),M(),v(),se("cmd_rozet_oku").then(k=>{const C=k?.pikseller;Array.isArray(C)&&C.length===64&&(r=C,_())}).catch(()=>{})}function mM(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const No="https://github.com/YKSAMI1/yikimlient/releases/latest";function Wf(i){return String(i??"").trim().replace(/^v/i,"")}async function gM(i){let e="",t="";try{const r=await se("cmd_check_updates"),s=Wf(r?.current),o=Wf(r?.latest);o&&o!==s&&(e=o)}catch{}try{const r=await se("cmd_upd_teshis"),s=Array.isArray(r?.platformlar)&&r.platformlar.length?r.platformlar.join(", "):"yok",o=[`HTTP ${r?.durum||"?"}`,`manifest ${r?.surum||"?"}`,`platform: ${s}`];r?.hata&&o.push(String(r.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=Xt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${Q("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Qo(No).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${No}`,"err"))})}async function sm(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await se("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${Q("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await se("cmd_delete_emote",{adi:n.adi}),oe("Animasyon kaldırıldı"),sm(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function Ta(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Aa(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),le.config[t]=a.classList.contains("on"),await hn()})}async function hn(){await se("cmd_save_settings",{config:le.config}),await an(),hi()}const fn=64,ka=64,_M=40;class Fo{w=fn;h=ka;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(fn*ka*4)}static bos(){return new Fo}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new Fo(this.veri)}piksel(e,t){if(e<0||t<0||e>=fn||t>=ka)return[0,0,0,0];const n=(t*fn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const r=Math.max(1,Math.min(8,Math.floor(a))),s=e-Math.floor((r-1)/2),o=t-Math.floor((r-1)/2);for(let c=0;c<r;c++)for(let l=0;l<r;l++){const d=s+l,u=o+c;if(d<0||u<0||d>=fn||u>=ka)continue;const f=(u*fn+d)*4;this.veri[f]=n[0],this.veri[f+1]=n[1],this.veri[f+2]=n[2],this.veri[f+3]=n[3]}}cizgi(e,t,n,a,r,s=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),u=Math.abs(l-o),f=-Math.abs(d-c),h=o<l?1:-1,m=c<d?1:-1;let _=u+f;for(;this.boya(o,c,r,s),!(o===l&&c===d);){const p=2*_;p>=f&&(_+=f,o+=h),p<=u&&(_+=u,c+=m)}}kova(e,t,n){if(e<0||t<0||e>=fn||t>=ka)return;const a=this.piksel(e,t);if(qf(a,n))return;const r=[t*fn+e],s=new Uint8Array(fn*ka);for(;r.length;){const o=r.pop();if(s[o])continue;s[o]=1;const c=o%fn,l=Math.floor(o/fn);qf(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&r.push(o-1),c<fn-1&&r.push(o+1),l>0&&r.push(o-fn),l<ka-1&&r.push(o+fn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>_M&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function qf(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function vM(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}const Zd=US,om=Kp*Zd,lm=DS*Zd,yM=.3,Zl=2;let xM=null;function Xf(i,e,t,n,a,r,s){r<=0||s<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,r,s)}function Yf(i,e,t,n,a,r,s){if(r<=0||s<=0)return;const o=xM??=document.createElement("canvas"),c=Math.round(r),l=Math.round(s);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${yM})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function bM(i,e,t,n=Zd){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const r=FS(t),s=IS*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Kp/2*a,(31.3+Zl)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of r){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+Zl)*a;Yf(i,e,o.yan,c,l,s,o.on.h*a),o.ust&&o.ustYan&&Yf(i,e,o.ustYan,c,l,s,o.on.h*a)}for(const o of r){const c=o.x*a,l=(o.y+Zl)*a;Xf(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&Xf(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const SM=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],sn=64;function MM(i,e,t,n){const a=e.pafta;let r=e.slim,s=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,u=!1,f=8,h=!1,m=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${Q("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Ql(s)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${Q("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${sn*f}" height="${sn*f}"></canvas>
          <canvas id="ske-izgara" width="${sn*f}" height="${sn*f}"></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(K=>`<button class="seg-btn ${K===f?"aktif":""}" data-zum="${K}">${K}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-edit-onizleme">
          <canvas id="ske-onizleme"></canvas>
        </div>
        <div class="sk-arac-cubugu">
          <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${Q("brush")}</button>
          <button class="sk-arac" data-arac="silgi" title="Silgi">${Q("trash")}</button>
          <button class="sk-arac" data-arac="kova" title="Kova">${Q("bucket")}</button>
          <button class="sk-arac" data-arac="damla" title="Damlacık">${Q("picker")}</button>
          <span class="sk-arac-ayrac"></span>
          <button class="sk-arac" id="ske-geri-al" title="Geri Al">${Q("undo")}</button>
          <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${Q("redo")}</button>
        </div>
        <div class="sk-renk-satir">
          <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
          <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" />
          <div class="sk-kalinlik">
            ${[1,2,4].map(K=>`<button class="seg-btn ${K===1?"aktif":""}" data-kalinlik="${K}">${K}</button>`).join("")}
          </div>
        </div>
        <div class="sk-palet" id="ske-palet">
          ${SM.map(K=>`<button class="sk-palet-renk" data-renk="${K}" style="--c:${K}" title="${K}"></button>`).join("")}
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
                ${Df.filter(P=>P.katman===K).map(P=>`<button class="sk-bolge" data-bolge="${P.id}">${P.ad}</button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${Ql(s)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${Q("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${Q("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),b=p.querySelector("#ske-izgara"),T=g.getContext("2d"),x=b.getContext("2d"),M=p.querySelector("#ske-onizleme"),E=document.createElement("canvas");E.width=sn,E.height=sn;const A=E.getContext("2d"),v=Cs();v.kur(M),v.tuvalDoku(E,r);function w(){const K=new ImageData(new Uint8ClampedArray(a.veri),sn,sn);A.putImageData(K,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(E,0,0,g.width,g.height),k(),v.dokuTazele()}function k(){x.clearRect(0,0,b.width,b.height);const K=b.width/sn;if(f>=8){x.strokeStyle="rgba(255,255,255,0.09)",x.lineWidth=1;for(let P=1;P<sn;P++)x.beginPath(),x.moveTo(P*K,0),x.lineTo(P*K,b.height),x.stroke(),x.beginPath(),x.moveTo(0,P*K),x.lineTo(b.width,P*K),x.stroke()}if(d){x.strokeStyle="rgba(255,150,60,0.35)",x.lineWidth=1,x.setLineDash([]);for(const P of d.dilimler)P.x===d.x&&P.y===d.y||x.strokeRect(P.x*K+.5,P.y*K+.5,P.w*K-1,P.h*K-1);if(x.strokeStyle="rgba(255,150,60,0.95)",x.lineWidth=2,x.setLineDash([6,4]),x.strokeRect(d.x*K+1,d.y*K+1,d.w*K-2,d.h*K-2),x.setLineDash([]),u){x.fillStyle="rgba(0,0,0,0.55)",x.beginPath(),x.rect(0,0,b.width,b.height);for(const P of d.dilimler)x.rect(P.x*K,P.y*K,P.w*K,P.h*K);x.fill("evenodd")}}}function C(K){const P=g.getBoundingClientRect(),G=Math.floor((K.clientX-P.left)/P.width*sn),de=Math.floor((K.clientY-P.top)/P.height*sn);return[Math.max(0,Math.min(sn-1,G)),Math.max(0,Math.min(sn-1,de))]}function N(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",K=>{if(K.button!==0)return;const[P,G]=C(K);if(h=!0,m=P,_=G,g.setPointerCapture(K.pointerId),o==="damla"){l=a.damla(P,G),L(l);return}a.katmanBasla(),o==="kova"?a.kova(P,G,N()):a.boya(P,G,N(),c),w()}),g.addEventListener("pointermove",K=>{if(!h)return;const[P,G]=C(K);P===m&&G===_||((o==="kalem"||o==="silgi")&&(a.cizgi(m,_,P,G,N(),c),w()),m=P,_=G)});const O=()=>{h=!1,m=-1,_=-1};g.addEventListener("pointerup",O),g.addEventListener("pointercancel",O);function L(K){l=K;const P=EM(K);p.querySelector("#ske-renk").value=P,p.querySelector("#ske-renk-hex").value=P,p.querySelectorAll(".sk-palet-renk").forEach(G=>{G.classList.toggle("aktif",G.dataset.renk?.toLowerCase()===P.toLowerCase())})}p.querySelector("#ske-renk").addEventListener("input",K=>{L(Jl(K.target.value))}),p.querySelector("#ske-renk-hex").addEventListener("change",K=>{const P=K.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(P)&&L(Jl(P))}),p.querySelector("#ske-palet")?.addEventListener("click",K=>{const P=K.target.closest(".sk-palet-renk");P?.dataset.renk&&L(Jl(P.dataset.renk))}),p.querySelectorAll(".sk-arac[data-arac]").forEach(K=>{K.addEventListener("click",()=>{o=K.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(K=>{K.addEventListener("click",()=>{c=Number(K.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(K=>{K.addEventListener("click",()=>{f=Number(K.dataset.zum),g.width=g.height=b.width=b.height=sn*f,p.querySelectorAll("[data-zum]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(K=>{K.addEventListener("click",()=>{r=K.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(P=>P.classList.remove("aktif")),K.classList.add("aktif"),v.tuvalDoku(E,r),te(r?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})}),p.querySelector("#ske-bolgeler")?.addEventListener("click",K=>{const P=K.target.closest("[data-bolge]");P?.dataset.bolge&&(d=Df.find(G=>G.id===P.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(G=>G.classList.remove("aktif")),P.classList.add("aktif"),k())}),p.querySelector("#ske-sadece").addEventListener("change",K=>{u=K.target.checked,k()});const z=()=>{a.geriAl()&&w()},X=()=>{a.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",z),p.querySelector("#ske-ileri-al")?.addEventListener("click",X);const $=K=>{!document.body.contains(p)||!(K.ctrlKey||K.metaKey)||(K.key.toLowerCase()==="z"?(K.preventDefault(),K.shiftKey?X():z()):K.key.toLowerCase()==="s"&&(K.preventDefault(),j(!0)))};window.addEventListener("keydown",$);function te(K){const P=p.querySelector("#ske-uyari");P.textContent=K}function Y(){return new Promise(K=>{E.toBlob(async P=>{if(!P)return K([]);const G=new Uint8Array(await P.arrayBuffer());K(Array.from(G))},"image/png")})}async function j(K){if(s=p.querySelector("#ske-ad").value.trim()||s,s||(s="Skin"),K&&!await wM("Skini giy",`<b>${Ql(s)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const G=await Y();if(!G.length){te("PNG üretilemedi.");return}const de=p.querySelector(K?"#ske-giy":"#ske-kitaplik");de.disabled=!0,te(K?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:G,slim:r,ad:s},K),te(""),Fe()}catch(Pe){te(String(Pe)),de.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void j(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void j(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const K=await Y(),P=p.querySelector("#ske-ad");try{const{invoke:G}=await _t(async()=>{const{invoke:Pe}=await Promise.resolve().then(()=>St);return{invoke:Pe}},void 0),de=await G("cmd_skin_disa_aktar",{ad:P.value.trim()||"skin",veri:K});oe(`Dışa aktarıldı: ${de}`)}catch(G){oe(String(G),"err")}});const ae=document.createElement("button");ae.className="btn ghost sk-dosya-btn",ae.innerHTML=`${Q("image")} Dosya`;const Se=document.createElement("input");Se.type="file",Se.accept="image/png",Se.style.display="none",ae.addEventListener("click",()=>Se.click()),Se.addEventListener("change",async()=>{const K=Se.files?.[0];K&&await qe(K),Se.value=""}),p.querySelector("#ske-geri").after(ae),p.appendChild(Se);function Ae(){return new Promise(K=>{const{root:P,close:G}=Xt(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${Q("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${Q("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let de=!1;const Pe=xe=>{de||(de=!0,G(),K(xe))};P.querySelector("#se-wide")?.addEventListener("click",()=>Pe(!1)),P.querySelector("#se-slim")?.addEventListener("click",()=>Pe(!0)),P.querySelector("#se-iptal")?.addEventListener("click",()=>Pe(null))})}async function qe(K){try{const P=URL.createObjectURL(K),G=await new Promise((yt,$e)=>{const Xe=new Image;Xe.onload=()=>yt(Xe),Xe.onerror=()=>$e(new Error("görsel okunamadı")),Xe.src=P}),de=document.createElement("canvas");de.width=G.width,de.height=G.height;const Pe=de.getContext("2d");Pe.drawImage(G,0,0),URL.revokeObjectURL(P);const xe=Pe.getImageData(0,0,G.width,G.height);if(!(G.width===64&&(G.height===64||G.height===32))){oe(`Skin 64×64 veya 64×32 olmalı (bu dosya ${G.width}×${G.height})`,"err");return}const Be=await Ae();if(Be===null)return;r=Be,p.querySelectorAll("[data-slim]").forEach(yt=>{yt.classList.toggle("aktif",yt.dataset.slim===(r?"1":"0"))}),a.katmanBasla(),G.height===64?a.veri.set(xe.data):a.veri.set(vM(xe.data)),w(),v.tuvalDoku(E,r)}catch(P){oe(String(P),"err")}}const Fe=()=>{window.removeEventListener("keydown",$),p.remove();try{v.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Fe),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const K=p.querySelector(".sk-edit-kayit");K.scrollIntoView({behavior:"smooth",block:"center"}),K.querySelector("#ske-ad").focus()}),L(l),w()}function EM(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function Jl(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Ql(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function wM(i,e,t){return new Promise(n=>{const{root:a,close:r}=Xt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Ze=null,Gt=null,ca=null,ii=!1,Oo=null;const Ht=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Jd(i){Kd(),Ze=null,Gt=null,ca=null,Oo=null;const e=$i();if(!e||e.kind!=="microsoft"){TM(i);return}i.innerHTML=AM(e.name),kM(i,e.id),Yo(i,e.id,!0)}function TM(i){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${Q("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${Q("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{bn(()=>Jd(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>tt("settings"))}function AM(i){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${Q("check")} Orijinal hesap</span>
          <button class="btn" id="sk-kozmetik">${Q("sparkle")} Kozmetikler</button>
          <button class="btn primary" id="sk-duzenle">${Q("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${Ht(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${Q("undo")} Yedeği Geri Yükle</button>
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
              ${Q("plus")}
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
    </div>`}function kM(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void UM(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>tt("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void jl(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void LM(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n.click())}),n.addEventListener("change",()=>{const r=n.files?.[0];r&&Zf(i,e,r),n.value=""}),t.addEventListener("dragover",r=>{r.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",r=>{r.preventDefault(),t.classList.remove("uzerinde");const s=r.dataTransfer?.files?.[0];s&&Zf(i,e,s)});const a=(r,s)=>{const o=i.querySelector(r);o?.addEventListener("click",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||Kf(i,l)}),o?.addEventListener("dblclick",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||(Kf(i,l),s())})};a("#sk-kitaplik",()=>void jl(i,e)),a("#sk-varsayilan",()=>void jl(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",r=>{const s=r.target.closest(".skin-sil");if(!s)return;r.stopPropagation();const o=s.closest(".skin-kart");o?.dataset.id&&DM(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",r=>{const s=r.target.closest(".skin-pelerin");if(!s)return;const o=s.dataset.id||null;PM(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",r=>{r.target.closest("#sk-yenile")&&Yo(i,e,!1)})}async function Yo(i,e,t){try{Ze=await se("cmd_skin_hub",{id:e}),Gt=Gt??RM(),Ga(i),t?dm(i):Qd(i),Ko(),Ze.cevrimdisi?oe("Çevrimdışısın — son bilinen skin gösteriliyor"):Ze.hata&&oe(Ze.hata,"err")}catch(n){oe(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function RM(){if(!Ze)return null;if(Ze.aktif)return{tur:"kayit",id:`aktif:${Ze.aktif.dosya}`,dosya:Ze.aktif.dosya,slim:Ze.aktif.slim,ad:"Aktif skin"};const i=Ze.kitaplik[0];if(i)return cm(i);const e=Ze.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function cm(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function Ga(i){if(!Ze)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Ze.cevrimdisi?`<div class="skin-serit-cevrimdisi">${Q("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Ze.kitaplik.length?(t.innerHTML=Ze.kitaplik.map(l=>CM(l)).join(""),t.querySelectorAll(".skin-yuz").forEach(l=>{const d=l.dataset.dosya;d&&Jf(l,d,l.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const c=i.querySelector("#sk-adet");c&&(c.textContent=Ze.kitaplik.length?`${Ze.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Ze.varsayilanlar||[]).map(c=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${Ht(c.ad)}" data-dosya="${Ht(c.dosya)}"
           data-slim="${c.slim?1:0}" data-ad="${Ht(c.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${om}" height="${lm}"
                  data-dosya="${Ht(c.dosya)}" data-slim="${c.slim?1:0}"></canvas>
          <span class="skin-model">${c.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${Ht(c.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(c=>{const l=c.dataset.dosya;l&&Jf(c,l,c.dataset.slim==="1")}));const a=i.querySelector("#sk-pelerin");if(a)if(!Ze.pelerinler.length)a.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';else{const c=Ze.pelerinler.find(l=>l.aktif);a.innerHTML=Ze.pelerinler.map(l=>`
        <button class="skin-pelerin ${l.aktif?"aktif":""}" data-id="${Ht(l.id)}" title="${Ht(l.ad)}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${Ht(l.dosya||"")}"></canvas>
          <span class="skin-pelerin-ad">${Ht(l.ad)}</span>
          ${l.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(c?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
               <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
             </button>`:""),a.querySelectorAll(".skin-pelerin-tuval").forEach(l=>{const d=l.dataset.dosya;d&&FM(l,d)})}const r=i.querySelector("#sk-aktif-ad");if(r){const c=Gt;r.textContent=Ze.cevrimdisi?"çevrimdışı önizleme":c?`${c.ad} · ${c.slim?"Slim":"Wide"}`:"skin seç"}const s=i.querySelector("#sk-giy");s&&(s.disabled=!Gt||ii,s.textContent=ii?"Bekle…":"Bu Skini Giy");const o=i.querySelector("#sk-yedek");o&&(o.style.display=Ze.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(c=>{const l=Gt&&c.dataset.id===Gt.id;c.classList.toggle("secili",!!l);const d=c.querySelector(".skin-rozet.secim");if(l&&!d){const u=document.createElement("span");u.className="skin-rozet secim",u.textContent=ca&&c.dataset.id===ca?"GİYİLİ":"SEÇİLİ",c.appendChild(u)}else!l&&d?d.remove():l&&d&&(d.textContent=ca&&c.dataset.id===ca?"GİYİLİ":"SEÇİLİ")})}function CM(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${Ht(i.id)}" data-dosya="${Ht(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${Ht(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${om}" height="${lm}"
                data-dosya="${Ht(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${Ht(i.ad)}</div>
      <button class="skin-sil" title="Sil">${Q("trash")}</button>
    </div>`}function Kf(i,e){Gt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},Qd(),Ga(i)}function dm(i){const e=i.querySelector("#skin-canvas");if(!e)return;Cs().kur(e),Qd()}function Qd(i){const e=Cs();Gt&&e.skin({url:qt(Gt.dosya),slim:Gt.slim})}function Ko(){if(!Ze)return;const e=Ze.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;e!==Oo&&(Oo=e,Cs().pelerin(e?{url:qt(e)}:null))}async function jl(i,e){if(!Gt||ii)return;const t=Gt;if(await jd("Skini giy",`<b>${Ht(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){ii=!0,Ga(i);try{let a;if(t.tur==="kayit"&&Ze?.kitaplik.some(r=>r.id===t.id))a=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const r=await um(t.dosya);a=await se("cmd_skin_giy",{id:e,veri:r,slim:t.slim,ad:null})}Ze=a,ca=t.tur==="kayit"?t.id:null,oe("Skin giyildi — sunucularda görünecek.")}catch(a){oe(String(a),"err")}finally{ii=!1,Ga(i)}}}async function LM(i,e){if(!(ii||!await jd("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){ii=!0;try{Ze=await se("cmd_skin_yedek_geri_yukle",{id:e}),ca=null,oe("Yedek skin geri yüklendi.")}catch(n){oe(String(n),"err")}finally{ii=!1,Ga(i),Ko()}}}async function PM(i,e,t){if(!(ii||!Ze)&&!(t===null&&!Ze.pelerinler.some(n=>n.aktif))){ii=!0;try{Ze=await se("cmd_skin_pelerin",{id:e,capeId:t}),oe(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),Ko()}catch(n){oe(String(n),"err")}finally{ii=!1,Ga(i)}}}async function DM(i,e,t,n){if(await jd("Skini sil",`<b>${Ht(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await se("cmd_skin_sil",{kayitId:t}),Gt?.id===t&&(Gt=null),oe("Skin silindi."),await Yo(i,e,!1)}catch(r){oe(String(r),"err")}}async function Zf(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",r=await IM(a);if(r===null)return;await se("cmd_skin_kaydet",{ad:a,veri:n,slim:r}),oe(`Skin kitaplığa eklendi · ${r?"Slim":"Wide"}`),await Yo(i,e,!1)}catch(n){oe(String(n),"err")}}function IM(i){return new Promise(e=>{const{root:t,close:n}=Xt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${Ht(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${Q("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${Q("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const r=c=>{c.key==="Escape"&&s(null)},s=c=>{a||(a=!0,window.removeEventListener("keydown",r),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>s(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>s(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>s(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&s(null)}),window.addEventListener("keydown",r)})}async function UM(i,e){const t=Gt?.dosya||Ze?.aktif?.dosya||Ze?.varsayilanlar[0]?.dosya;if(!t){oe("Önce bir skin seç.","err");return}let n;try{n=await NM(await um(t))}catch(o){oe(String(o),"err");return}const a=new Date,r=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let s=!1;MM(i,{pafta:n,slim:Gt?.slim??!1,ad:r},async(o,c)=>{const l=await se("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Ze=await se("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),ca=l.id,oe("Skin giyildi — sunucularda görünecek.")):(Ze=await se("cmd_skin_hub",{id:e}),oe("Kitaplığa kaydedildi.")),Gt=cm(l),s=!0},()=>{if(!s){Jd(i);return}Ga(i),Kd(),Oo=null,dm(i),Ko()})}async function NM(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r.imageSmoothingEnabled=!1;const s=fm(n),o=n.naturalHeight===32;return r.drawImage(s,0,0,64,o?32:64),new Fo(new Uint8ClampedArray(r.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function um(i){const e=await fetch(qt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function fm(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function Jf(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&bM(a,fm(n),t)},n.src=qt(e)}function FM(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const a=Zp(t),r=Jp(a);n.drawImage(a,r.x,r.y,r.w,r.h,0,0,i.width,i.height)},t.src=qt(e)}function jd(i,e,t){return new Promise(n=>{const{root:a,close:r}=Xt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const OM=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],Gn=14;let Qf=null,jf=null;const zM=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function BM(i){i.innerHTML=HM(),GM(i)}function HM(){return`
    <div class="page-wrap kozmetik-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitra kanadını çiz ya da fotoğraftan yükle — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-izgara">
        <section class="kz-kart" id="kz-pelerin-kart">
          <div class="kz-kart-ust">
            <h3>${Q("shirt")} Pelerin</h3>
            <span class="kz-rozet" id="kz-pelerin-durum"></span>
          </div>
          <div class="kz-govde">
            <canvas class="kz-tuval" id="kz-pelerin-tuval" width="${10*Gn}" height="${16*Gn}"></canvas>
            <div class="kz-yan">
              <div class="kz-onizleme">
                <span>Önizleme</span>
                <canvas id="kz-pelerin-onizleme" width="140" height="100"></canvas>
              </div>
              <div class="kz-araclar" id="kz-pelerin-palet"></div>
              <div class="kz-renk-satir">
                <label for="kz-pelerin-renk">Renk</label>
                <input type="color" id="kz-pelerin-renk" value="#ff8a3d" />
                <button class="btn" id="kz-pelerin-sil" title="Silgi (çizerek siler)">Silgi</button>
                <button class="btn" id="kz-pelerin-temizle" title="Tümünü temizle">${Q("trash")} Temizle</button>
              </div>
            </div>
          </div>
          <div class="kz-alt">
            <label class="btn" for="kz-pelerin-dosya">${Q("image")} Fotoğraf Yükle</label>
            <input type="file" id="kz-pelerin-dosya" accept="image/*" style="display:none" />
            <button class="btn primary" id="kz-pelerin-kaydet">${Q("check")} Kaydet</button>
            <button class="btn" id="kz-pelerin-kaldir">Kaldır</button>
            <span class="kz-ipucu">Sol tık: çiz · Sağ tık: sil</span>
          </div>
        </section>

        <section class="kz-kart" id="kz-kanat-kart">
          <div class="kz-kart-ust">
            <h3>${Q("sparkle")} Elitra Kanadı</h3>
            <span class="kz-rozet" id="kz-kanat-durum"></span>
          </div>
          <div class="kz-govde">
            <canvas class="kz-tuval" id="kz-kanat-tuval" width="${10*Gn}" height="${20*Gn}"></canvas>
            <div class="kz-yan">
              <div class="kz-onizleme">
                <span>Önizleme</span>
                <canvas id="kz-kanat-onizleme" width="140" height="70"></canvas>
              </div>
              <div class="kz-araclar" id="kz-kanat-palet"></div>
              <div class="kz-renk-satir">
                <label for="kz-kanat-renk">Renk</label>
                <input type="color" id="kz-kanat-renk" value="#3d5afe" />
                <button class="btn" id="kz-kanat-sil" title="Silgi (çizerek siler)">Silgi</button>
                <button class="btn" id="kz-kanat-temizle" title="Tümünü temizle">${Q("trash")} Temizle</button>
              </div>
            </div>
          </div>
          <div class="kz-alt">
            <label class="btn" for="kz-kanat-dosya">${Q("image")} Fotoğraf Yükle</label>
            <input type="file" id="kz-kanat-dosya" accept="image/*" style="display:none" />
            <button class="btn primary" id="kz-kanat-kaydet">${Q("check")} Kaydet</button>
            <button class="btn" id="kz-kanat-kaldir">Kaldır</button>
            <span class="kz-ipucu">Kanatlar oyunda ayna simetriktir</span>
          </div>
        </section>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Aynı sunucudaki diğer YIKIMLient oyuncuları da senin pelerinini görür.</p>
    </div>`}async function GM(i){let e;try{e=await se("cmd_kozmetik_oku")}catch(t){oe(String(t),"err"),e={pelerin:null,kanat:null,pelerin_dosya:null,kanat_dosya:null}}Qf={g:10,y:16,ad:"Pelerin",pikseller:e.pelerin??eh(10*16),renk:"#ff8a3d"},jf={g:10,y:20,ad:"Kanat",pikseller:e.kanat??eh(10*20),renk:"#3d5afe"},th(i,Qf),th(i,jf)}const eh=i=>Array.from({length:i},()=>"");function th(i,e){const t=e.ad.toLowerCase(),n=i.querySelector(`#kz-${t}-tuval`);if(!n)return;VM(i,e);const a=i.querySelector(`#kz-${t}-durum`);a&&(a.textContent=e.pikseller.some(u=>u!=="")?"KAYITLI":"");const r=i.querySelector(`#kz-${t}-renk`);r&&(r.value=e.renk),Qr(e,n);let s=!1,o=!1;const c=u=>{const f=n.getBoundingClientRect(),h=Math.floor((u.clientX-f.left)/f.width*e.g),m=Math.floor((u.clientY-f.top)/f.height*e.y);if(h<0||m<0||h>=e.g||m>=e.y)return;const _=m*e.g+h;e.pikseller[_]=o?"":e.renk,Qr(e,n),jr(i,e)};n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("pointerdown",u=>{s=!0,o=u.button===2;try{n.setPointerCapture(u.pointerId)}catch{}c(u)}),n.addEventListener("pointermove",u=>{s&&c(u)});const l=()=>{s=!1};n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),r?.addEventListener("input",()=>{e.renk=r.value}),i.querySelector(`#kz-${t}-sil`)?.addEventListener("click",()=>{e.renk=""}),i.querySelector(`#kz-${t}-temizle`)?.addEventListener("click",()=>{for(let u=0;u<e.pikseller.length;u++)e.pikseller[u]="";Qr(e,n),jr(i,e)}),i.querySelector(`#kz-${t}-kaydet`)?.addEventListener("click",()=>void nh(e)),i.querySelector(`#kz-${t}-kaldir`)?.addEventListener("click",()=>{for(let u=0;u<e.pikseller.length;u++)e.pikseller[u]="";Qr(e,n),jr(i,e),nh(e)});const d=i.querySelector(`#kz-${t}-dosya`);d?.addEventListener("change",()=>{const u=d.files?.[0];u&&$M(i,e,n,u),d.value=""}),jr(i,e)}function VM(i,e){const t=i.querySelector(`#kz-${e.ad.toLowerCase()}-palet`);if(!t)return;t.innerHTML=OM.map(a=>`<button class="kz-renk" data-renk="${a}" style="background:${a}" title="${a}"></button>`).join("");const n=i.querySelector(`#kz-${e.ad.toLowerCase()}-renk`);t.querySelectorAll(".kz-renk").forEach(a=>{a.addEventListener("click",()=>{e.renk=a.dataset.renk??"#ffffff",n&&(n.value=e.renk),t.querySelectorAll(".kz-renk").forEach(r=>r.classList.remove("aktif")),a.classList.add("aktif")})})}function Qr(i,e){const t=e.getContext("2d");if(t){t.imageSmoothingEnabled=!1,t.clearRect(0,0,e.width,e.height);for(let n=0;n<i.y;n++)for(let a=0;a<i.g;a++)t.fillStyle=(a+n)%2===0?"#17171d":"#1f1f27",t.fillRect(a*Gn,n*Gn,Gn,Gn);for(let n=0;n<i.y;n++)for(let a=0;a<i.g;a++){const r=i.pikseller[n*i.g+a];r&&(t.fillStyle=r,t.fillRect(a*Gn,n*Gn,Gn,Gn))}}}function jr(i,e){const t=i.querySelector(`#kz-${e.ad.toLowerCase()}-onizleme`);if(!t)return;const n=t.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,t.width,t.height);const a=5,r=(s,o,c,l)=>{for(let d=0;d<e.y;d++)for(let u=0;u<e.g;u++){const f=l?e.g-1-u:u,h=e.pikseller[d*e.g+f];h&&(n.fillStyle=h,n.fillRect(s+u*c,o+d*c,c,c))}};e.ad==="Pelerin"?(r(4,8,a,!1),r(74,8,a,!0)):(r(4,4,a,!1),r(74,4,a,!0))}async function $M(i,e,t,n){try{const a=URL.createObjectURL(n),r=await new Promise((m,_)=>{const p=new Image;p.onload=()=>m(p),p.onerror=()=>_(new Error("görsel okunamadı")),p.src=a});URL.revokeObjectURL(a);const s=e.g/e.y;let o=r.width,c=o/s;c>r.height&&(c=r.height,o=c*s);const l=(r.width-o)/2,d=(r.height-c)/2,u=document.createElement("canvas");u.width=e.g,u.height=e.y;const f=u.getContext("2d",{willReadFrequently:!0});if(!f)throw new Error("tuval yok");f.imageSmoothingEnabled=!1,f.drawImage(r,l,d,o,c,0,0,e.g,e.y);const h=f.getImageData(0,0,e.g,e.y).data;for(let m=0;m<e.g*e.y;m++){if(h[m*4+3]<24){e.pikseller[m]="";continue}const p=g=>g.toString(16).padStart(2,"0");e.pikseller[m]=`#${p(h[m*4])}${p(h[m*4+1])}${p(h[m*4+2])}`}Qr(e,t),jr(i,e),oe("Fotoğraf indirgendi — istersen fırçayla düzeltebilirsin.")}catch(a){oe(String(a),"err")}}async function nh(i){const e=i.pikseller.some(t=>t!=="");try{const t=await se("cmd_kozmetik_kaydet",{pelerin:i.ad==="Pelerin"?i.pikseller:null,kanat:i.ad==="Kanat"?i.pikseller:null}),n=document.querySelector(`#kz-${i.ad.toLowerCase()}-durum`);if(n&&(n.textContent=e?"KAYITLI":""),!e){oe(`${i.ad} kaldırıldı.`);return}t.yuklendi?oe(`${i.ad} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):oe(`${i.ad} kaydedildi (yerel). Sunucu: ${zM(t.hata||"ulaşılamadı")}`)}catch(t){oe(String(t),"err")}}function WM(){Pi.home=$S,Pi.instances=ZS,Pi.explore=aM,Pi.news=cM,Pi.settings=Jr,Pi.skins=Jd,Pi.kozmetik=BM}let Ca=null;const wr=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function qM(){Ca||(Ca=document.createElement("div"),Ca.className="drop-veil",Ca.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(Ca))}function ih(){Ca?.remove(),Ca=null}async function XM(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await se("cmd_route_dropped",{path:i})}catch(n){oe(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Xt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${wr(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(s=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),s())},150)}),!a){oe("Kurulum iptal edildi");return}oe("Paket indiriliyor — süreç panelinden takip edebilirsin");const r=await se("cmd_import_pack_file",{path:i,name:null});await an(),tt("instances"),oe(`${r.name} kuruldu ✓`)}else if(t==="jar"){const n=await hd(`Mod eklenecek kurulum: <b>${wr(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";oe(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await hd(`Dünya yüklenecek kurulum: <b>${wr(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),oe(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await se("cmd_import_emote_dosyasi",{path:i});oe(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await YM(i,e):oe(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){oe(`Kurulamadı: ${n}`,"err")}}async function YM(i,e){const t=Xt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${wr(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(r=>r.addEventListener("click",()=>{n=r.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(r=>{const s=setInterval(()=>{document.body.contains(t.root)||(clearInterval(s),r())},150)}),!n)return;const a=await hd(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await se("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),oe(`Eklendi: ${e}`))}function hd(i){return new Promise(e=>{const t=le.instances||[];if(!t.length){oe("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Xt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(r=>`
          <button class="btn ghost" data-id="${r.id}">
            <span style="font-size:18px">${r.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${wr(String(r.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${wr(String(r.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(r=>{r.addEventListener("click",()=>{const s=t.find(o=>o.id===r.dataset.id)||null;n.close(),e(s)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function KM(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")qM();else if(n==="drop"){ih();const a=t.paths||[];for(const r of a)await XM(r)}else ih()})}catch{}}const So=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let ec=null;function ZM(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,r=e.offsetHeight,s=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-r-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let u=i.top+i.height/2-r/2;u<14&&(u=i.bottom+16),e.style.left=`${s(d)}px`,e.style.top=`${o(u)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-r)/2)}px`,e.style.transform="none"}function ah(i,e){const t=So[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");tt(t.page);const r=a.querySelector(".tc-step");r.innerHTML=So.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const s=a.querySelector(".tc-next");s.textContent=e===So.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",ZM(o,a),Gi.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function JM(){if(ec||le.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),ec=i;let e=0;const t=async()=>{i.remove(),ec=null,document.removeEventListener("keydown",a),tt("home");try{le.config={...le.config,guided_tour_done:!0},await se("cmd_save_settings",{config:le.config}),await an()}catch{}},n=()=>{if(e+=1,e>=So.length){t();return}ah(i,e)},a=r=>{r.key==="Enter"||r.key==="ArrowRight"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),ah(i,e)}let vr=null,Mo=null;function fr(){Mo!==null&&(clearInterval(Mo),Mo=null)}function rh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function pd(){try{le.config={...le.config,onboarding_done:!0},await se("cmd_save_settings",{config:le.config}),await an()}catch{}}function tc(i){fr(),vr?.remove(),vr=null,pd(),tt("home")}function QM(){if(vr)return!0;if(le.config?.onboarding_done)return!1;if(!(le.accounts.length===0&&le.instances.length===0))return pd(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),vr=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3].map(f=>`<i class="${f<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
    <div class="ob-actions">
      ${u.back?'<button class="btn ghost sm" id="ob-back">← Geri</button>':""}
      <span class="spacer"></span>
      ${u.skip?`<button class="btn ghost sm" id="${u.skipId}">${u.skip}</button>`:""}
      ${u.next?`<button class="btn primary sm" id="${u.nextId}">${u.next}</button>`:""}
    </div>`;function r(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${n(0)}
      <div class="ob-step-label">1 / 4 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${a({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>tc()),t.querySelector("#ob-next")?.addEventListener("click",s)}function s(){fr(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{fr(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>tc());const u=t.querySelector("#ob-acc-ok"),f=t.querySelector("#ob-next"),h=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),g=t.querySelector("#ob-off-ad"),b=x=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${x}`,f.disabled=!1,fr()};le.accounts.length?b(le.accounts[0]?.name??""):f.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,h.style.display="block",h.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const x=await se("cmd_ms_login_begin");await an(),h.textContent="",h.style.display="none",b(x?.name??le.accounts[0]?.name??"")}catch(x){h.textContent=String(x),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const x=g.value.trim();if(x.length<3){m.textContent="İsim en az 3 karakter olmalı.",g.focus();return}m.textContent="",p.disabled=!0,p.textContent="…";try{await se("cmd_add_offline_account",{name:x}),await an(),b(x),p.textContent="✓"}catch(M){m.textContent=String(M),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),g.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T())}),Mo=setInterval(()=>{le.accounts.length&&b(le.accounts[0]?.name??"")},600),f.addEventListener("click",()=>{fr(),o()})}async function o(){let u=[];try{u=(await se("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(h=>`<option value="${rh(h)}">${rh(h)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",s);let f=null;t.querySelector("#ob-create")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{f=await se("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:le.config?.default_ram_mb||4096,java_preset_id:le.config?.default_java_preset||"balanced",standard_mods:!0}});const g=t.querySelector("#ob-inst-ok");g.style.display="flex",g.textContent=`✓ Kurulum hazır: ${f.name}`,m.textContent="✓ Oluşturuldu",await an(),setTimeout(()=>c(),700)}catch(g){d(`Kurulum oluşturulamadı: ${g}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{l()})}function c(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>tc())}return r(),!0;function l(){fr(),vr?.remove(),vr=null,pd(),tt("explore","kind:modpack")}function d(u){_t(()=>Promise.resolve().then(()=>St),void 0).then(f=>f.toast(u,"err"))}}const Va=Math.PI*2;function zo(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function jM(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Zo(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Va),i.fill()}function sh(i,e){const t=e?jM(zo(),.88):zo(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Va});return{base:e?24:30,spawn:n,step:(a,r,s)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*r*(1+i*r),a.y+=a.vy*r,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(s))},draw:Zo}}function nc(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Va});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Zo}}function e1(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Va});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Zo}}function t1(){const i=zo(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Va});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Va),t.stroke()}}}function n1(){const i=zo(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function ao(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Va}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Zo}}function i1(i){switch(i){case"pano":return sh(.5,!1);case"sahne":return ao("rgba(255,171,77,0.75)");case"sokum":return sh(.9,!0);case"afis":return nc("rgba(63,50,38,0.5)");case"standart":return ao("rgba(147,168,255,0.5)");case"sira":return ao("rgba(163,230,53,0.85)");case"rihtim":return t1();case"oda":return nc("rgba(224,48,30,0.6)");case"kumas":return nc("rgba(138,122,92,0.5)");case"perde":return ao("rgba(212,175,55,0.8)");case"buz":return e1();case"skala":return n1();default:return null}}let Rn=null,fi=null,aa=null,hr=[],ln=0,os=0,hm=1,pm=33,Jo=!1;function eu(){return Math.min(window.devicePixelRatio||1,1.5)}function ic(){ln&&cancelAnimationFrame(ln),ln=0,aa=null,hr=[],Rn&&(Rn.remove(),Rn=null,fi=null)}function Bo(i){if(ln=0,!fi||!Rn||!aa||Jo||document.hidden)return;if(i-os<pm){ln=requestAnimationFrame(Bo);return}const e=Math.min((i-os)/1e3,.06);os=i,ln=requestAnimationFrame(Bo);const t=eu();fi.setTransform(t,0,0,t,0,0),fi.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(aa.base*hm));for(;hr.length<a;){const r=aa.spawn(n);r.life=Math.random()*r.max,hr.push(r)}for(;hr.length>a;)hr.pop();for(const r of hr)r.life+=e,aa.step(r,e,n),fi.globalAlpha=r.a,aa.draw(fi,r);fi.globalAlpha=1}function mm(){aa&&fi&&!ln&&!document.hidden&&!Jo&&(os=performance.now(),ln=requestAnimationFrame(Bo))}document.addEventListener("visibilitychange",()=>{document.hidden?(ln&&cancelAnimationFrame(ln),ln=0):mm()});window.addEventListener("blur",()=>{Jo=!0,ln&&cancelAnimationFrame(ln),ln=0});window.addEventListener("focus",()=>{Jo=!1,mm()});window.addEventListener("resize",()=>{if(!Rn||!fi)return;const i=eu();Rn.width=Math.round(innerWidth*i),Rn.height=Math.round(innerHeight*i)});function a1(){const i=String(le.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){ic();return}const n=i1(e);if(!n){ic();return}hm={low:.45,mid:.9,high:1.6}[i]??1,pm=1e3/({low:25,mid:30,high:40}[i]??30),ic(),aa=n;const s=eu();Rn=document.createElement("canvas"),Rn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Rn.width=Math.round(innerWidth*s),Rn.height=Math.round(innerHeight*s),document.body.appendChild(Rn),fi=Rn.getContext("2d"),os=performance.now(),ln=requestAnimationFrame(Bo)}function r1(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function s1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function o1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function l1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const c1={yikim:{build:s1,spot:"3 2"},hedef:{build:o1,spot:"12 12"},nokta:{build:l1,spot:"8 8"}};function d1(){const i=String(le.config?.cursor_style||"standart"),e=document.documentElement,t=c1[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(r1());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const et=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,u1=`<svg ${et}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,f1=`<svg ${et}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,h1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,p1=`<svg ${et}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,m1=`<svg ${et}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,g1=`<svg ${et}><path d="M12 5v14M5 12h14"/></svg>`,_1=`<svg ${et}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,v1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',y1=`<svg ${et}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,x1=`<svg ${et}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,b1=`<svg ${et}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,S1=`<svg ${et}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,M1=`<svg ${et}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,E1=`<svg ${et}><path d="m4.5 12.5 5 5 10-11"/></svg>`,w1=`<svg ${et}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,T1=`<svg ${et}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,A1=`<svg ${et}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,k1=`<svg ${et}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,R1=`<svg ${et}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,C1=`<svg ${et}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,L1=`<svg ${et}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,P1=`<svg ${et}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,D1=`<svg ${et}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,I1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,U1=`<svg ${et}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,N1=`<svg ${et}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,F1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,O1=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,z1=`<svg ${et}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,B1=`<svg ${et}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,H1=`<svg ${et}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,G1=`<svg ${et}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,V1=`<svg ${et}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,$1=`<svg ${et}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,W1=`<svg ${et}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,q1=`<svg ${et}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,Ho={home:u1,grid:f1,compass:h1,news:p1,gear:m1,plus:g1,search:_1,play:v1,image:y1,folder:x1,trash:b1,copy:S1,back:M1,check:E1,user:w1,puzzle:T1,box:A1,cpu:k1,args:R1,term:C1,chart:L1,dl:P1,mug:D1,globe:I1,sparkle:U1,file:N1,info:F1,clock:O1,stop:z1,shirt:B1,brush:H1,bucket:G1,picker:V1,undo:$1,redo:W1,lock:q1};function Q(i,e=""){const t=Ho[i]||Ho.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const ro='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',so=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Wr={min:`<svg ${ro}>${so('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${ro}>${so('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${ro}>${so('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${ro}>${so('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},Tr=window.__TAURI__,X1=Tr.core,Y1=Tr.event,se=(i,e={})=>X1.invoke(i,e),qt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),ai=(i,e)=>Y1.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=Ho[t]||Ho.info,i.replaceWith(n)};const Qo=i=>se("plugin:opener|open_url",{url:i}),gm=i=>se("plugin:opener|open_path",{path:i}),le={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function an(i=!1){const e=await se("cmd_get_state");le.config=e.config,le.accounts=e.accounts,le.instances=e.instances,le.featured_versions=e.featured_versions,le.curseforge=e.curseforge,le.sys=e.sys,hi(),tl(),i&&tt(tu)}const oh=tl;function hi(){if(!le.config)return;const i=le.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(le.config.tema_ozel||{})[n]||{},r=n==="sahne"?le.config.custom_accent:"",s=String(a.accent||r||"").trim();e.setAttribute("data-world",n),s&&/^#[0-9a-fA-F]{3,8}$/.test(s)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",s)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),a1(),d1()}const K1=hi;function $i(){return le.accounts.find(i=>i.id===le.config?.last_selected_account)||le.accounts[0]||null}function jo(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function _m(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function el(i){const e=_m(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function Z1(){const i=document.getElementById("pill-ram");if(!i||!le.sys)return;const t=le.instances[0]?.ram_mb||le.config?.default_ram_mb||4096,n=le.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),r=i.querySelector("#ram-pill-val"),s=`${(t/1024).toFixed(1)} GB`;r?Yg(r,s):i.innerHTML=`RAM <b id="ram-pill-val">${s}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const pi=i=>document.querySelector(i);function cn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Ls(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function Ar(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function J1(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function ls(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const We={activeId:null};function oe(i,e="ok"){const t=cn(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const qr=[];function Xt(i){const e=cn(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),qr.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const r=qr.indexOf(e);r>=0&&qr.splice(r,1),e.remove()},a=r=>{r.key==="Escape"&&qr[qr.length-1]===e&&(r.preventDefault(),r.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",r=>{r.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Pi={},Ui={};let lh="home",tu="home";function tt(i,e){const t=pi("#content");t&&(tu=i,lh=i,Ui.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===lh)}),Kg(t,()=>{t.innerHTML="";const n=Pi[i];n&&n(t),sp(t)}))}const Q1=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function vm(){const i=pi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Wr.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Wr.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Wr.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${Q1.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${Q(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=Tr.window.getCurrentWindow();pi("#tb-min")?.addEventListener("click",()=>t.minimize()),pi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(We.activeId){t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};pi("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(a=>{We.activeId&&(a?.preventDefault?.(),t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=pi("#tb-max"),r=o=>{a&&(a.innerHTML=o?Wr.restore:Wr.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},s=()=>{t.isMaximized().then(r).catch(()=>{})};typeof t.onResized=="function"?t.onResized(s):Tr.event?.listen&&Tr.event.listen("tauri://resize",s),s()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>tt(a.dataset.page))}),tl(),pi("#rail-account")?.addEventListener("click",()=>{le.accounts.length?tt("settings"):bn()}),Dd(Array.from(document.querySelectorAll(".rail-item")))}function tl(){const i=pi("#rail-account");if(!i)return;const e=$i();if(!e){i.innerHTML=`<span class="ra-head ph">${Q("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${jo(e)}" draggable="false" ${el(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let oo=null;function bn(i){if(oo){oo.root.querySelector("#off-name")?.focus();return}const e=Xt(`
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
      <button class="btn primary lg" id="ms-go">${Q("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,oo=null,e.close())};oo={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const r=t.querySelector("#off-name").value.trim();if(r.length<3)return oe("İsim en az 3 karakter olmalı","err");try{await se("cmd_add_offline_account",{name:r}),await an(),oh(),oe(`Hoş geldin, ${r}!`),a(),i?.()}catch(s){oe(String(s),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const r=t.querySelector("#ms-status"),s=t.querySelector("#ms-go");s.disabled=!0,r.style.display="block",r.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await se("cmd_ms_login_begin");await an(),oh(),oe(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){r.textContent=String(o),s.disabled=!1}})}let lo=0;async function j1(i){if(!le.accounts.length){bn();return}if(We.activeId){oe("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++lo;We.activeId=i;const{root:t,close:n}=Xt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),r=t.querySelector("#lp-stage"),s=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await ai("launch-progress",h=>{if(e!==lo)return;const m=h.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,r.textContent=eE(m.stage),s.textContent=m.detail||""}),l=await ai("game-log",h=>{if(e!==lo)return;o.style.display="block";const m=document.createElement("div");m.textContent=h.payload,o.appendChild(m),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await ai("game-exit",h=>{if(e!==lo)return;We.activeId=null;const m=h.payload?.exit_code??h.payload?.code??-1;m===0?(r.textContent="Oyun kapatıldı",setTimeout(n,1200)):(r.textContent=`Oyun hata ile kapandı (kod ${m})`,s.textContent="Canlı logdan detayları görebilirsin.")}),u=()=>{c(),l(),d()},f=new MutationObserver(()=>{document.body.contains(t)||(u(),f.disconnect())});f.observe(document.body,{childList:!0});try{await se("cmd_launch_instance",{instanceId:i}),r.textContent="Oyun çalışıyor",s.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{u(),n()},1500),await an(!0)}catch(h){We.activeId=null,r.textContent="Başlatılamadı",s.textContent=String(h),s.style.color="var(--danger)"}}function eE(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}ai("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});ai("game-started",i=>{We.activeId=i.payload,an(!0)});ai("game-exit",async()=>{window.__yikimRestart||(We.activeId=null,an(!0))});ai("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&oe(`Kuruldu: ${e.filename}`),e.phase==="error"&&oe(`Hata: ${e.filename}`,"err")});let wn=null,ch;ai("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!wn||!document.body.contains(wn))&&(wn=document.createElement("div"),wn.className="sm-panel",wn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(wn)),clearTimeout(ch);const t=wn.querySelector("#sm-count"),n=wn.querySelector("#sm-fill"),a=wn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const r=document.createElement("div");for(r.className="sm-row done",r.textContent=`✓ ${e.current}`,a.appendChild(r);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(wn.querySelector(".sm-title").textContent="Standart modlar hazır",ch=setTimeout(()=>{wn?.remove(),wn=null},4e3))});ai("mod-install-progress",i=>{i.payload.phase});async function ym(){try{await an(),WM(),vm(),tt("home"),KM(),QM()||JM(),tE()}catch(i){nE(i)}}async function tE(){try{const e=await(await _t(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=Xt(`
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
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const a=t.querySelector("#upd-go");a.disabled=!0,a.textContent="İndiriliyor…";try{let r=0,s=0;await e.download(o=>{switch(o.event){case"Started":s=o.data.contentLength??0;break;case"Progress":r+=o.data.chunkLength;break;case"Finished":a.textContent="Kuruluyor…";break}s>0&&(a.textContent=`İndiriliyor… %${Math.round(r/s*100)}`)}),await e.install(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{Tr.process.exit(0)}catch{window.location.reload()}},900)}catch(r){a.disabled=!1,a.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${r}`,"err")}})}catch{}}function nE(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}ym();const St=Object.freeze(Object.defineProperty({__proto__:null,$:pi,applyTheme:K1,applyWorld:hi,boot:ym,currentAccount:$i,get currentPage(){return tu},el:cn,enterStage:sp,fileSrc:qt,fmtBytes:Ls,fmtDuration:Ar,fmtSpeed:J1,headAttrs:el,headFallbackUrl:_m,headUrl:jo,icon:Q,invoke:se,lamp:ls,launch:We,launchInstance:j1,listen:ai,nav:Ui,navigate:tt,openExternal:Qo,openLoginModal:bn,openModal:Xt,openPath:gm,pages:Pi,refreshState:an,renderAccountPill:tl,setupShell:vm,state:le,switchPress:Id,toast:oe,updateRamPill:Z1},Symbol.toStringTag,{value:"Module"}));
