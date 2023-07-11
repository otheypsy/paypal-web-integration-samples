import{d as I,e as S,f as A,g as D,k as E,r as u,b as f,F as B,j as t,P as v}from"./index-bc6e35e4.js";import{B as T,s as O}from"./bt.service-e51c3a6c.js";import{w as _}from"./withOperations.component-fd3e39c1.js";import{l as s,d as c}from"./LoggerService-c6aefb93.js";import"./logger.utils-ababba19.js";import"./export-5fac481c.js";import"./InputText.component-c228375d.js";const x=Date.now(),z={paypalCheckoutCreate:{label:"braintree-web.paypalCheckout.create(options, callback)",type:"client",data:{options:{client:"CLIENT_INSTANCE_HERE"}}},loadPayPalSDK:{label:"paypalCheckoutInstance.loadPayPalSDK(options, callback)",type:"client",data:{options:{currency:"USD",intent:"capture","disable-funding":"card"}}},renderPayPalButtons:{label:"window.paypal.Buttons(config).render",type:"client",data:{config:{style:{layout:"vertical",color:"gold",shape:"rect",label:"paypal",tagline:!1}}}},createPayment:{label:"paypalCheckoutInstance.createPayment(options, callback)",type:"client",data:{options:{flow:"checkout",intent:"capture",amount:"100.00",currency:"USD",requestBillingAgreement:!0,billingAgreementDetails:{description:"Braintree PwPP - Checkout + Vault - "+x},enableShippingAddress:!0,shippingAddressEditable:!0}}},tokenizePayment:{label:"paypalCheckoutInstance.tokenizePayment(tokenizeOptions, callback)",type:"client",data:{tokenizeOptions:{}}},transactionSale:{label:"gateway.transaction.sale(parameters, callback)",type:"server",data:{parameters:{amount:"100.00",merchantAccountId:"odesai_USD",paymentMethodNonce:"NONCE_HERE",deviceData:"DEVICE_DATA_HERE",options:{submitForSettlement:!0}}}}},K=["clientInstance","deviceData"],P=l=>{const n=I(),o=S(),i=A(),r=D(),y=E(),d=u.useRef(),[p,m]=u.useState(""),[C,b]=u.useState(""),k=async()=>{n();try{const e=await T.create({client:y.clientInstance});s("NewCustomer",e),i("PayPalInstance",e),m(e)}catch(e){r(),c("NewCustomer: createPayPalInstance",e)}o()},h=async()=>{n(),await p.loadPayPalSDK(l.operations.loadPayPalSDK.data.options),o()},w=async()=>{n();try{await window.paypal.Buttons({...l.operations.renderPayPalButtons.data.config,fundingSource:window.paypal.FUNDING.PAYPAL,createOrder:N,onApprove:g,onClick:()=>console.log("PayPalCheckout: onClick"),onInit:()=>console.log("PayPalCheckout: onInit"),onCancel:e=>console.error("PayPalCheckout: onCancel",e),onError:e=>console.error("PayPalCheckout: onError",e)}).render(d.current)}catch(e){r(),c("NewCustomer: renderPayPalButtons",e)}o()},N=async()=>{n();try{const e=await p.createPayment(l.operations.createPayment.data.options);return s("PayPalCheckout: createOrder",e),e}catch(e){r(),c("PayPalCheckout: createOrder",e)}o()},g=async e=>{n();try{s("PayPalCheckout: onApprove",e);const a=await p.tokenizePayment(e);s("NewCustomer: tokenizePayment",a),i("PayPalCheckout: onApprove",a),b(a.nonce)}catch(a){r(),c("PayPalCheckout: onApprove",a)}o()};return f(B,{children:[t("button",{className:"btn btn-outline-success",onClick:k,children:"Create PayPal Instance"}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:h,children:"Load PayPal JS SDK"}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:w,children:"Render PayPal Buttons"}),t("br",{}),t("br",{}),t("div",{ref:d}),t("br",{}),t("br",{}),t("button",{className:"btn btn-outline-success",onClick:async()=>{n();try{const e={...l.operations.transactionSale.data.parameters,paymentMethodNonce:C,deviceData:y.get("dataCollectorInstance")},a=await O("transaction","sale",[],e);s("NewCustomer: createTransaction",a),i("TransactionSale",a)}catch(e){r(),c("NewCustomer: createTransaction",e)}o()},children:"Create Transaction"})]})};P.propTypes={operations:v.object};const V=_(P,z,K);export{V as default};
//# sourceMappingURL=NewCustomer-d81b7b6d.js.map
