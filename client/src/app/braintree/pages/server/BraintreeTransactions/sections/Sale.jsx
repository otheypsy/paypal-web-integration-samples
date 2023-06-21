import React, { useState, useContext } from 'react'
import { OutputJson } from 'pp-framework-react'
import BraintreeTransactionsService from '../../../../services/BraintreeTransactionsService.jsx'
import AppContext from '../../../../../../context/AppContext'
import BusyContext from '../../../../../../context/BusyContext'
import OutputContext from '../../../../../../context/OutputContext'

const _parameters = {
    paymentMethodNonce: 'fake-valid-nonce',
    //deviceData: 'DEVICE_DATA_STRING',
    amount: 100,
    orderId: 'odesai-' + Date.now(),
    options: {
        submitForSettlement: true,
    },
}

const Sale = (props) => {
    const braintreeContext = useContext(AppContext)
    const busyContext = useContext(BusyContext)
    const [parameters, setParameters] = useState(_parameters)

    const createTransaction = async () => {
        busyContext.add()
        const response = await BraintreeTransactionsService.sale({
            ...parameters,
            paymentMethodNonce: braintreeContext.context.payload
                ? braintreeContext.context.payload?.nonce
                : 'fake-valid-nonce',
            //deviceData: braintreeContext.context.deviceData
        })
        console.log(response)
        busyContext.remove()
        props.onOutput(response, 'TransactionSale')
    }

    const onChangeParameters = (value) => setParameters(value)

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Parameters</h5>
                    <OutputJson src={parameters} isEditable={true} onChange={onChangeParameters} />
                    <br />
                    <br />
                    <h5>Current Payload</h5>
                    <OutputJson src={braintreeContext.context.payload || {}} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={createTransaction}>
                        Create
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sale
