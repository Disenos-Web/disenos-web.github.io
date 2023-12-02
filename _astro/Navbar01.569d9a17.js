import{h as c,p as w}from"./hooks.module.a845df0c.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import{k as h}from"./preact.module.f1575aff.js";function m({children:n,className:r,link:l}){if(typeof l=="string"||!l)return e(h,{children:n});const d={href:l.href};return l.nofollow&&(d.reel="nofollow"),e("a",{...d,className:r,children:n})}const f=({navigation:n,logoSrc:r})=>{const[l,d]=c(!1),[s,o]=c({isActive:!1,idx:null});return w(()=>{document.onclick=a=>{const t=a.target;t&&!t.closest(".nav-menu")&&o({isActive:!1,idx:null})}},[]),e(h,{children:[e("nav",{className:`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${l?"shadow-lg rounded-b-xl md:shadow-none":""}`,children:e("div",{className:"items-center gap-x-14 px-4 max-w-screen-xl py-3 md:py-12 mx-auto md:flex md:px-8",children:[e("div",{className:"flex items-center justify-between md:block",children:[e("img",{src:`${r}`,alt:"Logo",className:"h-10 object-cover rounded object-center"}),e("div",{className:"md:hidden",children:e("button",{className:"text-gray-500 hover:text-gray-800",onClick:()=>d(!l),children:l?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}):e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z",clipRule:"evenodd"})})})})]}),e("div",{className:`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${l?"block":"hidden"}`,children:e("ul",{className:"items-center space-y-6 md:flex md:justify-end md:space-x-6 md:space-y-0",children:n.map((a,t)=>e("li",{children:[a.isDrapdown?e("button",{className:"w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600",onClick:()=>o({idx:t,isActive:!s.isActive}),children:[a.text,s.idx==t&&s.isActive?e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e("path",{fillRule:"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",clipRule:"evenodd"})}):e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]}):e(m,{link:a,className:"block text-gray-700 hover:text-indigo-600",children:a.text}),a.isDrapdown&&a.drapDownNav?e("div",{className:`mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 bg-white transition-all ${s.idx==t&&s.isActive?"block":"hidden"}`,children:e("ul",{className:"max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3",children:a?.drapDownNav.map((i,v)=>e("li",{children:e(m,{link:i,className:"block text-gray-700 hover:text-indigo-600",children:i.text})},v))})}):""]},t))})})]})}),l?e("div",{className:"z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden",onClick:()=>d(!1)}):""]})};export{f as default};
