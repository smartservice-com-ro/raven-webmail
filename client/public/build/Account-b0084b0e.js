import{S as t,a as e,s,ai as l,b as a,c as i,d as o,aj as n,ak as d,A as m,y as c,f as r,ac as $,n as p,k as u,m as v,E as g,l as w,L as y,$ as f,M as b,e as h,o as x,az as q,F as A,B as D,G as k,H as U,u as M}from"./main-41bc76b9.js";function T(t){let e,s;const $=t[8].default,p=l($,t,t[7],null);return{c(){e=a("svg"),p&&p.c(),i(e,"height",t[1]),i(e,"width",t[0]),i(e,"viewBox","0 0 100 100"),i(e,"preserveAspectRatio","xMidYMid meet")},m(t,l){o(t,e,l),p&&p.m(e,null),s=!0},p(t,[l]){p&&p.p&&128&l&&p.p(n($,t,t[7],null),d($,t[7],l,null)),(!s||2&l)&&i(e,"height",t[1]),(!s||1&l)&&i(e,"width",t[0])},i(t){s||(m(p,t),s=!0)},o(t){c(p,t),s=!1},d(t){t&&r(e),p&&p.d(t)}}}function W(t,e,s){let{start:l}=e,{end:a}=e,{width:i=null}=e,{height:o=null}=e;const n=(t,e,s,l)=>{const a=(l-180)*Math.PI/180;return{x:t+s*Math.cos(a),y:e+s*Math.sin(a)}},d=(t,e,s,l,a)=>{const i=n(t,e,s,a),o=n(t,e,s,l),d=a-l<=180?"0":"1";return`\n            M ${i.x}, ${i.y}\n            A ${s} ${s} 0 ${d} 0 ${o.x} ${o.y}\n        `};let m,{$$slots:c={},$$scope:r}=e;return t.$set=t=>{"start"in t&&s(2,l=t.start),"end"in t&&s(3,a=t.end),"width"in t&&s(0,i=t.width),"height"in t&&s(1,o=t.height),"$$scope"in t&&s(7,r=t.$$scope)},t.$$.update=()=>{12&t.$$.dirty&&(m=d(180*l,180*a))},[i,o,l,a,m,n,d,r,c]}class j extends t{constructor(t){super(),e(this,t,W,T,s,{start:2,end:3,width:0,height:1})}}function B(t){let e;return{c(){e=a("path"),i(e,"d",t[3]),$(e,"stroke",t[1]),$(e,"fill",t[2]),$(e,"stroke-width",t[0]),$(e,"stroke-linecap","round")},m(t,s){o(t,e,s)},p(t,[s]){8&s&&i(e,"d",t[3]),2&s&&$(e,"stroke",t[1]),4&s&&$(e,"fill",t[2]),1&s&&$(e,"stroke-width",t[0])},i:p,o:p,d(t){t&&r(e)}}}function F(t,e,s){let{start:l}=e,{end:a}=e,{strokeWidth:i="var(--stroke-width, 5)"}=e,{stroke:o="transparent"}=e,{fill:n="transparent"}=e;const d=(t,e,s,l)=>{const a=(l-180)*Math.PI/180;return{x:t+s*Math.cos(a),y:e+s*Math.sin(a)}};let m;return t.$set=t=>{"start"in t&&s(4,l=t.start),"end"in t&&s(5,a=t.end),"strokeWidth"in t&&s(0,i=t.strokeWidth),"stroke"in t&&s(1,o=t.stroke),"fill"in t&&s(2,n=t.fill)},t.$$.update=()=>{48&t.$$.dirty&&s(3,m=((t,e,s,l,a)=>{const i=d(t,e,s,a),o=d(t,e,s,l),n=a-l<=180?"0":"1";return`\n            M ${i.x}, ${i.y}\n            A ${s} ${s} 0 ${n} 0 ${o.x} ${o.y}\n        `})(50,50,35,360*l+90,360*a+90))},[i,o,n,m,l,a]}class I extends t{constructor(t){super(),e(this,t,F,B,s,{start:4,end:5,strokeWidth:0,stroke:1,fill:2})}}function P(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.quota.used/t[0].limits.quota.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.quota.used/t[0].limits.quota.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function z(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.imapDownload.used/t[0].limits.imapDownload.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.imapDownload.used/t[0].limits.imapDownload.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function C(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.imapUpload.used/t[0].limits.imapUpload.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.imapUpload.used/t[0].limits.imapUpload.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function E(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.pop3Download.used/t[0].limits.pop3Download.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.pop3Download.used/t[0].limits.pop3Download.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function G(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.received.used/t[0].limits.received.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.received.used/t[0].limits.received.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function H(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.recipients.used/t[0].limits.recipients.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.recipients.used/t[0].limits.recipients.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function L(t){let e,s;const l=new I({props:{start:0,end:.99,stroke:"rgba(0,0,0,0.075)"}}),a=new I({props:{start:0,end:t[0].limits.forwards.used/t[0].limits.forwards.allowed,stroke:"var(--pc)"}});return{c(){w(l.$$.fragment),e=v(),w(a.$$.fragment)},m(t,i){x(l,t,i),o(t,e,i),x(a,t,i),s=!0},p(t,e){const s={};1&e&&(s.end=t[0].limits.forwards.used/t[0].limits.forwards.allowed),a.$set(s)},i(t){s||(m(l.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){c(l.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){D(l,t),t&&r(e),D(a,t)}}}function R(t){let e,s,l,a,n,d,$,p,k,U,M,T,W,B,F,I,R,S,Y,J,K,N,O,Q,V,X,Z,_,tt,et,st,lt,at,it,ot,nt,dt,mt,ct,rt,$t,pt,ut,vt,gt,wt,yt,ft,bt,ht,xt,qt,At,Dt,kt,Ut,Mt,Tt,Wt,jt,Bt,Ft,It,Pt,zt,Ct,Et,Gt,Ht,Lt,Rt,St,Yt,Jt,Kt,Nt,Ot,Qt,Vt,Xt,Zt,_t,te,ee,se,le,ae,ie,oe,ne,de,me,ce,re,$e,pe,ue,ve,ge,we,ye,fe,be,he,xe,qe,Ae,De,ke,Ue,Me,Te,We,je,Be,Fe,Ie,Pe,ze,Ce,Ee,Ge,He,Le,Re,Se,Ye,Je,Ke,Ne,Oe,Qe,Ve,Xe,Ze,_e,ts,es,ss,ls,as,is,os,ns,ds,ms,cs,rs,$s,ps,us,vs,gs=t[0].name+"",ws=t[0].username+"",ys=t[0].address+"",fs=t[1].limits.storage.title+"",bs=Math.round(t[0].limits.quota.used/t[0].limits.quota.allowed*100)+"",hs=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.quota.used)})+"",xs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.quota.allowed)})+"",qs=t[1].limits.imapDownload.title+"",As=t[1].limits.imapDownload.comment+"",Ds=Math.round(t[0].limits.imapDownload.used/t[0].limits.imapDownload.allowed*100)+"",ks=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.imapDownload.used)})+"",Us=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.imapDownload.allowed)})+"",Ms=t[1].limits.imapUpload.title+"",Ts=t[1].limits.imapUpload.comment+"",Ws=Math.round(t[0].limits.imapUpload.used/t[0].limits.imapUpload.allowed*100)+"",js=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.imapUpload.used)})+"",Bs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.imapUpload.allowed)})+"",Fs=t[1].limits.pop3Download.title+"",Is=t[1].limits.pop3Download.comment+"",Ps=Math.round(t[0].limits.pop3Download.used/t[0].limits.pop3Download.allowed*100)+"",zs=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.pop3Download.used)})+"",Cs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.pop3Download.allowed)})+"",Es=t[1].limits.received.title+"",Gs=t[1].limits.received.comment+"",Hs=Math.round(t[0].limits.received.used/t[0].limits.received.allowed*100)+"",Ls=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.received.used})+"",Rs=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.received.allowed})+"",Ss=t[1].limits.recipients.title+"",Ys=t[1].limits.recipients.comment+"",Js=Math.round(t[0].limits.recipients.used/t[0].limits.recipients.allowed*100)+"",Ks=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.recipients.used})+"",Ns=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.recipients.allowed})+"",Os=t[1].limits.forwards.title+"",Qs=t[1].limits.forwards.comment+"",Vs=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.forwards.used})+"",Xs=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.forwards.allowed})+"";const Zs=new j({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),_s=new j({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),tl=new j({props:{$$slots:{default:[C]},$$scope:{ctx:t}}}),el=new j({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),sl=new j({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),ll=new j({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),al=new j({props:{$$slots:{default:[L]},$$scope:{ctx:t}}});return{c(){e=u("x-account"),s=u("div"),l=u("div"),l.textContent=""+t[8],a=v(),n=u("div"),d=u("div"),$=g(gs),p=v(),k=u("div"),U=g(ws),M=v(),T=u("div"),W=g(ys),B=v(),F=u("div"),I=u("div"),R=u("div"),S=u("div"),Y=g(fs),J=v(),K=u("div"),w(Zs.$$.fragment),N=v(),O=u("div"),Q=u("div"),V=g(bs),X=g("%"),Z=v(),_=u("div"),tt=g(hs),et=v(),st=u("div"),lt=g(xs),at=v(),it=u("div"),ot=u("div"),nt=g(qs),dt=v(),mt=u("span"),ct=g(As),rt=v(),$t=u("div"),w(_s.$$.fragment),pt=v(),ut=u("div"),vt=u("div"),gt=g(Ds),wt=g("%"),yt=v(),ft=u("div"),bt=g(ks),ht=v(),xt=u("div"),qt=g(Us),At=v(),Dt=u("div"),kt=u("div"),Ut=g(Ms),Mt=v(),Tt=u("span"),Wt=g(Ts),jt=v(),Bt=u("div"),w(tl.$$.fragment),Ft=v(),It=u("div"),Pt=u("div"),zt=g(Ws),Ct=g("%"),Et=v(),Gt=u("div"),Ht=g(js),Lt=v(),Rt=u("div"),St=g(Bs),Yt=v(),Jt=u("div"),Kt=u("div"),Nt=g(Fs),Ot=v(),Qt=u("span"),Vt=g(Is),Xt=v(),Zt=u("div"),w(el.$$.fragment),_t=v(),te=u("div"),ee=u("div"),se=g(Ps),le=g("%"),ae=v(),ie=u("div"),oe=g(zs),ne=v(),de=u("div"),me=g(Cs),ce=v(),re=u("div"),$e=u("div"),pe=g(Es),ue=v(),ve=u("span"),ge=g(Gs),we=v(),ye=u("div"),w(sl.$$.fragment),fe=v(),be=u("div"),he=u("div"),xe=g(Hs),qe=g("%"),Ae=v(),De=u("div"),ke=g(Ls),Ue=v(),Me=u("div"),Te=g(Rs),We=v(),je=u("div"),Be=u("div"),Fe=g(Ss),Ie=v(),Pe=u("span"),ze=g(Ys),Ce=v(),Ee=u("div"),w(ll.$$.fragment),Ge=v(),He=u("div"),Le=u("div"),Re=g(Js),Se=g("%"),Ye=v(),Je=u("div"),Ke=g(Ks),Ne=v(),Oe=u("div"),Qe=g(Ns),Ve=v(),Xe=u("div"),Ze=u("div"),_e=g(Os),ts=v(),es=u("span"),ss=g(Qs),ls=v(),as=u("div"),w(al.$$.fragment),is=v(),os=u("div"),ns=u("div"),ds=g(Vs),ms=v(),cs=u("div"),rs=g(Xs),$s=v(),ps=u("div"),i(l,"class","letter svelte-1tl9eya"),i(d,"class","name svelte-1tl9eya"),i(k,"class","username svelte-1tl9eya"),i(T,"class","address svelte-1tl9eya"),i(n,"class","end svelte-1tl9eya"),i(s,"class","main svelte-1tl9eya"),i(S,"class","box-title svelte-1tl9eya"),i(Q,"class","percent svelte-1tl9eya"),i(_,"class","used svelte-1tl9eya"),i(st,"class","total svelte-1tl9eya"),i(O,"class","quota-desc svelte-1tl9eya"),i(K,"class","quota-body svelte-1tl9eya"),i(R,"class","box quota storage-quota svelte-1tl9eya"),i(mt,"class","comment svelte-1tl9eya"),i(ot,"class","box-title svelte-1tl9eya"),i(vt,"class","percent svelte-1tl9eya"),i(ft,"class","used svelte-1tl9eya"),i(xt,"class","total svelte-1tl9eya"),i(ut,"class","quota-desc svelte-1tl9eya"),i($t,"class","quota-body svelte-1tl9eya"),i(it,"class","box quota imap-download-quota svelte-1tl9eya"),i(Tt,"class","comment svelte-1tl9eya"),i(kt,"class","box-title svelte-1tl9eya"),i(Pt,"class","percent svelte-1tl9eya"),i(Gt,"class","used svelte-1tl9eya"),i(Rt,"class","total svelte-1tl9eya"),i(It,"class","quota-desc svelte-1tl9eya"),i(Bt,"class","quota-body svelte-1tl9eya"),i(Dt,"class","box quota imap-upload-quota svelte-1tl9eya"),i(Qt,"class","comment svelte-1tl9eya"),i(Kt,"class","box-title svelte-1tl9eya"),i(ee,"class","percent svelte-1tl9eya"),i(ie,"class","used svelte-1tl9eya"),i(de,"class","total svelte-1tl9eya"),i(te,"class","quota-desc svelte-1tl9eya"),i(Zt,"class","quota-body svelte-1tl9eya"),i(Jt,"class","box quota pop3-download-quota svelte-1tl9eya"),i(ve,"class","comment svelte-1tl9eya"),i($e,"class","box-title svelte-1tl9eya"),i(he,"class","percent svelte-1tl9eya"),i(De,"class","used svelte-1tl9eya"),i(Me,"class","total svelte-1tl9eya"),i(be,"class","quota-desc svelte-1tl9eya"),i(ye,"class","quota-body svelte-1tl9eya"),i(re,"class","box quota received-quota svelte-1tl9eya"),i(Pe,"class","comment svelte-1tl9eya"),i(Be,"class","box-title svelte-1tl9eya"),i(Le,"class","percent svelte-1tl9eya"),i(Je,"class","used svelte-1tl9eya"),i(Oe,"class","total svelte-1tl9eya"),i(He,"class","quota-desc svelte-1tl9eya"),i(Ee,"class","quota-body svelte-1tl9eya"),i(je,"class","box quota received-quota svelte-1tl9eya"),i(es,"class","comment svelte-1tl9eya"),i(Ze,"class","box-title svelte-1tl9eya"),i(ns,"class","used svelte-1tl9eya"),i(cs,"class","total svelte-1tl9eya"),i(os,"class","quota-desc svelte-1tl9eya"),i(as,"class","quota-body svelte-1tl9eya"),i(Xe,"class","box quota received-quota svelte-1tl9eya"),i(I,"class","col col-1 svelte-1tl9eya"),i(F,"class","cols svelte-1tl9eya"),i(ps,"class","bottom-space svelte-1tl9eya"),y(e,"class","svelte-1tl9eya"),f(()=>t[11].call(e)),b(e,"narrow",t[3]),b(e,"wide",t[4])},m(i,m){o(i,e,m),h(e,s),h(s,l),h(s,a),h(s,n),h(n,d),h(d,$),h(n,p),h(n,k),h(k,U),h(n,M),h(n,T),h(T,W),h(e,B),h(e,F),h(F,I),h(I,R),h(R,S),h(S,Y),h(R,J),h(R,K),x(Zs,K,null),h(K,N),h(K,O),h(O,Q),h(Q,V),h(Q,X),h(O,Z),h(O,_),h(_,tt),h(O,et),h(O,st),h(st,lt),h(I,at),h(I,it),h(it,ot),h(ot,nt),h(ot,dt),h(ot,mt),h(mt,ct),h(it,rt),h(it,$t),x(_s,$t,null),h($t,pt),h($t,ut),h(ut,vt),h(vt,gt),h(vt,wt),h(ut,yt),h(ut,ft),h(ft,bt),h(ut,ht),h(ut,xt),h(xt,qt),h(I,At),h(I,Dt),h(Dt,kt),h(kt,Ut),h(kt,Mt),h(kt,Tt),h(Tt,Wt),h(Dt,jt),h(Dt,Bt),x(tl,Bt,null),h(Bt,Ft),h(Bt,It),h(It,Pt),h(Pt,zt),h(Pt,Ct),h(It,Et),h(It,Gt),h(Gt,Ht),h(It,Lt),h(It,Rt),h(Rt,St),h(I,Yt),h(I,Jt),h(Jt,Kt),h(Kt,Nt),h(Kt,Ot),h(Kt,Qt),h(Qt,Vt),h(Jt,Xt),h(Jt,Zt),x(el,Zt,null),h(Zt,_t),h(Zt,te),h(te,ee),h(ee,se),h(ee,le),h(te,ae),h(te,ie),h(ie,oe),h(te,ne),h(te,de),h(de,me),h(I,ce),h(I,re),h(re,$e),h($e,pe),h($e,ue),h($e,ve),h(ve,ge),h(re,we),h(re,ye),x(sl,ye,null),h(ye,fe),h(ye,be),h(be,he),h(he,xe),h(he,qe),h(be,Ae),h(be,De),h(De,ke),h(be,Ue),h(be,Me),h(Me,Te),h(I,We),h(I,je),h(je,Be),h(Be,Fe),h(Be,Ie),h(Be,Pe),h(Pe,ze),h(je,Ce),h(je,Ee),x(ll,Ee,null),h(Ee,Ge),h(Ee,He),h(He,Le),h(Le,Re),h(Le,Se),h(He,Ye),h(He,Je),h(Je,Ke),h(He,Ne),h(He,Oe),h(Oe,Qe),h(I,Ve),h(I,Xe),h(Xe,Ze),h(Ze,_e),h(Ze,ts),h(Ze,es),h(es,ss),h(Xe,ls),h(Xe,as),x(al,as,null),h(as,is),h(as,os),h(os,ns),h(ns,ds),h(os,ms),h(os,cs),h(cs,rs),h(e,$s),h(e,ps),us=q(e,t[11].bind(e)),vs=!0},p(t,[s]){(!vs||1&s)&&gs!==(gs=t[0].name+"")&&A($,gs),(!vs||1&s)&&ws!==(ws=t[0].username+"")&&A(U,ws),(!vs||1&s)&&ys!==(ys=t[0].address+"")&&A(W,ys),(!vs||2&s)&&fs!==(fs=t[1].limits.storage.title+"")&&A(Y,fs);const l={};4097&s&&(l.$$scope={dirty:s,ctx:t}),Zs.$set(l),(!vs||1&s)&&bs!==(bs=Math.round(t[0].limits.quota.used/t[0].limits.quota.allowed*100)+"")&&A(V,bs),(!vs||33&s)&&hs!==(hs=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.quota.used)})+"")&&A(tt,hs),(!vs||33&s)&&xs!==(xs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.quota.allowed)})+"")&&A(lt,xs),(!vs||2&s)&&qs!==(qs=t[1].limits.imapDownload.title+"")&&A(nt,qs),(!vs||2&s)&&As!==(As=t[1].limits.imapDownload.comment+"")&&A(ct,As);const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),_s.$set(a),(!vs||1&s)&&Ds!==(Ds=Math.round(t[0].limits.imapDownload.used/t[0].limits.imapDownload.allowed*100)+"")&&A(gt,Ds),(!vs||33&s)&&ks!==(ks=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.imapDownload.used)})+"")&&A(bt,ks),(!vs||33&s)&&Us!==(Us=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.imapDownload.allowed)})+"")&&A(qt,Us),(!vs||2&s)&&Ms!==(Ms=t[1].limits.imapUpload.title+"")&&A(Ut,Ms),(!vs||2&s)&&Ts!==(Ts=t[1].limits.imapUpload.comment+"")&&A(Wt,Ts);const i={};4097&s&&(i.$$scope={dirty:s,ctx:t}),tl.$set(i),(!vs||1&s)&&Ws!==(Ws=Math.round(t[0].limits.imapUpload.used/t[0].limits.imapUpload.allowed*100)+"")&&A(zt,Ws),(!vs||33&s)&&js!==(js=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.imapUpload.used)})+"")&&A(Ht,js),(!vs||33&s)&&Bs!==(Bs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.imapUpload.allowed)})+"")&&A(St,Bs),(!vs||2&s)&&Fs!==(Fs=t[1].limits.pop3Download.title+"")&&A(Nt,Fs),(!vs||2&s)&&Is!==(Is=t[1].limits.pop3Download.comment+"")&&A(Vt,Is);const o={};4097&s&&(o.$$scope={dirty:s,ctx:t}),el.$set(o),(!vs||1&s)&&Ps!==(Ps=Math.round(t[0].limits.pop3Download.used/t[0].limits.pop3Download.allowed*100)+"")&&A(se,Ps),(!vs||33&s)&&zs!==(zs=t[5]("myAccount.limits.gbUsed",{gb:t[9](t[0].limits.pop3Download.used)})+"")&&A(oe,zs),(!vs||33&s)&&Cs!==(Cs=t[5]("myAccount.limits.gbTotal",{gb:t[9](t[0].limits.pop3Download.allowed)})+"")&&A(me,Cs),(!vs||2&s)&&Es!==(Es=t[1].limits.received.title+"")&&A(pe,Es),(!vs||2&s)&&Gs!==(Gs=t[1].limits.received.comment+"")&&A(ge,Gs);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),sl.$set(n),(!vs||1&s)&&Hs!==(Hs=Math.round(t[0].limits.received.used/t[0].limits.received.allowed*100)+"")&&A(xe,Hs),(!vs||33&s)&&Ls!==(Ls=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.received.used})+"")&&A(ke,Ls),(!vs||33&s)&&Rs!==(Rs=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.received.allowed})+"")&&A(Te,Rs),(!vs||2&s)&&Ss!==(Ss=t[1].limits.recipients.title+"")&&A(Fe,Ss),(!vs||2&s)&&Ys!==(Ys=t[1].limits.recipients.comment+"")&&A(ze,Ys);const d={};4097&s&&(d.$$scope={dirty:s,ctx:t}),ll.$set(d),(!vs||1&s)&&Js!==(Js=Math.round(t[0].limits.recipients.used/t[0].limits.recipients.allowed*100)+"")&&A(Re,Js),(!vs||33&s)&&Ks!==(Ks=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.recipients.used})+"")&&A(Ke,Ks),(!vs||33&s)&&Ns!==(Ns=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.recipients.allowed})+"")&&A(Qe,Ns),(!vs||2&s)&&Os!==(Os=t[1].limits.forwards.title+"")&&A(_e,Os),(!vs||2&s)&&Qs!==(Qs=t[1].limits.forwards.comment+"")&&A(ss,Qs);const m={};4097&s&&(m.$$scope={dirty:s,ctx:t}),al.$set(m),(!vs||33&s)&&Vs!==(Vs=t[5]("myAccount.limits.messagesUsed",{n:t[0].limits.forwards.used})+"")&&A(ds,Vs),(!vs||33&s)&&Xs!==(Xs=t[5]("myAccount.limits.messagesTotal",{n:t[0].limits.forwards.allowed})+"")&&A(rs,Xs),8&s&&b(e,"narrow",t[3]),16&s&&b(e,"wide",t[4])},i(t){vs||(m(Zs.$$.fragment,t),m(_s.$$.fragment,t),m(tl.$$.fragment,t),m(el.$$.fragment,t),m(sl.$$.fragment,t),m(ll.$$.fragment,t),m(al.$$.fragment,t),vs=!0)},o(t){c(Zs.$$.fragment,t),c(_s.$$.fragment,t),c(tl.$$.fragment,t),c(el.$$.fragment,t),c(sl.$$.fragment,t),c(ll.$$.fragment,t),c(al.$$.fragment,t),vs=!1},d(t){t&&r(e),D(Zs),D(_s),D(tl),D(el),D(sl),D(ll),D(al),us()}}}function S(t,e,s){let l,a,{user:i}=e;const{locale:o,trans:n}=k("app");U(t,o,t=>s(10,l=t)),U(t,n,t=>s(5,a=t));let{locale:d=l.myAccount}=e;console.log(i);let m,c,r=0,$=i.name[0]||"";return t.$set=t=>{"user"in t&&s(0,i=t.user),"locale"in t&&s(1,d=t.locale)},t.$$.update=()=>{4&t.$$.dirty&&s(3,m=r<900),8&t.$$.dirty&&s(4,c=!m)},[i,d,r,m,c,a,o,n,$,t=>(t/1024**3).toFixed(2),l,function(){r=this.clientWidth,s(2,r)}]}class Y extends t{constructor(t){super(),e(this,t,S,R,s,{user:0,locale:1})}}function J(t){let e,s,l;document.title=e=t[0].myAccount.title;const a=new Y({props:{user:t[1]}});return{c(){s=v(),w(a.$$.fragment)},m(t,e){o(t,s,e),x(a,t,e),l=!0},p(t,[s]){(!l||1&s)&&e!==(e=t[0].myAccount.title)&&(document.title=e);const i={};2&s&&(i.user=t[1]),a.$set(i)},i(t){l||(m(a.$$.fragment,t),l=!0)},o(t){c(a.$$.fragment,t),l=!1},d(t){t&&r(s),D(a,t)}}}async function K(t,{client:e}){if(!M.get())return this.redirect("#!/login")}function N(t,e,s){let l,a;U(t,M,t=>s(1,a=t));const{locale:i}=k("app");return U(t,i,t=>s(0,l=t)),[l,a,i]}export default class extends t{constructor(t){super(),e(this,t,N,J,s,{})}}export{K as preload};
//# sourceMappingURL=Account-b0084b0e.js.map
