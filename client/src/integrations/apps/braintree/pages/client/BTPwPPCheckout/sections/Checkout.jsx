import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import BTPayPalCheckout from 'braintree-web/paypal-checkout'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import { serverInterface } from '../../../../services/BraintreeInterface'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { useAppContext } from '../../../../../../states/AppContext/AppContextHooks'
import { log, warning, danger } from '../../../../../../services/LoggerService'

const _operations = {
    paypalCheckoutCreate: {
        label: 'braintree-web.paypalCheckout.create(options, callback)',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE',
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
                options: {
                    submitForSettlement: true,
                },
            },
        },
    },
}

const _requiredContext = ['clientInstance']

const Checkout = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const ppContainer = useRef()
    const [ppInstance, setPPInstance] = useState(undefined)
    const [nonce, setNonce] = useState(undefined)

    const createPayPalInstance = async () => {
        addBusy()
        try {
            const response = await BTPayPalCheckout.create({
                client: appContext.clientInstance,
            })
            log('Checkout: createPayPalInstance', response)
            setPPInstance(response)
        } catch (error) {
            setError()
            danger('NewCustomer: createPayPalInstance', error)
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
        try {
            if (!window?.paypal?.Buttons) throw Error('PayPal JS SDK not found')
            const ppConfig = createPayPalPConfig()
            ppContainer.current.innerHTML = null
            await window.paypal.Buttons(ppConfig).render(ppContainer.current)
        } catch (error) {
            setError()
            danger('NewCustomer: renderPayPalButtons', error)
        }
        removeBusy()
    }

    const createPayPalPConfig = () => {
        return {
            ...props.operations.renderPayPalButtons.data.config,
            fundingSource: window.paypal.FUNDING.PAYPAL,

            createOrder: async () => {
                addBusy()
                let response = undefined
                try {
                    response = await ppInstance.createPayment(props.operations.createPayment.data.options)
                    log('PayPalCheckout: createOrder', response)
                } catch (error) {
                    setError()
                    danger('PayPalCheckout: createOrder', error)
                }
                removeBusy()
                return response
            },

            onApprove: async (data) => {
                addBusy()
                try {
                    log('PayPalCheckout: onApprove', data)
                    const response = await ppInstance.tokenizePayment(data)
                    log('PayPalCheckout: tokenizePayment', response)
                    addOutput('TokenizePayment', response)
                    setNonce(response.nonce)
                } catch (error) {
                    setError()
                    danger('PayPalCheckout: onApprove', error)
                }
                removeBusy()
            },

            onClick: (...args) => log('PayPalCheckout: onClick', { ...args }),
            onInit: (...args) => log('PayPalCheckout: onInit', { ...args }),
            onCancel: (error) => warning('PayPalCheckout: onCancel', error),
            onError: (error) => danger('PayPalCheckout: onError', error),
        }
    }

    const createTransaction = async () => {
        addBusy()
        try {
            const params = {
                ...props.operations.transactionSale.data.parameters,
                paymentMethodNonce: nonce,
            }
            const response = await serverInterface('transaction', 'sale', [], params)
            log('Checkout: createTransaction', response)
            addOutput('TransactionSale', response)
        } catch (error) {
            setError()
            danger('Checkout: createTransaction', error)
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
        </>
    )
}

Checkout.propTypes = {
    operations: PropTypes.object,
}

export default withSDKOperations(Checkout, _operations, _requiredContext)
