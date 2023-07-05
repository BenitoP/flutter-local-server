import{s as W,_ as h,a as T,u as B,b as D,j as w,c as P,d as z,g as R,e as c,f as r,S as f,h as j,i as $,L as C,T as k,B as v,C as F}from"./index-a642a9a2.js";import{r as p,u as E,m as H}from"./react-b658942b.js";import{A,T as L}from"./TextField-498a817d.js";import"./firebase-9839ef55.js";const N=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],O=t=>{const{absolute:e,children:i,classes:o,flexItem:n,light:a,orientation:l,textAlign:s,variant:g}=t;return z({root:["root",e&&"absolute",g,a&&"light",l==="vertical"&&"vertical",n&&"flexItem",i&&"withChildren",i&&l==="vertical"&&"withChildrenVertical",s==="right"&&l!=="vertical"&&"textAlignRight",s==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},R,o)},V=W("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,i.orientation==="vertical"&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&i.orientation==="vertical"&&e.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&e.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>h({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:T(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>h({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>h({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:e})=>h({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>h({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),U=W("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,i.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>h({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),_=p.forwardRef(function(e,i){const o=B({props:e,name:"MuiDivider"}),{absolute:n=!1,children:a,className:l,component:s=a?"div":"hr",flexItem:g=!1,light:m=!1,orientation:u="horizontal",role:d=s!=="hr"?"separator":void 0,textAlign:I="center",variant:S="fullWidth"}=o,M=D(o,N),x=h({},o,{absolute:n,component:s,flexItem:g,light:m,orientation:u,role:d,textAlign:I,variant:S}),y=O(x);return w.jsx(V,h({as:s,className:P(y.root,l),role:d,ref:i,ownerState:x},M,{children:a?w.jsx(U,{className:y.wrapper,ownerState:x,children:a}):null}))}),G=_;function b(t){const{variant:e,...i}=t;return e==="apple.com"?c(f,{role:"img",viewBox:"0 0 24 24",...i,children:[r("title",{children:"Apple"}),r("path",{fill:"#000",d:"M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"})]}):e==="google.com"?c(f,{role:"img",viewBox:"0 0 48 48",...i,children:[r("title",{children:"Google"}),c("g",{children:[r("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),r("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),r("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),r("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),r("path",{fill:"none",d:"M0 0h48v48H0z"})]})]}):e==="facebook.com"?c(f,{role:"img",viewBox:"0 0 24 24",...i,children:[r("title",{children:"Facebook"}),r("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})]}):c(f,{role:"img",viewBox:"0 0 32 32",...i,children:[r("title",{children:"Anonymous"}),r("circle",{fill:"none",stroke:"#999",cx:"16",cy:"16",r:"14",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),r("circle",{fill:"none",stroke:"#999",cx:"16",cy:"13",r:"5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),r("path",{fill:"none",stroke:"#999",d:"M5.4 25.1c1.8-4.1 5.8-7 10.6-7s8.9 2.9 10.6 7",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})]})}function q(t){const[e,i]=p.useState(!1);return[p.useCallback(async o=>{o.preventDefault();try{throw i(!0),console.log(t.email),await new Promise(n=>setTimeout(n,1e3)),new Error("Not implemented")}finally{i(!1)}},[t.email]),e]}function Z(t){return p.useState({mode:t.mode,email:"",code:"",saml:!1,otpSent:void 0,error:void 0})}function Y(t){return p.useCallback(function(e){const{name:i,value:o}=e.target;t(n=>n[i]===o?n:{...n,[i]:o})},[t])}function J(t){return p.useCallback(e=>{e.preventDefault(),t(i=>({...i,saml:!i.saml,otpSent:!1,code:""}))},[t])}function K(t){const e=E();return p.useCallback(async function(i){try{const o=i.currentTarget.dataset.method;(await j({method:o})).user&&(t(a=>a.error?{...a,error:null}:a),e("/"))}catch(o){const n=(o==null?void 0:o.message)??"Login failed.";t(a=>({...a,error:n}))}},[e,t])}function Q(t){const{sx:e,...i}=t;return c(k,{sx:{color:"text.secondary","& span":{opacity:.6},"& a":{fontWeight:500,opacity:.7},"& a:hover":{opacity:1},...e},variant:"body2",...i,children:[c("span",{children:["By clicking Continue above, your acknowledge that your have read and understood, and agree to ",$.app.name,"'s"]})," ",r(C,{color:"inherit",href:"/terms",children:"Terms & Conditions"}),r("span",{children:" and "}),r(C,{color:"inherit",href:"/privacy",children:"Privacy Policy"}),r("span",{children:"."})]})}function re(t){const[e,i]=Z(t),o=Y(i),n=K(i),[a,l]=q(e),s=J(i),{pathname:g,search:m}=H(),u=t.mode==="signup";return c(F,{maxWidth:"xs",sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem",flexGrow:.8},children:[r(k,{sx:{mb:2,fontWeight:800,order:-3},variant:"h1",align:"center",children:u?"Sign Up":"Login"}),e.error&&r(A,{sx:{mb:2,order:-2},severity:"error",children:e.error}),e.otpSent&&r(A,{sx:{mb:2},severity:"success",children:"Please enter the One Time Password (OTP) that has been sent to your email address."}),r("form",{id:"login-form",onSubmit:a,children:e.otpSent?r(L,{name:"code",variant:"outlined",label:"OTP code",placeholder:"Enter OTP code...",InputLabelProps:{shrink:!0},InputProps:{sx:{fontWeight:700}},onChange:o,disabled:l,autoComplete:"off",autoFocus:!0,fullWidth:!0,required:!0},"code"):r(L,{name:"email",type:"email",variant:"outlined",label:"Work email",placeholder:"Enter your email address...",InputLabelProps:{shrink:!0},onChange:o,disabled:l,fullWidth:!0,required:!0},"email")}),r(v,{color:"inherit",form:"login-form",type:"submit",variant:"outlined",size:"large",children:e.otpSent?"Sign In":`Continue with ${e.saml?"SAML":"Email"}`,disabled:l,fullWidth:!0}),c(k,{sx:{color:"text.secondary"},variant:"body2",align:"center",children:["You can also"," ",c(C,{sx:{":hover":{color:"text.primary"}},color:"inherit",href:`${g}${m}`,onClick:s,children:["continue with ",e.saml?"email":"SAML SSO"]})]}),r(G,{sx:{color:"divider",order:u?void 0:-1},children:"OR"}),r(v,{sx:{backgroundColor:d=>d.palette.mode==="light"?"white":void 0,order:u?void 0:-2},color:"inherit",type:"submit",variant:"outlined",size:"large",children:"Continue with Google",startIcon:r(b,{variant:"google.com"}),onClick:n,"data-method":"google.com",fullWidth:!0}),r(v,{sx:{backgroundColor:d=>d.palette.mode==="light"?"white":void 0,order:u?void 0:-2},color:"inherit",type:"submit",variant:"outlined",size:"large",children:"Continue with Apple",startIcon:r(b,{variant:"apple.com"}),onClick:n,"data-method":"apple.com",fullWidth:!0}),r(v,{sx:{backgroundColor:d=>d.palette.mode==="light"?"white":void 0,order:u?void 0:-2},color:"inherit",type:"submit",variant:"outlined",size:"large",children:"Continue as anonymous",startIcon:r(b,{color:"inherit",variant:"anonymous"}),onClick:n,"data-method":"anonymous",fullWidth:!0}),r(Q,{sx:{mt:4}})]})}export{re as default};
