import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import BTPayPalCheckout from 'braintree-web/paypal-checkout'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import { log, danger } from '../../../../../../integrations/services/LoggerService.jsx'

const _timestamp = Date.now()

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
                requestBillingAgreement: true,
                billingAgreementDetails: {
                    description: 'Braintree PwPP - Checkout + Vault - ' + _timestamp,
                },
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

const _requiredContext = ['clientInstance', 'deviceData']

const NewCustomer = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const ppContainer = useRef()
    const [ppInstance, setPPInstance] = useState('')
    const [nonce, setNonce] = useState('')

    const createPayPalInstance = async () => {
        addBusy()
        try {
            const response = await BTPayPalCheckout.create({
                client: appContext.clientInstance,
            })
            log('NewCustomer', response)
            addOutput('PayPalInstance', response)
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
            await window.paypal
                .Buttons({
                    ...props.operations.renderPayPalButtons.data.config,
                    fundingSource: window.paypal.FUNDING.PAYPAL,
                    createOrder: createOrder,
                    onApprove: onApprove,
                    onClick: () => console.log('PayPalCheckout: onClick'),
                    onInit: () => console.log('PayPalCheckout: onInit'),
                    onCancel: (error) => console.error('PayPalCheckout: onCancel', error),
                    onError: (error) => console.error('PayPalCheckout: onError', error),
                })
                .render(ppContainer.current)
        } catch (error) {
            setError()
            danger('NewCustomer: renderPayPalButtons', error)
        }
        removeBusy()
    }

    const createOrder = async () => {
        addBusy()
        try {
            const response = await ppInstance.createPayment(props.operations.createPayment.data.options)
            log('PayPalCheckout: createOrder', response)
            return response
        } catch (error) {
            setError()
            danger('PayPalCheckout: createOrder', error)
        }
        removeBusy()
        return undefined
    }

    const onApprove = async (data) => {
        addBusy()
        try {
            log('PayPalCheckout: onApprove', data)
            const response = await ppInstance.tokenizePayment(data)
            log('NewCustomer: tokenizePayment', response)
            addOutput('PayPalCheckout: onApprove', response)
            setNonce(response.nonce)
        } catch (error) {
            setError()
            danger('PayPalCheckout: onApprove', error)
        }
        removeBusy()
    }

    const createTransaction = async () => {
        addBusy()
        try {
            const params = {
                ...props.operations.transactionSale.data.parameters,
                paymentMethodNonce: nonce,
                deviceData: appContext.get('dataCollectorInstance'),
            }
            const response = await serverInterface('transaction', 'sale', [], params)
            log('NewCustomer: createTransaction', response)
            addOutput('TransactionSale', response)
        } catch (error) {
            setError()
            danger('NewCustomer: createTransaction', error)
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

NewCustomer.propTypes = {
    operations: PropTypes.object,
}

export default withOperations(NewCustomer, _operations, _requiredContext)
