var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&r(e,o,l[o]);if(a)for(var o of a(l))n.call(l,o)&&r(e,o,l[o]);return e};import{r as o,a as c,L as s,N as m,H as i,S as u,R as d,b as p}from"./vendor.057f0b22.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),r(s)},onload(){a(self[t].moduleMap[o]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/react-picsum-demo/assets/");function f(){const e={width:window.outerWidth,height:window.outerHeight};return o.createElement("div",{className:""},e.width," ",e.height)}const h=c.create({baseURL:"https://picsum.photos"}),v=e=>((e,t)=>h.get(e,{params:t}).then((e=>[e,null])).catch((e=>[null,e])))("/v2/list",e),b=e=>{const t=(({id:e,width:t=300,height:a=300})=>`https://picsum.photos/id/${e}/${t}/${a}`)({id:e.id,width:300,height:300});return o.createElement("a",{href:e.url,target:"_blank",className:"w-full h-80 flex flex-col bg-white rounded-md shadow overflow-hidden hover:shadow-lg cursor-pointer transition-shadow"},o.createElement("div",{className:"w-full h-64 bg-gray-200"},o.createElement("img",{className:"object-cover w-full h-full",src:t,alt:e.url})),o.createElement("div",{className:"flex-1 box-border p-2 text-sm text-gray-700"},o.createElement("p",null,"图片ID：",e.id),o.createElement("p",null,"作者：",e.author)))};function E(e){var{type:r}=e,c=((e,r)=>{var l={};for(var o in e)t.call(e,o)&&r.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&a)for(var o of a(e))r.indexOf(o)<0&&n.call(e,o)&&(l[o]=e[o]);return l})(e,["type"]);const s=`btn btn--${r||"primary"}`;return o.createElement("button",l({className:s},c))}function w(){const[e,t]=o.useState([]),[a,n]=o.useState(1),[r,c]=o.useState(!1);o.useEffect((()=>{!r&&s()}),[a]);const s=async()=>{const[n,r]=await v({page:a,limit:12});if(n){const a=n.data;a.length<12&&c(!0),t([...e,...a])}};return o.createElement("div",{className:"flex flex-col items-center"},o.createElement("div",{className:"w-full grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 mb-5"},e.map((e=>o.createElement(b,l({key:e.id},e))))),o.createElement(E,{onClick:()=>{!r&&n(a+1)},type:"disabled"},"加载更多"))}function g(){return o.createElement("div",null,"Hello Random")}function y(){return o.createElement("div",{className:"navbar"},o.createElement("div",{className:"navbar-wrapper"},o.createElement(s,{to:"/",className:"navbar__logo"},"Picsum Demo"),o.createElement("div",{className:"navbar__links"},[{to:"/",title:"首页"},{to:"/list",title:"图片列表"},{to:"/random",title:"随机图片"}].map((e=>o.createElement(N,l({key:e.to},e)))))))}const N=e=>o.createElement(m,{className:"navbar__link",activeClassName:"navbar__link--active",exact:!0,to:e.to},e.title);function x(){return o.createElement(i,null,o.createElement(y,null),o.createElement("div",{className:"wrapper"},o.createElement(u,null,_())))}const _=()=>{const e=[{path:"/",component:f,exact:!0},{path:"/list",component:w},{path:"/random",component:g}];return o.createElement(o.Fragment,null,e.map((e=>o.createElement(d,{key:e.path,path:e.path,exact:e.exact},o.createElement(e.component,null)))))};p.render(o.createElement(o.StrictMode,null,o.createElement(x,null)),document.getElementById("root"));