import"./theme-DsW0LP6A.js";const Vg="modulepreload",$g=function(i){return"/"+i},ch={},bt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=$g(c),c in ch)return;ch[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Vg,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function Hi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pr={duration:.5,overwrite:!1,delay:0},cu,Yt,wt,Zn=1e8,_t=1/Zn,Yc=Math.PI*2,Wg=Yc/4,qg=0,bp=Math.sqrt,Xg=Math.cos,Yg=Math.sin,Xt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},du=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},yn=function(e){return e!==!1},uu=function(){return typeof window<"u"},ao=function(e){return Pt(e)||Xt(e)},Sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Kg=/random\([^)]+\)/g,Zg=/,\s*/g,dh=/(?:-?\.?\d|\.)+/gi,Mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ep=/[+-]=-?[.\d]+/,Jg=/[^,'"\[\]\s]+/gi,Qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,yi,Kc,hu,On={},Ko={},wp,Tp=function(e){return(Ko=Zs(e,On))&&wn},fu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Dr=function(e,t){return!t&&console.warn(e)},kp=function(e,t){return e&&(On[e]=t)&&Ko&&(Ko[e]=t)||On},Ir=function(){return 0},jg={suppressEvents:!0,isStart:!0,kill:!1},No={suppressEvents:!0,kill:!1},e_={suppressEvents:!0},pu={},Sa=[],Zc={},Ap,Cn={},Wl={},uh=30,zo=[],mu="",gu=function(e){var t=e[0],n,a;if(Ci(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=zo.length;a--&&!zo[a].targetTest(t););n=zo[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Zp(e[a],n)))||e.splice(a,1);return e},ja=function(e){return e._gsap||gu(Jn(e))[0]._gsap},Rp=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():du(n)&&e.getAttribute&&e.getAttribute(t)||n},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},t_=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Zo=function(){var e=Sa.length,t=Sa.slice(0),n,a;for(Zc={},Sa.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},_u=function(e){return!!(e._initted||e._startAt||e.add)},Cp=function(e,t,n,a){Sa.length&&!Yt&&Zo(),e.render(t,n,!!(Yt&&t<0&&_u(e))),Sa.length&&!Yt&&Zo()},Lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jg).length<2?t:Xt(e)?e.trim():e},Pp=function(e){return e},Bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},n_=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},hh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Jo=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},Sr=function(e){var t=e.parent||At,n=e.keyframes?n_(sn(e.keyframes)):Bn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},i_=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Dp=function(e,t,n,a,s){var r=e[a],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=r,t.parent=t._dp=e,t},_l=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[a]===t&&(e[a]=s),t._next=t._prev=t.parent=null},wa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},a_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jc=function(e,t,n,a){return e._startAt&&(Yt?e._startAt.revert(No):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},s_=function i(e){return!e||e._ts&&i(e.parent)},fh=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Qo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vl=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},yl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vl(e),n._dirty||es(n,e)),e},Ip=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qo(e.rawTime(),t),(!t._dur||Zr(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},Ei=function(e,t,n,a){return t.parent&&wa(t),t._start=kt((Ki(n)?n:n||e!==At?Wn(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dp(e,t,"_first","_last",e._sort?"_start":0),Qc(t)||(e._recent=t),a||Ip(e,t),e._ts<0&&yl(e,e._tTime),e},Up=function(e,t){return(On.ScrollTrigger||fu("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},Np=function(e,t,n,a,s){if(yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ap!==In.frame)return Sa.push(e),e._lazy=[s,a],1},r_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},o_=function(e,t,n,a){var s=e.ratio,r=t<0||!t&&(!e._start&&r_(e)&&!(!e._initted&&Qc(e))||(e._ts<0||e._dp._ts<0)&&!Qc(e))?0:1,o=e._rDelay,c=0,l,d,h;if(o&&e._repeat&&(c=Zr(0,e._tDur,t),d=Js(c,o),e._yoyo&&d&1&&(r=1-r),d!==Js(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Yt||a||e._zTime===_t||!t&&e._zTime){if(!e._initted&&Np(e,t,a,n,c))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&Jc(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&wa(e,1),!n&&!Yt&&(Nn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},l_=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},Qs=function(e,t,n,a){var s=e._repeat,r=kt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:kt(r*(s+1)+e._rDelay*s):r,o>0&&!a&&yl(e,e._tTime=e._tDur*o),e.parent&&vl(e),n||es(e.parent,e),e},ph=function(e){return e instanceof vn?es(e):Qs(e,e._dur)},c_={_start:0,endTime:Ir,totalDuration:Ir},Wn=function i(e,t,n){var a=e.labels,s=e._recent||c_,r=e.duration()>=Zn?s.endTime(!1):e._dur,o,c,l;return Xt(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=r),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(sn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:r+c)):t==null?r:+t},Mr=function(e,t,n){var a=Ki(t[1]),s=(a?2:1)+(e<2?0:1),r=t[s],o,c;if(a&&(r.duration=t[1]),r.parent=n,e){for(o=r,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=yn(c.vars.inherit)&&c.parent;r.immediateRender=yn(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Ot(t[0],r,t[s+1])},Ca=function(e,t){return e||e===0?t(e):t},Zr=function(e,t,n){return n<e?e:n>t?t:n},nn=function(e,t){return!Xt(e)||!(t=Qg.exec(e))?"":t[1]},d_=function(e,t,n){return Ca(n,function(a){return Zr(e,t,a)})},jc=[].slice,zp=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==yi},u_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var s;return Xt(a)&&!t||zp(a,1)?(s=n).push.apply(s,Jn(a)):n.push(a)})||n},Jn=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Xt(e)&&!n&&(Kc||!js())?jc.call((t||hu).querySelectorAll(e),0):sn(e)?u_(e,n):zp(e)?jc.call(e,0):e?[e]:[]},ed=function(e){return e=Jn(e)[0]||Dr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?Dr("Invalid scope")||hu.createElement("div"):e)}},Fp=function(e){return e.sort(function(){return .5-Math.random()})},Op=function(e){if(Pt(e))return e;var t=Ci(e)?e:{each:e},n=ts(t.ease),a=t.from||0,s=parseFloat(t.base)||0,r={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,h=a;return Xt(a)?d=h={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],h=a[1]),function(u,f,m){var _=(m||t).length,p=r[_],g,b,T,x,S,w,k,v,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!E){for(k=-Zn;k<(k=m[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=r[_]=[],g=c?Math.min(E,_)*d-.5:a%E,b=E===Zn?0:c?_*h/E-.5:a/E|0,k=0,v=Zn,w=0;w<_;w++)T=w%E-g,x=b-(w/E|0),p[w]=S=l?Math.abs(l==="y"?x:T):bp(T*T+x*x),S>k&&(k=S),S<v&&(v=S);a==="random"&&Fp(p),p.max=k-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:l?l==="y"?_/E:E:Math.max(E,_/E))||0)*(a==="edges"?-1:1),p.b=_<0?s-_:s,p.u=nn(t.amount||t.each)||0,n=n&&_<0?E_(n):n}return _=(p[u]-p.min)/p.max||0,kt(p.b+(n?n(_):_)*p.v)+p.u}},td=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=kt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(Ki(n)?0:nn(n))}},Bp=function(e,t){var n=sn(e),a,s;return!n&&Ci(e)&&(a=n=e.radius||Zn,e.values?(e=Jn(e.values),(s=!Ki(e[0]))&&(a*=a)):e=td(e.increment)),Ca(t,n?Pt(e)?function(r){return s=e(r),Math.abs(s-r)<=a?s:r}:function(r){for(var o=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=Zn,d=0,h=e.length,u,f;h--;)s?(u=e[h].x-o,f=e[h].y-c,u=u*u+f*f):u=Math.abs(e[h]-o),u<l&&(l=u,d=h);return d=!a||l<=a?e[d]:r,s||d===r||Ki(r)?d:d+nn(r)}:td(e))},Hp=function(e,t,n,a){return Ca(sn(e)?!t:n===!0?!!(n=0):!a,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},h_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(s,r){return r(s)},a)}},f_=function(e,t){return function(n){return e(parseFloat(n))+(t||nn(n))}},p_=function(e,t,n){return Vp(e,t,0,1,n)},Gp=function(e,t,n){return Ca(n,function(a){return e[~~t(a)]})},m_=function i(e,t,n){var a=t-e;return sn(e)?Gp(e,i(0,e.length),t):Ca(n,function(s){return(a+(s-e)%a)%a+e})},g_=function i(e,t,n){var a=t-e,s=a*2;return sn(e)?Gp(e,i(0,e.length-1),t):Ca(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>a?s-r:r)})},Ur=function(e){return e.replace(Kg,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Zg);return Hp(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},Vp=function(e,t,n,a,s){var r=t-e,o=a-n;return Ca(s,function(c){return n+((c-e)/r*o||0)})},__=function i(e,t,n,a){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var r=Xt(e),o={},c,l,d,h,u;if(n===!0&&(a=1)&&(n=null),r)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(d=[],h=e.length,u=h-2,l=1;l<h;l++)d.push(i(e[l-1],e[l]));h--,s=function(m){m*=h;var _=Math.min(u,~~m);return d[_](m-_)},n=t}else a||(e=Zs(sn(e)?[]:{},e));if(!d){for(c in t)vu.call(o,e,c,"get",t[c]);s=function(m){return Su(m,o)||(r?e.p:e)}}}return Ca(n,s)},mh=function(e,t,n){var a=e.labels,s=Zn,r,o,c;for(r in a)o=a[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=r,s=o);return c},Nn=function(e,t,n){var a=e.vars,s=a[t],r=wt,o=e._ctx,c,l,d;if(s)return c=a[t+"Params"],l=a.callbackScope||e,n&&Sa.length&&Zo(),o&&(wt=o),d=c?s.apply(l,c):s.call(l),wt=r,d},_r=function(e){return wa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Nn(e,"onInterrupt"),e},Is,$p=[],Wp=function(e){if(e)if(e=!e.name&&e.default||e,uu()||e.headless){var t=e.name,n=Pt(e),a=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ir,render:Su,add:vu,kill:I_,modifier:D_,rawVars:0},r={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(js(),e!==a){if(Cn[t])return;Bn(a,Bn(Jo(e,s),r)),Zs(a.prototype,Zs(s,Jo(e,r))),Cn[a.prop=t]=a,e.targetTest&&(zo.push(a),pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}kp(t,a),e.register&&e.register(wn,a,bn)}else $p.push(e)},gt=255,vr={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},ql=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},qp=function(e,t,n){var a=e?Ki(e)?[e>>16,e>>8&gt,e&gt]:0:vr.black,s,r,o,c,l,d,h,u,f,m;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vr[e])a=vr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&gt,a&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(a=m=e.match(dh),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,r=d<=.5?d*(l+1):d+l-d*l,s=d*2-r,a.length>3&&(a[3]*=1),a[0]=ql(c+1/3,s,r),a[1]=ql(c,s,r),a[2]=ql(c-1/3,s,r);else if(~e.indexOf("="))return a=e.match(Mp),n&&a.length<4&&(a[3]=1),a}else a=e.match(dh)||vr.transparent;a=a.map(Number)}return t&&!m&&(s=a[0]/gt,r=a[1]/gt,o=a[2]/gt,h=Math.max(s,r,o),u=Math.min(s,r,o),d=(h+u)/2,h===u?c=l=0:(f=h-u,l=d>.5?f/(2-h-u):f/(h+u),c=h===s?(r-o)/f+(r<o?6:0):h===r?(o-s)/f+2:(s-r)/f+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},Xp=function(e){var t=[],n=[],a=-1;return e.split(Ma).forEach(function(s){var r=s.match(Ds)||[];t.push.apply(t,r),n.push(a+=r.length+1)}),t.c=n,t},gh=function(e,t,n){var a="",s=(e+a).match(Ma),r=t?"hsla(":"rgba(",o=0,c,l,d,h;if(!s)return e;if(s=s.map(function(u){return(u=qp(u,t,1))&&r+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Xp(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(Ma,"1").split(Ds),h=l.length-1;o<h;o++)a+=l[o]+(~c.indexOf(o)?s.shift()||r+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!l)for(l=e.split(Ma),h=l.length-1;o<h;o++)a+=l[o]+s[o];return a+l[h]},Ma=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vr)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),v_=/hsl[a]?\(/,Yp=function(e){var t=e.join(" "),n;if(Ma.lastIndex=0,Ma.test(t))return n=v_.test(t),e[1]=gh(e[1],n),e[0]=gh(e[0],n,Xp(e[1])),!0},Nr,In=function(){var i=Date.now,e=500,t=33,n=i(),a=n,s=1e3/240,r=s,o=[],c,l,d,h,u,f,m=function _(p){var g=i()-a,b=p===!0,T,x,S,w;if((g>e||g<0)&&(n+=g-t),a+=g,S=a-n,T=S-r,(T>0||b)&&(w=++h.frame,u=S-h.time*1e3,h.time=S=S/1e3,r+=T+(T>=s?4:s-T),x=1),b||(c=l(_)),x)for(f=0;f<o.length;f++)o[f](S,u,w,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){wp&&(!Kc&&uu()&&(yi=Kc=window,hu=yi.document||{},On.gsap=wn,(yi.gsapVersions||(yi.gsapVersions=[])).push(wn.version),Tp(Ko||yi.GreenSockGlobals||!yi.gsap&&yi||{}),$p.forEach(Wp)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=d||function(p){return setTimeout(p,r-h.time*1e3+1|0)},Nr=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Nr=0,l=Ir},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),r=h.time*1e3+s},add:function(p,g,b){var T=g?function(x,S,w,k){p(x,S,w,k),h.remove(T)}:p;return h.remove(p),o[b?"unshift":"push"](T),js(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h}(),js=function(){return!Nr&&In.wake()},nt={},y_=/^[\d.\-M][\d.\-,\s]/,x_=/["']/g,b_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],s=1,r=n.length,o,c,l;s<r;s++)c=n[s],o=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(x_,"").trim():+l,a=c.substr(o+1).trim();return t},S_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},M_=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[b_(t[1])]:S_(e).split(",").map(Lp)):nt._CE&&y_.test(e)?nt._CE("",e):n},E_=function(e){return function(t){return 1-e(1-t)}},ts=function(e,t){return e&&(Pt(e)?e:nt[e]||M_(e))||t},cs=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:a},r;return xn(e,function(o){nt[o]=On[o]=s,nt[r=o.toLowerCase()]=n;for(var c in s)nt[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=nt[o+"."+c]=s[c]}),s},Kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xl=function i(e,t,n){var a=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Yc*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*Yg((d-r)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Kp(o);return s=Yc/s,c.config=function(l,d){return i(e,l,d)},c},Yl=function i(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},a=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kp(n);return a.config=function(s){return i(e,s)},a};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;cs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;cs("Elastic",Xl("in"),Xl("out"),Xl());(function(i,e){var t=1/e,n=2*t,a=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};cs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);cs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});cs("Circ",function(i){return-(bp(1-i*i)-1)});cs("Sine",function(i){return i===1?1:-Xg(i*Wg)+1});cs("Back",Yl("in"),Yl("out"),Yl());nt.SteppedEase=nt.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),s=t?1:0,r=1-_t;return function(o){return((a*Zr(0,r,o)|0)+s)*n}}};Pr.ease=nt["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return mu+=i+","+i+"Params,"});var Zp=function(e,t){this.id=qg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rp,this.set=t?t.getSetter:bu},zr=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Nr||In.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yl(this,n),!s._dp||s.parent||Ip(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cp(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fh(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,a):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(Zr(-Math.abs(this._delay),this.totalDuration(),s),a!==!1),vl(this),a_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ei(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qo(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=e_);var a=Yt;return Yt=n,_u(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=a,this},e.globalTime=function(n){for(var a=this,s=arguments.length?n:a.rawTime();a;)s=a._start+s/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,ph(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(Wn(this,n),yn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,yn(a)),this._dur||(this._zTime=-_t),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=a&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,a,s){var r=this.vars;return arguments.length>1?(a?(r[n]=a,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=a)):delete r[n],this):r[n]},e.then=function(n){var a=this,s=a._prom;return new Promise(function(r){var o=Pt(n)?n:Pp,c=function(){var d=a.then;a.then=null,s&&s(),Pt(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),r(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){_r(this)},i}();Bn(zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var vn=function(i){xp(e,i);function e(n,a){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),At&&Ei(n.parent||At,Hi(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Up(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(a,s,r){return Mr(0,arguments,this),this},t.from=function(a,s,r){return Mr(1,arguments,this),this},t.fromTo=function(a,s,r,o){return Mr(2,arguments,this),this},t.set=function(a,s,r){return s.duration=0,s.parent=this,Sr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(a,s,Wn(this,r),1),this},t.call=function(a,s,r){return Ei(this,Ot.delayedCall(0,a,s),r)},t.staggerTo=function(a,s,r,o,c,l,d){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=l,r.onCompleteParams=d,r.parent=this,new Ot(a,r,Wn(this,c)),this},t.staggerFrom=function(a,s,r,o,c,l,d){return r.runBackwards=1,Sr(r).immediateRender=yn(r.immediateRender),this.staggerTo(a,s,r,o,c,l,d)},t.staggerFromTo=function(a,s,r,o,c,l,d,h){return o.startAt=r,Sr(o).immediateRender=yn(o.immediateRender),this.staggerTo(a,s,o,c,l,d,h)},t.render=function(a,s,r){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:kt(a),h=this._zTime<0!=a<0&&(this._initted||!l),u,f,m,_,p,g,b,T,x,S,w,k;if(this!==At&&d>c&&a>=0&&(d=c),d!==this._tTime||r||h){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),u=d,x=this._start,T=this._ts,g=!T,h&&(l||(o=this._zTime),(a||!s)&&(this._zTime=a)),this._repeat){if(w=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,s,r);if(u=kt(d%p),d===c?(_=this._repeat,u=l):(S=kt(d/p),_=~~S,_&&_===S&&(u=l,_--),u>l&&(u=l)),S=Js(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(u=l-u,k=1),_!==S&&!this._lock){var v=w&&S&1,E=v===(w&&_&1);if(_<S&&(v=!v),o=v?0:d%l?l:d,this._lock=1,this.render(o||(k?0:kt(_*p)),s,!l)._lock=0,this._tTime=d,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,o=v?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=l_(this,kt(o),kt(u)),b&&(d-=u-(u=b._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!s&&!S&&(Nn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(a,s,r);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,r),u!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=-_t);break}}f=m}else{f=this._last;for(var A=a<0?a:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(a,s,r);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,r||Yt&&_u(f)),u!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=A?-_t:_t);break}}f=m}}if(b&&!s&&(this.pause(),b.render(u>=o?0:-_t)._zTime=u>=o?1:-1,this._ts))return this._start=x,vl(this),this.render(a,s,r);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&wa(this,1),!s&&!(a<0&&!o)&&(d||o||!c)&&(Nn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,s){var r=this;if(Ki(s)||(s=Wn(this,s,a)),!(a instanceof zr)){if(sn(a))return a.forEach(function(o){return r.add(o,s)}),this;if(Xt(a))return this.addLabel(a,s);if(Pt(a))a=Ot.delayedCall(0,a);else return this}return this!==a?Ei(this,a,s):this},t.getChildren=function(a,s,r,o){a===void 0&&(a=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-Zn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ot?s&&c.push(l):(r&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(a){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===a)return s[r]},t.remove=function(a){return Xt(a)?this.removeLabel(a):Pt(a)?this.killTweensOf(a):(a.parent===this&&_l(this,a),a===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(a,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(In.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,s),this._forcing=0,this):this._tTime},t.addLabel=function(a,s){return this.labels[a]=Wn(this,s),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,s,r){var o=Ot.delayedCall(0,s||Ir,r);return o.data="isPause",this._hasPause=1,Ei(this,o,Wn(this,a))},t.removePause=function(a){var s=this._first;for(a=Wn(this,a);s;)s._start===a&&s.data==="isPause"&&wa(s),s=s._next},t.killTweensOf=function(a,s,r){for(var o=this.getTweensOf(a,r),c=o.length;c--;)pa!==o[c]&&o[c].kill(a,s);return this},t.getTweensOf=function(a,s){for(var r=[],o=Jn(a),c=this._first,l=Ki(s),d;c;)c instanceof Ot?t_(c._targets,o)&&(l?(!pa||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(d=c.getTweensOf(o,s)).length&&r.push.apply(r,d),c=c._next;return r},t.tweenTo=function(a,s){s=s||{};var r=this,o=Wn(r,a),c=s,l=c.startAt,d=c.onStart,h=c.onStartParams,u=c.immediateRender,f,m=Ot.to(r,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale())||_t,onStart:function(){if(r.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale());m._dur!==p&&Qs(m,p,0,1).render(m._time,!0,!0),f=1}d&&d.apply(m,h||[])}},s));return u?m.render(0):m},t.tweenFromTo=function(a,s,r){return this.tweenTo(s,Bn({startAt:{time:Wn(this,a)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),mh(this,Wn(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),mh(this,Wn(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(a,s,r){r===void 0&&(r=0);var o=this._first,c=this.labels,l;for(a=kt(a);o;)o._start>=r&&(o._start+=a,o._end+=a),o=o._next;if(s)for(l in c)c[l]>=r&&(c[l]+=a);return es(this)},t.invalidate=function(a){var s=this._first;for(this._lock=0;s;)s.invalidate(a),s=s._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),es(this)},t.totalDuration=function(a){var s=0,r=this,o=r._last,c=Zn,l,d,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-a:a));if(r._dirty){for(h=r.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&r._sort&&o._ts&&!r._lock?(r._lock=1,Ei(r,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(s-=d,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=kt(d/r._ts),r._time-=d,r._tTime-=d),r.shiftChildren(-d,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Qs(r,r===At&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(a){if(At._ts&&(Cp(At,Qo(a,At)),Ap=In.frame),In.frame>=uh){uh+=Fn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Fn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(zr);Bn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var w_=function(e,t,n,a,s,r,o){var c=new bn(this._pt,e,t,0,1,nm,null,s),l=0,d=0,h,u,f,m,_,p,g,b;for(c.b=n,c.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=Ur(a)),r&&(b=[n,a],r(b,e,t),n=b[0],a=b[1]),u=n.match($l)||[];h=$l.exec(a);)m=h[0],_=a.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[d++]&&(p=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:p,c:m.charAt(1)==="="?Os(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},l=$l.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(Ep.test(a)||g)&&(c.e=0),this._pt=c,c},vu=function(e,t,n,a,s,r,o,c,l,d){Pt(a)&&(a=a(s||0,e,r));var h=e[t],u=n!=="get"?n:Pt(h)?l?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Pt(h)?l?C_:em:xu,m;if(Xt(a)&&(~a.indexOf("random(")&&(a=Ur(a)),a.charAt(1)==="="&&(m=Os(u,a)+(nn(u)||0),(m||m===0)&&(a=m))),!d||u!==a||nd)return!isNaN(u*a)&&a!==""?(m=new bn(this._pt,e,t,+u||0,a-(u||0),typeof h=="boolean"?P_:tm,0,f),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&fu(t,a),w_.call(this,e,t,u,a,f,c||Fn.stringFilter,l))},T_=function(e,t,n,a,s){if(Pt(e)&&(e=Er(e,s,t,n,a)),!Ci(e)||e.style&&e.nodeType||sn(e)||Sp(e))return Xt(e)?Er(e,s,t,n,a):e;var r={},o;for(o in e)r[o]=Er(e[o],s,t,n,a);return r},Jp=function(e,t,n,a,s,r){var o,c,l,d;if(Cn[e]&&(o=new Cn[e]).init(s,o.rawVars?t[e]:T_(t[e],a,s,r,n),n,a,r)!==!1&&(n._pt=c=new bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Is))for(l=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)l[o._props[d]]=c;return o},pa,nd,yu=function i(e,t,n){var a=e.vars,s=a.ease,r=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,h=a.yoyoEase,u=a.keyframes,f=a.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!cu,x=e.timeline,S=a.easeReverse||h,w,k,v,E,A,L,U,N,P,F,W,G,Q;if(x&&(!u||!s)&&(s="none"),e._ease=ts(s,Pr.ease),e._rEase=S&&(ts(S)||e._ease),e._from=!x&&!!a.runBackwards,e._from&&(e.ratio=1),!x||u&&!a.stagger){if(N=p[0]?ja(p[0]).harness:0,G=N&&a[N.prop],w=Jo(a,pu),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!f?_.render(-1,!0):_.revert(d&&m?No:jg),_._lazy=0),r){if(wa(e._startAt=Ot.set(p,Bn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&yn(c),startAt:null,delay:0,onUpdate:l&&function(){return Nn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!o&&!f)&&e._startAt.revert(No),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),v=Bn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&yn(c),immediateRender:o,stagger:0,parent:g},w),G&&(v[N.prop]=G),wa(e._startAt=Ot.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(No):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&yn(c)||c&&!m,k=0;k<p.length;k++){if(A=p[k],U=A._gsap||gu(p)[k]._gsap,e._ptLookup[k]=F={},Zc[U.id]&&Sa.length&&Zo(),W=b===p?k:b.indexOf(A),N&&(P=new N).init(A,G||w,e,W,b)!==!1&&(e._pt=E=new bn(e._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(X){F[X]=E}),P.priority&&(L=1)),!N||G)for(v in w)Cn[v]&&(P=Jp(v,w,e,W,A,b))?P.priority&&(L=1):F[v]=E=vu.call(e,A,v,"get",w[v],W,b,0,a.stringFilter);e._op&&e._op[k]&&e.kill(A,e._op[k]),T&&e._pt&&(pa=e,At.killTweensOf(A,F,e.globalTime(t)),Q=!e.parent,pa=0),e._pt&&c&&(Zc[U.id]=1)}L&&im(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Q,u&&t<=0&&x.render(Zn,!0,!0)},k_=function(e,t,n,a,s,r,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return nd=1,e.vars[t]="+=0",yu(e,o),nd=0,c?Dr(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(f=l.length;f--;)h=l[f],d=h._pt||h,d.s=(a||a===0)&&!s?a:d.s+(a||0)+r*d.c,d.c=n-d.s,h.e&&(h.e=Ut(n)+nn(h.e)),h.b&&(h.b=d.s+nn(h.b))},A_=function(e,t){var n=e[0]?ja(e[0]).harness:0,a=n&&n.aliases,s,r,o,c;if(!a)return t;s=Zs({},t);for(r in a)if(r in s)for(c=a[r].split(","),o=c.length;o--;)s[c[o]]=s[r];return s},R_=function(e,t,n,a){var s=t.ease||a||"power1.inOut",r,o;if(sn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},Er=function(e,t,n,a,s){return Pt(e)?e.call(t,n,a,s):Xt(e)&&~e.indexOf("random(")?Ur(e):e},Qp=mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jp={};xn(Qp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return jp[i]=1});var Ot=function(i){xp(e,i);function e(n,a,s,r){var o;typeof a=="number"&&(s.duration=a,a=s,s=null),o=i.call(this,r?a:Sr(a))||this;var c=o.vars,l=c.duration,d=c.delay,h=c.immediateRender,u=c.stagger,f=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=a.parent||At,b=(sn(n)||Sp(n)?Ki(n[0]):"length"in a)?[n]:Jn(n),T,x,S,w,k,v,E,A;if(o._targets=b.length?gu(b):Dr("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||u||ao(l)||ao(d)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(T=o.timeline=new vn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),T.kill(),T.parent=T._dp=Hi(o),T._start=0,u||ao(l)||ao(d)){if(w=b.length,E=u&&Op(u),Ci(u))for(k in u)~Qp.indexOf(k)&&(A||(A={}),A[k]=u[k]);for(x=0;x<w;x++)S=Jo(a,jp),S.stagger=0,L&&(S.easeReverse=L),A&&Zs(S,A),v=b[x],S.duration=+Er(l,Hi(o),x,v,b),S.delay=(+Er(d,Hi(o),x,v,b)||0)-o._delay,!u&&w===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(v,S,E?E(x,v,b):0),T._ease=nt.none;T.duration()?l=d=0:o.timeline=0}else if(m){Sr(Bn(T.vars.defaults,{ease:"none"})),T._ease=ts(m.ease||a.ease||"none");var U=0,N,P,F;if(sn(m))m.forEach(function(W){return T.to(b,W,">")}),T.duration();else{S={};for(k in m)k==="ease"||k==="easeEach"||R_(k,m[k],S,m.easeEach);for(k in S)for(N=S[k].sort(function(W,G){return W.t-G.t}),U=0,x=0;x<N.length;x++)P=N[x],F={ease:P.e,duration:(P.t-(x?N[x-1].t:0))/100*l},F[k]=P.v,T.to(b,F,U),U+=F.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return f===!0&&!cu&&(pa=Hi(o),At.killTweensOf(b),pa=0),Ei(g,Hi(o),s),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(h||!l&&!m&&o._start===kt(g._time)&&yn(h)&&s_(Hi(o))&&g.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-d)||0)),p&&Up(Hi(o),p),o}var t=e.prototype;return t.render=function(a,s,r){var o=this._time,c=this._tDur,l=this._dur,d=a<0,h=a>c-_t&&!d?c:a<_t?0:a,u,f,m,_,p,g,b,T;if(!l)o_(this,a,s,r);else if(h!==this._tTime||!a||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=h,T=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+a,s,r);if(u=kt(h%_),h===c?(m=this._repeat,u=l):(p=kt(h/_),m=~~p,m&&m===p?(u=l,m--):u>l&&(u=l)),g=this._yoyo&&m&1,g&&(u=l-u),p=Js(this._tTime,_),u===o&&!r&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=r=1,this.render(kt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Np(this,d?a:u,r,s,h))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(a,s,r)}if(this._rEase){var x=u<o;if(x!==this._inv){var S=x?o:l-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/l);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Nn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),s,r)||this._startAt&&(this._zTime=a),this._onUpdate&&!s&&(d&&Jc(this,a,s,r),Nn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&Jc(this,a,!0,!0),(a||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&wa(this,1),!s&&!(d&&!o)&&(h||o||g)&&(Nn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,s,r,o,c){Nr||In.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||yu(this,l),d=this._ease(l/this._dur),k_(this,a,s,r,o,d,l,c)?this.resetTo(a,s,r,o,1):(yl(this,0),this.parent||Dp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,s){if(s===void 0&&(s="all"),!a&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(a,s,pa&&pa.vars.overwrite!==!0)._first||_r(this),this.parent&&r!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,c=a?Jn(a):o,l=this._ptLookup,d=this._pt,h,u,f,m,_,p,g;if((!s||s==="all")&&i_(o,c))return s==="all"&&(this._pt=0),_r(this);for(h=this._op=this._op||[],s!=="all"&&(Xt(s)&&(_={},xn(s,function(b){return _[b]=1}),s=_),s=A_(o,s)),g=o.length;g--;)if(~c.indexOf(o[g])){u=l[g],s==="all"?(h[g]=s,m=u,f={}):(f=h[g]=h[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&_l(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&d&&_r(this),this},e.to=function(a,s){return new e(a,s,arguments[2])},e.from=function(a,s){return Mr(1,arguments)},e.delayedCall=function(a,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(a,s,r){return Mr(2,arguments)},e.set=function(a,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(a,s)},e.killTweensOf=function(a,s,r){return At.killTweensOf(a,s,r)},e}(zr);Bn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(i){Ot[i]=function(){var e=new vn,t=jc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var xu=function(e,t,n){return e[t]=n},em=function(e,t,n){return e[t](n)},C_=function(e,t,n,a){return e[t](a.fp,n)},L_=function(e,t,n){return e.setAttribute(t,n)},bu=function(e,t){return Pt(e[t])?em:du(e[t])&&e.setAttribute?L_:xu},tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},P_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nm=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},Su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},D_=function(e,t,n,a){for(var s=this._pt,r;s;)r=s._next,s.p===a&&s.modifier(e,t,n),s=r},I_=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?_l(this,t,"_pt"):t.dep||(n=1),t=a;return!n},U_=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},im=function(e){for(var t=e._pt,n,a,s,r;t;){for(n=t._next,a=s;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:r)?t._prev._next=t:s=t,(t._next=a)?a._prev=t:r=t,t=n}e._pt=s},bn=function(){function i(t,n,a,s,r,o,c,l,d){this.t=n,this.s=s,this.c=r,this.p=a,this.r=o||tm,this.d=c||this,this.set=l||xu,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,s){this.mSet=this.mSet||this.set,this.set=U_,this.m=n,this.mt=s,this.tween=a},i}();xn(mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return pu[i]=1});On.TweenMax=On.TweenLite=Ot;On.TimelineLite=On.TimelineMax=vn;At=new vn({sortChildren:!1,defaults:Pr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Yp;var ns=[],Fo={},N_=[],_h=0,z_=0,Kl=function(e){return(Fo[e]||N_).map(function(t){return t()})},id=function(){var e=Date.now(),t=[];e-_h>2&&(Kl("matchMediaInit"),ns.forEach(function(n){var a=n.queries,s=n.conditions,r,o,c,l;for(o in a)r=yi.matchMedia(a[o]).matches,r&&(c=1),r!==s[o]&&(s[o]=r,l=1);l&&(n.revert(),c&&t.push(n))}),Kl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),_h=e,Kl("matchMedia"))},am=function(){function i(t,n){this.selector=n&&ed(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,s){Pt(n)&&(s=a,a=n,n=Pt);var r=this,o=function(){var l=wt,d=r.selector,h;return l&&l!==r&&l.data.push(r),s&&(r.selector=ed(s)),wt=r,h=a.apply(r,arguments),Pt(h)&&r._r.push(h),wt=l,r.selector=d,r.isReverted=!1,h};return r.last=o,n===Pt?o(r,function(c){return r.add(null,c)}):n?r[n]=o:o},e.ignore=function(n){var a=wt;wt=null,n(this),wt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Ot&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof vn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ot)&&l.revert&&l.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var r=ns.length;r--;)ns[r].id===this.id&&ns.splice(r,1)},e.revert=function(n){this.kill(n||{})},i}(),F_=function(){function i(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=i.prototype;return e.add=function(n,a,s){Ci(n)||(n={matches:n});var r=new am(0,s||this.scope),o=r.conditions={},c,l,d;wt&&!r.selector&&(r.selector=wt.selector),this.contexts.push(r),a=r.add("onMatch",a),r.queries=n;for(l in n)l==="all"?d=1:(c=yi.matchMedia(n[l]),c&&(ns.indexOf(r)<0&&ns.push(r),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(id):c.addEventListener("change",id)));return d&&a(r,function(h){return r.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),jo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return Wp(a)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,a){Xt(e)&&(e=Jn(e)[0]);var s=ja(e||{}).get,r=n?Pp:Lp;return n==="native"&&(n=""),e&&(t?r((Cn[t]&&Cn[t].get||s)(e,t,n,a)):function(o,c,l){return r((Cn[o]&&Cn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var a=e.map(function(d){return wn.quickSetter(d,t,n)}),s=a.length;return function(d){for(var h=s;h--;)a[h](d)}}e=e[0]||{};var r=Cn[t],o=ja(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=r?function(d){var h=new r;Is._pt=0,h.init(e,n?d+n:d,Is,0,[e]),h.render(1,h),Is._pt&&Su(1,Is)}:o.set(e,c);return r?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,s=wn.to(e,Bn((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),r=function(c,l,d){return s.resetTo(t,c,l,d)};return r.tween=s,r},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,Pr.ease)),hh(Pr,e||{})},config:function(e){return hh(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,s=e.defaults,r=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Cn[o]&&!On[o]&&Dr(t+" effect requires "+o+" plugin.")}),Wl[t]=function(o,c,l){return n(Jn(o),Bn(c||{},s),l)},r&&(vn.prototype[t]=function(o,c,l){return this.add(Wl[t](o,Ci(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){nt[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):nt},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),a,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,a=At._first;a;)s=a._next,(t||!(!a._dur&&a instanceof Ot&&a.vars.onComplete===a._targets[0]))&&Ei(n,a,a._start-a._delay),a=s;return Ei(At,n,0),n},context:function(e,t){return e?new am(e,t):wt},matchMedia:function(e){return new F_(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||id()},addEventListener:function(e,t){var n=Fo[e]||(Fo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fo[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:m_,wrapYoyo:g_,distribute:Op,random:Hp,snap:Bp,normalize:p_,getUnit:nn,clamp:d_,splitColor:qp,toArray:Jn,selector:ed,mapRange:Vp,pipe:h_,unitize:f_,interpolate:__,shuffle:Fp},install:Tp,effects:Wl,ticker:In,updateRoot:vn.updateRoot,plugins:Cn,globalTimeline:At,core:{PropTween:bn,globals:kp,Tween:Ot,Timeline:vn,Animation:zr,getCache:ja,_removeLinkedListItem:_l,reverting:function(){return Yt},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return cu=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return jo[i]=Ot[i]});In.add(vn.updateRoot);Is=jo.to({},{duration:0});var O_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},B_=function(e,t){var n=e._targets,a,s,r;for(a in t)for(s=n.length;s--;)r=e._ptLookup[s][a],r&&(r=r.d)&&(r._pt&&(r=O_(r,a)),r&&r.modifier&&r.modifier(t[a],e,n[s],a))},Zl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,s,r){r._onInit=function(o){var c,l;if(Xt(s)&&(c={},xn(s,function(d){return c[d]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}B_(o,s)}}}},wn=jo.registerPlugin({name:"attr",init:function(e,t,n,a,s){var r,o,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(c||0)+"",t[r],a,s,0,0,r),o.op=r,o.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zl("roundProps",td),Zl("modifiers"),Zl("snap",Bp))||jo;Ot.version=vn.version=wn.version="3.15.0";wp=1;uu()&&js();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vh,ma,Bs,Mu,Wa,yh,Eu,H_=function(){return typeof window<"u"},Zi={},Va=180/Math.PI,Hs=Math.PI/180,ps=Math.atan2,xh=1e8,wu=/([A-Z])/g,G_=/(left|right|width|margin|padding|x)/i,V_=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ad=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},q_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},X_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Y_=function(e,t,n){return e.style[t]=n},K_=function(e,t,n){return e.style.setProperty(t,n)},Z_=function(e,t,n){return e._gsap[t]=n},J_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Q_=function(e,t,n,a,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},j_=function(e,t,n,a,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Rt="transform",Sn=Rt+"Origin",e0=function i(e,t){var n=this,a=this.target,s=a.style,r=a._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Vi(a,o)}):this.tfm[e]=r.x?r[e]:Vi(a,e),e===Sn&&(this.tfm.zOrigin=r.zOrigin);else return wi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;r.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},t0=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wu,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)a[r]=this.tfm[r];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Eu(),(!s||!s.isStart)&&!n[Rt]&&(om(n),a.zOrigin&&n[Sn]&&(n[Sn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},lm=function(e,t){var n={target:e,props:[],revert:t0,save:e0};return e._gsap||wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},cm,sd=function(e,t){var n=ma.createElementNS?ma.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ma.createElement(e);return n&&n.style?n:ma.createElement(e)},zn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(wu,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,er(t)||t,1)||""},bh="O,Moz,ms,Ms,Webkit".split(","),er=function(e,t,n){var a=t||Wa,s=a.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(bh[r]+e in s););return r<0?null:(r===3?"ms":r>=0?bh[r]:"")+e},rd=function(){H_()&&window.document&&(vh=window,ma=vh.document,Bs=ma.documentElement,Wa=sd("div")||{style:{}},sd("div"),Rt=er(Rt),Sn=Rt+"Origin",Wa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cm=!!er("perspective"),Eu=wn.core.reverting,Mu=1)},Sh=function(e){var t=e.ownerSVGElement,n=sd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),s;a.style.display="block",n.appendChild(a),Bs.appendChild(n);try{s=a.getBBox()}catch{}return n.removeChild(a),Bs.removeChild(n),s},Mh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},dm=function(e){var t,n;try{t=e.getBBox()}catch{t=Sh(e),n=1}return t&&(t.width||t.height)||n||(t=Sh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mh(e,["x","cx","x1"])||0,y:+Mh(e,["y","cy","y1"])||0,width:0,height:0}:t},um=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&dm(e))},Ta=function(e,t){if(t){var n=e.style,a;t in Zi&&t!==Sn&&(t=Rt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(wu,"-$1").toLowerCase())):n.removeAttribute(t)}},ga=function(e,t,n,a,s,r){var o=new bn(e._pt,t,n,0,1,r?rm:sm);return e._pt=o,o.b=a,o.e=s,e._props.push(n),o},Eh={deg:1,rad:1,turn:1},n0={grid:1,flex:1},ka=function i(e,t,n,a){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Wa.style,c=G_.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),h=100,u=a==="px",f=a==="%",m,_,p,g;if(a===r||!s||Eh[a]||Eh[r])return s;if(r!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&um(e),(f||r==="%")&&(Zi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],Ut(f?s/m*h:s/100*m);if(o[c?"width":"height"]=h+(u?r:a),_=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ma||!_.appendChild)&&(_=ma.body),p=_._gsap,p&&f&&p.width&&c&&p.time===In.time&&!p.uncache)return Ut(s/p.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+a,m=e[d],b?e.style[t]=b:Ta(e,t)}else(f||r==="%")&&!n0[zn(_,"display")]&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Wa),m=Wa[d],_.removeChild(Wa),o.position="absolute";return c&&f&&(p=ja(_),p.time=In.time,p.width=_[d]),Ut(u?m*s/h:m&&s?h/m*s:0)},Vi=function(e,t,n,a){var s;return Mu||rd(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=Or(e,a),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tl(zn(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||a||~(s+"").indexOf("calc("))&&(s=el[t]&&el[t](e,t,n)||zn(e,t)||Rp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ka(e,t,s,n)+n:s},i0=function(e,t,n,a){if(!n||n==="none"){var s=er(t,e,1),r=s&&zn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,nm),c=0,l=0,d,h,u,f,m,_,p,g,b,T,x,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=zn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(_=e.style[t],e.style[t]=a,a=zn(e,t)||a,_?e.style[t]=_:Ta(e,t)),d=[n,a],Yp(d),n=d[0],a=d[1],u=n.match(Ds)||[],S=a.match(Ds)||[],S.length){for(;h=Ds.exec(a);)p=h[0],b=a.substring(c,h.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=u[l++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),p.charAt(1)==="="&&(p=Os(f,p)+x),g=parseFloat(p),T=p.substr((g+"").length),c=Ds.lastIndex-T.length,T||(T=T||Fn.units[t]||x,c===a.length&&(a+=T,o.e+=T)),x!==T&&(f=ka(e,t,_,T)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?rm:sm;return Ep.test(a)&&(o.e=0),this._pt=o,o},wh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},a0=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=wh[n]||n,t[1]=wh[a]||a,t.join(" ")},s0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,s=t.u,r=n._gsap,o,c,l;if(s==="all"||s===!0)a.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Zi[o]&&(c=1,o=o==="transformOrigin"?Sn:Rt),Ta(n,o);c&&(Ta(n,Rt),r&&(r.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Or(n,1),r.uncache=1,om(a)))}},el={clearProps:function(e,t,n,a,s){if(s.data!=="isFromStart"){var r=e._pt=new bn(e._pt,t,n,0,0,s0);return r.u=a,r.pr=-10,r.tween=s,e._props.push(n),1}}},Fr=[1,0,0,1,0,0],hm={},fm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Th=function(e){var t=zn(e,Rt);return fm(t)?Fr:t.substr(7).match(Mp).map(Ut)},Tu=function(e,t){var n=e._gsap||ja(e),a=e.style,s=Th(e),r,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Fr:s):(s===Fr&&!e.offsetParent&&e!==Bs&&!n.svg&&(c=a.display,a.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Bs.appendChild(e)),s=Th(e),c?a.display=c:Ta(e,"display"),l&&(o?r.insertBefore(e,o):r?r.appendChild(e):Bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},od=function(e,t,n,a,s,r){var o=e._gsap,c=s||Tu(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,h=o.xOffset||0,u=o.yOffset||0,f=c[0],m=c[1],_=c[2],p=c[3],g=c[4],b=c[5],T=t.split(" "),x=parseFloat(T[0])||0,S=parseFloat(T[1])||0,w,k,v,E;n?c!==Fr&&(k=f*p-m*_)&&(v=x*(p/k)+S*(-_/k)+(_*b-p*g)/k,E=x*(-m/k)+S*(f/k)-(f*b-m*g)/k,x=v,S=E):(w=dm(e),x=w.x+(~T[0].indexOf("%")?x/100*w.width:x),S=w.y+(~(T[1]||T[0]).indexOf("%")?S/100*w.height:S)),a||a!==!1&&o.smooth?(g=x-l,b=S-d,o.xOffset=h+(g*f+b*_)-g,o.yOffset=u+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[Sn]="0px 0px",r&&(ga(r,o,"xOrigin",l,x),ga(r,o,"yOrigin",d,S),ga(r,o,"xOffset",h,o.xOffset),ga(r,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Or=function(e,t){var n=e._gsap||new Zp(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,s=n.scaleX<0,r="px",o="deg",c=getComputedStyle(e),l=zn(e,Sn)||"0",d,h,u,f,m,_,p,g,b,T,x,S,w,k,v,E,A,L,U,N,P,F,W,G,Q,X,j,ie,Te,be,Ke,Be;return d=h=u=_=p=g=b=T=x=0,f=m=1,n.svg=!!(e.getCTM&&um(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[Rt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Rt]!=="none"?c[Rt]:"")),a.scale=a.rotate=a.translate="none"),k=Tu(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),l=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),od(e,G||l,!!G||n.originIsAbsolute,n.smooth!==!1,k)),S=n.xOrigin||0,w=n.yOrigin||0,k!==Fr&&(L=k[0],U=k[1],N=k[2],P=k[3],d=F=k[4],h=W=k[5],k.length===6?(f=Math.sqrt(L*L+U*U),m=Math.sqrt(P*P+N*N),_=L||U?ps(U,L)*Va:0,b=N||P?ps(N,P)*Va+_:0,b&&(m*=Math.abs(Math.cos(b*Hs))),n.svg&&(d-=S-(S*L+w*N),h-=w-(S*U+w*P))):(Be=k[6],be=k[7],j=k[8],ie=k[9],Te=k[10],Ke=k[11],d=k[12],h=k[13],u=k[14],v=ps(Be,Te),p=v*Va,v&&(E=Math.cos(-v),A=Math.sin(-v),G=F*E+j*A,Q=W*E+ie*A,X=Be*E+Te*A,j=F*-A+j*E,ie=W*-A+ie*E,Te=Be*-A+Te*E,Ke=be*-A+Ke*E,F=G,W=Q,Be=X),v=ps(-N,Te),g=v*Va,v&&(E=Math.cos(-v),A=Math.sin(-v),G=L*E-j*A,Q=U*E-ie*A,X=N*E-Te*A,Ke=P*A+Ke*E,L=G,U=Q,N=X),v=ps(U,L),_=v*Va,v&&(E=Math.cos(v),A=Math.sin(v),G=L*E+U*A,Q=F*E+W*A,U=U*E-L*A,W=W*E-F*A,L=G,F=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Ut(Math.sqrt(L*L+U*U+N*N)),m=Ut(Math.sqrt(W*W+Be*Be)),v=ps(F,W),b=Math.abs(v)>2e-4?v*Va:0,x=Ke?1/(Ke<0?-Ke:Ke):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fm(zn(e,Rt)),G&&e.setAttribute("transform",G))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=u+r,n.scaleX=Ut(f),n.scaleY=Ut(m),n.rotation=Ut(_)+o,n.rotationX=Ut(p)+o,n.rotationY=Ut(g)+o,n.skewX=b+o,n.skewY=T+o,n.transformPerspective=x+r,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[Sn]=tl(l)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?o0:cm?pm:r0,n.uncache=0,n},tl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jl=function(e,t,n){var a=nn(t);return Ut(parseFloat(t)+parseFloat(ka(e,"x",n+"px",a)))+a},r0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pm(e,t)},Pa="0deg",rr="0px",Da=") ",pm=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,T=n.zOrigin,x="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(h!==Pa||d!==Pa)){var w=parseFloat(d)*Hs,k=Math.sin(w),v=Math.cos(w),E;w=parseFloat(h)*Hs,E=Math.cos(w),r=Jl(b,r,k*E*-T),o=Jl(b,o,-Math.sin(w)*-T),c=Jl(b,c,v*E*-T+T)}p!==rr&&(x+="perspective("+p+Da),(a||s)&&(x+="translate("+a+"%, "+s+"%) "),(S||r!==rr||o!==rr||c!==rr)&&(x+=c!==rr||S?"translate3d("+r+", "+o+", "+c+") ":"translate("+r+", "+o+Da),l!==Pa&&(x+="rotate("+l+Da),d!==Pa&&(x+="rotateY("+d+Da),h!==Pa&&(x+="rotateX("+h+Da),(u!==Pa||f!==Pa)&&(x+="skew("+u+", "+f+Da),(m!==1||_!==1)&&(x+="scale("+m+", "+_+Da),b.style[Rt]=x||"translate(0, 0)"},o0=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,T=parseFloat(r),x=parseFloat(o),S,w,k,v,E;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=Hs,l*=Hs,S=Math.cos(c)*h,w=Math.sin(c)*h,k=Math.sin(c-l)*-u,v=Math.cos(c-l)*u,l&&(d*=Hs,E=Math.tan(l-d),E=Math.sqrt(1+E*E),k*=E,v*=E,d&&(E=Math.tan(d),E=Math.sqrt(1+E*E),S*=E,w*=E)),S=Ut(S),w=Ut(w),k=Ut(k),v=Ut(v)):(S=h,v=u,w=k=0),(T&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=ka(f,"x",r,"px"),x=ka(f,"y",o,"px")),(m||_||p||g)&&(T=Ut(T+m-(m*S+_*k)+p),x=Ut(x+_-(m*w+_*v)+g)),(a||s)&&(E=f.getBBox(),T=Ut(T+a/100*E.width),x=Ut(x+s/100*E.height)),E="matrix("+S+","+w+","+k+","+v+","+T+","+x+")",f.setAttribute("transform",E),b&&(f.style[Rt]=E)},l0=function(e,t,n,a,s){var r=360,o=Xt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Va:1),l=c-a,d=a+l+"deg",h,u;return o&&(h=s.split("_")[1],h==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),h==="cw"&&l<0?l=(l+r*xh)%r-~~(l/r)*r:h==="ccw"&&l>0&&(l=(l-r*xh)%r-~~(l/r)*r)),e._pt=u=new bn(e._pt,t,n,a,l,$_),u.e=d,u.u="deg",e._props.push(n),u},kh=function(e,t){for(var n in t)e[n]=t[n];return e},c0=function(e,t,n){var a=kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,c,l,d,h,u,f,m;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[Rt]=t,o=Or(n,1),Ta(n,Rt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Rt],r[Rt]=t,o=Or(n,1),r[Rt]=l);for(c in Zi)l=a[c],d=o[c],l!==d&&s.indexOf(c)<0&&(f=nn(l),m=nn(d),h=f!==m?ka(n,c,l,m):parseFloat(l),u=parseFloat(d),e._pt=new bn(e._pt,o,c,h,u-h,ad),e._pt.u=m||0,e._props.push(c));kh(o,a)};xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",s="Left",r=(e<3?[t,n,a,s]:[t+s,t+n,a+n,a+s]).map(function(o){return e<2?i+o:"border"+o+i});el[e>1?"border"+i:i]=function(o,c,l,d,h){var u,f;if(arguments.length<4)return u=r.map(function(m){return Vi(o,m,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},r.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,h)}});var mm={name:"css",register:rd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,s){var r=this._props,o=e.style,c=n.vars.startAt,l,d,h,u,f,m,_,p,g,b,T,x,S,w,k,v,E;Mu||rd(),this.styles=this.styles||lm(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Cn[_]&&Jp(_,t,n,a,e,s)))){if(f=typeof d,m=el[_],f==="function"&&(d=d.call(n,a,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Ur(d)),m)m(this,e,_,d,n)&&(k=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",Ma.lastIndex=0,Ma.test(l)||(p=nn(l),g=nn(d),g?p!==g&&(l=ka(e,_,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,a,s,0,0,_),r.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,a,e,s):c[_],Xt(l)&&~l.indexOf("random(")&&(l=Ur(l)),nn(l+"")||l==="auto"||(l+=Fn.units[_]||nn(Vi(e,_))||""),(l+"").charAt(1)==="="&&(l=Vi(e,_))):l=Vi(e,_),u=parseFloat(l),b=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),h=parseFloat(d),_ in wi&&(_==="autoAlpha"&&(u===1&&Vi(e,"visibility")==="hidden"&&h&&(u=0),v.push("visibility",0,o.visibility),ga(this,o,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Zi,T){if(this.styles.save(_),E=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=zn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=d,d=zn(e,"perspective"),A?e.style.perspective=A:Ta(e,"perspective")}h=parseFloat(d)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Or(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new bn(this._pt,o,Rt,0,1,S.renderTransform,S,0,-1),x.dep=1),_==="scale")this._pt=new bn(this._pt,S,"scaleY",S.scaleY,(b?Os(S.scaleY,b+h):h)-S.scaleY||0,ad),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Sn,0,o[Sn]),d=a0(d),S.svg?od(e,d,0,w,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==S.zOrigin&&ga(this,S,"zOrigin",S.zOrigin,g),ga(this,o,_,tl(l),tl(d)));continue}else if(_==="svgOrigin"){od(e,d,1,w,0,this);continue}else if(_ in hm){l0(this,S,_,u,b?Os(u,b+d):d);continue}else if(_==="smoothOrigin"){ga(this,S,"smooth",S.smooth,d);continue}else if(_==="force3D"){S[_]=d;continue}else if(_==="transform"){c0(this,d,e);continue}}else _ in o||(_=er(_)||_);if(T||(h||h===0)&&(u||u===0)&&!V_.test(d)&&_ in o)p=(l+"").substr((u+"").length),h||(h=0),g=nn(d)||(_ in Fn.units?Fn.units[_]:p),p!==g&&(u=ka(e,_,l,g)),this._pt=new bn(this._pt,T?S:o,_,u,(b?Os(u,b+h):h)-u,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?X_:ad),this._pt.u=g||0,T&&E!==d?(this._pt.b=l,this._pt.e=E,this._pt.r=q_):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=W_);else if(_ in o)i0.call(this,e,_,l,b?b+d:d);else if(_ in e)this.add(e,_,l||e[_],b?b+d:d,a,s);else if(_!=="parseTransform"){fu(_,d);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,l||e[_])),r.push(_)}}k&&im(this)},render:function(e,t){if(t.tween._time||!Eu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vi,aliases:wi,getSetter:function(e,t,n){var a=wi[t];return a&&a.indexOf(",")<0&&(t=a),t in Zi&&t!==Sn&&(e._gsap.x||Vi(e,"x"))?n&&yh===n?t==="scale"?J_:Z_:(yh=n||{})&&(t==="scale"?Q_:j_):e.style&&!du(e.style[t])?Y_:~t.indexOf("-")?K_:bu(e,t)},core:{_removeProperty:Ta,_getMatrix:Tu}};wn.utils.checkPrefix=er;wn.core.getStyleSaver=lm;(function(i,e,t,n){var a=xn(i+","+e+","+t,function(s){Zi[s]=1});xn(e,function(s){Fn.units[s]="deg",hm[s]=1}),wi[a[13]]=i+","+e,xn(n,function(s){var r=s.split(":");wi[r[1]]=a[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Fn.units[i]="px"});wn.registerPlugin(mm);var Ji=wn.registerPlugin(mm)||wn;Ji.core.Tween;Ji.matchMedia();function Jr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Ah=new WeakMap;function d0(i,e){const t=Ah.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Ah.set(i,t),Jr()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const r=document.createElement("span");r.textContent=e,r.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(s,r),i.appendChild(a),t.tween=Ji.to([s,r],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function gm(i){if(Jr())return;const e=Array.from(i.children).slice(0,8);e.length&&Ji.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function ku(i){Jr()||!i.length||Ji.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Au(i){Jr()||Ji.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function u0(i,e){if(Jr()){e();return}Ji.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{Ji.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="186",h0=0,Rh=1,f0=2,Oo=1,p0=2,yr=3,as=0,Mn=1,ri=2,qi=0,wr=1,Ch=2,Lh=3,Ph=4,m0=5,Cs=100,g0=101,_0=102,v0=103,y0=104,x0=200,b0=201,S0=202,M0=203,_m=204,vm=205,E0=206,w0=207,T0=208,k0=209,A0=210,R0=211,C0=212,L0=213,P0=214,ld=0,cd=1,dd=2,Br=3,ud=4,hd=5,fd=6,pd=7,Cu=0,D0=1,I0=2,Ri=0,ym=1,xm=2,bm=3,Sm=4,Mm=5,Em=6,wm=7,Tm=300,ss=301,tr=302,Ql=303,jl=304,xl=306,md=1e3,$i=1001,gd=1002,Bt=1003,U0=1004,so=1005,an=1006,ec=1007,qa=1008,Un=1009,km=1010,Am=1011,Hr=1012,Lu=1013,Li=1014,Ti=1015,Pi=1016,Pu=1017,Du=1018,Gr=1020,Rm=35902,Cm=35899,Lm=1021,Pm=1022,ci=1023,Qi=1026,Xa=1027,Dm=1028,Iu=1029,rs=1030,Uu=1031,Nu=1033,Bo=33776,Ho=33777,Go=33778,Vo=33779,_d=35840,vd=35841,yd=35842,xd=35843,bd=36196,Sd=37492,Md=37496,Ed=37488,wd=37489,nl=37490,Td=37491,kd=37808,Ad=37809,Rd=37810,Cd=37811,Ld=37812,Pd=37813,Dd=37814,Id=37815,Ud=37816,Nd=37817,zd=37818,Fd=37819,Od=37820,Bd=37821,Hd=36492,Gd=36494,Vd=36495,$d=36283,Wd=36284,il=36285,qd=36286,N0=3200,Xd=0,z0=1,ha="",Ln="srgb",al="srgb-linear",sl="linear",ft="srgb",tc=7680,F0=519,O0=512,B0=513,H0=514,zu=515,G0=516,V0=517,Fu=518,$0=519,W0=35044,Dh="300 es",ki=2e3,Vr=2001;function q0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function X0(){const i=$r("canvas");return i.style.display="block",i}const Ih={};function Uh(...i){const e="THREE."+i.shift();console.log(e,...i)}function Im(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Im(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Im(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gs(...i){const e=i.join(" ");e in Ih||(Ih[e]=!0,ze(...i))}function Y0(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const K0={[ld]:cd,[dd]:fd,[ud]:pd,[Br]:hd,[cd]:ld,[fd]:dd,[pd]:ud,[hd]:Br};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,Yd=180/Math.PI;function Qr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Z0(i,e){return(i%e+e)%e}function nc(i,e,t){return(1-t)*i+t*e}function J0(i){return i*$o}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Q0={degToRad:J0};class it{static{it.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ir{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],d=n[a+2],h=n[a+3],u=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(h!==_||c!==u||l!==f||d!==m){let p=c*u+l*f+d*m+h*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T,c=c*g+u*o,l=l*g+f*o,d=d*g+m*o,h=h*g+_*o}else{c=c*g+u*o,l=l*g+f*o,d=d*g+m*o,h=h*g+_*o;const b=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=b,l*=b,d*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],h=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+d*h+c*f-l*u,e[t+1]=c*m+d*u+l*h-o*f,e[t+2]=l*m+d*f+o*u-c*h,e[t+3]=d*m-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),h=o(s/2),u=c(n/2),f=c(a/2),m=c(s/2);switch(r){case"XYZ":this._x=u*d*h+l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h+u*f*m;break;case"YZX":this._x=u*d*h+l*f*m,this._y=l*f*h+u*d*m,this._z=l*d*m-u*f*h,this._w=l*d*h-u*f*m;break;case"XZY":this._x=u*d*h-l*f*m,this._y=l*f*h-u*d*m,this._z=l*d*m+u*f*h,this._w=l*d*h+u*f*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(r-a)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(r-a)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+a*l-s*c,this._y=a*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-a*o,this._w=r*d-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${static{$.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),d=2*(o*t-s*a),h=2*(s*n-r*t);return this.x=t+c*l+r*h-o*d,this.y=n+c*d+o*l-s*h,this.z=a+c*h+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new $,Nh=new ir;class He{static{He.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],_=a[0],p=a[3],g=a[6],b=a[1],T=a[4],x=a[7],S=a[2],w=a[5],k=a[8];return s[0]=r*_+o*b+c*S,s[3]=r*p+o*T+c*w,s[6]=r*g+o*x+c*k,s[1]=l*_+d*b+h*S,s[4]=l*p+d*T+h*w,s[7]=l*g+d*x+h*k,s[2]=u*_+f*b+m*S,s[5]=u*p+f*T+m*w,s[8]=u*g+f*x+m*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+a*s*l-a*r*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*r-o*l,u=o*c-d*s,f=l*s-r*c,m=t*h+n*u+a*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(a*l-d*n)*_,e[2]=(o*n-a*r)*_,e[3]=u*_,e[4]=(d*t-a*c)*_,e[5]=(a*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new He,zh=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const i={enabled:!0,workingColorSpace:al,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ft&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ft&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ha?sl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[al]:{primaries:e,whitePoint:n,transfer:sl,toXYZ:zh,fromXYZ:Fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:zh,fromXYZ:Fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}const et=j0();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ms;class ev{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=$r("canvas")),ms.width=e.width,ms.height=e.height;const a=ms.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Xi(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tv=0;class Ou{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(sc(a[r].image)):s.push(sc(a[r]))}else s=sc(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ev.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let nv=0;const rc=new $;class Kt extends ds{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=$i,a=$i,s=an,r=qa,o=ci,c=Un,l=Kt.DEFAULT_ANISOTROPY,d=ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Qr(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Tm;Kt.DEFAULT_ANISOTROPY=1;class Ct{static{Ct.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(f+1)/2,S=(g+1)/2,w=(d+u)/4,k=(h+_)/4,v=(m+p)/4;return T>x&&T>S?T<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(T),a=w/n,s=k/n):x>S?x<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),n=w/a,s=v/a):S<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),n=k/s,a=v/s),this.set(n,a,s,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-_)/b,this.z=(u-d)/b,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},s=new Kt(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ou(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends iv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Um extends Kt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class av extends Kt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Et{static{Et.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p)}set(e,t,n,a,s,r,o,c,l,d,h,u,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),r=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=r*d,f=r*h,m=o*d,_=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,m=l*d,_=l*h;t[0]=u+_*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=f*o-m,t[6]=_+u*o,t[10]=r*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,m=l*d,_=l*h;t[0]=u-_*o,t[4]=-r*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*d,t[9]=_-u*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const u=r*d,f=r*h,m=o*d,_=o*h;t[0]=c*d,t[4]=m*l-f,t[8]=u*l+_,t[1]=c*h,t[5]=_*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,f=r*l,m=o*c,_=o*l;t[0]=c*d,t[4]=_-u*h,t[8]=m*h+f,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+m,t[10]=u-_*h}else if(e.order==="XZY"){const u=r*c,f=r*l,m=o*c,_=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+_,t[5]=r*d,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,rv)}lookAt(e,t,n){const a=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ia.crossVectors(n,kn),ia.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ia.crossVectors(n,kn)),ia.normalize(),ro.crossVectors(kn,ia),a[0]=ia.x,a[4]=ro.x,a[8]=kn.x,a[1]=ia.y,a[5]=ro.y,a[9]=kn.y,a[2]=ia.z,a[6]=ro.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],T=n[7],x=n[11],S=n[15],w=a[0],k=a[4],v=a[8],E=a[12],A=a[1],L=a[5],U=a[9],N=a[13],P=a[2],F=a[6],W=a[10],G=a[14],Q=a[3],X=a[7],j=a[11],ie=a[15];return s[0]=r*w+o*A+c*P+l*Q,s[4]=r*k+o*L+c*F+l*X,s[8]=r*v+o*U+c*W+l*j,s[12]=r*E+o*N+c*G+l*ie,s[1]=d*w+h*A+u*P+f*Q,s[5]=d*k+h*L+u*F+f*X,s[9]=d*v+h*U+u*W+f*j,s[13]=d*E+h*N+u*G+f*ie,s[2]=m*w+_*A+p*P+g*Q,s[6]=m*k+_*L+p*F+g*X,s[10]=m*v+_*U+p*W+g*j,s[14]=m*E+_*N+p*G+g*ie,s[3]=b*w+T*A+x*P+S*Q,s[7]=b*k+T*L+x*F+S*X,s[11]=b*v+T*U+x*W+S*j,s[15]=b*E+T*N+x*G+S*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],b=c*f-l*u,T=o*f-l*h,x=o*u-c*h,S=r*f-l*d,w=r*u-c*d,k=r*h-o*d;return t*(_*b-p*T+g*x)-n*(m*b-p*S+g*w)+a*(m*T-_*S+g*k)-s*(m*x-_*w+p*k)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(r*d-o*l)-n*(s*d-o*c)+a*(s*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=t*o-n*r,T=t*c-a*r,x=t*l-s*r,S=n*c-a*o,w=n*l-s*o,k=a*l-s*c,v=d*_-h*m,E=d*p-u*m,A=d*g-f*m,L=h*p-u*_,U=h*g-f*_,N=u*g-f*p,P=b*N-T*U+x*L+S*A-w*E+k*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=(o*N-c*U+l*L)*F,e[1]=(a*U-n*N-s*L)*F,e[2]=(_*k-p*w+g*S)*F,e[3]=(u*w-h*k-f*S)*F,e[4]=(c*A-r*N-l*E)*F,e[5]=(t*N-a*A+s*E)*F,e[6]=(p*x-m*k-g*T)*F,e[7]=(d*k-u*x+f*T)*F,e[8]=(r*U-o*A+l*v)*F,e[9]=(n*A-t*U-s*v)*F,e[10]=(m*w-_*x+g*b)*F,e[11]=(h*x-d*w-f*b)*F,e[12]=(o*E-r*L-c*v)*F,e[13]=(t*L-n*E+a*v)*F,e[14]=(_*T-m*S-p*b)*F,e[15]=(d*S-h*T+u*b)*F,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*r,0,l*c-a*o,d*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,h=o+o,u=s*l,f=s*d,m=s*h,_=r*d,p=r*h,g=o*h,b=c*l,T=c*d,x=c*h,S=n.x,w=n.y,k=n.z;return a[0]=(1-(_+g))*S,a[1]=(f+x)*S,a[2]=(m-T)*S,a[3]=0,a[4]=(f-x)*w,a[5]=(1-(u+g))*w,a[6]=(p+b)*w,a[7]=0,a[8]=(m+T)*k,a[9]=(p-b)*k,a[10]=(1-(u+_))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=gs.set(a[0],a[1],a[2]).length();const o=gs.set(a[4],a[5],a[6]).length(),c=gs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ti.copy(this);const l=1/r,d=1/o,h=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,a,s,r,o=ki,c=!1){const l=this.elements,d=2*s/(t-e),h=2*s/(n-a),u=(t+e)/(t-e),f=(n+a)/(n-a);let m,_;if(c)m=s/(r-s),_=r*s/(r-s);else if(o===ki)m=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===Vr)m=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=ki,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-a),u=-(t+e)/(t-e),f=-(n+a)/(n-a);let m,_;if(c)m=1/(r-s),_=r/(r-s);else if(o===ki)m=-2/(r-s),_=-(r+s)/(r-s);else if(o===Vr)m=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new $,ti=new Et,sv=new $(0,0,0),rv=new $(1,1,1),ia=new $,ro=new $,kn=new $,Oh=new Et,Bh=new ir;class Aa{constructor(e=0,t=0,n=0,a=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],d=a[9],h=a[2],u=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const Hh=new $,_s=new ir,Ui=new Et,oo=new $,lr=new $,lv=new $,cv=new ir,Gh=new $(1,0,0),Vh=new $(0,1,0),$h=new $(0,0,1),Wh={type:"added"},dv={type:"removed"},vs={type:"childadded",child:null},oc={type:"childremoved",child:null};class Zt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new $,t=new Aa,n=new ir,a=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Et},normalMatrix:{value:new He}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(lr,oo,this.up):Ui.lookAt(oo,lr,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),_s.setFromRotationMatrix(Ui),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),vs.child=e,this.dispatchEvent(vs),vs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dv),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),h=r(e.shapes),u=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=a,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new $(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},aa={h:0,s:0,l:0},lo={h:0,s:0,l:0};function cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=et.workingColorSpace){if(e=Z0(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=cc(r,s,e+1/3),this.g=cc(r,s,e),this.b=cc(r,s,e-1/3)}return et.colorSpaceToWorking(this,a),this}setStyle(e,t=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=Nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return et.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),t);const n=tn.r,a=tn.g,s=tn.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const h=r-o;switch(l=d<=.5?h/(r+o):h/(2-r-o),r){case n:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-n)/h+2;break;case s:c=(n-a)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ln){et.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,a=tn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(aa),this.setHSL(aa.h+e,aa.s+t,aa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(aa),e.getHSL(lo);const n=nc(aa.h,lo.h,t),a=nc(aa.s,lo.s,t),s=nc(aa.l,lo.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new rt;rt.NAMES=Nm;class hv extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ni=new $,Ni=new $,dc=new $,zi=new $,ys=new $,xs=new $,qh=new $,uc=new $,hc=new $,fc=new $,pc=new Ct,mc=new Ct,gc=new Ct;class oi{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),ni.subVectors(e,t),a.cross(ni);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){ni.subVectors(a,t),Ni.subVectors(n,t),dc.subVectors(e,t);const r=ni.dot(ni),o=ni.dot(Ni),c=ni.dot(dc),l=Ni.dot(Ni),d=Ni.dot(dc),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,m=(r*d-o*c)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zi.x),c.addScaledVector(r,zi.y),c.addScaledVector(o,zi.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(pc,s.x),r.addScaledVector(mc,s.y),r.addScaledVector(gc,s.z),r}static isFrontFacing(e,t,n,a){return ni.subVectors(n,t),Ni.subVectors(e,t),ni.cross(Ni).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ni.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;ys.subVectors(a,n),xs.subVectors(s,n),uc.subVectors(e,n);const c=ys.dot(uc),l=xs.dot(uc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,a);const d=ys.dot(hc),h=xs.dot(hc);if(d>=0&&h<=d)return t.copy(a);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(ys,r);fc.subVectors(e,s);const f=ys.dot(fc),m=xs.dot(fc);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(xs,o);const p=d*m-f*h;if(p<=0&&h-d>=0&&f-m>=0)return qh.subVectors(s,a),o=(h-d)/(h-d+(f-m)),t.copy(a).addScaledVector(qh,o);const g=1/(p+_+u);return r=_*g,o=u*g,t.copy(n).addScaledVector(ys,r).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ii):ii.fromBufferAttribute(s,r),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),uo.subVectors(this.max,cr),bs.subVectors(e.a,cr),Ss.subVectors(e.b,cr),Ms.subVectors(e.c,cr),sa.subVectors(Ss,bs),ra.subVectors(Ms,Ss),Ia.subVectors(bs,Ms);let t=[0,-sa.z,sa.y,0,-ra.z,ra.y,0,-Ia.z,Ia.y,sa.z,0,-sa.x,ra.z,0,-ra.x,Ia.z,0,-Ia.x,-sa.y,sa.x,0,-ra.y,ra.x,0,-Ia.y,Ia.x,0];return!_c(t,bs,Ss,Ms,uo)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,bs,Ss,Ms,uo))?!1:(ho.crossVectors(sa,ra),t=[ho.x,ho.y,ho.z],_c(t,bs,Ss,Ms,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new $,new $,new $,new $,new $,new $,new $,new $],ii=new $,co=new jr,bs=new $,Ss=new $,Ms=new $,sa=new $,ra=new $,Ia=new $,cr=new $,uo=new $,ho=new $,Ua=new $;function _c(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){Ua.fromArray(i,s);const o=a.x*Math.abs(Ua.x)+a.y*Math.abs(Ua.y)+a.z*Math.abs(Ua.z),c=e.dot(Ua),l=t.dot(Ua),d=n.dot(Ua);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Ft=new $,fo=new it;let fv=0;class Yi extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=W0,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),a=pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),a=pn(a,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zm extends Yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fm extends Yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends Yi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pv=new jr,dr=new $,vc=new $;class bl{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pv.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(dr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(vc)),this.expandByPoint(dr.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mv=0;const Vn=new Et,yc=new Zt,Es=new $,An=new jr,ur=new jr,Vt=new $;class fi extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Fm:zm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new jn(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(An.min,ur.min),An.expandByPoint(Vt),Vt.addVectors(An.max,ur.max),An.expandByPoint(Vt)):(An.expandByPoint(ur.min),An.expandByPoint(ur.max))}An.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Vt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Vt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Vt.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(e,l),Vt.add(Es)),a=Math.max(a,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Yi(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new $,c[v]=new $;const l=new $,d=new $,h=new $,u=new it,f=new it,m=new it,_=new $,p=new $;function g(v,E,A){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,A),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),d.sub(l),h.sub(l),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(L),o[v].add(_),o[E].add(_),o[A].add(_),c[v].add(p),c[E].add(p),c[A].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,E=b.length;v<E;++v){const A=b[v],L=A.start,U=A.count;for(let N=L,P=L+U;N<P;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new $,x=new $,S=new $,w=new $;function k(v){S.fromBufferAttribute(a,v),w.copy(S);const E=o[v];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(w,E);const L=x.dot(c[v])<0?-1:1;r.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,E=b.length;v<E;++v){const A=b[v],L=A.start,U=A.count;for(let N=L,P=L+U;N<P;N+=3)k(e.getX(N+0)),k(e.getX(N+1)),k(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const a=new $,s=new $,r=new $,o=new $,c=new $,l=new $,d=new $,h=new $;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)a.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*d;for(let g=0;g<d;g++)u[m++]=l[f++]}return new Yi(u,d,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(a[c]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new $,gv=new $,_v=new He;class da{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=xc.subVectors(n,t).cross(gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(xc),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_v.getNormalMatrix(e),a=this.coplanarPoint(xc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vv=0;class ar extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=wr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_m,this.blendDst=vm,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tc,this.stencilZFail=tc,this.stencilZPass=tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new da().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new $,bc=new $,po=new $,mo=new $;class Hu{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){bc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(bc);const s=e.distanceTo(t)*.5,r=-this.direction.dot(po),o=mo.dot(this.direction),c=-mo.dot(po),l=mo.lengthSq(),d=Math.abs(1-r*r);let h,u,f,m;if(d>0)if(h=r*c-o,u=r*o-c,m=s*d,h>=0)if(u>=-m)if(u<=m){const _=1/d;h*=_,u*=_,f=h*(h+r*u+2*o)+u*(r*h+u+2*c)+l}else u=s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(bc).addScaledVector(po,u),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),a=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,a,s){const r=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,h=e.x-r.x,u=e.y-r.y,f=e.z-r.z,m=t.x-r.x,_=t.y-r.y,p=t.z-r.z,g=n.x-r.x,b=n.y-r.y,T=n.z-r.z,x=Math.abs(c),S=Math.abs(l),w=Math.abs(d);let k,v,E,A,L,U,N,P,F,W,G,Q;if(x>=S&&x>=w?(E=c,U=h,F=m,Q=g,c>=0?(k=l,v=d,A=u,L=f,N=_,P=p,W=b,G=T):(k=d,v=l,A=f,L=u,N=p,P=_,W=T,G=b)):S>=w?(E=l,U=u,F=_,Q=b,l>=0?(k=d,v=c,A=f,L=h,N=p,P=m,W=T,G=g):(k=c,v=d,A=h,L=f,N=m,P=p,W=g,G=T)):(E=d,U=f,F=p,Q=T,d>=0?(k=c,v=l,A=h,L=u,N=m,P=_,W=g,G=b):(k=l,v=c,A=u,L=h,N=_,P=m,W=b,G=g)),E===0)return null;const X=k/E,j=v/E,ie=1/E,Te=A-X*U,be=L-j*U,Ke=N-X*F,Be=P-j*F,$e=W-X*Q,Z=G-j*Q,ae=$e*Be-Z*Ke,Se=Te*Z-be*$e,Oe=Ke*be-Be*Te;if(a){if(ae<0||Se<0||Oe<0)return null}else if((ae<0||Se<0||Oe<0)&&(ae>0||Se>0||Oe>0))return null;const xe=ae+Se+Oe;if(xe===0)return null;const We=ie*(ae*U+Se*F+Oe*Q);return(xe>0?We<0:We>0)?null:this.at(We/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Om extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xh=new Et,Na=new Hu,go=new bl,Yh=new $,_o=new $,vo=new $,yo=new $,Sc=new $,xo=new $,Kh=new $,bo=new $;class Hn extends Zt{constructor(e=new fi,t=new Om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(Sc.fromBufferAttribute(h,e),r?xo.addScaledVector(Sc,d):xo.addScaledVector(Sc.sub(t),d))}t.add(xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),Na.copy(e.ray).recast(e.near),!(go.containsPoint(Na.origin)===!1&&(Na.intersectSphere(go,Yh)===null||Na.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(Xh.copy(s).invert(),Na.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&Na.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Na)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=r[p.materialIndex],b=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,S=T;x<S;x+=3){const w=o.getX(x),k=o.getX(x+1),v=o.getX(x+2);a=So(this,g,e,n,l,d,h,w,k,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const b=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);a=So(this,r,e,n,l,d,h,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=r[p.materialIndex],b=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,S=T;x<S;x+=3){const w=x,k=x+1,v=x+2;a=So(this,g,e,n,l,d,h,w,k,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const b=p,T=p+1,x=p+2;a=So(this,r,e,n,l,d,h,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function yv(i,e,t,n,a,s,r,o){let c;if(e.side===Mn?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===as,o),c===null)return null;bo.copy(o),bo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(bo);return l<t.near||l>t.far?null:{distance:l,point:bo.clone(),object:i}}function So(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,_o),i.getVertexPosition(c,vo),i.getVertexPosition(l,yo);const d=yv(i,e,t,n,_o,vo,yo,Kh);if(d){const h=new $;oi.getBarycoord(Kh,_o,vo,yo,h),a&&(d.uv=oi.getInterpolatedAttribute(a,o,c,l,h,new it)),s&&(d.uv1=oi.getInterpolatedAttribute(s,o,c,l,h,new it)),r&&(d.normal=oi.getInterpolatedAttribute(r,o,c,l,h,new $),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new $,materialIndex:0};oi.getNormal(_o,vo,yo,u.normal),d.face=u,d.barycoord=h}return d}class xv extends Kt{constructor(e=null,t=1,n=1,a,s,r,o,c,l=Bt,d=Bt,h,u){super(null,r,o,c,l,d,a,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const za=new bl,bv=new it(.5,.5),Mo=new $;class Gu{constructor(e=new da,t=new da,n=new da,a=new da,s=new da,r=new da){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],d=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],b=s[12],T=s[13],x=s[14],S=s[15];if(a[0].setComponents(l-r,f-d,g-m,S-b).normalize(),a[1].setComponents(l+r,f+d,g+m,S+b).normalize(),a[2].setComponents(l+o,f+h,g+_,S+T).normalize(),a[3].setComponents(l-o,f-h,g-_,S-T).normalize(),n)a[4].setComponents(c,u,p,x).normalize(),a[5].setComponents(l-c,f-u,g-p,S-x).normalize();else if(a[4].setComponents(l-c,f-u,g-p,S-x).normalize(),t===ki)a[5].setComponents(l+c,f+u,g+p,S+x).normalize();else if(t===Vr)a[5].setComponents(c,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),za.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(e){za.center.set(0,0,0);const t=bv.distanceTo(e.center);return za.radius=.7071067811865476+t,za.applyMatrix4(e.matrixWorld),this.intersectsSphere(za)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Mo.x=a.normal.x>0?e.max.x:e.min.x,Mo.y=a.normal.y>0?e.max.y:e.min.y,Mo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bm extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new $,ol=new $,Zh=new Et,hr=new Hu,Eo=new bl,Mc=new $,Jh=new $;class Sv extends Zt{constructor(e=new fi,t=new Bm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)rl.fromBufferAttribute(t,a-1),ol.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=rl.distanceTo(ol);e.setAttribute("lineDistance",new jn(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(a),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;Zh.copy(a).invert(),hr.copy(e.ray).applyMatrix4(Zh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=l){const g=d.getX(_),b=d.getX(_+1),T=wo(this,e,hr,c,g,b,_);T&&t.push(T)}if(this.isLineLoop){const _=d.getX(m-1),p=d.getX(f),g=wo(this,e,hr,c,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=l){const g=wo(this,e,hr,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=wo(this,e,hr,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wo(i,e,t,n,a,s,r){const o=i.geometry.attributes.position;if(rl.fromBufferAttribute(o,a),ol.fromBufferAttribute(o,s),t.distanceSqToSegment(rl,ol,Mc,Jh)>n)return;Mc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mc);if(!(l<e.near||l>e.far))return{distance:l,point:Jh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Qh=new $,jh=new $;class Mv extends Sv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)Qh.fromBufferAttribute(t,a),jh.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Qh.distanceTo(jh);e.setAttribute("lineDistance",new jn(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hm extends Kt{constructor(e=[],t=ss,n,a,s,r,o,c,l,d){super(e,t,n,a,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gm extends Kt{constructor(e,t,n,a,s,r,o,c,l){super(e,t,n,a,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wr extends Kt{constructor(e,t,n=Li,a,s,r,o=Bt,c=Bt,l,d=Qi,h=1){if(d!==Qi&&d!==Xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,a,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ev extends Wr{constructor(e,t=Li,n=ss,a,s,r=Bt,o=Bt,c,l=Qi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,a,s,r,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vm extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ji extends fi{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],h=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,a,r,2),m("x","z","y",1,-1,e,n,-t,a,r,3),m("x","y","z",1,-1,e,t,n,a,s,4),m("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new jn(l,3)),this.setAttribute("normal",new jn(d,3)),this.setAttribute("uv",new jn(h,2));function m(_,p,g,b,T,x,S,w,k,v,E){const A=x/k,L=S/v,U=x/2,N=S/2,P=w/2,F=k+1,W=v+1;let G=0,Q=0;const X=new $;for(let j=0;j<W;j++){const ie=j*L-N;for(let Te=0;Te<F;Te++){const be=Te*A-U;X[_]=be*b,X[p]=ie*T,X[g]=P,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=w>0?1:-1,d.push(X.x,X.y,X.z),h.push(Te/k),h.push(1-j/v),G+=1}}for(let j=0;j<v;j++)for(let ie=0;ie<k;ie++){const Te=u+ie+F*j,be=u+ie+F*(j+1),Ke=u+(ie+1)+F*(j+1),Be=u+(ie+1)+F*j;c.push(Te,be,Be),c.push(be,Ke,Be),Q+=6}o.addGroup(f,Q,E),f+=Q,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sl extends fi{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,h=e/o,u=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<d;g++){const b=g*u-r;for(let T=0;T<l;T++){const x=T*h-s;m.push(x,-b,0),_.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const T=b+l*g,x=b+l*(g+1),S=b+1+l*(g+1),w=b+1+l*g;f.push(T,x,w),f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new jn(m,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(ef(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(ef(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const a in n)e[a]=n[a]}return e}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $m(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Tv={clone:nr,merge:cn};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(a.value);break;case"v2":this.uniforms[n].value=new it().fromArray(a.value);break;case"v3":this.uniforms[n].value=new $().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(a.value);break;case"m3":this.uniforms[n].value=new He().fromArray(a.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Rv extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ll extends ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=Cu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lv extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ec={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tf(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Pv{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&a.onStart!==void 0&&a.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,a.onProgress!==void 0&&a.onProgress(d,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dv=new Pv;class Wm{constructor(e){this.manager=e!==void 0?e:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wm.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class Iv extends Wm{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ec.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let h=ws.get(r);h===void 0&&(h=[],ws.set(r,h)),h.push({onLoad:t,onError:a})}return r}const o=$r("img");function c(){d(),t&&t(this);const h=ws.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}ws.delete(this),s.manager.itemEnd(e)}function l(h){d(),a&&a(h),Ec.remove(`image:${e}`);const u=ws.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(h)}ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ec.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class qm extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wc=new Et,nf=new $,af=new $;class Uv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,c=a?a.x/s.x:0,l=a?a.y/s.y:0;e.coordinateSystem===Vr||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const To=new $,ko=new ir,gi=new $;class Xm extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,ko,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,ko,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,ko,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,ko,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oa=new $,sf=new it,rf=new it;class Yn extends Xm{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oa.x,oa.y).multiplyScalar(-e/oa.z),oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oa.x,oa.y).multiplyScalar(-e/oa.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vu extends Xm{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nv extends Uv{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends qm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Nv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zv extends qm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ts=-90,ks=1;class Fv extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Ts,ks,e,t);a.layers=this.layers,this.add(a);const s=new Yn(Ts,ks,e,t);s.layers=this.layers,this.add(s);const r=new Yn(Ts,ks,e,t);r.layers=this.layers,this.add(r);const o=new Yn(Ts,ks,e,t);o.layers=this.layers,this.add(o);const c=new Yn(Ts,ks,e,t);c.layers=this.layers,this.add(c);const l=new Yn(Ts,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ov extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lf=new Et;class Bv{constructor(e,t,n=0,a=1/0){this.ray=new Hu(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(e,t=!0,n=[]){return Kd(e,this,n,t),n.sort(cf),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)Kd(e[a],this,n,t);return n.sort(cf),n}}function cf(i,e){return i.distance-e.distance}function Kd(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Kd(s[r],e,t,!0)}}class Hv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ym{static{Ym.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}}function df(i,e,t,n){const a=Gv(n);switch(t){case Lm:return i*e;case Dm:return i*e/a.components*a.byteLength;case Iu:return i*e/a.components*a.byteLength;case rs:return i*e*2/a.components*a.byteLength;case Uu:return i*e*2/a.components*a.byteLength;case Pm:return i*e*3/a.components*a.byteLength;case ci:return i*e*4/a.components*a.byteLength;case Nu:return i*e*4/a.components*a.byteLength;case Bo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vd:case xd:return Math.max(i,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(i,8)*Math.max(e,8)/2;case bd:case Sd:case Ed:case wd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Md:case nl:case Td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hd:case Gd:case Vd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $d:case Wd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case il:case qd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gv(i){switch(i){case Un:case km:return{byteLength:1,components:1};case Hr:case Am:case Pi:return{byteLength:2,components:1};case Pu:case Du:return{byteLength:2,components:4};case Li:case Lu:case Ti:return{byteLength:4,components:1};case Rm:case Cm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Km(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vv(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<h.length;f++){const m=h[u],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}var $v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zv=`#ifdef USE_AOMAP
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
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ay=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ny=`#ifdef USE_ENVMAP
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
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Gy=`uniform sampler2D dfgLUT;
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
}`,Vy=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#define LAMBERT
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
}`,ob=`#define LAMBERT
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
}`,lb=`#define MATCAP
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
}`,cb=`#define MATCAP
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
}`,db=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,hb=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
}`,gb=`#define TOON
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
}`,_b=`#define TOON
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
}`,vb=`uniform float size;
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
}`,yb=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:$v,alphahash_pars_fragment:Wv,alphamap_fragment:qv,alphamap_pars_fragment:Xv,alphatest_fragment:Yv,alphatest_pars_fragment:Kv,aomap_fragment:Zv,aomap_pars_fragment:Jv,batching_pars_vertex:Qv,batching_vertex:jv,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ay,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:dy,color_pars_vertex:uy,color_vertex:hy,common:fy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:yy,colorspace_fragment:xy,colorspace_pars_fragment:by,envmap_fragment:Sy,envmap_common_pars_fragment:My,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Ny,envmap_vertex:Ty,fog_vertex:ky,fog_pars_vertex:Ay,fog_fragment:Ry,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Py,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Iy,lights_pars_begin:Uy,lights_toon_fragment:zy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Oy,lights_phong_pars_fragment:By,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Vy,lights_fragment_maps:$y,lights_fragment_end:Wy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:Qy,map_particle_fragment:jy,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:ax,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:dx,normal_pars_vertex:ux,normal_vertex:hx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:_x,opaque_fragment:vx,packing:yx,premultiplied_alpha_fragment:xx,project_vertex:bx,dithering_fragment:Sx,dithering_pars_fragment:Mx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:kx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Lx,skinning_vertex:Px,skinnormal_vertex:Dx,specularmap_fragment:Ix,specularmap_pars_fragment:Ux,tonemapping_fragment:Nx,tonemapping_pars_fragment:zx,transmission_fragment:Fx,transmission_pars_fragment:Ox,uv_pars_fragment:Bx,uv_pars_vertex:Hx,uv_vertex:Gx,worldpos_vertex:Vx,background_vert:$x,background_frag:Wx,backgroundCube_vert:qx,backgroundCube_frag:Xx,cube_vert:Yx,cube_frag:Kx,depth_vert:Zx,depth_frag:Jx,distance_vert:Qx,distance_frag:jx,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:ab,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:db,meshnormal_frag:ub,meshphong_vert:hb,meshphong_frag:fb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:vb,points_frag:yb,shadow_vert:xb,shadow_frag:bb,sprite_vert:Sb,sprite_frag:Mb},ge={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xi={basic:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:cn([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:cn([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:cn([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:cn([ge.common,ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:cn([ge.lights,ge.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};xi.physical={uniforms:cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ao={r:0,b:0,g:0},Eb=new Et,Zm=new He;Zm.set(-1,0,0,0,1,0,0,0,1);function wb(i,e,t,n,a,s){const r=new rt(0);let o=a===!0?0:1,c,l,d=null,h=0,u=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const x=b.backgroundBlurriness>0;T=e.get(T,x)}return T}function m(b){let T=!1;const x=f(b);x===null?p(r,o):x&&x.isColor&&(p(x,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===xl)?(l===void 0&&(l=new Hn(new ji(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:nr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zm),l.material.toneMapped=et.getTransfer(x.colorSpace)!==ft,(d!==x||h!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Hn(new Sl(2,2),new Di({name:"BackgroundMaterial",uniforms:nr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(Ao,$m(i)),t.buffers.color.setClear(Ao.r,Ao.g,Ao.b,T,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,T=1){r.set(b),o=T,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(r,o)},render:m,addToRenderList:_,dispose:g}}function Tb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let s=a,r=!1;function o(L,U,N,P,F){let W=!1;const G=h(L,P,N,U);s!==G&&(s=G,l(s.object)),W=f(L,P,N,F),W&&m(L,P,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,x(L,U,N,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function h(L,U,N,P){const F=P.wireframe===!0;let W=n[U.id];W===void 0&&(W={},n[U.id]=W);const G=L.isInstancedMesh===!0?L.id:0;let Q=W[G];Q===void 0&&(Q={},W[G]=Q);let X=Q[N.id];X===void 0&&(X={},Q[N.id]=X);let j=X[F];return j===void 0&&(j=u(c()),X[F]=j),j}function u(L){const U=[],N=[],P=[];for(let F=0;F<t;F++)U[F]=0,N[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,U,N,P){const F=s.attributes,W=U.attributes;let G=0;const Q=N.getAttributes();for(const X in Q)if(Q[X].location>=0){const ie=F[X];let Te=W[X];if(Te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Te=L.instanceColor)),ie===void 0||ie.attribute!==Te||Te&&ie.data!==Te.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function m(L,U,N,P){const F={},W=U.attributes;let G=0;const Q=N.getAttributes();for(const X in Q)if(Q[X].location>=0){let ie=W[X];ie===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const Te={};Te.attribute=ie,ie&&ie.data&&(Te.data=ie.data),F[X]=Te,G++}s.attributes=F,s.attributesNum=G,s.index=P}function _(){const L=s.newAttributes;for(let U=0,N=L.length;U<N;U++)L[U]=0}function p(L){g(L,0)}function g(L,U){const N=s.newAttributes,P=s.enabledAttributes,F=s.attributeDivisors;N[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),F[L]!==U&&(i.vertexAttribDivisor(L,U),F[L]=U)}function b(){const L=s.newAttributes,U=s.enabledAttributes;for(let N=0,P=U.length;N<P;N++)U[N]!==L[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function T(L,U,N,P,F,W,G){G===!0?i.vertexAttribIPointer(L,U,N,F,W):i.vertexAttribPointer(L,U,N,P,F,W)}function x(L,U,N,P){_();const F=P.attributes,W=N.getAttributes(),G=U.defaultAttributeValues;for(const Q in W){const X=W[Q];if(X.location>=0){let j=F[Q];if(j===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const ie=j.normalized,Te=j.itemSize,be=e.get(j);if(be===void 0)continue;const Ke=be.buffer,Be=be.type,$e=be.bytesPerElement,Z=Be===i.INT||Be===i.UNSIGNED_INT||j.gpuType===Lu;if(j.isInterleavedBufferAttribute){const ae=j.data,Se=ae.stride,Oe=j.offset;if(ae.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)g(X.location+xe,ae.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let xe=0;xe<X.locationSize;xe++)T(X.location+xe,Te/X.locationSize,Be,ie,Se*$e,(Oe+Te/X.locationSize*xe)*$e,Z)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)g(X.location+ae,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<X.locationSize;ae++)p(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ae=0;ae<X.locationSize;ae++)T(X.location+ae,Te/X.locationSize,Be,ie,Te*$e,Te/X.locationSize*ae*$e,Z)}}else if(G!==void 0){const ie=G[Q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}b()}function S(){E();for(const L in n){const U=n[L];for(const N in U){const P=U[N];for(const F in P){const W=P[F];for(const G in W)d(W[G].object),delete W[G];delete P[F]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const N in U){const P=U[N];for(const F in P){const W=P[F];for(const G in W)d(W[G].object),delete W[G];delete P[F]}}delete n[L.id]}function k(L){for(const U in n){const N=n[U];for(const P in N){const F=N[P];if(F[L.id]===void 0)continue;const W=F[L.id];for(const G in W)d(W[G].object),delete W[G];delete F[L.id]}}}function v(L){for(const U in n){const N=n[U],P=L.isInstancedMesh===!0?L.id:0,F=N[P];if(F!==void 0){for(const W in F){const G=F[W];for(const Q in G)d(G[Q].object),delete G[Q];delete F[W]}delete N[P],Object.keys(N).length===0&&delete n[U]}}}function E(){A(),r=!0,s!==a&&(s=a,l(s.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function kb(i,e,t){let n;function a(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Ab(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(k){return!(k!==ci&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){const v=k===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Un&&k!==Ti&&!v&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(ze("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,maxSamples:S,samples:w}}function Rb(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new da,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||a;return a=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!a||m===null||m.length===0||s&&!p)s?d(null):l();else{const b=s?0:n,T=b*4;let x=g.clippingState||null;c.value=x,x=d(m,u,T,f);for(let S=0;S!==T;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,x=f;T!==_;++T,x+=4)r.copy(h[T]).applyMatrix4(b,o),r.normal.toArray(p,x),p[x+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Us=4,Cb=6,Lb=20,Pb=256,fr=new Vu,uf=new rt;let Tc=null,kc=0,Ac=0,Rc=!1;const Db=new $,Fa=new $;class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=Db}=s;Tc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,kc,Ac),this._renderer.xr.enabled=Rc,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Pi,format:ci,colorSpace:al,depthBuffer:!1},a=ff(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ib(s)),this._blurMaterial=Nb(s,e,t),this._ggxMaterial=Ub(s,e,t)}return a}_compileMaterial(e){const t=new Hn(new fi,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,a,s){const c=new Yn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uf),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new ji,new Om({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(uf),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[T],s.y,s.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[T]));const S=this._cubeSize;As(a,x*S,T>2?S:0,S,S),h.setRenderTarget(a),g&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ss||e.mapping===tr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;As(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=l*1.25,f=h*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Us?n-m+Us:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,As(s,p,g,3*_,2*_),a.setRenderTarget(s),a.render(o,fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,As(e,p,g,3*_,2*_),a.setRenderTarget(e),a.render(o,fr)}_blur(e,t,n,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,a,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],h=3*d*(a>this._lodMax-Us?a-this._lodMax+Us:0),u=4*(this._cubeSize-d);As(t,h,u,3*d,2*d),r.setRenderTarget(t),r.render(c,fr)}}function Ib(i){const e=[],t=[];let n=i;const a=i-Us+1+Cb;for(let s=0;s<a;s++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,u=6,f=3,m=new Float32Array(f*u*h),_=new Float32Array(f*u*h);for(let g=0;g<h;g++){const b=g%3*2/3-1,T=g>2?0:-1,x=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(x,f*u*g);for(let S=0;S<u;S++){const w=d[S*2]*2-1,k=d[S*2+1]*2-1;g===0?Fa.set(1,k,w):g===1?Fa.set(-w,1,-k):g===2?Fa.set(-w,k,1):g===3?Fa.set(-1,k,-w):g===4?Fa.set(-w,-1,k):Fa.set(w,k,-1),Fa.toArray(_,(g*u+S)*f)}}const p=new fi;p.setAttribute("position",new Yi(m,f)),p.setAttribute("outputDirection",new Yi(_,f)),t.push(new Hn(p,null)),n>Us&&n--}return{lodMeshes:t,sizeLods:e}}function ff(i,e,t){const n=new di(i,e,t);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Ub(i,e,t){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Nb(i,e,t){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function pf(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function mf(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jm extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Hm(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ji(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:qi});s.uniforms.tEquirect.value=t;const r=new Hn(a,s),o=t.minFilter;return t.minFilter===qa&&(t.minFilter=an),new Fv(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}function zb(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ql||f===jl)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new Jm(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,m=f===Ql||f===jl,_=f===ss||f===tr;if(m||_){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new hf(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const b=u.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new hf(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,f){return f===Ql?u.mapping=ss:f===jl&&(u.mapping=tr),u}function c(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){const f=u.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function Fb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Gs("WebGLRenderer: "+n+" extension not supported."),a}}}function Ob(i,e,t,n){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete a[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const b=f.array;_=f.version;for(let T=0,x=b.length;T<x;T+=3){const S=b[T+0],w=b[T+1],k=b[T+2];u.push(S,w,w,k,k,S)}}else{const b=m.array;_=m.version;for(let T=0,x=b.length/3-1;T<x;T+=3){const S=T+0,w=T+1,k=T+2;u.push(S,w,w,k,k,S)}}const p=new(m.count>=65535?Fm:zm)(u,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Bb(i,e,t){let n;function a(h){n=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function c(h,u){i.drawElements(n,u,s,h*r),t.update(u,n,1)}function l(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,h*r,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Hb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Gb(i,e,t){const n=new WeakMap,a=new Ct;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let E=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*S*4*h),k=new Um(w,x,S,h);k.type=Ti,k.needsUpdate=!0;const v=T*4;for(let A=0;A<h;A++){const L=p[A],U=g[A],N=b[A],P=x*S*4*A;for(let F=0;F<L.count;F++){const W=F*v;f===!0&&(a.fromBufferAttribute(L,F),w[P+W+0]=a.x,w[P+W+1]=a.y,w[P+W+2]=a.z,w[P+W+3]=0),m===!0&&(a.fromBufferAttribute(U,F),w[P+W+4]=a.x,w[P+W+5]=a.y,w[P+W+6]=a.z,w[P+W+7]=0),_===!0&&(a.fromBufferAttribute(N,F),w[P+W+8]=a.x,w[P+W+9]=a.y,w[P+W+10]=a.z,w[P+W+11]=N.itemSize===4?a.w:1)}}u={count:h,texture:k,size:new it(x,S)},n.set(o,u),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Vb(i,e,t,n,a){let s=new WeakMap;function r(l){const d=a.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const $b={[ym]:"LINEAR_TONE_MAPPING",[xm]:"REINHARD_TONE_MAPPING",[bm]:"CINEON_TONE_MAPPING",[Sm]:"ACES_FILMIC_TONE_MAPPING",[Em]:"AGX_TONE_MAPPING",[wm]:"NEUTRAL_TONE_MAPPING",[Mm]:"CUSTOM_TONE_MAPPING"};function Wb(i,e,t,n,a,s){const r=new di(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new fi;l.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jn([0,2,0,0,2,0],2));const d=new Rv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Hn(l,d),u=new Vu(-1,1,1,-1,0,1);let f=null,m=null,_=!1,p,g=null,b=[],T=!1;this.setSize=function(x,S){r.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let w=0;w<b.length;w++){const k=b[w];k.setSize&&k.setSize(x,S)}},this.setEffects=function(x){b=x,T=b.length>0&&b[0].isRenderPass===!0;const S=r.width,w=r.height;b.length>0&&o===null&&(o=new di(S,w,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),c=new di(S,w,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<b.length;k++){const v=b[k];v.setSize&&v.setSize(S,w)}},this.begin=function(x,S){if(_||x.toneMapping===Ri&&b.length===0)return!1;if(g=S,S!==null){const w=S.width,k=S.height;(r.width!==w||r.height!==k)&&this.setSize(w,k)}return T===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=Ri,!0},this.hasRenderPass=function(){return T},this.end=function(x,S){x.toneMapping=p,_=!0;let w=r,k=o;for(let v=0;v<b.length;v++){const E=b[v];E.enabled!==!1&&(E.render(x,k,w,S),E.needsSwap!==!1&&(w=k,k=k===o?c:o))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,d.defines={},et.getTransfer(f)===ft&&(d.defines.SRGB_TRANSFER="");const v=$b[m];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(g),x.render(h,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const Qm=new Kt,Zd=new Wr(1,1),jm=new Um,eg=new av,tg=new Hm,gf=[],_f=[],vf=new Float32Array(16),yf=new Float32Array(9),xf=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=gf[a];if(s===void 0&&(s=new Float32Array(a),gf[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function El(i,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Zb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),Gt(t,n)}}function Jb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),Gt(t,n)}}function Qb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;vf.set(n),i.uniformMatrix4fv(this.addr,!1,vf),Gt(t,n)}}function jb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function tS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function iS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function oS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Zd.compareFunction=t.isReversedDepthBuffer()?Fu:zu,s=Zd):s=Qm,t.setTexture2D(e||s,a)}function lS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||eg,a)}function cS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||tg,a)}function dS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||jm,a)}function uS(i){switch(i){case 5126:return qb;case 35664:return Xb;case 35665:return Yb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return jb;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return aS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return dS}}function hS(i,e){i.uniform1fv(this.addr,e)}function fS(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function pS(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function mS(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function gS(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _S(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vS(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yS(i,e){i.uniform1iv(this.addr,e)}function xS(i,e){i.uniform2iv(this.addr,e)}function bS(i,e){i.uniform3iv(this.addr,e)}function SS(i,e){i.uniform4iv(this.addr,e)}function MS(i,e){i.uniform1uiv(this.addr,e)}function ES(i,e){i.uniform2uiv(this.addr,e)}function wS(i,e){i.uniform3uiv(this.addr,e)}function TS(i,e){i.uniform4uiv(this.addr,e)}function kS(i,e,t){const n=this.cache,a=e.length,s=El(t,a);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=Zd:r=Qm;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function AS(i,e,t){const n=this.cache,a=e.length,s=El(t,a);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||eg,s[r])}function RS(i,e,t){const n=this.cache,a=e.length,s=El(t,a);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||tg,s[r])}function CS(i,e,t){const n=this.cache,a=e.length,s=El(t,a);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||jm,s[r])}function LS(i){switch(i){case 5126:return hS;case 35664:return fS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return yS;case 35667:case 35671:return xS;case 35668:case 35672:return bS;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return ES;case 36295:return wS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uS(t.type)}}class DS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LS(t.type)}}class IS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function bf(i,e){i.seq.push(e),i.map[e.id]=e}function US(i,e,t){const n=i.name,a=n.length;for(Cc.lastIndex=0;;){const s=Cc.exec(n),r=Cc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){bf(t,l===void 0?new PS(o,i,e):new DS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new IS(o),bf(t,h)),t=h}}}class Wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);US(o,c,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Sf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const NS=37297;let zS=0;function FS(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Mf=new He;function OS(i){et._getMatrix(Mf,et.workingColorSpace,i);const e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case sl:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ef(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+FS(i.getShaderSource(e),o)}else return s}function BS(i,e){const t=OS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const HS={[ym]:"Linear",[xm]:"Reinhard",[bm]:"Cineon",[Sm]:"ACESFilmic",[Em]:"AgX",[wm]:"Neutral",[Mm]:"Custom"};function GS(i,e){const t=HS[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new $;function VS(){et.getLuminanceCoefficients(Ro);const i=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function WS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function xr(i){return i!==""}function wf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(i){return i.replace(XS,KS)}const YS=new Map;function KS(i,e){let t=Ye[e];if(t===void 0){const n=YS.get(e);if(n!==void 0)t=Ye[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jd(t)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(ZS,JS)}function JS(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Af(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const QS={[Oo]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function jS(i){return QS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e1={[ss]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE_UV"};function t1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":e1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const n1={[tr]:"ENVMAP_MODE_REFRACTION"};function i1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a1={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[I0]:"ENVMAP_BLENDING_ADD"};function s1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a1[i.combine]||"ENVMAP_BLENDING_NONE"}function r1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o1(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=jS(t),l=t1(t),d=i1(t),h=s1(t),u=r1(t),f=$S(t),m=WS(s),_=a.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),g.length>0&&(g+=`
`)):(p=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),g=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ri?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,BS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),r=Jd(r),r=wf(r,t),r=Tf(r,t),o=Jd(o),o=wf(o,t),o=Tf(o,t),r=kf(r),o=kf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+p+r,x=b+g+o,S=Sf(a,a.VERTEX_SHADER,T),w=Sf(a,a.FRAGMENT_SHADER,x);a.attachShader(_,S),a.attachShader(_,w),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function k(L){if(i.debug.checkShaderErrors){const U=a.getProgramInfoLog(_)||"",N=a.getShaderInfoLog(S)||"",P=a.getShaderInfoLog(w)||"",F=U.trim(),W=N.trim(),G=P.trim();let Q=!0,X=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,S,w);else{const j=Ef(a,S,"vertex"),ie=Ef(a,w,"fragment");ct("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+j+`
`+ie)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(W===""||G==="")&&(X=!1);X&&(L.diagnostics={runnable:Q,programLog:F,vertexShader:{log:W,prefix:p},fragmentShader:{log:G,prefix:g}})}a.deleteShader(S),a.deleteShader(w),v=new Wo(a,_),E=qS(a,_)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let E;this.getAttributes=function(){return E===void 0&&k(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(_,NS)),A},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d1(e),t.set(e,n)),n}}class d1{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}}function u1(i){return i===rs||i===nl||i===il}function h1(i,e,t,n,a,s){const r=new Bu,o=new c1,c=new Set,l=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,E,A,L,U,N){const P=L.fog,F=U.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||W,G),X=Q&&Q.mapping===xl?Q.image.height:null,j=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Te=ie!==void 0?ie.length:0;let be=0;F.morphAttributes.position!==void 0&&(be=1),F.morphAttributes.normal!==void 0&&(be=2),F.morphAttributes.color!==void 0&&(be=3);let Ke,Be,$e,Z;if(j){const yt=xi[j];Ke=yt.vertexShader,Be=yt.fragmentShader}else{Ke=v.vertexShader,Be=v.fragmentShader;const yt=o.getVertexShaderStage(v),ut=o.getFragmentShaderStage(v);o.update(v,yt,ut),$e=yt.id,Z=ut.id}const ae=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,xe=U.isBatchedMesh===!0,We=!!v.map,Lt=!!v.matcap,Fe=!!Q,je=!!v.aoMap,dt=!!v.lightMap,qe=!!v.bumpMap&&v.wireframe===!1,ot=!!v.normalMap,Nt=!!v.displacementMap,Qt=!!v.emissiveMap,vt=!!v.metalnessMap,O=!!v.roughnessMap,R=v.anisotropy>0,ke=v.clearcoat>0,Ge=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,z=v.sheen>0,V=v.transmission>0,K=R&&!!v.anisotropyMap,le=ke&&!!v.clearcoatMap,de=ke&&!!v.clearcoatNormalMap,J=ke&&!!v.clearcoatRoughnessMap,te=y&&!!v.iridescenceMap,ue=y&&!!v.iridescenceThicknessMap,Pe=z&&!!v.sheenColorMap,me=z&&!!v.sheenRoughnessMap,he=!!v.specularMap,De=!!v.specularColorMap,Ne=!!v.specularIntensityMap,Ve=V&&!!v.transmissionMap,I=V&&!!v.thicknessMap,fe=!!v.gradientMap,ee=!!v.alphaMap,pe=v.alphaTest>0,ye=!!v.alphaHash,se=!!v.extensions;let Ie=Ri;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Ce={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Ke,fragmentShader:Be,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:Lt,envMap:Fe,envMapMode:Fe&&Q.mapping,envMapCubeUVHeight:X,aoMap:je,lightMap:dt,bumpMap:qe,normalMap:ot,displacementMap:Nt,emissiveMap:Qt,normalMapObjectSpace:ot&&v.normalMapType===z0,normalMapTangentSpace:ot&&v.normalMapType===Xd,packedNormalMap:ot&&v.normalMapType===Xd&&u1(v.normalMap.format),metalnessMap:vt,roughnessMap:O,anisotropy:R,anisotropyMap:K,clearcoat:ke,clearcoatMap:le,clearcoatNormalMap:de,clearcoatRoughnessMap:J,dispersion:Ge,retroreflection:C,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:he,specularColorMap:De,specularIntensityMap:Ne,transmission:V,transmissionMap:Ve,thicknessMap:I,gradientMap:fe,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:ye,combine:v.combine,mapUv:We&&m(v.map.channel),aoMapUv:je&&m(v.aoMap.channel),lightMapUv:dt&&m(v.lightMap.channel),bumpMapUv:qe&&m(v.bumpMap.channel),normalMapUv:ot&&m(v.normalMap.channel),displacementMapUv:Nt&&m(v.displacementMap.channel),emissiveMapUv:Qt&&m(v.emissiveMap.channel),metalnessMapUv:vt&&m(v.metalnessMap.channel),roughnessMapUv:O&&m(v.roughnessMap.channel),anisotropyMapUv:K&&m(v.anisotropyMap.channel),clearcoatMapUv:le&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:De&&m(v.specularColorMap.channel),specularIntensityMapUv:Ne&&m(v.specularIntensityMap.channel),transmissionMapUv:Ve&&m(v.transmissionMap.channel),thicknessMapUv:I&&m(v.thicknessMap.channel),alphaMapUv:ee&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ot||R),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(We||ee),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:be,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Qt&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)E.push(A),E.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function T(v){const E=f[v.type];let A;if(E){const L=xi[E];A=Tv.clone(L.uniforms)}else A=v.uniforms;return A}function x(v,E){let A=d.get(E);return A!==void 0?++A.usedTimes:(A=new o1(i,E,v,a),l.push(A),d.set(E,A)),A}function S(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function k(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:k}}function f1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function p1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cf(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,p,g){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:m,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=m,b.materialVariant=r(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=p,b.group=g),e++,b}function c(u,f,m,_,p,g,b){b.reversedDepth===!0&&(p=-p);const T=o(u,f,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?a.push(T):t.push(T)}function l(u,f,m,_,p,g){const b=o(u,f,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?a.unshift(b):t.unshift(b)}function d(u,f){t.length>1&&t.sort(u||p1),n.length>1&&n.sort(f||Rf),a.length>1&&a.sort(f||Rf)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:c,unshift:l,finish:h,sort:d}}function m1(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new Cf,i.set(n,[r])):a>=s.length?(r=new Cf,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function g1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new rt};break;case"SpotLight":t={position:new $,direction:new $,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function _1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v1=0;function y1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function x1(i){const e=new g1,t=_1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const a=new $,s=new Et,r=new Et;function o(l){let d=0,h=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,b=0,T=0,x=0,S=0,w=0,k=0,v=0,E=0,A=0;l.sort(y1);for(let U=0,N=l.length;U<N;U++){const P=l[U],F=P.color,W=P.intensity,G=P.distance;let Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=F.r*W,h+=F.g*W,u+=F.b*W;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],W);A++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=ie,n.sunShadowMap[m]=Q;const Te=j.getViewportCount();for(let be=0;be<Te;be++)n.sunShadowMatrix[_+be]=j.getMatrix(be),n.sunShadowCascade[_+be]=j._cascadeData[be];_+=Te,m++}n.sun[f]=X,f++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(W),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[b]=X;const j=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,j.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=j.matrix,P.castShadow){const ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.spotShadow[b]=ie,n.spotShadowMap[b]=Q,k++}b++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=X,T++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(W),X.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[x]=X,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==b||L.rectAreaLength!==T||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==k||L.numSpotMaps!==v||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=k,n.spotShadowMap.length=k,n.spotLightMatrix.length=k+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=b,L.rectAreaLength=T,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=k,L.numSpotMaps=v,L.numLightProbes=A,n.version=v1++)}function c(l,d){let h=0,u=0,f=0,m=0,_=0,p=0;const g=d.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const x=l[b];if(x.isSunLight){const S=n.sun[h];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),h++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),u++}else if(x.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(x.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Lf(i){const e=new x1(i),t=[],n=[],a=[];function s(u){h.camera=u,t.length=0,n.length=0,a.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function c(u){a.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function b1(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Lf(i),e.set(a,[o])):s>=r.length?(o=new Lf(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`,E1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],w1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Pf=new Et,pr=new $,Lc=new $;function T1(i,e,t){let n=new Gu;const a=new it,s=new it,r=new Ct,o=new Cv,c=new Lv,l={},d=t.maxTextureSize,h={[as]:Mn,[Mn]:as,[ri]:ri},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:S1,fragmentShader:M1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new fi;m.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Hn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let g=this.type;this.render=function(w,k,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===p0&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oo);const E=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(qi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=g!==this.type;N&&k.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){const W=w[P],G=W.shadow;if(G===void 0){ze("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const Q=G.getFrameExtents();a.multiply(Q),s.copy(G.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Q.x),a.x=s.x*Q.x,G.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Q.y),a.y=s.y*Q.y,G.mapSize.y=s.y));const X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yr){if(W.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new di(a.x,a.y,{format:rs,type:Pi,minFilter:an,magFilter:an,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Wr(a.x,a.y,Ti),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Qi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt}else W.isPointLight?(G.map=new Jm(a.x),G.map.depthTexture=new Ev(a.x,Li)):(G.map=new di(a.x,a.y),G.map.depthTexture=new Wr(a.x,a.y,Li)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Qi,this.type===Oo?(G.map.depthTexture.compareFunction=X?Fu:zu,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);const j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,v);for(let ie=0;ie<j;ie++){const Te=G.getCamera(ie);if(W.isPointLight){const be=G.camera,Ke=G.matrix,Be=W.distance||be.far;Be!==be.far&&(be.far=Be,be.updateProjectionMatrix()),pr.setFromMatrixPosition(W.matrixWorld),be.position.copy(pr),Lc.copy(be.position),Lc.add(E1[ie]),be.up.copy(w1[ie]),be.lookAt(Lc),be.updateMatrixWorld(),Ke.makeTranslation(-pr.x,-pr.y,-pr.z),Pf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pf,be.coordinateSystem,be.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(G.map),i.clear());const be=G.getViewport(ie);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),U.viewport(r)}n=G.getFrustum(ie),x(k,v,Te,W,this.type)}G.isPointLightShadow!==!0&&this.type===yr&&b(G,v),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(E,A,L)};function b(w,k){const v=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new di(a.x,a.y,{format:rs,type:Pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(k,null,v,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(k,null,v,f,_,null)}function T(w,k,v,E){let A=null;const L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=v.isPointLight===!0?c:o,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const U=A.uuid,N=k.uuid;let P=l[U];P===void 0&&(P={},l[U]=P);let F=P[N];F===void 0&&(F=A.clone(),P[N]=F,k.addEventListener("dispose",S)),A=F}if(A.visible=k.visible,A.wireframe=k.wireframe,E===yr?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:h[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=i.properties.get(A);U.light=v}return A}function x(w,k,v,E,A){if(w.visible===!1)return;if(w.layers.test(k.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===yr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const N=e.update(w),P=w.material;if(Array.isArray(P)){const F=N.groups;for(let W=0,G=F.length;W<G;W++){const Q=F[W],X=P[Q.materialIndex];if(X&&X.visible){const j=T(w,X,E,A);w.onBeforeShadow(i,w,k,v,N,j,Q),i.renderBufferDirect(v,null,N,j,w,Q),w.onAfterShadow(i,w,k,v,N,j,Q)}}}else if(P.visible){const F=T(w,P,E,A);w.onBeforeShadow(i,w,k,v,N,F,null),i.renderBufferDirect(v,null,N,F,w,null),w.onAfterShadow(i,w,k,v,N,F,null)}}const U=w.children;for(let N=0,P=U.length;N<P;N++)x(U[N],k,v,E,A)}function S(w){w.target.removeEventListener("dispose",S);for(const v in l){const E=l[v],A=w.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function k1(i,e){function t(){let I=!1;const fe=new Ct;let ee=null;const pe=new Ct(0,0,0,0);return{setMask:function(ye){ee!==ye&&!I&&(i.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){I=ye},setClear:function(ye,se,Ie,Ce,yt){yt===!0&&(ye*=Ce,se*=Ce,Ie*=Ce),fe.set(ye,se,Ie,Ce),pe.equals(fe)===!1&&(i.clearColor(ye,se,Ie,Ce),pe.copy(fe))},reset:function(){I=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,ee=null,pe=null,ye=null;return{setReversed:function(se){if(fe!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),fe=se;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(se){se?ae(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!I&&(i.depthMask(se),ee=se)},setFunc:function(se){if(fe&&(se=K0[se]),pe!==se){switch(se){case ld:i.depthFunc(i.NEVER);break;case cd:i.depthFunc(i.ALWAYS);break;case dd:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case ud:i.depthFunc(i.EQUAL);break;case hd:i.depthFunc(i.GEQUAL);break;case fd:i.depthFunc(i.GREATER);break;case pd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=se}},setLocked:function(se){I=se},setClear:function(se){ye!==se&&(ye=se,fe&&(se=1-se),i.clearDepth(se))},reset:function(){I=!1,ee=null,pe=null,ye=null,fe=!1}}}function a(){let I=!1,fe=null,ee=null,pe=null,ye=null,se=null,Ie=null,Ce=null,yt=null;return{setTest:function(ut){I||(ut?ae(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(ut){fe!==ut&&!I&&(i.stencilMask(ut),fe=ut)},setFunc:function(ut,ei,pi){(ee!==ut||pe!==ei||ye!==pi)&&(i.stencilFunc(ut,ei,pi),ee=ut,pe=ei,ye=pi)},setOp:function(ut,ei,pi){(se!==ut||Ie!==ei||Ce!==pi)&&(i.stencilOp(ut,ei,pi),se=ut,Ie=ei,Ce=pi)},setLocked:function(ut){I=ut},setClear:function(ut){yt!==ut&&(i.clearStencil(ut),yt=ut)},reset:function(){I=!1,fe=null,ee=null,pe=null,ye=null,se=null,Ie=null,Ce=null,yt=null}}}const s=new t,r=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,S=null,w=null,k=null,v=new rt(0,0,0),E=0,A=!1,L=null,U=null,N=null,P=null,F=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=Q>=2);let j=null,ie={};const Te=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ke=new Ct().fromArray(Te),Be=new Ct().fromArray(be);function $e(I,fe,ee,pe){const ye=new Uint8Array(4),se=i.createTexture();i.bindTexture(I,se),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<ee;Ie++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(fe+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return se}const Z={};Z[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),r.setFunc(Br),qe(!1),ot(Rh),ae(i.CULL_FACE),je(qi);function ae(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Se(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Oe(I,fe){return u[I]!==fe?(i.bindFramebuffer(I,fe),u[I]=fe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(I,fe){let ee=m,pe=!1;if(I){ee=f.get(fe),ee===void 0&&(ee=[],f.set(fe,ee));const ye=I.textures;if(ee.length!==ye.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=ye.length;se<Ie;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=ye.length,pe=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ee)}function We(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Lt={[Cs]:i.FUNC_ADD,[g0]:i.FUNC_SUBTRACT,[_0]:i.FUNC_REVERSE_SUBTRACT};Lt[v0]=i.MIN,Lt[y0]=i.MAX;const Fe={[x0]:i.ZERO,[b0]:i.ONE,[S0]:i.SRC_COLOR,[_m]:i.SRC_ALPHA,[A0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[E0]:i.DST_ALPHA,[M0]:i.ONE_MINUS_SRC_COLOR,[vm]:i.ONE_MINUS_SRC_ALPHA,[k0]:i.ONE_MINUS_DST_COLOR,[w0]:i.ONE_MINUS_DST_ALPHA,[R0]:i.CONSTANT_COLOR,[C0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[P0]:i.ONE_MINUS_CONSTANT_ALPHA};function je(I,fe,ee,pe,ye,se,Ie,Ce,yt,ut){if(I===qi){p===!0&&(Se(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),I!==m0){if(I!==g||ut!==A){if((b!==Cs||S!==Cs)&&(i.blendEquation(i.FUNC_ADD),b=Cs,S=Cs),ut)switch(I){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",I);break}else switch(I){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",I);break}T=null,x=null,w=null,k=null,v.set(0,0,0),E=0,g=I,A=ut}return}ye=ye||fe,se=se||ee,Ie=Ie||pe,(fe!==b||ye!==S)&&(i.blendEquationSeparate(Lt[fe],Lt[ye]),b=fe,S=ye),(ee!==T||pe!==x||se!==w||Ie!==k)&&(i.blendFuncSeparate(Fe[ee],Fe[pe],Fe[se],Fe[Ie]),T=ee,x=pe,w=se,k=Ie),(Ce.equals(v)===!1||yt!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,yt),v.copy(Ce),E=yt),g=I,A=!1}function dt(I,fe){I.side===ri?Se(i.CULL_FACE):ae(i.CULL_FACE);let ee=I.side===Mn;fe&&(ee=!ee),qe(ee),I.blending===wr&&I.transparent===!1?je(qi):je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Qt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function ot(I){I!==h0?(ae(i.CULL_FACE),I!==U&&(I===Rh?i.cullFace(i.BACK):I===f0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=I}function Nt(I){I!==N&&(G&&i.lineWidth(I),N=I)}function Qt(I,fe,ee){I?(ae(i.POLYGON_OFFSET_FILL),(P!==fe||F!==ee)&&(P=fe,F=ee,r.getReversed()&&(fe=-fe),i.polygonOffset(fe,ee))):Se(i.POLYGON_OFFSET_FILL)}function vt(I){I?ae(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function O(I){I===void 0&&(I=i.TEXTURE0+W-1),j!==I&&(i.activeTexture(I),j=I)}function R(I,fe,ee){ee===void 0&&(j===null?ee=i.TEXTURE0+W-1:ee=j);let pe=ie[ee];pe===void 0&&(pe={type:void 0,texture:void 0},ie[ee]=pe),(pe.type!==I||pe.texture!==fe)&&(j!==ee&&(i.activeTexture(ee),j=ee),i.bindTexture(I,fe||Z[I]),pe.type=I,pe.texture=fe)}function ke(){const I=ie[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function y(){try{i.texSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function z(){try{i.texSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function le(){try{i.texStorage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function de(){try{i.texStorage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function ue(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function Pe(I,fe){h[I]!==fe&&(i.pixelStorei(I,fe),h[I]=fe)}function me(I){Ke.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function he(I){Be.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function De(I,fe){let ee=l.get(fe);ee===void 0&&(ee=new WeakMap,l.set(fe,ee));let pe=ee.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(fe,I.name),ee.set(I,pe))}function Ne(I,fe){const pe=l.get(fe).get(I);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,I.__bindingPointIndex),c.set(fe,pe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},j=null,ie={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,S=null,w=null,k=null,v=new rt(0,0,0),E=0,A=!1,L=null,U=null,N=null,P=null,F=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ae,disable:Se,bindFramebuffer:Oe,drawBuffers:xe,useProgram:We,setBlending:je,setMaterial:dt,setFlipSided:qe,setCullFace:ot,setLineWidth:Nt,setPolygonOffset:Qt,setScissorTest:vt,activeTexture:O,bindTexture:R,unbindTexture:ke,compressedTexImage2D:Ge,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:Pe,getParameter:ue,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:le,texStorage3D:de,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:me,viewport:he,reset:Ve}}function A1(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):$r("canvas")}function p(C,y,z){let V=1;const K=Ge(C);if((K.width>z||K.height>z)&&(V=z/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const le=Math.floor(V*K.width),de=Math.floor(V*K.height);u===void 0&&(u=_(le,de));const J=y?_(le,de):u;return J.width=le,J.height=de,J.getContext("2d").drawImage(C,0,0,le,de),ze("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+de+")."),J}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,y,z,V,K,le=!1){if(C!==null){if(i[C]!==void 0)return i[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;V&&(de=e.get("EXT_texture_norm16"),de||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),z===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),y===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),z===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),z===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){const te=le?sl:et.getTransfer(K);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=te===ft?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),z===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(C,y){let z;return C?y===null||y===Li||y===Gr?z=i.DEPTH24_STENCIL8:y===Ti?z=i.DEPTH32F_STENCIL8:y===Hr&&(z=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Gr?z=i.DEPTH_COMPONENT24:y===Ti?z=i.DEPTH_COMPONENT32F:y===Hr&&(z=i.DEPTH_COMPONENT16),z}function w(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function k(C){const y=C.target;y.removeEventListener("dispose",k),E(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function v(C){const y=C.target;y.removeEventListener("dispose",v),L(y)}function E(C){const y=n.get(C);if(y.__webglInit===void 0)return;const z=C.source,V=f.get(z);if(V){const K=V[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(C),Object.keys(V).length===0&&f.delete(z)}n.remove(C)}function A(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const z=C.source,V=f.get(z);delete V[y.__cacheKey],r.memory.textures--}function L(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let K=0;K<y.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[V][K]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let V=0,K=z.length;V<K;V++){const le=n.get(z[V]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),r.memory.textures--),n.remove(z[V])}n.remove(C)}let U=0;function N(){U=0}function P(){return U}function F(C){U=C}function W(){const C=U;return C>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+a.maxTextures),U+=1,C}function G(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Q(C,y){const z=n.get(C);if(C.isVideoTexture&&R(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const V=C.image;if(V===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function X(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Se(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function j(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Se(z,C,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function ie(C,y){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Oe(z,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const Te={[md]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[gd]:i.MIRRORED_REPEAT},be={[Bt]:i.NEAREST,[U0]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[qa]:i.LINEAR_MIPMAP_LINEAR},Ke={[O0]:i.NEVER,[$0]:i.ALWAYS,[B0]:i.LESS,[zu]:i.LEQUAL,[H0]:i.EQUAL,[Fu]:i.GEQUAL,[G0]:i.GREATER,[V0]:i.NOTEQUAL};function Be(C,y){if(y.type===Ti&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===ec||y.magFilter===so||y.magFilter===qa||y.minFilter===an||y.minFilter===ec||y.minFilter===so||y.minFilter===qa)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Te[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Te[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Te[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,be[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bt||y.minFilter!==so&&y.minFilter!==qa||y.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",k));const V=y.source;let K=f.get(V);K===void 0&&(K={},f.set(V,K));const le=G(y);if(le!==C.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,z=!0),K[le].usedTimes++;const de=K[C.__cacheKey];de!==void 0&&(K[C.__cacheKey].usedTimes--,de.usedTimes===0&&A(y)),C.__cacheKey=le,C.__webglTexture=K[le].texture}return z}function Z(C,y,z){return Math.floor(Math.floor(C/z)/y)}function ae(C,y,z,V){const le=C.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,V,y.data);else{le.sort((Pe,me)=>Pe.start-me.start);let de=0;for(let Pe=1;Pe<le.length;Pe++){const me=le[de],he=le[Pe],De=me.start+me.count,Ne=Z(he.start,y.width,4),Ve=Z(me.start,y.width,4);he.start<=De+1&&Ne===Ve&&Z(he.start+he.count-1,y.width,4)===Ne?me.count=Math.max(me.count,he.start+he.count-me.start):(++de,le[de]=he)}le.length=de+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pe=0,me=le.length;Pe<me;Pe++){const he=le[Pe],De=Math.floor(he.start/4),Ne=Math.ceil(he.count/4),Ve=De%y.width,I=Math.floor(De/y.width),fe=Ne,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,fe,ee,z,V,y.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Se(C,y,z){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);const K=$e(C,y),le=y.source;t.bindTexture(V,C.__webglTexture,i.TEXTURE0+z);const de=n.get(le);if(le.version!==de.__version||K===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ee=et.getPrimaries(et.workingColorSpace),pe=y.colorSpace===ha?null:et.getPrimaries(y.colorSpace),ye=y.colorSpace===ha||ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let te=p(y.image,!1,a.maxTextureSize);te=ke(y,te);const ue=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type);let me=x(y.internalFormat,ue,Pe,y.normalized,y.colorSpace,y.isVideoTexture);Be(V,y);let he;const De=y.mipmaps,Ne=y.isVideoTexture!==!0,Ve=de.__version===void 0||K===!0,I=le.dataReady,fe=w(y,te);if(y.isDepthTexture)me=S(y.format===Xa,y.type),Ve&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ue,Pe,null));else if(y.isDataTexture)if(De.length>0){Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)he=De[ee],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Pe,he.data):t.texImage2D(i.TEXTURE_2D,ee,me,he.width,he.height,0,ue,Pe,he.data);y.generateMipmaps=!1}else Ne?(Ve&&t.texStorage2D(i.TEXTURE_2D,fe,me,te.width,te.height),I&&ae(y,te,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ue,Pe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,De[0].width,De[0].height,te.depth);for(let ee=0,pe=De.length;ee<pe;ee++)if(he=De[ee],y.format!==ci)if(ue!==null)if(Ne){if(I)if(y.layerUpdates.size>0){const ye=df(he.width,he.height,y.format,y.type);for(const se of y.layerUpdates){const Ie=he.data.subarray(se*ye/he.data.BYTES_PER_ELEMENT,(se+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,he.width,he.height,1,ue,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ue,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,me,he.width,he.height,te.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ue,Pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,me,he.width,he.height,te.depth,0,ue,Pe,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)he=De[ee],y.format!==ci?ue!==null?Ne?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,me,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Pe,he.data):t.texImage2D(i.TEXTURE_2D,ee,me,he.width,he.height,0,ue,Pe,he.data)}else if(y.isDataArrayTexture)if(Ne){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,te.width,te.height,te.depth),I)if(y.layerUpdates.size>0){const ee=df(te.width,te.height,y.format,y.type);for(const pe of y.layerUpdates){const ye=te.data.subarray(pe*ee/te.data.BYTES_PER_ELEMENT,(pe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,te.width,te.height,1,ue,Pe,ye)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,ue,Pe,te.data);else if(y.isData3DTexture)Ne?(Ve&&t.texStorage3D(i.TEXTURE_3D,fe,me,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,ue,Pe,te.data);else if(y.isFramebufferTexture){if(Ve)if(Ne)t.texStorage2D(i.TEXTURE_2D,fe,me,te.width,te.height);else{let ee=te.width,pe=te.height;for(let ye=0;ye<fe;ye++)t.texImage2D(i.TEXTURE_2D,ye,me,ee,pe,0,ue,Pe,null),ee>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(y),ee.onpaint=pe=>{const ye=pe.changedElements;for(const se of h)ye.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const ye=i.RGBA,se=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,se,Ie,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ne&&Ve){const ee=Ge(De[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,ee.width,ee.height)}for(let ee=0,pe=De.length;ee<pe;ee++)he=De[ee],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,Pe,he):t.texImage2D(i.TEXTURE_2D,ee,me,ue,Pe,he);y.generateMipmaps=!1}else if(Ne){if(Ve){const ee=Ge(te);t.texStorage2D(i.TEXTURE_2D,fe,me,ee.width,ee.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Pe,te);g(y)&&b(V),de.__version=le.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Oe(C,y,z){if(y.image.length!==6)return;const V=$e(C,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const le=n.get(K);if(K.version!==le.__version||V===!0){t.activeTexture(i.TEXTURE0+z);const de=et.getPrimaries(et.workingColorSpace),J=y.colorSpace===ha?null:et.getPrimaries(y.colorSpace),te=y.colorSpace===ha||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!ue&&!Pe?me[se]=p(y.image[se],!0,a.maxCubemapSize):me[se]=Pe?y.image[se].image:y.image[se],me[se]=ke(y,me[se]);const he=me[0],De=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type),Ve=x(y.internalFormat,De,Ne,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,fe=le.__version===void 0||V===!0,ee=K.dataReady;let pe=w(y,he);Be(i.TEXTURE_CUBE_MAP,y);let ye;if(ue){I&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,he.width,he.height);for(let se=0;se<6;se++){ye=me[se].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];y.format!==ci?De!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Ce.width,Ce.height,0,Ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ce.width,Ce.height,De,Ne,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Ce.width,Ce.height,0,De,Ne,Ce.data)}}}else{if(ye=y.mipmaps,I&&fe){ye.length>0&&pe++;const se=Ge(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Pe){I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,De,Ne,me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,me[se].width,me[se].height,0,De,Ne,me[se].data);for(let Ie=0;Ie<ye.length;Ie++){const yt=ye[Ie].image[se].image;I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,yt.width,yt.height,De,Ne,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,yt.width,yt.height,0,De,Ne,yt.data)}}else{I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Ne,me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,Ne,me[se]);for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,De,Ne,Ce.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,De,Ne,Ce.image[se])}}}g(y)&&b(i.TEXTURE_CUBE_MAP),le.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function xe(C,y,z,V,K,le){const de=s.convert(z.format,z.colorSpace),J=s.convert(z.type),te=x(z.internalFormat,de,J,z.normalized,z.colorSpace),ue=n.get(y),Pe=n.get(z);if(Pe.__renderTarget=y,!ue.__hasExternalTextures){const me=Math.max(1,y.width>>le),he=Math.max(1,y.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,te,me,he,y.depth,0,de,J,null):t.texImage2D(K,le,te,me,he,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),O(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Pe.__webglTexture,0,vt(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Pe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(C,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const V=y.depthTexture,K=V&&V.isDepthTexture?V.type:null,le=S(y.stencilBuffer,K),de=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;O(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(y),le,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(y),le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,C)}else{const V=y.textures;for(let K=0;K<V.length;K++){const le=V[K],de=s.convert(le.format,le.colorSpace),J=s.convert(le.type),te=x(le.internalFormat,de,J,le.normalized,le.colorSpace);O(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(y),te,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(y),te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(C,y,z){const V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Be(i.TEXTURE_CUBE_MAP,y.depthTexture);const ue=s.convert(y.depthTexture.format),Pe=s.convert(y.depthTexture.type);let me;y.depthTexture.format===Qi?me=i.DEPTH_COMPONENT24:y.depthTexture.format===Xa&&(me=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,me,y.width,y.height,0,ue,Pe,null)}}else Q(y.depthTexture,0);const le=K.__webglTexture,de=vt(y),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,te=y.depthTexture.format===Xa?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qi)O(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else if(y.depthTexture.format===Xa)O(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(C){const y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=V}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Lt(y.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Lt(y.__webglFramebuffer[0],C,0):Lt(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),We(y.__webglDepthbuffer[V],C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),We(y.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(C,y,z){const V=n.get(C);y!==void 0&&xe(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Fe(C)}function dt(C){const y=C.texture,z=n.get(C),V=n.get(y);C.addEventListener("dispose",v);const K=C.textures,le=C.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,r.memory.textures++),le){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<y.mipmaps.length;te++)z.__webglFramebuffer[J][te]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,te=K.length;J<te;J++){const ue=n.get(K[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&O(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const te=K[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ue=s.convert(te.format,te.colorSpace),Pe=s.convert(te.type),me=x(te.internalFormat,ue,Pe,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),he=vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),We(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Be(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(z.__webglFramebuffer[J][te],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(z.__webglFramebuffer[J],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let J=0,te=K.length;J<te;J++){const ue=K[J],Pe=n.get(ue);let me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Pe.__webglTexture),Be(me,ue),xe(z.__webglFramebuffer,C,ue,i.COLOR_ATTACHMENT0+J,me,0),g(ue)&&b(me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Be(J,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(z.__webglFramebuffer[te],C,y,i.COLOR_ATTACHMENT0,J,te);else xe(z.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,J,0);g(y)&&b(J),t.unbindTexture()}C.depthBuffer&&Fe(C)}function qe(C){const y=C.textures;for(let z=0,V=y.length;z<V;z++){const K=y[z];if(g(K)){const le=T(C),de=n.get(K).__webglTexture;t.bindTexture(le,de),b(le),t.unbindTexture()}}}const ot=[],Nt=[];function Qt(C){if(C.samples>0){if(O(C)===!1){const y=C.textures,z=C.width,V=C.height;let K=i.COLOR_BUFFER_BIT;const le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(C),J=y.length>1;if(J)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Pe=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,z,V,0,0,z,V,K,i.NEAREST),c===!0&&(ot.length=0,Nt.length=0,ot.push(i.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ot.push(le),Nt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Pe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(C){return Math.min(a.maxSamples,C.samples)}function O(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function R(C){const y=r.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function ke(C,y){const z=C.colorSpace,V=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==al&&z!==ha&&(et.getTransfer(z)===ft?(V!==ci||K!==Un)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",z)),y}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=N,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=ie,this.rebindTextures=je,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R1(i,e){function t(n,a=ha){let s;const r=et.getTransfer(a);if(n===Un)return i.UNSIGNED_BYTE;if(n===Pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===km)return i.BYTE;if(n===Am)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===Lu)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Lm)return i.ALPHA;if(n===Pm)return i.RGB;if(n===ci)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===Xa)return i.DEPTH_STENCIL;if(n===Dm)return i.RED;if(n===Iu)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===Bo||n===Ho||n===Go||n===Vo)if(r===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_d||n===vd||n===yd||n===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bd||n===Sd||n===Md||n===Ed||n===wd||n===nl||n===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bd||n===Sd)return r===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Md)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ed)return s.COMPRESSED_R11_EAC;if(n===wd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===nl)return s.COMPRESSED_RG11_EAC;if(n===Td)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kd||n===Ad||n===Rd||n===Cd||n===Ld||n===Pd||n===Dd||n===Id||n===Ud||n===Nd||n===zd||n===Fd||n===Od||n===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ad)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ld)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Id)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ud)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Od)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bd)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hd||n===Gd||n===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Hd)return r===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$d||n===Wd||n===il||n===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$d)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L1=`
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

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:C1,fragmentShader:L1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends ds{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new P1,g={},b=t.getContextAttributes();let T=null,x=null;const S=[],w=[],k=new it;let v=null,E=null;const A=new Yn;A.viewport=new Ct;const L=new Yn;L.viewport=new Ct;const U=[A,L],N=new Ov;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=S[Z];return ae===void 0&&(ae=new lc,S[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=S[Z];return ae===void 0&&(ae=new lc,S[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=S[Z];return ae===void 0&&(ae=new lc,S[Z]=ae),ae.getHandSpace()};function W(Z){const ae=w.indexOf(Z.inputSource);if(ae===-1)return;const Se=S[ae];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,l||r),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<S.length;Z++){const ae=w[Z];ae!==null&&(w[Z]=null,S[Z].disconnect(ae))}P=null,F=null,p.reset();for(const Z in g)delete g[Z];if(e.setRenderTarget(T),f=null,u=null,h=null,a=null,x=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(k.width,k.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",G),a.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(k),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Oe=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=b.stencil?Xa:Qi,Oe=b.stencil?Gr:Li);const We={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(We),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new di(u.textureWidth,u.textureHeight,{format:ci,type:Un,depthTexture:new Wr(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new di(f.framebufferWidth,f.framebufferHeight,{format:ci,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),$e.setContext(a),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Z){for(let ae=0;ae<Z.removed.length;ae++){const Se=Z.removed[ae],Oe=w.indexOf(Se);Oe>=0&&(w[Oe]=null,S[Oe].disconnect(Se))}for(let ae=0;ae<Z.added.length;ae++){const Se=Z.added[ae];let Oe=w.indexOf(Se);if(Oe===-1){for(let We=0;We<S.length;We++)if(We>=w.length){w.push(Se),Oe=We;break}else if(w[We]===null){w[We]=Se,Oe=We;break}if(Oe===-1)break}const xe=S[Oe];xe&&xe.connect(Se)}}const X=new $,j=new $;function ie(Z,ae,Se){X.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const Oe=X.distanceTo(j),xe=ae.projectionMatrix.elements,We=Se.projectionMatrix.elements,Lt=xe[14]/(xe[10]-1),Fe=xe[14]/(xe[10]+1),je=(xe[9]+1)/xe[5],dt=(xe[9]-1)/xe[5],qe=(xe[8]-1)/xe[0],ot=(We[8]+1)/We[0],Nt=Lt*qe,Qt=Lt*ot,vt=Oe/(-qe+ot),O=vt*-qe;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(O),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const R=Lt+vt,ke=Fe+vt,Ge=Nt-O,C=Qt+(Oe-O),y=je*Fe/ke*R,z=dt*Fe/ke*R;Z.projectionMatrix.makePerspective(Ge,C,y,z,R,ke),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Te(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ae=Z.near,Se=Z.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),N.near=L.near=A.near=ae,N.far=L.far=A.far=Se,(P!==N.near||F!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=Z.layers.mask|6,A.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Oe=Z.parent,xe=N.cameras;Te(N,Oe);for(let We=0;We<xe.length;We++)Te(xe[We],Oe);xe.length===2?ie(N,A,L):N.projectionMatrix.copy(A.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),be(Z,N,Oe)};function be(Z,ae,Se){Se===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Z){return g[Z]};let Ke=null;function Be(Z,ae){if(d=ae.getViewerPose(l||r),m=ae,d!==null){const Se=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Oe=!1;Se.length!==N.cameras.length&&(N.cameras.length=0,Oe=!0);for(let Fe=0;Fe<Se.length;Fe++){const je=Se[Fe];let dt=null;if(f!==null)dt=f.getViewport(je);else{const ot=h.getViewSubImage(u,je);dt=ot.viewport,Fe===0&&(e.setRenderTargetTextures(x,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(x))}let qe=U[Fe];qe===void 0&&(qe=new Yn,qe.layers.enable(Fe),qe.viewport=new Ct,U[Fe]=qe),qe.matrix.fromArray(je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(dt.x,dt.y,dt.width,dt.height),Fe===0&&(N.matrix.copy(qe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Oe===!0&&N.cameras.push(qe)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Fe=h.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,a.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<Se.length;Fe++){const je=Se[Fe].camera;if(je){let dt=g[je];dt||(dt=new Vm,g[je]=dt);const qe=h.getCameraImage(je);dt.sourceTexture=qe}}}}for(let Se=0;Se<S.length;Se++){const Oe=w[Se],xe=S[Se];Oe!==null&&xe!==void 0&&xe.update(Oe,ae,l||r)}Ke&&Ke(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const $e=new Km;$e.setAnimationLoop(Be),this.setAnimationLoop=function(Z){Ke=Z},this.dispose=function(){}}}const I1=new Et,ng=new He;ng.set(-1,0,0,0,1,0,0,0,1);function U1(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,$m(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,b,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,x=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ng),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function N1(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const w=S.program;n.uniformBlockBinding(x,w)}function l(x,S){let w=a[x.id];w===void 0&&(p(x),w=d(x),a[x.id]=w,x.addEventListener("dispose",b));const k=S.program;n.updateUBOMapping(x,k);const v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function d(x){const S=h();x.__bindingPointIndex=S;const w=i.createBuffer(),k=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,k,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function h(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=a[x.id],w=x.uniforms,k=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,E=w.length;v<E;v++){const A=w[v];if(Array.isArray(A))for(let L=0,U=A.length;L<U;L++)f(A[L],v,L,k);else f(A,v,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,w,k){if(_(x,S,w,k)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let L=0;L<E.length;L++){const U=E[L],N=g(U);m(U,x.__data,A),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function _(x,S,w,k){const v=x.value,E=S+"_"+w;if(k[E]===void 0)return typeof v=="number"||typeof v=="boolean"?k[E]=v:ArrayBuffer.isView(v)?k[E]=v.slice():k[E]=v.clone(),!0;{const A=k[E];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return k[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(x){const S=x.uniforms;let w=0;const k=16;for(let E=0,A=S.length;E<A;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let U=0,N=L.length;U<N;U++){const P=L[U],F=Array.isArray(P.value)?P.value:[P.value];for(let W=0,G=F.length;W<G;W++){const Q=F[W],X=g(Q),j=w%k,ie=j%X.boundary,Te=j+ie;w+=ie,Te!==0&&k-Te<X.storage&&(w+=k-Te),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=X.storage}}}const v=w%k;return v>0&&(w+=k-v),x.__size=w,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){const S=x.target;S.removeEventListener("dispose",b);const w=r.indexOf(S.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function T(){for(const x in a)i.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:c,update:l,dispose:T}}const z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function F1(){return _i===null&&(_i=new xv(z1,16,16,rs,Pi),_i.name="DFG_LUT",_i.minFilter=an,_i.magFilter=an,_i.wrapS=$i,_i.wrapT=$i,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class O1{constructor(e={}){const{canvas:t=X0(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=f,p=new Set([Nu,Uu,Iu]),g=new Set([Un,Li,Hr,Gr,Pu,Du]),b=new Uint32Array(4),T=new Int32Array(4),x=new $;let S=null,w=null;const k=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,U=null,N=null,P=null,F=null;this._outputColorSpace=Ln;let W=0,G=0,Q=null,X=-1,j=null;const ie=new Ct,Te=new Ct;let be=null;const Ke=new rt(0);let Be=0,$e=t.width,Z=t.height,ae=1,Se=null,Oe=null;const xe=new Ct(0,0,$e,Z),We=new Ct(0,0,$e,Z);let Lt=!1;const Fe=new Gu;let je=!1,dt=!1;const qe=new Et,ot=new $,Nt=new Ct,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function O(){return Q===null?ae:1}let R=n;function ke(M,D){return t.getContext(M,D)}let Ge,C,y,z,V,K,le,de,J,te,ue,Pe,me,he,De,Ne,Ve,I,fe,ee,pe,ye,se;try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",ei,!1),R===null){const D="webgl2";if(R=ke(D,M),R===null)throw ke(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(M){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),ct("WebGLRenderer: "+M.message),M}function Ie(){Ge=new Fb(R),Ge.init(),pe=new R1(R,Ge),C=new Ab(R,Ge,e,pe),y=new k1(R,Ge),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),N=R.createFramebuffer(),P=R.createFramebuffer(),F=R.createFramebuffer(),z=new Hb(R),V=new f1,K=new A1(R,Ge,y,V,C,pe,z),le=new zb(A),de=new Vv(R),ye=new Tb(R,de),J=new Ob(R,de,z,ye),te=new Vb(R,J,de,ye,z),I=new Gb(R,C,K),De=new Rb(V),ue=new h1(A,le,Ge,C,ye,De),Pe=new U1(A,V),me=new m1,he=new b1(Ge),Ve=new wb(A,le,y,te,m,c),Ne=new T1(A,te,C),se=new N1(R,z,C,y),fe=new kb(R,Ge,z),ee=new Bb(R,Ge,z),z.programs=ue.programs,A.capabilities=C,A.extensions=Ge,A.properties=V,A.renderLists=me,A.shadowMap=Ne,A.state=y,A.info=z}_!==Un&&(E=new Wb(_,t.width,t.height,o,a,s));const Ce=new D1(A,R);this.xr=Ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize($e,Z,!1))},this.getSize=function(M){return M.set($e,Z)},this.setSize=function(M,D,q=!0){if(Ce.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=M,Z=D,t.width=Math.floor(M*ae),t.height=Math.floor(D*ae),q===!0&&(t.style.width=M+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set($e*ae,Z*ae).floor()},this.setDrawingBufferSize=function(M,D,q){$e=M,Z=D,ae=q,t.width=Math.floor(M*q),t.height=Math.floor(D*q),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(_===Un){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(xe)},this.setViewport=function(M,D,q,B){M.isVector4?xe.set(M.x,M.y,M.z,M.w):xe.set(M,D,q,B),y.viewport(ie.copy(xe).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(We)},this.setScissor=function(M,D,q,B){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,D,q,B),y.scissor(Te.copy(We).multiplyScalar(ae).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(M){y.setScissorTest(Lt=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,q=!0){let B=0;if(M){let H=!1;if(Q!==null){const ve=Q.texture.format;H=p.has(ve)}if(H){const ve=Q.texture.type,we=g.has(ve),_e=Ve.getClearColor(),Ae=Ve.getClearAlpha(),Le=_e.r,Xe=_e.g,Je=_e.b;we?(b[0]=Le,b[1]=Xe,b[2]=Je,b[3]=Ae,R.clearBufferuiv(R.COLOR,0,b)):(T[0]=Le,T[1]=Xe,T[2]=Je,T[3]=Ae,R.clearBufferiv(R.COLOR,0,T))}else B|=R.COLOR_BUFFER_BIT}D&&(B|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Ve.dispose(),me.dispose(),he.dispose(),V.dispose(),le.dispose(),te.dispose(),ye.dispose(),se.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",eh),Ce.removeEventListener("sessionend",th),La.stop()};function yt(M){M.preventDefault(),Uh("WebGLRenderer: Context Lost."),L=!0}function ut(){Uh("WebGLRenderer: Context Restored."),L=!1;const M=z.autoReset,D=Ne.enabled,q=Ne.autoUpdate,B=Ne.needsUpdate,H=Ne.type;Ie(),z.autoReset=M,Ne.enabled=D,Ne.autoUpdate=q,Ne.needsUpdate=B,Ne.type=H}function ei(M){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pi(M){const D=M.target;D.removeEventListener("dispose",pi),Ng(D)}function Ng(M){zg(M),V.remove(M)}function zg(M){const D=V.get(M).programs;D!==void 0&&(D.forEach(function(q){ue.releaseProgram(q)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,q,B,H,ve){D===null&&(D=Qt);const we=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=Bg(M,D,q,B,H);y.setMaterial(B,we);let Ae=q.index,Le=1;if(B.wireframe===!0){if(Ae=J.getWireframeAttribute(q),Ae===void 0)return;Le=2}const Xe=q.drawRange,Je=q.attributes.position;let Re=Xe.start*Le,ht=(Xe.start+Xe.count)*Le;ve!==null&&(Re=Math.max(Re,ve.start*Le),ht=Math.min(ht,(ve.start+ve.count)*Le)),Ae!==null?(Re=Math.max(Re,0),ht=Math.min(ht,Ae.count)):Je!=null&&(Re=Math.max(Re,0),ht=Math.min(ht,Je.count));const zt=ht-Re;if(zt<0||zt===1/0)return;ye.setup(H,B,_e,q,Ae);let Mt,mt=fe;if(Ae!==null&&(Mt=de.get(Ae),mt=ee,mt.setIndex(Mt)),H.isMesh)B.wireframe===!0?(y.setLineWidth(B.wireframeLinewidth*O()),mt.setMode(R.LINES)):mt.setMode(R.TRIANGLES);else if(H.isLine){let jt=B.linewidth;jt===void 0&&(jt=1),y.setLineWidth(jt*O()),H.isLineSegments?mt.setMode(R.LINES):H.isLineLoop?mt.setMode(R.LINE_LOOP):mt.setMode(R.LINE_STRIP)}else H.isPoints?mt.setMode(R.POINTS):H.isSprite&&mt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const jt=H._multiDrawStarts,Me=H._multiDrawCounts,on=H._multiDrawCount,lt=Ae?de.get(Ae).bytesPerElement:1,Gn=V.get(B).currentProgram.getUniforms();for(let mi=0;mi<on;mi++)Gn.setValue(R,"_gl_DrawID",mi),mt.render(jt[mi]/lt,Me[mi])}else if(H.isInstancedMesh)mt.renderInstances(Re,zt,H.count);else if(q.isInstancedBufferGeometry){const jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,jt);mt.renderInstances(Re,zt,Me)}else mt.render(Re,zt)};function ju(M,D,q,B){U!==null&&M.isNodeMaterial&&U.setObject(B,M),je===!0&&De.setState(M,q,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=Mn,M.needsUpdate=!0,io(M,D,B),M.side=as,M.needsUpdate=!0,io(M,D,B),M.side=ri):io(M,D,B)}this.compile=function(M,D,q=null){q===null&&(q=M),U!==null&&U.renderStart(M,D,q),w=he.get(q),w.init(D),v.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,je=De.init(this.clippingPlanes,dt),je===!0&&De.setGlobalState(this.clippingPlanes,D),U!==null&&Ne.render(w.state.shadowsArray,q,D);const B=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const _e=ve[we];ju(_e,q,D,H),B.add(_e)}else ju(ve,q,D,H),B.add(ve)}),w=v.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(M,D,q=null){const B=this.compile(M,D,q);return new Promise(H=>{function ve(){if(B.forEach(function(we){const Ae=V.get(we).currentProgram;(Ae===void 0||Ae.isReady())&&B.delete(we)}),B.size===0){H(M);return}setTimeout(ve,10)}Ge.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Gl=null;function Fg(M){Gl&&Gl(M)}function eh(){La.stop()}function th(){La.start()}const La=new Km;La.setAnimationLoop(Fg),typeof self<"u"&&La.setContext(self),this.setAnimationLoop=function(M){Gl=M,Ce.setAnimationLoop(M),M===null?La.stop():La.start()},Ce.addEventListener("sessionstart",eh),Ce.addEventListener("sessionend",th),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,D);const q=Ce.enabled===!0&&Ce.isPresenting===!0,B=E!==null&&(Q===null||q)&&E.begin(A,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(D),D=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,D,Q),w=he.get(M,v.length),w.init(D),w.state.textureUnits=K.getTextureUnits(),v.push(w),qe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Fe.setFromProjectionMatrix(qe,ki,D.reversedDepth),dt=this.localClippingEnabled,je=De.init(this.clippingPlanes,dt),S=me.get(M,k.length),S.init(),k.push(S),Ce.enabled===!0&&Ce.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&Vl(we,D,-1/0,A.sortObjects)}Vl(M,D,0,A.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Se,Oe),vt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,vt&&Ve.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&De.beginShadows();const H=w.state.shadowsArray;if(Ne.render(H,M,D),je===!0&&De.endShadows(),(B&&E.hasRenderPass())===!1){const we=S.opaque,_e=S.transmissive;if(w.setupLights(),D.isArrayCamera){const Ae=D.cameras;if(_e.length>0)for(let Le=0,Xe=Ae.length;Le<Xe;Le++){const Je=Ae[Le];ih(we,_e,M,Je)}vt&&Ve.render(M);for(let Le=0,Xe=Ae.length;Le<Xe;Le++){const Je=Ae[Le];nh(S,M,Je,Je.viewport)}}else _e.length>0&&ih(we,_e,M,D),vt&&Ve.render(M),nh(S,M,D)}Q!==null&&G===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),B&&E.end(A),M.isScene===!0&&M.onAfterRender(A,M,D),ye.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(w=v[v.length-1],K.setTextureUnits(w.state.textureUnits),je===!0&&De.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,k.pop(),k.length>0?S=k[k.length-1]:S=null,U!==null&&U.renderEnd()};function Vl(M,D,q,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Fe)){B&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qe);const we=te.update(M),_e=M.material;_e.visible&&S.push(M,we,_e,q,Nt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Fe))){const we=te.update(M),_e=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Nt.copy(we.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(qe)),Array.isArray(_e)){const Ae=we.groups;for(let Le=0,Xe=Ae.length;Le<Xe;Le++){const Je=Ae[Le],Re=_e[Je.materialIndex];Re&&Re.visible&&S.push(M,we,Re,q,Nt.z,Je,D)}}else _e.visible&&S.push(M,we,_e,q,Nt.z,null,D)}}const ve=M.children;for(let we=0,_e=ve.length;we<_e;we++)Vl(ve[we],D,q,B)}function nh(M,D,q,B){const{opaque:H,transmissive:ve,transparent:we}=M;w.setupLightsView(q),je===!0&&De.setGlobalState(A.clippingPlanes,q),B&&y.viewport(ie.copy(B)),H.length>0&&no(H,D,q),ve.length>0&&no(ve,D,q),we.length>0&&no(we,D,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ih(M,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Re=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new di(1,1,{generateMipmaps:!0,type:Re?Pi:Un,minFilter:qa,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ve=w.state.transmissionRenderTarget[B.id],we=B.viewport||ie;ve.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);const _e=A.getRenderTarget(),Ae=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor(Ke),Be=A.getClearAlpha(),Be<1&&A.setClearColor(16777215,.5),A.clear(),vt&&Ve.render(q);const Xe=A.toneMapping;A.toneMapping=Ri;const Je=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),je===!0&&De.setGlobalState(A.clippingPlanes,B),no(M,q,B),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ht=0,zt=D.length;ht<zt;ht++){const Mt=D[ht],{object:mt,geometry:jt,material:Me,group:on}=Mt;if(Me.side===ri&&mt.layers.test(B.layers)){const lt=Me.side;Me.side=Mn,Me.needsUpdate=!0,ah(mt,q,B,jt,Me,on),Me.side=lt,Me.needsUpdate=!0,Re=!0}}Re===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}A.setRenderTarget(_e,Ae,Le),A.setClearColor(Ke,Be),Je!==void 0&&(B.viewport=Je),A.toneMapping=Xe}function no(M,D,q){const B=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ve=M.length;H<ve;H++){const we=M[H],{object:_e,geometry:Ae,group:Le}=we;let Xe=we.material;Xe.allowOverride===!0&&B!==null&&(Xe=B),_e.layers.test(q.layers)&&ah(_e,D,q,Ae,Xe,Le)}}function ah(M,D,q,B,H,ve){U!==null&&H.isNodeMaterial&&U.setObject(M,H),M.onBeforeRender(A,D,q,B,H,ve),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(A,D,q,B,M,ve),H.transparent===!0&&H.side===ri&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,A.renderBufferDirect(q,D,B,H,M,ve),H.side=as,H.needsUpdate=!0,A.renderBufferDirect(q,D,B,H,M,ve),H.side=ri):A.renderBufferDirect(q,D,B,H,M,ve),M.onAfterRender(A,D,q,B,H,ve)}function io(M,D,q){D.isScene!==!0&&(D=Qt);const B=V.get(M),H=w.state.lights,ve=w.state.shadowsArray,we=H.state.version,_e=ue.getParameters(M,H.state,ve,D,q,w.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(_e);let Le=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const Xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=le.get(M.envMap||B.environment,Xe),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",pi),Le=new Map,B.programs=Le);let Je=Le.get(Ae);if(Je!==void 0){if(B.currentProgram===Je&&B.lightsStateVersion===we)return rh(M,_e),Je}else _e.uniforms=ue.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,q,_e),M.onBeforeCompile(_e,A),Je=ue.acquireProgram(_e,Ae),Le.set(Ae,Je),B.uniforms=_e.uniforms;const Re=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=De.uniform),rh(M,_e),B.needsLights=Gg(M),B.lightsStateVersion=we,B.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.sunLights.value=H.state.sun,Re.sunLightShadows.value=H.state.sunShadow,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.sunShadowMatrix.value=H.state.sunShadowMatrix,Re.sunShadowCascade.value=H.state.sunShadowCascade,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=Je,B.uniformsList=null,Je}function sh(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Wo.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function rh(M,D){const q=V.get(M);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Og(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let q=0,B=M.length;q<B;q++){const H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function Bg(M,D,q,B,H){D.isScene!==!0&&(D=Qt),K.resetTextureUnits();const ve=D.fog,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,_e=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:et.workingColorSpace,Ae=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Le=le.get(B.envMap||we,Ae),Xe=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,zt=!!q.morphAttributes.color;let Mt=Ri;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Mt=A.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,jt=mt!==void 0?mt.length:0,Me=V.get(B),on=w.state.lights;if(je===!0&&(dt===!0||M!==j)){const xt=M===j&&B.id===X;De.setState(B,M,xt)}let lt=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==on.state.version||Me.outputColorSpace!==_e||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==Le||B.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==Xe||Me.vertexTangents!==Je||Me.morphTargets!==Re||Me.morphNormals!==ht||Me.morphColors!==zt||Me.toneMapping!==Mt||Me.morphTargetsCount!==jt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Me.__version=B.version);let Gn=Me.currentProgram;lt===!0&&(Gn=io(B,D,H),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Gn,Me));let mi=!1,ea=!1,hs=!1;const pt=Gn.getUniforms(),It=Me.uniforms;if(y.useProgram(Gn.program)&&(mi=!0,ea=!0,hs=!0),B.id!==X&&(X=B.id,ea=!0),Me.needsLights){const xt=Og(w.state.lightProbeGridArray,H);Me.lightProbeGrid!==xt&&(Me.lightProbeGrid=xt,ea=!0)}if(mi||j!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",M.projectionMatrix),pt.setValue(R,"viewMatrix",M.matrixWorldInverse);const na=pt.map.cameraPosition;na!==void 0&&na.setValue(R,ot.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,ea=!0,hs=!0)}if(Me.needsLights&&(on.state.sunShadowMap.length>0&&pt.setValue(R,"sunShadowMap",on.state.sunShadowMap,K),on.state.directionalShadowMap.length>0&&pt.setValue(R,"directionalShadowMap",on.state.directionalShadowMap,K),on.state.spotShadowMap.length>0&&pt.setValue(R,"spotShadowMap",on.state.spotShadowMap,K),on.state.pointShadowMap.length>0&&pt.setValue(R,"pointShadowMap",on.state.pointShadowMap,K)),H.isSkinnedMesh){pt.setOptional(R,H,"bindMatrix"),pt.setOptional(R,H,"bindMatrixInverse");const xt=H.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(R,"boneTexture",xt.boneTexture,K))}H.isBatchedMesh&&(pt.setOptional(R,H,"batchingTexture"),pt.setValue(R,"batchingTexture",H._matricesTexture,K),pt.setOptional(R,H,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",H._indirectTexture,K),pt.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",H._colorsTexture,K));const ta=q.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&I.update(H,q,Gn),(ea||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,pt.setValue(R,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(It.envMapIntensity.value=D.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=F1()),ea){if(pt.setValue(R,"toneMappingExposure",A.toneMappingExposure),Me.needsLights&&Hg(It,hs),ve&&B.fog===!0&&Pe.refreshFogUniforms(It,ve),Pe.refreshMaterialUniforms(It,B,ae,Z,w.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.lightProbeGrid){const xt=Me.lightProbeGrid;It.probesSH.value=xt.texture,It.probesMin.value.copy(xt.boundingBox.min),It.probesMax.value.copy(xt.boundingBox.max),It.probesResolution.value.copy(xt.resolution)}Wo.upload(R,sh(Me),It,K)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Wo.upload(R,sh(Me),It,K),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(R,"center",H.center),pt.setValue(R,"modelViewMatrix",H.modelViewMatrix),pt.setValue(R,"normalMatrix",H.normalMatrix),pt.setValue(R,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const xt=B.uniformsGroups;for(let na=0,fs=xt.length;na<fs;na++){const lh=xt[na];se.update(lh,Gn),se.bind(lh,Gn)}}return Gn}function Hg(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Gg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,D,q){const B=V.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=D,V.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const q=V.get(M);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,q=0){Q=M,W=D,G=q;let B=null,H=!1,ve=!1;if(M){const _e=V.get(M);if(_e.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(R.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(M.viewport),Te.copy(M.scissor),be=M.scissorTest,y.viewport(ie),y.scissor(Te),y.setScissorTest(be),X=-1;return}else if(_e.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(_e.__hasExternalTextures)K.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Xe=M.depthTexture;if(_e.__boundDepthTexture!==Xe){if(Xe!==null&&V.has(Xe)&&(M.width!==Xe.image.width||M.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Le=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?B=Le[D][q]:B=Le[D],H=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[q]:B=Le,ie.copy(M.viewport),Te.copy(M.scissor),be=M.scissorTest}else ie.copy(xe).multiplyScalar(ae).floor(),Te.copy(We).multiplyScalar(ae).floor(),be=Lt;if(q!==0&&(B=N),y.bindFramebuffer(R.FRAMEBUFFER,B)&&y.drawBuffers(M,B),y.viewport(ie),y.scissor(Te),y.setScissorTest(be),H){const _e=V.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,q)}else if(ve){const _e=D;for(let Ae=0;Ae<M.textures.length;Ae++){const Le=V.get(M.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Le.__webglTexture,q,_e)}}else if(M!==null&&q!==0){const _e=V.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_e.__webglTexture,q)}X=-1};function oh(M){const D=V.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=C.textureFormatReadable(M.format),D.__typeReadable=C.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,q,B,H,ve,we,_e=0){if(!(M&&M.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){y.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const Le=M.textures[_e],Xe=Le.format,Je=Le.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e);const Re=oh(Le);if(Re.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&q>=0&&q<=M.height-H&&R.readPixels(D,q,B,H,pe.convert(Xe),pe.convert(Je),ve)}finally{const Le=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,D,q,B,H,ve,we,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(D>=0&&D<=M.width-B&&q>=0&&q<=M.height-H){y.bindFramebuffer(R.FRAMEBUFFER,Ae);const Le=M.textures[_e],Xe=Le.format,Je=Le.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e);const Re=oh(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ht),R.bufferData(R.PIXEL_PACK_BUFFER,ve.byteLength,R.STREAM_READ),R.readPixels(D,q,B,H,pe.convert(Xe),pe.convert(Je),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);const zt=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(R.FRAMEBUFFER,zt);const Mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Y0(R,Mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ht),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ve),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(ht),R.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,q=0){const B=Math.pow(2,-q),H=Math.floor(M.image.width*B),ve=Math.floor(M.image.height*B),we=D!==null?D.x:0,_e=D!==null?D.y:0;K.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,we,_e,H,ve),y.unbindTexture()},this.copyTextureToTexture=function(M,D,q=null,B=null,H=0,ve=0){let we,_e,Ae,Le,Xe,Je,Re,ht,zt;const Mt=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(q!==null)we=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,Xe=q.min.y,Je=q.isBox3?q.min.z:0;else{const It=Math.pow(2,-H);we=Math.floor(Mt.width*It),_e=Math.floor(Mt.height*It),M.isDataArrayTexture?Ae=Mt.depth:M.isData3DTexture?Ae=Math.floor(Mt.depth*It):Ae=1,Le=0,Xe=0,Je=0}B!==null?(Re=B.x,ht=B.y,zt=B.z):(Re=0,ht=0,zt=0);const mt=pe.convert(D.format),jt=pe.convert(D.type);let Me;D.isData3DTexture?(K.setTexture3D(D,0),Me=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),Me=R.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),Me=R.TEXTURE_2D),y.activeTexture(R.TEXTURE0),y.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const on=y.getParameter(R.UNPACK_ROW_LENGTH),lt=y.getParameter(R.UNPACK_IMAGE_HEIGHT),Gn=y.getParameter(R.UNPACK_SKIP_PIXELS),mi=y.getParameter(R.UNPACK_SKIP_ROWS),ea=y.getParameter(R.UNPACK_SKIP_IMAGES);y.pixelStorei(R.UNPACK_ROW_LENGTH,Mt.width),y.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt.height),y.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),y.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),y.pixelStorei(R.UNPACK_SKIP_IMAGES,Je);const hs=M.isDataArrayTexture||M.isData3DTexture,pt=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const It=V.get(M),ta=V.get(D),xt=V.get(It.__renderTarget),na=V.get(ta.__renderTarget);y.bindFramebuffer(R.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(R.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let fs=0;fs<Ae;fs++)hs&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,Je+fs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(D).__webglTexture,ve,zt+fs)),R.blitFramebuffer(Le,Xe,we,_e,Re,ht,we,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);y.bindFramebuffer(R.READ_FRAMEBUFFER,null),y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){const It=V.get(M),ta=V.get(D);y.bindFramebuffer(R.READ_FRAMEBUFFER,P),y.bindFramebuffer(R.DRAW_FRAMEBUFFER,F);for(let xt=0;xt<Ae;xt++)hs?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,It.__webglTexture,H,Je+xt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,It.__webglTexture,H),pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ta.__webglTexture,ve,zt+xt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ta.__webglTexture,ve),H!==0?R.blitFramebuffer(Le,Xe,we,_e,Re,ht,we,_e,R.COLOR_BUFFER_BIT,R.NEAREST):pt?R.copyTexSubImage3D(Me,ve,Re,ht,zt+xt,Le,Xe,we,_e):R.copyTexSubImage2D(Me,ve,Re,ht,Le,Xe,we,_e);y.bindFramebuffer(R.READ_FRAMEBUFFER,null),y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Me,ve,Re,ht,zt,we,_e,Ae,mt,jt,Mt.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(Me,ve,Re,ht,zt,we,_e,Ae,mt,Mt.data):R.texSubImage3D(Me,ve,Re,ht,zt,we,_e,Ae,mt,jt,Mt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ve,Re,ht,we,_e,mt,jt,Mt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ve,Re,ht,Mt.width,Mt.height,mt,Mt.data):R.texSubImage2D(R.TEXTURE_2D,ve,Re,ht,we,_e,mt,jt,Mt);y.pixelStorei(R.UNPACK_ROW_LENGTH,on),y.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(R.UNPACK_SKIP_PIXELS,Gn),y.pixelStorei(R.UNPACK_SKIP_ROWS,mi),y.pixelStorei(R.UNPACK_SKIP_IMAGES,ea),ve===0&&D.generateMipmaps&&R.generateMipmap(Me),y.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){W=0,G=0,Q=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const B1=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],Qd=["pitch","yaw","roll","bend","x","y","z"];function qo(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function ig(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function H1(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:ig(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const s=qo(e.loopBas);s!==null&&s>=0&&(a.loopBas=s);const r=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of r){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of B1){const h=c[d];if(!h||typeof h!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const m of Qd){const _=qo(h[m]);_!==null&&(u[m]||(u[m]=[]),u[m].push({t:l,v:_,easing:String(c.easing||"LINEAR").toUpperCase()}))}const f=qo(h.turn);f!==null&&f!==0&&(o[d]=(o[d]||0)+f*360,u.turn||(u.turn=[]),u.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&$1(a),a}const G1={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function V1(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function $1(i){for(const[e,t]of Object.entries(G1)){const n=i.kemikler.get(e);if(!n)continue;let a=0,s=0;for(const r of["x","y"]){const o=n[r];if(!o||o.length===0)continue;a++;const c=t[r==="x"?0:1];Math.abs(V1(o.map(l=>l.v))-c)<=2&&s++}a===0||s!==a||["x","y","z"].forEach((r,o)=>{const c=n[r];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function W1(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:ig(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const r of Object.keys(s)){const o=s[r];if(!o||typeof o!="object")continue;const c={},l=(d,h,u)=>{if(!d)return;const f=[],m=(_,p)=>{const g=qo(p);g!==null&&f.push({t:_,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;m(p,Array.isArray(_?.vector)?_.vector[h]:void 0)}else Array.isArray(d.vector)?m(0,d.vector[h]):typeof d=="number"&&m(0,d);f.length&&(c[u]=f)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(r,c)}return a}function q1(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return H1(e);if(e?.animations)return W1(e);throw new Error("bilinmeyen emote formatı")}function X1(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Df(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],s=a.t-n.t,r=s<=0?1:(e-n.t)/s;return n.v+(a.v-n.v)*X1(a.easing)(r)}function ag(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const If={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:ag(),kokDon:[0,0,0],kokKonum:[0,0,0]},sg={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},Y1=sg,K1={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Uf(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const f=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%f}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:ag(),kokDon:[0,0,0],kokKonum:[0,0,0]},r=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(f,m,_)=>{f[m==="x"?0:m==="y"?1:2]=_};for(const[f,m]of i.kemikler){if(a&&f==="body"){for(const g of Qd){const b=Df(m[g],n);b!==null&&(g==="pitch"?s.kokDon[0]=b:g==="yaw"?s.kokDon[1]=b:g==="roll"?s.kokDon[2]=-b:g==="bend"?s.bend[4]=b:(g==="x"||g==="y"||g==="z")&&d(l,g,b))}continue}const _=sg[f],p=_!==void 0?s[r[_]]:null;for(const g of Qd){const b=Df(m[g],n);if(b!==null){if(p){if(g==="pitch")p[0]=b;else if(g==="yaw")p[1]=b;else if(g==="roll")p[2]=a?-b:b;else if(g==="x"||g==="y"||g==="z"){const T=Y1[f];T!==void 0&&d(c[T],g,b)}}if(g==="bend"){const T=K1[f];T!==void 0&&(s.bend[T]+=b)}}}}const h=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let f=0;f<6;f++){const m=c[f];s.konum[f]=[m[0]??0,m[1]??0,-(m[2]??0)]}return s.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],s}const u=[1,0,1,1,0,0];for(let f=0;f<6;f++){const m=c[f],_=s.konum[f];for(let p=0;p<3;p++){if(m[p]===void 0){_[p]=0;continue}let g=m[p];p===1&&u[f]&&(g+=24),_[p]=g-h[f][p]}}return s}const Ee=1/24,_a=64,va=32,Nf=.08;function Pn(i,e,t,n,a,s,r=!1){const o=i.attributes.uv,c=e*4,l=r?s:n,d=r?n:s;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function qr(i){i.magFilter=Bt,i.minFilter=Bt,i.colorSpace=Ln}function rg(i,e=!1){return i?new ll({map:i,transparent:e,alphaTest:e?.01:0}):new ll({color:5924466})}function zf(i,e,t=!1){const n=new ji(i.w*Ee,i.h*Ee,i.d*Ee),{u:a,v:s,w:r,h:o,d:c}=i;return e&&(Pn(n,0,a+c+r,s+c,a+c+r+c,s+c+o),Pn(n,1,a,s+c,a+c,s+c+o),Pn(n,2,a+c,s,a+c+r,s+c),Pn(n,3,a+c+r,s,a+c+r+r,s+c,!0),Pn(n,4,a+c,s+c,a+c+r,s+c+o),Pn(n,5,a+c+r+c,s+c,a+c+r+c+r,s+c+o),qr(e)),new Hn(n,rg(e,t))}function Ff(i,e,t,n,a,s){const r=i.attributes.uv,o=(c,l,d,h,u,f=!1)=>{const m=c*4,_=f?u:d,p=f?d:u;r.setXY(m+0,l/_a,1-_/va),r.setXY(m+1,h/_a,1-_/va),r.setXY(m+2,l/_a,1-p/va),r.setXY(m+3,h/_a,1-p/va)};o(0,e+s+n,t+s,e+s+n+s,t+s+a),o(1,e,t+s,e+s,t+s+a),o(2,e+s,t,e+s+n,t+s),o(3,e+s+n,t,e+s+n+n,t+s,!0),o(4,e+s,t+s,e+s+n,t+s+a),o(5,e+s+n+s,t+s,e+s+n+s+n,t+s+a),r.needsUpdate=!0}function Of(i){const e=document.createElement("canvas");e.width=_a,e.height=va;const t=e.getContext("2d");return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,_a,va)),e}function Co(i){const e=new Gm(i);return qr(e),e.needsUpdate=!0,e}function Pc(i,e,t,n){const a=e*Ee/2,s=t*Ee/2,r=n*Ee/2,o=.0015,c=new Bm({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),l=d=>{const h=new fi;h.setAttribute("position",new jn(d,3));const u=new Mv(h,c);u.renderOrder=4,i.add(u)};for(const d of[-r-o,r+o]){const h=[];for(let u=0;u<=e;u++){const f=-a+u*Ee;h.push(f,-s,d,f,s,d)}for(let u=0;u<=t;u++){const f=-s+u*Ee;h.push(-a,f,d,a,f,d)}l(h)}for(const d of[-a-o,a+o]){const h=[];for(let u=0;u<=n;u++){const f=-r+u*Ee;h.push(d,-s,f,d,s,f)}for(let u=0;u<=t;u++){const f=-s+u*Ee;h.push(d,f,-r,d,f,r)}l(h)}for(const d of[-s-o,s+o]){const h=[];for(let u=0;u<=e;u++){const f=-a+u*Ee;h.push(f,d,-r,f,d,r)}for(let u=0;u<=n;u++){const f=-r+u*Ee;h.push(-a,d,f,a,d,f)}l(h)}}function la(i,e,t,n=!1){const a=i.h/2,{u:s,v:r,w:o,d:c}=i,l=new ji(i.w*Ee,a*Ee,i.d*Ee);if(t){const d=r+c+(e?a:0),h=d+a;Pn(l,0,s+c+o,d,s+c+o+c,h),Pn(l,1,s,d,s+c,h),Pn(l,2,s+c,r,s+c+o,r+c),e?Pn(l,3,s+c+o,r,s+c+o+o,r+c,!0):Pn(l,3,s+c,r,s+c+o,r+c),Pn(l,4,s+c,d,s+c+o,h),Pn(l,5,s+c+o+c,d,s+c+o+c+o,h),qr(t)}return new Hn(l,rg(t,n))}class Z1{renderer=null;scene=new hv;camera=new Yn(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new Hv;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new O1({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new zv(16777215,.9));const t=new of(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new of(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(a,s,!1),this.camera.aspect=a/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(t.pointerType==="mouse"){const n=t.button===0;if(n&&this.etkilesimKapali||!n&&t.button!==1&&t.button!==2)return}this.surukleX=t.clientX,this.surukleY=t.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX,a=t.clientY-(this.surukleY??t.clientY);this.surukleX=t.clientX,this.surukleY=t.clientY,this.kameraAciHedef-=n*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+a*.006))},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.baglamEngel=t=>t.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.tekerlek=t=>{t.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(t.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,s)=>{const r=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),a(o)},o.onerror=()=>{URL.revokeObjectURL(r),s(new Error("görsel açılamadı"))},o.src=r})}}catch{}return await new Iv().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s&&(s.imageSmoothingEnabled=!1,n.height===32?s.drawImage(n,0,0):s.drawImage(n,0,0,64,64),t=new Kt(a),qr(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;this.pelerinDoku=Co(Of(n)),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=Co(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;this.kanatDoku=Co(Of(n)),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=Co(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new ll({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:ri}),n=new $t;n.position.set(0,6*Ee,-3*Ee);for(const a of[-1,1]){const s=new $t;s.position.set(a*5*Ee,0,0);const r=new ji(10*Ee,20*Ee,2*Ee);Ff(r,22,0,10,20,2);const o=new Hn(r,t);o.position.set(0,-10*Ee,-Ee),a<0&&(o.scale.x=-1),Pc(o,10,20,2),s.add(o),s.rotation.z=a*Nf,s.rotation.y=a*.07,s.rotation.x=.06,s.userData.yon=a,n.add(s)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.izgaraYenile()}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(r=>r.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Ee)),a=Math.max(1,Math.round(t.height/Ee)),s=Math.max(1,Math.round(t.depth/Ee));Pc(e,n,a,s)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new ji(10*Ee,16*Ee,1*Ee);Ff(t,0,0,10,16,1);const n=new ll({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:ri}),a=new Hn(t,n);a.position.set(0,-8*Ee,0),Pc(a,10,16,1);const s=new $t;s.position.set(0,6*Ee,-2.5*Ee),s.rotation.x=.06,s.visible=this.kozmetikGorunur,s.add(a),e.add(s),this.pelerinGrup=s,this.pelerinSarkac=s,this.izgaraYenile()}tuvalDoku(e,t){const n=new Gm(e);qr(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],_a,va):null:this.kanatGrup?this.isin(e,[this.kanatGrup],_a,va):null}isin(e,t,n,a){const s=this.canvas;if(!s||!this.renderer||t.length===0)return null;const r=s.getBoundingClientRect();if(r.width<1||r.height<1)return null;const o=new it((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),c=new Bv;c.setFromCamera(o,this.camera);const l=c.intersectObjects(t,!0).find(u=>!!u.uv);if(!l?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(l.uv.x*n))),h=Math.min(a-1,Math.max(0,Math.floor((1-l.uv.y)*a)));return{x:d,y:h}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(k=>{const v=k;v.geometry&&v.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new $t,this.kok.position.y=-.66,this.kalca=new $t,this.kalca.position.set(0,12*Ee,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new $t,body:new $t,armL:new $t,armR:new $t,legL:new $t,legR:new $t};const[n,a,s,r,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const k of[n,a,s,r,o,c])k.rotation.order="ZYX";const l=zf({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Ee,0),n.add(l);const d=zf({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ee,0),n.add(d),this.tabanMeshler.push(l),this.ustMeshler.push(d),this.oyuncuMeshler.push(l,d),a.position.set(0,12*Ee,0),a.userData.pivotPx=[0,12,0];const h=(k,v,E,A,L)=>{const U=la(v,!1,e);U.position.set(A,E+v.h/4*Ee,0),k.add(U);const N=new $t;N.position.set(0,E,0);const P=la(v,!0,e);if(P.position.set(A,-(v.h/4)*Ee,0),N.add(P),k.add(N),this.tabanMeshler.push(U,P),this.oyuncuMeshler.push(U,P),L){const F=Q=>{Q.scale.set((L.w+.5)/L.w,(L.h+.25)/L.h,(L.d+.5)/L.d)},W=la(L,!1,e,!0);W.position.set(A,E+L.h/4*Ee,0),F(W),k.add(W);const G=la(L,!0,e,!0);G.position.set(A,-(L.h/4)*Ee,0),F(G),N.add(G),this.ustMeshler.push(W,G),this.oyuncuMeshler.push(W,G)}return N},u=new $t;u.position.set(0,-6*Ee,0),u.rotation.order="ZYX";const f=la({u:16,v:16,w:8,h:12,d:4},!1,e);f.position.set(0,3*Ee,0),u.add(f),a.add(u);const m=la({u:16,v:16,w:8,h:12,d:4},!0,e);m.position.set(0,-9*Ee,0),a.add(m);const _=la({u:16,v:32,w:8,h:12,d:4},!1,e,!0);_.position.set(0,3*Ee,0),_.scale.set(1.0625,1.0208,1.125),u.add(_);const p=la({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Ee,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(f,m),this.ustMeshler.push(_,p),this.oyuncuMeshler.push(f,m,_,p);const g=new $t;g.position.set(0,6*Ee,0),g.rotation.order="ZYX";const b=t?3:4;n.position.set(0,6*Ee,0),n.userData.pivotPx=[0,6,0],s.position.set(5*Ee,4*Ee,0),s.userData.pivotPx=[5,4,0];const T=h(s,{u:32,v:48,w:b,h:12,d:4},-4*Ee,Ee,{u:48,v:48,w:b,h:12,d:4});r.position.set(-5*Ee,4*Ee,0),r.userData.pivotPx=[-5,4,0];const x=h(r,{u:40,v:16,w:b,h:12,d:4},-4*Ee,-Ee,{u:40,v:32,w:b,h:12,d:4});o.position.set(1.9*Ee,0,0),o.userData.pivotPx=[1.9,0,0];const S=h(o,{u:16,v:48,w:4,h:12,d:4},-6*Ee,0,{u:0,v:48,w:4,h:12,d:4});c.position.set(-1.9*Ee,0,0),c.userData.pivotPx=[-1.9,0,0];const w=h(c,{u:0,v:16,w:4,h:12,d:4},-6*Ee,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:g,armL:T,armR:x,legL:S,legR:w},g.add(n,s,r),this.kalca.add(a,g,o,c),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const k of this.ustMeshler)k.visible=!1}else for(const k of this.oyuncuMeshler)k.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),ya===this&&(ya=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now(),n=document.hasFocus()?1e3/45:1e3/4;if(t-this.sonCizimAt<n)return;this.sonCizimAt=t;const a=Math.min(.05,this.saat.getDelta());this.zaman+=a,this.adimla(a),this.kameraGuncelle(a),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Uf(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=If):t=Uf(this.aktif,this.tEmote)):(t=If,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Ee+t*.3*Ee;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*(Nf+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=Q0.degToRad,s=(o,c,l)=>{const d=a(c[0]),h=-a(c[1]),u=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(h-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const f=o.userData.pivotPx||[0,0,0],m=e.konum[l],_=(f[0]+m[0])*Ee,p=(f[1]+m[1])*Ee,g=(f[2]+m[2])*Ee;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const r=this.bukulenler;if(r){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(r.armL,e.bend[0]),o(r.armR,e.bend[1]),o(r.legL,e.bend[2]),o(r.legR,e.bend[3]),o(r.body,e.bend[4]),o(r.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Ee,d=(12+c[1])*Ee,h=c[2]*Ee;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(h-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let ya=null;function un(){return ya||(ya=new Z1),window.__sahne=ya,ya}function wl(){ya?.kapati(),ya=null,window.__sahne=null}const Ue=128,si=96;function ai(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ne(i,e,t,n=1,a=1,s="#fff"){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ca(i,e,t=si){const n=Math.ceil(t/e.length);e.forEach((a,s)=>ne(i,0,s*n,Ue,n+1,a));for(let a=1;a<e.length;a++){const s=a*n,r=ai(a*977);for(let o=0;o<Ue;o+=2)r()>.45&&(ne(i,o,s-1,1,1,e[a-1]),r()>.6&&ne(i,o+1,s-1,1,1,e[a]))}}function Bf(i,e,t,n,a,s){ne(i,e+3,t+3,n,3,a),ne(i,e,t+5,n+6,3,a),ne(i,e+2,t+8,n-2,2,s),ne(i,e+6,t+2,n-8,2,a),ne(i,e+4,t+10,n-6,1,s)}function Hf(i,e,t,n,a){const s=ai(a);for(let r=0;r<6;r++){const o=Math.floor(s()*Ue),c=18+Math.floor(s()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+r%3*6)));ne(i,o-d,e-l,d*2,1,t)}ne(i,o-1,e-c+1,2,2,n)}}function Rs(i,e,t,n,a=30){const s=ai(n);for(let r=0;r<e;r++){const o=Math.floor(s()*Ue),c=a+Math.floor(s()*(si-a));ne(i,o,c,1,1,t[Math.floor(s()*t.length)])}}const jd=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ca(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),ne(i,0,62,Ue,8,"#b98aa6"),ne(i,0,68,Ue,8,"#8f6377"),Hf(i,64,"#a97a95","#d9aec6",41);const e=(n,a,s)=>{const r=ai(s),o=78;ne(i,n,o-a,3,a,"#5d3b46"),ne(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(r()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((r()-.5)*14),h=o-a-Math.round(r()*14)-l*4;for(let u=-c;u<=c;u++){const f=Math.round(Math.sqrt(Math.max(0,c*c-u*u))*1.15);f<=0||ne(i,d-f,h+u,f*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const f=Math.round((r()-.5)*c*1.6),m=Math.round((r()-.5)*c*1.6);ne(i,d+f,h+m,1,1,r()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),ne(i,0,78,Ue,si-78,"#7fa86a"),ne(i,0,78,Ue,2,"#9dc484"),ne(i,0,90,Ue,6,"#5d7f4f");const t=ai(53);for(let n=0;n<70;n++)ne(i,t()*Ue,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ca(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),ne(i,0,52,Ue,6,"#ff6a1a"),ne(i,0,52,Ue,2,"#ffa347"),ne(i,0,56,Ue,2,"#c93d0c"),ne(i,0,40,Ue,14,"#2b1218"),ne(i,12,26,16,30,"#1c0a10"),ne(i,12,22,16,5,"#2f121a"),ne(i,96,18,20,42,"#1c0a10"),ne(i,96,14,20,5,"#2f121a"),ne(i,44,34,34,26,"#22101a"),ne(i,44,30,34,4,"#331522");const e=ai(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);ne(i,n,a,2,3,"#ff9b3d")}ne(i,18,32,2,3,"#ffb04d"),ne(i,102,26,2,3,"#ffb04d"),ne(i,0,70,Ue,26,"#120810");for(let t=0;t<Ue;t+=16)ne(i,t,70,15,8,"#1b0d17"),ne(i,t+1,71,13,2,"#241322");ne(i,0,84,Ue,4,"#ff5a14"),ne(i,0,84,Ue,1,"#ffb44d"),ne(i,0,88,Ue,8,"#120810"),Rs(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ca(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Rs(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),ne(i,0,58,Ue,10,"#241436"),ne(i,0,58,Ue,2,"#3a2152");const e=(n,a,s)=>{ne(i,n,a,9,s,"#3d2a56"),ne(i,n+1,a,2,s,"#55406f"),ne(i,n+7,a,2,s,"#2a1c3d"),ne(i,n-2,a-3,13,3,"#63498a"),ne(i,n-1,a-6,11,3,"#4a3568"),ne(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{ne(i,n,a,2,6,"#efe4ff"),ne(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),ne(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),ne(i,30,46,14,4,"#2c1a41"),ne(i,34,50,6,3,"#1e1130"),ne(i,96,50,10,3,"#2c1a41"),ne(i,0,68,Ue,si-68,"#1b1029"),ne(i,0,68,Ue,3,"#34204a");for(let n=4;n<Ue;n+=14)ne(i,n,76,9,2,"#2a1a3d");Rs(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ca(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),ne(i,0,46,Ue,8,"#8a2a1c");const e=(t,n,a,s)=>{ne(i,t,n,a,s,"#221a1f"),ne(i,t,n,a,2,"#33272e");for(let r=4;r<s;r+=8)ne(i,t+2,n+r,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)ne(i,t,38,6,6,"#120d10");ne(i,4,28,8,8,"#120d10"),ne(i,104,24,8,8,"#120d10"),ne(i,8,50,4,4,"#ffcf4d"),ne(i,14,54,2,2,"#e0a81f"),ne(i,106,44,5,5,"#ffcf4d"),ne(i,60,52,4,4,"#ffcf4d"),ne(i,66,56,2,2,"#e0a81f"),ne(i,0,70,Ue,26,"#150f12"),ne(i,0,74,Ue,6,"#ff6418"),ne(i,0,74,Ue,1,"#ffb44d"),ne(i,0,80,Ue,16,"#150f12"),Rs(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ca(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Bf(i,22,18,22,"#2d6f74","#1d5259"),Bf(i,76,12,30,"#2d6f74","#1d5259"),ne(i,0,66,Ue,10,"#2f6b52"),ne(i,0,66,Ue,2,"#4b8b68");const e=(n,a,s)=>{const r=ai(s),o=4+Math.floor(r()*2);ne(i,n,74-a,o,a,"#e6d7bd"),ne(i,n,74-a,1,a,"#f3e9d6"),ne(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);ne(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)ne(i,n+o/2-12+r()*24,c+2+r()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),ne(i,0,74,Ue,si-74,"#3f7c5c"),ne(i,0,74,Ue,2,"#5b9d77"),ne(i,0,86,Ue,10,"#2c5a44");const t=ai(61);for(let n=0;n<48;n++)ne(i,t()*Ue,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ca(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let s=0;s<Ue;s++){const r=Math.round(Math.sin(s/Ue*Math.PI*2+n)*3);ne(i,s,a+r,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Rs(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),Hf(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,s,r)=>{for(let o=0;o<r;o++){const c=Math.round(s*(1-o/r)*.9);ne(i,n-c/2+o*.4,a+o,c,1,o<r*.4?"#d6ecff":"#a6cbe8")}ne(i,n,a+2,2,r-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),ne(i,0,72,Ue,si-72,"#0f2a4a"),ne(i,0,72,Ue,2,"#2b5f8c");for(let n=0;n<24;n++){const a=ai(n*13);ne(i,a()*Ue,76+a()*18,6+a()*10,1,"#1f4b72")}const t=ai(83);for(let n=0;n<26;n++)ne(i,t()*Ue,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ca(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),ne(i,96,12,12,12,"#fff3cf"),ne(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;ne(i,0,n,Ue,6,t<2?"#d8ab68":"#c1924f"),ne(i,0,n,Ue,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);ne(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),ne(i,46-n/2,e+t,2,1,"#f0d29a")}ne(i,42,40,8,16,"#6b4d28"),ne(i,43,42,6,14,"#3d2b14"),ne(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)ne(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}ne(i,0,78,Ue,si-78,"#e0b877"),ne(i,0,78,Ue,2,"#f2d49b");for(let t=6;t<Ue;t+=18)ne(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ca(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let s=0;s<66;s++){const r=2+s*.18;ne(i,a+s*.12,s,r,1,"rgba(150,240,255,0.06)")}}const e=(n,a,s,r)=>{ne(i,n,a,s,r,"#2f7d76"),ne(i,n,a,s,2,"#48a89a"),ne(i,n,a+r-2,s,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),ne(i,60,18,8,4,"#a8f0e2"),ne(i,62,16,4,2,"#e0fff8"),ne(i,34,40,4,4,"#d9b34a"),ne(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)ne(i,n,52,6,2,"#1d4a48");ne(i,0,64,Ue,si-64,"#0b2c33"),ne(i,0,64,Ue,3,"#164a4a");const t=ai(47);for(let n=0;n<16;n++){const a=t()*Ue,s=6+t()*12;ne(i,a,78-s,2,s,t()>.5?"#1f6b55":"#2b8a63")}Rs(i,30,["#8fe8dd","#c8fff6"],11,8)}}],J1=jd;function Q1(i){return jd.find(e=>e.id===i)||jd[0]}function og(i,e){const t=i.getContext("2d");t&&((i.width!==Ue||i.height!==si)&&(i.width=Ue,i.height=si),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ue,si),Q1(e).ciz(t))}let _n=null;const Gf=()=>document.documentElement.getAttribute("data-world")==="sahne",j1=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function eM(i){const e=ce.instances[0];(!_n||!ce.instances.find(l=>l.id===_n))&&(_n=e?.id||null);const t=ce.instances.find(l=>l.id===_n),n=Ii(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),s=[...ce.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),r=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${ce.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${Dt(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Ol(n)}" alt="" draggable="false" ${Bl(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${Y("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${Y("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Tr(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${Y("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${Y("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${Y("play")} HIZLI GİRİŞ</div>
          ${r?`
          <button class="imp-hizli-satir${Ze.activeId===r.id?" durdur":""}" id="i-hizli-oyla" ${Ze.activeId&&Ze.activeId!==r.id?'disabled data-kilitli="1"':""}>
            <b>${r.name}${Ze.activeId===r.id?" — AÇIK":""}</b>
            <small>${Tr(r.mod_loader)} · ${r.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=fn(`
      <div class="imp-satir${Ze.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${Dt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${Tr(l.mod_loader)} · ${l.mc_version} — ${j1(l.last_played)}</small>
        </span>
        <button class="imp-oyla${Ze.activeId===l.id?" durdur":""}" ${Ze.activeId&&Ze.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${Ze.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${Y(Ze.activeId===l.id?"stop":"play")} ${Ze.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${Y("gear")}</button>
      </div>
    `);d.addEventListener("click",h=>{const u=l.id;if(h.target.closest(".imp-diyis")){st("instances",u);return}if(h.target.closest(".imp-oyla")){Ze.activeId===l.id&&Dc();return}_n=u,st("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",h=>h.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async h=>{if(h.stopPropagation(),Ze.activeId===d)return Dc();if(!ce.accounts.length)return En();const{launchInstance:u}=await bt(async()=>{const{launchInstance:f}=await Promise.resolve().then(()=>Tt);return{launchInstance:f}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>st("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>st("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{_n&&st("instances",_n)}),i.querySelector("#i-ad")?.addEventListener("click",()=>En()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>st("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>st("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!r)return;if(Ze.activeId===r.id)return Dc();if(!ce.accounts.length)return En();const{launchInstance:l}=await bt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>Tt);return{launchInstance:d}},void 0);l(r.id)}),lg(i,n)}async function Dc(){try{await re("cmd_kill_game")}catch{}const{refreshState:i}=await bt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>Tt);return{refreshState:e}},void 0);await i(!0)}async function tM(i){const e=i.querySelector("#i-news");if(e)try{const t=await re("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=fn(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>st("news")),e.appendChild(a)}}catch{}}function nM(i){if(wl(),Gf()){eM(i),tM(i);return}const e=ce.instances[0];(!_n||!ce.instances.find(h=>h.id===_n))&&(_n=e?.id||null);const t=ce.instances.find(h=>h.id===_n),n=Ii(),a=h=>!!h&&(h.includes("/")||h.includes("\\")),s=t?a(t.icon)?`<img class="hero-inst-icon" src="${Dt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",r=!!t?.cover&&!Gf(),o=r?` style="background-image:url('${Dt(t.cover)}')"`:"",c=t?Ze.activeId===t.id?"warn":"ok":"off",l=ce.instances.filter(h=>h.id!==t?.id);i.innerHTML=`
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
          <div class="hero-badge">${Lr(c)} ${s} ${t.mc_version} · ${Tr(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(ce.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(ce.sys?.total_ram_mb||16384)*100))}%"></span></div>
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
            <button class="btn ghost" id="h-manage">${Y("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${Y("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${Y("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Ze.activeId?"disabled":""}" id="h-play"
          title="${Ze.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ze.activeId?"disabled":""}>
          <span class="pr-icon">${Ze.activeId?Y("clock"):Y("play")}</span>
          <span class="pr-label">${Ze.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ze.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ze.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${Y("stop")}
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
          <button class="btn ghost sm" id="h-all">${Y("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${Lr("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${ce.config?.show_news===!1?"hidden":""}>
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
          <div class="cs-val">${Y("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const h of l){a(h.icon);const u=fn(`
        <button class="ledger-row" data-id="${h.id}">
          ${Lr(Ze.activeId===h.id?"warn":"ok")}
          <span class="lr-name">${h.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Tr(h.mod_loader)} ${h.mc_version}
            <span class="sep">·</span>
            Son: ${h.last_played?new Date(h.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${Y("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=Y("play"),u.addEventListener("click",async f=>{if(f.target.closest(".lr-play")){if(!ce.accounts.length)return En();Au(u);const{launchInstance:m}=await bt(async()=>{const{launchInstance:_}=await Promise.resolve().then(()=>Tt);return{launchInstance:_}},void 0);m(h.id);return}st("instances",h.id)}),d.appendChild(u)}ku(Array.from(d.children))}aM(i),sM(),iM(i),lg(i,n)}async function lg(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(og(n,String(ce.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=un();a.kur(t),t.classList.add("on");try{const o=await re("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:Dt(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}try{const o=await re("cmd_kozmetik_oku");o?.pelerin_dosya&&o.pelerin_aktif!==!1&&await a.pelerin({url:Dt(String(o.pelerin_dosya))})}catch{}if(ce.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const r={sakin:.6,normal:1,canli:1.8}[String(ce.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await re("cmd_list_emotes"),c=[];for(const l of o)try{c.push(q1(l.icerik))}catch{}a.emoteleriKur(c,r)}catch{a.emoteleriKur([])}}async function iM(i){try{const e=await re("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{bt(()=>Promise.resolve().then(()=>Tt),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Tr(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function aM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!_n){st("instances");return}if(!ce.accounts.length){En();return}Au(i.querySelector(".play-ring"));const{launchInstance:e}=await bt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>Tt);return{launchInstance:t}},void 0);e(_n)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await re("cmd_kill_game")}catch{}const{refreshState:e}=await bt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>Tt);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{st("instances",_n||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>st("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>st("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>st("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>En())}async function sM(){const i=Mi("#home-news");if(i)try{const e=await re("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=fn(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${Y("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>st("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Vf={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Ic(i){return Vf[i]||Vf.vanilla}let li=null;function rM(i){const e=Dt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function oM(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const s=a.target;a.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function lM(i){if(Wi.param&&ce.instances.find(e=>e.id===Wi.param)){li=Wi.param,Wi.param=void 0,Xr(i,li);return}if(li&&ce.instances.find(e=>e.id===li)){Xr(i,li);return}cl(i)}function cl(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${Y("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${Y("plus")} Yeni Kurulum</button>
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
  `;const e=i.querySelector("#inst-grid");if(!ce.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${Y("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>qf());else{for(const t of ce.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${Dt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Ze.activeId===t.id,r=fn(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?rM(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${cg(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${Lr(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${Ks(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ze.activeId?"disabled":""}>
              ${Ze.activeId?`${Y("clock")} Açık`:`${Y("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${Y("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);r.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!ce.accounts.length)return En();const{launchInstance:c}=await bt(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>Tt);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await re("cmd_kill_game")}catch{}const{refreshState:c}=await bt(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>Tt);return{refreshState:l}},void 0);await c(!0);return}li=t.id,Xr(i,t.id)}),e.appendChild(r)}ku(Array.from(e.querySelectorAll(".inst-card"))),oM(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>qf()),i.querySelector("#btn-import")?.addEventListener("click",()=>cM().catch(()=>{})),dM()}async function cM(){const i=await re("cmd_pick_pack_file");if(i){oe("Paket içe aktarılıyor…","ok");try{const e=await re("cmd_import_pack_file",{path:i}),{refreshState:t}=await bt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>Tt);return{refreshState:n}},void 0);await t(),oe(`${e.name||"Paket"} kuruldu!`,"ok"),st("instances")}catch(e){oe(`Paket içe aktarılamadı: ${e}`,"err")}}}async function dM(){const i=document.querySelector("#popular-strip");if(i)try{const e=await re("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=fn(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${Y("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${Y("dl")} ${uM(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>st("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function uM(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function cg(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Xr(i,e){const t=ce.instances.find(s=>s.id===e);if(!t){li=null,cl(i);return}const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${Dt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${Y("back")}</button>
      <div class="inst-icon xl">${a}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${cg(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${Ks(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ze.activeId?"disabled":""}>${Ze.activeId?`${Y("clock")} Oyun Açık`:`${Y("play")} Oyna`}</button>
      ${Ze.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${Y("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${Y("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${Y("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${Y("mug")} Java</button>
      <button class="tab" data-tab="log">${Y("term")} Log</button>
      <button class="tab" data-tab="analytics">${Y("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${Y("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{li=null,cl(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!ce.accounts.length)return En();const{launchInstance:s}=await bt(async()=>{const{launchInstance:r}=await Promise.resolve().then(()=>Tt);return{launchInstance:r}},void 0);s(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await re("cmd_kill_game")}catch{}const{refreshState:s}=await bt(async()=>{const{refreshState:r}=await Promise.resolve().then(()=>Tt);return{refreshState:r}},void 0);await s(!0)}),i.querySelectorAll(".tab").forEach(s=>{s.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),s.classList.add("active");const r=s.dataset.tab,o=i.querySelector("#tab-content");({mods:dg,content:hM,java:ug,log:fM,analytics:pM,settings:mM})[r](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let Bi="resourcepacks";const $f=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function hM(i,e){const t=()=>$f.find(a=>a.id===Bi);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await re("cmd_list_content_files",{instanceId:e.id,kind:Bi})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${$f.map(o=>`<button class="kt ${o.id===Bi?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${Y("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${Y("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${Y("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Bi=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>re("cmd_open_content_folder",{instanceId:e.id,kind:Bi}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Bi==="resourcepacks"?"resourcepack":Bi==="shaderpacks"?"shader":"world";Wi.param=`kind:${o}`,st("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await re("cmd_add_content_file",{instanceId:e.id,kind:Bi}),await n()}catch(o){oe(`Eklenemedi: ${o}`,"err")}});const r=i.querySelector("#content-list");if(!a.length){r.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}r.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${Dt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=fn(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":to(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${Y("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const h=d.currentTarget.dataset.del;if(confirm(`"${h}" silinsin mi?`))try{await re("cmd_delete_content_file",{instanceId:e.id,kind:Bi,name:h}),await n()}catch(u){oe(`Silinemedi: ${u}`,"err")}}),r.appendChild(l)}};await n()}async function dg(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await re("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await re("cmd_resolve_mod_icons",{filenames:t.map(r=>r.filename)})}catch{}let a={};if(t.length)try{const r=await re("cmd_check_mod_updates",{instanceId:e.id});a=Object.fromEntries(r.map(o=>[o.filename,o]))}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${Y("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const s=r=>{const o=t.filter(l=>l.filename.toLowerCase().includes(r.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",o.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${r?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of o){const d=n[l.filename],h=d?`<img class="mod-logo" src="${d}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${Y("puzzle")}</span>`,u=fn(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${h}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${to(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[l.filename]?`<button class="btn primary sm upd-mod" data-fn="${l.filename}" data-url="${a[l.filename].url}" data-ad="${a[l.filename].yeni_ad}" title="Yeni sürüm: ${a[l.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);u.querySelector(".switch")?.addEventListener("click",async f=>{const m=f.currentTarget,_=m.dataset.fn,p=m.dataset.en!=="true";await re("cmd_toggle_mod",{instanceId:e.id,filename:_,enabled:p}),l.enabled=p,s(i.querySelector("#mod-search").value)}),u.querySelector(".upd-mod")?.addEventListener("click",async f=>{const m=f.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await re("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),oe("Mod güncellendi"),await dg(i,e)}catch(_){m.disabled=!1,m.textContent="Güncelle",oe(`Güncellenemedi: ${_}`,"err")}}),u.querySelector(".del-mod")?.addEventListener("click",async()=>{await re("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(f=>f.filename!==l.filename),s(i.querySelector("#mod-search").value),oe("Mod silindi")}),c.appendChild(u)}};i.querySelector("#mod-search")?.addEventListener("input",r=>{s(r.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{st("explore",e.id)}),s("")}async function ug(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await re("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",a=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${Y("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${Y("args")} Java Argüman Presetleri</h3>
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
        <h3>${Y("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
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
  `;const r=i.querySelector("#ram-range");r.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${r.value} MB`}),r.addEventListener("change",async()=>{await re("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(r.value)}),e.ram_mb=parseInt(r.value),oe("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",h=>h.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",h=>h.stopPropagation()),l.addEventListener("click",async h=>{if(h.target.closest("details"))return;const u=l.dataset.id;await re("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const f=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(m=>m.closest(".preset-row").dataset.id));ug(i,e),i.querySelectorAll(".preset-row").forEach(m=>{f.has(m.dataset.id)&&(m.querySelector("details").open=!0)}),oe("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),h=l.value.trim(),u=h===""?null:Math.max(2,Math.min(32,parseInt(h)||12)),f=d.value.trim();await re("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:f||null}),e.view_distance=u,e.custom_vm_args=f||null,oe("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function fM(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${Y("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),s=i.querySelector("#log-search");let r="live",o=0;const c=[];let l=[];const d=(b,T)=>{n.textContent=T!==void 0&&T!==b?`${T}/${b} satır`:`${b} satır`},h=b=>{const T=document.createElement("div");return T.textContent=b,b.includes("ERROR")||b.includes("Exception")?T.classList.add("err"):b.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const b=s.value.trim().toLowerCase(),T=b?l.filter(x=>x.toLowerCase().includes(b)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${b?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const x=document.createDocumentFragment();for(const S of T)x.appendChild(h(S));t.appendChild(x)}d(l.length,T.length)},f=()=>{if(r="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const b=document.createDocumentFragment();for(const T of c)b.appendChild(h(T));t.appendChild(b),t.scrollTop=t.scrollHeight}d(o)},m=async b=>{r=b,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await re("cmd_read_log",{instanceId:e.id,fileId:b})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await re("cmd_list_logs",{instanceId:e.id});const b=new Map;for(const T of _)b.has(T.date)||b.set(T.date,[]),b.get(T.date).push(T);for(const[T,x]of b){const S=document.createElement("optgroup");S.label=T;for(const w of x){const k=document.createElement("option");k.value=w.id;const v=w.label.startsWith("Oturum ")?"#"+(w.label.split("-").pop()||w.label):w.label;k.textContent=`${w.time!=="-"?w.time+" — ":""}${v} (${to(w.size)})`,S.appendChild(k)}a.appendChild(S)}}catch{}Ze.activeId!==e.id&&_.length?(a.value=_[0].id,m(_[0].id)):f(),a.addEventListener("change",()=>{a.value==="live"?f():m(a.value)}),s.addEventListener("input",()=>{r!=="live"&&u()});const p=await hi("game-log",b=>{r!=="live"&&(a.value="live",f()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(b.payload),o++,c.length>500&&c.shift(),t.appendChild(h(b.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function pM(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await re("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${Ks(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Y("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((r,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${r.host}</span>
          <span class="chip gray">${r.visits} giriş</span>
          <span class="dur">${Ks(r.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Y("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Wf(n.daily_ms).map(r=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(r.ms/Math.max(...Wf(n.daily_ms).map(o=>o.ms),1)*100,r.ms?5:2)}%"></div>
            <div class="bar-lbl">${r.label}</div>
            <div class="tooltip">${r.full} — ${Ks(r.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Wf(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[s]||0,full:s})}return e}async function mM(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${Dt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${Y("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${Y("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${Dt(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?Y("image")+" Değiştir":Y("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${Y("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${Y("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${Y("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${Y("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const a=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,r=i.querySelector("#set-icon").value.trim();await re("cmd_rename_instance",{id:e.id,name:s}),r&&await re("cmd_set_instance_icon",{id:e.id,icon:r}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await re("cmd_pick_instance_icon",{instanceId:e.id}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(s=>s.refreshState(!0)),oe("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await re("cmd_pick_instance_cover",{instanceId:e.id}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(s=>s.refreshState(!0)),oe("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await re("cmd_set_instance_cover",{id:e.id,cover:null}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(s=>s.refreshState(!0)),oe("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>re("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>re("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await re("cmd_duplicate_instance",{id:e.id}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(s=>s.refreshState()),oe("Kurulum kopyalandı"),Xr(i.parentElement,li)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await re("cmd_delete_instance",{id:e.id}),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(s=>s.refreshState()),li=null,cl(i.parentElement),oe("Kurulum silindi"))})}async function qf(){const e=(await re("cmd_list_versions")).all,t=await re("cmd_list_java_arg_presets"),n=await re("cmd_list_standard_mods"),{root:a,close:s}=(await bt(async()=>{const{openModal:l}=await Promise.resolve().then(()=>Tt);return{openModal:l}},void 0)).openModal(`
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
        <div class="lc-icon">${Ic("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Ic("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Ic("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let r="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),r=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",s),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",h=a.querySelector("#w-version").value,u=a.querySelector("#w-preset").value;try{const f=await re("cmd_create_instance",{instance:{name:d,mc_version:h,mod_loader:r,ram_mb:parseInt(c.value),java_preset_id:u,standard_mods:o&&r==="fabric"}});await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(_=>_.refreshState()),s(),oe(`"${d}" oluşturuldu`);const m=f.instance.id;if(li=m,ce.instances.length){const _=document.querySelector("#content");Xr(_,m)}}catch(f){oe(String(f),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}let qn="mod",vi="",Ya=[],$s=40,ua=1,Ns=1,kr="",eu="",Uc=!1;function gM(i){let e=Wi.param;if(e?.startsWith("kind:")){const a=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(a)&&(qn=a),e=void 0}Wi.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${qn==="mod"?"sel":""}" data-k="mod">${Y("puzzle")} Modlar</button>
        <button class="kt ${qn==="modpack"?"sel":""}" data-k="modpack">${Y("box")} Paketler</button>
        <button class="kt ${qn==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${qn==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${qn==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${qn==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${ce.featured_versions.map(a=>`<option>${a}</option>`).join("")}
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
        ${Y("search")}
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
  `,i.querySelectorAll(".kt").forEach(a=>a.addEventListener("click",()=>{qn=a.dataset.k,i.querySelectorAll(".kt").forEach(s=>s.classList.remove("sel")),a.classList.add("sel"),vi&&Oa(i,vi),Xf(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Oa(i,t.value.trim()),380)}),t.addEventListener("keydown",a=>{a.key==="Enter"&&Oa(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>Oa(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{vi&&Oa(i,vi)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{vi&&Oa(i,vi)}),e&&vi&&Oa(i,vi),Xf(i)}async function Xf(i){const e=i.querySelector("#popular-strip");try{const t=await re("cmd_repos_popular",{kind:qn,loader:""});e.innerHTML="";for(const n of t){const a=fn(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${Y("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${Y("dl")} ${hg(n.downloads)}</div>
          </div>
        </div>
      `);a.addEventListener("click",()=>fg(n)),e.appendChild(a)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function Oa(i,e){if(!e)return;vi=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',kr=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;eu=["resourcepack","shader","world","datapack"].includes(qn)?"":n,ua=1;try{if(Ya=(await re("cmd_repos_search",{query:e,kind:qn,versions:kr?[kr]:[],loader:eu,offset:0,limit:$s})).results,Ns=Ya.length>=$s?2:1,t.innerHTML="",!Ya.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const r of Ya)t.appendChild(nu(r));tu(i)}catch(s){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${s}</p></div>`}}function tu(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=Ya.length>=$s;if(ua===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${ua<=1?"disabled":""}>‹</button>`];for(let s=1;s<=Ns;s++)n.push(`<button class="pg-btn ${s===ua?"cur":""}" data-pg="${s}">${s}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const a=fn(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);a.addEventListener("click",s=>{const r=s.target.closest(".pg-btn");if(!r||r.disabled)return;const o=r.dataset.pg,c=o==="prev"?ua-1:o==="next"?ua+1:parseInt(o,10);!Number.isFinite(c)||c<1||c===ua||_M(i,c)}),e.appendChild(a)}async function _M(i,e){if(Uc)return;Uc=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const a=(await re("cmd_repos_search",{query:vi,kind:qn,versions:kr?[kr]:[],loader:eu,offset:(e-1)*$s,limit:$s})).results;if(!a.length){Ns=Math.min(Ns,Math.max(1,e-1)),t.innerHTML="";for(const s of Ya)t.appendChild(nu(s));tu(i);return}Ya=a,ua=e,Ns=Math.max(Ns,a.length>=$s?e+1:e),t.innerHTML="";for(const s of a)t.appendChild(nu(s));tu(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{Uc=!1}}function nu(i){const e=fn(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${Y(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${Y("dl")} ${hg(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>fg(i)),e}function hg(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function fg(i){const{root:e,close:t}=Jt(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",a=document.querySelector("#exp-loader")?.value||(ce.instances[0]?.mod_loader==="forge"?"forge":"fabric"),r=["resourcepack","shader","world","datapack"].includes(i.kind)?"":a;try{const o=await re("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?r:"",gameVersion:n}),c=e.querySelector("#ver-list");if(c.innerHTML="",!o.length){c.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const l of o){const d=fn(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${l.name||l.version_number}</b>
            <span class="ver-date">${l.date.slice(0,10)} · ${l.game_versions.slice(0,3).join(", ")}${l.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${to(l.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>vM(i,l,t)),c.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function vM(i,e,t){if(i.kind==="modpack")t(),await yM(i,e);else{if(!ce.instances.length){oe("Önce bir kurulum oluşturmalısın","err"),st("instances");return}const{root:n,close:a}=Jt(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${ce.instances.map(s=>{const r=s.icon&&!s.icon.includes("/")&&!s.icon.includes("\\")?`${s.icon} `:"";return`<option value="${s.id}">${r}${s.name} (${s.mod_loader} ${s.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",a),n.querySelector("#ok")?.addEventListener("click",async()=>{const s=n.querySelector("#tgt").value,r=n.querySelector("#ok");r.disabled=!0,r.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await re("cmd_repos_install_content",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await re("cmd_repos_install",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id}),a(),t(),oe({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){oe(String(o),"err"),r.disabled=!1,r.textContent="Kur"}})}}async function yM(i,e){const{root:t,close:n}=Jt(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),a=t.querySelector("#pk-bar"),s=t.querySelector("#pk-detail"),{listen:r}=await bt(async()=>{const{listen:c}=await Promise.resolve().then(()=>Tt);return{listen:c}},void 0),o=await r("launch-progress",c=>{c.payload.stage==="modpack"&&(a.style.transform=`scaleX(${Math.min(1,Math.max(0,c.payload.percent/100))})`,s.textContent=c.payload.detail||"")});try{const c=await re("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await bt(()=>Promise.resolve().then(()=>Tt),void 0).then(l=>l.refreshState()),await xM(c),st("instances")}catch(c){o(),s.textContent=`Kurulum başarısız: ${c}`,s.style.color="var(--danger)"}}async function xM(i){const e=await re("cmd_list_java_arg_presets"),{root:t,close:n}=Jt(`
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
  `);t.querySelectorAll(".preset-row").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.id;s!=="__skip"&&(await re("cmd_set_instance_java_preset",{id:i.id,presetId:s}),oe(`Preset: ${e.find(r=>r.id===s)?.name}`)),n()})})}function bM(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,SM(i)}async function SM(i){const e=i.querySelector("#yikim-news");try{const t=await re("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${Y("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${Y("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${Y("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),a?.startsWith("https://")&&Fl(a).catch(()=>{})})})}catch{e.innerHTML=""}}const Nc=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],MM={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function EM(i){const e=(t,n,a,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function br(i){let e=ce.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...MM}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},s=Nc.find(m=>m.id===n)||Nc[0],r=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(_=>{const p=i.querySelector("#app-version");p&&(p.textContent=`v${_} "Kıvılcım"`)}).catch(()=>{const _=i.querySelector("#app-version");_&&(_.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Y("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${ce.accounts.map(m=>{const _=Ii()?.id===m.id;return`
          <div class="acc-row ${_?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${Ol(m)}" ${Bl(m)} draggable="false" />
            <div class="acc-info">
              <b>${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${_?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${Y("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${Y("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${Y("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Y("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Nc.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${EM(m)}
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
        <button class="btn ghost sm" id="skins-alani">${Y("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${Y("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${s.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${Y("undo")} Sıfırla</button>
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
      <h3>${Y("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${Y("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${Ba("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
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
        <button class="btn ghost" id="anim-ekle">${Y("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${Y("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Y("mug")} Java</h3>
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
      <h3>${Y("gear")} Genel</h3>
      ${Ba("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${Ba("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${Ba("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${Ba("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${Ba("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${Ba("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
      <h3>${Y("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${Y("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${Y("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>En()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>En()),i.querySelectorAll(".acc-row").forEach(m=>{const _=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async p=>{p.stopPropagation(),await re("cmd_select_account",{accountId:_}),await rn(),br(i),oe("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async p=>{p.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await re("cmd_remove_account",{accountId:_}),await rn(),br(i),oe("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{ce.config.theme=m.dataset.t,Si(),await gn(),br(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>st("skins"));const c=()=>ce.config.tema_ozel||={},l=async(m,_)=>{const p=c()[n]||={};p[m]=_,!p.accent&&!p.radius&&delete c()[n],Si(),await gn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const _=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(p=>p.classList.toggle("aktif",p===m)),await l("accent",_),oe(_?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const d=i.querySelector("#tema-accent-pick");d?.addEventListener("input",()=>{ce.config.tema_ozel||={},(ce.config.tema_ozel[n]||={}).accent=d.value,Si()}),d?.addEventListener("change",async()=>{await gn(),oe("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(_=>_.classList.toggle("aktif",_===m)),await l("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],Si(),await gn(),br(i),oe("Bu dünyanın özelleştirmesi sıfırlandı")});const h=i.querySelector("#sas-izgara");if(h){const m=String(e.sahne_arka||"kiraz");h.innerHTML=J1.map(_=>`
      <button class="sas-kart${_.id===m?" sel":""}" data-art="${_.id}">
        <span class="sas-tuval"><canvas data-ciz="${_.id}"></canvas></span>
        <b>${_.ad}</b>
        <small>${_.etiket}</small>
      </button>`).join(""),h.querySelectorAll("canvas[data-ciz]").forEach(_=>{og(_,_.dataset.ciz||"kiraz")}),h.querySelectorAll(".sas-kart").forEach(_=>_.addEventListener("click",async()=>{ce.config.sahne_arka=_.dataset.art,h.querySelectorAll(".sas-kart").forEach(p=>p.classList.toggle("sel",p===_)),await gn(),oe("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{ce.config.fx_particles=m.target.value,Si(),await gn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{ce.config.cursor_style=m.target.value,Si(),await gn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await re("cmd_pick_java");m&&(ce.config.java_dir=m,await gn(),i.querySelector("#java-path").textContent=m,oe("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{ce.config.java_dir=null,await gn(),i.querySelector("#java-path").textContent="otomatik"}),Ha(i,"keep-open","keep_launcher_open"),Ha(i,"hide-on-launch","hide_on_launch"),Ha(i,"show-news","show_news"),Ha(i,"stats-enabled","stats_enabled"),Ha(i,"use-java25","use_java25"),Ha(i,"discord-rpc","discord_rpc"),Ha(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{ce.config.menu_animasyon_hiz=m.target.value,await gn()});const u=()=>pg(i);i.querySelector("#anim-yenile")?.addEventListener("click",u),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await re("cmd_pick_emote");m?.length&&(oe(`${m.length} animasyon eklendi`),u())}catch(m){oe(`Animasyon eklenemedi: ${m}`,"err")}}),u();const f=i.querySelector("#dlc-range");f.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=f.value),f.addEventListener("change",async()=>{ce.config.download_concurrency=parseInt(f.value),await gn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{oe("Güncelleme kontrol ediliyor…");try{const _=await(await bt(()=>import("./index-DSkUPpwd.js"),[])).check();if(_?.available){const{root:p,close:g}=Jt(`
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
        `);p.querySelector("#upd-later")?.addEventListener("click",()=>g()),p.querySelector("#upd-go")?.addEventListener("click",async()=>{const b=p.querySelector("#upd-go");b.disabled=!0,b.textContent="İndiriliyor…";try{await _.downloadAndInstall(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(T){b.disabled=!1,b.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${T}`,"err")}})}else oe("YIKIMLient güncel ✓")}catch(m){await AM(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Fl(dl).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${dl}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await re("cmd_get_app_dir");Pg(m).catch(()=>{})}),TM(i,e)}function wM(i){const e=Ii();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(s=>String(s).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const zc=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function TM(i,e){const t=i.querySelector("#rozet-alani");if(t){if(wM(e)){Yf(i,e);return}t.innerHTML="",re("cmd_rozet_yetki").then(n=>{n?.izinli&&Yf(i,e)}).catch(()=>{})}}function Yf(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=Ii(),a=!!n&&(e?.atolye_admin||[]).some(A=>String(A).toLowerCase()===n.name.toLowerCase());let s=new Array(64).fill("");const r=A=>/^#[0-9a-fA-F]{6}$/.test(String(A||""));let o=r(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(r).slice(0,24),l=!1;const d=[];let h=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${Y("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
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
              ${Y("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${l?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${Y("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${Y("undo")} Geri</button>
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
              <b class="ro-isim">${Ii()?.name||"oyuncu"}</b>
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
          <button class="btn ghost sm" id="rozet-ekle">${Y("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),f=t.querySelector("#rozet-onizleme"),m=t.querySelector("#rozet-cipler"),_=()=>{u.innerHTML=s.map((A,L)=>`<button class="rozet-hucre${A?" dolu":""}" data-i="${L}" style="--c:${A||"transparent"}"></button>`).join(""),f.innerHTML=s.map(A=>`<i style="--c:${A||"transparent"}"></i>`).join("")},p=A=>{const L=l?"":o;s[A]!==L&&(s[A]=L,_())};u.addEventListener("click",A=>{const L=A.target.closest(".rozet-hucre");L&&(d.push([...s]),d.length>40&&d.shift(),p(Number(L.dataset.i)))});const g=t.querySelector("#rozet-renkler"),b=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),x=t.querySelector("#rozet-renk-sec"),S=()=>{const A=[...zc,...c];g.innerHTML=A.map((L,U)=>`<button class="rozet-renk${L.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${L}" style="--c:${L}" title="${L}" data-ozel="${U>=zc.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(L=>L.addEventListener("click",()=>{const U=L.dataset.c||"";l=!1,U&&w(U)}))},w=(A,L=!0)=>{o=A.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),b.value=o,T.style.setProperty("--c",o),x.value=o,S(),L&&(ce.config.rozet_renk=o,gn())},k=A=>{if(!r(A))return oe("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const L=A.toLowerCase();return[...zc,...c].some(U=>U.toLowerCase()===L)||(c=[...c,L].slice(-24),ce.config.rozet_renkler=[...c]),w(L),!0};x?.addEventListener("input",()=>{w(x.value,!1)}),x?.addEventListener("change",()=>k(x.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const A=b.value.trim(),L=A.startsWith("#")?A:`#${A}`;k(L)&&oe(`Renk paletine eklendi: ${L.toLowerCase()}`)}),b?.addEventListener("keydown",A=>{A.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),b?.addEventListener("input",()=>{const A=b.value.trim(),L=A.startsWith("#")?A:`#${A}`;T.style.setProperty("--c",r(L)?L:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(A=>A.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const A=d.pop();A&&(s=A,_())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...s]),s=new Array(64).fill(""),_()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...s]),s=kM(),_()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const A=t.querySelector("#rozet-kaydet");A.disabled=!0,A.textContent="Kaydediliyor…";try{const L=await re("cmd_rozet_ciz",{pikseller:s});oe(L?.yuklendi?`Rozet kaydedildi — ${L.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${L.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${L?.hata||"ağ"})`)}catch(L){oe(`Rozet kaydedilemedi: ${L}`,"err")}finally{A.disabled=!1,A.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await re("cmd_rozet_sil"),s=new Array(64).fill(""),_(),oe("Rozet kaldırıldı"))});const v=()=>{m&&(m.innerHTML=h.length?h.map((A,L)=>`<span class="rozet-cip">${A}<button data-i="${L}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',m.querySelectorAll("button").forEach(A=>A.addEventListener("click",()=>{h.splice(Number(A.dataset.i),1),E()})))},E=async()=>{ce.config.atolye_izinli=[...h],await gn(),v();try{(await re("cmd_rozet_izinler",{isimler:h}))?.yuklendi||oe("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const A=t.querySelector("#rozet-isim"),L=A.value.trim();if(L){if(h.some(U=>U.toLowerCase()===L.toLowerCase())){oe("Bu isim zaten listede");return}h.push(L),A.value="",E(),oe(`${L} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",A=>{A.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),_(),S(),v(),re("cmd_rozet_oku").then(A=>{const L=A?.pikseller;Array.isArray(L)&&L.length===64&&(s=L,_())}).catch(()=>{})}function kM(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const dl="https://github.com/YKSAMI1/yikimlient/releases/latest";function Kf(i){return String(i??"").trim().replace(/^v/i,"")}async function AM(i){let e="",t="";try{const s=await re("cmd_check_updates"),r=Kf(s?.current),o=Kf(s?.latest);o&&o!==r&&(e=o)}catch{}try{const s=await re("cmd_upd_teshis"),r=Array.isArray(s?.platformlar)&&s.platformlar.length?s.platformlar.join(", "):"yok",o=[`HTTP ${s?.durum||"?"}`,`manifest ${s?.surum||"?"}`,`platform: ${r}`];s?.hata&&o.push(String(s.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=Jt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${Y("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Fl(dl).catch(()=>oe(`Tarayıcı açılamadı — adresi elle aç: ${dl}`,"err"))})}async function pg(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await re("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${Y("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await re("cmd_delete_emote",{adi:n.adi}),oe("Animasyon kaldırıldı"),pg(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function Ba(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Ha(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),ce.config[t]=a.classList.contains("on"),await gn()})}async function gn(){await re("cmd_save_settings",{config:ce.config}),await rn(),Si()}const mn=64,Ga=64,RM=40;class ul{w=mn;h=Ga;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(mn*Ga*4)}static bos(){return new ul}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new ul(this.veri)}piksel(e,t){if(e<0||t<0||e>=mn||t>=Ga)return[0,0,0,0];const n=(t*mn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const s=Math.max(1,Math.min(8,Math.floor(a))),r=e-Math.floor((s-1)/2),o=t-Math.floor((s-1)/2);for(let c=0;c<s;c++)for(let l=0;l<s;l++){const d=r+l,h=o+c;if(d<0||h<0||d>=mn||h>=Ga)continue;const u=(h*mn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,s,r=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),h=Math.abs(l-o),u=-Math.abs(d-c),f=o<l?1:-1,m=c<d?1:-1;let _=h+u;for(;this.boya(o,c,s,r),!(o===l&&c===d);){const p=2*_;p>=u&&(_+=u,o+=f),p<=h&&(_+=h,c+=m)}}kova(e,t,n){if(e<0||t<0||e>=mn||t>=Ga)return;const a=this.piksel(e,t);if(Zf(a,n))return;const s=[t*mn+e],r=new Uint8Array(mn*Ga);for(;s.length;){const o=s.pop();if(r[o])continue;r[o]=1;const c=o%mn,l=Math.floor(o/mn);Zf(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&s.push(o-1),c<mn-1&&s.push(o+1),l>0&&s.push(o-mn),l<Ga-1&&s.push(o+mn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>RM&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function Zf(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function CM(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function $n(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const Jf=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:$n(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:$n(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:$n(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:$n(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:$n(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:$n(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:$n(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:$n(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:$n(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:$n(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:$n(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:$n(0,48,4,12,4)}],Ka={x:12,y:1,w:10,h:16},iu={x:1,y:1,w:10,h:16},mg=20,LM=36,PM=2,DM=4,IM=1;function UM(i){const e=i?3:4,t=IM+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function gg(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function NM(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const s=e.getImageData(n.x,n.y,n.w,n.h).data;for(let r=3;r<s.length;r+=4)s[r]>8&&a++}catch{return 0}return a})(Ka)>0?Ka:iu:Ka}const $u=DM,_g=mg*$u,vg=LM*$u,zM=.3,Fc=2;let FM=null;function Qf(i,e,t,n,a,s,r){s<=0||r<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,s,r)}function jf(i,e,t,n,a,s,r){if(s<=0||r<=0)return;const o=FM??=document.createElement("canvas"),c=Math.round(s),l=Math.round(r);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${zM})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function OM(i,e,t,n=$u){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=UM(t),r=PM*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(mg/2*a,(31.3+Fc)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of s){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+Fc)*a;jf(i,e,o.yan,c,l,r,o.on.h*a),o.ust&&o.ustYan&&jf(i,e,o.ustYan,c,l,r,o.on.h*a)}for(const o of s){const c=o.x*a,l=(o.y+Fc)*a;Qf(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&Qf(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const BM=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],ln=64;function HM(i,e,t,n){const a=e.pafta;let s=e.slim,r=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,h=!1,u=8,f=!1,m=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${Y("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Bc(r)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${Y("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${ln*u}" height="${ln*u}"></canvas>
          <canvas id="ske-izgara" width="${ln*u}" height="${ln*u}"></canvas>
          <canvas id="ske-3d-tuval" hidden></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(O=>`<button class="seg-btn ${O===u?"aktif":""}" data-zum="${O}">${O}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-edit-3dbar">
          <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${Y("box")} 3D Çiz</button>
          <span class="sk-edit-seg" id="ske-katman" hidden>
            <button class="seg-btn aktif" data-kat="oto" title="Tıkladığın yüzeye boya (overlay açıksa overlay'e)">Otomatik</button>
            <button class="seg-btn" data-kat="taban">Skin</button>
            <button class="seg-btn" data-kat="ust">Overlay</button>
          </span>
          <button class="seg-btn" id="ske-izgara3d" title="Piksel ızgarasını karakterin üstünde göster">Izgara</button>
          <span class="sk-zum3d" id="ske-zum3d" role="group" aria-label="Karakter yakınlaştırma">
            <button class="seg-btn" data-zum3d="-1" title="Uzaklaş">−</button>
            <button class="seg-btn" data-zum3d="1" title="Yakınlaş">+</button>
            <button class="seg-btn" data-zum3d="0" title="Varsayılan mesafe">Sığdır</button>
          </span>
        </div>
        <div class="sk-3d-parca" id="ske-parca" hidden>
          <button class="seg-btn aktif" data-parca="kafa">Kafa</button>
          <button class="seg-btn aktif" data-parca="govde">Gövde</button>
          <button class="seg-btn aktif" data-parca="kollar">Kollar</button>
          <button class="seg-btn aktif" data-parca="bacaklar">Bacaklar</button>
          <button class="seg-btn aktif" data-parca="kaplama" title="Overlay katmanını göster/gizle (boyama katmanı soldaki Otomatik/Skin/Overlay seçimidir)">Overlay göster</button>
          <button class="seg-btn aktif" data-parca="kozmetik" title="Pelerin ve elitra kanadı">Pelerin</button>
        </div>
        <div class="sk-edit-onizleme">
          <canvas id="ske-onizleme"></canvas>
        </div>
        <div class="sk-arac-cubugu">
          <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${Y("brush")}</button>
          <button class="sk-arac" data-arac="silgi" title="Silgi">${Y("trash")}</button>
          <button class="sk-arac" data-arac="kova" title="Kova">${Y("bucket")}</button>
          <button class="sk-arac" data-arac="damla" title="Damlacık">${Y("picker")}</button>
          <span class="sk-arac-ayrac"></span>
          <button class="sk-arac" id="ske-geri-al" title="Geri Al">${Y("undo")}</button>
          <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${Y("redo")}</button>
        </div>
        <div class="sk-renk-satir">
          <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
          <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" />
          <div class="sk-kalinlik">
            ${[1,2,4].map(O=>`<button class="seg-btn ${O===1?"aktif":""}" data-kalinlik="${O}">${O}</button>`).join("")}
          </div>
        </div>
        <div class="sk-palet" id="ske-palet">
          ${BM.map(O=>`<button class="sk-palet-renk" data-renk="${O}" style="--c:${O}" title="${O}"></button>`).join("")}
        </div>
        <div class="sk-bolgeler">
          <div class="sk-bolgeler-ust">
            <b>Bölgeler</b>
            <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
          </div>
          <div class="sk-bolge-liste" id="ske-bolgeler">
            ${["taban","ust"].map(O=>`
              <div class="sk-bolge-grup">
                <span>${O==="taban"?"Taban katman":"Üst katman"}</span>
                ${Jf.filter(R=>R.katman===O).map(R=>`<button class="sk-bolge" data-bolge="${R.id}">${R.ad}</button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${Bc(r)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${Y("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${Y("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),b=p.querySelector("#ske-izgara"),T=g.getContext("2d"),x=b.getContext("2d"),S=p.querySelector("#ske-onizleme"),w=document.createElement("canvas");w.width=ln,w.height=ln;const k=w.getContext("2d"),v=un();v.kur(S),v.tuvalDoku(w,s),(async()=>{try{const O=await re("cmd_kozmetik_oku");O.pelerin_dosya&&O.pelerin_aktif!==!1&&await v.pelerin({url:Dt(O.pelerin_dosya)})}catch{}})();function E(){const O=new ImageData(new Uint8ClampedArray(a.veri),ln,ln);k.putImageData(O,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(w,0,0,g.width,g.height),A(),v.dokuTazele()}function A(){x.clearRect(0,0,b.width,b.height);const O=b.width/ln;if(u>=8){x.strokeStyle="rgba(255,255,255,0.09)",x.lineWidth=1;for(let R=1;R<ln;R++)x.beginPath(),x.moveTo(R*O,0),x.lineTo(R*O,b.height),x.stroke(),x.beginPath(),x.moveTo(0,R*O),x.lineTo(b.width,R*O),x.stroke()}if(d){x.strokeStyle="rgba(255,150,60,0.35)",x.lineWidth=1,x.setLineDash([]);for(const R of d.dilimler)R.x===d.x&&R.y===d.y||x.strokeRect(R.x*O+.5,R.y*O+.5,R.w*O-1,R.h*O-1);if(x.strokeStyle="rgba(255,150,60,0.95)",x.lineWidth=2,x.setLineDash([6,4]),x.strokeRect(d.x*O+1,d.y*O+1,d.w*O-2,d.h*O-2),x.setLineDash([]),h){x.fillStyle="rgba(0,0,0,0.55)",x.beginPath(),x.rect(0,0,b.width,b.height);for(const R of d.dilimler)x.rect(R.x*O,R.y*O,R.w*O,R.h*O);x.fill("evenodd")}}}function L(O){const R=g.getBoundingClientRect(),ke=Math.floor((O.clientX-R.left)/R.width*ln),Ge=Math.floor((O.clientY-R.top)/R.height*ln);return[Math.max(0,Math.min(ln-1,ke)),Math.max(0,Math.min(ln-1,Ge))]}function U(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",O=>{if(O.button!==0)return;const[R,ke]=L(O);if(f=!0,m=R,_=ke,g.setPointerCapture(O.pointerId),o==="damla"){l=a.damla(R,ke),P(l);return}a.katmanBasla(),o==="kova"?a.kova(R,ke,U()):a.boya(R,ke,U(),c),E()}),g.addEventListener("pointermove",O=>{if(!f)return;const[R,ke]=L(O);R===m&&ke===_||((o==="kalem"||o==="silgi")&&(a.cizgi(m,_,R,ke,U(),c),E()),m=R,_=ke)});const N=()=>{f=!1,m=-1,_=-1};g.addEventListener("pointerup",N),g.addEventListener("pointercancel",N);function P(O){l=O;const R=GM(O);p.querySelector("#ske-renk").value=R,p.querySelector("#ske-renk-hex").value=R,p.querySelectorAll(".sk-palet-renk").forEach(ke=>{ke.classList.toggle("aktif",ke.dataset.renk?.toLowerCase()===R.toLowerCase())})}p.querySelector("#ske-renk").addEventListener("input",O=>{P(Oc(O.target.value))}),p.querySelector("#ske-renk-hex").addEventListener("change",O=>{const R=O.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(R)&&P(Oc(R))}),p.querySelector("#ske-palet")?.addEventListener("click",O=>{const R=O.target.closest(".sk-palet-renk");R?.dataset.renk&&P(Oc(R.dataset.renk))}),p.querySelectorAll(".sk-arac[data-arac]").forEach(O=>{O.addEventListener("click",()=>{o=O.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(R=>R.classList.remove("aktif")),O.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(O=>{O.addEventListener("click",()=>{c=Number(O.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(R=>R.classList.remove("aktif")),O.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(O=>{O.addEventListener("click",()=>{u=Number(O.dataset.zum),g.width=g.height=b.width=b.height=ln*u,p.querySelectorAll("[data-zum]").forEach(R=>R.classList.remove("aktif")),O.classList.add("aktif"),E()})}),p.querySelectorAll("[data-slim]").forEach(O=>{O.addEventListener("click",()=>{s=O.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(R=>R.classList.remove("aktif")),O.classList.add("aktif"),v.tuvalDoku(w,s),Fe(s?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let F=!1,W="oto",G=!1,Q=!1;const X=p.querySelector("#ske-katman"),j=p.querySelector("#ske-3d"),ie=p.querySelector("#ske-izgara3d"),Te=p.querySelector("#ske-parca"),be=p.querySelector("#ske-3d-tuval"),Ke=p.querySelector(".sk-edit-onizleme"),Be=p.querySelector(".sk-edit-zum"),$e={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},Z=()=>{v.parcaGoster("kafa",$e.kafa),v.parcaGoster("govde",$e.govde),v.parcaGoster("kollar",$e.kollar),v.parcaGoster("bacaklar",$e.bacaklar),v.kaplamaGoster($e.kaplama),v.kozmetikGoster($e.kozmetik)},ae=O=>{F=O,G=!1,v.etkilesimKapali=O,Q=O,ie?.classList.toggle("aktif",Q),g.hidden=O,b.hidden=O,be.hidden=!O,Ke&&(Ke.hidden=O),Te&&(Te.hidden=!O),X&&(X.hidden=!O),Be&&(Be.style.display=O?"none":""),j?.classList.toggle("aktif",O),j&&(j.innerHTML=`${Y("box")} ${O?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{O?(v.kur(be),v.bakisaAyarla(.35,.04),v.tuvalDoku(w,s),Z(),v.izgaraGoster(Q,!0),Fe("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(v.kur(S),v.tuvalDoku(w,s),Z(),v.izgaraGoster(!1,!0),Fe(""))})};j?.addEventListener("click",()=>ae(!F)),ie?.addEventListener("click",()=>{Q=!Q,ie.classList.toggle("aktif",Q),v.izgaraGoster(Q,!0),Fe(Q?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach(O=>{O.addEventListener("click",()=>{const R=Number(O.dataset.zum3d);R===0?v.zoomAyarla(2.75):v.zoomAyarla(v.zoomAl()*(R<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach(O=>{O.addEventListener("click",()=>{const R=O.dataset.parca;$e[R]=!$e[R],O.classList.toggle("aktif",$e[R]),Z()})}),p.querySelectorAll("[data-kat]").forEach(O=>{O.addEventListener("click",()=>{const R=O.dataset.kat;W=R==="ust"?"ust":R==="taban"?"taban":"oto",p.querySelectorAll("[data-kat]").forEach(ke=>ke.classList.remove("aktif")),O.classList.add("aktif"),Fe(W==="ust"?"Overlay seçili — şapka, ceket, kolluk ve pantolon üstüne çiziyorsun.":W==="taban"?"Skin (taban) seçili — overlay'in altındaki katmana çiziyorsun.":"Otomatik: hangi yüzeye tıklarsan oraya boyanır (ceket/şapka → overlay).")})});const Se=(O,R)=>{const ke=v.atlasNoktasi(O,W);ke&&(R&&a.katmanBasla(),a.boya(ke.x,ke.y,U(),c),E())};be.addEventListener("contextmenu",O=>{F&&O.preventDefault()}),be.addEventListener("pointerdown",O=>{if(F&&!(O.pointerType==="mouse"&&O.button!==0)){G=!0;try{be.setPointerCapture(O.pointerId)}catch{}Se(O,!0)}}),be.addEventListener("pointermove",O=>{F&&G&&Se(O,!1)});const Oe=()=>{G=!1};be.addEventListener("pointerup",Oe),be.addEventListener("pointercancel",Oe),p.querySelector("#ske-bolgeler")?.addEventListener("click",O=>{const R=O.target.closest("[data-bolge]");R?.dataset.bolge&&(d=Jf.find(ke=>ke.id===R.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(ke=>ke.classList.remove("aktif")),R.classList.add("aktif"),A())}),p.querySelector("#ske-sadece").addEventListener("change",O=>{h=O.target.checked,A()});const xe=()=>{a.geriAl()&&E()},We=()=>{a.ileriAl()&&E()};p.querySelector("#ske-geri-al")?.addEventListener("click",xe),p.querySelector("#ske-ileri-al")?.addEventListener("click",We);const Lt=O=>{!document.body.contains(p)||!(O.ctrlKey||O.metaKey)||(O.key.toLowerCase()==="z"?(O.preventDefault(),O.shiftKey?We():xe()):O.key.toLowerCase()==="s"&&(O.preventDefault(),dt(!0)))};window.addEventListener("keydown",Lt);function Fe(O){const R=p.querySelector("#ske-uyari");R.textContent=O}function je(){return new Promise(O=>{w.toBlob(async R=>{if(!R)return O([]);const ke=new Uint8Array(await R.arrayBuffer());O(Array.from(ke))},"image/png")})}async function dt(O){if(r=p.querySelector("#ske-ad").value.trim()||r,r||(r="Skin"),O&&!await VM("Skini giy",`<b>${Bc(r)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const ke=await je();if(!ke.length){Fe("PNG üretilemedi.");return}const Ge=p.querySelector(O?"#ske-giy":"#ske-kitaplik");Ge.disabled=!0,Fe(O?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:ke,slim:s,ad:r},O),Fe(""),vt()}catch(C){Fe(String(C)),Ge.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void dt(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void dt(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const O=await je(),R=p.querySelector("#ske-ad");try{const{invoke:ke}=await bt(async()=>{const{invoke:C}=await Promise.resolve().then(()=>Tt);return{invoke:C}},void 0),Ge=await ke("cmd_skin_disa_aktar",{ad:R.value.trim()||"skin",veri:O});oe(`Dışa aktarıldı: ${Ge}`)}catch(ke){oe(String(ke),"err")}});const qe=document.createElement("button");qe.className="btn ghost sk-dosya-btn",qe.innerHTML=`${Y("image")} Dosya`;const ot=document.createElement("input");ot.type="file",ot.accept="image/png",ot.style.display="none",qe.addEventListener("click",()=>ot.click()),ot.addEventListener("change",async()=>{const O=ot.files?.[0];O&&await Qt(O),ot.value=""}),p.querySelector("#ske-geri").after(qe),p.appendChild(ot);function Nt(){return new Promise(O=>{const{root:R,close:ke}=Jt(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${Y("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${Y("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let Ge=!1;const C=y=>{Ge||(Ge=!0,ke(),O(y))};R.querySelector("#se-wide")?.addEventListener("click",()=>C(!1)),R.querySelector("#se-slim")?.addEventListener("click",()=>C(!0)),R.querySelector("#se-iptal")?.addEventListener("click",()=>C(null))})}async function Qt(O){try{const R=URL.createObjectURL(O),ke=await new Promise((V,K)=>{const le=new Image;le.onload=()=>V(le),le.onerror=()=>K(new Error("görsel okunamadı")),le.src=R}),Ge=document.createElement("canvas");Ge.width=ke.width,Ge.height=ke.height;const C=Ge.getContext("2d");C.drawImage(ke,0,0),URL.revokeObjectURL(R);const y=C.getImageData(0,0,ke.width,ke.height);if(!(ke.width===64&&(ke.height===64||ke.height===32))){oe(`Skin 64×64 veya 64×32 olmalı (bu dosya ${ke.width}×${ke.height})`,"err");return}const z=await Nt();if(z===null)return;s=z,p.querySelectorAll("[data-slim]").forEach(V=>{V.classList.toggle("aktif",V.dataset.slim===(s?"1":"0"))}),a.katmanBasla(),ke.height===64?a.veri.set(y.data):a.veri.set(CM(y.data)),E(),v.tuvalDoku(w,s)}catch(R){oe(String(R),"err")}}const vt=()=>{window.removeEventListener("keydown",Lt),p.remove();try{v.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",vt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const O=p.querySelector(".sk-edit-kayit");O.scrollIntoView({behavior:"smooth",block:"center"}),O.querySelector("#ske-ad").focus()}),P(l),E()}function GM(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function Oc(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Bc(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function VM(i,e,t){return new Promise(n=>{const{root:a,close:s}=Jt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Qe=null,qt=null,xa=null,ui=!1,zs=null,ep=!1,au=null;const Wt=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Wu(i){wl(),Qe=null,qt=null,xa=null,zs=null;const e=Ii();if(!e||e.kind!=="microsoft"){$M(i);return}i.innerHTML=WM(e.name),qM(i,e.id),Tl(i,e.id,!0)}function $M(i){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${Y("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${Y("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{En(()=>Wu(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>st("settings"))}function WM(i){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${Y("check")} Orijinal hesap</span>
          <button class="btn" id="sk-kozmetik">${Y("sparkle")} Kozmetikler</button>
          <button class="btn primary" id="sk-duzenle">${Y("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${Wt(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${Y("undo")} Yedeği Geri Yükle</button>
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
              ${Y("plus")}
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
    </div>`}function qM(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void eE(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>st("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Hc(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void ZM(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n.click())}),n.addEventListener("change",()=>{const s=n.files?.[0];s&&ip(i,e,s),n.value=""}),t.addEventListener("dragover",s=>{s.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",s=>{s.preventDefault(),t.classList.remove("uzerinde");const r=s.dataTransfer?.files?.[0];r&&ip(i,e,r)});const a=(s,r)=>{const o=i.querySelector(s);o?.addEventListener("click",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||tp(i,l)}),o?.addEventListener("dblclick",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||(tp(i,l),r())})};a("#sk-kitaplik",()=>void Hc(i,e)),a("#sk-varsayilan",()=>void Hc(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",s=>{const r=s.target.closest(".skin-sil");if(!r)return;s.stopPropagation();const o=r.closest(".skin-kart");o?.dataset.id&&QM(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",s=>{const r=s.target.closest(".skin-pelerin");if(!r)return;const o=r.dataset.id||null;JM(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",s=>{s.target.closest("#sk-yenile")&&Tl(i,e,!1)})}async function Tl(i,e,t){try{Qe=await re("cmd_skin_hub",{id:e}),qt=qt??XM(),os(i),t?bg(i):qu(i),kl(),Al(),Qe.cevrimdisi?oe("Çevrimdışısın — son bilinen skin gösteriliyor"):Qe.hata&&oe(Qe.hata,"err")}catch(n){oe(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function XM(){if(!Qe)return null;if(Qe.aktif)return{tur:"kayit",id:`aktif:${Qe.aktif.dosya}`,dosya:Qe.aktif.dosya,slim:Qe.aktif.slim,ad:"Aktif skin"};const i=Qe.kitaplik[0];if(i)return yg(i);const e=Qe.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function yg(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function os(i){if(!Qe)return;au=i;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Qe.cevrimdisi?`<div class="skin-serit-cevrimdisi">${Y("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Qe.kitaplik.length?(t.innerHTML=Qe.kitaplik.map(c=>YM(c)).join(""),t.querySelectorAll(".skin-yuz").forEach(c=>{const l=c.dataset.dosya;l&&ap(c,l,c.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const o=i.querySelector("#sk-adet");o&&(o.textContent=Qe.kitaplik.length?`${Qe.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Qe.varsayilanlar||[]).map(o=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${Wt(o.ad)}" data-dosya="${Wt(o.dosya)}"
           data-slim="${o.slim?1:0}" data-ad="${Wt(o.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${_g}" height="${vg}"
                  data-dosya="${Wt(o.dosya)}" data-slim="${o.slim?1:0}"></canvas>
          <span class="skin-model">${o.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${Wt(o.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(o=>{const c=o.dataset.dosya;c&&ap(o,c,o.dataset.slim==="1")})),xg(i);const a=i.querySelector("#sk-aktif-ad");if(a){const o=qt;a.textContent=Qe.cevrimdisi?"çevrimdışı önizleme":o?`${o.ad} · ${o.slim?"Slim":"Wide"}`:"skin seç"}const s=i.querySelector("#sk-giy");s&&(s.disabled=!qt||ui,s.textContent=ui?"Bekle…":"Bu Skini Giy");const r=i.querySelector("#sk-yedek");r&&(r.style.display=Qe.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(o=>{const c=qt&&o.dataset.id===qt.id;o.classList.toggle("secili",!!c);const l=o.querySelector(".skin-rozet.secim");if(c&&!l){const d=document.createElement("span");d.className="skin-rozet secim",d.textContent=xa&&o.dataset.id===xa?"GİYİLİ":"SEÇİLİ",o.appendChild(d)}else!c&&l?l.remove():c&&l&&(l.textContent=xa&&o.dataset.id===xa?"GİYİLİ":"SEÇİLİ")})}function xg(i){if(!Qe)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!Qe.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=Qe.pelerinler.find(n=>n.aktif);e.innerHTML=Qe.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${Wt(n.id)}" title="${Wt(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${Wt(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${Wt(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&nE(n,a)})}function YM(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${Wt(i.id)}" data-dosya="${Wt(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${Wt(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${_g}" height="${vg}"
                data-dosya="${Wt(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${Wt(i.ad)}</div>
      <button class="skin-sil" title="Sil">${Y("trash")}</button>
    </div>`}function tp(i,e){qt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},qu(),os(i)}function bg(i){const e=i.querySelector("#skin-canvas");if(!e)return;un().kur(e),qu()}function qu(i){const e=un();qt&&e.skin({url:Dt(qt.dosya),slim:qt.slim})}async function KM(i){const e=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=r,o.src=Dt(i)}),t=gg(e),n=t.getContext("2d");if(!n)return Dt(i);const a=n.getImageData(Ka.x,Ka.y,Ka.w,Ka.h);return n.putImageData(a,iu.x,iu.y),t.toDataURL("image/png")}function kl(){if(!Qe)return;const e=Qe.pelerinler.find(n=>n.aktif&&n.dosya)?.dosya||null;if(e===zs)return;if(zs=e,!e){un().pelerin(null);return}const t=e;KM(e).then(n=>{zs===t&&un().pelerin({url:n})}).catch(()=>{zs===t&&un().pelerin(null)})}let np=null;async function Al(){try{const i=await re("cmd_kozmetik_oku"),e=i.pelerin_aktif===!1?null:i.pelerin_dosya;if(!!e!==ep&&(ep=!!e,au&&xg(au)),!e||e===np)return;np=e,await un().pelerin({url:Dt(e)}),un().bakisaAyarla(2.5,.1)}catch{}}async function Hc(i,e){if(!qt||ui)return;const t=qt;if(await Xu("Skini giy",`<b>${Wt(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){ui=!0,os(i);try{let a;if(t.tur==="kayit"&&Qe?.kitaplik.some(s=>s.id===t.id))a=await re("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const s=await Sg(t.dosya);a=await re("cmd_skin_giy",{id:e,veri:s,slim:t.slim,ad:null})}Qe=a,xa=t.tur==="kayit"?t.id:null,oe("Skin giyildi — sunucularda görünecek.")}catch(a){oe(String(a),"err")}finally{ui=!1,os(i)}}}async function ZM(i,e){if(!(ui||!await Xu("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){ui=!0;try{Qe=await re("cmd_skin_yedek_geri_yukle",{id:e}),xa=null,oe("Yedek skin geri yüklendi.")}catch(n){oe(String(n),"err")}finally{ui=!1,os(i),kl(),Al()}}}async function JM(i,e,t){if(!(ui||!Qe)&&!(t===null&&!Qe.pelerinler.some(n=>n.aktif))){ui=!0;try{Qe=await re("cmd_skin_pelerin",{id:e,capeId:t}),oe(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),kl(),Al()}catch(n){oe(String(n),"err")}finally{ui=!1,os(i)}}}async function QM(i,e,t,n){if(await Xu("Skini sil",`<b>${Wt(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await re("cmd_skin_sil",{kayitId:t}),qt?.id===t&&(qt=null),oe("Skin silindi."),await Tl(i,e,!1)}catch(s){oe(String(s),"err")}}async function ip(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",s=await jM(a);if(s===null)return;await re("cmd_skin_kaydet",{ad:a,veri:n,slim:s}),oe(`Skin kitaplığa eklendi · ${s?"Slim":"Wide"}`),await Tl(i,e,!1)}catch(n){oe(String(n),"err")}}function jM(i){return new Promise(e=>{const{root:t,close:n}=Jt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${Wt(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${Y("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${Y("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const s=c=>{c.key==="Escape"&&r(null)},r=c=>{a||(a=!0,window.removeEventListener("keydown",s),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>r(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>r(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>r(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&r(null)}),window.addEventListener("keydown",s)})}async function eE(i,e){const t=qt?.dosya||Qe?.aktif?.dosya||Qe?.varsayilanlar[0]?.dosya;if(!t){oe("Önce bir skin seç.","err");return}let n;try{n=await tE(await Sg(t))}catch(o){oe(String(o),"err");return}const a=new Date,s=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let r=!1;HM(i,{pafta:n,slim:qt?.slim??!1,ad:s},async(o,c)=>{const l=await re("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Qe=await re("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),xa=l.id,oe("Skin giyildi — sunucularda görünecek.")):(Qe=await re("cmd_skin_hub",{id:e}),oe("Kitaplığa kaydedildi.")),qt=yg(l),r=!0},()=>{if(!r){Wu(i);return}os(i),wl(),zs=null,bg(i),kl(),Al()})}async function tE(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s.imageSmoothingEnabled=!1;const r=Mg(n),o=n.naturalHeight===32;return s.drawImage(r,0,0,64,o?32:64),new ul(new Uint8ClampedArray(s.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Sg(i){const e=await fetch(Dt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Mg(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function ap(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&OM(a,Mg(n),t)},n.src=Dt(e)}function nE(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const a=gg(t),s=NM(a);n.drawImage(a,s.x,s.y,s.w,s.h,0,0,i.width,i.height)},t.src=Dt(e)}function Xu(i,e,t){return new Promise(n=>{const{root:a,close:s}=Jt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const St=64,Tn=32,Ra=St*Tn,iE={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},Rl=[{id:"p-dis",ad:"Dış (görünen)",x:12,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:1,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],Cl=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function Ll(i){return(i==="pelerin"?Rl:Cl)[0]}function Eg(i){return(i==="pelerin"?Rl:Cl)[1]}function us(){return Array.from({length:Ra},()=>"")}function Ai(i){return!i.some(e=>e!=="")}function sp(){const i=document.createElement("canvas");return i.width=St,i.height=Tn,i}function hl(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,St,Tn),t&&t(n);for(let a=0;a<Tn;a++)for(let s=0;s<St;s++){const r=e[a*St+s];r&&(n.fillStyle=r,n.fillRect(s,a,1,1))}}}function aE(i){const e=i.getImageData(0,0,St,Tn).data,t=new Array(Ra);for(let n=0;n<Ra;n++){const a=e[n*4+3];t[n]=a<24?"":`#${Gc(e[n*4])}${Gc(e[n*4+1])}${Gc(e[n*4+2])}`}return t}const Gc=i=>i.toString(16).padStart(2,"0"),sE=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],rE="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function Yu(){const i=us();for(const e of rE.split(";")){const[t,n,a]=e.split(",");i[Number(n)*St+Number(t)]=sE[Number(a)]}return i}const Ku=["pelerin","kanat"],oE=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],rp=8;let Pl=us(),eo=us(),Dl=!1,Il=!1,dn="pelerin",Ws="#ff8a3d",Za=!1,Kn=!1,Ea=!1,Xn=!1,ba=!1,qs=!0,Yr=null,Kr=null;const Ja=new Map,lE=Yu(),cE=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Qn=i=>i==="pelerin"?Pl:eo,fl=i=>i==="pelerin"?Rl:Cl;function dE(i){wl(),Pl=us(),eo=Yu(),Dl=!1,Il=!1,dn="pelerin",Ws="#ff8a3d",Za=!1,Kn=!1,Ea=!1,ba=!1,qs=!0,Yr=null,Kr=null,Ja.clear(),i.innerHTML=uE(),hE(i)}function uE(){return`
    <div class="page-wrap kozmetik-sayfa" id="kz-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitranı doğrudan Minecraft'ın 64×32 dokusu üzerinde çiz — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${Y("user")} Karakterde görünüm</span>
            <button class="btn ghost sm" id="kz-yon" title="Ön / arka bakış">Önden gör</button>
          </div>
          <div class="kz-secim" id="kz-secim" role="group" aria-label="Önizlenecek kozmetik">
            <button class="seg-btn aktif" data-secim="pelerin" title="Yalnız pelerini göster">Pelerin</button>
            <button class="seg-btn" data-secim="kanat" title="Yalnız elitrayı göster">Elitra</button>
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
            <button class="seg-btn aktif" id="kz-3d-kalem">${Y("brush")} Kalem</button>
            <button class="seg-btn" id="kz-3d-silgi">${Y("trash")} Silgi</button>
            <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${Y("undo")} Döndür</button>
            <button class="seg-btn" id="kz-3d-oyuncu">${Y("user")} Oyuncuyu gizle</button>
            <button class="seg-btn kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${Y("image")} 2D'ye geç</button>
            <span class="kz-3d-renk">
              <input type="color" id="kz-3d-renk" value="#ff8a3d" title="Fırça rengi" />
              <span class="kz-3d-palet" id="kz-3d-palet"></span>
            </span>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Sürükle: döndür · Tekerlek: yakınlaş</p>
        </aside>

        <div class="kz-izgara">
          ${op("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${op("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function op(i,e,t,n,a){return`
    <section class="kz-kart" id="kz-${i}-kart" data-tur="${i}">
      <div class="kz-kart-ust">
        <h3>${Y(t)} ${e}</h3>
        <span class="kz-rozet" id="kz-${i}-durum"></span>
      </div>
      <div class="kz-tuval-sar" id="kz-${i}-sar">
        <canvas class="kz-tuval" id="kz-${i}-tuval" width="${St}" height="${Tn}"
          aria-label="${n} atlası — 64×32 piksel"></canvas>
        <canvas class="kz-rehber" id="kz-${i}-rehber"
          width="${St*rp}" height="${Tn*rp}"></canvas>
      </div>
      <div class="kz-bolgeler" id="kz-${i}-bolgeler"></div>
      <div class="kz-araclar" id="kz-${i}-palet"></div>
      <div class="kz-renk-satir">
        <label for="kz-${i}-renk">Renk</label>
        <input type="color" id="kz-${i}-renk" value="#ff8a3d" />
        <button class="btn" id="kz-${i}-sil" title="Silgi (çizerek siler)">${Y("trash")} Silgi</button>
        <button class="btn" id="kz-${i}-temizle" title="Atlasın tamamını temizle">${Y("trash")} Temizle</button>
      </div>
      <div class="kz-alt">
        <button class="btn" id="kz-${i}-3d" data-ciz3d="${i}"
          title="Doğrudan 3D modelin her yüzüne boya">${Y("box")} 3D Çiz</button>
        <label class="btn" for="kz-${i}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${Y("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${i}-dosya" accept="image/*" style="display:none" />
        <button class="btn primary" id="kz-${i}-kaydet">${Y("check")} Kaydet</button>
        <button class="btn" id="kz-${i}-kaldir">Kaldır</button>
      </div>
      <p class="kz-ipucu kz-kart-ipucu">${a}</p>
    </section>`}async function hE(i){let e;try{e=await re("cmd_kozmetik_oku")}catch(d){oe(String(d),"err"),e={pelerin:null,kanat:null}}const t=d=>{try{const h=localStorage.getItem(`yikim:kozmetik:${d}:yedek`),u=h?JSON.parse(h):null;return Array.isArray(u)&&u.length===Ra?u.slice():null}catch{return null}},n=(d,h)=>d?d.length===Ra?d.slice():d.length===EE[h]?TE(d,h):null:null,a=n(e.pelerin,"pelerin"),s=n(e.kanat,"kanat");Pl=!!a&&!Ai(a)?a:t("pelerin")??a??us(),eo=!!s&&!Ai(s)?s:t("kanat")??s??Yu(),Dl=!!a&&!Ai(a),Il=!!s&&!Ai(s),Yr=sp(),Kr=sp(),wg(),fE(i);for(const d of Ku)xE(i,d);Ul(i),Tg(i),SE(i);const c=i.querySelector("#kz-pelerin-aktif"),l=i.querySelector("#kz-kanat-aktif");c&&(c.checked=e.pelerin_aktif??dp("pelerin")??!!e.pelerin_dosya),l&&(l.checked=e.kanat_aktif??dp("kanat")??!!e.kanat_dosya)}function fE(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=un();t.kur(e),(async()=>{try{const n=Ii();let a=null;if(n){const s=await re("cmd_skin_hub",{id:n.id});a=s?.aktif?.dosya?s.aktif:s?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:Dt(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function pE(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of Rl)i.fillRect(e.x,e.y,e.w,e.h)}function mE(i){if(!Ai(eo)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of Cl)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<Ra;e++){const t=lE[e];t&&(i.fillStyle=t,i.fillRect(e%St,Math.floor(e/St),1,1))}i.restore()}function wg(){Yr&&hl(Yr,Pl,pE),Kr&&hl(Kr,eo,mE),un().dokuTazele()}function Ul(i){const e=un();e.pelerinTuval(dn==="pelerin"?Yr:null),e.kanatTuval(dn==="kanat"?Kr:null),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===dn)});for(const t of Ku)i.querySelector(`#kz-${t}-kart`)?.classList.toggle("secili",dn===t);i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===dn;t.classList.toggle("aktif",Kn&&n),t.innerHTML=Kn&&n?`${Y("image")} 2D'ye geç`:`${Y("box")} 3D Çiz`})}function is(i,e){const t=i.querySelector(`#kz-${e}-tuval`);t&&hl(t,Qn(e)),Ar(i,e),Zu(i,e),wg()}function Zu(i,e){const t=i.querySelector(`#kz-${e}-durum`);if(!t)return;const n=e==="pelerin"?Dl:Il;t.textContent=n&&!Ai(Qn(e))?"KAYITLI":""}function gE(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/St;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const s of e){const r=t?.id===s.id;if(n.strokeStyle=r?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=r?2:1,n.setLineDash(r?[]:[4,3]),n.strokeRect(s.x*a+.5,s.y*a+.5,s.w*a-1,s.h*a-1),n.setLineDash([]),s.h*a<20)continue;const o=s.w*a<46,c=(s.x+s.w/2)*a,l=Math.min(i.height-10,Math.max(10,(s.y+s.h/2)*a));n.save(),n.translate(c,l),o&&n.rotate(-Math.PI/2);const d=n.measureText(s.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=r?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(s.ad,0,0),n.restore()}}function Ar(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&gE(t,fl(e),Ja.get(e)??null)}function lp(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*St),a=Math.floor((i.clientY-t.top)/t.height*Tn);return n<0||a<0||n>=St||a>=Tn?null:{x:n,y:a}}function _E(i,e,t){for(const n of fl(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function vE(i,e,t,n,a,s){let r=e,o=t;const c=Math.abs(n-e),l=Math.abs(a-t),d=e<n?1:-1,h=t<a?1:-1;let u=c-l;for(;r>=0&&r<St&&o>=0&&o<Tn&&(i[o*St+r]=s),!(r===n&&o===a);){const f=2*u;f>-l&&(u-=l,r+=d),f<c&&(u+=c,o+=h)}}function yE(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;cp(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&cp(n,i)}function cp(i,e){i.innerHTML=oE.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>Rr(e,t.dataset.renk??"#ffffff"))})}function Rr(i,e,t=!0){Ws=e,t&&(Za=!1);for(const a of Ku){const s=i.querySelector(`#kz-${a}-renk`);s&&(s.value=e),i.querySelectorAll(`#kz-${a}-palet .kz-renk`).forEach(r=>{r.classList.toggle("aktif",(r.dataset.renk??"").toLowerCase()===e.toLowerCase())}),i.querySelector(`#kz-${a}-sil`)?.classList.toggle("aktif",Za)}const n=i.querySelector("#kz-3d-renk");n&&(n.value=e),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(a=>{a.classList.toggle("aktif",(a.dataset.renk??"").toLowerCase()===e.toLowerCase())}),t&&Kn&&(Ea=!1,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"))}function xE(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;yE(i,e),hl(t,Qn(e)),Ar(i,e),Zu(i,e),bE(i,e),e==="pelerin"&&Rr(i,Ws,!1);let n=!1,a=-1,s=-1;const r=(l,d)=>{const h=Qn(e),u=Za?"":Ws;a>=0&&s>=0?vE(h,a,s,l,d,u):h[d*St+l]=u,a=l,s=d,is(i,e)};t.addEventListener("contextmenu",l=>l.preventDefault()),t.addEventListener("pointerdown",l=>{dn!==e&&(dn=e,Ul(i)),n=!0,a=-1,s=-1;try{t.setPointerCapture(l.pointerId)}catch{}const d=lp(l,t);d&&r(d.x,d.y)}),t.addEventListener("pointermove",l=>{const d=lp(l,t),h=d?_E(e,d.x,d.y):null;(Ja.get(e)??null)?.id!==(h?.id??null)&&(Ja.set(e,h),Ar(i,e)),!(!d||!n)&&r(d.x,d.y)});const o=()=>{n=!1,a=-1,s=-1};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",()=>{n||Ja.get(e)&&(Ja.set(e,null),Ar(i,e))}),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",l=>{const d=l.target.value;Rr(i,d)}),i.querySelector(`#kz-${e}-sil`)?.addEventListener("click",()=>{Za=!Za,Rr(i,Ws,!1),oe(Za?"Silgi açık — çizerek silersin.":"Kalem açık.")}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{const l=Qn(e);for(let d=0;d<l.length;d++)l[d]="";is(i,e),oe(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(Kn&&dn===e){su(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}su(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void hp(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{const l=Qn(e);for(let d=0;d<l.length;d++)l[d]="";is(i,e),hp(i,e)});const c=i.querySelector(`#kz-${e}-dosya`);c?.addEventListener("change",()=>{const l=c.files?.[0];l&&kE(i,e,l),c.value=""})}function bE(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=fl(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=fl(e).find(r=>r.id===n.dataset.bolge)??null,s=r=>{Ja.set(e,r?a:null),Ar(i,e)};n.addEventListener("pointerenter",()=>s(!0)),n.addEventListener("pointerleave",()=>s(!1))}))}function su(i,e,t){e&&t&&(dn=t),Kn=e,Ea=!1,e||(ba=!1),e||(Xn=!1);const n=un();n.etkilesimKapali=e&&!Xn,n.izgaraGoster(e),n.oyuncuGoster(!ba),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const s=i.querySelector("#kz-3d-oyuncu");s&&(s.innerHTML=`${Y("user")} ${ba?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!Ea),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&Ea),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&Xn);const r=i.querySelector("#kz-sahne-alt");r&&(r.textContent=e?Xn?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),Ul(i),requestAnimationFrame(()=>n.boyutGuncelle())}function SE(i){const e=async(c,l,d)=>{const h=Qn(l),u=`yikim:kozmetik:${l}:yedek`;if(!d&&!Ai(h))try{localStorage.setItem(u,JSON.stringify(h))}catch{}try{await re("cmd_kozmetik_aktif",{[l]:d});return}catch{}if(!d){await ru(l,us());return}let f=[];try{const m=localStorage.getItem(u),_=m?JSON.parse(m):null;Array.isArray(_)&&_.length===Ra&&(f=_)}catch{f=[]}!f.length&&!Ai(h)&&(f=h.slice()),f.length&&(await ru(l,f),h.splice(0,h.length,...f),is(c,l))},t=i.querySelector("#kz-sahne");if(!t)return;const n=un();let a=!1;const s=c=>{const l=n.kozmetikNoktasi(c,dn);if(!l||l.x<0||l.y<0||l.x>=St||l.y>=Tn)return;const d=Qn(dn),h=Ea?"":Ws,u=l.y*St+l.x;d[u]!==h&&(d[u]=h,is(i,dn))};t.addEventListener("contextmenu",c=>{Kn&&c.preventDefault()}),t.addEventListener("pointerdown",c=>{if(!(!Kn||Xn)&&!(c.pointerType==="mouse"&&c.button!==0)){a=!0;try{t.setPointerCapture(c.pointerId)}catch{}s(c)}}),t.addEventListener("pointermove",c=>{Kn&&a&&s(c)});const r=()=>{a=!1};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),i.querySelectorAll("[data-secim]").forEach(c=>{c.addEventListener("click",()=>{dn=c.dataset.secim??"pelerin",Ul(i)})}),i.querySelector("#kz-3d-renk")?.addEventListener("input",c=>{Rr(i,c.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[c,l]of o)i.querySelector(c)?.addEventListener("change",d=>{const h=d.target,u=h.checked;up(l,u),(async()=>{try{await e(i,l,u),oe(l==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(f){h.checked=!u,up(l,!u),oe(String(f),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{qs=!qs,Tg(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{Ea=!1,Xn=!1,n.etkilesimKapali=Kn,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{Ea=!0,Xn=!1,n.etkilesimKapali=Kn,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{Xn=!Xn,n.etkilesimKapali=Kn&&!Xn,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",Xn);const l=i.querySelector("#kz-sahne-alt");l&&(l.textContent=Xn?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const c=i.querySelector("#kz-3d-oyuncu");ba=!ba,n.oyuncuGoster(!ba),c&&(c.innerHTML=`${Y("user")} ${ba?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const c=dn;su(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${c}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function Tg(i){un().bakisaAyarla(qs?2.5:0,qs?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=qs?"Önden gör":"Arkadan gör")}const Vc=i=>i.toString(16).padStart(2,"0"),ME=(i,e,t)=>i[t*St+e]??"",Qa=(i,e,t,n)=>{e<0||e>=St||t<0||t>=Tn||(i[t*St+e]=n)};function kg(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)Qa(i,t.x+(e.w-1-a),t.y+n,ME(i,e.x+a,e.y+n))}function Ag(i,e){const t=Ll(e),n=iE[e],{u:a,v:s,d:r}=n,o=(c,l)=>i[l*St+c]??"";for(let c=0;c<t.h;c++){const l=o(t.x,t.y+c),d=o(t.x+t.w-1,t.y+c);for(let h=0;h<r;h++)Qa(i,a+r+n.w+h,s+r+c,l),Qa(i,a+h,s+r+c,d)}for(let c=0;c<t.w;c++){const l=o(t.x+c,t.y),d=o(t.x+c,t.y+t.h-1);for(let h=0;h<r;h++)Qa(i,a+r+c,s+h,l),Qa(i,a+r+n.w+c,s+h,d)}}const EE={pelerin:160,kanat:200};function wE(i,e=Qn(i)){const t=Ll(i),n=[];for(let a=0;a<t.h;a++)for(let s=0;s<t.w;s++)n.push(e[(t.y+a)*St+t.x+s]??"");return n}function TE(i,e){const t=us(),n=Ll(e);for(let a=0;a<n.h;a++)for(let s=0;s<n.w;s++)Qa(t,n.x+s,n.y+a,i[a*n.w+s]??"");return kg(t,n,Eg(e)),Ag(t,e),t}async function ru(i,e){try{return await re("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await re("cmd_kozmetik_kaydet",{[i]:wE(i,e)})}}function dp(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function up(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}async function kE(i,e,t){try{const n=URL.createObjectURL(t),a=await new Promise((g,b)=>{const T=new Image;T.onload=()=>g(T),T.onerror=()=>b(new Error("görsel okunamadı")),T.src=n});URL.revokeObjectURL(n);const s=a.width/Math.max(1,a.height);if(Math.abs(s-2)<.02&&a.height>=32){const g=document.createElement("canvas");g.width=St,g.height=Tn;const b=g.getContext("2d",{willReadFrequently:!0});if(!b)throw new Error("tuval yok");b.imageSmoothingEnabled=!1,b.drawImage(a,0,0,St,Tn);const T=aE(b);if(Ai(T))throw new Error("pafta boş görünüyor");const x=Qn(e);for(let S=0;S<Ra;S++)x[S]=T[S];is(i,e),oe("Pafta okundu — 64×32 atlas yüklendi.");return}const o=Qn(e),c=Ll(e),l=document.createElement("canvas");l.width=c.w,l.height=c.h;const d=l.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("tuval yok");const h=c.w/c.h;let u=a.width,f=u/h;f>a.height&&(f=a.height,u=f*h);const m=(a.width-u)/2,_=(a.height-f)/2;d.drawImage(a,m,_,u,f,0,0,c.w,c.h);const p=d.getImageData(0,0,c.w,c.h).data;for(let g=0;g<c.h;g++)for(let b=0;b<c.w;b++){const T=g*c.w+b,x=p[T*4+3];Qa(o,c.x+b,c.y+g,x<24?"":`#${Vc(p[T*4])}${Vc(p[T*4+1])}${Vc(p[T*4+2])}`)}Ag(o,e),kg(o,c,Eg(e)),is(i,e),oe("Fotoğraf atlasa indirgendi — istersen fırçayla düzeltebilirsin.")}catch(n){oe(String(n),"err")}}async function hp(i,e){const t=Qn(e),n=!Ai(t),a=e==="pelerin"?"Pelerin":"Elitra",s=i.querySelector(`#kz-${e}-kaydet`),r=s?s.innerHTML:"",o=`${Date.now()}-${Math.random()}`,c=(d,h)=>{s&&(s.dataset.jeton=o,s.classList.remove("tamam","hata","bekliyor"),s.classList.add(h),s.textContent=d,s.disabled=!0)},l=d=>{s&&window.setTimeout(()=>{s.dataset.jeton===o&&(s.innerHTML=r,s.disabled=!1,s.classList.remove("tamam","hata","bekliyor"))},d)};c("Kaydediliyor…","bekliyor");try{const d=await ru(e,t.slice());try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?Dl=n:Il=n,Zu(i,e),c("Kaydedildi ✓","tamam"),l(1800),!n){oe(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?oe(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):oe(`${a} kaydedildi (yerel). Sunucu: ${cE(d.hata||"ulaşılamadı")}`)}catch(d){c("Kaydedilemedi","hata"),l(2200),oe(String(d),"err")}}function AE(){Gi.home=nM,Gi.instances=lM,Gi.explore=gM,Gi.news=bM,Gi.settings=br,Gi.skins=Wu,Gi.kozmetik=dE}let $a=null;const Xs=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function RE(){$a||($a=document.createElement("div"),$a.className="drop-veil",$a.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild($a))}function fp(){$a?.remove(),$a=null}async function CE(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await re("cmd_route_dropped",{path:i})}catch(n){oe(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Jt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${Xs(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(r=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),r())},150)}),!a){oe("Kurulum iptal edildi");return}oe("Paket indiriliyor — süreç panelinden takip edebilirsin");const s=await re("cmd_import_pack_file",{path:i,name:null});await rn(),st("instances"),oe(`${s.name} kuruldu ✓`)}else if(t==="jar"){const n=await ou(`Mod eklenecek kurulum: <b>${Xs(e)}</b>`);if(!n)return;await re("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";oe(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await ou(`Dünya yüklenecek kurulum: <b>${Xs(e)}</b>`);if(!n)return;await re("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),oe(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await re("cmd_import_emote_dosyasi",{path:i});oe(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await LE(i,e):oe(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){oe(`Kurulamadı: ${n}`,"err")}}async function LE(i,e){const t=Jt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${Xs(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const r=setInterval(()=>{document.body.contains(t.root)||(clearInterval(r),s())},150)}),!n)return;const a=await ou(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await re("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),oe(`Eklendi: ${e}`))}function ou(i){return new Promise(e=>{const t=ce.instances||[];if(!t.length){oe("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Jt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${Xs(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${Xs(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const r=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(r)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function PE(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")RE();else if(n==="drop"){fp();const a=t.paths||[];for(const s of a)await CE(s)}else fp()})}catch{}}const Xo=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let $c=null;function DE(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,s=e.offsetHeight,r=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-s-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let h=i.top+i.height/2-s/2;h<14&&(h=i.bottom+16),e.style.left=`${r(d)}px`,e.style.top=`${o(h)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function pp(i,e){const t=Xo[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");st(t.page);const s=a.querySelector(".tc-step");s.innerHTML=Xo.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const r=a.querySelector(".tc-next");r.textContent=e===Xo.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",DE(o,a),Ji.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function IE(){if($c||ce.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),$c=i;let e=0;const t=async()=>{i.remove(),$c=null,document.removeEventListener("keydown",a),st("home");try{ce.config={...ce.config,guided_tour_done:!0},await re("cmd_save_settings",{config:ce.config}),await rn()}catch{}},n=()=>{if(e+=1,e>=Xo.length){t();return}pp(i,e)},a=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),pp(i,e)}let Fs=null,Yo=null;function Ls(){Yo!==null&&(clearInterval(Yo),Yo=null)}function mp(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function lu(){try{ce.config={...ce.config,onboarding_done:!0},await re("cmd_save_settings",{config:ce.config}),await rn()}catch{}}function Wc(i){Ls(),Fs?.remove(),Fs=null,lu(),st("home")}function UE(){if(Fs)return!0;if(ce.config?.onboarding_done)return!1;if(!(ce.accounts.length===0&&ce.instances.length===0))return lu(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),Fs=e;const t=e.querySelector(".ob-card"),n=h=>`<div class="ob-dots">${[0,1,2,3].map(u=>`<i class="${u<=h?"done":""}"></i>`).join("")}</div>`,a=h=>`
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
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Wc()),t.querySelector("#ob-next")?.addEventListener("click",r)}function r(){Ls(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{Ls(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Wc());const h=t.querySelector("#ob-acc-ok"),u=t.querySelector("#ob-next"),f=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),g=t.querySelector("#ob-off-ad"),b=x=>{h.style.display="flex",h.textContent=`✓ Hesap hazır: ${x}`,u.disabled=!1,Ls()};ce.accounts.length?b(ce.accounts[0]?.name??""):u.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,f.style.display="block",f.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const x=await re("cmd_ms_login_begin");await rn(),f.textContent="",f.style.display="none",b(x?.name??ce.accounts[0]?.name??"")}catch(x){f.textContent=String(x),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const x=g.value.trim();if(x.length<3){m.textContent="İsim en az 3 karakter olmalı.",g.focus();return}m.textContent="",p.disabled=!0,p.textContent="…";try{await re("cmd_add_offline_account",{name:x}),await rn(),b(x),p.textContent="✓"}catch(S){m.textContent=String(S),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),g.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T())}),Yo=setInterval(()=>{ce.accounts.length&&b(ce.accounts[0]?.name??"")},600),u.addEventListener("click",()=>{Ls(),o()})}async function o(){let h=[];try{h=(await re("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${h.map(f=>`<option value="${mp(f)}">${mp(f)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",r);let u=null;t.querySelector("#ob-create")?.addEventListener("click",async f=>{const m=f.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{u=await re("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:ce.config?.default_ram_mb||4096,java_preset_id:ce.config?.default_java_preset||"balanced",standard_mods:!0}});const g=t.querySelector("#ob-inst-ok");g.style.display="flex",g.textContent=`✓ Kurulum hazır: ${u.name}`,m.textContent="✓ Oluşturuldu",await rn(),setTimeout(()=>c(),700)}catch(g){d(`Kurulum oluşturulamadı: ${g}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{l()})}function c(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Wc())}return s(),!0;function l(){Ls(),Fs?.remove(),Fs=null,lu(),st("explore","kind:modpack")}function d(h){bt(()=>Promise.resolve().then(()=>Tt),void 0).then(u=>u.toast(h,"err"))}}const ls=Math.PI*2;function pl(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function NE(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Nl(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,ls),i.fill()}function gp(i,e){const t=e?NE(pl(),.88):pl(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*ls});return{base:e?24:30,spawn:n,step:(a,s,r)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*s*(1+i*s),a.y+=a.vy*s,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(r))},draw:Nl}}function qc(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*ls});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Nl}}function zE(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*ls});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Nl}}function FE(){const i=pl(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*ls});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,ls),t.stroke()}}}function OE(){const i=pl(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function Lo(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*ls}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Nl}}function BE(i){switch(i){case"pano":return gp(.5,!1);case"sahne":return Lo("rgba(255,171,77,0.75)");case"sokum":return gp(.9,!0);case"afis":return qc("rgba(63,50,38,0.5)");case"standart":return Lo("rgba(147,168,255,0.5)");case"sira":return Lo("rgba(163,230,53,0.85)");case"rihtim":return FE();case"oda":return qc("rgba(224,48,30,0.6)");case"kumas":return qc("rgba(138,122,92,0.5)");case"perde":return Lo("rgba(212,175,55,0.8)");case"buz":return zE();case"skala":return OE();default:return null}}let Dn=null,bi=null,fa=null,Ps=[],hn=0,Cr=0,Rg=1,Cg=33,zl=!1;function Ju(){return Math.min(window.devicePixelRatio||1,1.5)}function Xc(){hn&&cancelAnimationFrame(hn),hn=0,fa=null,Ps=[],Dn&&(Dn.remove(),Dn=null,bi=null)}function ml(i){if(hn=0,!bi||!Dn||!fa||zl||document.hidden)return;if(i-Cr<Cg){hn=requestAnimationFrame(ml);return}const e=Math.min((i-Cr)/1e3,.06);Cr=i,hn=requestAnimationFrame(ml);const t=Ju();bi.setTransform(t,0,0,t,0,0),bi.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(fa.base*Rg));for(;Ps.length<a;){const s=fa.spawn(n);s.life=Math.random()*s.max,Ps.push(s)}for(;Ps.length>a;)Ps.pop();for(const s of Ps)s.life+=e,fa.step(s,e,n),bi.globalAlpha=s.a,fa.draw(bi,s);bi.globalAlpha=1}function Lg(){fa&&bi&&!hn&&!document.hidden&&!zl&&(Cr=performance.now(),hn=requestAnimationFrame(ml))}document.addEventListener("visibilitychange",()=>{document.hidden?(hn&&cancelAnimationFrame(hn),hn=0):Lg()});window.addEventListener("blur",()=>{zl=!0,hn&&cancelAnimationFrame(hn),hn=0});window.addEventListener("focus",()=>{zl=!1,Lg()});window.addEventListener("resize",()=>{if(!Dn||!bi)return;const i=Ju();Dn.width=Math.round(innerWidth*i),Dn.height=Math.round(innerHeight*i)});function HE(){const i=String(ce.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){Xc();return}const n=BE(e);if(!n){Xc();return}Rg={low:.45,mid:.9,high:1.6}[i]??1,Cg=1e3/({low:25,mid:30,high:40}[i]??30),Xc(),fa=n;const r=Ju();Dn=document.createElement("canvas"),Dn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Dn.width=Math.round(innerWidth*r),Dn.height=Math.round(innerHeight*r),document.body.appendChild(Dn),bi=Dn.getContext("2d"),Cr=performance.now(),hn=requestAnimationFrame(ml)}function GE(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function VE(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function $E(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function WE(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const qE={yikim:{build:VE,spot:"3 2"},hedef:{build:$E,spot:"12 12"},nokta:{build:WE,spot:"8 8"}};function XE(){const i=String(ce.config?.cursor_style||"standart"),e=document.documentElement,t=qE[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(GE());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const at=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,YE=`<svg ${at}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,KE=`<svg ${at}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,ZE=`<svg ${at}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,JE=`<svg ${at}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,QE=`<svg ${at}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,jE=`<svg ${at}><path d="M12 5v14M5 12h14"/></svg>`,ew=`<svg ${at}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,tw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',nw=`<svg ${at}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,iw=`<svg ${at}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,aw=`<svg ${at}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,sw=`<svg ${at}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,rw=`<svg ${at}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,ow=`<svg ${at}><path d="m4.5 12.5 5 5 10-11"/></svg>`,lw=`<svg ${at}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,cw=`<svg ${at}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,dw=`<svg ${at}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,uw=`<svg ${at}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,hw=`<svg ${at}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,fw=`<svg ${at}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,pw=`<svg ${at}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,mw=`<svg ${at}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,gw=`<svg ${at}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,_w=`<svg ${at}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,vw=`<svg ${at}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,yw=`<svg ${at}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,xw=`<svg ${at}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,bw=`<svg ${at}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,Sw=`<svg ${at}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,Mw=`<svg ${at}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,Ew=`<svg ${at}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,ww=`<svg ${at}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,Tw=`<svg ${at}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,kw=`<svg ${at}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,Aw=`<svg ${at}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,Rw=`<svg ${at}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,gl={home:YE,grid:KE,compass:ZE,news:JE,gear:QE,plus:jE,search:ew,play:tw,image:nw,folder:iw,trash:aw,copy:sw,back:rw,check:ow,user:lw,puzzle:cw,box:dw,cpu:uw,args:hw,term:fw,chart:pw,dl:mw,mug:gw,globe:_w,sparkle:vw,file:yw,info:xw,clock:bw,stop:Sw,shirt:Mw,brush:Ew,bucket:ww,picker:Tw,undo:kw,redo:Aw,lock:Rw};function Y(i,e=""){const t=gl[i]||gl.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const Po='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',Do=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,mr={min:`<svg ${Po}>${Do('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${Po}>${Do('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${Po}>${Do('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${Po}>${Do('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},Ys=window.__TAURI__,Cw=Ys.core,Lw=Ys.event,re=(i,e={})=>Cw.invoke(i,e),Dt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),hi=(i,e)=>Lw.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=gl[t]||gl.info,i.replaceWith(n)};const Fl=i=>re("plugin:opener|open_url",{url:i}),Pg=i=>re("plugin:opener|open_path",{path:i}),ce={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function rn(i=!1){const e=await re("cmd_get_state");ce.config=e.config,ce.accounts=e.accounts,ce.instances=e.instances,ce.featured_versions=e.featured_versions,ce.curseforge=e.curseforge,ce.sys=e.sys,Si(),Hl(),i&&st(Qu)}const _p=Hl;function Si(){if(!ce.config)return;const i=ce.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(ce.config.tema_ozel||{})[n]||{},s=n==="sahne"?ce.config.custom_accent:"",r=String(a.accent||s||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),HE(),XE()}const Pw=Si;function Ii(){return ce.accounts.find(i=>i.id===ce.config?.last_selected_account)||ce.accounts[0]||null}function Ol(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function Dg(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Bl(i){const e=Dg(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function Dw(){const i=document.getElementById("pill-ram");if(!i||!ce.sys)return;const t=ce.instances[0]?.ram_mb||ce.config?.default_ram_mb||4096,n=ce.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),r=`${(t/1024).toFixed(1)} GB`;s?d0(s,r):i.innerHTML=`RAM <b id="ram-pill-val">${r}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const Mi=i=>document.querySelector(i);function fn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function to(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function Ks(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function Iw(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function Lr(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ze={activeId:null};function oe(i,e="ok"){const t=fn(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const gr=[];function Jt(i){const e=fn(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),gr.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const s=gr.indexOf(e);s>=0&&gr.splice(s,1),e.remove()},a=s=>{s.key==="Escape"&&gr[gr.length-1]===e&&(s.preventDefault(),s.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",s=>{s.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Gi={},Wi={};let vp="home",Qu="home";function st(i,e){const t=Mi("#content");t&&(Qu=i,vp=i,Wi.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===vp)}),u0(t,()=>{t.innerHTML="";const n=Gi[i];n&&n(t),gm(t)}))}const Uw=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function Ig(){const i=Mi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${mr.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${mr.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${mr.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${Uw.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${Y(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=Ys.window.getCurrentWindow();Mi("#tb-min")?.addEventListener("click",()=>t.minimize()),Mi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ze.activeId){t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};Mi("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(a=>{Ze.activeId&&(a?.preventDefault?.(),t.minimize(),oe("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=Mi("#tb-max"),s=o=>{a&&(a.innerHTML=o?mr.restore:mr.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},r=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(r):Ys.event?.listen&&Ys.event.listen("tauri://resize",r),r()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>st(a.dataset.page))}),Hl(),Mi("#rail-account")?.addEventListener("click",()=>{ce.accounts.length?st("settings"):En()}),ku(Array.from(document.querySelectorAll(".rail-item")))}function Hl(){const i=Mi("#rail-account");if(!i)return;const e=Ii();if(!e){i.innerHTML=`<span class="ra-head ph">${Y("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Ol(e)}" draggable="false" ${Bl(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let Io=null;function En(i){if(Io){Io.root.querySelector("#off-name")?.focus();return}const e=Jt(`
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
      <button class="btn primary lg" id="ms-go">${Y("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,Io=null,e.close())};Io={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const s=t.querySelector("#off-name").value.trim();if(s.length<3)return oe("İsim en az 3 karakter olmalı","err");try{await re("cmd_add_offline_account",{name:s}),await rn(),_p(),oe(`Hoş geldin, ${s}!`),a(),i?.()}catch(r){oe(String(r),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const s=t.querySelector("#ms-status"),r=t.querySelector("#ms-go");r.disabled=!0,s.style.display="block",s.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await re("cmd_ms_login_begin");await rn(),_p(),oe(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){s.textContent=String(o),r.disabled=!1}})}let Uo=0;async function Nw(i){if(!ce.accounts.length){En();return}if(Ze.activeId){oe("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++Uo;Ze.activeId=i;const{root:t,close:n}=Jt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),s=t.querySelector("#lp-stage"),r=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await hi("launch-progress",f=>{if(e!==Uo)return;const m=f.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,s.textContent=zw(m.stage),r.textContent=m.detail||""}),l=await hi("game-log",f=>{if(e!==Uo)return;o.style.display="block";const m=document.createElement("div");m.textContent=f.payload,o.appendChild(m),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await hi("game-exit",f=>{if(e!==Uo)return;Ze.activeId=null;const m=f.payload?.exit_code??f.payload?.code??-1;m===0?(s.textContent="Oyun kapatıldı",setTimeout(n,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${m})`,r.textContent="Canlı logdan detayları görebilirsin.")}),h=()=>{c(),l(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(h(),u.disconnect())});u.observe(document.body,{childList:!0});try{await re("cmd_launch_instance",{instanceId:i}),s.textContent="Oyun çalışıyor",r.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{h(),n()},1500),await rn(!0)}catch(f){Ze.activeId=null,s.textContent="Başlatılamadı",r.textContent=String(f),r.style.color="var(--danger)"}}function zw(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}hi("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});hi("game-started",i=>{Ze.activeId=i.payload,rn(!0)});hi("game-exit",async()=>{window.__yikimRestart||(Ze.activeId=null,rn(!0))});hi("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&oe(`Kuruldu: ${e.filename}`),e.phase==="error"&&oe(`Hata: ${e.filename}`,"err")});let Rn=null,yp;hi("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!Rn||!document.body.contains(Rn))&&(Rn=document.createElement("div"),Rn.className="sm-panel",Rn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(Rn)),clearTimeout(yp);const t=Rn.querySelector("#sm-count"),n=Rn.querySelector("#sm-fill"),a=Rn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,a.appendChild(s);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(Rn.querySelector(".sm-title").textContent="Standart modlar hazır",yp=setTimeout(()=>{Rn?.remove(),Rn=null},4e3))});hi("mod-install-progress",i=>{i.payload.phase});async function Ug(){try{await rn(),AE(),Ig(),st("home"),PE(),UE()||IE(),Fw()}catch(i){Ow(i)}}async function Fw(){try{const e=await(await bt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=Jt(`
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
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const a=t.querySelector("#upd-go");a.disabled=!0,a.textContent="İndiriliyor…";try{let s=0,r=0;await e.download(o=>{switch(o.event){case"Started":r=o.data.contentLength??0;break;case"Progress":s+=o.data.chunkLength;break;case"Finished":a.textContent="Kuruluyor…";break}r>0&&(a.textContent=`İndiriliyor… %${Math.round(s/r*100)}`)}),await e.install(),oe("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{Ys.process.exit(0)}catch{window.location.reload()}},900)}catch(s){a.disabled=!1,a.textContent="İndir ve Kur",oe(`Güncelleme başarısız: ${s}`,"err")}})}catch{}}function Ow(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function Bw(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}Ug();Bw();const Tt=Object.freeze(Object.defineProperty({__proto__:null,$:Mi,applyTheme:Pw,applyWorld:Si,boot:Ug,currentAccount:Ii,get currentPage(){return Qu},el:fn,enterStage:gm,fileSrc:Dt,fmtBytes:to,fmtDuration:Ks,fmtSpeed:Iw,headAttrs:Bl,headFallbackUrl:Dg,headUrl:Ol,icon:Y,invoke:re,lamp:Lr,launch:Ze,launchInstance:Nw,listen:hi,nav:Wi,navigate:st,openExternal:Fl,openLoginModal:En,openModal:Jt,openPath:Pg,pages:Gi,refreshState:rn,renderAccountPill:Hl,setupShell:Ig,state:ce,switchPress:Au,toast:oe,updateRamPill:Dw},Symbol.toStringTag,{value:"Module"}));
