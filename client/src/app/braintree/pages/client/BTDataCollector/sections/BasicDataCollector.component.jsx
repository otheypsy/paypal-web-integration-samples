import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAppContext, useAddAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import { clientInterface } from '../../../../../../services/bt.service.jsx'
import createLoggers from '../../../../../../utils/logger.utils.jsx'

const { log, error } = createLoggers('BasicDataCollector.component.jsx')

const _operations = {
    createDataCollector: {
        label: 'braintree-web.dataCollector.create()',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE',
                paypal: true,
            },
        },
    },
}

const BasicDataCollector = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const addAppContext = useAddAppContext()

    const populateClientInstance = () => {
        if (!appContext.clientInstance) return null
        const newData = props.operations.createDataCollector.data
        newData.options.client = appContext.clientInstance
        props.updateOperation('createDataCollector', newData)
    }

    const createDataCollector = async () => {
        addBusy()
        try {
            const dcInstance = await clientInterface('DataCollector', {
                ...props.operations.createDataCollector.data.options,
                client: appContext.clientInstance,
            })
            log('createDataCollector', dcInstance)
            addOutput('DataCollector', dcInstance)
            if (dcInstance) addAppContext('dcInstance', dcInstance)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={populateClientInstance}>
                Populate Client Instance
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={createDataCollector}>
                Create DC Instance
            </button>
        </>
    )
}

export default withOperations(BasicDataCollector, _operations, ['clientInstance'])
