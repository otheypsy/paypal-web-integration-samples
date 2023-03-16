import React, { useContext, useState } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeVaultService from '../../../../services/BraintreeVaultService';
import BraintreeTransactionsService from "../../../../services/BraintreeTransactionsService";
import AppContext from "../../../../../../context/AppContext";
import BusyContext from "../../../../../../context/BusyContext";
import OutputContext from "../../../../../../context/OutputContext";

const _parameters = {
    deviceData: 'DEVICE_DATA_STRING',
    paymentMethodToken: 'fvhnzw2',
    customerId: '163715306',
    amount: 100,
    orderId: 'odesai-' + Date.now(),
    options: {
        submitForSettlement: true
    }
}

const Sale = (props) => {

    const braintreeContext = useContext(AppContext)
    const busyContext = useContext(BusyContext);
    const [parameters, setParameters] = useState(_parameters);

    const createTransaction = async () => {
        busyContext.addBusy('btVaultPayment');
        const response = await BraintreeTransactionsService.sale(props.integration, {
            ...parameters,
            deviceData: braintreeContext.context.deviceData
        });
        busyContext.removeBusy('btVaultPayment');
        props.onOutput(response, 'VaultPayment');
    };

    const onChangeParameters = (value) => setParameters(value);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <OutputJson
                        content={parameters}
                        isEditable={true}
                        onChange={onChangeParameters}
                    />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-outline-success"
                        onClick={createTransaction}>
                        Create
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Sale;
