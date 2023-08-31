import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { clientInterface, serverInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAddAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const { log, error } = createLoggers('ClientToken.component.jsx')

const _operations = {
    createClientToken: {
        label: 'gateway.clientToken.generate()',
        type: 'server',
        data: {
            parameters: {
                // customerId: '839327792',
                merchantAccountId: 'odesai_USD',
            },
        },
    },
    createClientInstance: {
        label: 'braintree-web.client.create()',
        type: 'client',
        data: {
            options: {
                authorization: 'CLIENT_TOKEN_HERE',
            },
        },
    },
}

const ClientToken = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const addAppContext = useAddAppContext()

    const createClientToken = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'clientToken',
                'generate',
                [],
                props.operations.createClientToken.data.parameters,
            )
            log('createClientToken', response)
            addOutput('ClientToken', response)
            if (!response?.clientToken) throw Error('Response does not contain client token')
            const newData = props.operations.createClientInstance.data
            newData.options.authorization = response.clientToken
            props.updateOperation('createClientInstance', newData)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    const createClientInstance = async () => {
        addBusy()
        try {
            const clientInstance = await clientInterface('Client', props.operations.createClientInstance.data.options)
            log('createClientInstance', clientInstance)
            addOutput('ClientInstance', clientInstance)
            if (clientInstance) addAppContext('clientInstance', clientInstance)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={createClientToken}>
                Create Client Token
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={createClientInstance}>
                Create Client Instance
            </button>
        </>
    )
}

export default withOperations(ClientToken, _operations)
