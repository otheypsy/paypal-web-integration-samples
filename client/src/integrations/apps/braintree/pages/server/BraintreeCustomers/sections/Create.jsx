import React, { useState, useContext } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeCustomersService from '../../../../services/BraintreeCustomersService';
import BraintreeService from "../../../../services/BraintreeService";
import AppContext from "../../../../../../context/AppContext";
import BusyContext from "../../../../../../context/BusyContext";
import OutputContext from "../../../../../../context/OutputContext";

const _parameters = {
    deviceData: 'DEVICE_DATA_STRING',
    paymentMethodNonce: 'PAYLOAD_NONCE',
    firstName: 'John',
    lastName: 'Doe',
    company: 'PayPal',
    email: 'email@domain.com',
    phone: '312.555.1234',
    fax: '614.555.5678',
    website: 'www.example.com'
}

const Create = () => {

    const appContext = useContext(AppContext);
    const busyContext = useContext(BusyContext);
    const outputContext = useContext(OutputContext);
    const [parameters, setParameters] = useState(_parameters);

    const createCustomer = async () => {
        busyContext.addBusy('btCustomerCreate');
        const response = await BraintreeCustomersService.create(appContext.context.integration, {
            ...parameters,
            paymentMethodNonce: appContext.context.payload && appContext.context.payload.nonce,
            deviceData: appContext.context.dataCollectorInstance && await BraintreeService.dataCollector.getDeviceData(appContext.context.dataCollectorInstance)
        });
        outputContext.addOutput({
            label: 'CreateCustomer',
            content: response
        });
        busyContext.removeBusy('btCustomerCreate');
    };

    const onChangeParameters = (value) => setParameters(value);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Parameters</h5>
                    <br />
                    <OutputJson
                        content={parameters}
                        isEditable={true}
                        onChange={onChangeParameters}
                    />
                    <br /><br />
                    <h5>Current Payload</h5>
                    <OutputJson content={appContext.context.payload} />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-outline-success"
                        onClick={createCustomer}>
                        Create
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Create;
