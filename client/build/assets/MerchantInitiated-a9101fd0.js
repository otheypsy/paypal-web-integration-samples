import{d as c,e as i,h as d,f as p,j as u,P as m}from"./index-0012b4da.js";import{w as l}from"./withOperations.component-67facef3.js";import{l as h,d as y}from"./LoggerService-c6aefb93.js";import{s as T}from"./bt.service-81d9e687.js";import"./InputText.component-59d8abb9.js";import"./logger.utils-ababba19.js";import"./http.utils-58ed8dbd.js";const f={transactionSale:{label:"gateway.transaction.sale()",type:"server",data:{parameters:{paymentMethodToken:"4srmdjtc",merchantAccountId:"odesai_USD",amount:"100.00",transactionSource:"unscheduled",options:{submitForSettlement:"true"}}}}},a=e=>{const r=c(),s=i(),n=d(),o=p();return u("button",{className:"btn btn-outline-success",onClick:async()=>{r();try{const t=await T("transaction","sale",[],e.operations.transactionSale.data.parameters);h("MerchantInitiated: createTransaction",t),n("MerchantInitiated",t)}catch(t){o(),y("Transaction: createTransaction",t)}s()},children:"Create Transaction"})};a.propTypes={operations:m.object};const g=l(a,f);export{g as default};
//# sourceMappingURL=MerchantInitiated-a9101fd0.js.map
