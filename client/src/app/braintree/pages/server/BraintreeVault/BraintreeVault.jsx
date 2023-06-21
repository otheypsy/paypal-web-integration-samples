import React, { useContext } from 'react'
import { Tab, TabSet } from 'pp-framework-react'
import Create from './sections/Create.jsx'
import Find from './sections/Find.jsx'
import Update from './sections/Update.jsx'
import Sale from './sections/Sale.jsx'
import OutputContext from '../../../../../context/OutputContext'

const cart = {
    amount: 10,
    currency: 'USD',
}

const BraintreeVault = () => {
    const outputContext = useContext(OutputContext)

    const onOutput = (output, label) => {
        outputContext.addOutput({
            label: label,
            content: output,
        })
    }

    return (
        <React.Fragment>
            <h3>Braintree - Vault</h3>
            <hr />
            <br />
            <TabSet>
                <Tab label="Create">
                    <br />
                    <Create onOutput={onOutput} />
                </Tab>
                <Tab label="Find">
                    <br />
                    <Find onOutput={onOutput} />
                </Tab>
                <Tab label="Update">
                    <br />
                    <Update onOutput={onOutput} />
                </Tab>
                <Tab label="Sale">
                    <br />
                    <Sale onOutput={onOutput} />
                </Tab>
            </TabSet>
        </React.Fragment>
    )
}

export default BraintreeVault
