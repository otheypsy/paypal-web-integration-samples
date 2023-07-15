import{d as i,e as o,h as n,f as l,j as u}from"./index-00f27fa2.js";import{c}from"./logger.utils-ababba19.js";import{w as C}from"./withOperations.hoc-4e25aaba.js";import{g as m}from"./bt.service-06a51c60.js";import"./InputText.component-95098d29.js";import"./http.utils-2a9b74b8.js";const{log:p,error:y}=c("VaultCreditCard.component.jsx"),f=`
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
`,g={vaultCreditCard:{label:"vaultCreditCard",type:"gql",data:{query:f,variables:{myInput:{clientMutationId:Date.now().toString(),paymentMethodId:"fake-valid-nonce",customerId:"Y3VzdG9tZXJfMjYwODM3NTA0",billingAddress:{firstName:"Jill",lastName:"Doe",streetAddress:"555 Smith St.",extendedAddress:"#5",locality:"Oakland",region:"CA",postalCode:"12345",countryCode:"USA"}},hasVerifyDetails:!0}}}},v=e=>{const a=i(),r=o(),s=n(),d=l();return u("button",{className:"btn btn-outline-success",onClick:async()=>{a();try{const t=await m(e.operations.data.query,e.operations.data.variables);p("vaultCreditCard",t),s("VaultCreditCard",t)}catch(t){d(),y(t)}r()},children:"Vault Credit Card"})},w=C(v,g);export{w as default};
//# sourceMappingURL=VaultCreditCard-ff952bee.js.map
