"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[4647],{84647:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var n=s(97458),l=s(30033),i=s(56234),a=s(52983),c=s(90974),r=s(58921),u=s(38097),o=s(97413);const d=a.lazy((()=>Promise.all([s.e(9930),s.e(9996),s.e(1167),s.e(9230),s.e(5115),s.e(376)]).then(s.bind(s,60376)))),h=a.lazy((()=>Promise.all([s.e(6822),s.e(1167),s.e(824)]).then(s.bind(s,20824)))),b=a.lazy((()=>Promise.all([s.e(9930),s.e(9230),s.e(2932)]).then(s.bind(s,52932)))),x={height:"calc(100% - 40px)"},j=({active:e,title:t})=>(0,n.jsx)("div",Object.assign({className:"text-subtitle1 py-2 pr-6 pl-0 "+(e?"text-t-link hover:text-t-link":"text-t-third hover:text-t-secondary")},{children:t})),g=({active:e})=>{const t=(0,o.d)(),{getI18n:s}=(0,c.V6)();return(0,a.useMemo)((()=>(0,n.jsx)(j,{active:e,title:`${s("userinfo-positions-module-title",{defaultValue:"Positions"})} (${t})`})),[e,s,t])},v=({active:e})=>{const t=(0,u.yi)(),{getI18n:s}=(0,c.V6)();return(0,n.jsx)(j,{active:e,title:`${s("userinfo-orders-module-title",{defaultValue:"Orders"})} (${t.length})`})},f=({active:e})=>{const{getI18n:t}=(0,c.V6)();return(0,n.jsx)(j,{active:e,title:t("userinfo-history-module-title",{defaultValue:"History"})})},p=()=>{(0,o.OB)(),(0,u.M2)();const[e,t]=(0,a.useState)(r.T.positions),s=(0,a.useCallback)((e=>{t(e)}),[]);return(0,n.jsx)("div",Object.assign({className:"h-full bg-background-bg1 px-4 rounded-lg"},{children:(0,n.jsxs)(l.Z,Object.assign({lazy:!0,defaultActiveKey:e,onChange:s,height:"100%"},{children:[(0,n.jsx)(i.Z,Object.assign({tab:e=>(0,n.jsx)(g,{active:e}),tabKey:r.T.positions,sx:x,unmountOnBlur:!0},{children:(0,n.jsx)(a.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(d,{})}))})),(0,n.jsx)(i.Z,Object.assign({tab:e=>(0,n.jsx)(v,{active:e}),tabKey:r.T.orders,sx:x,unmountOnBlur:!0},{children:(0,n.jsx)(a.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(h,{})}))})),(0,n.jsx)(i.Z,Object.assign({tab:e=>(0,n.jsx)(f,{active:e}),tabKey:r.T.history,sx:x,unmountOnBlur:!0},{children:(0,n.jsx)(a.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(b,{})}))}))]}))}))}}}]);