import braintree from 'braintree'
import { bt } from '../utils/braintree.utils.js'
import BadRequestError from '../utils/errors/badRequest.error.js'
import ExternalError from '../utils/errors/external.error.js'
import createLoggers from '../utils/logger.utils.js'
import InternalServerError from '../utils/errors/internalServer.error.js'

const { log, error } = createLoggers('braintree.service.js')

const sdkInterface = async (input) => {
    const { resource, operation, args, params } = input

    if (!resource || !bt.sdk[resource]) throw new BadRequestError('Invalid server SDK resource', resource)
    if (!operation || !bt.sdk[resource][operation]) throw new BadRequestError('Invalid server SDK operation', operation)

    // Construct SDK function arguments
    const fnParams = [...(args ? [...args] : []), ...(params ? [params] : [])]

    try {
        return await bt.sdk[resource][operation](...fnParams)
    } catch (e) {
        error(e)
        throw new ExternalError(`Braintree SDK request failed`, e.name)
    }
}
const sdkSearch = () => {
    const data = []

    return new Promise((resolve) => {
        const searchStream = bt.sdk.transaction.search((search) => {
            search.refund().is(false)
        })

        searchStream.on('ready', () => log('Received Braintree `SearchResponseStream`'))

        searchStream.on('data', (transaction) => {
            data.push({ id: transaction.id, status: transaction.status })
        })

        searchStream.on('end', () => {
            resolve(data)
        })
    })
}

const sdkTestBed = async () => {
    try {
        const sampleWebhook = bt.sdk.webhookTesting.sampleNotification(
            braintree.WebhookNotification.Kind.Disbursement,
            'asd',
            'odesai_USD',
        )
        return await bt.sdk.webhookNotification.parse(sampleWebhook.bt_signature, sampleWebhook.bt_payload)
    } catch (e) {
        error(e)
        throw new InternalServerError(`Braintree SDK Testbed failed`, e)
    }
}

const gqlInterface = (query, variables = undefined) => bt.gql.request(query, variables)

export default {
    sdk: {
        interface: sdkInterface,
        search: sdkSearch,
        testbed: sdkTestBed,
    },
    gql: {
        interface: gqlInterface,
    },
}
