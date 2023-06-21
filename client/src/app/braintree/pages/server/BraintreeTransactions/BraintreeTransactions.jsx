import React, { useContext } from 'react'
import { TabSet, Tab } from 'pp-framework-react'
import Find from './sections/Find.jsx'
import Settle from './sections/Settle.jsx'
import Sale from './sections/Sale.jsx'
import Refund from './sections/Refund.jsx'
import OutputContext from '../../../../../context/OutputContext'

const BraintreeTransactions = () => {
    const outputContext = useContext(OutputContext)
    const onOutput = (output, label) => outputContext.add(label, output)

    return (
        <React.Fragment>
            <h3>Braintree - Transactions</h3>
            <hr />
            <br />
            <TabSet>
                <Tab label="Sale">
                    <br />
                    <Sale onOutput={onOutput} />
                </Tab>
                <Tab label="Find">
                    <br />
                    <Find onOutput={onOutput} />
                </Tab>
                <Tab label="Settle">
                    <br />
                    <Settle onOutput={onOutput} />
                </Tab>
                <Tab label="Refund">
                    <br />
                    <Refund onOutput={onOutput} />
                </Tab>
            </TabSet>
        </React.Fragment>
    )
}

export default BraintreeTransactions
