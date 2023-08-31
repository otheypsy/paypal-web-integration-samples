import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import createLoggers from '../../../../../../utils/logger.utils.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'

const { log, error } = createLoggers('Sale.component.jsx')

const _operations = {
    createClientToken: {
        label: 'gateway.transaction.sale()',
        type: 'server',
        data: {
            parameters: {
                merchantAccountId: 'odesai_USD',
                deviceData: 'DEVICE_DATA_STRING_HERE',
                paymentMethodNonce: 'fake-valid-nonce',
                amount: 100,
                orderId: 'odesai-' + Date.now(),
                options: {
                    submitForSettlement: true,
                },
            },
        },
    },
}

const Sale = (props) => {
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
                props.operations.createClientToken.data.parameters,
            )
            log('createTransaction', response)
            addOutput('CreateTransaction', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createTransaction}>
            Create
        </button>
    )
}

export default withOperations(Sale, _operations)
