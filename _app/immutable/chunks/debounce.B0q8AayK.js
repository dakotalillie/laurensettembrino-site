import{A as U,d as X,h as y,B as b,C as G,D as J,F as L,H as K,G as M,I as w,g as I,J as C,K as O,e as V,L as P,M as k,N as Q,O as W,P as Z,Q as q,f as z,R as $,S as j,T as ee,U as ae,V as D,W as ne,X as re,Y as le,Z as te}from"./runtime.BBsI4_9W.js";function ve(t,e){return e}function fe(t,e,a,u){for(var v=[],i=e.length,s=0;s<i;s++)W(e[s].e,v,!0);var h=i>0&&v.length===0&&a!==null;if(h){var _=a.parentNode;Z(_),_.append(a),u.clear(),T(t,e[0].prev,e[i-1].next)}q(v,()=>{for(var d=0;d<i;d++){var n=e[d];h||(u.delete(n.k),T(t,n.prev,n.next)),z(n.e,!h)}})}function ce(t,e,a,u,v,i=null){var s=t,h={flags:e,items:new Map,first:null};{var _=t;s=y?b($(_)):_.appendChild(U())}y&&G();var d=null,n=!1;X(()=>{var c=a(),l=J(c)?c:c==null?[]:L(c),r=l.length;if(n&&r===0)return;n=r===0;let p=!1;if(y){var A=s.data===K;A!==(r===0)&&(s=M(),b(s),w(!1),p=!0)}if(y){for(var g=null,f,o=0;o<r;o++){if(I.nodeType===8&&I.data===j){s=I,p=!0,w(!1);break}var m=l[o],x=u(m,o);f=Y(I,h,g,null,m,x,o,v,e),h.items.set(x,f),g=f}r>0&&b(M())}if(!y){var E=ee;ie(l,h,s,v,e,(E.f&C)!==0,u)}i!==null&&(r===0?d?O(d):d=V(()=>i(s)):d!==null&&P(d,()=>{d=null})),p&&w(!0),a()}),y&&(s=I)}function ie(t,e,a,u,v,i,s){var h=t.length,_=e.items,d=e.first,n=d,c,l=null,r=[],p=[],A,g,f,o;for(o=0;o<h;o+=1){if(A=t[o],g=s(A,o),f=_.get(g),f===void 0){var m=n?n.e.nodes_start:a;l=Y(m,e,l,l===null?e.first:l.next,A,g,o,u,v),_.set(g,l),r=[],p=[],n=l.next;continue}if(se(f,A,o),f.e.f&C&&O(f.e),f!==n){if(c!==void 0&&c.has(f)){if(r.length<p.length){var x=p[0],E;l=x.prev;var H=r[0],N=r[r.length-1];for(E=0;E<r.length;E+=1)S(r[E],x,a);for(E=0;E<p.length;E+=1)c.delete(p[E]);T(e,H.prev,N.next),T(e,l,H),T(e,N,x),n=x,l=N,o-=1,r=[],p=[]}else c.delete(f),S(f,n,a),T(e,f.prev,f.next),T(e,f,l===null?e.first:l.next),T(e,l,f),l=f;continue}for(r=[],p=[];n!==null&&n.k!==g;)(i||!(n.e.f&C))&&(c??(c=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;f=n}r.push(f),l=f,n=f.next}if(n!==null||c!==void 0){for(var R=c===void 0?[]:L(c);n!==null;)(i||!(n.e.f&C))&&R.push(n),n=n.next;var B=R.length;if(B>0){var F=h===0?a:null;fe(e,R,F,_)}}k.first=e.first&&e.first.e,k.last=l&&l.e}function se(t,e,a,u){Q(t.v,e),t.i=a}function Y(t,e,a,u,v,i,s,h,_){var d=(_&re)!==0,n=(_&le)===0,c=d?n?ae(v):D(v):v,l=_&ne?D(s):s,r={i:l,v:c,k:i,a:null,e:null,prev:a,next:u};try{return r.e=V(()=>h(t,c,l),y),r.e.prev=a&&a.e,r.e.next=u&&u.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),u!==null&&(u.prev=r,u.e.prev=r.e),r}finally{}}function S(t,e,a){for(var u=t.next?t.next.e.nodes_start:a,v=e?e.e.nodes_start:a,i=t.e.nodes_start;i!==u;){var s=te(i);v.before(i),i=s}}function T(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function de(t,e){let a;return function(...v){const i=()=>{a=null,t(...v)};clearTimeout(a),a=setTimeout(i,e)}}export{de as d,ce as e,ve as i};
