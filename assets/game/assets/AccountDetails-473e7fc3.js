import{e as n,f as r,l as m,B as c,C as p,m as f,n as h,T as y}from"./index-a642a9a2.js";import{u as b,d as g}from"./firebase-9839ef55.js";import{r as s}from"./react-b658942b.js";import{u as x}from"./page-d41b5035.js";import{A as N,T as o}from"./TextField-498a817d.js";function w(){const[{input:a,...e},l]=C(),i=v(l),t=A(a,l);return x({title:"Account Details"}),n(p,{sx:{my:4},maxWidth:"sm",children:[r(y,{sx:{mb:4},variant:"h2",children:"Account Details"}),e.error&&r(N,{sx:{mb:3},severity:"error",children:e.error}),n(m,{component:"form",onSubmit:t,children:[r(o,{name:"displayName",label:"Display Name",value:a.displayName,helperText:" ",onChange:i,disabled:e.loading,InputLabelProps:{shrink:!0},fullWidth:!0,required:!0}),r(o,{name:"email",type:"email",label:"Email",value:a.email,helperText:" ",onChange:i,disabled:e.loading,InputLabelProps:{shrink:!0},fullWidth:!0,required:!0}),r(c,{variant:"contained",type:"submit",children:"Update Profile",disabled:e.loading})]})]})}function C(){const a=f(),[e,l]=s.useState({input:{displayName:(a==null?void 0:a.displayName)??"",email:(a==null?void 0:a.email)??""},loading:a===void 0,error:void 0});return s.useEffect(()=>{a!=null&&a.uid&&l(i=>({...i,input:{...i.input,displayName:a.displayName??"",email:a.email??""},loading:!1}))},[l,a==null?void 0:a.uid,a==null?void 0:a.email,a==null?void 0:a.displayName]),[e,l]}function v(a){return s.useCallback(e=>{const{name:l,value:i}=e.target;a(t=>({...t,input:{...t.input,[l]:i}}))},[a])}function A(a,e){const l=h(async i=>{await b(i,{displayName:a.displayName}),await g(i,a.email)},[a.displayName,a.email]);return s.useCallback(async i=>{i.preventDefault(),e(t=>({...t,loading:!0}));try{await l(),e(t=>({...t,loading:!1,error:void 0}))}catch(t){const u=(t==null?void 0:t.message)??"Failed.";e(d=>({...d,loading:!1,error:u}))}},[e,l])}export{w as default};