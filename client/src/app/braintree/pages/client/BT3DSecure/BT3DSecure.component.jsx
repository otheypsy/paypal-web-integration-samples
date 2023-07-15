import { useState } from 'react'
import createLoggers from '../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../states/Error/error.hooks.jsx'
import { clientInterface } from '../../../../../services/bt.service.jsx'
import { useAppContext } from '../../../../../states/AppContext/appContext.hooks.jsx'

const { log, error } = createLoggers('BasicDataCollector.component.jsx')

const _operations = {
    create3DS: {
        label: 'braintree-web.threeDSecure.create()',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE',
                paypal: true,
            },
        },
    },
    verifyCard: {
        label: 'braintree-web.dataCollector.create()',
        type: 'client',
        data: {
            options: {
                amount: 10,
            },
        },
    },
}

const BT3DSecure = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const [threeDSecureInstance, setThreeDSecureInstance] = useState(undefined)

    const createThreeDSecureInstance = async () => {
        addBusy()
        try {
            const instance = await clientInterface('ThreeDSecure', {
                ...props.operations.create3DS.data.options,
                client: appContext.clientInstance,
            })
            log('createDataCollector', instance)
            addOutput('DataCollector', instance)
            if (instance) setThreeDSecureInstance(instance)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    const startThreeDSecure = async () => {
        addBusy()
        try {
            const response = await threeDSecureInstance.verifyCard({
                ...props.operations.verifyCard.data.options,
                nonce: appContext.payload.nonce,
                bin: appContext.payload.details.bin,
                onLookupComplete: (data, next) => {
                    log('onLookupComplete', data)
                    addOutput('OnLookupComplete', data)
                    next()
                },
            })
            log('verifyCard', response)
            addOutput('VerifyCard', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={createThreeDSecureInstance}>
                Create 3DS Instance
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={startThreeDSecure}>
                Verify Card
            </button>
        </>
    )
}

export default withOperations(BT3DSecure, _operations, ['clientInstance'])
