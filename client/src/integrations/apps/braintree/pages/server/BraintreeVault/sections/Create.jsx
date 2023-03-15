import React, { useContext, useState } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeVaultService from '../../../../services/BraintreeVaultService';
import BraintreeService from "../../../../services/BraintreeService";
import AppContext from "../../../../../../context/AppContext";
import BusyContext from "../../../../../../context/BusyContext";
import OutputContext from "../../../../../../context/OutputContext";

const _parameters = {
    paymentMethodNonce: 'PAYLOAD_NONCE',
    deviceData: 'DEVICE_DATA_STRING',
    customerId: '178397526',
    billingAddress: {
        firstName: 'Jill',
        lastName: 'Doe',
        streetAddress: '555 Smith St.',
        extendedAddress: '#5',
        locality: 'Oakland',
        region: 'CA',
        postalCode: '12345',
        countryCodeAlpha2: 'US'
    }
}

const Create = (props) => {

    const braintreeContext = useContext(AppContext);
    const busyContext = useContext(BusyContext);
    const [parameters, setParameters] = useState(_parameters);

    const createVault = async () => {
        busyContext.addBusy('btVaultCreate');
        const response = await BraintreeVaultService.create(props.integration, {
            ...parameters,
            paymentMethodNonce: braintreeContext.context.payload.nonce,
            deviceData: await BraintreeService.dataCollector.getDeviceData(braintreeContext.context.dataCollectorInstance)
        });
        busyContext.removeBusy('btVaultCreate');
        props.onOutput(response, 'VaultCreate');
    };

    const onChangeParameters = (value) => setParameters(value);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Parameters</h5>
                    <OutputJson
                        content={parameters}
                        isEditable={true}
                        onChange={onChangeParameters}
                    />
                    <br /><br />
                    <h5>Current Payload</h5>
                    <OutputJson content={braintreeContext.context.payload} />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-outline-success"
                        onClick={createVault}>
                        Create
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Create;
