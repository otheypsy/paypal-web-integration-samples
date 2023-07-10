import { useReducer, useState } from 'react'
import InputBody from '../../../lib/components/form/InputBody/InputBody.component.jsx'
import OutputJson from '../../../lib/components/form/OutputJson/OutputJson.component.jsx'
import OperationEdit from '../../../components/OperationEdit.component.jsx'

const _bodyReducer = {
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

const withRESTOperation = (BaseComponent, initURI = undefined, initBody = {}, initHeaders = []) => {
    const WithRESTOperation = (props) => {
        const [uri, setURI] = useState(initURI)
        const [headers, setHeaders] = useState(initHeaders)
        const [body, setBody] = useState(initBody)

        const onChangeURI = (value) => setURI(value)

        const onChangeBody = (value) => setBody(value)

        return (
            <div className="row">
                <br />
                <br />
                {contextRender()}
                <div className="col-8">
                    {Object.keys(operations).map((operationId) => (
                        <OperationEdit
                            key={operationId}
                            operationId={operationId}
                            operation={operations[operationId]}
                            onChange={updateOperations}
                        />
                    ))}
                </div>
                <div className="col-4">
                    <BaseComponent {...props} operations={operations} />
                </div>
            </div>
        )
    }
    WithRESTOperation.displayName = 'WithRESTOperation'
    return WithRESTOperation
}

export default withRESTOperation
