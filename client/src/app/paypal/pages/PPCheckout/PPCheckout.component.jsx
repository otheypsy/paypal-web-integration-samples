import { useState } from 'react'
import withOperations from '../../../../layouts/withOperations.component.jsx'
import createLoggers from '../../../../utils/logger.utils.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../states/Busy/busy.hooks.jsx'
// import { useAddOutput } from '../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../states/Error/error.hooks.jsx'
import { loadPPScript, restInterface } from '../../../../services/paypal.service.jsx'
import PayPalButtons from '../../../../features/PayPalButtons.components.jsx'

const { log, error } = createLoggers('PPCheckout.component.jsx')

const _operations = {
    loadPayPalSDK: {
        label: 'Load PayPal JS SDK',
        type: 'client',
        data: {
            options: {},
            dataAttributes: {},
        },
    },
    createOrder: {
        label: 'Create Order',
        type: 'server',
        data: {
            uri: 'v2/checkout/orders',
            method: 'POST',
            body: {
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        invoice_id: 'INV-' + Math.round(new Date().getTime() / 1000),
                        amount: {
                            currency_code: 'USD',
                            value: '220.00',
                        },
                    },
                ],
            },
        },
    },
    onApprove: {
        label: 'Execute Order',
        type: 'server',
        data: {
            uri: 'v2/checkout/orders',
            method: 'POST',
            body: {},
        },
    },
}

const PPCheckout = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    // const addOutput = useAddOutput()
    const setError = useSetError()

    const [ppConfig, setPPConfig] = useState(undefined)

    const loadPayPalSDK = async () => {
        addBusy()
        const { options, dataAttributes } = props.operations.loadPayPalSDK.data
        await loadPPScript(options, dataAttributes)
        removeBusy()
    }

    const renderPayPalButtons = () => {
        addBusy()
        if (!window?.paypal?.Buttons) return error('renderPayPalButtons', 'Unable to load PayPal Checkout SDK')
        setPPConfig({
            createOrder: async () => {
                addBusy()
                let response = undefined
                try {
                    response = await restInterface(
                        props.operations.createOrder.data.uri,
                        props.operations.createOrder.data.method,
                        props.operations.createOrder.data.body,
                    )
                    log('createOrder', response)
                } catch (e) {
                    setError()
                    error('createOrder', e)
                }
                removeBusy()
                return response?.id
            },

            onApprove: async (data) => {
                addBusy()
                try {
                    log('onApprove', data)
                    // const response = await ppInstance.tokenizePayment(data)
                    // log('executeOrder', response)
                    // addOutput('ExecuteOrder', response)
                } catch (e) {
                    setError()
                    error('onApprove', e)
                }
                removeBusy()
            },
        })
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={loadPayPalSDK}>
                Load PayPal JS SDK
            </button>
            <br />
            <button className="btn btn-outline-success" onClick={renderPayPalButtons}>
                Render PayPal Buttons
            </button>
            <br />
            <button className="btn btn-outline-success" onClick={renderPayPalButtons}>
                Execute Order
            </button>
            <br />
            <br />
            <PayPalButtons ppConfig={ppConfig} fundingSources={['paypal']} />
        </>
    )
}

export default withOperations(PPCheckout, _operations)
