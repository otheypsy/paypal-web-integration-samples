import PropTypes from 'prop-types'
import { useState } from 'react'
import BTClient from 'braintree-web/client'
import withSDKOperations from '../../../../layouts/withSDKOperations'
import { log, danger } from '../../../../../../services/LoggerService'
import { serverInterface } from '../../../../services/BraintreeInterface'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/BusyHooks'
import { useSetError } from '../../../../../../states/Error/ErrorHooks'
import { useAddAppContext } from '../../../../../../states/AppContext/AppContextHooks'
import { useAddOutput } from '../../../../../../states/Output/OutputHooks'

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
            log('ClientToken: createClientToken', response)
            addOutput('ClientToken', response)
            if (!response?.clientToken) throw Error('Response does not contain client token')
            setClientToken(response.clientToken)
        } catch (error) {
            setError()
            danger('ClientToken: createClientToken', error)
        }
        removeBusy()
    }

    const createClientInstance = async () => {
        addBusy()
        try {
            const clientInstance = await BTClient.create({
                ...props.operations.clientCreate.data.options,
                authorization: clientToken,
            })
            log('ClientToken: createClientInstance', clientInstance)
            addOutput('ClientInstance', clientInstance)
            if (clientInstance) addAppContext('clientInstance', clientInstance)
        } catch (error) {
            danger('ClientToken: createClientInstance', error)
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
