import PropTypes from 'prop-types'
import { useMatch, useResolvedPath } from 'react-router-dom'
import Link from '../lib/components/other/Link/Link.component.jsx'

const LinkWrapper = (props) => {
    const resolved = useResolvedPath(props.to)
    const match = useMatch({ path: resolved.pathname, end: false, caseSensitive: false })

    return <Link to={props.to} isActive={!!match} label={props.label} onClick={props.onClick} />
}

LinkWrapper.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
}

export default LinkWrapper
