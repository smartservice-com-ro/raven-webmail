import{S as s,a as e,s as t,m as r,k as i,E as l,c as a,d as n,e as o,F as c,n as f,f as u,G as m,H as d,u as p,az as $,l as g,o as h,A as x,y as v,B as S}from"./main-42c9a9ac.js";function w(s){let e,t,m,d,p,$,g,h,x=s[0].filters.title+"",v=s[0].filters.commingSoon+"";return document.title=e=s[0].filters.title,{c(){t=r(),m=i("div"),d=i("h1"),p=l(x),$=r(),g=i("p"),h=l(v),a(g,"class","svelte-aid23e"),a(m,"class","filters svelte-aid23e")},m(s,e){n(s,t,e),n(s,m,e),o(m,d),o(d,p),o(m,$),o(m,g),o(g,h)},p(s,[t]){1&t&&e!==(e=s[0].filters.title)&&(document.title=e),1&t&&x!==(x=s[0].filters.title+"")&&c(p,x),1&t&&v!==(v=s[0].filters.commingSoon+"")&&c(h,v)},i:f,o:f,d(s){s&&u(t),s&&u(m)}}}function y(s,e,t){let r,{user:i}=e,{filters:l}=e;const{locale:a}=m("app");d(s,a,s=>t(4,r=s));let{locale:n=r}=e;return s.$set=s=>{"user"in s&&t(2,i=s.user),"filters"in s&&t(3,l=s.filters),"locale"in s&&t(0,n=s.locale)},[n,a,i,l]}class j extends s{constructor(s){super(),e(this,s,y,w,t,{user:2,filters:3,locale:0})}}function k(s){let e;const t=new j({props:{user:s[0],filters:s[1]}});return{c(){g(t.$$.fragment)},m(s,r){h(t,s,r),e=!0},p(s,[e]){const r={};1&e&&(r.user=s[0]),2&e&&(r.filters=s[1]),t.$set(r)},i(s){e||(x(t.$$.fragment,s),e=!0)},o(s){v(t.$$.fragment,s),e=!1},d(s){S(t,s)}}}async function z(){if(!p.get())return this.redirect("#!/login");const s=await $("/users/me/filters");return{user:p,filters:s}}function A(s,e,t){let{user:r}=e,{filters:i}=e;return s.$set=s=>{"user"in s&&t(0,r=s.user),"filters"in s&&t(1,i=s.filters)},[r,i]}export default class extends s{constructor(s){super(),e(this,s,A,k,t,{user:0,filters:1})}}export{z as preload};
//# sourceMappingURL=Filters-84724e4b.js.map