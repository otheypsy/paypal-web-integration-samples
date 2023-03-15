import ApiService from '../../../services/ApiService';

const BraintreeVaultService = {
    postData: {
        create: {

        },
        paypal: {
            arguments: {
                token: 'bhh6wpw'
            }
        },
        find: {
            arguments: {
                token: 'fvhnzw2'
            }
        },
        update: {
            arguments: {
                token: 'fvhnzw2'
            },
            parameters: {
                billingAddress: {
                    firstName: 'Jill',
                    lastName: 'Doe',
                    streetAddress: '555 Smith St.',
                    extendedAddress: '#5',
                    locality: 'Oakland',
                    region: 'CA',
                    postalCode: '12345',
                    countryCodeAlpha2: 'US',
                    options: {
                        updateExisting: true
                    }
                }
            }
        },
        sale: {
            parameters: {
                paymentMethodToken: 'fvhnzw2',
                amount: 10,
                billing: {
                    firstName: 'Jill',
                    lastName: 'Doe',
                    streetAddress: '555 Smith St.',
                    extendedAddress: '#5',
                    locality: 'Oakland',
                    region: 'CA',
                    postalCode: '12345',
                    countryCodeAlpha2: 'US'
                },
                options: {
                    submitForSettlement: false
                }
            }
        }
    },
    create: async (params) => {
        const uri = '/braintree/sdk/vault/create';
        const postData = {
            params: params
        };
        const response = await ApiService.post(uri, postData);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    find: async (token) => {
        const uri = '/braintree/sdk/vault/find/' + token;
        const response = await ApiService.get(uri);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    update: async (postData) => {
        const uri = '/braintree/sdk/vault/update';
        const response = await ApiService.patch(uri, postData);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    delete: async (token) => {
        const uri = '/braintree/sdk/vault/delete/' + token;
        const response = await ApiService.delete(uri);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    generateNonce: async (paymentToken) => {
        const uri = '/braintree/sdk/vault/generateNonce/' + paymentToken;
        const response = await ApiService.get(uri);
        if(response.data)
            return response.data;
        else
            return response.error;
    }
};

export default BraintreeVaultService;
