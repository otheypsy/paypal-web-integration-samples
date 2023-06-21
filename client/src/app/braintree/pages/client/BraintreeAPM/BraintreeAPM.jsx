import React, { useState, useContext } from 'react';
import BraintreeVenmo from "../../../components/BraintreeVenmo";
import OutputContext from "../../../../../context/OutputContext";
import BraintreeContext from "../../../context/BraintreeContext";

const BraintreeAPM = (props) => {

    const braintreeContext = useContext(BraintreeContext);
    const outputContext = useContext(OutputContext);
    const [clientInstance, setClientInstance] = useState(null);

    const onClientInstance = (clientInstance) => {
        outputContext.addOutput({
            label: 'ClientInstance',
            content: clientInstance
        });
        setClientInstance(clientInstance);
        braintreeContext.dispatchContext({
            type: 'clientInstance',
            value: clientInstance
        });
    };

    const onDeviceData = (dataCollectorInstance) => {
        outputContext.addOutput({
            label: 'DeviceData',
            content: dataCollectorInstance
        });
        braintreeContext.dispatchContext({
            type: 'deviceData',
            value: dataCollectorInstance.deviceData
        });
    };

    const onPayload = async (payload) => {
        outputContext.addOutput({
            label: 'APMPayload',
            content: payload
        });
        braintreeContext.dispatchContext({
            type: 'payload',
            value: payload
        });
    };

    return (
        <React.Fragment>
            <h3>Braintree - APMs</h3>
            <hr />
            <BraintreeVenmo
                clientInstance={clientInstance}
                onPayload={onPayload}
            />
        </React.Fragment>
    )

};

export default BraintreeAPM;
