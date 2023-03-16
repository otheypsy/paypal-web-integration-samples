import PropTypes from 'prop-types'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { log, danger } from '../../../../../../services/LoggerService'
import { serverInterface } from '../../../../services/BraintreeInterface'

const _operations = {
    transactionSale: {
        label: 'gateway.transaction.sale()',
        type: 'server',
        data: {
            parameters: {
                paymentMethodToken: '4srmdjtc',
                merchantAccountId: 'odesai_USD',
                amount: '100.00',
                transactionSource: 'unscheduled',
                options: {
                    submitForSettlement: 'true',
                },
            },
        },
    },
}

const MerchantInitiated = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const createTransaction = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'transaction',
                'sale',
                [],
                props.operations.transactionSale.data.parameters,
            )
            log('MerchantInitiated: createTransaction', response)
            addOutput('MerchantInitiated', response)
        } catch (error) {
            setError()
            danger('Transaction: createTransaction', error)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createTransaction}>
            Create Transaction
        </button>
    )
}

MerchantInitiated.propTypes = {
    operations: PropTypes.object,
}

export default withSDKOperations(MerchantInitiated, _operations)
