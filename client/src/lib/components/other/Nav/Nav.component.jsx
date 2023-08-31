import PropTypes from 'prop-types';
import classNames from './Nav.module.scss';


const Nav = (props) => {
    return (
        <ul className={'nav nav-tabs ' + classNames.nav}>
            {props.children}
        </ul>
    );
};

Nav.propTypes = {
    /** Callback function to return path of clicked link */
    onClick: PropTypes.func,
};

Nav.defaultProps = {
    onClick: () => null,
    children: []
};

export default Nav;
