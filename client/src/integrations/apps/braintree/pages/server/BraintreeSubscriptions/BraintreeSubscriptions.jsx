import React, {useContext, useState} from 'react';
import BraintreeService from '../../../services/BraintreeService';
import { InputText } from 'pp-framework-react';
import OutputContext from "../../../../../context/OutputContext";
import BusyContext from "../../../../../context/BusyContext";

const plan = {
    id: 'j2nw',
};

const cart = {
    paypal: {
        flow: 'vault',
        billingAgreementDescription: 'Braintree Test Vault - odesai',
        enableShippingAddress: true,
        shippingAddressEditable: false,
        shippingAddressOverride: {
            recipientName: 'John Doe',
            line1: '1234 Main St.',
            line2: 'Unit 1',
            city: 'Chicago',
            countryCode: 'US',
            postalCode: '60652',
            state: 'IL',
            phone: '123.456.7890'
        }
    }
};

const BraintreeSubscriptions = (props) => {

    const busyContext = useContext(BusyContext);
    const outputContext = useContext(OutputContext);
    const [planID, setPlanID] = useState('j2nw');
    const [paymentToken, setPaymentToken] = useState('4nz3m4w');

    const createSubscription = async () => {
        busyContext.addBusy('btSubscriptions');
        outputContext.addOutput({
            label: 'CreateSubscription',
            content: await BraintreeService.subscription.create(props.route.data.integration, planID, paymentToken)
        });
        busyContext.removeBusy('btSubscriptions');
    };

    return (
        <React.Fragment>
            <h3>Braintree - Subscriptions</h3>
            <hr />
            <br />
            <InputText
                label="Plan ID"
                placeholder="Enter plan ID"
                value={planID}
                onChange={setPlanID}
            />
            <InputText
                label="Payment Method Token"
                placeholder="Enter payment token"
                value={paymentToken}
                onChange={setPaymentToken}
            />
            <br />
            <button
                className="btn btn-outline-success"
                onClick={createSubscription}>
                Create Subscription
            </button>
        </React.Fragment>
    )

};

export default BraintreeSubscriptions;
