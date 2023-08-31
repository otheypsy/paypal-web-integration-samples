import{u as n,b as d,d as i,c,j as u}from"./index-5183357d.js";import{c as l}from"./logger.utils-ababba19.js";import{w as C}from"./withOperations.hoc-a1e834ab.js";import{g as p}from"./bt.service-231e8587.js";import"./vendor-d2c1d7ba.js";import"./InputText.component-62651ba0.js";import"./http.utils-2a9b74b8.js";const{log:g,error:m}=l("ChargeCreditCard.component.jsx"),y=`
    mutation ChargeCreditCard($myInput: ChargeCreditCardInput!, $hasDetails: Boolean!) {
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

    fragment statusHistoryFields on PaymentStatusEvent {
        source
        status
        terminal
        timestamp
        ...settled
        ...gatewayRejected
        ...processorDecline
    }

    fragment settled on SettledEvent {
        settlementBatchId
        processorResponse {
            legacyCode
            message
            avsStreetAddressResponse
            avsPostalCodeResponse
            cvvResponse
        }
    }

    fragment processorDecline on ProcessorDeclinedEvent {
        declineType
        processorResponse {
            legacyCode
            message
        }
    }

    fragment gatewayRejected on GatewayRejectedEvent {
        gatewayRejectionReason
        riskDecision
        processorResponse {
            legacyCode
            message
            avsStreetAddressResponse
            avsPostalCodeResponse
            cvvResponse
        }
    }
`,h={chargeCreditCard:{label:"chargeCreditCard",type:"gql",data:{query:y,variables:{myInput:{clientMutationId:Date.now().toString(),paymentMethodId:"fake-valid-nonce",transaction:{orderId:Date.now().toString(),amount:"60.00",riskData:{deviceData:"DEVICE_DATA_STRING"}}},hasDetails:!0}}}},v=t=>{const a=n(),s=d(),r=i(),o=c();return u("button",{className:"btn btn-outline-success",onClick:async()=>{a();try{const e=await p(t.operations.data.query,t.operations.data.variables);g("chargeCreditCard",e),r("ChargeCreditCard",e)}catch(e){o(),m(e)}s()},children:"Charge Credit Card"})},b=C(v,h);export{b as default};
//# sourceMappingURL=ChargeCreditCard-43aa82ed.js.map
