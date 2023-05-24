import BTClient from 'braintree-web/client'
import BTPayPalCheckout from 'braintree-web/paypal-checkout'
import BTUSBankAccount from 'braintree-web/us-bank-account'
import createLoggers from '../../../../utils/logger.utils.jsx'
import { jsonRequest } from '../../../../utils/http.utils'

const { error } = createLoggers('http.utils.jsx')

const _clientMapping = {
    Client: BTClient,
    PayPalCheckout: BTPayPalCheckout,
    USBankAccount: BTUSBankAccount,
}

const clientInterface = async (className, options) => {
    if (!Object.hasOwn(_clientMapping, className)) {
        error('Braintree client SDK class for ' + className + ' not setup')
        return undefined
    }
    return _clientMapping[className].create(options)
}

const serverInterface = async (resource, operation, args = [], params = []) => {
    const url = '/api/braintree/sdk/interface'
    const headers = localStorage.getItem('authHeader')
        ? {
              authorization: 'Basic ' + localStorage.getItem('authHeader'),
          }
        : {}
    const postData = {
        resource: resource,
        operation: operation,
        args: args,
        params: params,
    }

    return await jsonRequest.post(url, postData, headers)
}

export { clientInterface, serverInterface }
