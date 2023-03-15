import PropTypes from 'prop-types';
import classNames from '../Input.module.scss';

const InputText = (props) => {

    const onChange = (event) => {
        (props.onChange.length === 2)
            ? props.onChange(props.identifier, event.target.value)
            : props.onChange(event.target.value);
    };

    return (
        <div className="form-floating my-2">
            <input
                id={props.identifier}
                className={'form-control ' + classNames.input}
                type={props.type}
                placeholder="-- input here --"
                value={props.value}
                onChange={onChange}
            />
            <label className={classNames.label}>{props.label}</label>
        </div>
    );
};

InputText.propTypes = {
    /** Identifier used as return value with onChange */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** HTML type of the input */
    type: PropTypes.oneOf(['text','password','datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),
    /** Label for the text input */
    label: PropTypes.string,
    /** Value of the text input */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /** Callback function to handle value change */
    onChange: PropTypes.func.isRequired
};

InputText.defaultProps = {
    identifier: null,
    type: 'text'
};

export default InputText;
