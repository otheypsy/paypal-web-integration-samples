import { useReducer } from 'react'
import OperationEdit from '../../../components/OperationEdit'
import { useAppContext } from '../../../states/AppContext/appContext.hooks.jsx'

const _operationsReducer = {
    reducer: (state, action) => {
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                data: action.value,
            },
        }
    },
    init: (operations) => operations,
}

const withSDKOperations = (BaseComponent, initOperations, requiredContext = []) => {
    const WithSDKOperations = (props) => {
        const appContext = useAppContext()
        const [operations, dispatchOperations] = useReducer(
            _operationsReducer.reducer,
            initOperations,
            _operationsReducer.init,
        )

        const updateOperations = (id, value) => {
            dispatchOperations({
                id: id,
                value: value,
            })
        }

        const contextRender = () => {
            if (requiredContext.length < 1) return null
            return (
                <div className="col-12 px-2 py-4">
                    {requiredContext.map((label, key) => {
                        const color = appContext[label] ? 'bg-success text-bg-success' : 'bg-warning text-bg-warning'
                        const finalClass = 'm-1 px-3 py-2 rounded-3 app-text-regular ' + color
                        return (
                            <span key={label + key} className={finalClass}>
                                {label}
                            </span>
                        )
                    })}
                </div>
            )
        }

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
    WithSDKOperations.displayName = 'WithSDKOperations'
    return WithSDKOperations
}

export default withSDKOperations
