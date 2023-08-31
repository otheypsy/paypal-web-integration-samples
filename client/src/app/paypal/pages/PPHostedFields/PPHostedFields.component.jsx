import { useState, useEffect } from 'react'
import { Card, OutputJson } from '../../../../lib/components/export.jsx'
import AppService from '../../../../services/app.service.jsx'
import createLoggers from '../../../../utils/logger.utils.jsx'
import withOperations from '../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../states/Busy/busy.hooks.jsx'

const { log, error } = createLoggers('PPHostedFields.component.jsx')

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

const PPHostedFields = () => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const [order] = useState({
        intent: 'CAPTURE',
        purchase_units: [
            {
                invoice_id: 'INV-' + Math.round(new Date().getTime() / 1000),
                soft_descriptor: 'CustomDescriptor',
                amount: {
                    currency_code: 'USD',
                    value: '220.00',
                },
            },
        ],
    })
    const [hostedFieldsInstance, setHostedFieldsInstance] = useState({})

    useEffect(() => {
        const initialize = async () => {
            const paypal = await AppService.scripts.paypal.jsv5(
                {},
                {
                    'data-client-token': '12345',
                },
            )
            if (paypal?.HostedFields?.isEligible()) {
                renderPayPalHostedFields(paypal)
            } else {
                document.getElementById('paypalHostedFields').style.display = 'none'
                AppService.logger.error('Not eligible for PayPal Hosted Fields')
            }
        }
        initialize().then()
    }, [])

    const renderPayPalHostedFields = (paypal) => {
        paypal.HostedFields.render({
            createOrder: function () {
                return 'order-ID'
            }, // replace order-ID with the order ID
            styles: {
                input: {
                    'font-size': '17px',
                    'font-family': 'helvetica, tahoma, calibri, sans-serif',
                    color: '#3a3a3a',
                },
                ':focus': {
                    color: 'black',
                },
            },
            fields: {
                number: {
                    selector: '#card-number',
                    placeholder: 'card number',
                },
                cvv: {
                    selector: '#cvv',
                    placeholder: 'card security number',
                },
                expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'mm/yy',
                },
            },
        }).then((hostedFields) => setHostedFieldsInstance(hostedFields))
    }

    const onSubmit = async () => {
        addBusy()
        try {
            const response = await hostedFieldsInstance.submit({
                // Cardholder Name
                cardholderName: document.getElementById('card-holder-name').value,
                // Billing Address
                billingAddress: {
                    streetAddress: document.getElementById('card-billing-address-street').value, // address_line_1 - street
                    extendedAddress: document.getElementById('card-billing-address-unit').value, // address_line_2 - unit
                    region: document.getElementById('card-billing-address-state').value, // admin_area_1 - state
                    locality: document.getElementById('card-billing-address-city').value, // admin_area_2 - town / city
                    postalCode: document.getElementById('card-billing-address-zip').value, // postal_code - postal_code
                    countryCodeAlpha2: document.getElementById('card-billing-address-country').value, // country_code - country
                },
            })
            log('onSubmit', response)
        } catch (e) {
            error(e)
        }
        removeBusy()
    }

    return (
        <>
            <h3>PayPal Checkout - Advance Payments</h3>
            <hr />
            <Card>
                <div id="paypalCheckoutDiv" />
                <div id="paypalHostedFields">
                    <div> -- OR -- </div>
                    <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <div id="cardNumber" className="cardField" />
                    </div>
                    <div>
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <div id="expirationDate" className="cardField" />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV</label>
                        <div id="cvv" className="card_field" />
                    </div>
                    <label htmlFor="card-holder-name">Name on Card</label>
                    <input
                        type="text"
                        id="card-holder-name"
                        name="card-holder-name"
                        autoComplete="off"
                        placeholder="card holder name"
                    />
                    <div>
                        <label htmlFor="card-billing-address-street">Billing Address</label>
                        <input
                            type="text"
                            id="card-billing-address-street"
                            name="card-billing-address-street"
                            autoComplete="off"
                            placeholder="street address"
                        />
                    </div>
                    <div>
                        <label htmlFor="card-billing-address-unit">&nbsp;</label>
                        <input
                            type="text"
                            id="card-billing-address-unit"
                            name="card-billing-address-unit"
                            autoComplete="off"
                            placeholder="unit"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="card-billing-address-city"
                            name="card-billing-address-city"
                            autoComplete="off"
                            placeholder="city"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="card-billing-address-state"
                            name="card-billing-address-state"
                            autoComplete="off"
                            placeholder="state"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="card-billing-address-zip"
                            name="card-billing-address-zip"
                            autoComplete="off"
                            placeholder="zip / postal code"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="card-billing-address-country"
                            name="card-billing-address-country"
                            autoComplete="off"
                            placeholder="country code"
                        />
                    </div>
                    <br />
                    <br />
                    <button value="submit" id="submit" className="btn" onClick={onSubmit}>
                        Pay
                    </button>
                </div>
            </Card>
            <br />
            <OutputJson content={order} />
        </>
    )
}

export default withOperations(PPHostedFields, _operations)
