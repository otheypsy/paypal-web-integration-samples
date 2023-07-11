import gql from 'graphql-tag'
import paymentStatus from '../interfaces/paymentStatus.jsx'

const _fields = gql`
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

    ${paymentStatus.fields}
`

export default {
    fields: _fields,
}
