import{S as t,a as e,s as a,o as n,b as s,c as o,h as l,n as r,d as c,am as i,w as m,x as $,F as d,D as f,G as u,P as g,I as p,aq as h,M as x,e as b,g as w,N as k,j as v,k as y,l as j,C as A,E as L,an as T,ap as M,ar as B,J as S,m as R,Y as _,Z as D,R as U,T as z,a4 as C,a5 as I,as as N,W as P,L as H,at as Z,ae as q,r as E,a3 as F,au as G,av as J,af as V,u as W,ag as Y,aw as K}from"./main-9bc1776f.js";import{T as O,a as Q,R as X,M as tt,d as et,c as at,b as nt,U as st}from"./MoveTo-3b5297e4.js";function ot(t){let e,a;return{c(){e=n("svg"),a=n("path"),s(a,"d","M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"),s(a,"fill",t[2]),s(e,"width",t[0]),s(e,"height",t[1]),s(e,"viewBox",t[3])},m(t,n){o(t,e,n),l(e,a)},p(t,[n]){4&n&&s(a,"fill",t[2]),1&n&&s(e,"width",t[0]),2&n&&s(e,"height",t[1]),8&n&&s(e,"viewBox",t[3])},i:r,o:r,d(t){t&&c(e)}}}function lt(t,e,a){let{size:n="1em"}=e,{width:s=n}=e,{height:o=n}=e,{color:l="currentColor"}=e,{viewBox:r="0 0 24 24"}=e;return t.$set=t=>{"size"in t&&a(4,n=t.size),"width"in t&&a(0,s=t.width),"height"in t&&a(1,o=t.height),"color"in t&&a(2,l=t.color),"viewBox"in t&&a(3,r=t.viewBox)},[s,o,l,r,n]}class rt extends t{constructor(t){super(),e(this,t,lt,ot,a,{size:4,width:0,height:1,color:2,viewBox:3})}}function ct(t,e,a){const n=t.slice();return n[6]=e[a],n}function it(t){let e,a,n=t[2].length+"";return{c(){e=b("x-count"),a=w(n),k(e,"class","svelte-d56671")},m(t,n){o(t,e,n),l(e,a)},p(t,e){4&e&&n!==(n=t[2].length+"")&&v(a,n)},d(t){t&&c(e)}}}function mt(t){let e,a,n,s;const r=new h({}),i=new x({});let g=t[2].length&&it(t);return{c(){e=b("x-action"),m(r.$$.fragment),a=y(),m(i.$$.fragment),n=y(),g&&g.c(),k(e,"slot","activator"),k(e,"class","btn-dark"),k(e,"data-tooltip","Archivos adjuntos")},m(t,c){o(t,e,c),$(r,e,null),l(e,a),$(i,e,null),l(e,n),g&&g.m(e,null),s=!0},p(t,a){t[2].length?g?g.p(t,a):(g=it(t),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i(t){s||(d(r.$$.fragment,t),d(i.$$.fragment,t),s=!0)},o(t){f(r.$$.fragment,t),f(i.$$.fragment,t),s=!1},d(t){t&&c(e),u(r),u(i),g&&g.d()}}}function $t(t){let e,a,n,r,i,m,$=t[6].filename+"";return{c(){e=b("x-item"),a=b("img"),r=y(),i=w($),m=y(),a.src!==(n=B(t[6].filename))&&s(a,"src",n),s(a,"alt",""),s(a,"class","svelte-d56671"),k(e,"class","svelte-d56671")},m(t,n){o(t,e,n),l(e,a),l(e,r),l(e,i),o(t,m,n)},p(t,e){4&e&&a.src!==(n=B(t[6].filename))&&s(a,"src",n),4&e&&$!==($=t[6].filename+"")&&v(i,$)},d(t){t&&c(e),t&&c(m)}}}function dt(t){let e;const a=new M({props:{href:"/download/"+t[3].id+"/"+t[4].id+"/"+t[6].id+"?filename="+encodeURIComponent(t[6].filename),download:!0,target:"_blank",$$slots:{default:[$t]},$$scope:{ctx:t}}});return{c(){m(a.$$.fragment)},m(t,n){$(a,t,n),e=!0},p(t,e){const n={};28&e&&(n.href="/download/"+t[3].id+"/"+t[4].id+"/"+t[6].id+"?filename="+encodeURIComponent(t[6].filename)),516&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){f(a.$$.fragment,t),e=!1},d(t){u(a,t)}}}function ft(t){let e,a,n,s=t[2],l=[];for(let e=0;e<s.length;e+=1)l[e]=dt(ct(t,s,e));const r=t=>f(l[t],1,1,()=>{l[t]=null});return{c(){e=y();for(let t=0;t<l.length;t+=1)l[t].c();a=j()},m(t,s){o(t,e,s);for(let e=0;e<l.length;e+=1)l[e].m(t,s);o(t,a,s),n=!0},p(t,e){if(28&e){let n;for(s=t[2],n=0;n<s.length;n+=1){const o=ct(t,s,n);l[n]?(l[n].p(o,e),d(l[n],1)):(l[n]=dt(o),l[n].c(),d(l[n],1),l[n].m(a.parentNode,a))}for(A(),n=s.length;n<l.length;n+=1)r(n);L()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)d(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)f(l[t]);n=!1},d(t){t&&c(e),T(l,t),t&&c(a)}}}function ut(t){let e;const a=new i({props:{origin:"top right",$$slots:{default:[ft],activator:[mt]},$$scope:{ctx:t}}});return{c(){m(a.$$.fragment)},m(t,n){$(a,t,n),e=!0},p(t,[e]){const n={};540&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){f(a.$$.fragment,t),e=!1},d(t){u(a,t)}}}function gt(t,e,a){let n,s,o=r,l=()=>(o(),o=g(m,t=>a(3,n=t)),m),c=r,i=()=>(c(),c=g($,t=>a(4,s=t)),$);t.$$.on_destroy.push(()=>o()),t.$$.on_destroy.push(()=>c());let{mailbox:m}=e;l();let{message:$}=e;i();let{attachments:d}=e;const{trans:f}=p("app");return t.$set=t=>{"mailbox"in t&&l(a(0,m=t.mailbox)),"message"in t&&i(a(1,$=t.message)),"attachments"in t&&a(2,d=t.attachments)},[m,$,d,n,s]}class pt extends t{constructor(t){super(),e(this,t,gt,ut,a,{mailbox:0,message:1,attachments:2})}}function ht(t){let e;const a=new at({});return{c(){m(a.$$.fragment)},m(t,n){$(a,t,n),e=!0},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){f(a.$$.fragment,t),e=!1},d(t){u(a,t)}}}function xt(t){let e;const a=new nt({});return{c(){m(a.$$.fragment)},m(t,n){$(a,t,n),e=!0},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){f(a.$$.fragment,t),e=!1},d(t){u(a,t)}}}function bt(t){let e,a,n,s,r;const i=new V({}),g=new x({});return{c(){e=b("x-action"),m(i.$$.fragment),a=y(),m(g.$$.fragment),k(e,"class","btn-dark"),k(e,"data-tooltip",n=t[3].actions.markAsSpam)},m(n,c,m){o(n,e,c),$(i,e,null),l(e,a),$(g,e,null),s=!0,m&&r(),r=R(e,"click",t[13])},p(t,a){(!s||8&a&&n!==(n=t[3].actions.markAsSpam))&&k(e,"data-tooltip",n)},i(t){s||(d(i.$$.fragment,t),d(g.$$.fragment,t),s=!0)},o(t){f(i.$$.fragment,t),f(g.$$.fragment,t),s=!1},d(t){t&&c(e),u(i),u(g),r()}}}function wt(t){let e,a,n,s,r;const i=new st({}),g=new x({});return{c(){e=b("x-action"),m(i.$$.fragment),a=y(),m(g.$$.fragment),k(e,"class","btn-dark"),k(e,"data-tooltip",n=t[3].actions.unMarkAsSpam)},m(n,c,m){o(n,e,c),$(i,e,null),l(e,a),$(g,e,null),s=!0,m&&r(),r=R(e,"click",t[13])},p(t,a){(!s||8&a&&n!==(n=t[3].actions.unMarkAsSpam))&&k(e,"data-tooltip",n)},i(t){s||(d(i.$$.fragment,t),d(g.$$.fragment,t),s=!0)},o(t){f(i.$$.fragment,t),f(g.$$.fragment,t),s=!1},d(t){t&&c(e),u(i),u(g),r()}}}function kt(t){let e,a;const n=new pt({props:{mailbox:t[0],message:t[1],attachments:t[5].attachments,tooltip:t[3].actions.attachments}});return{c(){e=b("x-action-group"),m(n.$$.fragment)},m(t,s){o(t,e,s),$(n,e,null),a=!0},p(t,e){const a={};1&e&&(a.mailbox=t[0]),2&e&&(a.message=t[1]),32&e&&(a.attachments=t[5].attachments),8&e&&(a.tooltip=t[3].actions.attachments),n.$set(a)},i(t){a||(d(n.$$.fragment,t),a=!0)},o(t){f(n.$$.fragment,t),a=!1},d(t){t&&c(e),u(n)}}}function vt(t){let e,a,n,r,i,g,p,h,w,v,T,M,B,S,_,D,U,z,C,I,N,P,Z,F,G,J,V,W,Y,K,O;const Q=new rt({}),at=new x({}),nt=new x({}),st=[xt,ht],ot=[];function lt(t,e){return t[5].seen?0:1}v=lt(t),T=ot[v]=st[v](t);const ct=[wt,bt],it=[];~(S=function(t,e){return t[8]?0:t[10]||t[11]||t[9]?-1:1}(t))&&(_=it[S]=ct[S](t));const mt=new q({}),$t=new x({}),dt=new X({}),ft=new x({});let ut=!t[10]&&!t[11]&&function(t){let e,a,n,s,r;const i=new et({}),g=new x({});return{c(){e=b("x-action"),m(i.$$.fragment),a=y(),m(g.$$.fragment),k(e,"class","btn-dark"),k(e,"data-tooltip",n=t[3].actions.reply)},m(n,c,m){o(n,e,c),$(i,e,null),l(e,a),$(g,e,null),s=!0,m&&r(),r=R(e,"click",t[15])},p(t,a){(!s||8&a&&n!==(n=t[3].actions.reply))&&k(e,"data-tooltip",n)},i(t){s||(d(i.$$.fragment,t),d(g.$$.fragment,t),s=!0)},o(t){f(i.$$.fragment,t),f(g.$$.fragment,t),s=!1},d(t){t&&c(e),u(i),u(g),r()}}}(t);const gt=new tt({props:{mailbox:t[0],selection:H([t[1]]),tooltip:t[3].actions.moveTo}});gt.$on("moved",t[17]);let pt=t[5].attachments&&t[5].attachments.length&&kt(t);return{c(){e=b("x-action-group"),a=b("a"),m(Q.$$.fragment),n=y(),m(at.$$.fragment),g=y(),p=b("x-action-group"),h=b("x-action"),m(nt.$$.fragment),w=y(),T.c(),B=y(),_&&_.c(),D=y(),U=b("x-action"),m(mt.$$.fragment),z=y(),m($t.$$.fragment),I=y(),N=b("x-action-group"),P=b("x-action"),m(dt.$$.fragment),Z=y(),m(ft.$$.fragment),G=y(),ut&&ut.c(),J=y(),V=b("x-action-group"),m(gt.$$.fragment),W=y(),pt&&pt.c(),Y=j(),s(a,"class","x-action btn-dark"),s(a,"href",r="#!/mailbox/"+t[4].id),s(a,"data-tooltip",i=t[3].actions.backToMailbox),k(h,"class","btn-dark"),k(h,"data-tooltip",M=t[5].seen?t[3].actions.markAsUnread:t[3].actions.markAsRead),k(U,"class","btn-dark"),k(U,"data-tooltip",C=t[9]?t[3].actions.deletePermanently:t[10]?t[3].actions.discardDrafts:t[3].actions.delete),k(P,"class","btn-dark"),k(P,"data-tooltip",F=t[3].actions.forward)},m(s,r,c){o(s,e,r),l(e,a),$(Q,a,null),l(a,n),$(at,a,null),o(s,g,r),o(s,p,r),l(p,h),$(nt,h,null),l(h,w),ot[v].m(h,null),l(p,B),~S&&it[S].m(p,null),l(p,D),l(p,U),$(mt,U,null),l(U,z),$($t,U,null),o(s,I,r),o(s,N,r),l(N,P),$(dt,P,null),l(P,Z),$(ft,P,null),l(N,G),ut&&ut.m(N,null),o(s,J,r),o(s,V,r),$(gt,V,null),o(s,W,r),pt&&pt.m(s,r),o(s,Y,r),K=!0,c&&E(O),O=[R(h,"click",t[12]),R(U,"click",t[14]),R(P,"click",t[16])]},p(t,e){(!K||16&e&&r!==(r="#!/mailbox/"+t[4].id))&&s(a,"href",r),(!K||8&e&&i!==(i=t[3].actions.backToMailbox))&&s(a,"data-tooltip",i);let n=v;v=lt(t),v!==n&&(A(),f(ot[n],1,1,()=>{ot[n]=null}),L(),T=ot[v],T||(T=ot[v]=st[v](t),T.c()),d(T,1),T.m(h,null)),(!K||40&e&&M!==(M=t[5].seen?t[3].actions.markAsUnread:t[3].actions.markAsRead))&&k(h,"data-tooltip",M),_&&_.p(t,e),(!K||8&e&&C!==(C=t[9]?t[3].actions.deletePermanently:t[10]?t[3].actions.discardDrafts:t[3].actions.delete))&&k(U,"data-tooltip",C),(!K||8&e&&F!==(F=t[3].actions.forward))&&k(P,"data-tooltip",F),t[10]||t[11]||ut.p(t,e);const o={};1&e&&(o.mailbox=t[0]),2&e&&(o.selection=H([t[1]])),8&e&&(o.tooltip=t[3].actions.moveTo),gt.$set(o),t[5].attachments&&t[5].attachments.length?pt?(pt.p(t,e),32&e&&d(pt,1)):(pt=kt(t),pt.c(),d(pt,1),pt.m(Y.parentNode,Y)):pt&&(A(),f(pt,1,1,()=>{pt=null}),L())},i(t){K||(d(Q.$$.fragment,t),d(at.$$.fragment,t),d(nt.$$.fragment,t),d(T),d(_),d(mt.$$.fragment,t),d($t.$$.fragment,t),d(dt.$$.fragment,t),d(ft.$$.fragment,t),d(ut),d(gt.$$.fragment,t),d(pt),K=!0)},o(t){f(Q.$$.fragment,t),f(at.$$.fragment,t),f(nt.$$.fragment,t),f(T),f(_),f(mt.$$.fragment,t),f($t.$$.fragment,t),f(dt.$$.fragment,t),f(ft.$$.fragment,t),f(ut),f(gt.$$.fragment,t),f(pt),K=!1},d(t){t&&c(e),u(Q),u(at),t&&c(g),t&&c(p),u(nt),ot[v].d(),~S&&it[S].d(),u(mt),u($t),t&&c(I),t&&c(N),u(dt),u(ft),ut&&ut.d(),t&&c(J),t&&c(V),u(gt),t&&c(W),pt&&pt.d(t),t&&c(Y),E(O)}}}function yt(t){let e;function a(t,e){return t[5].from.name?At:jt}let n=a(t),s=n(t);return{c(){e=b("x-message-from"),s.c(),k(e,"class","svelte-1akrpub")},m(t,a){o(t,e,a),s.m(e,null)},p(t,o){n===(n=a(t))&&s?s.p(t,o):(s.d(1),s=n(t),s&&(s.c(),s.m(e,null)))},d(t){t&&c(e),s.d()}}}function jt(t){let e,a,n,r,i=t[3].message.labels.from+"",m=t[5].from.address+"";return{c(){e=w(i),a=y(),n=b("span"),r=w(m),s(n,"class","from-main svelte-1akrpub")},m(t,s){o(t,e,s),o(t,a,s),o(t,n,s),l(n,r)},p(t,a){8&a&&i!==(i=t[3].message.labels.from+"")&&v(e,i),32&a&&m!==(m=t[5].from.address+"")&&v(r,m)},d(t){t&&c(e),t&&c(a),t&&c(n)}}}function At(t){let e,a,n,r,i,m,$,d,f=t[3].message.labels.from+"",u=t[5].from.name+"",g=t[5].from.address+"";return{c(){e=w(f),a=y(),n=b("span"),r=w(u),i=y(),m=w("<"),$=w(g),d=w(">"),s(n,"class","from-main svelte-1akrpub")},m(t,s){o(t,e,s),o(t,a,s),o(t,n,s),l(n,r),o(t,i,s),o(t,m,s),o(t,$,s),o(t,d,s)},p(t,a){8&a&&f!==(f=t[3].message.labels.from+"")&&v(e,f),32&a&&u!==(u=t[5].from.name+"")&&v(r,u),32&a&&g!==(g=t[5].from.address+"")&&v($,g)},d(t){t&&c(e),t&&c(a),t&&c(n),t&&c(i),t&&c(m),t&&c($),t&&c(d)}}}function Lt(t){let e,a,n,s,r=t[3].message.labels.to+"",i=t[5].to.map(_t).join(", ")+"";return{c(){e=b("x-message-to"),a=w(r),n=y(),s=w(i),k(e,"class","svelte-1akrpub")},m(t,r){o(t,e,r),l(e,a),l(e,n),l(e,s)},p(t,e){8&e&&r!==(r=t[3].message.labels.to+"")&&v(a,r),32&e&&i!==(i=t[5].to.map(_t).join(", ")+"")&&v(s,i)},d(t){t&&c(e)}}}function Tt(t){let e,a,n,s,r=t[3].message.labels.date+"",i=new Date(t[5].date).toLocaleString()+"";return{c(){e=b("x-message-date"),a=w(r),n=y(),s=w(i),k(e,"class","svelte-1akrpub")},m(t,r){o(t,e,r),l(e,a),l(e,n),l(e,s)},p(t,e){8&e&&r!==(r=t[3].message.labels.date+"")&&v(a,r),32&e&&i!==(i=new Date(t[5].date).toLocaleString()+"")&&v(s,i)},d(t){t&&c(e)}}}function Mt(t){let e,a,n=t[5].text+"";return{c(){e=b("pre"),a=w(n)},m(t,n){o(t,e,n),l(e,a)},p(t,e){32&e&&n!==(n=t[5].text+"")&&v(a,n)},d(t){t&&c(e)}}}function Bt(t){let e,a=G(t[5].html.join(""))+"";return{c(){e=new J(a,null)},m(t,a){e.m(t,a)},p(t,n){32&n&&a!==(a=G(t[5].html.join(""))+"")&&e.p(a)},d(t){t&&e.d()}}}function St(t){let e,a,n,s,r,i,g,p,h,x,j,A,L,T=t[5].subject+"";const M=new Q({props:{scrolled:0!==t[6],$$slots:{default:[vt]},$$scope:{ctx:t}}});let B=t[5].from&&yt(t),S=t[5].to&&Lt(t),_=t[5].date&&Tt(t);function D(t,e){return t[5].html&&t[5].html.length?Bt:((null==j||32&e)&&(j=!(!t[5].text||!t[5].text.trim())),j?Mt:void 0)}let U=D(t,-1),z=U&&U(t);return{c(){m(M.$$.fragment),e=y(),a=b("x-tab-content"),n=b("x-message-title"),s=w(T),r=y(),i=b("x-message-info"),B&&B.c(),g=y(),S&&S.c(),p=y(),_&&_.c(),h=y(),x=b("x-message-content"),z&&z.c(),k(n,"class","svelte-1akrpub"),k(i,"class","svelte-1akrpub"),k(x,"class","svelte-1akrpub"),k(a,"class","svelte-1akrpub")},m(c,m,d){$(M,c,m),o(c,e,m),o(c,a,m),l(a,n),l(n,s),l(a,r),l(a,i),B&&B.m(i,null),l(i,g),S&&S.m(i,null),l(i,p),_&&_.m(i,null),l(a,h),l(a,x),z&&z.m(x,null),A=!0,d&&L(),L=R(a,"scroll",t[7])},p(t,e){const a={};64&e&&(a.scrolled=0!==t[6]),2097211&e&&(a.$$scope={dirty:e,ctx:t}),M.$set(a),(!A||32&e)&&T!==(T=t[5].subject+"")&&v(s,T),t[5].from?B?B.p(t,e):(B=yt(t),B.c(),B.m(i,g)):B&&(B.d(1),B=null),t[5].to?S?S.p(t,e):(S=Lt(t),S.c(),S.m(i,p)):S&&(S.d(1),S=null),t[5].date?_?_.p(t,e):(_=Tt(t),_.c(),_.m(i,null)):_&&(_.d(1),_=null),U===(U=D(t,e))&&z?z.p(t,e):(z&&z.d(1),z=U&&U(t),z&&(z.c(),z.m(x,null)))},i(t){A||(d(M.$$.fragment,t),A=!0)},o(t){f(M.$$.fragment,t),A=!1},d(t){u(M,t),t&&c(e),t&&c(a),B&&B.d(),S&&S.d(),_&&_.d(),z&&z.d(),L()}}}function Rt(t){let e,a,n;document.title=e=t[5].subject;const s=new O({props:{$$slots:{default:[St]},$$scope:{ctx:t}}});return{c(){a=y(),m(s.$$.fragment)},m(t,e){o(t,a,e),$(s,t,e),n=!0},p(t,[a]){(!n||32&a)&&e!==(e=t[5].subject)&&(document.title=e);const o={};2097275&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){f(s.$$.fragment,t),n=!1},d(t){t&&c(a),u(s,t)}}}const _t=t=>`<${t.address}>`;function Dt(t,e,a){let n,s,o,l,c=r,i=()=>(c(),c=g(u,t=>a(4,n=t)),u),m=r,$=()=>(m(),m=g(h,t=>a(5,s=t)),h),d=r,f=()=>(d(),d=g(x,t=>a(6,l=t)),x);t.$$.on_destroy.push(()=>c()),t.$$.on_destroy.push(()=>m()),t.$$.on_destroy.push(()=>d());let{mailbox:u}=e;i();let{message:h}=e;$();let{scroll:x}=e;f();let b=_===u,w=D===u,k=U===u,v=z===u;const y=t=>{let e=!1;return async()=>{if(!e){e=!0;try{await t()}catch(t){throw t}finally{e=!1}}}},j=y(async()=>{await F(n.id,[s.id],!s.seen),h.update(t=>({...t,seen:!t.seen}))}),A=y(async()=>{await C(n.id,[s.id],!b),location.hash="#!/mailbox/"+n.id}),L=y(async()=>{await I(n.id,[s.id]),location.hash="#!/mailbox/"+n.id}),T=y(async()=>{const t=await N(n.id,s.id);P(H(t))}),M=y(async()=>{const t=await Z(n.id,s.id);P(H(t))}),{locale:B}=p("app");S(t,B,t=>a(19,o=t));let{locale:R=o}=e;return t.$set=t=>{"mailbox"in t&&i(a(0,u=t.mailbox)),"message"in t&&$(a(1,h=t.message)),"scroll"in t&&f(a(2,x=t.scroll)),"locale"in t&&a(3,R=t.locale)},[u,h,x,R,n,s,l,t=>x.set(t.target.scrollTop),b,w,k,v,j,A,L,T,M,()=>setTimeout(()=>location.hash="#!/mailbox/"+n.id,250),B]}class Ut extends t{constructor(t){super(),e(this,t,Dt,Rt,a,{mailbox:0,message:1,scroll:2,locale:3})}}function zt(t){let e;const a=new Ut({props:{mailbox:t[0],message:t[1],scroll:t[2]}});return{c(){m(a.$$.fragment)},m(t,n){$(a,t,n),e=!0},p(t,[e]){const n={};1&e&&(n.mailbox=t[0]),2&e&&(n.message=t[1]),4&e&&(n.scroll=t[2]),a.$set(n)},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){f(a.$$.fragment,t),e=!1},d(t){u(a,t)}}}async function Ct(t){if(!W.get())return this.redirect("#!/login");const e=await Y(t.params.mailbox);if(null==e)return this.redirect("#!/");try{const a=await K(t.params.mailbox,t.params.message);return{mailbox:e,message:H(a),scroll:H(0)}}catch(t){this.redirect("#!/mailbox/"+e.get().id)}}function It(t,e,a){let{mailbox:n}=e,{message:s}=e,{scroll:o}=e;return t.$set=t=>{"mailbox"in t&&a(0,n=t.mailbox),"message"in t&&a(1,s=t.message),"scroll"in t&&a(2,o=t.scroll)},[n,s,o]}export default class extends t{constructor(t){super(),e(this,t,It,zt,a,{mailbox:0,message:1,scroll:2})}}export{Ct as preload};
//# sourceMappingURL=Message-9c543ece.js.map
