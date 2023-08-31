import PropTypes from 'prop-types'
import classNames from './Link.module.scss'

const Link = (props) => {
    const onClick = () => props.onClick && props.onClick(props.to)
    const finalClassNames = 'mx-3 ' + classNames.link + ' ' + (props.isActive ? classNames.active : '')

    return (
        <li className={classNames.item}>
            <span className={finalClassNames} onClick={onClick} onKeyUp={onClick} role="button" tabIndex="0">
                {props.label || props.children}
            </span>
        </li>
    )
}

Link.propTypes = {
    /** Identifier for the link */
    to: PropTypes.string.isRequired,
    /** Check if link is active */
    isActive: PropTypes.bool.isRequired,
    /** Click event handler */
    onClick: PropTypes.func,
}

Link.defaultProps = {
    isActive: false,
}

export default Link
