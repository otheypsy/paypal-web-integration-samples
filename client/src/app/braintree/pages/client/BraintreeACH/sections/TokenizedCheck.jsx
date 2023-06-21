import React, { useState, useContext } from 'react'
import AppContext from '../../../../../../context/AppContext'
import BusyContext from '../../../../../../context/BusyContext'
import OutputContext from '../../../../../../context/OutputContext'
import withSDKOperations from '../../../../layouts/withSDKOperations.jsx'
import { clientInterface } from '../../../../services/BraintreeInterface.jsx'

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
                bankLogin: {
                    displayName: 'OmkarDesaiStore',
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

const TokenizedCheck = (props) => {
    const appContext = useContext(AppContext)
    const busyContext = useContext(BusyContext)
    const outputContext = useContext(OutputContext)
    const [usBankAccountInstance, setUSBankAccountInstance] = useState(null)

    const createACHInstance = async () => {
        busyContext.add()
        try {
            const response = await clientInterface('USBankAccount', {
                ...props.operations.createACHInstance.data.options,
                client: appContext.get('clientInstance'),
            })
            outputContext.add('USBankAccountInstance', response)
            setUSBankAccountInstance(response)
        } catch (error) {
            console.error(error)
        }
        busyContext.remove()
    }

    const tokenizeACH = async () => {
        busyContext.add()
        try {
            const response = await usBankAccountInstance.tokenize(props.operations.tokenizeACH.data.options)
            outputContext.add('TokenizeUSBankAccount', response)
        } catch (error) {
            outputContext.add('TokenizeUSBankAccount', error)
        }
        busyContext.remove()
    }

    return (
        <React.Fragment>
            <button className="btn btn-outline-success" onClick={createACHInstance}>
                Create ACH Instance
            </button>
            <br />
            <br />
            <button className="btn btn-outline-success" onClick={tokenizeACH}>
                Tokenize Bank Details
            </button>
            <br />
            <br />
        </React.Fragment>
    )
}

export default withSDKOperations(TokenizedCheck, _operations)
