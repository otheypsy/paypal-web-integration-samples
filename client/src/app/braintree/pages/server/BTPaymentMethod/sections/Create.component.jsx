import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const { log, error } = createLoggers('Create.component.jsx')

const _operations = {
    createPaymentMethod: {
        label: 'gateway.paymentMethod.create()',
        type: 'client',
        data: {
            parameters: {
                paymentMethodNonce: 'PAYLOAD_NONCE',
                deviceData: 'DEVICE_DATA_STRING',
                customerId: '178397526',
                billingAddress: {
                    firstName: 'Jill',
                    lastName: 'Doe',
                    streetAddress: '555 Smith St.',
                    extendedAddress: '#5',
                    locality: 'Oakland',
                    region: 'CA',
                    postalCode: '12345',
                    countryCodeAlpha2: 'US',
                },
            },
        },
    },
}

const Create = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const createPaymentMethod = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'paymentMethod',
                'create',
                [],
                props.operations.createPaymentMethod.data.parameters,
            )
            log('createPaymentMethod', response)
            addOutput('CreatePaymentMethod', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createPaymentMethod}>
            Create
        </button>
    )
}

export default withOperations(Create, _operations)
