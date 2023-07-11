import{d as m,e as p,r,A as i,b as t,F as h,j as e,C as y,g as b}from"./index-0012b4da.js";import{w as v}from"./withOperations.component-67facef3.js";import{c as g}from"./logger.utils-ababba19.js";import"./InputText.component-59d8abb9.js";const{log:f,error:P}=g("PPHostedFields.component.jsx"),C={loadPayPalSDK:{label:"Load PayPal JS SDK",type:"client",data:{options:{},dataAttributes:{}}},createOrder:{label:"Create Order",type:"server",data:{uri:"v2/checkout/orders",method:"POST",body:{intent:"CAPTURE",purchase_units:[{invoice_id:"INV-"+Math.round(new Date().getTime()/1e3),amount:{currency_code:"USD",value:"220.00"}}]}}},onApprove:{label:"Execute Order",type:"server",data:{uri:"v2/checkout/orders",method:"POST",body:{}}}},F=()=>{const l=m(),s=p(),[n]=r.useState({intent:"CAPTURE",purchase_units:[{invoice_id:"INV-"+Math.round(new Date().getTime()/1e3),soft_descriptor:"CustomDescriptor",amount:{currency_code:"USD",value:"220.00"}}]}),[o,c]=r.useState({});r.useEffect(()=>{(async()=>{const a=await i.scripts.paypal.jsv5({},{"data-client-token":"12345"});a?.HostedFields?.isEligible()?u(a):(document.getElementById("paypalHostedFields").style.display="none",i.logger.error("Not eligible for PayPal Hosted Fields"))})().then()},[]);const u=d=>{d.HostedFields.render({createOrder:function(){return"order-ID"},styles:{input:{"font-size":"17px","font-family":"helvetica, tahoma, calibri, sans-serif",color:"#3a3a3a"},":focus":{color:"black"}},fields:{number:{selector:"#card-number",placeholder:"card number"},cvv:{selector:"#cvv",placeholder:"card security number"},expirationDate:{selector:"#expiration-date",placeholder:"mm/yy"}}}).then(a=>c(a))};return t(h,{children:[e("h3",{children:"PayPal Checkout - Advance Payments"}),e("hr",{}),t(y,{children:[e("div",{id:"paypalCheckoutDiv"}),t("div",{id:"paypalHostedFields",children:[e("div",{children:" -- OR -- "}),t("div",{children:[e("label",{htmlFor:"cardNumber",children:"Card Number"}),e("div",{id:"cardNumber",className:"cardField"})]}),t("div",{children:[e("label",{htmlFor:"expirationDate",children:"Expiration Date"}),e("div",{id:"expirationDate",className:"cardField"})]}),t("div",{children:[e("label",{htmlFor:"cvv",children:"CVV"}),e("div",{id:"cvv",className:"card_field"})]}),e("label",{htmlFor:"card-holder-name",children:"Name on Card"}),e("input",{type:"text",id:"card-holder-name",name:"card-holder-name",autoComplete:"off",placeholder:"card holder name"}),t("div",{children:[e("label",{htmlFor:"card-billing-address-street",children:"Billing Address"}),e("input",{type:"text",id:"card-billing-address-street",name:"card-billing-address-street",autoComplete:"off",placeholder:"street address"})]}),t("div",{children:[e("label",{htmlFor:"card-billing-address-unit",children:" "}),e("input",{type:"text",id:"card-billing-address-unit",name:"card-billing-address-unit",autoComplete:"off",placeholder:"unit"})]}),e("div",{children:e("input",{type:"text",id:"card-billing-address-city",name:"card-billing-address-city",autoComplete:"off",placeholder:"city"})}),e("div",{children:e("input",{type:"text",id:"card-billing-address-state",name:"card-billing-address-state",autoComplete:"off",placeholder:"state"})}),e("div",{children:e("input",{type:"text",id:"card-billing-address-zip",name:"card-billing-address-zip",autoComplete:"off",placeholder:"zip / postal code"})}),e("div",{children:e("input",{type:"text",id:"card-billing-address-country",name:"card-billing-address-country",autoComplete:"off",placeholder:"country code"})}),e("br",{}),e("br",{}),e("button",{value:"submit",id:"submit",className:"btn",onClick:async()=>{l();try{const d=await o.submit({cardholderName:document.getElementById("card-holder-name").value,billingAddress:{streetAddress:document.getElementById("card-billing-address-street").value,extendedAddress:document.getElementById("card-billing-address-unit").value,region:document.getElementById("card-billing-address-state").value,locality:document.getElementById("card-billing-address-city").value,postalCode:document.getElementById("card-billing-address-zip").value,countryCodeAlpha2:document.getElementById("card-billing-address-country").value}});f("onSubmit",d)}catch(d){P(d)}s()},children:"Pay"})]})]}),e("br",{}),e(b,{content:n})]})},I=v(F,C);export{I as default};
//# sourceMappingURL=PPHostedFields.component-713f0eb6.js.map
