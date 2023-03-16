import ApiService from '../../../services/ApiService';
import { logger } from '../../../services/AppService';
import BTClient from "braintree-web/client";
import BTPayPalCheckout from "braintree-web/paypal-checkout";
import BTUSBankAccount from "braintree-web/us-bank-account";
import XHRService from '../../../services/XHRService';

const _clientMapping = {
    Client: BTClient,
    PayPalCheckout: BTPayPalCheckout,
    USBankAccount: BTUSBankAccount
}

export const clientInterface = async (className, options) => {
    try {
        if (!Object.hasOwn(_clientMapping, className)) throw Error('Braintree client SDK class for ' + className + ' not setup')
        _clientMapping[className].create(options);
    }
    catch (error) {
        logger.error(error);
        return undefined;
    }
};

export const serverInterface = async (resource, operation, args=[], params=[]) => {
    const url = '/api/braintree/sdk/interface';
    const postData = {
        resource: resource,
        operation: operation,
        args: args,
        params: params
    };
    return await XHRService.post(url, postData);
}
