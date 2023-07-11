import { InputText, InputBody, OutputJson } from '../lib/components/export.jsx'

const DataEdit = (props) => {
    const onChange = (value) => props.onChange(props.dataId, value)

    switch (true) {
        case typeof props.data === 'object': {
            return (
                <OutputJson
                    theme="rjv-default"
                    name={props.dataId}
                    src={props.data}
                    isEditable={true}
                    onChange={onChange}
                />
            )
        }

        case typeof props.data === 'string' && props.data.split(/\r\n|\r|\n/).length > 1: {
            const rows = props.data.split(/\r\n|\r|\n/).length
            console.log(rows)
            return <InputBody label={props.dataId} onChange={onChange} rows={30} value={props.data} />
        }

        case typeof props.data === 'string': {
            return <InputText label={props.dataId} onChange={onChange} value={props.data} />
        }

        default:
            return null
    }
}

export default DataEdit
