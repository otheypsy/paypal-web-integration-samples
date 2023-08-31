import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'

const { log, error } = createLoggers('Find.component.jsx')

const _operations = {
    find: {
        label: 'gateway.customer.find()',
        type: 'server',
        data: {
            args: ['178397526'],
        },
    },
}

const Find = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const findCustomer = async () => {
        addBusy()
        try {
            const response = await serverInterface('customer', 'find', props.operations.find.data.args, {})
            log('findCustomer', response)
            addOutput('FindCustomer', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={findCustomer}>
            Find Customer
        </button>
    )
}

export default withOperations(Find, _operations)
