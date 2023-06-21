import React, { useState, useEffect } from 'react'
import PayPalOrdersService from '../../services/PayPalOrdersService.jsx'
import { Card, OutputJson, BusyIndicator } from '../../../../lib/components/export.jsx'

const PayPalCheckout = () => {
    const [order] = useState({
        intent: 'CAPTURE',
        purchase_units: [
            {
                reference_id: 'PUHF',
                description: 'Sporting Goods',
                invoice_id: 'INV-HighFashions-' + Math.round(new Date().getTime() / 1000),
                custom_id: 'CUST-HighFashions',
                soft_descriptor: 'HighFashions',
                amount: {
                    currency_code: 'USD',
                    value: '220.00',
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: '180.00',
                        },
                        shipping: {
                            currency_code: 'USD',
                            value: '20.00',
                        },
                        handling: {
                            currency_code: 'USD',
                            value: '10.00',
                        },
                        tax_total: {
                            currency_code: 'USD',
                            value: '20.00',
                        },
                        shipping_discount: {
                            currency_code: 'USD',
                            value: '5.00',
                        },
                        discount: {
                            currency_code: 'USD',
                            value: '5.00',
                        },
                    },
                },
                items: [
                    {
                        name: 'T-Shirt',
                        description: 'Green XL',
                        sku: 'sku01',
                        unit_amount: {
                            currency_code: 'USD',
                            value: '90.00',
                        },
                        tax: {
                            currency_code: 'USD',
                            value: '10.00',
                        },
                        quantity: '1',
                        category: 'PHYSICAL_GOODS',
                    },
                    {
                        name: 'Shoes',
                        description: 'Running, Size 10.5',
                        sku: 'sku02',
                        unit_amount: {
                            currency_code: 'USD',
                            value: '45.00',
                        },
                        tax: {
                            currency_code: 'USD',
                            value: '5.00',
                        },
                        quantity: '2',
                        category: 'PHYSICAL_GOODS',
                    },
                ],
            },
        ],
    })
    const [response, setResponse] = useState({})
    const [isBusy, setIsBusy] = useState(false)

    useEffect(() => {
        mountPayPalSDK()
    }, [])

    const renderPayPalCheckout = () => {
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

    const mountPayPalSDK = () => {
        if (document.getElementById('pp-jsv5')) return renderPayPalCheckout()
        delete window['paypal']
        const script = document.createElement('script')
        script.src = 'https://www.paypal.com/sdk/js?client-id=sb'
        script.id = 'pp-jsv5'
        document.body.appendChild(script)
        script.onload = () => {
            window.PP = {
                paypal: window.paypal,
            }
            delete window['paypal']
            renderPayPalCheckout()
        }
    }

    return (
        <React.Fragment>
            {isBusy && <BusyIndicator />}
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card label={'Order'}>
                            <OutputJson content={order} />
                        </Card>
                        <br />
                        <div id="paypalCheckoutDiv" />
                    </div>
                    <div className="col">
                        <OutputJson content={response} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PayPalCheckout
