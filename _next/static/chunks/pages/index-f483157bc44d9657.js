(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2750)}])},2750:function(t,n,r){"use strict";r.r(n),r.d(n,{IndexPage:function(){return m},default:function(){return h}});var e=r(5893),a=r(9408),o=function(){var t=(0,a.b3)();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("button",{className:"p-4 text-3xl text-white border-4 border-current",onClick:t,children:"Disconnect"})})},i=r(7294);function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(l){a=!0,o=l}finally{try{e||null==c.return||c.return()}finally{if(a)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(t){var n=t.transaction,r=t.contract,o=t.tokenId,i=(0,a.BX)(n),c=(0,a.uT)(r,"tokenURI",o);return(0,e.jsxs)("div",{className:"text-2xl",children:["Minted!",i.status,(0,e.jsx)("img",{src:JSON.parse(c.split(",")[1]).image,alt:JSON.parse(c.split(",")[1]).name})]})},u=function(t){var n=t.contract,r=c((0,a.S0)(n,"mint"),2),o=r[0],u=r[1],s=u.loading,f=u.data,x=(0,a.uT)(n,"totalSupply");return f?(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)("div",{className:"my-2 text-2xl",children:"Minting..."}),children:(0,e.jsx)(l,{contract:n,tokenId:Number(x.toString())+1,transaction:f})}):(0,e.jsxs)("button",{className:"p-4 text-3xl border-4 border-current",disabled:s,onClick:function(){return o()},children:["Mint NFT #",x.toString()]})};function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(l){a=!0,o=l}finally{try{e||null==c.return||c.return()}finally{if(a)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(t){var n=t.contract,r=s((0,a.rL)(),1)[0],o=(0,a.KQ)(),c=(0,a.uT)(n,"totalSupply");return(0,i.useEffect)((function(){console.log("balance: ".concat(o)),console.log("block: ".concat(r))})),(0,e.jsxs)("div",{className:"py-3 text-white",children:[(0,e.jsx)("h1",{className:"px-3 mx-auto max-w-xl text-5xl text-center",children:"Mint one of the words from blessings from all around the world"}),(0,e.jsxs)("h1",{className:"px-3 mx-auto mt-3 text-3xl font-medium text-center ",children:[c.toString()," / 27"]}),(0,e.jsx)("div",{className:"my-5 mx-3 w-full max-w-sm sm:max-w-xl md:max-w-3xl h-9 bg-gray-300",children:(0,e.jsx)("div",{className:"h-full text-xs leading-none text-white bg-green-400",style:{width:"".concat(Number(c.toString())/27*100,"%")}})})]})},x=JSON.parse('{"Lk":"0x23eDC2088793e9D787d9EbCe3249a8e97BBb39a7"}');function d(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(){var t=(0,a.cq)(x.Lk,d(a.xG).concat(["function mint()"]));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{contract:t}),(0,e.jsx)(u,{contract:t}),(0,e.jsx)(o,{})]})},h=m}},function(t){t.O(0,[774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);