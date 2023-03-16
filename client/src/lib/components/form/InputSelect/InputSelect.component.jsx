import classNames from '../Input.module.scss';

const InputSelect = (props) => {

    const onSelect = (event) => {
        (props.onChange.length === 2)
            ? props.onChange(props.identifier, event.target.value)
            : props.onChange(event.target.value);
    };

    return (
        <div className="form-floating my-2">
            <select
                id={props.identifier}
                aria-label="Floating label select example"
                className={'form-select pb-2 ' + classNames.input}
                value={props.value}
                onChange={onSelect}>
                {props.options.map(option => <option value={option.key} key={option.key}>{option.label}</option>)}
            </select>
            <label className={classNames.label}>{props.label}</label>
        </div>
    )
};

export default InputSelect;
