const TagPill = (props) => {

    const onClick = () => props.onClick(props.label);

    return (
        <button
            type="button"
            className={'btn btn-sm m-1 px-3 badge-pill btn-' + props.btnColor}
            onClick={onClick}>
            {props.label}
        </button>
    );
};

export default TagPill;
