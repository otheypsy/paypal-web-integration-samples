import OutputJson from '../lib/components/form/OutputJson/OutputJson.component.jsx'
import InputText from '../lib/components/form/InputText/InputText.component.jsx'

const DataEdit = (props) => {
    const onChange = (value) => props.onChange(props.dataId, value)

    if (typeof props.data === 'object' && props.data !== null)
        return (
            <OutputJson
                theme="rjv-default"
                name={props.dataId}
                src={props.data}
                isEditable={true}
                onChange={onChange}
            />
        )
    return <InputText label={props.dataId} onChange={onChange} value={props.data} />
}

export default DataEdit
