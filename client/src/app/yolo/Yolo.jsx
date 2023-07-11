import withOperations from '../../layouts/withOperations.component.jsx'

const _operations = {
    clientTokenGenerate: {
        label: 'gateway.clientToken.generate()',
        type: 'server',
        data: {
            parameters: {
                customerId: '542527493',
                merchantAccountId: 'odesai_USD',
                options: {
                    failOnDuplicatePaymentMethod: false,
                    makeDefault: false,
                    verifyCard: true,
                },
            },
        },
    },
    clientCreate: {
        label: 'braintree-web.client.create()',
        type: 'client',
        data: {
            options: {
                authorization: 'CLIENT_TOKEN_HERE',
            },
        },
    },
}

const Yolo = () => {
    return <h1>Testing</h1>
}

export default withOperations(Yolo, _operations)
