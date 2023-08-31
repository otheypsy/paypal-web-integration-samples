import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { gqlInterface } from '../../../../../../services/bt.service.jsx'

const { log, error } = createLoggers('ChargeCreditCard.component.jsx')

const query = `
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
`

const _operations = {
    chargeCreditCard: {
        label: 'chargeCreditCard',
        type: 'gql',
        data: {
            query: query,
            variables: {
                myInput: {
                    clientMutationId: Date.now().toString(),
                    paymentMethodId: 'fake-valid-nonce',
                    transaction: {
                        orderId: Date.now().toString(),
                        amount: '60.00',
                        riskData: {
                            deviceData: 'DEVICE_DATA_STRING',
                        },
                    },
                },
                hasDetails: true,
            },
        },
    },
}

const ChargeCreditCard = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const chargeCreditCard = async () => {
        addBusy()
        try {
            const response = await gqlInterface(props.operations.data.query, props.operations.data.variables)
            log('chargeCreditCard', response)
            addOutput('ChargeCreditCard', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={chargeCreditCard}>
            Charge Credit Card
        </button>
    )
}

export default withOperations(ChargeCreditCard, _operations)
