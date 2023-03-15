import PropTypes from 'prop-types'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { useAppContext, useAddAppContext } from '../../../../../../states/AppContext/AppContextHooks'
import { log, danger } from '../../../../../../services/LoggerService'
import BTDataCollector from 'braintree-web/data-collector'

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

const All = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const addAppContext = useAddAppContext()

    const createDataCollector = async () => {
        addBusy()
        try {
            const dcInstance = await BTDataCollector.create({
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

All.propTypes = {
    operations: PropTypes.object,
}

export default withSDKOperations(All, _operations, ['clientInstance'])
