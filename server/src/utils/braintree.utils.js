import braintree from 'braintree'
import { GraphQLClient } from 'graphql-request'
import { base64 } from './core.utils.js'
import createLoggers from './logger.utils.js'

const { log, success, error } = createLoggers('braintree.utils.js')

const bt = {
    sdk: undefined,
    gql: undefined,
}

const viewerQuery = `
    {
        viewer {
            user {
                email
                name
            }
            merchant {
                id
            }
        }
    }
`

const setupSDK = async () => {
    log('Setting up SDK')

    try {
        bt.sdk = new braintree.BraintreeGateway({
            environment: braintree.Environment.Sandbox,
            merchantId: process.env.BT_MERCHANT_ID,
            publicKey: process.env.BT_PUBLIC_KEY,
            privateKey: process.env.BT_PRIVATE_KEY,
        })

        const { merchantId } = bt.sdk.config
        success(`Braintree SDK initialized with merchant ID ${merchantId}`)
    } catch (e) {
        error('Failed to setup SDK instance', e)
    }
}

const setupGQL = async () => {
    log('Setting up GQL Client')

    try {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = String(today.getFullYear())
        const btVersion = `${yyyy}-${mm}-${dd}`

        const endpoint = 'https://payments.sandbox.braintree-api.com/graphql'
        const auth = `${process.env.BT_PUBLIC_KEY}:${process.env.BT_PRIVATE_KEY}`

        bt.gql = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${base64.encode(auth)}`,
                'Braintree-Version': btVersion,
            },
        })

        const response = await bt.gql.request(viewerQuery)
        const merchantId = response.viewer.merchant.id
        success(`Braintree GQL initialized with merchant ID ${merchantId}`)
    } catch (e) {
        error('Failed to setup GQL instance', e)
    }
}

export { setupGQL, setupSDK, bt }
