import { useState, useContext } from "react";
import withSDKOperations from "../../../../layouts/withSDKOperations";
import { clientInterface, serverInterface } from "../../../../services/BraintreeInterface";
import { useAppContext } from '../../../../../../context/AppContext';
import { useOutputContext } from '../../../../../../context/OutputContext';
import { useBusyContext } from '../../../../../../context/BusyContext';

const _operations = {
    createACHInstance: {
        label: 'braintree.us-bank-account.create()',
        type: 'client',
        data: {
            options: {
                client: 'CLIENT_INSTANCE_HERE'
            }
        }
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
                        postalCode: '95131'
                    }
                },
                mandateText: 'By clicking ["Checkout"], I authorize Braintree, a service of PayPal, on behalf of OmkarDesai (i) to verify my bank account information using bank information and consumer reports and (ii) to debit my bank account.'
            }
        }
    }
};

const IndependentCheck = (props) => {

    const appContext = useAppContext();
    const busyContext = useContext(BusyContext);
    const outputContext = useContext(OutputContext);
    const [usBankAccountInstance, setUSBankAccountInstance] = useState(null);

    const createACHInstance = async () => {
        busyContext.add();
        try {
            const response = await clientInterface('USBankAccount', {
                ...props.operations.createACHInstance.data.options,
                client: appContext.get('clientInstance')
            });
            outputContext.add('USBankAccountInstance', response);
            setUSBankAccountInstance(response);
        }
        catch (error) {
            console.error(error)
        }
        busyContext.remove();
    }

    const tokenizeACH = async () => {

        const response = serverInterface(
            "customer",
            "create",
            [],
            {
            "id": "<<XPERI_TOKEN_HERE>>",
            "firstName": "Omkar",
            "lastName": "Desai",
            "creditCard": {
                "token": "<<XPERI_TOKEN_HERE>>",
                "cardholderName": "Omkar Desai",
                "number": "4217651111111119",
                "expirationMonth": "04",
                "expirationYear": "29"
            }
        });

        busyContext.add();
        try {
            const response = await usBankAccountInstance.tokenize(props.operations.tokenizeACH.data.options);
            outputContext.add('TokenizeUSBankAccount', response);
        }
        catch (error) {
            console.error(error);
            outputContext.add('TokenizeUSBankAccount', error);
        }
        busyContext.remove();
    }

    return (
        <>
            <button
                className="btn btn-outline-success"
                onClick={createACHInstance}>
                Create ACH Instance
            </button>
            <br /><br />
            <button
                className="btn btn-outline-success"
                onClick={tokenizeACH}>
                Tokenize Bank Details
            </button>
            <br /><br />
        </>
    )

}


export default withSDKOperations(IndependentCheck, _operations);
