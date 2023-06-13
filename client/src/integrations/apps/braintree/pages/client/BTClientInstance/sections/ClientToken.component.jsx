import PropTypes from 'prop-types'
import { useState } from 'react'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import createLoggers from '../../../../../../../utils/logger.utils.jsx'
import { clientInterface, serverInterface } from '../../../../services/BraintreeInterface'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAddAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const { log, error } = createLoggers('ClientToken.component.jsx')

const _operations = {
    clientTokenGenerate: {
        label: 'gateway.clientToken.generate()',
        type: 'server',
        data: {
            parameters: {
                // customerId: '839327792',
                merchantAccountId: 'paypal',
            },
        },
    },
    clientCreate: {
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

    const [clientToken, setClientToken] = useState('')

    const createClientToken = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'clientToken',
                'generate',
                [],
                props.operations.clientTokenGenerate.data.parameters,
            )
            log('createClientToken', response)
            addOutput('ClientToken', response)
            if (!response?.clientToken) throw Error('Response does not contain client token')
            setClientToken(response.clientToken)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    const createClientInstance = async () => {
        addBusy()
        try {
            const clientInstance = await clientInterface('Client', {
                ...props.operations.clientCreate.data.options,
                authorization: clientToken,
            })
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

ClientToken.propTypes = {
    operations: PropTypes.object,
}

export default withSDKOperations(ClientToken, _operations)
