import{d as f,e as I,f as g,g as N,k as E,r as u,c as B,F as T,j as t,p as v}from"./index-dda91878.js";import{B as A,s as D}from"./BraintreeInterface-512e1979.js";import{w as O}from"./withSDKOperations-c55df523.js";import{l as n,d as c,w as x}from"./LoggerService-4412138b.js";import"./client-fe790339.js";import"./InputText.component-ae4df0b6.js";const K={paypalCheckoutCreate:{label:"braintree-web.paypalCheckout.create(options, callback)",type:"client",data:{options:{client:"CLIENT_INSTANCE_HERE"}}},loadPayPalSDK:{label:"paypalCheckoutInstance.loadPayPalSDK(options, callback)",type:"client",data:{options:{currency:"USD",intent:"capture","disable-funding":"card"}}},renderPayPalButtons:{label:"window.paypal.Buttons(config).render",type:"client",data:{config:{style:{layout:"vertical",color:"gold",shape:"rect",label:"paypal",tagline:!1}}}},createPayment:{label:"paypalCheckoutInstance.createPayment(options, callback)",type:"client",data:{options:{flow:"checkout",intent:"capture",amount:"100.00",currency:"USD",enableShippingAddress:!0,shippingAddressEditable:!0}}},tokenizePayment:{label:"paypalCheckoutInstance.tokenizePayment(tokenizeOptions, callback)",type:"client",data:{tokenizeOptions:{}}},transactionSale:{label:"gateway.transaction.sale(parameters, callback)",type:"server",data:{parameters:{amount:"100.00",merchantAccountId:"odesai_USD",paymentMethodNonce:"NONCE_HERE",options:{submitForSettlement:!0}}}}},z=["clientInstance"],P=l=>{const o=f(),r=I(),y=g(),s=N(),d=E(),i=u.useRef(),[p,C]=u.useState(void 0),[k,b]=u.useState(void 0),h=async()=>{o();try{const e=await A.create({client:d.clientInstance});n("Checkout: createPayPalInstance",e),C(e)}catch(e){s(),c("NewCustomer: createPayPalInstance",e)}r()},m=async()=>{o(),await p.loadPayPalSDK(l.operations.loadPayPalSDK.data.options),r()},w=async()=>{var e;o();try{if(!((e=window==null?void 0:window.paypal)!=null&&e.Buttons))throw Error("PayPal JS SDK not found");const a=S();i.current.innerHTML=null,await window.paypal.Buttons(a).render(i.current)}catch(a){s(),c("NewCustomer: renderPayPalButtons",a)}r()},S=()=>({...l.operations.renderPayPalButtons.data.config,fundingSource:window.paypal.FUNDING.PAYPAL,createOrder:async()=>{o();let e;try{e=await p.createPayment(l.operations.createPayment.data.options),n("PayPalCheckout: createOrder",e)}catch(a){s(),c("PayPalCheckout: createOrder",a)}return r(),e},onApprove:async e=>{o();try{n("PayPalCheckout: onApprove",e);const a=await p.tokenizePayment(e);n("PayPalCheckout: tokenizePayment",a),y("TokenizePayment",a),b(a.nonce)}catch(a){s(),c("PayPalCheckout: onApprove",a)}r()},onClick:(...e)=>n("PayPalCheckout: onClick",{...e}),onInit:(...e)=>n("PayPalCheckout: onInit",{...e}),onCancel:e=>x("PayPalCheckout: onCancel",e),onError:e=>c("PayPalCheckout: onError",e)});return B(T,{children:[t("button",{className:"btn btn-outline-success",onClick:h,children:"Create PayPal Instance"}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:m,children:"Load PayPal JS SDK"}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:w,children:"Render PayPal Buttons"}),t("br",{}),t("br",{}),t("div",{ref:i}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:async()=>{o();try{const e={...l.operations.transactionSale.data.parameters,paymentMethodNonce:k},a=await D("transaction","sale",[],e);n("Checkout: createTransaction",a),y("TransactionSale",a)}catch(e){s(),c("Checkout: createTransaction",e)}r()},children:"Create Transaction"})]})};P.propTypes={operations:v.object};const M=O(P,K,z);export{M as default};
