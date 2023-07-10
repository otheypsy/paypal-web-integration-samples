import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import BTPayPalCheckout from 'braintree-web/paypal-checkout'
import withOperations from '../../../../../../layouts/withOperations.component.jsx'
import { log, danger } from '../../../../../../integrations/services/LoggerService.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const _operations = {
    paypalCheckoutCreate: {
        label: 'braintree-web.paypalCheckout.create(options, callback)',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE',
                autoSetDataUserIdToken: true,
            },
        },
    },
    loadPayPalSDK: {
        label: 'paypalCheckoutInstance.loadPayPalSDK(options, callback)',
        type: 'client',
        data: {
            options: {
                currency: 'USD',
                intent: 'capture',
                'disable-funding': 'card',
                dataAttributes: {
                    amount: '100.00',
                    commit: true,
                },
            },
        },
    },
    renderPayPalButtons: {
        label: 'window.paypal.Buttons(config).render',
        type: 'client',
        data: {
            config: {
                style: {
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'rect',
                    label: 'paypal',
                    tagline: false,
                },
            },
        },
    },
    createPayment: {
        label: 'paypalCheckoutInstance.createPayment(options, callback)',
        type: 'client',
        data: {
            options: {
                flow: 'checkout',
                intent: 'capture',
                amount: '100.00',
                currency: 'USD',
                enableShippingAddress: true,
                shippingAddressEditable: true,
            },
        },
    },
    tokenizePayment: {
        label: 'paypalCheckoutInstance.tokenizePayment(tokenizeOptions, callback)',
        type: 'client',
        data: {
            tokenizeOptions: {},
        },
    },
    transactionSale: {
        label: 'gateway.transaction.sale(parameters, callback)',
        type: 'server',
        data: {
            parameters: {
                amount: '100.00',
                merchantAccountId: 'odesai_USD',
                paymentMethodNonce: 'NONCE_HERE',
                deviceData: 'DEVICE_DATA_HERE',
                options: {
                    submitForSettlement: true,
                },
            },
        },
    },
}

const PayPalReact = {
    Component: () => null,
}

const ReturningCustomer = (props) => {
    const ppContainer = useRef()
    const [ppInstance, setPPInstance] = useState(undefined)
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()

    const createPayPalInstance = async () => {
        addBusy()
        try {
            const response = await BTPayPalCheckout.create({
                ...props.operations.paypalCheckoutCreate.data.options,
                client: appContext['clientInstance'],
            })
            log('ReturningCustomer: createPayPalInstance', response)
            setPPInstance(response)
        } catch (error) {
            setError()
            danger('ReturningCustomer: createPayPalInstance', error)
        }
        removeBusy()
    }

    const loadPayPalSDK = async () => {
        addBusy()
        await ppInstance.loadPayPalSDK(props.operations.loadPayPalSDK.data.options)
        removeBusy()
    }

    const renderPayPalButtons = async () => {
        addBusy()
        await window.paypal
            .Buttons({
                ...props.operations.renderPayPalButtons.data.config,
                createOrder: createOrder,
                onApprove: onApprove,
                onClick: () => console.log('PayPalCheckout: onClick'),
                onInit: () => console.log('PayPalCheckout: onInit'),
                onCancel: (error) => console.error('PayPalCheckout: onCancel', error),
                onError: (error) => console.error('PayPalCheckout: onError', error),
            })
            .render(ppContainer.current)
        removeBusy()
    }

    const createOrder = async () => {
        let response = undefined
        addBusy()
        try {
            response = await ppInstance.createPayment(props.operations.createPayment.data.options)
            log('ReturningCustomer: createOrder', response)
        } catch (error) {
            danger('ReturningCustomer: onApprove', error)
        }
        removeBusy()
        return response
    }

    const onApprove = async (data) => {
        addBusy()
        try {
            const response = await ppInstance.tokenizePayment(data)
            log('ReturningCustomer: onApprove', response)
            addOutput('Payload', response)
        } catch (error) {
            danger('ReturningCustomer: onApprove', error)
        }
        removeBusy()
    }

    const ppConfig = {
        ...props.operations.renderPayPalButtons.data.config,
        createOrder: createOrder,
        onApprove: onApprove,
        onClick: () => console.log('PayPalCheckout: onClick'),
        onInit: () => console.log('PayPalCheckout: onInit'),
        onCancel: (error) => console.error('PayPalCheckout: onCancel', error),
        onError: (error) => console.error('PayPalCheckout: onError', error),
    }

    const createTransaction = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'transaction',
                'sale',
                [],
                props.operations.transactionSale.data.parameters,
            )
            log('ReturningCustomer: createTransaction', response)
            addOutput('Transaction', response)
        } catch (error) {
            danger('ReturningCustomer: onApprove', error)
        }
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={createPayPalInstance}>
                Create PayPal Instance
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={loadPayPalSDK}>
                Load PayPal JS SDK
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={renderPayPalButtons}>
                Render PayPal Buttons
            </button>
            <br />
            <br />
            <div ref={ppContainer} />
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={createTransaction}>
                Create Transaction
            </button>
            <br />
            <br />
            <PayPalReact.Component {...ppConfig} />
        </>
    )
}

ReturningCustomer.propTypes = {
    operations: PropTypes.object,
}

export default withOperations(ReturningCustomer, _operations)
