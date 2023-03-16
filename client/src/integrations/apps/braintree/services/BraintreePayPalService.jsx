import BTPayPalCheckout from "braintree-web/paypal-checkout";
import AppService from "../../../services/AppService";

const _createPayPalInstance = (options={}) => {
    AppService.logger.log('BraintreePayPalService: createPayPalInstance', options);
    return new Promise((resolve) => {
        if(!BTPayPalCheckout.isSupported()) AppService.logger.error('BraintreePayPalService: !isSupported');
        BTPayPalCheckout.create(options, (error, paypalInstance) => {
            if (error) AppService.logger.error('BraintreePayPalService: createInstance', error)
            resolve(paypalInstance);
        });
    });
};

const _getSdk = (ppInstance, options={}) => {
    AppService.logger.log('BraintreePayPalService: getSdk', options)
    return new Promise((resolve) => {
        ppInstance.loadPayPalSDK(options, resolve);
    });
};

const _tokenizePayment = (ppInstance, options={}) => {
    AppService.logger.log('BraintreePayPalService: tokenizePayment', options);
    return new Promise((resolve) => {
        ppInstance.tokenizePayment(options, (error, payload) => {
            if (error) AppService.logger.error('BraintreePayPalService: tokenizePayment', error);
            resolve(payload);
        });
    });
}

export default {
    createPayPalInstance: _createPayPalInstance,
    getSdk: _getSdk,
    tokenizePayment: _tokenizePayment
};
