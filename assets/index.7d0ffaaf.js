var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&n(e,o,r[o]);if(a)for(var o of a(r))l.call(r,o)&&n(e,o,r[o]);return e};import{r as o,a as c,L as s,N as m,H as i,S as u,R as d,b as p}from"./vendor.057f0b22.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),n(s)},onload(){a(self[t].moduleMap[o]),n(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/react-picsum-demo/assets/");function h(){const e={width:window.outerWidth,height:window.outerHeight};return o.createElement("div",{className:""},e.width," ",e.height)}const f=c.create({baseURL:"https://picsum.photos"}),b=e=>((e,t)=>f.get(e,{params:t}).then((e=>[e,null])).catch((e=>[null,e])))("/v2/list",e),E=e=>{const t=(({id:e,width:t=300,height:a=300})=>`https://picsum.photos/id/${e}/${t}/${a}`)({id:e.id,width:300,height:300});return o.createElement("a",{href:e.url,target:"_blank",className:"w-full h-80 flex flex-col bg-white rounded-md shadow overflow-hidden hover:shadow-lg cursor-pointer transition-shadow"},o.createElement("div",{className:"w-full h-64 bg-gray-200"},o.createElement("img",{className:"object-cover w-full h-full",src:t,alt:e.url})),o.createElement("div",{className:"flex-1 box-border p-2 text-sm text-gray-700"},o.createElement("p",null,"图片ID：",e.id),o.createElement("p",null,"作者：",e.author)))};function v(){const[e,t]=o.useState([]),[a,l]=o.useState(1),[n,c]=o.useState(!1);o.useEffect((()=>{!n&&s()}),[a]);const s=async()=>{const[l,n]=await b({page:a,limit:12});if(l){const a=l.data;a.length<12&&c(!0),t([...e,...a])}};return o.createElement("div",{className:"flex flex-col items-center"},o.createElement("div",{className:"w-full grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 mb-5"},e.map((e=>o.createElement(E,r({key:e.id},e))))),o.createElement("button",{className:"bg-blue-500 px-6 py-2 text-white rounded-sm mx-auto hover:bg-blue-700",onClick:()=>{!n&&l(a+1)}},"加载更多"))}function w(){return o.createElement("div",null,"Hello Random")}function g(){return o.createElement("div",{className:"navbar"},o.createElement("div",{className:"navbar-wrapper"},o.createElement(s,{to:"/",className:"navbar__logo"},"Picsum Demo"),o.createElement("div",{className:"navbar__links"},[{to:"/",title:"首页"},{to:"/list",title:"图片列表"},{to:"/random",title:"随机图片"}].map((e=>o.createElement(y,r({key:e.to},e)))))))}const y=e=>o.createElement(m,{className:"navbar__link",activeClassName:"navbar__link--active",exact:!0,to:e.to},e.title);function x(){return o.createElement(i,null,o.createElement(g,null),o.createElement("div",{className:"wrapper"},o.createElement(u,null,N())))}const N=()=>{const e=[{path:"/",component:h,exact:!0},{path:"/list",component:v},{path:"/random",component:w}];return o.createElement(o.Fragment,null,e.map((e=>o.createElement(d,{key:e.path,path:e.path,exact:e.exact},o.createElement(e.component,null)))))};p.render(o.createElement(o.StrictMode,null,o.createElement(x,null)),document.getElementById("root"));
