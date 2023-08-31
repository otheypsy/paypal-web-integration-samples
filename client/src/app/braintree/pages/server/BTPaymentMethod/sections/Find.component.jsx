import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'

const { log, error } = createLoggers('Find.component.jsx')

const _operations = {
    find: {
        label: 'gateway.paymentMethod.find()',
        type: 'server',
        data: {
            args: ['fvhnzw2'],
        },
    },
}

const Find = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const findPMT = async () => {
        addBusy()
        try {
            const response = await serverInterface('paymentMethod', 'find', props.operations.find.data.args, {})
            log('findPMT', response)
            addOutput('FindPMT', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={findPMT}>
            Find PMT
        </button>
    )
}

export default withOperations(Find, _operations)
