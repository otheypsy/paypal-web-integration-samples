import ApiService from '../../../services/ApiService';

const BraintreeCustomersService = {
    postData: {
        create: {
            parameters: {
                firstName: 'John',
                lastName: 'Doe',
                company: 'PayPal',
                email: 'email@domain.com',
                phone: '312.555.1234',
                fax: '614.555.5678',
                website: 'www.example.com'
            }
        },
        find: {
            arguments: {
                customerId: '509989891'
            }
        },
    },
    create: async (params) => {
        const uri = '/braintree/sdk/customer/create';
        const postData = {
            params: params
        }
        const response = await ApiService.post(uri, postData);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    find: async (customerID) => {
        const uri = '/braintree/sdk/customer/find/' + customerID;
        const response = await ApiService.get(uri);
        if(response.data)
            return response.data;
        else
            return response.error;
    },
    delete: async (customerID) => {
        const uri = '/braintree/sdk/customer/delete/' + customerID;
        const response = await ApiService.delete(uri);
        if(response.data)
            return response.data;
        else
            return response.error;
    }
};

export default BraintreeCustomersService;
