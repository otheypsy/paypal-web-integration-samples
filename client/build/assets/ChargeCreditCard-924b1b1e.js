import{d as n,e as d,h as i,f as c,j as l}from"./index-0012b4da.js";import{c as u}from"./logger.utils-ababba19.js";import{w as C}from"./withOperations.component-67facef3.js";import{g}from"./bt.service-81d9e687.js";import"./InputText.component-59d8abb9.js";import"./http.utils-58ed8dbd.js";const{log:p,error:m}=u("ChargeCreditCard.component.jsx"),y=`
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
`,h={chargeCreditCard:{label:"chargeCreditCard",type:"gql",data:{query:y,variables:{myInput:{clientMutationId:Date.now().toString(),paymentMethodId:"fake-valid-nonce",transaction:{orderId:Date.now().toString(),amount:"60.00",riskData:{deviceData:"DEVICE_DATA_STRING"}}},hasDetails:!0}}}},v=t=>{const a=n(),s=d(),r=i(),o=c();return l("button",{className:"btn btn-outline-success",onClick:async()=>{a();try{const e=await g(t.operations.data.query,t.operations.data.variables);p("chargeCreditCard",e),r("ChargeCreditCard",e)}catch(e){o(),m(e)}s()},children:"Charge Credit Card"})},S=C(v,h);export{S as default};
//# sourceMappingURL=ChargeCreditCard-924b1b1e.js.map
