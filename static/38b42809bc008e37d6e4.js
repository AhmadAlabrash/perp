"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[9230],{43680:(e,t,a)=>{a.d(t,{n:()=>d,k:()=>o});var n=a(18868),s=a(57202),r=a(30389),l=a(52983);const i=l.forwardRef((({className:e,...t},a)=>l.createElement(s.fC,{ref:a,className:(0,n.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-border-line ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-background-bg1 data-[state=checked]:border-interactive-primary data-[state=checked]:bg-interactive-primary data-[state=checked]:text-t-white",e),...t},l.createElement(s.z$,{className:(0,n.cn)("flex items-center justify-center text-current")},l.createElement(r.Z,{className:"h-4 w-4"})))));i.displayName=s.fC.displayName;var c=a(70143);const o=({className:e,getI18n:t,checked:a,onCheckedChange:s})=>l.createElement("div",{className:(0,n.cn)("flex items-center",e)},l.createElement(i,{id:"sharePNL",checked:a,onCheckedChange:s}),l.createElement("label",{htmlFor:"sharePNL",className:"text-t-primary text-body2 ml-[8px]"},t("share-pnl-amount","Share PNL amount"))),d=({className:e,getI18n:t,copy:a,download:s})=>l.createElement("div",{className:(0,n.cn)("flex gap-x-[15px]",e)},l.createElement(c.z,{className:"flex-1 text-subtitle2",variant:"secondary",onClick:a},t("share-copy-button","Copy Link")),l.createElement(c.z,{className:"flex-1 text-subtitle2",onClick:s},t("share-download-button","Download")))},32291:(e,t,a)=>{a.d(t,{V:()=>o,t:()=>c});var n=a(64999),s=a(12466),r=a(56231),l=a(52983),i=a(43680);const c=({children:e,onClose:t,overlay:a=!1})=>l.createElement(n.Vq,{open:!0},l.createElement(n.PK,null,a&&l.createElement(n.t9,null),l.createElement(n.tX,{className:"w-full sm:w-[600px] sm:min-w-[600px] p-[24px] sm:min-h-[512px]",onPointerDownOutside:t},e))),o=({children:e,hash:t,onClose:a,getI18n:c,checked:o,onCheckedChange:d,copy:m,download:h})=>l.createElement(n.Vq,{open:!!t},l.createElement(n.PK,null,l.createElement(n.tX,{className:"p-0 rounded-t-[10px] !z-alertDialog overflow-hidden top-[40%]",onPointerDownOutside:a,style:{width:"calc(100% - 32px)"}},e),l.createElement(s.ue,{side:"bottom",className:"w-full border-none p-4 pb-6 pt-0 rounded-t-[10px] bg-interactive-interactiveBg",onPointerDownOutside:a},l.createElement("div",{className:"flex items-center justify-center h-[50px]"},l.createElement("div",{className:"text-subtitle1 text-t-primary font-[500]"},c("share-content-title","Share History")),l.createElement(r.E,{width:"20px",height:"20px",fontSize:"20px",className:"text-t-third cursor-pointer absolute right-4",onClick:a})),l.createElement(i.k,{className:"pt-[20px] pb-[32px]",getI18n:c,checked:o,onCheckedChange:d}),l.createElement(i.n,{className:"mb-[24px]",getI18n:c,copy:m,download:h}))))},11852:(e,t,a)=>{a.d(t,{L:()=>f});var n=a(50650),s=a(22179),r=a(34221),l=a(24121),i=a(42623),c=a(7428),o=a(52983),d=a(43408);const m={LONG:"text-t-buy",SHORT:"text-t-sell"},h={finite:"text-t-primary",buy:"text-t-buy",sell:"text-t-sell"},p={dark:"bg-background-bg1",light:"bg-[#F6F7FF]"},u="yyyy-MM-dd hh:mm",x="-",f=({data:e})=>{const{hash:t="",locale:a="en",symbol:f,tokenInSymbol:g,closeTime:b,side:v,leverage:y,markPrice:N,entryPrice:E,closePrice:w,PNL:C,ROI:k,isLightTheme:M,staticResource:$,SITE_HOST:P,userAddress:L,getI18n:R,sharePNL:S=!1,snapshotRef:T}=e,{selectedNetworkId:z}=(0,r.o6)(),I=(0,l.xx)({chainId:z}),H=(0,i.pT)(I),{isMobile:O}=(0,n.F)(),j=f===x,U=(0,o.useMemo)((()=>!Number.isNaN(Number(b))&&Number(b)>0),[b]),D=(0,o.useMemo)((()=>{switch(v){case"LONG":return R("orderForm-long","Long");case"SHORT":return R("orderForm-short","Short");default:return"-"}}),[v,R]),F=C.replace(/,/g,""),V=Number.isNaN(Number(F))?"finite":Number(F)>0?"buy":"sell",_=(0,o.useMemo)((()=>(0,d.O)({network:null==H?void 0:H.apiNetwork,siteHost:P,locale:a,hash:t,sharePNL:S})),[P,null==H?void 0:H.apiNetwork,t,a,S]),q=M?"light":"dark",Z=O?"mobile":"pc",A=(0,o.useMemo)((()=>[Z,q,V].join("_")),[Z,q,V]);return o.createElement("div",{className:`relative w-[100%] sm:w-[552px] p-[24px] sm:p-[16px_24px] overflow-hidden rounded-[4px] ${p[q]}`,ref:T},o.createElement("img",{className:"absolute right-0 bottom-0 w-[100%] z-[1]",src:`${$}/${A}.png`,width:"100%",height:"auto"}),o.createElement("div",{className:"relative w-[100%] h-[100%] z-[2]"},o.createElement("div",{className:"text-headline3 text-t-primary"},f),o.createElement("div",{className:`text-subtitle1 ${m[v]} mb-[24px] sm:mb-[8px]`},D),o.createElement("div",{className:"text-caption1 text-t-secondary mb-[8px]"},j?x:U?R("share-realized-profit","Realized Profit"):R("share-unrealized-profit","Unrealized Profit")),o.createElement("div",{className:"flex items-end mb-[8px]"},S?o.createElement(o.Fragment,null,o.createElement("div",{className:`font-medium text-[40px] leading-[40px] mr-[4px] ${h[V]}`},C),o.createElement("div",{className:`text-headline3 mr-[4px] ${h[V]}`}," ",g),o.createElement("div",{className:`text-headline3 ${h[V]}`},`${k}`)):o.createElement(o.Fragment,null,o.createElement("div",{className:`font-medium text-[40px] leading-[40px] mr-[4px] ${h[V]}`},`${k}`))),o.createElement("div",{className:"flex items-center justify-start mb-[8px]"},o.createElement("div",{className:"text-caption text-t-secondary min-w-[100px]"},j?x:R("userinfo-dialog-detail-entryPrice","Entry Price")),o.createElement("div",{className:"text-caption text-t-link"},E)),o.createElement("div",{className:"flex items-center justify-start mb-[8px]"},o.createElement("div",{className:"text-caption text-t-secondary min-w-[100px]"},j?x:U?R("userinfo-dialog-detail-closePrice","Close Price"):R("userinfo-dialog-tpsl-markPrice","Mark Price")),o.createElement("div",{className:"text-caption text-t-link"},U?w:N)),o.createElement("div",{className:"flex items-center justify-start mb-[40px] sm:mb-[26px]"},o.createElement("div",{className:"text-caption text-t-secondary min-w-[100px]"},j?x:R("userinfo-dialog-detail-leverage","Leverage")),o.createElement("div",{className:"text-caption text-t-link"},j?x:y)),o.createElement("div",{className:"text-caption text-t-third mb-[42px] sm:mb-[26px]"},o.createElement("span",null,U?R("share-trade-time","Trade Time"):R("share-current-time","Share Time")),o.createElement("span",null,": "),o.createElement("span",null,U?(0,s.v)(new Date(b),u):(0,s.v)(new Date,u))),o.createElement("div",{className:"flex items-center justify-start"},o.createElement("div",{className:"w-[64px] h-[64px] p-[5px] bg-t-white shrink-0 mr-[12px]"},o.createElement(c.ZP,{renderAs:"svg",level:"M",size:54,value:_})),o.createElement("div",{className:"flex flex-col items-start justify-between"},o.createElement("div",{className:"text-caption text-t-third"},R("share-user-address","Address")),o.createElement("div",{className:"text-headline3 text-t-primary "},L?null==L?void 0:L.replace(/(\w{6})(.*)(\w{4})/g,"$1......$3"):"-")))))}},43408:(e,t,a)=>{a.d(t,{O:()=>n,e:()=>s});const n=({network:e="bnb",siteHost:t,locale:a="en",hash:n,sharePNL:s=!1})=>`${t}/${a||"en"}/share/${n.split("-")[0]}?network=${e}${s?"&pnl=1":""}`,s=({staticHost:e})=>`${e}/static/images/futures/assets/apx/share-position-history`},36265:(e,t,a)=>{a.d(t,{$:()=>l});var n=a(52771),s=a(27971),r=a(52983);const l=({title:e,isLight:t})=>(0,r.useMemo)((()=>r.createElement("div",{className:"flex flex-col items-center justify-center h-full"},t?r.createElement(n.E,{width:"60px",height:"60px",fontSize:"60px"}):r.createElement(s.e,{width:"60px",height:"60px",fontSize:"60px"}),r.createElement("div",{className:"text-body2 text-t-third"},e))),[e,t])},54675:(e,t,a)=>{a.d(t,{v:()=>n});const n=e=>new Promise(((t,a)=>{if("undefined"!=typeof navigator&&void 0!==navigator.clipboard&&"undefined"!==navigator.permissions){const n="text/plain",s=new Blob([e],{type:n}),r=[new ClipboardItem({[n]:s})];navigator.permissions.query({name:"clipboard-write"}).then((e=>{"granted"===e.state||"prompt"===e.state?navigator.clipboard.write(r).then(t,a).catch(a):a(new Error("Permission not granted!"))}))}else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const n=document.createElement("textarea");n.textContent=e,n.style.position="fixed",n.style.width="2em",n.style.height="2em",n.style.padding="0",n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),document.body.removeChild(n),t()}catch(e){document.body.removeChild(n),a(e)}}else a(new Error("None of copying methods are supported by this browser!"))}))},22179:(e,t,a)=>{function n(e,t="yyyy-MM-dd hh:mm",a=!1){const n=a?{"M+":e.getUTCMonth()+1,"d+":e.getUTCDate(),"h+":e.getUTCHours(),"m+":e.getUTCMinutes(),"s+":e.getUTCSeconds(),"q+":Math.floor((e.getUTCMonth()+3)/3),S:e.getUTCMilliseconds()}:{"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};let s=t;return/(y+)/.test(t)&&(s=t.replace(RegExp.$1,`${e.getFullYear()}`.substr(4-RegExp.$1.length))),Object.keys(n).forEach((e=>{new RegExp(`(${e})`).test(s)&&(s=s.replace(RegExp.$1,1===RegExp.$1.length?n[e]:`00${n[e]}`.substr(`${n[e]}`.length)))})),s}a.d(t,{v:()=>n})},56420:(e,t,a)=>{a.d(t,{L:()=>o,Q:()=>c});var n=a(56828),s=a.n(n),r=a(59712);const l=(e,t,a,n,r)=>{setTimeout((()=>{s()(e,Object.assign({scale:2,allowTaint:!0,useCORS:!0,width:e.offsetWidth,height:e.offsetHeight,backgroundColor:null,y:0,scrollY:0},t)).then((e=>{if(r&&r(e),!1!==r)try{const t=e.toDataURL("image/jpeg");a&&a(t)}catch(e){n&&n(e)}})).catch((e=>{n&&n(e)}))}),10)},i=(e,t,a,n,s)=>{const i=(null==e?void 0:e.querySelectorAll("img"))||[];let c=0;if(i[0]){const o=setInterval((()=>{clearInterval(o),i.length!==c&&n&&n("超时")}),1e4);[...Array.from(i)].forEach((d=>{((e,t)=>{const a=e.substring(0,50);if(a.includes("blob:"))return t(!1);if(!a)return t(!1);let n=document.createElement("canvas");const s=n.getContext("2d"),l=new Image;l.crossOrigin="Anonymous",l.src=`${e}?${Date.now()}`,l.onload=()=>{if(n){n.height=l.height,n.width=l.width,null==s||s.drawImage(l,0,0);try{n.toBlob((e=>{e&&t(URL.createObjectURL(e))}))}catch(e){t(l.src),r.log("转换失败，使用原图",e)}n=null}}})(d.src,(r=>{!1!==r&&(d.src=r),c++,i.length===c&&(clearInterval(o),l(e,t,a,n,s))}))}))}else l(e,t,a,n,s)};function c({el:e=null,options:t,success:a,error:n,handle:s}){e?i(e,t,a,n,s):r.warn("domToImage: 未找到该节点，无法执行后续的截图操作")}function o(e,t){const a=document.createElement("a");a.download=t,a.href=e,a.click()}},45648:(e,t,a)=>{a.d(t,{v:()=>n});class n{constructor(){this.cbs={},this.on=(e,t)=>(this.cbs[e]||(this.cbs[e]=[]),this.cbs[e].push(t),()=>this.off(e,t)),this.off=(e,t)=>{this.cbs[e]||(this.cbs[e]=[]),this.cbs[e]=this.cbs[e].filter((e=>e!==t))},this.emit=(e,t)=>{this.cbs[e]||(this.cbs[e]=[]),this.cbs[e].forEach((e=>"function"==typeof e&&e(t)))}}}},52399:(e,t,a)=>{a.d(t,{SP:()=>c,dr:()=>i,mQ:()=>l,nU:()=>o});var n=a(57538),s=a(52983),r=a(18868);const l=n.fC,i=s.forwardRef((({className:e,...t},a)=>s.createElement(n.aV,{ref:a,className:(0,r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t})));i.displayName=n.aV.displayName;const c=s.forwardRef((({className:e,...t},a)=>s.createElement(n.xz,{ref:a,className:(0,r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t})));c.displayName=n.xz.displayName;const o=s.forwardRef((({className:e,...t},a)=>s.createElement(n.VY,{ref:a,className:(0,r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t})));o.displayName=n.VY.displayName},33266:(e,t,a)=>{a.d(t,{M:()=>s});var n=a(52983);const s=e=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",fill:"currentColor"}))},99308:(e,t,a)=>{a.d(t,{J:()=>s});var n=a(52983);const s=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.33321 1.99988C2.59683 1.99988 1.99988 2.59683 1.99988 3.33321V12.6665C1.99988 13.4029 2.59683 13.9999 3.33321 13.9999H7.00007C7.36826 13.9999 7.66674 13.7014 7.66674 13.3332C7.66674 12.965 7.36826 12.6665 7.00007 12.6665H3.33321V3.33321H11.9999V6.66667C11.9999 7.03486 12.2984 7.33333 12.6665 7.33333C13.0347 7.33333 13.3332 7.03486 13.3332 6.66667V3.33321C13.3332 2.59683 12.7363 1.99988 11.9999 1.99988H3.33321ZM5.33321 5C4.96502 5 4.66654 5.29848 4.66654 5.66667C4.66654 6.03486 4.96502 6.33333 5.33321 6.33333L9.99988 6.33333C10.3681 6.33333 10.6665 6.03486 10.6665 5.66667C10.6665 5.29848 10.3681 5 9.99988 5L5.33321 5ZM4.66654 8.33333C4.66654 7.96514 4.96502 7.66667 5.33321 7.66667H6.99988C7.36807 7.66667 7.66654 7.96514 7.66654 8.33333C7.66654 8.70152 7.36807 9 6.99988 9H5.33321C4.96502 9 4.66654 8.70152 4.66654 8.33333ZM13.0715 8.94083C14.0415 9.90633 14.1651 11.3953 13.4423 12.4942L14.4816 13.5287C14.7425 13.7884 14.7425 14.2096 14.4816 14.4693C14.2206 14.7291 13.7975 14.7291 13.5366 14.4693L12.4687 13.4064C11.3819 14.0239 9.97348 13.871 9.04592 12.9478C7.93429 11.8413 7.93429 10.0473 9.04592 8.94083C10.1576 7.83434 11.9599 7.83434 13.0715 8.94083ZM12.1265 12.0071C12.7162 11.4201 12.7162 10.4684 12.1265 9.88145C11.5368 9.29445 10.5806 9.29445 9.99092 9.88145C9.40119 10.4684 9.40119 11.4201 9.99092 12.0071C10.5806 12.5941 11.5368 12.5941 12.1265 12.0071Z",fill:"currentColor"}))}}]);