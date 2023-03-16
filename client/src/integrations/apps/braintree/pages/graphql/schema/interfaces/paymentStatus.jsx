import gql from 'graphql-tag.macro';

const _settled = gql`
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
`

const _processorDecline = gql`
    fragment processorDecline on ProcessorDeclinedEvent {
        declineType
        processorResponse {
            legacyCode
            message
        }
    }
`

const _gatewayRejected = gql`
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
`

const _paymentStatus = gql`
    fragment statusHistoryFields on PaymentStatusEvent {
        source
        status
        terminal
        timestamp
        ...settled
        ...gatewayRejected
        ...processorDecline

        ${_settled}
        ${_gatewayRejected}
        ${_processorDecline}
    }
`

export default {
    fields: _paymentStatus
}
