import{h as C,C as v,f as y,d as T,l as N,a as O,D as b,p}from"./web-DcH7Vywb.js";const h=O(),g=["title","meta"],f=[],u=["name","http-equiv","content","charset","media"].concat(["property"]),m=(r,n)=>{const e=Object.fromEntries(Object.entries(r.props).filter(([t])=>n.includes(t)).sort());return(Object.hasOwn(e,"name")||Object.hasOwn(e,"property"))&&(e.name=e.name||e.property,delete e.property),r.tag+JSON.stringify(e)};function x(){if(!b.context){const e=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(e,t=>t.parentNode.removeChild(t))}const r=new Map;function n(e){if(e.ref)return e.ref;let t=document.querySelector(`[data-sm="${e.id}"]`);return t?(t.tagName.toLowerCase()!==e.tag&&(t.parentNode&&t.parentNode.removeChild(t),t=document.createElement(e.tag)),t.removeAttribute("data-sm")):t=document.createElement(e.tag),t}return{addTag(e){if(g.indexOf(e.tag)!==-1){const d=e.tag==="title"?f:u,a=m(e,d);r.has(a)||r.set(a,[]);let o=r.get(a),l=o.length;o=[...o,e],r.set(a,o);let i=n(e);e.ref=i,p(i,e.props);let c=null;for(var t=l-1;t>=0;t--)if(o[t]!=null){c=o[t];break}return i.parentNode!=document.head&&document.head.appendChild(i),c&&c.ref&&document.head.removeChild(c.ref),l}let s=n(e);return e.ref=s,p(s,e.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(e,t){const s=e.tag==="title"?f:u,d=m(e,s);if(e.ref){const a=r.get(d);if(a){if(e.ref.parentNode){e.ref.parentNode.removeChild(e.ref);for(let o=t-1;o>=0;o--)a[o]!=null&&document.head.appendChild(a[o].ref)}a[t]=null,r.set(d,a)}else e.ref.parentNode&&e.ref.parentNode.removeChild(e.ref)}}}}const M=r=>{const n=x();return C(h.Provider,{value:n,get children(){return r.children}})},E=(r,n,e)=>(P({tag:r,props:n,setting:e,id:v(),get name(){return n.name||n.property}}),null);function P(r){const n=y(h);if(!n)throw new Error("<MetaProvider /> should be in the tree");T(()=>{const e=n.addTag(r);N(()=>n.removeTag(r,e))})}const j=r=>E("title",r,{escape:!0,close:!0}),q=r=>null;export{q as H,M,j as T};
