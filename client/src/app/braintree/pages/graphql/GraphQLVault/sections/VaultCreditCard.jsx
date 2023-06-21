import React, { useState, useReducer, useContext } from 'react'
import { print } from 'graphql/language/printer'
import { OutputJson, InputBody } from 'pp-framework-react'
import BraintreeService from '../../../../services/BraintreeService'
import VaultMutations from '../../schema/mutations/vault.jsx'
import AppContext from '../../../../../../context/AppContext'
import BusyContext from '../../../../../../context/BusyContext'
import OutputContext from '../../../../../../context/OutputContext'

const _query = {
    reducer: (state, action) => {
        return state.map((snippet, key) => {
            if (key === action.key) return action.value
            return snippet
        })
    },

    init: (ast) => {
        return ast.definitions.map((query) => {
            return print(query)
        })
    },
}

const VaultCreditCard = () => {
    const appContext = useContext(AppContext)
    const outputContext = useContext(OutputContext)
    const busyContext = useContext(BusyContext)
    const [query, dispatchQuery] = useReducer(_query.reducer, VaultMutations.creditCard.query, _query.init)
    const [variables, setVariables] = useState(VaultMutations.creditCard.variables)

    const onChangeVariables = (value) => setVariables(value)

    const onChangeQuery = (id, value) =>
        dispatchQuery({
            key: id,
            value: value,
        })

    const process = async () => {
        const finalQuery = query.join('\n\n')
        outputContext.addOutput({
            label: 'ChargeCreditCard',
            content: await BraintreeService.graphQL.request(finalQuery, variables),
        })
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Query</h5>
                    <br />
                    {query.map((value, key) => (
                        <InputBody key={key} identifier={key} value={value} onChange={onChangeQuery} />
                    ))}
                    <br />
                    <br />
                    <h5>Variables</h5>
                    <br />
                    <OutputJson content={variables} isEditable={true} onChange={onChangeVariables} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={process}>
                        Process
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VaultCreditCard
