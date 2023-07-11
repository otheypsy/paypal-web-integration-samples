import { useState } from 'react'
import { OutputJson } from '../../../../../../lib/components/export.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const _parameters = {
    deviceData: 'DEVICE_DATA_STRING',
    paymentMethodToken: 'fvhnzw2',
    customerId: '163715306',
    amount: 100,
    orderId: 'odesai-' + Date.now(),
    options: {
        submitForSettlement: true,
    },
}

const Sale = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const [parameters, setParameters] = useState(_parameters)

    const createTransaction = async () => {
        addBusy()
        const response = await BraintreeTransactionsService.sale(props.integration, {
            ...parameters,
            deviceData: braintreeContext.context.deviceData,
        })
        removeBusy()
        addOutput(response, 'VaultPayment')
    }

    const onChangeParameters = (value) => setParameters(value)

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <OutputJson src={parameters} isEditable={true} onChange={onChangeParameters} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={createTransaction}>
                        Create
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sale
