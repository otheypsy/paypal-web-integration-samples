import ApiService from '../../../services/api.service.jsx'

const timestamp = Date.now()

const BraintreeTransactionsService = {
    postData: {
        find: {
            arguments: {
                transactionId: '8qmaqbvm',
            },
        },
        settle: {
            arguments: {
                transactionId: '5sfsk47s',
                amount: 10,
                isPartial: false,
            },
            parameters: {
                descriptor: {
                    name: 'testing*odesaitst',
                    phone: '3125551212',
                    url: 'www.test.com',
                },
                purchaseOrderNumber: timestamp,
                taxAmount: '5.00',
                shippingAmount: '1.00',
                discountAmount: '0.00',
                shipsFromPostalCode: '60654',
                shipping: {
                    firstName: 'Jill',
                    lastName: 'Doe',
                    streetAddress: '555 Smith St.',
                    extendedAddress: '#5',
                    locality: 'Oakland',
                    region: 'CA',
                    postalCode: '12345',
                    countryCodeAlpha2: 'US',
                },
                lineItems: [
                    {
                        name: 'Product Changed',
                        kind: 'debit',
                        quantity: '10.0000',
                        unitAmount: '9.5000',
                        unitOfMeasure: 'unit',
                        totalAmount: '95.0000',
                        taxAmount: '5.00',
                        discountAmount: '0.00',
                        productCode: '54321',
                        commodityCode: '98765',
                    },
                ],
            },
        },
    },
    sale: async (params) => {
        const uri = '/braintree/sdk/transaction/sale'
        const postData = {
            params: params,
        }
        const [error, response] = await ApiService.post(uri, postData)
        return response || error
    },
    find: async (transactionID) => {
        const uri = '/braintree/sdk/transaction/find/' + transactionID
        const response = await ApiService.get(uri)
        if (response.data) return response.data
        else return response.error
    },
    settle: async (postData) => {
        const uri = '/braintree/sdk/transaction/settle'
        const response = await ApiService.post(uri, postData)
        if (response.data) return response.data
        else return response.error
    },
    refund: async (args, params) => {
        const uri = '/braintree/sdk/transaction/refund'
        const postData = {
            args: args,
            params: params,
        }
        const response = await ApiService.post(uri, postData)
        if (response.data) return response.data
        else return response.error
    },
}

export default BraintreeTransactionsService
