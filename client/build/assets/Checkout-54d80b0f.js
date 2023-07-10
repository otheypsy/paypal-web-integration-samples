import{d as f,e as I,f as g,g as N,k as B,r as u,b as E,F as T,j as a,P as v}from"./index-bc6e35e4.js";import{B as A,s as D}from"./bt.service-e51c3a6c.js";import{w as O}from"./withOperations.component-fd3e39c1.js";import{l as n,d as c,w as x}from"./LoggerService-c6aefb93.js";import"./logger.utils-ababba19.js";import"./export-5fac481c.js";import"./InputText.component-c228375d.js";const z={paypalCheckoutCreate:{label:"braintree-web.paypalCheckout.create(options, callback)",type:"client",data:{options:{client:"CLIENT_INSTANCE_HERE"}}},loadPayPalSDK:{label:"paypalCheckoutInstance.loadPayPalSDK(options, callback)",type:"client",data:{options:{currency:"USD",intent:"capture","disable-funding":"card"}}},renderPayPalButtons:{label:"window.paypal.Buttons(config).render",type:"client",data:{config:{style:{layout:"vertical",color:"gold",shape:"rect",label:"paypal",tagline:!1}}}},createPayment:{label:"paypalCheckoutInstance.createPayment(options, callback)",type:"client",data:{options:{flow:"checkout",intent:"capture",amount:"100.00",currency:"USD",enableShippingAddress:!0,shippingAddressEditable:!0}}},tokenizePayment:{label:"paypalCheckoutInstance.tokenizePayment(tokenizeOptions, callback)",type:"client",data:{tokenizeOptions:{}}},transactionSale:{label:"gateway.transaction.sale(parameters, callback)",type:"server",data:{parameters:{amount:"100.00",merchantAccountId:"odesai_USD",paymentMethodNonce:"NONCE_HERE",options:{submitForSettlement:!0}}}}},K=["clientInstance"],P=l=>{const o=f(),r=I(),y=g(),s=N(),d=B(),i=u.useRef(),[p,C]=u.useState(void 0),[b,k]=u.useState(void 0),m=async()=>{o();try{const e=await A.create({client:d.clientInstance});n("Checkout: createPayPalInstance",e),C(e)}catch(e){s(),c("NewCustomer: createPayPalInstance",e)}r()},h=async()=>{o(),await p.loadPayPalSDK(l.operations.loadPayPalSDK.data.options),r()},w=async()=>{o();try{if(!window?.paypal?.Buttons)throw Error("PayPal JS SDK not found");const e=S();i.current.innerHTML=null,await window.paypal.Buttons(e).render(i.current)}catch(e){s(),c("NewCustomer: renderPayPalButtons",e)}r()},S=()=>({...l.operations.renderPayPalButtons.data.config,fundingSource:window.paypal.FUNDING.PAYPAL,createOrder:async()=>{o();let e;try{e=await p.createPayment(l.operations.createPayment.data.options),n("PayPalCheckout: createOrder",e)}catch(t){s(),c("PayPalCheckout: createOrder",t)}return r(),e},onApprove:async e=>{o();try{n("PayPalCheckout: onApprove",e);const t=await p.tokenizePayment(e);n("PayPalCheckout: tokenizePayment",t),y("TokenizePayment",t),k(t.nonce)}catch(t){s(),c("PayPalCheckout: onApprove",t)}r()},onClick:(...e)=>n("PayPalCheckout: onClick",{...e}),onInit:(...e)=>n("PayPalCheckout: onInit",{...e}),onCancel:e=>x("PayPalCheckout: onCancel",e),onError:e=>c("PayPalCheckout: onError",e)});return E(T,{children:[a("button",{className:"btn btn-outline-success",onClick:m,children:"Create PayPal Instance"}),a("br",{}),a("br",{}),a("button",{className:"btn btn-outline-success",onClick:h,children:"Load PayPal JS SDK"}),a("br",{}),a("br",{}),a("button",{className:"btn btn-outline-success",onClick:w,children:"Render PayPal Buttons"}),a("br",{}),a("br",{}),a("div",{ref:i}),a("br",{}),a("br",{}),a("button",{className:"btn btn-outline-success",onClick:async()=>{o();try{const e={...l.operations.transactionSale.data.parameters,paymentMethodNonce:b},t=await D("transaction","sale",[],e);n("Checkout: createTransaction",t),y("TransactionSale",t)}catch(e){s(),c("Checkout: createTransaction",e)}r()},children:"Create Transaction"})]})};P.propTypes={operations:v.object};const J=O(P,z,K);export{J as default};
//# sourceMappingURL=Checkout-54d80b0f.js.map
