import { useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const _styles = {
    fontFamily: '"Space Mono", monospace',
    fontSize: '0.9rem',
    padding: '1rem',
    borderRadius: '0.25rem',
    wordBreak: 'break-all'
}

const OutputJson = (props) => {

    const onChange = useCallback((changeObj) => props.onChange(changeObj.updated_src), [props.onChange]);

    return (
        <ReactJson
            src={props.src}
            name={props.name}
            theme={props.theme}
            style={_styles}
            sortKeys={props.isSorted}
            {...(!props.onChange ? {} : {
                    onEdit: onChange,
                    onAdd: onChange,
                    onDelete: onChange
                }
            )}
            onAdd={onChange}
            onDelete={onChange}
            collapsed={props.isCollapsed}
        />
    );
};

OutputJson.propTypes = {
    /** JSON object to be rendered */
    src: PropTypes.oneOfType([ PropTypes.object, PropTypes.array]).isRequired,
    /** Root name of object */
    name: PropTypes.string,
    /** Theme of the JSON viewer */
    theme: PropTypes.string,
    /** Used to sort output attributes */
    isSorted: PropTypes.bool,
    /** Collapse object */
    isCollapsed: PropTypes.bool,
    /** Callback function to enable editing and handle value change in object */
    onChange: PropTypes.func
};

OutputJson.defaultProps = {
    name: 'root',
    theme: 'codeschool',
    isSorted: false,
    isCollapsed: false,
    onChange: undefined
};

export default OutputJson;
