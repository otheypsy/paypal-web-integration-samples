import React, { useState, useEffect, useContext } from 'react';
import { Card, OutputJson } from 'pp-framework-react';
import PayPalOrdersService from "../services/PayPalOrdersService";
import AppService from "../../../services/AppService";
import OutputContext from "../../../context/OutputContext";
import BusyContext from "../../../context/BusyContext";

const PayPalCheckoutDCC = () => {

    const [order, ] = useState({
        intent: 'CAPTURE',
        purchase_units: [
            {
                reference_id: 'PUHF',
                description: 'Sporting Goods',
                invoice_id: 'INV-HighFashions-' + Math.round((new Date()).getTime() / 1000),
                custom_id: 'CUST-HighFashions',
                soft_descriptor: 'HighFashions',
                amount: {
                    currency_code: 'USD',
                    value: '220.00',
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: '180.00'
                        },
                        shipping: {
                            currency_code: 'USD',
                            value: '20.00'
                        },
                        handling: {
                            currency_code: 'USD',
                            value: '10.00'
                        },
                        tax_total: {
                            currency_code: 'USD',
                            value: '20.00'
                        },
                        shipping_discount: {
                            currency_code: 'USD',
                            value: '5.00'
                        },
                        discount: {
                            currency_code: 'USD',
                            value: '5.00'
                        }
                    }
                },
                items: [
                    {
                        name: 'T-Shirt',
                        description: 'Green XL',
                        sku: 'sku01',
                        unit_amount: {
                            currency_code: 'USD',
                            value: '90.00'
                        },
                        tax: {
                            currency_code: 'USD',
                            value: '10.00'
                        },
                        quantity: '1',
                        category: 'PHYSICAL_GOODS'
                    },
                    {
                        name: 'Shoes',
                        description: 'Running, Size 10.5',
                        sku: 'sku02',
                        unit_amount: {
                            currency_code: 'USD',
                            value: '45.00'
                        },
                        tax: {
                            currency_code: 'USD',
                            value: '5.00'
                        },
                        quantity: '2',
                        category: 'PHYSICAL_GOODS'
                    }
                ]
            }
        ]
    });
    const [hostedFieldsInstance, setHostedFieldsInstance] = useState({});
    const outputContext = useContext(OutputContext);
    const busyContext = useContext(BusyContext);

    useEffect(() => {
        initialize().then()
    }, []);

    const initialize = async () => {
        const paypal = await AppService.scripts.paypal.jsv5({}, {
            'data-client-token': '12345'
        });
        if(paypal.hasOwnProperty('isEligible') && paypal.HostedFields.isEligible()) {
            renderPayPalHostedFields(paypal);
        }
        else {
            document.getElementById('paypalHostedFields').style.display = 'none';
            AppService.logger.error('Not eligible for PayPal Hosted Fields');
        }
    }

    const renderPayPalHostedFields = (paypal) => {
        paypal.HostedFields.render({
            createOrder: function () {return "order-ID";}, // replace order-ID with the order ID
            styles: {
                'input': {
                    'font-size': '17px',
                    'font-family': 'helvetica, tahoma, calibri, sans-serif',
                    'color': '#3a3a3a'
                },
                ':focus': {
                    'color': 'black'
                }
            },
            fields: {
                number: {
                    selector: '#card-number',
                    placeholder: 'card number'
                },
                cvv: {
                    selector: '#cvv',
                    placeholder: 'card security number'
                },
                expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'mm/yy'
                }
            }
        }).then((hostedFields) => setHostedFieldsInstance(hostedFields));
    }

    const onSubmit = () => {
        busyContext.addBusy('paypalHostedFields');
        hostedFieldsInstance.submit({
            // Cardholder Name
            cardholderName: document.getElementById('card-holder-name').value,
            // Billing Address
            billingAddress: {
                streetAddress: document.getElementById('card-billing-address-street').value,      // address_line_1 - street
                extendedAddress: document.getElementById('card-billing-address-unit').value,       // address_line_2 - unit
                region: document.getElementById('card-billing-address-state').value,           // admin_area_1 - state
                locality: document.getElementById('card-billing-address-city').value,          // admin_area_2 - town / city
                postalCode: document.getElementById('card-billing-address-zip').value,           // postal_code - postal_code
                countryCodeAlpha2: document.getElementById('card-billing-address-country').value   // country_code - country
            }
        });
    };

    return (
        <React.Fragment>
            <h3>PayPal Checkout - Advance Payments</h3>
            <hr />
            <Card>
                <div id="paypalCheckoutDiv" />
                <div id="paypalHostedFields">
                    <div align="center"> -- OR -- </div>
                    <div>
                        <label htmlFor='cardNumber'>Card Number</label>
                        <div id="cardNumber" className="cardField" />
                    </div>
                    <div>
                        <label htmlFor='expirationDate'>Expiration Date</label>
                        <div id="expirationDate" className="cardField" />
                    </div>
                    <div>
                        <label htmlFor='cvv'>CVV</label>
                        <div id="cvv" className='card_field' />
                    </div>
                    <label htmlFor='card-holder-name'>Name on Card</label>
                    <input type='text' id='card-holder-name' name='card-holder-name' autoComplete='off' placeholder='card holder name'/>
                    <div>
                        <label htmlFor='card-billing-address-street'>Billing Address</label>
                        <input type='text' id='card-billing-address-street' name='card-billing-address-street' autoComplete='off' placeholder='street address'/>
                    </div>
                    <div>
                        <label htmlFor='card-billing-address-unit'>&nbsp;</label>
                        <input type='text' id='card-billing-address-unit' name='card-billing-address-unit' autoComplete='off' placeholder='unit'/>
                    </div>
                    <div>
                        <input type='text' id='card-billing-address-city' name='card-billing-address-city' autoComplete='off' placeholder='city'/>
                    </div>
                    <div>
                        <input type='text' id='card-billing-address-state' name='card-billing-address-state' autoComplete='off' placeholder='state'/>
                    </div>
                    <div>
                        <input type='text' id='card-billing-address-zip' name='card-billing-address-zip' autoComplete='off' placeholder='zip / postal code'/>
                    </div>
                    <div>
                        <input type='text' id='card-billing-address-country' name='card-billing-address-country' autoComplete='off' placeholder='country code'/>
                    </div>
                    <br /><br />
                    <button value='submit' id='submit' className='btn'>Pay</button>
                </div>
            </Card>
            <br />
            <OutputJson content={order} />
        </React.Fragment>
    )

};

export default PayPalCheckoutDCC;
