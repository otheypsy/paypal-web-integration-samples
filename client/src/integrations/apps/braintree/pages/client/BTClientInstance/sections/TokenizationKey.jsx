import PropTypes from 'prop-types'
import BTClient from 'braintree-web/client'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import { log, danger } from '../../../../../../services/LoggerService'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'
import { useAddAppContext } from '../../../../../../states/AppContext/AppContextHooks'

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
            console.log()
            const clientInstance = await BTClient.create(props.operations.clientCreate.data.options)
            log('TokenizationKey: createClientInstance', clientInstance)
            addOutput('ClientInstance', clientInstance)
            if (clientInstance) addAppContext('clientInstance', clientInstance)
        } catch (error) {
            setError()
            danger('TokenizationKey: createClientInstance', error)
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
