import{d as n,e as d,f as i,g as c,j as u}from"./index-bc6e35e4.js";import{c as C}from"./logger.utils-ababba19.js";import{w as g}from"./withOperations.component-fd3e39c1.js";import{g as l}from"./bt.service-e51c3a6c.js";import"./export-5fac481c.js";import"./InputText.component-c228375d.js";const{log:m,error:h}=C("ChargeCreditCard.component.jsx"),p={chargeCreditCard:{label:"chargeCreditCard",type:"gql",data:{uri:"testing",headers:[],query:`
                mutation ChargeCreditCard(myInput: ChargeCreditCardInput!, $hasDetails: Boolean!) {
                    chargeCreditCard(input: $myInput) {
                        clientMutationId
                        transaction {
                            id
                            legacyId
                            ...transactionFields @include(if: $hasDetails)
                        }
                    }
                }

                fragment transactionFields on Transaction {
                    createdAt
                    paymentMethod {
                        id
                        legacyId
                    }
                    amount {
                        value
                        currencyIsoCode
                    }
                    merchantAccountId
                    orderId
                    status
                    statusHistory {
                        ...statusHistoryFields
                    }
                }
                `,variables:{myInput:{clientMutationId:Date.now().toString(),paymentMethodId:"fake-valid-nonce",transaction:{orderId:Date.now().toString(),amount:"60.00",riskData:{deviceData:"DEVICE_DATA_STRING"}}},hasDetails:!0}}}},y=a=>{const e=n(),r=d(),s=i(),o=c();return u("button",{className:"btn btn-outline-success",onClick:async()=>{e();try{const t=await l(a.operations.data.query,a.operations.data.variables);m("chargeCreditCard",t),s("ChargeCreditCard",t)}catch(t){o(),h(t)}r()},children:"Charge Credit Card"})},B=g(y,p);export{B as default};
//# sourceMappingURL=ChargeCreditCard-fe0c5dc4.js.map
