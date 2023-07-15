import createLoggers from '../../../../../../utils/logger.utils.jsx'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { gqlInterface } from '../../../../../../services/bt.service.jsx'

const { log, error } = createLoggers('VaultCreditCard.component.jsx')

const query = `
    mutation VaultCreditCard($myInput: VaultCreditCardInput!, $hasVerifyDetails: Boolean!) {
        vaultCreditCard(input: $myInput) {
            clientMutationId
            paymentMethod {
                id
                legacyId
                usage
            }
            ...verificationFields @include(if: $hasVerifyDetails)
        }
    }

    fragment verificationFields on Verification {
        id
        legacyId
        status
    }
`

const _operations = {
    vaultCreditCard: {
        label: 'vaultCreditCard',
        type: 'gql',
        data: {
            query: query,
            variables: {
                myInput: {
                    clientMutationId: Date.now().toString(),
                    paymentMethodId: 'fake-valid-nonce',
                    customerId: 'Y3VzdG9tZXJfMjYwODM3NTA0',
                    billingAddress: {
                        firstName: 'Jill',
                        lastName: 'Doe',
                        streetAddress: '555 Smith St.',
                        extendedAddress: '#5',
                        locality: 'Oakland',
                        region: 'CA',
                        postalCode: '12345',
                        countryCode: 'USA',
                    },
                },
                hasVerifyDetails: true,
            },
        },
    },
}

const VaultCreditCard = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()

    const vaultCreditCard = async () => {
        addBusy()
        try {
            const response = await gqlInterface(props.operations.data.query, props.operations.data.variables)
            log('vaultCreditCard', response)
            addOutput('VaultCreditCard', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <button className="btn btn-outline-success" onClick={vaultCreditCard}>
            Vault Credit Card
        </button>
    )
}

export default withOperations(VaultCreditCard, _operations)
