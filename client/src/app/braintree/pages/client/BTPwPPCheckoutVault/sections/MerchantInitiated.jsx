import PropTypes from 'prop-types'
import withSDKOperations from '../../../../layouts/withSDKOperations.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { log, danger } from '../../../../../../integrations/services/LoggerService.jsx'
import { serverInterface } from '../../../../services/BraintreeInterface.jsx'

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
