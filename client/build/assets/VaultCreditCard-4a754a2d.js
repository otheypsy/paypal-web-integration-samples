import{u as d,b as o,d as n,c as u,j as l}from"./index-5183357d.js";import{c}from"./logger.utils-ababba19.js";import{w as C}from"./withOperations.hoc-a1e834ab.js";import{g as m}from"./bt.service-231e8587.js";import"./vendor-d2c1d7ba.js";import"./InputText.component-62651ba0.js";import"./http.utils-2a9b74b8.js";const{log:p,error:y}=c("VaultCreditCard.component.jsx"),f=`
    mutation VaultCreditCard($myInput: VaultCreditCardInput!, $hasVerifyDetails: Boolean!) {
        vaultCreditCard(input: $myInput) {
            clientMutationId
            paymentMethod {
                id
                legacyId
                usage
            }
            ...verificationFields @include(if: $hasVerifyDetails)
        }
    }

    fragment verificationFields on Verification {
        id
        legacyId
        status
    }
`,g={vaultCreditCard:{label:"vaultCreditCard",type:"gql",data:{query:f,variables:{myInput:{clientMutationId:Date.now().toString(),paymentMethodId:"fake-valid-nonce",customerId:"Y3VzdG9tZXJfMjYwODM3NTA0",billingAddress:{firstName:"Jill",lastName:"Doe",streetAddress:"555 Smith St.",extendedAddress:"#5",locality:"Oakland",region:"CA",postalCode:"12345",countryCode:"USA"}},hasVerifyDetails:!0}}}},v=e=>{const a=d(),r=o(),i=n(),s=u();return l("button",{className:"btn btn-outline-success",onClick:async()=>{a();try{const t=await m(e.operations.data.query,e.operations.data.variables);p("vaultCreditCard",t),i("VaultCreditCard",t)}catch(t){s(),y(t)}r()},children:"Vault Credit Card"})},B=C(v,g);export{B as default};
//# sourceMappingURL=VaultCreditCard-4a754a2d.js.map
