import { useCallback } from 'react'
import DataEdit from './DataEdit..component.jsx'
import Card from '../lib/components/other/Card/Card.component.jsx'

const OperationEdit = (props) => {
    const onChange = useCallback((dataId, value) => {
        props.onChange(props.operationId, {
            ...props.operation.data,
            [dataId]: value,
        })
    }, [])

    return (
        <Card>
            <div className="bg-light p-2 text-muted fw-bold">
                {props.operation.type + ' --> ' + props.operation.label}
            </div>
            {Object.keys(props.operation.data).map((dataId) => (
                <DataEdit key={dataId} dataId={dataId} data={props.operation.data[dataId]} onChange={onChange} />
            ))}
            <br />
        </Card>
    )
}

export default OperationEdit
