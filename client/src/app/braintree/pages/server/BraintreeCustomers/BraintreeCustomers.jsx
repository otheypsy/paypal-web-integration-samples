import React, { useContext } from 'react'
import { TabSet, Tab } from 'pp-framework-react'
import OutputContext from '../../../../../context/OutputContext'
import Create from './sections/Create.jsx'
import Find from './sections/Find.jsx'

const BraintreeCustomers = (props) => {
    const outputContext = useContext(OutputContext)

    const onOutput = (output, label) => {
        outputContext.addOutput({
            label: label,
            content: output,
        })
    }

    return (
        <React.Fragment>
            <h3>Braintree - Customers</h3>
            <hr />
            <br />
            <TabSet>
                <Tab label="Create">
                    <br />
                    <Create integration={'sdk'} onOutput={onOutput} />
                </Tab>
                <Tab label="Find">
                    <br />
                    <Find integration={'sdk'} onOutput={onOutput} />
                </Tab>
            </TabSet>
        </React.Fragment>
    )
}

export default BraintreeCustomers
