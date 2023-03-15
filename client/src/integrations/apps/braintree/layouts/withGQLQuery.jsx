import React, { useReducer, useState } from 'react'
import InputBody from '../../../../lib/components/form/InputBody/InputBody.component'
import OutputJson from '../../../../lib/components/form/OutputJson/OutputJson.component'
import { print } from 'graphql/language/printer'

const _queryReducer = {
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

const withGQLQuery = (BaseComponent, initQuery, initVariables) => {
    const WithGQLQuery = (props) => {
        const [query, dispatchQuery] = useReducer(_queryReducer.reducer, initQuery, _queryReducer.init)
        const [variables, setVariables] = useState(initVariables)

        const onChangeVariables = (value) => setVariables(value)

        const onChangeQuery = (id, value) =>
            dispatchQuery({
                key: id,
                value: value,
            })

        const renderQuery = () => {
            return query.map((value, key) => {
                const rows = value.split(/\r\n|\r|\n/).length
                return <InputBody key={key} identifier={key} rows={rows} value={value} onChange={onChangeQuery} />
            })
        }

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-8">
                        <h5>Query</h5>
                        <br />
                        {renderQuery()}
                        <br />
                        <br />
                        <h5>Variables</h5>
                        <br />
                        <OutputJson content={variables} isEditable={true} onChange={onChangeVariables} />
                    </div>
                    <div className="col-4">
                        <BaseComponent {...props} query={query} variables={variables} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
    WithGQLQuery.displayName = 'WithGQLQuery'
    return WithGQLQuery
}

export default withGQLQuery
