import{d as c,e as i,f as d,g as p,j as u,P as m}from"./index-bc6e35e4.js";import{w as l}from"./withOperations.component-fd3e39c1.js";import{l as y,d as h}from"./LoggerService-c6aefb93.js";import{s as T}from"./bt.service-e51c3a6c.js";import"./export-5fac481c.js";import"./InputText.component-c228375d.js";import"./logger.utils-ababba19.js";const f={transactionSale:{label:"gateway.transaction.sale()",type:"server",data:{parameters:{paymentMethodToken:"4srmdjtc",merchantAccountId:"odesai_USD",amount:"100.00",transactionSource:"unscheduled",options:{submitForSettlement:"true"}}}}},a=e=>{const r=c(),s=i(),n=d(),o=p();return u("button",{className:"btn btn-outline-success",onClick:async()=>{r();try{const t=await T("transaction","sale",[],e.operations.transactionSale.data.parameters);y("MerchantInitiated: createTransaction",t),n("MerchantInitiated",t)}catch(t){o(),h("Transaction: createTransaction",t)}s()},children:"Create Transaction"})};a.propTypes={operations:m.object};const B=l(a,f);export{B as default};
//# sourceMappingURL=MerchantInitiated-9fdf8e4a.js.map
