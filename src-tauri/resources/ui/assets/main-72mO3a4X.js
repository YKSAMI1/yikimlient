import"./theme-D0Q7o3AX.js";const _p="modulepreload",gp=function(i){return"/"+i},Ad={},mt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(t.map(l=>{if(l=gp(l),l in Ad)return;Ad[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":_p,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function vi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function oh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hs={duration:.5,overwrite:!1,delay:0},Ic,Bt,gt,In=1e8,dt=1/In,bl=Math.PI*2,vp=bl/4,xp=0,lh=Math.sqrt,yp=Math.cos,Sp=Math.sin,Ot=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Uc=function(e){return typeof e>"u"},oi=function(e){return typeof e=="object"},an=function(e){return e!==!1},kc=function(){return typeof window<"u"},da=function(e){return Tt(e)||Ot(e)},ch=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,Mp=/random\([^)]+\)/g,bp=/,\s*/g,Rd=/(?:-?\.?\d|\.)+/gi,dh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Co=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uh=/[+-]=-?[.\d]+/,Ep=/[^,'"\[\]\s]+/gi,Tp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Jn,El,Nc,Tn={},Za={},hh,fh=function(e){return(Za=ds(e,Tn))&&un},Fc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vs=function(e,t){return!t&&console.warn(e)},ph=function(e,t){return e&&(Tn[e]=t)&&Za&&(Za[e]=t)||Tn},Gs=function(){return 0},wp={suppressEvents:!0,isStart:!0,kill:!1},Oa={suppressEvents:!0,kill:!1},Ap={suppressEvents:!0},Oc={},Ki=[],Tl={},mh,_n={},Lo={},Cd=30,Ba=[],Bc="",zc=function(e){var t=e[0],n,r;if(oi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ba.length;r--&&!Ba[r].targetTest(t););n=Ba[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Fh(e[r],n)))||e.splice(r,1);return e},vr=function(e){return e._gsap||zc(Un(e))[0]._gsap},_h=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Uc(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},ts=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Rp=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ja=function(){var e=Ki.length,t=Ki.slice(0),n,r;for(Tl={},Ki.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hc=function(e){return!!(e._initted||e._startAt||e.add)},gh=function(e,t,n,r){Ki.length&&!Bt&&Ja(),e.render(t,n,!!(Bt&&t<0&&Hc(e))),Ki.length&&!Bt&&Ja()},vh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ep).length<2?t:Ot(e)?e.trim():e},xh=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cp=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ds=function(e,t){for(var n in t)e[n]=t[n];return e},Ld=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=oi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Qa=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Is=function(e){var t=e.parent||yt,n=e.keyframes?Cp(Yt(e.keyframes)):wn;if(an(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Lp=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},yh=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},fo=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wl=function(e,t,n,r){return e._startAt&&(Bt?e._startAt.revert(Oa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Dp=function i(e){return!e||e._ts&&i(e.parent)},Pd=function(e){return e._repeat?us(e._tTime,e=e.duration()+e._rDelay)*e:0},us=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},po=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},mo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),po(e),n._dirty||xr(n,e)),e},Sh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ja(e.rawTime(),t),(!t._dur||na(0,t.totalDuration(),n)-t._tTime>dt)&&t.render(n,!0)),xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-dt}},ti=function(e,t,n,r){return t.parent&&Ji(t),t._start=xt((Ri(n)?n:n||e!==yt?Ln(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yh(e,t,"_first","_last",e._sort?"_start":0),Al(t)||(e._recent=t),r||Sh(e,t),e._ts<0&&mo(e,e._tTime),e},Mh=function(e,t){return(Tn.ScrollTrigger||Fc("scrollTrigger",t))&&Tn.ScrollTrigger.create(t,e)},bh=function(e,t,n,r,s){if(Gc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mh!==yn.frame)return Ki.push(e),e._lazy=[s,r],1},Ip=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Up=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Ip(e)&&!(!e._initted&&Al(e))||(e._ts<0||e._dp._ts<0)&&!Al(e))?0:1,o=e._rDelay,l=0,c,d,h;if(o&&e._repeat&&(l=na(0,e._tDur,t),d=us(l,o),e._yoyo&&d&1&&(a=1-a),d!==us(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||r||e._zTime===dt||!t&&e._zTime){if(!e._initted&&bh(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?dt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&wl(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ji(e,1),!n&&!Bt&&(Mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kp=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},hs=function(e,t,n,r){var s=e._repeat,a=xt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:xt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&mo(e,e._tTime=e._tDur*o),e.parent&&po(e),n||xr(e.parent,e),e},Dd=function(e){return e instanceof sn?xr(e):hs(e,e._dur)},Np={_start:0,endTime:Gs,totalDuration:Gs},Ln=function i(e,t,n){var r=e.labels,s=e._recent||Np,a=e.duration()>=In?s.endTime(!1):e._dur,o,l,c;return Ot(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Us=function(e,t,n){var r=Ri(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;a.immediateRender=an(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},tr=function(e,t){return e||e===0?t(e):t},na=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ot(e)||!(t=Tp.exec(e))?"":t[1]},Fp=function(e,t,n){return tr(n,function(r){return na(e,t,r)})},Rl=[].slice,Eh=function(e,t){return e&&oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&oi(e[0]))&&!e.nodeType&&e!==Jn},Op=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ot(r)&&!t||Eh(r,1)?(s=n).push.apply(s,Un(r)):n.push(r)})||n},Un=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Ot(e)&&!n&&(El||!fs())?Rl.call((t||Nc).querySelectorAll(e),0):Yt(e)?Op(e,n):Eh(e)?Rl.call(e,0):e?[e]:[]},Cl=function(e){return e=Un(e)[0]||Vs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Un(t,n.querySelectorAll?n:n===e?Vs("Invalid scope")||Nc.createElement("div"):e)}},Th=function(e){return e.sort(function(){return .5-Math.random()})},wh=function(e){if(Tt(e))return e;var t=oi(e)?e:{each:e},n=yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,d=r,h=r;return Ot(r)?d=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],h=r[1]),function(u,f,_){var g=(_||t).length,m=a[g],p,S,w,y,b,T,A,x,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,In])[1],!E){for(A=-In;A<(A=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=a[g]=[],p=l?Math.min(E,g)*d-.5:r%E,S=E===In?0:l?g*h/E-.5:r/E|0,A=0,x=In,T=0;T<g;T++)w=T%E-p,y=S-(T/E|0),m[T]=b=c?Math.abs(c==="y"?y:w):lh(w*w+y*y),b>A&&(A=b),b<x&&(x=b);r==="random"&&Th(m),m.max=A-x,m.min=x,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Xt(t.amount||t.each)||0,n=n&&g<0?Jp(n):n}return g=(m[u]-m.min)/m.max||0,xt(m.b+(n?n(g):g)*m.v)+m.u}},Ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ri(n)?0:Xt(n))}},Ah=function(e,t){var n=Yt(e),r,s;return!n&&oi(e)&&(r=n=e.radius||In,e.values?(e=Un(e.values),(s=!Ri(e[0]))&&(r*=r)):e=Ll(e.increment)),tr(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=In,d=0,h=e.length,u,f;h--;)s?(u=e[h].x-o,f=e[h].y-l,u=u*u+f*f):u=Math.abs(e[h]-o),u<c&&(c=u,d=h);return d=!r||c<=r?e[d]:a,s||d===a||Ri(a)?d:d+Xt(a)}:Ll(e))},Rh=function(e,t,n,r){return tr(Yt(e)?!t:n===!0?!!(n=0):!r,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Bp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},zp=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},Hp=function(e,t,n){return Lh(e,t,0,1,n)},Ch=function(e,t,n){return tr(n,function(r){return e[~~t(r)]})},Vp=function i(e,t,n){var r=t-e;return Yt(e)?Ch(e,i(0,e.length),t):tr(n,function(s){return(r+(s-e)%r)%r+e})},Gp=function i(e,t,n){var r=t-e,s=r*2;return Yt(e)?Ch(e,i(0,e.length-1),t):tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ws=function(e){return e.replace(Mp,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(bp);return Rh(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Lh=function(e,t,n,r,s){var a=t-e,o=r-n;return tr(s,function(l){return n+((l-e)/a*o||0)})},Wp=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ot(e),o={},l,c,d,h,u;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(d=[],h=e.length,u=h-2,c=1;c<h;c++)d.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(u,~~_);return d[g](_-g)},n=t}else r||(e=ds(Yt(e)?[]:{},e));if(!d){for(l in t)Vc.call(o,e,l,"get",t[l]);s=function(_){return Xc(_,o)||(a?e.p:e)}}}return tr(n,s)},Id=function(e,t,n){var r=e.labels,s=In,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Mn=function(e,t,n){var r=e.vars,s=r[t],a=gt,o=e._ctx,l,c,d;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ki.length&&Ja(),o&&(gt=o),d=l?s.apply(c,l):s.call(c),gt=a,d},Cs=function(e){return Ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&Mn(e,"onInterrupt"),e},Jr,Ph=[],Dh=function(e){if(e)if(e=!e.name&&e.default||e,kc()||e.headless){var t=e.name,n=Tt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Gs,render:Xc,add:Vc,kill:om,modifier:am,rawVars:0},a={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(fs(),e!==r){if(_n[t])return;wn(r,wn(Qa(e,s),a)),ds(r.prototype,ds(s,Qa(e,a))),_n[r.prop=t]=r,e.targetTest&&(Ba.push(r),Oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ph(t,r),e.register&&e.register(un,r,ln)}else Ph.push(e)},ct=255,Ls={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Po=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},Ih=function(e,t,n){var r=e?Ri(e)?[e>>16,e>>8&ct,e&ct]:0:Ls.black,s,a,o,l,c,d,h,u,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ls[e])r=Ls[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Rd),!t)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(c+1):d+c-d*c,s=d*2-a,r.length>3&&(r[3]*=1),r[0]=Po(l+1/3,s,a),r[1]=Po(l,s,a),r[2]=Po(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(dh),n&&r.length<4&&(r[3]=1),r}else r=e.match(Rd)||Ls.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ct,a=r[1]/ct,o=r[2]/ct,h=Math.max(s,a,o),u=Math.min(s,a,o),d=(h+u)/2,h===u?l=c=0:(f=h-u,c=d>.5?f/(2-h-u):f/(h+u),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},Uh=function(e){var t=[],n=[],r=-1;return e.split(Zi).forEach(function(s){var a=s.match(Zr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Ud=function(e,t,n){var r="",s=(e+r).match(Zi),a=t?"hsla(":"rgba(",o=0,l,c,d,h;if(!s)return e;if(s=s.map(function(u){return(u=Ih(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Uh(e),l=n.c,l.join(r)!==d.c.join(r)))for(c=e.replace(Zi,"1").split(Zr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!c)for(c=e.split(Zi),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Zi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ls)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),$p=/hsl[a]?\(/,kh=function(e){var t=e.join(" "),n;if(Zi.lastIndex=0,Zi.test(t))return n=$p.test(t),e[1]=Ud(e[1],n),e[0]=Ud(e[0],n,Uh(e[1])),!0},$s,yn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,d,h,u,f,_=function g(m){var p=i()-r,S=m===!0,w,y,b,T;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,w=b-a,(w>0||S)&&(T=++h.frame,u=b-h.time*1e3,h.time=b=b/1e3,a+=w+(w>=s?4:s-w),y=1),S||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](b,u,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){hh&&(!El&&kc()&&(Jn=El=window,Nc=Jn.document||{},Tn.gsap=un,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(un.version),fh(Za||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),Ph.forEach(Dh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=d||function(m){return setTimeout(m,a-h.time*1e3+1|0)},$s=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),$s=0,c=Gs},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,S){var w=p?function(y,b,T,A){m(y,b,T,A),h.remove(w)}:m;return h.remove(m),o[S?"unshift":"push"](w),fs(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),fs=function(){return!$s&&yn.wake()},Ye={},Xp=/^[\d.\-M][\d.\-,\s]/,qp=/["']/g,Yp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(qp,"").trim():+c,r=l.substr(o+1).trim();return t},Kp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Zp=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Yp(t[1])]:Kp(e).split(",").map(vh)):Ye._CE&&Xp.test(e)?Ye._CE("",e):n},Jp=function(e){return function(t){return 1-e(1-t)}},yr=function(e,t){return e&&(Tt(e)?e:Ye[e]||Zp(e))||t},wr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return on(e,function(o){Ye[o]=Tn[o]=s,Ye[a=o.toLowerCase()]=n;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},Nh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Do=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/bl*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*Sp((d-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Nh(o);return s=bl/s,l.config=function(c,d){return i(e,c,d)},l},Io=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nh(n);return r.config=function(s){return i(e,s)},r};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;wr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;wr("Elastic",Do("in"),Do("out"),Do());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});wr("Circ",function(i){return-(lh(1-i*i)-1)});wr("Sine",function(i){return i===1?1:-yp(i*vp)+1});wr("Back",Io("in"),Io("out"),Io());Ye.SteppedEase=Ye.steps=Tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-dt;return function(o){return((r*na(0,a,o)|0)+s)*n}}};Hs.ease=Ye["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bc+=i+","+i+"Params,"});var Fh=function(e,t){this.id=xp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_h,this.set=t?t.getSetter:$c},Xs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hs(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),$s||yn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mo(this,n),!s._dp||s.parent||Sh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?us(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-dt?0:this._rts,this.totalTime(na(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),po(this),Pp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ti(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ap);var r=Bt;return Bt=n,Hc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Dd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ln(this,n),an(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,an(r)),this._dur||(this._zTime=-dt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-dt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Tt(n)?n:xh,l=function(){var d=r.then;r.then=null,s&&s(),Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),a(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Cs(this)},i}();wn(Xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var sn=function(i){oh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),yt&&ti(n.parent||yt,vi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Mh(vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Us(0,arguments,this),this},t.from=function(r,s,a){return Us(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Us(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Is(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(r,s,Ln(this,a),1),this},t.call=function(r,s,a){return ti(this,Pt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,d){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new Pt(r,a,Ln(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,d){return a.runBackwards=1,Is(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,o,l,c,d)},t.staggerFromTo=function(r,s,a,o,l,c,d,h){return o.startAt=a,Is(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,l,c,d,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),u,f,_,g,m,p,S,w,y,b,T,A;if(this!==yt&&d>l&&r>=0&&(d=l),d!==this._tTime||a||h){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),u=d,y=this._start,w=this._ts,p=!w,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(u=xt(d%m),d===l?(g=this._repeat,u=c):(b=xt(d/m),g=~~b,g&&g===b&&(u=c,g--),u>c&&(u=c)),b=us(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),T&&g&1&&(u=c-u,A=1),g!==b&&!this._lock){var x=T&&b&1,E=x===(T&&g&1);if(g<b&&(x=!x),o=x?0:d%c?c:d,this._lock=1,this.render(o||(A?0:xt(g*m)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=kp(this,xt(o),xt(u)),S&&(d-=u-(u=S._start))),this._tTime=d,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&c&&!s&&!b&&(Mn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!p){S=0,_&&(d+=this._zTime=-dt);break}}f=_}else{f=this._last;for(var C=r<0?r:u;f;){if(_=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||Bt&&Hc(f)),u!==this._time||!this._ts&&!p){S=0,_&&(d+=this._zTime=C?-dt:dt);break}}f=_}}if(S&&!s&&(this.pause(),S.render(u>=o?0:-dt)._zTime=u>=o?1:-1,this._ts))return this._start=y,po(this),this.render(r,s,a);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ji(this,1),!s&&!(r<0&&!o)&&(d||o||!l)&&(Mn(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Ri(s)||(s=Ln(this,s,r)),!(r instanceof Xs)){if(Yt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ot(r))return this.addLabel(r,s);if(Tt(r))r=Pt.delayedCall(0,r);else return this}return this!==r?ti(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ot(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&fo(this,r),r===this._recent&&(this._recent=this._last),xr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ln(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Pt.delayedCall(0,s||Gs,a);return o.data="isPause",this._hasPause=1,ti(this,o,Ln(this,r))},t.removePause=function(r){var s=this._first;for(r=Ln(this,r);s;)s._start===r&&s.data==="isPause"&&Ji(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Xi!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Un(r),l=this._first,c=Ri(s),d;l;)l instanceof Pt?Rp(l._targets,o)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(d=l.getTweensOf(o,s)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Ln(a,r),l=s,c=l.startAt,d=l.onStart,h=l.onStartParams,u=l.immediateRender,f,_=Pt.to(a,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||dt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&hs(_,m,0,1).render(_._time,!0,!0),f=1}d&&d.apply(_,h||[])}},s));return u?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,wn({startAt:{time:Ln(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Id(this,Ln(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Id(this,Ln(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=xt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return xr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=In,c,d,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ti(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(s-=d,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=xt(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;hs(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(yt._ts&&(gh(yt,ja(r,yt)),mh=yn.frame),yn.frame>=Cd){Cd+=En.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&En.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e}(Xs);wn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qp=function(e,t,n,r,s,a,o){var l=new ln(this._pt,e,t,0,1,Gh,null,s),c=0,d=0,h,u,f,_,g,m,p,S;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Ws(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),u=n.match(Co)||[];h=Co.exec(r);)_=h[0],g=r.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[d++]&&(m=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:g||d===1?g:",",s:m,c:_.charAt(1)==="="?ts(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Co.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(uh.test(r)||p)&&(l.e=0),this._pt=l,l},Vc=function(e,t,n,r,s,a,o,l,c,d){Tt(r)&&(r=r(s||0,e,a));var h=e[t],u=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Tt(h)?c?im:Hh:Wc,_;if(Ot(r)&&(~r.indexOf("random(")&&(r=Ws(r)),r.charAt(1)==="="&&(_=ts(u,r)+(Xt(u)||0),(_||_===0)&&(r=_))),!d||u!==r||Pl)return!isNaN(u*r)&&r!==""?(_=new ln(this._pt,e,t,+u||0,r-(u||0),typeof h=="boolean"?sm:Vh,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Fc(t,r),Qp.call(this,e,t,u,r,f,l||En.stringFilter,c))},jp=function(e,t,n,r,s){if(Tt(e)&&(e=ks(e,s,t,n,r)),!oi(e)||e.style&&e.nodeType||Yt(e)||ch(e))return Ot(e)?ks(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=ks(e[o],s,t,n,r);return a},Oh=function(e,t,n,r,s,a){var o,l,c,d;if(_n[e]&&(o=new _n[e]).init(s,o.rawVars?t[e]:jp(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new ln(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Xi,Pl,Gc=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,h=r.yoyoEase,u=r.keyframes,f=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,w=e._overwrite==="auto"&&!Ic,y=e.timeline,b=r.easeReverse||h,T,A,x,E,C,I,k,F,L,O,$,G,j;if(y&&(!u||!s)&&(s="none"),e._ease=yr(s,Hs.ease),e._rEase=b&&(yr(b)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||u&&!r.stagger){if(F=m[0]?vr(m[0]).harness:0,G=F&&r[F.prop],T=Qa(r,Oc),g&&(g._zTime<0&&g.progress(1),t<0&&d&&o&&!f?g.render(-1,!0):g.revert(d&&_?Oa:wp),g._lazy=0),a){if(Ji(e._startAt=Pt.set(m,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!f)&&e._startAt.revert(Oa),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&_&&!g){if(t&&(o=!1),x=wn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&an(l),immediateRender:o,stagger:0,parent:p},T),G&&(x[F.prop]=G),Ji(e._startAt=Pt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Oa):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&an(l)||l&&!_,A=0;A<m.length;A++){if(C=m[A],k=C._gsap||zc(m)[A]._gsap,e._ptLookup[A]=O={},Tl[k.id]&&Ki.length&&Ja(),$=S===m?A:S.indexOf(C),F&&(L=new F).init(C,G||T,e,$,S)!==!1&&(e._pt=E=new ln(e._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(X){O[X]=E}),L.priority&&(I=1)),!F||G)for(x in T)_n[x]&&(L=Oh(x,T,e,$,C,S))?L.priority&&(I=1):O[x]=E=Vc.call(e,C,x,"get",T[x],$,S,0,r.stringFilter);e._op&&e._op[A]&&e.kill(C,e._op[A]),w&&e._pt&&(Xi=e,yt.killTweensOf(C,O,e.globalTime(t)),j=!e.parent,Xi=0),e._pt&&l&&(Tl[k.id]=1)}I&&Wh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,u&&t<=0&&y.render(In,!0,!0)},em=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,h,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Pl=1,e.vars[t]="+=0",Gc(e,o),Pl=0,l?Vs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(f=c.length;f--;)h=c[f],d=h._pt||h,d.s=(r||r===0)&&!s?r:d.s+(r||0)+a*d.c,d.c=n-d.s,h.e&&(h.e=At(n)+Xt(h.e)),h.b&&(h.b=d.s+Xt(h.b))},tm=function(e,t){var n=e[0]?vr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=ds({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},nm=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Yt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ks=function(e,t,n,r,s){return Tt(e)?e.call(t,n,r,s):Ot(e)&&~e.indexOf("random(")?Ws(e):e},Bh=Bc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",zh={};on(Bh+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return zh[i]=1});var Pt=function(i){oh(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Is(r))||this;var l=o.vars,c=l.duration,d=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||yt,S=(Yt(n)||ch(n)?Ri(n[0]):"length"in r)?[n]:Un(n),w,y,b,T,A,x,E,C;if(o._targets=S.length?zc(S):Vs("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||da(c)||da(d)){r=o.vars;var I=r.easeReverse||r.yoyoEase;if(w=o.timeline=new sn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),w.kill(),w.parent=w._dp=vi(o),w._start=0,u||da(c)||da(d)){if(T=S.length,E=u&&wh(u),oi(u))for(A in u)~Bh.indexOf(A)&&(C||(C={}),C[A]=u[A]);for(y=0;y<T;y++)b=Qa(r,zh),b.stagger=0,I&&(b.easeReverse=I),C&&ds(b,C),x=S[y],b.duration=+ks(c,vi(o),y,x,S),b.delay=(+ks(d,vi(o),y,x,S)||0)-o._delay,!u&&T===1&&b.delay&&(o._delay=d=b.delay,o._start+=d,b.delay=0),w.to(x,b,E?E(y,x,S):0),w._ease=Ye.none;w.duration()?c=d=0:o.timeline=0}else if(_){Is(wn(w.vars.defaults,{ease:"none"})),w._ease=yr(_.ease||r.ease||"none");var k=0,F,L,O;if(Yt(_))_.forEach(function($){return w.to(S,$,">")}),w.duration();else{b={};for(A in _)A==="ease"||A==="easeEach"||nm(A,_[A],b,_.easeEach);for(A in b)for(F=b[A].sort(function($,G){return $.t-G.t}),k=0,y=0;y<F.length;y++)L=F[y],O={ease:L.e,duration:(L.t-(y?F[y-1].t:0))/100*c},O[A]=L.v,w.to(S,O,k),k+=O.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return f===!0&&!Ic&&(Xi=vi(o),yt.killTweensOf(S),Xi=0),ti(p,vi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===xt(p._time)&&an(h)&&Dp(vi(o))&&p.data!=="nested")&&(o._tTime=-dt,o.render(Math.max(0,-d)||0)),m&&Mh(vi(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,d=r<0,h=r>l-dt&&!d?l:r<dt?0:r,u,f,_,g,m,p,S,w;if(!c)Up(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=h,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+r,s,a);if(u=xt(h%g),h===l?(_=this._repeat,u=c):(m=xt(h/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(u=c-u),m=us(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(xt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(bh(this,d?r:u,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Mn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;w&&w.render(r<0?r:w._dur*w._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&wl(this,r,s,a),Mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&wl(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!s&&!(d&&!o)&&(h||o||p)&&(Mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){$s||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Gc(this,c),d=this._ease(c/this._dur),em(this,r,s,a,o,d,c,l)?this.resetTo(r,s,a,o,1):(mo(this,0),this.parent||yh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Xi&&Xi.vars.overwrite!==!0)._first||Cs(this),this.parent&&a!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Un(r):o,c=this._ptLookup,d=this._pt,h,u,f,_,g,m,p;if((!s||s==="all")&&Lp(o,l))return s==="all"&&(this._pt=0),Cs(this);for(h=this._op=this._op||[],s!=="all"&&(Ot(s)&&(g={},on(s,function(S){return g[S]=1}),s=g),s=tm(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],s==="all"?(h[p]=s,_=u,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&fo(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&d&&Cs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Us(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Us(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return yt.killTweensOf(r,s,a)},e}(Xs);wn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(i){Pt[i]=function(){var e=new sn,t=Rl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Wc=function(e,t,n){return e[t]=n},Hh=function(e,t,n){return e[t](n)},im=function(e,t,n,r){return e[t](r.fp,n)},rm=function(e,t,n){return e.setAttribute(t,n)},$c=function(e,t){return Tt(e[t])?Hh:Uc(e[t])&&e.setAttribute?rm:Wc},Vh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gh=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Xc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},am=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},om=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?fo(this,t,"_pt"):t.dep||(n=1),t=r;return!n},lm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Wh=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},ln=function(){function i(t,n,r,s,a,o,l,c,d){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Vh,this.d=l||this,this.set=c||Wc,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=lm,this.m=n,this.mt=s,this.tween=r},i}();on(Bc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Oc[i]=1});Tn.TweenMax=Tn.TweenLite=Pt;Tn.TimelineLite=Tn.TimelineMax=sn;yt=new sn({sortChildren:!1,defaults:Hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=kh;var Sr=[],za={},cm=[],kd=0,dm=0,Uo=function(e){return(za[e]||cm).map(function(t){return t()})},Dl=function(){var e=Date.now(),t=[];e-kd>2&&(Uo("matchMediaInit"),Sr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Jn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Uo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),kd=e,Uo("matchMedia"))},$h=function(){function i(t,n){this.selector=n&&Cl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Tt(n)&&(s=r,r=n,n=Tt);var a=this,o=function(){var c=gt,d=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Cl(s)),gt=a,h=r.apply(a,arguments),Tt(h)&&a._r.push(h),gt=c,a.selector=d,a.isReverted=!1,h};return a.last=o,n===Tt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=gt;gt=null,n(this),gt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),um=function(){function i(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){oi(n)||(n={matches:n});var a=new $h(0,s||this.scope),o=a.conditions={},l,c,d;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?d=1:(l=Jn.matchMedia(n[c]),l&&(Sr.indexOf(a)<0&&Sr.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Dl):l.addEventListener("change",Dl)));return d&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),eo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Dh(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ot(e)&&(e=Un(e)[0]);var s=vr(e||{}).get,a=n?xh:vh;return n==="native"&&(n=""),e&&(t?a((_n[t]&&_n[t].get||s)(e,t,n,r)):function(o,l,c){return a((_n[o]&&_n[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Un(e),e.length>1){var r=e.map(function(d){return un.quickSetter(d,t,n)}),s=r.length;return function(d){for(var h=s;h--;)r[h](d)}}e=e[0]||{};var a=_n[t],o=vr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(d){var h=new a;Jr._pt=0,h.init(e,n?d+n:d,Jr,0,[e]),h.render(1,h),Jr._pt&&Xc(1,Jr)}:o.set(e,l);return a?c:function(d){return c(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var r,s=un.to(e,wn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,d){return s.resetTo(t,l,c,d)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yr(e.ease,Hs.ease)),Ld(Hs,e||{})},config:function(e){return Ld(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!_n[o]&&!Tn[o]&&Vs(t+" effect requires "+o+" plugin.")}),Lo[t]=function(o,l,c){return n(Un(o),wn(l||{},s),c)},a&&(sn.prototype[t]=function(o,l,c){return this.add(Lo[t](o,oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=yr(t)},parseEase:function(e,t){return arguments.length?yr(e,t):Ye},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,s;for(n.smoothChildTiming=an(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,r=yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&ti(n,r,r._start-r._delay),r=s;return ti(yt,n,0),n},context:function(e,t){return e?new $h(e,t):gt},matchMedia:function(e){return new um(e)},matchMediaRefresh:function(){return Sr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Dl()},addEventListener:function(e,t){var n=za[e]||(za[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=za[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Vp,wrapYoyo:Gp,distribute:wh,random:Rh,snap:Ah,normalize:Hp,getUnit:Xt,clamp:Fp,splitColor:Ih,toArray:Un,selector:Cl,mapRange:Lh,pipe:Bp,unitize:zp,interpolate:Wp,shuffle:Th},install:fh,effects:Lo,ticker:yn,updateRoot:sn.updateRoot,plugins:_n,globalTimeline:yt,core:{PropTween:ln,globals:ph,Tween:Pt,Timeline:sn,Animation:Xs,getCache:vr,_removeLinkedListItem:fo,reverting:function(){return Bt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return Ic=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return eo[i]=Pt[i]});yn.add(sn.updateRoot);Jr=eo.to({},{duration:0});var hm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fm=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=hm(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},ko=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ot(s)&&(l={},on(s,function(d){return l[d]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fm(o,s)}}}},un=eo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ko("roundProps",Ll),ko("modifiers"),ko("snap",Ah))||eo;Pt.version=sn.version=un.version="3.15.0";hh=1;kc()&&fs();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nd,qi,ns,qc,fr,Fd,Yc,pm=function(){return typeof window<"u"},Ci={},ur=180/Math.PI,is=Math.PI/180,Pr=Math.atan2,Od=1e8,Kc=/([A-Z])/g,mm=/(left|right|width|margin|padding|x)/i,_m=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Il=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ym=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Sm=function(e,t,n){return e.style[t]=n},Mm=function(e,t,n){return e.style.setProperty(t,n)},bm=function(e,t,n){return e._gsap[t]=n},Em=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tm=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wm=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Mt="transform",cn=Mt+"Origin",Am=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xi(r,o)}):this.tfm[e]=a.x?a[e]:xi(r,e),e===cn&&(this.tfm.zOrigin=a.zOrigin);else return ni.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Mt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(cn,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},Yh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rm=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yc(),(!s||!s.isStart)&&!n[Mt]&&(Yh(n),r.zOrigin&&n[cn]&&(n[cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Kh=function(e,t){var n={target:e,props:[],revert:Rm,save:Am};return e._gsap||un.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Zh,Ul=function(e,t){var n=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return n&&n.style?n:qi.createElement(e)},bn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ps(t)||t,1)||""},Bd="O,Moz,ms,Ms,Webkit".split(","),ps=function(e,t,n){var r=t||fr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Bd[a]:"")+e},kl=function(){pm()&&window.document&&(Nd=window,qi=Nd.document,ns=qi.documentElement,fr=Ul("div")||{style:{}},Ul("div"),Mt=ps(Mt),cn=Mt+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zh=!!ps("perspective"),Yc=un.core.reverting,qc=1)},zd=function(e){var t=e.ownerSVGElement,n=Ul("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ns.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ns.removeChild(n),s},Hd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jh=function(e){var t,n;try{t=e.getBBox()}catch{t=zd(e),n=1}return t&&(t.width||t.height)||n||(t=zd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Hd(e,["x","cx","x1"])||0,y:+Hd(e,["y","cy","y1"])||0,width:0,height:0}:t},Qh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jh(e))},Qi=function(e,t){if(t){var n=e.style,r;t in Ci&&t!==cn&&(t=Mt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Kc,"-$1").toLowerCase())):n.removeAttribute(t)}},Yi=function(e,t,n,r,s,a){var o=new ln(e._pt,t,n,0,1,a?qh:Xh);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Vd={deg:1,rad:1,turn:1},Cm={grid:1,flex:1},ji=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=fr.style,l=mm.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),h=100,u=r==="px",f=r==="%",_,g,m,p;if(r===a||!s||Vd[r]||Vd[a])return s;if(a!=="px"&&!u&&(s=i(e,t,n,"px")),p=e.getCTM&&Qh(e),(f||a==="%")&&(Ci[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[d],At(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(u?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===qi||!g.appendChild)&&(g=qi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===yn.time&&!m.uncache)return At(s/m.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,_=e[d],S?e.style[t]=S:Qi(e,t)}else(f||a==="%")&&!Cm[bn(g,"display")]&&(o.position=bn(e,"position")),g===e&&(o.position="static"),g.appendChild(fr),_=fr[d],g.removeChild(fr),o.position="absolute";return l&&f&&(m=vr(g),m.time=yn.time,m.width=g[d]),At(u?_*s/h:_&&s?h/_*s:0)},xi=function(e,t,n,r){var s;return qc||kl(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(s=Ys(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:no(bn(e,cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=to[t]&&to[t](e,t,n)||bn(e,t)||_h(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ji(e,t,s,n)+n:s},Lm=function(e,t,n,r){if(!n||n==="none"){var s=ps(t,e,1),a=s&&bn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=bn(e,"borderTopColor"))}var o=new ln(this._pt,e.style,t,0,1,Gh),l=0,c=0,d,h,u,f,_,g,m,p,S,w,y,b;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=bn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=bn(e,t)||r,g?e.style[t]=g:Qi(e,t)),d=[n,r],kh(d),n=d[0],r=d[1],u=n.match(Zr)||[],b=r.match(Zr)||[],b.length){for(;h=Zr.exec(r);)m=h[0],S=r.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=ts(f,m)+y),p=parseFloat(m),w=m.substr((p+"").length),l=Zr.lastIndex-w.length,w||(w=w||En.units[t]||y,l===r.length&&(r+=w,o.e+=w)),y!==w&&(f=ji(e,t,g,w)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?qh:Xh;return uh.test(r)&&(o.e=0),this._pt=o,o},Gd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Pm=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Gd[n]||n,t[1]=Gd[r]||r,t.join(" ")},Dm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ci[o]&&(l=1,o=o==="transformOrigin"?cn:Mt),Qi(n,o);l&&(Qi(n,Mt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ys(n,1),a.uncache=1,Yh(r)))}},to={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ln(e._pt,t,n,0,0,Dm);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},qs=[1,0,0,1,0,0],jh={},ef=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wd=function(e){var t=bn(e,Mt);return ef(t)?qs:t.substr(7).match(dh).map(At)},Zc=function(e,t){var n=e._gsap||vr(e),r=e.style,s=Wd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qs:s):(s===qs&&!e.offsetParent&&e!==ns&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ns.appendChild(e)),s=Wd(e),l?r.display=l:Qi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nl=function(e,t,n,r,s,a){var o=e._gsap,l=s||Zc(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,h=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],w=t.split(" "),y=parseFloat(w[0])||0,b=parseFloat(w[1])||0,T,A,x,E;n?l!==qs&&(A=f*m-_*g)&&(x=y*(m/A)+b*(-g/A)+(g*S-m*p)/A,E=y*(-_/A)+b*(f/A)-(f*S-_*p)/A,y=x,b=E):(T=Jh(e),y=T.x+(~w[0].indexOf("%")?y/100*T.width:y),b=T.y+(~(w[1]||w[0]).indexOf("%")?b/100*T.height:b)),r||r!==!1&&o.smooth?(p=y-c,S=b-d,o.xOffset=h+(p*f+S*g)-p,o.yOffset=u+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[cn]="0px 0px",a&&(Yi(a,o,"xOrigin",c,y),Yi(a,o,"yOrigin",d,b),Yi(a,o,"xOffset",h,o.xOffset),Yi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Ys=function(e,t){var n=e._gsap||new Fh(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=bn(e,cn)||"0",d,h,u,f,_,g,m,p,S,w,y,b,T,A,x,E,C,I,k,F,L,O,$,G,j,X,J,te,be,we,Ge,ke;return d=h=u=g=m=p=S=w=y=0,f=_=1,n.svg=!!(e.getCTM&&Qh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),r.scale=r.rotate=r.translate="none"),A=Zc(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Nl(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,T=n.yOrigin||0,A!==qs&&(I=A[0],k=A[1],F=A[2],L=A[3],d=O=A[4],h=$=A[5],A.length===6?(f=Math.sqrt(I*I+k*k),_=Math.sqrt(L*L+F*F),g=I||k?Pr(k,I)*ur:0,S=F||L?Pr(F,L)*ur+g:0,S&&(_*=Math.abs(Math.cos(S*is))),n.svg&&(d-=b-(b*I+T*F),h-=T-(b*k+T*L))):(ke=A[6],we=A[7],J=A[8],te=A[9],be=A[10],Ge=A[11],d=A[12],h=A[13],u=A[14],x=Pr(ke,be),m=x*ur,x&&(E=Math.cos(-x),C=Math.sin(-x),G=O*E+J*C,j=$*E+te*C,X=ke*E+be*C,J=O*-C+J*E,te=$*-C+te*E,be=ke*-C+be*E,Ge=we*-C+Ge*E,O=G,$=j,ke=X),x=Pr(-F,be),p=x*ur,x&&(E=Math.cos(-x),C=Math.sin(-x),G=I*E-J*C,j=k*E-te*C,X=F*E-be*C,Ge=L*C+Ge*E,I=G,k=j,F=X),x=Pr(k,I),g=x*ur,x&&(E=Math.cos(x),C=Math.sin(x),G=I*E+k*C,j=O*E+$*C,k=k*E-I*C,$=$*E-O*C,I=G,O=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=At(Math.sqrt(I*I+k*k+F*F)),_=At(Math.sqrt($*$+ke*ke)),x=Pr(O,$),S=Math.abs(x)>2e-4?x*ur:0,y=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ef(bn(e,Mt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=At(f),n.scaleY=At(_),n.rotation=At(g)+o,n.rotationX=At(m)+o,n.rotationY=At(p)+o,n.skewX=S+o,n.skewY=w+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[cn]=no(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?Um:Zh?tf:Im,n.uncache=0,n},no=function(e){return(e=e.split(" "))[0]+" "+e[1]},No=function(e,t,n){var r=Xt(t);return At(parseFloat(t)+parseFloat(ji(e,"x",n+"px",r)))+r},Im=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tf(e,t)},ir="0deg",ys="0px",rr=") ",tf=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,d=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,w=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(w&&(h!==ir||d!==ir)){var T=parseFloat(d)*is,A=Math.sin(T),x=Math.cos(T),E;T=parseFloat(h)*is,E=Math.cos(T),a=No(S,a,A*E*-w),o=No(S,o,-Math.sin(T)*-w),l=No(S,l,x*E*-w+w)}m!==ys&&(y+="perspective("+m+rr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(b||a!==ys||o!==ys||l!==ys)&&(y+=l!==ys||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+rr),c!==ir&&(y+="rotate("+c+rr),d!==ir&&(y+="rotateY("+d+rr),h!==ir&&(y+="rotateX("+h+rr),(u!==ir||f!==ir)&&(y+="skew("+u+", "+f+rr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+rr),S.style[Mt]=y||"translate(0, 0)"},Um=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,d=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,w=parseFloat(a),y=parseFloat(o),b,T,A,x,E;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=is,c*=is,b=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(d*=is,E=Math.tan(c-d),E=Math.sqrt(1+E*E),A*=E,x*=E,d&&(E=Math.tan(d),E=Math.sqrt(1+E*E),b*=E,T*=E)),b=At(b),T=At(T),A=At(A),x=At(x)):(b=h,x=u,T=A=0),(w&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(w=ji(f,"x",a,"px"),y=ji(f,"y",o,"px")),(_||g||m||p)&&(w=At(w+_-(_*b+g*A)+m),y=At(y+g-(_*T+g*x)+p)),(r||s)&&(E=f.getBBox(),w=At(w+r/100*E.width),y=At(y+s/100*E.height)),E="matrix("+b+","+T+","+A+","+x+","+w+","+y+")",f.setAttribute("transform",E),S&&(f.style[Mt]=E)},km=function(e,t,n,r,s){var a=360,o=Ot(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ur:1),c=l-r,d=r+c+"deg",h,u;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Od)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Od)%a-~~(c/a)*a)),e._pt=u=new ln(e._pt,t,n,r,c,gm),u.e=d,u.u="deg",e._props.push(n),u},$d=function(e,t){for(var n in t)e[n]=t[n];return e},Nm=function(e,t,n){var r=$d({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,d,h,u,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Mt]=t,o=Ys(n,1),Qi(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],a[Mt]=t,o=Ys(n,1),a[Mt]=c);for(l in Ci)c=r[l],d=o[l],c!==d&&s.indexOf(l)<0&&(f=Xt(c),_=Xt(d),h=f!==_?ji(n,l,c,_):parseFloat(c),u=parseFloat(d),e._pt=new ln(e._pt,o,l,h,u-h,Il),e._pt.u=_||0,e._props.push(l));$d(o,r)};on("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});to[e>1?"border"+i:i]=function(o,l,c,d,h){var u,f;if(arguments.length<4)return u=a.map(function(_){return xi(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,h)}});var nf={name:"css",register:kl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,d,h,u,f,_,g,m,p,S,w,y,b,T,A,x,E;qc||kl(),this.styles=this.styles||Kh(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(d=t[g],!(_n[g]&&Oh(g,t,n,r,e,s)))){if(f=typeof d,_=to[g],f==="function"&&(d=d.call(n,r,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Ws(d)),_)_(this,e,g,d,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",Zi.lastIndex=0,Zi.test(c)||(m=Xt(c),p=Xt(d),p?m!==p&&(c=ji(e,g,c,p)+p):m&&(d+=m)),this.add(o,"setProperty",c,d,r,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Ot(c)&&~c.indexOf("random(")&&(c=Ws(c)),Xt(c+"")||c==="auto"||(c+=En.units[g]||Xt(xi(e,g))||""),(c+"").charAt(1)==="="&&(c=xi(e,g))):c=xi(e,g),u=parseFloat(c),S=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),S&&(d=d.substr(2)),h=parseFloat(d),g in ni&&(g==="autoAlpha"&&(u===1&&xi(e,"visibility")==="hidden"&&h&&(u=0),x.push("visibility",0,o.visibility),Yi(this,o,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ni[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in Ci,w){if(this.styles.save(g),E=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=bn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=d,d=bn(e,"perspective"),C?e.style.perspective=C:Qi(e,"perspective")}h=parseFloat(d)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ys(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ln(this._pt,o,Mt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new ln(this._pt,b,"scaleY",b.scaleY,(S?ts(b.scaleY,S+h):h)-b.scaleY||0,Il),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(cn,0,o[cn]),d=Pm(d),b.svg?Nl(e,d,0,T,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==b.zOrigin&&Yi(this,b,"zOrigin",b.zOrigin,p),Yi(this,o,g,no(c),no(d)));continue}else if(g==="svgOrigin"){Nl(e,d,1,T,0,this);continue}else if(g in jh){km(this,b,g,u,S?ts(u,S+d):d);continue}else if(g==="smoothOrigin"){Yi(this,b,"smooth",b.smooth,d);continue}else if(g==="force3D"){b[g]=d;continue}else if(g==="transform"){Nm(this,d,e);continue}}else g in o||(g=ps(g)||g);if(w||(h||h===0)&&(u||u===0)&&!_m.test(d)&&g in o)m=(c+"").substr((u+"").length),h||(h=0),p=Xt(d)||(g in En.units?En.units[g]:m),m!==p&&(u=ji(e,g,c,p)),this._pt=new ln(this._pt,w?b:o,g,u,(S?ts(u,S+h):h)-u,!w&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?ym:Il),this._pt.u=p||0,w&&E!==d?(this._pt.b=c,this._pt.e=E,this._pt.r=xm):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vm);else if(g in o)Lm.call(this,e,g,c,S?S+d:d);else if(g in e)this.add(e,g,c||e[g],S?S+d:d,r,s);else if(g!=="parseTransform"){Fc(g,d);continue}w||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}A&&Wh(this)},render:function(e,t){if(t.tween._time||!Yc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:ni,getSetter:function(e,t,n){var r=ni[t];return r&&r.indexOf(",")<0&&(t=r),t in Ci&&t!==cn&&(e._gsap.x||xi(e,"x"))?n&&Fd===n?t==="scale"?Em:bm:(Fd=n||{})&&(t==="scale"?Tm:wm):e.style&&!Uc(e.style[t])?Sm:~t.indexOf("-")?Mm:$c(e,t)},core:{_removeProperty:Qi,_getMatrix:Zc}};un.utils.checkPrefix=ps;un.core.getStyleSaver=Kh;(function(i,e,t,n){var r=on(i+","+e+","+t,function(s){Ci[s]=1});on(e,function(s){En.units[s]="deg",jh[s]=1}),ni[r[13]]=i+","+e,on(n,function(s){var a=s.split(":");ni[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){En.units[i]="px"});un.registerPlugin(nf);var Li=un.registerPlugin(nf)||un;Li.core.Tween;Li.matchMedia();function ia(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Xd=new WeakMap;function Fm(i,e){const t=Xd.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Xd.set(i,t),ia()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const r=document.createElement("span");r.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const a=document.createElement("span");a.textContent=e,a.style.cssText="display:block; position:absolute; left:0; top:100%;",r.append(s,a),i.appendChild(r),t.tween=Li.to([s,a],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function rf(i){if(ia())return;const e=Array.from(i.children).slice(0,8);e.length&&Li.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Jc(i){ia()||!i.length||Li.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Qc(i){ia()||Li.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function Om(i,e){if(ia()){e();return}Li.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{Li.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="186",Bm=0,qd=1,zm=2,Ha=1,Hm=2,Ps=3,Mr=0,dn=1,yi=2,Ei=0,Ns=1,Yd=2,Kd=3,Zd=4,Vm=5,Yr=100,Gm=101,Wm=102,$m=103,Xm=104,qm=200,Ym=201,Km=202,Zm=203,sf=204,af=205,Jm=206,Qm=207,jm=208,e_=209,t_=210,n_=211,i_=212,r_=213,s_=214,Fl=0,Ol=1,Bl=2,Ks=3,zl=4,Hl=5,Vl=6,Gl=7,ed=0,a_=1,o_=2,si=0,of=1,lf=2,cf=3,df=4,uf=5,hf=6,ff=7,pf=300,br=301,ms=302,Fo=303,Oo=304,_o=306,Wl=1e3,Mi=1001,$l=1002,It=1003,l_=1004,ua=1005,qt=1006,Bo=1007,pr=1008,Sn=1009,mf=1010,_f=1011,Zs=1012,td=1013,li=1014,ii=1015,ci=1016,nd=1017,id=1018,Js=1020,gf=35902,vf=35899,xf=1021,yf=1022,Vn=1023,Pi=1026,mr=1027,Sf=1028,rd=1029,Er=1030,sd=1031,ad=1033,Va=33776,Ga=33777,Wa=33778,$a=33779,Xl=35840,ql=35841,Yl=35842,Kl=35843,Zl=36196,Jl=37492,Ql=37496,jl=37488,ec=37489,io=37490,tc=37491,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,dc=37816,uc=37817,hc=37818,fc=37819,pc=37820,mc=37821,_c=36492,gc=36494,vc=36495,xc=36283,yc=36284,ro=36285,Sc=36286,c_=3200,Mc=0,d_=1,Wi="",gn="srgb",so="srgb-linear",ao="linear",st="srgb",zo=7680,u_=519,h_=512,f_=513,p_=514,od=515,m_=516,__=517,ld=518,g_=519,v_=35044,Jd="300 es",ri=2e3,Qs=2001;function x_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y_(){const i=js("canvas");return i.style.display="block",i}const Qd={};function jd(...i){const e="THREE."+i.shift();console.log(e,...i)}function Mf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Mf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Mf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rs(...i){const e=i.join(" ");e in Qd||(Qd[e]=!0,De(...i))}function S_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const M_={[Fl]:Ol,[Bl]:Vl,[zl]:Gl,[Ks]:Hl,[Ol]:Fl,[Vl]:Bl,[Gl]:zl,[Hl]:Ks};class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,bc=180/Math.PI;function ra(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function b_(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function E_(i){return i*Xa}function Ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const T_={degToRad:E_};class Ze{static{Ze.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3],u=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(h!==g||l!==u||c!==f||d!==_){let m=l*u+c*f+d*_+h*g;m<0&&(u=-u,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+u*o,c=c*p+f*o,d=d*p+_*o,h=h*p+g*o}else{l=l*p+u*o,c=c*p+f*o,d=d*p+_*o,h=h*p+g*o;const S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[a],u=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+d*h+l*f-c*u,e[t+1]=l*_+d*u+c*h-o*f,e[t+2]=c*_+d*f+o*u-l*h,e[t+3]=d*_-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),h=o(s/2),u=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h-u*f*_;break;case"YXZ":this._x=u*d*h+c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h+u*f*_;break;case"ZXY":this._x=u*d*h-c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h-u*f*_;break;case"ZYX":this._x=u*d*h-c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h+u*f*_;break;case"YZX":this._x=u*d*h+c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h-u*f*_;break;case"XZY":this._x=u*d*h-c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h+u*f*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{static{V.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new V,eu=new gs;class Ue{static{Ue.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],_=n[8],g=r[0],m=r[3],p=r[6],S=r[1],w=r[4],y=r[7],b=r[2],T=r[5],A=r[8];return s[0]=a*g+o*S+l*b,s[3]=a*m+o*w+l*T,s[6]=a*p+o*y+l*A,s[1]=c*g+d*S+h*b,s[4]=c*m+d*w+h*T,s[7]=c*p+d*y+h*A,s[2]=u*g+f*S+_*b,s[5]=u*m+f*w+_*T,s[8]=u*p+f*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,_=t*h+n*u+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-d*n)*g,e[2]=(o*n-r*a)*g,e[3]=u*g,e[4]=(d*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Go.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ue,tu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w_(){const i={enabled:!0,workingColorSpace:so,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[so]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:st,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const $e=w_();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dr;class A_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=js("canvas")),Dr.width=e.width,Dr.height=e.height;const r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class cd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wo(r[a].image)):s.push(Wo(r[a]))}else s=Wo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?A_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let C_=0;const $o=new V;class zt extends Ar{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Mi,r=Mi,s=qt,a=pr,o=Vn,l=Sn,c=zt.DEFAULT_ANISOTROPY,d=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ra(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=pf;zt.DEFAULT_ANISOTROPY=1;class bt{static{bt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(f+1)/2,b=(p+1)/2,T=(d+u)/4,A=(h+g)/4,x=(_+m)/4;return w>y&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=T/n,s=A/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=x/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=A/s,r=x/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(u-d)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L_ extends Ar{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new zt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends L_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bf extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Et{static{Et.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,l,c,d,h,u,f,_,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,h,u,f,_,g,m)}set(e,t,n,r,s,a,o,l,c,d,h,u,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,_=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,_=c*d,g=c*h;t[0]=u+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,_=c*d,g=c*h;t[0]=u-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*d,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,_=o*d,g=o*h;t[0]=l*d,t[4]=_*c-f,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-u*h,t[8]=_*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+_,t[10]=u-g*h}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=a*d,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,I_)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ni.crossVectors(n,fn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ni.crossVectors(n,fn)),Ni.normalize(),ha.crossVectors(fn,Ni),r[0]=Ni.x,r[4]=ha.x,r[8]=fn.x,r[1]=Ni.y,r[5]=ha.y,r[9]=fn.y,r[2]=Ni.z,r[6]=ha.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],w=n[7],y=n[11],b=n[15],T=r[0],A=r[4],x=r[8],E=r[12],C=r[1],I=r[5],k=r[9],F=r[13],L=r[2],O=r[6],$=r[10],G=r[14],j=r[3],X=r[7],J=r[11],te=r[15];return s[0]=a*T+o*C+l*L+c*j,s[4]=a*A+o*I+l*O+c*X,s[8]=a*x+o*k+l*$+c*J,s[12]=a*E+o*F+l*G+c*te,s[1]=d*T+h*C+u*L+f*j,s[5]=d*A+h*I+u*O+f*X,s[9]=d*x+h*k+u*$+f*J,s[13]=d*E+h*F+u*G+f*te,s[2]=_*T+g*C+m*L+p*j,s[6]=_*A+g*I+m*O+p*X,s[10]=_*x+g*k+m*$+p*J,s[14]=_*E+g*F+m*G+p*te,s[3]=S*T+w*C+y*L+b*j,s[7]=S*A+w*I+y*O+b*X,s[11]=S*x+w*k+y*$+b*J,s[15]=S*E+w*F+y*G+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],S=l*f-c*u,w=o*f-c*h,y=o*u-l*h,b=a*f-c*d,T=a*u-l*d,A=a*h-o*d;return t*(g*S-m*w+p*y)-n*(_*S-m*b+p*T)+r*(_*w-g*b+p*A)-s*(_*y-g*T+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=t*o-n*a,w=t*l-r*a,y=t*c-s*a,b=n*l-r*o,T=n*c-s*o,A=r*c-s*l,x=d*g-h*_,E=d*m-u*_,C=d*p-f*_,I=h*m-u*g,k=h*p-f*g,F=u*p-f*m,L=S*F-w*k+y*I+b*C-T*E+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=(o*F-l*k+c*I)*O,e[1]=(r*k-n*F-s*I)*O,e[2]=(g*A-m*T+p*b)*O,e[3]=(u*T-h*A-f*b)*O,e[4]=(l*C-a*F-c*E)*O,e[5]=(t*F-r*C+s*E)*O,e[6]=(m*y-_*A-p*w)*O,e[7]=(d*A-u*y+f*w)*O,e[8]=(a*k-o*C+c*x)*O,e[9]=(n*C-t*k-s*x)*O,e[10]=(_*T-g*y+p*S)*O,e[11]=(h*y-d*T-f*S)*O,e[12]=(o*E-a*I-l*x)*O,e[13]=(t*I-n*E+r*x)*O,e[14]=(g*w-_*b-m*S)*O,e[15]=(d*b-h*w+u*S)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,_=s*h,g=a*d,m=a*h,p=o*h,S=l*c,w=l*d,y=l*h,b=n.x,T=n.y,A=n.z;return r[0]=(1-(g+p))*b,r[1]=(f+y)*b,r[2]=(_-w)*b,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(u+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(_+w)*A,r[9]=(m-S)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),l=Ir.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Fn.copy(this);const c=1/a,d=1/o,h=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=ri,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===ri)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ri,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===ri)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Qs)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new V,Fn=new Et,D_=new V(0,0,0),I_=new V(1,1,1),Ni=new V,ha=new V,fn=new V,iu=new Et,ru=new gs;class er{constructor(e=0,t=0,n=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class Ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const su=new V,Ur=new gs,ui=new Et,fa=new V,Ms=new V,k_=new V,N_=new gs,au=new V(1,0,0),ou=new V(0,1,0),lu=new V(0,0,1),cu={type:"added"},F_={type:"removed"},kr={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Kt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new V,t=new er,n=new gs,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ue}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ms,fa,this.up):ui.lookAt(fa,Ms,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ui),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),kr.child=e,this.dispatchEvent(kr),kr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new V(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nn extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=b_(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yo(a,s,e+1/3),this.g=Yo(a,s,e),this.b=Yo(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return $e.workingToColorSpace($t.copy(this),e),Math.round(Xe($t.r*255,0,255))*65536+Math.round(Xe($t.g*255,0,255))*256+Math.round(Xe($t.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace($t.copy(this),t);const n=$t.r,r=$t.g,s=$t.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=gn){$e.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,r=$t.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(pa);const n=Ho(Fi.h,pa.h,t),r=Ho(Fi.s,pa.s,t),s=Ho(Fi.l,pa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Qe;Qe.NAMES=Tf;class B_ extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const On=new V,hi=new V,Ko=new V,fi=new V,Nr=new V,Fr=new V,du=new V,Zo=new V,Jo=new V,Qo=new V,jo=new bt,el=new bt,tl=new bt;class zn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){On.subVectors(r,t),hi.subVectors(n,t),Ko.subVectors(e,t);const a=On.dot(On),o=On.dot(hi),l=On.dot(Ko),c=hi.dot(hi),d=hi.dot(Ko),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,_=(a*d-o*l)*u;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return jo.setScalar(0),el.setScalar(0),tl.setScalar(0),jo.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jo,s.x),a.addScaledVector(el,s.y),a.addScaledVector(tl,s.z),a}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Nr.subVectors(r,n),Fr.subVectors(s,n),Zo.subVectors(e,n);const l=Nr.dot(Zo),c=Fr.dot(Zo);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,r);const d=Nr.dot(Jo),h=Fr.dot(Jo);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Nr,a);Qo.subVectors(e,s);const f=Nr.dot(Qo),_=Fr.dot(Qo);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Fr,o);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return du.subVectors(s,r),o=(h-d)/(h-d+(f-_)),t.copy(r).addScaledVector(du,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(Nr,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),_a.subVectors(this.max,bs),Or.subVectors(e.a,bs),Br.subVectors(e.b,bs),zr.subVectors(e.c,bs),Oi.subVectors(Br,Or),Bi.subVectors(zr,Br),sr.subVectors(Or,zr);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-sr.z,sr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,sr.z,0,-sr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-sr.y,sr.x,0];return!nl(t,Or,Br,zr,_a)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Or,Br,zr,_a))?!1:(ga.crossVectors(Oi,Bi),t=[ga.x,ga.y,ga.z],nl(t,Or,Br,zr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new V,new V,new V,new V,new V,new V,new V,new V],Bn=new V,ma=new sa,Or=new V,Br=new V,zr=new V,Oi=new V,Bi=new V,sr=new V,bs=new V,_a=new V,ga=new V,ar=new V;function nl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ar.fromArray(i,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),d=n.dot(ar);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Lt=new V,va=new Ze;let z_=0;class wi extends Ar{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=v_,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class wf extends wi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Af extends wi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends wi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const H_=new sa,Es=new V,il=new V;class dd{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):H_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Es,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(il)),this.expandByPoint(Es.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V_=0;const Cn=new Et,rl=new Kt,Hr=new V,pn=new sa,Ts=new sa,Ft=new V;class Di extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?Af:wf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(pn.min,Ts.min),pn.expandByPoint(Ft),Ft.addVectors(pn.max,Ts.max),pn.expandByPoint(Ft)):(pn.expandByPoint(Ts.min),pn.expandByPoint(Ts.max))}pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ft.fromBufferAttribute(o,c),l&&(Hr.fromBufferAttribute(e,c),Ft.add(Hr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new V,l[x]=new V;const c=new V,d=new V,h=new V,u=new Ze,f=new Ze,_=new Ze,g=new V,m=new V;function p(x,E,C){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,E),_.fromBufferAttribute(s,C),d.sub(c),h.sub(c),f.sub(u),_.sub(u);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(I),o[x].add(g),o[E].add(g),o[C].add(g),l[x].add(m),l[E].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){const C=S[x],I=C.start,k=C.count;for(let F=I,L=I+k;F<L;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new V,y=new V,b=new V,T=new V;function A(x){b.fromBufferAttribute(r,x),T.copy(b);const E=o[x];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(T,E);const I=y.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,E=S.length;x<E;++x){const C=S[x],I=C.start,k=C.count;for(let F=I,L=I+k;F<L;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,d=new V,h=new V;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*d;for(let p=0;p<d;p++)u[_++]=c[f++]}return new wi(u,d,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sl=new V,G_=new V,W_=new Ue;class Hi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sl.subVectors(n,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(sl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W_.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $_=0;class aa extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Ns,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new V,al=new V,xa=new V,ya=new V;class X_{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){al.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(al);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xa),o=ya.dot(this.direction),l=-ya.dot(xa),c=ya.lengthSq(),d=Math.abs(1-a*a);let h,u,f,_;if(d>0)if(h=a*l-o,u=a*o-l,_=s*d,h>=0)if(u>=-_)if(u<=_){const g=1/d;h*=g,u*=g,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(al).addScaledVector(xa,u),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),r=mi.dot(mi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,g=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(d);let A,x,E,C,I,k,F,L,O,$,G,j;if(y>=b&&y>=T?(E=l,k=h,O=_,j=p,l>=0?(A=c,x=d,C=u,I=f,F=g,L=m,$=S,G=w):(A=d,x=c,C=f,I=u,F=m,L=g,$=w,G=S)):b>=T?(E=c,k=u,O=g,j=S,c>=0?(A=d,x=l,C=f,I=h,F=m,L=_,$=w,G=p):(A=l,x=d,C=h,I=f,F=_,L=m,$=p,G=w)):(E=d,k=f,O=m,j=w,d>=0?(A=l,x=c,C=h,I=u,F=_,L=g,$=p,G=S):(A=c,x=l,C=u,I=h,F=g,L=_,$=S,G=p)),E===0)return null;const X=A/E,J=x/E,te=1/E,be=C-X*k,we=I-J*k,Ge=F-X*O,ke=L-J*O,tt=$-X*j,Y=G-J*j,ee=tt*ke-Y*Ge,ye=be*Y-we*tt,Ie=Ge*we-ke*be;if(r){if(ee<0||ye<0||Ie<0)return null}else if((ee<0||ye<0||Ie<0)&&(ee>0||ye>0||Ie>0))return null;const ve=ee+ye+Ie;if(ve===0)return null;const ze=te*(ee*k+ye*O+Ie*j);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rf extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uu=new Et,or=new X_,Sa=new dd,hu=new V,Ma=new V,ba=new V,Ea=new V,ol=new V,Ta=new V,fu=new V,wa=new V;class $n extends Kt{constructor(e=new Di,t=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(ol.fromBufferAttribute(h,e),a?Ta.addScaledVector(ol,d):Ta.addScaledVector(ol.sub(t),d))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Sa.containsPoint(or.origin)===!1&&(or.intersectSphere(Sa,hu)===null||or.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(uu.copy(s).invert(),or.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=w;y<b;y+=3){const T=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);r=Aa(this,p,e,n,c,d,h,T,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=Aa(this,a,e,n,c,d,h,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=w;y<b;y+=3){const T=y,A=y+1,x=y+2;r=Aa(this,p,e,n,c,d,h,T,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const S=m,w=m+1,y=m+2;r=Aa(this,a,e,n,c,d,h,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function q_(i,e,t,n,r,s,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Mr,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:i}}function Aa(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,ba),i.getVertexPosition(c,Ea);const d=q_(i,e,t,n,Ma,ba,Ea,fu);if(d){const h=new V;zn.getBarycoord(fu,Ma,ba,Ea,h),r&&(d.uv=zn.getInterpolatedAttribute(r,o,l,c,h,new Ze)),s&&(d.uv1=zn.getInterpolatedAttribute(s,o,l,c,h,new Ze)),a&&(d.normal=zn.getInterpolatedAttribute(a,o,l,c,h,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new V,materialIndex:0};zn.getNormal(Ma,ba,Ea,u.normal),d.face=u,d.barycoord=h}return d}class Y_ extends zt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=It,d=It,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lr=new dd,K_=new Ze(.5,.5),Ra=new V;class ud{constructor(e=new Hi,t=new Hi,n=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],w=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-a,f-d,p-_,b-S).normalize(),r[1].setComponents(c+a,f+d,p+_,b+S).normalize(),r[2].setComponents(c+o,f+h,p+g,b+w).normalize(),r[3].setComponents(c-o,f-h,p-g,b-w).normalize(),n)r[4].setComponents(l,u,m,y).normalize(),r[5].setComponents(c-l,f-u,p-m,b-y).normalize();else if(r[4].setComponents(c-l,f-u,p-m,b-y).normalize(),t===ri)r[5].setComponents(c+l,f+u,p+m,b+y).normalize();else if(t===Qs)r[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const t=K_.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cf extends zt{constructor(e=[],t=br,n,r,s,a,o,l,c,d){super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ea extends zt{constructor(e,t,n=li,r,s,a,o=It,l=It,c,d=Pi,h=1){if(d!==Pi&&d!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Z_ extends ea{constructor(e,t=li,n=br,r,s,a=It,o=It,l,c=Pi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lf extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends Di{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(d,3)),this.setAttribute("uv",new Ai(h,2));function _(g,m,p,S,w,y,b,T,A,x,E){const C=y/A,I=b/x,k=y/2,F=b/2,L=T/2,O=A+1,$=x+1;let G=0,j=0;const X=new V;for(let J=0;J<$;J++){const te=J*I-F;for(let be=0;be<O;be++){const we=be*C-k;X[g]=we*S,X[m]=te*w,X[p]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[p]=T>0?1:-1,d.push(X.x,X.y,X.z),h.push(be/A),h.push(1-J/x),G+=1}}for(let J=0;J<x;J++)for(let te=0;te<A;te++){const be=u+te+O*J,we=u+te+O*(J+1),Ge=u+(te+1)+O*(J+1),ke=u+(te+1)+O*J;l.push(be,we,ke),l.push(we,Ge,ke),j+=6}o.addGroup(f,j,E),f+=j,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class go extends Di{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<d;p++){const S=p*u-a;for(let w=0;w<c;w++){const y=w*h-s;_.push(y,-S,0),g.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,y=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;f.push(w,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new Ai(_,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}function _s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(pu(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(pu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=_s(i[t]);for(const r in n)e[r]=n[r]}return e}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function J_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Q_={clone:_s,merge:Jt};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tg extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mu extends aa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=ed,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ng extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ll={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_u(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_u(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _u(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class rg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sg=new rg;class Df{constructor(e){this.manager=e!==void 0?e:sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Df.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vr=new WeakMap;class ag extends Df{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ll.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Vr.get(a);h===void 0&&(h=[],Vr.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=js("img");function l(){d(),t&&t(this);const h=Vr.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Vr.delete(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),ll.remove(`image:${e}`);const u=Vr.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(h)}Vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ll.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class If extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const cl=new Et,gu=new V,vu=new V;class og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ca=new V,La=new gs,Yn=new V;class Uf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ca,La,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,La,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ca,La,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,La,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new V,xu=new Ze,yu=new Ze;class Dn extends Uf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,xu,yu),t.subVectors(yu,xu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hd extends Uf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lg extends og{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends If{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cg extends If{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gr=-90,Wr=1;class dg extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Gr,Wr,e,t);r.layers=this.layers,this.add(r);const s=new Dn(Gr,Wr,e,t);s.layers=this.layers,this.add(s);const a=new Dn(Gr,Wr,e,t);a.layers=this.layers,this.add(a);const o=new Dn(Gr,Wr,e,t);o.layers=this.layers,this.add(o);const l=new Dn(Gr,Wr,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Gr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ug extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class kf{static{kf.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Mu(i,e,t,n){const r=fg(n);switch(t){case xf:return i*e;case Sf:return i*e/r.components*r.byteLength;case rd:return i*e/r.components*r.byteLength;case Er:return i*e*2/r.components*r.byteLength;case sd:return i*e*2/r.components*r.byteLength;case yf:return i*e*3/r.components*r.byteLength;case Vn:return i*e*4/r.components*r.byteLength;case ad:return i*e*4/r.components*r.byteLength;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:case Kl:return Math.max(i,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case Zl:case Jl:case jl:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ql:case io:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _c:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(i){switch(i){case Sn:case mf:return{byteLength:1,components:1};case Zs:case _f:case ci:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case li:case td:case ii:return{byteLength:4,components:1};case gf:case vf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nf(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pg(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<h.length;f++){const _=h[u],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,h[u]=g)}h.length=u+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,f0=`uniform sampler2D dfgLUT;
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
}`,p0=`
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
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
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,Mv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Ev=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Pv=`#define LAMBERT
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
}`,Dv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,kv=`#define NORMAL
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
}`,Nv=`#define NORMAL
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
}`,Fv=`#define PHONG
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,Hv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Gv=`uniform float size;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Xv=`uniform vec3 color;
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
}`,qv=`uniform float rotation;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:mg,alphahash_pars_fragment:_g,alphamap_fragment:gg,alphamap_pars_fragment:vg,alphatest_fragment:xg,alphatest_pars_fragment:yg,aomap_fragment:Sg,aomap_pars_fragment:Mg,batching_pars_vertex:bg,batching_vertex:Eg,begin_vertex:Tg,beginnormal_vertex:wg,bsdfs:Ag,iridescence_fragment:Rg,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ig,color_fragment:Ug,color_pars_fragment:kg,color_pars_vertex:Ng,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Hg,displacementmap_vertex:Vg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Wg,colorspace_fragment:$g,colorspace_pars_fragment:Xg,envmap_fragment:qg,envmap_common_pars_fragment:Yg,envmap_pars_fragment:Kg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:o0,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:jg,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:s0,lights_pars_begin:a0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:d0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:_0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:M0,map_pars_fragment:b0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:A0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:L0,morphtarget_pars_vertex:P0,morphtarget_vertex:D0,normal_fragment_begin:I0,normal_fragment_maps:U0,normal_pars_fragment:k0,normal_pars_vertex:N0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:$0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:j0,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:rv,specularmap_fragment:sv,specularmap_pars_fragment:av,tonemapping_fragment:ov,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:dv,uv_pars_fragment:uv,uv_pars_vertex:hv,uv_vertex:fv,worldpos_vertex:pv,background_vert:mv,background_frag:_v,backgroundCube_vert:gv,backgroundCube_frag:vv,cube_vert:xv,cube_frag:yv,depth_vert:Sv,depth_frag:Mv,distance_vert:bv,distance_frag:Ev,equirect_vert:Tv,equirect_frag:wv,linedashed_vert:Av,linedashed_frag:Rv,meshbasic_vert:Cv,meshbasic_frag:Lv,meshlambert_vert:Pv,meshlambert_frag:Dv,meshmatcap_vert:Iv,meshmatcap_frag:Uv,meshnormal_vert:kv,meshnormal_frag:Nv,meshphong_vert:Fv,meshphong_frag:Ov,meshphysical_vert:Bv,meshphysical_frag:zv,meshtoon_vert:Hv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Wv,shadow_vert:$v,shadow_frag:Xv,sprite_vert:qv,sprite_frag:Yv},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Jt([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Jt([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Pa={r:0,b:0,g:0},Kv=new Et,Ff=new Ue;Ff.set(-1,0,0,0,1,0,0,0,1);function Zv(i,e,t,n,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=e.get(w,y)}return w}function _(S){let w=!1;const y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===_o)?(c===void 0&&(c=new $n(new Rr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:_s(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ff),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==st,(d!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $n(new go(2,2),new di({name:"BackgroundMaterial",uniforms:_s(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(Pa,Pf(i)),t.buffers.color.setClear(Pa.r,Pa.g,Pa.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:g,dispose:p}}function Jv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,k,F,L,O){let $=!1;const G=h(I,L,F,k);s!==G&&(s=G,c(s.object)),$=f(I,L,F,O),$&&_(I,L,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(I,k,F,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function h(I,k,F,L){const O=L.wireframe===!0;let $=n[k.id];$===void 0&&($={},n[k.id]=$);const G=I.isInstancedMesh===!0?I.id:0;let j=$[G];j===void 0&&(j={},$[G]=j);let X=j[F.id];X===void 0&&(X={},j[F.id]=X);let J=X[O];return J===void 0&&(J=u(l()),X[O]=J),J}function u(I){const k=[],F=[],L=[];for(let O=0;O<t;O++)k[O]=0,F[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,k,F,L){const O=s.attributes,$=k.attributes;let G=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){const te=O[X];let be=$[X];if(be===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function _(I,k,F,L){const O={},$=k.attributes;let G=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){let te=$[X];te===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const be={};be.attribute=te,te&&te.data&&(be.data=te.data),O[X]=be,G++}s.attributes=O,s.attributesNum=G,s.index=L}function g(){const I=s.newAttributes;for(let k=0,F=I.length;k<F;k++)I[k]=0}function m(I){p(I,0)}function p(I,k){const F=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;F[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),O[I]!==k&&(i.vertexAttribDivisor(I,k),O[I]=k)}function S(){const I=s.newAttributes,k=s.enabledAttributes;for(let F=0,L=k.length;F<L;F++)k[F]!==I[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function w(I,k,F,L,O,$,G){G===!0?i.vertexAttribIPointer(I,k,F,O,$):i.vertexAttribPointer(I,k,F,L,O,$)}function y(I,k,F,L){g();const O=L.attributes,$=F.getAttributes(),G=k.defaultAttributeValues;for(const j in $){const X=$[j];if(X.location>=0){let J=O[j];if(J===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const te=J.normalized,be=J.itemSize,we=e.get(J);if(we===void 0)continue;const Ge=we.buffer,ke=we.type,tt=we.bytesPerElement,Y=ke===i.INT||ke===i.UNSIGNED_INT||J.gpuType===td;if(J.isInterleavedBufferAttribute){const ee=J.data,ye=ee.stride,Ie=J.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve,ee.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ve=0;ve<X.locationSize;ve++)w(X.location+ve,be/X.locationSize,ke,te,ye*tt,(Ie+be/X.locationSize*ve)*tt,Y)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee,J.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ee=0;ee<X.locationSize;ee++)w(X.location+ee,be/X.locationSize,ke,te,be*tt,be/X.locationSize*ee*tt,Y)}}else if(G!==void 0){const te=G[j];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}S()}function b(){E();for(const I in n){const k=n[I];for(const F in k){const L=k[F];for(const O in L){const $=L[O];for(const G in $)d($[G].object),delete $[G];delete L[O]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const k=n[I.id];for(const F in k){const L=k[F];for(const O in L){const $=L[O];for(const G in $)d($[G].object),delete $[G];delete L[O]}}delete n[I.id]}function A(I){for(const k in n){const F=n[k];for(const L in F){const O=F[L];if(O[I.id]===void 0)continue;const $=O[I.id];for(const G in $)d($[G].object),delete $[G];delete O[I.id]}}}function x(I){for(const k in n){const F=n[k],L=I.isInstancedMesh===!0?I.id:0,O=F[L];if(O!==void 0){for(const $ in O){const G=O[$];for(const j in G)d(G[j].object),delete G[j];delete O[$]}delete F[L],Object.keys(F).length===0&&delete n[k]}}}function E(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Qv(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==ii&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(De("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:T}}function ex(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||r;return r=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const S=s?0:n,w=S*4;let y=p.clippingState||null;l.value=y,y=d(_,u,w,f);for(let b=0;b!==w;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==g;++w,y+=4)a.copy(h[w]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const Qr=4,tx=6,nx=20,ix=256,ws=new hd,bu=new Qe;let dl=null,ul=0,hl=0,fl=!1;const rx=new V,cr=new V;class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=rx}=s;dl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,ul,hl),this._renderer.xr.enabled=fl,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:ci,format:Vn,colorSpace:so,depthBuffer:!1},r=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sx(s)),this._blurMaterial=ox(s,e,t),this._ggxMaterial=ax(s,e,t)}return r}_compileMaterial(e){const t=new $n(new Di,e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r,s){const l=new Dn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bu),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new Rr,new Rf({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(bu),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[w],s.y,s.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[w]));const b=this._cubeSize;$r(r,y*b,w>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===br||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Qr?n-_+Qr:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,$r(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(o,ws),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,$r(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(o,ws)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],h=3*d*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),u=4*(this._cubeSize-d);$r(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,ws)}}function sx(i){const e=[],t=[];let n=i;const r=i-Qr+1+tx;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,_=new Float32Array(f*u*h),g=new Float32Array(f*u*h);for(let p=0;p<h;p++){const S=p%3*2/3-1,w=p>2?0:-1,y=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];_.set(y,f*u*p);for(let b=0;b<u;b++){const T=d[b*2]*2-1,A=d[b*2+1]*2-1;p===0?cr.set(1,A,T):p===1?cr.set(-T,1,-A):p===2?cr.set(-T,A,1):p===3?cr.set(-1,A,-T):p===4?cr.set(-T,-1,A):cr.set(T,A,-1),cr.toArray(g,(p*u+b)*f)}}const m=new Di;m.setAttribute("position",new wi(_,f)),m.setAttribute("outputDirection",new wi(g,f)),t.push(new $n(m,null)),n>Qr&&n--}return{lodMeshes:t,sizeLods:e}}function Tu(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ax(i,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ox(i,e,t){return new di({name:"SphericalGaussianBlur",defines:{SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function wu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Au(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Of extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ei});s.uniforms.tEquirect.value=t;const a=new $n(r,s),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=qt),new dg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function lx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Fo||f===Oo)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new Of(_.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,_=f===Fo||f===Oo,g=f===br||f===ms;if(_||g){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Eu(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new Eu(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===Fo?u.mapping=br:f===Oo&&(u.mapping=ms),u}function l(u){let f=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function cx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&rs("WebGLRenderer: "+n+" extension not supported."),r}}}function dx(i,e,t,n){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(f!==null){const S=f.array;g=f.version;for(let w=0,y=S.length;w<y;w+=3){const b=S[w+0],T=S[w+1],A=S[w+2];u.push(b,T,T,A,A,b)}}else{const S=_.array;g=_.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const b=w+0,T=w+1,A=w+2;u.push(b,T,T,A,A,b)}}const m=new(_.count>=65535?Af:wf)(u,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function ux(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];t.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function fx(i,e,t){const n=new WeakMap,r=new bt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),_===!0&&(w=2),g===!0&&(w=3);let y=o.attributes.position.count*w,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*b*4*h),A=new bf(T,y,b,h);A.type=ii,A.needsUpdate=!0;const x=w*4;for(let C=0;C<h;C++){const I=m[C],k=p[C],F=S[C],L=y*b*4*C;for(let O=0;O<I.count;O++){const $=O*x;f===!0&&(r.fromBufferAttribute(I,O),T[L+$+0]=r.x,T[L+$+1]=r.y,T[L+$+2]=r.z,T[L+$+3]=0),_===!0&&(r.fromBufferAttribute(k,O),T[L+$+4]=r.x,T[L+$+5]=r.y,T[L+$+6]=r.z,T[L+$+7]=0),g===!0&&(r.fromBufferAttribute(F,O),T[L+$+8]=r.x,T[L+$+9]=r.y,T[L+$+10]=r.z,T[L+$+11]=F.itemSize===4?r.w:1)}}u={count:h,texture:A,size:new Ze(y,b)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function px(i,e,t,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const mx={[of]:"LINEAR_TONE_MAPPING",[lf]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[ff]:"NEUTRAL_TONE_MAPPING",[uf]:"CUSTOM_TONE_MAPPING"};function _x(i,e,t,n,r,s){const a=new Gn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Di;c.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const d=new tg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new $n(c,d),u=new hd(-1,1,1,-1,0,1);let f=null,_=null,g=!1,m,p=null,S=[],w=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let T=0;T<S.length;T++){const A=S[T];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){S=y,w=S.length>0&&S[0].isRenderPass===!0;const b=a.width,T=a.height;S.length>0&&o===null&&(o=new Gn(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const x=S[A];x.setSize&&x.setSize(b,T)}},this.begin=function(y,b){if(g||y.toneMapping===si&&S.length===0)return!1;if(p=b,b!==null){const T=b.width,A=b.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=si,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,g=!0;let T=a,A=o;for(let x=0;x<S.length;x++){const E=S[x];E.enabled!==!1&&(E.render(y,A,T,b),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==y.outputColorSpace||_!==y.toneMapping){f=y.outputColorSpace,_=y.toneMapping,d.defines={},$e.getTransfer(f)===st&&(d.defines.SRGB_TRANSFER="");const x=mx[_];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Bf=new zt,Ec=new ea(1,1),zf=new bf,Hf=new P_,Vf=new Cf,Ru=[],Cu=[],Lu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xo(i,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),kt(t,n)}}function Mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),kt(t,n)}}function bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),kt(t,n)}}function Ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Dx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=t.isReversedDepthBuffer()?ld:od,s=Ec):s=Bf,t.setTexture2D(e||s,r)}function Ix(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hf,r)}function Ux(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vf,r)}function kx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zf,r)}function Nx(i){switch(i){case 5126:return gx;case 35664:return vx;case 35665:return xx;case 35666:return yx;case 35674:return Sx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Lx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return kx}}function Fx(i,e){i.uniform1fv(this.addr,e)}function Ox(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Bx(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function zx(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function Hx(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vx(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gx(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wx(i,e){i.uniform1iv(this.addr,e)}function $x(i,e){i.uniform2iv(this.addr,e)}function Xx(i,e){i.uniform3iv(this.addr,e)}function qx(i,e){i.uniform4iv(this.addr,e)}function Yx(i,e){i.uniform1uiv(this.addr,e)}function Kx(i,e){i.uniform2uiv(this.addr,e)}function Zx(i,e){i.uniform3uiv(this.addr,e)}function Jx(i,e){i.uniform4uiv(this.addr,e)}function Qx(i,e,t){const n=this.cache,r=e.length,s=xo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ec:a=Bf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jx(i,e,t){const n=this.cache,r=e.length,s=xo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hf,s[a])}function ey(i,e,t){const n=this.cache,r=e.length,s=xo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vf,s[a])}function ty(i,e,t){const n=this.cache,r=e.length,s=xo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zf,s[a])}function ny(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return $x;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}class iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}}class ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}}class sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Iu(i,e){i.seq.push(e),i.map[e.id]=e}function ay(i,e,t){const n=i.name,r=n.length;for(pl.lastIndex=0;;){const s=pl.exec(n),a=pl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Iu(t,c===void 0?new iy(o,i,e):new ry(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new sy(o),Iu(t,h)),t=h}}}class qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ay(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const oy=37297;let ly=0;function cy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ku=new Ue;function dy(i){$e._getMatrix(ku,$e.workingColorSpace,i);const e=`mat3( ${ku.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+cy(i.getShaderSource(e),o)}else return s}function uy(i,e){const t=dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hy={[of]:"Linear",[lf]:"Reinhard",[cf]:"Cineon",[df]:"ACESFilmic",[hf]:"AgX",[ff]:"Neutral",[uf]:"Custom"};function fy(i,e){const t=hy[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new V;function py(){$e.getLuminanceCoefficients(Da);const i=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function _y(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ds(i){return i!==""}function Fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(vy,yy)}const xy=new Map;function yy(i,e){let t=Oe[e];if(t===void 0){const n=xy.get(e);if(n!==void 0)t=Oe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tc(t)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(Sy,My)}function My(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const by={[Ha]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Ey(i){return by[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ty={[br]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ay={[ms]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cy={[ed]:"ENVMAP_BLENDING_MULTIPLY",[a_]:"ENVMAP_BLENDING_MIX",[o_]:"ENVMAP_BLENDING_ADD"};function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[i.combine]||"ENVMAP_BLENDING_NONE"}function Py(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ey(t),c=wy(t),d=Ry(t),h=Ly(t),u=Py(t),f=my(t),_=_y(s),g=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Oe.tonemapping_pars_fragment:"",t.toneMapping!==si?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Tc(a),a=Fu(a,t),a=Ou(a,t),o=Tc(o),o=Fu(o,t),o=Ou(o,t),a=Bu(a),o=Bu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,y=S+p+o,b=Uu(r,r.VERTEX_SHADER,w),T=Uu(r,r.FRAGMENT_SHADER,y);r.attachShader(g,b),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(g)||"",F=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(T)||"",O=k.trim(),$=F.trim(),G=L.trim();let j=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,b,T);else{const J=Nu(r,b,"vertex"),te=Nu(r,T,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+J+`
`+te)}else O!==""?De("WebGLProgram: Program Info Log:",O):($===""||G==="")&&(X=!1);X&&(I.diagnostics={runnable:j,programLog:O,vertexShader:{log:$,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(b),r.deleteShader(T),x=new qa(r,g),E=gy(r,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(g,oy)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let Iy=0;class Uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ky(e),t.set(e,n)),n}}class ky{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Ny(i){return i===Er||i===io||i===ro}function Fy(i,e,t,n,r,s){const a=new Ef,o=new Uy,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,C,I,k,F){const L=I.fog,O=k.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||$,G),X=j&&j.mapping===_o?j.image.height:null,J=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=te!==void 0?te.length:0;let we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let Ge,ke,tt,Y;if(J){const ht=Qn[J];Ge=ht.vertexShader,ke=ht.fragmentShader}else{Ge=x.vertexShader,ke=x.fragmentShader;const ht=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,ht,nt),tt=ht.id,Y=nt.id}const ee=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,ze=!!x.map,Dt=!!x.matcap,He=!!j,je=!!x.aoMap,ut=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Nt=!!x.displacementMap,en=!!x.emissiveMap,vt=!!x.metalnessMap,Rt=!!x.roughnessMap,U=x.anisotropy>0,Vt=x.clearcoat>0,rt=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,N=x.sheen>0,H=x.transmission>0,q=U&&!!x.anisotropyMap,ie=Vt&&!!x.clearcoatMap,ae=Vt&&!!x.clearcoatNormalMap,K=Vt&&!!x.clearcoatRoughnessMap,Q=v&&!!x.iridescenceMap,oe=v&&!!x.iridescenceThicknessMap,Re=N&&!!x.sheenColorMap,he=N&&!!x.sheenRoughnessMap,le=!!x.specularMap,Ce=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Ne=H&&!!x.transmissionMap,D=H&&!!x.thicknessMap,ce=!!x.gradientMap,Z=!!x.alphaMap,de=x.alphaTest>0,_e=!!x.alphaHash,ne=!!x.extensions;let Le=si;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Ee={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:ke,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:Dt,envMap:He,envMapMode:He&&j.mapping,envMapCubeUVHeight:X,aoMap:je,lightMap:ut,bumpMap:We,normalMap:_t,displacementMap:Nt,emissiveMap:en,normalMapObjectSpace:_t&&x.normalMapType===d_,normalMapTangentSpace:_t&&x.normalMapType===Mc,packedNormalMap:_t&&x.normalMapType===Mc&&Ny(x.normalMap.format),metalnessMap:vt,roughnessMap:Rt,anisotropy:U,anisotropyMap:q,clearcoat:Vt,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:K,dispersion:rt,retroreflection:R,iridescence:v,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:N,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:le,specularColorMap:Ce,specularIntensityMap:Pe,transmission:H,transmissionMap:Ne,thicknessMap:D,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:_e,combine:x.combine,mapUv:ze&&_(x.map.channel),aoMapUv:je&&_(x.aoMap.channel),lightMapUv:ut&&_(x.lightMap.channel),bumpMapUv:We&&_(x.bumpMap.channel),normalMapUv:_t&&_(x.normalMap.channel),displacementMapUv:Nt&&_(x.displacementMap.channel),emissiveMapUv:en&&_(x.emissiveMap.channel),metalnessMapUv:vt&&_(x.metalnessMap.channel),roughnessMapUv:Rt&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:ie&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:Ce&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:Ne&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:Z&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||U),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(ze||Z),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:en&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const E=f[x.type];let C;if(E){const I=Qn[E];C=Q_.clone(I.uniforms)}else C=x.uniforms;return C}function y(x,E){let C=d.get(E);return C!==void 0?++C.usedTimes:(C=new Dy(i,E,x,r),c.push(C),d.set(E,C)),C}function b(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function Oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function By(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,g,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=_,S.materialVariant=a(u),S.groupOrder=g,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,_,g,m,p,S){S.reversedDepth===!0&&(m=-m);const w=o(u,f,_,g,m,p);_.transmission>0?n.push(w):_.transparent===!0?r.push(w):t.push(w)}function c(u,f,_,g,m,p){const S=o(u,f,_,g,m,p);_.transmission>0?n.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function d(u,f){t.length>1&&t.sort(u||By),n.length>1&&n.sort(f||Hu),r.length>1&&r.sort(f||Hu)}function h(){for(let u=e,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function zy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Vu,i.set(n,[a])):r>=s.length?(a=new Vu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Qe};break;case"SpotLight":t={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Vy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gy=0;function Wy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $y(i){const e=new Hy,t=Vy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const r=new V,s=new Et,a=new Et;function o(c){let d=0,h=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,w=0,y=0,b=0,T=0,A=0,x=0,E=0,C=0;c.sort(Wy);for(let k=0,F=c.length;k<F;k++){const L=c[k],O=L.color,$=L.intensity,G=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Er?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=O.r*$,h+=O.g*$,u+=O.b*$;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],$);C++}else if(L.isSunLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[_]=te,n.sunShadowMap[_]=j;const be=J.getViewportCount();for(let we=0;we<be;we++)n.sunShadowMatrix[g+we]=J.getMatrix(we),n.sunShadowCascade[g+we]=J._cascadeData[we];g+=be,_++}n.sun[f]=X,f++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar($),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[S]=X;const J=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[S]=J.matrix,L.castShadow){const te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=j,A++}S++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(O).multiplyScalar($),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=X,w++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=L.shadow.matrix,T++}n.point[p]=X,p++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar($),X.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[y]=X,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==_||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==A||I.numSpotMaps!==x||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=_,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=A,I.numSpotMaps=x,I.numLightProbes=C,n.version=Gy++)}function l(c,d){let h=0,u=0,f=0,_=0,g=0,m=0;const p=d.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const y=c[S];if(y.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),h++}else if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(y.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Gu(i){const e=new $y(i),t=[],n=[],r=[];function s(u){h.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gu(i),e.set(r,[o])):s>=a.length?(o=new Gu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,Ky=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Zy=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Wu=new Et,As=new V,ml=new V;function Jy(i,e,t){let n=new ud;const r=new Ze,s=new Ze,a=new bt,o=new ng,l=new ig,c={},d=t.maxTextureSize,h={[Mr]:dn,[dn]:Mr,[yi]:yi},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $n(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let p=this.type;this.render=function(T,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Hm&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ei),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=T.length;L<O;L++){const $=T[L],G=$.shadow;if(G===void 0){De("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const j=G.getFrameExtents();r.multiply(j),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,G.mapSize.y=s.y));const X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||F===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ps){if($.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gn(r.x,r.y,{format:Er,type:ci,minFilter:qt,magFilter:qt,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new ea(r.x,r.y,ii),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=Pi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It}else $.isPointLight?(G.map=new Of(r.x),G.map.depthTexture=new Z_(r.x,li)):(G.map=new Gn(r.x,r.y),G.map.depthTexture=new ea(r.x,r.y,li)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=Pi,this.type===Ha?(G.map.depthTexture.compareFunction=X?ld:od,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,x);for(let te=0;te<J;te++){const be=G.getCamera(te);if($.isPointLight){const we=G.camera,Ge=G.matrix,ke=$.distance||we.far;ke!==we.far&&(we.far=ke,we.updateProjectionMatrix()),As.setFromMatrixPosition($.matrixWorld),we.position.copy(As),ml.copy(we.position),ml.add(Ky[te]),we.up.copy(Zy[te]),we.lookAt(ml),we.updateMatrixWorld(),Ge.makeTranslation(-As.x,-As.y,-As.z),Wu.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Wu,we.coordinateSystem,we.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,te),i.clear();else{te===0&&(i.setRenderTarget(G.map),i.clear());const we=G.getViewport(te);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),k.viewport(a)}n=G.getFrustum(te),y(A,x,be,$,this.type)}G.isPointLightShadow!==!0&&this.type===Ps&&S(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,I)};function S(T,A){const x=e.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Gn(r.x,r.y,{format:Er,type:ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,x,f,g,null)}function w(T,A,x,E){let C=null;const I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=C.uuid,F=A.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let O=L[F];O===void 0&&(O=C.clone(),L[F]=O,A.addEventListener("dispose",b)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Ps?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=i.properties.get(C);k.light=x}return C}function y(T,A,x,E,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ps)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const F=e.update(T),L=T.material;if(Array.isArray(L)){const O=F.groups;for(let $=0,G=O.length;$<G;$++){const j=O[$],X=L[j.materialIndex];if(X&&X.visible){const J=w(T,X,E,C);T.onBeforeShadow(i,T,A,x,F,J,j),i.renderBufferDirect(x,null,F,J,T,j),T.onAfterShadow(i,T,A,x,F,J,j)}}}else if(L.visible){const O=w(T,L,E,C);T.onBeforeShadow(i,T,A,x,F,O,null),i.renderBufferDirect(x,null,F,O,T,null),T.onAfterShadow(i,T,A,x,F,O,null)}}const k=T.children;for(let F=0,L=k.length;F<L;F++)y(k[F],A,x,E,C)}function b(T){T.target.removeEventListener("dispose",b);for(const x in c){const E=c[x],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Qy(i,e){function t(){let D=!1;const ce=new bt;let Z=null;const de=new bt(0,0,0,0);return{setMask:function(_e){Z!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ne,Le,Ee,ht){ht===!0&&(_e*=Ee,ne*=Ee,Le*=Ee),ce.set(_e,ne,Le,Ee),de.equals(ce)===!1&&(i.clearColor(_e,ne,Le,Ee),de.copy(ce))},reset:function(){D=!1,Z=null,de.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Z=null,de=null,_e=null;return{setReversed:function(ne){if(ce!==ne){const Le=e.get("EXT_clip_control");ne?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(ne){ne?ee(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!D&&(i.depthMask(ne),Z=ne)},setFunc:function(ne){if(ce&&(ne=M_[ne]),de!==ne){switch(ne){case Fl:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ne}},setLocked:function(ne){D=ne},setClear:function(ne){_e!==ne&&(_e=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,Z=null,de=null,_e=null,ce=!1}}}function r(){let D=!1,ce=null,Z=null,de=null,_e=null,ne=null,Le=null,Ee=null,ht=null;return{setTest:function(nt){D||(nt?ee(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,Nn,Xn){(Z!==nt||de!==Nn||_e!==Xn)&&(i.stencilFunc(nt,Nn,Xn),Z=nt,de=Nn,_e=Xn)},setOp:function(nt,Nn,Xn){(ne!==nt||Le!==Nn||Ee!==Xn)&&(i.stencilOp(nt,Nn,Xn),ne=nt,Le=Nn,Ee=Xn)},setLocked:function(nt){D=nt},setClear:function(nt){ht!==nt&&(i.clearStencil(nt),ht=nt)},reset:function(){D=!1,ce=null,Z=null,de=null,_e=null,ne=null,Le=null,Ee=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},f=new WeakMap,_=[],g=null,m=!1,p=null,S=null,w=null,y=null,b=null,T=null,A=null,x=new Qe(0,0,0),E=0,C=!1,I=null,k=null,F=null,L=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=j>=2);let J=null,te={};const be=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ge=new bt().fromArray(be),ke=new bt().fromArray(we);function tt(D,ce,Z,de){const _e=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Z;Le++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ce+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ne}const Y={};Y[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ks),We(!1),_t(qd),ee(i.CULL_FACE),je(Ei);function ee(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ye(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ie(D,ce){return u[D]!==ce?(i.bindFramebuffer(D,ce),u[D]=ce,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(D,ce){let Z=_,de=!1;if(D){Z=f.get(ce),Z===void 0&&(Z=[],f.set(ce,Z));const _e=D.textures;if(Z.length!==_e.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Le=_e.length;ne<Le;ne++)Z[ne]=i.COLOR_ATTACHMENT0+ne;Z.length=_e.length,de=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,de=!0);de&&i.drawBuffers(Z)}function ze(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Dt={[Yr]:i.FUNC_ADD,[Gm]:i.FUNC_SUBTRACT,[Wm]:i.FUNC_REVERSE_SUBTRACT};Dt[$m]=i.MIN,Dt[Xm]=i.MAX;const He={[qm]:i.ZERO,[Ym]:i.ONE,[Km]:i.SRC_COLOR,[sf]:i.SRC_ALPHA,[t_]:i.SRC_ALPHA_SATURATE,[jm]:i.DST_COLOR,[Jm]:i.DST_ALPHA,[Zm]:i.ONE_MINUS_SRC_COLOR,[af]:i.ONE_MINUS_SRC_ALPHA,[e_]:i.ONE_MINUS_DST_COLOR,[Qm]:i.ONE_MINUS_DST_ALPHA,[n_]:i.CONSTANT_COLOR,[i_]:i.ONE_MINUS_CONSTANT_COLOR,[r_]:i.CONSTANT_ALPHA,[s_]:i.ONE_MINUS_CONSTANT_ALPHA};function je(D,ce,Z,de,_e,ne,Le,Ee,ht,nt){if(D===Ei){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),D!==Vm){if(D!==p||nt!==C){if((S!==Yr||b!==Yr)&&(i.blendEquation(i.FUNC_ADD),S=Yr,b=Yr),nt)switch(D){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yd:i.blendFunc(i.ONE,i.ONE);break;case Kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kd:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zd:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}w=null,y=null,T=null,A=null,x.set(0,0,0),E=0,p=D,C=nt}return}_e=_e||ce,ne=ne||Z,Le=Le||de,(ce!==S||_e!==b)&&(i.blendEquationSeparate(Dt[ce],Dt[_e]),S=ce,b=_e),(Z!==w||de!==y||ne!==T||Le!==A)&&(i.blendFuncSeparate(He[Z],He[de],He[ne],He[Le]),w=Z,y=de,T=ne,A=Le),(Ee.equals(x)===!1||ht!==E)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ht),x.copy(Ee),E=ht),p=D,C=!1}function ut(D,ce){D.side===yi?ye(i.CULL_FACE):ee(i.CULL_FACE);let Z=D.side===dn;ce&&(Z=!Z),We(Z),D.blending===Ns&&D.transparent===!1?je(Ei):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),en(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function _t(D){D!==Bm?(ee(i.CULL_FACE),D!==k&&(D===qd?i.cullFace(i.BACK):D===zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),k=D}function Nt(D){D!==F&&(G&&i.lineWidth(D),F=D)}function en(D,ce,Z){D?(ee(i.POLYGON_OFFSET_FILL),(L!==ce||O!==Z)&&(L=ce,O=Z,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,Z))):ye(i.POLYGON_OFFSET_FILL)}function vt(D){D?ee(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Rt(D){D===void 0&&(D=i.TEXTURE0+$-1),J!==D&&(i.activeTexture(D),J=D)}function U(D,ce,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+$-1:Z=J);let de=te[Z];de===void 0&&(de={type:void 0,texture:void 0},te[Z]=de),(de.type!==D||de.texture!==ce)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(D,ce||Y[D]),de.type=D,de.texture=ce)}function Vt(){const D=te[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function N(){try{i.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ae(){try{i.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function K(){try{i.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function oe(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function Re(D,ce){h[D]!==ce&&(i.pixelStorei(D,ce),h[D]=ce)}function he(D){Ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ge.copy(D))}function le(D){ke.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function Ce(D,ce){let Z=c.get(ce);Z===void 0&&(Z=new WeakMap,c.set(ce,Z));let de=Z.get(D);de===void 0&&(de=i.getUniformBlockIndex(ce,D.name),Z.set(D,de))}function Pe(D,ce){const de=c.get(ce).get(D);l.get(ce)!==de&&(i.uniformBlockBinding(ce,de,D.__bindingPointIndex),l.set(ce,de))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},J=null,te={},u={},f=new WeakMap,_=[],g=null,m=!1,p=null,S=null,w=null,y=null,b=null,T=null,A=null,x=new Qe(0,0,0),E=0,C=!1,I=null,k=null,F=null,L=null,O=null,Ge.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ye,bindFramebuffer:Ie,drawBuffers:ve,useProgram:ze,setBlending:je,setMaterial:ut,setFlipSided:We,setCullFace:_t,setLineWidth:Nt,setPolygonOffset:en,setScissorTest:vt,activeTexture:Rt,bindTexture:U,unbindTexture:Vt,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:Re,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:ae,texSubImage2D:v,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:he,viewport:le,reset:Ne}}function jy(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return _?new OffscreenCanvas(R,v):js("canvas")}function m(R,v,N){let H=1;const q=rt(R);if((q.width>N||q.height>N)&&(H=N/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(H*q.width),ae=Math.floor(H*q.height);u===void 0&&(u=g(ie,ae));const K=v?g(ie,ae):u;return K.width=ie,K.height=ae,K.getContext("2d").drawImage(R,0,0,ie,ae),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+ae+")."),K}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,v,N,H,q,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),N===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),v===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),N===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),N===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const Q=ie?ao:$e.getTransfer(q);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=Q===st?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),N===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,v){let N;return R?v===null||v===li||v===Js?N=i.DEPTH24_STENCIL8:v===ii?N=i.DEPTH32F_STENCIL8:v===Zs&&(N=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===li||v===Js?N=i.DEPTH_COMPONENT24:v===ii?N=i.DEPTH_COMPONENT32F:v===Zs&&(N=i.DEPTH_COMPONENT16),N}function T(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&h.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),I(v)}function E(R){const v=n.get(R);if(v.__webglInit===void 0)return;const N=R.source,H=f.get(N);if(H){const q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(H).length===0&&f.delete(N)}n.remove(R)}function C(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const N=R.source,H=f.get(N);delete H[v.__cacheKey],a.memory.textures--}function I(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let q=0;q<v.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[H][q]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=R.textures;for(let H=0,q=N.length;H<q;H++){const ie=n.get(N[H]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(R)}let k=0;function F(){k=0}function L(){return k}function O(R){k=R}function $(){const R=k;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function G(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function j(R,v){const N=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const H=R.image;if(H===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,R,v);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function X(R,v){const N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){ye(N,R,v);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function J(R,v){const N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){ye(N,R,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function te(R,v){const N=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){Ie(N,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const be={[Wl]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[$l]:i.MIRRORED_REPEAT},we={[It]:i.NEAREST,[l_]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},Ge={[h_]:i.NEVER,[g_]:i.ALWAYS,[f_]:i.LESS,[od]:i.LEQUAL,[p_]:i.EQUAL,[ld]:i.GEQUAL,[m_]:i.GREATER,[__]:i.NOTEQUAL};function ke(R,v){if(v.type===ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Bo||v.magFilter===ua||v.magFilter===pr||v.minFilter===qt||v.minFilter===Bo||v.minFilter===ua||v.minFilter===pr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,be[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,be[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,be[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,we[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,we[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===It||v.minFilter!==ua&&v.minFilter!==pr||v.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(R,v){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const H=v.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const ie=G(v);if(ie!==R.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),q[ie].usedTimes++;const ae=q[R.__cacheKey];ae!==void 0&&(q[R.__cacheKey].usedTimes--,ae.usedTimes===0&&C(v)),R.__cacheKey=ie,R.__webglTexture=q[ie].texture}return N}function Y(R,v,N){return Math.floor(Math.floor(R/N)/v)}function ee(R,v,N,H){const ie=R.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,N,H,v.data);else{ie.sort((Re,he)=>Re.start-he.start);let ae=0;for(let Re=1;Re<ie.length;Re++){const he=ie[ae],le=ie[Re],Ce=he.start+he.count,Pe=Y(le.start,v.width,4),Ne=Y(he.start,v.width,4);le.start<=Ce+1&&Pe===Ne&&Y(le.start+le.count-1,v.width,4)===Pe?he.count=Math.max(he.count,le.start+le.count-he.start):(++ae,ie[ae]=le)}ie.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Re=0,he=ie.length;Re<he;Re++){const le=ie[Re],Ce=Math.floor(le.start/4),Pe=Math.ceil(le.count/4),Ne=Ce%v.width,D=Math.floor(Ce/v.width),ce=Pe,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ne,D,ce,Z,N,H,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ye(R,v,N){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);const q=tt(R,v),ie=v.source;t.bindTexture(H,R.__webglTexture,i.TEXTURE0+N);const ae=n.get(ie);if(ie.version!==ae.__version||q===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Z=$e.getPrimaries($e.workingColorSpace),de=v.colorSpace===Wi?null:$e.getPrimaries(v.colorSpace),_e=v.colorSpace===Wi||Z===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,r.maxTextureSize);Q=Vt(v,Q);const oe=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let he=y(v.internalFormat,oe,Re,v.normalized,v.colorSpace,v.isVideoTexture);ke(H,v);let le;const Ce=v.mipmaps,Pe=v.isVideoTexture!==!0,Ne=ae.__version===void 0||q===!0,D=ie.dataReady,ce=T(v,Q);if(v.isDepthTexture)he=b(v.format===mr,v.type),Ne&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,he,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,oe,Re,null));else if(v.isDataTexture)if(Ce.length>0){Pe&&Ne&&t.texStorage2D(i.TEXTURE_2D,ce,he,Ce[0].width,Ce[0].height);for(let Z=0,de=Ce.length;Z<de;Z++)le=Ce[Z],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Re,le.data);v.generateMipmaps=!1}else Pe?(Ne&&t.texStorage2D(i.TEXTURE_2D,ce,he,Q.width,Q.height),D&&ee(v,Q,oe,Re)):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,oe,Re,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,Ce[0].width,Ce[0].height,Q.depth);for(let Z=0,de=Ce.length;Z<de;Z++)if(le=Ce[Z],v.format!==Vn)if(oe!==null)if(Pe){if(D)if(v.layerUpdates.size>0){const _e=Mu(le.width,le.height,v.format,v.type);for(const ne of v.layerUpdates){const Le=le.data.subarray(ne*_e/le.data.BYTES_PER_ELEMENT,(ne+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ne,le.width,le.height,1,oe,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,oe,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,le.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,oe,Re,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,oe,Re,le.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Pe&&Ne&&t.texStorage2D(i.TEXTURE_2D,ce,he,Ce[0].width,Ce[0].height);for(let Z=0,de=Ce.length;Z<de;Z++)le=Ce[Z],v.format!==Vn?oe!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,le.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Re,le.data)}else if(v.isDataArrayTexture)if(Pe){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,Q.width,Q.height,Q.depth),D)if(v.layerUpdates.size>0){const Z=Mu(Q.width,Q.height,v.format,v.type);for(const de of v.layerUpdates){const _e=Q.data.subarray(de*Z/Q.data.BYTES_PER_ELEMENT,(de+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,oe,Re,_e)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Re,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,oe,Re,Q.data);else if(v.isData3DTexture)Pe?(Ne&&t.texStorage3D(i.TEXTURE_3D,ce,he,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Re,Q.data)):t.texImage3D(i.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,oe,Re,Q.data);else if(v.isFramebufferTexture){if(Ne)if(Pe)t.texStorage2D(i.TEXTURE_2D,ce,he,Q.width,Q.height);else{let Z=Q.width,de=Q.height;for(let _e=0;_e<ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,he,Z,de,0,oe,Re,null),Z>>=1,de>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),h.add(v),Z.onpaint=de=>{const _e=de.changedElements;for(const ne of h)_e.includes(ne.image)&&(ne.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const _e=i.RGBA,ne=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ne,Le,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Ne){const Z=rt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,ce,he,Z.width,Z.height)}for(let Z=0,de=Ce.length;Z<de;Z++)le=Ce[Z],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,oe,Re,le):t.texImage2D(i.TEXTURE_2D,Z,he,oe,Re,le);v.generateMipmaps=!1}else if(Pe){if(Ne){const Z=rt(Q);t.texStorage2D(i.TEXTURE_2D,ce,he,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Re,Q)}else t.texImage2D(i.TEXTURE_2D,0,he,oe,Re,Q);p(v)&&S(H),ae.__version=ie.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ie(R,v,N){if(v.image.length!==6)return;const H=tt(R,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+N);const ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(i.TEXTURE0+N);const ae=$e.getPrimaries($e.workingColorSpace),K=v.colorSpace===Wi?null:$e.getPrimaries(v.colorSpace),Q=v.colorSpace===Wi||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=v.isCompressedTexture||v.image[0].isCompressedTexture,Re=v.image[0]&&v.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!oe&&!Re?he[ne]=m(v.image[ne],!0,r.maxCubemapSize):he[ne]=Re?v.image[ne].image:v.image[ne],he[ne]=Vt(v,he[ne]);const le=he[0],Ce=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Ne=y(v.internalFormat,Ce,Pe,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ce=ie.__version===void 0||H===!0,Z=q.dataReady;let de=T(v,le);ke(i.TEXTURE_CUBE_MAP,v);let _e;if(oe){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ne,le.width,le.height);for(let ne=0;ne<6;ne++){_e=he[ne].mipmaps;for(let Le=0;Le<_e.length;Le++){const Ee=_e[Le];v.format!==Vn?Ce!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,Ne,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ee.width,Ee.height,Ce,Pe,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,Ne,Ee.width,Ee.height,0,Ce,Pe,Ee.data)}}}else{if(_e=v.mipmaps,D&&ce){_e.length>0&&de++;const ne=rt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ne,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ce,Pe,he[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,he[ne].width,he[ne].height,0,Ce,Pe,he[ne].data);for(let Le=0;Le<_e.length;Le++){const ht=_e[Le].image[ne].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,ht.width,ht.height,Ce,Pe,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,Ne,ht.width,ht.height,0,Ce,Pe,ht.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Pe,he[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,Ce,Pe,he[ne]);for(let Le=0;Le<_e.length;Le++){const Ee=_e[Le];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Ce,Pe,Ee.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,Ne,Ce,Pe,Ee.image[ne])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),ie.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ve(R,v,N,H,q,ie){const ae=s.convert(N.format,N.colorSpace),K=s.convert(N.type),Q=y(N.internalFormat,ae,K,N.normalized,N.colorSpace),oe=n.get(v),Re=n.get(N);if(Re.__renderTarget=v,!oe.__hasExternalTextures){const he=Math.max(1,v.width>>ie),le=Math.max(1,v.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,Q,he,le,v.depth,0,ae,K,null):t.texImage2D(q,ie,Q,he,le,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,Re.__webglTexture,0,vt(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,Re.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const H=v.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=b(v.stencilBuffer,q),ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(v),ie,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,R)}else{const H=v.textures;for(let q=0;q<H.length;q++){const ie=H[q],ae=s.convert(ie.format,ie.colorSpace),K=s.convert(ie.type),Q=y(ie.internalFormat,ae,K,ie.normalized,ie.colorSpace);Rt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(v),Q,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,v,N){const H=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v.depthTexture);const oe=s.convert(v.depthTexture.format),Re=s.convert(v.depthTexture.type);let he;v.depthTexture.format===Pi?he=i.DEPTH_COMPONENT24:v.depthTexture.format===mr&&(he=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,v.width,v.height,0,oe,Re,null)}}else j(v.depthTexture,0);const ie=q.__webglTexture,ae=vt(v),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Q=v.depthTexture.format===mr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pi)Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ie,0);else if(v.depthTexture.format===mr)Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(R){const v=n.get(R),N=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=H}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)Dt(v.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?Dt(v.__webglFramebuffer[0],R,0):Dt(v.__webglFramebuffer,R,0)}else if(N){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),ze(v.__webglDepthbuffer[H],R,!1);else{const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ze(v.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,v,N){const H=n.get(R);v!==void 0&&ve(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&He(R)}function ut(R){const v=R.texture,N=n.get(R),H=n.get(v);R.addEventListener("dispose",x);const q=R.textures,ie=R.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,a.memory.textures++),ie){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let Q=0;Q<v.mipmaps.length;Q++)N.__webglFramebuffer[K][Q]=i.createFramebuffer()}else N.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)N.__webglFramebuffer[K]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,Q=q.length;K<Q;K++){const oe=n.get(q[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Rt(R)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Q=q[K];N.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);const oe=s.convert(Q.format,Q.colorSpace),Re=s.convert(Q.type),he=y(Q.internalFormat,oe,Re,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),le=vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(N.__webglFramebuffer[K][Q],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ve(N.__webglFramebuffer[K],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,Q=q.length;K<Q;K++){const oe=q[K],Re=n.get(oe);let he=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),ke(he,oe),ve(N.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+K,he,0),p(oe)&&S(he)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),ke(K,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(N.__webglFramebuffer[Q],R,v,i.COLOR_ATTACHMENT0,K,Q);else ve(N.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,K,0);p(v)&&S(K),t.unbindTexture()}R.depthBuffer&&He(R)}function We(R){const v=R.textures;for(let N=0,H=v.length;N<H;N++){const q=v[N];if(p(q)){const ie=w(R),ae=n.get(q).__webglTexture;t.bindTexture(ie,ae),S(ie),t.unbindTexture()}}}const _t=[],Nt=[];function en(R){if(R.samples>0){if(Rt(R)===!1){const v=R.textures,N=R.width,H=R.height;let q=i.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(R),K=v.length>1;if(K)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Re=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,q,i.NEAREST),l===!0&&(_t.length=0,Nt.length=0,_t.push(i.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(ie),Nt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Re=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function vt(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=a.render.frame;d.get(R)!==v&&(d.set(R,v),R.update())}function Vt(R,v){const N=R.colorSpace,H=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==so&&N!==Wi&&($e.getTransfer(N)===st?(H!==Vn||q!==Sn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",N)),v}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=je,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eS(i,e){function t(n,r=Wi){let s;const a=$e.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===nd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===id)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mf)return i.BYTE;if(n===_f)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===td)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===yf)return i.RGB;if(n===Vn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Sf)return i.RED;if(n===rd)return i.RED_INTEGER;if(n===Er)return i.RG;if(n===sd)return i.RG_INTEGER;if(n===ad)return i.RGBA_INTEGER;if(n===Va||n===Ga||n===Wa||n===$a)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===Kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Jl||n===Ql||n===jl||n===ec||n===io||n===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zl||n===Jl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ql)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return s.COMPRESSED_R11_EAC;if(n===ec)return s.COMPRESSED_SIGNED_R11_EAC;if(n===io)return s.COMPRESSED_RG11_EAC;if(n===tc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===dc||n===uc||n===hc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===gc||n===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_c)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===yc||n===ro||n===Sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`;class iS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rS extends Ar{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new iS,p={},S=t.getContextAttributes();let w=null,y=null;const b=[],T=[],A=new Ze;let x=null,E=null;const C=new Dn;C.viewport=new bt;const I=new Dn;I.viewport=new bt;const k=[C,I],F=new ug;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new qo,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new qo,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new qo,b[Y]=ee),ee.getHandSpace()};function $(Y){const ee=T.indexOf(Y.inputSource);if(ee===-1)return;const ye=b[ee];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<b.length;Y++){const ee=T[Y];ee!==null&&(T[Y]=null,b[Y].disconnect(ee))}L=null,O=null,m.reset();for(const Y in p)delete p[Y];if(e.setRenderTarget(w),f=null,u=null,h=null,r=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),E!==null){const Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?mr:Pi,Ie=S.stencil?Js:li);const ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(ze),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Gn(u.textureWidth,u.textureHeight,{format:Vn,type:Sn,depthTexture:new ea(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let ee=0;ee<Y.removed.length;ee++){const ye=Y.removed[ee],Ie=T.indexOf(ye);Ie>=0&&(T[Ie]=null,b[Ie].disconnect(ye))}for(let ee=0;ee<Y.added.length;ee++){const ye=Y.added[ee];let Ie=T.indexOf(ye);if(Ie===-1){for(let ze=0;ze<b.length;ze++)if(ze>=T.length){T.push(ye),Ie=ze;break}else if(T[ze]===null){T[ze]=ye,Ie=ze;break}if(Ie===-1)break}const ve=b[Ie];ve&&ve.connect(ye)}}const X=new V,J=new V;function te(Y,ee,ye){X.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const Ie=X.distanceTo(J),ve=ee.projectionMatrix.elements,ze=ye.projectionMatrix.elements,Dt=ve[14]/(ve[10]-1),He=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],ut=(ve[9]-1)/ve[5],We=(ve[8]-1)/ve[0],_t=(ze[8]+1)/ze[0],Nt=Dt*We,en=Dt*_t,vt=Ie/(-We+_t),Rt=vt*-We;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const U=Dt+vt,Vt=He+vt,rt=Nt-Rt,R=en+(Ie-Rt),v=je*He/Vt*U,N=ut*He/Vt*U;Y.projectionMatrix.makePerspective(rt,R,v,N,U,Vt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function be(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,ye=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=I.near=C.near=ee,F.far=I.far=C.far=ye,(L!==F.near||O!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,O=F.far),F.layers.mask=Y.layers.mask|6,C.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Ie=Y.parent,ve=F.cameras;be(F,Ie);for(let ze=0;ze<ve.length;ze++)be(ve[ze],Ie);ve.length===2?te(F,C,I):F.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),we(Y,F,Ie)};function we(Y,ee,ye){ye===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Ge=null;function ke(Y,ee){if(d=ee.getViewerPose(c||a),_=ee,d!==null){const ye=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let He=0;He<ye.length;He++){const je=ye[He];let ut=null;if(f!==null)ut=f.getViewport(je);else{const _t=h.getViewSubImage(u,je);ut=_t.viewport,He===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let We=k[He];We===void 0&&(We=new Dn,We.layers.enable(He),We.viewport=new bt,k[He]=We),We.matrix.fromArray(je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),He===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(We)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const He=h.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let He=0;He<ye.length;He++){const je=ye[He].camera;if(je){let ut=p[je];ut||(ut=new Lf,p[je]=ut);const We=h.getCameraImage(je);ut.sourceTexture=We}}}}for(let ye=0;ye<b.length;ye++){const Ie=T[ye],ve=b[ye];Ie!==null&&ve!==void 0&&ve.update(Ie,ee,c||a)}Ge&&Ge(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const tt=new Nf;tt.setAnimationLoop(ke),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}}const sS=new Et,Gf=new Ue;Gf.set(-1,0,0,0,1,0,0,0,1);function aS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function oS(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const T=b.program;n.uniformBlockBinding(y,T)}function c(y,b){let T=r[y.id];T===void 0&&(m(y),T=d(y),r[y.id]=T,y.addEventListener("dispose",S));const A=b.program;n.updateUBOMapping(y,A);const x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function d(y){const b=h();y.__bindingPointIndex=b;const T=i.createBuffer(),A=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=r[y.id],T=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,E=T.length;x<E;x++){const C=T[x];if(Array.isArray(C))for(let I=0,k=C.length;I<k;I++)f(C[I],x,I,A);else f(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,T,A){if(g(y,b,T,A)===!0){const x=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){const k=E[I],F=p(k);_(k,y.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function _(y,b,T){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,T)}function g(y,b,T,A){const x=y.value,E=b+"_"+T;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const C=A[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){const b=y.uniforms;let T=0;const A=16;for(let E=0,C=b.length;E<C;E++){const I=Array.isArray(b[E])?b[E]:[b[E]];for(let k=0,F=I.length;k<F;k++){const L=I[k],O=Array.isArray(L.value)?L.value:[L.value];for(let $=0,G=O.length;$<G;$++){const j=O[$],X=p(j),J=T%A,te=J%X.boundary,be=J+te;T+=te,be!==0&&A-be<X.storage&&(T+=A-be),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=X.storage}}}const x=T%A;return x>0&&(T+=A-x),y.__size=T,y.__cache={},this}function p(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){const b=y.target;b.removeEventListener("dispose",S);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}const lS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function cS(){return Kn===null&&(Kn=new Y_(lS,16,16,Er,ci),Kn.name="DFG_LUT",Kn.minFilter=qt,Kn.magFilter=qt,Kn.wrapS=Mi,Kn.wrapT=Mi,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class dS{constructor(e={}){const{canvas:t=y_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,m=new Set([ad,sd,rd]),p=new Set([Sn,li,Zs,Js,nd,id]),S=new Uint32Array(4),w=new Int32Array(4),y=new V;let b=null,T=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,k=null,F=null,L=null,O=null;this._outputColorSpace=gn;let $=0,G=0,j=null,X=-1,J=null;const te=new bt,be=new bt;let we=null;const Ge=new Qe(0);let ke=0,tt=t.width,Y=t.height,ee=1,ye=null,Ie=null;const ve=new bt(0,0,tt,Y),ze=new bt(0,0,tt,Y);let Dt=!1;const He=new ud;let je=!1,ut=!1;const We=new Et,_t=new V,Nt=new bt,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Rt(){return j===null?ee:1}let U=n;function Vt(M,P){return t.getContext(M,P)}let rt,R,v,N,H,q,ie,ae,K,Q,oe,Re,he,le,Ce,Pe,Ne,D,ce,Z,de,_e,ne;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),U===null){const P="webgl2";if(U=Vt(P,M),U===null)throw Vt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(M){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),et("WebGLRenderer: "+M.message),M}function Le(){rt=new cx(U),rt.init(),de=new eS(U,rt),R=new jv(U,rt,e,de),v=new Qy(U,rt),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),F=U.createFramebuffer(),L=U.createFramebuffer(),O=U.createFramebuffer(),N=new hx(U),H=new Oy,q=new jy(U,rt,v,H,R,de,N),ie=new lx(C),ae=new pg(U),_e=new Jv(U,ae),K=new dx(U,ae,N,_e),Q=new px(U,K,ae,_e,N),D=new fx(U,R,q),Ce=new ex(H),oe=new Fy(C,ie,rt,R,_e,Ce),Re=new aS(C,H),he=new zy,le=new Xy(rt),Ne=new Zv(C,ie,v,Q,_,l),Pe=new Jy(C,Q,R),ne=new oS(U,N,R,v),ce=new Qv(U,rt,N),Z=new ux(U,rt,N),N.programs=oe.programs,C.capabilities=R,C.extensions=rt,C.properties=H,C.renderLists=he,C.shadowMap=Pe,C.state=v,C.info=N}g!==Sn&&(E=new _x(g,t.width,t.height,o,r,s));const Ee=new rS(C,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(tt,Y,!1))},this.getSize=function(M){return M.set(tt,Y)},this.setSize=function(M,P,W=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=M,Y=P,t.width=Math.floor(M*ee),t.height=Math.floor(P*ee),W===!0&&(t.style.width=M+"px",t.style.height=P+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(tt*ee,Y*ee).floor()},this.setDrawingBufferSize=function(M,P,W){tt=M,Y=P,ee=W,t.width=Math.floor(M*W),t.height=Math.floor(P*W),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(g===Sn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,P,W,B){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,P,W,B),v.viewport(te.copy(ve).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,P,W,B){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,P,W,B),v.scissor(be.copy(ze).multiplyScalar(ee).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(M){v.setScissorTest(Dt=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Ie=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,W=!0){let B=0;if(M){let z=!1;if(j!==null){const me=j.texture.format;z=m.has(me)}if(z){const me=j.texture.type,xe=p.has(me),pe=Ne.getClearColor(),Se=Ne.getClearAlpha(),Ae=pe.r,Fe=pe.g,Ve=pe.b;xe?(S[0]=Ae,S[1]=Fe,S[2]=Ve,S[3]=Se,U.clearBufferuiv(U.COLOR,0,S)):(w[0]=Ae,w[1]=Fe,w[2]=Ve,w[3]=Se,U.clearBufferiv(U.COLOR,0,w))}else B|=U.COLOR_BUFFER_BIT}P&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Ne.dispose(),he.dispose(),le.dispose(),H.dispose(),ie.dispose(),Q.dispose(),_e.dispose(),ne.dispose(),oe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",vd),Ee.removeEventListener("sessionend",xd),nr.stop()};function ht(M){M.preventDefault(),jd("WebGLRenderer: Context Lost."),I=!0}function nt(){jd("WebGLRenderer: Context Restored."),I=!1;const M=N.autoReset,P=Pe.enabled,W=Pe.autoUpdate,B=Pe.needsUpdate,z=Pe.type;Le(),N.autoReset=M,Pe.enabled=P,Pe.autoUpdate=W,Pe.needsUpdate=B,Pe.type=z}function Nn(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xn(M){const P=M.target;P.removeEventListener("dispose",Xn),cp(P)}function cp(M){dp(M),H.remove(M)}function dp(M){const P=H.get(M).programs;P!==void 0&&(P.forEach(function(W){oe.releaseProgram(W)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,W,B,z,me){P===null&&(P=en);const xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=fp(M,P,W,B,z);v.setMaterial(B,xe);let Se=W.index,Ae=1;if(B.wireframe===!0){if(Se=K.getWireframeAttribute(W),Se===void 0)return;Ae=2}const Fe=W.drawRange,Ve=W.attributes.position;let Me=Fe.start*Ae,it=(Fe.start+Fe.count)*Ae;me!==null&&(Me=Math.max(Me,me.start*Ae),it=Math.min(it,(me.start+me.count)*Ae)),Se!==null?(Me=Math.max(Me,0),it=Math.min(it,Se.count)):Ve!=null&&(Me=Math.max(Me,0),it=Math.min(it,Ve.count));const Ct=it-Me;if(Ct<0||Ct===1/0)return;_e.setup(z,B,pe,W,Se);let pt,lt=ce;if(Se!==null&&(pt=ae.get(Se),lt=Z,lt.setIndex(pt)),z.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*Rt()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(z.isLine){let Gt=B.linewidth;Gt===void 0&&(Gt=1),v.setLineWidth(Gt*Rt()),z.isLineSegments?lt.setMode(U.LINES):z.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else z.isPoints?lt.setMode(U.POINTS):z.isSprite&&lt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Gt=z._multiDrawStarts,ge=z._multiDrawCounts,Zt=z._multiDrawCount,Je=Se?ae.get(Se).bytesPerElement:1,Rn=H.get(B).currentProgram.getUniforms();for(let qn=0;qn<Zt;qn++)Rn.setValue(U,"_gl_DrawID",qn),lt.render(Gt[qn]/Je,ge[qn])}else if(z.isInstancedMesh)lt.renderInstances(Me,Ct,z.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Gt);lt.renderInstances(Me,Ct,ge)}else lt.render(Me,Ct)};function gd(M,P,W,B){k!==null&&M.isNodeMaterial&&k.setObject(B,M),je===!0&&Ce.setState(M,W,!1),M.transparent===!0&&M.side===yi&&M.forceSinglePass===!1?(M.side=dn,M.needsUpdate=!0,ca(M,P,B),M.side=Mr,M.needsUpdate=!0,ca(M,P,B),M.side=yi):ca(M,P,B)}this.compile=function(M,P,W=null){W===null&&(W=M),k!==null&&k.renderStart(M,P,W),T=le.get(W),T.init(P),x.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==W&&M.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),ut=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,ut),je===!0&&Ce.setGlobalState(this.clippingPlanes,P),k!==null&&Pe.render(T.state.shadowsArray,W,P);const B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){const pe=me[xe];gd(pe,W,P,z),B.add(pe)}else gd(me,W,P,z),B.add(me)}),T=x.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(M,P,W=null){const B=this.compile(M,P,W);return new Promise(z=>{function me(){if(B.forEach(function(xe){const Se=H.get(xe).currentProgram;(Se===void 0||Se.isReady())&&B.delete(xe)}),B.size===0){z(M);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ao=null;function up(M){Ao&&Ao(M)}function vd(){nr.stop()}function xd(){nr.start()}const nr=new Nf;nr.setAnimationLoop(up),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(M){Ao=M,Ee.setAnimationLoop(M),M===null?nr.stop():nr.start()},Ee.addEventListener("sessionstart",vd),Ee.addEventListener("sessionend",xd),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(M,P);const W=Ee.enabled===!0&&Ee.isPresenting===!0,B=E!==null&&(j===null||W)&&E.begin(C,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(P),P=Ee.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,P,j),T=le.get(M,x.length),T.init(P),T.state.textureUnits=q.getTextureUnits(),x.push(T),We.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),He.setFromProjectionMatrix(We,ri,P.reversedDepth),ut=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,ut),b=he.get(M,A.length),b.init(),A.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Ro(xe,P,-1/0,C.sortObjects)}Ro(M,P,0,C.sortObjects),b.finish(),k!==null&&k.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(ye,Ie),vt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,vt&&Ne.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ce.beginShadows();const z=T.state.shadowsArray;if(Pe.render(z,M,P),je===!0&&Ce.endShadows(),(B&&E.hasRenderPass())===!1){const xe=b.opaque,pe=b.transmissive;if(T.setupLights(),P.isArrayCamera){const Se=P.cameras;if(pe.length>0)for(let Ae=0,Fe=Se.length;Ae<Fe;Ae++){const Ve=Se[Ae];Sd(xe,pe,M,Ve)}vt&&Ne.render(M);for(let Ae=0,Fe=Se.length;Ae<Fe;Ae++){const Ve=Se[Ae];yd(b,M,Ve,Ve.viewport)}}else pe.length>0&&Sd(xe,pe,M,P),vt&&Ne.render(M),yd(b,M,P)}j!==null&&G===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),B&&E.end(C),M.isScene===!0&&M.onAfterRender(C,M,P),_e.resetDefaultState(),X=-1,J=null,x.pop(),x.length>0?(T=x[x.length-1],q.setTextureUnits(T.state.textureUnits),je===!0&&Ce.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,k!==null&&k.renderEnd()};function Ro(M,P,W,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(He)){B&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(We);const xe=Q.update(M),pe=M.material;pe.visible&&b.push(M,xe,pe,W,Nt.z,null,P)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(He))){const xe=Q.update(M),pe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Nt.copy(xe.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(We)),Array.isArray(pe)){const Se=xe.groups;for(let Ae=0,Fe=Se.length;Ae<Fe;Ae++){const Ve=Se[Ae],Me=pe[Ve.materialIndex];Me&&Me.visible&&b.push(M,xe,Me,W,Nt.z,Ve,P)}}else pe.visible&&b.push(M,xe,pe,W,Nt.z,null,P)}}const me=M.children;for(let xe=0,pe=me.length;xe<pe;xe++)Ro(me[xe],P,W,B)}function yd(M,P,W,B){const{opaque:z,transmissive:me,transparent:xe}=M;T.setupLightsView(W),je===!0&&Ce.setGlobalState(C.clippingPlanes,W),B&&v.viewport(te.copy(B)),z.length>0&&la(z,P,W),me.length>0&&la(me,P,W),xe.length>0&&la(xe,P,W),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Sd(M,P,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Me=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Gn(1,1,{generateMipmaps:!0,type:Me?ci:Sn,minFilter:pr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const me=T.state.transmissionRenderTarget[B.id],xe=B.viewport||te;me.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(Ge),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),vt&&Ne.render(W);const Fe=C.toneMapping;C.toneMapping=si;const Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),je===!0&&Ce.setGlobalState(C.clippingPlanes,B),la(M,W,B),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let it=0,Ct=P.length;it<Ct;it++){const pt=P[it],{object:lt,geometry:Gt,material:ge,group:Zt}=pt;if(ge.side===yi&&lt.layers.test(B.layers)){const Je=ge.side;ge.side=dn,ge.needsUpdate=!0,Md(lt,W,B,Gt,ge,Zt),ge.side=Je,ge.needsUpdate=!0,Me=!0}}Me===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,Se,Ae),C.setClearColor(Ge,ke),Ve!==void 0&&(B.viewport=Ve),C.toneMapping=Fe}function la(M,P,W){const B=P.isScene===!0?P.overrideMaterial:null;for(let z=0,me=M.length;z<me;z++){const xe=M[z],{object:pe,geometry:Se,group:Ae}=xe;let Fe=xe.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),pe.layers.test(W.layers)&&Md(pe,P,W,Se,Fe,Ae)}}function Md(M,P,W,B,z,me){k!==null&&z.isNodeMaterial&&k.setObject(M,z),M.onBeforeRender(C,P,W,B,z,me),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,P,W,B,M,me),z.transparent===!0&&z.side===yi&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,C.renderBufferDirect(W,P,B,z,M,me),z.side=Mr,z.needsUpdate=!0,C.renderBufferDirect(W,P,B,z,M,me),z.side=yi):C.renderBufferDirect(W,P,B,z,M,me),M.onAfterRender(C,P,W,B,z,me)}function ca(M,P,W){P.isScene!==!0&&(P=en);const B=H.get(M),z=T.state.lights,me=T.state.shadowsArray,xe=z.state.version,pe=oe.getParameters(M,z.state,me,P,W,T.state.lightProbeGridArray),Se=oe.getProgramCacheKey(pe);let Ae=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;const Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=ie.get(M.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Xn),Ae=new Map,B.programs=Ae);let Ve=Ae.get(Se);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===xe)return Ed(M,pe),Ve}else pe.uniforms=oe.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,W,pe),M.onBeforeCompile(pe,C),Ve=oe.acquireProgram(pe,Se),Ae.set(Se,Ve),B.uniforms=pe.uniforms;const Me=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=Ce.uniform),Ed(M,pe),B.needsLights=mp(M),B.lightsStateVersion=xe,B.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Ve,B.uniformsList=null,Ve}function bd(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=qa.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Ed(M,P){const W=H.get(M);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function hp(M,P){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let W=0,B=M.length;W<B;W++){const z=M[W];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function fp(M,P,W,B,z){P.isScene!==!0&&(P=en),q.resetTextureUnits();const me=P.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,pe=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$e.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=ie.get(B.envMap||xe,Se),Fe=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let pt=si;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(pt=C.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=lt!==void 0?lt.length:0,ge=H.get(B),Zt=T.state.lights;if(je===!0&&(ut===!0||M!==J)){const ft=M===J&&B.id===X;Ce.setState(B,M,ft)}let Je=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Zt.state.version||ge.outputColorSpace!==pe||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==Ae||B.fog===!0&&ge.fog!==me||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ce.numPlanes||ge.numIntersection!==Ce.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==Ve||ge.morphTargets!==Me||ge.morphNormals!==it||ge.morphColors!==Ct||ge.toneMapping!==pt||ge.morphTargetsCount!==Gt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ge.__version=B.version);let Rn=ge.currentProgram;Je===!0&&(Rn=ca(B,P,z),k&&B.isNodeMaterial&&k.onUpdateProgram(B,Rn,ge));let qn=!1,Ii=!1,Cr=!1;const at=Rn.getUniforms(),wt=ge.uniforms;if(v.useProgram(Rn.program)&&(qn=!0,Ii=!0,Cr=!0),B.id!==X&&(X=B.id,Ii=!0),ge.needsLights){const ft=hp(T.state.lightProbeGridArray,z);ge.lightProbeGrid!==ft&&(ge.lightProbeGrid=ft,Ii=!0)}if(qn||J!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",M.projectionMatrix),at.setValue(U,"viewMatrix",M.matrixWorldInverse);const ki=at.map.cameraPosition;ki!==void 0&&ki.setValue(U,_t.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Ii=!0,Cr=!0)}if(ge.needsLights&&(Zt.state.sunShadowMap.length>0&&at.setValue(U,"sunShadowMap",Zt.state.sunShadowMap,q),Zt.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",Zt.state.directionalShadowMap,q),Zt.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",Zt.state.spotShadowMap,q),Zt.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",Zt.state.pointShadowMap,q)),z.isSkinnedMesh){at.setOptional(U,z,"bindMatrix"),at.setOptional(U,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(U,"boneTexture",ft.boneTexture,q))}z.isBatchedMesh&&(at.setOptional(U,z,"batchingTexture"),at.setValue(U,"batchingTexture",z._matricesTexture,q),at.setOptional(U,z,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",z._indirectTexture,q),at.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",z._colorsTexture,q));const Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&D.update(z,W,Rn),(Ii||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,at.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(wt.envMapIntensity.value=P.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=cS()),Ii){if(at.setValue(U,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&pp(wt,Cr),me&&B.fog===!0&&Re.refreshFogUniforms(wt,me),Re.refreshMaterialUniforms(wt,B,ee,Y,T.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const ft=ge.lightProbeGrid;wt.probesSH.value=ft.texture,wt.probesMin.value.copy(ft.boundingBox.min),wt.probesMax.value.copy(ft.boundingBox.max),wt.probesResolution.value.copy(ft.resolution)}qa.upload(U,bd(ge),wt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qa.upload(U,bd(ge),wt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(U,"center",z.center),at.setValue(U,"modelViewMatrix",z.modelViewMatrix),at.setValue(U,"normalMatrix",z.normalMatrix),at.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let ki=0,Lr=ft.length;ki<Lr;ki++){const wd=ft[ki];ne.update(wd,Rn),ne.bind(wd,Rn)}}return Rn}function pp(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function mp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,P,W){const B=H.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=P,H.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){const W=H.get(M);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,W=0){j=M,$=P,G=W;let B=null,z=!1,me=!1;if(M){const pe=H.get(M);if(pe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(M.viewport),be.copy(M.scissor),we=M.scissorTest,v.viewport(te),v.scissor(be),v.setScissorTest(we),X=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(pe.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&H.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Ae=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?B=Ae[P][W]:B=Ae[P],z=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?B=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[W]:B=Ae,te.copy(M.viewport),be.copy(M.scissor),we=M.scissorTest}else te.copy(ve).multiplyScalar(ee).floor(),be.copy(ze).multiplyScalar(ee).floor(),we=Dt;if(W!==0&&(B=F),v.bindFramebuffer(U.FRAMEBUFFER,B)&&v.drawBuffers(M,B),v.viewport(te),v.scissor(be),v.setScissorTest(we),z){const pe=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe.__webglTexture,W)}else if(me){const pe=P;for(let Se=0;Se<M.textures.length;Se++){const Ae=H.get(M.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,W,pe)}}else if(M!==null&&W!==0){const pe=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,W)}X=-1};function Td(M){const P=H.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=R.textureFormatReadable(M.format),P.__typeReadable=R.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,W,B,z,me,xe,pe=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){v.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Ae=M.textures[pe],Fe=Ae.format,Ve=Ae.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);const Me=Td(Ae);if(Me.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&W>=0&&W<=M.height-z&&U.readPixels(P,W,B,z,de.convert(Fe),de.convert(Ve),me)}finally{const Ae=j!==null?H.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,P,W,B,z,me,xe,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(P>=0&&P<=M.width-B&&W>=0&&W<=M.height-z){v.bindFramebuffer(U.FRAMEBUFFER,Se);const Ae=M.textures[pe],Fe=Ae.format,Ve=Ae.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);const Me=Td(Ae);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(P,W,B,z,de.convert(Fe),de.convert(Ve),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ct=j!==null?H.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ct);const pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await S_(U,pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(it),U.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,W=0){const B=Math.pow(2,-W),z=Math.floor(M.image.width*B),me=Math.floor(M.image.height*B),xe=P!==null?P.x:0,pe=P!==null?P.y:0;q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,xe,pe,z,me),v.unbindTexture()},this.copyTextureToTexture=function(M,P,W=null,B=null,z=0,me=0){let xe,pe,Se,Ae,Fe,Ve,Me,it,Ct;const pt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(W!==null)xe=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Fe=W.min.y,Ve=W.isBox3?W.min.z:0;else{const wt=Math.pow(2,-z);xe=Math.floor(pt.width*wt),pe=Math.floor(pt.height*wt),M.isDataArrayTexture?Se=pt.depth:M.isData3DTexture?Se=Math.floor(pt.depth*wt):Se=1,Ae=0,Fe=0,Ve=0}B!==null?(Me=B.x,it=B.y,Ct=B.z):(Me=0,it=0,Ct=0);const lt=de.convert(P.format),Gt=de.convert(P.type);let ge;P.isData3DTexture?(q.setTexture3D(P,0),ge=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(q.setTexture2DArray(P,0),ge=U.TEXTURE_2D_ARRAY):(q.setTexture2D(P,0),ge=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const Zt=v.getParameter(U.UNPACK_ROW_LENGTH),Je=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=v.getParameter(U.UNPACK_SKIP_PIXELS),qn=v.getParameter(U.UNPACK_SKIP_ROWS),Ii=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const Cr=M.isDataArrayTexture||M.isData3DTexture,at=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){const wt=H.get(M),Ui=H.get(P),ft=H.get(wt.__renderTarget),ki=H.get(Ui.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Lr=0;Lr<Se;Lr++)Cr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(M).__webglTexture,z,Ve+Lr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(P).__webglTexture,me,Ct+Lr)),U.blitFramebuffer(Ae,Fe,xe,pe,Me,it,xe,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||H.has(M)){const wt=H.get(M),Ui=H.get(P);v.bindFramebuffer(U.READ_FRAMEBUFFER,L),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let ft=0;ft<Se;ft++)Cr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,z,Ve+ft):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,z),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ui.__webglTexture,me,Ct+ft):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ui.__webglTexture,me),z!==0?U.blitFramebuffer(Ae,Fe,xe,pe,Me,it,xe,pe,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(ge,me,Me,it,Ct+ft,Ae,Fe,xe,pe):U.copyTexSubImage2D(ge,me,Me,it,Ae,Fe,xe,pe);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ge,me,Me,it,Ct,xe,pe,Se,lt,Gt,pt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,me,Me,it,Ct,xe,pe,Se,lt,pt.data):U.texSubImage3D(ge,me,Me,it,Ct,xe,pe,Se,lt,Gt,pt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,Me,it,xe,pe,lt,Gt,pt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,Me,it,pt.width,pt.height,lt,pt.data):U.texSubImage2D(U.TEXTURE_2D,me,Me,it,xe,pe,lt,Gt,pt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Zt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),v.pixelStorei(U.UNPACK_SKIP_ROWS,qn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Ii),me===0&&P.generateMipmaps&&U.generateMipmap(ge),v.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){$=0,G=0,j=null,v.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const uS=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],wc=["pitch","yaw","roll","bend","x","y","z"];function Ya(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function Wf(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function hS(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,r={adi:Wf(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(r.palUzay=!0);const s=Ya(e.loopBas);s!==null&&s>=0&&(r.loopBas=s);const a=Array.isArray(e.moves)?e.moves:[];let o={};for(const l of a){if(typeof l?.tick!="number")continue;const c=l.tick;for(const d of uS){const h=l[d];if(!h||typeof h!="object")continue;let u=r.kemikler.get(d);u||(u={},r.kemikler.set(d,u));for(const _ of wc){const g=Ya(h[_]);g!==null&&(u[_]||(u[_]=[]),u[_].push({t:c,v:g,easing:String(l.easing||"LINEAR").toUpperCase()}))}const f=Ya(h.turn);f!==null&&f!==0&&(o[d]=(o[d]||0)+f*360,u.turn||(u.turn=[]),u.turn.push({t:c,v:o[d],easing:"LINEAR"}))}}return r}function fS(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,r={adi:Wf(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const a of Object.keys(s)){const o=s[a];if(!o||typeof o!="object")continue;const l={},c=(d,h,u)=>{if(!d)return;const f=[],_=(g,m)=>{const p=Ya(m);p!==null&&f.push({t:g,v:p,easing:"LINEAR"})};if(Array.isArray(d))for(const g of d){const m=typeof g?.time=="number"?g.time*20:0;_(m,Array.isArray(g?.vector)?g.vector[h]:void 0)}else Array.isArray(d.vector)?_(0,d.vector[h]):typeof d=="number"&&_(0,d);f.length&&(l[u]=f)};c(o.rotation,0,"pitch"),c(o.rotation,1,"yaw"),c(o.rotation,2,"roll"),c(o.position,0,"x"),c(o.position,1,"y"),c(o.position,2,"z"),Object.keys(l).length&&r.kemikler.set(a,l)}return r}function fd(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return hS(e);if(e?.animations)return fS(e);throw new Error("bilinmeyen emote formatı")}function pS(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function $u(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],r=i[t],s=r.t-n.t,a=s<=0?1:(e-n.t)/s;return n.v+(r.v-n.v)*pS(r.easing)(a)}function $f(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Xu={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:$f(),kokDon:[0,0,0],kokKonum:[0,0,0]},Xf={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},mS=Xf,_S={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function qu(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const f=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%f}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),r=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:$f(),kokDon:[0,0,0],kokKonum:[0,0,0]},a=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],l=Array.from({length:6},o),c=o(),d=(f,_,g)=>{f[_==="x"?0:_==="y"?1:2]=g};for(const[f,_]of i.kemikler){if(r&&f==="body"){for(const p of wc){const S=$u(_[p],n);S!==null&&(p==="pitch"?s.kokDon[0]=S:p==="yaw"?s.kokDon[1]=S:p==="roll"?s.kokDon[2]=-S:p==="bend"?s.bend[4]=S:(p==="x"||p==="y"||p==="z")&&d(c,p,S))}continue}const g=Xf[f],m=g!==void 0?s[a[g]]:null;for(const p of wc){const S=$u(_[p],n);if(S!==null){if(m){if(p==="pitch")m[0]=S;else if(p==="yaw")m[1]=S;else if(p==="roll")m[2]=r?-S:S;else if(p==="x"||p==="y"||p==="z"){const w=mS[f];w!==void 0&&d(l[w],p,S)}}if(p==="bend"){const w=_S[f];w!==void 0&&(s.bend[w]+=S)}}}}const h=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(r){for(let f=0;f<6;f++){const _=l[f],g=s.konum[f];g[0]=_[0]===void 0?0:_[0]-h[f][0],g[1]=_[1]===void 0?0:_[1]+24-h[f][1],g[2]=_[2]===void 0?0:-(_[2]-h[f][2])}return s.kokKonum=[c[0]??0,c[1]??0,-(c[2]??0)],s}const u=[1,0,1,1,0,0];for(let f=0;f<6;f++){const _=l[f],g=s.konum[f];for(let m=0;m<3;m++){if(_[m]===void 0){g[m]=0;continue}let p=_[m];m===1&&u[f]&&(p+=24),g[m]=p-h[f][m]}}return s}const Ke=1/24;function vn(i,e,t,n,r,s,a=!1){const o=i.attributes.uv,l=e*4,c=a?s:n,d=a?n:s;o.setXY(l+0,t/64,1-c/64),o.setXY(l+1,r/64,1-c/64),o.setXY(l+2,t/64,1-d/64),o.setXY(l+3,r/64,1-d/64)}function qf(i){i.magFilter=It,i.minFilter=It,i.colorSpace=gn}function Yf(i,e=!1){return i?new mu({map:i,transparent:e,alphaTest:e?.01:0}):new mu({color:5924466})}function Yu(i,e,t=!1){const n=new Rr(i.w*Ke,i.h*Ke,i.d*Ke),{u:r,v:s,w:a,h:o,d:l}=i;return e&&(vn(n,0,r+l+a,s+l,r+l+a+l,s+l+o),vn(n,1,r,s+l,r+l,s+l+o),vn(n,2,r+l,s,r+l+a,s+l),vn(n,3,r+l+a,s,r+l+a+a,s+l,!0),vn(n,4,r+l,s+l,r+l+a,s+l+o),vn(n,5,r+l+a+l,s+l,r+l+a+l+a,s+l+o),qf(e)),new $n(n,Yf(e,t))}function Ia(i,e,t,n=!1){const r=i.h/2,{u:s,v:a,w:o,d:l}=i,c=new Rr(i.w*Ke,r*Ke,i.d*Ke);if(t){const d=a+l+(e?r:0),h=d+r;vn(c,0,s+l+o,d,s+l+o+l,h),vn(c,1,s,d,s+l,h),vn(c,2,s+l,a,s+l+o,a+l),e?vn(c,3,s+l+o,a,s+l+o+o,a+l,!0):vn(c,3,s+l,a,s+l+o,a+l),vn(c,4,s+l,d,s+l+o,h),vn(c,5,s+l+o+l,d,s+l+o+l+o,h),qf(t)}return new $n(c,Yf(t,n))}class gS{renderer=null;scene=new B_;camera=new Dn(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new hg;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];aktif=null;tEmote=0;kur(e){this.renderer&&this.kapati(),this.canvas=e;try{this.renderer=new dS({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new cg(16777215,.9));const t=new Su(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new Su(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const r=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(r,s,!1),this.camera.aspect=r/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const r=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(r)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){this.surukleX=t.clientX,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX;this.surukleX=t.clientX,this.kameraAciHedef-=n*.008},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak)}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t;const n=this.kameraYariCap;this.camera.position.set(Math.sin(this.kameraAci)*n,this.kameraY,Math.cos(this.kameraAci)*n),this.camera.lookAt(0,.02,0)}_bekleyenSkin=null;async skin(e){let t=null;if(e?.url)try{const n=await new ag().loadAsync(e.url);if(n.height===32){const r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d");s&&(s.imageSmoothingEnabled=!1,s.drawImage(n,0,0),t=new zt(r))}t||(t=new zt(n)),t.needsUpdate=!0}catch{t=null}this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1)}modelKur(e,t){this.kok&&(this.scene.remove(this.kok),this.kok.traverse(y=>{const b=y;b.geometry&&b.geometry.dispose()})),this.kok=new nn,this.kok.position.y=-.66,this.kalca=new nn,this.kalca.position.set(0,12*Ke,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new nn,body:new nn,armL:new nn,armR:new nn,legL:new nn,legR:new nn};const[n,r,s,a,o,l]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const y of[n,r,s,a,o,l])y.rotation.order="ZYX";const c=Yu({u:0,v:0,w:8,h:8,d:8},e);c.position.set(0,4*Ke,0),n.add(c);const d=Yu({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ke,0),n.add(d),r.position.set(0,12*Ke,0),r.userData.pivotPx=[0,12,0];const h=(y,b,T,A)=>{const x=Ia(b,!1,e);x.position.set(A,T+b.h/4*Ke,0),y.add(x);const E=new nn;E.position.set(0,T,0);const C=Ia(b,!0,e);return C.position.set(A,-(b.h/4)*Ke,0),E.add(C),y.add(E),E},u=new nn;u.position.set(0,6*Ke,0),u.rotation.order="ZYX";const f=Ia({u:16,v:16,w:8,h:12,d:4},!1,e);f.position.set(0,3*Ke,0),u.add(f);const _=Ia({u:16,v:16,w:8,h:12,d:4},!0,e);_.position.set(0,-9*Ke,0),r.add(_);const g=t?3:4;n.position.set(0,6*Ke,0),n.userData.pivotPx=[0,6,0],s.position.set(5*Ke,4*Ke,0),s.userData.pivotPx=[5,4,0];const m=h(s,{u:32,v:48,w:g,h:12,d:4},-4*Ke,Ke);a.position.set(-5*Ke,4*Ke,0),a.userData.pivotPx=[-5,4,0];const p=h(a,{u:40,v:16,w:g,h:12,d:4},-4*Ke,-Ke);o.position.set(1.9*Ke,0,0),o.userData.pivotPx=[1.9,0,0];const S=h(o,{u:16,v:48,w:4,h:12,d:4},-6*Ke,0);l.position.set(-1.9*Ke,0,0),l.userData.pivotPx=[-1.9,0,0];const w=h(l,{u:0,v:16,w:4,h:12,d:4},-6*Ke,0);this.bukulenler={body:u,armL:m,armR:p,legL:S,legR:w},u.add(n,s,a),this.kalca.add(r,u,o,l),this.scene.add(this.kok)}emoteleriKur(e){this.emoteListe=e,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),_r=null;return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=Math.min(.05,this.saat.getDelta());this.zaman+=t,this.adimla(t),this.kameraGuncelle(t),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=qu(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Xu):t=qu(this.aktif,this.tEmote)):(t=Xu,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+.9+Math.random()*1.8));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n)}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const r=T_.degToRad,s=(o,l,c)=>{const d=r(l[0]),h=-r(l[1]),u=r(l[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(h-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const f=o.userData.pivotPx||[0,0,0],_=e.konum[c],g=(f[0]+_[0])*Ke,m=(f[1]+_[1])*Ke,p=(f[2]+_[2])*Ke;o.position.x+=(g-o.position.x)*t,o.position.y+=(m-o.position.y)*t,o.position.z+=(p-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const a=this.bukulenler;if(a){const o=(l,c)=>{const d=r(c);l.rotation.x+=(d-l.rotation.x)*t};o(a.armL,e.bend[0]),o(a.armR,e.bend[1]),o(a.legL,e.bend[2]),o(a.legR,e.bend[3]),o(a.body,e.bend[4])}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(r(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-r(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(r(o[2])-this.kalca.rotation.z)*t;const l=e.kokKonum,c=l[0]*Ke,d=(12+l[1])*Ke,h=l[2]*Ke;this.kalca.position.x+=(c-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(h-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let _r=null;function yo(){return _r||(_r=new gS),window.__sahne=_r,_r}function Kf(){_r?.kapati(),_r=null,window.__sahne=null}let rn=null;const vS=()=>document.documentElement.getAttribute("data-world")==="sahne",xS=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function yS(i){const e=ue.instances[0];(!rn||!ue.instances.find(c=>c.id===rn))&&(rn=e?.id||null);const t=ue.instances.find(c=>c.id===rn),n=xs(),r=c=>!!c&&(c.includes("/")||c.includes("\\")),s=[...ue.instances].sort((c,d)=>(d.last_played||0)-(c.last_played||0)),a=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${ue.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${An(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Eo(n)}" alt="" draggable="false" ${To(n)}><b>${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          <div class="imp-vitrin-kart">
            <button class="btn imp-sari-kucuk" id="i-wardrobe">DENEME ALANI</button>
          </div>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${re("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${re("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Fs(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${re("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${re("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${re("play")} HIZLI GİRİŞ</div>
          ${a?`
          <button class="imp-hizli-satir${Be.activeId===a.id?" durdur":""}" id="i-hizli-oyla" ${Be.activeId&&Be.activeId!==a.id?'disabled data-kilitli="1"':""}>
            <b>${a.name}${Be.activeId===a.id?" — AÇIK":""}</b>
            <small>${Fs(a.mod_loader)} · ${a.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const l=i.querySelector("#i-profil-satirlar");for(const c of o){const d=Ht(`
      <div class="imp-satir${Be.activeId===c.id?" oyunda":""}" role="button" tabindex="0" data-id="${c.id}">
        <span class="imp-satir-ikon">${r(c.icon)?`<img src="${An(c.icon)}" draggable="false" />`:`<span class="emoji">${c.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${c.name}</b>
          <small>${Fs(c.mod_loader)} · ${c.mc_version} — ${xS(c.last_played)}</small>
        </span>
        <button class="imp-oyla${Be.activeId===c.id?" durdur":""}" ${Be.activeId&&Be.activeId!==c.id?'disabled data-kilitli="1"':""}
          title="${Be.activeId===c.id?"Oyunu kapat":`${c.name} — OYNA`}">${re(Be.activeId===c.id?"stop":"play")} ${Be.activeId===c.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${re("gear")}</button>
      </div>
    `);d.addEventListener("click",h=>{const u=c.id;if(h.target.closest(".imp-diyis")){qe("instances",u);return}if(h.target.closest(".imp-oyla")){Be.activeId===c.id&&_l();return}rn=u,qe("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",h=>h.stopPropagation()),l.appendChild(d)}l.querySelectorAll(".imp-satir").forEach(c=>{const d=c.dataset.id||"";c.querySelector(".imp-oyla")?.addEventListener("click",async h=>{if(h.stopPropagation(),Be.activeId===d)return _l();if(!ue.accounts.length)return jt();const{launchInstance:u}=await mt(async()=>{const{launchInstance:f}=await Promise.resolve().then(()=>St);return{launchInstance:f}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>qe("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{rn&&qe("instances",rn)}),i.querySelector("#i-ad")?.addEventListener("click",()=>jt()),i.querySelector("#i-wardrobe")?.addEventListener("click",()=>qe("deneme")),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>qe("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!a)return;if(Be.activeId===a.id)return _l();if(!ue.accounts.length)return jt();const{launchInstance:c}=await mt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);c(a.id)}),Zf(i,n)}async function _l(){try{await se("cmd_kill_game")}catch{}const{refreshState:i}=await mt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>St);return{refreshState:e}},void 0);await i(!0)}async function SS(i){const e=i.querySelector("#i-news");if(e)try{const t=await se("cmd_list_yikim_news");t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const r=Ht(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);r.addEventListener("click",()=>qe("news")),e.appendChild(r)}}catch{}}function MS(i){if(Kf(),vS()){yS(i),SS(i);return}const e=ue.instances[0];(!rn||!ue.instances.find(d=>d.id===rn))&&(rn=e?.id||null);const t=ue.instances.find(d=>d.id===rn),n=xs(),r=d=>!!d&&(d.includes("/")||d.includes("\\")),s=t?r(t.icon)?`<img class="hero-inst-icon" src="${An(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",a=t?.cover?` style="background-image:url('${An(t.cover)}')"`:"",o=t?Be.activeId===t.id?"warn":"ok":"off",l=ue.instances.filter(d=>d.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${t?.cover?" has-cover":""}"${a}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${zs(o)} ${s} ${t.mc_version} · ${Fs(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(ue.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(ue.sys?.total_ram_mb||16384)*100))}%"></span></div>
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
            <button class="btn ghost" id="h-manage">${re("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${re("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${re("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Be.activeId?"disabled":""}" id="h-play"
          title="${Be.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Be.activeId?"disabled":""}>
          <span class="pr-icon">${Be.activeId?re("clock"):re("play")}</span>
          <span class="pr-label">${Be.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Be.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Be.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${re("stop")}
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
          <button class="btn ghost sm" id="h-all">${re("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${zs("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${ue.config?.show_news===!1?"hidden":""}>
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
          <div class="cs-val">${re("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const c=i.querySelector("#ledger-rows");if(c){for(const d of l){r(d.icon);const h=Ht(`
        <button class="ledger-row" data-id="${d.id}">
          ${zs(Be.activeId===d.id?"warn":"ok")}
          <span class="lr-name">${d.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Fs(d.mod_loader)} ${d.mc_version}
            <span class="sep">·</span>
            Son: ${d.last_played?new Date(d.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${re("play")}</span>
        </button>
      `);h.querySelector(".lr-play").innerHTML=re("play"),h.addEventListener("click",async u=>{if(u.target.closest(".lr-play")){if(!ue.accounts.length)return jt();Qc(h);const{launchInstance:f}=await mt(async()=>{const{launchInstance:_}=await Promise.resolve().then(()=>St);return{launchInstance:_}},void 0);f(d.id);return}qe("instances",d.id)}),c.appendChild(h)}Jc(Array.from(c.children))}ES(i),TS(),bS(i),Zf(i,n)}async function Zf(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=yo();n.kur(t),t.classList.add("on");try{const r=await se("cmd_get_account_skin",{id:e?.id||""});r?.dosya?await n.skin({url:An(String(r.dosya)),slim:!!r.slim}):await n.skin(null)}catch{await n.skin(null)}try{const r=await se("cmd_list_emotes"),s=[];for(const a of r)try{s.push(fd(a.icerik))}catch{}n.emoteleriKur(s)}catch{n.emoteleriKur([])}}async function bS(i){try{const e=await se("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{mt(()=>Promise.resolve().then(()=>St),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Fs(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function ES(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!rn){qe("instances");return}if(!ue.accounts.length){jt();return}Qc(i.querySelector(".play-ring"));const{launchInstance:e}=await mt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>St);return{launchInstance:t}},void 0);e(rn)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:e}=await mt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>St);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{qe("instances",rn||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>qe("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>qe("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>qe("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>jt())}async function TS(){const i=ei("#home-news");if(i)try{const e=await se("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=Ht(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${re("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Ku={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function gl(i){return Ku[i]||Ku.vanilla}let Hn=null;function wS(i){const e=An(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function AS(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const r of n){const s=r.target;r.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function RS(i){if(bi.param&&ue.instances.find(e=>e.id===bi.param)){Hn=bi.param,bi.param=void 0,ta(i,Hn);return}if(Hn&&ue.instances.find(e=>e.id===Hn)){ta(i,Hn);return}oo(i)}function oo(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${re("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${re("plus")} Yeni Kurulum</button>
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
  `;const e=i.querySelector("#inst-grid");if(!ue.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${re("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Qu());else{for(const t of ue.instances){const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${An(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Be.activeId===t.id,a=Ht(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?wS(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${r}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Jf(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${zs(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${cs(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Be.activeId?"disabled":""}>
              ${Be.activeId?`${re("clock")} Açık`:`${re("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${re("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);a.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!ue.accounts.length)return jt();const{launchInstance:l}=await mt(async()=>{const{launchInstance:c}=await Promise.resolve().then(()=>St);return{launchInstance:c}},void 0);l(t.id);return}if(o.target.closest(".card-stop")){try{await se("cmd_kill_game")}catch{}const{refreshState:l}=await mt(async()=>{const{refreshState:c}=await Promise.resolve().then(()=>St);return{refreshState:c}},void 0);await l(!0);return}Hn=t.id,ta(i,t.id)}),e.appendChild(a)}Jc(Array.from(e.querySelectorAll(".inst-card"))),AS(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Qu()),i.querySelector("#btn-import")?.addEventListener("click",()=>CS().catch(()=>{})),LS()}async function CS(){const i=await se("cmd_pick_pack_file");if(i){Te("Paket içe aktarılıyor…","ok");try{const e=await se("cmd_import_pack_file",{path:i}),{refreshState:t}=await mt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>St);return{refreshState:n}},void 0);await t(),Te(`${e.name||"Paket"} kuruldu!`,"ok"),qe("instances")}catch(e){Te(`Paket içe aktarılamadı: ${e}`,"err")}}}async function LS(){const i=document.querySelector("#popular-strip");if(i)try{const e=await se("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=Ht(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${re("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${re("dl")} ${PS(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function PS(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Jf(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function ta(i,e){const t=ue.instances.find(s=>s.id===e);if(!t){Hn=null,oo(i);return}const r=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${An(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${re("back")}</button>
      <div class="inst-icon xl">${r}</div>
      <div>
        <h1>${t.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Jf(t.mod_loader)} ${t.mc_version}</span>
          <span class="chip gray">${t.ram_mb} MB RAM</span>
          <span class="chip gray">${cs(t.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Be.activeId?"disabled":""}>${Be.activeId?`${re("clock")} Oyun Açık`:`${re("play")} Oyna`}</button>
      ${Be.activeId===t.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${re("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${re("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${re("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${re("mug")} Java</button>
      <button class="tab" data-tab="log">${re("term")} Log</button>
      <button class="tab" data-tab="analytics">${re("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${re("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Hn=null,oo(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!ue.accounts.length)return jt();const{launchInstance:s}=await mt(async()=>{const{launchInstance:a}=await Promise.resolve().then(()=>St);return{launchInstance:a}},void 0);s(t.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await se("cmd_kill_game")}catch{}const{refreshState:s}=await mt(async()=>{const{refreshState:a}=await Promise.resolve().then(()=>St);return{refreshState:a}},void 0);await s(!0)}),i.querySelectorAll(".tab").forEach(s=>{s.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(l=>l.classList.remove("active")),s.classList.add("active");const a=s.dataset.tab,o=i.querySelector("#tab-content");({mods:IS,content:DS,java:Qf,log:US,analytics:kS,settings:NS})[a](o,t)})}),i.querySelector("#tab-content"),i.querySelectorAll(".tab")[0].click()}let _i="resourcepacks";const Zu=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function DS(i,e){const t=()=>Zu.find(r=>r.id===_i);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let r=[];try{r=await se("cmd_list_content_files",{instanceId:e.id,kind:_i})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Zu.map(o=>`<button class="kt ${o.id===_i?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${re("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${re("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${re("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{_i=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>se("cmd_open_content_folder",{instanceId:e.id,kind:_i}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=_i==="resourcepacks"?"resourcepack":_i==="shaderpacks"?"shader":"world";bi.param=`kind:${o}`,qe("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await se("cmd_add_content_file",{instanceId:e.id,kind:_i}),await n()}catch(o){Te(`Eklenemedi: ${o}`,"err")}});const a=i.querySelector("#content-list");if(!r.length){a.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}a.innerHTML="";for(const o of r){const l=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${An(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,c=Ht(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${l}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":oa(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${re("trash")}</button>
        </div>
      `);c.querySelector("[data-del]")?.addEventListener("click",async d=>{const h=d.currentTarget.dataset.del;if(confirm(`"${h}" silinsin mi?`))try{await se("cmd_delete_content_file",{instanceId:e.id,kind:_i,name:h}),await n()}catch(u){Te(`Silinemedi: ${u}`,"err")}}),a.appendChild(c)}};await n()}async function IS(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await se("cmd_list_mods",{instanceId:e.id})}catch{}let n={};if(t.length)try{n=await se("cmd_resolve_mod_icons",{filenames:t.map(s=>s.filename)})}catch{}i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${re("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=s=>{const a=t.filter(l=>l.filename.toLowerCase().includes(s.toLowerCase())),o=i.querySelector("#mod-list");o.innerHTML="",a.length||(o.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const l of a){const c=n[l.filename],d=c?`<img class="mod-logo" src="${c}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${re("puzzle")}</span>`,h=Ht(`
        <div class="mod-row card">
          <span class="dot ${l.enabled?"on":"off"}"></span>
          ${d}
          <div class="mod-name">
            <div class="mn">${l.filename.replace(".jar","")}</div>
            <div class="ms">${oa(l.size)}</div>
          </div>
          <div style="flex:1"></div>
          <div class="switch ${l.enabled?"on":""}" data-fn="${l.filename}" data-en="${l.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${l.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async u=>{const f=u.currentTarget,_=f.dataset.fn,g=f.dataset.en!=="true";await se("cmd_toggle_mod",{instanceId:e.id,filename:_,enabled:g}),l.enabled=g,r(i.querySelector("#mod-search").value)}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await se("cmd_delete_mod",{instanceId:e.id,filename:l.filename}),t=t.filter(u=>u.filename!==l.filename),r(i.querySelector("#mod-search").value),Te("Mod silindi")}),o.appendChild(h)}};i.querySelector("#mod-search")?.addEventListener("input",s=>{r(s.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{qe("explore",e.id)}),r("")}async function Qf(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await se("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",r=c=>c.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(c=>c.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${re("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${re("args")} Java Argüman Presetleri</h3>
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
        <h3>${re("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
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
  `;const a=i.querySelector("#ram-range");a.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${a.value} MB`}),a.addEventListener("change",async()=>{await se("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(a.value)}),e.ram_mb=parseInt(a.value),Te("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(c=>{const d=c.querySelector("details");d?.addEventListener("click",h=>h.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",h=>h.stopPropagation()),c.addEventListener("click",async h=>{if(h.target.closest("details"))return;const u=c.dataset.id;await se("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const f=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(_=>_.closest(".preset-row").dataset.id));Qf(i,e),i.querySelectorAll(".preset-row").forEach(_=>{f.has(_.dataset.id)&&(_.querySelector("details").open=!0)}),Te("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const c=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),h=c.value.trim(),u=h===""?null:Math.max(2,Math.min(32,parseInt(h)||12)),f=d.value.trim();await se("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:f||null}),e.view_distance=u,e.custom_vm_args=f||null,Te("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const c=i.querySelector("#ozel-args");c.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function US(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${re("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),r=i.querySelector("#log-file"),s=i.querySelector("#log-search");let a="live",o=0;const l=[];let c=[];const d=(S,w)=>{n.textContent=w!==void 0&&w!==S?`${w}/${S} satır`:`${S} satır`},h=S=>{const w=document.createElement("div");return w.textContent=S,S.includes("ERROR")||S.includes("Exception")?w.classList.add("err"):S.includes("WARN")&&w.classList.add("warn"),w},u=()=>{const S=s.value.trim().toLowerCase(),w=S?c.filter(y=>y.toLowerCase().includes(S)):c;if(t.innerHTML="",!w.length)t.innerHTML=`<div class="log-hint">${S?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const y=document.createDocumentFragment();for(const b of w)y.appendChild(h(b));t.appendChild(y)}d(c.length,w.length)},f=()=>{if(a="live",c=[],t.innerHTML="",!l.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const S=document.createDocumentFragment();for(const w of l)S.appendChild(h(w));t.appendChild(S),t.scrollTop=t.scrollHeight}d(o)},_=async S=>{a=S,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{c=(await se("cmd_read_log",{instanceId:e.id,fileId:S})).split(`
`),u(),t.scrollTop=0}catch(w){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(w)}</div>`}};let g=[];try{g=await se("cmd_list_logs",{instanceId:e.id});const S=new Map;for(const w of g)S.has(w.date)||S.set(w.date,[]),S.get(w.date).push(w);for(const[w,y]of S){const b=document.createElement("optgroup");b.label=w;for(const T of y){const A=document.createElement("option");A.value=T.id;const x=T.label.startsWith("Oturum ")?"#"+(T.label.split("-").pop()||T.label):T.label;A.textContent=`${T.time!=="-"?T.time+" — ":""}${x} (${oa(T.size)})`,b.appendChild(A)}r.appendChild(b)}}catch{}Be.activeId!==e.id&&g.length?(r.value=g[0].id,_(g[0].id)):f(),r.addEventListener("change",()=>{r.value==="live"?f():_(r.value)}),s.addEventListener("input",()=>{a!=="live"&&u()});const m=await Wn("game-log",S=>{a!=="live"&&(r.value="live",f()),t.querySelector(".log-hint")&&(t.innerHTML=""),l.push(S.payload),o++,l.length>500&&l.shift(),t.appendChild(h(S.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),p=new MutationObserver(()=>{document.body.contains(t)||(m(),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}async function kS(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await se("cmd_get_stats")).snapshot,r=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(r/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${cs(r)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${re("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((a,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${a.host}</span>
          <span class="chip gray">${a.visits} giriş</span>
          <span class="dur">${cs(a.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${re("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Ju(n.daily_ms).map(a=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(a.ms/Math.max(...Ju(n.daily_ms).map(o=>o.ms),1)*100,a.ms?5:2)}%"></div>
            <div class="bar-lbl">${a.label}</div>
            <div class="tooltip">${a.full} — ${cs(a.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Ju(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;e.push({label:r.getDate()%3===0?String(r.getDate()):"",ms:i[s]||0,full:s})}return e}async function NS(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${An(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${re("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${re("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${An(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?re("image")+" Değiştir":re("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${re("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${re("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${re("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${re("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;const r=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,a=i.querySelector("#set-icon").value.trim();await se("cmd_rename_instance",{id:e.id,name:s}),a&&await se("cmd_set_instance_icon",{id:e.id,icon:a}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("change",r),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_icon",{instanceId:e.id}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(s=>s.refreshState(!0)),Te("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await se("cmd_pick_instance_cover",{instanceId:e.id}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(s=>s.refreshState(!0)),Te("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await se("cmd_set_instance_cover",{id:e.id,cover:null}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(s=>s.refreshState(!0)),Te("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>se("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>se("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await se("cmd_duplicate_instance",{id:e.id}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(s=>s.refreshState()),Te("Kurulum kopyalandı"),ta(i.parentElement,Hn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await se("cmd_delete_instance",{id:e.id}),await mt(()=>Promise.resolve().then(()=>St),void 0).then(s=>s.refreshState()),Hn=null,oo(i.parentElement),Te("Kurulum silindi"))})}async function Qu(){const e=(await se("cmd_list_versions")).all,t=await se("cmd_list_java_arg_presets"),n=await se("cmd_list_standard_mods"),{root:r,close:s}=(await mt(async()=>{const{openModal:c}=await Promise.resolve().then(()=>St);return{openModal:c}},void 0)).openModal(`
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
        <div class="lc-icon">${gl("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${gl("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${gl("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let a="fabric",o=!0;r.querySelectorAll(".loader-card").forEach(c=>{c.addEventListener("click",()=>{c.classList.contains("disabled")||(r.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),c.classList.add("sel"),a=c.dataset.l)})});const l=r.querySelector("#w-ram");l.addEventListener("input",()=>{r.querySelector("#w-ram-val").textContent=`${l.value} MB`}),r.querySelector("#w-std-switch")?.addEventListener("click",c=>{o=!o,c.currentTarget.classList.toggle("on",o)}),r.querySelector("#w-cancel")?.addEventListener("click",s),r.querySelector("#w-create")?.addEventListener("click",async()=>{const c=r.querySelector("#w-create");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=r.querySelector("#w-name").value.trim()||"Yeni Kurulum",h=r.querySelector("#w-version").value,u=r.querySelector("#w-preset").value;try{const f=await se("cmd_create_instance",{instance:{name:d,mc_version:h,mod_loader:a,ram_mb:parseInt(l.value),java_preset_id:u,standard_mods:o&&a==="fabric"}});await mt(()=>Promise.resolve().then(()=>St),void 0).then(g=>g.refreshState()),s(),Te(`"${d}" oluşturuldu`);const _=f.instance.id;if(Hn=_,ue.instances.length){const g=document.querySelector("#content");ta(g,_)}}catch(f){Te(String(f),"err"),c.disabled=!1,c.textContent="Kurulumu Oluştur"}})}let Pn="mod",Zn="",gr=[],as=40,Vi=1,jr=1,Os="",Ac="",vl=!1;function FS(i){let e=bi.param;if(e?.startsWith("kind:")){const r=e.slice(5);["mod","modpack","resourcepack","shader","world","datapack"].includes(r)&&(Pn=r),e=void 0}bi.param=void 0,i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${Pn==="mod"?"sel":""}" data-k="mod">${re("puzzle")} Modlar</button>
        <button class="kt ${Pn==="modpack"?"sel":""}" data-k="modpack">${re("box")} Paketler</button>
        <button class="kt ${Pn==="resourcepack"?"sel":""}" data-k="resourcepack">Texturepackler</button>
        <button class="kt ${Pn==="shader"?"sel":""}" data-k="shader">Shaderlar</button>
        <button class="kt ${Pn==="world"?"sel":""}" data-k="world">Dünyalar</button>
        <button class="kt ${Pn==="datapack"?"sel":""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${ue.featured_versions.map(r=>`<option>${r}</option>`).join("")}
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
        ${re("search")}
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
  `,i.querySelectorAll(".kt").forEach(r=>r.addEventListener("click",()=>{Pn=r.dataset.k,i.querySelectorAll(".kt").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),Zn&&dr(i,Zn),ju(i)}));const t=i.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>dr(i,t.value.trim()),380)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&dr(i,t.value.trim())}),i.querySelector("#exp-go")?.addEventListener("click",()=>dr(i,t.value.trim())),i.querySelector("#exp-ver")?.addEventListener("change",()=>{Zn&&dr(i,Zn)}),i.querySelector("#exp-loader")?.addEventListener("change",()=>{Zn&&dr(i,Zn)}),e&&Zn&&dr(i,Zn),ju(i)}async function ju(i){const e=i.querySelector("#popular-strip");try{const t=await se("cmd_repos_popular",{kind:Pn,loader:""});e.innerHTML="";for(const n of t){const r=Ht(`
        <div class="card hover popular-card">
          ${n.icon_url?`<img class="pc-icon" src="${n.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`:`<div class="pc-icon ph">${re("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${n.title}</div>
            <div class="pc-meta">${re("dl")} ${jf(n.downloads)}</div>
          </div>
        </div>
      `);r.addEventListener("click",()=>ep(n)),e.appendChild(r)}}catch{e.innerHTML='<p class="pc-fail">Popüler listesi yüklenemedi.</p>'}}async function dr(i,e){if(!e)return;Zn=e;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>',Os=i.querySelector("#exp-ver").value;const n=i.querySelector("#exp-loader").value;Ac=["resourcepack","shader","world","datapack"].includes(Pn)?"":n,Vi=1;try{if(gr=(await se("cmd_repos_search",{query:e,kind:Pn,versions:Os?[Os]:[],loader:Ac,offset:0,limit:as})).results,jr=gr.length>=as?2:1,t.innerHTML="",!gr.length){t.innerHTML='<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>';return}for(const a of gr)t.appendChild(Cc(a));Rc(i)}catch(s){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${s}</p></div>`}}function Rc(i){const e=i.querySelector("#exp-results");e.querySelector("#exp-pager")?.remove();const t=gr.length>=as;if(Vi===1&&!t)return;const n=[`<button class="pg-btn" data-pg="prev" title="Önceki sayfa" ${Vi<=1?"disabled":""}>‹</button>`];for(let s=1;s<=jr;s++)n.push(`<button class="pg-btn ${s===Vi?"cur":""}" data-pg="${s}">${s}</button>`);n.push(`<button class="pg-btn" data-pg="next" title="Sonraki sayfa" ${t?"":"disabled"}>›</button>`);const r=Ht(`<div class="exp-pager" id="exp-pager" style="grid-column:1/-1">${n.join("")}</div>`);r.addEventListener("click",s=>{const a=s.target.closest(".pg-btn");if(!a||a.disabled)return;const o=a.dataset.pg,l=o==="prev"?Vi-1:o==="next"?Vi+1:parseInt(o,10);!Number.isFinite(l)||l<1||l===Vi||OS(i,l)}),e.appendChild(r)}async function OS(i,e){if(vl)return;vl=!0;const t=i.querySelector("#exp-results");t.innerHTML='<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>';try{const r=(await se("cmd_repos_search",{query:Zn,kind:Pn,versions:Os?[Os]:[],loader:Ac,offset:(e-1)*as,limit:as})).results;if(!r.length){jr=Math.min(jr,Math.max(1,e-1)),t.innerHTML="";for(const s of gr)t.appendChild(Cc(s));Rc(i);return}gr=r,Vi=e,jr=Math.max(jr,r.length>=as?e+1:e),t.innerHTML="";for(const s of r)t.appendChild(Cc(s));Rc(i),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){t.innerHTML=`<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${n}</p></div>`}finally{vl=!1}}function Cc(i){const e=Ht(`
    <div class="card hover result-card">
      <div class="r-top">
        ${i.icon_url?`<img class="r-icon" src="${i.icon_url}" loading="lazy" />`:`<div class="r-icon ph">${re(i.kind==="modpack"?"box":"puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${i.title}</div>
          <div class="r-meta">
            <span class="chip">${i.source==="modrinth"?"Modrinth":"CurseForge"}</span>
            <span class="chip gray">${re("dl")} ${jf(i.downloads)}</span>
            ${i.author?`<span class="chip gray">${i.author}</span>`:""}
          </div>
        </div>
      </div>
      <p class="r-desc">${i.description}</p>
    </div>
  `);return e.addEventListener("click",()=>ep(i)),e}function jf(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}async function ep(i){const{root:e,close:t}=kn(`
    <h2>${i.title}</h2>
    <div class="sub">${i.source==="modrinth"?"Modrinth":"CurseForge"} · ${{mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"}[i.kind]||i.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `),n=document.querySelector("#exp-ver")?.value||"",r=document.querySelector("#exp-loader")?.value||(ue.instances[0]?.mod_loader==="forge"?"forge":"fabric"),a=["resourcepack","shader","world","datapack"].includes(i.kind)?"":r;try{const o=await se("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:i.kind==="mod"?a:"",gameVersion:n}),l=e.querySelector("#ver-list");if(l.innerHTML="",!o.length){l.innerHTML='<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>';return}for(const c of o){const d=Ht(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${c.name||c.version_number}</b>
            <span class="ver-date">${c.date.slice(0,10)} · ${c.game_versions.slice(0,3).join(", ")}${c.game_versions.length>3?"…":""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${oa(c.files[0]?.size||0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);d.querySelector("button")?.addEventListener("click",()=>BS(i,c,t)),l.appendChild(d)}}catch(o){e.querySelector("#ver-list").innerHTML=`<p style="color:var(--danger)">Sürümler alınamadı: ${o}</p>`}}async function BS(i,e,t){if(i.kind==="modpack")t(),await zS(i,e);else{if(!ue.instances.length){Te("Önce bir kurulum oluşturmalısın","err"),qe("instances");return}const{root:n,close:r}=kn(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${i.title} → ${e.name||e.version_number}</div>
      <select class="input" id="tgt">
        ${ue.instances.map(s=>{const a=s.icon&&!s.icon.includes("/")&&!s.icon.includes("\\")?`${s.icon} `:"";return`<option value="${s.id}">${a}${s.name} (${s.mod_loader} ${s.mc_version})</option>`}).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);n.querySelector("#cxl")?.addEventListener("click",r),n.querySelector("#ok")?.addEventListener("click",async()=>{const s=n.querySelector("#tgt").value,a=n.querySelector("#ok");a.disabled=!0,a.innerHTML='<span class="spinner"></span> İndiriliyor…';try{i.kind==="resourcepack"||i.kind==="shader"||i.kind==="world"||i.kind==="datapack"?await se("cmd_repos_install_content",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await se("cmd_repos_install",{instanceId:s,source:i.source,projectId:i.id,versionId:e.id}),r(),t(),Te({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`)}catch(o){Te(String(o),"err"),a.disabled=!1,a.textContent="Kur"}})}}async function zS(i,e){const{root:t,close:n}=kn(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${i.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `),r=t.querySelector("#pk-bar"),s=t.querySelector("#pk-detail"),{listen:a}=await mt(async()=>{const{listen:l}=await Promise.resolve().then(()=>St);return{listen:l}},void 0),o=await a("launch-progress",l=>{l.payload.stage==="modpack"&&(r.style.transform=`scaleX(${Math.min(1,Math.max(0,l.payload.percent/100))})`,s.textContent=l.payload.detail||"")});try{const l=await se("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});o(),n(),await mt(()=>Promise.resolve().then(()=>St),void 0).then(c=>c.refreshState()),await HS(l),qe("instances")}catch(l){o(),s.textContent=`Kurulum başarısız: ${l}`,s.style.color="var(--danger)"}}async function HS(i){const e=await se("cmd_list_java_arg_presets"),{root:t,close:n}=kn(`
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
  `);t.querySelectorAll(".preset-row").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.id;s!=="__skip"&&(await se("cmd_set_instance_java_preset",{id:i.id,presetId:s}),Te(`Preset: ${e.find(a=>a.id===s)?.name}`)),n()})})}function VS(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,GS(i)}async function GS(i){const e=i.querySelector("#yikim-news");try{const t=await se("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${re("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,r)=>(r.pinned?1:0)-(n.pinned?1:0)||r.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${re("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(r=>`<p>${r}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${re("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const r=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),r?.startsWith("https://")&&rp(r).catch(()=>{})})})}catch{e.innerHTML=""}}const WS=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"pano",name:"Devre Panosu",desc:"Hatlar, lambalar, şalter",bg:"#0b0b0d",panel:"#141419",line:"#26262e",text:"#e9e7e2",dim:"#6d6b66",accent:"#ff7a18"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"standart",name:"Kategori Standardı",desc:"Arc/Linear cilası — yumuşak köşe, çelik mavisi",bg:"#0e1016",panel:"#171a24",line:"#2b3044",text:"#eceffa",dim:"#666e8a",accent:"#6e8bff"},{id:"afis",name:"Afiş Provası",desc:"Sıfırdan yeni tasarım — baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"},{id:"oda",name:"Karanlık Oda",desc:"Fotoğraf laboratuvarı — safelight kırmızı, mono tip, ikon-only ray",bg:"#0e0a0b",panel:"#191214",line:"#2c2022",text:"#e8ddd8",dim:"#655a57",accent:"#e0301e"},{id:"kumas",name:"Kumaş",desc:"Terzi rafı — krem keten, kesik dikişli çizgiler, erik moru",bg:"#f7f2e9",panel:"#fffaf1",line:"#ddcfb6",text:"#3f3226",dim:"#97897a",accent:"#a04ac2"},{id:"perde",name:"Perde",desc:"Kızıl kadife sahne — altın vurgular, serif tipografisi",bg:"#17090f",panel:"#24111a",line:"#3f1f2b",text:"#f3e8dd",dim:"#857162",accent:"#d4af37"},{id:"buz",name:"Buzul",desc:"Buzlu cam yüzeyler (frosted) — kar beyazı, kobalt mavi",bg:"#e6edf4",panel:"#f2f6fb",line:"#c7d5e3",text:"#14202c",dim:"#8296a8",accent:"#0b57d0"},{id:"skala",name:"Skala",desc:"Fosforlu CRT tüpü — tarama çizgileri, glow yeşil, mono her şey",bg:"#07130c",panel:"#0d2015",line:"#1a3a26",text:"#d6f5df",dim:"#5e8069",accent:"#45f882"}];function $S(i){const e=(t,n,r,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${r}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Lc(i){let e=ue.config;const n={dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[e.theme]??e.theme,r=!!(e.custom_accent||"").trim();try{const l=window.__TAURI__?.app;l?.getVersion&&l.getVersion().then(c=>{const d=i.querySelector("#app-version");d&&(d.textContent=`v${c} "Kıvılcım"`)}).catch(()=>{const c=i.querySelector("#app-version");c&&(c.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${re("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${ue.accounts.map(l=>{const c=xs()?.id===l.id;return`
          <div class="acc-row ${c?"active":""}" data-id="${l.id}">
            <img class="acc-head" src="${Eo(l)}" ${To(l)} draggable="false" />
            <div class="acc-info">
              <b>${l.name}</b>
              <span>${l.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${c?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${re("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${re("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${re("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${re("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${WS.map(l=>`
          <button class="world-card ${n===l.id?"sel":""}" data-t="${l.id}">
            ${$S(l)}
            <span class="wc-body">
              <b>${l.name}</b>
              <span>${l.desc}</span>
            </span>
            ${n===l.id?'<span class="sel-tag">SEÇİLİ</span>':""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Emote Deneme Alanı</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Blockbench emote'larını anlık dene — vitrin paketine gönder.</div>
        </div>
        <button class="btn ghost sm" id="deneme-alani">${re("gear")} Aç</button>
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
      <h3>${re("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${re("mug")} Java</h3>
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
      <h3>${re("gear")} Genel</h3>
      ${Xr("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${Xr("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${Xr("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${Xr("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${Xr("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${Xr("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>İndirme hızı (paralel bağlantı)</span>
        <div class="ram-row" style="width:260px">
          <input type="range" min="8" max="64" step="8" value="${e.download_concurrency||32}" id="dlc-range" style="flex:1" />
          <span class="chip" id="dlc-val">${e.download_concurrency||32}</span>
        </div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${re("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="open-dir">${re("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>jt()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>jt()),i.querySelectorAll(".acc-row").forEach(l=>{const c=l.dataset.id;l.querySelector(".acc-use")?.addEventListener("click",async d=>{d.stopPropagation(),await se("cmd_select_account",{accountId:c}),await hn(),Lc(i),Te("Hesap değiştirildi")}),l.querySelector(".acc-del")?.addEventListener("click",async d=>{d.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await se("cmd_remove_account",{accountId:c}),await hn(),Lc(i),Te("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(l=>l.addEventListener("click",async()=>{ue.config.theme=l.dataset.t,Si(),i.querySelectorAll(".world-card").forEach(c=>c.classList.remove("sel")),l.classList.add("sel"),await gi()}));const s=i.querySelector("#accent-pick"),a=i.querySelector("#accent-default");i.querySelector("#deneme-alani")?.addEventListener("click",()=>qe("deneme")),s?.addEventListener("input",l=>{ue.config.custom_accent=l.target.value,Si()}),s?.addEventListener("change",async()=>{await gi(),Te("Vurgu rengi kaydedildi")}),a?.addEventListener("click",async()=>{ue.config.custom_accent="",Si(),await gi(),Te("Dünya rengine dönüldü")}),i.querySelector("#fx-particles")?.addEventListener("change",async l=>{ue.config.fx_particles=l.target.value,Si(),await gi()}),i.querySelector("#cursor-style")?.addEventListener("change",async l=>{ue.config.cursor_style=l.target.value,Si(),await gi()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const l=await se("cmd_pick_java");l&&(ue.config.java_dir=l,await gi(),i.querySelector("#java-path").textContent=l,Te("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{ue.config.java_dir=null,await gi(),i.querySelector("#java-path").textContent="otomatik"}),qr(i,"keep-open","keep_launcher_open"),qr(i,"hide-on-launch","hide_on_launch"),qr(i,"show-news","show_news"),qr(i,"stats-enabled","stats_enabled"),qr(i,"use-java25","use_java25"),qr(i,"discord-rpc","discord_rpc");const o=i.querySelector("#dlc-range");o.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=o.value),o.addEventListener("change",async()=>{ue.config.download_concurrency=parseInt(o.value),await gi()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{Te("Güncelleme kontrol ediliyor…");try{const c=await(await mt(()=>import("./index-DSkUPpwd.js"),[])).check();if(c?.available){const{root:d,close:h}=kn(`
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
        `);d.querySelector("#upd-later")?.addEventListener("click",()=>h()),d.querySelector("#upd-go")?.addEventListener("click",async()=>{const u=d.querySelector("#upd-go");u.disabled=!0,u.textContent="İndiriliyor…";try{await c.downloadAndInstall(),Te("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(f){u.disabled=!1,u.textContent="İndir ve Kur",Te(`Güncelleme başarısız: ${f}`,"err")}})}else Te("YIKIMLient güncel ✓")}catch(l){Te(`Güncelleme kontrolü başarısız: ${l}`,"err")}}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const l=await se("cmd_get_app_dir");sp(l).catch(()=>{})})}function Xr(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function qr(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const r=n.currentTarget;r.classList.toggle("on"),ue.config[t]=r.classList.contains("on"),await gi()})}async function gi(){await se("cmd_save_settings",{config:ue.config}),await hn(),Si()}let ai=[];function XS(i){Kf();const e=xs();i.innerHTML=`
    <div class="page-wrap">
      <div class="page-header">
        <div>
          <h1>Emote Deneme Alanı</h1>
          <p class="sub">emote.json veya indirdiğin .emotecraft dosyasını buraya sürükle — karakter anında oynatır.</p>
        </div>
        <button class="btn ghost" id="d-vitrin">${re("home")} Ana Vitrin</button>
      </div>

      <div class="deneme-grid">
        <div class="deneme-stage card">
          <canvas id="d-sahne"></canvas>
          <div class="vitrin-isim">${e?`${e.name} — PROVA`:"PROVA"}</div>
        </div>

        <div class="deneme-panel">
          <div class="card dropzone" id="d-drop" role="button" tabindex="0">
            <div style="font-size:26px; margin-bottom:6px">⤵</div>
            <strong>emote.json / .emotecraft sürükle</strong>
            <p class="sub" style="margin-top:4px">veya tıkla — dosya seç. Çoklu seçim olur.</p>
            <input type="file" id="d-file" accept=".json,.emotecraft,application/json" multiple hidden />
          </div>

          <div class="card">
            <div class="section-head" style="margin-bottom:8px">
              <h2 class="dim-cap">BU OTURUM</h2>
              <span class="dim-cap" id="d-sayac">0 emote</span>
            </div>
            <div id="d-oturum" class="deneme-liste"><p class="sub">Henüz emote sürüklenmedi.</p></div>
          </div>

          <div class="card">
            <div class="section-head" style="margin-bottom:8px">
              <h2 class="dim-cap">VİTRİN PAKETİ</h2>
              <span class="dim-cap">ana ekranda rastgele oynar</span>
            </div>
            <div id="d-paket" class="deneme-liste"><div class="spinner" style="margin:14px auto"></div></div>
          </div>
        </div>
      </div>
    </div>
  `,i.querySelector("#d-vitrin")?.addEventListener("click",()=>qe("home")),YS(i),qS(i,e)}async function qS(i,e){const t=i.querySelector("#d-sahne");if(!t)return;const n=yo();n.kur(t),t.classList.add("on"),ai=[],lo(i);try{const r=await se("cmd_list_emotes");for(const s of r.slice(0,6))try{ai.push({adi:s.adi,emote:fd(s.icerik),icerik:s.icerik})}catch{}}catch{}pd(i),So(i),lo(i);try{const r=await se("cmd_get_account_skin",{id:e?.id||""});r?.dosya?await n.skin({url:An(String(r.dosya)),slim:!!r.slim}):await n.skin(null)}catch{await n.skin(null)}n.emoteleriKur(ai.filter(r=>r.emote).map(r=>r.emote).slice(0,3))}function lo(i){const e=i.querySelector("#d-sayac");e&&(e.textContent=`${ai.length} emote`)}function pd(i){const e=i.querySelector("#d-oturum");if(e){if(e.innerHTML="",!ai.length){e.innerHTML='<p class="sub">Henüz emote sürüklenmedi.</p>';return}ai.forEach((t,n)=>{const r=t.emote?.adi||t.adi,s=t.emote?.dongu?" · döngü":"",a=Ht(`
      <div class="deneme-satir" role="button" tabindex="0" data-i="${n}">
        <span class="ds-nome">${r}<small>${s}</small></span>
        <span class="ds-butonlar">
          <button class="btn ghost sm" data-ok="${n}" title="Vitrin paketine kalıcı ekle">Vitrine ekle</button>
        </span>
      </div>
    `);a.addEventListener("click",o=>{if(o.target.closest("[data-ok]")){KS(t.icerik,i);return}t.emote&&(yo().emoteleriKur([t.emote]),Te(`"${r}" oynatılıyor — rastgele çalma geçici kapalı`))}),e.appendChild(a)})}}function YS(i){const e=i.querySelector("#d-drop"),t=i.querySelector("#d-file");if(!e||!t)return;const n=async r=>{let s=0,a=0;for(const o of Array.from(r))try{const l=new Uint8Array(await o.arrayBuffer()),c=l.length>4&&l[0]===80&&l[1]===75&&l[2]===3&&l[3]===4,d=!c&&l.length>8&&l[0]!==123&&l[4]===16,h=c||d?String(await se("cmd_emote_bayt_coz",{veri:Array.from(l)})):new TextDecoder().decode(l),u=fd(h);ai.push({adi:o.name,emote:u,icerik:h}),s++;try{await se("cmd_add_emote",{icerik:h}),a++}catch(f){Te(`${o.name} kaydedilemedi: ${f instanceof Error?f.message:String(f)}`)}}catch(l){Te(`${o.name}: ${l instanceof Error?l.message:String(l)} — atlandı`)}if(s){Te(a?`${s} emote yüklendi ve vitrin paketine kaydedildi`:`${s} emote yüklendi — satıra tıkla, oynar`),pd(i),lo(i),a&&So(i);const o=yo(),l=ai.filter(c=>c.emote).map(c=>c.emote);o.emoteleriKur(l.slice(-3).length?l.slice(-3):l.slice(0,3))}};e.addEventListener("click",()=>t.click()),e.addEventListener("keydown",r=>{r.key==="Enter"&&t.click()}),t.addEventListener("change",()=>{t.files&&t.files.length&&n(t.files),t.value=""}),e.addEventListener("dragover",r=>{r.preventDefault(),e.classList.add("surunuyor")}),e.addEventListener("dragleave",()=>e.classList.remove("surunuyor")),e.addEventListener("drop",r=>{r.preventDefault(),e.classList.remove("surunuyor"),r.dataTransfer?.files?.length&&n(r.dataTransfer.files)})}async function KS(i,e){try{const t=await se("cmd_add_emote",{icerik:i});Te(`Vitrin paketine eklendi: ${t.adi}`),So(e)}catch(t){Te(`Eklenemedi: ${String(t)}`)}}async function So(i){const e=i.querySelector("#d-paket");if(e)try{const t=await se("cmd_list_emotes");if(e.innerHTML="",!t.length){e.innerHTML='<p class="sub">Vitrin paketi boş — emote ekleyince ana ekranda rastgele oynamaya başlar.</p>';return}for(const n of t){let r=n.adi;try{const a=JSON.parse(n.icerik);r=String(a?.name||"").trim()||n.adi}catch{}const s=Ht(`
        <div class="deneme-satir">
          <span class="ds-nome">${r}<small>${n.adi}</small></span>
          <span class="ds-butonlar">
            <button class="btn ghost sm" data-sil title="Bu emote'u vitrin paketinden sil">${re("trash")} Sil</button>
          </span>
        </div>
      `);s.querySelector("[data-sil]")?.addEventListener("click",async a=>{a.stopPropagation();try{await se("cmd_delete_emote",{adi:n.adi}),Te(`${r} silindi`),ai=ai.filter(o=>o.adi!==n.adi&&o.icerik!==n.icerik),pd(i),lo(i),So(i)}catch{}}),e.appendChild(s)}}catch{e.innerHTML='<p class="sub">Paket okunamadı.</p>'}}function ZS(){Gi.home=MS,Gi.instances=RS,Gi.explore=FS,Gi.news=VS,Gi.settings=Lc,Gi.deneme=XS}let hr=null;const os=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function JS(){hr||(hr=document.createElement("div"),hr.className="drop-veil",hr.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(hr))}function eh(){hr?.remove(),hr=null}async function QS(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await se("cmd_route_dropped",{path:i})}catch(n){Te(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=kn(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${os(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let r=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{r=!0,n.close()}),await new Promise(a=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),a())},150)}),!r){Te("Kurulum iptal edildi");return}Te("Paket indiriliyor — süreç panelinden takip edebilirsin");const s=await se("cmd_import_pack_file",{path:i,name:null});await hn(),qe("instances"),Te(`${s.name} kuruldu ✓`)}else if(t==="jar"){const n=await Pc(`Mod eklenecek kurulum: <b>${os(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const r=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";Te(`Mod eklendi: ${e}${r}`,r?"err":"ok")}else if(t==="world"){const n=await Pc(`Dünya yüklenecek kurulum: <b>${os(e)}</b>`);if(!n)return;await se("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),Te(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await se("cmd_import_emote_dosyasi",{path:i});Te(`Emote vitrine eklendi: ${n.adi}`),qe("deneme")}else t==="zip"?await jS(i,e):Te(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){Te(`Kurulamadı: ${n}`,"err")}}async function jS(i,e){const t=kn(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${os(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const a=setInterval(()=>{document.body.contains(t.root)||(clearInterval(a),s())},150)}),!n)return;const r=await Pc(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");r&&(await se("cmd_add_content_path",{instanceId:r.id,kind:n,path:i}),Te(`Eklendi: ${e}`))}function Pc(i){return new Promise(e=>{const t=ue.instances||[];if(!t.length){Te("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=kn(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${os(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${os(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const a=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(a)})});const r=setInterval(()=>{document.body.contains(n.root)||(clearInterval(r),e(null))},150)})}function eM(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")JS();else if(n==="drop"){eh();const r=t.paths||[];for(const s of r)await QS(s)}else eh()})}catch{}}const Ka=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let xl=null;function tM(i,e){const t=window.innerWidth,n=window.innerHeight,r=e.offsetWidth,s=e.offsetHeight,a=l=>Math.max(12,Math.min(l,t-r-12)),o=l=>Math.max(14,Math.min(l,n-s-14));if(i){const l=i.right+16,c=i.left-16-r;let d;l+r<=t-12?d=l:c>=12?d=c:d=(t-r)/2;let h=i.top+i.height/2-s/2;h<14&&(h=i.bottom+16),e.style.left=`${a(d)}px`,e.style.top=`${o(h)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-r)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function th(i,e){const t=Ka[e],n=i.querySelector(".spot"),r=i.querySelector(".tc");qe(t.page);const s=r.querySelector(".tc-step");s.innerHTML=Ka.map((l,c)=>`<i class="${c<=e?"done":""}"></i>`).join(""),r.querySelector("h3").textContent=t.title,r.querySelector("p").textContent=t.text;const a=r.querySelector(".tc-next");a.textContent=e===Ka.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const l=document.querySelector(t.sel);l&&(o=l.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",tM(o,r),Li.fromTo(r,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function nM(){if(xl||ue.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),xl=i;let e=0;const t=async()=>{i.remove(),xl=null,document.removeEventListener("keydown",r),qe("home");try{ue.config={...ue.config,guided_tour_done:!0},await se("cmd_save_settings",{config:ue.config}),await hn()}catch{}},n=()=>{if(e+=1,e>=Ka.length){t();return}th(i,e)},r=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",r),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),th(i,e)}let es=null;function nh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function Dc(){try{ue.config={...ue.config,onboarding_done:!0},await se("cmd_save_settings",{config:ue.config}),await hn()}catch{}}function yl(i){es?.remove(),es=null,Dc(),qe("home")}function iM(){if(es)return!0;if(ue.config?.onboarding_done)return!1;if(!(ue.accounts.length===0&&ue.instances.length===0))return Dc(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),es=e;const t=e.querySelector(".ob-card"),n=h=>`<div class="ob-dots">${[0,1,2,3].map(u=>`<i class="${u<=h?"done":""}"></i>`).join("")}</div>`,r=h=>`
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
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>yl()),t.querySelector("#ob-next")?.addEventListener("click",a)}function a(){t.innerHTML=`
      ${n(1)}
      <div class="ob-step-label">2 / 4 — Hesap</div>
      <h2 style="font-size:16px">Hesabını bağla</h2>
      <p class="ob-sub" style="margin-bottom:12px">Microsoft hesabıyla premium giriş ya da çevrimdışı.</p>
      <div style="display:flex; flex-direction:column; gap:8px">
        <button class="btn primary" id="ob-ms">Microsoft ile Giriş</button>
        <button class="btn ghost" id="ob-off">Çevrimdışı Ekle</button>
      </div>
      <div class="ob-ok" id="ob-acc-ok" style="display:none"></div>
      ${r({back:!0,next:"İleri →",nextId:"ob-next",skip:"Sonra",skipId:"ob-skip"})}
    `,t.querySelector("#ob-back")?.addEventListener("click",s),t.querySelector("#ob-skip")?.addEventListener("click",()=>yl()),t.querySelector("#ob-ms")?.addEventListener("click",()=>jt()),t.querySelector("#ob-off")?.addEventListener("click",()=>jt());const h=t.querySelector("#ob-acc-ok"),u=t.querySelector("#ob-next"),f=setInterval(async()=>{try{ue.accounts.length&&(h.style.display="flex",h.textContent=`✓ Hesap hazır: ${ue.accounts[0]?.name??""}`,u.disabled=!1,clearInterval(f))}catch{}},500);u.disabled=!0,t.querySelector("#ob-next")?.addEventListener("click",o)}async function o(){let h=[];try{h=(await se("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${h.map(f=>`<option value="${nh(f)}">${nh(f)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${r({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",a);let u=null;t.querySelector("#ob-create")?.addEventListener("click",async f=>{const _=f.currentTarget;_.disabled=!0,_.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const g=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",m=t.querySelector("#ob-version").value;try{u=await se("cmd_create_instance",{instance:{name:g,mc_version:m,mod_loader:"fabric",ram_mb:ue.config?.default_ram_mb||4096,java_preset_id:ue.config?.default_java_preset||"balanced",standard_mods:!0}});const p=t.querySelector("#ob-inst-ok");p.style.display="flex",p.textContent=`✓ Kurulum hazır: ${u.name}`,_.textContent="✓ Oluşturuldu",await hn(),setTimeout(()=>l(),700)}catch(p){d(`Kurulum oluşturulamadı: ${p}`),_.disabled=!1,_.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{c()})}function l(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>yl())}return s(),!0;function c(){es?.remove(),es=null,Dc(),qe("explore","kind:modpack")}function d(h){mt(()=>Promise.resolve().then(()=>St),void 0).then(u=>u.toast(h,"err"))}}const Tr=Math.PI*2;function co(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function rM(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Mo(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Tr),i.fill()}function ih(i,e){const t=e?rM(co(),.88):co(),n=r=>({x:Math.random()*r[0],y:r[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Tr});return{base:e?24:30,spawn:n,step:(r,s,a)=>{r.x+=(r.vx+Math.sin(r.seed+r.life*2.1)*9)*s*(1+i*s),r.y+=r.vy*s,r.a=Math.max(0,1-r.life/r.max*1.05),(r.y<-12||r.a<=0)&&Object.assign(r,n(a))},draw:Mo}}function Sl(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Tr});return{base:26,spawn:e,step:(t,n,r)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=r[0]+8),t.x>r[0]+8&&(t.x=-8),t.y<-8&&(t.y=r[1]+8),t.y>r[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(r))},draw:Mo}}function sM(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Tr});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Mo}}function aM(){const i=co(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Tr});return{base:16,spawn:e,step:(t,n,r)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Tr),t.stroke()}}}function oM(){const i=co(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,r)=>{t.y+=t.vy*n,t.y>r[1]+40&&Object.assign(t,e(r))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function Ua(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Tr}),step:(t,n,r)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Mo}}function lM(i){switch(i){case"pano":return ih(.5,!1);case"sahne":return Ua("rgba(255,171,77,0.75)");case"sokum":return ih(.9,!0);case"afis":return Sl("rgba(63,50,38,0.5)");case"standart":return Ua("rgba(147,168,255,0.5)");case"sira":return Ua("rgba(163,230,53,0.85)");case"rihtim":return aM();case"oda":return Sl("rgba(224,48,30,0.6)");case"kumas":return Sl("rgba(138,122,92,0.5)");case"perde":return Ua("rgba(212,175,55,0.8)");case"buz":return sM();case"skala":return oM();default:return null}}let xn=null,jn=null,$i=null,Kr=[],Qt=0,Bs=0,tp=1,np=33,bo=!1;function md(){return Math.min(window.devicePixelRatio||1,1.5)}function Ml(){Qt&&cancelAnimationFrame(Qt),Qt=0,$i=null,Kr=[],xn&&(xn.remove(),xn=null,jn=null)}function uo(i){if(Qt=0,!jn||!xn||!$i||bo||document.hidden)return;if(i-Bs<np){Qt=requestAnimationFrame(uo);return}const e=Math.min((i-Bs)/1e3,.06);Bs=i,Qt=requestAnimationFrame(uo);const t=md();jn.setTransform(t,0,0,t,0,0),jn.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],r=Math.max(1,Math.round($i.base*tp));for(;Kr.length<r;){const s=$i.spawn(n);s.life=Math.random()*s.max,Kr.push(s)}for(;Kr.length>r;)Kr.pop();for(const s of Kr)s.life+=e,$i.step(s,e,n),jn.globalAlpha=s.a,$i.draw(jn,s);jn.globalAlpha=1}function ip(){$i&&jn&&!Qt&&!document.hidden&&!bo&&(Bs=performance.now(),Qt=requestAnimationFrame(uo))}document.addEventListener("visibilitychange",()=>{document.hidden?(Qt&&cancelAnimationFrame(Qt),Qt=0):ip()});window.addEventListener("blur",()=>{bo=!0,Qt&&cancelAnimationFrame(Qt),Qt=0});window.addEventListener("focus",()=>{bo=!1,ip()});window.addEventListener("resize",()=>{if(!xn||!jn)return;const i=md();xn.width=Math.round(innerWidth*i),xn.height=Math.round(innerHeight*i)});function cM(){const i=String(ue.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){Ml();return}const n=lM(e);if(!n){Ml();return}tp={low:.45,mid:.9,high:1.6}[i]??1,np=1e3/({low:25,mid:30,high:40}[i]??30),Ml(),$i=n;const a=md();xn=document.createElement("canvas"),xn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",xn.width=Math.round(innerWidth*a),xn.height=Math.round(innerHeight*a),document.body.appendChild(xn),jn=xn.getContext("2d"),Bs=performance.now(),Qt=requestAnimationFrame(uo)}function dM(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function uM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function hM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function fM(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const pM={yikim:{build:uM,spot:"3 2"},hedef:{build:hM,spot:"12 12"},nokta:{build:fM,spot:"8 8"}};function mM(){const i=String(ue.config?.cursor_style||"standart"),e=document.documentElement,t=pM[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(dM());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const ot=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,_M=`<svg ${ot}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,gM=`<svg ${ot}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,vM=`<svg ${ot}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,xM=`<svg ${ot}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,yM=`<svg ${ot}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,SM=`<svg ${ot}><path d="M12 5v14M5 12h14"/></svg>`,MM=`<svg ${ot}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,bM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',EM=`<svg ${ot}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,TM=`<svg ${ot}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,wM=`<svg ${ot}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,AM=`<svg ${ot}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,RM=`<svg ${ot}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,CM=`<svg ${ot}><path d="m4.5 12.5 5 5 10-11"/></svg>`,LM=`<svg ${ot}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,PM=`<svg ${ot}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,DM=`<svg ${ot}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,IM=`<svg ${ot}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,UM=`<svg ${ot}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,kM=`<svg ${ot}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,NM=`<svg ${ot}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,FM=`<svg ${ot}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,OM=`<svg ${ot}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,BM=`<svg ${ot}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,zM=`<svg ${ot}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,HM=`<svg ${ot}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,VM=`<svg ${ot}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,GM=`<svg ${ot}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,WM=`<svg ${ot}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,ho={home:_M,grid:gM,compass:vM,news:xM,gear:yM,plus:SM,search:MM,play:bM,image:EM,folder:TM,trash:wM,copy:AM,back:RM,check:CM,user:LM,puzzle:PM,box:DM,cpu:IM,args:UM,term:kM,chart:NM,dl:FM,mug:OM,globe:BM,sparkle:zM,file:HM,info:VM,clock:GM,stop:WM};function re(i,e=""){const t=ho[i]||ho.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const ka='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',Na=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Rs={min:`<svg ${ka}>${Na('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${ka}>${Na('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${ka}>${Na('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${ka}>${Na('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`},ls=window.__TAURI__,$M=ls.core,XM=ls.event,se=(i,e={})=>$M.invoke(i,e),An=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),Wn=(i,e)=>XM.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=ho[t]||ho.info,i.replaceWith(n)};const rp=i=>se("plugin:opener|open_url",{url:i}),sp=i=>se("plugin:opener|open_path",{path:i}),ue={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function hn(i=!1){const e=await se("cmd_get_state");ue.config=e.config,ue.accounts=e.accounts,ue.instances=e.instances,ue.featured_versions=e.featured_versions,ue.curseforge=e.curseforge,ue.sys=e.sys,Si(),wo(),i&&qe(_d)}const rh=wo;function Si(){if(!ue.config)return;const i=ue.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",r=(ue.config.custom_accent||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent")),cM(),mM()}const qM=Si;function xs(){return ue.accounts.find(i=>i.id===ue.config?.last_selected_account)||ue.accounts[0]||null}function Eo(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function ap(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function To(i){const e=ap(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function YM(){const i=document.getElementById("pill-ram");if(!i||!ue.sys)return;const t=ue.instances[0]?.ram_mb||ue.config?.default_ram_mb||4096,n=ue.sys.total_ram_mb||16384,r=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),a=`${(t/1024).toFixed(1)} GB`;s?Fm(s,a):i.innerHTML=`RAM <b id="ram-pill-val">${a}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${r/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${r/100})`)}const ei=i=>document.querySelector(i);function Ht(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function oa(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function cs(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function KM(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function zs(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Be={activeId:null};function Te(i,e="ok"){const t=Ht(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}function kn(i){const e=Ht(`<div class="modal-backdrop"><div class="modal">${i}</div></div>`);document.body.appendChild(e);const t=()=>e.remove();return e.addEventListener("click",n=>{n.target===e&&t()}),{root:e.firstElementChild,close:t}}const Gi={},bi={};let sh="home",_d="home";function qe(i,e){const t=ei("#content");t&&(_d=i,sh=i,bi.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===sh)}),Om(t,()=>{t.innerHTML="";const n=Gi[i];n&&n(t),rf(t)}))}const ZM=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"deneme",icon:"play",label:"Deneme Alanı"},{page:"settings",icon:"gear",label:"Ayarlar"}];function op(){const i=ei("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Rs.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Rs.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Rs.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${ZM.map(r=>`
          <button class="rail-item" data-page="${r.page}">
            ${re(r.icon,"ri-icon")}
            <span class="ri-label">${r.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=ls.window.getCurrentWindow();ei("#tb-min")?.addEventListener("click",()=>t.minimize()),ei("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Be.activeId){t.minimize(),Te("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};ei("#tb-close")?.addEventListener("click",n);try{t.onCloseRequested(r=>{Be.activeId&&(r?.preventDefault?.(),t.minimize(),Te("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const r=ei("#tb-max"),s=o=>{r&&(r.innerHTML=o?Rs.restore:Rs.max,r.title=o?"Geri Yükle":"Ekranı Kapla",r.setAttribute("aria-label",r.title))},a=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(a):ls.event?.listen&&ls.event.listen("tauri://resize",a),a()}catch{}document.querySelectorAll(".rail-item").forEach(r=>{r.addEventListener("click",()=>qe(r.dataset.page))}),wo(),ei("#rail-account")?.addEventListener("click",()=>{ue.accounts.length?qe("settings"):jt()}),Jc(Array.from(document.querySelectorAll(".rail-item")))}function wo(){const i=ei("#rail-account");if(!i)return;const e=xs();if(!e){i.innerHTML=`<span class="ra-head ph">${re("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Eo(e)}" draggable="false" ${To(e)} />
    <span class="ra-name">${e.name}</span>
    <span class="pa-dot on"></span>`}function jt(){const{root:i,close:e}=kn(`
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
      <button class="btn primary lg" id="ms-go">${re("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `);i.querySelector("#off-go")?.addEventListener("click",async()=>{const t=i.querySelector("#off-name").value.trim();if(t.length<3)return Te("İsim en az 3 karakter olmalı","err");try{await se("cmd_add_offline_account",{name:t}),await hn(),rh(),Te(`Hoş geldin, ${t}!`),e()}catch(n){Te(String(n),"err")}}),i.querySelector("#ms-go")?.addEventListener("click",async()=>{const t=i.querySelector("#ms-status"),n=i.querySelector("#ms-go");n.disabled=!0,t.style.display="block",t.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const r=await se("cmd_ms_login_begin");await hn(),rh(),Te(`Hoş geldin, ${r.name}!`),e()}catch(r){t.textContent=String(r),n.disabled=!1}})}let Fa=0;async function JM(i){if(!ue.accounts.length){jt();return}if(Be.activeId){Te("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++Fa;Be.activeId=i;const{root:t,close:n}=kn(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),r=t.querySelector("#lp-bar"),s=t.querySelector("#lp-stage"),a=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),l=await Wn("launch-progress",f=>{if(e!==Fa)return;const _=f.payload;r.style.transform=`scaleX(${Math.min(1,Math.max(0,_.percent/100))})`,s.textContent=QM(_.stage),a.textContent=_.detail||""}),c=await Wn("game-log",f=>{if(e!==Fa)return;o.style.display="block";const _=document.createElement("div");_.textContent=f.payload,o.appendChild(_),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await Wn("game-exit",f=>{if(e!==Fa)return;Be.activeId=null;const _=f.payload?.exit_code??f.payload?.code??-1;_===0?(s.textContent="Oyun kapatıldı",setTimeout(n,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${_})`,a.textContent="Canlı logdan detayları görebilirsin.")}),h=()=>{l(),c(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(h(),u.disconnect())});u.observe(document.body,{childList:!0});try{await se("cmd_launch_instance",{instanceId:i}),s.textContent="Oyun çalışıyor",a.textContent="İyi oyunlar!",r.style.transform="scaleX(1)",setTimeout(()=>{h(),n()},1500),await hn(!0)}catch(f){Be.activeId=null,s.textContent="Başlatılamadı",a.textContent=String(f),a.style.color="var(--danger)"}}function QM(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}Wn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});Wn("game-started",i=>{Be.activeId=i.payload,hn(!0)});Wn("game-exit",async()=>{window.__yikimRestart||(Be.activeId=null,hn(!0))});Wn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&Te(`Kuruldu: ${e.filename}`),e.phase==="error"&&Te(`Hata: ${e.filename}`,"err")});let mn=null,ah;Wn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!mn||!document.body.contains(mn))&&(mn=document.createElement("div"),mn.className="sm-panel",mn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(mn)),clearTimeout(ah);const t=mn.querySelector("#sm-count"),n=mn.querySelector("#sm-fill"),r=mn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,r.appendChild(s);r.children.length>8;)r.firstElementChild?.remove();r.scrollTop=r.scrollHeight}e.done>=e.total&&(mn.querySelector(".sm-title").textContent="Standart modlar hazır",ah=setTimeout(()=>{mn?.remove(),mn=null},4e3))});Wn("mod-install-progress",i=>{i.payload.phase});async function lp(){try{await hn(),ZS(),op(),qe("home"),eM(),iM()||nM(),jM()}catch(i){eb(i)}}async function jM(){try{const e=await(await mt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=kn(`
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
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const r=t.querySelector("#upd-go");r.disabled=!0,r.textContent="İndiriliyor…";try{let s=0,a=0;await e.download(o=>{switch(o.event){case"Started":a=o.data.contentLength??0;break;case"Progress":s+=o.data.chunkLength;break;case"Finished":r.textContent="Kuruluyor…";break}a>0&&(r.textContent=`İndiriliyor… %${Math.round(s/a*100)}`)}),await e.install(),Te("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{ls.process.exit(0)}catch{window.location.reload()}},900)}catch(s){r.disabled=!1,r.textContent="İndir ve Kur",Te(`Güncelleme başarısız: ${s}`,"err")}})}catch{}}function eb(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}lp();const St=Object.freeze(Object.defineProperty({__proto__:null,$:ei,applyTheme:qM,applyWorld:Si,boot:lp,currentAccount:xs,get currentPage(){return _d},el:Ht,enterStage:rf,fileSrc:An,fmtBytes:oa,fmtDuration:cs,fmtSpeed:KM,headAttrs:To,headFallbackUrl:ap,headUrl:Eo,icon:re,invoke:se,lamp:zs,launch:Be,launchInstance:JM,listen:Wn,nav:bi,navigate:qe,openExternal:rp,openLoginModal:jt,openModal:kn,openPath:sp,pages:Gi,refreshState:hn,renderAccountPill:wo,setupShell:op,state:ue,switchPress:Qc,toast:Te,updateRamPill:YM},Symbol.toStringTag,{value:"Module"}));
