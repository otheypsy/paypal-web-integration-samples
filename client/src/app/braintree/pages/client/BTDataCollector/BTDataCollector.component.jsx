import { useEffect } from 'react'
import withOperations from '../../../../../layouts/withOperations.component.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../states/Error/error.hooks.jsx'
import { useAppContext, useAddAppContext } from '../../../../../states/AppContext/appContext.hooks.jsx'
import { clientInterface } from '../../../../../services/bt.service.jsx'
import createLoggers from '../../../../../utils/logger.utils.jsx'

const { log, error } = createLoggers('BTDataCollector.component.jsx')

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

const BTDataCollector = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const addAppContext = useAddAppContext()

    useEffect(() => {
        const initOperation = () => {
            if (
                props.operations.createDataCollector.data.options.client !==
                _operations.createDataCollector.data.options.client
            )
                return null
            const newData = props.operations.createDataCollector.data
            newData.options.client = appContext.clientInstance
            props.updateOperation('createDataCollector', newData)
        }
        appContext.clientInstance && initOperation()
    }, [props, appContext.clientInstance])

    const createDataCollector = async () => {
        addBusy()
        try {
            console.log(props.operations.createDataCollector.data.options)
            const dcInstance = await clientInterface('DataCollector', props.operations.createDataCollector.data.options)
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
        <button className="btn btn-outline-success" onClick={createDataCollector}>
            Create DC Instance
        </button>
    )
}

export default withOperations(BTDataCollector, _operations, ['clientInstance'])
