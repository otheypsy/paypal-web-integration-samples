import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { serverInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'

const { log, error } = createLoggers('Create.component.jsx')

const _operations = {
    createCustomer: {
        label: 'gateway.customer.create()',
        type: 'client',
        data: {
            parameters: {
                deviceData: 'DEVICE_DATA_STRING',
                paymentMethodNonce: 'PAYLOAD_NONCE',
                firstName: 'John',
                lastName: 'Doe',
                company: 'PayPal',
                email: 'email@domain.com',
                phone: '312.555.1234',
                fax: '614.555.5678',
                website: 'www.example.com',
            },
        },
    },
}

const Create = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const createCustomer = async () => {
        addBusy()
        try {
            const response = await serverInterface(
                'customer',
                'create',
                [],
                props.operations.createCustomer.data.parameters,
            )
            log('createCustomer', response)
            addOutput('CreateCustomer', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={createCustomer}>
            Create
        </button>
    )
}

export default withOperations(Create, _operations)
