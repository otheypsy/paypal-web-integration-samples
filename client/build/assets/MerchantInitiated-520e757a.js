import{d as c,e as i,f as p,g as d,j as u,p as m}from"./index-dda91878.js";import{w as l}from"./withSDKOperations-c55df523.js";import{l as y,d as h}from"./LoggerService-4412138b.js";import{s as T}from"./BraintreeInterface-512e1979.js";import"./InputText.component-ae4df0b6.js";import"./client-fe790339.js";const f={transactionSale:{label:"gateway.transaction.sale()",type:"server",data:{parameters:{paymentMethodToken:"4srmdjtc",merchantAccountId:"odesai_USD",amount:"100.00",transactionSource:"unscheduled",options:{submitForSettlement:"true"}}}}},a=e=>{const r=c(),s=i(),n=p(),o=d();return u("button",{className:"btn btn-outline-success",onClick:async()=>{r();try{const t=await T("transaction","sale",[],e.operations.transactionSale.data.parameters);y("MerchantInitiated: createTransaction",t),n("MerchantInitiated",t)}catch(t){o(),h("Transaction: createTransaction",t)}s()},children:"Create Transaction"})};a.propTypes={operations:m.object};const w=l(a,f);export{w as default};