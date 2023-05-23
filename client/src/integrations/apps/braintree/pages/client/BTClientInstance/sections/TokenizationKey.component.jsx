import PropTypes from 'prop-types'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import createLoggers from '../../../../../../../utils/logger.utils.jsx'
import { clientInterface } from '../../../../services/BraintreeInterface'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'
import { useAddAppContext } from '../../../../../../states/AppContext/AppContextHooks'

const { log, error } = createLoggers('ClientToken.component.jsx')

const _operations = {
    clientCreate: {
        label: 'braintree-web.client.create()',
        type: 'client',
        data: {
            options: {
                authorization: 'TOKENIZATION_KEY_HERE',
            },
        },
    },
}

const TokenizationKey = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const addAppContext = useAddAppContext()

    const createClientInstance = async () => {
        addBusy()
        try {
            const clientInstance = await clientInterface('Client', props.operations.clientCreate.data.options)
            log('TokenizationKey: createClientInstance', clientInstance)
            addOutput('ClientInstance', clientInstance)
            if (clientInstance) addAppContext('clientInstance', clientInstance)
        } catch (e) {
            setError()
            error('TokenizationKey: createClientInstance', e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createClientInstance}>
            Create Client Instance
        </button>
    )
}

TokenizationKey.propTypes = {
    operations: PropTypes.object,
}
export default withSDKOperations(TokenizationKey, _operations)
