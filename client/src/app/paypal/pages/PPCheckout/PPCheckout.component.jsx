import { useState, useRef } from 'react'
import withOperations from '../../../../layouts/withOperations.component.jsx'
import PayPalOrdersService from '../../services/PayPalOrdersService.jsx'
import { Card, OutputJson, BusyIndicator } from '../../../../lib/components/export.jsx'
import createLoggers from '../../../../utils/logger.utils.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../states/Error/error.hooks.jsx'
import { useAddAppContext } from '../../../../states/AppContext/appContext.hooks.jsx'
import { loadPPScript } from '../../../../services/paypal.service.jsx'

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
    const addOutput = useAddOutput()
    const setError = useSetError()
    const addAppContext = useAddAppContext()

    const ppContainer = useRef(undefined)

    const [order] = useState()

    const renderPayPalButtons = () => {
        setIsBusy(true)
        if (!window.hasOwnProperty('PP') || !window.PP.hasOwnProperty('paypal'))
            return console.error('Unable to load PayPal Checkout SDK - JSV5')
        window.PP.paypal
            .Buttons({
                createOrder: async () => {
                    setIsBusy(true)
                    const orderData = await PayPalOrdersService.orders.create(order)
                    setResponse(orderData)
                    setIsBusy(false)
                    return orderData.id
                },

                onApprove: async (data) => {
                    setIsBusy(true)
                    const executeData = await PayPalOrdersService.orders.execute(data.orderID)
                    setResponse(executeData)
                    setIsBusy(false)
                },
            })
            .render('#paypalCheckoutDiv')
            .then(() => {
                setIsBusy(false)
            })
    }

    const loadPayPalSDK = async () => {
        addBusy()
        log(props.operations)
        const { options, dataAttributes } = props.operations.loadPayPalSDK.data
        await loadPPScript(options, dataAttributes)
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
            <div ref={ppContainer} />
        </>
    )
}

export default withOperations(PPCheckout, _operations)
