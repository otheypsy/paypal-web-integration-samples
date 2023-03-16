import ApiService from '../../../services/ApiService';
import BTClient from "braintree-web/client";
import BT3DSecure from "braintree-web/three-d-secure";
import BTDataCollector from "braintree-web/data-collector";

const _graphQL = {
    request: async (query, variables) => {
        const uri = '/braintree/graphql';
        const data = {
            query: query,
            variables: variables
        };
        return ApiService.post(uri, data);
    }
}

const _token = {
    get: async (params) => {
        const uri = '/braintree/sdk/token/';
        const data = {
            params: params
        };
        return ApiService.post(uri, data);
    }
};

const _subscription = {
    create: async (planID, paymentToken) => {
        const uri = '/braintree/sdk/subscription/create';
        const data = {
            planID: planID,
            paymentToken: paymentToken
        };
        return ApiService.post(uri, data);
    }
};

const _dataCollector = {
    createInstance: (options) => {
        return new Promise((resolve) => {
            BTDataCollector.create(options, (error, dataCollectorInstance) => {
                resolve([dataCollectorInstance, error]);
            })
        })
    },
    getDeviceData: (dataCollectorInstance) => {
        return new Promise((resolve) => {
            dataCollectorInstance.getDeviceData().then(resolve)
        })
    }
};

const _threeDSecure = {
    createInstance: (options) => {
        return new Promise((resolve) => {
            BT3DSecure.create(options, (error, threeDSecureInstance) => resolve([threeDSecureInstance, error]))
        })
    }
};

const _client = {

    tokenizationKey: () => 'sandbox_pghr4bzw_69dkx657gmjb4yvc',

    createInstance: (options) => {
        return new Promise((resolve) => {
            BTClient.create(options, (error, clientInstance) => resolve([clientInstance, error]));
        });
    }
};

const BraintreeService = {
    graphQL: _graphQL,
    token: _token,
    client: _client,
    subscription: _subscription,
    dataCollector: _dataCollector,
    threeDSecure: _threeDSecure
};

export default BraintreeService;
