import{d as c,e as i,f as d,g as p,j as u,P as m}from"./main-db23e68b.js";import{w as l}from"./withSDKOperations-1a9628a9.js";import{l as y,d as h}from"./LoggerService-5538c8b6.js";import{s as T}from"./BraintreeInterface-f8af6eae.js";import"./InputText.component-2c01f2f0.js";import"./_commonjs-dynamic-modules-302442b1.js";const f={transactionSale:{label:"gateway.transaction.sale()",type:"server",data:{parameters:{paymentMethodToken:"4srmdjtc",merchantAccountId:"odesai_USD",amount:"100.00",transactionSource:"unscheduled",options:{submitForSettlement:"true"}}}}},a=e=>{const r=c(),s=i(),n=d(),o=p();return u("button",{className:"btn btn-outline-success",onClick:async()=>{r();try{const t=await T("transaction","sale",[],e.operations.transactionSale.data.parameters);y("MerchantInitiated: createTransaction",t),n("MerchantInitiated",t)}catch(t){o(),h("Transaction: createTransaction",t)}s()},children:"Create Transaction"})};a.propTypes={operations:m.object};const w=l(a,f);export{w as default};