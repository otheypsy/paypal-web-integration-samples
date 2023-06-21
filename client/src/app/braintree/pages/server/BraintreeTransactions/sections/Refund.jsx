import React, { useContext, useState } from 'react'
import { OutputJson } from 'pp-framework-react'
import BraintreeTransactionsService from '../../../../services/BraintreeTransactionsService.jsx'
import AppContext from '../../../../../../context/AppContext'
import BusyContext from '../../../../../../context/BusyContext'
import OutputContext from '../../../../../../context/OutputContext'

const _args = {
    transactionId: '3xjxvv09',
}

const _params = {}

const Refund = (props) => {
    const braintreeContext = useContext(AppContext)
    const busyContext = useContext(BusyContext)
    const [args, setArgs] = useState(_args)
    const [params, setParams] = useState(_params)

    const refundTransaction = async () => {
        busyContext.addBusy('btTransactionRefund')
        const response = await BraintreeTransactionsService.refund(props.integration, args, params)
        busyContext.removeBusy('btTransactionRefund')
        props.onOutput(response, 'TransactionRefund')
    }

    const onChangeParams = (value) => setParams(value)
    const onChangeArgs = (value) => setArgs(value)

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Arguments</h5>
                    <OutputJson content={args} isEditable={true} onChange={onChangeArgs} />
                    <br />
                    <br />
                    <h5>Parameters</h5>
                    <OutputJson content={params} isEditable={true} onChange={onChangeParams} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={refundTransaction}>
                        Refund
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Refund
