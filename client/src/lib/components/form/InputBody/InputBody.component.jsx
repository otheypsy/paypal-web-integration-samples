import PropTypes from 'prop-types'
import { useMemo } from 'react'
import classNames from '../Input.module.scss'

/**
 * Component for <code>textarea</code> type input.
 *
 */
const InputBody = (props) => {
    const onChange = (event) => {
        props.onChange.length === 2 ? props.onChange(props.id, event.target.value) : props.onChange(event.target.value)
    }

    const style = useMemo(() => {
        return props.rows
            ? {
                  height: 4 + parseInt(props.rows) * 1.2 + 'rem',
              }
            : {
                  height: props.height,
              }
    }, [props.height, props.rows])

    return (
        <div className="form-floating my-2">
            <textarea
                id={props.id}
                className={'form-control ' + classNames.input}
                style={style}
                placeholder="-- input here --"
                value={props.value}
                onChange={onChange}
            />
            <label className={classNames.label}>{props.label}</label>
        </div>
    )
}

InputBody.propTypes = {
    /** Identifier used as return value with onChange */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Label for the textarea */
    label: PropTypes.string.isRequired,
    /** Value of the textarea */
    value: PropTypes.string.isRequired,
    /** Callback function to handle value change */
    onChange: PropTypes.func.isRequired,
    /** CSS height of the textarea */
    height: PropTypes.string,
    /** Rows for textarea */
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InputBody.defaultProps = {
    id: null,
    height: '200px',
    rows: null,
}

export default InputBody
