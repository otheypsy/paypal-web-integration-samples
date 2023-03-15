import braintree from 'braintree'
import { GraphQLClient } from 'graphql-request'
import InternalServerErrorError from './errors/internalServer.error.js'
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

const base64 = {
    encode: (string) => Buffer.from(string).toString('base64'),
}

const sdkMerchantId = async () => {
    if (bt.sdk) {
        const response = await bt.sdk.graphQLClient.query(viewerQuery)
        return response.data.viewer.merchant.id
    }
    throw new InternalServerErrorError('Braintree SDK check failed')
}

const gqlMerchantId = async () => {
    if (bt.gql) {
        const response = await bt.gql.request(viewerQuery)
        return response.viewer.merchant.id
    }
    throw new InternalServerErrorError('Braintree GQL check failed')
}

const setupSDK = async () => {
    log('Setting up SDK')
    if (!process.env.BT_MERCHANT_ID || !process.env.BT_PUBLIC_KEY || !process.env.BT_PRIVATE_KEY)
        throw new InternalServerErrorError('Braintree environment variables not set')

    try {
        bt.sdk = new braintree.BraintreeGateway({
            environment: braintree.Environment.Sandbox,
            merchantId: process.env.BT_MERCHANT_ID,
            publicKey: process.env.BT_PUBLIC_KEY,
            privateKey: process.env.BT_PRIVATE_KEY,
        })

        const merchantId = await sdkMerchantId()
        success(`Braintree SDK initialized with merchant ID ${merchantId}`)
    } catch (err) {
        error('Braintree Utils `setupSDK` failed', err)
    }
}

const setupGQL = async () => {
    if (!process.env.BT_MERCHANT_ID || !process.env.BT_PUBLIC_KEY || !process.env.BT_PRIVATE_KEY)
        throw new InternalServerErrorError('Braintree environment variables not set')

    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = String(today.getFullYear())
    const btVersion = `${yyyy}-${mm}-${dd}`

    const endpoint = 'https://payments.sandbox.braintree-api.com/graphql'
    const auth = `${process.env.BT_PUBLIC_KEY}:${process.env.BT_PRIVATE_KEY}`

    try {
        bt.gql = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${base64.encode(auth)}`,
                'Braintree-Version': btVersion,
            },
        })

        const merchantId = await gqlMerchantId()
        success(`Braintree GQL initialized with merchant ID ${merchantId}`)
    } catch (err) {
        error('Braintree Utils `setupGQL` failed', err)
    }
}

export { setupGQL, setupSDK, bt }
