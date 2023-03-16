import { useState, useContext } from 'react'
import OutputJson from '../../../../../../lib/components/form/OutputJson/OutputJson.component'
import AppService from '../../../../../services/AppService'
import BraintreeService from '../../../services/BraintreeService'
import { useAppContext } from '../../../../../context/AppContext'
import { useOutputContext } from '../../../../../context/OutputContext'
import { useBusyContext } from '../../../../../context/BusyContext'

const _options = {
    client: 'BT_CLIENT_INSTANCE',
    cardinalSDKConfig: {
        version: 2,
    },
}

const Braintree3DSecure = () => {
    const appContext = useAppContext()
    const busyContext = useContext(BusyContext)
    const outputContext = useContext(OutputContext)
    const [threeDSInstance, setThreeDSInstance] = useState(null)
    const [options, setOptions] = useState(_options)

    const createThreeDSecureInstance = async () => {
        busyContext.addBusy('bt3DSInstance')
        const [response, error] = await BraintreeService.threeDSecure.createInstance({
            ...options,
            client: braintreeContext.context.clientInstance,
        })
        response
            ? outputContext.addOutput('ThreeDSecure', response)
            : AppService.logger.error('Failed to create BT 3DS instance', error)
        setThreeDSInstance(response)
        busyContext.removeBusy('bt3DSInstance')
    }

    const startThreeDSecure = async (payload) => {
        threeDSInstance
            .verifyCard({
                amount: 10,
                nonce: payload.nonce,
                bin: payload.details.bin,
                onLookupComplete: (data, next) => {
                    AppService.logger.log('3D Secure flow started')
                    outputContext.addOutput({
                        label: '3DSLookup',
                        content: data,
                    })
                    next()
                },
            })
            .then(async (payload) => {
                outputContext.addOutput('3DSPayload', payload)
                braintreeContext.updateContext.payload(payload)
                busyContext.removeBusy('bt3DSecure')
            })
    }

    const onChangeOptions = (value) => setOptions(value)

    return (
        <>
            <h3>Braintree - 3D Secure</h3>
            <hr />
            <div className="row">
                <div className="col-8">
                    <h5>Options</h5>
                    <OutputJson src={options} isEditable={true} onChange={onChangeOptions} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={createThreeDSecureInstance}>
                        Create 3DS Instance
                    </button>
                </div>
            </div>
        </>
    )
}

export default Braintree3DSecure
