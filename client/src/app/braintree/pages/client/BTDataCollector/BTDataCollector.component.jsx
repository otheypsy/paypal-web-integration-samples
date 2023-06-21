import PropTypes from 'prop-types'
import withSDKOperations from '../../../layouts/withSDKOperations.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../states/Error/error.hooks.jsx'
import { useAppContext, useAddAppContext } from '../../../../../states/AppContext/appContext.hooks.jsx'
import { log, danger } from '../../../../../integrations/services/LoggerService.jsx'
import { clientInterface } from '../../../services/BraintreeInterface.jsx'

const _operations = {
    dataCollectorCreate: {
        label: 'braintree-web.dataCollector.create()',
        type: 'client',
        data: {
            options: {
                client: 'BT_CLIENT_INSTANCE',
                kount: true,
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

    const createDataCollector = async () => {
        addBusy()
        try {
            const dcInstance = await clientInterface('DataCollector', {
                ...props.operations.dataCollectorCreate.data.options,
                client: appContext['clientInstance'],
            })
            log('DataCollectorAll: createDataCollector', dcInstance)
            addOutput('DataCollector', dcInstance)
            if (dcInstance) addAppContext('dcInstance', dcInstance)
        } catch (error) {
            setError()
            danger('DataCollectorAll: createDataCollector', error)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createDataCollector}>
            Create DC Instance
        </button>
    )
}

BTDataCollector.propTypes = {
    operations: PropTypes.object,
}

export default withSDKOperations(BTDataCollector, _operations, ['clientInstance'])
