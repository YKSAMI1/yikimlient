import"./theme-DsW0LP6A.js";const $m="modulepreload",Wm=function(i){return"/"+i},Eu={},yt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=Wm(c),c in Eu)return;Eu[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":$m,l||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};function Ui(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Th(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},Ad,Yt,bt,Wn=1e8,gt=1/Wn,gc=Math.PI*2,qm=gc/4,Xm=0,Ah=Math.sqrt,Ym=Math.cos,Km=Math.sin,$t=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},kd=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},gn=function(e){return e!==!1},Rd=function(){return typeof window<"u"},Vs=function(e){return Lt(e)||$t(e)},kh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Zm=/random\([^)]+\)/g,Jm=/,\s*/g,wu=/(?:-?\.?\d|\.)+/gi,Rh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ch=/[+-]=-?[.\d]+/,Qm=/[^,'"\[\]\s]+/gi,jm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,pi,_c,Cd,Un={},Lo={},Lh,Ph=function(e){return(Lo=zr(e,Un))&&Sn},Ld=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vs=function(e,t){return!t&&console.warn(e)},Dh=function(e,t){return e&&(Un[e]=t)&&Lo&&(Lo[e]=t)||Un},ys=function(){return 0},eg={suppressEvents:!0,isStart:!0,kill:!1},vo={suppressEvents:!0,kill:!1},tg={suppressEvents:!0},Pd={},ma=[],vc={},Ih,Tn={},gl={},Tu=30,yo=[],Dd="",Id=function(e){var t=e[0],n,a;if(Ei(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=yo.length;a--&&!yo[a].targetTest(t););n=yo[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new np(e[a],n)))||e.splice(a,1);return e},Ha=function(e){return e._gsap||Id(qn(e))[0]._gsap},Uh=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():kd(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},Dt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},Ar=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},ng=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Po=function(){var e=ma.length,t=ma.slice(0),n,a;for(vc={},ma.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Ud=function(e){return!!(e._initted||e._startAt||e.add)},Nh=function(e,t,n,a){ma.length&&!Yt&&Po(),e.render(t,n,!!(Yt&&t<0&&Ud(e))),ma.length&&!Yt&&Po()},Fh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Qm).length<2?t:$t(e)?e.trim():e},zh=function(e){return e},Nn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ig=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},zr=function(e,t){for(var n in t)e[n]=t[n];return e},Au=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ei(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Do=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},cs=function(e){var t=e.parent||Tt,n=e.keyframes?ig(nn(e.keyframes)):Nn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ag=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Oh=function(e,t,n,a,r){var s=e[a],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},Jo=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[a]===t&&(e[a]=r),t._next=t._prev=t.parent=null},_a=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ga=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yc=function(e,t,n,a){return e._startAt&&(Yt?e._startAt.revert(vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},sg=function i(e){return!e||e._ts&&i(e.parent)},ku=function(e){return e._repeat?Or(e._tTime,e=e.duration()+e._rDelay)*e:0},Or=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},Io=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qo=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},jo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qo(e),n._dirty||Ga(n,e)),e},Bh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Io(e.rawTime(),t),(!t._dur||Us(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Ga(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},yi=function(e,t,n,a){return t.parent&&_a(t),t._start=wt(($i(n)?n:n||e!==Tt?Hn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Oh(e,t,"_first","_last",e._sort?"_start":0),xc(t)||(e._recent=t),a||Bh(e,t),e._ts<0&&jo(e,e._tTime),e},Hh=function(e,t){return(Un.ScrollTrigger||Ld("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Gh=function(e,t,n,a,r){if(Fd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ih!==Cn.frame)return ma.push(e),e._lazy=[r,a],1},og=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},xc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lg=function(e,t,n,a){var r=e.ratio,s=t<0||!t&&(!e._start&&og(e)&&!(!e._initted&&xc(e))||(e._ts<0||e._dp._ts<0)&&!xc(e))?0:1,o=e._rDelay,c=0,l,d,u;if(o&&e._repeat&&(c=Us(0,e._tDur,t),d=Or(c,o),e._yoyo&&d&1&&(s=1-s),d!==Or(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Yt||a||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Gh(e,t,a,n,c))return;for(u=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&yc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&_a(e,1),!n&&!Yt&&(Pn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cg=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},Br=function(e,t,n,a){var r=e._repeat,s=wt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:wt(s*(r+1)+e._rDelay*r):s,o>0&&!a&&jo(e,e._tTime=e._tDur*o),e.parent&&Qo(e),n||Ga(e.parent,e),e},Ru=function(e){return e instanceof mn?Ga(e):Br(e,e._dur)},dg={_start:0,endTime:ys,totalDuration:ys},Hn=function i(e,t,n){var a=e.labels,r=e._recent||dg,s=e.duration()>=Wn?r.endTime(!1):e._dur,o,c,l;return $t(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=s),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(nn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:s+c)):t==null?s:+t},ds=function(e,t,n){var a=$i(t[1]),r=(a?2:1)+(e<2?0:1),s=t[r],o,c;if(a&&(s.duration=t[1]),s.parent=n,e){for(o=s,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=gn(c.vars.inherit)&&c.parent;s.immediateRender=gn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Nt(t[0],s,t[r+1])},ba=function(e,t){return e||e===0?t(e):t},Us=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!$t(e)||!(t=jm.exec(e))?"":t[1]},ug=function(e,t,n){return ba(n,function(a){return Us(e,t,a)})},bc=[].slice,Vh=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==pi},fg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var r;return $t(a)&&!t||Vh(a,1)?(r=n).push.apply(r,qn(a)):n.push(a)})||n},qn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(_c||!Hr())?bc.call((t||Cd).querySelectorAll(e),0):nn(e)?fg(e,n):Vh(e)?bc.call(e,0):e?[e]:[]},Sc=function(e){return e=qn(e)[0]||vs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?vs("Invalid scope")||Cd.createElement("div"):e)}},$h=function(e){return e.sort(function(){return .5-Math.random()})},Wh=function(e){if(Lt(e))return e;var t=Ei(e)?e:{each:e},n=Va(t.ease),a=t.from||0,r=parseFloat(t.base)||0,s={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,u=a;return $t(a)?d=u={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],u=a[1]),function(f,h,m){var _=(m||t).length,p=s[_],g,b,T,x,S,w,A,v,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!E){for(A=-Wn;A<(A=m[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=s[_]=[],g=c?Math.min(E,_)*d-.5:a%E,b=E===Wn?0:c?_*u/E-.5:a/E|0,A=0,v=Wn,w=0;w<_;w++)T=w%E-g,x=b-(w/E|0),p[w]=S=l?Math.abs(l==="y"?x:T):Ah(T*T+x*x),S>A&&(A=S),S<v&&(v=S);a==="random"&&$h(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:l?l==="y"?_/E:E:Math.max(E,_/E))||0)*(a==="edges"?-1:1),p.b=_<0?r-_:r,p.u=en(t.amount||t.each)||0,n=n&&_<0?wg(n):n}return _=(p[f]-p.min)/p.max||0,wt(p.b+(n?n(_):_)*p.v)+p.u}},Mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=wt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+($i(n)?0:en(n))}},qh=function(e,t){var n=nn(e),a,r;return!n&&Ei(e)&&(a=n=e.radius||Wn,e.values?(e=qn(e.values),(r=!$i(e[0]))&&(a*=a)):e=Mc(e.increment)),ba(t,n?Lt(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),c=parseFloat(r?s.y:0),l=Wn,d=0,u=e.length,f,h;u--;)r?(f=e[u].x-o,h=e[u].y-c,f=f*f+h*h):f=Math.abs(e[u]-o),f<l&&(l=f,d=u);return d=!a||l<=a?e[d]:s,r||d===s||$i(s)?d:d+en(s)}:Mc(e))},Xh=function(e,t,n,a){return ba(nn(e)?!t:n===!0?!!(n=0):!a,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},hg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(r,s){return s(r)},a)}},pg=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},mg=function(e,t,n){return Kh(e,t,0,1,n)},Yh=function(e,t,n){return ba(n,function(a){return e[~~t(a)]})},gg=function i(e,t,n){var a=t-e;return nn(e)?Yh(e,i(0,e.length),t):ba(n,function(r){return(a+(r-e)%a)%a+e})},_g=function i(e,t,n){var a=t-e,r=a*2;return nn(e)?Yh(e,i(0,e.length-1),t):ba(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},xs=function(e){return e.replace(Zm,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Jm);return Xh(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},Kh=function(e,t,n,a,r){var s=t-e,o=a-n;return ba(r,function(c){return n+((c-e)/s*o||0)})},vg=function i(e,t,n,a){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var s=$t(e),o={},c,l,d,u,f;if(n===!0&&(a=1)&&(n=null),s)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(d=[],u=e.length,f=u-2,l=1;l<u;l++)d.push(i(e[l-1],e[l]));u--,r=function(m){m*=u;var _=Math.min(f,~~m);return d[_](m-_)},n=t}else a||(e=zr(nn(e)?[]:{},e));if(!d){for(c in t)Nd.call(o,e,c,"get",t[c]);r=function(m){return Bd(m,o)||(s?e.p:e)}}}return ba(n,r)},Cu=function(e,t,n){var a=e.labels,r=Wn,s,o,c;for(s in a)o=a[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=s,r=o);return c},Pn=function(e,t,n){var a=e.vars,r=a[t],s=bt,o=e._ctx,c,l,d;if(r)return c=a[t+"Params"],l=a.callbackScope||e,n&&ma.length&&Po(),o&&(bt=o),d=c?r.apply(l,c):r.call(l),bt=s,d},as=function(e){return _a(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Pn(e,"onInterrupt"),e},Sr,Zh=[],Jh=function(e){if(e)if(e=!e.name&&e.default||e,Rd()||e.headless){var t=e.name,n=Lt(e),a=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ys,render:Bd,add:Nd,kill:Ug,modifier:Ig,rawVars:0},s={targetTest:0,get:0,getSetter:Od,aliases:{},register:0};if(Hr(),e!==a){if(Tn[t])return;Nn(a,Nn(Do(e,r),s)),zr(a.prototype,zr(r,Do(e,s))),Tn[a.prop=t]=a,e.targetTest&&(yo.push(a),Pd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dh(t,a),e.register&&e.register(Sn,a,vn)}else Zh.push(e)},mt=255,rs={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},_l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},Qh=function(e,t,n){var a=e?$i(e)?[e>>16,e>>8&mt,e&mt]:0:rs.black,r,s,o,c,l,d,u,f,h,m;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),rs[e])a=rs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&mt,a&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(a=m=e.match(wu),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,s=d<=.5?d*(l+1):d+l-d*l,r=d*2-s,a.length>3&&(a[3]*=1),a[0]=_l(c+1/3,r,s),a[1]=_l(c,r,s),a[2]=_l(c-1/3,r,s);else if(~e.indexOf("="))return a=e.match(Rh),n&&a.length<4&&(a[3]=1),a}else a=e.match(wu)||rs.transparent;a=a.map(Number)}return t&&!m&&(r=a[0]/mt,s=a[1]/mt,o=a[2]/mt,u=Math.max(r,s,o),f=Math.min(r,s,o),d=(u+f)/2,u===f?c=l=0:(h=u-f,l=d>.5?h/(2-u-f):h/(u+f),c=u===r?(s-o)/h+(s<o?6:0):u===s?(o-r)/h+2:(r-s)/h+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},jh=function(e){var t=[],n=[],a=-1;return e.split(ga).forEach(function(r){var s=r.match(br)||[];t.push.apply(t,s),n.push(a+=s.length+1)}),t.c=n,t},Lu=function(e,t,n){var a="",r=(e+a).match(ga),s=t?"hsla(":"rgba(",o=0,c,l,d,u;if(!r)return e;if(r=r.map(function(f){return(f=Qh(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(d=jh(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(ga,"1").split(br),u=l.length-1;o<u;o++)a+=l[o]+(~c.indexOf(o)?r.shift()||s+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!l)for(l=e.split(ga),u=l.length-1;o<u;o++)a+=l[o]+r[o];return a+l[u]},ga=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in rs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),yg=/hsl[a]?\(/,ep=function(e){var t=e.join(" "),n;if(ga.lastIndex=0,ga.test(t))return n=yg.test(t),e[1]=Lu(e[1],n),e[0]=Lu(e[0],n,jh(e[1])),!0},bs,Cn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,r=1e3/240,s=r,o=[],c,l,d,u,f,h,m=function _(p){var g=i()-a,b=p===!0,T,x,S,w;if((g>e||g<0)&&(n+=g-t),a+=g,S=a-n,T=S-s,(T>0||b)&&(w=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,s+=T+(T>=r?4:r-T),x=1),b||(c=l(_)),x)for(h=0;h<o.length;h++)o[h](S,f,w,p)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Lh&&(!_c&&Rd()&&(pi=_c=window,Cd=pi.document||{},Un.gsap=Sn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Sn.version),Ph(Lo||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Zh.forEach(Jh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=d||function(p){return setTimeout(p,s-u.time*1e3+1|0)},bs=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),bs=0,l=ys},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),s=u.time*1e3+r},add:function(p,g,b){var T=g?function(x,S,w,A){p(x,S,w,A),u.remove(T)}:p;return u.remove(p),o[b?"unshift":"push"](T),Hr(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},u}(),Hr=function(){return!bs&&Cn.wake()},tt={},xg=/^[\d.\-M][\d.\-,\s]/,bg=/["']/g,Sg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],r=1,s=n.length,o,c,l;r<s;r++)c=n[r],o=r!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(bg,"").trim():+l,a=c.substr(o+1).trim();return t},Mg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},Eg=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Sg(t[1])]:Mg(e).split(",").map(Fh)):tt._CE&&xg.test(e)?tt._CE("",e):n},wg=function(e){return function(t){return 1-e(1-t)}},Va=function(e,t){return e&&(Lt(e)?e:tt[e]||Eg(e))||t},Ja=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:a},s;return _n(e,function(o){tt[o]=Un[o]=r,tt[s=o.toLowerCase()]=n;for(var c in r)tt[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=tt[o+"."+c]=r[c]}),r},tp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vl=function i(e,t,n){var a=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/gc*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*Km((d-s)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:tp(o);return r=gc/r,c.config=function(l,d){return i(e,l,d)},c},yl=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:tp(n);return a.config=function(r){return i(e,r)},a};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ja(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Ja("Elastic",vl("in"),vl("out"),vl());(function(i,e){var t=1/e,n=2*t,a=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ja("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Ja("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ja("Circ",function(i){return-(Ah(1-i*i)-1)});Ja("Sine",function(i){return i===1?1:-Ym(i*qm)+1});Ja("Back",yl("in"),yl("out"),yl());tt.SteppedEase=tt.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),r=t?1:0,s=1-gt;return function(o){return((a*Us(0,s,o)|0)+r)*n}}};_s.ease=tt["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Dd+=i+","+i+"Params,"});var np=function(e,t){this.id=Xm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Uh,this.set=t?t.getSetter:Od},Ss=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Br(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),bs||Cn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(Hr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(jo(this,n),!r._dp||r.parent||Bh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nh(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ku(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ku(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,a):this._repeat?Or(this._tTime,r)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(Us(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),Qo(this),rg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=wt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&yi(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Io(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tg);var a=Yt;return Yt=n,Ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=a,this},e.globalTime=function(n){for(var a=this,r=arguments.length?n:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ru(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,Ru(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(Hn(this,n),gn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,gn(a)),this._dur||(this._zTime=-gt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=a&&r<this.endTime(!0)-gt)},e.eventCallback=function(n,a,r){var s=this.vars;return arguments.length>1?(a?(s[n]=a,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=a)):delete s[n],this):s[n]},e.then=function(n){var a=this,r=a._prom;return new Promise(function(s){var o=Lt(n)?n:zh,c=function(){var d=a.then;a.then=null,r&&r(),Lt(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),s(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){as(this)},i}();Nn(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var mn=function(i){Th(e,i);function e(n,a){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gn(n.sortChildren),Tt&&yi(n.parent||Tt,Ui(r),a),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Hh(Ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(a,r,s){return ds(0,arguments,this),this},t.from=function(a,r,s){return ds(1,arguments,this),this},t.fromTo=function(a,r,s,o){return ds(2,arguments,this),this},t.set=function(a,r,s){return r.duration=0,r.parent=this,cs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Nt(a,r,Hn(this,s),1),this},t.call=function(a,r,s){return yi(this,Nt.delayedCall(0,a,r),s)},t.staggerTo=function(a,r,s,o,c,l,d){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=d,s.parent=this,new Nt(a,s,Hn(this,c)),this},t.staggerFrom=function(a,r,s,o,c,l,d){return s.runBackwards=1,cs(s).immediateRender=gn(s.immediateRender),this.staggerTo(a,r,s,o,c,l,d)},t.staggerFromTo=function(a,r,s,o,c,l,d,u){return o.startAt=s,cs(o).immediateRender=gn(o.immediateRender),this.staggerTo(a,r,o,c,l,d,u)},t.render=function(a,r,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:wt(a),u=this._zTime<0!=a<0&&(this._initted||!l),f,h,m,_,p,g,b,T,x,S,w,A;if(this!==Tt&&d>c&&a>=0&&(d=c),d!==this._tTime||s||u){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),f=d,x=this._start,T=this._ts,g=!T,u&&(l||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(w=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,r,s);if(f=wt(d%p),d===c?(_=this._repeat,f=l):(S=wt(d/p),_=~~S,_&&_===S&&(f=l,_--),f>l&&(f=l)),S=Or(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(f=l-f,A=1),_!==S&&!this._lock){var v=w&&S&1,E=v===(w&&_&1);if(_<S&&(v=!v),o=v?0:d%l?l:d,this._lock=1,this.render(o||(A?0:wt(_*p)),r,!l)._lock=0,this._tTime=d,!r&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,o=v?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=cg(this,wt(o),wt(f)),b&&(d-=f-(f=b._start))),this._tTime=d,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!r&&!S&&(Pn(this,"onStart"),this._tTime!==d))return this;if(f>=o&&a>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,s),f!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=-gt);break}}h=m}else{h=this._last;for(var k=a<0?a:f;h;){if(m=h._prev,(h._act||k<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(k-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(k-h._start)*h._ts,r,s||Yt&&Ud(h)),f!==this._time||!this._ts&&!g){b=0,m&&(d+=this._zTime=k?-gt:gt);break}}h=m}}if(b&&!r&&(this.pause(),b.render(f>=o?0:-gt)._zTime=f>=o?1:-1,this._ts))return this._start=x,Qo(this),this.render(a,r,s);this._onUpdate&&!r&&Pn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&_a(this,1),!r&&!(a<0&&!o)&&(d||o||!c)&&(Pn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,r){var s=this;if($i(r)||(r=Hn(this,r,a)),!(a instanceof Ss)){if(nn(a))return a.forEach(function(o){return s.add(o,r)}),this;if($t(a))return this.addLabel(a,r);if(Lt(a))a=Nt.delayedCall(0,a);else return this}return this!==a?yi(this,a,r):this},t.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Wn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Nt?r&&c.push(l):(s&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,r,s)))),l=l._next;return c},t.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},t.remove=function(a){return $t(a)?this.removeLabel(a):Lt(a)?this.killTweensOf(a):(a.parent===this&&Jo(this,a),a===this._recent&&(this._recent=this._last),Ga(this))},t.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Cn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},t.addLabel=function(a,r){return this.labels[a]=Hn(this,r),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,r,s){var o=Nt.delayedCall(0,r||ys,s);return o.data="isPause",this._hasPause=1,yi(this,o,Hn(this,a))},t.removePause=function(a){var r=this._first;for(a=Hn(this,a);r;)r._start===a&&r.data==="isPause"&&_a(r),r=r._next},t.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),c=o.length;c--;)ca!==o[c]&&o[c].kill(a,r);return this},t.getTweensOf=function(a,r){for(var s=[],o=qn(a),c=this._first,l=$i(r),d;c;)c instanceof Nt?ng(c._targets,o)&&(l?(!ca||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&s.push(c):(d=c.getTweensOf(o,r)).length&&s.push.apply(s,d),c=c._next;return s},t.tweenTo=function(a,r){r=r||{};var s=this,o=Hn(s,a),c=r,l=c.startAt,d=c.onStart,u=c.onStartParams,f=c.immediateRender,h,m=Nt.to(s,Nn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||gt,onStart:function(){if(s.pause(),!h){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());m._dur!==p&&Br(m,p,0,1).render(m._time,!0,!0),h=1}d&&d.apply(m,u||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(a,r,s){return this.tweenTo(r,Nn({startAt:{time:Hn(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),Cu(this,Hn(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),Cu(this,Hn(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,c=this.labels,l;for(a=wt(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(l in c)c[l]>=s&&(c[l]+=a);return Ga(this)},t.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Ga(this)},t.totalDuration=function(a){var r=0,s=this,o=s._last,c=Wn,l,d,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(u=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,yi(s,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(r-=d,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=wt(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Br(s,s===Tt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(Tt._ts&&(Nh(Tt,Io(a,Tt)),Ih=Cn.frame),Cn.frame>=Tu){Tu+=In.autoSleep||120;var r=Tt._first;if((!r||!r._ts)&&In.autoSleep&&Cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Cn.sleep()}}},e}(Ss);Nn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Tg=function(e,t,n,a,r,s,o){var c=new vn(this._pt,e,t,0,1,lp,null,r),l=0,d=0,u,f,h,m,_,p,g,b;for(c.b=n,c.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=xs(a)),s&&(b=[n,a],s(b,e,t),n=b[0],a=b[1]),f=n.match(ml)||[];u=ml.exec(a);)m=u[0],_=a.substring(l,u.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[d++]&&(p=parseFloat(f[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:p,c:m.charAt(1)==="="?Ar(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},l=ml.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(Ch.test(a)||g)&&(c.e=0),this._pt=c,c},Nd=function(e,t,n,a,r,s,o,c,l,d){Lt(a)&&(a=a(r||0,e,s));var u=e[t],f=n!=="get"?n:Lt(u)?l?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,h=Lt(u)?l?Lg:sp:zd,m;if($t(a)&&(~a.indexOf("random(")&&(a=xs(a)),a.charAt(1)==="="&&(m=Ar(f,a)+(en(f)||0),(m||m===0)&&(a=m))),!d||f!==a||Ec)return!isNaN(f*a)&&a!==""?(m=new vn(this._pt,e,t,+f||0,a-(f||0),typeof u=="boolean"?Dg:op,0,h),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&Ld(t,a),Tg.call(this,e,t,f,a,h,c||In.stringFilter,l))},Ag=function(e,t,n,a,r){if(Lt(e)&&(e=us(e,r,t,n,a)),!Ei(e)||e.style&&e.nodeType||nn(e)||kh(e))return $t(e)?us(e,r,t,n,a):e;var s={},o;for(o in e)s[o]=us(e[o],r,t,n,a);return s},ip=function(e,t,n,a,r,s){var o,c,l,d;if(Tn[e]&&(o=new Tn[e]).init(r,o.rawVars?t[e]:Ag(t[e],a,r,s,n),n,a,s)!==!1&&(n._pt=c=new vn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Sr))for(l=n._ptLookup[n._targets.indexOf(r)],d=o._props.length;d--;)l[o._props[d]]=c;return o},ca,Ec,Fd=function i(e,t,n){var a=e.vars,r=a.ease,s=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,u=a.yoyoEase,f=a.keyframes,h=a.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!Ad,x=e.timeline,S=a.easeReverse||u,w,A,v,E,k,C,U,N,L,F,$,G,ee;if(x&&(!f||!r)&&(r="none"),e._ease=Va(r,_s.ease),e._rEase=S&&(Va(S)||e._ease),e._from=!x&&!!a.runBackwards,e._from&&(e.ratio=1),!x||f&&!a.stagger){if(N=p[0]?Ha(p[0]).harness:0,G=N&&a[N.prop],w=Do(a,Pd),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!h?_.render(-1,!0):_.revert(d&&m?vo:eg),_._lazy=0),s){if(_a(e._startAt=Nt.set(p,Nn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&gn(c),startAt:null,delay:0,onUpdate:l&&function(){return Pn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!o&&!h)&&e._startAt.revert(vo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),v=Nn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&gn(c),immediateRender:o,stagger:0,parent:g},w),G&&(v[N.prop]=G),_a(e._startAt=Nt.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(vo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&gn(c)||c&&!m,A=0;A<p.length;A++){if(k=p[A],U=k._gsap||Id(p)[A]._gsap,e._ptLookup[A]=F={},vc[U.id]&&ma.length&&Po(),$=b===p?A:b.indexOf(k),N&&(L=new N).init(k,G||w,e,$,b)!==!1&&(e._pt=E=new vn(e._pt,k,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(X){F[X]=E}),L.priority&&(C=1)),!N||G)for(v in w)Tn[v]&&(L=ip(v,w,e,$,k,b))?L.priority&&(C=1):F[v]=E=Nd.call(e,k,v,"get",w[v],$,b,0,a.stringFilter);e._op&&e._op[A]&&e.kill(k,e._op[A]),T&&e._pt&&(ca=e,Tt.killTweensOf(k,F,e.globalTime(t)),ee=!e.parent,ca=0),e._pt&&c&&(vc[U.id]=1)}C&&cp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ee,f&&t<=0&&x.render(Wn,!0,!0)},kg=function(e,t,n,a,r,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(d=f[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Ec=1,e.vars[t]="+=0",Fd(e,o),Ec=0,c?vs(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)u=l[h],d=u._pt||u,d.s=(a||a===0)&&!r?a:d.s+(a||0)+s*d.c,d.c=n-d.s,u.e&&(u.e=Dt(n)+en(u.e)),u.b&&(u.b=d.s+en(u.b))},Rg=function(e,t){var n=e[0]?Ha(e[0]).harness:0,a=n&&n.aliases,r,s,o,c;if(!a)return t;r=zr({},t);for(s in a)if(s in r)for(c=a[s].split(","),o=c.length;o--;)r[c[o]]=r[s];return r},Cg=function(e,t,n,a){var r=t.ease||a||"power1.inOut",s,o;if(nn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},us=function(e,t,n,a,r){return Lt(e)?e.call(t,n,a,r):$t(e)&&~e.indexOf("random(")?xs(e):e},ap=Dd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rp={};_n(ap+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return rp[i]=1});var Nt=function(i){Th(e,i);function e(n,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=i.call(this,s?a:cs(a))||this;var c=o.vars,l=c.duration,d=c.delay,u=c.immediateRender,f=c.stagger,h=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=a.parent||Tt,b=(nn(n)||kh(n)?$i(n[0]):"length"in a)?[n]:qn(n),T,x,S,w,A,v,E,k;if(o._targets=b.length?Id(b):vs("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||f||Vs(l)||Vs(d)){a=o.vars;var C=a.easeReverse||a.yoyoEase;if(T=o.timeline=new mn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),T.kill(),T.parent=T._dp=Ui(o),T._start=0,f||Vs(l)||Vs(d)){if(w=b.length,E=f&&Wh(f),Ei(f))for(A in f)~ap.indexOf(A)&&(k||(k={}),k[A]=f[A]);for(x=0;x<w;x++)S=Do(a,rp),S.stagger=0,C&&(S.easeReverse=C),k&&zr(S,k),v=b[x],S.duration=+us(l,Ui(o),x,v,b),S.delay=(+us(d,Ui(o),x,v,b)||0)-o._delay,!f&&w===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(v,S,E?E(x,v,b):0),T._ease=tt.none;T.duration()?l=d=0:o.timeline=0}else if(m){cs(Nn(T.vars.defaults,{ease:"none"})),T._ease=Va(m.ease||a.ease||"none");var U=0,N,L,F;if(nn(m))m.forEach(function($){return T.to(b,$,">")}),T.duration();else{S={};for(A in m)A==="ease"||A==="easeEach"||Cg(A,m[A],S,m.easeEach);for(A in S)for(N=S[A].sort(function($,G){return $.t-G.t}),U=0,x=0;x<N.length;x++)L=N[x],F={ease:L.e,duration:(L.t-(x?N[x-1].t:0))/100*l},F[A]=L.v,T.to(b,F,U),U+=F.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return h===!0&&!Ad&&(ca=Ui(o),Tt.killTweensOf(b),ca=0),yi(g,Ui(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(u||!l&&!m&&o._start===wt(g._time)&&gn(u)&&sg(Ui(o))&&g.data!=="nested")&&(o._tTime=-gt,o.render(Math.max(0,-d)||0)),p&&Hh(Ui(o),p),o}var t=e.prototype;return t.render=function(a,r,s){var o=this._time,c=this._tDur,l=this._dur,d=a<0,u=a>c-gt&&!d?c:a<gt?0:a,f,h,m,_,p,g,b,T;if(!l)lg(this,a,r,s);else if(u!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=u,T=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+a,r,s);if(f=wt(u%_),u===c?(m=this._repeat,f=l):(p=wt(u/_),m=~~p,m&&m===p?(f=l,m--):f>l&&(f=l)),g=this._yoyo&&m&1,g&&(f=l-f),p=Or(this._tTime,_),f===o&&!s&&this._initted&&m===p)return this._tTime=u,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=s=1,this.render(wt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Gh(this,d?a:f,s,r,u))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(a,r,s)}if(this._rEase){var x=f<o;if(x!==this._inv){var S=x?o:l-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/l);if(this._from&&(this.ratio=b=1-b),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!p&&(Pn(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(d&&yc(this,a,r,s),Pn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&Pn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&yc(this,a,!0,!0),(a||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&_a(this,1),!r&&!(d&&!o)&&(u||o||g)&&(Pn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,r,s,o,c){bs||Cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Fd(this,l),d=this._ease(l/this._dur),kg(this,a,r,s,o,d,l,c)?this.resetTo(a,r,s,o,1):(jo(this,0),this.parent||Oh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?as(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,ca&&ca.vars.overwrite!==!0)._first||as(this),this.parent&&s!==this.timeline.totalDuration()&&Br(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=a?qn(a):o,l=this._ptLookup,d=this._pt,u,f,h,m,_,p,g;if((!r||r==="all")&&ag(o,c))return r==="all"&&(this._pt=0),as(this);for(u=this._op=this._op||[],r!=="all"&&($t(r)&&(_={},_n(r,function(b){return _[b]=1}),r=_),r=Rg(o,r)),g=o.length;g--;)if(~c.indexOf(o[g])){f=l[g],r==="all"?(u[g]=r,m=f,h={}):(h=u[g]=u[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Jo(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&d&&as(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return ds(1,arguments)},e.delayedCall=function(a,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(a,r,s){return ds(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return Tt.killTweensOf(a,r,s)},e}(Ss);Nn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(i){Nt[i]=function(){var e=new mn,t=bc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var zd=function(e,t,n){return e[t]=n},sp=function(e,t,n){return e[t](n)},Lg=function(e,t,n,a){return e[t](a.fp,n)},Pg=function(e,t,n){return e.setAttribute(t,n)},Od=function(e,t){return Lt(e[t])?sp:kd(e[t])&&e.setAttribute?Pg:zd},op=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Dg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lp=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},Bd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ig=function(e,t,n,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,t,n),r=s},Ug=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?Jo(this,t,"_pt"):t.dep||(n=1),t=a;return!n},Ng=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},cp=function(e){for(var t=e._pt,n,a,r,s;t;){for(n=t._next,a=r;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:r=t,(t._next=a)?a._prev=t:s=t,t=n}e._pt=r},vn=function(){function i(t,n,a,r,s,o,c,l,d){this.t=n,this.s=r,this.c=s,this.p=a,this.r=o||op,this.d=c||this,this.set=l||zd,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,r){this.mSet=this.mSet||this.set,this.set=Ng,this.m=n,this.mt=r,this.tween=a},i}();_n(Dd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Pd[i]=1});Un.TweenMax=Un.TweenLite=Nt;Un.TimelineLite=Un.TimelineMax=mn;Tt=new mn({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=ep;var $a=[],xo={},Fg=[],Pu=0,zg=0,xl=function(e){return(xo[e]||Fg).map(function(t){return t()})},wc=function(){var e=Date.now(),t=[];e-Pu>2&&(xl("matchMediaInit"),$a.forEach(function(n){var a=n.queries,r=n.conditions,s,o,c,l;for(o in a)s=pi.matchMedia(a[o]).matches,s&&(c=1),s!==r[o]&&(r[o]=s,l=1);l&&(n.revert(),c&&t.push(n))}),xl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),Pu=e,xl("matchMedia"))},dp=function(){function i(t,n){this.selector=n&&Sc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zg++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,r){Lt(n)&&(r=a,a=n,n=Lt);var s=this,o=function(){var l=bt,d=s.selector,u;return l&&l!==s&&l.data.push(s),r&&(s.selector=Sc(r)),bt=s,u=a.apply(s,arguments),Lt(u)&&s._r.push(u),bt=l,s.selector=d,s.isReverted=!1,u};return s.last=o,n===Lt?o(s,function(c){return s.add(null,c)}):n?s[n]=o:o},e.ignore=function(n){var a=bt;bt=null,n(this),bt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Nt&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,u){return u.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof mn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Nt)&&l.revert&&l.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=$a.length;s--;)$a[s].id===this.id&&$a.splice(s,1)},e.revert=function(n){this.kill(n||{})},i}(),Og=function(){function i(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=i.prototype;return e.add=function(n,a,r){Ei(n)||(n={matches:n});var s=new dp(0,r||this.scope),o=s.conditions={},c,l,d;bt&&!s.selector&&(s.selector=bt.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=n;for(l in n)l==="all"?d=1:(c=pi.matchMedia(n[l]),c&&($a.indexOf(s)<0&&$a.push(s),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(wc):c.addEventListener("change",wc)));return d&&a(s,function(u){return s.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),Uo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return Jh(a)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,a){$t(e)&&(e=qn(e)[0]);var r=Ha(e||{}).get,s=n?zh:Fh;return n==="native"&&(n=""),e&&(t?s((Tn[t]&&Tn[t].get||r)(e,t,n,a)):function(o,c,l){return s((Tn[o]&&Tn[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var a=e.map(function(d){return Sn.quickSetter(d,t,n)}),r=a.length;return function(d){for(var u=r;u--;)a[u](d)}}e=e[0]||{};var s=Tn[t],o=Ha(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(d){var u=new s;Sr._pt=0,u.init(e,n?d+n:d,Sr,0,[e]),u.render(1,u),Sr._pt&&Bd(1,Sr)}:o.set(e,c);return s?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,r=Sn.to(e,Nn((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),s=function(c,l,d){return r.resetTo(t,c,l,d)};return s.tween=r,s},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Va(e.ease,_s.ease)),Au(_s,e||{})},config:function(e){return Au(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Un[o]&&vs(t+" effect requires "+o+" plugin.")}),gl[t]=function(o,c,l){return n(qn(o),Nn(c||{},r),l)},s&&(mn.prototype[t]=function(o,c,l){return this.add(gl[t](o,Ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){tt[e]=Va(t)},parseEase:function(e,t){return arguments.length?Va(e,t):tt},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),a,r;for(n.smoothChildTiming=gn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,a=Tt._first;a;)r=a._next,(t||!(!a._dur&&a instanceof Nt&&a.vars.onComplete===a._targets[0]))&&yi(n,a,a._start-a._delay),a=r;return yi(Tt,n,0),n},context:function(e,t){return e?new dp(e,t):bt},matchMedia:function(e){return new Og(e)},matchMediaRefresh:function(){return $a.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||wc()},addEventListener:function(e,t){var n=xo[e]||(xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xo[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:gg,wrapYoyo:_g,distribute:Wh,random:Xh,snap:qh,normalize:mg,getUnit:en,clamp:ug,splitColor:Qh,toArray:qn,selector:Sc,mapRange:Kh,pipe:hg,unitize:pg,interpolate:vg,shuffle:$h},install:Ph,effects:gl,ticker:Cn,updateRoot:mn.updateRoot,plugins:Tn,globalTimeline:Tt,core:{PropTween:vn,globals:Dh,Tween:Nt,Timeline:mn,Animation:Ss,getCache:Ha,_removeLinkedListItem:Jo,reverting:function(){return Yt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Ad=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Uo[i]=Nt[i]});Cn.add(mn.updateRoot);Sr=Uo.to({},{duration:0});var Bg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Hg=function(e,t){var n=e._targets,a,r,s;for(a in t)for(r=n.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=Bg(s,a)),s&&s.modifier&&s.modifier(t[a],e,n[r],a))},bl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var c,l;if($t(r)&&(c={},_n(r,function(d){return c[d]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}Hg(o,r)}}}},Sn=Uo.registerPlugin({name:"attr",init:function(e,t,n,a,r){var s,o,c;this.tween=n;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],a,r,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bl("roundProps",Mc),bl("modifiers"),bl("snap",qh))||Uo;Nt.version=mn.version=Sn.version="3.15.0";Lh=1;Rd()&&Hr();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Du,da,kr,Hd,Fa,Iu,Gd,Gg=function(){return typeof window<"u"},Wi={},Ia=180/Math.PI,Rr=Math.PI/180,nr=Math.atan2,Uu=1e8,Vd=/([A-Z])/g,Vg=/(left|right|width|margin|padding|x)/i,$g=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},up=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kg=function(e,t,n){return e.style[t]=n},Zg=function(e,t,n){return e.style.setProperty(t,n)},Jg=function(e,t,n){return e._gsap[t]=n},Qg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jg=function(e,t,n,a,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},e_=function(e,t,n,a,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},At="transform",yn=At+"Origin",t_=function i(e,t){var n=this,a=this.target,r=a.style,s=a._gsap;if(e in Wi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Fi(a,o)}):this.tfm[e]=s.x?s[e]:Fi(a,e),e===yn&&(this.tfm.zOrigin=s.zOrigin);else return xi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(At)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=At}(r||t)&&this.props.push(e,t,r[e])},hp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},n_=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Vd,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Gd(),(!r||!r.isStart)&&!n[At]&&(hp(n),a.zOrigin&&n[yn]&&(n[yn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},pp=function(e,t){var n={target:e,props:[],revert:n_,save:t_};return e._gsap||Sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},mp,Ac=function(e,t){var n=da.createElementNS?da.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):da.createElement(e);return n&&n.style?n:da.createElement(e)},Dn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Vd,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,Gr(t)||t,1)||""},Nu="O,Moz,ms,Ms,Webkit".split(","),Gr=function(e,t,n){var a=t||Fa,r=a.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Nu[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Nu[s]:"")+e},kc=function(){Gg()&&window.document&&(Du=window,da=Du.document,kr=da.documentElement,Fa=Ac("div")||{style:{}},Ac("div"),At=Gr(At),yn=At+"Origin",Fa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mp=!!Gr("perspective"),Gd=Sn.core.reverting,Hd=1)},Fu=function(e){var t=e.ownerSVGElement,n=Ac("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",n.appendChild(a),kr.appendChild(n);try{r=a.getBBox()}catch{}return n.removeChild(a),kr.removeChild(n),r},zu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gp=function(e){var t,n;try{t=e.getBBox()}catch{t=Fu(e),n=1}return t&&(t.width||t.height)||n||(t=Fu(e)),t&&!t.width&&!t.x&&!t.y?{x:+zu(e,["x","cx","x1"])||0,y:+zu(e,["y","cy","y1"])||0,width:0,height:0}:t},_p=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gp(e))},va=function(e,t){if(t){var n=e.style,a;t in Wi&&t!==yn&&(t=At),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(Vd,"-$1").toLowerCase())):n.removeAttribute(t)}},ua=function(e,t,n,a,r,s){var o=new vn(e._pt,t,n,0,1,s?fp:up);return e._pt=o,o.b=a,o.e=r,e._props.push(n),o},Ou={deg:1,rad:1,turn:1},i_={grid:1,flex:1},ya=function i(e,t,n,a){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Fa.style,c=Vg.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=a==="px",h=a==="%",m,_,p,g;if(a===s||!r||Ou[a]||Ou[s])return r;if(s!=="px"&&!f&&(r=i(e,t,n,"px")),g=e.getCTM&&_p(e),(h||s==="%")&&(Wi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[d],Dt(h?r/m*u:r/100*m);if(o[c?"width":"height"]=u+(f?s:a),_=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===da||!_.appendChild)&&(_=da.body),p=_._gsap,p&&h&&p.width&&c&&p.time===Cn.time&&!p.uncache)return Dt(r/p.width*u);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+a,m=e[d],b?e.style[t]=b:va(e,t)}else(h||s==="%")&&!i_[Dn(_,"display")]&&(o.position=Dn(e,"position")),_===e&&(o.position="static"),_.appendChild(Fa),m=Fa[d],_.removeChild(Fa),o.position="absolute";return c&&h&&(p=Ha(_),p.time=Cn.time,p.width=_[d]),Dt(f?m*r/u:m&&r?u/m*r:0)},Fi=function(e,t,n,a){var r;return Hd||kc(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wi[t]&&t!=="transform"?(r=Es(e,a),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Fo(Dn(e,yn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=No[t]&&No[t](e,t,n)||Dn(e,t)||Uh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ya(e,t,r,n)+n:r},a_=function(e,t,n,a){if(!n||n==="none"){var r=Gr(t,e,1),s=r&&Dn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var o=new vn(this._pt,e.style,t,0,1,lp),c=0,l=0,d,u,f,h,m,_,p,g,b,T,x,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Dn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(_=e.style[t],e.style[t]=a,a=Dn(e,t)||a,_?e.style[t]=_:va(e,t)),d=[n,a],ep(d),n=d[0],a=d[1],f=n.match(br)||[],S=a.match(br)||[],S.length){for(;u=br.exec(a);)p=u[0],b=a.substring(c,u.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=f[l++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),p.charAt(1)==="="&&(p=Ar(h,p)+x),g=parseFloat(p),T=p.substr((g+"").length),c=br.lastIndex-T.length,T||(T=T||In.units[t]||x,c===a.length&&(a+=T,o.e+=T)),x!==T&&(h=ya(e,t,_,T)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?fp:up;return Ch.test(a)&&(o.e=0),this._pt=o,o},Bu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},r_=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Bu[n]||n,t[1]=Bu[a]||a,t.join(" ")},s_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,r=t.u,s=n._gsap,o,c,l;if(r==="all"||r===!0)a.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Wi[o]&&(c=1,o=o==="transformOrigin"?yn:At),va(n,o);c&&(va(n,At),s&&(s.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Es(n,1),s.uncache=1,hp(a)))}},No={clearProps:function(e,t,n,a,r){if(r.data!=="isFromStart"){var s=e._pt=new vn(e._pt,t,n,0,0,s_);return s.u=a,s.pr=-10,s.tween=r,e._props.push(n),1}}},Ms=[1,0,0,1,0,0],vp={},yp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hu=function(e){var t=Dn(e,At);return yp(t)?Ms:t.substr(7).match(Rh).map(Dt)},$d=function(e,t){var n=e._gsap||Ha(e),a=e.style,r=Hu(e),s,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ms:r):(r===Ms&&!e.offsetParent&&e!==kr&&!n.svg&&(c=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,kr.appendChild(e)),r=Hu(e),c?a.display=c:va(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):kr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Rc=function(e,t,n,a,r,s){var o=e._gsap,c=r||$d(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,h=c[0],m=c[1],_=c[2],p=c[3],g=c[4],b=c[5],T=t.split(" "),x=parseFloat(T[0])||0,S=parseFloat(T[1])||0,w,A,v,E;n?c!==Ms&&(A=h*p-m*_)&&(v=x*(p/A)+S*(-_/A)+(_*b-p*g)/A,E=x*(-m/A)+S*(h/A)-(h*b-m*g)/A,x=v,S=E):(w=gp(e),x=w.x+(~T[0].indexOf("%")?x/100*w.width:x),S=w.y+(~(T[1]||T[0]).indexOf("%")?S/100*w.height:S)),a||a!==!1&&o.smooth?(g=x-l,b=S-d,o.xOffset=u+(g*h+b*_)-g,o.yOffset=f+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[yn]="0px 0px",s&&(ua(s,o,"xOrigin",l,x),ua(s,o,"yOrigin",d,S),ua(s,o,"xOffset",u,o.xOffset),ua(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Es=function(e,t){var n=e._gsap||new np(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,r=n.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=Dn(e,yn)||"0",d,u,f,h,m,_,p,g,b,T,x,S,w,A,v,E,k,C,U,N,L,F,$,G,ee,X,j,re,Te,Ae,Ye,He;return d=u=f=_=p=g=b=T=x=0,h=m=1,n.svg=!!(e.getCTM&&_p(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[At]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[At]!=="none"?c[At]:"")),a.scale=a.rotate=a.translate="none"),A=$d(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),l=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Rc(e,G||l,!!G||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==Ms&&(C=A[0],U=A[1],N=A[2],L=A[3],d=F=A[4],u=$=A[5],A.length===6?(h=Math.sqrt(C*C+U*U),m=Math.sqrt(L*L+N*N),_=C||U?nr(U,C)*Ia:0,b=N||L?nr(N,L)*Ia+_:0,b&&(m*=Math.abs(Math.cos(b*Rr))),n.svg&&(d-=S-(S*C+w*N),u-=w-(S*U+w*L))):(He=A[6],Ae=A[7],j=A[8],re=A[9],Te=A[10],Ye=A[11],d=A[12],u=A[13],f=A[14],v=nr(He,Te),p=v*Ia,v&&(E=Math.cos(-v),k=Math.sin(-v),G=F*E+j*k,ee=$*E+re*k,X=He*E+Te*k,j=F*-k+j*E,re=$*-k+re*E,Te=He*-k+Te*E,Ye=Ae*-k+Ye*E,F=G,$=ee,He=X),v=nr(-N,Te),g=v*Ia,v&&(E=Math.cos(-v),k=Math.sin(-v),G=C*E-j*k,ee=U*E-re*k,X=N*E-Te*k,Ye=L*k+Ye*E,C=G,U=ee,N=X),v=nr(U,C),_=v*Ia,v&&(E=Math.cos(v),k=Math.sin(v),G=C*E+U*k,ee=F*E+$*k,U=U*E-C*k,$=$*E-F*k,C=G,F=ee),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),h=Dt(Math.sqrt(C*C+U*U+N*N)),m=Dt(Math.sqrt($*$+He*He)),v=nr(F,$),b=Math.abs(v)>2e-4?v*Ia:0,x=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yp(Dn(e,At)),G&&e.setAttribute("transform",G))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(h*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Dt(h),n.scaleY=Dt(m),n.rotation=Dt(_)+o,n.rotationX=Dt(p)+o,n.rotationY=Dt(g)+o,n.skewX=b+o,n.skewY=T+o,n.transformPerspective=x+s,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[yn]=Fo(l)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?l_:mp?xp:o_,n.uncache=0,n},Fo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sl=function(e,t,n){var a=en(t);return Dt(parseFloat(t)+parseFloat(ya(e,"x",n+"px",a)))+a},o_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xp(e,t)},Ma="0deg",Yr="0px",Ea=") ",xp=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,u=n.rotationX,f=n.skewX,h=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,T=n.zOrigin,x="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(u!==Ma||d!==Ma)){var w=parseFloat(d)*Rr,A=Math.sin(w),v=Math.cos(w),E;w=parseFloat(u)*Rr,E=Math.cos(w),s=Sl(b,s,A*E*-T),o=Sl(b,o,-Math.sin(w)*-T),c=Sl(b,c,v*E*-T+T)}p!==Yr&&(x+="perspective("+p+Ea),(a||r)&&(x+="translate("+a+"%, "+r+"%) "),(S||s!==Yr||o!==Yr||c!==Yr)&&(x+=c!==Yr||S?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+Ea),l!==Ma&&(x+="rotate("+l+Ea),d!==Ma&&(x+="rotateY("+d+Ea),u!==Ma&&(x+="rotateX("+u+Ea),(f!==Ma||h!==Ma)&&(x+="skew("+f+", "+h+Ea),(m!==1||_!==1)&&(x+="scale("+m+", "+_+Ea),b.style[At]=x||"translate(0, 0)"},l_=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,u=n.scaleX,f=n.scaleY,h=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,T=parseFloat(s),x=parseFloat(o),S,w,A,v,E;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=Rr,l*=Rr,S=Math.cos(c)*u,w=Math.sin(c)*u,A=Math.sin(c-l)*-f,v=Math.cos(c-l)*f,l&&(d*=Rr,E=Math.tan(l-d),E=Math.sqrt(1+E*E),A*=E,v*=E,d&&(E=Math.tan(d),E=Math.sqrt(1+E*E),S*=E,w*=E)),S=Dt(S),w=Dt(w),A=Dt(A),v=Dt(v)):(S=u,v=f,w=A=0),(T&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=ya(h,"x",s,"px"),x=ya(h,"y",o,"px")),(m||_||p||g)&&(T=Dt(T+m-(m*S+_*A)+p),x=Dt(x+_-(m*w+_*v)+g)),(a||r)&&(E=h.getBBox(),T=Dt(T+a/100*E.width),x=Dt(x+r/100*E.height)),E="matrix("+S+","+w+","+A+","+v+","+T+","+x+")",h.setAttribute("transform",E),b&&(h.style[At]=E)},c_=function(e,t,n,a,r){var s=360,o=$t(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Ia:1),l=c-a,d=a+l+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),u==="cw"&&l<0?l=(l+s*Uu)%s-~~(l/s)*s:u==="ccw"&&l>0&&(l=(l-s*Uu)%s-~~(l/s)*s)),e._pt=f=new vn(e._pt,t,n,a,l,Wg),f.e=d,f.u="deg",e._props.push(n),f},Gu=function(e,t){for(var n in t)e[n]=t[n];return e},d_=function(e,t,n){var a=Gu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,c,l,d,u,f,h,m;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),s[At]=t,o=Es(n,1),va(n,At),n.setAttribute("transform",l)):(l=getComputedStyle(n)[At],s[At]=t,o=Es(n,1),s[At]=l);for(c in Wi)l=a[c],d=o[c],l!==d&&r.indexOf(c)<0&&(h=en(l),m=en(d),u=h!==m?ya(n,c,l,m):parseFloat(l),f=parseFloat(d),e._pt=new vn(e._pt,o,c,u,f-u,Tc),e._pt.u=m||0,e._props.push(c));Gu(o,a)};_n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",r="Left",s=(e<3?[t,n,a,r]:[t+r,t+n,a+n,a+r]).map(function(o){return e<2?i+o:"border"+o+i});No[e>1?"border"+i:i]=function(o,c,l,d,u){var f,h;if(arguments.length<4)return f=s.map(function(m){return Fi(o,m,l)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(d+"").split(" "),h={},s.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,h,u)}});var bp={name:"css",register:kc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,r){var s=this._props,o=e.style,c=n.vars.startAt,l,d,u,f,h,m,_,p,g,b,T,x,S,w,A,v,E;Hd||kc(),this.styles=this.styles||pp(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(Tn[_]&&ip(_,t,n,a,e,r)))){if(h=typeof d,m=No[_],h==="function"&&(d=d.call(n,a,e,r),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=xs(d)),m)m(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",ga.lastIndex=0,ga.test(l)||(p=en(l),g=en(d),g?p!==g&&(l=ya(e,_,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,a,r,0,0,_),s.push(_),v.push(_,0,o[_]);else if(h!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,a,e,r):c[_],$t(l)&&~l.indexOf("random(")&&(l=xs(l)),en(l+"")||l==="auto"||(l+=In.units[_]||en(Fi(e,_))||""),(l+"").charAt(1)==="="&&(l=Fi(e,_))):l=Fi(e,_),f=parseFloat(l),b=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),u=parseFloat(d),_ in xi&&(_==="autoAlpha"&&(f===1&&Fi(e,"visibility")==="hidden"&&u&&(f=0),v.push("visibility",0,o.visibility),ua(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Wi,T){if(this.styles.save(_),E=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Dn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var k=e.style.perspective;e.style.perspective=d,d=Dn(e,"perspective"),k?e.style.perspective=k:va(e,"perspective")}u=parseFloat(d)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Es(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new vn(this._pt,o,At,0,1,S.renderTransform,S,0,-1),x.dep=1),_==="scale")this._pt=new vn(this._pt,S,"scaleY",S.scaleY,(b?Ar(S.scaleY,b+u):u)-S.scaleY||0,Tc),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(yn,0,o[yn]),d=r_(d),S.svg?Rc(e,d,0,w,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==S.zOrigin&&ua(this,S,"zOrigin",S.zOrigin,g),ua(this,o,_,Fo(l),Fo(d)));continue}else if(_==="svgOrigin"){Rc(e,d,1,w,0,this);continue}else if(_ in vp){c_(this,S,_,f,b?Ar(f,b+d):d);continue}else if(_==="smoothOrigin"){ua(this,S,"smooth",S.smooth,d);continue}else if(_==="force3D"){S[_]=d;continue}else if(_==="transform"){d_(this,d,e);continue}}else _ in o||(_=Gr(_)||_);if(T||(u||u===0)&&(f||f===0)&&!$g.test(d)&&_ in o)p=(l+"").substr((f+"").length),u||(u=0),g=en(d)||(_ in In.units?In.units[_]:p),p!==g&&(f=ya(e,_,l,g)),this._pt=new vn(this._pt,T?S:o,_,f,(b?Ar(f,b+u):u)-f,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Yg:Tc),this._pt.u=g||0,T&&E!==d?(this._pt.b=l,this._pt.e=E,this._pt.r=Xg):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=qg);else if(_ in o)a_.call(this,e,_,l,b?b+d:d);else if(_ in e)this.add(e,_,l||e[_],b?b+d:d,a,r);else if(_!=="parseTransform"){Ld(_,d);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,l||e[_])),s.push(_)}}A&&cp(this)},render:function(e,t){if(t.tween._time||!Gd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fi,aliases:xi,getSetter:function(e,t,n){var a=xi[t];return a&&a.indexOf(",")<0&&(t=a),t in Wi&&t!==yn&&(e._gsap.x||Fi(e,"x"))?n&&Iu===n?t==="scale"?Qg:Jg:(Iu=n||{})&&(t==="scale"?jg:e_):e.style&&!kd(e.style[t])?Kg:~t.indexOf("-")?Zg:Od(e,t)},core:{_removeProperty:va,_getMatrix:$d}};Sn.utils.checkPrefix=Gr;Sn.core.getStyleSaver=pp;(function(i,e,t,n){var a=_n(i+","+e+","+t,function(r){Wi[r]=1});_n(e,function(r){In.units[r]="deg",vp[r]=1}),xi[a[13]]=i+","+e,_n(n,function(r){var s=r.split(":");xi[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){In.units[i]="px"});Sn.registerPlugin(bp);var qi=Sn.registerPlugin(bp)||Sn;qi.core.Tween;qi.matchMedia();function Ns(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Vu=new WeakMap;function u_(i,e){const t=Vu.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Vu.set(i,t),Ns()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const r=document.createElement("span");r.textContent=n,r.style.cssText="display:block;";const s=document.createElement("span");s.textContent=e,s.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(r,s),i.appendChild(a),t.tween=qi.to([r,s],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Sp(i){if(Ns())return;const e=Array.from(i.children).slice(0,8);e.length&&qi.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Wd(i){Ns()||!i.length||qi.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function qd(i){Ns()||qi.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function f_(i,e){if(Ns()){e();return}qi.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{qi.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="186",h_=0,$u=1,p_=2,bo=1,m_=2,ss=3,qa=0,xn=1,jn=2,Bi=0,fs=1,Wu=2,qu=3,Xu=4,g_=5,vr=100,__=101,v_=102,y_=103,x_=104,b_=200,S_=201,M_=202,E_=203,Mp=204,Ep=205,w_=206,T_=207,A_=208,k_=209,R_=210,C_=211,L_=212,P_=213,D_=214,Cc=0,Lc=1,Pc=2,ws=3,Dc=4,Ic=5,Uc=6,Nc=7,Yd=0,I_=1,U_=2,Mi=0,wp=1,Tp=2,Ap=3,kp=4,Rp=5,Cp=6,Lp=7,Pp=300,Xa=301,Vr=302,Ml=303,El=304,el=306,Fc=1e3,zi=1001,zc=1002,Ft=1003,N_=1004,$s=1005,tn=1006,wl=1007,za=1008,Ln=1009,Dp=1010,Ip=1011,Ts=1012,Kd=1013,wi=1014,bi=1015,Ti=1016,Zd=1017,Jd=1018,As=1020,Up=35902,Np=35899,Fp=1021,zp=1022,ii=1023,Xi=1026,Oa=1027,Op=1028,Qd=1029,Ya=1030,jd=1031,eu=1033,So=33776,Mo=33777,Eo=33778,wo=33779,Oc=35840,Bc=35841,Hc=35842,Gc=35843,Vc=36196,$c=37492,Wc=37496,qc=37488,Xc=37489,zo=37490,Yc=37491,Kc=37808,Zc=37809,Jc=37810,Qc=37811,jc=37812,ed=37813,td=37814,nd=37815,id=37816,ad=37817,rd=37818,sd=37819,od=37820,ld=37821,cd=36492,dd=36494,ud=36495,fd=36283,hd=36284,Oo=36285,pd=36286,F_=3200,md=0,z_=1,oa="",An="srgb",Bo="srgb-linear",Ho="linear",ut="srgb",Tl=7680,O_=519,B_=512,H_=513,G_=514,tu=515,V_=516,$_=517,nu=518,W_=519,q_=35044,Yu="300 es",Si=2e3,ks=2001;function X_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Y_(){const i=Rs("canvas");return i.style.display="block",i}const Ku={};function Zu(...i){const e="THREE."+i.shift();console.log(e,...i)}function Bp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Bp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Bp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cr(...i){const e=i.join(" ");e in Ku||(Ku[e]=!0,Be(...i))}function K_(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Z_={[Cc]:Lc,[Pc]:Uc,[Dc]:Nc,[ws]:Ic,[Lc]:Cc,[Uc]:Pc,[Nc]:Dc,[Ic]:ws};class Qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,gd=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function J_(i,e){return(i%e+e)%e}function Al(i,e,t){return(1-t)*i+t*e}function Q_(i){return i*To}function Kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const j_={degToRad:Q_};class nt{static{nt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],d=n[a+2],u=n[a+3],f=r[s+0],h=r[s+1],m=r[s+2],_=r[s+3];if(u!==_||c!==f||l!==h||d!==m){let p=c*f+l*h+d*m+u*_;p<0&&(f=-f,h=-h,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T,c=c*g+f*o,l=l*g+h*o,d=d*g+m*o,u=u*g+_*o}else{c=c*g+f*o,l=l*g+h*o,d=d*g+m*o,u=u*g+_*o;const b=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=b,l*=b,d*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],u=r[s],f=r[s+1],h=r[s+2],m=r[s+3];return e[t]=o*m+d*u+c*h-l*f,e[t+1]=c*m+d*f+l*u-o*h,e[t+2]=l*m+d*h+o*f-c*u,e[t+3]=d*m-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),u=o(r/2),f=c(n/2),h=c(a/2),m=c(r/2);switch(s){case"XYZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"YXZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"ZXY":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"ZYX":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"YZX":this._x=f*d*u+l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u-f*h*m;break;case"XZY":this._x=f*d*u-l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u+f*h*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(s-a)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(r-l)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(s-a)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+a*l-r*c,this._y=a*d+s*c+r*o-n*l,this._z=r*d+s*l+n*c-a*o,this._w=s*d-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{W.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),d=2*(o*t-r*a),u=2*(r*n-s*t);return this.x=t+c*l+s*u-o*d,this.y=n+c*d+o*l-r*u,this.z=a+c*u+r*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new W,Ju=new qr;class Ge{static{Ge.prototype.isMatrix3=!0}constructor(e,t,n,a,r,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],m=n[8],_=a[0],p=a[3],g=a[6],b=a[1],T=a[4],x=a[7],S=a[2],w=a[5],A=a[8];return r[0]=s*_+o*b+c*S,r[3]=s*p+o*T+c*w,r[6]=s*g+o*x+c*A,r[1]=l*_+d*b+u*S,r[4]=l*p+d*T+u*w,r[7]=l*g+d*x+u*A,r[2]=f*_+h*b+m*S,r[5]=f*p+h*T+m*w,r[8]=f*g+h*x+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*r*d+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*s-o*l,f=o*c-d*r,h=l*r-s*c,m=t*u+n*f+a*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(a*l-d*n)*_,e[2]=(o*n-a*s)*_,e[3]=f*_,e[4]=(d*t-a*c)*_,e[5]=(a*r-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new Ge,Qu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){const i={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ut&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(a.r=Lr(a.r),a.g=Lr(a.g),a.b=Lr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===oa?Ho:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bo]:{primaries:e,whitePoint:n,transfer:Ho,toXYZ:Qu,fromXYZ:ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Qu,fromXYZ:ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const je=e0();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ir;class t0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ir===void 0&&(ir=Rs("canvas")),ir.width=e.width,ir.height=e.height;const a=ir.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Hi(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n0=0;class iu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Cl(a[s].image)):r.push(Cl(a[s]))}else r=Cl(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?t0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let i0=0;const Ll=new W;class Vt extends Qa{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=zi,a=zi,r=tn,s=za,o=ii,c=Ln,l=Vt.DEFAULT_ANISOTROPY,d=oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Fs(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Pp;Vt.DEFAULT_ANISOTROPY=1;class kt{static{kt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(h+1)/2,S=(g+1)/2,w=(d+f)/4,A=(u+_)/4,v=(m+p)/4;return T>x&&T>S?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=w/n,r=A/n):x>S?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=w/a,r=v/a):S<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),n=A/r,a=v/r),this.set(n,a,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-_)/b,this.z=(f-d)/b,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a0 extends Qa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new Vt(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new iu(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends a0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hp extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r0 extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Mt{static{Mt.prototype.isMatrix4=!0}constructor(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p)}set(e,t,n,a,r,s,o,c,l,d,u,f,h,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=r,g[5]=s,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=u,g[14]=f,g[3]=h,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),s=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=s*d,h=s*u,m=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+m*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=m+h*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,m=l*d,_=l*u;t[0]=f+_*o,t[4]=m*o-h,t[8]=s*l,t[1]=s*u,t[5]=s*d,t[9]=-o,t[2]=h*o-m,t[6]=_+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,m=l*d,_=l*u;t[0]=f-_*o,t[4]=-s*u,t[8]=m+h*o,t[1]=h+m*o,t[5]=s*d,t[9]=_-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*d,h=s*u,m=o*d,_=o*u;t[0]=c*d,t[4]=m*l-h,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=h*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=_-f*u,t[8]=m*u+h,t[1]=u,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=s*c,h=s*l,m=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+_,t[5]=s*d,t[9]=h*u-m,t[2]=m*u-h,t[6]=o*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,o0)}lookAt(e,t,n){const a=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Qi.crossVectors(n,Mn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Qi.crossVectors(n,Mn)),Qi.normalize(),Ws.crossVectors(Mn,Qi),a[0]=Qi.x,a[4]=Ws.x,a[8]=Mn.x,a[1]=Qi.y,a[5]=Ws.y,a[9]=Mn.y,a[2]=Qi.z,a[6]=Ws.z,a[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],T=n[7],x=n[11],S=n[15],w=a[0],A=a[4],v=a[8],E=a[12],k=a[1],C=a[5],U=a[9],N=a[13],L=a[2],F=a[6],$=a[10],G=a[14],ee=a[3],X=a[7],j=a[11],re=a[15];return r[0]=s*w+o*k+c*L+l*ee,r[4]=s*A+o*C+c*F+l*X,r[8]=s*v+o*U+c*$+l*j,r[12]=s*E+o*N+c*G+l*re,r[1]=d*w+u*k+f*L+h*ee,r[5]=d*A+u*C+f*F+h*X,r[9]=d*v+u*U+f*$+h*j,r[13]=d*E+u*N+f*G+h*re,r[2]=m*w+_*k+p*L+g*ee,r[6]=m*A+_*C+p*F+g*X,r[10]=m*v+_*U+p*$+g*j,r[14]=m*E+_*N+p*G+g*re,r[3]=b*w+T*k+x*L+S*ee,r[7]=b*A+T*C+x*F+S*X,r[11]=b*v+T*U+x*$+S*j,r[15]=b*E+T*N+x*G+S*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],m=e[3],_=e[7],p=e[11],g=e[15],b=c*h-l*f,T=o*h-l*u,x=o*f-c*u,S=s*h-l*d,w=s*f-c*d,A=s*u-o*d;return t*(_*b-p*T+g*x)-n*(m*b-p*S+g*w)+a*(m*T-_*S+g*A)-r*(m*x-_*w+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-n*(r*d-o*c)+a*(r*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=t*o-n*s,T=t*c-a*s,x=t*l-r*s,S=n*c-a*o,w=n*l-r*o,A=a*l-r*c,v=d*_-u*m,E=d*p-f*m,k=d*g-h*m,C=u*p-f*_,U=u*g-h*_,N=f*g-h*p,L=b*N-T*U+x*C+S*k-w*E+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(o*N-c*U+l*C)*F,e[1]=(a*U-n*N-r*C)*F,e[2]=(_*A-p*w+g*S)*F,e[3]=(f*w-u*A-h*S)*F,e[4]=(c*k-s*N-l*E)*F,e[5]=(t*N-a*k+r*E)*F,e[6]=(p*x-m*A-g*T)*F,e[7]=(d*A-f*x+h*T)*F,e[8]=(s*U-o*k+l*v)*F,e[9]=(n*k-t*U-r*v)*F,e[10]=(m*w-_*x+g*b)*F,e[11]=(u*x-d*w-h*b)*F,e[12]=(o*E-s*C-c*v)*F,e[13]=(t*C-n*E+a*v)*F,e[14]=(_*T-m*S-p*b)*F,e[15]=(d*S-u*T+f*b)*F,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,d=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*s,0,l*c-a*o,d*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,d=s+s,u=o+o,f=r*l,h=r*d,m=r*u,_=s*d,p=s*u,g=o*u,b=c*l,T=c*d,x=c*u,S=n.x,w=n.y,A=n.z;return a[0]=(1-(_+g))*S,a[1]=(h+x)*S,a[2]=(m-T)*S,a[3]=0,a[4]=(h-x)*w,a[5]=(1-(f+g))*w,a[6]=(p+b)*w,a[7]=0,a[8]=(m+T)*A,a[9]=(p-b)*A,a[10]=(1-(f+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=ar.set(a[0],a[1],a[2]).length();const o=ar.set(a[4],a[5],a[6]).length(),c=ar.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Yn.copy(this);const l=1/s,d=1/o,u=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,a,r,s,o=Si,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let m,_;if(c)m=r/(s-r),_=s*r/(s-r);else if(o===Si)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===ks)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=Si,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-a),f=-(t+e)/(t-e),h=-(n+a)/(n-a);let m,_;if(c)m=1/(s-r),_=s/(s-r);else if(o===Si)m=-2/(s-r),_=-(s+r)/(s-r);else if(o===ks)m=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new W,Yn=new Mt,s0=new W(0,0,0),o0=new W(1,1,1),Qi=new W,Ws=new W,Mn=new W,ef=new Mt,tf=new qr;class xa{constructor(e=0,t=0,n=0,a=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],d=a[9],u=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const nf=new W,rr=new qr,Ri=new Mt,qs=new W,Zr=new W,c0=new W,d0=new qr,af=new W(1,0,0),rf=new W(0,1,0),sf=new W(0,0,1),of={type:"added"},u0={type:"removed"},sr={type:"childadded",child:null},Pl={type:"childremoved",child:null};class an extends Qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new W,t=new xa,n=new qr,a=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ge}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Zr,qs,this.up):Ri.lookAt(qs,Zr,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),rr.setFromRotationMatrix(Ri),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),sr.child=e,this.dispatchEvent(sr),sr.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=a,n;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new W(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=je.workingColorSpace){if(e=J_(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Il(s,r,e+1/3),this.g=Il(s,r,e),this.b=Il(s,r,e-1/3)}return je.colorSpaceToWorking(this,a),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return je.workingToColorSpace(jt.copy(this),e),Math.round(et(jt.r*255,0,255))*65536+Math.round(et(jt.g*255,0,255))*256+Math.round(et(jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),t);const n=jt.r,a=jt.g,r=jt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=d<=.5?u/(s+o):u/(2-s-o),s){case n:c=(a-r)/u+(a<r?6:0);break;case a:c=(r-n)/u+2;break;case r:c=(n-a)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=An){je.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,a=jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Xs);const n=Al(ji.h,Xs.h,t),a=Al(ji.s,Xs.s,t),r=Al(ji.l,Xs.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ot;ot.NAMES=Gp;class h0 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kn=new W,Ci=new W,Ul=new W,Li=new W,or=new W,lr=new W,lf=new W,Nl=new W,Fl=new W,zl=new W,Ol=new kt,Bl=new kt,Hl=new kt;class ei{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Kn.subVectors(e,t),a.cross(Kn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Kn.subVectors(a,t),Ci.subVectors(n,t),Ul.subVectors(e,t);const s=Kn.dot(Kn),o=Kn.dot(Ci),c=Kn.dot(Ul),l=Ci.dot(Ci),d=Ci.dot(Ul),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,m=(s*d-o*c)*f;return r.set(1-h-m,m,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(s,Li.y),c.addScaledVector(o,Li.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return Ol.setScalar(0),Bl.setScalar(0),Hl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ol,r.x),s.addScaledVector(Bl,r.y),s.addScaledVector(Hl,r.z),s}static isFrontFacing(e,t,n,a){return Kn.subVectors(n,t),Ci.subVectors(e,t),Kn.cross(Ci).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Kn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;or.subVectors(a,n),lr.subVectors(r,n),Nl.subVectors(e,n);const c=or.dot(Nl),l=lr.dot(Nl);if(c<=0&&l<=0)return t.copy(n);Fl.subVectors(e,a);const d=or.dot(Fl),u=lr.dot(Fl);if(d>=0&&u<=d)return t.copy(a);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(or,s);zl.subVectors(e,r);const h=or.dot(zl),m=lr.dot(zl);if(m>=0&&h<=m)return t.copy(r);const _=h*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(lr,o);const p=d*m-h*u;if(p<=0&&u-d>=0&&h-m>=0)return lf.subVectors(r,a),o=(u-d)/(u-d+(h-m)),t.copy(a).addScaledVector(lf,o);const g=1/(p+_+f);return s=_*g,o=f*g,t.copy(n).addScaledVector(or,s).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zn):Zn.fromBufferAttribute(r,s),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Ks.subVectors(this.max,Jr),cr.subVectors(e.a,Jr),dr.subVectors(e.b,Jr),ur.subVectors(e.c,Jr),ea.subVectors(dr,cr),ta.subVectors(ur,dr),wa.subVectors(cr,ur);let t=[0,-ea.z,ea.y,0,-ta.z,ta.y,0,-wa.z,wa.y,ea.z,0,-ea.x,ta.z,0,-ta.x,wa.z,0,-wa.x,-ea.y,ea.x,0,-ta.y,ta.x,0,-wa.y,wa.x,0];return!Gl(t,cr,dr,ur,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,cr,dr,ur,Ks))?!1:(Zs.crossVectors(ea,ta),t=[Zs.x,Zs.y,Zs.z],Gl(t,cr,dr,ur,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,Ys=new zs,cr=new W,dr=new W,ur=new W,ea=new W,ta=new W,wa=new W,Jr=new W,Ks=new W,Zs=new W,Ta=new W;function Gl(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Ta.fromArray(i,r);const o=a.x*Math.abs(Ta.x)+a.y*Math.abs(Ta.y)+a.z*Math.abs(Ta.z),c=e.dot(Ta),l=t.dot(Ta),d=n.dot(Ta);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Ut=new W,Js=new nt;let p0=0;class Gi extends Qa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=q_,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),a=un(a,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vp extends Gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $p extends Gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vi extends Gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const m0=new zs,Qr=new W,Vl=new W;class ru{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Qr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Vl)),this.expandByPoint(Qr.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let g0=0;const On=new Mt,$l=new an,fr=new W,En=new zs,jr=new zs,Bt=new W;class Yi extends Qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?$p:Vp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(En.min,jr.min),En.expandByPoint(Bt),Bt.addVectors(En.max,jr.max),En.expandByPoint(Bt)):(En.expandByPoint(jr.min),En.expandByPoint(jr.max))}En.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Bt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Bt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Bt.fromBufferAttribute(o,l),c&&(fr.fromBufferAttribute(e,l),Bt.add(fr)),a=Math.max(a,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new W,c[v]=new W;const l=new W,d=new W,u=new W,f=new nt,h=new nt,m=new nt,_=new W,p=new W;function g(v,E,k){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,k),f.fromBufferAttribute(r,v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,k),d.sub(l),u.sub(l),h.sub(f),m.sub(f);const C=1/(h.x*m.y-m.x*h.y);isFinite(C)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(C),p.copy(u).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(C),o[v].add(_),o[E].add(_),o[k].add(_),c[v].add(p),c[E].add(p),c[k].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,E=b.length;v<E;++v){const k=b[v],C=k.start,U=k.count;for(let N=C,L=C+U;N<L;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new W,x=new W,S=new W,w=new W;function A(v){S.fromBufferAttribute(a,v),w.copy(S);const E=o[v];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(w,E);const C=x.dot(c[v])<0?-1:1;s.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,E=b.length;v<E;++v){const k=b[v],C=k.start,U=k.count;for(let N=C,L=C+U;N<L;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const a=new W,r=new W,s=new W,o=new W,c=new W,l=new W,d=new W,u=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*d;for(let g=0;g<d;g++)f[m++]=l[h++]}return new Gi(f,d,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yi,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(a[c]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new W,_0=new W,v0=new Ge;class ra{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Wl.subVectors(n,t).cross(_0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(Wl),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v0.getNormalMatrix(e),a=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let y0=0;class Os extends Qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=fs,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=Ep,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ra().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new W,ql=new W,Qs=new W,js=new W;class Wp{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ql.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),js.copy(this.origin).sub(ql);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Qs),o=js.dot(this.direction),c=-js.dot(Qs),l=js.lengthSq(),d=Math.abs(1-s*s);let u,f,h,m;if(d>0)if(u=s*c-o,f=s*o-c,m=r*d,u>=0)if(f>=-m)if(f<=m){const _=1/d;u*=_,f*=_,h=u*(u+s*f+2*o)+f*(s*u+f+2*c)+l}else f=r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-s*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(u=Math.max(0,-(s*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l);else f=s>0?-r:r,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(ql).addScaledVector(Qs,f),h}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const n=Di.dot(this.direction),a=Di.dot(Di)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,a,r){const s=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,m=t.x-s.x,_=t.y-s.y,p=t.z-s.z,g=n.x-s.x,b=n.y-s.y,T=n.z-s.z,x=Math.abs(c),S=Math.abs(l),w=Math.abs(d);let A,v,E,k,C,U,N,L,F,$,G,ee;if(x>=S&&x>=w?(E=c,U=u,F=m,ee=g,c>=0?(A=l,v=d,k=f,C=h,N=_,L=p,$=b,G=T):(A=d,v=l,k=h,C=f,N=p,L=_,$=T,G=b)):S>=w?(E=l,U=f,F=_,ee=b,l>=0?(A=d,v=c,k=h,C=u,N=p,L=m,$=T,G=g):(A=c,v=d,k=u,C=h,N=m,L=p,$=g,G=T)):(E=d,U=h,F=p,ee=T,d>=0?(A=c,v=l,k=u,C=f,N=m,L=_,$=g,G=b):(A=l,v=c,k=f,C=u,N=_,L=m,$=b,G=g)),E===0)return null;const X=A/E,j=v/E,re=1/E,Te=k-X*U,Ae=C-j*U,Ye=N-X*F,He=L-j*F,$e=$-X*ee,K=G-j*ee,ne=$e*He-K*Ye,Se=Te*K-Ae*$e,Ue=Ye*Ae-He*Te;if(a){if(ne<0||Se<0||Ue<0)return null}else if((ne<0||Se<0||Ue<0)&&(ne>0||Se>0||Ue>0))return null;const Me=ne+Se+Ue;if(Me===0)return null;const We=re*(ne*U+Se*F+Ue*ee);return(Me>0?We<0:We>0)?null:this.at(We/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qp extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cf=new Mt,Aa=new Wp,eo=new ru,df=new W,to=new W,no=new W,io=new W,Xl=new W,ao=new W,uf=new W,ro=new W;class Fn extends an{constructor(e=new Yi,t=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(Xl.fromBufferAttribute(u,e),s?ao.addScaledVector(Xl,d):ao.addScaledVector(Xl.sub(t),d))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Aa.copy(e.ray).recast(e.near),!(eo.containsPoint(Aa.origin)===!1&&(Aa.intersectSphere(eo,df)===null||Aa.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Aa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,S=T;x<S;x+=3){const w=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);a=so(this,g,e,n,l,d,u,w,A,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);a=so(this,s,e,n,l,d,u,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=s[p.materialIndex],b=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,S=T;x<S;x+=3){const w=x,A=x+1,v=x+2;a=so(this,g,e,n,l,d,u,w,A,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const b=p,T=p+1,x=p+2;a=so(this,s,e,n,l,d,u,b,T,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function x0(i,e,t,n,a,r,s,o){let c;if(e.side===xn?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===qa,o),c===null)return null;ro.copy(o),ro.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ro);return l<t.near||l>t.far?null:{distance:l,point:ro.clone(),object:i}}function so(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,to),i.getVertexPosition(c,no),i.getVertexPosition(l,io);const d=x0(i,e,t,n,to,no,io,uf);if(d){const u=new W;ei.getBarycoord(uf,to,no,io,u),a&&(d.uv=ei.getInterpolatedAttribute(a,o,c,l,u,new nt)),r&&(d.uv1=ei.getInterpolatedAttribute(r,o,c,l,u,new nt)),s&&(d.normal=ei.getInterpolatedAttribute(s,o,c,l,u,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new W,materialIndex:0};ei.getNormal(to,no,io,f.normal),d.face=f,d.barycoord=u}return d}class b0 extends Vt{constructor(e=null,t=1,n=1,a,r,s,o,c,l=Ft,d=Ft,u,f){super(null,s,o,c,l,d,a,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=new ru,S0=new nt(.5,.5),oo=new W;class su{constructor(e=new ra,t=new ra,n=new ra,a=new ra,r=new ra,s=new ra){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],p=r[10],g=r[11],b=r[12],T=r[13],x=r[14],S=r[15];if(a[0].setComponents(l-s,h-d,g-m,S-b).normalize(),a[1].setComponents(l+s,h+d,g+m,S+b).normalize(),a[2].setComponents(l+o,h+u,g+_,S+T).normalize(),a[3].setComponents(l-o,h-u,g-_,S-T).normalize(),n)a[4].setComponents(c,f,p,x).normalize(),a[5].setComponents(l-c,h-f,g-p,S-x).normalize();else if(a[4].setComponents(l-c,h-f,g-p,S-x).normalize(),t===Si)a[5].setComponents(l+c,h+f,g+p,S+x).normalize();else if(t===ks)a[5].setComponents(c,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ka.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ka.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ka)}intersectsSprite(e){ka.center.set(0,0,0);const t=S0.distanceTo(e.center);return ka.radius=.7071067811865476+t,ka.applyMatrix4(e.matrixWorld),this.intersectsSphere(ka)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(oo.x=a.normal.x>0?e.max.x:e.min.x,oo.y=a.normal.y>0?e.max.y:e.min.y,oo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xp extends Vt{constructor(e=[],t=Xa,n,a,r,s,o,c,l,d){super(e,t,n,a,r,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yl extends Vt{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends Vt{constructor(e,t,n=wi,a,r,s,o=Ft,c=Ft,l,d=Xi,u=1){if(d!==Xi&&d!==Oa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,a,r,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new iu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class M0 extends Cs{constructor(e,t=wi,n=Xa,a,r,s=Ft,o=Ft,c,l=Xi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,a,r,s,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yp extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends Yi{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],d=[],u=[];let f=0,h=0;m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,a,s,2),m("x","z","y",1,-1,e,n,-t,a,s,3),m("x","y","z",1,-1,e,t,n,a,r,4),m("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Vi(l,3)),this.setAttribute("normal",new Vi(d,3)),this.setAttribute("uv",new Vi(u,2));function m(_,p,g,b,T,x,S,w,A,v,E){const k=x/A,C=S/v,U=x/2,N=S/2,L=w/2,F=A+1,$=v+1;let G=0,ee=0;const X=new W;for(let j=0;j<$;j++){const re=j*C-N;for(let Te=0;Te<F;Te++){const Ae=Te*k-U;X[_]=Ae*b,X[p]=re*T,X[g]=L,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=w>0?1:-1,d.push(X.x,X.y,X.z),u.push(Te/A),u.push(1-j/v),G+=1}}for(let j=0;j<v;j++)for(let re=0;re<A;re++){const Te=f+re+F*j,Ae=f+re+F*(j+1),Ye=f+(re+1)+F*(j+1),He=f+(re+1)+F*j;c.push(Te,Ae,He),c.push(Ae,Ye,He),ee+=6}o.addGroup(h,ee,E),h+=ee,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $r extends Yi{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,u=e/o,f=t/c,h=[],m=[],_=[],p=[];for(let g=0;g<d;g++){const b=g*f-s;for(let T=0;T<l;T++){const x=T*u-r;m.push(x,-b,0),_.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const T=b+l*g,x=b+l*(g+1),S=b+1+l*(g+1),w=b+1+l*g;h.push(T,x,w),h.push(x,S,w)}this.setIndex(h),this.setAttribute("position",new Vi(m,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(ff(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(ff(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=Wr(i[t]);for(const a in n)e[a]=n[a]}return e}function ff(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function E0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const w0={clone:Wr,merge:ln};var T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(a.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(a.value);break;case"v3":this.uniforms[n].value=new W().fromArray(a.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(a.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class k0 extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Go extends Os{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Yd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R0 extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C0 extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(hf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!hf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function hf(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class L0{constructor(e,t,n){const a=this;let r=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){const h=l[u],m=l[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const P0=new L0;class Zp{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zp.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr=new WeakMap;class D0 extends Zp{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Kl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let u=hr.get(s);u===void 0&&(u=[],hr.set(s,u)),u.push({onLoad:t,onError:a})}return s}const o=Rs("img");function c(){d(),t&&t(this);const u=hr.get(this)||[];for(let f=0;f<u.length;f++){const h=u[f];h.onLoad&&h.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function l(u){d(),a&&a(u),Kl.remove(`image:${e}`);const f=hr.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onError&&m.onError(u)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Jp extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zl=new Mt,pf=new W,mf=new W;class I0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new su,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,c=a?a.x/r.x:0,l=a?a.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lo=new W,co=new qr,ui=new W;class Qp extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lo,co,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const na=new W,gf=new nt,_f=new nt;class $n extends Qp{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gd*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(na.x,na.y).multiplyScalar(-e/na.z),na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(na.x,na.y).multiplyScalar(-e/na.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ou extends Qp{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U0 extends I0{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vf extends Jp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new U0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class N0 extends Jp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pr=-90,mr=1;class F0 extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(pr,mr,e,t);a.layers=this.layers,this.add(a);const r=new $n(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new $n(pr,mr,e,t);s.layers=this.layers,this.add(s);const o=new $n(pr,mr,e,t);o.layers=this.layers,this.add(o);const c=new $n(pr,mr,e,t);c.layers=this.layers,this.add(c);const l=new $n(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class z0 extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yf=new Mt;class O0{constructor(e,t,n=0,a=1/0){this.ray=new Wp(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,n=[]){return _d(e,this,n,t),n.sort(xf),n}intersectObjects(e,t=!0,n=[]){for(let a=0,r=e.length;a<r;a++)_d(e[a],this,n,t);return n.sort(xf),n}}function xf(i,e){return i.distance-e.distance}function _d(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)_d(r[s],e,t,!0)}}class B0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class jp{static{jp.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}}function bf(i,e,t,n){const a=H0(n);switch(t){case Fp:return i*e;case Op:return i*e/a.components*a.byteLength;case Qd:return i*e/a.components*a.byteLength;case Ya:return i*e*2/a.components*a.byteLength;case jd:return i*e*2/a.components*a.byteLength;case zp:return i*e*3/a.components*a.byteLength;case ii:return i*e*4/a.components*a.byteLength;case eu:return i*e*4/a.components*a.byteLength;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Gc:return Math.max(i,16)*Math.max(e,8)/4;case Oc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case Vc:case $c:case qc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:case zo:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case od:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cd:case dd:case ud:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fd:case hd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oo:case pd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(i){switch(i){case Ln:case Dp:return{byteLength:1,components:1};case Ts:case Ip:case Ti:return{byteLength:2,components:1};case Zd:case Jd:return{byteLength:2,components:4};case wi:case Kd:case bi:return{byteLength:4,components:1};case Up:case Np:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function em(){let i=null,e=!1,t=null,n=null;function a(r,s){n=i.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function G0(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<u.length;h++){const m=u[f],_=u[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let h=0,m=u.length;h<m;h++){const _=u[h];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nv=`#ifdef USE_IRIDESCENCE
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
#endif`,iv=`#ifdef USE_BUMPMAP
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pv=`vec3 transformedNormal = objectNormal;
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
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
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
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,Hv=`uniform sampler2D dfgLUT;
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
}`,Gv=`
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jv=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
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
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ky=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,Zy=`#if DEPTH_PACKING == 3200
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
}`,Jy=`#define DISTANCE
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
}`,Qy=`#define DISTANCE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,sx=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,xx=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:V0,alphahash_pars_fragment:$0,alphamap_fragment:W0,alphamap_pars_fragment:q0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:K0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:j0,beginnormal_vertex:ev,bsdfs:tv,iridescence_fragment:nv,bumpmap_pars_fragment:iv,clipping_planes_fragment:av,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:ov,color_fragment:lv,color_pars_fragment:cv,color_pars_vertex:dv,color_vertex:uv,common:fv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:pv,displacementmap_pars_vertex:mv,displacementmap_vertex:gv,emissivemap_fragment:_v,emissivemap_pars_fragment:vv,colorspace_fragment:yv,colorspace_pars_fragment:xv,envmap_fragment:bv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Mv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Uv,envmap_vertex:wv,fog_vertex:Tv,fog_pars_vertex:Av,fog_fragment:kv,fog_pars_fragment:Rv,gradientmap_pars_fragment:Cv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Fv,lights_phong_fragment:zv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Vv,lights_fragment_end:$v,lightprobes_pars_fragment:Wv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:Yv,logdepthbuf_vertex:Kv,map_fragment:Zv,map_pars_fragment:Jv,map_particle_fragment:Qv,map_particle_pars_fragment:jv,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ay,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:dy,normal_vertex:uy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:_y,packing:vy,premultiplied_alpha_fragment:yy,project_vertex:xy,dithering_fragment:by,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:ky,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:Ly,skinnormal_vertex:Py,specularmap_fragment:Dy,specularmap_pars_fragment:Iy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Ny,transmission_fragment:Fy,transmission_pars_fragment:zy,uv_pars_fragment:Oy,uv_pars_vertex:By,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Vy,background_frag:$y,backgroundCube_vert:Wy,backgroundCube_frag:qy,cube_vert:Xy,cube_frag:Yy,depth_vert:Ky,depth_frag:Zy,distance_vert:Jy,distance_frag:Qy,equirect_vert:jy,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:ax,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:dx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:hx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:_x,points_frag:vx,shadow_vert:yx,shadow_frag:xx,sprite_vert:bx,sprite_frag:Sx},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mi={basic:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ln([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ln([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const uo={r:0,b:0,g:0},Mx=new Mt,tm=new Ge;tm.set(-1,0,0,0,1,0,0,0,1);function Ex(i,e,t,n,a,r){const s=new ot(0);let o=a===!0?0:1,c,l,d=null,u=0,f=null;function h(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const x=b.backgroundBlurriness>0;T=e.get(T,x)}return T}function m(b){let T=!1;const x=h(b);x===null?p(s,o):x&&x.isColor&&(p(x,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){const x=h(T);x&&(x.isCubeTexture||x.mapping===el)?(l===void 0&&(l=new Fn(new ja(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Wr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tm),l.material.toneMapped=je.getTransfer(x.colorSpace)!==ut,(d!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Fn(new $r(2,2),new Ai({name:"BackgroundMaterial",uniforms:Wr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(uo,Kp(i)),t.buffers.color.setClear(uo.r,uo.g,uo.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,T=1){s.set(b),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(s,o)},render:m,addToRenderList:_,dispose:g}}function wx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let r=a,s=!1;function o(C,U,N,L,F){let $=!1;const G=u(C,L,N,U);r!==G&&(r=G,l(r.object)),$=h(C,L,N,F),$&&m(C,L,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(C,U,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function u(C,U,N,L){const F=L.wireframe===!0;let $=n[U.id];$===void 0&&($={},n[U.id]=$);const G=C.isInstancedMesh===!0?C.id:0;let ee=$[G];ee===void 0&&(ee={},$[G]=ee);let X=ee[N.id];X===void 0&&(X={},ee[N.id]=X);let j=X[F];return j===void 0&&(j=f(c()),X[F]=j),j}function f(C){const U=[],N=[],L=[];for(let F=0;F<t;F++)U[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:L,object:C,attributes:{},index:null}}function h(C,U,N,L){const F=r.attributes,$=U.attributes;let G=0;const ee=N.getAttributes();for(const X in ee)if(ee[X].location>=0){const re=F[X];let Te=$[X];if(Te===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor)),re===void 0||re.attribute!==Te||Te&&re.data!==Te.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(C,U,N,L){const F={},$=U.attributes;let G=0;const ee=N.getAttributes();for(const X in ee)if(ee[X].location>=0){let re=$[X];re===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const Te={};Te.attribute=re,re&&re.data&&(Te.data=re.data),F[X]=Te,G++}r.attributes=F,r.attributesNum=G,r.index=L}function _(){const C=r.newAttributes;for(let U=0,N=C.length;U<N;U++)C[U]=0}function p(C){g(C,0)}function g(C,U){const N=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;N[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),F[C]!==U&&(i.vertexAttribDivisor(C,U),F[C]=U)}function b(){const C=r.newAttributes,U=r.enabledAttributes;for(let N=0,L=U.length;N<L;N++)U[N]!==C[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function T(C,U,N,L,F,$,G){G===!0?i.vertexAttribIPointer(C,U,N,F,$):i.vertexAttribPointer(C,U,N,L,F,$)}function x(C,U,N,L){_();const F=L.attributes,$=N.getAttributes(),G=U.defaultAttributeValues;for(const ee in $){const X=$[ee];if(X.location>=0){let j=F[ee];if(j===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const re=j.normalized,Te=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const Ye=Ae.buffer,He=Ae.type,$e=Ae.bytesPerElement,K=He===i.INT||He===i.UNSIGNED_INT||j.gpuType===Kd;if(j.isInterleavedBufferAttribute){const ne=j.data,Se=ne.stride,Ue=j.offset;if(ne.isInstancedInterleavedBuffer){for(let Me=0;Me<X.locationSize;Me++)g(X.location+Me,ne.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Me=0;Me<X.locationSize;Me++)T(X.location+Me,Te/X.locationSize,He,re,Se*$e,(Ue+Te/X.locationSize*Me)*$e,K)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne,j.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<X.locationSize;ne++)p(X.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ne=0;ne<X.locationSize;ne++)T(X.location+ne,Te/X.locationSize,He,re,Te*$e,Te/X.locationSize*ne*$e,K)}}else if(G!==void 0){const re=G[ee];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}b()}function S(){E();for(const C in n){const U=n[C];for(const N in U){const L=U[N];for(const F in L){const $=L[F];for(const G in $)d($[G].object),delete $[G];delete L[F]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const U=n[C.id];for(const N in U){const L=U[N];for(const F in L){const $=L[F];for(const G in $)d($[G].object),delete $[G];delete L[F]}}delete n[C.id]}function A(C){for(const U in n){const N=n[U];for(const L in N){const F=N[L];if(F[C.id]===void 0)continue;const $=F[C.id];for(const G in $)d($[G].object),delete $[G];delete F[C.id]}}}function v(C){for(const U in n){const N=n[U],L=C.isInstancedMesh===!0?C.id:0,F=N[L];if(F!==void 0){for(const $ in F){const G=F[$];for(const ee in G)d(G[ee].object),delete G[ee];delete F[$]}delete N[L],Object.keys(N).length===0&&delete n[U]}}}function E(){k(),s=!0,r!==a&&(r=a,l(r.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:k,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Tx(i,e,t){let n;function a(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let f=0;for(let h=0;h<d;h++)f+=l[h];t.update(f,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Ax(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&A!==bi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Be("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,maxSamples:S,samples:w}}function kx(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new ra,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||a;return a=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!a||m===null||m.length===0||r&&!p)r?d(null):l();else{const b=r?0:n,T=b*4;let x=g.clippingState||null;c.value=x,x=d(m,f,T,h);for(let S=0;S!==T;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=h+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,x=h;T!==_;++T,x+=4)s.copy(u[T]).applyMatrix4(b,o),s.normal.toArray(p,x),p[x+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Mr=4,Rx=6,Cx=20,Lx=256,es=new ou,Sf=new ot;let Jl=null,Ql=0,jl=0,ec=!1;const Px=new W,Ra=new W;class Mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=Px}=r;Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Ql,jl),this._renderer.xr.enabled=ec,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xa||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ti,format:ii,colorSpace:Bo,depthBuffer:!1},a=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Ux(r,e,t),this._ggxMaterial=Ix(r,e,t)}return a}_compileMaterial(e){const t=new Fn(new Yi,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,n,a,r){const c=new $n(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Sf),u.toneMapping=Mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new ja,new qp({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(Sf),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));const S=this._cubeSize;gr(a,x*S,T>2?S:0,S,S),u.setRenderTarget(a),g&&u.render(_,c),u.render(e,c)}u.toneMapping=h,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Xa||e.mapping===Vr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;gr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),f=l*1.25,h=u*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Mr?n-m+Mr:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=m-t,gr(r,p,g,3*_,2*_),a.setRenderTarget(r),a.render(o,es),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,gr(e,p,g,3*_,2*_),a.setRenderTarget(e),a.render(o,es)}_blur(e,t,n,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,a,r){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],u=3*d*(a>this._lodMax-Mr?a-this._lodMax+Mr:0),f=4*(this._cubeSize-d);gr(t,u,f,3*d,2*d),s.setRenderTarget(t),s.render(c,es)}}function Dx(i){const e=[],t=[];let n=i;const a=i-Mr+1+Rx;for(let r=0;r<a;r++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,h=3,m=new Float32Array(h*f*u),_=new Float32Array(h*f*u);for(let g=0;g<u;g++){const b=g%3*2/3-1,T=g>2?0:-1,x=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(x,h*f*g);for(let S=0;S<f;S++){const w=d[S*2]*2-1,A=d[S*2+1]*2-1;g===0?Ra.set(1,A,w):g===1?Ra.set(-w,1,-A):g===2?Ra.set(-w,A,1):g===3?Ra.set(-1,A,-w):g===4?Ra.set(-w,-1,A):Ra.set(w,A,-1),Ra.toArray(_,(g*f+S)*h)}}const p=new Yi;p.setAttribute("position",new Gi(m,h)),p.setAttribute("outputDirection",new Gi(_,h)),t.push(new Fn(p,null)),n>Mr&&n--}return{lodMeshes:t,sizeLods:e}}function Ef(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Ix(i,e,t){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ux(i,e,t){return new Ai({name:"SphericalGaussianBlur",defines:{SAMPLES:Cx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function wf(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Tf(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nm extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Xp(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ja(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Bi});r.uniforms.tEquirect.value=t;const s=new Fn(a,r),o=t.minFilter;return t.minFilter===za&&(t.minFilter=tn),new F0(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function Nx(i){let e=new WeakMap,t=new WeakMap,n=null;function a(f,h=!1){return f==null?null:h?s(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ml||h===El)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new nm(m.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Ml||h===El,_=h===Xa||h===Vr;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Mf(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Mf(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function o(f,h){return h===Ml?f.mapping=Xa:h===El&&(f.mapping=Vr),f}function c(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(f){const h=f.target;h.removeEventListener("dispose",d);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function Fx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Cr("WebGLRenderer: "+n+" extension not supported."),a}}}function zx(i,e,t,n){const a={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete a[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(u){const f=[],h=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let T=0,x=b.length;T<x;T+=3){const S=b[T+0],w=b[T+1],A=b[T+2];f.push(S,w,w,A,A,S)}}else{const b=m.array;_=m.version;for(let T=0,x=b.length/3-1;T<x;T+=3){const S=T+0,w=T+1,A=T+2;f.push(S,w,w,A,A,S)}}const p=new(m.count>=65535?$p:Vp)(f,1);p.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Ox(i,e,t){let n;function a(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*s),t.update(f,n,1)}function l(u,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,u*s,h),t.update(f,n,h))}function d(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,h);let _=0;for(let p=0;p<h;p++)_+=f[p];t.update(_,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Bx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Hx(i,e,t){const n=new WeakMap,a=new kt;function r(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*S*4*u),A=new Hp(w,x,S,u);A.type=bi,A.needsUpdate=!0;const v=T*4;for(let k=0;k<u;k++){const C=p[k],U=g[k],N=b[k],L=x*S*4*k;for(let F=0;F<C.count;F++){const $=F*v;h===!0&&(a.fromBufferAttribute(C,F),w[L+$+0]=a.x,w[L+$+1]=a.y,w[L+$+2]=a.z,w[L+$+3]=0),m===!0&&(a.fromBufferAttribute(U,F),w[L+$+4]=a.x,w[L+$+5]=a.y,w[L+$+6]=a.z,w[L+$+7]=0),_===!0&&(a.fromBufferAttribute(N,F),w[L+$+8]=a.x,w[L+$+9]=a.y,w[L+$+10]=a.z,w[L+$+11]=N.itemSize===4?a.w:1)}}f={count:u,texture:A,size:new nt(x,S)},n.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const m=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gx(i,e,t,n,a){let r=new WeakMap;function s(l){const d=a.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Vx={[wp]:"LINEAR_TONE_MAPPING",[Tp]:"REINHARD_TONE_MAPPING",[Ap]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[Cp]:"AGX_TONE_MAPPING",[Lp]:"NEUTRAL_TONE_MAPPING",[Rp]:"CUSTOM_TONE_MAPPING"};function $x(i,e,t,n,a,r){const s=new ri(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Yi;l.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const d=new k0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Fn(l,d),f=new ou(-1,1,1,-1,0,1);let h=null,m=null,_=!1,p,g=null,b=[],T=!1;this.setSize=function(x,S){s.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let w=0;w<b.length;w++){const A=b[w];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){b=x,T=b.length>0&&b[0].isRenderPass===!0;const S=s.width,w=s.height;b.length>0&&o===null&&(o=new ri(S,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new ri(S,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){const v=b[A];v.setSize&&v.setSize(S,w)}},this.begin=function(x,S){if(_||x.toneMapping===Mi&&b.length===0)return!1;if(g=S,S!==null){const w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return T===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=Mi,!0},this.hasRenderPass=function(){return T},this.end=function(x,S){x.toneMapping=p,_=!0;let w=s,A=o;for(let v=0;v<b.length;v++){const E=b[v];E.enabled!==!1&&(E.render(x,A,w,S),E.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(h!==x.outputColorSpace||m!==x.toneMapping){h=x.outputColorSpace,m=x.toneMapping,d.defines={},je.getTransfer(h)===ut&&(d.defines.SRGB_TRANSFER="");const v=Vx[m];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(g),x.render(u,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const im=new Vt,vd=new Cs(1,1),am=new Hp,rm=new r0,sm=new Xp,Af=[],kf=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Lf=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=Af[a];if(r===void 0&&(r=new Float32Array(a),Af[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=kf[e];t===void 0&&(t=new Int32Array(e),kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;Lf.set(n),i.uniformMatrix2fv(this.addr,!1,Lf),Ot(t,n)}}function Zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),Ot(t,n)}}function Jx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),Ot(t,n)}}function Qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function nb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ib(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function sb(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=t.isReversedDepthBuffer()?nu:tu,r=vd):r=im,t.setTexture2D(e||r,a)}function ob(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||rm,a)}function lb(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||sm,a)}function cb(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||am,a)}function db(i){switch(i){case 5126:return Wx;case 35664:return qx;case 35665:return Xx;case 35666:return Yx;case 35674:return Kx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return ab;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function ub(i,e){i.uniform1fv(this.addr,e)}function fb(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function hb(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function pb(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function mb(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gb(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _b(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vb(i,e){i.uniform1iv(this.addr,e)}function yb(i,e){i.uniform2iv(this.addr,e)}function xb(i,e){i.uniform3iv(this.addr,e)}function bb(i,e){i.uniform4iv(this.addr,e)}function Sb(i,e){i.uniform1uiv(this.addr,e)}function Mb(i,e){i.uniform2uiv(this.addr,e)}function Eb(i,e){i.uniform3uiv(this.addr,e)}function wb(i,e){i.uniform4uiv(this.addr,e)}function Tb(i,e,t){const n=this.cache,a=e.length,r=nl(t,a);zt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=vd:s=im;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function Ab(i,e,t){const n=this.cache,a=e.length,r=nl(t,a);zt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||rm,r[s])}function kb(i,e,t){const n=this.cache,a=e.length,r=nl(t,a);zt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||sm,r[s])}function Rb(i,e,t){const n=this.cache,a=e.length,r=nl(t,a);zt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||am,r[s])}function Cb(i){switch(i){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return bb;case 5125:return Sb;case 36294:return Mb;case 36295:return Eb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Rb}}class Lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=db(t.type)}}class Pb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cb(t.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function Ib(i,e,t){const n=i.name,a=n.length;for(tc.lastIndex=0;;){const r=tc.exec(n),s=tc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){Pf(t,l===void 0?new Lb(o,i,e):new Pb(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Db(o),Pf(t,u)),t=u}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Ib(o,c,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function Df(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ub=37297;let Nb=0;function Fb(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const If=new Ge;function zb(i){je._getMatrix(If,je.workingColorSpace,i);const e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ho:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fb(i.getShaderSource(e),o)}else return r}function Ob(i,e){const t=zb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bb={[wp]:"Linear",[Tp]:"Reinhard",[Ap]:"Cineon",[kp]:"ACESFilmic",[Cp]:"AgX",[Lp]:"Neutral",[Rp]:"Custom"};function Hb(i,e){const t=Bb[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new W;function Gb(){je.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function $b(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function os(i){return i!==""}function Nf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(i){return i.replace(qb,Yb)}const Xb=new Map;function Yb(i,e){let t=Xe[e];if(t===void 0){const n=Xb.get(e);if(n!==void 0)t=Xe[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yd(t)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(Kb,Zb)}function Zb(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Jb={[bo]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function Qb(i){return Jb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jb={[Xa]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function eS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tS={[Vr]:"ENVMAP_MODE_REFRACTION"};function nS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iS={[Yd]:"ENVMAP_BLENDING_MULTIPLY",[I_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function aS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iS[i.combine]||"ENVMAP_BLENDING_NONE"}function rS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sS(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Qb(t),l=eS(t),d=nS(t),u=aS(t),f=rS(t),h=Vb(t),m=$b(r),_=a.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(os).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(os).join(`
`),g.length>0&&(g+=`
`)):(p=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),g=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),s=yd(s),s=Nf(s,t),s=Ff(s,t),o=yd(o),o=Nf(o,t),o=Ff(o,t),s=zf(s),o=zf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+p+s,x=b+g+o,S=Df(a,a.VERTEX_SHADER,T),w=Df(a,a.FRAGMENT_SHADER,x);a.attachShader(_,S),a.attachShader(_,w),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const U=a.getProgramInfoLog(_)||"",N=a.getShaderInfoLog(S)||"",L=a.getShaderInfoLog(w)||"",F=U.trim(),$=N.trim(),G=L.trim();let ee=!0,X=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,S,w);else{const j=Uf(a,S,"vertex"),re=Uf(a,w,"fragment");st("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+j+`
`+re)}else F!==""?Be("WebGLProgram: Program Info Log:",F):($===""||G==="")&&(X=!1);X&&(C.diagnostics={runnable:ee,programLog:F,vertexShader:{log:$,prefix:p},fragmentShader:{log:G,prefix:g}})}a.deleteShader(S),a.deleteShader(w),v=new Ao(a,_),E=Wb(a,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(_,Ub)),k},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let oS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cS(e),t.set(e,n)),n}}class cS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function dS(i){return i===Ya||i===zo||i===Oo}function uS(i,e,t,n,a,r){const s=new au,o=new lS,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,E,k,C,U,N){const L=C.fog,F=U.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||$,G),X=ee&&ee.mapping===el?ee.image.height:null,j=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Te=re!==void 0?re.length:0;let Ae=0;F.morphAttributes.position!==void 0&&(Ae=1),F.morphAttributes.normal!==void 0&&(Ae=2),F.morphAttributes.color!==void 0&&(Ae=3);let Ye,He,$e,K;if(j){const _t=mi[j];Ye=_t.vertexShader,He=_t.fragmentShader}else{Ye=v.vertexShader,He=v.fragmentShader;const _t=o.getVertexShaderStage(v),lt=o.getFragmentShaderStage(v);o.update(v,_t,lt),$e=_t.id,K=lt.id}const ne=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,We=!!v.map,Rt=!!v.matcap,O=!!ee,ae=!!v.aoMap,xe=!!v.lightMap,Oe=!!v.bumpMap&&v.wireframe===!1,Je=!!v.normalMap,Et=!!v.displacementMap,qt=!!v.emissiveMap,ft=!!v.metalnessMap,Ct=!!v.roughnessMap,D=v.anisotropy>0,Zt=v.clearcoat>0,dt=v.dispersion>0,R=v.retroreflectivity>0,y=v.iridescence>0,z=v.sheen>0,V=v.transmission>0,Z=D&&!!v.anisotropyMap,de=Zt&&!!v.clearcoatMap,ue=Zt&&!!v.clearcoatNormalMap,J=Zt&&!!v.clearcoatRoughnessMap,te=y&&!!v.iridescenceMap,fe=y&&!!v.iridescenceThicknessMap,Pe=z&&!!v.sheenColorMap,ge=z&&!!v.sheenRoughnessMap,he=!!v.specularMap,De=!!v.specularColorMap,ze=!!v.specularIntensityMap,Ve=V&&!!v.transmissionMap,I=V&&!!v.thicknessMap,pe=!!v.gradientMap,Q=!!v.alphaMap,me=v.alphaTest>0,be=!!v.alphaHash,se=!!v.extensions;let Ie=Mi;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Ce={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:He,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:Rt,envMap:O,envMapMode:O&&ee.mapping,envMapCubeUVHeight:X,aoMap:ae,lightMap:xe,bumpMap:Oe,normalMap:Je,displacementMap:Et,emissiveMap:qt,normalMapObjectSpace:Je&&v.normalMapType===z_,normalMapTangentSpace:Je&&v.normalMapType===md,packedNormalMap:Je&&v.normalMapType===md&&dS(v.normalMap.format),metalnessMap:ft,roughnessMap:Ct,anisotropy:D,anisotropyMap:Z,clearcoat:Zt,clearcoatMap:de,clearcoatNormalMap:ue,clearcoatRoughnessMap:J,dispersion:dt,retroreflection:R,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:he,specularColorMap:De,specularIntensityMap:ze,transmission:V,transmissionMap:Ve,thicknessMap:I,gradientMap:pe,opaque:v.transparent===!1&&v.blending===fs&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:be,combine:v.combine,mapUv:We&&m(v.map.channel),aoMapUv:ae&&m(v.aoMap.channel),lightMapUv:xe&&m(v.lightMap.channel),bumpMapUv:Oe&&m(v.bumpMap.channel),normalMapUv:Je&&m(v.normalMap.channel),displacementMapUv:Et&&m(v.displacementMap.channel),emissiveMapUv:qt&&m(v.emissiveMap.channel),metalnessMapUv:ft&&m(v.metalnessMap.channel),roughnessMapUv:Ct&&m(v.roughnessMap.channel),anisotropyMapUv:Z&&m(v.anisotropyMap.channel),clearcoatMapUv:de&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:De&&m(v.specularColorMap.channel),specularIntensityMapUv:ze&&m(v.specularIntensityMap.channel),transmissionMapUv:Ve&&m(v.transmissionMap.channel),thicknessMapUv:I&&m(v.thicknessMap.channel),alphaMapUv:Q&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Je||D),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(We||Q),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&Je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jn,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)E.push(k),E.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(g(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function T(v){const E=h[v.type];let k;if(E){const C=mi[E];k=w0.clone(C.uniforms)}else k=v.uniforms;return k}function x(v,E){let k=d.get(E);return k!==void 0?++k.usedTimes:(k=new sS(i,E,v,a),l.push(k),d.set(E,k)),k}function S(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function fS(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function hS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hf(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,_,p,g){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:m,materialVariant:s(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=m,b.materialVariant=s(f),b.groupOrder=_,b.renderOrder=f.renderOrder,b.z=p,b.group=g),e++,b}function c(f,h,m,_,p,g,b){b.reversedDepth===!0&&(p=-p);const T=o(f,h,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?a.push(T):t.push(T)}function l(f,h,m,_,p,g){const b=o(f,h,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?a.unshift(b):t.unshift(b)}function d(f,h){t.length>1&&t.sort(f||hS),n.length>1&&n.sort(h||Bf),a.length>1&&a.sort(h||Bf)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:c,unshift:l,finish:u,sort:d}}function pS(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Hf,i.set(n,[s])):a>=r.length?(s=new Hf,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function mS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new ot};break;case"SpotLight":t={position:new W,direction:new W,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function gS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _S=0;function vS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yS(i){const e=new mS,t=gS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const a=new W,r=new Mt,s=new Mt;function o(l){let d=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let h=0,m=0,_=0,p=0,g=0,b=0,T=0,x=0,S=0,w=0,A=0,v=0,E=0,k=0;l.sort(vS);for(let U=0,N=l.length;U<N;U++){const L=l[U],F=L.color,$=L.intensity,G=L.distance;let ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ya?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*$,u+=F.g*$,f+=F.b*$;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],$);k++}else if(L.isSunLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,re=t.get(L);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=re,n.sunShadowMap[m]=ee;const Te=j.getViewportCount();for(let Ae=0;Ae<Te;Ae++)n.sunShadowMatrix[_+Ae]=j.getMatrix(Ae),n.sunShadowCascade[_+Ae]=j._cascadeData[Ae];_+=Te,m++}n.sun[h]=X,h++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,re=t.get(L);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar($),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[b]=X;const j=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[b]=j.matrix,L.castShadow){const re=t.get(L);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,n.spotShadow[b]=re,n.spotShadowMap[b]=ee,A++}b++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(F).multiplyScalar($),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=X,T++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const j=L.shadow,re=t.get(L);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar($),X.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[x]=X,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==h||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==T||C.hemiLength!==x||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==A||C.numSpotMaps!==v||C.numLightProbes!==k)&&(n.sun.length=h,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=k,C.sunLength=h,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=T,C.hemiLength=x,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=A,C.numSpotMaps=v,C.numLightProbes=k,n.version=_S++)}function c(l,d){let u=0,f=0,h=0,m=0,_=0,p=0;const g=d.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const x=l[b];if(x.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),u++}else if(x.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),f++}else if(x.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),s.identity(),r.copy(x.matrixWorld),r.premultiply(g),s.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Gf(i){const e=new yS(i),t=[],n=[],a=[];function r(f){u.camera=f,t.length=0,n.length=0,a.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function c(f){a.push(f)}function l(){e.setup(t)}function d(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function xS(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Gf(i),e.set(a,[o])):r>=s.length?(o=new Gf(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
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
}`,MS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ES=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Vf=new Mt,ts=new W,nc=new W;function wS(i,e,t){let n=new su;const a=new nt,r=new nt,s=new kt,o=new R0,c=new C0,l={},d=t.maxTextureSize,u={[qa]:xn,[xn]:qa,[jn]:jn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:bS,fragmentShader:SS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Yi;m.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let g=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===m_&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);const E=i.getRenderTarget(),k=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Bi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=g!==this.type;N&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=w.length;L<F;L++){const $=w[L],G=$.shadow;if(G===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const ee=G.getFrameExtents();a.multiply(ee),r.copy(G.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/ee.x),a.x=r.x*ee.x,G.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/ee.y),a.y=r.y*ee.y,G.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ss){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ri(a.x,a.y,{format:Ya,type:Ti,minFilter:tn,magFilter:tn,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new Cs(a.x,a.y,bi),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=Xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft}else $.isPointLight?(G.map=new nm(a.x),G.map.depthTexture=new M0(a.x,wi)):(G.map=new ri(a.x,a.y),G.map.depthTexture=new Cs(a.x,a.y,wi)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=Xi,this.type===bo?(G.map.depthTexture.compareFunction=X?nu:tu,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);const j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,v);for(let re=0;re<j;re++){const Te=G.getCamera(re);if($.isPointLight){const Ae=G.camera,Ye=G.matrix,He=$.distance||Ae.far;He!==Ae.far&&(Ae.far=He,Ae.updateProjectionMatrix()),ts.setFromMatrixPosition($.matrixWorld),Ae.position.copy(ts),nc.copy(Ae.position),nc.add(MS[re]),Ae.up.copy(ES[re]),Ae.lookAt(nc),Ae.updateMatrixWorld(),Ye.makeTranslation(-ts.x,-ts.y,-ts.z),Vf.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Vf,Ae.coordinateSystem,Ae.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,re),i.clear();else{re===0&&(i.setRenderTarget(G.map),i.clear());const Ae=G.getViewport(re);s.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),U.viewport(s)}n=G.getFrustum(re),x(A,v,Te,$,this.type)}G.isPointLightShadow!==!0&&this.type===ss&&b(G,v),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(E,k,C)};function b(w,A){const v=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(a.x,a.y,{format:Ya,type:Ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,v,h,_,null)}function T(w,A,v,E){let k=null;const C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)k=C;else if(k=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=k.uuid,N=A.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let F=L[N];F===void 0&&(F=k.clone(),L[N]=F,A.addEventListener("dispose",S)),k=F}if(k.visible=A.visible,k.wireframe=A.wireframe,E===ss?k.side=A.shadowSide!==null?A.shadowSide:A.side:k.side=A.shadowSide!==null?A.shadowSide:u[A.side],k.alphaMap=A.alphaMap,k.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,k.map=A.map,k.clipShadows=A.clipShadows,k.clippingPlanes=A.clippingPlanes,k.clipIntersection=A.clipIntersection,k.displacementMap=A.displacementMap,k.displacementScale=A.displacementScale,k.displacementBias=A.displacementBias,k.wireframeLinewidth=A.wireframeLinewidth,k.linewidth=A.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const U=i.properties.get(k);U.light=v}return k}function x(w,A,v,E,k){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===ss)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const N=e.update(w),L=w.material;if(Array.isArray(L)){const F=N.groups;for(let $=0,G=F.length;$<G;$++){const ee=F[$],X=L[ee.materialIndex];if(X&&X.visible){const j=T(w,X,E,k);w.onBeforeShadow(i,w,A,v,N,j,ee),i.renderBufferDirect(v,null,N,j,w,ee),w.onAfterShadow(i,w,A,v,N,j,ee)}}}else if(L.visible){const F=T(w,L,E,k);w.onBeforeShadow(i,w,A,v,N,F,null),i.renderBufferDirect(v,null,N,F,w,null),w.onAfterShadow(i,w,A,v,N,F,null)}}const U=w.children;for(let N=0,L=U.length;N<L;N++)x(U[N],A,v,E,k)}function S(w){w.target.removeEventListener("dispose",S);for(const v in l){const E=l[v],k=w.target.uuid;k in E&&(E[k].dispose(),delete E[k])}}}function TS(i,e){function t(){let I=!1;const pe=new kt;let Q=null;const me=new kt(0,0,0,0);return{setMask:function(be){Q!==be&&!I&&(i.colorMask(be,be,be,be),Q=be)},setLocked:function(be){I=be},setClear:function(be,se,Ie,Ce,_t){_t===!0&&(be*=Ce,se*=Ce,Ie*=Ce),pe.set(be,se,Ie,Ce),me.equals(pe)===!1&&(i.clearColor(be,se,Ie,Ce),me.copy(pe))},reset:function(){I=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,Q=null,me=null,be=null;return{setReversed:function(se){if(pe!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const Ce=be;be=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(se){se?ne(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(se){Q!==se&&!I&&(i.depthMask(se),Q=se)},setFunc:function(se){if(pe&&(se=Z_[se]),me!==se){switch(se){case Cc:i.depthFunc(i.NEVER);break;case Lc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=se}},setLocked:function(se){I=se},setClear:function(se){be!==se&&(be=se,pe&&(se=1-se),i.clearDepth(se))},reset:function(){I=!1,Q=null,me=null,be=null,pe=!1}}}function a(){let I=!1,pe=null,Q=null,me=null,be=null,se=null,Ie=null,Ce=null,_t=null;return{setTest:function(lt){I||(lt?ne(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!I&&(i.stencilMask(lt),pe=lt)},setFunc:function(lt,Xn,ci){(Q!==lt||me!==Xn||be!==ci)&&(i.stencilFunc(lt,Xn,ci),Q=lt,me=Xn,be=ci)},setOp:function(lt,Xn,ci){(se!==lt||Ie!==Xn||Ce!==ci)&&(i.stencilOp(lt,Xn,ci),se=lt,Ie=Xn,Ce=ci)},setLocked:function(lt){I=lt},setClear:function(lt){_t!==lt&&(i.clearStencil(lt),_t=lt)},reset:function(){I=!1,pe=null,Q=null,me=null,be=null,se=null,Ie=null,Ce=null,_t=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},u={},f={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,S=null,w=null,A=null,v=new ot(0,0,0),E=0,k=!1,C=null,U=null,N=null,L=null,F=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ee>=2);let j=null,re={};const Te=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Ye=new kt().fromArray(Te),He=new kt().fromArray(Ae);function $e(I,pe,Q,me){const be=new Uint8Array(4),se=i.createTexture();i.bindTexture(I,se),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Q;Ie++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return se}const K={};K[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),s.setFunc(ws),Oe(!1),Je($u),ne(i.CULL_FACE),ae(Bi);function ne(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Se(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ue(I,pe){return f[I]!==pe?(i.bindFramebuffer(I,pe),f[I]=pe,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(I,pe){let Q=m,me=!1;if(I){Q=h.get(pe),Q===void 0&&(Q=[],h.set(pe,Q));const be=I.textures;if(Q.length!==be.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=be.length;se<Ie;se++)Q[se]=i.COLOR_ATTACHMENT0+se;Q.length=be.length,me=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,me=!0);me&&i.drawBuffers(Q)}function We(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Rt={[vr]:i.FUNC_ADD,[__]:i.FUNC_SUBTRACT,[v_]:i.FUNC_REVERSE_SUBTRACT};Rt[y_]=i.MIN,Rt[x_]=i.MAX;const O={[b_]:i.ZERO,[S_]:i.ONE,[M_]:i.SRC_COLOR,[Mp]:i.SRC_ALPHA,[R_]:i.SRC_ALPHA_SATURATE,[A_]:i.DST_COLOR,[w_]:i.DST_ALPHA,[E_]:i.ONE_MINUS_SRC_COLOR,[Ep]:i.ONE_MINUS_SRC_ALPHA,[k_]:i.ONE_MINUS_DST_COLOR,[T_]:i.ONE_MINUS_DST_ALPHA,[C_]:i.CONSTANT_COLOR,[L_]:i.ONE_MINUS_CONSTANT_COLOR,[P_]:i.CONSTANT_ALPHA,[D_]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(I,pe,Q,me,be,se,Ie,Ce,_t,lt){if(I===Bi){p===!0&&(Se(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),I!==g_){if(I!==g||lt!==k){if((b!==vr||S!==vr)&&(i.blendEquation(i.FUNC_ADD),b=vr,S=vr),lt)switch(I){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wu:i.blendFunc(i.ONE,i.ONE);break;case qu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",I);break}else switch(I){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qu:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xu:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",I);break}T=null,x=null,w=null,A=null,v.set(0,0,0),E=0,g=I,k=lt}return}be=be||pe,se=se||Q,Ie=Ie||me,(pe!==b||be!==S)&&(i.blendEquationSeparate(Rt[pe],Rt[be]),b=pe,S=be),(Q!==T||me!==x||se!==w||Ie!==A)&&(i.blendFuncSeparate(O[Q],O[me],O[se],O[Ie]),T=Q,x=me,w=se,A=Ie),(Ce.equals(v)===!1||_t!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,_t),v.copy(Ce),E=_t),g=I,k=!1}function xe(I,pe){I.side===jn?Se(i.CULL_FACE):ne(i.CULL_FACE);let Q=I.side===xn;pe&&(Q=!Q),Oe(Q),I.blending===fs&&I.transparent===!1?ae(Bi):ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){C!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),C=I)}function Je(I){I!==h_?(ne(i.CULL_FACE),I!==U&&(I===$u?i.cullFace(i.BACK):I===p_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=I}function Et(I){I!==N&&(G&&i.lineWidth(I),N=I)}function qt(I,pe,Q){I?(ne(i.POLYGON_OFFSET_FILL),(L!==pe||F!==Q)&&(L=pe,F=Q,s.getReversed()&&(pe=-pe),i.polygonOffset(pe,Q))):Se(i.POLYGON_OFFSET_FILL)}function ft(I){I?ne(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Ct(I){I===void 0&&(I=i.TEXTURE0+$-1),j!==I&&(i.activeTexture(I),j=I)}function D(I,pe,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+$-1:Q=j);let me=re[Q];me===void 0&&(me={type:void 0,texture:void 0},re[Q]=me),(me.type!==I||me.texture!==pe)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(I,pe||K[I]),me.type=I,me.texture=pe)}function Zt(){const I=re[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function y(){try{i.texSubImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function z(){try{i.texSubImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function de(){try{i.texStorage2D(...arguments)}catch(I){st("WebGLState:",I)}}function ue(){try{i.texStorage3D(...arguments)}catch(I){st("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function fe(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function Pe(I,pe){u[I]!==pe&&(i.pixelStorei(I,pe),u[I]=pe)}function ge(I){Ye.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function he(I){He.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function De(I,pe){let Q=l.get(pe);Q===void 0&&(Q=new WeakMap,l.set(pe,Q));let me=Q.get(I);me===void 0&&(me=i.getUniformBlockIndex(pe,I.name),Q.set(I,me))}function ze(I,pe){const me=l.get(pe).get(I);c.get(pe)!==me&&(i.uniformBlockBinding(pe,me,I.__bindingPointIndex),c.set(pe,me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,re={},f={},h=new WeakMap,m=[],_=null,p=!1,g=null,b=null,T=null,x=null,S=null,w=null,A=null,v=new ot(0,0,0),E=0,k=!1,C=null,U=null,N=null,L=null,F=null,Ye.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:Se,bindFramebuffer:Ue,drawBuffers:Me,useProgram:We,setBlending:ae,setMaterial:xe,setFlipSided:Oe,setCullFace:Je,setLineWidth:Et,setPolygonOffset:qt,setScissorTest:ft,activeTexture:Ct,bindTexture:D,unbindTexture:Zt,compressedTexImage2D:dt,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Pe,getParameter:fe,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:de,texStorage3D:ue,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:ge,viewport:he,reset:Ve}}function AS(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,d=new WeakMap,u=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return m?new OffscreenCanvas(R,y):Rs("canvas")}function p(R,y,z){let V=1;const Z=dt(R);if((Z.width>z||Z.height>z)&&(V=z/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const de=Math.floor(V*Z.width),ue=Math.floor(V*Z.height);f===void 0&&(f=_(de,ue));const J=y?_(de,ue):f;return J.width=de,J.height=ue,J.getContext("2d").drawImage(R,0,0,de,ue),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+de+"x"+ue+")."),J}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function g(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,y,z,V,Z,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),z===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),y===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),z===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),z===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){const te=de?Ho:je.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=te===ut?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),z===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,y){let z;return R?y===null||y===wi||y===As?z=i.DEPTH24_STENCIL8:y===bi?z=i.DEPTH32F_STENCIL8:y===Ts&&(z=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wi||y===As?z=i.DEPTH_COMPONENT24:y===bi?z=i.DEPTH_COMPONENT32F:y===Ts&&(z=i.DEPTH_COMPONENT16),z}function w(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function v(R){const y=R.target;y.removeEventListener("dispose",v),C(y)}function E(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,V=h.get(z);if(V){const Z=V[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&k(R),Object.keys(V).length===0&&h.delete(z)}n.remove(R)}function k(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const z=R.source,V=h.get(z);delete V[y.__cacheKey],s.memory.textures--}function C(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let Z=0;Z<y.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let V=0,Z=z.length;V<Z;V++){const de=n.get(z[V]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),s.memory.textures--),n.remove(z[V])}n.remove(R)}let U=0;function N(){U=0}function L(){return U}function F(R){U=R}function $(){const R=U;return R>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),U+=1,R}function G(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function ee(R,y){const z=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const V=R.image;if(V===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function X(R,y){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Se(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function j(R,y){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Se(z,R,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function re(R,y){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ue(z,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const Te={[Fc]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[zc]:i.MIRRORED_REPEAT},Ae={[Ft]:i.NEAREST,[N_]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[wl]:i.LINEAR_MIPMAP_NEAREST,[za]:i.LINEAR_MIPMAP_LINEAR},Ye={[B_]:i.NEVER,[W_]:i.ALWAYS,[H_]:i.LESS,[tu]:i.LEQUAL,[G_]:i.EQUAL,[nu]:i.GEQUAL,[V_]:i.GREATER,[$_]:i.NOTEQUAL};function He(R,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===wl||y.magFilter===$s||y.magFilter===za||y.minFilter===tn||y.minFilter===wl||y.minFilter===$s||y.minFilter===za)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Te[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Te[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Te[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ft||y.minFilter!==$s&&y.minFilter!==za||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const V=y.source;let Z=h.get(V);Z===void 0&&(Z={},h.set(V,Z));const de=G(y);if(de!==R.__cacheKey){Z[de]===void 0&&(Z[de]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Z[de].usedTimes++;const ue=Z[R.__cacheKey];ue!==void 0&&(Z[R.__cacheKey].usedTimes--,ue.usedTimes===0&&k(y)),R.__cacheKey=de,R.__webglTexture=Z[de].texture}return z}function K(R,y,z){return Math.floor(Math.floor(R/z)/y)}function ne(R,y,z,V){const de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,V,y.data);else{de.sort((Pe,ge)=>Pe.start-ge.start);let ue=0;for(let Pe=1;Pe<de.length;Pe++){const ge=de[ue],he=de[Pe],De=ge.start+ge.count,ze=K(he.start,y.width,4),Ve=K(ge.start,y.width,4);he.start<=De+1&&ze===Ve&&K(he.start+he.count-1,y.width,4)===ze?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++ue,de[ue]=he)}de.length=ue+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pe=0,ge=de.length;Pe<ge;Pe++){const he=de[Pe],De=Math.floor(he.start/4),ze=Math.ceil(he.count/4),Ve=De%y.width,I=Math.floor(De/y.width),pe=ze,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,pe,Q,z,V,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Se(R,y,z){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);const Z=$e(R,y),de=y.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+z);const ue=n.get(de);if(de.version!==ue.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Q=je.getPrimaries(je.workingColorSpace),me=y.colorSpace===oa?null:je.getPrimaries(y.colorSpace),be=y.colorSpace===oa||Q===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let te=p(y.image,!1,a.maxTextureSize);te=Zt(y,te);const fe=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type);let ge=x(y.internalFormat,fe,Pe,y.normalized,y.colorSpace,y.isVideoTexture);He(V,y);let he;const De=y.mipmaps,ze=y.isVideoTexture!==!0,Ve=ue.__version===void 0||Z===!0,I=de.dataReady,pe=w(y,te);if(y.isDepthTexture)ge=S(y.format===Oa,y.type),Ve&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,fe,Pe,null));else if(y.isDataTexture)if(De.length>0){ze&&Ve&&t.texStorage2D(i.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let Q=0,me=De.length;Q<me;Q++)he=De[Q],ze?I&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,fe,Pe,he.data):t.texImage2D(i.TEXTURE_2D,Q,ge,he.width,he.height,0,fe,Pe,he.data);y.generateMipmaps=!1}else ze?(Ve&&t.texStorage2D(i.TEXTURE_2D,pe,ge,te.width,te.height),I&&ne(y,te,fe,Pe)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,fe,Pe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,De[0].width,De[0].height,te.depth);for(let Q=0,me=De.length;Q<me;Q++)if(he=De[Q],y.format!==ii)if(fe!==null)if(ze){if(I)if(y.layerUpdates.size>0){const be=bf(he.width,he.height,y.format,y.type);for(const se of y.layerUpdates){const Ie=he.data.subarray(se*be/he.data.BYTES_PER_ELEMENT,(se+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,se,he.width,he.height,1,fe,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ge,he.width,he.height,te.depth,0,he.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,fe,Pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ge,he.width,he.height,te.depth,0,fe,Pe,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ze&&Ve&&t.texStorage2D(i.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let Q=0,me=De.length;Q<me;Q++)he=De[Q],y.format!==ii?fe!==null?ze?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ge,he.width,he.height,0,he.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,fe,Pe,he.data):t.texImage2D(i.TEXTURE_2D,Q,ge,he.width,he.height,0,fe,Pe,he.data)}else if(y.isDataArrayTexture)if(ze){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,te.width,te.height,te.depth),I)if(y.layerUpdates.size>0){const Q=bf(te.width,te.height,y.format,y.type);for(const me of y.layerUpdates){const be=te.data.subarray(me*Q/te.data.BYTES_PER_ELEMENT,(me+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,te.width,te.height,1,fe,Pe,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(y.isData3DTexture)ze?(Ve&&t.texStorage3D(i.TEXTURE_3D,pe,ge,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(y.isFramebufferTexture){if(Ve)if(ze)t.texStorage2D(i.TEXTURE_2D,pe,ge,te.width,te.height);else{let Q=te.width,me=te.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,ge,Q,me,0,fe,Pe,null),Q>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),u.add(y),Q.onpaint=me=>{const be=me.changedElements;for(const se of u)be.includes(se.image)&&(se.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const be=i.RGBA,se=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,se,Ie,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(ze&&Ve){const Q=dt(De[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,Q.width,Q.height)}for(let Q=0,me=De.length;Q<me;Q++)he=De[Q],ze?I&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,fe,Pe,he):t.texImage2D(i.TEXTURE_2D,Q,ge,fe,Pe,he);y.generateMipmaps=!1}else if(ze){if(Ve){const Q=dt(te);t.texStorage2D(i.TEXTURE_2D,pe,ge,Q.width,Q.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,Pe,te);g(y)&&b(V),ue.__version=de.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ue(R,y,z){if(y.image.length!==6)return;const V=$e(R,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const de=n.get(Z);if(Z.version!==de.__version||V===!0){t.activeTexture(i.TEXTURE0+z);const ue=je.getPrimaries(je.workingColorSpace),J=y.colorSpace===oa?null:je.getPrimaries(y.colorSpace),te=y.colorSpace===oa||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!fe&&!Pe?ge[se]=p(y.image[se],!0,a.maxCubemapSize):ge[se]=Pe?y.image[se].image:y.image[se],ge[se]=Zt(y,ge[se]);const he=ge[0],De=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Ve=x(y.internalFormat,De,ze,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,pe=de.__version===void 0||V===!0,Q=Z.dataReady;let me=w(y,he);He(i.TEXTURE_CUBE_MAP,y);let be;if(fe){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,he.width,he.height);for(let se=0;se<6;se++){be=ge[se].mipmaps;for(let Ie=0;Ie<be.length;Ie++){const Ce=be[Ie];y.format!==ii?De!==null?I?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Ce.width,Ce.height,0,Ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Ce.width,Ce.height,De,ze,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Ce.width,Ce.height,0,De,ze,Ce.data)}}}else{if(be=y.mipmaps,I&&pe){be.length>0&&me++;const se=dt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Pe){I?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,ze,ge[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,ge[se].width,ge[se].height,0,De,ze,ge[se].data);for(let Ie=0;Ie<be.length;Ie++){const _t=be[Ie].image[se].image;I?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,_t.width,_t.height,De,ze,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,_t.width,_t.height,0,De,ze,_t.data)}}else{I?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,ze,ge[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,ze,ge[se]);for(let Ie=0;Ie<be.length;Ie++){const Ce=be[Ie];I?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,De,ze,Ce.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,De,ze,Ce.image[se])}}}g(y)&&b(i.TEXTURE_CUBE_MAP),de.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Me(R,y,z,V,Z,de){const ue=r.convert(z.format,z.colorSpace),J=r.convert(z.type),te=x(z.internalFormat,ue,J,z.normalized,z.colorSpace),fe=n.get(y),Pe=n.get(z);if(Pe.__renderTarget=y,!fe.__hasExternalTextures){const ge=Math.max(1,y.width>>de),he=Math.max(1,y.height>>de);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,de,te,ge,he,y.depth,0,ue,J,null):t.texImage2D(Z,de,te,ge,he,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ct(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Pe.__webglTexture,0,ft(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Pe.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(R,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const V=y.depthTexture,Z=V&&V.isDepthTexture?V.type:null,de=S(y.stencilBuffer,Z),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(y),de,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(y),de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,R)}else{const V=y.textures;for(let Z=0;Z<V.length;Z++){const de=V[Z],ue=r.convert(de.format,de.colorSpace),J=r.convert(de.type),te=x(de.internalFormat,ue,J,de.normalized,de.colorSpace);Ct(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(y),te,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(y),te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,y,z){const V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),He(i.TEXTURE_CUBE_MAP,y.depthTexture);const fe=r.convert(y.depthTexture.format),Pe=r.convert(y.depthTexture.type);let ge;y.depthTexture.format===Xi?ge=i.DEPTH_COMPONENT24:y.depthTexture.format===Oa&&(ge=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,y.width,y.height,0,fe,Pe,null)}}else ee(y.depthTexture,0);const de=Z.__webglTexture,ue=ft(y),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,te=y.depthTexture.format===Oa?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)Ct(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,de,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,de,0);else if(y.depthTexture.format===Oa)Ct(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,de,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Rt(y.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Rt(y.__webglFramebuffer[0],R,0):Rt(y.__webglFramebuffer,R,0)}else if(z){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),We(y.__webglDepthbuffer[V],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),We(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,y,z){const V=n.get(R);y!==void 0&&Me(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&O(R)}function xe(R){const y=R.texture,z=n.get(R),V=n.get(y);R.addEventListener("dispose",v);const Z=R.textures,de=R.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,s.memory.textures++),de){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<y.mipmaps.length;te++)z.__webglFramebuffer[J][te]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,te=Z.length;J<te;J++){const fe=n.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&Ct(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const fe=r.convert(te.format,te.colorSpace),Pe=r.convert(te.type),ge=x(te.internalFormat,fe,Pe,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),he=ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),We(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),He(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)Me(z.__webglFramebuffer[J][te],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Me(z.__webglFramebuffer[J],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,te=Z.length;J<te;J++){const fe=Z[J],Pe=n.get(fe);let ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Pe.__webglTexture),He(ge,fe),Me(z.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+J,ge,0),g(fe)&&b(ge)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),He(J,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)Me(z.__webglFramebuffer[te],R,y,i.COLOR_ATTACHMENT0,J,te);else Me(z.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,J,0);g(y)&&b(J),t.unbindTexture()}R.depthBuffer&&O(R)}function Oe(R){const y=R.textures;for(let z=0,V=y.length;z<V;z++){const Z=y[z];if(g(Z)){const de=T(R),ue=n.get(Z).__webglTexture;t.bindTexture(de,ue),b(de),t.unbindTexture()}}}const Je=[],Et=[];function qt(R){if(R.samples>0){if(Ct(R)===!1){const y=R.textures,z=R.width,V=R.height;let Z=i.COLOR_BUFFER_BIT;const de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(R),J=y.length>1;if(J)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,z,V,0,0,z,V,Z,i.NEAREST),c===!0&&(Je.length=0,Et.length=0,Je.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Je.push(de),Et.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ft(R){return Math.min(a.maxSamples,R.samples)}function Ct(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(R){const y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function Zt(R,y){const z=R.colorSpace,V=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Bo&&z!==oa&&(je.getTransfer(z)===ut?(V!==ii||Z!==Ln)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",z)),y}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=ae,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kS(i,e){function t(n,a=oa){let r;const s=je.getTransfer(a);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Zd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dp)return i.BYTE;if(n===Ip)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Kd)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===Fp)return i.ALPHA;if(n===zp)return i.RGB;if(n===ii)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Oa)return i.DEPTH_STENCIL;if(n===Op)return i.RED;if(n===Qd)return i.RED_INTEGER;if(n===Ya)return i.RG;if(n===jd)return i.RG_INTEGER;if(n===eu)return i.RGBA_INTEGER;if(n===So||n===Mo||n===Eo||n===wo)if(s===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===$c||n===Wc||n===qc||n===Xc||n===zo||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vc||n===$c)return s===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zo)return r.COMPRESSED_RG11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kc||n===Zc||n===Jc||n===Qc||n===jc||n===ed||n===td||n===nd||n===id||n===ad||n===rd||n===sd||n===od||n===ld)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ed)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===td)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nd)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===id)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ad)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rd)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sd)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===od)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ld)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cd||n===dd||n===ud)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cd)return s===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ud)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fd||n===hd||n===Oo||n===pd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fd)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CS=`
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

}`;class LS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ai({vertexShader:RS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PS extends Qa{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new LS,g={},b=t.getContextAttributes();let T=null,x=null;const S=[],w=[],A=new nt;let v=null,E=null;const k=new $n;k.viewport=new kt;const C=new $n;C.viewport=new kt;const U=[k,C],N=new z0;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=S[K];return ne===void 0&&(ne=new Dl,S[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=S[K];return ne===void 0&&(ne=new Dl,S[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=S[K];return ne===void 0&&(ne=new Dl,S[K]=ne),ne.getHandSpace()};function $(K){const ne=w.indexOf(K.inputSource);if(ne===-1)return;const Se=S[ne];Se!==void 0&&(Se.update(K.inputSource,K.frame,l||s),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",ee);for(let K=0;K<S.length;K++){const ne=w[K];ne!==null&&(w[K]=null,S[K].disconnect(ne))}L=null,F=null,p.reset();for(const K in g)delete g[K];if(e.setRenderTarget(T),h=null,f=null,u=null,a=null,x=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){const K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",G),a.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ue=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=b.stencil?Oa:Xi,Ue=b.stencil?As:wi);const We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(We),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ri(f.textureWidth,f.textureHeight,{format:ii,type:Ln,depthTexture:new Cs(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new ri(h.framebufferWidth,h.framebufferHeight,{format:ii,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),$e.setContext(a),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(K){for(let ne=0;ne<K.removed.length;ne++){const Se=K.removed[ne],Ue=w.indexOf(Se);Ue>=0&&(w[Ue]=null,S[Ue].disconnect(Se))}for(let ne=0;ne<K.added.length;ne++){const Se=K.added[ne];let Ue=w.indexOf(Se);if(Ue===-1){for(let We=0;We<S.length;We++)if(We>=w.length){w.push(Se),Ue=We;break}else if(w[We]===null){w[We]=Se,Ue=We;break}if(Ue===-1)break}const Me=S[Ue];Me&&Me.connect(Se)}}const X=new W,j=new W;function re(K,ne,Se){X.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const Ue=X.distanceTo(j),Me=ne.projectionMatrix.elements,We=Se.projectionMatrix.elements,Rt=Me[14]/(Me[10]-1),O=Me[14]/(Me[10]+1),ae=(Me[9]+1)/Me[5],xe=(Me[9]-1)/Me[5],Oe=(Me[8]-1)/Me[0],Je=(We[8]+1)/We[0],Et=Rt*Oe,qt=Rt*Je,ft=Ue/(-Oe+Je),Ct=ft*-Oe;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const D=Rt+ft,Zt=O+ft,dt=Et-Ct,R=qt+(Ue-Ct),y=ae*O/Zt*D,z=xe*O/Zt*D;K.projectionMatrix.makePerspective(dt,R,y,z,D,Zt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Te(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ne=K.near,Se=K.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),N.near=C.near=k.near=ne,N.far=C.far=k.far=Se,(L!==N.near||F!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,F=N.far),N.layers.mask=K.layers.mask|6,k.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;const Ue=K.parent,Me=N.cameras;Te(N,Ue);for(let We=0;We<Me.length;We++)Te(Me[We],Ue);Me.length===2?re(N,k,C):N.projectionMatrix.copy(k.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Ae(K,N,Ue)};function Ae(K,ne,Se){Se===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(K){return g[K]};let Ye=null;function He(K,ne){if(d=ne.getViewerPose(l||s),m=ne,d!==null){const Se=d.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ue=!1;Se.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let O=0;O<Se.length;O++){const ae=Se[O];let xe=null;if(h!==null)xe=h.getViewport(ae);else{const Je=u.getViewSubImage(f,ae);xe=Je.viewport,O===0&&(e.setRenderTargetTextures(x,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(x))}let Oe=U[O];Oe===void 0&&(Oe=new $n,Oe.layers.enable(O),Oe.viewport=new kt,U[O]=Oe),Oe.matrix.fromArray(ae.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ae.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(xe.x,xe.y,xe.width,xe.height),O===0&&(N.matrix.copy(Oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Oe)}const Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const O=u.getDepthInformation(Se[0]);O&&O.isValid&&O.texture&&p.init(O,a.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<Se.length;O++){const ae=Se[O].camera;if(ae){let xe=g[ae];xe||(xe=new Yp,g[ae]=xe);const Oe=u.getCameraImage(ae);xe.sourceTexture=Oe}}}}for(let Se=0;Se<S.length;Se++){const Ue=w[Se],Me=S[Se];Ue!==null&&Me!==void 0&&Me.update(Ue,ne,l||s)}Ye&&Ye(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const $e=new em;$e.setAnimationLoop(He),this.setAnimationLoop=function(K){Ye=K},this.dispose=function(){}}}const DS=new Mt,om=new Ge;om.set(-1,0,0,0,1,0,0,0,1);function IS(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Kp(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,b,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===xn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===xn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,x=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(DS.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(om),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function US(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const w=S.program;n.uniformBlockBinding(x,w)}function l(x,S){let w=a[x.id];w===void 0&&(p(x),w=d(x),a[x.id]=w,x.addEventListener("dispose",b));const A=S.program;n.updateUBOMapping(x,A);const v=e.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function d(x){const S=u();x.__bindingPointIndex=S;const w=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function u(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const S=a[x.id],w=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,E=w.length;v<E;v++){const k=w[v];if(Array.isArray(k))for(let C=0,U=k.length;C<U;C++)h(k[C],v,C,A);else h(k,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,S,w,A){if(_(x,S,w,A)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let k=0;for(let C=0;C<E.length;C++){const U=E[C],N=g(U);m(U,x.__data,k),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(k+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function _(x,S,w,A){const v=x.value,E=S+"_"+w;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const k=A[E];if(typeof v=="number"||typeof v=="boolean"){if(k!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(k.equals(v)===!1)return k.copy(v),!0}}return!1}function p(x){const S=x.uniforms;let w=0;const A=16;for(let E=0,k=S.length;E<k;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let U=0,N=C.length;U<N;U++){const L=C[U],F=Array.isArray(L.value)?L.value:[L.value];for(let $=0,G=F.length;$<G;$++){const ee=F[$],X=g(ee),j=w%A,re=j%X.boundary,Te=j+re;w+=re,Te!==0&&A-Te<X.storage&&(w+=A-Te),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=X.storage}}}const v=w%A;return v>0&&(w+=A-v),x.__size=w,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){const S=x.target;S.removeEventListener("dispose",b);const w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function T(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:l,dispose:T}}const NS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function FS(){return fi===null&&(fi=new b0(NS,16,16,Ya,Ti),fi.name="DFG_LUT",fi.minFilter=tn,fi.magFilter=tn,fi.wrapS=zi,fi.wrapT=zi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class zS{constructor(e={}){const{canvas:t=Y_(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Ln}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=h,p=new Set([eu,jd,Qd]),g=new Set([Ln,wi,Ts,As,Zd,Jd]),b=new Uint32Array(4),T=new Int32Array(4),x=new W;let S=null,w=null;const A=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let C=!1,U=null,N=null,L=null,F=null;this._outputColorSpace=An;let $=0,G=0,ee=null,X=-1,j=null;const re=new kt,Te=new kt;let Ae=null;const Ye=new ot(0);let He=0,$e=t.width,K=t.height,ne=1,Se=null,Ue=null;const Me=new kt(0,0,$e,K),We=new kt(0,0,$e,K);let Rt=!1;const O=new su;let ae=!1,xe=!1;const Oe=new Mt,Je=new W,Et=new kt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ct(){return ee===null?ne:1}let D=n;function Zt(M,P){return t.getContext(M,P)}let dt,R,y,z,V,Z,de,ue,J,te,fe,Pe,ge,he,De,ze,Ve,I,pe,Q,me,be,se;try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xd}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),D===null){const P="webgl2";if(D=Zt(P,M),D===null)throw Zt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(M){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),st("WebGLRenderer: "+M.message),M}function Ie(){dt=new Fx(D),dt.init(),me=new kS(D,dt),R=new Ax(D,dt,e,me),y=new TS(D,dt),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),N=D.createFramebuffer(),L=D.createFramebuffer(),F=D.createFramebuffer(),z=new Bx(D),V=new fS,Z=new AS(D,dt,y,V,R,me,z),de=new Nx(k),ue=new G0(D),be=new wx(D,ue),J=new zx(D,ue,z,be),te=new Gx(D,J,ue,be,z),I=new Hx(D,R,Z),De=new kx(V),fe=new uS(k,de,dt,R,be,De),Pe=new IS(k,V),ge=new pS,he=new xS(dt),Ve=new Ex(k,de,y,te,m,c),ze=new wS(k,te,R),se=new US(D,z,R,y),pe=new Tx(D,dt,z),Q=new Ox(D,dt,z),z.programs=fe.programs,k.capabilities=R,k.extensions=dt,k.properties=V,k.renderLists=ge,k.shadowMap=ze,k.state=y,k.info=z}_!==Ln&&(E=new $x(_,t.width,t.height,o,a,r));const Ce=new PS(k,D);this.xr=Ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize($e,K,!1))},this.getSize=function(M){return M.set($e,K)},this.setSize=function(M,P,q=!0){if(Ce.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=M,K=P,t.width=Math.floor(M*ne),t.height=Math.floor(P*ne),q===!0&&(t.style.width=M+"px",t.style.height=P+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set($e*ne,K*ne).floor()},this.setDrawingBufferSize=function(M,P,q){$e=M,K=P,ne=q,t.width=Math.floor(M*q),t.height=Math.floor(P*q),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(_===Ln){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,P,q,B){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,P,q,B),y.viewport(re.copy(Me).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(We)},this.setScissor=function(M,P,q,B){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,P,q,B),y.scissor(Te.copy(We).multiplyScalar(ne).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(M){y.setScissorTest(Rt=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,q=!0){let B=0;if(M){let H=!1;if(ee!==null){const ye=ee.texture.format;H=p.has(ye)}if(H){const ye=ee.texture.type,we=g.has(ye),ve=Ve.getClearColor(),ke=Ve.getClearAlpha(),Le=ve.r,qe=ve.g,Ze=ve.b;we?(b[0]=Le,b[1]=qe,b[2]=Ze,b[3]=ke,D.clearBufferuiv(D.COLOR,0,b)):(T[0]=Le,T[1]=qe,T[2]=Ze,T[3]=ke,D.clearBufferiv(D.COLOR,0,T))}else B|=D.COLOR_BUFFER_BIT}P&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Ve.dispose(),ge.dispose(),he.dispose(),V.dispose(),de.dispose(),te.dispose(),be.dispose(),se.dispose(),fe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",mu),Ce.removeEventListener("sessionend",gu),Sa.stop()};function _t(M){M.preventDefault(),Zu("WebGLRenderer: Context Lost."),C=!0}function lt(){Zu("WebGLRenderer: Context Restored."),C=!1;const M=z.autoReset,P=ze.enabled,q=ze.autoUpdate,B=ze.needsUpdate,H=ze.type;Ie(),z.autoReset=M,ze.enabled=P,ze.autoUpdate=q,ze.needsUpdate=B,ze.type=H}function Xn(M){st("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ci(M){const P=M.target;P.removeEventListener("dispose",ci),Fm(P)}function Fm(M){zm(M),V.remove(M)}function zm(M){const P=V.get(M).programs;P!==void 0&&(P.forEach(function(q){fe.releaseProgram(q)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,q,B,H,ye){P===null&&(P=qt);const we=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=Hm(M,P,q,B,H);y.setMaterial(B,we);let ke=q.index,Le=1;if(B.wireframe===!0){if(ke=J.getWireframeAttribute(q),ke===void 0)return;Le=2}const qe=q.drawRange,Ze=q.attributes.position;let Re=qe.start*Le,ct=(qe.start+qe.count)*Le;ye!==null&&(Re=Math.max(Re,ye.start*Le),ct=Math.min(ct,(ye.start+ye.count)*Le)),ke!==null?(Re=Math.max(Re,0),ct=Math.min(ct,ke.count)):Ze!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,Ze.count));const It=ct-Re;if(It<0||It===1/0)return;be.setup(H,B,ve,q,ke);let xt,pt=pe;if(ke!==null&&(xt=ue.get(ke),pt=Q,pt.setIndex(xt)),H.isMesh)B.wireframe===!0?(y.setLineWidth(B.wireframeLinewidth*Ct()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(H.isLine){let Jt=B.linewidth;Jt===void 0&&(Jt=1),y.setLineWidth(Jt*Ct()),H.isLineSegments?pt.setMode(D.LINES):H.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else H.isPoints?pt.setMode(D.POINTS):H.isSprite&&pt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Jt=H._multiDrawStarts,Ee=H._multiDrawCounts,sn=H._multiDrawCount,rt=ke?ue.get(ke).bytesPerElement:1,zn=V.get(B).currentProgram.getUniforms();for(let di=0;di<sn;di++)zn.setValue(D,"_gl_DrawID",di),pt.render(Jt[di]/rt,Ee[di])}else if(H.isInstancedMesh)pt.renderInstances(Re,It,H.count);else if(q.isInstancedBufferGeometry){const Jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Jt);pt.renderInstances(Re,It,Ee)}else pt.render(Re,It)};function pu(M,P,q,B){U!==null&&M.isNodeMaterial&&U.setObject(B,M),ae===!0&&De.setState(M,q,!1),M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,Gs(M,P,B),M.side=qa,M.needsUpdate=!0,Gs(M,P,B),M.side=jn):Gs(M,P,B)}this.compile=function(M,P,q=null){q===null&&(q=M),U!==null&&U.renderStart(M,P,q),w=he.get(q),w.init(P),v.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),xe=this.localClippingEnabled,ae=De.init(this.clippingPlanes,xe),ae===!0&&De.setGlobalState(this.clippingPlanes,P),U!==null&&ze.render(w.state.shadowsArray,q,P);const B=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const ve=ye[we];pu(ve,q,P,H),B.add(ve)}else pu(ye,q,P,H),B.add(ye)}),w=v.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(M,P,q=null){const B=this.compile(M,P,q);return new Promise(H=>{function ye(){if(B.forEach(function(we){const ke=V.get(we).currentProgram;(ke===void 0||ke.isReady())&&B.delete(we)}),B.size===0){H(M);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let hl=null;function Om(M){hl&&hl(M)}function mu(){Sa.stop()}function gu(){Sa.start()}const Sa=new em;Sa.setAnimationLoop(Om),typeof self<"u"&&Sa.setContext(self),this.setAnimationLoop=function(M){hl=M,Ce.setAnimationLoop(M),M===null?Sa.stop():Sa.start()},Ce.addEventListener("sessionstart",mu),Ce.addEventListener("sessionend",gu),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(M,P);const q=Ce.enabled===!0&&Ce.isPresenting===!0,B=E!==null&&(ee===null||q)&&E.begin(k,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(P),P=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(k,M,P,ee),w=he.get(M,v.length),w.init(P),w.state.textureUnits=Z.getTextureUnits(),v.push(w),Oe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),O.setFromProjectionMatrix(Oe,Si,P.reversedDepth),xe=this.localClippingEnabled,ae=De.init(this.clippingPlanes,xe),S=ge.get(M,A.length),S.init(),A.push(S),Ce.enabled===!0&&Ce.isPresenting===!0){const we=k.xr.getDepthSensingMesh();we!==null&&pl(we,P,-1/0,k.sortObjects)}pl(M,P,0,k.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),k.sortObjects===!0&&S.sort(Se,Ue),ft=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ft&&Ve.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&De.beginShadows();const H=w.state.shadowsArray;if(ze.render(H,M,P),ae===!0&&De.endShadows(),(B&&E.hasRenderPass())===!1){const we=S.opaque,ve=S.transmissive;if(w.setupLights(),P.isArrayCamera){const ke=P.cameras;if(ve.length>0)for(let Le=0,qe=ke.length;Le<qe;Le++){const Ze=ke[Le];vu(we,ve,M,Ze)}ft&&Ve.render(M);for(let Le=0,qe=ke.length;Le<qe;Le++){const Ze=ke[Le];_u(S,M,Ze,Ze.viewport)}}else ve.length>0&&vu(we,ve,M,P),ft&&Ve.render(M),_u(S,M,P)}ee!==null&&G===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),B&&E.end(k),M.isScene===!0&&M.onAfterRender(k,M,P),be.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(w=v[v.length-1],Z.setTextureUnits(w.state.textureUnits),ae===!0&&De.setGlobalState(k.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,U!==null&&U.renderEnd()};function pl(M,P,q,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(O)){B&&Et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Oe);const we=te.update(M),ve=M.material;ve.visible&&S.push(M,we,ve,q,Et.z,null,P)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(O))){const we=te.update(M),ve=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Et.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Et.copy(we.boundingSphere.center)),Et.applyMatrix4(M.matrixWorld).applyMatrix4(Oe)),Array.isArray(ve)){const ke=we.groups;for(let Le=0,qe=ke.length;Le<qe;Le++){const Ze=ke[Le],Re=ve[Ze.materialIndex];Re&&Re.visible&&S.push(M,we,Re,q,Et.z,Ze,P)}}else ve.visible&&S.push(M,we,ve,q,Et.z,null,P)}}const ye=M.children;for(let we=0,ve=ye.length;we<ve;we++)pl(ye[we],P,q,B)}function _u(M,P,q,B){const{opaque:H,transmissive:ye,transparent:we}=M;w.setupLightsView(q),ae===!0&&De.setGlobalState(k.clippingPlanes,q),B&&y.viewport(re.copy(B)),H.length>0&&Hs(H,P,q),ye.length>0&&Hs(ye,P,q),we.length>0&&Hs(we,P,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function vu(M,P,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Re=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new ri(1,1,{generateMipmaps:!0,type:Re?Ti:Ln,minFilter:za,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ye=w.state.transmissionRenderTarget[B.id],we=B.viewport||re;ye.setSize(we.z*k.transmissionResolutionScale,we.w*k.transmissionResolutionScale);const ve=k.getRenderTarget(),ke=k.getActiveCubeFace(),Le=k.getActiveMipmapLevel();k.setRenderTarget(ye),k.getClearColor(Ye),He=k.getClearAlpha(),He<1&&k.setClearColor(16777215,.5),k.clear(),ft&&Ve.render(q);const qe=k.toneMapping;k.toneMapping=Mi;const Ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ae===!0&&De.setGlobalState(k.clippingPlanes,B),Hs(M,q,B),Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,It=P.length;ct<It;ct++){const xt=P[ct],{object:pt,geometry:Jt,material:Ee,group:sn}=xt;if(Ee.side===jn&&pt.layers.test(B.layers)){const rt=Ee.side;Ee.side=xn,Ee.needsUpdate=!0,yu(pt,q,B,Jt,Ee,sn),Ee.side=rt,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye))}k.setRenderTarget(ve,ke,Le),k.setClearColor(Ye,He),Ze!==void 0&&(B.viewport=Ze),k.toneMapping=qe}function Hs(M,P,q){const B=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ye=M.length;H<ye;H++){const we=M[H],{object:ve,geometry:ke,group:Le}=we;let qe=we.material;qe.allowOverride===!0&&B!==null&&(qe=B),ve.layers.test(q.layers)&&yu(ve,P,q,ke,qe,Le)}}function yu(M,P,q,B,H,ye){U!==null&&H.isNodeMaterial&&U.setObject(M,H),M.onBeforeRender(k,P,q,B,H,ye),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(k,P,q,B,M,ye),H.transparent===!0&&H.side===jn&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,k.renderBufferDirect(q,P,B,H,M,ye),H.side=qa,H.needsUpdate=!0,k.renderBufferDirect(q,P,B,H,M,ye),H.side=jn):k.renderBufferDirect(q,P,B,H,M,ye),M.onAfterRender(k,P,q,B,H,ye)}function Gs(M,P,q){P.isScene!==!0&&(P=qt);const B=V.get(M),H=w.state.lights,ye=w.state.shadowsArray,we=H.state.version,ve=fe.getParameters(M,H.state,ye,P,q,w.state.lightProbeGridArray),ke=fe.getProgramCacheKey(ve);let Le=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;const qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=de.get(M.envMap||B.environment,qe),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",ci),Le=new Map,B.programs=Le);let Ze=Le.get(ke);if(Ze!==void 0){if(B.currentProgram===Ze&&B.lightsStateVersion===we)return bu(M,ve),Ze}else ve.uniforms=fe.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,q,ve),M.onBeforeCompile(ve,k),Ze=fe.acquireProgram(ve,ke),Le.set(ke,Ze),B.uniforms=ve.uniforms;const Re=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=De.uniform),bu(M,ve),B.needsLights=Vm(M),B.lightsStateVersion=we,B.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.sunLights.value=H.state.sun,Re.sunLightShadows.value=H.state.sunShadow,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.sunShadowMatrix.value=H.state.sunShadowMatrix,Re.sunShadowCascade.value=H.state.sunShadowCascade,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=Ze,B.uniformsList=null,Ze}function xu(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Ao.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function bu(M,P){const q=V.get(M);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function Bm(M,P){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(P.matrixWorld);for(let q=0,B=M.length;q<B;q++){const H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function Hm(M,P,q,B,H){P.isScene!==!0&&(P=qt),Z.resetTextureUnits();const ye=P.fog,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ve=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,ke=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Le=de.get(B.envMap||we,ke),qe=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,It=!!q.morphAttributes.color;let xt=Mi;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(xt=k.toneMapping);const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=pt!==void 0?pt.length:0,Ee=V.get(B),sn=w.state.lights;if(ae===!0&&(xe===!0||M!==j)){const vt=M===j&&B.id===X;De.setState(B,M,vt)}let rt=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==sn.state.version||Ee.outputColorSpace!==ve||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Le||B.fog===!0&&Ee.fog!==ye||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==De.numPlanes||Ee.numIntersection!==De.numIntersection)||Ee.vertexAlphas!==qe||Ee.vertexTangents!==Ze||Ee.morphTargets!==Re||Ee.morphNormals!==ct||Ee.morphColors!==It||Ee.toneMapping!==xt||Ee.morphTargetsCount!==Jt||!!Ee.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ee.__version=B.version);let zn=Ee.currentProgram;rt===!0&&(zn=Gs(B,P,H),U&&B.isNodeMaterial&&U.onUpdateProgram(B,zn,Ee));let di=!1,Ki=!1,er=!1;const ht=zn.getUniforms(),Pt=Ee.uniforms;if(y.useProgram(zn.program)&&(di=!0,Ki=!0,er=!0),B.id!==X&&(X=B.id,Ki=!0),Ee.needsLights){const vt=Bm(w.state.lightProbeGridArray,H);Ee.lightProbeGrid!==vt&&(Ee.lightProbeGrid=vt,Ki=!0)}if(di||j!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",M.projectionMatrix),ht.setValue(D,"viewMatrix",M.matrixWorldInverse);const Ji=ht.map.cameraPosition;Ji!==void 0&&Ji.setValue(D,Je.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ki=!0,er=!0)}if(Ee.needsLights&&(sn.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",sn.state.sunShadowMap,Z),sn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",sn.state.directionalShadowMap,Z),sn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",sn.state.spotShadowMap,Z),sn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",sn.state.pointShadowMap,Z)),H.isSkinnedMesh){ht.setOptional(D,H,"bindMatrix"),ht.setOptional(D,H,"bindMatrixInverse");const vt=H.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ht.setValue(D,"boneTexture",vt.boneTexture,Z))}H.isBatchedMesh&&(ht.setOptional(D,H,"batchingTexture"),ht.setValue(D,"batchingTexture",H._matricesTexture,Z),ht.setOptional(D,H,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",H._indirectTexture,Z),ht.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",H._colorsTexture,Z));const Zi=q.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&I.update(H,q,zn),(Ki||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,ht.setValue(D,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=FS()),Ki){if(ht.setValue(D,"toneMappingExposure",k.toneMappingExposure),Ee.needsLights&&Gm(Pt,er),ye&&B.fog===!0&&Pe.refreshFogUniforms(Pt,ye),Pe.refreshMaterialUniforms(Pt,B,ne,K,w.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){const vt=Ee.lightProbeGrid;Pt.probesSH.value=vt.texture,Pt.probesMin.value.copy(vt.boundingBox.min),Pt.probesMax.value.copy(vt.boundingBox.max),Pt.probesResolution.value.copy(vt.resolution)}Ao.upload(D,xu(Ee),Pt,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ao.upload(D,xu(Ee),Pt,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(D,"center",H.center),ht.setValue(D,"modelViewMatrix",H.modelViewMatrix),ht.setValue(D,"normalMatrix",H.normalMatrix),ht.setValue(D,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const vt=B.uniformsGroups;for(let Ji=0,tr=vt.length;Ji<tr;Ji++){const Mu=vt[Ji];se.update(Mu,zn),se.bind(Mu,zn)}}return zn}function Gm(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Vm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,P,q){const B=V.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=P,V.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){const q=V.get(M);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,q=0){ee=M,$=P,G=q;let B=null,H=!1,ye=!1;if(M){const ve=V.get(M);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),re.copy(M.viewport),Te.copy(M.scissor),Ae=M.scissorTest,y.viewport(re),y.scissor(Te),y.setScissorTest(Ae),X=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(ve.__hasExternalTextures)Z.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(ve.__boundDepthTexture!==qe){if(qe!==null&&V.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Le=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[P])?B=Le[P][q]:B=Le[P],H=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[q]:B=Le,re.copy(M.viewport),Te.copy(M.scissor),Ae=M.scissorTest}else re.copy(Me).multiplyScalar(ne).floor(),Te.copy(We).multiplyScalar(ne).floor(),Ae=Rt;if(q!==0&&(B=N),y.bindFramebuffer(D.FRAMEBUFFER,B)&&y.drawBuffers(M,B),y.viewport(re),y.scissor(Te),y.setScissorTest(Ae),H){const ve=V.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,q)}else if(ye){const ve=P;for(let ke=0;ke<M.textures.length;ke++){const Le=V.get(M.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,Le.__webglTexture,q,ve)}}else if(M!==null&&q!==0){const ve=V.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,q)}X=-1};function Su(M){const P=V.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=R.textureFormatReadable(M.format),P.__typeReadable=R.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,q,B,H,ye,we,ve=0){if(!(M&&M.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){y.bindFramebuffer(D.FRAMEBUFFER,ke);try{const Le=M.textures[ve],qe=Le.format,Ze=Le.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);const Re=Su(Le);if(Re.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&q>=0&&q<=M.height-H&&D.readPixels(P,q,B,H,me.convert(qe),me.convert(Ze),ye)}finally{const Le=ee!==null?V.get(ee).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,P,q,B,H,ye,we,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke)if(P>=0&&P<=M.width-B&&q>=0&&q<=M.height-H){y.bindFramebuffer(D.FRAMEBUFFER,ke);const Le=M.textures[ve],qe=Le.format,Ze=Le.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);const Re=Su(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(P,q,B,H,me.convert(qe),me.convert(Ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const It=ee!==null?V.get(ee).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,It);const xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await K_(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ct),D.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,q=0){const B=Math.pow(2,-q),H=Math.floor(M.image.width*B),ye=Math.floor(M.image.height*B),we=P!==null?P.x:0,ve=P!==null?P.y:0;Z.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,we,ve,H,ye),y.unbindTexture()},this.copyTextureToTexture=function(M,P,q=null,B=null,H=0,ye=0){let we,ve,ke,Le,qe,Ze,Re,ct,It;const xt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(q!==null)we=q.max.x-q.min.x,ve=q.max.y-q.min.y,ke=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,qe=q.min.y,Ze=q.isBox3?q.min.z:0;else{const Pt=Math.pow(2,-H);we=Math.floor(xt.width*Pt),ve=Math.floor(xt.height*Pt),M.isDataArrayTexture?ke=xt.depth:M.isData3DTexture?ke=Math.floor(xt.depth*Pt):ke=1,Le=0,qe=0,Ze=0}B!==null?(Re=B.x,ct=B.y,It=B.z):(Re=0,ct=0,It=0);const pt=me.convert(P.format),Jt=me.convert(P.type);let Ee;P.isData3DTexture?(Z.setTexture3D(P,0),Ee=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),Ee=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),Ee=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const sn=y.getParameter(D.UNPACK_ROW_LENGTH),rt=y.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=y.getParameter(D.UNPACK_SKIP_PIXELS),di=y.getParameter(D.UNPACK_SKIP_ROWS),Ki=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),y.pixelStorei(D.UNPACK_SKIP_ROWS,qe),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);const er=M.isDataArrayTexture||M.isData3DTexture,ht=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){const Pt=V.get(M),Zi=V.get(P),vt=V.get(Pt.__renderTarget),Ji=V.get(Zi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,vt.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let tr=0;tr<ke;tr++)er&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,Ze+tr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(P).__webglTexture,ye,It+tr)),D.blitFramebuffer(Le,qe,we,ve,Re,ct,we,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){const Pt=V.get(M),Zi=V.get(P);y.bindFramebuffer(D.READ_FRAMEBUFFER,L),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let vt=0;vt<ke;vt++)er?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,H,Ze+vt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,H),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zi.__webglTexture,ye,It+vt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zi.__webglTexture,ye),H!==0?D.blitFramebuffer(Le,qe,we,ve,Re,ct,we,ve,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Ee,ye,Re,ct,It+vt,Le,qe,we,ve):D.copyTexSubImage2D(Ee,ye,Re,ct,Le,qe,we,ve);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ee,ye,Re,ct,It,we,ve,ke,pt,Jt,xt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ye,Re,ct,It,we,ve,ke,pt,xt.data):D.texSubImage3D(Ee,ye,Re,ct,It,we,ve,ke,pt,Jt,xt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Re,ct,we,ve,pt,Jt,xt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Re,ct,xt.width,xt.height,pt,xt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Re,ct,we,ve,pt,Jt,xt);y.pixelStorei(D.UNPACK_ROW_LENGTH,sn),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),y.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),y.pixelStorei(D.UNPACK_SKIP_ROWS,di),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ki),ye===0&&P.generateMipmaps&&D.generateMipmap(Ee),y.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){$=0,G=0,ee=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const OS=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],xd=["pitch","yaw","roll","bend","x","y","z"];function ko(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function lm(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function BS(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:lm(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const r=ko(e.loopBas);r!==null&&r>=0&&(a.loopBas=r);const s=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of s){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of OS){const u=c[d];if(!u||typeof u!="object")continue;let f=a.kemikler.get(d);f||(f={},a.kemikler.set(d,f));for(const m of xd){const _=ko(u[m]);_!==null&&(f[m]||(f[m]=[]),f[m].push({t:l,v:_,easing:String(c.easing||"LINEAR").toUpperCase()}))}const h=ko(u.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,f.turn||(f.turn=[]),f.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&VS(a),a}const HS={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function GS(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function VS(i){for(const[e,t]of Object.entries(HS)){const n=i.kemikler.get(e);if(!n)continue;let a=0,r=0;for(const s of["x","y"]){const o=n[s];if(!o||o.length===0)continue;a++;const c=t[s==="x"?0:1];Math.abs(GS(o.map(l=>l.v))-c)<=2&&r++}a===0||r!==a||["x","y","z"].forEach((s,o)=>{const c=n[s];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function $S(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:lm(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},r=t.bones||{};for(const s of Object.keys(r)){const o=r[s];if(!o||typeof o!="object")continue;const c={},l=(d,u,f)=>{if(!d)return;const h=[],m=(_,p)=>{const g=ko(p);g!==null&&h.push({t:_,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const _ of d){const p=typeof _?.time=="number"?_.time*20:0;m(p,Array.isArray(_?.vector)?_.vector[u]:void 0)}else Array.isArray(d.vector)?m(0,d.vector[u]):typeof d=="number"&&m(0,d);h.length&&(c[f]=h)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(s,c)}return a}function WS(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return BS(e);if(e?.animations)return $S(e);throw new Error("bilinmeyen emote formatı")}function qS(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function $f(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],r=a.t-n.t,s=r<=0?1:(e-n.t)/r;return n.v+(a.v-n.v)*qS(a.easing)(s)}function cm(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Wf={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:cm(),kokDon:[0,0,0],kokKonum:[0,0,0]},dm={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},XS=dm,YS={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function qf(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,r={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:cm(),kokDon:[0,0,0],kokKonum:[0,0,0]},s=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(h,m,_)=>{h[m==="x"?0:m==="y"?1:2]=_};for(const[h,m]of i.kemikler){if(a&&h==="body"){for(const g of xd){const b=$f(m[g],n);b!==null&&(g==="pitch"?r.kokDon[0]=b:g==="yaw"?r.kokDon[1]=b:g==="roll"?r.kokDon[2]=-b:g==="bend"?r.bend[4]=b:(g==="x"||g==="y"||g==="z")&&d(l,g,b))}continue}const _=dm[h],p=_!==void 0?r[s[_]]:null;for(const g of xd){const b=$f(m[g],n);if(b!==null){if(p){if(g==="pitch")p[0]=b;else if(g==="yaw")p[1]=b;else if(g==="roll")p[2]=a?-b:b;else if(g==="x"||g==="y"||g==="z"){const T=XS[h];T!==void 0&&d(c[T],g,b)}}if(g==="bend"){const T=YS[h];T!==void 0&&(r.bend[T]+=b)}}}}const u=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const m=c[h];r.konum[h]=[m[0]??0,m[1]??0,-(m[2]??0)]}return r.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],r}const f=[1,0,1,1,0,0];for(let h=0;h<6;h++){const m=c[h],_=r.konum[h];for(let p=0;p<3;p++){if(m[p]===void 0){_[p]=0;continue}let g=m[p];p===1&&f[h]&&(g+=24),_[p]=g-u[h][p]}}return r}function Bn(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const Xf=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:Bn(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:Bn(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:Bn(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:Bn(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:Bn(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:Bn(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:Bn(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:Bn(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:Bn(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:Bn(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:Bn(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:Bn(0,48,4,12,4)}],ai={x:1,y:1,w:10,h:16},Vo={x:12,y:1,w:10,h:16},um=20,KS=36,ZS=2,JS=4,QS=1;function jS(i){const e=i?3:4,t=QS+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function fm(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function hm(i){const e=i.getContext("2d",{willReadFrequently:!0});if(!e)return ai;const t=n=>{let a=0;try{const r=e.getImageData(n.x,n.y,n.w,n.h).data;for(let s=3;s<r.length;s+=4)r[s]>8&&a++}catch{return 0}return a};return t(Vo)>t(ai)?Vo:ai}const Ne=1/24;function kn(i,e,t,n,a,r,s=!1){const o=i.attributes.uv,c=e*4,l=s?r:n,d=s?n:r;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function Ua(i){i.magFilter=Ft,i.minFilter=Ft,i.colorSpace=An}function pm(i,e=!1){return i?new Go({map:i,transparent:e,alphaTest:e?.01:0}):new Go({color:5924466})}function Yf(i,e,t=!1){const n=new ja(i.w*Ne,i.h*Ne,i.d*Ne),{u:a,v:r,w:s,h:o,d:c}=i;return e&&(kn(n,0,a+c+s,r+c,a+c+s+c,r+c+o),kn(n,1,a,r+c,a+c,r+c+o),kn(n,2,a+c,r,a+c+s,r+c),kn(n,3,a+c+s,r,a+c+s+s,r+c,!0),kn(n,4,a+c,r+c,a+c+s,r+c+o),kn(n,5,a+c+s+c,r+c,a+c+s+c+s,r+c+o),Ua(e)),new Fn(n,pm(e,t))}function ia(i,e,t,n=!1){const a=i.h/2,{u:r,v:s,w:o,d:c}=i,l=new ja(i.w*Ne,a*Ne,i.d*Ne);if(t){const d=s+c+(e?a:0),u=d+a;kn(l,0,r+c+o,d,r+c+o+c,u),kn(l,1,r,d,r+c,u),kn(l,2,r+c,s,r+c+o,s+c),e?kn(l,3,r+c+o,s,r+c+o+o,s+c,!0):kn(l,3,r+c,s,r+c+o,s+c),kn(l,4,r+c,d,r+c+o,u),kn(l,5,r+c+o+c,d,r+c+o+c+o,u),Ua(t)}return new Fn(l,pm(t,n))}class eM{renderer=null;scene=new h0;camera=new $n(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new B0;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinPanel=ai;_bekleyenPelerin=null;canliDoku=null;kanatGrup=null;kanatDoku=null;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.canvas=e;try{this.renderer=new zS({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new N0(16777215,.9));const t=new vf(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new vf(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,r=e.clientHeight||300;this.renderer.setSize(a,r,!1),this.camera.aspect=a/Math.max(1,r),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(!this.etkilesimKapali&&!(t.pointerType==="mouse"&&t.button!==0)){this.surukleX=t.clientX,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX;this.surukleX=t.clientX,this.kameraAciHedef-=n*.008},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak)}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t;const n=this.kameraYariCap;this.camera.position.set(Math.sin(this.kameraAci)*n,this.kameraY,Math.cos(this.kameraAci)*n),this.camera.lookAt(0,.02,0)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,r)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(s),a(o)},o.onerror=()=>{URL.revokeObjectURL(s),r(new Error("görsel açılamadı"))},o.src=s})}}catch{}return await new D0().loadAsync(e)}async skin(e){let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r&&(r.imageSmoothingEnabled=!1,n.height===32?r.drawImage(n,0,0):r.drawImage(n,0,0,64,64),t=new Vt(a),Ua(t),t.needsUpdate=!0)}catch{t=null}this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1)}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),!!e?.url)try{const t=await this.dokuResmi(e.url),n=fm(t);this.pelerinPanel=hm(n);const a=new Vt(n);Ua(a),a.needsUpdate=!0,this.pelerinDoku=a,this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this.pelerinTemizle(),!e)return;const t=new Yl(e);Ua(t),t.needsUpdate=!0,this.pelerinDoku=t,this.pelerinPanel=ai,this.pelerinMeshKur()}kanatTuval(e){if(this._bekleyenKanat=e,this.kanatTemizle(),!e)return;const t=new Yl(e);Ua(t),t.needsUpdate=!0,this.kanatDoku=t,this.kanatMeshKur()}kanatTemizle(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null,this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;const t=new Go({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:jn}),n=new Xt;n.position.set(0,4*Ne,-2.1*Ne);for(const a of[-1,1]){const r=new $r(10*Ne,20*Ne);r.translate(a*5*Ne,-10*Ne,0);const s=r.attributes.uv,o=24/64,c=34/64,l=1-2/32,d=1-22/32;s.setXY(0,o,l),s.setXY(1,c,l),s.setXY(2,o,d),s.setXY(3,c,d),s.needsUpdate=!0;const u=new Fn(r,t);u.rotation.y=a*.46,u.rotation.z=-a*.14,u.rotation.x=-.05,n.add(u)}e.add(n),this.kanatGrup=n}pelerinTemizle(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null,this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;const t=new $r(10*Ne,16*Ne),n=t.attributes.uv,a=this.pelerinPanel,r=a.x/64,s=(a.x+a.w)/64,o=1-1/32,c=1-17/32;n.setXY(0,r,o),n.setXY(1,s,o),n.setXY(2,r,c),n.setXY(3,s,c),n.needsUpdate=!0;const l=new Go({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:jn}),d=new Fn(t,l);d.rotation.y=Math.PI,d.position.set(0,-8*Ne,0);const u=new Xt;u.position.set(0,6*Ne,-2.5*Ne),u.rotation.x=.06,u.add(d),e.add(u),this.pelerinGrup=u,this.pelerinSarkac=u}tuvalDoku(e,t){const n=new Yl(e);Ua(n),n.needsUpdate=!0,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler)t.visible=e}atlasNoktasi(e,t="taban"){const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){if(t==="pelerin"){if(!this.pelerinGrup)return null;const s=this.isin(e,this.pelerinGrup.children,64,32);if(!s)return null;const o=this.pelerinPanel,c=s.x-o.x,l=s.y-o.y;return c<0||l<0||c>=o.w||l>=o.h?null:{x:c,y:l}}if(!this.kanatGrup)return null;const n=this.isin(e,this.kanatGrup.children,64,32);if(!n)return null;const a=n.x-24,r=n.y-2;return a<0||r<0||a>=10||r>=20?null:{x:a,y:r}}isin(e,t,n,a){const r=this.canvas;if(!r||!this.renderer||t.length===0)return null;const s=r.getBoundingClientRect();if(s.width<1||s.height<1)return null;const o=new nt((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),c=new O0;c.setFromCamera(o,this.camera);const l=c.intersectObjects(t,!1).find(f=>!!f.uv);if(!l?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(l.uv.x*n))),u=Math.min(a-1,Math.max(0,Math.floor((1-l.uv.y)*a)));return{x:d,y:u}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const v=A;v.geometry&&v.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new Xt,this.kok.position.y=-.66,this.kalca=new Xt,this.kalca.position.set(0,12*Ne,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Xt,body:new Xt,armL:new Xt,armR:new Xt,legL:new Xt,legR:new Xt};const[n,a,r,s,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,r,s,o,c])A.rotation.order="ZYX";const l=Yf({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Ne,0),n.add(l);const d=Yf({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ne,0),n.add(d),this.tabanMeshler.push(l),this.ustMeshler.push(d),this.oyuncuMeshler.push(l,d),a.position.set(0,12*Ne,0),a.userData.pivotPx=[0,12,0];const u=(A,v,E,k,C)=>{const U=ia(v,!1,e);U.position.set(k,E+v.h/4*Ne,0),A.add(U);const N=new Xt;N.position.set(0,E,0);const L=ia(v,!0,e);if(L.position.set(k,-(v.h/4)*Ne,0),N.add(L),A.add(N),this.tabanMeshler.push(U,L),this.oyuncuMeshler.push(U,L),C){const F=ee=>{ee.scale.set((C.w+.5)/C.w,(C.h+.25)/C.h,(C.d+.5)/C.d)},$=ia(C,!1,e,!0);$.position.set(k,E+C.h/4*Ne,0),F($),A.add($);const G=ia(C,!0,e,!0);G.position.set(k,-(C.h/4)*Ne,0),F(G),N.add(G),this.ustMeshler.push($,G),this.oyuncuMeshler.push($,G)}return N},f=new Xt;f.position.set(0,-6*Ne,0),f.rotation.order="ZYX";const h=ia({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Ne,0),f.add(h),a.add(f);const m=ia({u:16,v:16,w:8,h:12,d:4},!0,e);m.position.set(0,-9*Ne,0),a.add(m);const _=ia({u:16,v:32,w:8,h:12,d:4},!1,e,!0);_.position.set(0,3*Ne,0),_.scale.set(1.0625,1.0208,1.125),f.add(_);const p=ia({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Ne,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(h,m),this.ustMeshler.push(_,p),this.oyuncuMeshler.push(h,m,_,p);const g=new Xt;g.position.set(0,6*Ne,0),g.rotation.order="ZYX";const b=t?3:4;n.position.set(0,6*Ne,0),n.userData.pivotPx=[0,6,0],r.position.set(5*Ne,4*Ne,0),r.userData.pivotPx=[5,4,0];const T=u(r,{u:32,v:48,w:b,h:12,d:4},-4*Ne,Ne,{u:48,v:48,w:b,h:12,d:4});s.position.set(-5*Ne,4*Ne,0),s.userData.pivotPx=[-5,4,0];const x=u(s,{u:40,v:16,w:b,h:12,d:4},-4*Ne,-Ne,{u:40,v:32,w:b,h:12,d:4});o.position.set(1.9*Ne,0,0),o.userData.pivotPx=[1.9,0,0];const S=u(o,{u:16,v:48,w:4,h:12,d:4},-6*Ne,0,{u:0,v:48,w:4,h:12,d:4});c.position.set(-1.9*Ne,0,0),c.userData.pivotPx=[-1.9,0,0];const w=u(c,{u:0,v:16,w:4,h:12,d:4},-6*Ne,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:f,belUst:g,armL:T,armR:x,legL:S,legR:w},g.add(n,r,s),this.kalca.add(a,g,o,c),this.scene.add(this.kok),!this.oyuncuGorunur)for(const A of this.oyuncuMeshler)A.visible=!1;this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),fa===this&&(fa=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=Math.min(.05,this.saat.getDelta());this.zaman+=t,this.adimla(t),this.kameraGuncelle(t),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=qf(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Wf):t=qf(this.aktif,this.tEmote)):(t=Wf,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;e&&(e.rotation.x=-.02+Math.sin(this.zaman*2.1)*.05,e.position.y=4*Ne+Math.sin(this.zaman*2.1)*.35*Ne)}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=j_.degToRad,r=(o,c,l)=>{const d=a(c[0]),u=-a(c[1]),f=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(u-o.rotation.y)*t,o.rotation.z+=(f-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],m=e.konum[l],_=(h[0]+m[0])*Ne,p=(h[1]+m[1])*Ne,g=(h[2]+m[2])*Ne;o.position.x+=(_-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};r(n.head,e.head,0),r(n.body,e.body,1),r(n.armL,e.armL,2),r(n.armR,e.armR,3),r(n.legL,e.legL,4),r(n.legR,e.legR,5);const s=this.bukulenler;if(s){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(s.armL,e.bend[0]),o(s.armR,e.bend[1]),o(s.legL,e.bend[2]),o(s.legR,e.bend[3]),o(s.body,e.bend[4]),o(s.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Ne,d=(12+c[1])*Ne,u=c[2]*Ne;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(u-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let fa=null;function si(){return fa||(fa=new eM),window.__sahne=fa,fa}function il(){fa?.kapati(),fa=null,window.__sahne=null}const Fe=128,Qn=96;function Jn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ie(i,e,t,n=1,a=1,r="#fff"){i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function aa(i,e,t=Qn){const n=Math.ceil(t/e.length);e.forEach((a,r)=>ie(i,0,r*n,Fe,n+1,a));for(let a=1;a<e.length;a++){const r=a*n,s=Jn(a*977);for(let o=0;o<Fe;o+=2)s()>.45&&(ie(i,o,r-1,1,1,e[a-1]),s()>.6&&ie(i,o+1,r-1,1,1,e[a]))}}function Kf(i,e,t,n,a,r){ie(i,e+3,t+3,n,3,a),ie(i,e,t+5,n+6,3,a),ie(i,e+2,t+8,n-2,2,r),ie(i,e+6,t+2,n-8,2,a),ie(i,e+4,t+10,n-6,1,r)}function Zf(i,e,t,n,a){const r=Jn(a);for(let s=0;s<6;s++){const o=Math.floor(r()*Fe),c=18+Math.floor(r()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+s%3*6)));ie(i,o-d,e-l,d*2,1,t)}ie(i,o-1,e-c+1,2,2,n)}}function _r(i,e,t,n,a=30){const r=Jn(n);for(let s=0;s<e;s++){const o=Math.floor(r()*Fe),c=a+Math.floor(r()*(Qn-a));ie(i,o,c,1,1,t[Math.floor(r()*t.length)])}}const bd=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){aa(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),ie(i,0,62,Fe,8,"#b98aa6"),ie(i,0,68,Fe,8,"#8f6377"),Zf(i,64,"#a97a95","#d9aec6",41);const e=(n,a,r)=>{const s=Jn(r),o=78;ie(i,n,o-a,3,a,"#5d3b46"),ie(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(s()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((s()-.5)*14),u=o-a-Math.round(s()*14)-l*4;for(let f=-c;f<=c;f++){const h=Math.round(Math.sqrt(Math.max(0,c*c-f*f))*1.15);h<=0||ie(i,d-h,u+f,h*2,1,f<0?"#f7b8d2":"#e795b6")}for(let f=0;f<10;f++){const h=Math.round((s()-.5)*c*1.6),m=Math.round((s()-.5)*c*1.6);ie(i,d+h,u+m,1,1,s()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),ie(i,0,78,Fe,Qn-78,"#7fa86a"),ie(i,0,78,Fe,2,"#9dc484"),ie(i,0,90,Fe,6,"#5d7f4f");const t=Jn(53);for(let n=0;n<70;n++)ie(i,t()*Fe,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){aa(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),ie(i,0,52,Fe,6,"#ff6a1a"),ie(i,0,52,Fe,2,"#ffa347"),ie(i,0,56,Fe,2,"#c93d0c"),ie(i,0,40,Fe,14,"#2b1218"),ie(i,12,26,16,30,"#1c0a10"),ie(i,12,22,16,5,"#2f121a"),ie(i,96,18,20,42,"#1c0a10"),ie(i,96,14,20,5,"#2f121a"),ie(i,44,34,34,26,"#22101a"),ie(i,44,30,34,4,"#331522");const e=Jn(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);ie(i,n,a,2,3,"#ff9b3d")}ie(i,18,32,2,3,"#ffb04d"),ie(i,102,26,2,3,"#ffb04d"),ie(i,0,70,Fe,26,"#120810");for(let t=0;t<Fe;t+=16)ie(i,t,70,15,8,"#1b0d17"),ie(i,t+1,71,13,2,"#241322");ie(i,0,84,Fe,4,"#ff5a14"),ie(i,0,84,Fe,1,"#ffb44d"),ie(i,0,88,Fe,8,"#120810"),_r(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){aa(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),_r(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),ie(i,0,58,Fe,10,"#241436"),ie(i,0,58,Fe,2,"#3a2152");const e=(n,a,r)=>{ie(i,n,a,9,r,"#3d2a56"),ie(i,n+1,a,2,r,"#55406f"),ie(i,n+7,a,2,r,"#2a1c3d"),ie(i,n-2,a-3,13,3,"#63498a"),ie(i,n-1,a-6,11,3,"#4a3568"),ie(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{ie(i,n,a,2,6,"#efe4ff"),ie(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),ie(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),ie(i,30,46,14,4,"#2c1a41"),ie(i,34,50,6,3,"#1e1130"),ie(i,96,50,10,3,"#2c1a41"),ie(i,0,68,Fe,Qn-68,"#1b1029"),ie(i,0,68,Fe,3,"#34204a");for(let n=4;n<Fe;n+=14)ie(i,n,76,9,2,"#2a1a3d");_r(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){aa(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),ie(i,0,46,Fe,8,"#8a2a1c");const e=(t,n,a,r)=>{ie(i,t,n,a,r,"#221a1f"),ie(i,t,n,a,2,"#33272e");for(let s=4;s<r;s+=8)ie(i,t+2,n+s,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)ie(i,t,38,6,6,"#120d10");ie(i,4,28,8,8,"#120d10"),ie(i,104,24,8,8,"#120d10"),ie(i,8,50,4,4,"#ffcf4d"),ie(i,14,54,2,2,"#e0a81f"),ie(i,106,44,5,5,"#ffcf4d"),ie(i,60,52,4,4,"#ffcf4d"),ie(i,66,56,2,2,"#e0a81f"),ie(i,0,70,Fe,26,"#150f12"),ie(i,0,74,Fe,6,"#ff6418"),ie(i,0,74,Fe,1,"#ffb44d"),ie(i,0,80,Fe,16,"#150f12"),_r(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){aa(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Kf(i,22,18,22,"#2d6f74","#1d5259"),Kf(i,76,12,30,"#2d6f74","#1d5259"),ie(i,0,66,Fe,10,"#2f6b52"),ie(i,0,66,Fe,2,"#4b8b68");const e=(n,a,r)=>{const s=Jn(r),o=4+Math.floor(s()*2);ie(i,n,74-a,o,a,"#e6d7bd"),ie(i,n,74-a,1,a,"#f3e9d6"),ie(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);ie(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)ie(i,n+o/2-12+s()*24,c+2+s()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),ie(i,0,74,Fe,Qn-74,"#3f7c5c"),ie(i,0,74,Fe,2,"#5b9d77"),ie(i,0,86,Fe,10,"#2c5a44");const t=Jn(61);for(let n=0;n<48;n++)ie(i,t()*Fe,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){aa(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let r=0;r<Fe;r++){const s=Math.round(Math.sin(r/Fe*Math.PI*2+n)*3);ie(i,r,a+s,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}_r(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),Zf(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,r,s)=>{for(let o=0;o<s;o++){const c=Math.round(r*(1-o/s)*.9);ie(i,n-c/2+o*.4,a+o,c,1,o<s*.4?"#d6ecff":"#a6cbe8")}ie(i,n,a+2,2,s-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),ie(i,0,72,Fe,Qn-72,"#0f2a4a"),ie(i,0,72,Fe,2,"#2b5f8c");for(let n=0;n<24;n++){const a=Jn(n*13);ie(i,a()*Fe,76+a()*18,6+a()*10,1,"#1f4b72")}const t=Jn(83);for(let n=0;n<26;n++)ie(i,t()*Fe,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){aa(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),ie(i,96,12,12,12,"#fff3cf"),ie(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;ie(i,0,n,Fe,6,t<2?"#d8ab68":"#c1924f"),ie(i,0,n,Fe,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);ie(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),ie(i,46-n/2,e+t,2,1,"#f0d29a")}ie(i,42,40,8,16,"#6b4d28"),ie(i,43,42,6,14,"#3d2b14"),ie(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)ie(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}ie(i,0,78,Fe,Qn-78,"#e0b877"),ie(i,0,78,Fe,2,"#f2d49b");for(let t=6;t<Fe;t+=18)ie(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){aa(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let r=0;r<66;r++){const s=2+r*.18;ie(i,a+r*.12,r,s,1,"rgba(150,240,255,0.06)")}}const e=(n,a,r,s)=>{ie(i,n,a,r,s,"#2f7d76"),ie(i,n,a,r,2,"#48a89a"),ie(i,n,a+s-2,r,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),ie(i,60,18,8,4,"#a8f0e2"),ie(i,62,16,4,2,"#e0fff8"),ie(i,34,40,4,4,"#d9b34a"),ie(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)ie(i,n,52,6,2,"#1d4a48");ie(i,0,64,Fe,Qn-64,"#0b2c33"),ie(i,0,64,Fe,3,"#164a4a");const t=Jn(47);for(let n=0;n<16;n++){const a=t()*Fe,r=6+t()*12;ie(i,a,78-r,2,r,t()>.5?"#1f6b55":"#2b8a63")}_r(i,30,["#8fe8dd","#c8fff6"],11,8)}}],tM=bd;function nM(i){return bd.find(e=>e.id===i)||bd[0]}function mm(i,e){const t=i.getContext("2d");t&&((i.width!==Fe||i.height!==Qn)&&(i.width=Fe,i.height=Qn),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Fe,Qn),nM(e).ciz(t))}let pn=null;const Jf=()=>document.documentElement.getAttribute("data-world")==="sahne",iM=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function aM(i){const e=ce.instances[0];(!pn||!ce.instances.find(l=>l.id===pn))&&(pn=e?.id||null);const t=ce.instances.find(l=>l.id===pn),n=ki(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),r=[...ce.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),s=r[0]||null,o=r.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${ce.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${Wt(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${dl(n)}" alt="" draggable="false" ${ul(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${Y("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${Y("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?hs(t.mod_loader):"Java"}</span>
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
          ${s?`
          <button class="imp-hizli-satir${Ke.activeId===s.id?" durdur":""}" id="i-hizli-oyla" ${Ke.activeId&&Ke.activeId!==s.id?'disabled data-kilitli="1"':""}>
            <b>${s.name}${Ke.activeId===s.id?" — AÇIK":""}</b>
            <small>${hs(s.mod_loader)} · ${s.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=dn(`
      <div class="imp-satir${Ke.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${Wt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${hs(l.mod_loader)} · ${l.mc_version} — ${iM(l.last_played)}</small>
        </span>
        <button class="imp-oyla${Ke.activeId===l.id?" durdur":""}" ${Ke.activeId&&Ke.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${Ke.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${Y(Ke.activeId===l.id?"stop":"play")} ${Ke.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${Y("gear")}</button>
      </div>
    `);d.addEventListener("click",u=>{const f=l.id;if(u.target.closest(".imp-diyis")){at("instances",f);return}if(u.target.closest(".imp-oyla")){Ke.activeId===l.id&&ic();return}pn=f,at("instances",f)}),d.querySelector(".imp-oyla")?.addEventListener("click",u=>u.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async u=>{if(u.stopPropagation(),Ke.activeId===d)return ic();if(!ce.accounts.length)return bn();const{launchInstance:f}=await yt(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>St);return{launchInstance:h}},void 0);f(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>at("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>at("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{pn&&at("instances",pn)}),i.querySelector("#i-ad")?.addEventListener("click",()=>bn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>at("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>at("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!s)return;if(Ke.activeId===s.id)return ic();if(!ce.accounts.length)return bn();const{launchInstance:l}=await yt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);l(s.id)}),gm(i,n)}async function ic(){try{await oe("cmd_kill_game")}catch{}const{refreshState:i}=await yt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>St);return{refreshState:e}},void 0);await i(!0)}async function rM(i){const e=i.querySelector("#i-news");if(e)try{const t=await oe("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=dn(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>at("news")),e.appendChild(a)}}catch{}}function sM(i){if(il(),Jf()){aM(i),rM(i);return}const e=ce.instances[0];(!pn||!ce.instances.find(u=>u.id===pn))&&(pn=e?.id||null);const t=ce.instances.find(u=>u.id===pn),n=ki(),a=u=>!!u&&(u.includes("/")||u.includes("\\")),r=t?a(t.icon)?`<img class="hero-inst-icon" src="${Wt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",s=!!t?.cover&&!Jf(),o=s?` style="background-image:url('${Wt(t.cover)}')"`:"",c=t?Ke.activeId===t.id?"warn":"ok":"off",l=ce.instances.filter(u=>u.id!==t?.id);i.innerHTML=`
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
          <div class="hero-badge">${gs(c)} ${r} ${t.mc_version} · ${hs(t.mod_loader)}</div>
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
        <button class="play-ring ${Ke.activeId?"disabled":""}" id="h-play"
          title="${Ke.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ke.activeId?"disabled":""}>
          <span class="pr-icon">${Ke.activeId?Y("clock"):Y("play")}</span>
          <span class="pr-label">${Ke.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ke.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ke.activeId===t.id?`
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
          ${gs("err")}
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
  `;const d=i.querySelector("#ledger-rows");if(d){for(const u of l){a(u.icon);const f=dn(`
        <button class="ledger-row" data-id="${u.id}">
          ${gs(Ke.activeId===u.id?"warn":"ok")}
          <span class="lr-name">${u.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${hs(u.mod_loader)} ${u.mc_version}
            <span class="sep">·</span>
            Son: ${u.last_played?new Date(u.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${Y("play")}</span>
        </button>
      `);f.querySelector(".lr-play").innerHTML=Y("play"),f.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!ce.accounts.length)return bn();qd(f);const{launchInstance:m}=await yt(async()=>{const{launchInstance:_}=await Promise.resolve().then(()=>St);return{launchInstance:_}},void 0);m(u.id);return}at("instances",u.id)}),d.appendChild(f)}Wd(Array.from(d.children))}lM(i),cM(),oM(i),gm(i,n)}async function gm(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(mm(n,String(ce.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=si();a.kur(t),t.classList.add("on");try{const o=await oe("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:Wt(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}if(ce.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const s={sakin:.6,normal:1,canli:1.8}[String(ce.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await oe("cmd_list_emotes"),c=[];for(const l of o)try{c.push(WS(l.icerik))}catch{}a.emoteleriKur(c,s)}catch{a.emoteleriKur([])}}async function oM(i){try{const e=await oe("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{yt(()=>Promise.resolve().then(()=>St),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function hs(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function lM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!pn){at("instances");return}if(!ce.accounts.length){bn();return}qd(i.querySelector(".play-ring"));const{launchInstance:e}=await yt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>St);return{launchInstance:t}},void 0);e(pn)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await oe("cmd_kill_game")}catch{}const{refreshState:e}=await yt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>St);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{at("instances",pn||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>at("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>at("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>at("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>bn())}async function cM(){const i=vi("#home-news");if(i)try{const e=await oe("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=dn(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${Y("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>at("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Qf={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function ac(i){return Qf[i]||Qf.vanilla}let ti=null;function dM(i){const e=Wt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function uM(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const r=a.target;a.isIntersecting?r.play().catch(()=>{}):r.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function fM(i){if(Oi.param&&ce.instances.find(e=>e.id===Oi.param)){ti=Oi.param,Oi.param=void 0,Ls(i,ti);return}if(ti&&ce.instances.find(e=>e.id===ti)){Ls(i,ti);return}$o(i)}function $o(i){i.innerHTML=`
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
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>th());else{for(const t of ce.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${Wt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",r=Ke.activeId===t.id,s=dn(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?dM(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${_m(t.mod_loader)} ${t.mc_version}</span>
                ${r?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${gs(r?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${Fr(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ke.activeId?"disabled":""}>
              ${Ke.activeId?`${Y("clock")} Açık`:`${Y("play")} Oyna`}
            </button>
            ${r?`<button class="btn danger card-stop" title="Oyunu kapat">${Y("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);s.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!ce.accounts.length)return bn();const{launchInstance:c}=await yt(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>St);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await oe("cmd_kill_game")}catch{}const{refreshState:c}=await yt(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>St);return{refreshState:l}},void 0);await c(!0);return}ti=t.id,Ls(i,t.id)}),e.appendChild(s)}Wd(Array.from(e.querySelectorAll(".inst-card"))),uM(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>th()),i.querySelector("#btn-import")?.addEventListener("click",()=>hM().catch(()=>{})),pM()}async function hM(){const i=await oe("cmd_pick_pack_file");if(i){le("Paket içe aktarılıyor…","ok");try{const e=await oe("cmd_import_pack_file",{path:i}),{refreshState:t}=await yt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>St);return{refreshState:n}},void 0);await t(),le(`${e.name||"Paket"} kuruldu!`,"ok"),at("instances")}catch(e){le(`Paket içe aktarılamadı: ${e}`,"err")}}}async function pM(){const i=document.querySelector("#popular-strip");if(i)try{const e=await oe("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=dn(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${Y("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${Y("dl")} ${mM(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>at("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function mM(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function _m(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Ls(i,e){const t=ce.instances.find(r=>r.id===e);if(!t){ti=null,$o(i);return}const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${Wt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${Y("back")}</button>
      <div class="inst-icon xl">${a}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${_m(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${Fr(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ke.activeId?"disabled":""}>${Ke.activeId?`${Y("clock")} Oyun Açık`:`${Y("play")} Oyna`}</button>
      ${Ke.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${Y("stop")} Durdur</button>`:""}
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
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{ti=null,$o(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!ce.accounts.length)return bn();const{launchInstance:r}=await yt(async()=>{const{launchInstance:s}=await Promise.resolve().then(()=>St);return{launchInstance:s}},void 0);r(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await oe("cmd_kill_game")}catch{}const{refreshState:r}=await yt(async()=>{const{refreshState:s}=await Promise.resolve().then(()=>St);return{refreshState:s}},void 0);await r(!0)}),i.querySelectorAll(".tab").forEach(r=>{r.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),r.classList.add("active");const s=r.dataset.tab,o=i.querySelector("#tab-content");({mods:vm,content:gM,java:ym,log:_M,analytics:vM,settings:yM})[s](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let Ii="resourcepacks";const jf=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function gM(i,e){const t=()=>jf.find(a=>a.id===Ii);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await oe("cmd_list_content_files",{instanceId:e.id,kind:Ii})}catch{}const r=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${jf.map(o=>`<button class="kt ${o.id===Ii?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${Y("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${Y("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${Y("plus")} ${r.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Ii=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>oe("cmd_open_content_folder",{instanceId:e.id,kind:Ii}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Ii==="resourcepacks"?"resourcepack":Ii==="shaderpacks"?"shader":"world";Oi.param=`kind:${o}`,at("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await oe("cmd_add_content_file",{instanceId:e.id,kind:Ii}),await n()}catch(o){le(`Eklenemedi: ${o}`,"err")}});const s=i.querySelector("#content-list");if(!a.length){s.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${r.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}s.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${Wt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=dn(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Bs(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${Y("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const u=d.currentTarget.dataset.del;if(confirm(`"${u}" silinsin mi?`))try{await oe("cmd_delete_content_file",{instanceId:e.id,kind:Ii,name:u}),await n()}catch(f){le(`Silinemedi: ${f}`,"err")}}),s.appendChild(l)}};await n()}async function vm(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await oe("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await oe("cmd_resolve_mod_icons",{filenames:t.map(s=>s.filename)})}catch{}let a={};if(t.length)try{const s=await oe("cmd_check_mod_updates",{instanceId:e.id});a=Object.fromEntries(s.map(o=>[o.filename,o]))}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${Y("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=s=>{const o=t.filter(l=>l.filename.toLowerCase().includes(s.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",o.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of o){const d=n[l.filename],u=d?`<img class="mod-logo" src="${d}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${Y("puzzle")}</span>`,f=dn(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${Bs(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[l.filename]?`<button class="btn primary sm upd-mod" data-fn="${l.filename}" data-url="${a[l.filename].url}" data-ad="${a[l.filename].yeni_ad}" title="Yeni sürüm: ${a[l.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);f.querySelector(".switch")?.addEventListener("click",async h=>{const m=h.currentTarget,_=m.dataset.fn,p=m.dataset.en!=="true";await oe("cmd_toggle_mod",{instanceId:e.id,filename:_,enabled:p}),l.enabled=p,r(i.querySelector("#mod-search").value)}),f.querySelector(".upd-mod")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await oe("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),le("Mod güncellendi"),await vm(i,e)}catch(_){m.disabled=!1,m.textContent="Güncelle",le(`Güncellenemedi: ${_}`,"err")}}),f.querySelector(".del-mod")?.addEventListener("click",async()=>{await oe("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(h=>h.filename!==l.filename),r(i.querySelector("#mod-search").value),le("Mod silindi")}),c.appendChild(f)}};i.querySelector("#mod-search")?.addEventListener("input",s=>{r(s.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{at("explore",e.id)}),r("")}async function ym(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await oe("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",a=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),r=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
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
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${a(r)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const s=i.querySelector("#ram-range");s.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${s.value} MB`}),s.addEventListener("change",async()=>{await oe("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(s.value)}),e.ram_mb=parseInt(s.value),le("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",u=>u.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",u=>u.stopPropagation()),l.addEventListener("click",async u=>{if(u.target.closest("details"))return;const f=l.dataset.id;await oe("cmd_set_instance_java_preset",{id:e.id,presetId:f}),e.java_preset_id=f;const h=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(m=>m.closest(".preset-row").dataset.id));ym(i,e),i.querySelectorAll(".preset-row").forEach(m=>{h.has(m.dataset.id)&&(m.querySelector("details").open=!0)}),le("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),u=l.value.trim(),f=u===""?null:Math.max(2,Math.min(32,parseInt(u)||12)),h=d.value.trim();await oe("cmd_set_instance_custom",{id:e.id,viewDistance:f,customVmArgs:h||null}),e.view_distance=f,e.custom_vm_args=h||null,le("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function _M(i,e){i.innerHTML=`
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
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),r=i.querySelector("#log-search");let s="live",o=0;const c=[];let l=[];const d=(b,T)=>{n.textContent=T!==void 0&&T!==b?`${T}/${b} satır`:`${b} satır`},u=b=>{const T=document.createElement("div");return T.textContent=b,b.includes("ERROR")||b.includes("Exception")?T.classList.add("err"):b.includes("WARN")&&T.classList.add("warn"),T},f=()=>{const b=r.value.trim().toLowerCase(),T=b?l.filter(x=>x.toLowerCase().includes(b)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${b?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const x=document.createDocumentFragment();for(const S of T)x.appendChild(u(S));t.appendChild(x)}d(l.length,T.length)},h=()=>{if(s="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const b=document.createDocumentFragment();for(const T of c)b.appendChild(u(T));t.appendChild(b),t.scrollTop=t.scrollHeight}d(o)},m=async b=>{s=b,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await oe("cmd_read_log",{instanceId:e.id,fileId:b})).split(`
`),f(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let _=[];try{_=await oe("cmd_list_logs",{instanceId:e.id});const b=new Map;for(const T of _)b.has(T.date)||b.set(T.date,[]),b.get(T.date).push(T);for(const[T,x]of b){const S=document.createElement("optgroup");S.label=T;for(const w of x){const A=document.createElement("option");A.value=w.id;const v=w.label.startsWith("Oturum ")?"#"+(w.label.split("-").pop()||w.label):w.label;A.textContent=`${w.time!=="-"?w.time+" — ":""}${v} (${Bs(w.size)})`,S.appendChild(A)}a.appendChild(S)}}catch{}Ke.activeId!==e.id&&_.length?(a.value=_[0].id,m(_[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():m(a.value)}),r.addEventListener("input",()=>{s!=="live"&&f()});const p=await li("game-log",b=>{s!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(b.payload),o++,c.length>500&&c.shift(),t.appendChild(u(b.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function vM(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await oe("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,r=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${Fr(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${r}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Y("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((s,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${s.host}</span>
          <span class="chip gray">${s.visits} giriş</span>
          <span class="dur">${Fr(s.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${Y("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${eh(n.daily_ms).map(s=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(s.ms/Math.max(...eh(n.daily_ms).map(o=>o.ms),1)*100,s.ms?5:2)}%"></div>
            <div class="bar-lbl">${s.label}</div>
            <div class="tooltip">${s.full} — ${Fr(s.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function eh(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[r]||0,full:r})}return e}async function yM(i,e){const t=r=>r.includes("/")||r.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${Wt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
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
            ${e.cover?`<img class="cover-thumb" src="${Wt(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
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
  `;const a=async()=>{const r=i.querySelector("#set-name").value.trim()||e.name,s=i.querySelector("#set-icon").value.trim();await oe("cmd_rename_instance",{id:e.id,name:r}),s&&await oe("cmd_set_instance_icon",{id:e.id,icon:s}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const r=i.querySelector("#set-icon").value.trim();r&&(i.querySelector("#icon-preview").textContent=r)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await oe("cmd_pick_instance_icon",{instanceId:e.id}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),le("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await oe("cmd_pick_instance_cover",{instanceId:e.id}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),le("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await oe("cmd_set_instance_cover",{id:e.id,cover:null}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),le("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>oe("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>oe("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await oe("cmd_duplicate_instance",{id:e.id}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),le("Kurulum kopyalandı"),Ls(i.parentElement,ti)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await oe("cmd_delete_instance",{id:e.id}),await yt(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),ti=null,$o(i.parentElement),le("Kurulum silindi"))})}async function th(){const e=(await oe("cmd_list_versions")).all,t=await oe("cmd_list_java_arg_presets"),n=await oe("cmd_list_standard_mods"),{root:a,close:r}=(await yt(async()=>{const{openModal:l}=await Promise.resolve().then(()=>St);return{openModal:l}},void 0)).openModal(`
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
        <div class="lc-icon">${ac("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${ac("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${ac("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let s="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),s=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",r),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",u=a.querySelector("#w-version").value,f=a.querySelector("#w-preset").value;try{const h=await oe("cmd_create_instance",{instance:{name:d,mc_version:u,mod_loader:s,ram_mb:parseInt(c.value),java_preset_id:f,standard_mods:o&&s==="fabric"}});await yt(()=>Promise.resolve().then(()=>St),void 0).then(_=>_.refreshState()),r(),le(`"${d}" oluşturuldu`);const m=h.instance.id;if(ti=m,ce.instances.length){const _=document.querySelector("#content");Ls(_,m)}}catch(h){le(String(h),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}let Gn="mod",hi="",Ba=[],Pr=40,sa=1,Er=1,ps="",Sd="",rc=!1;function xM(i){let e=Oi.param;if(e?.startsWith("kind:")){const a=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(a)&&(Gn=a),e=void 0}Oi.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${Gn==="mod"?"sel":""}" data-k="mod">${Y("puzzle")} Modlar</button>
        <button class="kt ${Gn==="modpack"?"sel":""}" data-k="modpack">${Y("box")} Paketler</button>
        <button class="kt ${Gn==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${Gn==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${Gn==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${Gn==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
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
  `,i.querySelectorAll(".kt").forEach(a=>a.addEventListener("click",()=>{Gn=a.dataset.k,i.querySelectorAll(".kt").forEach(r=>r.classList.remove("sel")),a.classList.add("sel"),hi&&Ca(i,hi),nh(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Ca(i,t.value.trim()),380)}),t.addEventListener("keydown",a=>{a.key==="Enter"&&Ca(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>Ca(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{hi&&Ca(i,hi)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{hi&&Ca(i,hi)}),e&&hi&&Ca(i,hi),nh(i)}async function nh(i){const e=i.querySelector("#popular-strip");try{const t=await oe("cmd_repos_popular",{kind:Gn,loader:""});e.innerHTML="";for(const n of t){const a=dn(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${Y("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${Y("dl")} ${xm(n.downloads)}</div>
          </div>
        </div>
      `);a.addEventListener("click",()=>bm(n)),e.appendChild(a)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function Ca(i,e){if(!e)return;hi=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',ps=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;Sd=["resourcepack","shader","world","datapack"].includes(Gn)?"":n,sa=1;try{if(Ba=(await oe("cmd_repos_search",{query:e,kind:Gn,versions:ps?[ps]:[],loader:Sd,offset:0,limit:Pr})).results,Er=Ba.length>=Pr?2:1,t.innerHTML="",!Ba.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const s of Ba)t.appendChild(Ed(s));Md(i)}catch(r){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${r}</p></div>`}}function Md(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=Ba.length>=Pr;if(sa===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${sa<=1?"disabled":""}>‹</button>`];for(let r=1;r<=Er;r++)n.push(`<button class="pg-btn ${r===sa?"cur":""}" data-pg="${r}">${r}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const a=dn(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);a.addEventListener("click",r=>{const s=r.target.closest(".pg-btn");if(!s||s.disabled)return;const o=s.dataset.pg,c=o==="prev"?sa-1:o==="next"?sa+1:parseInt(o,10);!Number.isFinite(c)||c<1||c===sa||bM(i,c)}),e.appendChild(a)}async function bM(i,e){if(rc)return;rc=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const a=(await oe("cmd_repos_search",{query:hi,kind:Gn,versions:ps?[ps]:[],loader:Sd,offset:(e-1)*Pr,limit:Pr})).results;if(!a.length){Er=Math.min(Er,Math.max(1,e-1)),t.innerHTML="";for(const r of Ba)t.appendChild(Ed(r));Md(i);return}Ba=a,sa=e,Er=Math.max(Er,a.length>=Pr?e+1:e),t.innerHTML="";for(const r of a)t.appendChild(Ed(r));Md(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{rc=!1}}function Ed(i){const e=dn(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${Y(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${Y("dl")} ${xm(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>bm(i)),e}function xm(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function bm(i){const{root:e,close:t}=Kt(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",a=document.querySelector("#exp-loader")?.value||(ce.instances[0]?.mod_loader==="forge"?"forge":"fabric"),s=["resourcepack","shader","world","datapack"].includes(i.kind)?"":a;try{const o=await oe("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?s:"",gameVersion:n}),c=e.querySelector("#ver-list");if(c.innerHTML="",!o.length){c.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const l of o){const d=dn(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${l.name||l.version_number}</b>
            <span class="ver-date">${l.date.slice(0,10)} · ${l.game_versions.slice(0,3).join(", ")}${l.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${Bs(l.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>SM(i,l,t)),c.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function SM(i,e,t){if(i.kind==="modpack")t(),await MM(i,e);else{if(!ce.instances.length){le("Önce bir kurulum oluşturmalısın","err"),at("instances");return}const{root:n,close:a}=Kt(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${ce.instances.map(r=>{const s=r.icon&&!r.icon.includes("/")&&!r.icon.includes("\\")?`${r.icon} `:"";return`<option value="${r.id}">${s}${r.name} (${r.mod_loader} ${r.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",a),n.querySelector("#ok")?.addEventListener("click",async()=>{const r=n.querySelector("#tgt").value,s=n.querySelector("#ok");s.disabled=!0,s.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await oe("cmd_repos_install_content",{instanceId:r,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await oe("cmd_repos_install",{instanceId:r,source:i.source,projectId:i.id,versionId:e.id}),a(),t(),le({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){le(String(o),"err"),s.disabled=!1,s.textContent="Kur"}})}}async function MM(i,e){const{root:t,close:n}=Kt(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),a=t.querySelector("#pk-bar"),r=t.querySelector("#pk-detail"),{listen:s}=await yt(async()=>{const{listen:c}=await Promise.resolve().then(()=>St);return{listen:c}},void 0),o=await s("launch-progress",c=>{c.payload.stage==="modpack"&&(a.style.transform=`scaleX(${Math.min(1,Math.max(0,c.payload.percent/100))})`,r.textContent=c.payload.detail||"")});try{const c=await oe("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await yt(()=>Promise.resolve().then(()=>St),void 0).then(l=>l.refreshState()),await EM(c),at("instances")}catch(c){o(),r.textContent=`Kurulum başarısız: ${c}`,r.style.color="var(--danger)"}}async function EM(i){const e=await oe("cmd_list_java_arg_presets"),{root:t,close:n}=Kt(`
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
  `);t.querySelectorAll(".preset-row").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.id;r!=="__skip"&&(await oe("cmd_set_instance_java_preset",{id:i.id,presetId:r}),le(`Preset: ${e.find(s=>s.id===r)?.name}`)),n()})})}function wM(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,TM(i)}async function TM(i){const e=i.querySelector("#yikim-news");try{const t=await oe("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
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
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",r=>{r.stopPropagation(),a?.startsWith("https://")&&cl(a).catch(()=>{})})})}catch{e.innerHTML=""}}const sc=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],AM={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function kM(i){const e=(t,n,a,r=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${r}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function ls(i){let e=ce.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...AM}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},r=sc.find(m=>m.id===n)||sc[0],s=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(_=>{const p=i.querySelector("#app-version");p&&(p.textContent=`v${_} "Kıvılcım"`)}).catch(()=>{const _=i.querySelector("#app-version");_&&(_.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${Y("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${ce.accounts.map(m=>{const _=ki()?.id===m.id;return`
          <div class="acc-row ${_?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${dl(m)}" ${ul(m)} draggable="false" />
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
        ${sc.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${kM(m)}
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
            <b>Bu dünyayı özelleştir — ${r.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${Y("undo")} Sıfırla</button>
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
      ${La("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
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
      ${La("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${La("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${La("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${La("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${La("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${La("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>bn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>bn()),i.querySelectorAll(".acc-row").forEach(m=>{const _=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async p=>{p.stopPropagation(),await oe("cmd_select_account",{accountId:_}),await rn(),ls(i),le("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async p=>{p.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await oe("cmd_remove_account",{accountId:_}),await rn(),ls(i),le("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{ce.config.theme=m.dataset.t,_i(),await hn(),ls(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>at("skins"));const c=()=>ce.config.tema_ozel||={},l=async(m,_)=>{const p=c()[n]||={};p[m]=_,!p.accent&&!p.radius&&delete c()[n],_i(),await hn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const _=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(p=>p.classList.toggle("aktif",p===m)),await l("accent",_),le(_?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const d=i.querySelector("#tema-accent-pick");d?.addEventListener("input",()=>{ce.config.tema_ozel||={},(ce.config.tema_ozel[n]||={}).accent=d.value,_i()}),d?.addEventListener("change",async()=>{await hn(),le("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(_=>_.classList.toggle("aktif",_===m)),await l("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],_i(),await hn(),ls(i),le("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=String(e.sahne_arka||"kiraz");u.innerHTML=tM.map(_=>`
      <button class="sas-kart${_.id===m?" sel":""}" data-art="${_.id}">
        <span class="sas-tuval"><canvas data-ciz="${_.id}"></canvas></span>
        <b>${_.ad}</b>
        <small>${_.etiket}</small>
      </button>`).join(""),u.querySelectorAll("canvas[data-ciz]").forEach(_=>{mm(_,_.dataset.ciz||"kiraz")}),u.querySelectorAll(".sas-kart").forEach(_=>_.addEventListener("click",async()=>{ce.config.sahne_arka=_.dataset.art,u.querySelectorAll(".sas-kart").forEach(p=>p.classList.toggle("sel",p===_)),await hn(),le("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{ce.config.fx_particles=m.target.value,_i(),await hn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{ce.config.cursor_style=m.target.value,_i(),await hn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await oe("cmd_pick_java");m&&(ce.config.java_dir=m,await hn(),i.querySelector("#java-path").textContent=m,le("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{ce.config.java_dir=null,await hn(),i.querySelector("#java-path").textContent="otomatik"}),Pa(i,"keep-open","keep_launcher_open"),Pa(i,"hide-on-launch","hide_on_launch"),Pa(i,"show-news","show_news"),Pa(i,"stats-enabled","stats_enabled"),Pa(i,"use-java25","use_java25"),Pa(i,"discord-rpc","discord_rpc"),Pa(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{ce.config.menu_animasyon_hiz=m.target.value,await hn()});const f=()=>Sm(i);i.querySelector("#anim-yenile")?.addEventListener("click",f),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await oe("cmd_pick_emote");m?.length&&(le(`${m.length} animasyon eklendi`),f())}catch(m){le(`Animasyon eklenemedi: ${m}`,"err")}}),f();const h=i.querySelector("#dlc-range");h.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=h.value),h.addEventListener("change",async()=>{ce.config.download_concurrency=parseInt(h.value),await hn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{le("Güncelleme kontrol ediliyor…");try{const _=await(await yt(()=>import("./index-DSkUPpwd.js"),[])).check();if(_?.available){const{root:p,close:g}=Kt(`
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
        `);p.querySelector("#upd-later")?.addEventListener("click",()=>g()),p.querySelector("#upd-go")?.addEventListener("click",async()=>{const b=p.querySelector("#upd-go");b.disabled=!0,b.textContent="İndiriliyor…";try{await _.downloadAndInstall(),le("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(T){b.disabled=!1,b.textContent="İndir ve Kur",le(`Güncelleme başarısız: ${T}`,"err")}})}else le("YIKIMLient güncel ✓")}catch(m){await PM(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{cl(Wo).catch(()=>le(`Tarayıcı açılamadı — adresi elle aç: ${Wo}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await oe("cmd_get_app_dir");Dm(m).catch(()=>{})}),CM(i,e)}function RM(i){const e=ki();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(r=>String(r).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const oc=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function CM(i,e){const t=i.querySelector("#rozet-alani");if(t){if(RM(e)){ih(i,e);return}t.innerHTML="",oe("cmd_rozet_yetki").then(n=>{n?.izinli&&ih(i,e)}).catch(()=>{})}}function ih(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=ki(),a=!!n&&(e?.atolye_admin||[]).some(k=>String(k).toLowerCase()===n.name.toLowerCase());let r=new Array(64).fill("");const s=k=>/^#[0-9a-fA-F]{6}$/.test(String(k||""));let o=s(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(s).slice(0,24),l=!1;const d=[];let u=[...e.atolye_izinli||[]];t.innerHTML=`
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
              <b class="ro-isim">${ki()?.name||"oyuncu"}</b>
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
    </div>`;const f=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),m=t.querySelector("#rozet-cipler"),_=()=>{f.innerHTML=r.map((k,C)=>`<button class="rozet-hucre${k?" dolu":""}" data-i="${C}" style="--c:${k||"transparent"}"></button>`).join(""),h.innerHTML=r.map(k=>`<i style="--c:${k||"transparent"}"></i>`).join("")},p=k=>{const C=l?"":o;r[k]!==C&&(r[k]=C,_())};f.addEventListener("click",k=>{const C=k.target.closest(".rozet-hucre");C&&(d.push([...r]),d.length>40&&d.shift(),p(Number(C.dataset.i)))});const g=t.querySelector("#rozet-renkler"),b=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),x=t.querySelector("#rozet-renk-sec"),S=()=>{const k=[...oc,...c];g.innerHTML=k.map((C,U)=>`<button class="rozet-renk${C.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${C}" style="--c:${C}" title="${C}" data-ozel="${U>=oc.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(C=>C.addEventListener("click",()=>{const U=C.dataset.c||"";l=!1,U&&w(U)}))},w=(k,C=!0)=>{o=k.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),b.value=o,T.style.setProperty("--c",o),x.value=o,S(),C&&(ce.config.rozet_renk=o,hn())},A=k=>{if(!s(k))return le("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const C=k.toLowerCase();return[...oc,...c].some(U=>U.toLowerCase()===C)||(c=[...c,C].slice(-24),ce.config.rozet_renkler=[...c]),w(C),!0};x?.addEventListener("input",()=>{w(x.value,!1)}),x?.addEventListener("change",()=>A(x.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const k=b.value.trim(),C=k.startsWith("#")?k:`#${k}`;A(C)&&le(`Renk paletine eklendi: ${C.toLowerCase()}`)}),b?.addEventListener("keydown",k=>{k.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),b?.addEventListener("input",()=>{const k=b.value.trim(),C=k.startsWith("#")?k:`#${k}`;T.style.setProperty("--c",s(C)?C:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(k=>k.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const k=d.pop();k&&(r=k,_())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...r]),r=new Array(64).fill(""),_()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...r]),r=LM(),_()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const k=t.querySelector("#rozet-kaydet");k.disabled=!0,k.textContent="Kaydediliyor…";try{const C=await oe("cmd_rozet_ciz",{pikseller:r});le(C?.yuklendi?`Rozet kaydedildi — ${C.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${C.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${C?.hata||"ağ"})`)}catch(C){le(`Rozet kaydedilemedi: ${C}`,"err")}finally{k.disabled=!1,k.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await oe("cmd_rozet_sil"),r=new Array(64).fill(""),_(),le("Rozet kaldırıldı"))});const v=()=>{m&&(m.innerHTML=u.length?u.map((k,C)=>`<span class="rozet-cip">${k}<button data-i="${C}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',m.querySelectorAll("button").forEach(k=>k.addEventListener("click",()=>{u.splice(Number(k.dataset.i),1),E()})))},E=async()=>{ce.config.atolye_izinli=[...u],await hn(),v();try{(await oe("cmd_rozet_izinler",{isimler:u}))?.yuklendi||le("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const k=t.querySelector("#rozet-isim"),C=k.value.trim();if(C){if(u.some(U=>U.toLowerCase()===C.toLowerCase())){le("Bu isim zaten listede");return}u.push(C),k.value="",E(),le(`${C} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",k=>{k.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),_(),S(),v(),oe("cmd_rozet_oku").then(k=>{const C=k?.pikseller;Array.isArray(C)&&C.length===64&&(r=C,_())}).catch(()=>{})}function LM(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const Wo="https://github.com/YKSAMI1/yikimlient/releases/latest";function ah(i){return String(i??"").trim().replace(/^v/i,"")}async function PM(i){let e="",t="";try{const r=await oe("cmd_check_updates"),s=ah(r?.current),o=ah(r?.latest);o&&o!==s&&(e=o)}catch{}try{const r=await oe("cmd_upd_teshis"),s=Array.isArray(r?.platformlar)&&r.platformlar.length?r.platformlar.join(", "):"yok",o=[`HTTP ${r?.durum||"?"}`,`manifest ${r?.surum||"?"}`,`platform: ${s}`];r?.hata&&o.push(String(r.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=Kt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${Y("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{cl(Wo).catch(()=>le(`Tarayıcı açılamadı — adresi elle aç: ${Wo}`,"err"))})}async function Sm(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await oe("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${Y("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await oe("cmd_delete_emote",{adi:n.adi}),le("Animasyon kaldırıldı"),Sm(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function La(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Pa(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),ce.config[t]=a.classList.contains("on"),await hn()})}async function hn(){await oe("cmd_save_settings",{config:ce.config}),await rn(),_i()}const fn=64,Da=64,DM=40;class qo{w=fn;h=Da;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(fn*Da*4)}static bos(){return new qo}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new qo(this.veri)}piksel(e,t){if(e<0||t<0||e>=fn||t>=Da)return[0,0,0,0];const n=(t*fn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const r=Math.max(1,Math.min(8,Math.floor(a))),s=e-Math.floor((r-1)/2),o=t-Math.floor((r-1)/2);for(let c=0;c<r;c++)for(let l=0;l<r;l++){const d=s+l,u=o+c;if(d<0||u<0||d>=fn||u>=Da)continue;const f=(u*fn+d)*4;this.veri[f]=n[0],this.veri[f+1]=n[1],this.veri[f+2]=n[2],this.veri[f+3]=n[3]}}cizgi(e,t,n,a,r,s=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),u=Math.abs(l-o),f=-Math.abs(d-c),h=o<l?1:-1,m=c<d?1:-1;let _=u+f;for(;this.boya(o,c,r,s),!(o===l&&c===d);){const p=2*_;p>=f&&(_+=f,o+=h),p<=u&&(_+=u,c+=m)}}kova(e,t,n){if(e<0||t<0||e>=fn||t>=Da)return;const a=this.piksel(e,t);if(rh(a,n))return;const r=[t*fn+e],s=new Uint8Array(fn*Da);for(;r.length;){const o=r.pop();if(s[o])continue;s[o]=1;const c=o%fn,l=Math.floor(o/fn);rh(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&r.push(o-1),c<fn-1&&r.push(o+1),l>0&&r.push(o-fn),l<Da-1&&r.push(o+fn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>DM&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function rh(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function IM(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}const lu=JS,Mm=um*lu,Em=KS*lu,UM=.3,lc=2;let NM=null;function sh(i,e,t,n,a,r,s){r<=0||s<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,r,s)}function oh(i,e,t,n,a,r,s){if(r<=0||s<=0)return;const o=NM??=document.createElement("canvas"),c=Math.round(r),l=Math.round(s);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${UM})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function FM(i,e,t,n=lu){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const r=jS(t),s=ZS*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(um/2*a,(31.3+lc)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of r){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+lc)*a;oh(i,e,o.yan,c,l,s,o.on.h*a),o.ust&&o.ustYan&&oh(i,e,o.ustYan,c,l,s,o.on.h*a)}for(const o of r){const c=o.x*a,l=(o.y+lc)*a;sh(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&sh(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const zM=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],on=64;function OM(i,e,t,n){const a=e.pafta;let r=e.slim,s=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,u=!1,f=8,h=!1,m=-1,_=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${Y("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${dc(s)}</span>
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
          <canvas id="ske-tuval" width="${on*f}" height="${on*f}"></canvas>
          <canvas id="ske-izgara" width="${on*f}" height="${on*f}"></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(O=>`<button class="seg-btn ${O===f?"aktif":""}" data-zum="${O}">${O}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-edit-3dbar">
          <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${Y("box")} 3D Çiz</button>
          <span class="sk-edit-seg" id="ske-katman" hidden>
            <button class="seg-btn aktif" data-kat="taban">Skin</button>
            <button class="seg-btn" data-kat="ust">Overlay</button>
          </span>
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
          ${zM.map(O=>`<button class="sk-palet-renk" data-renk="${O}" style="--c:${O}" title="${O}"></button>`).join("")}
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
                ${Xf.filter(ae=>ae.katman===O).map(ae=>`<button class="sk-bolge" data-bolge="${ae.id}">${ae.ad}</button>`).join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${dc(s)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${Y("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${Y("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),b=p.querySelector("#ske-izgara"),T=g.getContext("2d"),x=b.getContext("2d"),S=p.querySelector("#ske-onizleme"),w=document.createElement("canvas");w.width=on,w.height=on;const A=w.getContext("2d"),v=si();v.kur(S),v.tuvalDoku(w,r);function E(){const O=new ImageData(new Uint8ClampedArray(a.veri),on,on);A.putImageData(O,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(w,0,0,g.width,g.height),k(),v.dokuTazele()}function k(){x.clearRect(0,0,b.width,b.height);const O=b.width/on;if(f>=8){x.strokeStyle="rgba(255,255,255,0.09)",x.lineWidth=1;for(let ae=1;ae<on;ae++)x.beginPath(),x.moveTo(ae*O,0),x.lineTo(ae*O,b.height),x.stroke(),x.beginPath(),x.moveTo(0,ae*O),x.lineTo(b.width,ae*O),x.stroke()}if(d){x.strokeStyle="rgba(255,150,60,0.35)",x.lineWidth=1,x.setLineDash([]);for(const ae of d.dilimler)ae.x===d.x&&ae.y===d.y||x.strokeRect(ae.x*O+.5,ae.y*O+.5,ae.w*O-1,ae.h*O-1);if(x.strokeStyle="rgba(255,150,60,0.95)",x.lineWidth=2,x.setLineDash([6,4]),x.strokeRect(d.x*O+1,d.y*O+1,d.w*O-2,d.h*O-2),x.setLineDash([]),u){x.fillStyle="rgba(0,0,0,0.55)",x.beginPath(),x.rect(0,0,b.width,b.height);for(const ae of d.dilimler)x.rect(ae.x*O,ae.y*O,ae.w*O,ae.h*O);x.fill("evenodd")}}}function C(O){const ae=g.getBoundingClientRect(),xe=Math.floor((O.clientX-ae.left)/ae.width*on),Oe=Math.floor((O.clientY-ae.top)/ae.height*on);return[Math.max(0,Math.min(on-1,xe)),Math.max(0,Math.min(on-1,Oe))]}function U(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",O=>{if(O.button!==0)return;const[ae,xe]=C(O);if(h=!0,m=ae,_=xe,g.setPointerCapture(O.pointerId),o==="damla"){l=a.damla(ae,xe),L(l);return}a.katmanBasla(),o==="kova"?a.kova(ae,xe,U()):a.boya(ae,xe,U(),c),E()}),g.addEventListener("pointermove",O=>{if(!h)return;const[ae,xe]=C(O);ae===m&&xe===_||((o==="kalem"||o==="silgi")&&(a.cizgi(m,_,ae,xe,U(),c),E()),m=ae,_=xe)});const N=()=>{h=!1,m=-1,_=-1};g.addEventListener("pointerup",N),g.addEventListener("pointercancel",N);function L(O){l=O;const ae=BM(O);p.querySelector("#ske-renk").value=ae,p.querySelector("#ske-renk-hex").value=ae,p.querySelectorAll(".sk-palet-renk").forEach(xe=>{xe.classList.toggle("aktif",xe.dataset.renk?.toLowerCase()===ae.toLowerCase())})}p.querySelector("#ske-renk").addEventListener("input",O=>{L(cc(O.target.value))}),p.querySelector("#ske-renk-hex").addEventListener("change",O=>{const ae=O.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(ae)&&L(cc(ae))}),p.querySelector("#ske-palet")?.addEventListener("click",O=>{const ae=O.target.closest(".sk-palet-renk");ae?.dataset.renk&&L(cc(ae.dataset.renk))}),p.querySelectorAll(".sk-arac[data-arac]").forEach(O=>{O.addEventListener("click",()=>{o=O.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(ae=>ae.classList.remove("aktif")),O.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(O=>{O.addEventListener("click",()=>{c=Number(O.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(ae=>ae.classList.remove("aktif")),O.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(O=>{O.addEventListener("click",()=>{f=Number(O.dataset.zum),g.width=g.height=b.width=b.height=on*f,p.querySelectorAll("[data-zum]").forEach(ae=>ae.classList.remove("aktif")),O.classList.add("aktif"),E()})}),p.querySelectorAll("[data-slim]").forEach(O=>{O.addEventListener("click",()=>{r=O.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(ae=>ae.classList.remove("aktif")),O.classList.add("aktif"),v.tuvalDoku(w,r),$e(r?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let F=!1,$="taban",G=!1;const ee=p.querySelector("#ske-katman"),X=p.querySelector("#ske-3d"),j=O=>{F=O,G=!1,v.etkilesimKapali=O,S.classList.toggle("cizim",O),ee&&(ee.hidden=!O),X?.classList.toggle("aktif",O),X&&(X.innerHTML=`${Y("box")} ${O?"2D'ye dön":"3D Çiz"}`),$e(O?"3D çizim açık: modelin üstüne tıkla/sürükle.":"")};X?.addEventListener("click",()=>j(!F)),p.querySelectorAll("[data-kat]").forEach(O=>{O.addEventListener("click",()=>{$=O.dataset.kat==="ust"?"ust":"taban",p.querySelectorAll("[data-kat]").forEach(ae=>ae.classList.remove("aktif")),O.classList.add("aktif"),$e($==="ust"?"Overlay seçili — şapka, ceket, kolluk ve pantolon üstüne çiziyorsun.":"Skin (taban) seçili — overlay'in altındaki katmana çiziyorsun.")})});const re=(O,ae)=>{const xe=v.atlasNoktasi(O,$);xe&&(ae&&a.katmanBasla(),a.boya(xe.x,xe.y,U(),c),E())};S.addEventListener("contextmenu",O=>{F&&O.preventDefault()}),S.addEventListener("pointerdown",O=>{if(F&&!(O.pointerType==="mouse"&&O.button!==0)){G=!0;try{S.setPointerCapture(O.pointerId)}catch{}re(O,!0)}}),S.addEventListener("pointermove",O=>{F&&G&&re(O,!1)});const Te=()=>{G=!1};S.addEventListener("pointerup",Te),S.addEventListener("pointercancel",Te),p.querySelector("#ske-bolgeler")?.addEventListener("click",O=>{const ae=O.target.closest("[data-bolge]");ae?.dataset.bolge&&(d=Xf.find(xe=>xe.id===ae.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(xe=>xe.classList.remove("aktif")),ae.classList.add("aktif"),k())}),p.querySelector("#ske-sadece").addEventListener("change",O=>{u=O.target.checked,k()});const Ae=()=>{a.geriAl()&&E()},Ye=()=>{a.ileriAl()&&E()};p.querySelector("#ske-geri-al")?.addEventListener("click",Ae),p.querySelector("#ske-ileri-al")?.addEventListener("click",Ye);const He=O=>{!document.body.contains(p)||!(O.ctrlKey||O.metaKey)||(O.key.toLowerCase()==="z"?(O.preventDefault(),O.shiftKey?Ye():Ae()):O.key.toLowerCase()==="s"&&(O.preventDefault(),ne(!0)))};window.addEventListener("keydown",He);function $e(O){const ae=p.querySelector("#ske-uyari");ae.textContent=O}function K(){return new Promise(O=>{w.toBlob(async ae=>{if(!ae)return O([]);const xe=new Uint8Array(await ae.arrayBuffer());O(Array.from(xe))},"image/png")})}async function ne(O){if(s=p.querySelector("#ske-ad").value.trim()||s,s||(s="Skin"),O&&!await HM("Skini giy",`<b>${dc(s)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const xe=await K();if(!xe.length){$e("PNG üretilemedi.");return}const Oe=p.querySelector(O?"#ske-giy":"#ske-kitaplik");Oe.disabled=!0,$e(O?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:xe,slim:r,ad:s},O),$e(""),Rt()}catch(Je){$e(String(Je)),Oe.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void ne(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void ne(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const O=await K(),ae=p.querySelector("#ske-ad");try{const{invoke:xe}=await yt(async()=>{const{invoke:Je}=await Promise.resolve().then(()=>St);return{invoke:Je}},void 0),Oe=await xe("cmd_skin_disa_aktar",{ad:ae.value.trim()||"skin",veri:O});le(`Dışa aktarıldı: ${Oe}`)}catch(xe){le(String(xe),"err")}});const Se=document.createElement("button");Se.className="btn ghost sk-dosya-btn",Se.innerHTML=`${Y("image")} Dosya`;const Ue=document.createElement("input");Ue.type="file",Ue.accept="image/png",Ue.style.display="none",Se.addEventListener("click",()=>Ue.click()),Ue.addEventListener("change",async()=>{const O=Ue.files?.[0];O&&await We(O),Ue.value=""}),p.querySelector("#ske-geri").after(Se),p.appendChild(Ue);function Me(){return new Promise(O=>{const{root:ae,close:xe}=Kt(`
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
        </div>`);let Oe=!1;const Je=Et=>{Oe||(Oe=!0,xe(),O(Et))};ae.querySelector("#se-wide")?.addEventListener("click",()=>Je(!1)),ae.querySelector("#se-slim")?.addEventListener("click",()=>Je(!0)),ae.querySelector("#se-iptal")?.addEventListener("click",()=>Je(null))})}async function We(O){try{const ae=URL.createObjectURL(O),xe=await new Promise((ft,Ct)=>{const D=new Image;D.onload=()=>ft(D),D.onerror=()=>Ct(new Error("görsel okunamadı")),D.src=ae}),Oe=document.createElement("canvas");Oe.width=xe.width,Oe.height=xe.height;const Je=Oe.getContext("2d");Je.drawImage(xe,0,0),URL.revokeObjectURL(ae);const Et=Je.getImageData(0,0,xe.width,xe.height);if(!(xe.width===64&&(xe.height===64||xe.height===32))){le(`Skin 64×64 veya 64×32 olmalı (bu dosya ${xe.width}×${xe.height})`,"err");return}const qt=await Me();if(qt===null)return;r=qt,p.querySelectorAll("[data-slim]").forEach(ft=>{ft.classList.toggle("aktif",ft.dataset.slim===(r?"1":"0"))}),a.katmanBasla(),xe.height===64?a.veri.set(Et.data):a.veri.set(IM(Et.data)),E(),v.tuvalDoku(w,r)}catch(ae){le(String(ae),"err")}}const Rt=()=>{window.removeEventListener("keydown",He),p.remove();try{v.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Rt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const O=p.querySelector(".sk-edit-kayit");O.scrollIntoView({behavior:"smooth",block:"center"}),O.querySelector("#ske-ad").focus()}),L(l),E()}function BM(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function cc(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function dc(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function HM(i,e,t){return new Promise(n=>{const{root:a,close:r}=Kt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Qe=null,Gt=null,ha=null,oi=!1,Xo=null;const Ht=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function cu(i){il(),Qe=null,Gt=null,ha=null,Xo=null;const e=ki();if(!e||e.kind!=="microsoft"){GM(i);return}i.innerHTML=VM(e.name),$M(i,e.id),al(i,e.id,!0)}function GM(i){i.innerHTML=`
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
    </div>`,i.querySelector("#sk-ms")?.addEventListener("click",()=>{bn(()=>cu(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>at("settings"))}function VM(i){return`
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
              <b>${Ht(i)}</b>
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
    </div>`}function $M(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void JM(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>at("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void uc(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void XM(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n.click())}),n.addEventListener("change",()=>{const r=n.files?.[0];r&&ch(i,e,r),n.value=""}),t.addEventListener("dragover",r=>{r.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",r=>{r.preventDefault(),t.classList.remove("uzerinde");const s=r.dataTransfer?.files?.[0];s&&ch(i,e,s)});const a=(r,s)=>{const o=i.querySelector(r);o?.addEventListener("click",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||lh(i,l)}),o?.addEventListener("dblclick",c=>{const l=c.target.closest(".skin-kart");!l||c.target.closest(".skin-sil")||(lh(i,l),s())})};a("#sk-kitaplik",()=>void uc(i,e)),a("#sk-varsayilan",()=>void uc(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",r=>{const s=r.target.closest(".skin-sil");if(!s)return;r.stopPropagation();const o=s.closest(".skin-kart");o?.dataset.id&&KM(i,e,o.dataset.id,o.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",r=>{const s=r.target.closest(".skin-pelerin");if(!s)return;const o=s.dataset.id||null;YM(i,e,o)}),i.querySelector("#sk-serit")?.addEventListener("click",r=>{r.target.closest("#sk-yenile")&&al(i,e,!1)})}async function al(i,e,t){try{Qe=await oe("cmd_skin_hub",{id:e}),Gt=Gt??WM(),Ka(i),t?Tm(i):du(i),rl(),Qe.cevrimdisi?le("Çevrimdışısın — son bilinen skin gösteriliyor"):Qe.hata&&le(Qe.hata,"err")}catch(n){le(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function WM(){if(!Qe)return null;if(Qe.aktif)return{tur:"kayit",id:`aktif:${Qe.aktif.dosya}`,dosya:Qe.aktif.dosya,slim:Qe.aktif.slim,ad:"Aktif skin"};const i=Qe.kitaplik[0];if(i)return wm(i);const e=Qe.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function wm(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function Ka(i){if(!Qe)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Qe.cevrimdisi?`<div class="skin-serit-cevrimdisi">${Y("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Qe.kitaplik.length?(t.innerHTML=Qe.kitaplik.map(l=>qM(l)).join(""),t.querySelectorAll(".skin-yuz").forEach(l=>{const d=l.dataset.dosya;d&&dh(l,d,l.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const c=i.querySelector("#sk-adet");c&&(c.textContent=Qe.kitaplik.length?`${Qe.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Qe.varsayilanlar||[]).map(c=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${Ht(c.ad)}" data-dosya="${Ht(c.dosya)}"
           data-slim="${c.slim?1:0}" data-ad="${Ht(c.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Mm}" height="${Em}"
                  data-dosya="${Ht(c.dosya)}" data-slim="${c.slim?1:0}"></canvas>
          <span class="skin-model">${c.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${Ht(c.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(c=>{const l=c.dataset.dosya;l&&dh(c,l,c.dataset.slim==="1")}));const a=i.querySelector("#sk-pelerin");if(a)if(!Qe.pelerinler.length)a.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';else{const c=Qe.pelerinler.find(l=>l.aktif);a.innerHTML=Qe.pelerinler.map(l=>`
        <button class="skin-pelerin ${l.aktif?"aktif":""}" data-id="${Ht(l.id)}" title="${Ht(l.ad)}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${Ht(l.dosya||"")}"></canvas>
          <span class="skin-pelerin-ad">${Ht(l.ad)}</span>
          ${l.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(c?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
               <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
             </button>`:""),a.querySelectorAll(".skin-pelerin-tuval").forEach(l=>{const d=l.dataset.dosya;d&&jM(l,d)})}const r=i.querySelector("#sk-aktif-ad");if(r){const c=Gt;r.textContent=Qe.cevrimdisi?"çevrimdışı önizleme":c?`${c.ad} · ${c.slim?"Slim":"Wide"}`:"skin seç"}const s=i.querySelector("#sk-giy");s&&(s.disabled=!Gt||oi,s.textContent=oi?"Bekle…":"Bu Skini Giy");const o=i.querySelector("#sk-yedek");o&&(o.style.display=Qe.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(c=>{const l=Gt&&c.dataset.id===Gt.id;c.classList.toggle("secili",!!l);const d=c.querySelector(".skin-rozet.secim");if(l&&!d){const u=document.createElement("span");u.className="skin-rozet secim",u.textContent=ha&&c.dataset.id===ha?"GİYİLİ":"SEÇİLİ",c.appendChild(u)}else!l&&d?d.remove():l&&d&&(d.textContent=ha&&c.dataset.id===ha?"GİYİLİ":"SEÇİLİ")})}function qM(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${Ht(i.id)}" data-dosya="${Ht(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${Ht(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Mm}" height="${Em}"
                data-dosya="${Ht(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${Ht(i.ad)}</div>
      <button class="skin-sil" title="Sil">${Y("trash")}</button>
    </div>`}function lh(i,e){Gt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},du(),Ka(i)}function Tm(i){const e=i.querySelector("#skin-canvas");if(!e)return;si().kur(e),du()}function du(i){const e=si();Gt&&e.skin({url:Wt(Gt.dosya),slim:Gt.slim})}function rl(){if(!Qe)return;const e=Qe.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;e!==Xo&&(Xo=e,si().pelerin(e?{url:Wt(e)}:null))}async function uc(i,e){if(!Gt||oi)return;const t=Gt;if(await uu("Skini giy",`<b>${Ht(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){oi=!0,Ka(i);try{let a;if(t.tur==="kayit"&&Qe?.kitaplik.some(r=>r.id===t.id))a=await oe("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const r=await Am(t.dosya);a=await oe("cmd_skin_giy",{id:e,veri:r,slim:t.slim,ad:null})}Qe=a,ha=t.tur==="kayit"?t.id:null,le("Skin giyildi — sunucularda görünecek.")}catch(a){le(String(a),"err")}finally{oi=!1,Ka(i)}}}async function XM(i,e){if(!(oi||!await uu("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){oi=!0;try{Qe=await oe("cmd_skin_yedek_geri_yukle",{id:e}),ha=null,le("Yedek skin geri yüklendi.")}catch(n){le(String(n),"err")}finally{oi=!1,Ka(i),rl()}}}async function YM(i,e,t){if(!(oi||!Qe)&&!(t===null&&!Qe.pelerinler.some(n=>n.aktif))){oi=!0;try{Qe=await oe("cmd_skin_pelerin",{id:e,capeId:t}),le(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),rl()}catch(n){le(String(n),"err")}finally{oi=!1,Ka(i)}}}async function KM(i,e,t,n){if(await uu("Skini sil",`<b>${Ht(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await oe("cmd_skin_sil",{kayitId:t}),Gt?.id===t&&(Gt=null),le("Skin silindi."),await al(i,e,!1)}catch(r){le(String(r),"err")}}async function ch(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",r=await ZM(a);if(r===null)return;await oe("cmd_skin_kaydet",{ad:a,veri:n,slim:r}),le(`Skin kitaplığa eklendi · ${r?"Slim":"Wide"}`),await al(i,e,!1)}catch(n){le(String(n),"err")}}function ZM(i){return new Promise(e=>{const{root:t,close:n}=Kt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${Ht(i)}</b> hangi model için çizildi?</div>
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
      </div>`);let a=!1;const r=c=>{c.key==="Escape"&&s(null)},s=c=>{a||(a=!0,window.removeEventListener("keydown",r),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>s(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>s(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>s(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&s(null)}),window.addEventListener("keydown",r)})}async function JM(i,e){const t=Gt?.dosya||Qe?.aktif?.dosya||Qe?.varsayilanlar[0]?.dosya;if(!t){le("Önce bir skin seç.","err");return}let n;try{n=await QM(await Am(t))}catch(o){le(String(o),"err");return}const a=new Date,r=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let s=!1;OM(i,{pafta:n,slim:Gt?.slim??!1,ad:r},async(o,c)=>{const l=await oe("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Qe=await oe("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),ha=l.id,le("Skin giyildi — sunucularda görünecek.")):(Qe=await oe("cmd_skin_hub",{id:e}),le("Kitaplığa kaydedildi.")),Gt=wm(l),s=!0},()=>{if(!s){cu(i);return}Ka(i),il(),Xo=null,Tm(i),rl()})}async function QM(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r.imageSmoothingEnabled=!1;const s=km(n),o=n.naturalHeight===32;return r.drawImage(s,0,0,64,o?32:64),new qo(new Uint8ClampedArray(r.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Am(i){const e=await fetch(Wt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function km(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function dh(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&FM(a,km(n),t)},n.src=Wt(e)}function jM(i,e){const t=new Image;t.onload=()=>{const n=i.getContext("2d");if(!n)return;n.imageSmoothingEnabled=!1,n.clearRect(0,0,i.width,i.height);const a=fm(t),r=hm(a);n.drawImage(a,r.x,r.y,r.w,r.h,0,0,i.width,i.height)},t.src=Wt(e)}function uu(i,e,t){return new Promise(n=>{const{root:a,close:r}=Kt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const e1=64,t1=32;function Rm(){const i=document.createElement("canvas");return i.width=e1,i.height=t1,i}function wr(i,e,t,n,a,r,s,o=0){for(let c=0;c<n;c++)for(let l=0;l<t;l++){const d=s?t-1-l:l,u=e[(c+o)*t+d];u&&(i.fillStyle=u,i.fillRect(a+l,r+c,1,1))}}function uh(i){const e=Rm(),t=e.getContext("2d");if(!t)return e;t.imageSmoothingEnabled=!1;const n=ai.w,a=ai.h;wr(t,i,n,a,ai.x,ai.y,!1),wr(t,i,n,a,Vo.x,Vo.y,!0);for(let r=0;r<a;r++){const s=i[r*n],o=i[r*n+n-1];s&&(t.fillStyle=s,t.fillRect(0,1+r,1,1)),o&&(t.fillStyle=o,t.fillRect(11,1+r,1,1))}for(let r=0;r<n;r++){const s=i[r],o=i[(a-1)*n+r];s&&(t.fillStyle=s,t.fillRect(1+r,0,1,1)),o&&(t.fillStyle=o,t.fillRect(1+r,17,1,1))}return e}function fh(i){const e=Rm(),t=e.getContext("2d");if(!t)return e;t.imageSmoothingEnabled=!1;const n=10,a=20;wr(t,i,n,a,24,2,!1),wr(t,i,n,a,36,2,!0),wr(t,i,n,2,24,0,!1),wr(t,i,n,2,36,0,!0);for(let r=0;r<a;r++){const s=i[r*n],o=i[r*n+n-1];s&&(t.fillStyle=s,t.fillRect(22,2+r,2,1)),o&&(t.fillStyle=o,t.fillRect(34,2+r,2,1))}return e}function Ps(i){return!i.some(e=>e!=="")}const n1=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],Vn=14;let Ds=null,Is=null,ni="pelerin",Dr=!1,Wa=!1;const pa=new Map,i1=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function a1(i){il(),Ds=null,Is=null,ni="pelerin",Dr=!1,Wa=!1,pa.clear(),i.innerHTML=r1(),s1(i)}function r1(){return`
    <div class="page-wrap kozmetik-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitra kanadını çiz ya da hazır paftadan yükle — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${Y("user")} Karakterde görünüm</span>
            <span class="kz-ipucu" id="kz-sahne-ipucu">Sürükleyerek döndür</span>
          </div>
          <div class="kz-secim" id="kz-secim" role="group" aria-label="Önizlenecek kozmetik">
            <button class="seg-btn aktif" data-secim="pelerin" title="Yalnız pelerini göster">Pelerin</button>
            <button class="seg-btn" data-secim="kanat" title="Yalnız elitra kanadını göster">Elitra</button>
          </div>
          <canvas id="kz-sahne"></canvas>
          <div class="kz-cizim-arac" id="kz-cizim-arac" hidden>
            <button class="seg-btn aktif" id="kz-3d-kalem">${Y("brush")} Kalem</button>
            <button class="seg-btn" id="kz-3d-silgi">${Y("trash")} Silgi</button>
            <button class="seg-btn" id="kz-3d-oyuncu">${Y("user")} Oyuncuyu gizle</button>
            <button class="seg-btn" id="kz-3d-bitir">${Y("check")} Bitir</button>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Çizdikçe anında güncellenir. Oyun açıkken kaydetmek yeterli.</p>
        </aside>

        <div class="kz-izgara">
          <section class="kz-kart" id="kz-pelerin-kart">
            <div class="kz-kart-ust">
              <h3>${Y("shirt")} Pelerin</h3>
              <span class="kz-rozet" id="kz-pelerin-durum"></span>
            </div>
            <div class="kz-govde">
              <canvas class="kz-tuval" id="kz-pelerin-tuval" width="${10*Vn}" height="${16*Vn}"></canvas>
              <div class="kz-yan">
                <div class="kz-araclar" id="kz-pelerin-palet"></div>
                <div class="kz-renk-satir">
                  <label for="kz-pelerin-renk">Renk</label>
                  <input type="color" id="kz-pelerin-renk" value="#ff8a3d" />
                  <button class="btn" id="kz-pelerin-sil" title="Silgi (çizerek siler)">Silgi</button>
                  <button class="btn" id="kz-pelerin-temizle" title="Tümünü temizle">${Y("trash")} Temizle</button>
                </div>
                <div class="kz-renk-satir">
                  <button class="btn" id="kz-pelerin-3d" title="Pelerini doğrudan 3D model üzerinde boya">${Y("box")} 3D Çiz</button>
                </div>
              </div>
            </div>
            <div class="kz-alt">
              <label class="btn" for="kz-pelerin-dosya" title="Düz fotoğraf ya da hazır 64×32 pelerin paftası">${Y("image")} Fotoğraf / Pafta</label>
              <input type="file" id="kz-pelerin-dosya" accept="image/*" style="display:none" />
              <button class="btn primary" id="kz-pelerin-kaydet">${Y("check")} Kaydet</button>
              <button class="btn" id="kz-pelerin-kaldir">Kaldır</button>
              <span class="kz-ipucu">Sol tık: çiz · Sağ tık: sil</span>
            </div>
          </section>

          <section class="kz-kart" id="kz-kanat-kart">
            <div class="kz-kart-ust">
              <h3>${Y("sparkle")} Elitra Kanadı</h3>
              <span class="kz-rozet" id="kz-kanat-durum"></span>
            </div>
            <div class="kz-govde">
              <canvas class="kz-tuval" id="kz-kanat-tuval" width="${10*Vn}" height="${20*Vn}"></canvas>
              <div class="kz-yan">
                <div class="kz-araclar" id="kz-kanat-palet"></div>
                <div class="kz-renk-satir">
                  <label for="kz-kanat-renk">Renk</label>
                  <input type="color" id="kz-kanat-renk" value="#3d5afe" />
                  <button class="btn" id="kz-kanat-sil" title="Silgi (çizerek siler)">Silgi</button>
                  <button class="btn" id="kz-kanat-temizle" title="Tümünü temizle">${Y("trash")} Temizle</button>
                </div>
                <div class="kz-renk-satir">
                  <button class="btn" id="kz-kanat-3d" title="Kanatları doğrudan 3D model üzerinde boya">${Y("box")} 3D Çiz</button>
                </div>
              </div>
            </div>
            <div class="kz-alt">
              <label class="btn" for="kz-kanat-dosya" title="Düz fotoğraf ya da hazır 64×32 elitra paftası">${Y("image")} Fotoğraf / Pafta</label>
              <input type="file" id="kz-kanat-dosya" accept="image/*" style="display:none" />
              <button class="btn primary" id="kz-kanat-kaydet">${Y("check")} Kaydet</button>
              <button class="btn" id="kz-kanat-kaldir">Kaldır</button>
              <span class="kz-ipucu">Kanatlar oyunda ayna simetriktir</span>
            </div>
          </section>
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Aynı sunucudaki diğer YIKIMLient oyuncuları da senin pelerinini görür.</p>
    </div>`}async function s1(i){let e;try{e=await oe("cmd_kozmetik_oku")}catch(t){le(String(t),"err"),e={pelerin:null,kanat:null,pelerin_dosya:null,kanat_dosya:null}}Ds={g:10,y:16,ad:"Pelerin",pikseller:e.pelerin??hh(10*16),renk:"#ff8a3d"},Is={g:10,y:20,ad:"Kanat",pikseller:e.kanat??hh(10*20),renk:"#3d5afe"},l1(i),gh(i,Ds),gh(i,Is),sl(i),c1(i)}const hh=i=>Array.from({length:i},()=>"");function o1(i){return i==="pelerin"?Ds:Is}function l1(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=si();t.kur(e),(async()=>{try{const n=ki();if(!n||n.kind!=="microsoft")return;const r=(await oe("cmd_skin_hub",{id:n.id}))?.aktif;r?.dosya&&await t.skin({url:Wt(r.dosya),slim:!!r.slim})}catch{}})()}function ph(i){if(!Ps(i.pikseller))return i.ad==="Pelerin"?uh(i.pikseller):fh(i.pikseller);if(!Dr)return null;const e=i.ad==="Pelerin"?uh(i.pikseller):fh(i.pikseller),t=e.getContext("2d");return t&&(t.fillStyle="rgba(150, 152, 170, 0.22)",i.ad==="Pelerin"?(t.fillRect(1,1,10,16),t.fillRect(12,1,10,16)):(t.fillRect(24,2,10,20),t.fillRect(36,2,10,20))),e}function sl(i){const e=si(),t=ni==="pelerin"?Ds:null,n=ni==="kanat"?Is:null;e.pelerinTuval(t?ph(t):null),e.kanatTuval(n?ph(n):null),i.querySelectorAll("[data-secim]").forEach(a=>{a.classList.toggle("aktif",a.dataset.secim===ni)}),i.querySelector("#kz-pelerin-kart")?.classList.toggle("secili",ni==="pelerin"),i.querySelector("#kz-kanat-kart")?.classList.toggle("secili",ni==="kanat")}function mh(i,e,t){e&&t&&(ni=t),Dr=e,Wa=!1;const n=si();n.etkilesimKapali=e,i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const r=i.querySelector("#kz-cizim-arac");r&&(r.hidden=!e);const s=i.querySelector("#kz-sahne-ipucu");s&&(s.textContent=e?"Tıkla / sürükle: boya":"Sürükleyerek döndür");const o=i.querySelector("#kz-sahne-alt");o&&(o.textContent=e?"3D çizim açık — modelin üstüne boyuyorsun, 2D ızgara anında güncellenir.":"Çizdikçe anında güncellenir. Oyun açıkken kaydetmek yeterli."),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!Wa),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&Wa),sl(i)}function c1(i){const e=i.querySelector("#kz-sahne");if(!e)return;let t=!1;const n=r=>{const s=o1(ni);if(!s)return;const o=si().kozmetikNoktasi(r,ni);if(!o)return;const c=o.y*s.g+o.x,l=Wa?"":s.renk;s.pikseller[c]!==l&&(s.pikseller[c]=l,pa.get(s)?.())};e.addEventListener("contextmenu",r=>{Dr&&r.preventDefault()}),e.addEventListener("pointerdown",r=>{if(Dr&&!(r.pointerType==="mouse"&&r.button!==0&&r.button!==2)){t=r.button!==2;try{e.setPointerCapture(r.pointerId)}catch{}n(r)}}),e.addEventListener("pointermove",r=>{Dr&&t&&n(r)});const a=()=>{t=!1};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),i.querySelectorAll("[data-secim]").forEach(r=>{r.addEventListener("click",()=>{ni=r.dataset.secim??"pelerin",sl(i)})}),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{Wa=!1,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{Wa=!0,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const r=i.querySelector("#kz-3d-oyuncu"),s=r?.classList.toggle("aktif")??!1;si().oyuncuGoster(!s),r&&(r.innerHTML=`${Y("user")} ${s?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-bitir")?.addEventListener("click",()=>{si().oyuncuGoster(!0);const r=i.querySelector("#kz-3d-oyuncu");r&&(r.classList.remove("aktif"),r.innerHTML=`${Y("user")} Oyuncuyu gizle`),mh(i,!1)});for(const r of["pelerin","kanat"])i.querySelector(`#kz-${r}-3d`)?.addEventListener("click",()=>{mh(i,!0,r),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})})}function gh(i,e){const t=e.ad.toLowerCase(),n=i.querySelector(`#kz-${t}-tuval`);if(!n)return;d1(i,e);const a=i.querySelector(`#kz-${t}-durum`);a&&(a.textContent=Ps(e.pikseller)?"":"KAYITLI");const r=i.querySelector(`#kz-${t}-renk`);r&&(r.value=e.renk),_h(e,n),pa.set(e,()=>{_h(e,n);const u=i.querySelector(`#kz-${t}-durum`);u&&(u.textContent=Ps(e.pikseller)?"":"KAYITLI"),ni===(e.ad==="Pelerin"?"pelerin":"kanat")&&sl(i)});let s=!1,o=!1;const c=u=>{const f=n.getBoundingClientRect(),h=Math.floor((u.clientX-f.left)/f.width*e.g),m=Math.floor((u.clientY-f.top)/f.height*e.y);if(h<0||m<0||h>=e.g||m>=e.y)return;const _=m*e.g+h;e.pikseller[_]=o?"":e.renk,pa.get(e)?.()};n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("pointerdown",u=>{s=!0,o=u.button===2;try{n.setPointerCapture(u.pointerId)}catch{}c(u)}),n.addEventListener("pointermove",u=>{s&&c(u)});const l=()=>{s=!1};n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),r?.addEventListener("input",()=>{e.renk=r.value}),i.querySelector(`#kz-${t}-sil`)?.addEventListener("click",()=>{e.renk=""}),i.querySelector(`#kz-${t}-temizle`)?.addEventListener("click",()=>{for(let u=0;u<e.pikseller.length;u++)e.pikseller[u]="";pa.get(e)?.()}),i.querySelector(`#kz-${t}-kaydet`)?.addEventListener("click",()=>void vh(i,e)),i.querySelector(`#kz-${t}-kaldir`)?.addEventListener("click",()=>{for(let u=0;u<e.pikseller.length;u++)e.pikseller[u]="";pa.get(e)?.(),vh(i,e)});const d=i.querySelector(`#kz-${t}-dosya`);d?.addEventListener("change",()=>{const u=d.files?.[0];u&&f1(i,e,n,u),d.value=""})}function d1(i,e){const t=i.querySelector(`#kz-${e.ad.toLowerCase()}-palet`);if(!t)return;t.innerHTML=n1.map(a=>`<button class="kz-renk" data-renk="${a}" style="background:${a}" title="${a}"></button>`).join("");const n=i.querySelector(`#kz-${e.ad.toLowerCase()}-renk`);t.querySelectorAll(".kz-renk").forEach(a=>{a.addEventListener("click",()=>{e.renk=a.dataset.renk??"#ffffff",n&&(n.value=e.renk),t.querySelectorAll(".kz-renk").forEach(r=>r.classList.remove("aktif")),a.classList.add("aktif")})})}function _h(i,e){const t=e.getContext("2d");if(t){t.imageSmoothingEnabled=!1,t.clearRect(0,0,e.width,e.height);for(let n=0;n<i.y;n++)for(let a=0;a<i.g;a++)t.fillStyle=(a+n)%2===0?"#17171d":"#1f1f27",t.fillRect(a*Vn,n*Vn,Vn,Vn);for(let n=0;n<i.y;n++)for(let a=0;a<i.g;a++){const r=i.pikseller[n*i.g+a];r&&(t.fillStyle=r,t.fillRect(a*Vn,n*Vn,Vn,Vn))}}}const Ir=i=>i.toString(16).padStart(2,"0");function u1(i,e){const t=e.ad==="Pelerin"?ai.x:24,n=e.ad==="Pelerin"?ai.y:2,a=i.getImageData(t,n,e.g,e.y).data,r=[];for(let s=0;s<e.g*e.y;s++){const o=a[s*4+3];r.push(o<24?"":`#${Ir(a[s*4])}${Ir(a[s*4+1])}${Ir(a[s*4+2])}`)}return r}async function f1(i,e,t,n){try{const a=URL.createObjectURL(n),r=await new Promise((p,g)=>{const b=new Image;b.onload=()=>p(b),b.onerror=()=>g(new Error("görsel okunamadı")),b.src=a});URL.revokeObjectURL(a);const s=r.width/Math.max(1,r.height);if(Math.abs(s-2)<.02&&r.height>=32){const p=document.createElement("canvas");p.width=64,p.height=32;const g=p.getContext("2d",{willReadFrequently:!0});if(!g)throw new Error("tuval yok");g.imageSmoothingEnabled=!1,g.drawImage(r,0,0,64,32);const b=u1(g,e);if(Ps(b))throw new Error("paftada tasarım paneli boş — 64×32 pelerin şablonu bekleniyordu");for(let T=0;T<b.length;T++)e.pikseller[T]=b[T];pa.get(e)?.(),le("Pafta okundu — tasarım ızgaraya alındı.");return}const c=e.g/e.y;let l=r.width,d=l/c;d>r.height&&(d=r.height,l=d*c);const u=(r.width-l)/2,f=(r.height-d)/2,h=document.createElement("canvas");h.width=e.g,h.height=e.y;const m=h.getContext("2d",{willReadFrequently:!0});if(!m)throw new Error("tuval yok");m.imageSmoothingEnabled=!1,m.drawImage(r,u,f,l,d,0,0,e.g,e.y);const _=m.getImageData(0,0,e.g,e.y).data;for(let p=0;p<e.g*e.y;p++){if(_[p*4+3]<24){e.pikseller[p]="";continue}e.pikseller[p]=`#${Ir(_[p*4])}${Ir(_[p*4+1])}${Ir(_[p*4+2])}`}pa.get(e)?.(),le("Fotoğraf indirgendi — istersen fırçayla düzeltebilirsin.")}catch(a){le(String(a),"err")}}async function vh(i,e){const t=!Ps(e.pikseller);try{const n=await oe("cmd_kozmetik_kaydet",{pelerin:e.ad==="Pelerin"?e.pikseller:null,kanat:e.ad==="Kanat"?e.pikseller:null}),a=i.querySelector(`#kz-${e.ad.toLowerCase()}-durum`);if(a&&(a.textContent=t?"KAYITLI":""),!t){le(`${e.ad} kaldırıldı.`);return}n.yuklendi?le(`${e.ad} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):le(`${e.ad} kaydedildi (yerel). Sunucu: ${i1(n.hata||"ulaşılamadı")}`)}catch(n){le(String(n),"err")}}function h1(){Ni.home=sM,Ni.instances=fM,Ni.explore=xM,Ni.news=wM,Ni.settings=ls,Ni.skins=cu,Ni.kozmetik=a1}let Na=null;const Ur=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function p1(){Na||(Na=document.createElement("div"),Na.className="drop-veil",Na.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(Na))}function yh(){Na?.remove(),Na=null}async function m1(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await oe("cmd_route_dropped",{path:i})}catch(n){le(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Kt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${Ur(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(s=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),s())},150)}),!a){le("Kurulum iptal edildi");return}le("Paket indiriliyor — süreç panelinden takip edebilirsin");const r=await oe("cmd_import_pack_file",{path:i,name:null});await rn(),at("instances"),le(`${r.name} kuruldu ✓`)}else if(t==="jar"){const n=await wd(`Mod eklenecek kurulum: <b>${Ur(e)}</b>`);if(!n)return;await oe("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";le(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await wd(`Dünya yüklenecek kurulum: <b>${Ur(e)}</b>`);if(!n)return;await oe("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),le(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await oe("cmd_import_emote_dosyasi",{path:i});le(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await g1(i,e):le(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){le(`Kurulamadı: ${n}`,"err")}}async function g1(i,e){const t=Kt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${Ur(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(r=>r.addEventListener("click",()=>{n=r.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(r=>{const s=setInterval(()=>{document.body.contains(t.root)||(clearInterval(s),r())},150)}),!n)return;const a=await wd(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await oe("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),le(`Eklendi: ${e}`))}function wd(i){return new Promise(e=>{const t=ce.instances||[];if(!t.length){le("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Kt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(r=>`
          <button class="btn ghost" data-id="${r.id}">
            <span style="font-size:18px">${r.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${Ur(String(r.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${Ur(String(r.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(r=>{r.addEventListener("click",()=>{const s=t.find(o=>o.id===r.dataset.id)||null;n.close(),e(s)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function _1(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")p1();else if(n==="drop"){yh();const a=t.paths||[];for(const r of a)await m1(r)}else yh()})}catch{}}const Ro=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let fc=null;function v1(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,r=e.offsetHeight,s=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-r-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let u=i.top+i.height/2-r/2;u<14&&(u=i.bottom+16),e.style.left=`${s(d)}px`,e.style.top=`${o(u)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-r)/2)}px`,e.style.transform="none"}function xh(i,e){const t=Ro[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");at(t.page);const r=a.querySelector(".tc-step");r.innerHTML=Ro.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const s=a.querySelector(".tc-next");s.textContent=e===Ro.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",v1(o,a),qi.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function y1(){if(fc||ce.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),fc=i;let e=0;const t=async()=>{i.remove(),fc=null,document.removeEventListener("keydown",a),at("home");try{ce.config={...ce.config,guided_tour_done:!0},await oe("cmd_save_settings",{config:ce.config}),await rn()}catch{}},n=()=>{if(e+=1,e>=Ro.length){t();return}xh(i,e)},a=r=>{r.key==="Enter"||r.key==="ArrowRight"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),xh(i,e)}let Tr=null,Co=null;function yr(){Co!==null&&(clearInterval(Co),Co=null)}function bh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function Td(){try{ce.config={...ce.config,onboarding_done:!0},await oe("cmd_save_settings",{config:ce.config}),await rn()}catch{}}function hc(i){yr(),Tr?.remove(),Tr=null,Td(),at("home")}function x1(){if(Tr)return!0;if(ce.config?.onboarding_done)return!1;if(!(ce.accounts.length===0&&ce.instances.length===0))return Td(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),Tr=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3].map(f=>`<i class="${f<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
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
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>hc()),t.querySelector("#ob-next")?.addEventListener("click",s)}function s(){yr(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{yr(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>hc());const u=t.querySelector("#ob-acc-ok"),f=t.querySelector("#ob-next"),h=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),_=t.querySelector("#ob-ms"),p=t.querySelector("#ob-off-go"),g=t.querySelector("#ob-off-ad"),b=x=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${x}`,f.disabled=!1,yr()};ce.accounts.length?b(ce.accounts[0]?.name??""):f.disabled=!0,_.addEventListener("click",async()=>{if(!_.disabled){_.disabled=!0,h.style.display="block",h.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const x=await oe("cmd_ms_login_begin");await rn(),h.textContent="",h.style.display="none",b(x?.name??ce.accounts[0]?.name??"")}catch(x){h.textContent=String(x),_.disabled=!1}}});const T=async()=>{if(p.disabled)return;const x=g.value.trim();if(x.length<3){m.textContent="İsim en az 3 karakter olmalı.",g.focus();return}m.textContent="",p.disabled=!0,p.textContent="…";try{await oe("cmd_add_offline_account",{name:x}),await rn(),b(x),p.textContent="✓"}catch(S){m.textContent=String(S),p.disabled=!1,p.textContent="Giriş"}};p.addEventListener("click",()=>void T()),g.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T())}),Co=setInterval(()=>{ce.accounts.length&&b(ce.accounts[0]?.name??"")},600),f.addEventListener("click",()=>{yr(),o()})}async function o(){let u=[];try{u=(await oe("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(h=>`<option value="${bh(h)}">${bh(h)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",s);let f=null;t.querySelector("#ob-create")?.addEventListener("click",async h=>{const m=h.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const _=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",p=t.querySelector("#ob-version").value;try{f=await oe("cmd_create_instance",{instance:{name:_,mc_version:p,mod_loader:"fabric",ram_mb:ce.config?.default_ram_mb||4096,java_preset_id:ce.config?.default_java_preset||"balanced",standard_mods:!0}});const g=t.querySelector("#ob-inst-ok");g.style.display="flex",g.textContent=`✓ Kurulum hazır: ${f.name}`,m.textContent="✓ Oluşturuldu",await rn(),setTimeout(()=>c(),700)}catch(g){d(`Kurulum oluşturulamadı: ${g}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{l()})}function c(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>hc())}return r(),!0;function l(){yr(),Tr?.remove(),Tr=null,Td(),at("explore","kind:modpack")}function d(u){yt(()=>Promise.resolve().then(()=>St),void 0).then(f=>f.toast(u,"err"))}}const Za=Math.PI*2;function Yo(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function b1(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function ol(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Za),i.fill()}function Sh(i,e){const t=e?b1(Yo(),.88):Yo(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Za});return{base:e?24:30,spawn:n,step:(a,r,s)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*r*(1+i*r),a.y+=a.vy*r,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(s))},draw:ol}}function pc(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Za});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:ol}}function S1(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Za});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:ol}}function M1(){const i=Yo(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Za});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Za),t.stroke()}}}function E1(){const i=Yo(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function ho(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Za}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:ol}}function w1(i){switch(i){case"pano":return Sh(.5,!1);case"sahne":return ho("rgba(255,171,77,0.75)");case"sokum":return Sh(.9,!0);case"afis":return pc("rgba(63,50,38,0.5)");case"standart":return ho("rgba(147,168,255,0.5)");case"sira":return ho("rgba(163,230,53,0.85)");case"rihtim":return M1();case"oda":return pc("rgba(224,48,30,0.6)");case"kumas":return pc("rgba(138,122,92,0.5)");case"perde":return ho("rgba(212,175,55,0.8)");case"buz":return S1();case"skala":return E1();default:return null}}let Rn=null,gi=null,la=null,xr=[],cn=0,ms=0,Cm=1,Lm=33,ll=!1;function fu(){return Math.min(window.devicePixelRatio||1,1.5)}function mc(){cn&&cancelAnimationFrame(cn),cn=0,la=null,xr=[],Rn&&(Rn.remove(),Rn=null,gi=null)}function Ko(i){if(cn=0,!gi||!Rn||!la||ll||document.hidden)return;if(i-ms<Lm){cn=requestAnimationFrame(Ko);return}const e=Math.min((i-ms)/1e3,.06);ms=i,cn=requestAnimationFrame(Ko);const t=fu();gi.setTransform(t,0,0,t,0,0),gi.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(la.base*Cm));for(;xr.length<a;){const r=la.spawn(n);r.life=Math.random()*r.max,xr.push(r)}for(;xr.length>a;)xr.pop();for(const r of xr)r.life+=e,la.step(r,e,n),gi.globalAlpha=r.a,la.draw(gi,r);gi.globalAlpha=1}function Pm(){la&&gi&&!cn&&!document.hidden&&!ll&&(ms=performance.now(),cn=requestAnimationFrame(Ko))}document.addEventListener("visibilitychange",()=>{document.hidden?(cn&&cancelAnimationFrame(cn),cn=0):Pm()});window.addEventListener("blur",()=>{ll=!0,cn&&cancelAnimationFrame(cn),cn=0});window.addEventListener("focus",()=>{ll=!1,Pm()});window.addEventListener("resize",()=>{if(!Rn||!gi)return;const i=fu();Rn.width=Math.round(innerWidth*i),Rn.height=Math.round(innerHeight*i)});function T1(){const i=String(ce.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){mc();return}const n=w1(e);if(!n){mc();return}Cm={low:.45,mid:.9,high:1.6}[i]??1,Lm=1e3/({low:25,mid:30,high:40}[i]??30),mc(),la=n;const s=fu();Rn=document.createElement("canvas"),Rn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Rn.width=Math.round(innerWidth*s),Rn.height=Math.round(innerHeight*s),document.body.appendChild(Rn),gi=Rn.getContext("2d"),ms=performance.now(),cn=requestAnimationFrame(Ko)}function A1(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function k1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function R1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function C1(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const L1={yikim:{build:k1,spot:"3 2"},hedef:{build:R1,spot:"12 12"},nokta:{build:C1,spot:"8 8"}};function P1(){const i=String(ce.config?.cursor_style||"standart"),e=document.documentElement,t=L1[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(A1());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const it=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,D1=`<svg ${it}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,I1=`<svg ${it}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,U1=`<svg ${it}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,N1=`<svg ${it}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,F1=`<svg ${it}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,z1=`<svg ${it}><path d="M12 5v14M5 12h14"/></svg>`,O1=`<svg ${it}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,B1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',H1=`<svg ${it}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,G1=`<svg ${it}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,V1=`<svg ${it}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,$1=`<svg ${it}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,W1=`<svg ${it}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,q1=`<svg ${it}><path d="m4.5 12.5 5 5 10-11"/></svg>`,X1=`<svg ${it}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,Y1=`<svg ${it}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,K1=`<svg ${it}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,Z1=`<svg ${it}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,J1=`<svg ${it}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,Q1=`<svg ${it}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,j1=`<svg ${it}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,eE=`<svg ${it}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,tE=`<svg ${it}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,nE=`<svg ${it}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,iE=`<svg ${it}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,aE=`<svg ${it}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,rE=`<svg ${it}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,sE=`<svg ${it}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,oE=`<svg ${it}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,lE=`<svg ${it}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,cE=`<svg ${it}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,dE=`<svg ${it}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,uE=`<svg ${it}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,fE=`<svg ${it}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,hE=`<svg ${it}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,pE=`<svg ${it}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,Zo={home:D1,grid:I1,compass:U1,news:N1,gear:F1,plus:z1,search:O1,play:B1,image:H1,folder:G1,trash:V1,copy:$1,back:W1,check:q1,user:X1,puzzle:Y1,box:K1,cpu:Z1,args:J1,term:Q1,chart:j1,dl:eE,mug:tE,globe:nE,sparkle:iE,file:aE,info:rE,clock:sE,stop:oE,shirt:lE,brush:cE,bucket:dE,picker:uE,undo:fE,redo:hE,lock:pE};function Y(i,e=""){const t=Zo[i]||Zo.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const po='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',mo=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,ns={min:`<svg ${po}>${mo('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${po}>${mo('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${po}>${mo('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${po}>${mo('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},Nr=window.__TAURI__,mE=Nr.core,gE=Nr.event,oe=(i,e={})=>mE.invoke(i,e),Wt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),li=(i,e)=>gE.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=Zo[t]||Zo.info,i.replaceWith(n)};const cl=i=>oe("plugin:opener|open_url",{url:i}),Dm=i=>oe("plugin:opener|open_path",{path:i}),ce={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function rn(i=!1){const e=await oe("cmd_get_state");ce.config=e.config,ce.accounts=e.accounts,ce.instances=e.instances,ce.featured_versions=e.featured_versions,ce.curseforge=e.curseforge,ce.sys=e.sys,_i(),fl(),i&&at(hu)}const Mh=fl;function _i(){if(!ce.config)return;const i=ce.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(ce.config.tema_ozel||{})[n]||{},r=n==="sahne"?ce.config.custom_accent:"",s=String(a.accent||r||"").trim();e.setAttribute("data-world",n),s&&/^#[0-9a-fA-F]{3,8}$/.test(s)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",s)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),T1(),P1()}const _E=_i;function ki(){return ce.accounts.find(i=>i.id===ce.config?.last_selected_account)||ce.accounts[0]||null}function dl(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function Im(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function ul(i){const e=Im(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function vE(){const i=document.getElementById("pill-ram");if(!i||!ce.sys)return;const t=ce.instances[0]?.ram_mb||ce.config?.default_ram_mb||4096,n=ce.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),r=i.querySelector("#ram-pill-val"),s=`${(t/1024).toFixed(1)} GB`;r?u_(r,s):i.innerHTML=`RAM <b id="ram-pill-val">${s}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const vi=i=>document.querySelector(i);function dn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Bs(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function Fr(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function yE(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function gs(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ke={activeId:null};function le(i,e="ok"){const t=dn(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const is=[];function Kt(i){const e=dn(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),is.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const r=is.indexOf(e);r>=0&&is.splice(r,1),e.remove()},a=r=>{r.key==="Escape"&&is[is.length-1]===e&&(r.preventDefault(),r.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",r=>{r.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Ni={},Oi={};let Eh="home",hu="home";function at(i,e){const t=vi("#content");t&&(hu=i,Eh=i,Oi.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===Eh)}),f_(t,()=>{t.innerHTML="";const n=Ni[i];n&&n(t),Sp(t)}))}const xE=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function Um(){const i=vi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${ns.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${ns.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${ns.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${xE.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${Y(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=Nr.window.getCurrentWindow();vi("#tb-min")?.addEventListener("click",()=>t.minimize()),vi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ke.activeId){t.minimize(),le("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};vi("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(a=>{Ke.activeId&&(a?.preventDefault?.(),t.minimize(),le("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=vi("#tb-max"),r=o=>{a&&(a.innerHTML=o?ns.restore:ns.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},s=()=>{t.isMaximized().then(r).catch(()=>{})};typeof t.onResized=="function"?t.onResized(s):Nr.event?.listen&&Nr.event.listen("tauri://resize",s),s()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>at(a.dataset.page))}),fl(),vi("#rail-account")?.addEventListener("click",()=>{ce.accounts.length?at("settings"):bn()}),Wd(Array.from(document.querySelectorAll(".rail-item")))}function fl(){const i=vi("#rail-account");if(!i)return;const e=ki();if(!e){i.innerHTML=`<span class="ra-head ph">${Y("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${dl(e)}" draggable="false" ${ul(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}let go=null;function bn(i){if(go){go.root.querySelector("#off-name")?.focus();return}const e=Kt(`
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
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,go=null,e.close())};go={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const r=t.querySelector("#off-name").value.trim();if(r.length<3)return le("İsim en az 3 karakter olmalı","err");try{await oe("cmd_add_offline_account",{name:r}),await rn(),Mh(),le(`Hoş geldin, ${r}!`),a(),i?.()}catch(s){le(String(s),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const r=t.querySelector("#ms-status"),s=t.querySelector("#ms-go");s.disabled=!0,r.style.display="block",r.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await oe("cmd_ms_login_begin");await rn(),Mh(),le(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){r.textContent=String(o),s.disabled=!1}})}let _o=0;async function bE(i){if(!ce.accounts.length){bn();return}if(Ke.activeId){le("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++_o;Ke.activeId=i;const{root:t,close:n}=Kt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),r=t.querySelector("#lp-stage"),s=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await li("launch-progress",h=>{if(e!==_o)return;const m=h.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,r.textContent=SE(m.stage),s.textContent=m.detail||""}),l=await li("game-log",h=>{if(e!==_o)return;o.style.display="block";const m=document.createElement("div");m.textContent=h.payload,o.appendChild(m),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await li("game-exit",h=>{if(e!==_o)return;Ke.activeId=null;const m=h.payload?.exit_code??h.payload?.code??-1;m===0?(r.textContent="Oyun kapatıldı",setTimeout(n,1200)):(r.textContent=`Oyun hata ile kapandı (kod ${m})`,s.textContent="Canlı logdan detayları görebilirsin.")}),u=()=>{c(),l(),d()},f=new MutationObserver(()=>{document.body.contains(t)||(u(),f.disconnect())});f.observe(document.body,{childList:!0});try{await oe("cmd_launch_instance",{instanceId:i}),r.textContent="Oyun çalışıyor",s.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{u(),n()},1500),await rn(!0)}catch(h){Ke.activeId=null,r.textContent="Başlatılamadı",s.textContent=String(h),s.style.color="var(--danger)"}}function SE(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}li("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});li("game-started",i=>{Ke.activeId=i.payload,rn(!0)});li("game-exit",async()=>{window.__yikimRestart||(Ke.activeId=null,rn(!0))});li("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&le(`Kuruldu: ${e.filename}`),e.phase==="error"&&le(`Hata: ${e.filename}`,"err")});let wn=null,wh;li("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!wn||!document.body.contains(wn))&&(wn=document.createElement("div"),wn.className="sm-panel",wn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(wn)),clearTimeout(wh);const t=wn.querySelector("#sm-count"),n=wn.querySelector("#sm-fill"),a=wn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const r=document.createElement("div");for(r.className="sm-row done",r.textContent=`✓ ${e.current}`,a.appendChild(r);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(wn.querySelector(".sm-title").textContent="Standart modlar hazır",wh=setTimeout(()=>{wn?.remove(),wn=null},4e3))});li("mod-install-progress",i=>{i.payload.phase});async function Nm(){try{await rn(),h1(),Um(),at("home"),_1(),x1()||y1(),ME()}catch(i){EE(i)}}async function ME(){try{const e=await(await yt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=Kt(`
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
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const a=t.querySelector("#upd-go");a.disabled=!0,a.textContent="İndiriliyor…";try{let r=0,s=0;await e.download(o=>{switch(o.event){case"Started":s=o.data.contentLength??0;break;case"Progress":r+=o.data.chunkLength;break;case"Finished":a.textContent="Kuruluyor…";break}s>0&&(a.textContent=`İndiriliyor… %${Math.round(r/s*100)}`)}),await e.install(),le("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{Nr.process.exit(0)}catch{window.location.reload()}},900)}catch(r){a.disabled=!1,a.textContent="İndir ve Kur",le(`Güncelleme başarısız: ${r}`,"err")}})}catch{}}function EE(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function wE(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};setTimeout(()=>void t(),12e3),setInterval(()=>void t(),6e4)})()}Nm();wE();const St=Object.freeze(Object.defineProperty({__proto__:null,$:vi,applyTheme:_E,applyWorld:_i,boot:Nm,currentAccount:ki,get currentPage(){return hu},el:dn,enterStage:Sp,fileSrc:Wt,fmtBytes:Bs,fmtDuration:Fr,fmtSpeed:yE,headAttrs:ul,headFallbackUrl:Im,headUrl:dl,icon:Y,invoke:oe,lamp:gs,launch:Ke,launchInstance:bE,listen:li,nav:Oi,navigate:at,openExternal:cl,openLoginModal:bn,openModal:Kt,openPath:Dm,pages:Ni,refreshState:rn,renderAccountPill:fl,setupShell:Um,state:ce,switchPress:qd,toast:le,updateRamPill:vE},Symbol.toStringTag,{value:"Module"}));
