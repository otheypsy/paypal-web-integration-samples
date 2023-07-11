import gql from 'graphql-tag'
import transactionFragment from '../fragments/transaction.jsx'

const _creditCard = {
    query: gql`
        mutation ChargeCreditCard($input: ChargeCreditCardInput!, $hasDetails: Boolean!) {
            chargeCreditCard(input: $input) {
                clientMutationId
                transaction {
                    id
                    legacyId
                    ...transactionFields @include(if: $hasDetails)
                }
            }
        }

        ${transactionFragment.fields}
    `,
    variables: {
        input: {
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
}

export default {
    creditCard: _creditCard,
}
