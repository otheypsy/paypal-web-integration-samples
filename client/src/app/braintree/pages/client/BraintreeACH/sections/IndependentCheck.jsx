import { useState } from 'react'
import withOperations from '../../../../../../layouts/withOperations.hoc.jsx'
import { clientInterface } from '../../../../../../services/bt.service.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'
import { useAddOutput } from '../../../../../../states/Output/output.hooks.jsx'
import { useSetError } from '../../../../../../states/Error/error.hooks.jsx'
import { useAppContext } from '../../../../../../states/AppContext/appContext.hooks.jsx'
import createLoggers from '../../../../../../utils/logger.utils.jsx'

const { log, error } = createLoggers('IndependentCheck.component.jsx')

const _operations = {
    createACHInstance: {
        label: 'braintree.us-bank-account.create()',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE',
            },
        },
    },
    tokenizeACH: {
        label: 'braintree.us-bank-account.create()',
        type: 'client',
        data: {
            options: {
                bankDetails: {
                    accountNumber: '1000000000',
                    routingNumber: '011000015',
                    accountType: 'checking',
                    ownershipType: 'personal',
                    firstName: 'John',
                    lastName: 'Doe',
                    billingAddress: {
                        streetAddress: '2211 N 1st St',
                        locality: 'San Jose',
                        region: 'CA',
                        postalCode: '95131',
                    },
                },
                mandateText:
                    'By clicking ["Checkout"], I authorize Braintree, a service of PayPal, on behalf of OmkarDesai (i) to verify my bank account information using bank information and consumer reports and (ii) to debit my bank account.',
            },
        },
    },
}

const IndependentCheck = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const addOutput = useAddOutput()
    const setError = useSetError()
    const appContext = useAppContext()
    const [usBankAccountInstance, setUSBankAccountInstance] = useState(null)

    const createACHInstance = async () => {
        addBusy()
        try {
            const response = await clientInterface('USBankAccount', {
                ...props.operations.createACHInstance.data.options,
                client: appContext.clientInstance,
            })
            log('createACHInstance', response)
            addOutput('USBankAccountInstance', response)
            setUSBankAccountInstance(response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    const tokenizeACH = async () => {
        addBusy()
        try {
            const response = await usBankAccountInstance.tokenize(props.operations.tokenizeACH.data.options)
            log('tokenizeACH', response)
            addOutput('TokenizeUSBankAccount', response)
        } catch (e) {
            setError()
            error(e)
        }
        removeBusy()
    }

    return (
        <>
            <button className="btn btn-outline-success" onClick={createACHInstance}>
                Create ACH Instance
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={tokenizeACH}>
                Tokenize Bank Details
            </button>
        </>
    )
}

export default withOperations(IndependentCheck, _operations)
