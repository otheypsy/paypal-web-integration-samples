import PropTypes from 'prop-types';

const Tab = () => undefined

Tab.propTypes = {
    /** Label for the tab */
    label: PropTypes.string.isRequired,
    /** Content to be rendered inside the tab */
    children: PropTypes.any
};

export default Tab;
